---
name: Boitumelo B Productions
description: Elite Australian creative production house specialising in independent documentary depth and commercial visual cinema.
colors:
  primary: "#CB8D44"
  primary-light: "#E2A65F"
  primary-dark: "#9F6C2E"
  canvas: "#000000"
  surface-deep: "#081215"
  surface-card: "#070C0E"
  surface-teal: "#183036"
  border-subtle: "#24434B"
  text-display: "#FFFFFF"
  text-body: "#C3CDD0"
  text-muted: "#8E9DA1"
typography:
  display:
    fontFamily: "Copperplate, Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: "1.02"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Copperplate, Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 3rem)"
    fontWeight: 600
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: "1.25"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0.01em"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "0.15em"
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.4"
    letterSpacing: "0.08em"
  micro:
    fontFamily: "monospace"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1"
    letterSpacing: "0.1em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.canvas}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-display}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-teal}"
    textColor: "{colors.primary-light}"
  card-film:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-display}"
    rounded: "{rounded.sm}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-display}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: Boitumelo B Productions

## Overview

**Creative North Star: "The Anamorphic Archive"**

Boitumelo B Productions exists as an elite digital exhibition space capturing the craft, gravity, and emotional resonance of prestige Australian visual cinema. The design evokes the tactile atmosphere of a private cinema grading suite: unyielding black surfaces, calibrated warm tungsten highlights, physical celluloid textures, and surgical optical precision. Every interaction is paced with cinematic intentionality, prioritising patient revelation and editorial authority over rapid digital noise.

The interface rejects commoditised video agency tropes—eschewing playful pastels, floating pastel cards, generic software-as-a-service gradients, and excessive bubbly corner radii. Instead, it embraces high-contrast letterboxed frames, 2.39:1 anamorphic ratios, optical lens calibration marks, and measured typography that honours both narrative documentary truth and commercial visual spectacle.

**Key Characteristics:**
- **Cinematic Letterboxing:** Pure black margins (`#000000`) and structured 2.39:1 widescreen apertures that elevate video works into genuine theatrical events.
- **Tungsten & Teal Contrast:** Deep atmospheric ocean-slate surfaces (`#183036`) illuminated by focused warm gold accents (`#CB8D44`), mirroring traditional film colour timing.
- **Surgical Optical Precision:** Micro 2px chamfers, razor-thin borders, and discrete viewfinder HUD framing brackets that evoke high-end ARRI and RED cinema cameras.
- **Uncompromising Editorial Rigour:** Deliberate typography balancing display roman elegance with high-legibility tabular metadata and zero single-word heading orphans.

## Colors

The colour system is derived from cinematic grading suites: absolute blacks for deep contrast, atmospheric teals for spatial volume, and warm gold deployed with extreme restraint as an optical focal point.

### Primary
- **Warm Gold** (`#CB8D44`): The primary focal instrument. Reserved strictly for primary conversion actions, active navigation states, interactive scrubbing handles, and live timecode indicators.
- **Radiant Amber** (`#E2A65F`): The elevated illumination state. Used exclusively for button hover illumination, focused lens flares, and interactive highlight pulses.
- **Deep Bronze** (`#9F6C2E`): The pressed and active state for primary gold interactive targets.

### Neutral
- **Letterbox Black** (`#000000`): The absolute canvas. Provides theatrical contrast and letterbox framing for edge-to-edge video exhibitions.
- **Atmospheric Canvas** (`#081215`): Deep oceanic baseline tone used behind hero backdrops and interactive ambient projections.
- **Card Surface Black** (`#070C0E`): Elevated card and container background providing subtle structural separation from pure black without introducing harsh borders.
- **Grading Suite Teal** (`#183036`): The secondary structural tone. Applied to interactive surface backplates, tags, filter pills, and secondary containers.
- **Precision Border Teal** (`#24434B`): Razor 1px boundary lines, grid dividers, viewfinder brackets, and card outlines.
- **Pure White** (`#FFFFFF`): Primary display headlines and high-contrast titles providing maximum visual punch against dark backdrops.
- **Secondary Body Silver** (`#C3CDD0`): High-legibility editorial prose and narrative descriptions delivering accessible contrast (>10:1) without ocular fatigue.
- **Muted Metadata Grey** (`#8E9DA1`): Technical metadata, aspect ratios, frame rates, and archival credits.

