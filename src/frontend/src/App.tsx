import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Headphones,
  Menu,
  Sparkles,
  Star,
  Volume2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Section = "home" | "read" | "chapters" | "author" | "downloads";
type ChapterId =
  | "one"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine"
  | "ten"
  | "eleven"
  | "twelve"
  | "thirteen"
  | "fourteen";

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
  "Your husband is a lucky man.",
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
  "Who sent that?",
  "Vivienne turned slowly.",
  "He stood in the doorway, tie loosened, eyes dark with the kind of rage that always arrived dressed as calm.",
  "It was here when I came in.",
  "He stepped closer, gaze locked on the bracelet.",
  "His jaw flexed.",
  "Did he speak to you?",
  "No.",
  "Another step.",
  "Too close now.",
  "The scent of whiskey and courtroom cologne.",
  "You will never embarrass me in that room.",
  "The warning was familiar.",
  "Soft enough that no one else would hear. Sharp enough to leave damage anyway.",
  "Vivienne held his gaze.",
  "For a moment, the jazz beyond the walls seemed miles away.",
  "Then Damien smiled.",
  "The public smile.",
  "The one that won juries and buried truths.",
  "He reached up and adjusted the diamond necklace at her throat, fingertips brushing the fading mark beneath it.",
  "Go home, he said. I\\'ll be late.",
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

const CHAPTER_TWO_PROSE_A = [
  "Morning in the Vale mansion never truly felt like morning.",
  "Light entered through towering French windows in pale ribbons, touching marble floors, antique mirrors, and the carved gold frames of ancestors who looked permanently disappointed. The house was beautiful in the way a cathedral could be beautiful—grand, silent, and built to make people feel small.",
  "Vivienne stood before the vanity in her dressing suite, fastening pearl drops to her ears.",
  "The bruise at her collarbone had darkened overnight.",
  "Purple now. Almost blue.",
  "She lifted a strand of diamonds and layered it carefully over the mark.",
  "By the time the necklace settled, the violence had disappeared beneath brilliance.",
  "That was Damien's favorite kind of magic.",
  "A soft knock came at the door.",
  "Her maid, Celia, stepped in carrying breakfast on a silver tray—coffee, sliced fruit, buttered toast arranged with impossible perfection.",
  "Celia's eyes flicked once to the bruise before dropping respectfully.",
  "Neither woman acknowledged it.",
  "The mansion had rules.",
  "Some spoken. Some stitched into the wallpaper.",
  '"Your husband left early for court," Celia said quietly.',
  "Vivienne gave a small nod.",
  "The relief was physical.",
  "It moved through her shoulders, loosening muscles she hadn't realized had been clenched since the night before.",
  "On the tray beside the coffee sat the morning paper.",
  "STATE PROSECUTOR LOSES KEY WITNESS",
  "Below it, another familiar headline:",
  "ATTORNEY DAMIEN VALE SECURES ANOTHER IMPOSSIBLE ACQUITTAL",
  "She stared at the photo.",
  "His courtroom smile. Perfect tie. Perfect posture.",
  "The city loved him.",
  "The city did not know what happened after midnight.",
  "Vivienne folded the paper closed and moved toward the balcony.",
  "Outside, the estate gardens stretched like a royal dream—hedges carved into impossible shapes, white roses opening to the sun, fountains spilling crystal water into stone basins.",
  "Beauty everywhere.",
  "Yet the gates stood iron-black and always locked.",
  "A palace was still a prison when someone else held the keys.",
  "That afternoon, Damien returned early.",
  "Vivienne heard him before she saw him.",
  "The measured rhythm of expensive shoes on marble.",
  "A brief exchange with staff.",
  "The sound of a glass being filled in his office downstairs.",
  "Every sound in the mansion bent around him.",
  "She remained in the music room, fingers resting lightly on the grand piano.",
  "The same piano where she had once written songs before marriage turned melodies into survival.",
  "Damien appeared in the doorway.",
  "Gray suit. Silver cufflinks. Expression unreadable.",
  "You left before I woke.",
  "He poured himself a drink from the crystal decanter on the bar cart.",
  "You looked tired.",
  "His tone was almost kind.",
  "Almost.",
  'Vivienne had learned that "almost" was where danger lived.',
  "He crossed the room and set the whiskey down.",
  "His fingers tilted her chin upward.",
  "The bruise at her throat peeked beneath the diamonds.",
  "His thumb brushed it with terrible tenderness.",
  "You covered it well.",
  "The compliment chilled her.",
  "I have rehearsal tonight.",
  "You have dinner first.",
  "She frowned slightly.",
  "With whom?",
  "A pause.",
  "Then the answer she already feared.",
  "Salvatore.",
  "The room seemed to narrow.",
  "No.",
  "The word slipped out before she could stop it.",
  "Damien's expression changed.",
  "Not rage.",
  "Worse.",
  "Disappointment.",
  "You will sit beside me and smile, he said evenly. The boss likes elegance. He likes loyalty even more.",
  "I sing for him every night. Isn't that enough?",
  "The slap came so fast it barely felt real.",
  "Only the sharp sting blooming across her cheek proved it had happened.",
  "Damien stared at her, breathing steady, as if violence were simply another form of punctuation.",
  "Do not confuse your voice with your value.",
  "The silence after was suffocating.",
  "Vivienne's eyes watered, but she refused to let tears fall.",
  "Damien hated tears unless he caused them.",
  "He adjusted the silk strap on her gown where it had slipped.",
  "Straightened it like a husband preparing his wife for a photograph.",
  "Then he kissed her forehead.",
  "A gesture so gentle it felt monstrous.",
  "Wear the emerald dress tonight, he said. Salvatore likes green.",
  "When he left, the room seemed to exhale.",
  "Vivienne touched her cheek.",
  "Heat pulsed beneath her fingertips.",
  "Then she looked at the piano.",
  "At the sheet music resting open.",
  "An idea arrived quietly.",
  "The kind that didn't ask permission.",
  "She sat down.",
  "Lifted the bench.",
  "And beneath the velvet-lined compartment where old scores were kept, she slid her diary deeper into the hollow wood.",
  "Her secret memoir. Her truth. Her evidence.",
  "If Damien ever found it, he would destroy more than pages.",
  "So she began writing differently.",
  "Not plainly.",
  "In code.",
  "A lyric for every threat. A note progression for every payoff. A chord change for every judge Damien owned.",
  "The diary would sing what her mouth never could.",
];

const DIARY_ENTRY_TWO = [
  "The bruise beneath my necklace has turned the color of twilight.",
  "He says I wear diamonds better than fear.",
  "Tonight I dine with the king of this city while my husband watches like a man offering tribute.",
  "Sometimes I wonder if Damien sees me as his wife at all.",
  "Or merely another document. A signature. An asset.",
  "So today I began writing in music.",
  "If anyone reads these pages, let them hear what I could not say.",
  "A minor chord for pain.",
  "A sharp note for blood.",
  "A descending scale for every lie Damien sells beneath courtroom chandeliers.",
  "If I vanish, let the songs testify.",
];

const CHAPTER_TWO_PROSE_B = [
  "That night the emerald gown fit like liquid silk.",
  "Low-backed. Elegant. Dangerous.",
  "The color made her skin glow beneath the ballroom lights of Salvatore's private dining hall above The Velvet Room.",
  "The table stretched impossibly long, set with crystal and candlelight.",
  "Politicians. Judges. Captains. Women in velvet gloves.",
  "And at the head—",
  "Salvatore Moretti.",
  "His gaze lifted when she entered.",
  "Slowly. Deliberately.",
  "He stood.",
  "A gesture no one else at the table received.",
  "Mrs. Vale.",
  "His voice was velvet dragged over a blade.",
  "Vivienne took the seat Damien pulled out for her.",
  "Across the table, Salvatore's eyes lingered on the faint redness near her cheek.",
  "He noticed everything.",
  "That was the frightening part.",
  "Dinner unfolded in silver laughter and legal lies.",
  "Damien discussed judges.",
  "Salvatore discussed territory.",
  "Men with clean hands talked casually about ruined lives.",
  "Then Salvatore turned to Vivienne.",
  "And what does our star sing when she is alone?",
  "The room quieted.",
  "Damien's jaw tightened.",
  "Vivienne lifted her wine glass.",
  '"The truth," she said softly.',
  "For the first time all evening, Salvatore smiled.",
  "Not because of beauty.",
  "Because he recognized danger.",
  "And perhaps, for the first time, so did she.",
];

const CHAPTER_THREE_PROSE_A = [
  "The rain came just after midnight.",
  "It tapped softly against the tall windows of the Vale mansion, silver streaks sliding down the glass like tears too elegant to fall.",
  "Vivienne stood alone in her dressing room, removing emerald earrings one careful piece at a time.",
  "Dinner with Salvatore had left a strange chill in her bones.",
  "His eyes had never once left her face when she answered him.",
  "Not flirtation.",
  "Recognition.",
  "As if he had heard something hidden beneath the words.",
  "Downstairs, the front doors slammed.",
  "Damien.",
  "Home earlier than expected.",
  "Vivienne\u2019s pulse tightened.",
  "His footsteps moved through the marble hall below, sharper than usual, the measured control in them replaced by something jagged.",
  "She caught the scent before he even entered.",
  "Whiskey.",
  "Anger.",
  "Humiliation.",
  "The bedroom door swung open so hard it struck the wall.",
  "Damien stood there, coat half-buttoned, rain still shining on his shoulders.",
  "You embarrassed me.",
  "Vivienne slowly turned from the vanity.",
  "I answered a question.",
  "You answered him.",
  "His voice cut through the room.",
  "The storm outside seemed to lean closer.",
  "Damien crossed the distance in seconds.",
  "His grip clamped around her wrist, hard enough to make her gasp.",
  "Do you know what men like Salvatore do when they decide they want something?",
  "His fingers tightened.",
  "Her bracelets bit into skin.",
  '"Yes," she whispered.',
  "Then stop giving him reasons.",
  "He shoved her backward.",
  "She hit the chaise, the silk cushion sliding beneath her.",
  "The room tilted with the force of it.",
  "Outside the window, hidden beyond rain-dark hedges and wrought-iron fencing, a figure stood motionless in the shadows.",
  "A man in a black overcoat beneath an umbrella.",
  "Still as a statue.",
  "Watching the lit bedroom window.",
  "Salvatore Moretti.",
  "He had come to deliver another gift.",
  "A velvet box rested in his gloved hand.",
  "But what he saw through the sheer curtains made him stop.",
  "Damien looming over Vivienne. Her flinch. The way she instinctively shielded her ribs before the next blow even came.",
  "The truth.",
  "Not rumor. Not suspicion.",
  "Proof.",
  "Inside, Damien grabbed the diamond bracelet Salvatore had sent nights before from the vanity.",
  "He held it up between two fingers like evidence.",
  "Did you wear this for him?",
  "Vivienne\u2019s breath caught.",
  "It was a gift.",
  "The back of his hand struck her across the mouth.",
  "The taste of blood bloomed instantly.",
  "Outside, Salvatore\u2019s jaw tightened.",
  "The umbrella lowered just slightly.",
  "Rain soaked one shoulder of his coat, but he didn\u2019t move.",
  "He watched Damien pace like a predator inside his own home.",
  "Watched Vivienne stay silent, one hand pressed to her lip, dignity somehow still intact.",
  "There was something almost unbearable in the way she refused to crumble.",
  "Salvatore had known men like Damien his entire life.",
  "Men who wore civility over rot.",
  "But seeing Vivienne\u2019s fear sharpened something old and territorial inside him.",
  "Not lust.",
  "Rage.",
  "Inside the room Damien leaned closer, voice dropping to a whisper.",
  "If you make me look weak in front of him again, I'll make sure you never sing another note.",
  "He stormed out, slamming the bedroom door so hard the chandelier trembled.",
  "Silence followed.",
  "Heavy. Breathing. Shaking.",
];

const DIARY_ENTRY_THREE = [
  "Tonight the storm brought a witness.",
  "Not a savior. Not yet.",
  "But a man who stood in the rain and saw what diamonds cannot hide.",
  "Damien\u2019s hands. My blood. The lie of this marriage.",
  "I should be ashamed that another man saw me broken.",
  "Instead I feel something stranger.",
  "Relief.",
  "Because monsters thrive in locked rooms.",
  "And tonight, the room had a window.",
];

const CHAPTER_THREE_PROSE_B = [
  "Vivienne remained still for a long moment.",
  "Then she walked to the window.",
  "Her fingers parted the curtain just enough to look into the storm.",
  "A shadow stood near the hedge line.",
  "Tall. Motionless.",
  "Watching.",
  "Her heart stopped.",
  "For one terrible second she thought Damien had posted another guard.",
  "Then lightning flashed.",
  "The silver edge of Salvatore\u2019s umbrella caught the light.",
  "Their eyes met through glass and rain.",
  "He had seen.",
  "All of it.",
  "Vivienne\u2019s hand froze against the curtain.",
  "A thousand emotions crossed her face\u2014fear, humiliation, fury\u2014but beneath them all, something more dangerous stirred.",
  "Witness.",
  "Someone had finally seen the truth.",
  "Salvatore gave the slightest nod.",
  "Not pity.",
  "A promise.",
  "Then he turned and disappeared into the storm.",
  "Leaving the velvet box on the stone ledge beneath her window.",
  "The next evening at The Velvet Room, Salvatore sat in his usual shadow booth.",
  "But this time when Vivienne stepped onto the stage, she found something waiting beside the microphone.",
  "A velvet box.",
  "Inside\u2014",
  "a ruby necklace.",
  "Red as fresh blood.",
  "And beneath it, a note.",
  "No cage lasts forever.",
  "Her breath caught.",
  "Across the room, Salvatore lifted his glass once.",
  "A silent toast.",
  "Not to her beauty.",
  "To war.",
  "And from his corner booth, Damien saw everything.",
  "The gift. The note. The look between them.",
  "His smile never moved.",
  "But the glass in his hand cracked.",
  "The first fracture in the night Damien Vale disappeared.",
];

