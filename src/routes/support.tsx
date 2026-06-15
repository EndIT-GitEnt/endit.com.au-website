import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — End iT" },
      {
        name: "description",
        content:
          "Get support for Pocket Key Manager by End iT. Contact support@endit.com.au for help with the app.",
      },
      { property: "og:title", content: "Support — End iT" },
      {
        property: "og:description",
        content: "Get support for Pocket Key Manager by End iT.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/support" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 border-b border-[#1e1e1e] pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            End iT
          </p>
          <h1 className="text-4xl font-black tracking-tight">Support</h1>
          <p className="mt-3 text-base text-[#f5f5f5]/60">
            Support for Pocket Key Manager
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">How to Get Support</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#f5f5f5]/70">
              For help with Pocket Key Manager, contact us by email. We read and respond to all
              messages as promptly as possible.
            </p>
            <a
              href="mailto:support@endit.com.au"
              className="inline-flex items-center gap-2 rounded border border-[#fbbf24] bg-[#fbbf24] px-7 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#f59e0b]"
            >
              support@endit.com.au
            </a>
          </section>

          {/* What to include */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">
              What to Include in Your Support Request
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#f5f5f5]/70">
              To help us assist you as quickly as possible, please include the following in your
              email:
            </p>
            <ol className="ml-4 list-decimal space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">
              <li>
                <span className="font-semibold text-[#f5f5f5]">App version</span> — visible in
                the app's settings or about screen
              </li>
              <li>
                <span className="font-semibold text-[#f5f5f5]">
                  Device type and operating system version
                </span>{" "}
                — for example: Samsung Galaxy S23 running Android 14, or iPhone 14 running iOS 17
              </li>
              <li>
                <span className="font-semibold text-[#f5f5f5]">
                  A clear description of the issue
                </span>{" "}
                — what you expected to happen, and what actually happened
              </li>
              <li>
                <span className="font-semibold text-[#f5f5f5]">
                  Steps to reproduce the problem
                </span>
                , if possible — the specific actions that lead to the issue
              </li>
            </ol>
          </section>

          {/* Privacy note */}
          <section className="rounded border border-[#2a2a2a] bg-[#111] p-6">
            <h2 className="mb-3 text-base font-bold text-[#fbbf24]">
              Privacy Note — Backup Files and Sensitive Data
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">
              <p>
                Please <strong className="text-[#f5f5f5]">do not send backup files</strong> or
                sensitive operational data from the app in your support email unless you have a
                specific reason and have assessed the sensitivity of the information.
              </p>
              <p>
                Backup files may contain sensitive information about your key holders, keys,
                locks, bookings, and operational records. Sharing this data by email is rarely
                necessary for a support request.
              </p>
              <p>
                If you believe sharing a backup file is necessary for your support request, please
                discuss this with us by email first.
              </p>
            </div>
          </section>

          {/* Data recovery */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">
              Data Recovery
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">
              <p>
                Pocket Key Manager stores all data locally on your device. End iT does not
                operate a backend server for the app and cannot remotely access, view, or recover
                your app data.
              </p>
              <p>
                If you experience data loss due to device failure, accidental deletion, or any
                other reason, the only recovery option is a backup file created using the app's
                built-in backup and restore feature.
              </p>
              <p>
                For this reason, we strongly recommend creating regular backups using the app and
                storing those backup files in a secure location separate from your device.
              </p>
            </div>
          </section>

          {/* Contact card */}
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">Contact</h2>
            <div className="rounded border border-[#1e1e1e] bg-[#111] p-5">
              <p className="font-semibold text-[#f5f5f5]">End iT</p>
              <p className="mt-2 text-sm text-[#f5f5f5]/70">
                <a
                  href="mailto:support@endit.com.au"
                  className="text-[#fbbf24] underline underline-offset-4 hover:text-[#f59e0b]"
                >
                  support@endit.com.au
                </a>
              </p>
              <p className="mt-1 text-sm text-[#f5f5f5]/55">
                PO Box 1188, South Perth WA 6151, Australia
              </p>
              <p className="mt-1 text-sm text-[#f5f5f5]/55">
                <a
                  href="https://endit.com.au"
                  className="underline underline-offset-4 hover:text-[#fbbf24]"
                >
                  https://endit.com.au
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
