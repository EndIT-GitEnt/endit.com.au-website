import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";

export const Route = createFileRoute("/apps/")({
  head: () => ({
    meta: [
      { title: "Apps — End iT" },
      {
        name: "description",
        content:
          "End iT apps. Pocket Key Manager is an offline-first mobile app for managing physical keys in mining and industrial organisations.",
      },
      { property: "og:title", content: "Apps — End iT" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/apps" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/apps" }],
  }),
  component: AppsIndexPage,
});

function AppsIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            End iT
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Apps</h1>
          <p className="mt-4 text-base leading-relaxed text-[#f5f5f5]/60">
            Focused, privacy-conscious apps for real workplace problems.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/apps/pocket-key-manager"
            className="group rounded border border-[#1e1e1e] bg-[#111] p-6 transition-colors hover:border-[#fbbf24]/40"
          >
            <div className="mb-4 h-0.5 w-8 rounded-full bg-[#fbbf24]" />
            <h2 className="mb-2 text-base font-bold text-[#f5f5f5] group-hover:text-[#fbbf24] transition-colors">
              Pocket Key Manager
            </h2>
            <p className="text-sm leading-relaxed text-[#f5f5f5]/55">
              Offline-first mobile app for managing physical keys in mining and industrial
              organisations.
            </p>
            <p className="mt-3 text-xs text-[#f5f5f5]/35">
              Preparing for Android and iOS release.
            </p>
            <p className="mt-4 text-xs font-semibold text-[#fbbf24]/60 group-hover:text-[#fbbf24] transition-colors">
              View app details →
            </p>
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
