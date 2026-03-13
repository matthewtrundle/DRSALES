# Chris V4 Feedback Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement all remaining feedback from Chris's V4 review document (dated 3/8/2026) covering homepage, about, services, resources, contact, and footer changes.

**Architecture:** Content and layout changes across Next.js pages and React components. Mostly text/image swaps, section deletions, and Rendia video embed updates. No new pages needed.

**Tech Stack:** Next.js 14.2, React 18, TypeScript, Tailwind CSS, Framer Motion

---

## Change Summary — Organized by Page

Below is every request extracted from Chris's V4 document, with current site status and what needs to change.

---

## HOMEPAGE CHANGES

### Task 1: Force line breaks in hero headline

**Context:** Chris says "Can you force this: Your eyes deserve [break] an MD [break] who takes time to [break]"

**Current state:** The hero already has `Your eyes deserve an MD<br />who takes time to` — the break is between "MD" and "who". Chris wants an additional break between "deserve" and "an MD".

**Files:**
- Modify: `src/components/home/HeroSection.tsx`

**Step 1:** Change the h1 content from:
```
Your eyes deserve an MD
<br />
who takes time to
```
to:
```
Your eyes deserve
<br />
an MD
<br />
who takes time to
```

**Step 2:** Verify the hero renders correctly with 3 lines + rotating phrase on the 3rd line.

---

### Task 2: Reorder "What brings you in?" cards — move "cloudy vision" to center

**Context:** Chris says "Put my vision is cloudy or getting worse pane in the middle"

**Current order:** 1. Cloudy vision, 2. Stop wearing glasses, 3. Dry eyes
**Requested order:** 1. Stop wearing glasses, 2. Cloudy vision, 3. Dry eyes (OR keeping cloudy in middle)

Actually looking at the screenshots more carefully — the current order shows cloudy vision on the LEFT. Chris wants it in the MIDDLE. So reorder to: Glasses freedom → Cloudy vision → Dry eyes.

**Files:**
- Modify: `src/components/home/ServiceHighlights.tsx`

**Step 1:** Reorder the `situations` array: move "I want to stop wearing glasses" to index 0, keep "My vision is cloudy" at index 1 (middle), "dry eyes" at index 2.

---

### Task 3: Fix scroll gap issue on homepage photo dividers

**Context:** Chris says "The scroll for these two images on the landing page scroll into gaps — no idea how to fix this other than put bigger photos behind the scroll pane"

**Files:**
- Modify: `src/components/home/PhotoDivider.tsx` or homepage layout

**Step 1:** Investigate the scroll gap issue — likely the parallax effect creates visible gaps at edges. Fix by increasing image scale or adjusting overflow behavior.

---

### Task 4: Replace "Precision meets patience" image

**Context:** Chris says "My wife says this image in the Precision meets patience image is basically of my ear. Let's try this image instead on the first page" and links to a Google Drive image: "Weill Cornell OR BW warm" — `1OJVUqt9ydEA0m2Dnnz8esJpaFZsmQMB7`

**Files:**
- Download image from Google Drive link
- Save to: `public/images/`
- Modify: whichever component renders the "Precision meets patience" divider

**Step 1:** Download the new image from the provided Google Drive link.
**Step 2:** Replace the image source in the PhotoDivider component usage.

**⚠️ REQUIRES USER ACTION:** Need to download Google Drive image — Claude cannot access Google Drive directly. Ask Matt to provide the image file.

---

### Task 5: Update footer services list

**Context:** Chris's screenshot shows footer should read: "Cataract surgery · DMEK corneal transplantation · EVO ICL · Dry Eye/MGD"

**Current:** "Cataract surgery · DMEK corneal transplant · EVO ICL"

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1:** Add "· Dry Eye/MGD" to the footer tagline and change "transplant" to "transplantation".

---

### Task 6: Homepage DoctorIntro text update

**Context:** Chris's doc shows updated bio text for the homepage intro section. The text in the doc matches what's currently on the site fairly closely, but let's verify exact wording matches:

