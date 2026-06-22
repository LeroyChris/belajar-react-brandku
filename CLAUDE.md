# PRD — StudyFlow Flashcard Feature

## 1. Product Overview

### Feature Name

Flashcard Feature

### Project

StudyFlow — React + Vite + Tailwind CSS v3 web app

### Main Objective

Build a complete Flashcard feature for StudyFlow that follows the existing visual design already implemented in the project, while copying the interaction logic, flow, and behavior from the published Figma prototype.

The Flashcard feature is the highest priority feature. Other existing features such as Pomodoro and Task Calendar must not be rebuilt or broken.

---

## 2. Implementation Priority

### Priority Level

High

### Main Rule

Before editing any file, scan the existing folder structure and understand the current project setup.

The implementation must:

1. Preserve the current project design language.
2. Reuse existing layout, sidebar, header, buttons, cards, colors, spacing, and typography where possible.
3. Copy the Flashcard logic and user flow from the Figma prototype.
4. Keep the project on Tailwind CSS v3.
5. Avoid touching unrelated features unless needed for shared navigation or layout consistency.

---

## 3. Required First Step — Project Scan

Before coding, inspect the project using read-only commands.

Suggested commands:

```bash
pwd
ls -la
find . -maxdepth 3 -type f
cat package.json
cat tailwind.config.js
cat postcss.config.js
```

Then inspect important folders/files such as:

```bash
src/
src/App.jsx
src/App.tsx
src/main.jsx
src/main.tsx
src/index.css
src/pages/
src/components/
src/features/
src/data/
```

After scanning, summarize:

* Current React/Vite setup
* Current Tailwind setup
* Routing structure
* Existing page/component structure
* Existing Flashcard files, if any
* Files that should be edited
* Files that should not be touched

Do not modify files until this scan is complete.

---

## 4. Design Direction

### Visual Design Source

Use the current design already present in the project as the main visual style.

This means:

* Do not randomly redesign the app.
* Do not create a separate design system unless the project already has one.
* Match the existing sidebar/header/page layout.
* Match the current colors, border radius, shadows, typography, spacing, and card style.
* Keep the Flashcard page visually consistent with Pomodoro and Task Calendar if those pages already exist.

### Figma Source

Use the Figma prototype mainly for:

* Flashcard page logic
* User flow
* Section order
* Button actions
* Card interactions
* Study mode behavior
* Empty states
* Progress behavior

If the Figma site can be rendered through a browser/screenshot tool, inspect it carefully before implementation.

If the Figma site cannot be rendered, do not invent exact visual details. Instead, implement the Flashcard feature using the current project design and clearly report which Figma details could not be verified.

---

## 5. Target Users

### Primary User

A student using StudyFlow to organize learning sessions and review study materials.

### User Goals

The user should be able to:

* View flashcard decks.
* Create a new flashcard deck.
* Add cards to a deck.
* Study cards one by one.
* Flip a card to reveal the answer.
* Mark whether they knew the answer or not.
* Track study progress.
* Edit or delete decks/cards.
* Return to the dashboard after a study session.

---

## 6. Feature Scope

### In Scope

The Flashcard feature must include:

1. Flashcard Dashboard
2. Deck List
3. Deck Summary Cards
4. Create Deck flow
5. Add/Edit/Delete Flashcard flow
6. Study Mode
7. Flip Card interaction
8. Known/Unknown answer buttons
9. Progress indicator
10. Study completion screen
11. Empty state
12. Responsive layout
13. Local state or localStorage persistence

### Out of Scope

Do not implement:

* Backend/database integration
* Authentication
* AI-generated flashcards
* Real-time collaboration
* Import/export CSV
* Spaced repetition algorithm unless already present in the Figma logic
* Major redesign of Pomodoro or Task Calendar

---

## 7. Recommended User Flow

### Flow 1 — Open Flashcard Page

User clicks Flashcard from the app navigation.