const CHAPTER_FOUR_PROSE_A = [
  "The city bled hardest after midnight.",
  "By one in the morning, The Velvet Room had transformed from elegance into something feral.",
  "Champagne glasses sweated on linen. Cigar smoke thickened the chandeliers. Laughter became louder, uglier. Deals once whispered now moved openly across the tables.",
  "Vivienne had finished her final set.",
  "The applause still rang faintly in the hallway as she slipped backstage, ruby necklace cool against her throat.",
  "Salvatore's note remained hidden in the silk lining of her glove.",
  "No cage lasts forever.",
  "The words had followed her through every song.",
  "She had just stepped into her dressing room when the shouting began upstairs.",
  "Male voices. Sharp. Violent.",
  "One of them Damien.",
  "The other—",
  "Salvatore.",
  "Her pulse spiked.",
  "The private office above the club.",
  "She moved toward the corridor, heels silent against crimson carpet, and stopped just outside the half-open office door.",
  "Inside, the storm had already broken.",
  "Damien stood near the desk, face flushed with fury, a ledger book clutched in one hand.",
  "Salvatore remained behind the mahogany desk, unnervingly calm, hands folded.",
  "The room smelled of whiskey and danger.",
  '"You\'ve crossed a line," Damien hissed.',
  "Salvatore's expression didn't move.",
  "You mistake kindness for permission.",
  "Damien slammed the leather ledger onto the desk.",
  "Pages burst open—judges' names, shell companies, offshore accounts, funeral payoffs, false wills.",
  "The legal skeleton of the entire empire.",
  "Vivienne's breath caught.",
  "So this was the real heart of it.",
  "Not guns. Not men.",
  "Paper.",
  '"Those accounts are mine," Damien said.',
  "Salvatore leaned back slowly.",
  "Nothing in this city is yours.",
  "The silence that followed was pure violence.",
  "Then Damien reached inside his coat.",
  "Steel flashed.",
  "A gun.",
  "Vivienne gasped.",
  "The sound was small—but enough.",
  "Both men turned toward the door.",
  "For one suspended second, all three of them froze.",
  "Then everything happened at once.",
  "A gunshot split the room.",
  "Glass shattered.",
  "The chandelier overhead burst into raining crystal.",
  "Vivienne dropped to the floor, hands over her head.",
  "More shouting. A body striking furniture. Another shot.",
  "Then—",
  "silence.",
  "Terrible silence.",
  "When she finally looked up, the office lights flickered weakly.",
  "The desk had overturned.",
  "Blood stained the edge of the Persian rug.",
  "And Damien was gone.",
  "Salvatore too.",
  "Only the ledger remained.",
  "Open.",
  "Waiting.",
  "Footsteps thundered in the corridor.",
  "Salvatore's captains rushed in, guns drawn, faces pale.",
  "They stared at the blood. The shattered office. The empty room.",
  'One captain whispered, "Where\'s the boss?"',
  "No one answered.",
  "Because no one knew.",
  "By sunrise, the city had already written its own story.",
  "Mob Lawyer Damien Vale Missing After Nightclub Shooting",
  "Crime Lord Salvatore Moretti Presumed Dead",
  "Witnesses reported: gunshots, broken office glass, blood at the scene, two missing men, one terrified singer.",
  "The police swarmed the block.",
  "Statements were taken.",
  "Bodies were never found.",
  "But the state did what the state always did.",
  "It made death official on paper before truth had time to breathe.",
  "Vivienne signed forms with shaking hands.",
  "Missing quickly became deceased.",
  "Her husband was now a ghost in the eyes of the law.",
  "And so was the king.",
];

const DIARY_ENTRY_FOUR = [
  "Two men vanished tonight.",
  "One wore the law like armor. One wore power like skin.",
  "The city calls them dead because blood was easier to understand than absence.",
  "But I saw the ledger.",
  "I saw what really ruled them.",
  "Names. Numbers. Judges. Funeral funds. Dead witnesses.",
  "Men like Damien do not disappear.",
  "They relocate.",
  "Men like Salvatore do not die.",
  "They become shadows.",
  "And tonight the shadows left me holding the empire's heartbeat in my hands.",
];

const CHAPTER_FOUR_PROSE_B = [
  "The following weeks became a funeral without bodies.",
  "Black cars lined the mansion gates. Judges sent flowers. Politicians sent condolences.",
  "The city mourned the men who had once controlled it.",
  "But in the shadows, orders still moved.",
  "A judge suddenly reversed a ruling in the mob's favor.",
  "A captain who spoke too boldly was found floating in the bay.",
  "A federal raid was mysteriously canceled.",
  "The ghost of Salvatore still ruled.",
  "Only now through whispers, dead drops, and sealed envelopes.",
  "Vivienne began receiving them.",
  "One black envelope every Friday.",
  "No signature.",
  "Only instructions.",
  "Move the offshore account to Geneva.",
  "Trust Captain Russo. Not Bellini.",
  "Burn page 47 of Damien's ledger.",
  "Watch who attends the funeral.",
  "At first she feared it.",
  "Then she understood.",
  "Salvatore was alive.",
  "He had vanished by design.",
  "Watching.",
  "Testing.",
  "Teaching.",
  "The city believed it had lost its king.",
  "But the king had simply stepped off the board.",
  "And left her to become queen.",
  "Months passed.",
  "Vivienne transformed.",
  "The widow's black silks became tailored power. The jazz singer learned the ledgers. The abused wife learned the language of fear.",
  "Men who once ignored her now stood when she entered.",
  "Her diary filled with names.",
  "Debts.",
  "Secrets.",
  "Proof.",
  "She no longer sang every night.",
  "Sometimes she only sat in Salvatore's old booth and watched the room bend around her.",
  "And every Friday, another envelope came.",
  "Until one week—",
  "nothing.",
  "No letter. No order. No shadow.",
  "The silence lasted months.",
  "Long enough for Vivienne to truly believe the ghost king had finally gone.",
  "Long enough for her to become something he no longer needed to instruct.",
];

const CHAPTER_FIVE_PROSE_A = [
  "Las Vegas glittered like a lie told beautifully.",
  "From the window of the private jet, the Strip looked endless—rivers of gold and neon cutting through black desert emptiness, every casino promising luck while quietly feeding on ruin.",
  "Vivienne sat alone in the leather seat, dressed in widow-black silk, Damien's ledger open across her lap.",
  "The black envelope had arrived at dawn.",
  "No greeting. No signature. Only six words.",
  "Bellini is selling us underground.",
  "Captain Bellini.",
  "One of Salvatore's most trusted men. Or so everyone believed.",
  "The rest of the instructions were simple.",
  "Go to Vegas.",
  "Follow the chips.",
  "Use the law.",
  "Vivienne closed the ledger and stared out at the city below.",
  "The ghost king was still teaching.",
  "Only now the lessons had teeth.",
  "The casino was called The Elysian Crown.",
  "Impossible chandeliers. Gold-veined marble. Private baccarat salons hidden behind mirrored walls. Women in couture. Men in custom tuxedos. Every smile cost something.",
  "Officially, it was luxury.",
  "Unofficially, it was where the family moved money beneath the desert.",
  "Underground elevators took only select guests below the gaming floor.",
  "No cameras. No clocks. No windows.",
  "Just polished black corridors leading to private deal rooms where fortunes changed hands in silence.",
  "Vivienne descended with Captain Russo at her side, two bodyguards trailing several steps behind.",
  "The deeper they went, the colder the air became.",
  "At the bottom level, the true casino began.",
  "Not roulette.",
  "Not cards.",
  "Shell corporations. Title transfers. Ghost trusts. Construction bids. Insurance payouts. Land deeds.",
  "Paper gambling.",
  "The kind Damien had mastered.",
  "The kind Vivienne was beginning to understand.",
  "Captain Bellini waited in the underground lounge, champagne in hand, silver hair slicked back, smile too polished.",
  "Mrs. Vale, he said, rising. Or should I say Madam Noir now?",
  "His tone was playful.",
  "His eyes were not.",
  "Vivienne sat opposite him at the velvet gaming table.",
  "A dealer silently laid out documents instead of cards.",
  "Property acquisitions. Probate transfers. Life insurance settlements.",
  "Bellini had been laundering family assets into a rival syndicate through dead estates.",
  "Dead men's mansions. Dead women's pensions. Orphaned trust funds.",
  "Every stolen dollar vanished through Vegas real estate.",
  "He thought Damien's death had left no one smart enough to notice.",
  "He had underestimated the widow.",
  "Bellini smiled, sliding a contract toward her.",
  "A routine signature. Salvatore's old holdings on the east side.",
  "Vivienne glanced down.",
  "The deed transferred three casino-adjacent towers and a buried vault system to Bellini's shell company.",
  "A quiet coup.",
  "A theft disguised as inheritance law.",
  "She looked up and smiled back.",
  "Of course.",
  "Bellini relaxed.",
  "That was when Vivienne opened Damien's ledger to the coded page she had memorized on the flight.",
  "Page 47.",
  "The same page Salvatore had once ordered burned.",
  "Except she hadn't burned it.",
  "She had copied every line.",
  "Judge names. Emergency probate clauses. Federal seizure loopholes. Contingent beneficiary reversals.",
  "Damien's own tricks.",
  "She signed not Bellini's transfer—",
  "but a superseding emergency death-beneficiary injunction naming Bellini personally liable for fraudulent concealment, racketeering exposure, and witness obstruction.",
  "In the eyes of the law, Bellini had just inherited every crime tied to the Vegas towers.",
  "Russo slid the real court-stamped packet across the table.",
  "Bellini's smile vanished.",
  "What is this?",
  "Vivienne's voice stayed velvet calm.",
  "A death sentence written in legal language.",
  "The room went still.",
  "Russo nodded toward the hallway.",
  "Federal marshals stepped into view.",
  "Not random.",
  "Purchased. Positioned. Expected.",
  "Bellini half-rose, panic cracking his face.",
  "You set me up.",
  "Vivienne tilted her head.",
  "No, Captain. You gambled.",
  "He lunged for the file.",
  "Too late.",
  "The marshals seized him, reading charges that sounded cleaner than bullets but would bury him deeper: fraud, conspiracy, homicide concealment, money laundering, witness elimination.",
  "Bellini screamed her name as they dragged him toward the elevator.",
  "His voice echoed down the black marble hall.",
  "Then vanished.",
  "No blood. No gunshot.",
  "Just paperwork.",
  "And in this world, paper killed slower.",
  "But forever.",
];

const DIARY_ENTRY_FIVE = [
  "Tonight I learned a bullet is mercy.",
  "Paper is patience.",
  "Bellini thought Vegas belonged to chance.",
  "He forgot casinos are built by men who rig the table.",
  "Damien taught me signatures can erase lives.",
  "Salvatore taught me shadows can move armies.",
  "Tonight I taught myself that a widow in silk can bury a man without touching him.",
  "The desert keeps secrets.",
  "But the law keeps score.",
];

const CHAPTER_FIVE_PROSE_B = [
  "Later that night, Vivienne stood alone in the underground vault room beneath the casino.",
  "Rows of gold bars. Cash cages. Passport drawers. Property deeds from three states.",
  "This was no nightclub empire anymore.",
  "This was a kingdom.",
  "A hidden city beneath the city.",
  "Russo stepped beside her.",
  "The men are talking.",
  "About Bellini?",
  "He gave a slow nod.",
  "No. About you.",
  "Vivienne turned.",
  "And what are they saying?",
  "Russo's face softened into the closest thing mob men had to respect.",
  "They say the ghost king chose well.",
  "For the first time, the title didn't frighten her.",
  "It fit.",
  "She placed her hand on the cold steel vault door.",
  "And smiled.",
  "Because beneath the chandeliers of Vegas, in the underworld of contracts and corpses on paper—",
  "Vivienne Noir officially became property of the mob.",
  "And for the first time—",
  "she liked the sound of ownership.",
  "Because now, the property belonged to her.",
];

const CHAPTER_SIX_PROSE_A = [
  "Monaco looked unreal at sunset.",
  "Gold light spilled across the harbor, turning superyachts into floating palaces and the sea into molten glass. From the terrace of a cliffside villa, Damien Vale leaned back in a linen chair, a crystal tumbler of scotch balanced in one hand.",
  "The woman beside him—young, dazzling, and expensive—laughed softly as she flipped through a European financial paper.",
  "Her name was Celeste Armand.",
  "Former model. Current opportunist. The kind of woman who collected men by their bank accounts.",
  "She paused at the front page.",
  "Then smiled.",
  "Well, she said, your widow is making headlines.",
  "Damien took the paper.",
  "Across the spread was a black-and-white photograph of Vivienne stepping from a private car outside The Velvet Room.",
  "Silk gloves. Diamond collar. Three suited men behind her.",
  "The headline beneath it:",
  "THE BLACK WIDOW OF THE VELVET ROOM CONTROLS VEGAS HOLDINGS",
  "MORETTI GHOST EMPIRE EXPANDS UNDER MYSTERIOUS WIDOW",
  "Damien stared longer than he meant to.",
  "The image unsettled him.",
  "Vivienne's posture had changed.",
  "No shrinking. No hesitation. No softness.",
  "Power had settled into her bones.",
  "Celeste smirked.",
  "She\u2019s beautiful when she\u2019s dangerous.",
  "Damien folded the paper.",
  "She\u2019s being used.",
  "Celeste laughed at that.",
  "By whom?",
  "Damien's jaw tightened.",
  "He already knew the answer he wanted to believe.",
  "Salvatore.",
  "Of course.",
  "In Damien's mind there was no version of reality where Vivienne had done this herself.",
  "She was still the singer in silk. Still the woman hiding bruises behind pearls. Still the wife who nodded when told.",
  "He took another sip of scotch.",
  "She always needed someone stronger.",
  "But even as he said it, the photograph contradicted him.",
  "Her eyes in the paper looked colder than his.",
  "And that unsettled him more than the lies.",
];

const DIARY_ENTRY_SIX = [
  "The newspapers call me widow.",
  "Vegas calls me owner.",
  "The men call me Madam Noir.",
  "But the mirror calls me by the only name that matters now.",
  "Mine.",
  "I wonder if Damien reads about me in whatever lie he ran to.",
  "I wonder if dead men still mistake survival for weakness.",
];

