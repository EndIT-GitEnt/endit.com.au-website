import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-[#f5f5f5]">
      <div className="max-w-md text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
          End iT
        </p>
        <h1 className="text-7xl font-black text-[#f5f5f5]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#f5f5f5]">Page not found</h2>
        <p className="mt-2 text-sm text-[#f5f5f5]/50">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded border border-[#fbbf24] bg-[#fbbf24] px-6 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#f59e0b]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-[#f5f5f5]">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-[#f5f5f5]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[#f5f5f5]/50">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded border border-[#fbbf24] bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#f59e0b]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded border border-[#333] px-4 py-2 text-sm font-medium text-[#f5f5f5]/70 transition-colors hover:border-[#fbbf24] hover:text-[#fbbf24]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "End iT — Practical software for serious operational work" },
      {
        name: "description",
        content:
          "End iT builds focused, privacy-conscious apps for real workplace problems. Pocket Key Manager is an offline-first key management app for mining and industrial organisations.",
      },
      {
        property: "og:title",
        content: "End iT — Practical software for serious operational work",
      },
      {
        property: "og:description",
        content:
          "End iT builds focused, privacy-conscious apps for real workplace problems.",
      },
      { property: "og:site_name", content: "End iT" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au" },
      {
        property: "og:image",
        content: "https://endit.com.au/assets/brand/web/endit_social_profile_1200.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "End iT — Practical software for serious operational work",
      },
      {
        name: "twitter:description",
        content:
          "End iT builds focused, privacy-conscious apps for real workplace problems.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