Current: "Dr. Sales spent 15 years at places like Stanford, Harvard, and Weill Cornell before coming home to Connecticut. He's done thousands of cataract and corneal transplants..."

Chris's doc says: "Dr. Sales spent 15 years at places like Stanford, Harvard, and Cornell before coming home to Connecticut. He's done thousands of cataract, corneal transplant, and refractive surgeries..."

**Files:**
- Modify: `src/components/home/DoctorIntro.tsx`

**Step 1:** Update the bio text to match exactly what Chris provided:
- "Weill Cornell" → "Cornell" (in this section only — casual mention)
- "cataract and corneal transplants" → "cataract, corneal transplant, and refractive surgeries"
- "He's trained surgeons around the world, and he's published 50+" → "He's trained surgeons around the world, and he's published 50+"

---

### Task 7: Testimonial section — verify quote is real

**Context:** Chris's screenshot shows "What people say" section with quote: "Dr. Sales restored my vision..." He asks "Is this a real quote? If it is, keep it, if it isn't lets get a real one. Also please delete location."

**Current state:** Per the review doc, testimonials were already REMOVED as placeholder content.

**Action:** If testimonial section still exists, remove location from any quote attribution. If section was already removed, no action needed. Verify.

---

## ABOUT PAGE CHANGES

### Task 8: Bump Care Philosophy to top of About page

**Context:** Chris says "Bump this somehow to the top" with a screenshot of the Care Philosophy section.

**Files:**
- Modify: `src/app/about/page.tsx`

**Step 1:** Move the Care Philosophy section from near the bottom to near the top of the About page — right after the hero/intro section.

---

### Task 9: Replace About page hero photo

**Context:** Chris says "Change this photo to this one" linking to Google Drive: `15r8mBnQKZN4Z6ZUTOx5F46DKz4HNhGgw`

**Files:**
- Download new image
- Save to `public/images/headshots/`
- Modify: `src/app/about/page.tsx` hero image path

**⚠️ REQUIRES USER ACTION:** Need Matt to provide the image file from Google Drive.

---

### Task 10: Delete procedures from Services overview

**Context:** Chris says "DELETE: DALK, PK, DSAEK" from the services overview page.

**Files:**
- Modify: `src/app/services/page.tsx` (the services overview/listing page)

**Step 1:** Remove DALK, PK, and DSAEK from any listing on the services overview.

---

### Task 11: Delete "Corneal Transplantation" and "Surgical Innovation" from Areas of Expertise

**Context:** Screenshot shows 6-card grid. Chris says "Delete Corneal Transplantation" and "Delete Surgical Innovation" from Areas of Expertise on the About page.

**Current:** DMEK Surgery, Cataract Surgery, EVO ICL, Corneal Transplantation(?), Dry Eye Treatment, Surgical Innovation

Wait — the agent report says there are only 4 cards. Let me re-check. The screenshot (image24) shows 6 cards. Chris wants to remove "Corneal Transplantation" and "Surgical Innovation", leaving 4.

**Files:**
- Modify: `src/app/about/page.tsx` — Areas of Expertise section

**Step 1:** Remove "Corneal Transplantation" and "Surgical Innovation" cards if they exist. Should leave: DMEK Surgery, Cataract Surgery, EVO ICL, Dry Eye Treatment.

---

### Task 12: Update Notable Recognition section

**Context:** Chris says:
- "Capitalize Inductee" (in "National Academy of Inventors inductee")
- Add "Achievement Award, American Academy of Ophthalmology (2018)"
- Add "Secretariat Award, American Academy of Ophthalmology"
- "DELETE WEINGEST etc" (Weingeist Award already deleted per prior review)
- Change "50+" stats display
- "Coached 300+ of Surgeons in DMEK at Skills Transfer Labs"

**Files:**
- Modify: `src/app/about/page.tsx` — Notable Recognition section

**Step 1:**
- Capitalize "Inductee" → "National Academy of Inventors Inductee (2023)"
- Verify Weingeist Award is deleted
- Verify Achievement Award and Secretariat Award are listed
- Update stat: "Coached 300+ Surgeons in DMEK at Skills Transfer Labs"

