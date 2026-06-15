import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — End iT" },
      {
        name: "description",
        content: "Select an app for support. Contact support@endit.com.au for help.",
      },
      { property: "og:title", content: "Support — End iT" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/support" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/support" }],
  }),
  component: SupportIndexPage,
});

function SupportIndexPage() {
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
            Select an app for support.
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="/apps/pocket-key-manager/support"
            className="group flex items-center justify-between rounded border border-[#1e1e1e] bg-[#111] p-5 transition-colors hover:border-[#fbbf24]/40"
          >
            <div>
              <p className="font-semibold text-[#f5f5f5] group-hover:text-[#fbbf24] transition-colors">
                Pocket Key Manager
              </p>
              <p className="mt-1 text-sm text-[#f5f5f5]/50">Support</p>
            </div>
            <span className="text-[#fbbf24]/50 group-hover:text-[#fbbf24] transition-colors text-lg">
              →
            </span>
          </a>
        </div>
        <div className="mt-10 rounded border border-[#1e1e1e] bg-[#111] p-5">
          <p className="text-sm font-semibold text-[#f5f5f5]">General contact</p>
          <p className="mt-2 text-sm text-[#f5f5f5]/55">
            <a
              href="mailto:support@endit.com.au"
              className="text-[#fbbf24] underline underline-offset-4 hover:text-[#f59e0b]"
            >
              support@endit.com.au
            </a>
          </p>
          <p className="mt-1 text-sm text-[#f5f5f5]/40">
            PO Box 1188, South Perth WA 6151, Australia
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