The page should show:

* Page title
* Short description/subtitle
* Main action button
* Deck list
* Basic statistics
* Empty state if no decks exist

Expected actions:

* Create new deck
* Open existing deck
* Start studying a deck
* Edit deck
* Delete deck

---

### Flow 2 — Create Deck

User clicks “Create Deck” or similar primary action.

The user should be able to enter:

* Deck title
* Optional description
* Optional category/subject
* Initial cards, if practical

Validation:

* Deck title is required.
* Empty title should show a simple validation message.
* Deck can be created with zero cards, but the UI should encourage adding cards.

After creating:

* User returns to Flashcard Dashboard or Deck Detail page.
* New deck appears in the deck list.

---

### Flow 3 — Deck Detail

User opens a deck.

The page should show:

* Deck title
* Description/category
* Number of cards
* Study/start button
* Add card button
* List of cards
* Edit/delete options

Each card item should show:

* Question/front side preview
* Answer/back side preview, either visible or partially hidden depending on design
* Edit button
* Delete button

---

### Flow 4 — Add/Edit Card

User can add or edit a flashcard.

Each flashcard must have:

* Question/front text
* Answer/back text

Optional fields:

* Hint
* Category/tag
* Difficulty

Validation:

* Question is required.
* Answer is required.
* Empty input should show clear feedback.

After saving:

* Card appears in the selected deck.
* User stays on deck detail or returns depending on current app pattern.

---

### Flow 5 — Study Mode

User clicks “Start Study” from a deck.

Study mode should show:

* Current card number
* Total card count
* Progress bar or progress text
* Flashcard front side
* Flip button or click-to-flip interaction
* Known button
* Unknown/Review Again button
* Exit/back button

Initial state:

* Show question/front side first.
* Answer should be hidden.

Interaction:

1. User reads the question.
2. User flips the card.
3. Answer is shown.
4. User marks the card as Known or Unknown.
5. App moves to next card.
6. Progress updates.

At the end:

* Show completion screen.
* Show total known answers.
* Show total unknown answers.
* Show completion percentage.
* Provide buttons:

  * Study again
  * Back to deck
  * Back to dashboard

---

## 8. Functional Requirements

### FR-001 — Display Flashcard Dashboard

The app must display a Flashcard dashboard page using the existing project layout.

Acceptance criteria:

* Flashcard page is reachable from navigation or route.
* Page does not break existing routes.
* Layout matches existing app design.
* Deck cards are visible if data exists.
* Empty state appears if no decks exist.

---

### FR-002 — Create Deck

The user must be able to create a deck.

Acceptance criteria:

* User can enter deck title.
* User can optionally enter description/category.
* Deck title is validated.
* New deck appears after saving.
* Data persists during the session.
* Prefer localStorage persistence if no backend exists.

---

### FR-003 — Edit Deck

The user must be able to edit an existing deck.

Acceptance criteria:

* Existing deck data appears in the form.
* User can update title/description/category.
* Changes are reflected in the deck list and deck detail.
* Invalid empty title is rejected.

---

### FR-004 — Delete Deck

The user must be able to delete a deck.

Acceptance criteria:

* Delete action is available.
* Confirmation is shown before deletion.
* Deleted deck disappears from dashboard.
* Related cards are also removed.

---

### FR-005 — Add Card

The user must be able to add flashcards to a deck.

Acceptance criteria:

* User can input question and answer.
* Both fields are required.
* New card appears in the deck detail.
* Card count updates.

---

### FR-006 — Edit Card

The user must be able to edit existing cards.

Acceptance criteria:

* Existing question and answer appear in the form.
* User can save changes.
* Updated content appears immediately.

---

### FR-007 — Delete Card

The user must be able to delete a card.

Acceptance criteria:

* Delete action is available for each card.
* Confirmation is shown before deletion.
* Card is removed.
* Card count updates.

---

### FR-008 — Flip Card

