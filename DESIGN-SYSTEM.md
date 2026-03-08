# Dr. Christopher S. Sales — Design System & UX Writing Guide

---

## 1) North Star Aesthetic Statement

This site should feel like walking into a really good eye doctor's office that also happens to have great taste. Not a luxury brand, not an academic hospital, not a tech startup. Think: clean white walls, natural light, a plant in the corner, and a doctor who actually sits down and talks to you. The design should be quiet enough that your mother-in-law thinks it's tasteful and specific enough that it doesn't look like every other doctor's website. Chris does a few things exceptionally well — the site should reflect that same focus. No clutter, no showing off, no pressure. Just: here's who I am, here's what I do, and here's how to reach me when you're ready.

---

## 2) Visual System

### Color Palette

| Token | Hex | Role | Usage Rules |
|-------|-----|------|-------------|
| **White** | `#FFFFFF` | Primary background | Default page background. Use for all main content areas. |
| **Warm White** | `#FAF8F5` | Secondary background | Alternating sections, card backgrounds, hero areas. Never stack two warm-white sections back-to-back. |
| **Stone** | `#F0EDE8` | Tertiary / border tone | Subtle dividers, input field backgrounds, hover states on cards. |
| **Warm Gray** | `#8C8578` | Secondary text | Dates, labels, captions, meta info. Never for body text. |
| **Body Text** | `#4A4A4A` | Primary body copy | All paragraph text, list items, descriptions. |
| **Charcoal** | `#3D3D3D` | Headings, emphasis | H1–H4, bold elements, footer background. |
| **Lavender** | `#9B8EC1` | Primary accent | CTAs, links, hover states, active states, small decorative elements. ONE accent color — no gold competing. |
| **Lavender Light** | `#E9E5F1` | Accent background | Subtle tag backgrounds, selected state backgrounds, light accent wash. |
| **Gold** | `#C9A96E` | Metallic accent (restricted) | ONLY for: the thin line under the logo, star ratings in testimonials, and the decorative border on the doctor's photo. Never for buttons, links, or backgrounds. Maximum 3 uses per page. |

**Rules:**
- No dark backgrounds except the footer and one optional CTA banner (charcoal only, never black).
- Never use lavender on lavender-light backgrounds (contrast fail).
- White and warm-white should alternate for section rhythm. The eye needs a subtle "in/out" breath.
- No gradients. No opacity tricks. Flat, honest color.

### Typography

| Role | Family | Weight | Size Scale |
|------|--------|--------|------------|
| **Headings** | Poppins | 500 (medium) — NOT 600/bold | H1: 40/48px · H2: 32/38px · H3: 24/30px · H4: 20/26px |
| **Body** | Inter | 400 regular, 500 for emphasis | Body: 17/28px · Small: 15/24px · Caption: 13/20px |

**Rules:**
- Poppins weight 500 only. Semibold (600) reads as too corporate/heavy. Medium is warm.
- Never ALL CAPS for headings. Sentence case everywhere.
- Max line length: 680px for body text (roughly 75 characters). This is non-negotiable for readability.
- Letter-spacing: 0 for body, +0.01em for H4 and smaller headings. No wide-tracking.
- No italic except for actual quotes or Latin terms.

### Spacing & Layout

| Rule | Value |
|------|-------|
| Section vertical padding | 80px top/bottom (desktop), 48px (mobile) |
| Space between section heading and content | 40px |
| Card gap | 24px |
| Container max-width | 1120px (slightly narrower than current 1200px — feels more editorial) |
| Side padding | 24px mobile, 40px tablet, 0 desktop (within container) |
| Grid | 12-column, but primarily use 1-col, 2-col, and 3-col layouts. No 4-col grids — they feel like a dashboard. |
| Section rhythm | Alternate: white-bg → warm-white-bg → white-bg. Every 3rd or 4th section can use charcoal bg for contrast. |
| Vertical rhythm unit | 8px base. All spacing should be multiples of 8. |

