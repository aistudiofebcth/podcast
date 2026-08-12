/**
 * Inlines the single-chunk showcase build (dist-single/) into ONE
 * self-contained, offline-capable HTML file: JS + CSS + every web font
 * embedded as data URIs, no external requests.
 *
 * Run via `npm run build:html` (which builds dist-single first).
 * Output: dist-single/FEBC-Podcast-Design-System.html
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const ASSETS = resolve(process.cwd(), 'dist-single/assets')
let css = readFileSync(`${ASSETS}/index.css`, 'utf8')

// Embed every woff2 as a data URI…
let inlined = 0
css = css.replace(/url\((['"]?)(\/assets\/[^)'"]+?\.woff2)\1\)/g, (m, _q, p) => {
  const fp = `${ASSETS}/${p.split('/').pop()}`
  if (!existsSync(fp)) return m
  inlined++
  return `url(data:font/woff2;base64,${readFileSync(fp).toString('base64')})`
})
// …and drop the .woff fallbacks (woff2 covers every browser we target and the
// data URI loads first, so the fallback would only 404 from a file:// open).
css = css.replace(/,\s*url\((['"]?)\/assets\/[^)'"]+?\.woff\1\)\s*format\((['"])woff\2\)/g, '')

const js = readFileSync(`${ASSETS}/app.js`, 'utf8').replace(/<\/script>/g, '<\\/script>')

const html = `<!doctype html>
<html lang="en" class="dark">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#151515" />
<title>FEBC Podcast Design System</title>
<style>
${css}
</style>
</head>
<body>
<div id="root"></div>
<script type="module">
${js}
</script>
</body>
</html>
`

const out = resolve(process.cwd(), 'dist-single/FEBC-Podcast-Design-System.html')
writeFileSync(out, html)
const remaining = (html.match(/\/assets\//g) || []).length
console.log(
  `[build:html] fonts inlined: ${inlined} | leftover /assets refs: ${remaining} | size: ${Math.round(
    Buffer.byteLength(html) / 1024,
  )} KB`,
)
console.log(`[build:html] wrote ${out}`)
