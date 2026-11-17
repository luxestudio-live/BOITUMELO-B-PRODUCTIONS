---
name: Boitumelo B Productions
description: Elite Australian creative production house specialising in independent documentary depth and commercial visual cinema.
colors:
  bg: "#FFFFFF"
  bg-soft: "#F6F2EA"
  ink: "#0B1320"
  ink-deep: "#070D16"
  ink-soft: "#4A5568"
  gold: "#B08D57"
  gold-deep: "#785920"
  gold-light: "#E8DCC3"
  line: "#E6E1D6"
  white-on-dark: "#FFFFFF"
  text-on-dark: "#D4DCE8"
typography:
  display:
    fontFamily: "Cinzel, Cormorant Garamond, Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: "1.02"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cinzel, Cormorant Garamond, Playfair Display, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 3rem)"
    fontWeight: 500
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: "1.25"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "0.01em"
  hud:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "1.2"
    letterSpacing: "0.1em"
  telemetry:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "0.2em"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "0.12em"
rounded:
  sm: "2px"
  btn: "2px"
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
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gold-deep}"
    textColor: "{colors.bg}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.gold-deep}"
  card-film:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: Boitumelo B Productions

## Overview

**Creative North Star: "The Anamorphic Archive"**

Boitumelo B Productions is an elite digital exhibition space capturing the craft, gravity, and emotional resonance of prestige Australian visual cinema. The design evokes the tactile atmosphere of a private cinema grading suite: architecturally grounded Midnight Navy surfaces, calibrated warm tungsten highlights, physical celluloid textures, and surgical optical precision. Every interaction is paced with cinematic intentionality, prioritising patient revelation and editorial authority over rapid digital noise.

The interface rejects commoditised video agency tropes—eschewing playful pastels, floating cards, generic SaaS gradients, and bubbly corner radii. Instead, it embraces high-contrast letterboxed frames, 2.39:1 anamorphic ratios, optical lens calibration marks, and measured typography that honours both narrative documentary truth and commercial visual spectacle.

**Key Characteristics:**
- **Cinematic Midnight Canvas:** High-depth Midnight Navy (`#0B1320`) and Deep Midnight (`#070D16`) surfaces deliver rich optical gravity, replacing harsh pitch black with a sophisticated architectural tone.
- **Warm Gold & Bronze Discipline:** Warm Gold (`#B08D57`) deployed with strict 10% scarcity, supported by WCAG AA-compliant Deep Bronze Gold (`#785920`) for text legibility on light surfaces.
- **Surgical Optical Precision:** Micro 2px chamfers, razor-thin hairline dividers (`#E6E1D6`), and ARRI/RED-inspired viewfinder HUD framing brackets.
- **Uncompromising Editorial Rigour:** High-legibility tabular monospace telemetry (`10px` / `11px`), balanced headings without single-word orphans, and accessible contrast exceeding WCAG AA across every viewport.

## Colors

The colour system is derived from cinematic film timing and editorial grading suites: deep oceanic navies for spatial depth, warm cream for narrative reading comfort, and warm gold deployed with extreme restraint as an optical focal point.

### Primary
- **Warm Gold** (`#B08D57`): The primary focal instrument. Reserved strictly for primary conversion actions, active navigation states, interactive scrub handles, and live camera indicators.
- **Deep Bronze Gold** (`#785920`): High-contrast gold calibrated to exceed WCAG AA requirements (>5.4:1 contrast ratio against `#FFFFFF`, `#F6F2EA`, and `#F3EEE6`) used for text links, tags, category indicators, and metadata chips.
- **Soft Gold Tint** (`#E8DCC3`): Subtle tint used for precision borders, hover highlights, and warm accents.

