import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";

export const Route = createFileRoute("/apps/pocket-key-manager/")({
  head: () => ({
    meta: [
      { title: "Pocket Key Manager — End iT" },
      {
        name: "description",
        content:
          "Pocket Key Manager is an offline-first mobile app for managing physical keys in mining and industrial organisations. No backend, no analytics, no tracking.",
      },
      { property: "og:title", content: "Pocket Key Manager — End iT" },
      {
        property: "og:description",
        content:
          "Offline-first mobile app for managing physical keys in mining and industrial organisations.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://endit.com.au/apps/pocket-key-manager",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://endit.com.au/apps/pocket-key-manager",
      },
    ],
  }),
  component: PKMPage,
});

const FEATURES = [
  {
    title: "Key Copy Records",
    description:
      "Track individual physical key copies with unique identifiers, issue status, and full history.",
  },
  {
    title: "Key Profiles & Access Patterns",
    description:
      "Define key profiles and document which locks each key accesses across your site.",
  },
  {
    title: "Locks & Lock Access",
    description:
      "Manage lock records and document access relationships between keys and locks.",
  },
  {
    title: "Key Holders",
    description:
      "Manage people and key holders, including assigned keys and access patterns.",
  },
  {
    title: "Bookings",
    description:
      "Schedule key issue and return events for planned access or shift-based operations.",
  },
  {
    title: "Issue & Return Workflows",
    description:
      "Record when keys are issued and returned, building a clear operational audit trail.",
  },
  {
    title: "Key States",
    description:
      "Track damaged, lost, recovered, repaired, and retired keys through their full lifecycle.",
  },
  {
    title: "Audit Logs",
    description:
      "Maintain a complete local history of all key events, issues, returns, and state changes.",
  },
  {
    title: "Backup & Restore",
    description:
      "Export and import your data using user-controlled backup files. No cloud required.",
  },
];

const PRIVACY_POINTS = [
  "No End iT backend server",
  "Data stored locally on the user's device only",
  "No analytics or performance tracking",
  "No advertising or ad networks",
  "No third-party tracking SDKs",
  "No automatic cloud sync or uploads",
  "No app accounts or user registration",
  "Backups are user-controlled export files",
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PKMPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />

      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a] px-6 py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[50vmin] w-[50vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbbf24] opacity-[0.05] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            End iT — App
          </p>
          <div className="mb-5 flex items-center gap-5">
            <img
              src="/assets/app/pocket_key_manager/web/icon-192.png"
              alt="Pocket Key Manager icon"
              className="h-16 w-16 rounded-2xl object-contain sm:h-20 sm:w-20"
            />
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Pocket Key Manager
            </h1>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#f5f5f5]/70">
            Offline-first mobile app for managing physical keys in mining and industrial
            organisations.
          </p>
          <div className="mt-4 flex flex-wrap gap-6">
            <p className="text-sm text-[#f5f5f5]/40">
              Currently being prepared for Android and iOS release.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              disabled
              aria-disabled="true"
              title="Android release coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2.5 rounded border border-[#2a2a2a] bg-[#111] px-6 py-3 text-sm font-semibold text-[#f5f5f5]/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.38.77 3.2.77.81 0 2.35-.95 3.96-.8 1.63.1 2.86.74 3.66 1.92-3.39 1.97-2.83 6.47.83 7.87-.74 2.06-1.71 4.09-3.65 5.12zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Android — coming soon
            </button>
            <button
              disabled
              aria-disabled="true"
              title="iOS release coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2.5 rounded border border-[#2a2a2a] bg-[#111] px-6 py-3 text-sm font-semibold text-[#f5f5f5]/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              iOS — coming soon
            </button>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              What it manages
            </p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Full key-control lifecycle
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded border border-[#1e1e1e] bg-[#111] p-5"
              >
                <div className="mb-3 h-0.5 w-8 rounded-full bg-[#fbbf24]" />
                <h3 className="mb-2 text-sm font-semibold text-[#f5f5f5]">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[#f5f5f5]/55">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section className="border-b border-[#1a1a1a] bg-[#0d0d0d] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
                Privacy-first
              </p>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Offline-first. No backend. No exceptions.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#f5f5f5]/70">
                End iT does not operate a backend server for Pocket Key Manager. Your operational
                data stays on your device — and nowhere else. We have no mechanism to collect,
                access, or transmit it.
              </p>
            </div>
            <ul className="space-y-3">
              {PRIVACY_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbbf24]/10 text-[#fbbf24]"
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed text-[#f5f5f5]/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── App links ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            App information
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/apps/pocket-key-manager/privacy"
              className="rounded border border-[#1e1e1e] bg-[#111] px-5 py-3 text-sm text-[#f5f5f5]/60 transition-colors hover:border-[#fbbf24]/40 hover:text-[#fbbf24]"
            >
              Privacy Policy →
            </a>
            <a
              href="/apps/pocket-key-manager/terms"
              className="rounded border border-[#1e1e1e] bg-[#111] px-5 py-3 text-sm text-[#f5f5f5]/60 transition-colors hover:border-[#fbbf24]/40 hover:text-[#fbbf24]"
            >
              Terms of Use →
            </a>
            <a
              href="/apps/pocket-key-manager/support"
              className="rounded border border-[#1e1e1e] bg-[#111] px-5 py-3 text-sm text-[#f5f5f5]/60 transition-colors hover:border-[#fbbf24]/40 hover:text-[#fbbf24]"
            >
              Support →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
