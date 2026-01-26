export const metadata = {
  title: "Privacy Policy",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-muted-foreground text-lg">
            Last updated: January 2026
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            This Privacy Policy describes how the mobile apps handles user information.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App does not collect any personal data.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not collect, store, or transmit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Names</li>
              <li>Email addresses</li>
              <li>Phone numbers</li>
              <li>Location data</li>
              <li>Device identifiers</li>
              <li>Advertising IDs</li>
              <li>Camera, microphone, or contact data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Local Data Storage
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App may store the following information only on the user&apos;s device:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Last entered calculation values (e.g., principal, interest rate, duration)</li>
              <li>App display or preference settings</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Is stored locally on the device only</li>
              <li>Is not transmitted over the internet</li>
              <li>Is not shared with any third party</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Children&apos;s Privacy (Under 13)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App is suitable for users under the age of 13.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>No personal data is requested or collected</li>
              <li>No behavioral tracking or profiling is performed</li>
              <li>No external services are used</li>
              <li>The App complies with COPPA and Google Play Families &amp; User Data policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The App does not use:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Advertising SDKs</li>
              <li>Analytics services</li>
              <li>External servers</li>
              <li>Cloud-based data storage</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If third-party services are added in the future, this Privacy Policy will be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Because the App does not transmit or collect personal data, the risk of data leakage is minimized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy may be updated from time to time.
              Any significant changes will be communicated through the app or store listing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Email:{" "}
              <a
                href="mailto:info@bravoonline.hk"
                className="text-primary hover:underline"
              >
                info@bravoonline.hk
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. Consent
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By using this App, you agree to this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

