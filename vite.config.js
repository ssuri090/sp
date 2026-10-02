import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import inquiryHandler from './api/inquiry.js'

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

const localInquiryApi = {
  name: 'local-inquiry-api',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/api/inquiry', (req, res) => {
      const chunks = []
      req.on('data', (chunk) => chunks.push(chunk))
      req.on('error', () => {
        res.statusCode = 400
        res.end()
      })
      req.on('end', async () => {
        let body = {}
        if (chunks.length) {
          try {
            body = JSON.parse(Buffer.concat(chunks).toString('utf8'))
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invalid request body.' }))
            return
          }
        }

        const response = {
          setHeader(name, value) {
            res.setHeader(name, value)
            return this
          },
          status(code) {
            res.statusCode = code
            return this
          },
          json(payload) {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(payload))
            return this
          },
        }

        try {
          await inquiryHandler({ method: req.method, headers: req.headers, body }, response)
        } catch (error) {
          console.error('Local inquiry API failed', error)
          if (!res.headersSent) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Unable to process inquiry.' }))
          }
        }
      })
    })
  },
}

export default defineConfig({
  plugins: [react(), previewIndexingGuard, localInquiryApi],
  server: {
    port: 3000,
    open: true,
  },
})
