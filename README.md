# Michael Portfolio — Resend Contact Form

## Run locally

```bash
npm install
npm run dev
```

## Contact form setup with Resend

Create `.env.local` in the project root:

```env
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=portfolio@yourdomain.com
CONTACT_TO_EMAIL=your-email@gmail.com
```

- `RESEND_API_KEY`: your Resend API key.
- `RESEND_FROM_EMAIL`: an address using your verified domain.
- `CONTACT_TO_EMAIL`: the inbox where messages should arrive.

The visitor's address is used as `replyTo`, so pressing Reply in your inbox replies directly to the visitor.

## Vercel setup

Add the same three variables under:

Project → Settings → Environment Variables

Apply them to Production, Preview, and Development as needed, then redeploy.

## Testing before domain verification

Resend may allow its test sender for limited account testing. For production and sending to normal recipients, verify a domain and use an address under that domain.

## Replace photos

- `public/images/hero/michael.png`
- `public/images/about/about.jpg`

## Final interaction updates

- Navbar uses `Experience` and links to `#experience`.
- Sections fade in again whenever they re-enter the viewport.
- A back-to-top button appears after scrolling down.
- The direct contact form is the single contact call-to-action.

## Premium polish included

- Animated loading screen
- Repeating staggered scroll reveals
- Subtle hero parallax
- Image blur-to-sharp loading
- Magnetic call-to-action buttons
- Custom desktop cursor
- Light and dark theme toggle
- Reduced-motion accessibility support

## Project-page and hero refinements

1. Centered hero background text changed to “Michael Angelo”.
2. Removed the repeated project-page contact CTA.
3. Added project summary/outcome information.
4. Added a fixed Back to Portfolio button.
5. Added a project reading progress bar.
6. Added previous/next project navigation and exploration links.
7. Added mouse-following hero tilt, floating movement, glow, and deeper hover shadow.

## Latest cleanup

- Hero background name is centered using a dedicated full-width centering layer.
- Project pages keep only the Project Summary section.
- Removed More Featured Work and previous/next project controls.
- Added a project-page bottom-right back-to-top button.

## Final flip-card and loader fix

- Removed the visible decorative layer behind the hero card.
- Front photo and back experience panel now occupy the exact same position.
- The experience side remains hidden until the card is clicked/flipped.
- The Michael loader is skipped when returning from a project page.
- The loader still appears on a full browser refresh.

## Project routing fix

Each portfolio card now opens a separate dynamic route:

- `/projects/designer-portfolio`
- `/projects/origami-invoice`
- `/projects/social-media-designs`
- `/projects/coffee-shop-brochure`

Project content is stored in:

- `data/projects.ts`

Project images are stored in:

- `public/images/projects/<project-slug>/`

Replace `cover.jpg`, `detail-1.jpg`, `detail-2.jpg`, and `detail-3.jpg`
inside each project folder with your real screenshots.

## Works slider and video editing project

- Fixed Next.js Promise params using React.use().
- Works displays four projects per page.
- Arrow buttons switch between project sets.
- New projects added to data/projects.ts automatically create more pages.
- Video Editing Showcase supports local MP4 files from public/videos/video-editing/.

## Slider visibility correction

The Works cards now use their own keyed AnimatePresence transition.
New project groups no longer remain stuck in the hidden Framer Motion state
after pressing the previous or next arrow.

## Works slider side-arrow layout

- Previous and next controls are positioned on the left and right sides of the project grid.
- Controls stay vertically centered beside the four visible projects on desktop.
- Small page indicators remain centered below the grid.
- On small screens, arrows move below the project cards for easier tapping.

## Compact Works layout correction

- Works copy stays on the left.
- Four cards remain in a compact 2×2 grid on the right.
- Previous and next arrows sit immediately beside the project grid.
- Pagination dots sit directly below the project grid.
- Removed the oversized reserved slider height that caused large empty space.

## Mobile Works alignment

- Removed pagination dots.
- Centered the Works slider and cards on mobile.
- Added equal left and right spacing.
- Kept project titles left-aligned inside centered cards.
- Centered the previous and next arrows below the mobile project list.

## Video showcase size adjustment

- Reduced the desktop video card width.
- Limited video height for easier viewing.
- Centered the video gallery.
- Uses one centered column on tablets and phones.

## Project opening speed

- All project routes are prefetched after the home page loads.
- Project cards also prefetch on hover and touch.
- The entire project card is now a reliable one-click target.
- In local development, Next.js may still compile routes once, but this now happens earlier in the background.

## Netlify production build fix

Fixed the duplicate `className` attributes on the Works section by combining them:

`className="works shell portfolio-section-with-arrows"`

This resolves the TypeScript/JSX production build error.

## Netlify Framer Motion type fix

Converted all custom cubic-bezier easing arrays to readonly tuples using `as const`, resolving the production TypeScript error.


## Certificates and scalable media galleries

- Add certificate files to `public/images/certificates/`.
- Edit `data/certificates.ts` to add certificate title, issuer, date, image, and optional verification URL.
- Certificate cards automatically create new responsive rows.
- Video project pages show 4 videos per row on desktop, 3 on medium screens, 2 on tablets, and 1 on small phones.
- Image project galleries show 5 thumbnails per row on desktop, 3 on medium screens, 2 on tablets, and 1 on small phones.

## Portfolio chatbot

A floating chatbot is included on every homepage visit. It answers questions locally from `data/chatbot.ts`, so it does not require an AI API key or create usage costs.

To update its knowledge, edit:

- `data/chatbot.ts` — profile details, answers, keywords, and suggested questions
- `components/PortfolioChatbot.tsx` — chatbot behavior and interface

Add a new answer by copying an object in `chatbotAnswers` and supplying keywords visitors may type. The production build was verified with `npm run build`.
