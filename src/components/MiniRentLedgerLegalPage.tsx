import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export const legalLinkClass = "text-[#fbbf24] underline underline-offset-4 hover:text-[#f59e0b]";

type LegalPageProps = {
  title: string;
  related: { href: string; label: string };
  children: ReactNode;
};

export function MiniRentLedgerLegalPage({ title, related, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10 border-b border-[#1e1e1e] pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight">{title}</h1>
          <p className="mt-3 text-base text-[#f5f5f5]/75">Mini Rent Ledger</p>
          <p className="mt-3 text-sm text-[#f5f5f5]/65">
            Last updated <time dateTime="2026-11-28">28 November 2026</time>
          </p>
          <address className="mt-3 space-y-1 text-sm leading-relaxed text-[#f5f5f5]/65 not-italic">
            <p>End iT · ABN 62 445 871 758</p>
            <p>PO Box 1188, South Perth WA 6151, Australia</p>
            <p>
              <a className={legalLinkClass} href="mailto:support@endit.com.au">
                support@endit.com.au
              </a>
            </p>
          </address>
        </header>

        <article className="space-y-9 text-base leading-relaxed text-[#f5f5f5]/75">
          {children}
        </article>

        <nav
          aria-label="Mini Rent Ledger related links"
          className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#1e1e1e] pt-6 text-sm"
        >
          <a className={legalLinkClass} href={related.href}>
            {related.label}
          </a>
          <a className={legalLinkClass} href="/apps/mini-rent-ledger/support">
            Support
          </a>
          <a className={legalLinkClass} href="/apps/mini-rent-ledger">
            Mini Rent Ledger
          </a>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-[#f5f5f5]">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
