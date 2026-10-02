# S&P Elegant Blinds

React and Vite homepage for S&P Elegant Blinds.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Contact and inquiry delivery

The phone and WhatsApp click-to-chat links use `src/business.js`. WhatsApp click-to-chat requires the visitor to press Send; it does not notify the business when someone merely opens the link.

The quote form sends email through the existing browser-side FormSubmit AJAX endpoint to `info@spelegantblinds.com` (the Zoho inbox), preserving the original working email path. After email is accepted, it posts the validated inquiry fields to `/api/inquiry` for an optional WhatsApp Cloud API template alert; the API route never sends email, avoiding duplicate submissions. It does not report a WhatsApp alert sent unless Meta accepts the request.

To test the full form/API locally, run `VITE_CONTACT_FORM_ENDPOINT=/api/inquiry npm run dev -- --host 0.0.0.0 --port 3002 --strictPort`, then open `http://localhost:3002`. This uses the same inquiry handler and will send a real email to the inbox if you submit the form. Plain `npm run dev` on port 3000 shows the call fallback.

Configure these server-side environment variables in Vercel (Production and Preview as appropriate) only when enabling WhatsApp alerts:

- `WHATSAPP_CLOUD_API_TOKEN`: Meta WhatsApp Cloud API access token with messaging permission.
- `WHATSAPP_PHONE_NUMBER_ID`: the sender phone-number ID from the Meta WhatsApp account.
- `WHATSAPP_ALERT_TO`: the opted-in recipient number in international digits, without `+`.
- `WHATSAPP_GRAPH_API_VERSION`: a currently supported Meta Graph API version, e.g. `vXX.0`.
- `WHATSAPP_TEMPLATE_NAME`: an approved utility template name. The template should contain no variables and say: `A new website inquiry was received for S&P Elegant Blinds. Check info@spelegantblinds.com for the inquiry details.`
- `WHATSAPP_TEMPLATE_LANGUAGE`: the approved template language, normally `en_US`.

Do not put these secrets in `VITE_*` variables or commit them. Until WhatsApp Cloud API values and the approved template are configured, successful inquiries are emailed but the page reports that WhatsApp notification is pending. Test both deliveries in a Vercel Preview using a test inquiry before enabling Production.

## Search indexing

The canonical domain, sitemap, and production robots rules use `www.spelegantblinds.com`. Vercel preview builds receive a `noindex` meta tag and a blocking `robots.txt`; production builds remain indexable.

The homepage lists confirmed service ZIP codes by state in `src/business.js`. Middletown, Delaware is the business base, not the full service boundary.

## Photography

The selected WebP files under `public/images/site` are optimized, metadata-free derivatives; source photos remain unchanged. Collection slides use photos from their corresponding product folders: five Zebra, three unique Roller, two Honeycomb, one Roman, and one Sheer image. The Picturized Blinds block rotates through two non-character examples from its supplied folder. A visual review covered the valid photos in the supplied folders and `src/assets/photos`; two legacy stock files are invalid images, and two other stock files are exact duplicates.