---

### Task 13: Update Global Outreach — Guatemala

**Context:** Chris says "Guatemala — delete 'and corneal surgery'" from Guatemala description.

**Current:** "Remote surgical outreach delivering cataract and corneal surgery to rural communities"
**Requested:** "Remote surgical outreach delivering cataract surgery to rural communities" (delete "and corneal")

Also: Tanzania description should be "Volunteer teacher serving children orphaned by HIV/AIDS"

**Files:**
- Modify: `src/app/about/page.tsx` or `src/data/siteData.ts` (wherever humanitarian data lives)

---

### Task 14: Delete "Health Equity" references

**Context:** Chris says "Delete everything that says Health Equity on this entire site"

**Status:** Per the previous review doc, this was already done. Verify no remaining references.

---

### Task 15: About page biography text

**Context:** Chris provides a complete biography in the document. Verify the current About page biography matches exactly.

**Files:**
- Modify: `src/app/about/page.tsx` or `src/data/siteData.ts`

**Step 1:** Compare current bio text against Chris's provided text and update if different. Key points:
- Fellowship at "Devers Eye Institute and the U.S. military's Joint Warfighter Refractive Surgery Center"
- "Tufts–Ophthalmic Consultants of Boston"
- At Weill Cornell: "helped pioneer DMEK surgery in New York City" and "established the laser cataract and ICL programs"
- At Iowa: "tenured Associate Professor", "advanced DMEK techniques for high-risk eyes", "launched the HumanOptics prosthetic iris and EVO ICL programs", "founded the Iowa Eye Device Lab and the CIRCAA cornea fellowship"
- Oko-Tek Inc. founded 2024
- Stanford BioDesign Global Faculty Training Program
- "Secretariat Award in 2025"

---

## CORNEAL TRANSPLANT PAGE CHANGES

### Task 16: Update stats bar on Corneal Transplant page

**Context:** Chris requests:
- "13+ Fellows Trained Worldwide" → "300+ Surgeons Trained Worldwide"
- "49+" → "50+"
- "<5%" → "High" with small font "Success Rate"

**Files:**
- Modify: `src/app/services/corneal-transplant/page.tsx`

**Step 1:** Update the stats bar:
```
1000+ DMEK Procedures Performed
300+ Surgeons Trained Worldwide
50+ Peer-Reviewed Publications
High Success Rate
```

---

### Task 17: Replace photo in "Expert Corneal Transplant Surgery" section

**Context:** Chris says replace the current photo with one from Google Drive: `1k1JDFhUpxADk_-sNmjgFnim-3VJTu7Uk`

**⚠️ REQUIRES USER ACTION:** Need Matt to provide this image.

---

### Task 18: Delete corneal erosion video from Corneal Transplant page

**Context:** Chris says "Delete corneal erosion video" — looking at image38, the third video is "Map-Dot-Fingerprint Dystrophy" (corneal erosion). Remove it.

**Files:**
- Modify: `src/app/services/corneal-transplant/page.tsx`

**Step 1:** Remove the Map-Dot-Fingerprint Dystrophy Rendia video embed.

---

### Task 19: Replace "Corneal Transplant Procedures" section with DMEK-only content

**Context:** Chris says "DELETE Treatment Options, Corneal Transplant Procedures, Each technique...." and "REPLACE WITH" a section focused only on DMEK: "Minimally Invasive Corneal Transplantation"

Delete: DSAEK, DALK, PK, Crosslinking procedure cards.
Replace with single DMEK section:

Title: "Minimally Invasive Corneal Transplantation"
Description: "The most advanced form of partial-thickness corneal transplant, DMEK replaces only the innermost layer of the cornea (about 10 microns thick). This technique offers the best vision, fastest visual recovery, and lowest rejection rates of all corneal transplants."

Key Benefits:
- Fastest visual recovery (often within weeks)
- Lowest rejection rate (less than 1%)
- Minimal change to corneal shape
- Best final vision potential

**Files:**
- Modify: `src/app/services/corneal-transplant/page.tsx`

---

### Task 20: Update "Why Choose Dr. Sales" section — publications text

