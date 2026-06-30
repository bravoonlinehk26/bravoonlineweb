export const metadata = {
  title: "Google AdMob Verification",
}

export default function AdMobVerification() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Google AdMob Verification
        </h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Developer Website</h2>
            <a
              href="https://bravoonline.hk"
              className="text-primary hover:underline text-lg"
            >
              https://bravoonline.hk
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">app-ads.txt</h2>
            <a
              href="https://bravoonline.hk/app-ads.txt"
              className="text-primary hover:underline text-lg"
            >
              https://bravoonline.hk/app-ads.txt
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Status</h2>
            <p className="text-lg text-green-600 font-medium">
              ✓ Ready for AdMob Verification
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