### Named Rules
**The Rarity of Gold Rule.** Warm Gold (`#CB8D44`) must never occupy more than 10% of any given screen surface. Its prestige and directional power depend entirely on its scarcity. When everything glows gold, nothing commands attention.

**The Contrast Floor Rule.** All text elements against dark surfaces must meet or exceed WCAG 2.2 AA contrast standards (minimum 4.5:1 for body copy; pure white `#FFFFFF` achieves 21:1 against `#000000`, and `#C3CDD0` delivers 11.2:1).

## Typography

**Display Font:** `Copperplate`, `Cinzel`, `Trajan Pro`, `Georgia`, `serif`  
**Body Font:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`  
**Editorial Serif / Quote Font:** `Georgia`, `Cambria`, `Times New Roman`, `serif`  
**Technical Mono Font:** `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `monospace`  

**Character:** A deliberate union between the monumental dignity of cinematic title cards and the crisp, legible utility of a modern director's production binder.

### Hierarchy
- **Display** (Bold 700, `clamp(2.25rem, 5vw, 4.5rem)`, line-height `1.02`, letter-spacing `-0.025em`, uppercase): Monumental cinematic statements, hero titles, and major landing page headlines.
- **Headline** (Semi-bold 600, `clamp(1.75rem, 3.5vw, 3rem)`, line-height `1.1`, letter-spacing `-0.02em`): Section headings, production titles, and major narrative declarations.
- **Title** (Semi-bold 600, `clamp(1.25rem, 2vw, 1.75rem)`, line-height `1.25`, letter-spacing `-0.01em`): Project card names, service titles, and modal headers.
- **Editorial Quote** (Regular 400 italic, `clamp(1.25rem, 2.2vw, 1.85rem)`, line-height `1.45`, letter-spacing `-0.01em`): Director statements, client testimonials, and curated production quotes.
- **Body** (Regular 400, `1rem` / `16px`, line-height `1.6`, letter-spacing `0.01em`): Case study overviews, technical narratives, service descriptions, and booking form copy (restricted to 65–75 characters per line).
- **Label / Metadata** (Semi-bold 600, `0.75rem` / `12px`, letter-spacing `0.15em`, uppercase): Viewfinder HUD metrics, category filters, button text, timecodes, and technical specifications.

### Named Rules
**The Balanced Heading Rule.** All headings (`h1` through `h6`) must enforce `text-wrap: balance` to prevent awkward typography line breaks and single-word orphans.

**The Monospace Timecode Rule.** All technical metadata, frame rates, lens focal lengths, and video timecodes must render in tabular monospace figures to prevent layout jitter during scrub and playback.

## Layout

The spatial system is constructed around a flexible 12-column responsive grid framed within cinematic letterboxed bounds.

