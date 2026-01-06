import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const NEWSLETTER_FILE = path.join(process.cwd(), "data", "newsletter.json")

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Read existing emails from JSON file
async function readNewsletterEmails(): Promise<string[]> {
  try {
    await ensureDataDirectory()
    const fileContent = await fs.readFile(NEWSLETTER_FILE, "utf-8")
    const data = JSON.parse(fileContent)
    return data.emails || []
  } catch (error) {
    // File doesn't exist yet, return empty array
    return []
  }
}

// Write emails to JSON file
async function writeNewsletterEmails(emails: string[]): Promise<void> {
  await ensureDataDirectory()
  const data = { emails, lastUpdated: new Date().toISOString() }
  await fs.writeFile(NEWSLETTER_FILE, JSON.stringify(data, null, 2), "utf-8")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Read existing emails
    const existingEmails = await readNewsletterEmails()

    // Check if email already exists
    if (existingEmails.includes(email.toLowerCase())) {
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 200 }
      )
    }

    // Add new email (store in lowercase for consistency)
    const updatedEmails = [...existingEmails, email.toLowerCase()]

    // Write to JSON file
    await writeNewsletterEmails(updatedEmails)

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve all emails (for admin purposes)
export async function GET() {
  try {
    const emails = await readNewsletterEmails()
    return NextResponse.json({ emails, count: emails.length }, { status: 200 })
  } catch (error) {
    console.error("Error reading newsletter emails:", error)
    return NextResponse.json(
      { error: "Failed to read newsletter emails" },
      { status: 500 }
    )
  }
}