**Context:** "49+ peer-reviewed publications in the field" → "50+ peer-reviewed publications and textbook chapters"

**Files:**
- Modify: `src/app/services/corneal-transplant/page.tsx`

---

### Task 21: Update corneal transplant overview text

**Context:** Chris provides new text for the overview section, replacing current text about DMEK and corneal transplant evolution. The new text should match what's in the V4 doc.

**Files:**
- Modify: `src/app/services/corneal-transplant/page.tsx`

---

## CATARACT PAGE CHANGES

### Task 22: Fix Rendia videos autoplay issue

**Context:** Chris says "Understanding, lifestyle, and astigmatism videos AUTOPLAY WITH VOLUME ON when the screen loads and they play simultaneously"

**Files:**
- Modify: `src/components/ui/RendiaVideo.tsx` or the Rendia embed code

**Step 1:** Ensure Rendia videos do NOT autoplay. Check the embed code for autoplay attributes and remove them if present.

---

### Task 23: Update cataract page description

**Context:** Current: "State-of-the-art cataract surgery with premium lens options designed to reduce your dependence on glasses after surgery."

Chris's doc says to keep this or make minor adjustment. Verify.

---

### Task 24: Change "Clear" to "Better" in cataract heading

**Context:** Chris says "Delete Clear, Replace with Better" — referring to the heading "Clear Vision at Every Distance"

**New heading:** "Better Vision at Every Distance"

**Files:**
- Modify: `src/app/services/cataract/page.tsx`

---

### Task 25: Update cataract page overview text

**Context:** Chris provides updated cataract overview text:
"Cataract surgery is one of the most commonly performed surgeries in the world and has an excellent safety record. Today's advanced techniques and lens options mean that cataract surgery is an opportunity to not just restore vision, but to optimize it for your lifestyle.

Dr. Sales offers both standard and laser-assisted cataract surgery, along with a full range of premium intraocular lens (IOL) options. His expertise in corneal surgery also means he can effectively manage patients with both cataracts and corneal conditions — including Corneal Astigmatism, Fuchs' Dystrophy, Anterior Basement Membrane Dystrophy (ABMD), and Salzmann Nodular Degeneration."

**Files:**
- Modify: `src/app/services/cataract/page.tsx`

---

### Task 26: Update Rendia video embeds on cataract page

**Context:** Chris provides two lists of Rendia embed codes (3/5/2026 and 3/6/2026). The 3/6/2026 list is more comprehensive and includes additional videos:
- How Cataract Surgery Improves Your Vision
- Treating Dry Eye Prior to Cataract Surgery
- Why You Wear Glasses
- Monovision with Monofocal or Astigmatism lens implants
- Posterior Capsular Opacification after Cataract Surgery
- After Your First Cataract Evaluation (playlist)
- Day of your Cataract Pre-Operative Planning Visit (playlist)

Plus items marked "AI to edit out Iowa":
- Dr. Sales Lens Implant Options
- Dr. Sales Cataract Consent
- Dr. Sales Cataract Post-Op Instructions

**Action:** Add the new Rendia video embeds that have embed codes. The "AI to edit out Iowa" items are future - can't be added yet.

**Files:**
- Modify: `src/app/services/cataract/page.tsx`

---

## VISION CORRECTION (EVO ICL) PAGE CHANGES

### Task 27: Replace photo on EVO ICL page

**Context:** Chris says "Replace photo with this one" linking to: `1g-xmGa6WqK8ezeEk4PG59w3d2a-f94zQ`

**⚠️ REQUIRES USER ACTION:** Need image from Google Drive.

---

### Task 28: Fix third video with question marks on Vision Correction page

**Context:** Chris says "The third video with question marks plays automatically." Screenshot (image49) shows 3 Rendia videos, the third shows "?" marks and auto-plays.

**Files:**
- Modify: `src/app/services/vision-correction/page.tsx`

**Step 1:** Check the third video embed — likely has no valid presentation ID or has autoplay. Fix the embed or remove the broken video.

---

### Task 29: Update EVO ICL page text

