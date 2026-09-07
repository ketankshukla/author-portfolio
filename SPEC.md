# SPEC - author-portfolio

> What this repo is for, what it deliberately does not do, and what must stay
> true for a change to be correct.

**The catalogue site** - **Live:** https://ketanshukla.com

## 1. Purpose

One place presenting three completed book series - 22 books, 388 chapters -
with covers, box sets and the SEO surface that makes them findable.

It is the **author** identity, deliberately separate from the engineering
portfolio at ketanshukla.dev.

## 2. Scope

**In scope** - three series presented with covers and descriptions; box set
listings; sitemap and robots routes; SEO metadata; Next.js App Router.

**Explicitly out of scope**

- **Selling.** Purchase happens on Amazon; this site routes there.
- **The engineering portfolio.** ketanshukla.dev is a different audience with a
  different job.
- **A blog.** The writing lives in the books.
- **Per-book sub-sites.** Each series has its own site
  (`aztec.`, `reality.`, `repetition.`); this is the index above them.

## 3. Architecture

Next.js App Router. Series data drives the pages; sitemap and robots are
generated routes rather than static files, so adding a series updates them.

## 4. Invariants

1. **Every book links to its purchase page.** A catalogue that does not route to
   a purchase has failed its only job.
2. **Series sub-sites are linked, not duplicated.** Content lives in one place;
   this site indexes it.
3. **Sitemap and robots are generated**, never hand-maintained.
4. **The pen-named series is presented under its pen name**, consistent with the
   attribution used everywhere else.
5. **This site does not link the engineering portfolio as a peer.** The audiences
   are different and conflating them serves neither.

## 5. Known limitations

- **Manual catalogue updates** - a new title is a code change.
- **No purchase analytics.**
- **No mailing list**, so there is no direct channel to readers.

## 6. Related

Series: [`aztec-samurai-adventures`](https://github.com/ketankshukla/aztec-samurai-adventures) -
[`reality-without-belief`](https://github.com/ketankshukla/reality-without-belief) -
[`repetition-mother-of-mastery`](https://github.com/ketankshukla/repetition-mother-of-mastery)