- **Letterboxed Canvas:** Full-width viewport with fixed horizontal safety padding (`px-4 sm:px-6 lg:px-8 xl:px-12`) ensuring content never crowds the physical screen edges.
- **Max Content Container:** `max-w-7xl` (`1280px`) for structured archives and forms; unrestricted edge-to-edge bounds for full-bleed video showreels.
- **Cinematic Aspect Ratios:** Standardised to 16:9 (`aspect-video`) for preview thumbnails and 2.39:1 for theatrical feature hero experiences.
- **Spacing Scale:** Built on a strict 8px base rhythm (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`), ensuring vertical cadence feels spacious, unhurried, and dignified.
- **Safe Area Insets:** Native compliance with `env(safe-area-inset-*)` across mobile viewports, safeguarding corner navigation and home indicators on mobile devices.

## Elevation & Depth

Boitumelo B Productions conveys depth through physical light, tonal layering, and optical atmosphere rather than arbitrary drop-shadows or floating neobrutalist borders.

Depth is structured across four deliberate planes:
1. **Plane 0 (Canvas Void):** Pure Black (`#000000`) with subtle SVG fractal film grain texture (opacity 0.035), grounding the user in a cinema auditorium.
2. **Plane 1 (Atmospheric Base):** Deep Slate (`#081215`) to Slate Teal (`#0E1D21`) subtle radial gradients simulating ambient light bouncing off an exhibition screen.
3. **Plane 2 (Card & Stage Surfaces):** Elevated Black (`#070C0E`) cards enclosed by 1px Precision Border Teal (`#24434B`), hovering gently above the canvas.
4. **Plane 3 (Optical Focus & Overlays):** Viewfinder HUD overlays, sticky navigation bars (`rgba(0, 0, 0, 0.85)` with `backdrop-blur-md`), and interactive light glows.

### Shadow & Glow Vocabulary
- **Cinema Ambient Glow** (`0 0 35px rgba(203, 141, 68, 0.4), 0 0 14px rgba(203, 141, 68, 0.2)`): Applied to active playback rings, focused gold CTA buttons, and camera recording status indicators.
- **Cinematic Deep Elevation** (`0 25px 70px -15px rgba(0, 0, 0, 0.9)`): Applied to full-screen video modals and floating booking brief drawers.
- **Subtle Surface Lift** (`0 8px 30px rgba(0, 0, 0, 0.6)`): Applied to project filmstrip cards on hover.

### Named Rules
**The Tonal Depth Rule.** Depth is created through value contrast and light bloom—never through heavy artificial black drop-shadows on flat black surfaces. If an element must lift, illuminate its edge with border luminance (`#24434B`) or ambient gold bloom (`rgba(203, 141, 68, 0.2)`).

## Shapes

The form language is disciplined, engineered, and reminiscent of machined cinema camera bodies, matte boxes, and aluminium lens barrels.

- **Micro-chamfer Radii (2px / `rounded-sm`):** Applied to primary buttons, project cards, viewfinder brackets, and filter pills. Soft, pill-shaped bubbles are strictly prohibited.
- **Input Radii (4px / `rounded`):** Applied to booking wizard inputs, textareas, and select elements to provide subtle touch affordance while maintaining architectural crispness.
- **Optical Circular Radii (`rounded-full`):** Reserved exclusively for circular playback triggers, audio mute toggles, and lens crosshair reticles.
- **Camera Viewfinder Brackets:** Distinctive 8px L-shaped corner brackets bordering video players and hero banners, simulating an ARRI ALEXA viewfinder framing mask.

### Named Rules
**The Lens-Grade Precision Rule.** Corner radii must never exceed 4px on rectangular surfaces. Organic, playful, or bubbly shapes dilute the technical gravitas of the studio and are strictly forbidden.

## Components

### Buttons
Interactive controls designed with decisive weight, immediate visual feedback, and tactile precision.
- **Primary Button (`button-primary`):** Warm Gold background (`#CB8D44`), Letterbox Black text (`#000000`), 2px border radius (`rounded-sm`), uppercase tracking (`letter-spacing: 0.15em`), padding `14px 28px` (minimum touch height 48px).
- **Primary Hover (`button-primary-hover`):** Transitions within 200ms to Radiant Amber (`#E2A65F`) with subtle ambient glow (`0 0 20px rgba(203, 141, 68, 0.4)`) and a `-1px` vertical lift.
- **Secondary Button (`button-secondary`):** Transparent background with 1px Precision Border Teal (`#24434B`), Pure White text (`#FFFFFF`), uppercase tracking (`0.15em`), padding `14px 28px`.
- **Secondary Hover (`button-secondary-hover`):** Transitions to Grading Suite Teal (`#183036`) background with Warm Gold text (`#CB8D44`) and border illumination.
- **Focus State:** All buttons display a crisp 2px Warm Gold focus ring with a 3px offset (`outline: 2px solid #CB8D44; outline-offset: 3px;`).

### Cards & Project Containers
- **Surface:** Card Surface Black (`#070C0E`) encased in a 1px border (`#24434B`).
- **Internal Padding:** `24px` (`p-6`) on desktop, `16px` (`p-4`) on mobile devices.
- **Interaction:** On hover, the border illuminates to Teal Light (`#3A5C65`), thumbnail media scales subtly (`scale-105` over 600ms ease), and title shifts to Warm Gold (`#CB8D44`).

### Inputs & Form Fields
- **Surface:** Deep Card Black (`#070C0E`) with 1px border (`#24434B`) and 4px radius (`rounded`).
- **Typography:** Pure White (`#FFFFFF`) input value with Muted Grey (`#8E9DA1`) placeholder text.
- **Touch Target:** Minimum height 48px on mobile (`py-3 px-4`) with a minimum font size of `16px` (`text-base sm:text-sm`) to prevent iOS Safari auto-zoom.
- **Focus:** Border transitions to Warm Gold (`#CB8D44`) with an ambient 2px outer glow (`rgba(203, 141, 68, 0.25)`).

### Navigation
- **Header Shell:** Fixed at top, Letterbox Black (`rgba(0, 0, 0, 0.85)`) with `backdrop-blur-md` and a 1px bottom border (`rgba(36, 67, 75, 0.4)`).
- **Navigation Links:** Pure White (`#FFFFFF`) or Secondary Silver (`#C3CDD0`), uppercase typography (`0.12em` tracking, 13px font size).
- **Active State:** Warm Gold (`#CB8D44`) text with an animated bottom indicator notch.
- **Mobile Menu:** Full-screen takeover drawer with generous touch targets (minimum 48px height) and rapid 250ms dismiss transitions.

### Signature Component: Viewfinder HUD & Letterbox Aperture
The signature visual hallmark of Boitumelo B Productions.
- **Anamorphic Framing:** Framing guides overlaying cinematic media with 2.39:1 aspect ratio guides.
- **Framing Brackets:** Crisp 8px L-shaped precision brackets at all four corners in Muted Teal (`#24434B`).
- **Camera Telemetry:** Real-time display of camera status (`REC` solid crimson dot `#FF4D4D`), frame rate (`24 FPS`), shutter angle (`180.0°`), colour space (`ARRI LogC4 / ProRes 4444`), and project timecodes in tabular monospace figures.

## Do's and Don'ts

### Do:
- **Do** use Australian English spelling across all interface copy, metadata, and studio communications (*specialising*, *visualise*, *colour*, *organisation*, *rigour*, *calibrated*).
- **Do** enforce `text-wrap: balance` on all headings and `text-wrap: pretty` on all editorial body paragraphs.
- **Do** maintain a minimum touch target size of 44×44px (ideally 48px) for all interactive buttons, links, and form elements.
- **Do** preserve the 10% rarity cap on Warm Gold (`#CB8D44`), reserving it for moments requiring genuine user focus or conversion.
- **Do** use tabular monospace figures for timecodes, durations, coordinates, and technical film specifications.
- **Do** respect user system motion preferences via `@media (prefers-reduced-motion: reduce)`, disabling large transforms while maintaining instant visual state feedback.

### Don't:
- **Don't** introduce generic SaaS pastel colours (purple, pink, indigo, neon blue) or cheerful rounded bubble cards.
- **Don't** use decorative drop-shadows on black surfaces; convey depth through subtle lighting gradients and border illumination.
- **Don't** permit headings to wrap with a single dangling word on the final line (orphans).
- **Don't** render form inputs with font sizes below 16px on mobile viewports to avoid triggering iOS Safari viewport zooming.
- **Don't** use animated pulsing status dots for purely decorative reasons; reserve status indicators for actual live camera states or audio playback.
- **Don't** autoplay audio under any circumstance. All video playback must initialise muted with clear, accessible user audio toggles.
