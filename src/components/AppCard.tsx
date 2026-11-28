type AppCardProps = {
  href: string;
  name: string;
  icon: string;
  iconAlt?: string;
  description: string;
  headingLevel?: "h2" | "h3";
};

export function AppCard({
  href,
  name,
  icon,
  iconAlt = "",
  description,
  headingLevel: Heading = "h2",
}: AppCardProps) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded border border-[#1e1e1e] bg-[#111] transition-colors hover:border-[#fbbf24]/40"
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24]/30 to-[#fbbf24]/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <img
            src={icon}
            alt={iconAlt}
            width={192}
            height={192}
            className="h-14 w-14 rounded-xl object-contain"
          />
          <span className="mt-1 rounded-full bg-[#fbbf24]/10 px-2.5 py-1 text-xs font-semibold text-[#fbbf24]">
            Coming soon
          </span>
        </div>
        <Heading className="mb-2 text-base font-bold text-[#f5f5f5] transition-colors group-hover:text-[#fbbf24]">
          {name}
        </Heading>
        <p className="mb-4 text-sm leading-relaxed text-[#f5f5f5]/55">{description}</p>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {["Android", "iOS"].map((platform) => (
            <span
              key={platform}
              className="rounded border border-[#2a2a2a] px-2 py-0.5 text-xs text-[#f5f5f5]/55"
            >
              {platform}
            </span>
          ))}
        </div>
        <p className="text-xs font-semibold text-[#fbbf24]/60 transition-colors group-hover:text-[#fbbf24]">
          View app details →
        </p>
      </div>
    </a>
  );
}