The user must be able to flip a flashcard in study mode.

Acceptance criteria:

* Question is shown first.
* Answer is hidden before flip.
* Clicking the card or a flip button reveals the answer.
* Flip state resets when moving to the next card.

---

### FR-009 — Mark Known/Unknown

The user must be able to mark cards during study.

Acceptance criteria:

* Known button increments known count.
* Unknown/Review Again button increments unknown count.
* App moves to the next card after selection.
* Progress updates correctly.

---

### FR-010 — Completion Summary

The app must show a summary after all cards are studied.

Acceptance criteria:

* Shows total cards studied.
* Shows known count.
* Shows unknown count.
* Shows score or percentage.
* Provides navigation buttons after completion.

---

### FR-011 — Responsive Design

Flashcard feature must work on desktop, tablet, and mobile.

Acceptance criteria:

* No horizontal overflow.
* Cards stack cleanly on mobile.
* Buttons remain easy to tap.
* Sidebar/header follows existing responsive behavior.
* Study mode is comfortable on small screens.

---

## 9. Data Model

Use a simple local data structure first.

Example:

```js
const decks = [
  {
    id: "deck-1",
    title: "JavaScript Basics",
    description: "Core JavaScript concepts for web development",
    category: "Web Development",
    createdAt: "2026-06-15T00:00:00.000Z",
    updatedAt: "2026-06-15T00:00:00.000Z",
    cards: [
      {
        id: "card-1",
        question: "What is a variable?",
        answer: "A variable is a container for storing data values.",
        difficulty: "easy",
        createdAt: "2026-06-15T00:00:00.000Z",
        updatedAt: "2026-06-15T00:00:00.000Z"
      }
    ]
  }
];
```

If the project already has a data structure, follow the existing pattern instead of forcing this one.

---

## 10. State Management

Use simple React state unless the project already uses another state pattern.

Recommended state:

* `decks`
* `selectedDeck`
* `currentCardIndex`
* `isFlipped`
* `knownCount`
* `unknownCount`
* `studyCompleted`
* `searchQuery`
* `activeFilter`
* `isModalOpen`
* `editingDeck`
* `editingCard`

Persistence:

* Use localStorage if no backend exists.
* Save decks after create/edit/delete.
* Load decks on page mount.

---

## 11. Recommended Component Structure

Adapt to the existing project structure.

Possible structure:

```txt
src/
  pages/
    Flashcard.jsx
  components/
    flashcard/
      FlashcardDashboard.jsx
      DeckCard.jsx
      DeckForm.jsx
      DeckDetail.jsx
      CardForm.jsx
      CardList.jsx
      StudyMode.jsx
      StudyComplete.jsx
      EmptyState.jsx
  data/
    flashcardData.js
  utils/
    flashcardStorage.js
```

If the project already has different folders, use the existing structure.

Do not create unnecessary folders if the app is currently simple.

---

## 12. UI Requirements

### Flashcard Dashboard

Must include:

* Page title
* Short subtitle
* Primary action button
* Stats section
* Deck cards/list
* Empty state

Possible stats:

* Total decks
* Total cards
* Cards studied
* Average score

### Deck Card

Each deck card should include:

* Deck title
* Description/category
* Number of cards
* Last updated or progress, if available
* Start study button
* Edit/delete actions

### Study Card

The study flashcard should include:

* Large centered card
* Question side
* Answer side after flip
* Smooth visual transition if easy to implement
* Progress indicator
* Known/Unknown actions

### Empty State

If no deck exists:

* Friendly message
* Short explanation
* Create Deck button

---

## 13. Styling Requirements

Use Tailwind CSS v3.

Rules:

* Do not migrate to Tailwind v4.
* Do not install `@tailwindcss/vite`.
* Use existing Tailwind config.
* Use project’s existing color palette if defined.
* Use project’s existing font and spacing patterns.
* Use utility classes first.
* Use custom CSS only if necessary.

