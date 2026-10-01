import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

let outputDirectory

const previewIndexingGuard = {
  name: 'preview-indexing-guard',
  enforce: 'post',
  configResolved(config) {
    outputDirectory = resolve(config.root, config.build.outDir)
  },
  transformIndexHtml(html) {
    if (process.env.VERCEL_ENV !== 'preview') return html
    return html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>')
  },
  closeBundle() {
    if (process.env.VERCEL_ENV !== 'preview') return
    writeFileSync(resolve(outputDirectory, 'robots.txt'), 'User-agent: *\nDisallow: /\n')
  },
}

export default defineConfig({
  plugins: [react(), previewIndexingGuard],
  server: {
    port: 3000,
    open: true,
  },
})