const CHAPTER_SIX_PROSE_B = [
  "Weeks later, Damien returned to the city under darkness.",
  "No funeral ghost. No legal resurrection. Only whispers.",
  "He arrived through the back entrance of The Velvet Room, escorted by an old contact who still believed money could rewind time.",
  "The club had changed.",
  "His portrait no longer hung in the private office.",
  "Salvatore's had vanished too.",
  "Instead—",
  "Vivienne.",
  "A massive oil painting of her above the stage.",
  "Ruby lips. Diamond throat. Eyes like verdicts.",
  "Damien stopped beneath it.",
  "Something unfamiliar touched him then.",
  "Not fear.",
  "Humiliation.",
  "The club he once walked through as master now moved without him.",
  "Staff no longer bowed.",
  "They merely watched.",
  "And at the end of the private corridor, the penthouse doors opened.",
  "Vivienne stood waiting.",
  "Black satin. A slit of diamonds across her neck. No wedding ring.",
  "Behind her stood Luca Russo, broader now, silent in a dark suit.",
  "The bodyguard who had become her shadow.",
  "Damien smiled with the confidence of a man still trapped in his own mythology.",
  "Vivienne.",
  "Her expression did not change.",
  "You should be dead.",
  "So should your fear.",
  "He stepped closer.",
  "Too close.",
  "The old instinct returned to him immediately—the need to dominate, to remind, to reclaim.",
  "You\\'ve done well, he said, glancing around the penthouse. But we both know whose lessons built this.",
  "Her eyes sharpened.",
  "Do we?",
  "Damien reached out and grabbed her arm.",
  "Hard.",
  "For a single catastrophic second, he truly believed the old reflex would return.",
  "The flinch. The silence. The submission.",
  "Instead, Vivienne didn't move at all.",
  "She simply looked past him.",
  "Luca.",
  "The bodyguard moved like a gunshot.",
  "One massive hand seized Damien's wrist and tore it off her arm.",
  "The other drove him backward into the marble wall so hard a framed mirror shattered.",
  "Damien barely had time to gasp before Luca slammed a fist into his ribs.",
  "Then another into his jaw.",
  "The sound was brutal.",
  "Wet. Final. Humiliating.",
  "Damien crumpled to one knee, coughing blood onto imported carpet.",
  "Luca stood over him, waiting only for her word.",
  "Vivienne stepped forward slowly.",
  "Her satin hem whispered across the floor.",
  "She crouched just enough so Damien had to look up at her.",
  "For the first time in their marriage—",
  "he was beneath her.",
  '"You confused memory with ownership," she said softly.',
  "Blood darkened Damien's lip.",
  "He tried to rise.",
  "Luca shoved him back down with one hand against his shoulder.",
  "Vivienne leaned closer, voice smooth as jazz smoke.",
  "The man who hurt me died on paper.",
  "She touched his cheek almost tenderly.",
  "And tonight he learns the widow survived.",
  "She stood.",
  "Turned.",
  "And walked back toward the penthouse windows overlooking the city.",
  "Without another glance, she said:",
  "Throw him out.",
  "Luca dragged Damien upright and toward the private elevator.",
  "The once-great lawyer stumbled, dazed and bleeding, reduced to something pitiful.",
  "The doors closed on his face.",
  "Vivienne never looked back.",
  "Far below, as Damien was shoved into the alley behind the club, rain beginning to fall, a black car idled in the shadows across the street.",
  "Inside, unseen—",
  "a familiar silhouette watched.",
  "A cigarette ember glowed.",
  "A low voice from the darkness:",
  "Good. She chose strength.",
  "Salvatore.",
  "Still hidden. Still testing. Still proud.",
  "The ghost king smiled to himself and vanished back into the night.",
];

const CHAPTER_SEVEN_PROSE_A = [
  "The mob boss's house was quieter than the Vale mansion had ever been.",
  "That was somehow worse.",
  "Salvatore's estate sat high above the city cliffs, all black stone, endless glass, and candlelit corridors that seemed to breathe secrets into the walls. The bedrooms were larger, the sheets softer, the wine rarer.",
  "But silence still had teeth.",
  "Vivienne stood alone in the master suite, barefoot on polished obsidian floors, city lights trembling below the windows like scattered diamonds.",
  "The empire was finally hers to command.",
  "Vegas underground deals. The jazz club. The judges. The captains. The ghost king's hidden vaults.",
  "Everything.",
  "So why did it still feel like a cage?",
  "She poured another finger of whiskey.",
  "Then another.",
  "By the third glass, the burn finally reached the place in her chest where grief had been hiding beneath ambition.",
  "Her mascara had already begun to smudge.",
  "A queen in silk. Crying alone.",
  "She sank onto the velvet chaise at the foot of the bed and stared at the reflection in the darkened glass.",
  "The woman staring back was powerful.",
  "Beautiful.",
  "Untouchable.",
  "And unbearably tired.",
  "Her voice cracked into the empty room.",
  "Do I even want this life?",
  "No one answered.",
  "Only the city.",
  "Only the rain.",
  "Only the sound of ice melting in crystal.",
  "She thought of the stage. The piano. The diary. The simpler horror of survival.",
  "Now the horrors had chandeliers.",
  "A tear slipped down her cheek.",
  "Then another.",
  "For the first time since Damien's return, she let herself grieve—not for him, but for the woman she had been before men made empires out of her pain.",
  "The phone rang.",
  "Sharp enough to cut through the whiskey haze.",
  "Vivienne stared at it before finally lifting the receiver.",
  "A male voice, smooth and observant.",
  "Mrs. Noir.",
  "Who is this?",
  "A pause, then a soft chuckle.",
  "Dixon Steele. Writer. Investigator. Professional collector of dangerous stories.",
  "Her grip tightened.",
  "How did you get this number?",
  "The same way I get everything, he said. By following the people who think they\\'re invisible.",
  "Vivienne rose slowly from the chaise.",
  "What do you want?",
  "To tell your story.",
  "Silence.",
  "Then he continued, voice almost gentle.",
  "I'm writing a book about the rise of Salvatore Moretti's ghost empire. And every road leads to one woman.",
  "Her pulse quickened.",
  "This isn't your story to tell.",
  "It became history the moment men started disappearing.",
  "She looked toward the windows, suddenly aware of how exposed power always was.",
  "Dixon's tone lowered.",
  "They say Salvatore built the city. They say Damien tried to own it. But the whispers now—those are all about you.",
  "Vivienne swallowed hard.",
  "I'm not interested.",
  "Before she could hang up, his final words stopped her cold.",
  "Then let me give you one piece of advice for free.",
  "A beat.",
  "Stay strong. The dead are circling.",
  "The line went dead.",
  "Vivienne stood frozen, receiver still pressed to her ear.",
  "Then slowly lowered it.",
  "Her eyes drifted to the nightstand.",
  "To the leather diary waiting there.",
  "Maybe every empire did become a book eventually.",
  "Maybe this one had started with her tears.",
];

const DIARY_ENTRY_SEVEN = [
  "Tonight I cried in the king's house.",
  "Not because I miss Damien.",
  "Not because I fear Salvatore.",
  "Because somewhere between widow and queen, I misplaced the woman who used to sing for herself.",
  "A writer called tonight.",
  "He says the city is already turning me into myth.",
  "But myths are lonely things.",
  "They are worshiped from a distance.",
  "Never held.",
  "Never known.",
  "If this life is power, why does it taste so much like grief?",
];

const CHAPTER_SEVEN_PROSE_B = [
  "Across the ocean, Monaco was beginning to crack.",
  "Damien returned to the villa later than usual, jacket wrinkled, jaw still faintly bruised from Luca's lesson.",
  "The front rooms were dark.",
  "Too dark.",
  "He found Celeste on the terrace in a silver dress, champagne in hand, laughing softly with a man seated far too close.",
  "A man Damien recognized instantly.",
  "Judge Henri Marchand.",
  "One of the European probate judges Damien had quietly bribed through offshore trusts.",
  "Only tonight the judge's hand rested far too comfortably on Celeste's bare thigh.",
  "Damien stopped cold.",
  "Celeste didn't even flinch.",
  "Instead she smiled lazily into her glass.",
  "Oh, she said. You\\'re back.",
  "The judge rose, straightening his jacket with all the embarrassment of a man who felt none.",
  "Damien's voice turned razor-thin.",
  "What is this?",
  "Celeste stood, smoothing the silver silk over her hips.",
  "This, she said coolly, is what happens when a man mistakes his money for his worth.",
  "The judge gave Damien an almost pitying nod before stepping inside, leaving them alone beneath the harbor lights.",
  "Damien stared at her.",
  "You're sleeping with a judge.",
  "Celeste laughed.",
  "I'm sleeping with access.",
  "Then she lifted a slim leather folder from the terrace table and handed it to him.",
  "Bank statements. Transfer notices. Frozen trusts.",
  "Every major offshore account had been rerouted.",
  "Signed by the judge. Legal. Irreversible.",
  "Celeste had taken nearly everything.",
  "Villas. Cash reserves. Emergency passports. Art holdings. The Monaco yacht slip.",
  "Gone.",
  "Damien's face drained.",
  "You stole from me.",
  "Celeste stepped close enough for him to smell her perfume.",
  "No, she whispered. I learned from you.",
  "She kissed his cheek once—light, mocking, cruel.",
  "Then walked back inside to where the judge was waiting.",
  "The terrace doors shut behind her.",
  "Damien stood alone above the black water, clutching the papers that proved he was now poorer than the widow he once abandoned.",
  "For the first time in his life, panic outweighed ego.",
  "And there was only one person left in the world with enough power to save him.",
  "Vivienne.",
  "Back in Salvatore's house, Vivienne closed the diary and stared at the skyline.",
  "The tears had stopped.",
  "The whiskey had gone warm.",
  "And beneath the sadness, something steadier had begun to rise.",
  "Resolve.",
  "Maybe she didn't choose this life.",
  "But she could still choose what kind of queen she would be inside it.",
  "Far below, the city glowed like a promise.",
  "And somewhere in the dark, she could almost hear Salvatore's voice:",
  "Stay strong.",
  "This time, she believed she would.",
];
// ─── Chapter Eight Prose ──────────────────────────────────────────────────────
const CHAPTER_EIGHT_PROSE_A = [
  "The tabloids hit the city before sunrise.",
  "By breakfast, every newsstand on the Strip and every corner kiosk back home carried the same screaming headline beneath grainy flash photography:",
  'MOB LAWYER\'S "GHOST" RETURNS IN RIVAL SHOOTOUT',
  "CITY HALL SOURCES TIED TO UNDERWORLD FAVOR NETWORK",
  "A black-and-white photo showed Damien being dragged behind a police cruiser, one hand clamped over his bleeding shoulder, his expensive shirt soaked dark where the bullet had grazed him.",
  "Bodies lay under white sheets in the blurred background.",
  "Three rival soldiers dead. Two officers wounded. One judge already denying involvement.",
  "The city was eating it alive.",
  "And from the penthouse above The Velvet Room, Vivienne read every word in silence.",
  "A silk robe draped over her shoulders. Coffee untouched. Morning fog pressing against the windows.",
  "Luca stood nearby, arms folded.",
  "It was the Carrisi family.",
  "The enemy syndicate.",
  "Old East Coast blood. Vegas expansion money. Politicians dirtier than Salvatore's ever were.",
  "Vivienne set the paper down carefully.",
  "And Damien?",
  "Luca's mouth hardened.",
  "He tried to sell them your casino ledgers, Vegas tunnels, and federal judge access.",
  "Her eyes narrowed.",
  "So he offered them me.",
  "Luca nodded once.",
  "But there was something almost amused beneath his usual calm.",
  "They refused.",
  "That finally made her look up.",
  "Refused?",
  "Every boss at that table wanted the same thing, Luca said. Not your empire.",
  "A pause.",
  "You.",
  "The room went still.",
  "Vivienne turned toward the city skyline.",
  "Even rival kings saw her as something to possess.",
  "A throne wrapped in silk. A dangerous woman men mistook for a prize.",
  "But the Carrisi bosses had another reason for refusing Damien.",
  "No one wanted to risk awakening Salvatore's ghost.",
  "Even dead, his name still had teeth.",
  "The night before, the deal had gone bad in an abandoned casino lot outside Las Vegas.",
  "Neon from a broken sign buzzed red over empty pavement.",
  "Damien sat at a folding card table inside the gutted baccarat hall, his shoulder tense, a leather file full of stolen ledgers in front of him.",
  "Across from him sat the Carrisi leadership: Don Matteo Carrisi, his twin sons, two Vegas captains, one bought police lieutenant.",
  "Men who should have loved the opportunity.",
  "Damien slid the file forward.",
  "She's vulnerable.",
  "Matteo didn't touch it.",
  "You still think this is about territory.",
  "Damien frowned.",
  "It\\'s about her access. Judges. Shell companies. Salvatore's old channels.",
  "One of the sons smirked.",
  "No. It's about her eyes.",
  "Another laughed low.",
  "The widow walks into a room and men volunteer to lose wars for her.",
  "Damien's jaw tightened.",
  "You're all fools if you think she'll choose any of you.",
  "Matteo finally leaned forward.",
  "Choose? he said softly. Counselor, you misunderstand. We do not take queens from ghosts.",
  "Damien's expression darkened.",
  "Salvatore is dead.",
  "The room erupted in laughter.",
  "Matteo's smile vanished first.",
  "No one who knows this city says that name lightly.",
  "And that was when the sirens began.",
  "Blue-and-red light exploded through the broken windows.",
  "Police.",
  "Too fast. Too organized.",
  "Damien's face went white.",
  "Matteo stood immediately.",
  "You brought heat?",
  "Damien rose too quickly, panic replacing calculation.",
  "I didn't call them.",
  "But someone had.",
  "Outside, gunfire shattered the neon silence.",
  "Police units stormed the perimeter. Carrisi soldiers fired from concrete pillars. Windshields burst. Men dropped screaming into shattered glass.",
  "A full war in the skeleton of a casino.",
  "Damien ducked behind the overturned card table just as a bullet tore through the felt and grazed his shoulder.",
  "Pain ripped through him.",
  "Hot. Sharp. Humiliating.",
  "Not fatal.",
  "Just enough to remind him he was no soldier.",
  "Bodies hit the floor around him.",
  "One of Matteo's sons died against the roulette cage.",
  "A lieutenant bled out beside the loading dock.",
  "The bought cop never made it to his cruiser.",
  "Damien crawled toward the service exit, one hand over his shoulder, leaving a dark streak behind him.",
  "He survived only because chaos favored cowards.",
];

