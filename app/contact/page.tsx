import { Contact as ContactSection } from "@/components/sections/Contact"

export const metadata = {
  title: "Contact Us",
}

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help bring
            your vision to life.
          </p>
        </div>
        <ContactSection />
      </div>
    </div>
  )
}

