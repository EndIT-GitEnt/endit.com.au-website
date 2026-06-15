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
          "End iT builds practical mobile software for properties, workplaces, facilities, mining, industrial teams, landlords, and organisations that need reliable tools without unnecessary cloud dependency.",
      },
      {
        property: "og:title",
        content: "End iT — Offline-first apps for real-world operational control",
      },
      {
        property: "og:description",
        content:
          "End iT builds practical mobile software for properties, workplaces, facilities, mining, industrial teams, landlords, and organisations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au" }],
  }),
  component: HomePage,
});

// ── Icons ──────────────────────────────────────────────────────────────────────

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function WifiOffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="2" y1="2" x2="22" y2="22" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
      <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
      <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
      <path d="M5 13a10 10 0 0 1 5.24-2.76" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

function DatabaseOffIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 7.5 2.88" />
      <path d="M21 5v4" />
      <path d="M3 12a9 3 0 0 0 6.36 2.84" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

const PRINCIPLES = [
  {
    Icon: WifiOffIcon,
    title: "Offline-first",
    desc: "Apps that work reliably without internet connectivity or cloud dependency.",
  },
  {
    Icon: DatabaseOffIcon,
    title: "No End iT backend",
    desc: "We do not operate backend servers that handle your operational app data.",
  },
  {
    Icon: LockIcon,
    title: "Your data, your control",
    desc: "Operational data stays on your device. Backups are user-controlled files.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

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
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbbf24] opacity-[0.04] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Offline-first apps for{" "}
            <span className="text-[#fbbf24]">real-world operational control.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/70">
            End iT builds practical mobile software for properties, workplaces,
            facilities, mining, industrial teams, landlords, and organisations
            that need reliable tools without unnecessary cloud dependency.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/apps"
              className="inline-flex items-center gap-2 rounded bg-[#fbbf24] px-6 py-3 text-sm font-bold text-[#0a0a0a] transition-opacity hover:opacity-90"
            >
              View our apps
              <ArrowRightIcon />
            </a>
            <a
              href="/apps/pocket-key-manager"
              className="inline-flex items-center gap-2 rounded border border-[#2a2a2a] px-6 py-3 text-sm font-semibold text-[#f5f5f5]/60 transition-colors hover:border-[#fbbf24]/40 hover:text-[#f5f5f5]"
            >
              Pocket Key Manager →
            </a>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="border-t border-[#1a1a1a] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {PRINCIPLES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded border border-[#1e1e1e] bg-[#0f0f0f] p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fbbf24]/10 text-[#fbbf24]">
                  <Icon />
                </div>
                <h3 className="mb-2 text-sm font-bold text-[#f5f5f5]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#f5f5f5]/55">{desc}</p>
              </div>
            ))}
          </div>
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
            <div className="h-0.5 w-full bg-gradient-to-r from-[#fbbf24]/60 via-[#fbbf24]/20 to-transparent" />
            <div className="p-8 sm:p-10 lg:flex lg:items-start lg:gap-10">
              <div className="mb-7 shrink-0 lg:mb-0">
                <img
                  src="/assets/app/pocket_key_manager/web/icon-192.png"
                  alt="Pocket Key Manager icon"
                  className="h-20 w-20 rounded-2xl object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-black tracking-tight text-[#f5f5f5]">
                    Pocket Key Manager
                  </h3>
                  <span className="rounded-full bg-[#fbbf24]/10 px-3 py-1 text-xs font-semibold text-[#fbbf24]">
                    Coming soon
                  </span>
                </div>
                <p className="mb-2 text-base leading-relaxed text-[#f5f5f5]/70">
                  Offline physical key management for properties, workplaces and organisations.
                </p>
                <p className="mb-6 text-sm text-[#f5f5f5]/45">
                  Coming soon for Android and iOS.
                </p>
                <div className="mb-7 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded border border-[#2a2a2a] px-3 py-1 text-xs text-[#f5f5f5]/40">
                    <AndroidIcon />
                    Android
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded border border-[#2a2a2a] px-3 py-1 text-xs text-[#f5f5f5]/40">
                    <AppleIcon />
                    iOS
                  </span>
                  {["Offline-first", "No End iT backend"].map((tag) => (
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
                  className="inline-flex items-center gap-2 rounded bg-[#fbbf24] px-5 py-2.5 text-sm font-bold text-[#0a0a0a] transition-opacity hover:opacity-90"
                >
                  View app details
                  <ArrowRightIcon />
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