**Rules:**
- More whitespace than you think you need. When in doubt, add more.
- No more than 3 visual "things" competing in any viewport. If a section has cards + heading + CTA, that's the limit.
- Single-column layout is preferred for most content. Two-column for doctor intro (photo + text). Three-column only for service cards.
- Mobile: everything single-column, no exceptions.

### Photography & Video Direction

**Lighting:** Natural daylight or warm artificial light. Think: morning light through a window. No flash, no dramatic shadows, no ring lights.

**Framing:** Medium shots (chest up) or environmental shots (doctor at desk, in exam room). Never tight crop face-only glamour shots.

**Wardrobe:** White coat is fine. No suits, no ties, no "power" clothing. Rolled sleeves = good. Approachable.

**Backgrounds:** Real spaces. Exam rooms, hallways, office. Slightly blurred backgrounds are OK. Natural colors.

**What to avoid:**
- Glossy black studio photography
- Stock photos of any kind — especially "diverse group of doctors smiling"
- Heavily retouched/filtered images
- Patient photos without clear consent framing
- Equipment close-ups that look intimidating
- Anything that looks like a magazine cover

**Video direction:** iPhone-quality is fine. Selfie-angle talking-head videos are welcome. Authenticity over production value. Subtitle everything.

### Icons & Illustrations

**Rule: Almost none.**

- No decorative icons next to service names.
- No icon grids.
- No custom illustrations.
- The only acceptable icons: navigation arrows, phone icon, email icon, social media icons, and the hamburger menu.
- All icons: 1.5px stroke weight, charcoal color, no fill. Simple and functional.
- Never use icons as decoration. They should only appear where they serve a navigation or identification purpose.

---

## 3) Homepage Wireframe

### Section 1: Hero

**Purpose:** Set the tone immediately. Warm, specific, human. Not a sales pitch.

**Layout:** Single column, centered text. Warm-white background. Generous vertical padding (120px top, 100px bottom on desktop).

**Content:**
- **Small label:** `Wethersfield & New Britain, Connecticut`
- **Headline:** `A few things, done really well.`
- **Subhead:** `Dr. Chris Sales is an eye surgeon who specializes in cataract surgery, corneal transplants, and vision correction. He trained at Stanford, Harvard, and Iowa — and now he's here in Connecticut, taking his time with every patient.`
- **CTA 1:** `Schedule a visit` (lavender button)
- **CTA 2:** `Learn about Dr. Sales` (text link with arrow)

**Trust element (subtle):** A single line below the CTAs in warm-gray small text: `Starling Physicians · Board-certified ophthalmologist · Accepting new patients`

**What NOT to do:** No background image. No badge wall. No "See the Difference Experience Makes" (too slogan-y). No stats.

---

### Section 2: What brings you in? (Services as situations)

**Purpose:** Help patients self-identify by their situation, not by medical jargon.

**Layout:** White background. 3-column card grid (stacks to single on mobile).

**Content:**
- **Small label:** `How can we help`
- **Headline:** `What brings you in?`

**Cards (3):**

1. **"My vision is cloudy or getting worse"**
   Cataracts, corneal conditions, and Fuchs' Dystrophy. Dr. Sales will figure out what's going on and walk you through your options.
   → `Learn more`

2. **"I want to stop wearing glasses"**
   EVO ICL is an implantable lens that corrects vision without permanently altering your cornea — an excellent option for high prescriptions or dry eyes.
   → `Learn more`

3. **"My eyes are always dry or irritated"**
   Dry eye is real and treatable. We'll find the actual cause and build a plan that works for you — not just eye drops forever.
   → `Learn more`

**What NOT to do:** No icons on the cards. No "Learn More →" with a dramatic arrow animation. Just clean text cards with a subtle hover state (slight shadow increase).

---

### Section 3: About Dr. Sales (short intro)

**Purpose:** Put a human being on the page. Not a CV.