**Context:** Chris provides specific text for the EVO ICL section. Verify and update:
- "The EVO ICL (Implantable Collamer Lens) is a revolutionary vision correction option..."
- "Dr. Sales trained with the U.S. Military's Refractive Program, which implants the highest number of ICLs in the country."
- Procedure steps, candidacy info, etc.

**Files:**
- Modify: `src/app/services/vision-correction/page.tsx`

---

### Task 30: "Reversible" text in EVO ICL benefits

**Context:** Chris's doc shows "Reversible — The lens can be removed if it is ever indicated." — verify this wording.

---

## DRY EYE PAGE CHANGES

### Task 31: Replace dry eye hero photo

**Context:** Chris provides two Google Drive links for replacement:
1. Primary: `1x0yR3GaJ7SebgfSJwHne7Keho6LQskyG`
2. Fallback: `1NWNQIardQr714Pamk37TJA6mKB2oTZj6`

**⚠️ REQUIRES USER ACTION:** Need images from Google Drive.

---

### Task 32: Verify dry eye treatment options text

**Context:** Chris lists 4 treatment categories matching what the site already has. Verify exact wording matches:
1. Comprehensive Diagnostic Evaluation
2. In-Office Thermal and Cleansing Treatments
3. Prescription Therapies
4. Lifestyle & Environmental Optimization

---

## CONTACT PAGE CHANGES

### Task 33: Update contact page address

**Context:** Chris shows only Wethersfield location:
"1210 Silas Deane Highway, Wethersfield, CT 06109"

Current page shows both Wethersfield AND New Britain. Chris's V4 doc only shows Wethersfield. Verify if New Britain should be removed.

**Action:** Check with user — the screenshot only shows the footer, but the contact page itself may need both. Leave both for now unless explicitly told to remove.

---

## RESOURCES PAGE CHANGES

### Task 34: Delete DMEK section from Resources

**Context:** Chris says "Delete the DMEK Section" from resources page.

**Files:**
- Modify: `src/app/resources/page.tsx`

**Step 1:** Remove the DMEK guide/section from the resources page.

---

### Task 35: Add Fuchs' Dystrophy external guide

**Context:** Chris says "Put this in the Fuchs Section; have AI key-in a guide as you have on the left that lets them click to find the content faster, but don't change my writing"

Link: https://www.cornealdystrophyfoundation.org/an-introduction-to-fuchs-dystrophy-for-patients/

**Files:**
- Modify: `src/app/resources/page.tsx`

**Step 1:** Add a clickable table-of-contents/navigation guide to the Fuchs' Dystrophy section, linking to the external article. Add jump links for quick navigation within the content.

---

### Task 36: Delete 4 placeholder videos from Video Library

**Context:** Chris says "Let's Delete these 4 videos" — the 4 placeholder videos in the Video Library section.

**Files:**
- Modify: `src/app/resources/page.tsx`

**Step 1:** Remove the 4 placeholder video cards from the Video Library section.

---

### Task 37: Add Vimeo videos to resources (future)

**Context:** Chris says "Let's put my vimeo videos here (after we remove the Iowa icons from the powerpoints that are in them)" — lists:
- Cataract Lens Choices
- Fuchs 101
- DMEK consent
- Cataract Consent
- Cataract Postop
- DMEK Postop

**Status:** These can't be added yet — Iowa logos need to be removed first. Placeholder or skip for now.

---

### Task 38: Delete Articles section from Resources

**Context:** Chris says "DELETE THIS SECTION FOR NOW" with screenshot of the Articles section.

**Files:**
- Modify: `src/app/resources/page.tsx`

**Step 1:** Remove the Articles section entirely from the resources page.

---

### Task 39: Delete FAQ section from Resources

**Context:** Chris says to delete the FAQ section.

**Files:**
- Modify: `src/app/resources/page.tsx`

---

## SITE-WIDE CHANGES

### Task 40: Remove LASIK references

**Context:** Chris says "I will not be doing LASIK" (underlined, bold, italic emphasis).

**Status:** Per prior review, LASIK references were already removed (97+ references across 24+ files). Verify no remaining references.

