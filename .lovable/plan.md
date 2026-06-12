## Under Construction page for endit.com.au

A single static landing page in a bold dark style. No backend, no email signup, no contact details (per your answers).

### What you'll see

- Full-screen dark hero (near-black `#0a0a0a` background, off-white `#f5f5f5` text, amber `#fbbf24` accent)
- Large wordmark: **enD iT**
- Headline: "Under construction"
- Sub-line: "Something's coming to endit.com.au. Check back soon."
- Small footer line: "© enD iT" with the current year
- Subtle animated detail (a slow-pulsing amber dot / underline) so the page feels alive without being noisy
- Fully responsive, mobile-first

### SEO / head metadata

In `src/routes/index.tsx` `head()`:
- title: "enD iT — Under construction"
- description: "enD iT is coming soon to endit.com.au."
- og:title, og:description, og:type=website, og:url=/
- canonical: `/`
- `robots: noindex, nofollow` while the site is under construction (so Google doesn't index the placeholder)

### Files touched

- `src/routes/index.tsx` — replace the placeholder with the under-construction component + head metadata
- `src/routes/__root.tsx` — update the default title / description / og tags from "Lovable App" to enD iT defaults
- No new dependencies, no Cloud, no new routes

### About linking GitHub

I can't connect GitHub for you — it's a one-click step you do in the Lovable UI:
**Plus (+) menu in the chat input (bottom-left) → GitHub → Connect project → Create Repository**.

After that, every change I make syncs to the repo automatically (two-way sync).

### About the domain endit.com.au

Building the page and pointing your domain at it are two separate steps. The plan above covers the page. Once you're happy with it, you'll **Publish** the project (top-right button) and then connect `endit.com.au` from **Project Settings → Domains** (either "Connect Domain" if you own it elsewhere, or "Buy new domain" if you'd like to buy through Lovable). I'll walk you through that after publish.