const DIARY_ENTRY_EIGHT = [
  "The papers say Damien survived.",
  "Of course he did.",
  "Men like him always survive just enough to keep suffering.",
  "He offered my name like currency to enemy kings.",
  "And even they would not spend it.",
  "Not because they respect me.",
  "Because ghosts still patrol the edges of my throne.",
  "Salvatore built fear so well that even rivals still bow to his absence.",
  "And somewhere beneath the blood in those tabloids, I can feel his hand again.",
  "Still moving the board.",
  "Still protecting what he left behind.",
  "Or perhaps what he always intended to become his legacy.",
];

const CHAPTER_EIGHT_PROSE_B = [
  "That evening, Vivienne was summoned to a private dinner at City Hall.",
  "No public schedule. No cameras. No paper trail.",
  "The mayor. A state senator. A police commissioner. Two judges.",
  "All men who had once dined in Salvatore's shadow booth.",
  "Now they sat with Vivienne.",
  "The senator leaned closer across candlelight.",
  "The Carrisi investigation is closed.",
  "Vivienne's gaze stayed unreadable.",
  "So quickly?",
  "The commissioner gave a tight smile.",
  "Evidence was misplaced.",
  "Political favors.",
  "The same invisible machinery Salvatore once used.",
  "Only no one at the table admitted whose old debts were being called in.",
  "As dessert arrived, a folded note appeared beneath her plate.",
  "No waiter seen. No messenger caught.",
  "Her pulse sharpened.",
  "She opened it beneath the tablecloth.",
  "I told you. Stay strong.",
  "Let Damien keep bleeding.",
  "The city still answers my friends.",
  "No signature.",
  "No need.",
  "Vivienne hid the note inside her glove and lifted her wine.",
  "For the first time in months, comfort touched her chest.",
  "Not because Salvatore was near.",
  "Because even unseen, he was still choosing her side.",
  "Still using governors, judges, police commissioners, and mayors like invisible bodyguards.",
  "Ghost politics.",
  "Ghost war.",
  "Ghost love.",
  "Far across town, in a private hospital wing bought under a false name, Damien stared at the same tabloid headline from his bed.",
  "His shoulder bandaged. His pride worse.",
  "The Carrisi family blamed him. The police wanted him. His money was gone. Celeste was gone. Vivienne was untouchable.",
  "And somewhere in the corners of the room, paranoia began to grow.",
  "Because the raid had happened too perfectly.",
  "Too politically.",
  "Too fast.",
  "Only one man could still move power like that.",
  "Damien whispered into the empty room:",
  "Salvatore.",
  "For the first time, true fear entered his voice.",
  "Because if the ghost king was alive—",
  "then Damien had not been fighting a widow.",
  "He had been walking straight into a kingmaker's design.",
];
// ─── Chapter Nine Prose ──────────────────────────────────────────────────────
const CHAPTER_NINE_PROSE_A = [
  "City Hall had never looked so dishonest.",
  "Tonight it glittered.",
  "A charity gala for police widows and judicial reform filled the marble rotunda with chandeliers, live strings, and old-money smiles. Women in couture drifted through the ballroom like perfume clouds, while men with public titles and private sins raised crystal glasses beneath campaign banners.",
  "Masks were required.",
  "Gold. Ivory. Black lacquer. Feathers.",
  "A masquerade for the city's cleanest liars.",
  "Vivienne arrived in liquid silver silk, the gown cut like moonlight, a black lace mask framing her eyes. Luca remained close in a midnight tuxedo, never more than three steps away.",
  "The whispers followed her instantly.",
  "The widow. The queen. The ghost empire.",
  "She ignored them.",
  "Tonight felt different.",
  "Charged.",
  "As if someone had lit a fuse beneath the ballroom floor.",
  "At the far end of the room, the mayor greeted donors beside a massive memorial display honoring officers lost in the Vegas casino shootout.",
  "Framed photographs. Black ribbons. One Carrisi son listed among the dead.",
  "Leonardo Carrisi — Presumed deceased in the line of organized conflict.",
  "Vivienne's gaze lingered.",
  "Something about it felt wrong.",
  "The photo was too clean. The death too convenient. The Carrisis too silent.",
  "A hand brushed the small of her back.",
  "Vivienne turned sharply.",
  "A man in a black velvet mask stood beside her, taller than most in the room, dressed in a sharply cut tuxedo that carried old authority.",
  "No introduction.",
  "No fear.",
  "Only familiarity.",
  "His voice was lower than memory but unmistakable.",
  "Silver suits you better than grief.",
  "Her breath caught.",
  "Salvatore.",
  "The masked man gave the smallest nod.",
  "Alive. In the flesh. Close enough to touch.",
  "Months of ghost notes, political rescues, and shadow wars suddenly had a pulse.",
  "Vivienne's eyes flashed with a thousand unsaid questions.",
  "Here?",
  "He guided her gently toward the grand staircase landing above the ballroom where the orchestra drowned private words.",
  "Where better than a room full of people who lie professionally?",
  "Even now, humor clung to danger in him.",
  "Below them, senators laughed beside mob-funded judges.",
  "The city's hypocrisy looked almost beautiful from above.",
  "Vivienne's voice lowered.",
  "You let them think you were dead.",
  "His gaze stayed on the crowd.",
  "I needed to know what you would become without me.",
  "A mix of anger and something warmer tightened in her chest.",
  "So I was a test?",
  "Salvatore finally turned toward her.",
  "No. A successor.",
  "Before she could answer, movement below caught his eye.",
  "A man in a white half-mask stepped from the donor line.",
  "Tall. Broad-shouldered. A scar near his temple barely hidden beneath the edge of the mask.",
  "The memorial downstairs had just named him dead.",
  "Yet there he was.",
  "Leonardo Carrisi.",
  "Alive.",
  "The son everyone thought died in the Vegas shootout.",
  "He moved through the gala crowd with predatory calm, pausing only when his gaze found Vivienne above the staircase.",
  "And then he smiled.",
  "Not with hostility.",
  "With hunger.",
  "Recognition.",
  "Interest.",
  "Salvatore's expression cooled instantly.",
  "He survived.",
  "Vivienne followed his line of sight.",
  "The tabloids buried the wrong prince.",
  "Leonardo lifted his champagne glass toward her in silent salute.",
  "A rival heir reborn from false death.",
  "Another ghost.",
  "And from the look in his eyes, he was less interested in revenge than possession.",
  "Salvatore's jaw hardened.",
  "He's dangerous.",
  "Vivienne's lips curved faintly.",
  "So am I.",
  "For the first time, Salvatore smiled fully.",
  "Pride. Admiration. Something darker.",
  "I knew you could do it without me.",
  "The words landed between them like a vow.",
  "Not romance.",
  "Recognition.",
  "The king acknowledging the queen he had created by stepping aside.",
];

const DIARY_ENTRY_NINE = [
  "Tonight the dead attended a charity gala.",
  "The city toasted widows while murderers funded the flowers.",
  "Salvatore stood beside me in a mask and called me successor.",
  "I should hate him for disappearing.",
  "Instead I only hate how much of me he understood.",
  "And below us stood another ghost — Leonardo Carrisi, the son the papers buried too soon.",
  "He looked at me the way rival kings look at territory.",
  "But I am learning something dangerous:",
  "men keep mistaking me for a prize when I am really the war.",
];

const CHAPTER_NINE_PROSE_B = [
  "Later that evening, the gala erupted.",
  "Not from violence.",
  "From scandal.",
  "A state reporter cornered the mayor near the memorial display with leaked hospital records proving Leonardo had survived the Vegas raid.",
  "The ballroom turned electric.",
  "Cameras flashed. Politicians scattered. Police commissioners suddenly found urgent calls to answer.",
  "Tabloids would feast for weeks.",
  "DEAD CARRISI SON ALIVE AT CITY HALL GALA",
  "GHOSTS OF VEGAS SHOOTOUT RETURN",
  "From the balcony shadows, Salvatore pulled Vivienne slightly deeper from sight.",
  "His hand lingered at her waist only a second.",
  "Enough to steady. Enough to remind.",
  "Leonardo's survival changes the board, he murmured.",
  "Vivienne's gaze stayed on the younger Carrisi prince below.",
  "He was speaking calmly with a senator now, already rebuilding influence through scandal.",
  "Then we change faster.",
  "Salvatore studied her with quiet approval.",
  "You've become colder.",
  "Vivienne looked at him.",
  "No, she said softly. Just clearer.",
  "Below them, Leonardo looked up one final time.",
  "The eye contact this time was unmistakable.",
  "Challenge. Desire. Alliance. Danger.",
  "He touched two fingers to the rim of his glass in a private salute.",
  "Then vanished into the chaos of reporters and flashing bulbs.",
  "A rival heir. A living scandal. A man now obsessed with the widow every empire wanted.",
  "The war had just gained a new prince.",
  "And for the first time, Salvatore looked almost concerned.",
];

// ─── Chapter Ten Prose ───────────────────────────────────────────────────────
const CHAPTER_TEN_PROSE_A = [
  "The City Hall gala had moved into its final act.",
  "Most of the politicians had drifted toward the ballroom's center where cameras and champagne still made scandal look elegant. The orchestra played something soft and deceptive while masked guests disappeared into corridors lined with portraits of dead governors.",
  "Vivienne stepped away from the crowd for air.",
  "The private west corridor opened onto a moonlit terrace overlooking the memorial gardens below.",
  "For one blessed moment, there was silence.",
  "Then a voice behind her.",
  "You disappeared before I could congratulate you.",
  "Leonardo Carrisi.",
  "Alive. Smiling. Too close.",
  "His white half-mask now rested in one hand, revealing the scar near his temple and the dangerous arrogance of a man who had survived being buried by headlines.",
  "Vivienne didn't turn immediately.",
  "I don't remember asking for congratulations.",
  "Leonardo stepped beside her at the railing.",
  "His cologne carried smoke, expensive leather, and inherited entitlement.",
  '"My father says half this city wants your hand," he said.',
  "Her eyes stayed on the skyline.",
  "And what do you want?",
  "A pause.",
  "Then honesty sharpened by immaturity.",
  "The same thing every powerful man in this room wants.",
  "Vivienne finally looked at him.",
  "His gaze was not love.",
  "It was conquest. Competition. The hunger of a prince desperate to claim what older kings admired.",
  "And beneath it all, she saw the real truth:",
  "he wanted her first because his father wanted her too.",
  "A son trying to outrun his father's shadow.",
  "Leonardo stepped closer, testing the boundary.",
  "For one brief second his hand reached toward her waist.",
  "Vivienne moved faster.",
  "The silver knife hidden in her evening glove flashed into the moonlight and pressed lightly beneath his jaw.",
  "Not enough to cut.",
  "Enough to promise.",
  "Leonardo froze.",
  "His breath hitched — not from fear, but from surprise.",
  "Vivienne's voice dropped to ice.",
  "You are legally a man, she said softly, but tonight you are behaving like a boy who mistakes appetite for authority.",
  "His eyes widened.",
  "Then, to her disgust, amusement flickered there.",
  "He actually smiled.",
  "Danger excited him.",
  "Challenge made her more desirable in his mind.",
  "That alone made him even more dangerous.",
  "Vivienne pressed the blade just slightly harder.",
  "You touch me again without invitation, and your mother won't recognize what gets returned to the Carrisi estate.",
  "The smile stayed.",
  "Almost admiring now.",
  "That threat suits you.",
  "It should. I've had practice.",
  "For a long moment they stood in moonlight and tension.",
  "Then Leonardo slowly raised both hands in surrender.",
  "I only wanted to see if the stories were true.",
  "Vivienne stepped back, knife disappearing into silk as smoothly as it had appeared.",
  "And?",
  "His eyes darkened.",
  "They underestimated you.",
  "She gave him the coldest smile of the night.",
  "Your first smart observation.",
  "No one in the ballroom ever noticed.",
  "By the time they returned, masks and music had already swallowed the moment whole.",
  "But inside, Vivienne's mind would not quiet.",
  "Could Leonardo set her up? Would his father? Was this flirtation with danger merely a son's recklessness — or part of something colder?",
  "Years of Damien. Years of Salvatore. Years of men hiding knives behind smiles.",
  "She trusted possibilities more than promises.",
];

const DIARY_ENTRY_TEN = [
  "Tonight the rival prince mistook himself for danger.",
  "I reminded him there are women who survived men far worse than spoiled heirs and polished scars.",
  "Still, his arrogance unsettles me.",
  "Not because I fear him.",
  "Because I know what men become when mothers pour ambition into weak places.",
  "And Leonardo reeks of someone else's hunger.",
];

const CHAPTER_TEN_PROSE_B = [
  "The answer arrived sooner than expected.",
  "A week later, Vivienne traveled with Salvatore to the Carrisi family estate in Los Angeles, a sprawling old-Hollywood mansion hidden behind rose hedges, black iron gates, and fountains carved like Roman gods.",
  "A treaty dinner.",
  "Necessary. Fragile. Profitable.",
  "The treaty between the Moretti and Carrisi families had held for years: shared ports, divided Vegas interests, political nonaggression, no bloodshed inside California lines.",
  "Cold peace built on mutual greed.",
  "Inside the garden courtyard, Vivienne finally met the true architect of Leonardo's instability.",
  "Isabella Carrisi.",
  "Leonardo's mother.",
  "A woman in cream silk with diamond serpent bracelets and eyes that moved like lockpicks.",
  "Too observant. Too polished. Too interested in every reaction.",
  "She spoke sweetly to Vivienne while planting seeds in every silence.",
  "Leonardo only admires strength, Isabella said with a smile. His father never taught him restraint.",
  "Vivienne immediately understood.",
  "This woman didn't know how to seize power directly.",
  "So she built ambitions inside her son and sent him into rooms like a blade.",
  "A prince raised as his mother's weapon.",
  "Across the garden, Salvatore watched the exchange with unreadable calm.",
  "Later, beneath climbing white roses and lantern light, he joined Vivienne alone near the stone fountain.",
  "For the first time since his return from hiding, there was no ghost between them.",
  "Only moonlight. Only the city humming below. Only truth.",
  "He took her hand.",
  "Not as ownership.",
  "As equal.",
  "I split the empire in half because I trust only one person with the other side.",
  "Vivienne's breath caught.",
  "He looked almost softer than she had ever seen him.",
  "Not weaker.",
  "Certain.",
  "Then he said the one thing no king had ever truly offered her.",
  "Marry me.",
  "The garden seemed to still.",
  "No games. No tests. No shadows.",
  "Only partnership.",
  "Vivienne looked toward the mansion where rival families laughed beneath treaty chandeliers.",
  "She thought of Damien's bruises. Her diary. Vegas. The ghost notes. The knife at Leonardo's throat.",
  "Then back to the man who had turned power into legacy.",
  "Yes.",
  "The wedding became the city's most whispered event.",
  "Held at Salvatore's private coastal estate.",
  "Black roses and white orchids. String quartet and jazz. Judges beside captains. Mayors beside mob wives. The Carrisis present under treaty obligation. Leonardo silent in the second row. Isabella calculating every smile.",
  "Vivienne wore diamond lace and midnight silk.",
  "Not a widow.",
  "A queen.",
  "The honeymoon lasted one week on a private Amalfi cliff estate.",
  "For the first time in years, Vivienne allowed herself quiet.",
  "Ocean air. No ledgers. No blood. No tabloids.",
  "Just stillness.",
  "But even in paradise, Salvatore remained watchful.",
  "On the return flight home, his eyes stayed on the encrypted messages crossing his private phone.",
  "Vivienne noticed.",
  "It's Leonardo.",
  "Salvatore looked up.",
  "Not surprised she knew.",
  "He survived death once, he said quietly. Men like that start believing they're chosen.",
  "Vivienne's hand drifted unconsciously toward the hidden knife she still carried.",
  "The rival prince lingered in both of their minds.",
  "Not because he was strongest.",
  "Because unpredictability was its own kind of war.",
  "And somewhere behind him — his mother was still whispering.",
];

