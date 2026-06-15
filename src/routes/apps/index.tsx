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
          "End iT apps. Pocket Key Manager is an offline-first mobile app for managing physical keys for properties, workplaces, facilities teams, landlords, and organisations.",
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
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#f5f5f5]/60">
            Practical, privacy-conscious mobile software for real operational problems.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/apps/pocket-key-manager"
            className="group overflow-hidden rounded border border-[#1e1e1e] bg-[#111] p-6 transition-colors hover:border-[#fbbf24]/40"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <img
                src="/assets/app/pocket_key_manager/web/icon-192.png"
                alt="Pocket Key Manager icon"
                className="h-14 w-14 rounded-xl object-contain"
              />
              <span className="mt-1 rounded-full bg-[#fbbf24]/10 px-2.5 py-1 text-xs font-semibold text-[#fbbf24]">
                Coming soon
              </span>
            </div>
            <h2 className="mb-2 text-base font-bold text-[#f5f5f5] transition-colors group-hover:text-[#fbbf24]">
              Pocket Key Manager
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#f5f5f5]/55">
              Offline-first physical key management for properties, workplaces, facilities
              teams, landlords, and organisations.
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {["Android", "iOS"].map((platform) => (
                <span
                  key={platform}
                  className="rounded border border-[#2a2a2a] px-2 py-0.5 text-xs text-[#f5f5f5]/35"
                >
                  {platform}
                </span>
              ))}
            </div>
            <p className="text-xs font-semibold text-[#fbbf24]/60 transition-colors group-hover:text-[#fbbf24]">
              View app details →
            </p>
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