---

### Task 41: Delete all location references (per Chris)

**Context:** Chris says "Also please delete location" — this appears to reference the testimonial attribution location, not all locations. Verify scope.

---

### Task 42: Add new Rendia video embeds across service pages

**Context:** Chris provides comprehensive Rendia embed codes for all services. Many new videos need to be added:

**Cataract (3/6/2026 list — add these new ones):**
- How Cataract Surgery Improves Your Vision
- Treating Dry Eye Prior to Cataract Surgery
- Why You Wear Glasses
- Monovision with Monofocal or Astigmatism lens implants
- Posterior Capsular Opacification after Cataract Surgery
- After Your First Cataract Evaluation (playlist)
- Day of your Cataract Pre-Operative Planning Visit (playlist)

**Cornea (keep existing, remove Map-Dot per Task 18):**
- Introduction to Fuchs Dystrophy (already embedded)
- Introduction to DMEK (already embedded)

**ICL (add new):**
- Refractive Error Introduction
- ICL: Post-Op

**Dry Eye/MGD (ALL NEW — add these):**
- What is Dry Eye?
- Meibomian Gland Dysfunction Introduction
- Dry Eye Therapy Introduction
- Warm Compress Therapy
- Anatomy: Tear Layer
- Tear Osmolarity
- Tear Breakup Time
- Sleeping with Your Eyes Open
- Eye Allergies
- BlephEx
- Intensed Pulsed Light (IPL) MGD Therapy
- Punctal Plugs

**Files:**
- Modify: `src/app/services/cataract/page.tsx`
- Modify: `src/app/services/vision-correction/page.tsx`
- Modify: `src/app/services/dry-eye/page.tsx`

---

## IMAGE CHANGES REQUIRING USER ACTION

These changes require downloading images from Google Drive. Matt needs to provide these files:

| Task | Description | Google Drive ID |
|------|-------------|-----------------|
| 4 | Homepage "Precision meets patience" replacement | `1OJVUqt9ydEA0m2Dnnz8esJpaFZsmQMB7` |
| 9 | About page hero photo replacement | `15r8mBnQKZN4Z6ZUTOx5F46DKz4HNhGgw` |
| 17 | Corneal transplant section photo | `1k1JDFhUpxADk_-sNmjgFnim-3VJTu7Uk` |
| 27 | EVO ICL page photo | `1g-xmGa6WqK8ezeEk4PG59w3d2a-f94zQ` |
| 31 | Dry eye hero photo (primary) | `1x0yR3GaJ7SebgfSJwHne7Keho6LQskyG` |
| 31 | Dry eye hero photo (fallback) | `1NWNQIardQr714Pamk37TJA6mKB2oTZj6` |

---

## IMPLEMENTATION ORDER

**Phase 1 — Text/Content changes (no images needed):**
Tasks 1, 2, 5, 6, 8, 10, 11, 12, 13, 15, 16, 18, 19, 20, 21, 22, 24, 25, 29, 34, 36, 38, 39

**Phase 2 — Rendia video embeds:**
Tasks 26, 42 (cataract, ICL, dry eye new videos)

**Phase 3 — Image replacements (needs user to provide files):**
Tasks 4, 9, 17, 27, 31

**Phase 4 — Verification & bugfixes:**
Tasks 3, 7, 14, 22, 28, 30, 32, 33, 40, 41

---

## VERIFICATION PLAN

After all changes, verify:
1. `npm run build` succeeds with no errors
2. Each page loads correctly in browser
3. No LASIK references remain: `grep -r "LASIK" src/`
4. No Health Equity references remain: `grep -r "Health Equity" src/`
5. No Weingeist references remain: `grep -r "Weingeist" src/`
6. DSAEK/DALK/PK removed from corneal transplant page
7. Crosslinking removed from corneal transplant page
8. Rendia videos don't autoplay
9. Stats updated (300+ surgeons, 50+ publications, High success rate)
10. All new Rendia video embeds render correctly
11. Footer shows updated services list
12. Care Philosophy appears near top of About page
13. Hero has correct line breaks