// ─── Chapter Eleven Prose ─────────────────────────────────────────────────────
const CHAPTER_ELEVEN_PROSE_A = [
  "Long before treaties, bloodlines, and black-tie funerals, there had been summer gardens and stolen teenage promises.",
  "Salvatore had once known Isabella Carrisi as a girl in white linen dresses with roses in her hair, a rival daughter from the wrong family whose smile made old loyalties feel negotiable.",
  "They had been teenagers. Different houses. Different fathers. Different futures.",
  "He had loved her once.",
  "Or at least the idea of what she pretended to be.",
  "But time had taught him the truth.",
  "There was no softness in Isabella. No loyalty. No grief. No real heart.",
  "Only hunger sharpened into elegance.",
  "Now, decades later, she was even more dangerous because beauty had learned patience.",
  "At the Carrisi estate in Los Angeles, Isabella stood in her private sitting room with Leonardo.",
  "The curtains were drawn. The fireplace low. Her diamonds throwing sharp reflections against the walls.",
  "Her voice stayed smooth.",
  "Your father is weak. Salvatore is old. The widow controls half an empire she didn't build.",
  "Leonardo stood rigid near the mantel, fury tightening his jaw.",
  "You want me to betray both men.",
  "I want you to become more than their shadows.",
  "He turned on her.",
  "No. You want their power.",
  "For the first time, irritation cracked through her porcelain expression.",
  "Power wasted on men is still power worth taking.",
  "Leonardo's hands curled.",
  "You keep poisoning every room with this.",
  "Her eyes blazed.",
  "Before he could step away, her hand struck his face.",
  "The slap cracked through the room like a gunshot.",
  "Her eyes burned with a fire colder than rage.",
  "For one catastrophic second, years of manipulation finally snapped inside him.",
  "Leonardo grabbed her throat.",
  "Not tight enough to injure. Enough to stop her next lie.",
  "His own eyes burned now.",
  "You are an evil, evil woman.",
  "Her face remained almost calm.",
  "Emotionless. Studying. Still calculating.",
  "Leonardo let go as if touching her disgusted him.",
  "His voice shook with something deeper than anger.",
  "I hope God has mercy on my soul for coming out of you.",
  "Then he walked out.",
  "The door slammed.",
  "And Isabella felt nothing.",
  "No tears. No guilt. No fracture.",
  "Only adjustment.",
  "A failed route simply meant another one.",
  "If the son would not become her weapon — she would move the pieces herself.",
  "That same night, Salvatore was alone at the coastal estate.",
  "Vivienne had stayed late at a city foundation board meeting tied to their new charity fronts, and the mansion was unusually still.",
  "The rain outside had begun softly.",
  "A knock sounded.",
  "When the door opened, Isabella stood there.",
  "Black silk clinging to moonlit skin. Mascara faintly blurred. Eyes shimmering with expertly performed sadness.",
  "For one dangerous second, the ghost of that teenage girl almost returned.",
  "Salvatore, she whispered, I didn't know where else to go.",
  "He should have closed the door.",
  "Instead, old memory made him hesitate.",
  "The treaty still held. The families were technically allied. And grief — real or not — still wore a convincing face.",
  "He let her in.",
  "They sat in the library with whiskey.",
  "One drink. Then another.",
  "She spoke of the old days: secret gardens, family feuds, what might have been, how lonely marriage had become, how Matteo no longer understood her.",
  "Salvatore listened more than he should have.",
  "Not because he trusted her.",
  "Because nostalgia was its own kind of intoxication.",
  "By the second glass, even he almost forgot the difference between performance and pain.",
  "Then suddenly Isabella moved.",
  "Too fast.",
  "She threw herself against him, hands sliding over his chest, desperate and theatrical, kissing him with the hunger of a woman who only knew how to consume.",
  "For one split second, memory almost answered.",
  "Then instinct returned.",
  "Salvatore seized her shoulders and pushed her back.",
  "His voice turned cold.",
  "It's best you go.",
  "But Isabella, flushed with liquor and strategy, only moved closer.",
  "She didn't want to leave.",
  "Not yet.",
  "Not without planting doubt.",
  "Salvatore, still tipsy but clear enough to think, took hold of her arm and moved firmly toward the front door.",
  "He opened it.",
  "And froze.",
  "Vivienne stood there, key still in hand, just before the lock.",
  "Her eyes moved instantly: Salvatore. Isabella. The whiskey. The woman visibly drunk. The tension in the doorway.",
  "She understood the shape of the truth immediately.",
  "Behind Salvatore, one of the household guards remained visible through the cracked library door.",
  "He had heard everything.",
  "Seen enough.",
  "Salvatore spoke first.",
  "She came here upset. Said she missed what we once were. I gave her advice.",
  "His jaw tightened.",
  "Then she threw herself on me like a wild animal.",
  "Vivienne's eyes flicked past him to the guard.",
  "The guard gave a single silent nod.",
  "Confirmation.",
  "Vivienne's expression stayed terrifyingly calm.",
  "I already knew.",
  "Her gaze shifted to Isabella with open contempt.",
  "I don't trust her.",
  "She stepped inside, voice sharp as broken glass.",
  "She is not allowed back in this house.",
  "The guards immediately moved, escorting Isabella down the stone steps, through the gates, and off the property despite her slurred protests.",
  "Rain began to fall harder as the gates shut behind her.",
  "Vivienne turned back to Salvatore.",
  "Her eyes were not jealous.",
  "They were strategic.",
  "She wants the treaty broken, Vivienne said quietly. Or at least weakened.",
  "Salvatore nodded grimly.",
  "She wants all the men fighting while she stands untouched.",
  "Vivienne placed her keys on the entry table and looked toward the storm outside.",
  "If I catch her trying this again, she said coldly, I'll handle it myself.",
  "Not emotional. Not impulsive.",
  "A queen issuing policy.",
  "And Salvatore, for the first time in years, truly saw Isabella for what she had become:",
  "not a memory, not an old flame, but a woman willing to burn dynasties for leverage.",
];

const DIARY_ENTRY_ELEVEN = [
  "Some women survive pain.",
  "Some women become it.",
  "Tonight Isabella arrived dressed in sadness and left smelling like strategy.",
  "Salvatore almost remembered the girl she once pretended to be.",
  "I never will.",
  "There are women who cry because they hurt.",
  "And women who cry because tears are tools.",
  "She is the second kind.",
  "The treaty still breathes.",
  "But I can hear her sharpening knives behind the roses.",
];

const CHAPTER_ELEVEN_PROSE_B: string[] = [];

// ─── Chapter Twelve Prose ─────────────────────────────────────────────────────
const CHAPTER_TWELVE_PROSE_A = [
  "Power always revealed itself in private rooms.",
  "For Isabella Carrisi, that room was a hidden cigar lounge beneath the family's Los Angeles estate — a velvet-lined chamber where old men traded ports, casino shares, and names that never reached police reports.",
  "Tonight she sat across from Overlord Marco D'Angelo, one of the senior contract bosses who oversaw enforcement for half the western routes.",
  "He was older. Heavy gold rings. A face carved by decades of war and money.",
  "She placed a folder on the table.",
  "Inside: business maps, ownership lines, a list of small families she wanted absorbed, shell companies she wanted rerouted under Carrisi influence.",
  "Marco barely glanced at it.",
  "You want me to pressure a family that isn't even in our dispute lane?",
  "Isabella's smile was satin.",
  "I want control before anyone realizes it's vulnerable.",
  "Marco leaned back.",
  "His gaze sharpened.",
  "Why do you care so much about a business you married into?",
  "The words hit harder than a slap.",
  "He kept going, dismissive and absolute.",
  "You live in the safest zone this life offers. Wife. Estate. Money in your pocket. No streets.",
  "His cigar ember glowed.",
  "Stay out of the business. Go talk to your husband.",
  "Then he rose and walked off.",
  "Just like that.",
  "Dismissed.",
  "As if she were decorative. As if decades of hunger had no intelligence behind them.",
  "The rage that followed was ice-cold.",
  "Not loud.",
  "Not dramatic.",
  "The kind of rage that plans.",
  "And in that moment Marco D'Angelo signed his own death sentence.",
];

const DIARY_ENTRY_TWELVE = [
  "There are women men underestimate because they believe comfort replaces ambition.",
  "They mistake silk for surrender.",
  "Isabella was never built for safety.",
  "She was built for acquisition.",
];

const CHAPTER_TWELVE_PROSE_B = [
  "By dawn, Marco was dead.",
  "Shot twice inside his own safe house.",
  "But he was not alone.",
  "Three of Isabella's own bodyguards lay dead beside him.",
  "Her personal security detail.",
  "The perfect frame.",
  "By breakfast, the Carrisi estate was in uproar.",
  "Isabella entered the main hall in white silk and tears, trembling just enough to look believable.",
  "They were Vivienne's men, she whispered.",
  "Her voice broke at exactly the right place.",
  "They came after Marco. My guards tried to protect him.",
  "The lie was almost elegant.",
  "Because the guards had indeed died by the same caliber weapons Vivienne's team often carried.",
  "Only Isabella herself had arranged the weapons swap hours before.",
  "The evidence trail now pointed cleanly: Vivienne. Luca. Salvatore's half of the empire.",
  "A treaty breach.",
  "Exactly what she wanted.",
  "Matteo Carrisi — the rival prince's father — erupted.",
  "His fury had been simmering ever since Vivienne chose Salvatore's proposal over every unspoken possibility Matteo once imagined for himself.",
  "He had never wanted to be second. Not to Salvatore. Not to his own sons. Not to a widow who now outranked half the city.",
  "So when Isabella handed him the story, he accepted it too easily.",
  "Too emotionally.",
  "Too personally.",
  "She chose him over this family, Matteo said, voice burning. Now she sends shooters into my house?",
  "He never saw the manipulation.",
  "Only insult.",
  "Only rejection.",
  "Only a reason to unleash old resentment.",
  "And Isabella, standing behind him in widow-white, almost smiled.",
  "Because power always worked best when pride did the thinking.",
  "The twins split that same afternoon.",
  "Leonardo, scarred by false death and still carrying a dangerous fascination with Vivienne, immediately questioned the setup.",
  '"This feels too clean," he said.',
  "His surviving twin brother, Lucien, slammed a glass onto the table.",
  "Lucien had inherited the mother's greed and the father's temper in equal measure.",
  "Of course you'd defend her.",
  "Leonardo's eyes flashed.",
  "I'm defending logic.",
  "Lucien stepped closer.",
  "No. You're distracted by her.",
  "The accusation hit because it was true.",
  "Both brothers, in their own ways, were drawn to Vivienne.",
  "Not love.",
  "Obsession.",
  "She had become myth to them: older, unreachable, rare, a woman whose beauty carried danger and survival in equal measure.",
  "To Leonardo she represented challenge. To Lucien she represented conquest.",
  "Two very different fantasies born from the same fire.",
  "The argument exploded.",
  "You'd burn this family just to impress Mother, Leonardo snapped.",
  "Lucien's face darkened.",
  "And you'd betray blood for a woman who'd never even look twice at you.",
  "For one terrible second, the twins nearly drew guns.",
  "Years of rivalry. Maternal manipulation. Paternal rage. A woman none of them truly understood.",
  "Matteo's roar stopped it before blood was spilled.",
  "But the fracture remained.",
  "Two princes now standing on opposite sides of the same mother's lie.",
  "At Salvatore's coastal estate, Vivienne received the first whispers before sunset.",
  "Three dead. Marco D'Angelo gone. Carrisi blame circling her name.",
  "Luca read the intelligence report aloud.",
  "She used her own bodyguards.",
  "Vivienne's face went still.",
  "Of course she had.",
  "A woman willing to cry on command would kill her own men for leverage without blinking.",
  "Salvatore entered the study just as the last details were read.",
  "His jaw hardened.",
  "The treaty's hanging by a thread.",
  "Vivienne turned toward the ocean-facing windows.",
  "All the old fears returned: Could Leonardo believe it? Would Matteo strike first? Would Lucien escalate? Was Isabella setting up another room before anyone saw the walls closing?",
  "Years of Damien's lies had taught her the cost of delayed suspicion.",
  "Now every possibility lived in her head at once.",
  "This is bigger than a frame, she said softly. She wants father against sons. Sons against each other. Treaty against legacy.",
  "Salvatore looked at her with grim admiration.",
  "And if it works?",
  "Vivienne's eyes sharpened into steel.",
  "Then she won't live long enough to enjoy it.",
];

