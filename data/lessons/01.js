// الدرس ١ — الجملة المفيدة (PDF pp. 11–14)
// Explanations, texts, illustrations and most exercises are original to this course.
COURSE.add({
  n: 1, pages: [11, 14], method: true,
  summary: "What a complete, meaningful sentence (الجملة المفيدة) is: two or more words that together give a full meaning you can stop on. Along the way: words vs. sentences, the two shapes of the Arabic sentence (starting with a noun or with a verb), and the ḥarakāt you will watch in every lesson.",
  objectives: [
    "tell a single word or a fragment from a complete sentence (جملة مفيدة)",
    "build sentences of two words and grow them with more detail",
    "notice whether a sentence starts with a noun or a verb",
    "read the four short vowels ـَ ـُ ـِ ـْ and tanwīn ـٌ ـً ـٍ",
    "answer a question with a full Arabic sentence"
  ],

  lesson: [
    { id: "word", t: "One word is not a sentence", ar: "الكلمة وحدها لا تكفي", pos: "sentence structure", pages: "11",
      b: `<p>Say to a friend <span class="ar">البُسْتَانُ</span> (<i>the garden</i>) and stop. Your friend waits: <i>the garden … what about it?</i> One word on its own names something, but it does not <b>tell</b> anything. Now say <span class="ar">البُسْتَانُ جَمِيلٌ</span> (<i>the garden is beautiful</i>). Your friend nods: the meaning is complete, you can stop there.</p>
        <p>Arabic grammarians call a single word <span class="ar">كَلِمَةٌ</span>, and a group of words that gives a full meaning <span class="ar">جُمْلَةٌ مُفِيدَةٌ</span> — literally <i>a useful sentence</i>, one that “gives benefit” (<span class="ar">فَائِدَةٌ</span>) to the listener. The test is simple: <b>can the speaker stop here, and the listener be satisfied?</b></p>
        <div class="blocks"><div class="blk c1"><span class="ar">البُسْتَانُ</span><small>a word · كلمة</small></div><div class="blk c4"><span class="ar">…؟</span><small>the listener waits</small></div></div>
        <div class="blocks"><div class="blk c1"><span class="ar">البُسْتَانُ</span><small>what we talk about</small></div><div class="blk c2"><span class="ar">جَمِيلٌ</span><small>what we say about it</small></div><div class="blk c3"><span class="ar">✔</span><small>complete · مفيدة</small></div></div>`,
      widget: "meter",
      wd: { items: [
        ["البُسْتَانُ", false, "One word: it names a garden but says nothing about it."],
        ["البُسْتَانُ جَمِيلٌ", true, "Two words, a full meaning: the garden is beautiful."],
        ["الشَّمْسُ طَالِعَةٌ", true, "The sun is rising — a complete statement."],
        ["فِي المَاءِ", false, "“In the water” — who or what is in the water? The meaning hangs."],
        ["يَعِيشُ السَّمَكُ فِي المَاءِ", true, "Fish live in the water — complete."],
        ["قَطَفَ مُحَمَّدٌ", false, "Muhammad picked … picked what? The verb قطف needs to say what was picked."],
        ["قَطَفَ مُحَمَّدٌ زَهْرَةً", true, "Muhammad picked a flower — complete."],
        ["إِذَا جَاءَ الشِّتَاءُ", false, "“When winter comes …” — we wait for the rest: what happens then?"],
        ["الطَّائِرُ يُغَرِّدُ", true, "The bird is singing — complete."],
        ["كِتَابُ الوَلَدِ", false, "“The boy's book” — a phrase, not a statement: what about the boy's book?"],
        ["كِتَابُ الوَلَدِ جَدِيدٌ", true, "The boy's book is new — now it is a sentence."]
      ] },
      check: [
        ["Which one is a جملة مفيدة?", ["الحَدِيقَةُ وَاسِعَةٌ", "الحَدِيقَةُ", "فِي الحَدِيقَةِ"], 0, "Only الحديقةُ واسعةٌ tells you something complete: the garden is spacious."],
        ["“فِي الصَّبَاحِ” (in the morning) is…", ["not a complete sentence", "a complete sentence"], 0, "It tells when, but nothing happens: we wait for the rest.", false]
      ] },

    { id: "two", t: "Two words can be enough", ar: "الجملة من كلمتين أو أكثر", pos: "sentence structure", pages: "11–12",
      b: `<p>The shortest useful sentence in Arabic has <b>two words</b>. Notice that Arabic needs no word for <i>is / are</i> in the present: <span class="ar">البُسْتَانُ جَمِيلٌ</span> is literally <i>the garden — beautiful</i>. The two words lean on each other, and the meaning is complete.</p>
        <p>The two-word sentence comes in two shapes, and you will meet them again and again in this book:</p>
        <table class="g"><tr><th>starts with</th><th>example</th><th>meaning</th></tr>
        <tr><td>a <b>noun</b> (<span class="ar">اسم</span>) — we name a thing, then say something about it</td><td><span class="ar">الشَّمْسُ طَالِعَةٌ</span></td><td>The sun is rising.</td></tr>
        <tr><td>a <b>verb</b> (<span class="ar">فعل</span>) — we say what happened, then who did it</td><td><span class="ar">طَلَعَتِ الشَّمْسُ</span></td><td>The sun rose.</td></tr></table>
        <p>Lessons 7–9 give these two shapes their names (<span class="ar">الجملة الاسمية</span> and <span class="ar">الجملة الفعلية</span>). For now, just notice which word comes first.</p>`,
      ex: [["البُسْتَانُ جَمِيلٌ.", "The garden is beautiful."], ["الشَّمْسُ طَالِعَةٌ.", "The sun is rising."], ["مُحَمَّدٌ زَهْرَةٌ!", "(as a nickname) Muhammad is a flower!", "A playful two-noun sentence: a noun can say something about another noun."], ["جَاءَ الشِّتَاءُ.", "Winter has come."], ["نَامَ الطِّفْلُ.", "The child slept."]],
      widget: "sorter",
      wd: { title: "Noun first or verb first?", sub: "Every one of these is a complete sentence. Sort them by their first word.",
        bins: [["تبدأ باسم", "starts with a noun"], ["تبدأ بفعل", "starts with a verb"]],
        items: [["الجَوُّ صَافٍ", 0, "الجو is a noun (the weather)."], ["نَزَلَ المَطَرُ", 1, "نزل is a verb (came down)."], ["الوَرْدَةُ حَمْرَاءُ", 0, "الوردة (the rose) is a noun."], ["غَرَّدَ الطَّائِرُ", 1, "غرّد (sang) is a verb."], ["النَّهْرُ عَمِيقٌ", 0, "النهر (the river) is a noun."], ["يَلْعَبُ الأَطْفَالُ", 1, "يلعب (plays) is a verb."], ["العِنَبُ لَذِيذٌ", 0, "العنب (grapes) is a noun."], ["سَافَرَ أَبِي", 1, "سافر (travelled) is a verb."]] },
      check: [
        ["“The sea is calm” — which Arabic needs no word for “is”?", ["البَحْرُ هَادِئٌ", "البَحْرُ يَكُونُ هَادِئٌ"], 0, "In the present, Arabic simply puts the two words side by side: البحرُ هادئٌ."],
        ["نَامَ الطِّفْلُ starts with…", ["a verb", "a noun"], 0, "نام (slept) is a verb: it tells what happened.", false]
      ] },

    { id: "grow", t: "Growing a sentence", ar: "الجملة تطول بالتفاصيل", pos: "style", pages: "11–13",
      b: `<p>Once a sentence is complete, you can keep adding words to give more detail: <b>what</b>, <b>where</b>, <b>when</b>, <b>how</b>. The sentence stays a <span class="ar">جملة مفيدة</span>; it just becomes richer. The book's examples go from two words (<span class="ar">البُسْتَانُ جَمِيلٌ</span>) to five (<span class="ar">يَكْثُرُ النَّخِيلُ فِي إِقْلِيمِ مِصْرَ</span>).</p>
        <p>Watch the core stay the same while the details pile up. The new words are highlighted.</p>`,
      widget: "transform",
      wd: { title: "Same core, more detail", sets: [
        { base: ["يَعِيشُ السَّمَكُ", "Fish live."], baseLabel: "core (2 words)", ops: [
          ["+ where?", "يَعِيشُ السَّمَكُ [[فِي المَاءِ]]", "Fish live in the water.", "فِي المَاءِ answers <i>where?</i>"],
          ["+ which water?", "يَعِيشُ السَّمَكُ فِي المَاءِ [[العَذْبِ وَالمَالِحِ]]", "Fish live in fresh and salt water.", "Two describing words (adjectives) are added after الماء."],
          ["+ how many?", "يَعِيشُ [[كَثِيرٌ مِنَ]] السَّمَكِ فِي المَاءِ العَذْبِ وَالمَالِحِ", "Many fish live in fresh and salt water.", "Notice: السمكِ now ends in kasra because it comes after مِنْ. Endings change with the job of the word — the subject of this whole book."]] },
        { base: ["قَطَفَ مُحَمَّدٌ زَهْرَةً", "Muhammad picked a flower."], baseLabel: "core (3 words)", ops: [
          ["+ when?", "قَطَفَ مُحَمَّدٌ زَهْرَةً [[فِي الصَّبَاحِ]]", "Muhammad picked a flower in the morning."],
          ["+ where?", "قَطَفَ مُحَمَّدٌ زَهْرَةً [[مِنَ البُسْتَانِ]] فِي الصَّبَاحِ", "Muhammad picked a flower from the garden in the morning."],
          ["+ what kind?", "قَطَفَ مُحَمَّدٌ زَهْرَةً [[حَمْرَاءَ]] مِنَ البُسْتَانِ فِي الصَّبَاحِ", "Muhammad picked a red flower from the garden in the morning."],
          ["+ for whom?", "قَطَفَ مُحَمَّدٌ زَهْرَةً حَمْرَاءَ مِنَ البُسْتَانِ فِي الصَّبَاحِ [[لِأُمِّهِ]]", "Muhammad picked a red flower from the garden in the morning for his mother."]] }
      ] },
      tip: `When you write, start with the two-word core, then ask yourself <i>where? when? how? why?</i> and add one answer at a time. That is exactly how the book's composition exercises (<span class="ar">تمرين في الإنشاء</span>) are built.`,
      check: [
        ["In يَكْثُرُ النَّخِيلُ فِي إِقْلِيمِ مِصْرَ, which two words already make a complete sentence?", ["يَكْثُرُ النَّخِيلُ", "فِي إِقْلِيمِ", "إِقْلِيمِ مِصْرَ"], 0, "Palm trees are plentiful — the rest tells where."]
      ] },

    { id: "harakat", t: "The short vowels you will watch in every lesson", ar: "الحركات والتنوين", pos: "spelling", pages: "11",
      b: `<p>Look at the book's examples: every letter carries a little mark. These are the <b>ḥarakāt</b> (<span class="ar">الحَرَكَاتُ</span>, “movements”), the short vowels. Ordinary Arabic is written without them, but grammar books print them, because <b>grammar in Arabic is mostly about the mark on the last letter</b>.</p>
        <table class="g"><tr><th>mark</th><th>name</th><th>sound</th><th>on the last letter it usually means…</th></tr>
        <tr><td class="ar endings"><span class="end-u">بُ</span></td><td><span class="ar">ضَمَّة</span> ḍamma</td><td>u</td><td>rafʿ (<span class="ar">رَفْع</span>) — e.g. the doer, the subject</td></tr>
        <tr><td class="ar endings"><span class="end-a">بَ</span></td><td><span class="ar">فَتْحَة</span> fatḥa</td><td>a</td><td>naṣb (<span class="ar">نَصْب</span>) — e.g. the object</td></tr>
        <tr><td class="ar endings"><span class="end-i">بِ</span></td><td><span class="ar">كَسْرَة</span> kasra</td><td>i</td><td>jarr (<span class="ar">جَرّ</span>) — e.g. after a preposition</td></tr>
        <tr><td class="ar endings"><span class="end-o">بْ</span></td><td><span class="ar">سُكُون</span> sukūn</td><td>no vowel</td><td>jazm (<span class="ar">جَزْم</span>) — on some present verbs</td></tr></table>
        <p><b>Tanwīn</b> (<span class="ar">التَّنْوِين</span>) is a doubled mark that adds an <i>-n</i>: <span class="ar">ـٌ</span> -un, <span class="ar">ـً</span> -an, <span class="ar">ـٍ</span> -in. It shows that a noun is <b>indefinite</b> (<i>a</i> garden): <span class="ar">بُسْتَانٌ</span> “a garden” but <span class="ar">البُسْتَانُ</span> “the garden”. With -an, an extra alif is usually written: <span class="ar">زَهْرَةً</span>, but <span class="ar">كِتَابًا</span>.</p>
        <p>The <b>shadda</b> <span class="ar">ـّ</span> doubles a letter: <span class="ar">الشَّمْسُ</span> = ash-shams.</p>`,
      widget: "transform",
      wd: { title: "One word, three endings", sub: "The same noun, مُحَمَّد, in three jobs. Only the last mark changes. This is iʿrāb.", sets: [
        { base: ["جَاءَ [[مُحَمَّدٌ]]", "Muhammad came."], baseLabel: "doer: ـٌ", ops: [
          ["object: ـً", "رَأَيْتُ [[مُحَمَّدًا]]", "I saw Muhammad.", "As the object of رأيت, the name takes fatḥa (tanwīn -an, with an alif)."],
          ["after a preposition: ـٍ", "سَلَّمْتُ عَلَى [[مُحَمَّدٍ]]", "I greeted Muhammad.", "After the preposition على, the name takes kasra (tanwīn -in)."]] }
      ] },
      warn: `Do not worry about <i>why</i> the endings change yet — each lesson of this book explains one reason. In this first lesson just <b>pronounce every ending you see</b>. Reading aloud with endings is the habit that makes the rest easy.`,
      check: [
        ["Which word has tanwīn (-un)?", ["كِتَابٌ", "الكِتَابُ", "كِتَابُ"], 0, "The double ḍamma ـٌ is tanwīn: kitābun, “a book”."],
        ["In الشَّمْسُ the mark ـّ on the shīn is…", ["shadda (the letter is doubled)", "sukūn", "tanwīn"], 0, "ash-shams: the shadda doubles the sh.", false]
      ] },

    { id: "rule", t: "The rule, and answering in full sentences", ar: "القاعدة والإنشاء", pos: "style", pages: "13–14",
      b: `<p>The book's method is to look at examples, discuss them, then state the rule in one short sentence. Here it is in our words:</p>`,
      rule: `<p><span class="ar">الجُمْلَةُ المُفِيدَةُ: كَلَامٌ مُرَكَّبٌ مِنْ كَلِمَتَيْنِ أَوْ أَكْثَرَ، لَهُ مَعْنًى تَامٌّ مُفِيدٌ.</span></p><p>A meaningful sentence is speech made of two or more words that has a complete, useful meaning.</p>`,
      after: `<p>The book then asks pupils to <b>answer questions with a full sentence</b> — not one word. This trains you to build sentences, not just to recognise them. Compare:</p>`,
      ex: [["— أَيْنَ يَعِيشُ السَّمَكُ؟ — فِي المَاءِ.", "Where do fish live? — In the water.", "A one-phrase answer: fine in conversation, but not a sentence."], ["— أَيْنَ يَعِيشُ السَّمَكُ؟ — يَعِيشُ السَّمَكُ فِي المَاءِ.", "Where do fish live? — Fish live in the water.", "The full-sentence answer the book asks for."], ["— مَتَى تَطْلُعُ الشَّمْسُ؟ — تَطْلُعُ الشَّمْسُ فِي الصَّبَاحِ.", "When does the sun rise? — The sun rises in the morning."]],
      tip: `To answer in a full sentence, <b>reuse the words of the question</b>: drop the question word (<span class="ar">أَيْنَ، مَتَى، مَاذَا</span>…) and put your answer in its place.`,
      check: [
        ["Best full-sentence answer to مَاذَا يَأْكُلُ الأَرْنَبُ؟ (What does the rabbit eat?)", ["يَأْكُلُ الأَرْنَبُ الجَزَرَ.", "الجَزَرَ.", "الأَرْنَبُ."], 0, "Reuse the question: يأكل الأرنب + the answer الجزرَ (the carrots)."]
      ] }
  ],

  scenes: [
    { h: "فِي البُسْتَانِ", en: "In the garden", pic: "🌳", lines: [
      ["", "البُسْتَانُ جَمِيلٌ.", "The garden is beautiful."],
      ["", "الشَّمْسُ طَالِعَةٌ، وَالجَوُّ صَافٍ.", "The sun is rising, and the weather is clear."],
      ["", "الأَشْجَارُ عَالِيَةٌ، وَالأَزْهَارُ كَثِيرَةٌ.", "The trees are tall, and the flowers are many."],
      ["", "يُغَرِّدُ الطَّائِرُ عَلَى الشَّجَرَةِ.", "The bird is singing on the tree."],
      ["", "قَطَفَ مُحَمَّدٌ زَهْرَةً حَمْرَاءَ.", "Muhammad picked a red flower."],
      ["", "يَجْرِي المَاءُ فِي النَّهْرِ، وَيَعِيشُ السَّمَكُ فِي المَاءِ.", "Water runs in the river, and fish live in the water."],
      ["", "ثَمَرُ العِنَبِ لَذِيذٌ.", "The fruit of the vine (grapes) is delicious."]],
      note: "Every line is a جملة مفيدة. Some start with a noun (البستانُ، الشمسُ، الأشجارُ), some with a verb (يغرّدُ، قطفَ، يجري)." },
    { h: "سُؤَالٌ وَجَوَابٌ", en: "Question and answer", pic: "🧑‍🏫", lines: [
      ["المُعَلِّمُ", "أَيْنَ يَعِيشُ السَّمَكُ يَا زَيْنَبُ؟", "Where do fish live, Zaynab?"],
      ["زَيْنَبُ", "يَعِيشُ السَّمَكُ فِي المَاءِ.", "Fish live in the water."],
      ["المُعَلِّمُ", "أَحْسَنْتِ. مَاذَا قَطَفَ مُحَمَّدٌ؟", "Well done. What did Muhammad pick?"],
      ["زَيْنَبُ", "قَطَفَ مُحَمَّدٌ زَهْرَةً.", "Muhammad picked a flower."],
      ["المُعَلِّمُ", "كَيْفَ البُسْتَانُ؟", "How is the garden?"],
      ["زَيْنَبُ", "البُسْتَانُ جَمِيلٌ.", "The garden is beautiful."],
      ["المُعَلِّمُ", "مَتَى تَطْلُعُ الشَّمْسُ؟", "When does the sun rise?"],
      ["زَيْنَبُ", "تَطْلُعُ الشَّمْسُ فِي الصَّبَاحِ.", "The sun rises in the morning."]],
      note: "Zaynab answers every question with a full sentence, reusing the teacher's words. Note أَحْسَنْتِ with kasra: the teacher is speaking to a girl." }
  ],

  vocab: [
    ["بُسْتَانٌ", "garden, orchard", "n.m", "🌳", "", "بَسَاتِينُ", "Nature"],
    ["حَدِيقَةٌ", "garden, park", "n.f", "🏞️", "", "حَدَائِقُ", "Nature"],
    ["شَجَرَةٌ", "tree", "n.f", "🌲", "collective: شَجَرٌ", "أَشْجَارٌ", "Nature"],
    ["زَهْرَةٌ", "flower", "n.f", "🌺", "", "أَزْهَارٌ، زُهُورٌ", "Nature"],
    ["وَرْدَةٌ", "rose", "n.f", "🌹", "", "وُرُودٌ", "Nature"],
    ["نَخِيلٌ", "palm trees", "n.m", "🌴", "collective; one palm: نَخْلَةٌ", "", "Nature"],
    ["عِنَبٌ", "grapes", "n.m", "🍇", "collective", "", "Nature"],
    ["ثَمَرٌ", "fruit", "n.m", "🍑", "one fruit: ثَمَرَةٌ", "ثِمَارٌ", "Nature"],
    ["نَهْرٌ", "river", "n.m", "🏞️", "", "أَنْهَارٌ", "Nature"],
    ["مَاءٌ", "water", "n.m", "💧", "", "مِيَاهٌ", "Nature"],
    ["سَمَكٌ", "fish", "n.m", "🐟", "collective; one fish: سَمَكَةٌ", "أَسْمَاكٌ", "Animals"],
    ["طَائِرٌ", "bird", "n.m", "🐦", "", "طُيُورٌ", "Animals"],
    ["أَرْنَبٌ", "rabbit", "n.m", "🐇", "", "أَرَانِبُ", "Animals"],
    ["شَمْسٌ", "sun", "n.f", "☀️", "feminine without ة", "", "Sky"],
    ["جَوٌّ", "weather, air", "n.m", "🌤️", "", "", "Sky"],
    ["صَبَاحٌ", "morning", "n.m", "🌅", "", "", "Sky"],
    ["شِتَاءٌ", "winter", "n.m", "❄️", "", "", "Sky"],
    ["جَمِيلٌ", "beautiful", "adj.", "", "f. جَمِيلَةٌ", "", "Describing words"],
    ["لَذِيذٌ", "delicious", "adj.", "", "f. لَذِيذَةٌ", "", "Describing words"],
    ["طَالِعٌ", "rising (sun, moon)", "adj.", "", "f. طَالِعَةٌ", "", "Describing words"],
    ["صَافٍ", "clear, pure", "adj.", "", "f. صَافِيَةٌ; with al-: الصَّافِي", "", "Describing words"],
    ["كَثِيرٌ", "many, much", "adj.", "", "f. كَثِيرَةٌ", "", "Describing words"],
    ["حَمْرَاءُ", "red (f)", "adj.", "", "m. أَحْمَرُ", "", "Describing words"],
    ["قَطَفَ", "to pick (fruit, flowers)", "v.", "", "present: يَقْطِفُ", "", "Verbs"],
    ["عَاشَ", "to live", "v.", "", "present: يَعِيشُ", "", "Verbs"],
    ["طَلَعَ", "to rise (sun)", "v.", "", "present: يَطْلُعُ", "", "Verbs"],
    ["غَرَّدَ", "to sing, chirp (bird)", "v.", "", "present: يُغَرِّدُ", "", "Verbs"],
    ["كَثُرَ", "to be plentiful", "v.", "", "present: يَكْثُرُ", "", "Verbs"],
    ["جُمْلَةٌ", "sentence", "n.f", "", "grammar term", "جُمَلٌ", "Grammar words"],
    ["كَلِمَةٌ", "word", "n.f", "", "grammar term", "كَلِمَاتٌ", "Grammar words"],
    ["مُفِيدٌ", "meaningful, useful", "adj.", "", "f. مُفِيدَةٌ", "", "Grammar words"],
    ["حَرَكَةٌ", "short vowel (lit. movement)", "n.f", "", "grammar term", "حَرَكَاتٌ", "Grammar words"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Sentence or not?", en: "Is each group of words a complete, meaningful sentence?", cats: ["جملة مفيدة · complete", "ليست جملة مفيدة · incomplete"], items: [
      ["القَمَرُ مُنِيرٌ", "0", "The moon is shining."], ["فِي السَّمَاءِ", "1", "In the sky … what?"], ["نَامَ الطِّفْلُ", "0", "The child slept."], ["الوَلَدُ المُؤَدَّبُ", "1", "The polite boy … what about him?"],
      ["سَافَرَ أَبِي", "0", "My father travelled."], ["قَلَمُ التِّلْمِيذِ", "1", "The pupil's pen … what about it?"], ["البَرْدُ شَدِيدٌ", "0", "The cold is severe."], ["عِنْدَمَا يَطْلُعُ الفَجْرُ", "1", "When dawn breaks … then what?"]] },
    { k: "gap", t: "أَكْمِلْ · Complete each sentence", en: "Choose a word from the bank so that each line becomes a complete sentence. (The words are given with their endings.)", bank: true, items: [
      ["الشَّمْسُ ___ .", "طَالِعَةٌ"], ["يَعِيشُ ___ فِي المَاءِ.", "السَّمَكُ"], ["البُسْتَانُ ___ .", "جَمِيلٌ"], ["___ الطَّائِرُ عَلَى الشَّجَرَةِ.", "غَرَّدَ"], ["قَطَفَ الوَلَدُ ___ .", "زَهْرَةً"], ["العِنَبُ ___ .", "لَذِيذٌ"]] },
    { k: "mcq", t: "اِخْتَرْ · Which word completes the meaning?", items: [
      ["يَجْرِي المَاءُ فِي …", ["النَّهْرِ", "الشَّمْسِ", "الطَّائِرِ"], 0, "Water runs in the river."],
      ["الجَوُّ …", ["صَافٍ", "زَهْرَةً", "يَعِيشُ"], 0, "The weather is clear. A describing word completes a sentence that starts with a noun."],
      ["… النَّخِيلُ فِي مِصْرَ.", ["يَكْثُرُ", "جَمِيلٌ", "فِي"], 0, "Palm trees are plentiful in Egypt: a verb completes the sentence."],
      ["تَطْلُعُ الشَّمْسُ فِي …", ["الصَّبَاحِ", "المَاءِ", "العِنَبِ"], 0, "The sun rises in the morning."],
      ["… الأَرْنَبُ الجَزَرَ.", ["يَأْكُلُ", "لَذِيذٌ", "فِي"], 0, "The rabbit eats carrots."]] },
    { k: "words", t: "رَتِّبْ · Build the sentence", en: "Tap the words in order (right to left) to make a complete sentence.", items: [
      "البُسْتَانُ جَمِيلٌ", "يَعِيشُ السَّمَكُ فِي المَاءِ", "قَطَفَ مُحَمَّدٌ زَهْرَةً", "تَطْلُعُ الشَّمْسُ فِي الصَّبَاحِ", "يُغَرِّدُ الطَّائِرُ عَلَى الشَّجَرَةِ"] },
    { k: "tr", t: "أَجِبْ بِجُمْلَةٍ مُفِيدَةٍ · Answer with a full sentence", en: "Write a full-sentence answer in Arabic, reusing the words of the question. Ḥarakāt are optional.", items: [
      ["أَيْنَ يُغَرِّدُ الطَّائِرُ؟ (on the tree)", "يغرد الطائر على الشجرة|يُغَرِّدُ الطَّائِرُ عَلَى الشَّجَرَةِ"],
      ["مَاذَا قَطَفَ مُحَمَّدٌ؟ (a rose)", "قطف محمد وردة|قَطَفَ مُحَمَّدٌ وَرْدَةً"],
      ["كَيْفَ الجَوُّ؟ (clear)", "الجو صاف|الجَوُّ صَافٍ"],
      ["أَيْنَ يَكْثُرُ النَّخِيلُ؟ (in Egypt)", "يكثر النخيل في مصر|يَكْثُرُ النَّخِيلُ فِي مِصْرَ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["A single word such as الشَّمْسُ is a جملة مفيدة.", false, "One word names a thing but tells nothing about it."],
      ["A complete sentence can have only two words.", true, "e.g. الجَوُّ صَافٍ."],
      ["Arabic needs a word for “is” in a present-tense sentence like “the garden is beautiful”.", false, "No: البستانُ جميلٌ."],
      ["فِي البُسْتَانِ is a complete sentence.", false, "In the garden … what? It is a phrase."],
      ["Tanwīn (ـٌ ـً ـٍ) usually shows that a noun is indefinite.", true, "بستانٌ = a garden; البستانُ = the garden."],
      ["قَطَفَ مُحَمَّدٌ زَهْرَةً starts with a verb.", true, "قطف = picked."]] }
  ],

  drills: [
    ["Which is a complete sentence (جملة مفيدة)?", ["المَطَرُ غَزِيرٌ", "المَطَرُ", "بَعْدَ المَطَرِ"], 0, "The rain is heavy — a full statement."],
    ["How many words at least does a جملة مفيدة need?", ["two", "one", "three"], 0, "Two words that lean on each other: البستانُ جميلٌ."],
    ["“The child slept” — نَامَ الطِّفْلُ starts with…", ["a verb", "a noun", "a particle"], 0, "نام is a verb."],
    ["Complete: الأَزْهَارُ ___ .", ["كَثِيرَةٌ", "فِي", "قَطَفَ"], 0, "The flowers are many."],
    ["Which is NOT a complete sentence?", ["كِتَابُ الوَلَدِ", "الكِتَابُ جَدِيدٌ", "قَرَأَ الوَلَدُ"], 0, "The boy's book … what about it? It is a phrase."],
    ["The mark ـُ is called…", ["ضَمَّة (ḍamma)", "فَتْحَة (fatḥa)", "كَسْرَة (kasra)"], 0, "ḍamma = u."],
    ["The mark ـِ is called…", ["كَسْرَة (kasra)", "سُكُون (sukūn)", "شَدَّة (shadda)"], 0, "kasra = i."],
    ["Which word means “a garden” (indefinite)?", ["بُسْتَانٌ", "البُسْتَانُ"], 0, "Tanwīn ـٌ marks an indefinite noun."],
    ["Best answer to: أَيْنَ يَعِيشُ السَّمَكُ؟", ["يَعِيشُ السَّمَكُ فِي المَاءِ.", "المَاءُ.", "السَّمَكُ يَعِيشُ."], 0, "Reuse the question and put the answer in place of أين."],
    ["In قَطَفَ مُحَمَّدٌ زَهْرَةً حَمْرَاءَ مِنَ البُسْتَانِ, the core sentence is…", ["قَطَفَ مُحَمَّدٌ زَهْرَةً", "مِنَ البُسْتَانِ", "زَهْرَةً حَمْرَاءَ"], 0, "Muhammad picked a flower — the rest adds detail."],
    ["Which mark doubles a letter?", ["الشَّدَّة ـّ", "السُّكُون ـْ", "التَّنْوِين ـٌ"], 0, "Shadda: الشَّمْس = ash-shams."],
    ["“When winter comes” — إِذَا جَاءَ الشِّتَاءُ — is…", ["incomplete: we wait for the rest", "a complete sentence"], 0, "إذا (when/if) makes the listener wait for what happens then."]
  ],

  comp: [
    ["How is the garden in the text?", ["beautiful", "small", "dry"], 0, 0],
    ["What did Muhammad pick?", ["a red flower", "grapes", "a fish"], 0, 0],
    ["Where is the bird singing?", ["on the tree", "in the river", "in the house"], 0, 0],
    ["How does Zaynab answer the teacher?", ["with full sentences", "with single words", "she doesn't answer"], 0, 1],
    ["When does the sun rise, according to Zaynab?", ["in the morning", "in the evening", "in winter"], 0, 1]
  ],

  cheat: `<h3>الجملة المفيدة · The meaningful sentence</h3>
    <div class="rule"><span class="ar">الجُمْلَةُ المُفِيدَةُ: كَلَامٌ مُرَكَّبٌ مِنْ كَلِمَتَيْنِ أَوْ أَكْثَرَ، لَهُ مَعْنًى تَامٌّ مُفِيدٌ.</span><br>Two or more words with a complete meaning you can stop on.</div>
    <div class="cols"><div><h3>Two shapes</h3><ul><li>noun first: <span class="ar">البُسْتَانُ جَمِيلٌ</span></li><li>verb first: <span class="ar">طَلَعَتِ الشَّمْسُ</span></li></ul><p>No word for “is” in the present.</p></div>
    <div><h3>Not sentences</h3><ul><li>one word: <span class="ar">البُسْتَانُ</span></li><li>a phrase: <span class="ar">فِي المَاءِ، كِتَابُ الوَلَدِ</span></li><li>an unfinished clause: <span class="ar">إِذَا جَاءَ الشِّتَاءُ</span></li></ul></div></div>
    <h3>The ḥarakāt</h3><p class="endings ar"><span class="end-u">ـُ ضمة</span> · <span class="end-a">ـَ فتحة</span> · <span class="end-i">ـِ كسرة</span> · <span class="end-o">ـْ سكون</span> · ـّ شدة · ـٌ ـً ـٍ تنوين</p>
    <h3>Style</h3><p>Answer in full sentences: drop the question word and put your answer in its place. Grow a sentence with <i>where? when? how? why?</i></p>`,
  mistakes: [
    ["الشَّمْسُ هِيَ طَالِعَةٌ", "الشَّمْسُ طَالِعَةٌ", "No need for a word for “is”: the two words side by side are enough."],
    ["— أَيْنَ السَّمَكُ؟ — المَاءُ.", "— أَيْنَ يَعِيشُ السَّمَكُ؟ — يَعِيشُ السَّمَكُ فِي المَاءِ.", "In the book's exercises, answer with a full sentence and keep the preposition (في)."],
    ["بُسْتَانٌ جَمِيلٌ (meaning: the garden is beautiful)", "البُسْتَانُ جَمِيلٌ", "Start with a definite noun (with ال) to say something about it. بستانٌ جميلٌ means “a beautiful garden”, a phrase."],
    ["زَهْرَةًا", "زَهْرَةً", "With tāʾ marbūṭa (ة), tanwīn -an takes no extra alif."]
  ],
  tips: [
    { t: "Read every ending aloud", b: `From the very first lesson, pronounce the final vowel of every word: <i>al-bustānu jamīlun</i>, not <i>al-bustān jamīl</i>. In daily speech Arabs often drop endings, but in this course the endings <b>are</b> the grammar, and your ear will learn them before your head does.` },
    { t: "Use the Read tab twice", b: `First with ḥarakāt and translation on. Then switch both off and try to read the same text aloud, putting in the endings yourself. Check by switching ḥarakāt back on.` },
    { t: "Make your own two-word sentences", b: `Look around you and describe: <span class="ar">البَابُ مَفْتُوحٌ</span> (the door is open), <span class="ar">الشَّايُ سَاخِنٌ</span> (the tea is hot), <span class="ar">نَامَ الطِّفْلُ</span> (the baby slept). Ten a day, aloud.` }
  ],
  culture: [
    { t: "Why “useful”?", b: `Old Arab grammarians defined speech (<span class="ar">الكَلَام</span>) as words that give a benefit the speaker can be silent after (<span class="ar">فَائِدَةٌ يَحْسُنُ السُّكُوتُ عَلَيْهَا</span>). The book's <span class="ar">جملة مفيدة</span> keeps that old idea: a sentence is what lets the listener stop waiting.` }
  ]
});
