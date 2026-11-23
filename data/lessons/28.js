// الدرس ٢٨ — نصب المضارع بأن المضمرة (PDF pp. 137–147)
COURSE.add({
  n: 28, pages: [137, 147], method: true,
  summary: "Sometimes the present verb is manṣūb with no naṣb particle in sight. Grammarians explain it by a hidden أَنْ after six words: لام التعليل (li- “in order to”), لام الجحود (after ما كان / لم يكن), أَوْ (“until / unless”), حَتَّى (“until / so that”), فاء السببية and واو المعية (after a negation or a request).",
  objectives: [
    "recognise the six words after which أَنْ is hidden",
    "put the present verb after them in naṣb",
    "use لِـ for purpose and حَتَّى for “until / so that”",
    "use فَـ + naṣb to give the result of a command or negation"
  ],

  lesson: [
    { id: "idea", t: "A hidden أَنْ", ar: "أن المضمرة", pos: "conjugation", pages: "137–139",
      b: `<p>In <span class="ar">جِئْتُ لِأَتَعَلَّمَ</span> (I came to learn), the verb <span class="ar">أَتَعَلَّمَ</span> ends in fatḥa, but <span class="ar">لِـ</span> is not one of the four naṣb particles. Grammarians say an <span class="ar">أَنْ</span> is hiding after it: <span class="ar">لِـ(أَنْ) أَتَعَلَّمَ</span>. You can even say it aloud: <span class="ar">جِئْتُ لِأَنْ أَتَعَلَّمَ</span> means the same.</p>`,
      widget: "transform",
      wd: { title: "Six words with a hidden أَنْ", sets: [
        { base: ["جِئْتُ [[لِـ]]أَتَعَلَّ[[مَ]]", "I came in order to learn."], baseLabel: "لام التعليل", ops: [
          ["لام الجحود", "مَا كَانَ الصَّادِقُ [[لِـ]]يَكْذِ[[بَ]]", "The truthful man would never lie.", "After مَا كَانَ / لَمْ يَكُنْ: strong denial."],
          ["أَوْ", "لَأَلْزَمَنَّكَ [[أَوْ]] تَقْضِيَ[[نِي]] حَقِّي", "I'll stick to you until you pay me my due.", "أو here = until / unless. Verb: تَقْضِيَ, visible fatḥa."],
          ["حَتَّى", "اِجْتَهِدْ [[حَتَّى]] تَنْجَ[[حَ]]", "Work hard so that you succeed.", "حتى = until, so that."],
          ["فاء السببية", "اِجْتَهِدْ [[فَ]]تَنْجَ[[حَ]]", "Work hard, and so succeed.", "After a command/negation, فـ gives the result."],
          ["واو المعية", "لَا تَأْكُلِ السَّمَكَ [[وَ]]تَشْرَ[[بَ]] اللَّبَنَ", "Don't eat fish while drinking milk.", "وَ = together with, at the same time."]] }
      ] },
      check: [["In ذَهَبْتُ إِلَى المَكْتَبَةِ لِأَقْرَأَ, أَقْرَأَ is manṣūb by…", ["a hidden أَنْ after لام التعليل", "لِـ itself as a naṣb particle"], 0, "", false]] },

    { id: "li", t: "لِـ of purpose and لِـ of denial", ar: "لام التعليل ولام الجحود", pos: "conjugation", pages: "137–139",
      b: `<p><b>لام التعليل</b> (“li- of reason”) gives the <b>purpose</b>, like <span class="ar">كَيْ</span>: <span class="ar">يَأْكُلُ الإِنْسَانُ لِيَعِيشَ</span> (people eat to live).</p>
        <p><b>لام الجحود</b> (“li- of denial”) comes after <span class="ar">مَا كَانَ</span> or <span class="ar">لَمْ يَكُنْ</span> and makes the denial very strong: <span class="ar">لَمْ يَكُنِ الأَمِينُ لِيَخُونَ</span> — the honest man is not one to betray.</p>`,
      check: [["“We study to succeed”:", ["نَدْرُسُ لِنَنْجَحَ", "نَدْرُسُ لِنَنْجَحُ"], 0, "", "نَدْرُسُ لِنَنْجَحَ"]] },

    { id: "hatta", t: "حَتَّى and أَوْ", ar: "حتى وأو", pos: "conjugation", pages: "140–143",
      b: `<p><span class="ar">حَتَّى</span> + present = <b>until</b> or <b>so that</b>: <span class="ar">سِرْ حَتَّى تَصِلَ</span> (walk until you arrive). <span class="ar">أَوْ</span> + present (when it means <i>until / except that</i>) = <span class="ar">لَأَسْهَرَنَّ أَوْ أُتِمَّ عَمَلِي</span> (I'll stay up until I finish my work).</p>
        <p>Note: <span class="ar">حَتَّى</span> before a noun is a preposition: <span class="ar">نِمْتُ حَتَّى الصَّبَاحِ</span> (until morning — majrūr).</p>`,
      check: [["“Wait until I come”:", ["اِنْتَظِرْ حَتَّى أَحْضُرَ", "اِنْتَظِرْ حَتَّى أَحْضُرُ"], 0, "", "اِنْتَظِرْ حَتَّى أَحْضُرَ"]] },

    { id: "fa-wa", t: "فَـ of cause and وَ of togetherness", ar: "فاء السببية وواو المعية", pos: "conjugation", pages: "143–145",
      b: `<p>Both need a <b>negation or a request</b> (command, prohibition, question, wish…) before them:</p>
        <ul><li><span class="ar">فَـ</span> gives the <b>result</b>: <span class="ar">لَا تُهْمِلْ فَتَنْدَمَ</span> (don't be careless, or you'll regret it); <span class="ar">هَلْ تَزُورُنَا فَنُكْرِمَكَ؟</span> (will you visit us so we can honour you?).</li>
        <li><span class="ar">وَ</span> means <b>at the same time</b>: <span class="ar">لَا تَنْهَ عَنْ خُلُقٍ وَتَأْتِيَ مِثْلَهُ</span> (don't forbid a habit while doing the same yourself) — a famous line of poetry.</li></ul>
        <p>Without the negation or request they are ordinary “and”: <span class="ar">يَجْتَهِدُ فَيَنْجَحُ</span> (he works hard and so succeeds) — marfūʿ.</p>`,
      check: [["لَا تَكْسَلْ ___", ["فَتَرْسُبَ", "فَتَرْسُبُ"], 0, "After a prohibition: naṣb.", "لَا تَكْسَلْ فَتَرْسُبَ"]] }
  ],

  scenes: [
    { h: "نَصَائِحُ المُعَلِّمِ", en: "The teacher's advice", pic: "🧑‍🏫", lines: [
      ["المُعَلِّمُ", "جِئْتُمْ إِلَى المَدْرَسَةِ لِتَتَعَلَّمُوا.", "You came to school to learn."],
      ["المُعَلِّمُ", "اِسْتَمِعُوا إِلَى الدَّرْسِ فَتَفْهَمُوهُ.", "Listen to the lesson, and so understand it."],
      ["المُعَلِّمُ", "وَلَا تَتَكَلَّمُوا وَيَتَكَلَّمَ المُعَلِّمُ.", "And don't talk while the teacher is talking."],
      ["التِّلْمِيذُ", "سَنُذَاكِرُ حَتَّى نَنْجَحَ يَا أُسْتَاذُ.", "We'll study until we pass, sir."],
      ["المُعَلِّمُ", "أَحْسَنْتُمْ؛ مَا كَانَ المُجْتَهِدُ لِيَرْسُبَ.", "Well done; the hard-working student never fails."]],
      note: "لِتَتَعَلَّمُوا، فَتَفْهَمُوهُ (five verbs: nūn dropped in naṣb, lesson 31), وَيَتَكَلَّمَ، حَتَّى نَنْجَحَ، لِيَرْسُبَ — all manṣūb with a hidden أَنْ." }
  ],

  vocab: [
    ["لَامُ التَّعْلِيلِ", "li- of purpose", "part.", "", "", "", "Particles"],
    ["لَامُ الجُحُودِ", "li- of denial (after ما كان)", "part.", "", "", "", "Particles"],
    ["حَتَّى", "until; so that", "part.", "", "", "", "Particles"],
    ["أَوْ", "or; until (+ naṣb)", "part.", "", "", "", "Particles"],
    ["فَاءُ السَّبَبِيَّةِ", "fa- of result", "part.", "", "", "", "Particles"],
    ["وَاوُ المَعِيَّةِ", "wa- of accompaniment", "part.", "", "", "", "Particles"],
    ["تَعَلَّمَ", "to learn", "v.", "", "يَتَعَلَّمُ", "", "Verbs"],
    ["خَانَ", "to betray", "v.", "", "يَخُونُ", "", "Verbs"],
    ["نَدِمَ", "to regret", "v.", "", "يَنْدَمُ", "", "Verbs"],
    ["رَسَبَ", "to fail (an exam)", "v.", "", "يَرْسُبُ", "", "Verbs"],
    ["سَهِرَ", "to stay up", "v.", "", "يَسْهَرُ", "", "Verbs"],
    ["أَتَمَّ", "to complete", "v.", "", "يُتِمُّ", "", "Verbs"],
    ["اِسْتَمَعَ", "to listen", "v.", "", "يَسْتَمِعُ", "", "Verbs"],
    ["كَسِلَ", "to be lazy", "v.", "", "يَكْسَلُ", "", "Verbs"],
    ["خُلُقٌ", "character, habit", "n.m", "", "", "أَخْلَاقٌ", "Nouns"],
    ["حَقٌّ", "right, due", "n.m", "", "", "حُقُوقٌ", "Nouns"]
  ],

  exercises: [
    { k: "shakl", t: "اضْبِطْ آخِرَ المُضَارِعِ · Rafʿ or naṣb?", marks: ["ُ", "َ"], items: [
      "نَأْكُلُ لِنَعِيش{َ}", "اِنْتَظِرْ حَتَّى أَحْضُر{َ}", "لَا تُهْمِلْ فَتَنْدَم{َ}", "يَجْتَهِدُ فَيَنْجَح{ُ}", "مَا كَانَ الأَمِينُ لِيَخُون{َ}", "لَا تَأْكُلْ وَتَتَكَلَّم{َ}"] },
    { k: "sort", t: "مَا الحَرْفُ؟ · Which word hides أَنْ?", cats: ["لام التعليل", "لام الجحود", "حتى", "فاء السببية", "واو المعية"], items: [
      ["ذَهَبْتُ لِأُسَاعِدَهُ", "0", ""], ["لَمْ يَكُنْ لِيَتَأَخَّرَ", "1", ""], ["سِرْ حَتَّى تَصِلَ", "2", ""], ["اِدْرُسْ فَتَنْجَحَ", "3", ""], ["لَا تَأْمُرْ بِالصِّدْقِ وَتَكْذِبَ", "4", ""]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["هَلْ تَزُورُنَا ___", ["فَنُكْرِمَكَ", "فَنُكْرِمُكَ"], 0, "After a question: naṣb."], ["نِمْتُ حَتَّى ___", ["الصَّبَاحِ", "الصَّبَاحَ"], 0, "Before a noun حتى is a preposition."], ["يَدْرُسُ ___ (and so succeeds — a statement)", ["فَيَنْجَحُ", "فَيَنْجَحَ"], 0, "No negation/request → rafʿ."]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["After لام التعليل the verb is manṣūb.", true, ""], ["فَـ always makes the verb manṣūb.", false, "Only after a negation or request."], ["لام الجحود comes after ما كان / لم يكن.", true, ""]] }
  ],

  drills: [
    ["How many words hide أَنْ in this lesson?", ["six", "four", "two"], 0, ""],
    ["“I came to visit you”:", ["جِئْتُ لِأَزُورَكَ", "جِئْتُ لِأَزُورُكَ"], 0, ""],
    ["لَا تَكْذِبْ فَ___ النَّاسُ مِنْكَ.", ["يَنْفِرَ", "يَنْفِرُ"], 0, ""],
    ["Which لام follows مَا كَانَ?", ["لام الجحود", "لام التعليل"], 0, ""],
    ["حَتَّى + noun:", ["preposition (jarr)", "naṣb of a verb"], 0, ""],
    ["“Don't eat while talking”:", ["لَا تَأْكُلْ وَتَتَكَلَّمَ", "لَا تَأْكُلْ وَتَتَكَلَّمُ"], 0, ""]
  ],

  comp: [["Why did the pupils come to school?", ["to learn", "to play", "to eat"], 0, 0], ["What will the pupils do until they pass?", ["study", "talk", "sleep"], 0, 0]],

  cheat: `<h3>أن المضمرة</h3><table class="g"><tr><th>word</th><th>meaning</th><th>example</th></tr>
    <tr><td><span class="ar">لِـ</span> (التعليل)</td><td>in order to</td><td><span class="ar">جِئْتُ لِأَتَعَلَّمَ</span></td></tr><tr><td><span class="ar">لِـ</span> (الجحود)</td><td>would never</td><td><span class="ar">مَا كَانَ لِيَكْذِبَ</span></td></tr><tr><td><span class="ar">حَتَّى</span></td><td>until, so that</td><td><span class="ar">سِرْ حَتَّى تَصِلَ</span></td></tr><tr><td><span class="ar">أَوْ</span></td><td>until, unless</td><td><span class="ar">لَأَلْزَمَنَّكَ أَوْ تَقْضِيَنِي</span></td></tr><tr><td><span class="ar">فَـ</span></td><td>and so (after negation/request)</td><td><span class="ar">اِدْرُسْ فَتَنْجَحَ</span></td></tr><tr><td><span class="ar">وَ</span></td><td>while (after negation/request)</td><td><span class="ar">لَا تَأْكُلْ وَتَتَكَلَّمَ</span></td></tr></table>`,
  mistakes: [["جِئْتُ لِأَتَعَلَّمُ", "جِئْتُ لِأَتَعَلَّمَ", "Hidden أن → naṣb."], ["لَا تُهْمِلْ فَتَنْدَمُ", "لَا تُهْمِلْ فَتَنْدَمَ", "فاء السببية after a prohibition → naṣb."]],
  tips: [{ t: "Purpose sentences", b: `Explain why you do five daily things with <span class="ar">لِـ</span>: <span class="ar">أَشْرَبُ القَهْوَةَ لِأَسْتَيْقِظَ، أَمْشِي لِأُحَافِظَ عَلَى صِحَّتِي…</span>` }]
});
