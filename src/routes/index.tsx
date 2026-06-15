import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "End iT — Offline-first apps for real-world operational control" },
      {
        name: "description",
        content:
          "End iT builds practical mobile software for properties, workplaces, facilities, mining and industrial teams, landlords, and organisations that need reliable tools without unnecessary cloud dependency.",
      },
      {
        property: "og:title",
        content: "End iT — Offline-first apps for real-world operational control",
      },
      {
        property: "og:description",
        content:
          "End iT builds practical mobile software for properties, workplaces, facilities, mining and industrial teams, landlords, and organisations.",
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

      {/* ── Hero Image ── */}
      <section className="relative overflow-hidden">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/brand/website_headers/endit_header_tablet_dark_1536x864.png"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/brand/website_headers/endit_header_desktop_dark_1920x600.png"
          />
          <img
            src="/assets/brand/website_headers/endit_header_desktop_dark_1920x600.png"
            alt="End iT"
            className="w-full object-cover object-center"
            style={{ maxHeight: "420px" }}
          />
        </picture>
      </section>

      {/* ── Tagline ── */}
      <section className="relative overflow-hidden px-6 py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbbf24] opacity-[0.04] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Offline-first apps for{" "}
            <span className="text-[#fbbf24]">real-world operational control.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/70">
            End iT builds practical mobile software for properties, workplaces,
            facilities, mining and industrial teams, landlords, and organisations
            that need reliable tools without unnecessary cloud dependency.
          </p>
        </div>
      </section>

      {/* ── Featured App ── */}
      <section className="border-t border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              Apps
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Our apps</h2>
          </div>

          <div className="overflow-hidden rounded border border-[#1e1e1e] bg-[#111]">
            <div className="p-8 sm:p-10 lg:flex lg:items-start lg:gap-10">
              <div className="mb-7 shrink-0 lg:mb-0">
                <img
                  src="/assets/app/pocket_key_manager/web/icon-192.png"
                  alt="Pocket Key Manager icon"
                  className="h-20 w-20 rounded-2xl object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-black tracking-tight text-[#f5f5f5]">
                    Pocket Key Manager
                  </h3>
                  <span className="rounded-full bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold text-[#fbbf24]">
                    Coming soon
                  </span>
                </div>
                <p className="mb-5 text-base leading-relaxed text-[#f5f5f5]/70">
                  Offline-first physical key management for properties, workplaces, facilities
                  teams, landlords, and organisations. Track key copies, issue and return
                  workflows, access profiles, and audit logs — entirely on-device.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {["Android", "iOS", "Offline-first", "No End iT backend"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-[#2a2a2a] px-3 py-1 text-xs text-[#f5f5f5]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="/apps/pocket-key-manager"
                  className="inline-flex items-center gap-2 rounded border border-[#fbbf24]/40 bg-[#fbbf24]/5 px-5 py-2.5 text-sm font-semibold text-[#fbbf24] transition-colors hover:bg-[#fbbf24]/10"
                >
                  View app details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
