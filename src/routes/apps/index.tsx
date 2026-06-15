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
          "End iT apps. Pocket Key Manager is an offline-first mobile app for managing physical keys across properties, workplaces, facilities, mining, industrial sites and organisations.",
      },
      { property: "og:title", content: "Apps — End iT" },
      {
        property: "og:description",
        content:
          "End iT builds practical, privacy-conscious mobile software for real operational problems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/apps" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/apps" }],
  }),
  component: AppsIndexPage,
});

// ── Icons ──────────────────────────────────────────────────────────────────────

function AndroidIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.38.77 3.2.77.81 0 2.35-.95 3.96-.8 1.63.1 2.86.74 3.66 1.92-3.39 1.97-2.83 6.47.83 7.87-.74 2.06-1.71 4.09-3.65 5.12zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

function AppsIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />

      <main>
        {/* ── Header ── */}
        <section className="relative overflow-hidden border-b border-[#1a1a1a] px-6 py-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-[40vmin] w-[40vmin] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#fbbf24] opacity-[0.04] blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              End iT
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Apps</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#f5f5f5]/60">
              Practical, privacy-conscious mobile software for real operational problems.
            </p>
          </div>
        </section>

        {/* ── Apps Grid ── */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/apps/pocket-key-manager"
                className="group overflow-hidden rounded border border-[#1e1e1e] bg-[#111] transition-colors hover:border-[#fbbf24]/40"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/30 to-[#fbbf24]/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="p-6">
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
                    Offline-first mobile app for managing physical keys across properties,
                    workplaces, facilities, mining, industrial sites and organisations.
                  </p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded border border-[#2a2a2a] px-2 py-0.5 text-xs text-[#f5f5f5]/35">
                      <AndroidIcon />
                      Android
                    </span>
                    <span className="inline-flex items-center gap-1 rounded border border-[#2a2a2a] px-2 py-0.5 text-xs text-[#f5f5f5]/35">
                      <AppleIcon />
                      iOS
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#fbbf24]/60 transition-colors group-hover:text-[#fbbf24]">
                    View app details →
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
