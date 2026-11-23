// الدرس ٩ — الجملة الاسمية (PDF pp. 44–47)
COURSE.add({
  n: 9, pages: [44, 47], method: true,
  summary: "The nominal sentence (الجملة الاسمية) is any sentence made of a mubtadaʾ and a khabar — it starts with a noun. You will build nominal sentences, compare them with verbal ones, and learn the book's key exercise: turning a verbal sentence into a nominal one (ضاع المفتاحُ ← المفتاحُ ضائعٌ) and back.",
  objectives: [
    "define the nominal sentence: مبتدأ + خبر",
    "tell nominal and verbal sentences apart by their first word",
    "turn a verbal sentence into a nominal one with a describing word (ضائع، مسرع)",
    "turn a nominal sentence into a verbal one",
    "know when to choose each kind in writing"
  ],

  lesson: [
    { id: "def", t: "A sentence that starts with a noun", ar: "الجملة الاسمية", pos: "sentence structure", pages: "44",
      b: `<p>Lesson 7 gave you the mubtadaʾ and the khabar. Together they form the <b>nominal sentence</b> (<span class="ar">الجُمْلَةُ الاسْمِيَّةُ</span>): <span class="ar">البَحْرُ هَائِجٌ</span> (the sea is rough), <span class="ar">الحُجْرَةُ مُظْلِمَةٌ</span> (the room is dark).</p>
        <table class="g"><tr><th></th><th>الجملة الفعلية</th><th>الجملة الاسمية</th></tr>
        <tr><td>first word</td><td>a verb</td><td>a noun</td></tr>
        <tr><td>parts</td><td>فعل + فاعل</td><td>مبتدأ + خبر</td></tr>
        <tr><td>example</td><td><span class="ar">أَشْرَقَتِ الشَّمْسُ</span></td><td><span class="ar">الشَّمْسُ مُشْرِقَةٌ</span></td></tr>
        <tr><td>feel</td><td>an event: something happened</td><td>a state: how things are</td></tr></table>`,
      rule: `<p><span class="ar">الجُمْلَةُ الاسْمِيَّةُ: كُلُّ جُمْلَةٍ تَتَرَكَّبُ مِنَ المُبْتَدَأِ وَالخَبَرِ.</span></p><p>The nominal sentence is any sentence made up of a mubtadaʾ and a khabar.</p>`,
      widget: "sorter",
      wd: { title: "Nominal or verbal?", bins: [["جملة اسمية", "nominal"], ["جملة فعلية", "verbal"]],
        items: [["البَحْرُ هَائِجٌ", 0, ""], ["هَاجَ البَحْرُ", 1, ""], ["المَطَرُ كَثِيرٌ", 0, ""], ["كَثُرَ المَطَرُ", 1, ""], ["الشَّمْسُ مُشْرِقَةٌ", 0, ""], ["يَضِيءُ المِصْبَاحُ", 1, ""], ["المِصْبَاحُ مُضِيءٌ", 0, ""]] },
      check: [["الحُجْرَةُ مُظْلِمَةٌ is…", ["nominal", "verbal"], 0, "Starts with a noun: mubtadaʾ + khabar."]] },

    { id: "v2n", t: "From verbal to nominal", ar: "تحويل الجملة الفعلية إلى اسمية", pos: "sentence structure", pages: "46–47",
      b: `<p>The book asks you to turn verbal sentences into nominal ones. The doer becomes the mubtadaʾ (it moves to the front and keeps its ḍamma), and the verb is replaced by a <b>describing word</b> made from the same root, which becomes the khabar:</p>
        <div class="blocks"><div class="blk c2"><span class="ar">ضَاعَ</span><small>verb</small></div><div class="blk c1"><span class="ar">المِفْتَاحُ</span><small>doer</small></div></div>
        <div class="blocks"><div class="blk c1"><span class="ar">المِفْتَاحُ</span><small>mubtadaʾ</small></div><div class="blk c5"><span class="ar">ضَائِعٌ</span><small>khabar</small></div></div>
        <p>The describing word for “the one who does” is the <b>active participle</b> (<span class="ar">اسم الفاعل</span>, Part 3). For three-letter verbs it has the pattern <span class="ar">فَاعِلٌ</span>: <span class="ar">ضَاعَ ← ضَائِعٌ</span>, <span class="ar">طَلَعَ ← طَالِعٌ</span>. For longer verbs it starts with <span class="ar">مُـ</span>: <span class="ar">أَسْرَعَ ← مُسْرِعٌ</span>, <span class="ar">أَضَاءَ ← مُضِيءٌ</span>.</p>`,
      widget: "transform",
      wd: { title: "Verbal → nominal", sets: [
        { base: ["ضَاعَ المِفْتَاحُ", "The key got lost."], baseLabel: "verbal", ops: [["nominal", "[[المِفْتَاحُ]] [[ضَائِعٌ]]", "The key is lost.", "doer → mubtadaʾ; ضاع → ضائعٌ (khabar)."]] },
        { base: ["أَسْرَعَ القِطَارُ", "The train sped up."], baseLabel: "verbal", ops: [["nominal", "[[القِطَارُ]] [[مُسْرِعٌ]]", "The train is fast-moving.", "أسرع → مُسْرِعٌ."]] },
        { base: ["زَادَ النِّيلُ", "The Nile rose."], baseLabel: "verbal", ops: [["nominal", "[[النِّيلُ]] [[زَائِدٌ]]", "The Nile is high."]] },
        { base: ["تُثْمِرُ الشَّجَرَةُ", "The tree bears fruit."], baseLabel: "verbal", ops: [["nominal", "[[الشَّجَرَةُ]] [[مُثْمِرَةٌ]]", "The tree is fruit-bearing.", "Feminine mubtadaʾ → feminine khabar."]] },
        { base: ["يُغَرِّدُ الطَّائِرُ", "The bird sings."], baseLabel: "verbal", ops: [["nominal (participle)", "[[الطَّائِرُ]] [[مُغَرِّدٌ]]", "The bird is singing."], ["nominal (verb kept)", "[[الطَّائِرُ]] يُغَرِّدُ", "The bird — it sings.", "Another way: put the doer first and keep the verb. The khabar is now the verb with its hidden doer — Part 3 (lesson 53) studies this."]] }
      ] },
      check: [["Nominal form of يَضِيءُ المِصْبَاحُ?", ["المِصْبَاحُ مُضِيءٌ", "مِصْبَاحٌ مُضِيءٌ", "أَضَاءَ المِصْبَاحُ"], 0, "Definite mubtadaʾ + participle khabar."]] },

    { id: "n2v", t: "From nominal to verbal", ar: "تحويل الجملة الاسمية إلى فعلية", pos: "sentence structure", pages: "46",
      b: `<p>The reverse: pick the verb that matches the khabar, put it first, and make the mubtadaʾ its doer. Watch the gender of the verb.</p>`,
      widget: "transform",
      wd: { title: "Nominal → verbal", sets: [
        { base: ["البَحْرُ هَائِجٌ", "The sea is rough."], baseLabel: "nominal", ops: [["verbal", "[[هَاجَ]] البَحْرُ", "The sea grew rough."]] },
        { base: ["الشَّمْسُ مُشْرِقَةٌ", "The sun is shining."], baseLabel: "nominal", ops: [["verbal", "[[أَشْرَقَتِ]] الشَّمْسُ", "The sun shone.", "Feminine doer → ـتْ."]] },
        { base: ["المَطَرُ كَثِيرٌ", "The rain is plentiful."], baseLabel: "nominal", ops: [["verbal", "[[كَثُرَ]] المَطَرُ", "The rain became plentiful."]] },
        { base: ["الحُجْرَةُ مُظْلِمَةٌ", "The room is dark."], baseLabel: "nominal", ops: [["verbal", "[[أَظْلَمَتِ]] الحُجْرَةُ", "The room became dark."]] }
      ] },
      check: [["Verbal form of الوَرْدَةُ ذَابِلَةٌ?", ["ذَبُلَتِ الوَرْدَةُ", "ذَبُلَ الوَرْدَةُ", "الوَرْدَةُ ذَبُلَتْ"], 0, "Verb first, feminine."]] },

    { id: "choose", t: "Which one should I use?", ar: "متى نختار كلًّا منهما؟", pos: "style",
      b: `<p>Both are correct Arabic, but they feel different:</p>
        <ul><li>A <b>verbal sentence</b> tells of an <b>event</b>, a change: <span class="ar">أَظْلَمَتِ الحُجْرَةُ</span> — the room went dark (someone switched the light off?).</li>
        <li>A <b>nominal sentence</b> describes a <b>state</b>, how things are: <span class="ar">الحُجْرَةُ مُظْلِمَةٌ</span> — the room is dark.</li></ul>
        <p>That is why stories use mostly verbal sentences, and descriptions (of a place, a person, the weather) use mostly nominal ones. Good writing mixes them: an event, then a picture of the result.</p>`,
      ex: [["هَبَّتِ الرِّيحُ، فَالبَحْرُ هَائِجٌ وَالسَّمَاءُ مُظْلِمَةٌ.", "The wind blew, so the sea is rough and the sky dark.", "event (verbal) → states (nominal)"]],
      check: [["To describe a quiet village, you would mostly use…", ["nominal sentences", "verbal sentences"], 0, "Descriptions of states favour nominal sentences.", false]] }
  ],

  scenes: [
    { h: "عَلَى شَاطِئِ البَحْرِ", en: "At the seashore", pic: "🏖️", lines: [
      ["", "الجَوُّ جَمِيلٌ، وَالسَّمَاءُ صَافِيَةٌ.", "The weather is lovely and the sky is clear."],
      ["", "البَحْرُ هَادِئٌ، وَالمَاءُ دَافِئٌ.", "The sea is calm and the water is warm."],
      ["", "الرِّمَالُ نَاعِمَةٌ، وَالأَطْفَالُ سُعَدَاءُ.", "The sand is soft and the children are happy."],
      ["", "فَجْأَةً هَبَّتِ الرِّيحُ، وَارْتَفَعَتِ الأَمْوَاجُ.", "Suddenly the wind blew and the waves rose."],
      ["", "الآنَ البَحْرُ هَائِجٌ، وَالسَّمَاءُ مُظْلِمَةٌ.", "Now the sea is rough and the sky is dark."],
      ["", "رَجَعَتِ الأُسْرَةُ إِلَى البَيْتِ.", "The family went back home."]],
      note: "The first three lines describe (nominal), the fourth tells an event (verbal), the fifth describes the new state (nominal), the last tells an event again." },
    { h: "أَيْنَ المِفْتَاحُ؟", en: "Where is the key?", pic: "🔑", lines: [
      ["الأَبُ", "ضَاعَ المِفْتَاحُ!", "The key's got lost!"],
      ["سُعَادُ", "المِفْتَاحُ ضَائِعٌ؟ أَيْنَ وَضَعْتَهُ يَا أَبِي؟", "The key is lost? Where did you put it, father?"],
      ["الأَبُ", "وَضَعْتُهُ عَلَى المَكْتَبِ.", "I put it on the desk."],
      ["سُعَادُ", "المَكْتَبُ نَظِيفٌ، لَا شَيْءَ عَلَيْهِ.", "The desk is tidy; there's nothing on it."],
      ["الأَبُ", "وَجَدْتُهُ! المِفْتَاحُ فِي جَيْبِي!", "I've found it! The key is in my pocket!"],
      ["سُعَادُ", "الحَمْدُ لِلَّهِ!", "Thank God!"]],
      note: "Father announces an event: ضاع المفتاحُ (verbal). Suad repeats it as a state: المفتاحُ ضائعٌ (nominal). In المفتاحُ في جيبي the khabar is a phrase (في جيبي) — Part 3, lesson 53." }
  ],

  vocab: [
    ["جُمْلَةٌ اسْمِيَّةٌ", "nominal sentence", "n.f", "", "grammar term", "", "Grammar words"],
    ["مِفْتَاحٌ", "key", "n.m", "🔑", "", "مَفَاتِيحُ", "Things"],
    ["مِصْبَاحٌ", "lamp", "n.m", "🪔", "", "مَصَابِيحُ", "Things"],
    ["مَكْتَبٌ", "desk; office", "n.m", "🗄️", "", "مَكَاتِبُ", "Things"],
    ["جَيْبٌ", "pocket", "n.m", "👖", "", "جُيُوبٌ", "Things"],
    ["النِّيلُ", "the Nile", "n.m", "🏞️", "", "", "Places"],
    ["رَمْلٌ", "sand", "n.m", "🏝️", "", "رِمَالٌ", "Places"],
    ["مَوْجٌ", "waves", "n.m", "🌊", "one wave: مَوْجَةٌ", "أَمْوَاجٌ", "Places"],
    ["أُسْرَةٌ", "family", "n.f", "👨‍👩‍👧", "", "أُسَرٌ", "People"],
    ["هَائِجٌ", "rough, stormy", "adj.", "", "f. هَائِجَةٌ · verb هَاجَ", "", "Describing words"],
    ["هَادِئٌ", "calm", "adj.", "", "f. هَادِئَةٌ · verb هَدَأَ", "", "Describing words"],
    ["مُظْلِمٌ", "dark", "adj.", "", "f. مُظْلِمَةٌ · verb أَظْلَمَ", "", "Describing words"],
    ["مُشْرِقٌ", "shining", "adj.", "", "f. مُشْرِقَةٌ · verb أَشْرَقَ", "", "Describing words"],
    ["ضَائِعٌ", "lost", "adj.", "", "f. ضَائِعَةٌ · verb ضَاعَ", "", "Describing words"],
    ["مُسْرِعٌ", "fast, hurrying", "adj.", "", "f. مُسْرِعَةٌ · verb أَسْرَعَ", "", "Describing words"],
    ["زَائِدٌ", "increased, high", "adj.", "", "f. زَائِدَةٌ · verb زَادَ", "", "Describing words"],
    ["ذَابِلٌ", "withered", "adj.", "", "f. ذَابِلَةٌ · verb ذَبُلَ", "", "Describing words"],
    ["دَافِئٌ", "warm", "adj.", "", "f. دَافِئَةٌ", "", "Describing words"],
    ["نَاعِمٌ", "soft, smooth", "adj.", "", "f. نَاعِمَةٌ", "", "Describing words"],
    ["سَعِيدٌ", "happy", "adj.", "", "f. سَعِيدَةٌ", "سُعَدَاءُ", "Describing words"],
    ["هَاجَ", "to become rough", "v.", "", "يَهِيجُ", "", "Verbs"],
    ["أَشْرَقَ", "to shine, rise (sun)", "v.", "", "يُشْرِقُ", "", "Verbs"],
    ["أَضَاءَ", "to light up", "v.", "", "يُضِيءُ", "", "Verbs"],
    ["زَادَ", "to increase, rise", "v.", "", "يَزِيدُ", "", "Verbs"],
    ["أَثْمَرَ", "to bear fruit", "v.", "", "يُثْمِرُ", "", "Verbs"],
    ["اِرْتَفَعَ", "to rise", "v.", "", "يَرْتَفِعُ", "", "Verbs"],
    ["وَضَعَ", "to put", "v.", "", "يَضَعُ", "", "Verbs"],
    ["وَجَدَ", "to find", "v.", "", "يَجِدُ", "", "Verbs"],
    ["فَجْأَةً", "suddenly", "adv.", "", "", "", "Verbs"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Nominal or verbal?", cats: ["اسمية", "فعلية"], items: [
      ["القِطَارُ مُسْرِعٌ", "0", ""], ["أَسْرَعَ القِطَارُ", "1", ""], ["النِّيلُ زَائِدٌ", "0", ""], ["يُضِيءُ المِصْبَاحُ", "1", ""], ["الأَطْفَالُ سُعَدَاءُ", "0", ""], ["رَجَعَتِ الأُسْرَةُ", "1", ""]] },
    { k: "tr", t: "حَوِّلْ إِلَى جُمْلَةٍ اسْمِيَّةٍ · Make it nominal", en: "Rewrite as mubtadaʾ + khabar (use the describing word in brackets). Ḥarakāt optional.", items: [
      ["ضَاعَ المِفْتَاحُ. (ضَائِع)", "المفتاح ضائع|المِفْتَاحُ ضَائِعٌ"], ["أَسْرَعَ القِطَارُ. (مُسْرِع)", "القطار مسرع|القِطَارُ مُسْرِعٌ"], ["يُضِيءُ المِصْبَاحُ. (مُضِيء)", "المصباح مضيء|المِصْبَاحُ مُضِيءٌ"], ["تُثْمِرُ الشَّجَرَةُ. (مُثْمِر)", "الشجرة مثمرة|الشَّجَرَةُ مُثْمِرَةٌ"], ["هَاجَ البَحْرُ. (هَائِج)", "البحر هائج|البَحْرُ هَائِجٌ"]] },
    { k: "tr", t: "حَوِّلْ إِلَى جُمْلَةٍ فِعْلِيَّةٍ · Make it verbal", en: "Rewrite with the verb first (past). Ḥarakāt optional.", items: [
      ["الشَّمْسُ مُشْرِقَةٌ. (أَشْرَقَ)", "أشرقت الشمس|أَشْرَقَتِ الشَّمْسُ"], ["البَحْرُ هَادِئٌ. (هَدَأَ)", "هدأ البحر|هَدَأَ البَحْرُ"], ["الوَرْدَةُ ذَابِلَةٌ. (ذَبُلَ)", "ذبلت الوردة|ذَبُلَتِ الوَرْدَةُ"], ["المَطَرُ كَثِيرٌ. (كَثُرَ)", "كثر المطر|كَثُرَ المَطَرُ"]] },
    { k: "shakl", t: "اضْبِطْ · Vowel the endings", items: [
      "الحُجْرَة{ُ} مُظْلِمَة{ٌ}", "أَظْلَمَتِ الحُجْرَة{ُ}", "النِّيل{ُ} زَائِد{ٌ}", "زَادَ النِّيل{ُ}"] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["الجملة الاسمية = …", ["مبتدأ + خبر", "فعل + فاعل"], 0, ""], ["Nominal form of ذَبُلَتِ الوَرْدَةُ:", ["الوَرْدَةُ ذَابِلَةٌ", "الوَرْدَةُ ذَابِلٌ", "وَرْدَةٌ ذَابِلَةٌ"], 0, ""], ["Best for describing a state:", ["المَدِينَةُ هَادِئَةٌ", "هَدَأَتِ المَدِينَةُ"], 0, ""], ["Best for telling an event:", ["هَبَّتِ الرِّيحُ فَجْأَةً", "الرِّيحُ شَدِيدَةٌ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["A nominal sentence starts with a noun.", true, ""], ["When a verbal sentence becomes nominal, the doer becomes the mubtadaʾ.", true, ""], ["The khabar of المِفْتَاحُ ضَائِعٌ is manṣūb.", false, "It is marfūʿ."], ["الطَّائِرُ يُغَرِّدُ is a nominal sentence.", true, "It starts with a noun."]] }
  ],

  drills: [
    ["Which is nominal?", ["النِّيلُ زَائِدٌ", "زَادَ النِّيلُ"], 0, ""],
    ["Nominal form of أَسْرَعَ القِطَارُ:", ["القِطَارُ مُسْرِعٌ", "القِطَارُ أَسْرَعَ", "قِطَارٌ مُسْرِعٌ"], 0, ""],
    ["Verbal form of السَّمَاءُ مُظْلِمَةٌ:", ["أَظْلَمَتِ السَّمَاءُ", "أَظْلَمَ السَّمَاءُ"], 0, ""],
    ["Participle (فاعل pattern) of طَلَعَ:", ["طَالِعٌ", "مُطْلِعٌ", "طُلُوعٌ"], 0, ""],
    ["Participle of أَضَاءَ:", ["مُضِيءٌ", "ضَائِءٌ", "ضَوْءٌ"], 0, "Longer verbs: مُـ."],
    ["In المِفْتَاحُ ضَائِعٌ, ضَائِعٌ is…", ["خبر مرفوع", "فعل ماضٍ", "مفعول به"], 0, ""],
    ["The verbal sentence usually tells…", ["an event", "a state"], 0, ""],
    ["Correct: الأَمْوَاجُ ___", ["عَالِيَةٌ", "عَالٍ", "عَالِيَةً"], 0, "Plural of things → feminine singular."],
    ["Which keeps a verb but is still nominal?", ["الطَّائِرُ يُغَرِّدُ", "يُغَرِّدُ الطَّائِرُ"], 0, "It starts with a noun."],
    ["Nominal form of تُثْمِرُ الأَشْجَارُ:", ["الأَشْجَارُ مُثْمِرَةٌ", "الأَشْجَارُ مُثْمِرٌ"], 0, "Plural of things → feminine singular."]
  ],

  comp: [
    ["How was the sea at first?", ["calm", "rough", "dark"], 0, 0],
    ["What happened suddenly?", ["the wind blew and the waves rose", "the sun set", "the children swam"], 0, 0],
    ["What did the family do?", ["went back home", "stayed on the beach", "swam"], 0, 0],
    ["Where did father say he had put the key?", ["on the desk", "in the car", "under the bed"], 0, 1],
    ["Where was the key?", ["in his pocket", "on the desk", "in the garden"], 0, 1]
  ],

  cheat: `<h3>الجملة الاسمية · The nominal sentence</h3>
    <div class="rule"><span class="ar">الجُمْلَةُ الاسْمِيَّةُ: كُلُّ جُمْلَةٍ تَتَرَكَّبُ مِنَ المُبْتَدَأِ وَالخَبَرِ.</span></div>
    <table class="g"><tr><th>verbal</th><th>→</th><th>nominal</th></tr>
    <tr><td><span class="ar">ضَاعَ المِفْتَاحُ</span></td><td>→</td><td><span class="ar">المِفْتَاحُ ضَائِعٌ</span></td></tr>
    <tr><td><span class="ar">أَسْرَعَ القِطَارُ</span></td><td>→</td><td><span class="ar">القِطَارُ مُسْرِعٌ</span></td></tr>
    <tr><td><span class="ar">أَشْرَقَتِ الشَّمْسُ</span></td><td>←</td><td><span class="ar">الشَّمْسُ مُشْرِقَةٌ</span></td></tr></table>
    <p>Participle: <span class="ar">فَاعِلٌ</span> for 3-letter verbs, <span class="ar">مُـ…ـِـ…</span> for longer ones. Verbal = event; nominal = state.</p>`,
  mistakes: [
    ["المِفْتَاحُ ضَائِعًا", "المِفْتَاحُ ضَائِعٌ", "The khabar is marfūʿ."],
    ["الشَّجَرَةُ مُثْمِرٌ", "الشَّجَرَةُ مُثْمِرَةٌ", "Agreement in gender."],
    ["أَظْلَمَ الحُجْرَةُ", "أَظْلَمَتِ الحُجْرَةُ", "Verb first with a feminine doer takes ـتْ."]
  ],
  tips: [
    { t: "Two versions of every sentence", b: `For each verbal sentence you read in the scenes, say its nominal version aloud, and vice versa. You are practising roots and participles at the same time.` },
    { t: "Describe, then narrate", b: `Write a short paragraph: three nominal sentences describing a place, one verbal sentence for an event, then two nominal sentences for the new state — just like the seashore text.` }
  ]
});
