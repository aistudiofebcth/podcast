# FEBC Podcast — LINE LIFF app

A LINE **LIFF** (LINE Front-end Framework) mini-app for browsing FEBC podcasts,
built entirely from this design system and meant to be opened from a LINE
**rich menu**.

- **Entry point:** the **Get Started** screen (FEBC brand lockup + CTA), mirroring
  the kit's onboarding screen.
- **Then:** the **Podcast list** — search, category filter, a featured deck, and
  the full catalogue.

Source: `liff.html` + `src/liff/` (`main.tsx`, `LiffApp.tsx`, `liff.ts`,
`data.ts`, `screens/GetStartedScreen.tsx`, `screens/PodcastListScreen.tsx`).

## Run / preview locally

```bash
npm install
npm run dev
# open http://localhost:5173/liff.html   (the design-system showcase is at /)
```

With no `VITE_LIFF_ID` set the app runs **standalone** (LIFF init is skipped),
so the UI is fully testable in a normal browser.

## Configure the LIFF id

1. In the [LINE Developers console](https://developers.line.biz/console/), open
   (or create) a **LINE Login** channel → **LIFF** tab → **Add**.
2. Set **Endpoint URL** to where you'll host the built `liff.html`
   (e.g. `https://your-domain/liff.html`), **Size = Full**, and enable the
   scopes you need (`profile` if you want the greeting).
3. Copy the **LIFF ID** and provide it at build time:

```bash
echo "VITE_LIFF_ID=1234567890-abcdEfGh" > .env   # your id
npm run build            # outputs dist/liff.html + assets
```

4. Deploy the contents of `dist/` to any static HTTPS host.

## Embed in a rich menu

Create a rich menu (LINE Official Account Manager or the Messaging API) and set
a tap area's action to open the LIFF URL:

```
type: uri
uri:  https://liff.line.me/<YOUR_LIFF_ID>
```

Opening that URL launches the app on the **Get Started** screen inside LINE.

## Notes

- `src/liff/liff.ts` wraps `liff.init()` in a guard + try/catch — a missing id
  or a non-LINE context never breaks the UI.
- The catalogue in `src/liff/data.ts` is placeholder data; swap it for your CMS
  / API. Each item maps 1:1 onto the design-system `AlbumCard` / `ArtistRow`.