### Neutral
- **Midnight Navy** (`#0B1320`): The signature digital canvas, replacing pitch black with an architectural, high-depth oceanic midnight tone. Contrast against white exceeds 18.3:1.
- **Deep Midnight** (`#070D16`): The deep navy foundation used for high-depth panels, modals, and dark letterbox framing.
- **Pale Slate Text** (`#D4DCE8`): High-legibility editorial prose on dark midnight surfaces delivering accessible contrast (>13.6:1) without ocular fatigue.
- **Slate Navy Body** (`#4A5568`): Secondary body prose and paragraph copy on light cream surfaces (contrast >6.5:1).
- **Soft Cream Canvas** (`#F6F2EA`): Warm editorial surface for cards, testimonials, and narrative reading sections.
- **Pure White** (`#FFFFFF`): Primary display headlines and crisp light surfaces (60% background foundation).
- **Hairline Divider** (`#E6E1D6`): 1px structural borders separating editorial grid sections.

### Named Rules
**The Rarity of Gold Rule.** Warm Gold (`#B08D57`) must never occupy more than 10% of any given screen surface. Its prestige and directional power depend entirely on its scarcity. When everything glows gold, nothing commands attention.

**The Contrast Floor Rule.** All text elements against surfaces must meet or exceed WCAG 2.2 AA contrast standards (minimum 4.5:1 for body copy; pure white `#FFFFFF` achieves 18.3:1 against `#0B1320`, pale slate `#D4DCE8` delivers 13.6:1 against `#070D16`, and bronze gold `#785920` delivers 5.42:1 against `#F6F2EA`).

## Typography

**Display Font:** `Cinzel`, `Cormorant Garamond`, `Playfair Display`, `Georgia`, `serif`  
**Body Font:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`  
**Technical Mono Font:** `JetBrains Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `monospace`  

**Character:** A deliberate union between the monumental dignity of cinematic title cards and the crisp, legible utility of a modern director's production binder.

### Hierarchy
- **Display** (Medium 500, `clamp(2.25rem, 5vw, 4.5rem)`, line-height `1.02`, letter-spacing `-0.025em`, uppercase): Monumental cinematic statements, hero titles, and major landing page headlines.
- **Headline** (Medium 500, `clamp(1.75rem, 3.5vw, 3rem)`, line-height `1.1`, letter-spacing `-0.02em`): Section headings, production titles, and major narrative declarations.
- **Title** (Medium 500, `clamp(1.25rem, 2vw, 1.75rem)`, line-height `1.25`, letter-spacing `-0.01em`): Project card names, service titles, and modal headers.
- **Body** (Regular 400, `1rem` / `16px`, line-height `1.6`, letter-spacing `0.01em`): Case study overviews, technical narratives, service descriptions, and booking form copy (restricted to 65–75 characters per line).
- **Label / Metadata** (Medium 500, `0.75rem` / `12px`, letter-spacing `0.12em`, uppercase): Category filters, button labels, timecodes, and technical specifications.
- **HUD Caption** (Medium 500, `0.6875rem` / `11px`, line-height `1.2`, letter-spacing `0.1em`, tabular monospace): Viewfinder settings, studio status readouts, and navigation subtitles.
- **Micro-Telemetry / Camera HUD** (Medium 500, `0.625rem` / `10px`, line-height `1`, letter-spacing `0.2em`, uppercase, tabular monospace): Electronic viewfinder metrics, REC timecodes, optical shutter angle, audio gain readouts, anamorphic gate stamps, and year metadata chips.

### Named Rules
**The Balanced Heading Rule.** All headings (`h1` through `h6`) must enforce `text-wrap: balance` to prevent awkward typography line breaks and single-word orphans.

**The Monospace Timecode Rule.** All technical metadata, frame rates, lens focal lengths, and video timecodes must render in tabular monospace figures to prevent layout jitter during scrub and playback.

**The 11px Functional Floor Rule.** Interactive and functional text labels must maintain a minimum font size of `11px` (`0.6875rem`) to guarantee human legibility. Telemetry readouts and camera timecodes at `10px` are permitted only when rendered in high-tracking tabular monospace uppercase.

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
1. **Plane 0 (Canvas Void):** Pure White (`#FFFFFF`) light foundation (60%) or Deep Midnight (`#070D16`) for cinematic takeover spaces.
2. **Plane 1 (Atmospheric Base):** Soft Cream (`#F6F2EA`) surface providing warm tactile contrast for cards and narrative reading blocks.
3. **Plane 2 (Card & Stage Surfaces):** Elevated Midnight Navy (`#0B1320`) and Soft Cream (`#F6F2EA`) containers enclosed by 1px hairline dividers (`#E6E1D6`).
4. **Plane 3 (Optical Focus & Overlays):** Viewfinder HUD overlays, sticky navigation bars (`rgba(255, 255, 255, 0.9)` or `rgba(11, 19, 32, 0.95)` with `backdrop-blur-md`), and interactive light glows.

