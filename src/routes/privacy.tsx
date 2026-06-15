import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policies — End iT" },
      {
        name: "description",
        content: "Select an app to view its privacy policy.",
      },
      { property: "og:title", content: "Privacy Policies — End iT" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/privacy" }],
  }),
  component: PrivacyIndexPage,
});

function PrivacyIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 border-b border-[#1e1e1e] pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight">Privacy Policies</h1>
          <p className="mt-3 text-base text-[#f5f5f5]/60">
            Select an app to view its privacy policy.
          </p>
        </div>
        <div className="space-y-4">
          <a
            href="/apps/pocket-key-manager/privacy"
            className="group flex items-center justify-between rounded border border-[#1e1e1e] bg-[#111] p-5 transition-colors hover:border-[#fbbf24]/40"
          >
            <div>
              <p className="font-semibold text-[#f5f5f5] group-hover:text-[#fbbf24] transition-colors">
                Pocket Key Manager
              </p>
              <p className="mt-1 text-sm text-[#f5f5f5]/50">Privacy Policy</p>
            </div>
            <span className="text-[#fbbf24]/50 group-hover:text-[#fbbf24] transition-colors text-lg">
              →
            </span>
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
