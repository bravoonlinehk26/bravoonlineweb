import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const CONTACT_FILE = path.join(process.cwd(), "data", "contact.json")

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Read existing contact submissions from JSON file
async function readContactSubmissions(): Promise<any[]> {
  try {
    await ensureDataDirectory()
    const fileContent = await fs.readFile(CONTACT_FILE, "utf-8")
    const data = JSON.parse(fileContent)
    return data.submissions || []
  } catch (error) {
    // File doesn't exist yet, return empty array
    return []
  }
}

// Write contact submission to JSON file
async function writeContactSubmission(submission: any): Promise<void> {
  await ensureDataDirectory()
  const existingSubmissions = await readContactSubmissions()
  const updatedSubmissions = [...existingSubmissions, submission]
  const data = {
    submissions: updatedSubmissions,
    lastUpdated: new Date().toISOString(),
  }
  await fs.writeFile(CONTACT_FILE, JSON.stringify(data, null, 2), "utf-8")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, budget, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
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

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      company: company || null,
      budget: budget || null,
      message,
      submittedAt: new Date().toISOString(),
    }

    // Store submission in JSON file
    await writeContactSubmission(submission)

    // Log for debugging
    console.log("Contact form submission saved:", {
      id: submission.id,
      name,
      email,
      submittedAt: submission.submittedAt,
    })

    // Note: To actually send emails, you can configure an email service here
    // Examples:
    // - Resend: https://resend.com (npm install resend)
    // - SendGrid: https://sendgrid.com (npm install @sendgrid/mail)
    // - Nodemailer: https://nodemailer.com (npm install nodemailer)
    //
    // For now, submissions are stored in data/contact.json
    // You can set up a cron job or webhook to process these and send emails

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}

