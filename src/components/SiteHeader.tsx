const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1e1e1e] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="End iT — home">
          <img
            src="/assets/brand/endit_logo_square_transparent.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-8 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-xl font-black tracking-tight text-[#f5f5f5]">
            End <span className="text-[#fbbf24]">iT</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-[#f5f5f5]/60 transition-colors hover:text-[#fbbf24]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