### Shadow & Glow Vocabulary
- **Cinema Ambient Glow** (`0 0 25px rgba(176, 141, 87, 0.25)`): Applied to active playback rings, focused gold CTA buttons, and camera recording status indicators.
- **Subtle Surface Lift** (`0 10px 30px rgba(11, 19, 32, 0.06)`): Applied to project filmstrip cards on hover in light mode.
- **Cinematic Deep Elevation** (`0 25px 70px -15px rgba(7, 13, 22, 0.9)`): Applied to full-screen video modals and floating booking brief drawers.

### Named Rules
**The Tonal Depth Rule.** Depth is created through value contrast, border luminance, and subtle tonal layering—never through artificial heavy black drop-shadows. If an element must lift, illuminate its edge with border luminance (`#E6E1D6`) or ambient gold bloom (`rgba(176, 141, 87, 0.2)`).

## Shapes

The form language is disciplined, engineered, and reminiscent of machined cinema camera bodies, matte boxes, and aluminium lens barrels.

- **Micro-chamfer Radii (2px / `rounded-sm`):** Applied to primary buttons, project cards, viewfinder brackets, and filter pills. Soft, bubbly cards are strictly prohibited.
- **Input Radii (2px to 4px):** Applied to booking wizard inputs, textareas, and select elements to provide subtle touch affordance while maintaining architectural crispness.
- **Optical Circular Radii (`rounded-full`):** Reserved exclusively for circular playback triggers, audio mute toggles, and lens crosshair reticles.
- **Camera Viewfinder Brackets:** Distinctive 8px L-shaped corner brackets bordering video players and hero banners, simulating an ARRI ALEXA viewfinder framing mask.

### Named Rules
**The Architectural Precision Rule.** Corner radii must never exceed 4px on rectangular surfaces. Organic, playful, or bubbly shapes dilute the technical gravitas of the studio and are strictly forbidden.

## Components

### Buttons
Interactive controls designed with decisive weight, immediate visual feedback, and tactile precision.
- **Primary Button (`button-primary`):** Warm Gold background (`#B08D57`), Midnight Navy text (`#0B1320`), 2px border radius (`rounded-sm`), uppercase tracking (`letter-spacing: 0.12em`), padding `14px 28px` (minimum touch height 48px).
- **Primary Hover (`button-primary-hover`):** Transitions within 200ms to Deep Bronze Gold (`#785920`) with Pure White text (`#FFFFFF`) and ambient gold halo (`0 0 20px rgba(176, 141, 87, 0.3)`).
- **Secondary Button (`button-secondary`):** Transparent background with 1px Midnight Navy border (`#0B1320`), Midnight Navy text (`#0B1320`), uppercase tracking (`0.12em`), padding `14px 28px`.
- **Secondary Hover (`button-secondary-hover`):** Transitions to Soft Cream (`#F6F2EA`) background with Deep Bronze Gold text (`#785920`).
- **Focus State:** All buttons display a crisp 2px Warm Gold focus ring with a 2px offset (`outline: 2px solid #B08D57; outline-offset: 2px;`).

### Cards & Project Containers
- **Surface:** Soft Cream (`#F6F2EA`) or Midnight Navy (`#0B1320`) encased in a 1px border (`#E6E1D6`).
- **Internal Padding:** `24px` (`p-6`) on desktop, `16px` (`p-4`) on mobile devices.
- **Interaction:** On hover, the border illuminates, thumbnail media scales subtly (`scale-[1.02]` over 500ms ease), and title shifts to Deep Bronze Gold (`#785920`).