// ─── Chapter Thirteen Prose ───────────────────────────────────────────────────
const CHAPTER_THIRTEEN_PROSE_A = [
  "The first shot shattered the stained-glass skylight.",
  "For one suspended second, the Moretti coastal mansion froze in glittering silence as colored shards rained down over marble floors, white orchids, and the portraits of dead kings.",
  "Then the war began.",
  "Gunfire erupted from every level of the house.",
  "Outside, ropes dropped from the cliffside walls as Carrisi men climbed the stone façade like shadows. Others breached the front lawn, boots tearing through rose hedges and fresh grass as guard dogs launched themselves into the intruders.",
  "Screams tore across the night.",
  "The pool water flashed under moonlight — then turned red.",
  "Bodies hit the surface face-first, blood blooming through the blue like spilled ink.",
  "On the upper balcony, guards fired downward while rival soldiers answered from the sculpture garden below. Marble statues exploded into dust as bullets tore through priceless art and ancient stone.",
  "A bronze cherub toppled from its pedestal and crushed a man climbing the west rope line.",
  "Inside the grand hall, Vivienne grabbed her silver knife, a pearl-handled pocket pistol, and the Tommy gun Salvatore gave her as a wedding gift.",
  "The weight of it steadied her.",
  "No widow now.",
  "A war queen.",
  '"Second floor east!" Luca shouted over the radio.',
  '"Pool line breach!" another guard yelled.',
  "Somewhere below, men barked orders in Italian so fast the syllables blurred into violence.",
  "Old revenge. Forgotten insults. Names shouted from decades-old grudges.",
  "The treaty was dead.",
  "Outside, Matteo Carrisi moved through the rear gardens with four surviving guards.",
  "Moonlight flashed across hedges and fountains as he fired into Moretti patrol lines, dropping two men near the rose maze.",
  "His own guards were cut down one by one.",
  "One collapsed into the koi pond. Another over the stone balustrade. A third dragged screaming into darkness by the estate dogs.",
  "Still Matteo kept moving.",
  "The ropes at the back terrace had become impossible under crossfire, so he circled toward the service entrance, finally breaching the lower level with Isabella, Lucien, and three loyal guards.",
  "The basement doors burst inward.",
  "The second-wave house guards stormed up the staircase at the same moment.",
  "Gunfire lit the corridor.",
  "The Carrisi line lost two men instantly.",
  "But Isabella — cold, precise, magnificent in destruction — fired back with terrifying accuracy.",
  "One guard dropped at the throat. Another through the eye. A third toppled backward over the banister.",
  "Even Salvatore's men underestimated how lethal she truly was.",
  "The room cleared.",
  "Twelve surviving guards regrouped around the wine corridor.",
  "Then Isabella saw him.",
  "In the trophy hall above the alcohol vault, Salvatore was still standing.",
  "Blood soaked his trouser leg from a bullet wound. Another dark stain spread across his shoulder.",
  "But adrenaline, fury, and what Vivienne later called Hollywood powder magic kept him upright.",
  "He was firing one-handed, holding the staircase against the remaining attackers.",
  "Then Isabella stepped behind him from the blind corridor.",
  "Gun to his back.",
  "Drop it.",
  "Salvatore froze.",
  "His pistol clattered onto marble.",
  "Her voice came low, triumphant, venomous.",
  "This was always meant to be.",
  "She stepped closer, beginning the speech she had dreamed of for decades — old love, old betrayal, the empire that should have been hers —",
  "Then silence.",
  "A single bullet punched through the back of her skull.",
  "She never heard them coming.",
  "Only the hush before impact.",
  "Her body collapsed beside Salvatore's feet.",
  "Behind her stood two of Luca's surviving men, smoke still rising from the barrel.",
  "The woman with no heart died before she finished the sentence she had waited thirty years to say.",
];

const _DIARY_ENTRY_THIRTEEN: string[] = [];

const CHAPTER_THIRTEEN_PROSE_B = [
  "Meanwhile, Vivienne ran the upstairs corridor, limping through smoke and broken chandeliers.",
  "Both guns empty.",
  "She turned into the master east bedroom to reload — and froze.",
  "Matteo Carrisi stood inside.",
  "Gun leveled directly at her.",
  "The room was dim except for moonlight spilling across shattered mirrors and overturned velvet chairs.",
  '"Come in," he said quietly.',
  "She obeyed, terror tightening every muscle.",
  "Close the door.",
  "She did.",
  "Unknown to Matteo, someone else was already hiding in the walk-in closet.",
  "Listening.",
  "Waiting.",
  "Lucien.",
  "The favored twin.",
  "Matteo's eyes burned with wounded pride.",
  "Why did you make me do this?",
  "Vivienne's voice trembled but stayed sharp.",
  "I didn't.",
  "His rage cracked open.",
  "You chose Salvatore. You lied. You turned this house against me.",
  "She slowly backed toward the bed, hands subtly checking both empty weapons.",
  "No bullets.",
  "Nothing.",
  "Her mind raced.",
  "Then she noticed the slightest movement in the closet mirror reflection.",
  "Someone was there.",
  "So she gambled.",
  '"Your sons deserve better than this," she said carefully.',
  "Matteo's face darkened.",
  "I gave them everything.",
  '"I like one of them," Vivienne said, deliberately vague.',
  "That made him snap.",
  "He raised the gun.",
  "You are my property. I do with you as I wish.",
  "The shot exploded.",
  "Pain tore through her leg as the final chamber round struck her thigh.",
  "She dropped hard to the carpet.",
  "Matteo tossed the empty pistol aside and crossed the room in blind fury, striking her, dragging her by the arm, old entitlement pouring out as violence.",
  "Then the closet door burst open.",
  "Lucien stepped out.",
  "Gun raised.",
  "He fired into his father's back.",
  "Matteo staggered.",
  "Turned in disbelief.",
  "Leonardo?",
  "Lucien smiled coldly.",
  "Wrong son.",
  "He fired again.",
  "Matteo reached for the sidearm at his hip — gone.",
  "He had thrown it after the chamber emptied.",
  "Lucien's voice turned almost reverent.",
  "Everything is mine.",
  "Matteo collapsed.",
  "The father who built princes died not knowing which son truly inherited the monster.",
  "Lucien slowly turned the gun toward Vivienne.",
  "She was still bleeding on the carpet, dragging herself backward.",
  "He fired once.",
  "Missed on purpose.",
  "Again.",
  "Another deliberate miss.",
  '"You like me?" he taunted.',
  "Then he rushed her.",
  "Grabbed her hair.",
  "Dragged her across the floor and threw her onto the bed.",
  "His shirt came off in one violent motion.",
  "Vivienne lunged for the door —",
  "he caught her and slammed her down.",
  "You're mine.",
  "Then the door exploded inward.",
  "Leonardo.",
  "He tore Lucien off her and drove him into the dresser with brutal force, beating him with the very gun Lucien had used on their father.",
  "Twin against twin.",
  "Blood against blood.",
  "Leonardo finally dragged Lucien unconscious across broken glass, then turned to Vivienne.",
  "Can you walk?",
  "Barely.",
  "He lifted her, half-carrying her through the smoke-filled hall toward the alcohol room — the mansion vault where Salvatore, med kits, weapons, and surviving guards had regrouped.",
];

// ─── Chapter Fourteen Prose ───────────────────────────────────────────────────
const CHAPTER_FOURTEEN_PROSE_A = [
  "Ten years later.",
  "The city no longer remembered the mansion siege as truth.",
  "Only as rumor.",
  "Some said thirty men died. Some said fifty. Some said the pool had turned black with blood and never cleared. Others swore the cliffs behind the estate were haunted by dogs that still barked at invisible intruders.",
  "No official report survived.",
  "No ballistic evidence. No body count. No crime scene photographs.",
  "By sunrise the morning after, the Moretti cleanup teams had erased history so perfectly that newspapers called it nothing more than a private storm emergency at a coastal residence.",
  "Only one truth remained public:",
  "Lucien Carrisi was arrested.",
  "Dragged from a downtown medical clinic three days after the raid, shirtless beneath a hospital coat, face carved by the brutal Buck 69 scar that now slashed across his cheek and throat like a permanent confession.",
  "The scar changed everything.",
  "It made him impossible to mistake for Leonardo.",
  "No more twin confusion. No more mistaken names. No more inherited identity.",
  "Lucien leaned into it.",
  "He told detectives the scar was proof that he had been reborn separate from the ruler he should have been.",
  "The tabloids called him the Scarred Prince of the Midnight Raid.",
  "And unlike every other ghost in the story — Lucien was the only one the law could actually touch.",
  "Because the mansion dead had vanished.",
  "The pool had been drained. The carpets replaced. The shell casings gone.",
  "The only murders prosecutors could prove were the ones tied to Lucien's own surviving bodyguards, the weapons traced to his wing of the estate, and the testimony of two wounded shooters he had abandoned.",
  "His own men had turned on him.",
  "One even shot him during the escape, nearly killing him before fleeing to cut a plea deal.",
  "That betrayal gave the prosecutors everything.",
  "And when the state demanded motive, Lucien finally gave them the truth no family had ever dared say aloud.",
  "He had ordered his bodyguards to eliminate Isabella first.",
  "His own mother.",
  "The room reportedly went silent when he said it.",
  "His explanation was colder than anyone expected.",
  "Leave Salvatore for last.",
  "Why?",
  "Lucien only smiled through the scar.",
  "Because some things need to be personal.",
  "The courtroom speculated for years: Was it power? Hatred? Childhood manipulation? Old abuse no son could forgive?",
  "The answer never fully surfaced.",
  "But the city understood enough.",
  "The scarred prince had tried to kill the woman who made him.",
  "And failed.",
  "Because she had already died in the raid.",
];

const CHAPTER_FOURTEEN_PROSE_B = [
  "While Lucien became the public face of the massacre, the real empire disappeared.",
  "Leonardo. Vivienne. Salvatore.",
  "Gone from headlines.",
  "Gone from public ledgers.",
  "Gone from every official business registry.",
  "Together they built what intelligence agencies later nicknamed: The House That Wasn't There.",
  "An invisible syndicate operating through dead corporations, dissolved charities, luxury real estate fronts, diplomatic shell routes, offshore judicial favors, art logistics networks, and private island banking.",
  "No public bosses.",
  "No formal hierarchy.",
  "No known headquarters.",
  "Only whispers.",
  "Leonardo ruled the western channels with discipline.",
  "No obsession now. No reckless prince games. Only strategy.",
  "He had nearly lost everything because of fantasy and family poison.",
  "Ten years had burned the boy out of him.",
  "Now he protected the structure rather than trying to possess the queen inside it.",
  "Salvatore handled the old political arteries: governors, judges, ports, senators, foreign routes.",
  "Still half king. Still half ghost.",
  "And Vivienne — Vivienne became the silence between them.",
  "The final authority.",
  "The one even powerful men still asked permission from without realizing it.",
  "She no longer sang in jazz clubs.",
  "Now she sang only on paper.",
  "Ten years later, in a villa overlooking Lake Como, Vivienne sat alone in a sunlit writing room.",
  "Leather journals surrounded her.",
  "Old diary pages. Bloodstained notes from Vegas. The charity gala mask. A pressed black rose from the wedding. The pearl-handled pistol, unloaded forever.",
  "And one manuscript.",
  "DEAD ON PAPER: A Widow's Memoir.",
  "The only surviving proof that the empire had ever existed.",
  "Her words moved slowly across the final page.",
  "They called men kings because history prefers simpler lies.",
  "But kingdoms are really built by the women who survive them.",
  "I was a wife. Then a widow. Then a queen. Then a ghost.",
  "And somewhere between blood on marble and silence in the sea, I became my own inheritance.",
  "She set down the pen.",
  "Outside, Lake Como shimmered like liquid silver.",
  "The door opened softly behind her.",
  "Salvatore entered first, older now, still carrying danger in the calmness of his posture.",
  "Leonardo followed, equally changed: scarred by memory, humbled by power, loyal by choice.",
  "No tension now.",
  "Only alliance.",
  "Salvatore looked at the finished manuscript.",
  "Will anyone ever read it?",
  "Vivienne smiled faintly.",
  "Only if the empire dies.",
  "Leonardo stepped beside the window.",
  "It never will.",
  "She looked at both men.",
  "The husband she chose. The prince who became a protector. The empire built from war and betrayal.",
  "Then back to the memoir.",
  "Maybe history would never know the truth.",
  "Maybe governments would continue denying the existence of the syndicate that quietly stabilized markets, ended wars before they began, and erased threats before names could spread.",
  "Maybe Lucien's scarred face would remain the only story the world believed.",
  "That was fine.",
  "Because the greatest empire she ever touched was the one no one could prove existed.",
  "A kingdom hidden so deeply beneath wealth and politics that it had become myth.",
  "And myth, Vivienne knew better than anyone — was simply truth that survived too beautifully to be questioned.",
];

const EPILOGUE_PROSE = [
  "EPILOGUE — NEWS CLIPPING — TEN YEARS LATER",
  "SCARRED HEIR DENIED FINAL APPEAL",
  "Lucien Carrisi, convicted in connection to the notorious Midnight Mansion murders, was denied release today.",
  "Authorities continue to speculate about several unidentified co-conspirators, though no further charges have ever been filed.",
  "Rumors persist of a shadow network known only as The House That Wasn't There, though federal agencies deny its existence.",
  "Vivienne closed the manuscript.",
  "The wind moved the curtains.",
  "The lake shimmered.",
  "And somewhere far away, a city still lived by rules written by ghosts.",
];

// ─── File generation helpers ───────────────────────────────────────────────────

function generateEbookMd(): string {
  const prose_a = CHAPTER_ONE_PROSE_A.join("\n\n");
  const diary = DIARY_ENTRY.map((l) => `> *${l}*`).join("\n>\n> ");
  const prose_b = CHAPTER_ONE_PROSE_B.join("\n\n");
  const ch2a = CHAPTER_TWO_PROSE_A.join("\n\n");
  const diary2 = DIARY_ENTRY_TWO.map((l) => `> *${l}*`).join("\n>\n> ");
  const ch2b = CHAPTER_TWO_PROSE_B.join("\n\n");
  return `# Dead on Paper\n### A Novel\n\n*by Alise Grey*\n\n---\n\n> *A story of velvet lies, dangerous men, and a woman learning the price of freedom.*\n\n---\n\n## Chapter One: The Velvet Room\n\n${prose_a}\n\n---\n\n### 📔 Diary Entry — March 3\n\n${diary}\n\n---\n\n${prose_b}\n\n---\n\n*End of Chapter One*\n\n---\n\n## Chapter Two: Bruises Under Pearls\n\n${ch2a}\n\n---\n\n### 📔 Diary Entry — March 4\n\n${diary2}\n\n---\n\n${ch2b}\n\n---\n\n*End of Chapter Two*\n\n---\n\n© ${new Date().getFullYear()} Alise Grey. All rights reserved.\n`;
}

