# Magus Locale — Application Layout Plan

## 1. Home Page (`/`)

### Sections
1. **Header**  
   - Centered title: **Magus Locale**  
   - Large font size; acts as the brand banner.

2. **Trials List**  
   - Vertical stack of cards/blocks, one per trial:  
     - **Name** (e.g., *Anti‑Spam Charm*)  
     - **One‑sentence description** (e.g., “Detects whether a message is spam.”)  
     - **Action link / button**: “Go to trial” → `/trial/<slug>`

3. **Optional Footer**  
   - Small text with privacy note and “Powered by Astro + Ollama”.

---

## 2. Trial Page (`/trial/<slug>`)

### Elements
| Order | Component | Purpose |
|-------|-----------|---------|
| 1 | **Back Link** | Small “← Back” link to the home page |
| 2 | **Title & Description** | Displays the trial’s name and one‑line description |
| 3 | **Input Form** | Fields required by the trial (e.g., message textarea or prompt fields) |
| 4 | **“Cast Spell” Button** | Submits form; triggers the Ollama backend call |
| 5 | **Results Section** | Appears after submission; shows the formatted outcome |

---

## 3. User Flow

1. User opens the **Home Page**.  
2. Chooses a trial and clicks **Go to trial**.  
3. On the **Trial Page**:  
   - Fills required fields.  
   - Presses **Cast Spell**.  
4. Backend (Ollama) processes input, returns result.  
5. Result appears below the form; user can re‑submit or navigate back.

---

## 4. Style Guide (concise)

- **Typography**:  
  - Header: ~2 rem–2.5 rem bold.  
  - Body: readable sans‑serif.  
- **Layout**:  
  - Max‑width container (approx. 48–60 rem), centered.  
  - Generous padding (`1.5–2 rem`).  
- **Cards/Buttons**:  
  - Soft rounded corners, subtle shadow.  
  - Primary buttons in a contrasting color (e.g., indigo).  
- **Color Scheme**:
  - Predominant colors: purple and blue tones.
  - Accent colors derived from primary palette.
  - Consider gradient transitions for visual interest.
- **Visual Style**:
  - Modern, clean interface with ample white space.
  - Subtle animations for interactive elements.
  - Minimal decorative elements to keep focus on content.
- **Responsiveness**:  
  - Stack vertically on mobile, maintain max‑width on desktop.  
- **Accessibility**:  
  - Sufficient color contrast.  
  - Focus states for interactive elements.

---

## 5. Dependencies

- **Astro** — Static‑first framework with island hydration.  
- **Ollama** — Local LLM runtime for trial logic.  
- **Optional**: Tailwind CSS for utility styling.

---