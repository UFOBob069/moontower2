# Homepage content sources

Verified on November 19, 2026.

- Public website: https://www.moontowerbusiness.com/
- Matching published source: https://github.com/UFOBob069/moontower2 (main, app/page.tsx). The local checkout still uses UFOBob069/moontower as origin; no remote was changed.
- Apple Podcasts US: https://podcasts.apple.com/us/podcast/moontower-business/id1507993317 — 5.0/5 from 17 ratings. Rating is a dated editorial snapshot, not a live API value.
- Official RSS: https://anchor.fm/s/140e55d8/podcast/rss — first episode February 18, 2020; 193 feed entries, latest numbered episode 191. Homepage conservatively says 190+ episodes and conversations began in 2020.
- Guest portraits, episode links, audio URL, and durations in episodes.json and latest-episode.json come from the official RSS feed. Display titles and summaries are editorial paraphrases in lib/podcast-shared.ts.
- Team biographies and profile links were adapted from the public website. Team photos and cover artwork were recovered from moontower2/public. The summit photograph was supplied by the user. The SpaceX groundbreaking photograph was restored from moontower2/public/spacex.jpg at the user’s request, with the original site’s identification of Joseph O’Bell and Elon Musk.

## Updating

The selected conversations remain curated in episodes.json and lib/podcast-shared.ts. The homepage latest player and public `/api/latest-episode` endpoint refresh from the official RSS feed on demand, cached for one hour. A failed refresh preserves the last successful cached result; a cold-start failure uses the newest saved archive episode. New episodes link to their publisher page until the archive is synced, so an update never points at a missing local page. Titles, descriptions, dates, audio, and duration update together. No scheduled job or credentials are needed. Recheck the Apple rating before publishing and update both the hero and footer if it changes.

Guest inquiries open the visitor's email client; the redesign does not use the legacy rental-related API routes. No messages are sent automatically.

## Episode pages

The full feed snapshot in `archive.json` contains 193 entries as of November 19, 2026, including the trailer. Every entry has a statically rendered `/episodes/[slug]` page. The seven curated pages retain their existing URLs, portraits, and editorial headings; other pages use the feed title, artwork, original description, audio, date, and duration.

Run `npm run sync:episodes` to fetch and validate the official RSS feed, then rebuild (`npm run build`) and deploy through the usual hosting workflow. This is an explicit refresh, not a scheduled or per-request fetch. The importer leaves the previous snapshot untouched if fetching or validation fails and preserves imported slugs by feed GUID when titles change. Review the data diff before publishing.

Feed GUIDs identify entries. Episode numbers come from published titles because some iTunes number fields disagree; both distinct entries titled Episode 123 are retained. The trailer has no invented episode number. The selected conversations stay curated; syncing the archive also refreshes the latest-player fallback. Eagan Ventures consumes the public latest-episode endpoint server-side.

The archive uses server-rendered GET search across titles and original descriptions, with 12 entries per page. Query and page state are shareable URLs. Empty results offer a reset, invalid page numbers are clamped, and search result URLs are marked noindex/follow. Normal archive pages and every episode appear in the sitemap. Original notes render as escaped text with clickable HTTP(S) links; no transcripts or new interview claims are generated.

Canonical URLs use https://www.moontowerbusiness.com. Update `siteUrl` in `lib/podcast-shared.ts` and `metadataBase` in `app/layout.tsx` if the production domain changes.