**Layout:** Two-column on desktop (photo left, text right). Warm-white background.

**Content:**
- **Photo:** Dr. Sales headshot, natural lighting, slight border-radius (12px). Thin gold accent border on one edge (this is one of the 3 allowed gold uses).
- **Small label:** `Your doctor`
- **Headline:** `Chris Sales, MD`
- **Body copy:** `Dr. Sales spent 15 years at places like Stanford, Harvard, and Weill Cornell before coming home to Connecticut. He's done over a thousand corneal transplants. He's published 50+ research papers. But what his patients tend to mention first is that he actually listens.`

  `Everything he does is elective — meaning there's no pressure, no urgency, and no scare tactics. You come in, you talk, and together you figure out if something makes sense for you.`
- **CTA:** `More about Dr. Sales` (text link)

**Trust element:** Below the body copy, a single understated line: `Brown · Tufts · Harvard · Stanford · Iowa · Cornell` (just the school names in warm-gray, small text, no logos)

---

### Section 4: How this practice is different

**Purpose:** This is the "I listen" section Chris was emphatic about. It directly addresses what makes him different from the academic/ego/fear-mongering norm.

**Layout:** White background. Single column, centered. Three short blocks with subtle lavender-light left border.

**Content:**
- **Headline:** `A different kind of eye doctor`

**Block 1:** `No rush.` Every visit starts with a conversation. Dr. Sales takes the time to understand what's bothering you and what matters to you — before talking about procedures.

**Block 2:** `No pressure.` Everything here is elective. That means you're always in the driver's seat. No fear tactics, no "you need this done yesterday." Just honest information so you can decide.

**Block 3:** `No ego.` You won't find a wall of awards in the waiting room. Dr. Sales trained at top programs and publishes research because he cares about doing good work — not because he wants you to be impressed.

**What NOT to do:** No "Our Philosophy" heading (too corporate). No blockquote from the doctor (too self-congratulatory). Just plain statements.

---

### Section 5: A few words from patients

**Purpose:** Social proof, but human and understated.

**Layout:** Warm-white background. Single testimonial displayed at a time with simple prev/next. No auto-advance.

**Content:**
- **Small label:** `From our patients`
- **Headline:** `What people say`
- **Testimonial format:**
  - Quote text (in body font, not italic, not huge)
  - Name initials + procedure + location
  - 5 gold stars (one of the 3 allowed gold uses)
- **No "Based on 100+ reviews" badge.** If reviews exist on Google, link to them with: `Read more reviews on Google`

---

### Section 6: Get in touch (CTA)

**Purpose:** Simple, calm invitation. Not a hard sell.

**Layout:** Charcoal background, centered text, white type.

**Content:**
- **Headline:** `Want to come in?`
- **Subhead:** `We're accepting new patients at both our Wethersfield and New Britain offices. Give us a call or schedule online — whatever's easier.`
- **CTA 1:** `Schedule a visit` (lavender button)
- **CTA 2:** `(860) 826-4460` (phone link, white text)

**What NOT to do:** No "Now Accepting New Patients" (sounds like a sign on a strip mall). No "Take the first step toward better vision" (AI slop). No "Contact Us" (cold and corporate).

---

## 4) Service Architecture

Organize by **patient situation**, not by disease or procedure name.

### Pathway 1: "My vision is cloudy"
*For patients with cataracts or corneal conditions like Fuchs' Dystrophy.*
Covers: Cataract surgery (standard and premium), DMEK corneal transplant.

### Pathway 2: "I want to ditch my glasses"
*For patients interested in vision correction — especially those with high prescriptions, thin corneas, or dry eyes.*
Covers: EVO ICL implantable lens.

### Pathway 3: "My eyes are always dry"
*For patients dealing with chronic dryness, irritation, or gritty eyes.*
Covers: Dry eye evaluation, in-office treatments, long-term management.