function generateAudiobookScript(): string {
  return `DEAD ON PAPER — AUDIOBOOK NARRATION SCRIPT
Chapter One: The Velvet Room

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
CHAPTER ONE: THE VELVET ROOM
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

[END OF SAMPLE — Full script in production notes]

© ${new Date().getFullYear()} Alise Grey. All rights reserved.
`;
}

function generateProductionNotes(): string {
  return `DEAD ON PAPER — AUDIOBOOK PRODUCTION NOTES
Full Production Script & Casting Guide

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHAPTER TIMESTAMPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Chapter One: The Velvet Room         00:00:00 — ~00:18:00
Chapter Two: Bruises Under Pearls    00:18:00 — ~00:36:00

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

LEONARDO — Supporting
  Age range: 30s
  Voice type: Smooth, charming, cosmopolitan

LUCIEN — Supporting
  Age range: 30s–40s
  Voice type: Precise, slightly accented, intellectual

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CINEMATIC NOIR DELIVERY NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. PACE: This is not a thriller. Do not rush.
2. SILENCE: Silence is an instrument here. Use it.
3. THE DIARY: Vivienne unmasked. Slower. Quieter. More fragile.

© ${new Date().getFullYear()} Alise Grey. All rights reserved.
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

// Voice type enum for character differentiation
type VoiceType = "narrator" | "male" | "female";

interface SpeechChunk {
  text: string;
  voiceType: VoiceType;
}

// Male character names in the story
const MALE_NAMES = [
  "salvatore",
  "damien",
  "leonardo",
  "lucien",
  "luca",
  "matteo",
  "dixon",
  "russo",
  "bellini",
  "marco",
];
// Female character names in the story
const FEMALE_NAMES = ["vivienne", "isabella", "celeste", "celia"];

function detectVoiceType(line: string): VoiceType {
  const lower = line.toLowerCase();
  // Check if line starts with a character attribution like `Name said` or `"..."` preceded by character name
  // Look for dialogue markers: lines in quotes that follow a character name attribution
  for (const name of MALE_NAMES) {
    // Pattern: Name's words / Name said / Name whispered / Name [verb]
    if (
      new RegExp(
        `\\b${name}['\'s]*\\s+(said|whispered|murmured|asked|replied|growled|snapped|hissed|barked|called|shouted|breathed|answered|continued|added)`,
        "i",
      ).test(lower)
    ) {
      return "male";
    }
    // Direct speech attribution at start of line: "Name:" or "Name —"
    if (new RegExp(`^[""]?${name}[:\s—]`).test(lower)) {
      return "male";
    }
  }
  for (const name of FEMALE_NAMES) {
    if (
      new RegExp(
        `\\b${name}['\'s]*\\s+(said|whispered|murmured|asked|replied|snapped|hissed|called|shouted|breathed|answered|continued|added|smiled|laughed)`,
        "i",
      ).test(lower)
    ) {
      return "female";
    }
    if (new RegExp(`^[""]?${name}[:\s—]`).test(lower)) {
      return "female";
    }
  }
  return "narrator";
}

function parseTextIntoSpeechChunks(raw: string): SpeechChunk[] {
  // Split by sentence boundaries, keeping ~180 chars max per chunk
  const sentences = raw.match(/[^.!?\n]+[.!?\n]+[\s]*/g) || [raw];
  const chunks: SpeechChunk[] = [];
  let current = "";
  let currentType: VoiceType = "narrator";

  const pushCurrent = () => {
    if (current.trim()) {
      chunks.push({ text: current.trim(), voiceType: currentType });
    }
    current = "";
  };

  for (const s of sentences) {
    const detected = detectVoiceType(s);
    if ((current + s).length > 200 || detected !== currentType) {
      pushCurrent();
      currentType = detected;
      current = s;
    } else {
      if (!current) currentType = detected;
      current += s;
    }
  }
  pushCurrent();

  return chunks.length > 0 ? chunks : [{ text: raw, voiceType: "narrator" }];
}

// Pick the best available voice for each role
function pickVoice(
  voices: SpeechSynthesisVoice[],
  type: VoiceType,
): SpeechSynthesisVoice | null {
  if (!voices.length) return null;

  if (type === "narrator") {
    // Prefer rich, low female voices — US or UK English female
    const preferred = [
      "Google UK English Female",
      "Samantha",
      "Victoria",
      "Karen",
      "Moira",
      "Fiona",
      "Tessa",
      "Google US English",
    ];
    for (const name of preferred) {
      const v = voices.find((v) => v.name === name);
      if (v) return v;
    }
    // Fallback: any female-named English voice
    const femaleEn = voices.find(
      (v) => /female|woman/i.test(v.name) && /en[-_]/i.test(v.lang),
    );
    if (femaleEn) return femaleEn;
    // Last resort: any English voice
    return voices.find((v) => /en[-_]/i.test(v.lang)) || voices[0];
  }

  if (type === "male") {
    const preferred = [
      "Google UK English Male",
      "Daniel",
      "Alex",
      "Fred",
      "Lee",
      "Gordon",
      "Ralph",
    ];
    for (const name of preferred) {
      const v = voices.find((v) => v.name === name);
      if (v) return v;
    }
    const maleEn = voices.find(
      (v) => /male|man/i.test(v.name) && /en[-_]/i.test(v.lang),
    );
    if (maleEn) return maleEn;
    return voices.find((v) => /en[-_]/i.test(v.lang)) || voices[0];
  }

  if (type === "female") {
    const preferred = [
      "Samantha",
      "Victoria",
      "Karen",
      "Google UK English Female",
      "Moira",
      "Fiona",
    ];
    for (const name of preferred) {
      const v = voices.find((v) => v.name === name);
      if (v) return v;
    }
    const femaleEn = voices.find(
      (v) => /female|woman/i.test(v.name) && /en[-_]/i.test(v.lang),
    );
    if (femaleEn) return femaleEn;
    return voices.find((v) => /en[-_]/i.test(v.lang)) || voices[0];
  }

  return voices[0];
}

function getVoiceSettings(type: VoiceType): { rate: number; pitch: number } {
  switch (type) {
    case "narrator":
      // Seductive: slow, low, smoky
      return { rate: 0.88, pitch: 0.78 };
    case "male":
      // Deep, measured, authoritative
      return { rate: 0.95, pitch: 0.72 };
    case "female":
      // Clear, controlled, slightly higher
      return { rate: 0.92, pitch: 1.08 };
  }
}

function AudioPlayer({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const chunksRef = useRef<SpeechChunk[]>([]);
  const idxRef = useRef(0);
  const speakingRef = useRef(false);
  const playingRef = useRef(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const watchdogRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const keepAliveRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastAdvanceRef = useRef<number>(0);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length) {
        setVoices(v);
        voicesRef.current = v;
      }
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  useEffect(
    () => () => {
      playingRef.current = false;
      window.speechSynthesis.cancel();
      if (watchdogRef.current) clearInterval(watchdogRef.current);
      if (keepAliveRef.current) clearInterval(keepAliveRef.current);
    },
    [],
  );

  function clearTimers() {
    if (watchdogRef.current) {
      clearInterval(watchdogRef.current);
      watchdogRef.current = null;
    }
    if (keepAliveRef.current) {
      clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }

  function fireChunk(index: number) {
    const chunks = chunksRef.current;
    if (!playingRef.current || index >= chunks.length) {
      if (index >= chunks.length) {
        playingRef.current = false;
        speakingRef.current = false;
        setPlaying(false);
        setProgress(100);
        clearTimers();
      }
      return;
    }

    const chunk = chunks[index];
    const utter = new SpeechSynthesisUtterance(chunk.text);
    const settings = getVoiceSettings(chunk.voiceType);
    utter.rate = settings.rate;
    utter.pitch = settings.pitch;
    utter.volume = 1.0;
    const cv = voicesRef.current.length ? voicesRef.current : voices;
    const voice = pickVoice(cv, chunk.voiceType);
    if (voice) utter.voice = voice;

    speakingRef.current = true;
    lastAdvanceRef.current = Date.now();
    utterRef.current = utter;

    utter.onend = () => {
      if (!playingRef.current) return;
      idxRef.current = index + 1;
      speakingRef.current = false;
      lastAdvanceRef.current = Date.now();
      setProgress(Math.round(((index + 1) / chunks.length) * 100));
      // Small gap between chunks to prevent Chrome queue overflow
      setTimeout(() => {
        if (playingRef.current && !speakingRef.current) {
          fireChunk(idxRef.current);
        }
      }, 80);
    };

    utter.onerror = (e) => {
      // interrupted/canceled are expected when we cancel for watchdog recovery
      if (e.error === "interrupted" || e.error === "canceled") {
        speakingRef.current = false;
        return;
      }
      // Any other error: skip chunk and continue
      idxRef.current = index + 1;
      speakingRef.current = false;
      lastAdvanceRef.current = Date.now();
      setTimeout(() => {
        if (playingRef.current) fireChunk(idxRef.current);
      }, 150);
    };

    window.speechSynthesis.speak(utter);
  }

  function startTimers() {
    clearTimers();
    lastAdvanceRef.current = Date.now();

    // CHROME KEEP-ALIVE: Chrome kills speechSynthesis after ~15s of audio.
    // The fix is to pause+resume every 10s to reset Chrome's internal timer.
    keepAliveRef.current = setInterval(() => {
      if (!playingRef.current) return;
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);

    // WATCHDOG: detect Chrome silent-stop (not speaking, not paused, but chunks remain)
    watchdogRef.current = setInterval(() => {
      if (!playingRef.current) return;

      const now = Date.now();
      const isSpeaking = window.speechSynthesis.speaking;
      const isPaused = window.speechSynthesis.paused;
      const hasMore = idxRef.current < chunksRef.current.length;
      const stalledMs = now - lastAdvanceRef.current;

      // Chrome silently stopped — rescue it
      if (
        !isSpeaking &&
        !isPaused &&
        !speakingRef.current &&
        hasMore &&
        stalledMs > 600
      ) {
        lastAdvanceRef.current = now;
        window.speechSynthesis.cancel();
        const resumeIdx = idxRef.current;
        setTimeout(() => {
          if (playingRef.current) {
            speakingRef.current = false;
            fireChunk(resumeIdx);
          }
        }, 200);
        return;
      }

      // Stuck on same chunk > 12s — force restart that chunk
      if (isSpeaking && !isPaused && speakingRef.current && stalledMs > 12000) {
        const stuckIdx = idxRef.current;
        lastAdvanceRef.current = now;
        window.speechSynthesis.cancel();
        setTimeout(() => {
          if (playingRef.current) {
            speakingRef.current = false;
            fireChunk(stuckIdx);
          }
        }, 200);
      }
    }, 300);
  }

  const play = () => {
    window.speechSynthesis.cancel();
    chunksRef.current = parseTextIntoSpeechChunks(text);
    idxRef.current = 0;
    speakingRef.current = false;
    setProgress(0);
    playingRef.current = true;
    setPlaying(true);
    const cv = window.speechSynthesis.getVoices();
    voicesRef.current = cv.length ? cv : voices;
    startTimers();
    setTimeout(() => fireChunk(0), 150);
  };

  const pause = () => {
    playingRef.current = false;
    speakingRef.current = false;
    window.speechSynthesis.cancel();
    setPlaying(false);
    clearTimers();
  };

  const resume = () => {
    playingRef.current = true;
    setPlaying(true);
    startTimers();
    setTimeout(() => fireChunk(idxRef.current), 150);
  };

  const stop = () => {
    playingRef.current = false;
    speakingRef.current = false;
    window.speechSynthesis.cancel();
    setPlaying(false);
    setProgress(0);
    idxRef.current = 0;
    clearTimers();
  };

  return (
    <div
      className="flex flex-col gap-2 my-6 p-4 rounded-xl"
      style={{
        background: "oklch(0.16 0.008 240)",
        border: "1px solid oklch(0.72 0.12 72 / 0.25)",
      }}
      data-ocid="read.panel"
    >
      <div className="flex items-center gap-3">
        <Volume2
          size={16}
          style={{ color: "oklch(0.72 0.12 72)" }}
          className="shrink-0"
        />
        <span
          className="font-sans text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.72 0.12 72 / 0.8)" }}
        >
          Narrated — seductive voices, characters voiced
        </span>
        <div className="flex items-center gap-2 ml-auto">
          {!playing ? (
            <button
              type="button"
              onClick={idxRef.current > 0 ? resume : play}
              className="font-sans text-xs px-4 py-1.5 rounded-full transition-all"
              style={{
                background: "oklch(0.72 0.12 72 / 0.18)",
                color: "oklch(0.78 0.13 72)",
                border: "1px solid oklch(0.72 0.12 72 / 0.4)",
              }}
              data-ocid="read.primary_button"
            >
              {idxRef.current > 0 ? "▶ Resume" : "▶ Play"}
            </button>
          ) : (
            <button
              type="button"
              onClick={pause}
              className="font-sans text-xs px-4 py-1.5 rounded-full transition-all"
              style={{
                background: "oklch(0.72 0.12 72 / 0.18)",
                color: "oklch(0.78 0.13 72)",
                border: "1px solid oklch(0.72 0.12 72 / 0.4)",
              }}
              data-ocid="read.secondary_button"
            >
              ⏸ Pause
            </button>
          )}
          <button
            type="button"
            onClick={stop}
            className="font-sans text-xs px-3 py-1.5 rounded-full transition-all"
            style={{
              background: "oklch(0.14 0.004 240)",
              color: "oklch(0.55 0.008 240)",
              border: "1px solid oklch(0.25 0.008 240)",
            }}
            data-ocid="read.cancel_button"
          >
            ■ Stop
          </button>
        </div>
      </div>
      {(playing || progress > 0) && (
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: 3, background: "oklch(0.22 0.008 240)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "oklch(0.72 0.12 72)",
            }}
          />
        </div>
      )}
    </div>
  );
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
                { icon: <BookOpen size={14} />, text: "Chapters Available" },
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