The feature should feel consistent with the rest of StudyFlow:

* Same background style
* Same sidebar/header style
* Same card style
* Same button style
* Same border radius
* Same shadow style
* Same hover/active transitions

---

## 14. Accessibility Requirements

Minimum accessibility:

* Buttons must use semantic `<button>` elements.
* Inputs must have labels.
* Modals/forms must be keyboard usable.
* Text contrast should be readable.
* Interactive cards must have clear click targets.
* Do not rely only on color to communicate state.

---

## 15. Error and Edge Cases

Handle these cases:

* No decks yet
* Deck exists but has no cards
* Study mode opened with zero cards
* User tries to create deck with empty title
* User tries to create card with empty question/answer
* User deletes the current deck
* localStorage has invalid/corrupted data
* User refreshes the page

Expected behavior:

* App should not crash.
* Show helpful empty/error states.
* Recover gracefully from invalid localStorage by resetting to sample/default data or empty state.

---

## 16. Sample Seed Data

If no data exists, use sample data so the page does not look empty during development.

Example decks:

* JavaScript Basics
* React Fundamentals
* Data Science Terms

Keep sample data realistic and student-friendly.

---

## 17. Development Steps

### Step 1 — Scan Project

Inspect folder structure, package.json, Tailwind config, routing, and existing Flashcard files.

### Step 2 — Identify Existing Design Pattern

Inspect current pages/components to understand:

* layout
* navigation
* card style
* buttons
* colors
* spacing
* responsive behavior

### Step 3 — Inspect Figma Logic

Render the published Figma site if possible.
Focus on Flashcard logic and user flow, not copying unrelated visuals blindly.

### Step 4 — Plan File Changes

Before coding, list:

* files to create
* files to edit
* reason for each change

### Step 5 — Build Flashcard Dashboard

Create the main Flashcard page and deck list.

### Step 6 — Build Deck CRUD

Add create, edit, and delete deck functionality.

### Step 7 — Build Card CRUD

Add create, edit, and delete flashcard functionality.

### Step 8 — Build Study Mode

Add flip card, known/unknown actions, progress, and completion summary.

### Step 9 — Add Persistence

Use localStorage if there is no backend.

### Step 10 — Polish UI

Make it match existing StudyFlow design and responsive layout.

### Step 11 — Test

Run build/dev command and fix errors.

---

## 18. Testing Checklist

Test these before finishing:

### Navigation

* Flashcard page opens correctly.
* Other pages still work.

### Decks

* Create deck works.
* Edit deck works.
* Delete deck works.
* Empty title is rejected.

### Cards

* Add card works.
* Edit card works.
* Delete card works.
* Empty question/answer is rejected.

### Study Mode

* Study starts correctly.
* Card flips correctly.
* Known button works.
* Unknown button works.
* Progress updates.
* Completion screen appears.
* Study again works.
* Back buttons work.

### Persistence

* Refresh page after creating deck.
* Refresh page after adding cards.
* Data should remain if localStorage is used.

### Responsive

* Desktop layout works.
* Tablet layout works.
* Mobile layout works.
* No horizontal scroll.

---

## 19. Definition of Done

The Flashcard feature is done when:

* The page visually matches the current project design.
* The logic follows the Figma prototype as closely as possible.
* User can create decks.
* User can add cards.
* User can study cards.
* User can flip cards.
* User can mark known/unknown.
* User can see completion result.
* Data persists locally if no backend exists.
* Existing features are not broken.
* App builds successfully.
* Claude reports all changed files and any limitations.

---

## 20. Final Report Required

After implementation, provide:

1. Files changed
2. Components created
3. Features implemented
4. How to run/test
5. Any Figma behavior that could not be verified
6. Any known limitations
7. Suggested next improvements

Important:
Flashcard is my feature. Make it the most complete and polished part of the app. Other pages can remain mostly unchanged.
