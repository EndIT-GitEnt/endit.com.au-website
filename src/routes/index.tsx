import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "End iT — Practical software for serious operational work" },
      {
        name: "description",
        content:
          "End iT builds focused, privacy-conscious apps for real workplace problems. Pocket Key Manager is an offline-first key management app for mining and industrial organisations.",
      },
      {
        property: "og:title",
        content: "End iT — Practical software for serious operational work",
      },
      {
        property: "og:description",
        content:
          "End iT builds focused, privacy-conscious apps for real workplace problems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbbf24] opacity-[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            End iT
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Practical software for{" "}
            <span className="text-[#fbbf24]">serious operational work.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/70">
            End iT builds focused, privacy-conscious apps for real workplace problems.
          </p>
        </div>
      </section>

      {/* ── Current Apps ── */}
      <section className="border-t border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              Apps
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Current apps</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/apps/pocket-key-manager"
              className="group rounded border border-[#1e1e1e] bg-[#111] p-6 transition-colors hover:border-[#fbbf24]/40"
            >
              <div className="mb-4 h-0.5 w-8 rounded-full bg-[#fbbf24]" />
              <h3 className="mb-2 text-base font-bold text-[#f5f5f5] group-hover:text-[#fbbf24] transition-colors">
                Pocket Key Manager
              </h3>
              <p className="text-sm leading-relaxed text-[#f5f5f5]/55">
                Offline-first key management for mining and industrial organisations.
              </p>
              <p className="mt-4 text-xs font-semibold text-[#fbbf24]/60 group-hover:text-[#fbbf24] transition-colors">
                View app details →
              </p>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