### Inputs & Form Fields
- **Surface:** Pure White (`#FFFFFF`) with 1px border (`#E6E1D6`) and 2px radius (`rounded-sm`).
- **Typography:** Midnight Navy (`#0B1320`) input value with Slate Navy (`#4A5568`) placeholder text.
- **Touch Target:** Minimum height 48px on mobile (`py-3.5 px-4`) with a minimum font size of `16px` (`text-base sm:text-sm`) to prevent iOS Safari auto-zoom.
- **Focus:** Border transitions to Warm Gold (`#B08D57`) with an ambient 2px outer ring (`rgba(176, 141, 87, 0.2)`).

### Custom Select (`CustomSelect`)
- **Container Constraint:** Bounded strictly to parent container width (`w-full`, `left-0 right-0`) to eliminate native OS blue popup spillover and text truncation.
- **Options Menu:** Rendered as an absolute dropdown menu matching button width, styled in Soft Cream (`#F6F2EA`) with 1px border (`#E6E1D6`) and 2px radius (`rounded-sm`).
- **Option States:** Hover state highlights in warm cream tint (`#ECE6DC`); selected option features Deep Bronze Gold text (`#785920`) with checkmark indicator.

### Navigation
- **Header Shell:** Sticky at top, Pure White (`rgba(255, 255, 255, 0.95)`) or Midnight Navy with `backdrop-blur-md` and a 1px bottom hairline border (`#E6E1D6`).
- **Navigation Links:** Midnight Navy (`#0B1320`), uppercase typography (`0.12em` tracking, 12px font size).
- **Active State:** Warm Gold (`#B08D57`) or Deep Bronze Gold (`#785920`) text with an animated bottom indicator notch.
- **Mobile Menu:** Full-screen takeover drawer with generous touch targets (minimum 48px height) and rapid 250ms dismiss transitions.

### Signature Component: Viewfinder HUD & Letterbox Aperture
The signature visual hallmark of Boitumelo B Productions.
- **Anamorphic Framing:** Framing guides overlaying cinematic media with 2.39:1 aspect ratio guides.
- **Framing Brackets:** Crisp 8px L-shaped precision brackets at all four corners in Warm Gold (`#B08D57`) or Pale Slate (`rgba(212, 220, 232, 0.4)`).
- **Camera Telemetry:** Real-time display of camera status (`REC` solid crimson dot `#FF4D4D`), frame rate (`24 FPS`), shutter angle (`180.0°`), colour space (`ARRI LogC4 / ProRes 4444`), and project timecodes in tabular monospace figures.

## Do's and Don'ts

### Do:
- **Do** use Australian English spelling across all interface copy, metadata, and studio communications (*specialising*, *visualise*, *colour*, *organisation*, *rigour*, *calibrated*).
- **Do** enforce `text-wrap: balance` on all headings and `text-wrap: pretty` on all editorial body paragraphs.
- **Do** maintain a minimum touch target size of 44×44px (ideally 48px) for all interactive buttons, links, and form elements.
- **Do** preserve the 10% rarity cap on Warm Gold (`#B08D57`), reserving it for moments requiring genuine user focus or conversion.
- **Do** use tabular monospace figures for timecodes, durations, coordinates, and technical film specifications.
- **Do** respect user system motion preferences via `@media (prefers-reduced-motion: reduce)`, disabling large transforms while maintaining instant visual state feedback.
- **Do** use `CustomSelect` for dropdown fields to prevent native browser popup menus from overflowing container widths.

### Don't:
- **Don't** introduce generic SaaS pastel colours (purple, pink, indigo, neon blue) or cheerful rounded bubble cards.
- **Don't** use decorative heavy black drop-shadows; convey depth through subtle lighting gradients and border illumination.
- **Don't** permit headings to wrap with a single dangling word on the final line (orphans).
- **Don't** render form inputs with font sizes below 16px on mobile viewports to avoid triggering iOS Safari viewport zooming.
- **Don't** use standalone kicker badges directly stacked above `<h1>` headings; integrate telemetry directly into top diagnostic status bars.
- **Don't** use functional text sizes below 11px.
- **Don't** autoplay audio under any circumstance. All video playback must initialise muted with clear, accessible user audio toggles.
