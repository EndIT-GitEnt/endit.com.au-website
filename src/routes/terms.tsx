import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const APP_LINKS = [
  { href: "/apps/pocket-key-manager/terms", name: "Pocket Key Manager" },
  { href: "/apps/mini-rent-ledger/terms", name: "Mini Rent Ledger" },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — End iT" },
      {
        name: "description",
        content: "Select an app to view its terms of use.",
      },
      { property: "og:title", content: "Terms of Use — End iT" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/terms" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/terms" }],
  }),
  component: TermsIndexPage,
});

function TermsIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 border-b border-[#1e1e1e] pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight">Terms of Use</h1>
          <p className="mt-3 text-base text-[#f5f5f5]/60">
            Select an app to view its terms of use.
          </p>
        </div>
        <div className="space-y-4">
          {APP_LINKS.map(({ href, name }) => (
            <a
              key={href}
              href={href}
              className="group flex items-center justify-between rounded border border-[#1e1e1e] bg-[#111] p-5 transition-colors hover:border-[#fbbf24]/40"
            >
              <div>
                <p className="font-semibold text-[#f5f5f5] transition-colors group-hover:text-[#fbbf24]">
                  {name}
                </p>
                <p className="mt-1 text-sm text-[#f5f5f5]/55">Terms of Use</p>
              </div>
              <span
                aria-hidden="true"
                className="text-lg text-[#fbbf24]/50 transition-colors group-hover:text-[#fbbf24]"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
