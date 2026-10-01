# S&P Elegant Blinds

React and Vite homepage for S&P Elegant Blinds.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Contact and inquiry delivery

The phone and WhatsApp click-to-chat links use the business details in `src/business.js`. WhatsApp opens a prepared message; a visitor must send it before the business receives an inquiry. Confirm that `302-279-6950` is registered with WhatsApp or WhatsApp Business before publication.

The project inquiry form is intentionally disabled until a secure HTTPS endpoint is configured with `VITE_CONTACT_FORM_ENDPOINT`. The endpoint must accept a JSON `POST`, validate fields server-side, apply suitable spam controls, and return a successful HTTP status only after storing or delivering the inquiry. Do not put secrets in this client-side variable. Until configured, visitors can contact the business by phone or WhatsApp.

## Search indexing

The canonical domain, sitemap, and production robots rules use `www.spelegantblinds.com`. Vercel preview builds receive a `noindex` meta tag and a blocking `robots.txt`; production builds remain indexable.

The homepage lists confirmed service ZIP codes by state in `src/business.js`. Middletown, Delaware is the business base, not the full service boundary.

## Photography

The selected WebP files under `public/images/site` are optimized derivatives of 13 images from the added WhatsApp photo folder. Source photos remain unchanged. A visual review covered the valid photos in both the added folder and `src/assets/photos`; two legacy stock files are invalid images, and two other stock files are exact duplicates.