### Pathway 4: "My other doctor referred me"
*For patients sent by their optometrist or another physician.*
Covers: Referral process, what to expect, physician-to-physician resources.

### Pathway 5: "I'm not sure — I just know something's off"
*For patients who haven't been diagnosed but know their eyes aren't right.*
Covers: Comprehensive evaluation, conversation about symptoms, figuring out next steps together.

**Rules:**
- Each pathway page leads with the patient's experience, NOT with procedure names.
- Procedure details (DMEK, ICL, etc.) live inside the pathway pages as expandable sections — not as top-level navigation.
- Never list DSAEK, DALK, PK in top-level navigation or card descriptions. Those are surgeon-to-surgeon details that belong on the detailed corneal page and the physician referral page only.

---

## 5) Copy System

### Voice Guidelines

| Do | Don't |
|----|-------|
| Write like you're explaining something to a smart friend | Write like a medical textbook |
| Use "Dr. Sales" in third person on most pages; "I" only in his own quotes | Use "we" ambiguously (who is "we"?) |
| Vary sentence length. Short ones land harder. | Write all sentences the same length |
| Be specific: "over a thousand DMEK surgeries" not "extensive experience" | Use vague superlatives: "world-renowned", "leading expert" |
| Acknowledge that patients are nervous or unsure | Assume patients already know what they want |
| Name the patient's feeling: "If you've been told there's nothing more to do..." | Use clinical detachment: "Patients presenting with..." |
| Use plain English: "the clear front surface of your eye" | Use unexplained jargon: "endothelial keratoplasty" |
| End pages with a soft CTA: "If this sounds like you, we'd be happy to talk." | End pages with urgency: "Don't wait — book today!" |

### CTA Library (10 calm options)

1. `Schedule a visit`
2. `Get in touch`
3. `Let's talk about it`
4. `See if this is right for you`
5. `Ask us a question`
6. `Come in for a conversation`
7. `Give us a call`
8. `Request an appointment`
9. `Learn more about this`
10. `Ready when you are`

### Red Flag Phrases — Never Use These

| Phrase | Why it fails |
|--------|-------------|
| "World-class" / "World-renowned" | Ego. Let the training speak for itself. |
| "Cutting-edge" / "State-of-the-art" | AI buzzword soup. Everyone says this. |
| "Elevate your vision" / "Transform your life" | Saks Fifth Avenue energy. |
| "Where compassion meets innovation" | The single most overused medical tagline. |
| "Don't wait" / "Act now" / "Limited availability" | Fear-based urgency. |
| "Bespoke" / "Curated" / "Tailored experience" | Luxury branding. We're a doctor's office. |
| "The gold standard" (in headlines) | OK in clinical descriptions, not in marketing copy. |
| "Journey" (as in "your vision journey") | AI-generated copy tell. |
| "Pioneering" / "Trailblazing" | Ego-forward. |
| "See the difference" / "See clearly" / puns on "vision" | Overdone. Every eye doctor does this. |
| "Refined at the highest levels" | Too self-congratulatory. |
| "Comprehensive care" | Means nothing. Be specific about what you actually do. |
| "Take the first step" | Cliche urgency framing. |
| "Book now" | Aggressive. |
| "Premier" / "Elite" / "Exclusive" | Luxury signaling. Opposite of bakery vibe. |

---

## 6) "Not Saks / Not Academic" Checklist

For designers and developers to gut-check every decision:

1. **DO** use warm whites and natural tones. **DON'T** use black backgrounds, dark navy, or high-contrast luxury palettes.

2. **DO** show credentials in running text ("trained at Stanford and Harvard"). **DON'T** build credential walls, badge grids, or logo carousels.

3. **DO** keep the About page to 3 paragraphs max plus a short timeline. **DON'T** list every award, every membership, every mission trip.

4. **DO** use Poppins Medium (500). **DON'T** use bold/semibold weights or all-caps — both read as aggressive.

5. **DO** use one accent color (lavender). **DON'T** use gold as a primary accent — it reads as luxury/finance.