function ReadingSection({
  chapterId,
  onChapter,
}: {
  chapterId: ChapterId;
  onChapter: (c: ChapterId) => void;
}) {
  // Build audio text from all prose arrays for the current chapter
  const chapterOneText = [
    ...CHAPTER_ONE_PROSE_A,
    ...DIARY_ENTRY,
    ...CHAPTER_ONE_PROSE_B,
  ].join(". ");

  const chapterTwoText = [
    ...CHAPTER_TWO_PROSE_A,
    ...DIARY_ENTRY_TWO,
    ...CHAPTER_TWO_PROSE_B,
  ].join(". ");

  const chapterThreeText = [
    ...CHAPTER_THREE_PROSE_A,
    ...DIARY_ENTRY_THREE,
    ...CHAPTER_THREE_PROSE_B,
  ].join(". ");

  const chapterFourText = [
    ...CHAPTER_FOUR_PROSE_A,
    ...DIARY_ENTRY_FOUR,
    ...CHAPTER_FOUR_PROSE_B,
  ].join(". ");

  const chapterFiveText = [
    ...CHAPTER_FIVE_PROSE_A,
    ...DIARY_ENTRY_FIVE,
    ...CHAPTER_FIVE_PROSE_B,
  ].join(". ");

  const chapterSixText = [
    ...CHAPTER_SIX_PROSE_A,
    ...DIARY_ENTRY_SIX,
    ...CHAPTER_SIX_PROSE_B,
  ].join(". ");

  const chapterSevenText = [
    ...CHAPTER_SEVEN_PROSE_A,
    ...DIARY_ENTRY_SEVEN,
    ...CHAPTER_SEVEN_PROSE_B,
  ].join(". ");

  const chapterEightText = [
    ...CHAPTER_EIGHT_PROSE_A,
    ...DIARY_ENTRY_EIGHT,
    ...CHAPTER_EIGHT_PROSE_B,
  ].join(". ");

  const chapterNineText = [
    ...CHAPTER_NINE_PROSE_A,
    ...DIARY_ENTRY_NINE,
    ...CHAPTER_NINE_PROSE_B,
  ].join(". ");

  const chapterTenText = [
    ...CHAPTER_TEN_PROSE_A,
    ...DIARY_ENTRY_TEN,
    ...CHAPTER_TEN_PROSE_B,
  ].join(". ");

  const chapterElevenText = [
    ...CHAPTER_ELEVEN_PROSE_A,
    ...DIARY_ENTRY_ELEVEN,
    ...CHAPTER_ELEVEN_PROSE_B,
  ].join(". ");

  const chapterTwelveText = [
    ...CHAPTER_TWELVE_PROSE_A,
    ...DIARY_ENTRY_TWELVE,
    ...CHAPTER_TWELVE_PROSE_B,
  ].join(". ");

  const chapterThirteenText = [
    ...CHAPTER_THIRTEEN_PROSE_A,
    ...CHAPTER_THIRTEEN_PROSE_B,
  ].join(". ");

  const chapterFourteenText = [
    ...CHAPTER_FOURTEEN_PROSE_A,
    ...CHAPTER_FOURTEEN_PROSE_B,
    ...EPILOGUE_PROSE,
  ].join(". ");

  return (
    <section
      id="read"
      className="min-h-screen pt-24 pb-20"
      data-ocid="read.section"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {chapterId === "one" && (
            <motion.div
              key="chapter-one"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Chapter header */}
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter One
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Velvet Room
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              {/* Audio player */}
              <AudioPlayer text={chapterOneText} />

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

              {/* Next chapter navigation */}
              <div className="flex justify-end mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("two")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: Bruises Under Pearls
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "two" && (
            <motion.div
              key="chapter-two"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Chapter header */}
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Two
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  Bruises Under Pearls
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              {/* Audio player */}
              <AudioPlayer text={chapterTwoText} />

              {/* Prose part A */}
              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_TWO_PROSE_A.map((paragraph) => (
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
                    Diary Entry — March 4
                  </div>
                  {DIARY_ENTRY_TWO.map((line) => (
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
                {CHAPTER_TWO_PROSE_B.map((paragraph) => (
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
                  ✦ END OF CHAPTER TWO ✦
                </p>
              </div>

              {/* Prev/Next chapter navigation */}
              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("one")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: The Velvet Room
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("three")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: The Boss Watches
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "three" && (
            <motion.div
              key="chapter-three"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Chapter header */}
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Three
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Boss Watches
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              {/* Audio player */}
              <AudioPlayer text={chapterThreeText} />

              {/* Prose part A */}
              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_THREE_PROSE_A.map((paragraph) => (
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
                    Diary Entry — March 5
                  </div>
                  {DIARY_ENTRY_THREE.map((line) => (
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
                {CHAPTER_THREE_PROSE_B.map((paragraph) => (
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
                  ✦ END OF CHAPTER THREE ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("two")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: Bruises Under Pearls
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("four")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: Midnight Ledger
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {chapterId === "four" && (
            <motion.div
              key="chapter-four"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Four
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  Midnight Ledger
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterFourText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_FOUR_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — March 8
                  </div>
                  {DIARY_ENTRY_FOUR.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_FOUR_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER FOUR ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("three")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: The Boss Watches
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("five")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: Property
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {chapterId === "five" && (
            <motion.div
              key="chapter-five"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Five
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  Property
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterFiveText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_FIVE_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — March 18
                  </div>
                  {DIARY_ENTRY_FIVE.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_FIVE_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER FIVE ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("four")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: Midnight Ledger
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("six")}
                  className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold"
                  data-ocid="read.pagination_next"
                >
                  Next: Widow in Satin
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "six" && (
            <motion.div
              key="chapter-six"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Six
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  Widow in Satin
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterSixText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_SIX_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — March 30
                  </div>
                  {DIARY_ENTRY_SIX.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_SIX_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER SIX ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("five")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: Property
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("seven")}
                  className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold"
                  data-ocid="read.pagination_next"
                >
                  Next: The Other Woman
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "seven" && (
            <motion.div
              key="chapter-seven"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Seven
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Other Woman
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterSevenText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_SEVEN_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — April 4
                  </div>
                  {DIARY_ENTRY_SEVEN.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_SEVEN_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER SEVEN ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("six")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: Widow in Satin
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("eight")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: Begging the Widow
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {chapterId === "eight" && (
            <motion.div
              key="chapter-eight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Eight
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  Begging the Widow
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterEightText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_EIGHT_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — April 10
                  </div>
                  {DIARY_ENTRY_EIGHT.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_EIGHT_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER EIGHT ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("seven")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: The Other Woman
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("nine")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: The Ghost King's Hand
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {chapterId === "nine" && (
            <motion.div
              key="chapter-nine"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Nine
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Ghost King's Hand
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterNineText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_NINE_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — April 12
                  </div>
                  {DIARY_ENTRY_NINE.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_NINE_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER NINE ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("eight")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: Begging the Widow
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("ten")}
                  className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: The Treaty of Roses
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "ten" && (
            <motion.div
              key="chapter-ten"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Ten
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Treaty of Roses
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterTenText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_TEN_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — April 13
                  </div>
                  {DIARY_ENTRY_TEN.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_TEN_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER TEN ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("nine")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: The Ghost King's Hand
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("eleven")}
                  className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: The Woman With No Heart
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "eleven" && (
            <motion.div
              key="chapter-eleven"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Eleven
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Woman With No Heart
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterElevenText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_ELEVEN_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Entry — April 20
                  </div>
                  {DIARY_ENTRY_ELEVEN.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER ELEVEN ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("ten")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: The Treaty of Roses
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("twelve")}
                  className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: Knives Behind the Roses
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "twelve" && (
            <motion.div
              key="chapter-twelve"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Twelve
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  Knives Behind the Roses
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterTwelveText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_TWELVE_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Diary Fragment — Found Later in Evidence
                  </div>
                  {DIARY_ENTRY_TWELVE.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="chapter-prose">
                {CHAPTER_TWELVE_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER TWELVE ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("eleven")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: The Woman With No Heart
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("thirteen")}
                  className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Next: The Treaty Breaks at Midnight
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "thirteen" && (
            <motion.div
              key="chapter-thirteen"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Chapter Thirteen
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Treaty Breaks at Midnight
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterThirteenText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_THIRTEEN_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="chapter-prose mt-6">
                {CHAPTER_THIRTEEN_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ END OF CHAPTER THIRTEEN ✦
                </p>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("twelve")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: Knives Behind the Roses
                </button>
                <button
                  type="button"
                  onClick={() => onChapter("fourteen")}
                  className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_next"
                >
                  Final Chapter: The Empire That Never Existed
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
          {chapterId === "fourteen" && (
            <motion.div
              key="chapter-fourteen"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">
                  Final Chapter
                </p>
                <h2
                  className="font-cinzel text-3xl sm:text-4xl font-bold tracking-wide"
                  style={{ color: "oklch(0.78 0.13 72)" }}
                >
                  The Empire That Never Existed
                </h2>
                <div className="gold-divider mt-6" />
              </div>

              <AudioPlayer text={chapterFourteenText} />

              <div className="chapter-prose" data-ocid="read.panel">
                {CHAPTER_FOURTEEN_PROSE_A.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

              <div className="chapter-prose mt-6">
                {CHAPTER_FOURTEEN_PROSE_B.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
              </div>

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
                    Epilogue — News Clipping — Ten Years Later
                  </div>
                  {EPILOGUE_PROSE.map((line) => (
                    <p
                      key={line.slice(0, 30)}
                      className="font-playfair italic leading-relaxed mb-3 text-paper"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              <div className="text-center mt-16">
                <div className="gold-divider mb-6" />
                <p
                  className="font-cinzel text-sm tracking-widest"
                  style={{ color: "oklch(0.72 0.12 72 / 0.7)" }}
                >
                  ✦ THE END ✦
                </p>
                <p
                  className="font-playfair italic text-sm mt-4"
                  style={{ color: "oklch(0.72 0.12 72 / 0.5)" }}
                >
                  Dead on Paper: A Widow's Memoir — by Alise Grey
                </p>
              </div>

              <div className="flex justify-start mt-10">
                <button
                  type="button"
                  onClick={() => onChapter("thirteen")}
                  className="btn-outline-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                  data-ocid="read.pagination_prev"
                >
                  <ChevronLeft size={16} />
                  Back: The Treaty Breaks at Midnight
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ChaptersSection({
  onNav,
  onChapter,
}: {
  onNav: (s: Section) => void;
  onChapter: (c: ChapterId) => void;
}) {
  const chapters: {
    id: string;
    num: string;
    title: string;
    desc: string;
    available: boolean;
  }[] = [
    {
      id: "one",
      num: "I",
      title: "The Velvet Room",
      desc: "A singer in a gilded cage discovers that the most dangerous man in the room is watching.",
      available: true,
    },
    {
      id: "two",
      num: "II",
      title: "Bruises Under Pearls",
      desc: "Morning in the Vale mansion. The violence that hides beneath diamonds.",
      available: true,
    },
    {
      id: "three",
      num: "III",
      title: "The Boss Watches",
      desc: "The rain brings a witness. Salvatore stands in the storm and sees the truth no diamond can hide.",
      available: true,
    },
    {
      id: "four",
      num: "IV",
      title: "Midnight Ledger",
      desc: "The night the ledger opened. Two men vanished. And a singer inherited an empire.",
      available: true,
    },
    {
      id: "five",
      num: "V",
      title: "Property",
      desc: "Las Vegas. An underground casino. A widow who buries a man without touching him.",
      available: true,
    },
    {
      id: "six",
      num: "VI",
      title: "Widow in Satin",
      desc: "Damien returns from the dead—and learns what the widow has become.",
      available: true,
    },
    {
      id: "seven",
      num: "VII",
      title: "The Other Woman",
      desc: "A queen cries alone in the king's house. Across the ocean, Damien's empire crumbles at the hands of the woman he underestimated.",
      available: true,
    },
    {
      id: "eight",
      num: "VIII",
      title: "Begging the Widow",
      desc: "The tabloids scream Damien's return. Rival kings refuse his offer. And a hidden note reveals the ghost king is still choosing her side.",
      available: true,
    },
    {
      id: "nine",
      num: "IX",
      title: "The Ghost King's Hand",
      desc: "A masquerade at City Hall. Salvatore steps from the shadows. And a dead man walks back into the ballroom with hunger in his eyes.",
      available: true,
    },
    {
      id: "ten",
      num: "X",
      title: "The Treaty of Roses",
      desc: "A moonlit terrace. A rival prince. A knife at his throat. And a proposal beneath white roses that changes everything.",
      available: true,
    },
    {
      id: "eleven",
      num: "XI",
      title: "The Woman With No Heart",
      desc: "Isabella arrives in the storm dressed in sadness. Vivienne arrives with keys and contempt. A queen issues policy.",
      available: true,
    },
    {
      id: "twelve",
      num: "XII",
      title: "Knives Behind the Roses",
      desc: "A dismissed woman plans in silence. Bodies fall. A frame is built from grief. And the treaty begins to bleed.",
      available: true,
    },
    {
      id: "thirteen",
      num: "XIII",
      title: "The Treaty Breaks at Midnight",
      desc: "The stained glass shatters. The war begins. A mother dies mid-sentence. And a father learns which son inherited the monster.",
      available: true,
    },
    {
      id: "fourteen",
      num: "XIV",
      title: "The Empire That Never Existed",
      desc: "Ten years later. The empire disappears into myth. And Vivienne writes the only proof it ever existed.",
      available: true,
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
                onClick={() => {
                  if (ch.available) {
                    onChapter(ch.id as ChapterId);
                    onNav("read");
                  }
                }}
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

          {/* Coming soon note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-playfair italic text-center mt-8 text-sm"
            style={{ color: "oklch(0.50 0.008 240)" }}
          >
            Chapters VI–XIV coming soon — more of Vivienne&apos;s story awaits.
          </motion.p>
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
  const [selectedChapter, setSelectedChapter] = useState<ChapterId>("one");
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
        <ReadingSection
          chapterId={selectedChapter}
          onChapter={(c) => {
            setSelectedChapter(c);
            navigateTo("read");
          }}
        />
        <GoldDivider />
        <ChaptersSection onNav={navigateTo} onChapter={setSelectedChapter} />
        <GoldDivider />
        <AuthorSection />
        <GoldDivider />
        <DownloadsSection />
      </main>
      <Footer onNav={navigateTo} />
    </div>
  );
}
