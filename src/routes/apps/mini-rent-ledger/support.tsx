import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";

const title = "Support — Mini Rent Ledger — End iT";
const description = "Get help with Mini Rent Ledger, including manual backups and data recovery.";
const canonicalUrl = "https://endit.com.au/apps/mini-rent-ledger/support";
const supportEmail = "support@endit.com.au";

export const Route = createFileRoute("/apps/mini-rent-ledger/support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: MiniRentLedgerSupportPage,
});

function MiniRentLedgerSupportPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 border-b border-[#1e1e1e] pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            End iT
          </p>
          <h1 className="text-4xl font-black tracking-tight">Support</h1>
          <p className="mt-3 text-base text-[#f5f5f5]/60">Mini Rent Ledger</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">How to get support</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#f5f5f5]/70">
              Email End iT for help with Mini Rent Ledger.
            </p>
            <a
              href={"mailto:" + supportEmail}
              className="inline-flex items-center gap-2 rounded border border-[#fbbf24] bg-[#fbbf24] px-7 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#f59e0b]"
            >
              {supportEmail}
            </a>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">
              What to include in your support request
            </h2>
            <ul className="ml-4 list-disc space-y-2 text-sm leading-relaxed text-[#f5f5f5]/70">
              <li>The app name, Mini Rent Ledger, and its version and build if available.</li>
              <li>Your device model and Android or iOS version.</li>
              <li>The steps you took, what you expected, and what happened.</li>
              <li>A screenshot with private information removed, if it helps explain the issue.</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/70">
              If you can open the app, go to <strong>More → Support Diagnostics</strong>. Review the
              local report before choosing <strong>Copy diagnostics</strong> and pasting it into
              your email. The report includes the version, build, record counts and technical
              details about any integrity issues. It omits names, contact details, addresses,
              amounts and notes.
            </p>
          </section>

          <section className="rounded border border-[#2a2a2a] bg-[#111] p-6">
            <h2 className="mb-3 text-base font-bold text-[#fbbf24]">Protect your rental data</h2>
            <p className="text-sm leading-relaxed text-[#f5f5f5]/70">
              Keep tenant details, property addresses, payment information and backup files out of
              your support email. Backup files contain readable rental and contact information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">Backups and data recovery</h2>
            <div className="space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">
              <p>
                Mini Rent Ledger stores the ledger on your device. End iT cannot access or recover
                it remotely.
              </p>
              <p>
                To save a manual backup, open <strong>More → Settings → Ledger backup</strong> and
                choose <strong>Create backup</strong>. Keep the <code>.mrlbackup</code> file in a
                secure location you can access if you lose the device.
              </p>
              <p>
                To recover from a compatible file, choose <strong>Restore backup</strong> in
                Settings or during setup. Restoring replaces the full ledger. If the device already
                has a ledger, the app asks you to save a safety copy and confirm the replacement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">Contact</h2>
            <div className="rounded border border-[#1e1e1e] bg-[#111] p-5">
              <p className="font-semibold text-[#f5f5f5]">End iT</p>
              <p className="mt-2 text-sm text-[#f5f5f5]/70">
                <a
                  href={"mailto:" + supportEmail}
                  className="text-[#fbbf24] underline underline-offset-4 hover:text-[#f59e0b]"
                >
                  {supportEmail}
                </a>
              </p>
              <p className="mt-1 text-sm text-[#f5f5f5]/55">
                PO Box 1188, South Perth WA 6151, Australia
              </p>
              <p className="mt-1 text-sm text-[#f5f5f5]/55">
                <a href="/" className="underline underline-offset-4 hover:text-[#fbbf24]">
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