6. **DO** write CTAs that sound like a friend ("Schedule a visit"). **DON'T** write CTAs that sound like a sales funnel ("Book Your Consultation Now").

7. **DO** organize services by patient experience ("My vision is cloudy"). **DON'T** organize by procedure name or disease taxonomy.

8. **DO** let testimonials breathe — one at a time, manual navigation. **DON'T** auto-rotate, use progress bars, or show "100+ reviews" badges.

9. **DO** use real photos with natural light. **DON'T** use stock photography, glossy studio shots, or heavily filtered images.

10. **DO** leave room to grow (empty sections are OK). **DON'T** fill space with filler content, lorem ipsum dressed up, or "coming soon" badges.

11. **DO** make the phone number prominent and clickable. **DON'T** hide contact info behind a form — some people just want to call.

12. **DO** pass the "wife test" — would someone with taste but no patience for self-promotion approve? **DON'T** pass only the "impressed surgeon test" — impressing colleagues is not the goal.

---

## 7) Component Kit

### Buttons

**Primary Button (Lavender)**
- Background: `#9B8EC1` / Text: `#FFFFFF`
- Border-radius: `8px` (not 40px — pills feel too trendy/startup)
- Padding: `14px 28px`
- Font: Inter 500, 15px
- Hover: darken to `#7E6EAB`, subtle shadow
- Focus: 2px lavender outline, 2px offset
- Transition: background 200ms ease, box-shadow 200ms ease
- No icons inside buttons unless it's an arrow for "Schedule a visit →"

**Secondary Button (Outline)**
- Border: 1.5px `#3D3D3D` / Text: `#3D3D3D`
- Same border-radius, padding, font as primary
- Hover: fill charcoal, text white
- Use for secondary actions only

**Text Link**
- Color: `#9B8EC1`
- Underline on hover (not animated underline — just standard CSS underline)
- Arrow (→) suffix for navigation links, no arrow for inline links

### Cards (Service Cards)

