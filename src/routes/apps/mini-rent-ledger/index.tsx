import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Check, House, KeyRound } from "lucide-react";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteHeader } from "../../../components/SiteHeader";
import { miniRentLedger } from "../../../lib/mini-rent-ledger";

const title = `${miniRentLedger.name} — End iT`;
const canonicalUrl = `https://endit.com.au${miniRentLedger.href}`;
const sharingImage = `https://endit.com.au${miniRentLedger.sharingImage}`;
const sharingImageAlt = "Mini Rent Ledger branding with a silver house and orange ledger on navy";

export const Route = createFileRoute("/apps/mini-rent-ledger/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: miniRentLedger.description },
      { property: "og:title", content: title },
      { property: "og:description", content: miniRentLedger.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: sharingImage },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: sharingImageAlt },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: miniRentLedger.description },
      { name: "twitter:image", content: sharingImage },
      { name: "twitter:image:alt", content: sharingImageAlt },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: MiniRentLedgerPage,
});

const audiences = [
  {
    title: "Small landlords",
    summary: "Keep rent, bonds and expenses organised for your rental properties.",
    Icon: House,
  },
  {
    title: "Room rentals",
    summary: "Track separate rental units and tenancies when renting out individual rooms.",
    Icon: KeyRound,
  },
  {
    title: "Small property portfolios",
    summary: "Keep records for multiple properties and units in one ledger.",
    Icon: Building2,
  },
];

const features = [
  {
    title: "Properties and units",
    summary: "Organise your rental rooms and units under their properties.",
  },
  {
    title: "Tenants and tenancies",
    summary: "Keep tenant contacts and the details of each rental arrangement.",
  },
  {
    title: "Expected rent",
    summary: "Generate rent periods from the tenancy's rent schedule.",
  },
  {
    title: "Rent receipts",
    summary: "Record rent received against tenancy periods.",
  },
  {
    title: "Bond collections",
    summary: "Track expected bonds and the amounts collected.",
  },
  {
    title: "Expenses",
    summary: "Record and review expenses for your rentals.",
  },
  {
    title: "Receipt corrections",
    summary: "Correct recorded rent and bond payments when needed.",
  },
  {
    title: "Backup and restore",
    summary: "Create and restore a ledger backup file on Android and iOS.",
  },
];

const steps = [
  { title: "Add properties and units", summary: "Set up the properties, rooms or units you rent." },
  { title: "Start a tenancy", summary: "Add a tenant and enter the rental arrangement." },
  {
    title: "Generate rent periods",
    summary: "Use the tenancy's rent schedule to record expected rent.",
  },
  { title: "Record receipts", summary: "Enter rent and bond payments as you receive them." },
  { title: "Track expenses", summary: "Keep a record of expenses related to your rentals." },
  { title: "Back up the ledger", summary: "Save a backup file in a location you choose." },
];

const privacyPoints = [
  "Works offline",
  "Rental information stays on your device",
  "No End iT backend or app accounts",
  "No app-managed cloud sync or advertising",
  "Manual backup files are controlled by you",
];

const infoLinkClass =
  "rounded border border-[#1e1e1e] bg-[#111] px-5 py-3 text-sm text-[#f5f5f5]/70 transition-colors hover:border-[#fbbf24]/40 hover:text-[#fbbf24]";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
        {label}
      </p>
      <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}

function MiniRentLedgerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />

      <main>
        <section className="border-b border-[#1a3347] bg-[#031729] px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1>
              <img
                src={miniRentLedger.wordmark}
                alt={miniRentLedger.name}
                width={1000}
                height={260}
                className="mx-auto block h-auto w-full max-w-2xl"
              />
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#f5f5f5]/80">
              {miniRentLedger.description}
            </p>
            <p className="mt-3 text-base text-[#f5f5f5]/65">Coming soon for Android and iOS.</p>
            <p className="mx-auto mt-8 max-w-xl rounded border border-[#fbbf24]/25 bg-[#fbbf24]/5 px-6 py-4 text-sm font-medium text-[#fbbf24]">
              Works offline, with rental information stored on your device.
            </p>
            <ul
              aria-label="Platform availability"
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {["Android", "iOS"].map((platform) => (
                <li
                  key={platform}
                  className="rounded border border-[#284055] bg-[#0a2034] px-5 py-3 text-sm font-semibold text-[#f5f5f5]/75"
                >
                  {platform} · Coming soon
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[#1a1a1a] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Built for" title="Who uses Mini Rent Ledger" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map(({ title, summary, Icon }) => (
                <article key={title} className="rounded border border-[#1e1e1e] bg-[#111] p-6">
                  <span
                    aria-hidden="true"
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fbbf24]/10 text-[#fbbf24]"
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="mb-2 text-sm font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#f5f5f5]/65">{summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#1a1a1a] bg-[#0d0d0d] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Features" title="Rent, bonds and expenses in one ledger" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ title, summary }) => (
                <article key={title} className="rounded border border-[#1e1e1e] bg-[#111] p-5">
                  <div aria-hidden="true" className="mb-3 h-0.5 w-8 rounded-full bg-[#fbbf24]" />
                  <h3 className="mb-2 text-sm font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#f5f5f5]/65">{summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#1a1a1a] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="How it works"
              title="From setting up a tenancy to tracking rent"
            />
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map(({ title, summary }, index) => (
                <li
                  key={title}
                  className="flex gap-4 rounded border border-[#1e1e1e] bg-[#111] p-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fbbf24]/10 text-sm font-bold text-[#fbbf24]"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">{title}</h3>
                    <p className="text-sm leading-relaxed text-[#f5f5f5]/65">{summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="privacy-overview"
          className="scroll-mt-28 border-b border-[#1a1a1a] bg-[#0d0d0d] px-6 py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-start">
            <div>
              <SectionHeading label="Privacy-first" title="Rental records stay on your device" />
              <p className="max-w-xl text-base leading-relaxed text-[#f5f5f5]/75">
                Mini Rent Ledger stores rental information locally. End iT does not collect or
                access your ledger. You choose where to save any backup files you create.
              </p>
            </div>
            <ul className="space-y-3 rounded border border-[#1e1e1e] bg-[#111] p-6">
              {privacyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#f5f5f5]/75"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fbbf24]/10 text-[#fbbf24]"
                  >
                    <Check size={13} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[#1a1a1a] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Availability" title="Coming soon on Android and iOS" />
            <ul aria-label="Planned stores" className="flex flex-wrap gap-4">
              {["Google Play", "App Store"].map((store) => (
                <li key={store} className="rounded border border-[#2a2a2a] bg-[#111] px-6 py-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#f5f5f5]/65">
                    Coming soon
                  </p>
                  <p className="mt-1 text-sm font-bold">{store}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
              App information
            </h2>
            <nav aria-label="Mini Rent Ledger app information" className="flex flex-wrap gap-4">
              <a href="#privacy-overview" className={infoLinkClass}>
                Privacy overview <span aria-hidden="true">→</span>
              </a>
              <Link to="/apps/mini-rent-ledger/support" className={infoLinkClass}>
                Support <span aria-hidden="true">→</span>
              </Link>
              <Link to="/apps" className={infoLinkClass}>
                All apps <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
