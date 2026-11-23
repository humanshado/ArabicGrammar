// الدرس ١٤ — إنّ وأخواتها (PDF pp. 70–76)
COURSE.add({
  n: 14, pages: [70, 76], method: true,
  summary: "Inna (إنّ) and its sisters — أنّ، كأنّ، لكنّ، ليت، لعلّ — are particles that come before a nominal sentence and do the opposite of kāna: the mubtadaʾ becomes manṣūb (the ism of inna) and the khabar stays marfūʿ (the khabar of inna). Each adds a meaning: emphasis, “that”, “as if”, “but”, “if only”, “perhaps”.",
  objectives: [
    "list the six particles إنّ، أنّ، كأنّ، لكنّ، ليت، لعلّ and their meanings",
    "put them before a nominal sentence: ism manṣūb, khabar marfūʿ",
    "tell إنّ (at the start) from أنّ (in the middle, “that”)",
    "compare kāna and inna side by side",
    "parse the ism and khabar of inna"
  ],

  lesson: [
    { id: "effect", t: "The mirror image of kāna", ar: "عمل إنّ", pos: "case endings", pages: "70–71",
      b: `<p>Start again from a nominal sentence: <span class="ar">الجَمَلُ صَبُورٌ</span> (the camel is patient). Put <span class="ar">إِنَّ</span> in front: <span class="ar">إِنَّ الجَمَلَ صَبُورٌ</span> — <i>indeed, the camel is patient</i>. This time it is the <b>first</b> noun that changes: <span class="ar">الجَمَلُ</span> → <span class="ar">الجَمَلَ</span>. The khabar keeps its ḍamma.</p>
        <table class="g"><tr><th></th><th>first noun</th><th>second noun</th></tr>
        <tr><td><span class="ar">كَانَ</span> and sisters (verbs)</td><td>ism · marfūʿ ـُ</td><td>khabar · <b>manṣūb</b> ـَ</td></tr>
        <tr><td><span class="ar">إِنَّ</span> and sisters (particles)</td><td>ism · <b>manṣūb</b> ـَ</td><td>khabar · marfūʿ ـُ</td></tr></table>`,
      widget: "transform",
      wd: { title: "Inna and its sisters at work", sets: [
        { base: ["الجَمَلُ صَبُورٌ", "The camel is patient."], baseLabel: "nominal sentence", ops: [
          ["إِنَّ", "[[إِنَّ]] [[الجَمَلَ]] صَبُورٌ", "Indeed, the camel is patient.", "إنّ = emphasis (indeed, truly)."],
          ["كَأَنَّ", "[[كَأَنَّ]] [[الجَمَلَ]] سَفِينَةٌ", "It is as if the camel were a ship.", "كأنّ = as if (comparison). The famous image: the camel, ship of the desert."]] },
        { base: ["الامْتِحَانُ قَرِيبٌ", "The exam is near."], baseLabel: "nominal sentence", ops: [["أَنَّ", "عَلِمْتُ [[أَنَّ]] [[الامْتِحَانَ]] قَرِيبٌ", "I learnt that the exam is near.", "أنّ = that; it comes in the middle of a sentence."]] },
        { base: ["الكِتَابُ رَخِيصٌ", "The book is cheap."], baseLabel: "nominal sentence", ops: [["لَعَلَّ", "[[لَعَلَّ]] [[الكِتَابَ]] رَخِيصٌ", "Perhaps the book is cheap.", "لعلّ = perhaps, hopefully (something possible)."], ["لَكِنَّ", "الكِتَابُ قَدِيمٌ، [[لَكِنَّ]] [[وَرَقَهُ]] نَظِيفٌ", "The book is old, but its paper is clean.", "لكنّ = but (corrects an impression)."]] },
        { base: ["الشَّبَابُ عَائِدٌ", "Youth is returning."], baseLabel: "nominal sentence", ops: [["لَيْتَ", "[[لَيْتَ]] [[الشَّبَابَ]] يَعُودُ", "If only youth would return!", "ليت = if only (a wish, often impossible). The line is from a famous old poem."]] }
      ] },
      rule: `<p><span class="ar">إِنَّ وَأَخَوَاتُهَا تَدْخُلُ عَلَى المُبْتَدَإِ وَالخَبَرِ، فَتَنْصِبُ المُبْتَدَأَ وَيُسَمَّى اسْمَهَا، وَتَرْفَعُ الخَبَرَ وَيُسَمَّى خَبَرَهَا.</span></p><p>Inna and its sisters come before the mubtadaʾ and khabar: they put the mubtadaʾ in naṣb (now called their ism) and keep the khabar in rafʿ (now called their khabar).</p>`,
      check: [["Add إنّ to الصِّدْقُ مُفِيدٌ:", ["إِنَّ الصِّدْقَ مُفِيدٌ", "إِنَّ الصِّدْقُ مُفِيدًا", "إِنَّ الصِّدْقَ مُفِيدًا"], 0, "Ism fatḥa, khabar ḍamma.", "إِنَّ الصِّدْقَ مُفِيدٌ"]] },

    { id: "meanings", t: "Six particles, six meanings", ar: "معاني إنّ وأخواتها", pos: "parts of speech", pages: "71–72",
      b: `<table class="g"><tr><th>particle</th><th>meaning</th><th>example</th></tr>
        <tr><td><span class="ar">إِنَّ</span></td><td>indeed (emphasis)</td><td><span class="ar">إِنَّ الهَرَمَ قَدِيمٌ</span></td></tr>
        <tr><td><span class="ar">أَنَّ</span></td><td>that</td><td><span class="ar">يَسُرُّنِي أَنَّ الزَّهْرَةَ نَاضِرَةٌ</span></td></tr>
        <tr><td><span class="ar">كَأَنَّ</span></td><td>as if (likening)</td><td><span class="ar">كَأَنَّ القَمَرَ مِصْبَاحٌ</span></td></tr>
        <tr><td><span class="ar">لَكِنَّ</span></td><td>but (correcting)</td><td><span class="ar">الجَوُّ بَارِدٌ لَكِنَّ الشَّمْسَ مُشْرِقَةٌ</span></td></tr>
        <tr><td><span class="ar">لَيْتَ</span></td><td>if only (wish, hard or impossible)</td><td><span class="ar">لَيْتَ البَلِيدَ مُجْتَهِدٌ</span></td></tr>
        <tr><td><span class="ar">لَعَلَّ</span></td><td>perhaps, hopefully (possible)</td><td><span class="ar">لَعَلَّ النَّجَاحَ قَرِيبٌ</span></td></tr></table>`,
      widget: "sorter",
      wd: { title: "Which feeling?", sub: "Choose the particle that fits each idea.", bins: [["إنّ", "emphasis"], ["كأنّ", "comparison"], ["لكنّ", "but"], ["ليت", "impossible wish"], ["لعلّ", "possible hope"]],
        items: [["Indeed, honesty saves.", 0, "إِنَّ الصِّدْقَ مُنْجٍ"], ["The lake is like a mirror.", 1, "كَأَنَّ البُحَيْرَةَ مِرْآةٌ"], ["The house is small, but the garden is big.", 2, "لَكِنَّ الحَدِيقَةَ كَبِيرَةٌ"], ["If only I were a bird!", 3, "لَيْتَنِي طَائِرٌ"], ["Perhaps the traveller is coming.", 4, "لَعَلَّ المُسَافِرَ قَادِمٌ"], ["Indeed the Nile is long.", 0, "إِنَّ النِّيلَ طَوِيلٌ"], ["If only youth would return!", 3, "لَيْتَ الشَّبَابَ يَعُودُ"], ["Perhaps the weather will be fine.", 4, "لَعَلَّ الجَوَّ جَمِيلٌ"]] },
      tip: `<span class="ar">لَيْتَ</span> vs <span class="ar">لَعَلَّ</span>: <span class="ar">لَيْتَ</span> wishes for what will hardly or never happen (<i>if only I could fly</i>); <span class="ar">لَعَلَّ</span> hopes for something quite possible (<i>perhaps it will rain</i>).`,
      check: [["“Perhaps the rain is near”:", ["لَعَلَّ المَطَرَ قَرِيبٌ", "لَيْتَ المَطَرَ قَرِيبٌ", "لَعَلَّ المَطَرُ قَرِيبٌ"], 0, "Possible → لعلّ; ism manṣūb.", "لَعَلَّ المَطَرَ قَرِيبٌ"]] },

    { id: "inna-anna", t: "إِنَّ or أَنَّ?", ar: "إنّ وأنّ", pos: "spelling", pages: "71",
      b: `<p>Both emphasise, but they sit in different places:</p>
        <ul><li><span class="ar">إِنَّ</span> (kasra under the alif) <b>opens</b> a sentence: <span class="ar">إِنَّ العِلْمَ نُورٌ</span>.</li>
        <li><span class="ar">أَنَّ</span> (fatḥa over the alif) comes <b>inside</b> a sentence, after a verb such as <span class="ar">عَلِمْتُ، عَرَفْتُ، سَمِعْتُ، يَسُرُّنِي</span>, and means <i>that</i>: <span class="ar">عَرَفْتُ أَنَّ العِلْمَ نُورٌ</span>.</li></ul>
        <p>Part 3 (lessons 55 and 57) gives the full rules. For now: start → <span class="ar">إِنَّ</span>; “that” after a verb → <span class="ar">أَنَّ</span>.</p>`,
      warn: `Do not confuse <span class="ar">أَنَّ</span> (that + nominal sentence, ism manṣūb) with <span class="ar">أَنْ</span> (to + present verb, lesson 10): <span class="ar">عَلِمْتُ أَنَّ أَخِي مُسَافِرٌ</span> vs <span class="ar">أُرِيدُ أَنْ أُسَافِرَ</span>.`,
      check: [["سَمِعْتُ ___ المُسَافِرَ قَادِمٌ.", ["أَنَّ", "إِنَّ", "أَنْ"], 0, "“that”, inside the sentence.", "سَمِعْتُ أَنَّ المُسَافِرَ قَادِمٌ"]] },

    { id: "compare", t: "Kāna vs. inna: test yourself", ar: "الموازنة بين كان وإنّ", pos: "case endings",
      b: `<p>The most common mistake is to mix up the two families. Remember: <b>kāna</b> is a <b>verb</b> and acts on the <b>khabar</b>; <b>inna</b> is a <b>particle</b> and acts on the <b>ism</b>.</p>`,
      widget: "transform",
      wd: { title: "Same sentence, two families", sets: [
        { base: ["القَمَرُ مُنِيرٌ", "The moon is bright."], baseLabel: "nominal", ops: [["كان", "كَانَ القَمَرُ [[مُنِيرًا]]", "The moon was bright.", "kāna: khabar manṣūb."], ["إنّ", "إِنَّ [[القَمَرَ]] مُنِيرٌ", "Indeed, the moon is bright.", "inna: ism manṣūb."], ["ليس", "لَيْسَ القَمَرُ [[مُنِيرًا]]", "The moon is not bright.", "ليس is a sister of kāna."], ["ليت", "لَيْتَ [[القَمَرَ]] مُنِيرٌ", "If only the moon were bright!", "ليت is a sister of inna."]] }
      ] },
      check: [["Which is correct?", ["لَعَلَّ الجَوَّ صَحْوٌ", "لَعَلَّ الجَوُّ صَحْوًا"], 0, "Inna family: ism manṣūb, khabar marfūʿ.", false]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">لَعَلَّ الكِتَابَ رَخِيصٌ.</span></p>
        <p><span class="ar">لَعَلَّ: حَرْفُ تَرَجٍّ وَنَصْبٍ.</span> — a particle of hope and naṣb.</p>
        <p><span class="ar">الكِتَابَ: اسْمُ لَعَلَّ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p>
        <p><span class="ar">رَخِيصٌ: خَبَرُ لَعَلَّ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p></div>
        <p>The particle's own description: <span class="ar">إِنَّ / أَنَّ</span> = <span class="ar">حَرْفُ تَوْكِيدٍ وَنَصْبٍ</span>; <span class="ar">كَأَنَّ</span> = <span class="ar">حَرْفُ تَشْبِيهٍ</span>; <span class="ar">لَكِنَّ</span> = <span class="ar">حَرْفُ اسْتِدْرَاكٍ</span>; <span class="ar">لَيْتَ</span> = <span class="ar">حَرْفُ تَمَنٍّ</span>; <span class="ar">لَعَلَّ</span> = <span class="ar">حَرْفُ تَرَجٍّ</span>.</p>`,
      check: [["Parse الهَرَمَ in إِنَّ الهَرَمَ قَدِيمٌ:", ["اسم إنّ منصوب وعلامة نصبه الفتحة", "مفعول به منصوب", "خبر إنّ مرفوع"], 0, ""]] }
  ],

  scenes: [
    { h: "سَفِينَةُ الصَّحْرَاءِ", en: "The ship of the desert", pic: "🐪", lines: [
      ["", "إِنَّ الجَمَلَ حَيَوَانٌ صَبُورٌ.", "Indeed, the camel is a patient animal."],
      ["", "يَعْرِفُ العَرَبُ أَنَّ الجَمَلَ يَصْبِرُ عَلَى العَطَشِ أَيَّامًا.", "The Arabs know that the camel can endure thirst for days."],
      ["", "كَأَنَّ الجَمَلَ سَفِينَةٌ تَسِيرُ فِي بَحْرٍ مِنَ الرِّمَالِ.", "It is as if the camel were a ship sailing on a sea of sand."],
      ["", "الصَّحْرَاءُ وَاسِعَةٌ، لَكِنَّ الجَمَلَ لَا يَضِلُّ الطَّرِيقَ.", "The desert is vast, but the camel does not lose its way."],
      ["", "قَالَ المُسَافِرُ: لَعَلَّ البِئْرَ قَرِيبَةٌ.", "The traveller said: perhaps the well is near."],
      ["", "وَقَالَ صَاحِبُهُ: لَيْتَ المَاءَ كَثِيرٌ فِيهَا!", "And his companion said: if only there were plenty of water in it!"]],
      note: "Each sister appears once. In every case the ism has fatḥa: الجَمَلَ، الجَمَلَ، الجَمَلَ، الجَمَلَ، البِئْرَ، المَاءَ — and the khabar keeps its ḍamma." },
    { h: "قَبْلَ الامْتِحَانِ", en: "Before the exam", pic: "📚", lines: [
      ["مَرْيَمُ", "سَمِعْتُ أَنَّ الامْتِحَانَ قَرِيبٌ.", "I heard that the exam is soon."],
      ["فَاطِمَةُ", "نَعَمْ، إِنَّ الامْتِحَانَ يَوْمَ الخَمِيسِ.", "Yes, the exam is on Thursday."],
      ["مَرْيَمُ", "لَيْتَ الوَقْتَ طَوِيلٌ! لَمْ أُرَاجِعْ دُرُوسِي بَعْدُ.", "If only there were plenty of time! I haven't revised yet."],
      ["فَاطِمَةُ", "لَا تَقْلَقِي؛ الدُّرُوسُ كَثِيرَةٌ، لَكِنَّهَا سَهْلَةٌ.", "Don't worry: the lessons are many, but they're easy."],
      ["مَرْيَمُ", "لَعَلَّكِ تُسَاعِدِينَنِي!", "Perhaps you'll help me!"],
      ["فَاطِمَةُ", "بِكُلِّ سُرُورٍ. كَأَنَّنَا فَرِيقٌ وَاحِدٌ!", "With pleasure. It's as if we were one team!"]],
      note: "With a pronoun, the ism is attached to the particle: لَكِنَّهَا (but they), لَعَلَّكِ (perhaps you), كَأَنَّنَا (as if we)." }
  ],

  vocab: [
    ["إِنَّ", "indeed (emphasis)", "part.", "", "حرف توكيد ونصب", "", "Inna and its sisters"],
    ["أَنَّ", "that", "part.", "", "حرف توكيد ونصب", "", "Inna and its sisters"],
    ["كَأَنَّ", "as if", "part.", "", "حرف تشبيه", "", "Inna and its sisters"],
    ["لَكِنَّ", "but", "part.", "", "حرف استدراك", "", "Inna and its sisters"],
    ["لَيْتَ", "if only", "part.", "", "حرف تمنٍّ", "", "Inna and its sisters"],
    ["لَعَلَّ", "perhaps, hopefully", "part.", "", "حرف ترجٍّ", "", "Inna and its sisters"],
    ["جَمَلٌ", "camel", "n.m", "🐪", "", "جِمَالٌ", "The desert"],
    ["صَحْرَاءُ", "desert", "n.f", "🏜️", "", "صَحَارٍ، صَحَارَى", "The desert"],
    ["بِئْرٌ", "well", "n.f", "🪣", "feminine", "آبَارٌ", "The desert"],
    ["عَطَشٌ", "thirst", "n.m", "🥵", "", "", "The desert"],
    ["هَرَمٌ", "pyramid", "n.m", "🔺", "", "أَهْرَامٌ", "The desert"],
    ["مُسَافِرٌ", "traveller", "n.m", "🧳", "", "مُسَافِرُونَ", "The desert"],
    ["صَاحِبٌ", "companion; owner", "n.m", "🧑‍🤝‍🧑", "", "أَصْحَابٌ", "The desert"],
    ["شَبَابٌ", "youth", "n.m", "🧑", "", "", "Ideas"],
    ["عِلْمٌ", "knowledge, science", "n.m", "🔬", "", "عُلُومٌ", "Ideas"],
    ["نَجَاحٌ", "success", "n.m", "🏆", "", "", "Ideas"],
    ["سُرُورٌ", "pleasure, joy", "n.m", "😊", "", "", "Ideas"],
    ["وَرَقٌ", "paper; leaves", "n.m", "📄", "", "أَوْرَاقٌ", "School"],
    ["فَرِيقٌ", "team", "n.m", "👫", "", "فِرَقٌ", "School"],
    ["صَبُورٌ", "patient", "adj.", "", "", "", "Describing words"],
    ["رَخِيصٌ", "cheap", "adj.", "", "f. رَخِيصَةٌ", "", "Describing words"],
    ["قَرِيبٌ", "near", "adj.", "", "f. قَرِيبَةٌ", "", "Describing words"],
    ["نَاضِرٌ", "fresh, blooming", "adj.", "", "f. نَاضِرَةٌ", "", "Describing words"],
    ["بَلِيدٌ", "dull, slow-witted", "adj.", "", "", "", "Describing words"],
    ["سَهْلٌ", "easy", "adj.", "", "f. سَهْلَةٌ", "", "Describing words"],
    ["قَادِمٌ", "coming, arriving", "adj.", "", "f. قَادِمَةٌ", "", "Describing words"],
    ["صَبَرَ", "to be patient, endure", "v.", "", "يَصْبِرُ", "", "Verbs"],
    ["ضَلَّ", "to lose (the way)", "v.", "", "يَضِلُّ", "", "Verbs"],
    ["رَاجَعَ", "to revise, review", "v.", "", "يُرَاجِعُ", "", "Verbs"],
    ["قَلِقَ", "to worry", "v.", "", "يَقْلَقُ", "", "Verbs"]
  ],

  exercises: [
    { k: "irab", t: "بَيِّنِ الاسْمَ وَالخَبَرَ · Ism or khabar of inna?", cats: ["اسم إنّ (منصوب)", "خبر إنّ (مرفوع)", "الحرف الناسخ"], items: [
      ["لَعَلَّ [النَّجَاحَ] قَرِيبٌ.", "0", ""], ["إِنَّ النَّظَافَةَ [وَاجِبَةٌ].", "1", ""], ["لَيْتَ [البَلِيدَ] مُجْتَهِدٌ.", "0", ""], ["[كَأَنَّ] القَمَرَ مِصْبَاحٌ.", "2", ""], ["وَجَدْتُ أَنَّ العَقْرَبَ [مَيِّتَةٌ].", "1", ""], ["الجَوُّ حَارٌّ لَكِنَّ [النَّسِيمَ] عَلِيلٌ.", "0", ""]] },
    { k: "shakl", t: "اضْبِطْ · Vowel the ism and the khabar", items: [
      "إِنَّ الهَرَم{َ} قَدِيم{ٌ}", "لَعَلَّ المُسَافِر{َ} قَادِم{ٌ}", "كَأَنَّ الكِتَاب{َ} أُسْتَاذ{ٌ}", "لَيْتَ الشَّبَاب{َ} عَائِد{ٌ}", "عَلِمْتُ أَنَّ الامْتِحَان{َ} قَرِيب{ٌ}"] },
    { k: "tr", t: "أَدْخِلِ الحَرْفَ · Add the particle in brackets", en: "Rewrite with the particle and fix the endings. Ḥarakāt optional, but say them.", items: [
      ["المُسَافِرُ قَادِمٌ. (لَعَلَّ)", "لعل المسافر قادم|لَعَلَّ المُسَافِرَ قَادِمٌ"], ["القِمَطْرُ مُرَتَّبٌ. (إِنَّ)", "إن القمطر مرتب|إِنَّ القِمَطْرَ مُرَتَّبٌ"], ["الزَّهْرَةُ نَاضِرَةٌ. (يَسُرُّنِي أَنَّ)", "يسرني أن الزهرة ناضرة|يَسُرُّنِي أَنَّ الزَّهْرَةَ نَاضِرَةٌ"], ["الطِّفْلُ رَجُلٌ. (كَأَنَّ)", "كأن الطفل رجل|كَأَنَّ الطِّفْلَ رَجُلٌ"]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["“If only I had wings!” uses…", ["لَيْتَ", "لَعَلَّ", "كَأَنَّ"], 0, ""], ["إِنَّ ___ صَبُورٌ.", ["الجَمَلَ", "الجَمَلُ", "الجَمَلِ"], 0, ""], ["لَعَلَّ الجَوَّ ___", ["جَمِيلٌ", "جَمِيلًا", "جَمِيلٍ"], 0, ""], ["عَلِمْتُ ___ أَخَاكَ مَرِيضٌ.", ["أَنَّ", "إِنَّ", "أَنْ"], 0, ""], ["Which is a sister of inna?", ["لَكِنَّ", "صَارَ", "لَمْ"], 0, ""]] },
    { k: "sort", t: "كان أم إنّ؟ · Which family?", cats: ["أخوات كان · verbs", "أخوات إنّ · particles"], items: [
      ["أَصْبَحَ", "0", ""], ["لَيْتَ", "1", ""], ["لَيْسَ", "0", ""], ["لَعَلَّ", "1", ""], ["ظَلَّ", "0", ""], ["كَأَنَّ", "1", ""], ["بَاتَ", "0", ""], ["لَكِنَّ", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["Inna makes the khabar manṣūb.", false, "The ism."], ["لَيْتَ expresses a wish.", true, ""], ["أَنَّ usually comes in the middle of a sentence.", true, ""], ["إِنَّ الجَوُّ بَارِدٌ is correct.", false, "إِنَّ الجَوَّ بَارِدٌ."], ["Kāna is a verb; inna is a particle.", true, ""]] }
  ],

  drills: [
    ["Ism of inna is…", ["manṣūb", "marfūʿ"], 0, ""],
    ["Khabar of inna is…", ["marfūʿ", "manṣūb"], 0, ""],
    ["إِنَّ ___ نُورٌ.", ["العِلْمَ", "العِلْمُ", "العِلْمِ"], 0, ""],
    ["كَأَنَّ البُحَيْرَةَ ___", ["مِرْآةٌ", "مِرْآةً"], 0, ""],
    ["Meaning of لَكِنَّ:", ["but", "as if", "perhaps"], 0, ""],
    ["Meaning of كَأَنَّ:", ["as if", "indeed", "if only"], 0, ""],
    ["Possible hope:", ["لَعَلَّ", "لَيْتَ"], 0, ""],
    ["Which family does لَيْسَ belong to?", ["kāna", "inna"], 0, "It's a verb."],
    ["كَانَ الجَوُّ ___ / إِنَّ الجَوَّ ___", ["بَارِدًا / بَارِدٌ", "بَارِدٌ / بَارِدًا"], 0, ""],
    ["Parse صَبُورٌ in إِنَّ الجَمَلَ صَبُورٌ:", ["خبر إنّ مرفوع وعلامة رفعه الضمة", "اسم إنّ منصوب", "نعت"], 0, ""],
    ["سَرَّنِي ___ أَبَاكَ بِخَيْرٍ.", ["أَنَّ", "إِنَّ", "لَيْتَ"], 0, ""],
    ["“The house is small but clean”:", ["البَيْتُ صَغِيرٌ لَكِنَّهُ نَظِيفٌ", "البَيْتُ صَغِيرٌ لَكِنَّ نَظِيفٌ"], 0, "لكنّ needs an ism: the pronoun ـهُ."]
  ],

  comp: [
    ["What can the camel endure for days?", ["thirst", "cold", "hunger"], 0, 0],
    ["What is the camel compared to?", ["a ship", "a mountain", "a horse"], 0, 0],
    ["What does the traveller hope?", ["that the well is near", "that the camel is fast", "that night comes"], 0, 0],
    ["When is the exam?", ["Thursday", "tomorrow", "next month"], 0, 1],
    ["What does Fatima say about the lessons?", ["many but easy", "few and hard", "boring"], 0, 1]
  ],

  cheat: `<h3>إنّ وأخواتها</h3>
    <div class="rule"><span class="ar">إِنَّ وَأَخَوَاتُهَا تَنْصِبُ المُبْتَدَأَ (اسْمَهَا) وَتَرْفَعُ الخَبَرَ (خَبَرَهَا).</span></div>
    <div class="blocks"><div class="blk c4"><span class="ar">لَعَلَّ</span><small>particle</small></div><div class="blk c3"><span class="ar">المَطَرَ</span><small>ism ـَ</small></div><div class="blk c1"><span class="ar">قَرِيبٌ</span><small>khabar ـٌ</small></div></div>
    <p><span class="ar">إِنَّ</span> indeed · <span class="ar">أَنَّ</span> that · <span class="ar">كَأَنَّ</span> as if · <span class="ar">لَكِنَّ</span> but · <span class="ar">لَيْتَ</span> if only · <span class="ar">لَعَلَّ</span> perhaps</p>
    <table class="g"><tr><th></th><th>ism</th><th>khabar</th></tr><tr><td>kāna (verbs)</td><td>ـُ</td><td>ـَ</td></tr><tr><td>inna (particles)</td><td>ـَ</td><td>ـُ</td></tr></table>`,
  mistakes: [
    ["إِنَّ الجَوُّ بَارِدٌ", "إِنَّ الجَوَّ بَارِدٌ", "The ism of inna is manṣūb."],
    ["لَعَلَّ المَطَرَ قَرِيبًا", "لَعَلَّ المَطَرَ قَرِيبٌ", "The khabar of inna stays marfūʿ."],
    ["عَلِمْتُ إِنَّ الامْتِحَانَ قَرِيبٌ", "عَلِمْتُ أَنَّ الامْتِحَانَ قَرِيبٌ", "“that” after a verb → أَنَّ."],
    ["لَيْتَ المَطَرَ يَنْزِلُ غَدًا (hoping it's likely)", "لَعَلَّ المَطَرَ يَنْزِلُ غَدًا", "For a likely hope use لعلّ."]
  ],
  tips: [
    { t: "A family song", b: `Arab pupils chant: <span class="ar">إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ</span> — “they put the first in naṣb and leave the second in rafʿ”. Say it five times; you will never forget it.` },
    { t: "One sentence, six moods", b: `Take <span class="ar">الجَوُّ جَمِيلٌ</span> and put each sister in front, saying the new meaning in English. Then do it with kāna's sisters and feel the endings swap.` }
  ]
});
