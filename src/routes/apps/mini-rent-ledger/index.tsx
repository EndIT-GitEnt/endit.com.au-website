import { createFileRoute, Link } from "@tanstack/react-router";
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

function MiniRentLedgerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />

      <main>
        <section className="border-b border-[#1a3347] bg-[#031729] px-6 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/apps"
              className="inline-flex min-h-11 items-center rounded text-sm font-semibold text-[#f5f5f5]/75 transition-colors hover:text-[#fbbf24]"
            >
              <span aria-hidden="true" className="mr-2">
                ←
              </span>
              All apps
            </Link>
            <div className="max-w-2xl pt-4 sm:pt-6">
              <h1>
                <img
                  src={miniRentLedger.wordmark}
                  alt={miniRentLedger.name}
                  width={1000}
                  height={260}
                  className="block h-auto w-full"
                />
              </h1>
              <p className="mt-2 text-xl leading-relaxed text-[#f5f5f5]/85 sm:text-2xl">
                {miniRentLedger.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-[#ffad36]">
                Coming soon for Android and iOS.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#f5f5f5] sm:text-3xl">
              Rental records stay on your device
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#f5f5f5]/70">
              Manage tenancies, record rent and bond payments, and track expenses. The app works
              offline and stores rental information locally. End iT does not collect or access it.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
