import { createFileRoute } from "@tanstack/react-router";
import { AppCard } from "../../components/AppCard";
import { miniRentLedger } from "../../lib/mini-rent-ledger";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";

export const Route = createFileRoute("/apps/")({
  head: () => ({
    meta: [
      { title: "Apps — End iT" },
      {
        name: "description",
        content:
          "Explore End iT's offline-first mobile apps, Pocket Key Manager and Mini Rent Ledger.",
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
              <AppCard
                href="/apps/pocket-key-manager"
                name="Pocket Key Manager"
                icon="/assets/app/pocket_key_manager/web/icon-192.png"
                iconAlt="Pocket Key Manager icon"
                description="Offline-first mobile app for managing physical keys across properties, workplaces, facilities, mining, industrial sites and organisations."
              />
              <AppCard {...miniRentLedger} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
