const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/support", label: "Support" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#080808] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-black tracking-tight text-[#f5f5f5]">
              End <span className="text-[#fbbf24]">iT</span>
            </p>
            <p className="mt-1 text-xs text-[#f5f5f5]/40">ABN: 62 445 871 758</p>
            <p className="mt-1 text-xs text-[#f5f5f5]/40">
              PO Box 1188, South Perth WA 6151, Australia
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[#f5f5f5]/40 transition-colors hover:text-[#fbbf24]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-xs text-[#f5f5f5]/20">
          © {year} End iT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
