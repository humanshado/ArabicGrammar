# النحو الواضح · An-Naḥw al-Wāḍiḥ — an interactive Arabic grammar course

An interactive course that follows **_An-Naḥw al-Wāḍiḥ fī Qawāʿid al-Lugha al-ʿArabiyya_** (primary stage, parts 1–3) by ʿAlī al-Jārim and Muṣṭafā Amīn, **lesson by lesson**, with the PDF page numbers. It is built on the same engine as [FrenchGrammar](https://github.com/humanshado/FrenchGrammar), adapted for Arabic: right-to-left text, full ḥarakāt, an Arabic voice, case endings (iʿrāb) and an on-screen Arabic keyboard.

**▶ Open the course: [https://humanshado.github.io/ArabicGrammar/](https://humanshado.github.io/ArabicGrammar/)** (after GitHub Pages is switched on: *Settings ▸ Pages ▸ Deploy from branch ▸ main / root*).

You can also open `index.html` locally or serve the folder from any static host. There is no build step.

Video lessons for the book: [النحو الواضح لمدارس المرحلة الابتدائية — Mr Rhid Arabic](https://www.youtube.com/playlist?list=PL06xyhNQcyy-vOmg7Lwo8YRzZriR3iLGc).

Each lesson teaches the rule of the book's lesson the way the book does (الأمثلة → البحث → القاعدة → التمرينات) and goes further into parts of speech, case endings, agreement, verb conjugation and moods, sentence structure and style. The explanations, illustrations, texts and most exercises are written fresh for this course; the book's own pages are **not** reproduced, so use your copy alongside.

## Status

| Part | Lessons | Status |
|---|---|---|
| الجزء الأول · Part 1 | 1–16: the sentence, noun / verb / particle, past / present / imperative, doer, object, mubtadaʾ and khabar, verbal and nominal sentences, naṣb / jazm / rafʿ of the present verb, kāna and its sisters, inna and its sisters, prepositions, the adjective | ✅ interactive |
| الجزء الثاني · Part 2 | 17–51: built and declinable words, signs of iʿrāb, weak verbs and nouns, hidden *an*, conditionals, the five verbs, dual and plurals, iḍāfa, the five nouns, definiteness, pronouns, relatives, demonstratives, passive, absolute object, object of purpose, adverbs | listed, coming next |
| الجزء الثالث · Part 3 | 52–77: agreement, sentences as predicates, *anna* / *inna*, verb conjugation with pronouns, augmented verbs, hamza, transitivity, participles, exception, ḥāl, tamyīz, vocative, diptotes, followers, questions | listed, coming next |

## What's inside a lesson

| Tab | What you do |
|---|---|
| 📘 **Lesson** | The rule in short illustrated sections, each tagged with what it trains (parts of speech, case endings, agreement, conjugation, sentence structure, spelling, style), with the book's rule (القاعدة) and the book's parsing formula. Interactive diagrams, spoken examples with tap-to-translate words, *Watch out* and *Tip* boxes, and **✔ Check yourself** questions. |
| 🖼 **Picture words** | The lesson vocabulary as a picture dictionary, coloured by gender (blue مذكّر, red مؤنّث). Picture quiz. |
| 📖 **Read** | Short fully-vowelled texts and dialogues that use the lesson's grammar. Tap any word, toggle translation, **switch the ḥarakāt off** to practise reading real unvowelled Arabic, read aloud with highlighting. |
| 🎧 **Listen** | Read-along and shadowing, **dictation** (ḥarakāt not required; hamza and ة slips forgiven), listening vocabulary and listening comprehension. |
| 🗣 **Speak** | Dialogue role-play with speech recognition where the browser supports it. |
| 🔤 **Vocabulary** | Every word with type, gender, plural or present tense; flashcards both ways; masculine/feminine drill; ★ for spaced-repetition review. |
| ✏️ **Exercises** | Graded exercises in the book's styles: sorting, multiple choice, gap-fill (with word bank or the on-screen keyboard), **vowel the endings** (اضبط أواخر الكلمات), **parse the highlighted word** (أعرب), build the sentence, transform (verbal ↔ nominal, add كان / إنّ, swap doer and object), translation with model answers. The last one is a review. |
| ✅ **Quiz** | A new mixed round each time, mostly grammar with an explanation after each answer. Best score saved. |
| 📋 **Summary** | A printable one-page cheat sheet and a table of common mistakes. |
| 💡 **Tips** | Learning tips, culture notes, and the routine for each lesson. |

Site-wide pages: **Iʿrāb map** (every marfūʿ, manṣūb, majrūr and majzūm position, linked to its lesson), **Review** (spaced repetition across lessons), **Grammar index**, **Word index**, **How to study**.

Progress is saved in the browser (`localStorage`). Audio uses the device's Arabic text-to-speech voice.

### Interactive illustrations

Generic, data-driven widgets in `js/art.js`, used across lessons:

- **parse** — tap each word of a sentence to see its kind or job (اسم / فعل / حرف, فاعل / مفعول به, مبتدأ / خبر …), “show all labels”, and a 🎯 *find the …* game
- **transform** — one sentence, several operations (add لن / لم / كان / إنّ, change tense, swap roles, verbal ↔ nominal) with the changed letters highlighted
- **builder** — choose words from slots and watch agreement happen (verb ↔ feminine doer, khabar ↔ mubtadaʾ, adjective ↔ noun in every case)
- **sorter** — tap-and-drop sorting game with instant feedback
- **timeline** — past / present-future / command on a time line
- **prep** — an animated sparrow scene for the prepositions
- **meter** — “complete sentence or not?” game
- **table** — paradigm tables with audio on every cell

## Layout

```
index.html            app shell (add each new lesson's <script> here)
css/app.css           styles (light / dark, print, Arabic typography)
js/app.js             router, lesson renderer, reader, glossary, audio, exercises, quizzes, SRS
js/art.js             interactive illustrations used inside lesson sections
data/catalog.js       table of contents (77 lessons, PDF pages, parts) and the iʿrāb map
data/lexicon.js       shared everyday lexicon for the tap-a-word glossary
data/lessons/NN.js    lesson content
```

## Lesson data format

```js
COURSE.add({
  n: 1, pages: [11, 14], method: true, summary: "…", objectives: ["…"],
  lesson:   [{ id, t, ar, pos, pages, b /* html */, widget, wd /* widget data */, ex: [[arabic, english, note]],
               after, rule /* html */, warn, tip, check: [[question, [options], answerIndex, why, sayText | false]] }],
  scenes:   [{ h, en, pic, note, lines: [[speaker, arabic, english], …] }],
  vocab:    [[arabic, english, type, emoji, note, "plural / present", group], …],
  exercises:[{ k: "gap" | "mcq" | "sort" | "irab" | "shakl" | "match" | "tf" | "order" | "words" | "fix" | "tr", t, en, cats, marks, items }],
  drills:   [[question, [options], answerIndex, why], …],   // grammar questions for the quiz
  comp:     [[question, [options], answerIndex, sceneIndex], …],
  cheat: "html", mistakes: [[wrong, right, why]], tips: [{ t, b }], culture: [{ t, b }]
});
```

- `shakl` items mark the letter to vowel with its answer in braces: `"فَتَحَ الوَلَد{ُ} البَاب{َ}"`.
- `irab` items put the word to parse in square brackets: `"سَمِعْتُ [النَّصِيحَةَ]."`, answer = index in `cats`.
- In widget texts, `[[…]]` highlights the letters that change.
