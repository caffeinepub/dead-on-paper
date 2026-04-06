import {
  BookOpen,
  ChevronDown,
  Download,
  FileText,
  Headphones,
  Menu,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Section = "home" | "read" | "chapters" | "author" | "downloads";

// ─── Book content ─────────────────────────────────────────────────────────────

const CHAPTER_ONE_PROSE_A = [
  "The city always sounded different from the stage.",
  "From the street below, it was sirens, tires kissing rain-slick pavement, and the distant hum of men making promises they never meant to keep.",
  "But inside The Velvet Room, the world softened.",
  "Crystal chandeliers dripped light like liquid diamonds over the black-and-gold lounge. Velvet walls swallowed secrets whole. Smoke from imported cigarettes curled in silver ribbons toward the painted ceiling, where cherubs and clouds watched the wealthy ruin themselves one glass at a time.",
  "Judges sat beside men with blood on their cufflinks.",
  "Politicians laughed with women draped in fox fur and scandal.",
  "Old-money wives pretended not to notice their husbands watching the stage.",
  "And on the stage, beneath a single ivory spotlight, sat Vivienne Noir.",
  "Her satin gown poured over her body like moonlight over silk sheets, cut low at the throat where a diamond necklace rested against warm skin. Every gem had been chosen by her husband, every sparkle another reminder that beauty was cheaper than freedom.",
  "The pianist touched the opening notes.",
  "A hush moved through the room.",
  "Vivienne lifted the microphone.",
  "Her voice arrived low and smoky, the kind that made men pause mid-sentence and women lower their champagne glasses.",
  "Tonight she sang about heartbreak.",
  "Not the kind sold in records.",
  "The real kind.",
  "The kind that left fingerprints.",
  "From the corner booth, hidden in shadow and cigar smoke, Damien Vale watched her.",
  "His suit was midnight black, tailored sharp enough to cut. A lawyer by profession. A monster by habit.",
  "No one in the room would have guessed the same hand that signed million-dollar legal defenses liked to close around his wife's throat after midnight.",
  "To them, he was brilliance. Elegance. Power.",
  "To Vivienne, he was the bruise beneath the pearls.",
  "Still, she smiled as she sang.",
  "Because Damien liked smiles.",
  "Because the city's most dangerous men sat in that room.",
  "Because survival had become choreography.",
  "Her gaze drifted across the tables, over champagne towers and jeweled women, until it stopped at the farthest booth.",
  "There he was.",
  "Salvatore Moretti.",
  "Owner of The Velvet Room. Owner of half the city. The man whispered about in courthouses, confessionals, and morgues.",
  "He leaned back in his seat, one arm draped over the leather booth, eyes fixed on her with unsettling calm.",
  "Not lust.",
  "Interest.",
  "As if he were studying a rare object he might one day buy.",
  "Vivienne felt it like a hand across her bare spine.",
  "The note she held trembled only slightly.",
  "The crowd never noticed.",
  "They only heard perfection.",
  "When the final lyric dissolved into piano, the room erupted.",
  "Applause. Crystal tapping. Men standing.",
  "Vivienne lowered her lashes and gave them the smile they paid for.",
  "But inside, something cold had begun to bloom.",
  "She stepped off the stage to a line of roses, diamonds, and whispered compliments.",
  "A woman in emerald satin touched her wrist.",
  '"Your husband is a lucky man."',
  "Vivienne smiled politely.",
  "If luck looked like a locked bedroom door and bruises hidden beneath silk gloves, then yes.",
  "Very lucky.",
  "Backstage, her dressing room glowed in amber lamplight.",
  "Gold-framed mirrors. Fresh orchids. French perfume. A bottle of champagne waiting on ice.",
  "And on the velvet chaise sat a black envelope.",
  "No name.",
  "No seal.",
  "Only one line written in elegant silver ink.",
  "For the woman who deserves a kingdom.",
  "Her pulse quickened.",
  "She opened it.",
  "Inside rested a diamond bracelet so exquisite it could have paid for a courthouse.",
  "No card. No signature.",
  "But she already knew.",
  "Salvatore.",
  "A knock sounded behind her.",
  "Then Damien's voice.",
  "Low. Controlled. Dangerously soft.",
  '"Who sent that?"',
  "Vivienne turned slowly.",
  "He stood in the doorway, tie loosened, eyes dark with the kind of rage that always arrived dressed as calm.",
  '"It was here when I came in."',
  "He stepped closer, gaze locked on the bracelet.",
  "His jaw flexed.",
  '"Did he speak to you?"',
  '"No."',
  "Another step.",
  "Too close now.",
  "The scent of whiskey and courtroom cologne.",
  '"You will never embarrass me in that room."',
  "The warning was familiar.",
  "Soft enough that no one else would hear. Sharp enough to leave damage anyway.",
  "Vivienne held his gaze.",
  "For a moment, the jazz beyond the walls seemed miles away.",
  "Then Damien smiled.",
  "The public smile.",
  "The one that won juries and buried truths.",
  "He reached up and adjusted the diamond necklace at her throat, fingertips brushing the fading mark beneath it.",
  '"Go home," he said. "I\'ll be late."',
  "She nodded because nodding was easier than bleeding.",
];

const DIARY_ENTRY = [
  "Damien says the city belongs to men like him.",
  "Men with law degrees and clean fingernails. Men who turn blood into paperwork. Men who bury bodies under signatures.",
  "Tonight I sang for murderers and millionaires.",
  "The room applauded.",
  "No one heard the scream in my ribs.",
  "A bracelet waited in my dressing room.",
  "Diamonds colder than my husband's hands.",
  "I should be afraid.",
  "But for the first time in years, fear is not the loudest thing inside me.",
  "Something else is growing.",
  "Something dangerous.",
  "Something that sounds a lot like freedom.",
];

const CHAPTER_ONE_PROSE_B = [
  "The mansion was silent when she returned.",
  "Too silent.",
  "The kind of silence that belonged to museums and mausoleums.",
  "Her heels clicked across marble floors, echoing beneath vaulted ceilings and oil portraits of dead men who had built their fortunes on stolen things.",
  "Damien liked houses that felt immortal.",
  "Vivienne thought it felt like being buried alive in luxury.",
  "She climbed the staircase slowly, one hand trailing the polished banister.",
  "At the top, she caught her reflection in the long gilded mirror.",
  "Perfect hair. Perfect diamonds. Perfect wife.",
  "And beneath the satin neckline—",
  "the faint violet shadow of Damien's fingers.",
  "She stared at it.",
  "Then at herself.",
  "Then smiled.",
  "Not the stage smile.",
  "Not the wife smile.",
  "Something smaller. Sharper.",
  "A woman meeting herself for the first time.",
  "And somewhere far below, thunder rolled over the city.",
  "As if warning her.",
  "Or welcoming her.",
];

// ─── File generation helpers ───────────────────────────────────────────────────

function generateEbookMd(): string {
  const prose_a = CHAPTER_ONE_PROSE_A.join("\n\n");
  const diary = DIARY_ENTRY.map((l) => `> *${l}*`).join("\n>\n> ");
  const prose_b = CHAPTER_ONE_PROSE_B.join("\n\n");
  return `# Dead on Paper
### A Novel

*by Alise Grey*

---

> *A story of velvet lies, dangerous men, and a woman learning the price of freedom.*

---

## Chapter One: Velvet Notes

${prose_a}

---

### 📔 Diary Entry — March 3

${diary}

---

${prose_b}

---

*End of Chapter One*

---

© ${new Date().getFullYear()} Alise Grey. All rights reserved.
`;
}

function generateAudiobookScript(): string {
  return `DEAD ON PAPER — AUDIOBOOK NARRATION SCRIPT
Chapter One: Velvet Notes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VOICE STYLE GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NARRATOR:
  Tone: Velvet-dark, cinematic, intimate
  Pace: Measured and deliberate — this is a noir world
  Delivery: As if confiding a secret to the listener

VIVIENNE NOIR:
  Voice: Warm, smoky, controlled
  Subtext: Hides pain behind precision
  Delivery: Every word chosen carefully — survival is her second language

DAMIEN VALE:
  Voice: Low, slow, dangerously soft
  Subtext: Every word measured like a threat
  Delivery: Never raises his voice — the quiet IS the menace

SALVATORE MORETTI:
  Voice: Sparse, powerful, unhurried
  Subtext: Speaks in observations, not explanations
  Delivery: A man who has never needed to explain himself

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHAPTER ONE: VELVET NOTES
Timestamp: 00:00:00
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[BREATHE] [SLOW]

The city always sounded different from the stage.

[PAUSE]

From the street below, it was sirens, tires kissing rain-slick pavement,
and the distant hum of men making promises they never meant to keep.

[BREATHE]

But inside The Velvet Room, the world softened.

[SLOW]

Crystal chandeliers dripped light like liquid diamonds over the black-and-gold lounge.
Velvet walls swallowed secrets whole.
Smoke from imported cigarettes curled in silver ribbons toward the painted ceiling,
where cherubs and clouds watched the wealthy ruin themselves one glass at a time.

[PAUSE]

Judges sat beside men with blood on their cufflinks.

Politicians laughed with women draped in fox fur and scandal.

Old-money wives pretended not to notice their husbands watching the stage.

[BREATHE]

And on the stage, beneath a single ivory spotlight, sat Vivienne Noir.

[SLOW]

Her satin gown poured over her body like moonlight over silk sheets,
cut low at the throat where a diamond necklace rested against warm skin.
Every gem had been chosen by her husband,
every sparkle another reminder that beauty was cheaper than freedom.

[PAUSE]

The pianist touched the opening notes.

A hush moved through the room.

Vivienne lifted the microphone.

[BREATHE]

Her voice arrived low and smoky,
the kind that made men pause mid-sentence and women lower their champagne glasses.

[SLOW]

Tonight she sang about heartbreak.

[PAUSE]

Not the kind sold in records.

The real kind.

The kind that left fingerprints.

[BREATHE]

From the corner booth, hidden in shadow and cigar smoke, Damien Vale watched her.

His suit was midnight black, tailored sharp enough to cut.
A lawyer by profession. A monster by habit.

[SLOW]

No one in the room would have guessed the same hand that signed million-dollar legal defenses
liked to close around his wife's throat after midnight.

[PAUSE]

To them, he was brilliance. Elegance. Power.

To Vivienne, he was the bruise beneath the pearls.

[BREATHE]

Still, she smiled as she sang.

Because Damien liked smiles.

Because the city's most dangerous men sat in that room.

Because survival had become choreography.

[PAUSE]

Her gaze drifted across the tables, over champagne towers and jeweled women,
until it stopped at the farthest booth.

[BREATHE]

There he was.

[PAUSE]

Salvatore Moretti.

[SLOW]

Owner of The Velvet Room. Owner of half the city.
The man whispered about in courthouses, confessionals, and morgues.

He leaned back in his seat, one arm draped over the leather booth,
eyes fixed on her with unsettling calm.

Not lust.

[PAUSE]

Interest.

As if he were studying a rare object he might one day buy.

[BREATHE]

Vivienne felt it like a hand across her bare spine.

The note she held trembled only slightly.

The crowd never noticed.

They only heard perfection.

[PAUSE]

When the final lyric dissolved into piano, the room erupted.

Applause. Crystal tapping. Men standing.

Vivienne lowered her lashes and gave them the smile they paid for.

[BREATHE]

But inside, something cold had begun to bloom.

[SLOW]

She stepped off the stage to a line of roses, diamonds, and whispered compliments.

A woman in emerald satin touched her wrist.

[CHARACTER: UNNAMED WOMAN — warm, envious]
"Your husband is a lucky man."

[NARRATOR resumes]

Vivienne smiled politely.

If luck looked like a locked bedroom door and bruises hidden beneath silk gloves, then yes.

[PAUSE]

Very lucky.

[BREATHE]

Backstage, her dressing room glowed in amber lamplight.

Gold-framed mirrors. Fresh orchids. French perfume. A bottle of champagne waiting on ice.

[PAUSE]

And on the velvet chaise sat a black envelope.

No name.

No seal.

[SLOW]

Only one line written in elegant silver ink.

[WHISPER]
For the woman who deserves a kingdom.

[BREATHE]

Her pulse quickened.

She opened it.

Inside rested a diamond bracelet so exquisite it could have paid for a courthouse.

No card. No signature.

[PAUSE]

But she already knew.

[WHISPER]
Salvatore.

[PAUSE]

A knock sounded behind her.

Then Damien's voice.

Low. Controlled. Dangerously soft.

[CHARACTER: DAMIEN VALE — low, lethal, soft]
"Who sent that?"

[NARRATOR resumes]

Vivienne turned slowly.

He stood in the doorway, tie loosened,
eyes dark with the kind of rage that always arrived dressed as calm.

[CHARACTER: VIVIENNE NOIR — controlled, careful]
"It was here when I came in."

[NARRATOR]

He stepped closer, gaze locked on the bracelet.

His jaw flexed.

[CHARACTER: DAMIEN — quieter now, more dangerous]
"Did he speak to you?"

[CHARACTER: VIVIENNE — flat, measured]
"No."

[NARRATOR]

Another step.

Too close now.

The scent of whiskey and courtroom cologne.

[CHARACTER: DAMIEN — barely above a whisper]
"You will never embarrass me in that room."

[NARRATOR]

The warning was familiar.

Soft enough that no one else would hear. Sharp enough to leave damage anyway.

[BREATHE]

Vivienne held his gaze.

For a moment, the jazz beyond the walls seemed miles away.

[PAUSE]

Then Damien smiled.

The public smile.

The one that won juries and buried truths.

He reached up and adjusted the diamond necklace at her throat,
fingertips brushing the fading mark beneath it.

[CHARACTER: DAMIEN — almost tender, all threat]
"Go home. I'll be late."

[NARRATOR — SLOW]

She nodded because nodding was easier than bleeding.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIARY ENTRY — MARCH 3
[Delivery: intimate, raw, slightly breathless — her real voice]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[SLOW] [BREATHE]

Damien says the city belongs to men like him.

Men with law degrees and clean fingernails.
Men who turn blood into paperwork.
Men who bury bodies under signatures.

[PAUSE]

Tonight I sang for murderers and millionaires.

The room applauded.

[WHISPER]
No one heard the scream in my ribs.

[BREATHE]

A bracelet waited in my dressing room.

Diamonds colder than my husband's hands.

[PAUSE]

I should be afraid.

[SLOW]

But for the first time in years, fear is not the loudest thing inside me.

Something else is growing.

Something dangerous.

[BREATHE]

Something that sounds a lot like freedom.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
End of Chapter One
Estimated runtime: ~18 minutes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

© ${new Date().getFullYear()} Alise Grey. All rights reserved.
`;
}

function generateProductionNotes(): string {
  return `DEAD ON PAPER — AUDIOBOOK PRODUCTION NOTES
Full Production Script & Casting Guide

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHAPTER TIMESTAMPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Chapter One: Velvet Notes       00:00:00 — ~00:18:00
  Opening scene (The Velvet Room)    00:00:00
  Damien introduction                00:03:30
  Salvatore introduction             00:06:45
  Post-performance backstage         00:09:20
  Damien confrontation               00:13:10
  Diary Entry — March 3              00:15:40
  Mansion sequence                   00:16:50
  Chapter end                        00:18:00

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCENE BREAKDOWN — CHAPTER ONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCENE 1: The Performance
  Setting: The Velvet Room — a noir jazz lounge, 1940s-esque glamour
  Mood: Opulent, dangerous, electric
  Key beats: World-building; introduce Vivienne performing; establish Damien's menace;
             introduce Salvatore as an unknown force
  Sound design suggestion: Low jazz piano underscore, ambient crowd murmur

SCENE 2: Backstage
  Setting: Vivienne's dressing room — amber lit, feminine, gilded
  Mood: Intimate, then electric, then tense
  Key beats: The mysterious bracelet from Salvatore; Damien's threatening confrontation
  Sound design suggestion: Silence, then soft jazz bleed from the club beyond

SCENE 3: Diary Entry
  Setting: Interior monologue — Vivienne's private voice
  Mood: Raw, intimate, dangerous hope
  Delivery note: This is her REAL voice, not the performance mask
  Sound design suggestion: No music. Silence only. Let the words breathe.

SCENE 4: The Mansion
  Setting: Damien's estate — cold, palatial, suffocating
  Mood: Oppressive luxury, isolation, awakening
  Key beats: Vivienne alone; mirror reflection; the smile that is hers alone
  Sound design suggestion: Distant thunder, echoing heels on marble

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VOICE CASTING NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VIVIENNE NOIR — Lead Female
  Age range: Late 20s–30s
  Voice type: Mezzo-soprano speaking voice, velvety, controlled
  Range: Public voice (polished, performative) vs. diary voice (raw, real)
  Key quality: You must hear the discipline it takes for her to stay calm
  Do NOT cast: Anyone who sounds fragile. Vivienne is steel wrapped in satin.

DAMIEN VALE — Antagonist
  Age range: Late 30s–40s
  Voice type: Bass-baritone, measured, never loud
  Key quality: The danger lives in the QUIET. He is most terrifying at his softest.
  Do NOT cast: Anyone who sounds theatrical. Damien is surgical, not dramatic.

SALVATORE MORETTI — Secondary Male Lead
  Age range: 40s
  Voice type: Rich tenor or low baritone, unhurried, weighted
  Key quality: Economy. He uses few words because he has never needed more.
  Note: Salvatore does not speak in Chapter One — presence only.

LEONARDO — Supporting
  Age range: 30s
  Voice type: Smooth, charming, cosmopolitan
  Note: Appears in later chapters; associate of Salvatore's inner circle
  Key quality: Warmth masking calculation

LUCIEN — Supporting
  Age range: 30s–40s
  Voice type: Precise, slightly accented, intellectual
  Note: Legal/financial world figure; appears in later chapters
  Key quality: The kind of calm that comes from never being wrong

NARRATOR (if separate from character voices)
  Voice type: Deep, warm, slightly world-weary
  Delivery: Third-person omniscient but intimate — like a confession heard in a confessional
  Key quality: The narrator loves Vivienne and fears for her

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CINEMATIC NOIR DELIVERY NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PACE: This is not a thriller. Do not rush. Let the atmosphere build.
   Single-sentence paragraphs are structural pauses. Honor them.

2. SILENCE: Silence is an instrument here. Use it.
   After every [PAUSE] marker, hold for 1.5–2 full seconds.
   After [BREATHE], pause for 1 second and allow a natural breath.

3. DIALOGUE vs. NARRATION: The shift between them should be subtle but clear.
   No theatrical character voices — distinguish characters through pace and weight,
   not accent or caricature.

4. THE DIARY: This is Vivienne unmasked. Slower. Quieter. More fragile.
   The last three lines should feel like a woman discovering something in herself
   for the first time. Wonder, not triumph.

5. MUSIC NOTES: If scoring with music:
   - Jazz piano underscore for The Velvet Room scenes
   - Silence for backstage confrontation
   - Absolute silence for diary entry
   - Distant thunder ambience for mansion sequence
   - Music may swell softly on the final line: "Or welcoming her."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END CREDITS FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Music fades to silence after final line]

[3-second pause]

[Soft piano note — one chord, held]

DEAD ON PAPER
Chapter One: Velvet Notes

[Pause]

Written by Alise Grey
Narrated by [Narrator Name]
Vivienne Noir — [Voice Actor Name]
Damien Vale — [Voice Actor Name]

[Pause]

Produced by Alise Grey
Sound Design by [Sound Designer Name]
Mastered by [Audio Engineer Name]

[Pause]

© ${new Date().getFullYear()} Alise Grey. All rights reserved.
Unauthorized reproduction or distribution is prohibited.

[Music fades]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF PRODUCTION NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
}

function downloadFile(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─── Components ───────────────────────────────────────────────────────────────

function GoldDivider() {
  return <div className="gold-divider" />;
}

function NavBar({
  active,
  onNav,
}: {
  active: Section;
  onNav: (s: Section) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links: { label: string; id: Section }[] = [
    { label: "Read", id: "read" },
    { label: "Chapters", id: "chapters" },
    { label: "Author", id: "author" },
    { label: "Downloads", id: "downloads" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.11 0.004 250 / 0.98) 0%, oklch(0.11 0.004 250 / 0.85) 100%)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.25 0.008 240 / 0.5)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <button
          type="button"
          onClick={() => onNav("home")}
          className="font-cinzel text-sm sm:text-base font-bold tracking-widest text-gold hover:opacity-80 transition-opacity"
          data-ocid="nav.link"
        >
          DEAD ON PAPER
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => onNav(link.id)}
              className={`nav-link ${active === link.id ? "active" : ""}`}
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNav("read")}
            className="btn-gold px-5 py-2 rounded-full text-xs font-bold tracking-widest"
            data-ocid="nav.primary_button"
          >
            READ NOW
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-paper-dim hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "oklch(0.13 0.004 250 / 0.98)",
              borderBottom: "1px solid oklch(0.25 0.008 240 / 0.5)",
            }}
            data-ocid="nav.dropdown_menu"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => {
                    onNav(link.id);
                    setMenuOpen(false);
                  }}
                  className={`nav-link text-left ${active === link.id ? "active" : ""}`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  onNav("read");
                  setMenuOpen(false);
                }}
                className="btn-gold px-5 py-2 rounded-full text-xs font-bold tracking-widest w-fit"
                data-ocid="nav.primary_button"
              >
                READ NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection({ onNav }: { onNav: (s: Section) => void }) {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center"
      data-ocid="home.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Book cover */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 24px 60px oklch(0 0 0 / 0.8))",
              }}
            >
              <img
                src="/assets/generated/book-cover.dim_800x1200.jpg"
                alt="Dead on Paper — Book Cover"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg rounded-sm object-cover"
                style={{ boxShadow: "8px 8px 0 oklch(0.72 0.12 72 / 0.15)" }}
              />
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(1 0 0 / 0.05) 0%, transparent 50%)",
                }}
              />
            </div>
          </motion.div>

          {/* Book info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-gold mb-3 uppercase">
                A Novel
              </p>
              <h1
                className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-widest"
                style={{
                  color: "oklch(0.78 0.13 72)",
                  textShadow: "0 0 40px oklch(0.72 0.12 72 / 0.3)",
                  lineHeight: 1.1,
                }}
              >
                DEAD ON
                <br />
                PAPER
              </h1>
              <p className="font-playfair text-lg text-paper-dim mt-3 italic">
                by <span className="text-paper">Alise Grey</span>
              </p>
            </div>

            <GoldDivider />

            <p
              className="font-playfair text-lg leading-relaxed"
              style={{ color: "oklch(0.80 0.014 75)" }}
            >
              A story of velvet lies, dangerous men, and a woman learning the
              price of freedom.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Star size={14} />, text: "Cinematic Noir Romance" },
                { icon: <BookOpen size={14} />, text: "Full Chapter Included" },
                { icon: <Sparkles size={14} />, text: "Diary Entries" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="feature-card flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <span className="text-gold">{icon}</span>
                  <span className="font-sans text-xs tracking-wider text-paper-dim uppercase">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <button
                type="button"
                onClick={() => onNav("read")}
                className="btn-gold px-8 py-3 rounded-full flex items-center gap-2 text-sm"
                data-ocid="home.primary_button"
              >
                <BookOpen size={16} />
                START READING
              </button>
              <button
                type="button"
                onClick={() => onNav("downloads")}
                className="btn-outline-gold px-8 py-3 rounded-full flex items-center gap-2 text-sm"
                data-ocid="home.secondary_button"
              >
                <Download size={16} />
                DOWNLOAD
              </button>
            </div>

            {/* Scroll cue */}
            <motion.div
              className="flex items-center gap-2 text-paper-dim mt-4"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2.5,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={18} className="text-gold" />
              <span className="font-sans text-xs tracking-widest uppercase">
                Scroll to explore
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ReadingSection() {
  return (
    <section
      id="read"
      className="min-h-screen pt-24 pb-20"
      data-ocid="read.section"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Chapter header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
              Chapter One
            </p>
            <h2
              className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
              style={{ color: "oklch(0.78 0.13 72)" }}
            >
              Velvet Notes
            </h2>
            <div className="gold-divider mt-6" />
          </div>

          {/* Prose part A */}
          <div className="chapter-prose" data-ocid="read.panel">
            {CHAPTER_ONE_PROSE_A.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>

          {/* Diary Entry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="diary-entry my-10" data-ocid="read.card">
              <div
                className="font-sans text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "oklch(0.72 0.12 72 / 0.9)" }}
              >
                Diary Entry — March 3
              </div>
              {DIARY_ENTRY.map((line) => (
                <p
                  key={line.slice(0, 30)}
                  className="font-playfair italic leading-relaxed mb-3 text-paper"
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Prose part B */}
          <div className="chapter-prose">
            {CHAPTER_ONE_PROSE_B.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}
          </div>

          {/* Chapter end decoration */}
          <div className="text-center mt-16">
            <div className="gold-divider mb-6" />
            <p
              className="font-cinzel text-sm tracking-widest"
              style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
            >
              ✦ END OF CHAPTER ONE ✦
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ChaptersSection({ onNav }: { onNav: (s: Section) => void }) {
  const chapters = [
    {
      num: "I",
      title: "Velvet Notes",
      desc: "A singer in a gilded cage discovers that the most dangerous man in the room is watching.",
      available: true,
    },
    {
      num: "II",
      title: "The Weight of Silk",
      desc: "Secrets gather like smoke in the corridors of power.",
      available: false,
    },
    {
      num: "III",
      title: "Blood and Champagne",
      desc: "When two worlds collide, someone has to burn.",
      available: false,
    },
    {
      num: "IV",
      title: "The Offer",
      desc: "Salvatore Moretti makes a proposal no one refuses.",
      available: false,
    },
    {
      num: "V",
      title: "Diamonds Under Fire",
      desc: "The price of freedom has always been paid in blood.",
      available: false,
    },
    {
      num: "VI",
      title: "Kingdom Come",
      desc: "She was never meant to survive. She was meant to reign.",
      available: false,
    },
  ];

  return (
    <section
      id="chapters"
      className="min-h-screen pt-24 pb-20"
      data-ocid="chapters.section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-3">
              Table of Contents
            </p>
            <h2
              className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
              style={{ color: "oklch(0.78 0.13 72)" }}
            >
              Chapters
            </h2>
            <div className="gold-divider mt-5" />
          </div>

          <div className="flex flex-col gap-4" data-ocid="chapters.list">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="feature-card flex items-center gap-6 group"
                style={{
                  opacity: ch.available ? 1 : 0.55,
                  cursor: ch.available ? "pointer" : "default",
                }}
                onClick={() => ch.available && onNav("read")}
                data-ocid={`chapters.item.${i + 1}`}
              >
                <div
                  className="font-cinzel text-2xl font-bold w-12 shrink-0 text-center"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  {ch.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3
                      className="font-cinzel text-base font-semibold tracking-wide"
                      style={{ color: "oklch(0.85 0.013 75)" }}
                    >
                      {ch.title}
                    </h3>
                    {ch.available ? (
                      <span
                        className="font-sans text-xs px-3 py-0.5 rounded-full border tracking-widest"
                        style={{
                          color: "oklch(0.72 0.12 72)",
                          borderColor: "oklch(0.72 0.12 72 / 0.4)",
                          background: "oklch(0.72 0.12 72 / 0.08)",
                        }}
                      >
                        AVAILABLE
                      </span>
                    ) : (
                      <span
                        className="font-sans text-xs px-3 py-0.5 rounded-full border tracking-widest"
                        style={{
                          color: "oklch(0.55 0 0)",
                          borderColor: "oklch(0.30 0 0)",
                          background: "oklch(0.18 0 0)",
                        }}
                      >
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <p className="font-playfair italic text-sm text-paper-dim leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
                {ch.available && (
                  <BookOpen
                    size={20}
                    className="text-gold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section
      id="author"
      className="min-h-screen pt-24 pb-20 relative overflow-hidden"
      data-ocid="author.section"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/assets/generated/book-cover.dim_800x1200.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px) saturate(0.4)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.004 250 / 0.92) 0%, oklch(0.13 0.004 250 / 0.97) 100%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-3">
            About
          </p>
          <h2
            className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide mb-8"
            style={{ color: "oklch(0.78 0.13 72)" }}
          >
            The Author
          </h2>

          {/* Author photos */}
          <div
            className="mb-8 flex flex-col items-center gap-4"
            data-ocid="author.card"
          >
            {/* Primary / featured photo */}
            <div
              className="w-44 h-44 rounded-2xl overflow-hidden"
              style={{
                border: "2px solid oklch(0.72 0.12 72 / 0.7)",
                boxShadow:
                  "0 0 35px oklch(0.72 0.12 72 / 0.25), 0 0 8px oklch(0.72 0.12 72 / 0.15)",
              }}
            >
              <img
                src="/assets/screenshot_20260404-200935_2-019d6467-7333-755b-b4ba-bbda284a6820.png"
                alt="Alise Grey"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Thumbnail row */}
            <div className="flex gap-3 justify-center">
              {[
                {
                  src: "/assets/screenshot_20260404-200941_2-019d6467-7422-77ac-bb20-9353cf57d98f.png",
                  n: 2,
                },
                {
                  src: "/assets/img_20260404_234304_295-019d6467-7459-76b6-a6b1-282208e8f748.webp",
                  n: 3,
                },
                {
                  src: "/assets/screenshot_20260404-200946_2-019d6467-745f-73fe-8771-bd4e17a5dc47.png",
                  n: 4,
                },
                {
                  src: "/assets/image-019d6467-751d-7694-88fd-bd3e4bdd551a.jpg",
                  n: 5,
                },
              ].map(({ src, n }) => (
                <div
                  key={src}
                  className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                  style={{
                    border: "1.5px solid oklch(0.72 0.12 72 / 0.5)",
                    boxShadow: "0 0 12px oklch(0.72 0.12 72 / 0.15)",
                  }}
                >
                  <img
                    src={src}
                    alt={`Alise Grey ${n}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

          <h3
            className="font-cinzel text-2xl font-bold tracking-widest mb-2"
            style={{ color: "oklch(0.78 0.13 72)" }}
          >
            Alise Grey
          </h3>
          <p
            className="font-sans text-xs tracking-widest uppercase mb-8"
            style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
          >
            Author
          </p>

          <GoldDivider />

          <p
            className="font-playfair text-lg leading-relaxed mt-8 mb-4"
            style={{ color: "oklch(0.80 0.014 75)" }}
          >
            Author of <em>Dead on Paper</em>. A story of survival, silence, and
            the dangerous moment a woman decides she is worth more than what
            she&apos;s been given.
          </p>

          <p
            className="font-sans text-sm italic"
            style={{ color: "oklch(0.55 0.008 240)" }}
          >
            Add your author bio here
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadsSection() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = (key: string, action: () => void) => {
    setDownloading(key);
    setTimeout(() => {
      action();
      setDownloading(null);
    }, 600);
  };

  const downloads = [
    {
      key: "ebook",
      icon: <BookOpen size={22} />,
      title: "Ebook",
      subtitle: "Markdown format",
      ext: ".md",
      desc: "The full formatted ebook with all chapters, diary entries, and prose styled in clean Markdown.",
      action: () =>
        downloadFile(
          "dead-on-paper-ebook.md",
          generateEbookMd(),
          "text/markdown",
        ),
    },
    {
      key: "audiobook",
      icon: <Headphones size={22} />,
      title: "Audiobook Script",
      subtitle: "Narration script (.txt)",
      ext: ".txt",
      desc: "Full narration script with voice styles, pacing cues ([PAUSE], [SLOW], [WHISPER]), and character dialogue markers.",
      action: () =>
        downloadFile(
          "dead-on-paper-audiobook-script.txt",
          generateAudiobookScript(),
          "text/plain",
        ),
    },
    {
      key: "production",
      icon: <FileText size={22} />,
      title: "Production Notes",
      subtitle: "Casting & delivery guide (.txt)",
      ext: ".txt",
      desc: "Chapter timestamps, scene breakdowns, voice casting for Vivienne, Damien, Salvatore, Leonardo & Lucien, noir delivery notes, and end credits.",
      action: () =>
        downloadFile(
          "dead-on-paper-production-notes.txt",
          generateProductionNotes(),
          "text/plain",
        ),
    },
  ];

  return (
    <section
      id="downloads"
      className="min-h-screen pt-24 pb-20"
      data-ocid="downloads.section"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-3">
              Files
            </p>
            <h2
              className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
              style={{ color: "oklch(0.78 0.13 72)" }}
            >
              Downloads
            </h2>
            <div className="gold-divider mt-5" />
            <p className="font-playfair text-base mt-6 text-paper-dim">
              Download the complete production files — ebook, narration script,
              and audiobook production notes.
            </p>
          </div>

          <div className="flex flex-col gap-6" data-ocid="downloads.list">
            {downloads.map((dl, i) => (
              <motion.div
                key={dl.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="feature-card"
                data-ocid={`downloads.item.${i + 1}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "oklch(0.72 0.12 72 / 0.12)",
                      border: "1px solid oklch(0.72 0.12 72 / 0.3)",
                    }}
                  >
                    <span className="text-gold">{dl.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="font-cinzel text-base font-semibold tracking-wide mb-0.5"
                          style={{ color: "oklch(0.85 0.013 75)" }}
                        >
                          {dl.title}
                        </h3>
                        <p
                          className="font-sans text-xs tracking-wider uppercase"
                          style={{ color: "oklch(0.72 0.12 72 / 0.8)" }}
                        >
                          {dl.subtitle}
                        </p>
                      </div>
                      <span
                        className="font-sans text-xs px-3 py-1 rounded-full shrink-0"
                        style={{
                          background: "oklch(0.72 0.12 72 / 0.1)",
                          color: "oklch(0.72 0.12 72)",
                          border: "1px solid oklch(0.72 0.12 72 / 0.3)",
                        }}
                      >
                        {dl.ext}
                      </span>
                    </div>
                    <p className="font-playfair text-sm mt-3 mb-5 leading-relaxed text-paper-dim">
                      {dl.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleDownload(dl.key, dl.action)}
                      disabled={downloading === dl.key}
                      className="btn-outline-gold px-6 py-2.5 rounded-full text-xs flex items-center gap-2 disabled:opacity-50"
                      data-ocid={`downloads.button.${i + 1}`}
                    >
                      {downloading === dl.key ? (
                        <>
                          <span
                            className="w-3.5 h-3.5 border-2 rounded-full animate-spin"
                            style={{
                              borderColor: "oklch(0.72 0.12 72 / 0.3)",
                              borderTopColor: "oklch(0.72 0.12 72)",
                            }}
                          />
                          Preparing...
                        </>
                      ) : (
                        <>
                          <Download size={14} />
                          DOWNLOAD {dl.ext.toUpperCase()}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ onNav }: { onNav: (s: Section) => void }) {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "oklch(0.25 0.008 240 / 0.5)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8">
          <h2
            className="font-cinzel text-lg font-bold tracking-widest"
            style={{ color: "oklch(0.78 0.13 72)" }}
          >
            DEAD ON PAPER
          </h2>
          <p
            className="font-playfair italic text-center max-w-md"
            style={{ color: "oklch(0.55 0.008 240)" }}
          >
            A story of velvet lies, dangerous men, and a woman learning the
            price of freedom.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {(
              [
                ["home", "Home"],
                ["read", "Read"],
                ["chapters", "Chapters"],
                ["author", "Author"],
                ["downloads", "Downloads"],
              ] as [Section, string][]
            ).map(([id, label]) => (
              <button
                type="button"
                key={id}
                onClick={() => onNav(id)}
                className="nav-link"
                data-ocid="footer.link"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="gold-divider w-full" />
          <p
            className="font-sans text-xs tracking-wider text-center"
            style={{ color: "oklch(0.45 0.008 240)" }}
          >
            © {year}. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
              style={{ color: "oklch(0.55 0.008 240)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const navigateTo = (section: Section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const sections: Section[] = [
      "home",
      "read",
      "chapters",
      "author",
      "downloads",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-60px 0px -60px 0px" },
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.13 0.004 250) 0%, oklch(0.155 0.005 250) 100%)",
      }}
    >
      <NavBar active={activeSection} onNav={navigateTo} />
      <main>
        <HeroSection onNav={navigateTo} />
        <GoldDivider />
        <ReadingSection />
        <GoldDivider />
        <ChaptersSection onNav={navigateTo} />
        <GoldDivider />
        <AuthorSection />
        <GoldDivider />
        <DownloadsSection />
      </main>
      <Footer onNav={navigateTo} />
    </div>
  );
}
