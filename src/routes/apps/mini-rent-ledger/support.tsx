import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";

const title = "Support — Mini Rent Ledger — End iT";
const description = "Get help with Mini Rent Ledger, including manual backups and data recovery.";
const canonicalUrl = "https://endit.com.au/apps/mini-rent-ledger/support";
const supportEmail = "support@endit.com.au";
const supportAddress = `mailto:${supportEmail}`;
const supportLinkClass = "text-[#fbbf24] underline underline-offset-4 hover:text-[#f59e0b]";

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
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">How to Get Support</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#f5f5f5]/70">
              For help with Mini Rent Ledger, contact End iT by email. For release availability, see
              the{" "}
              <a href="/apps/mini-rent-ledger" className={supportLinkClass}>
                Mini Rent Ledger app page
              </a>
              .
            </p>
            <a
              href={supportAddress}
              className="inline-flex items-center gap-2 rounded border border-[#fbbf24] bg-[#fbbf24] px-7 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#f59e0b]"
            >
              {supportEmail}
            </a>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">
              What to Include in Your Support Request
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#f5f5f5]/70">
              Include the following details in your email so we can understand the issue.
            </p>
            <ol className="ml-4 list-decimal space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">
              <li>
                <strong className="text-[#f5f5f5]">App name</strong> — Mini Rent Ledger
              </li>
              <li>
                <strong className="text-[#f5f5f5]">App version and build</strong> — shown in Support
                Diagnostics, if available.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Device and operating system</strong> — include
                the model and its Android or iOS version.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">What happened</strong> — describe what you
                expected and what happened instead.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Steps to reproduce the issue</strong> — list the
                actions that led to it, if you know them.
              </li>
              <li>
                <strong className="text-[#f5f5f5]">Screenshots</strong> — share only if helpful and
                after removing private information.
              </li>
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-[#f5f5f5]/70">
              To include an optional diagnostics report, open{" "}
              <strong>More → Support Diagnostics</strong>. Review the local preview, choose{" "}
              <strong>Copy diagnostics</strong>, then paste the report into your email. The report
              includes the app version, build, record counts and technical details about any
              integrity issues. It omits names, contact details, addresses, amounts and notes.
            </p>
          </section>

          <section className="rounded border border-[#2a2a2a] bg-[#111] p-6">
            <h2 className="mb-3 text-base font-bold text-[#fbbf24]">
              Privacy Note — Backup Files and Sensitive Data
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">
              <p>
                Keep tenant details, property addresses, payment information and backup files out of
                your support email. A backup file contains readable rental and contact information.
              </p>
              <p>
                If you think a file is needed, describe the issue by email first. See the{" "}
                <a href="/apps/mini-rent-ledger/privacy" className={supportLinkClass}>
                  Privacy Policy
                </a>{" "}
                for how End iT handles information you choose to share.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">Data Recovery</h2>
            <div className="space-y-4 text-sm leading-relaxed text-[#f5f5f5]/70">
              <p>
                Mini Rent Ledger works offline and stores the ledger on your device. End iT cannot
                remotely access or recover it. Keep manual backups in a secure location you can
                reach if you lose or replace your device.
              </p>
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#f5f5f5]">How do I create a backup?</h3>
                <p>
                  Open <strong>More → Settings → Ledger backup</strong> and choose{" "}
                  <strong>Create backup</strong>. Choose where to save the <code>.mrlbackup</code>{" "}
                  file. Choose a local file location to work offline.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#f5f5f5]">
                  How do I restore a backup?
                </h3>
                <p>
                  Choose <strong>Restore backup</strong> in Settings or during setup, select a
                  compatible file, and review the preview. Restoring replaces the full ledger. If
                  the device already has a ledger, save the safety copy when prompted before
                  confirming the replacement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[#f5f5f5]">Contact</h2>
            <div className="rounded border border-[#1e1e1e] bg-[#111] p-5">
              <p className="font-semibold text-[#f5f5f5]">End iT</p>
              <p className="mt-2 text-sm text-[#f5f5f5]/70">
                <a href={supportAddress} className={supportLinkClass}>
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
