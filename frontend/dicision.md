# FLOD — Design Decisions

## 1. Why this ingestion strategy over the obvious alternative?

I chose an **upload-first workflow for PPT/PPTX and PDF files** because it matches FLOD's primary use case: a user should be able to bring an existing presentation into FLOD and immediately present, enhance, share, or collaborate on it.

The obvious alternative was a **workspace-first experience**, where users create a workspace before uploading or presenting anything. I rejected this because it adds friction to the user's first action. FLOD should make the path from **“I have a presentation” → “I can use it here”** obvious within seconds.

The homepage therefore gives equal importance to two workflows:

**Upload → AI → Present → Share → Track**

and

**Workspace → Collaborate → Comment → Sync**

This keeps FLOD from feeling like only a presentation-sharing tool or another generic collaboration workspace.

---

## 2. One trade-off made under the time limit

The main trade-off was **prioritizing the product experience and visual interaction over fully implementing the underlying backend**.

For this prototype, AI summaries, speaker notes, generated questions, analytics, live cursors, presence states, and collaboration activity are represented through realistic product UI rather than a complete production implementation.

With a real week, I would implement the complete PPT/PDF ingestion pipeline, persistent workspaces, authentication, permissions, real-time synchronization, AI processing, custom share-link generation, and presentation analytics.

I would also test the product with real users and iterate based on their feedback to identify where the workflow or interface creates friction.

---

## 3. Where did you use AI tools, and what did you personally verify or change afterward?

I used AI tools mainly to **reduce the time spent on exploration and iteration**. Good UI design requires time to explore different layouts, visual directions, typography, content hierarchy, and interactions before arriving at a strong solution. While the creative and product decisions still require human judgment, AI helped me explore these possibilities faster.

I used **Stitch** to generate and compare initial UI directions and **ChatGPT** to brainstorm the product structure, content, feature hierarchy, and interaction ideas. This allowed me to spend more time thinking about the actual user experience instead of manually exploring every initial possibility from scratch.

However, I did not treat the AI output as the final design. I personally reviewed the generated concepts and changed the direction when the interface became too focused on generic team collaboration.

I refined the homepage to clearly communicate FLOD's two core workflows:

- **Present Anywhere:** Upload PPT/PDF → AI assistance → Present → Share → Track.
- **Collaborate Live:** Real-time editing → Live cursors → Presence → Comments → Permissions.

I also personally verified and refined the **visual hierarchy, content, typography, responsive behavior, light/dark mode, CTA placement, and animation choices** to ensure the interface remained clear rather than visually overloaded.

AI acted as an **accelerator for exploration**, while the final product direction and design decisions remained based on my own judgment and the assignment requirements.

---

## Final Design Principle

FLOD is built around a simple idea:

> **Present anywhere. Work together, live.**

The homepage prioritizes the actual product experience over fabricated social proof or excessive marketing content.

The goal is for a first-time visitor to understand both workflows within a few seconds and immediately see why they would want to use FLOD.