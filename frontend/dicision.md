# FLOD — Design Decisions

## 1. Product Direction

FLOD is a **product homepage**, not a traditional marketing landing page. It combines two core workflows:

- **Present Anywhere:** upload PPT/PPTX or PDF files, present from anywhere, use AI for summaries, speaker notes and questions, share through short/custom links, and track views and engagement.
- **Collaborate Live:** multiple people can work in the same workspace in real time, with no refresh, live cursors, presence states, comments, permissions, activity history and cross-device access.

**Core positioning:** *Present anywhere. Work together, live.*

## 2. Homepage Structure

The homepage stays concise and product-focused:

1. **Hero / Home Overview** — clear value proposition and primary action.
2. **Presentation Experience** — actual UI showing upload, presentation, AI, sharing and tracking.
3. **Real-Time Collaboration** — live cursors, presence, editing and comments.
4. **Activity / Insights** — recent work, views, engagement and team activity.
5. **Quick Actions** — Upload Presentation, Create Workspace and Join Workspace.

The first viewport prioritizes the actual product interface rather than decorative marketing graphics.

## 3. Visual Design

The visual system uses a mostly monochrome foundation with a restrained accent color to create a premium, focused interface.

**Light mode:** warm off-white background, white surfaces, near-black text and deep navy accent.

**Dark mode:** near-black background, dark elevated surfaces, off-white text and muted blue accent.

A distinctive display font is used for major headings, paired with a highly readable UI font for product controls and body copy. Monospace styling is reserved for URLs, timestamps and technical metadata.

## 4. Interaction & Motion

Motion is purposeful rather than decorative. The main interaction communicates the product workflow:

**Upload → AI → Present → Share → Collaborate**

Subtle live cursor movement, presence indicators, comment appearance, synchronization states and card hover states make the interface feel alive without overwhelming the user.

## 5. Content Decisions

Copy is direct and product-focused. No fabricated testimonials, customer logos or user statistics are used.

The two primary messages are:

> **Make your slides speak.**

and

> **Make your team move.**

The first communicates the AI-powered presentation workflow; the second communicates real-time collaboration.

## 6. Responsive & Accessibility Decisions

The design targets **390px mobile** and **1440px desktop** with no horizontal scrolling.

On mobile, presentation and collaboration experiences become stacked or tabbed, cards use single-column layouts, and actions remain touch-friendly.

Light and dark modes are designed as complete themes rather than simple color inversions, with readable contrast and distinguishable surfaces.

## 7. Deliberately Avoided

- Fake testimonials
- Fake customer logos
- Fabricated user counts
- Fake awards or trust badges
- Unverifiable performance claims
- Excessive animations
- Unnecessary pricing/marketing sections
- Feature overload

The priority is **product clarity, visual taste, interaction quality and a strong first impression**.

## 8. Success Criteria

A first-time visitor should understand within a few seconds that FLOD lets them **upload and present content, make it smarter with AI, share it, track engagement, and work on it live with their team.**

The intended reaction:

> **“I understand what this is, and I want to try it.”**