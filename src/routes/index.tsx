import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "enD iT — Under construction" },
      { name: "description", content: "enD iT is coming soon to endit.com.au." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "enD iT — Under construction" },
      { property: "og:description", content: "enD iT is coming soon to endit.com.au." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const year = new Date().getFullYear();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 text-[#f5f5f5]">
      {/* subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbbf24] opacity-[0.07] blur-3xl"
      />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[#fbbf24]" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#f5f5f5]/60">
            endit.com.au
          </span>
        </div>

        <h1 className="text-6xl font-black tracking-tight sm:text-8xl md:text-9xl">
          en<span className="text-[#fbbf24]">D</span> iT
        </h1>

        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[#fbbf24]" />
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#fbbf24]">
            Under construction
          </p>
          <span className="h-px w-10 bg-[#fbbf24]" />
        </div>

        <p className="mt-8 max-w-md text-base text-[#f5f5f5]/70 sm:text-lg">
          Something's coming to endit.com.au. Check back soon.
        </p>
      </div>

      <footer className="absolute bottom-6 text-xs uppercase tracking-[0.3em] text-[#f5f5f5]/40">
        © {year} enD iT
      </footer>
    </main>
  );
}
