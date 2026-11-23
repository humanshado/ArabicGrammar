// الدرس ٨ — الجملة الفعلية (PDF pp. 41–43)
COURSE.add({
  n: 8, pages: [41, 43], method: true,
  summary: "The verbal sentence (الجملة الفعلية) is any sentence made of a verb and its doer — it starts with a verb. You will build verbal sentences in the past, present and command, add objects and details, and practise the book's composition tasks: giving a verb a doer, a doer a verb, and describing a scene in verbal sentences.",
  objectives: [
    "define the verbal sentence: فعل + فاعل",
    "build verbal sentences with past, present and command verbs",
    "add an object and details (where, when) in the right order",
    "describe a picture or a scene in verbal sentences"
  ],

  lesson: [
    { id: "def", t: "A sentence that starts with a verb", ar: "الجملة الفعلية", pos: "sentence structure", pages: "41",
      b: `<p>You now know the verb (lesson 3) and its doer (lesson 4). Put them together and you have the smallest <b>verbal sentence</b> (<span class="ar">الجُمْلَةُ الفِعْلِيَّةُ</span>): <span class="ar">ظَهَرَ القَمَرُ</span> (the moon appeared), <span class="ar">يَنْزِلُ المَطَرُ</span> (the rain falls).</p>
        <div class="blocks"><div class="blk c2"><span class="ar">ظَهَرَ</span><small>فعل</small></div><div class="blk c1"><span class="ar">القَمَرُ</span><small>فاعل</small></div><div class="blk c3"><span class="ar">= جملة فعلية</span><small>verbal sentence</small></div></div>
        <p>Everything else — an object, a place, a time — is an <b>addition</b>. The sentence is called verbal because its <b>first word is a verb</b>.</p>`,
      widget: "sorter",
      wd: { title: "Verbal sentence or not?", sub: "Sort each sentence by its first word.", bins: [["جملة فعلية", "verbal sentence"], ["ليست فعلية", "not verbal"]],
        items: [["سَطَعَتِ الشَّمْسُ", 0, "starts with a verb"], ["الشَّمْسُ سَاطِعَةٌ", 1, "starts with a noun"], ["يَهُبُّ الهَوَاءُ", 0, ""], ["اِشْتَدَّ البَرْدُ", 0, ""], ["البَرْدُ شَدِيدٌ", 1, ""], ["نَضِجَ العِنَبُ", 0, ""], ["العُصْفُورُ يُغَرِّدُ", 1, "Starts with a noun — even though a verb follows (Part 3)."], ["اِحْفَظْ دَرْسَكَ", 0, "A command: its doer “you” is inside the verb."]] },
      rule: `<p><span class="ar">الجُمْلَةُ الفِعْلِيَّةُ: كُلُّ جُمْلَةٍ تَتَرَكَّبُ مِنَ الفِعْلِ وَالفَاعِلِ.</span></p><p>The verbal sentence is any sentence made up of a verb and a doer.</p>`,
      check: [["Is العُصْفُورُ يُغَرِّدُ a verbal sentence?", ["no — it starts with a noun", "yes — it has a verb"], 0, "The first word decides: it is nominal (lesson 9).", false]] },

    { id: "build", t: "Building verbal sentences", ar: "تكوين الجمل الفعلية", pos: "sentence structure", pages: "42",
      b: `<p>Choose a verb, a doer and (if the verb needs one) an object. Change the time and watch the verb change form while the rest of the sentence stays put.</p>`,
      widget: "builder",
      wd: { title: "Sentence workshop", slots: [
        { label: "time", opts: [["مَاضٍ", "past"], ["مُضَارِعٌ", "present"]] },
        { label: "doer · الفاعل", opts: [["الفَلَّاحُ", "the farmer", "m"], ["الفَتَاةُ", "the girl", "f"], ["الطُّلَّابُ", "the students", "m"]] },
        { label: "verb + object", opts: [["زَرَعَ القُطْنَ", "plant cotton", "زَرَعَ", "يَزْرَعُ", "planted", "plant", "القُطْنَ"], ["قَرَأَ القِصَّةَ", "read the story", "قَرَأَ", "يَقْرَأُ", "read", "read", "القِصَّةَ"], ["حَمَلَ السَّلَّةَ", "carry the basket", "حَمَلَ", "يَحْمِلُ", "carried", "carry", "السَّلَّةَ", "carries"], ["نَامَ", "sleep (no object)", "نَامَ", "يَنَامُ", "slept", "sleep", ""]] },
        { label: "detail", opts: [["", "none"], ["فِي الصَّبَاحِ", "in the morning"], ["بِسُرْعَةٍ", "quickly"]] }
      ], make: (s) => {
        const past = s[0][1] === "past", d = s[1], v = s[2], f = d[2] === "f";
        let verb = past ? v[2] + (f ? "[[تِ]]" : "") : (f ? "[[تَ]]" : "[[يَ]]") + v[3].slice(2);
        const ar = [verb, d[0], v[6], s[3][0]].filter(Boolean).join(" ");
        const enV = past ? v[4] : (d[1] === "the students" ? v[5] : (v[7] || v[5] + "s"));
        return { ar, en: (d[1][0].toUpperCase() + d[1].slice(1)) + " " + enV + (v[6] ? " " + v[1].split(" ").slice(1).join(" ") : "") + (s[3][1] !== "none" ? " " + s[3][1] : "") + ".", note: "Order: verb (" + (past ? "past" : "present") + ") → doer (ḍamma)" + (v[6] ? " → object (fatḥa)" : "") + (s[3][0] ? " → detail" : "") + "." + (f ? " Feminine doer: the verb shows it." : "") };
      } },
      tip: `The book's composition drills: <b>(1)</b> give each verb a doer: <span class="ar">يَهُبُّ ___</span> → <span class="ar">يَهُبُّ الهَوَاءُ</span>; <b>(2)</b> give each doer a verb: <span class="ar">___ العُصْفُورُ</span> → <span class="ar">طَارَ العُصْفُورُ</span>. Choose words that fit each other in meaning.`,
      check: [["Give a verb to المَطَرُ:", ["نَزَلَ المَطَرُ", "المَطَرُ غَزِيرٌ", "مَطَرٌ"], 0, "A verbal sentence: verb first."]] },

    { id: "command", t: "Commands are verbal sentences too", ar: "جملة الأمر", pos: "sentence structure",
      b: `<p><span class="ar">اِحْفَظْ دَرْسَكَ</span> (learn your lesson) has no visible doer. The doer is <b>you</b>, hidden inside the command verb — Part 2 calls it <span class="ar">ضمير مستتر</span>. So every command is a complete verbal sentence on its own: <span class="ar">اِجْلِسْ!</span> (sit!).</p>
        <p>Likewise, past verbs with <span class="ar">ـتُ</span> carry their doer: <span class="ar">نَجَحْتُ</span> (I succeeded) is a whole sentence of one written word.</p>`,
      ex: [["اِجْلِسْ.", "Sit down.", "verb + hidden doer “you”"], ["نَجَحْتُ.", "I succeeded.", "verb + attached doer ـتُ"], ["أَقْرَأُ القِصَّةَ.", "I read the story.", "verb (أَ = I) + object"]],
      check: [["How many words make the sentence نَجَحْتُ?", ["a verb and its attached doer", "one noun"], 0, "ـتُ is the doer.", false]] },

    { id: "style", t: "Style: verbal sentences tell a story", ar: "الإنشاء بالجمل الفعلية", pos: "style", pages: "43",
      b: `<p>Arabic narrative prefers verbal sentences: each one moves the story forward with an action. Join them with <span class="ar">وَ</span> (and), <span class="ar">فَـ</span> (and so, then at once) and <span class="ar">ثُمَّ</span> (then, after a while):</p>`,
      ex: [["اسْتَيْقَظَ الوَلَدُ، فَغَسَلَ وَجْهَهُ، ثُمَّ لَبِسَ ثِيَابَهُ.", "The boy woke up, washed his face straight away, then got dressed."], ["أَظْلَمَتِ السَّمَاءُ، وَهَبَّتِ الرِّيحُ، وَنَزَلَ المَطَرُ.", "The sky darkened, the wind blew, and the rain fell."]],
      tip: `When describing a picture (the book's <span class="ar">تمرين في الإنشاء</span>), list what each person or thing is doing with a present verb: <span class="ar">يَجْرِي الوَلَدُ، تَلْعَبُ البِنْتُ، يَنْبَحُ الكَلْبُ…</span>`,
      check: [["Which joins two actions that follow at once?", ["فَـ", "ثُمَّ"], 0, "فَـ = and immediately; ثُمَّ = and later.", false]] }
  ],

  scenes: [
    { h: "يَوْمٌ مُمْطِرٌ", en: "A rainy day", pic: "🌧️", lines: [
      ["", "أَظْلَمَتِ السَّمَاءُ، وَتَجَمَّعَ السَّحَابُ.", "The sky darkened and the clouds gathered."],
      ["", "هَبَّتِ الرِّيحُ، وَنَزَلَ المَطَرُ غَزِيرًا.", "The wind blew and the rain came down heavily."],
      ["", "أَسْرَعَ النَّاسُ إِلَى بُيُوتِهِمْ.", "People hurried to their homes."],
      ["", "أَغْلَقَتِ الأُمُّ النَّوَافِذَ.", "Mother closed the windows."],
      ["", "جَلَسَ الأَطْفَالُ حَوْلَ المِدْفَأَةِ.", "The children sat round the heater."],
      ["", "ثُمَّ سَكَنَتِ الرِّيحُ، وَظَهَرَ القَمَرُ.", "Then the wind calmed down and the moon appeared."]],
      note: "Every sentence is verbal: it starts with a verb followed by its doer. The story moves forward one action at a time." },
    { h: "صِفِ الصُّورَةَ", en: "Describe the picture", pic: "🖼️", lines: [
      ["المُعَلِّمَةُ", "اُنْظُرُوا إِلَى الصُّورَةِ. مَاذَا يَفْعَلُ الوَلَدُ؟", "Look at the picture. What is the boy doing?"],
      ["لَيْلَى", "يَجْرِي الوَلَدُ وَرَاءَ الكُرَةِ.", "The boy is running after the ball."],
      ["المُعَلِّمَةُ", "وَالبِنْتُ؟", "And the girl?"],
      ["لَيْلَى", "تَسْقِي البِنْتُ الأَزْهَارَ.", "The girl is watering the flowers."],
      ["المُعَلِّمَةُ", "وَالكَلْبُ؟", "And the dog?"],
      ["لَيْلَى", "يَنَامُ الكَلْبُ تَحْتَ الشَّجَرَةِ.", "The dog is sleeping under the tree."]],
      note: "Layla describes the picture with present verbal sentences: verb + doer (+ object or place)." }
  ],

  vocab: [
    ["جُمْلَةٌ فِعْلِيَّةٌ", "verbal sentence", "n.f", "", "grammar term", "", "Grammar words"],
    ["سَمَاءٌ", "sky", "n.f", "🌌", "", "سَمَاوَاتٌ", "Weather"],
    ["سَحَابٌ", "clouds", "n.m", "☁️", "one cloud: سَحَابَةٌ", "سُحُبٌ", "Weather"],
    ["رِيحٌ", "wind", "n.f", "💨", "feminine", "رِيَاحٌ", "Weather"],
    ["مَطَرٌ", "rain", "n.m", "🌧️", "", "أَمْطَارٌ", "Weather"],
    ["قَمَرٌ", "moon", "n.m", "🌕", "", "أَقْمَارٌ", "Weather"],
    ["بَرْدٌ", "cold", "n.m", "🥶", "", "", "Weather"],
    ["مِدْفَأَةٌ", "heater, stove", "n.f", "🔥", "", "مَدَافِئُ", "Home"],
    ["سَلَّةٌ", "basket", "n.f", "🧺", "", "سِلَالٌ", "Home"],
    ["صُورَةٌ", "picture", "n.f", "🖼️", "", "صُوَرٌ", "Home"],
    ["قُطْنٌ", "cotton", "n.m", "☁️", "", "", "Home"],
    ["قِصَّةٌ", "story", "n.f", "📖", "", "قِصَصٌ", "Home"],
    ["ظَهَرَ", "to appear", "v.", "", "يَظْهَرُ", "", "Verbs"],
    ["هَبَّ", "to blow (wind)", "v.", "", "يَهُبُّ", "", "Verbs"],
    ["أَظْلَمَ", "to grow dark", "v.", "", "يُظْلِمُ", "", "Verbs"],
    ["تَجَمَّعَ", "to gather", "v.", "", "يَتَجَمَّعُ", "", "Verbs"],
    ["أَسْرَعَ", "to hurry", "v.", "", "يُسْرِعُ", "", "Verbs"],
    ["أَغْلَقَ", "to close", "v.", "", "يُغْلِقُ", "", "Verbs"],
    ["سَكَنَ", "to calm down; to live", "v.", "", "يَسْكُنُ", "", "Verbs"],
    ["اِشْتَدَّ", "to become intense", "v.", "", "يَشْتَدُّ", "", "Verbs"],
    ["نَضِجَ", "to ripen", "v.", "", "يَنْضَجُ", "", "Verbs"],
    ["حَفِظَ", "to memorise, keep", "v.", "", "يَحْفَظُ", "", "Verbs"],
    ["سَقَى", "to water, give to drink", "v.", "", "يَسْقِي", "", "Verbs"],
    ["نَجَحَ", "to succeed, pass", "v.", "", "يَنْجَحُ", "", "Verbs"],
    ["غَزِيرًا", "heavily, abundantly", "adv.", "", "", "", "Verbs"],
    ["ثُمَّ", "then, afterwards", "part.", "", "", "", "Joining words"],
    ["فَـ", "and so, then at once", "part.", "", "", "", "Joining words"],
    ["وَرَاءَ", "behind", "adv.", "", "", "", "Joining words"],
    ["تَحْتَ", "under", "adv.", "", "", "", "Joining words"],
    ["حَوْلَ", "around", "adv.", "", "", "", "Joining words"]
  ],

  exercises: [
    { k: "gap", t: "ضَعْ فَاعِلًا لِكُلِّ فِعْلٍ · Give each verb a doer", bank: true, items: [
      ["يَهُبُّ ___ .", "الهَوَاءُ"], ["نَضِجَ ___ .", "العِنَبُ"], ["يُغَرِّدُ ___ .", "العُصْفُورُ"], ["اِشْتَدَّ ___ .", "البَرْدُ"], ["ظَهَرَ ___ .", "القَمَرُ"]] },
    { k: "gap", t: "ضَعْ فِعْلًا لِكُلِّ فَاعِلٍ · Give each doer a verb", bank: true, items: [
      ["___ المَطَرُ.", "نَزَلَ"], ["___ الرِّيحُ.", "هَبَّتِ"], ["___ الكَلْبُ.", "نَبَحَ"], ["___ الطَّائِرَةُ.", "طَارَتِ"], ["___ النَّهْرُ.", "فَاضَ"]] },
    { k: "sort", t: "صَنِّفْ · Verbal or nominal?", cats: ["جملة فعلية", "ليست فعلية"], items: [
      ["فَاضَ النَّهْرُ", "0", ""], ["النَّهْرُ عَمِيقٌ", "1", ""], ["يَطِيرُ الحَمَامُ", "0", ""], ["الحَمَامُ يَطِيرُ", "1", "Starts with a noun."], ["اُكْتُبِ الدَّرْسَ", "0", ""], ["سَافَرْنَا أَمْسِ", "0", ""]] },
    { k: "words", t: "رَتِّبْ · Build verbal sentences", items: ["هَبَّتِ الرِّيحُ", "أَغْلَقَتِ الأُمُّ النَّوَافِذَ", "يَجْرِي الوَلَدُ وَرَاءَ الكُرَةِ", "تَسْقِي البِنْتُ الأَزْهَارَ"] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["The verbal sentence consists of…", ["a verb and a doer", "a mubtadaʾ and a khabar", "a noun and an adjective"], 0, ""], ["Which joins actions “and immediately”?", ["فَـ", "ثُمَّ"], 0, ""], ["___ السَّمَاءُ.", ["أَظْلَمَتِ", "أَظْلَمَ"], 0, "السماء is feminine."], ["Which is verbal?", ["نَامَ الطِّفْلُ", "الطِّفْلُ نَائِمٌ"], 0, ""]] },
    { k: "tr", t: "صِفْ بِجُمَلٍ فِعْلِيَّةٍ · Describe with verbal sentences", en: "Translate, starting each sentence with the verb.", items: [
      ["The wind blew.", "هبت الريح|هَبَّتِ الرِّيحُ"], ["The moon appeared.", "ظهر القمر|ظَهَرَ القَمَرُ"], ["The children sat around the heater.", "جلس الأطفال حول المدفأة|جَلَسَ الأَطْفَالُ حَوْلَ المِدْفَأَةِ"], ["The girl waters the flowers.", "تسقي البنت الأزهار|تَسْقِي البِنْتُ الأَزْهَارَ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["A verbal sentence starts with a verb.", true, ""], ["اِجْلِسْ is a complete sentence.", true, "Its doer “you” is hidden in the verb."], ["الحَمَامُ يَطِيرُ is a verbal sentence.", false, "It starts with a noun."], ["ثُمَّ means “then, after some time”.", true, ""]] }
  ],

  drills: [
    ["الجملة الفعلية = …", ["فعل + فاعل", "مبتدأ + خبر", "اسم + حرف"], 0, ""],
    ["Which is a verbal sentence?", ["سَطَعَ النُّورُ", "النُّورُ سَاطِعٌ"], 0, ""],
    ["Give a doer: يَفِيضُ ___", ["النَّهْرُ", "الكِتَابُ", "القَلَمُ"], 0, "The river floods."],
    ["Give a verb: ___ الدِّيكُ", ["صَاحَ", "نَبَحَ", "غَرَّدَ"], 0, "Roosters crow; dogs bark."],
    ["___ الأَزْهَارُ فِي الرَّبِيعِ.", ["تَتَفَتَّحُ", "يَتَفَتَّحُ"], 0, "الأزهار (plural of things) is treated as feminine singular."],
    ["In نَجَحْتُ, where is the doer?", ["ـتُ", "there is none"], 0, ""],
    ["Order of a verbal sentence with an object:", ["verb – doer – object", "doer – verb – object", "object – verb – doer"], 0, ""],
    ["Describe: the dog sleeps under the tree.", ["يَنَامُ الكَلْبُ تَحْتَ الشَّجَرَةِ", "الكَلْبُ تَحْتَ الشَّجَرَةِ"], 0, "A verbal sentence starts with the verb."],
    ["اسْتَيْقَظْتُ ___ غَسَلْتُ وَجْهِي (and straight away)", ["فَـ", "ثُمَّ", "أَوْ"], 0, ""],
    ["Feminine doer in the present: ___ الفَتَاةُ القِصَّةَ", ["تَقْرَأُ", "يَقْرَأُ"], 0, ""]
  ],

  comp: [
    ["What happened first?", ["the sky darkened", "the moon appeared", "mother closed the windows"], 0, 0],
    ["What did mother do?", ["closed the windows", "opened the door", "sat by the heater"], 0, 0],
    ["What happened at the end?", ["the wind calmed and the moon appeared", "it rained more", "the children went out"], 0, 0],
    ["What is the girl doing in the picture?", ["watering the flowers", "running after the ball", "sleeping"], 0, 1],
    ["Where is the dog sleeping?", ["under the tree", "behind the ball", "in the house"], 0, 1]
  ],

  cheat: `<h3>الجملة الفعلية · The verbal sentence</h3>
    <div class="rule"><span class="ar">الجُمْلَةُ الفِعْلِيَّةُ: كُلُّ جُمْلَةٍ تَتَرَكَّبُ مِنَ الفِعْلِ وَالفَاعِلِ.</span></div>
    <div class="blocks"><div class="blk c2"><span class="ar">يَسْقِي</span><small>verb</small></div><div class="blk c1"><span class="ar">الفَلَّاحُ</span><small>doer ـُ</small></div><div class="blk c3"><span class="ar">الزَّرْعَ</span><small>object ـَ</small></div><div class="blk c4"><span class="ar">فِي الصَّبَاحِ</span><small>detail</small></div></div>
    <ul><li>Commands and verbs with <span class="ar">ـتُ</span> carry their doer: <span class="ar">اِجْلِسْ · نَجَحْتُ</span></li><li>Join actions with <span class="ar">وَ · فَـ (at once) · ثُمَّ (later)</span></li></ul>`,
  mistakes: [
    ["المَطَرُ نَزَلَ (as a verbal sentence)", "نَزَلَ المَطَرُ", "A verbal sentence starts with the verb; المطرُ نزلَ is nominal."],
    ["هَبَّ الرِّيحُ", "هَبَّتِ الرِّيحُ", "الريح is feminine."],
    ["أَغْلَقَتِ الأُمُّ النَّوَافِذُ", "أَغْلَقَتِ الأُمُّ النَّوَافِذَ", "The object takes fatḥa."]
  ],
  tips: [
    { t: "Narrate your day in verbs", b: `Each evening write five verbal sentences about your day in the past: <span class="ar">اسْتَيْقَظْتُ مُبَكِّرًا، ثُمَّ ذَهَبْتُ إِلَى العَمَلِ…</span>` },
    { t: "Describe pictures", b: `Open any photo and describe it in present verbal sentences, as Layla does in the scene. It is the book's favourite composition exercise.` }
  ]
});