- Background: white
- Border: 1px `#F0EDE8` (stone)
- Border-radius: 12px
- Padding: 32px
- Shadow: none by default
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.06)` + translateY(-2px)
- No images in cards. Text only.
- Structure: Headline (Poppins 500, 20px) → Description (Inter 400, 16px) → Link (lavender text link)
- Transition: all 250ms ease
- Accessibility: entire card is a link (wrap in `<a>`), visible focus ring

### Testimonials

- Display one at a time, not a carousel with auto-advance
- Quote: Inter 400, 19px, `#3D3D3D`, line-height 1.7
- No quotation mark decorations (no giant " symbol)
- Attribution: warm-gray, 14px — "M.R. · DMEK surgery · Hartford, CT"
- Stars: 5 small gold stars, 16px, inline above the quote
- Navigation: simple left/right text buttons ("Previous" / "Next"), not icon circles
- No progress bar, no dot indicators
- Accessibility: `role="region"` with `aria-label="Patient testimonials"`, `aria-live="polite"` on quote container

### FAQ / Accordion

- Clean expand/collapse with `+` / `−` toggle (not chevron)
- Question: Poppins 500, 18px
- Answer: Inter 400, 16px, appears with 200ms ease-in
- Divider: 1px stone between items
- Only one item open at a time
- Padding: 20px vertical per item
- Accessibility: `<details>` / `<summary>` or proper ARIA accordion pattern with `aria-expanded`

### Video Embed

- Simple responsive container (16:9 aspect ratio)
- Rounded corners: 12px
- No autoplay, no custom play button overlay
- Caption below: Inter 400, 14px, warm-gray
- If no video available yet, don't show a placeholder. Just don't include the section.

### Contact / Intake Form

- Inputs: Inter 400, 16px
- Input background: `#F0EDE8` (stone) with no visible border
- Focus state: 2px lavender border, white background
- Border-radius: 8px
- Labels above inputs (not floating labels — those are a usability problem)
- Required fields: red asterisk, but only show validation on submit, not on blur
- Submit button: primary lavender button
- Form should be short: Name, Email, Phone, "What brings you in?" (textarea), Submit
- Accessibility: proper `<label>` elements, `aria-required`, visible error messages linked with `aria-describedby`

### Banner / Announcement Bar

- Only use if there's actual news (e.g., "Now accepting patients in New Britain")
- Warm-white background, charcoal text, centered, 14px
- Dismissible with small X button
- Persists via localStorage so it doesn't reappear after dismissal
- Don't use for evergreen CTAs — that's what the header button is for

### Footer

- Charcoal background (`#3D3D3D`), white and warm-gray text
- 3-column layout: Info + Quick Links + Contact
- Logo/name: Poppins 500, 18px, white
- Links: warm-gray, hover to white
- Social icons: 20px, warm-gray, hover to white. Simple SVG, not brand colors.
- Bottom bar: copyright + privacy + accessibility + sitemap links
- No decorative elements. No gold accents. Clean and functional.
- Accessibility: `<footer>` landmark, proper link labels, sufficient color contrast (test gray on charcoal)

---

## 8) QA Rubric

Score each item 1–5 (1 = fails, 5 = nails it). Target: 4+ on every item. Anything below 3 = must fix before launch.

| # | Check | What to look for |
|---|-------|-----------------|
| 1 | **Bakery test** | Does the homepage feel warm, calm, and breathable — or clinical and impressive? |
| 2 | **Wife test** | Would someone with good taste and no tolerance for ego say "this is tasteful"? |
| 3 | **3-second scan** | Can a first-time visitor understand who this doctor is and what he does within 3 seconds? |
| 4 | **No AI smell** | Read all copy aloud. Does any sentence sound like ChatGPT wrote it? Flag and rewrite. |
| 5 | **Credential restraint** | Are credentials woven into narrative (good) or displayed as trophy walls (bad)? |
| 6 | **One accent color** | Is lavender the only accent? Is gold restricted to its 3 allowed uses? Any rogue colors? |
| 7 | **Whitespace** | Does every section have enough breathing room? Can you remove anything and make it better? |
| 8 | **CTA tone** | Are all CTAs calm and inviting? Any "Book Now" or "Don't Wait" energy? |
| 9 | **Service clarity** | Are services organized by patient situation, not medical jargon? Can a non-doctor navigate? |
| 10 | **Mobile single-column** | Does every section stack cleanly to single-column on mobile with no cramped grids? |
| 11 | **Line length** | Is body text max 680px wide on desktop? Anything wider = hard to read. |
| 12 | **Focus states** | Tab through the entire site. Is every interactive element clearly focused? |
| 13 | **Color contrast** | Run all text/background combinations through a WCAG AA contrast checker. All must pass. |
| 14 | **Image authenticity** | Are all photos real (not stock)? If placeholder, is the space left empty rather than filled with stock? |
| 15 | **Simplicity** | If you removed one more section, would the site still work? If yes, remove it. |

---

## Implementation Priority

**Phase 1 (Now):**
- Update color usage: lavender as primary accent, gold restricted
- Rewrite homepage copy (hero, services, doctor intro)
- Add "A different kind of eye doctor" section
- Gut the About page (3 paragraphs + short timeline + 3 awards max)
- Change button border-radius from pill (40px) to rounded (8px)
- Update Poppins weight from 600 to 500
- Reframe services as patient situations

**Phase 2 (Soon):**
- Remove/consolidate Innovation page content into a line in bio
- Remove For Physicians from main nav (keep as footer link or low-key link)
- Replace testimonial carousel with simple one-at-a-time display, no auto-advance
- Add physician referral pathway as a service pathway
- Update all CTAs site-wide

**Phase 3 (Later, when content exists):**
- Add real video embeds
- Add real patient photos
- Expand blog/educational content
- Add the subtle personal touches Chris mentioned
