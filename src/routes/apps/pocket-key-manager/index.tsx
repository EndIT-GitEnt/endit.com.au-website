import { useState, useEffect, useCallback } from "react";
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
          "Pocket Key Manager is an offline-first mobile app for managing physical keys across properties, workplaces, facilities, mining, industrial sites and organisations. Coming soon for Android and iOS.",
      },
      { property: "og:title", content: "Pocket Key Manager — End iT" },
      {
        property: "og:description",
        content:
          "Offline physical key management for properties, workplaces and organisations. Coming soon for Android and iOS.",
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

// ── Data ──────────────────────────────────────────────────────────────────────

const BUILT_FOR = [
  {
    title: "Property managers",
    description:
      "Track key copies across multiple properties and tenants. Know exactly who holds what key, and when.",
    Icon: BuildingIcon,
  },
  {
    title: "Landlords",
    description:
      "Manage master keys, spare copies, and access records for your rental properties.",
    Icon: HomeIcon,
  },
  {
    title: "Workplaces",
    description:
      "Control access to offices, server rooms, storage areas, and shared spaces with a clear audit trail.",
    Icon: BriefcaseIcon,
  },
  {
    title: "Facilities teams",
    description:
      "Maintain full visibility over locks, key copies, and who holds access across your facilities.",
    Icon: WrenchIcon,
  },
  {
    title: "Mining and industrial sites",
    description:
      "Manage physical key control in remote or low-connectivity environments where offline operation is essential.",
    Icon: ShieldIcon,
  },
  {
    title: "Organisations managing shared keys",
    description:
      "Any team that needs to track, issue, and recover physical keys in a structured, accountable way.",
    Icon: UsersIcon,
  },
];

const FEATURES = [
  {
    title: "Physical key copy tracking",
    description:
      "Track individual physical key copies with unique identifiers, issue status, and full history.",
  },
  {
    title: "Locks and access profiles",
    description:
      "Define key profiles and document which locks each key accesses across your site.",
  },
  {
    title: "Key holders",
    description:
      "Manage people and key holders, including assigned keys and access patterns.",
  },
  {
    title: "Bookings",
    description:
      "Schedule key issue and return events for planned access or shift-based operations.",
  },
  {
    title: "Issue and return workflows",
    description:
      "Record when keys are issued and returned, building a clear operational audit trail.",
  },
  {
    title: "Lost, damaged, recovered and retired key states",
    description:
      "Track lost, damaged, recovered, and retired keys through their full lifecycle.",
  },
  {
    title: "Audit logs",
    description:
      "Maintain a complete local history of all key events, issues, returns, and state changes.",
  },
  {
    title: "Backup and restore files",
    description:
      "Export and import your data using user-controlled backup files. No cloud required.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    label: "Create keys",
    desc: "Add your key copies, profiles, and locks.",
  },
  {
    step: "2",
    label: "Assign access",
    desc: "Define which keys open which locks, and set up key holders.",
  },
  {
    step: "3",
    label: "Book keys",
    desc: "Schedule upcoming issues for planned access or shifts.",
  },
  {
    step: "4",
    label: "Issue keys",
    desc: "Record key issue events to track who has each copy.",
  },
  {
    step: "5",
    label: "Return keys",
    desc: "Log returns and maintain a clear custody record.",
  },
  {
    step: "6",
    label: "Review audit history",
    desc: "Review the full audit log of all key events at any time.",
  },
];

const PRIVACY_POINTS = [
  "No End iT backend server",
  "Operational data stored locally on your device",
  "No analytics or performance tracking",
  "No advertising or ad networks",
  "No third-party tracking SDKs",
  "No automatic cloud sync or uploads",
  "No app accounts or user registration",
  "Backups are user-controlled export files",
];

const SCREENSHOTS = [
  {
    src: "/assets/app/pocket_key_manager/Sreenshots/Dashboard.jpg",
    alt: "Pocket Key Manager dashboard showing keys issued, overdue keys, available keys, sites, locks and key profiles at a glance",
    caption: "Dashboard",
  },
  {
    src: "/assets/app/pocket_key_manager/Sreenshots/Keys.jpg",
    alt: "Keys screen listing key profiles including Master Access and Standard Entry",
    caption: "Key profiles",
  },
  {
    src: "/assets/app/pocket_key_manager/Sreenshots/Bookings_Booking.jpg",
    alt: "Booking detail screen showing scheduled key requirements and one-tap issue actions",
    caption: "Bookings",
  },
  {
    src: "/assets/app/pocket_key_manager/Sreenshots/Key_Exceptions.jpg",
    alt: "Key exceptions screen tracking lost and damaged keys with status filter tabs",
    caption: "Key exceptions",
  },
  {
    src: "/assets/app/pocket_key_manager/Sreenshots/More.jpg",
    alt: "More menu listing all app features: People, Issue Key, Key Exceptions, Audit Log, Backup and Restore, Settings, and Guide",
    caption: "All features",
  },
  {
    src: "/assets/app/pocket_key_manager/Sreenshots/Backup_And_Restore.jpg",
    alt: "Backup and Restore screen with export and import options, confirming data stays entirely under user control",
    caption: "Backup & restore",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

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

function AndroidIcon() {
  return (
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
  );
}

function AppleIcon() {
  return (
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
  );
}

function BuildingIcon() {
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
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

function HomeIcon() {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BriefcaseIcon() {
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
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function WrenchIcon() {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ShieldIcon() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function UsersIcon() {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

type LightboxItem = { src: string; alt: string; caption: string };

function ScreenshotLightbox({ item, onClose }: { item: LightboxItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.caption} screenshot`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative z-10 flex max-h-[90dvh] w-full max-w-xs flex-col items-center gap-4 sm:max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close screenshot"
          className="self-end rounded-full border border-[#2a2a2a] bg-[#111] p-2 text-[#f5f5f5]/60 transition-colors hover:border-[#fbbf24]/40 hover:text-[#fbbf24]"
        >
          <CloseIcon />
        </button>
        <div className="overflow-hidden rounded-[2.5rem] border border-[#272727] shadow-[0_16px_60px_rgba(0,0,0,0.8)]">
          <img
            src={item.src}
            alt={item.alt}
            className="block max-h-[75dvh] w-auto object-contain"
          />
        </div>
        <p className="text-sm font-medium text-[#f5f5f5]/60">{item.caption}</p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

function PKMPage() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a] px-6 py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbbf24] opacity-[0.05] blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            End iT — App
          </p>
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/app/pocket_key_manager/web/icon-192.png"
              alt="Pocket Key Manager icon"
              className="h-20 w-20 rounded-2xl object-contain sm:h-24 sm:w-24"
            />
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Pocket Key Manager
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#f5f5f5]/70">
            Offline physical key management for properties, workplaces and organisations.
          </p>
          <p className="mt-3 text-base text-[#f5f5f5]/45">
            Coming soon for Android and iOS.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded border border-[#fbbf24]/20 bg-[#fbbf24]/5 px-6 py-4 text-sm font-medium text-[#fbbf24]/80">
            Offline-first. No End iT backend. Your operational data stays under your control.
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              disabled
              aria-disabled="true"
              title="Android release coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2.5 rounded border border-[#2a2a2a] bg-[#111] px-6 py-3 text-sm font-semibold text-[#f5f5f5]/30"
            >
              <AndroidIcon />
              Android — coming soon
            </button>
            <button
              disabled
              aria-disabled="true"
              title="iOS release coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2.5 rounded border border-[#2a2a2a] bg-[#111] px-6 py-3 text-sm font-semibold text-[#f5f5f5]/30"
            >
              <AppleIcon />
              iOS — coming soon
            </button>
          </div>
        </div>
      </section>

      {/* ── Built for ── */}
      <section className="border-b border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              Built for
            </p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Who uses Pocket Key Manager
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BUILT_FOR.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="rounded border border-[#1e1e1e] bg-[#111] p-6 transition-colors hover:border-[#2a2a2a]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fbbf24]/10 text-[#fbbf24]">
                  <Icon />
                </div>
                <h3 className="mb-2 text-sm font-bold text-[#f5f5f5]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#f5f5f5]/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-[#1a1a1a] bg-[#0d0d0d] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              Features
            </p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Full key-control lifecycle
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#f5f5f5]/55">
              Everything you need to track physical keys from creation through to retirement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── How it works ── */}
      <section className="border-b border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              How it works
            </p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Simple, structured key management
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#f5f5f5]/50">
              Create keys → assign access → book keys → issue keys → return keys → review audit history
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOW_IT_WORKS.map(({ step, label, desc }) => (
              <div key={step} className="flex gap-4 rounded border border-[#1e1e1e] bg-[#0f0f0f] p-5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/5 text-sm font-black text-[#fbbf24]">
                  {step}
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold text-[#f5f5f5]">{label}</p>
                  <p className="text-sm leading-relaxed text-[#f5f5f5]/55">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="border-b border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              In action
            </p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              See Pocket Key Manager in action
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#f5f5f5]/55">
              Real screens from the app — offline, private, and ready to use from day one.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 sm:gap-5">
            {SCREENSHOTS.map(({ src, alt, caption }) => (
              <div key={src} className="w-[155px] shrink-0 sm:w-[185px]">
                <button
                  type="button"
                  onClick={() => setLightbox({ src, alt, caption })}
                  aria-label={`View ${caption} screenshot`}
                  className="group w-full text-left"
                >
                  <div className="overflow-hidden rounded-[2rem] border border-[#272727] shadow-[0_8px_40px_rgba(0,0,0,0.55)] transition-[border-color] group-hover:border-[#fbbf24]/40">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      width={1080}
                      height={2340}
                      className="block w-full"
                    />
                  </div>
                  <p className="mt-2.5 text-center text-xs text-[#f5f5f5]/40 transition-colors group-hover:text-[#f5f5f5]/60">
                    {caption}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy / Offline-first ── */}
      <section className="border-b border-[#1a1a1a] bg-[#0d0d0d] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
                Privacy-first
              </p>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Offline-first. No End iT backend. Your operational data stays under your control.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#f5f5f5]/70">
                <p>
                  End iT does not operate a backend server for Pocket Key Manager.
                </p>
                <p>
                  Operational app data is stored locally on the user's device.
                </p>
                <p>
                  End iT does not collect, receive, access, sell, analyse, track, or transmit
                  operational app data.
                </p>
                <p>
                  Backups are user-controlled export files.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="/apps/pocket-key-manager/privacy"
                  className="inline-flex items-center gap-2 rounded border border-[#2a2a2a] px-5 py-2.5 text-sm font-semibold text-[#f5f5f5]/60 transition-colors hover:border-[#fbbf24]/40 hover:text-[#fbbf24]"
                >
                  Read the full Privacy Policy →
                </a>
              </div>
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

      {/* ── Store readiness ── */}
      <section className="border-b border-[#1a1a1a] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              Availability
            </p>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Coming soon on Android and iOS
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#f5f5f5]/55">
              Pocket Key Manager is currently being prepared for release on Google Play
              and the App Store.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex cursor-not-allowed items-center gap-3 rounded border border-[#2a2a2a] bg-[#111] px-6 py-4 opacity-50">
              <AndroidIcon />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#f5f5f5]/50">
                  Coming soon on
                </p>
                <p className="text-sm font-bold text-[#f5f5f5]">Google Play</p>
              </div>
            </div>
            <div className="inline-flex cursor-not-allowed items-center gap-3 rounded border border-[#2a2a2a] bg-[#111] px-6 py-4 opacity-50">
              <AppleIcon />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#f5f5f5]/50">
                  Coming soon on the
                </p>
                <p className="text-sm font-bold text-[#f5f5f5]">App Store</p>
              </div>
            </div>
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

      {lightbox && <ScreenshotLightbox item={lightbox} onClose={closeLightbox} />}
    </div>
  );
}
