// الدرس ٣ — تقسيم الفعل باعتبار زمنه: الماضي والمضارع والأمر (PDF pp. 21–28)
COURSE.add({
  n: 3, pages: [21, 28], method: true,
  summary: "The Arabic verb has three forms for three times: the past (الماضي), the present-future (المضارع), which always starts with one of the letters أ ن ي ت, and the command (الأمر). You will learn to recognise each, to build the present and the command from the past, and to switch a sentence between them.",
  objectives: [
    "recognise a past verb (الماضي) by its meaning and its signs ـتُ / ـتْ",
    "recognise a present verb (المضارع) by its prefix: أ ن ي ت (أَنَيْتُ)",
    "know who each prefix refers to: I, we, he/they, you/she",
    "form the command (الأمر) from the present: اُكْتُبْ، اِلْعَبْ، نَمْ",
    "change a sentence from past to present and to a command"
  ],

  lesson: [
    { id: "three", t: "One action, three times", ar: "الفعل وزمنه", pos: "conjugation", pages: "21–23",
      b: `<p>In lesson 2 you learnt that a verb shows an action <b>and a time</b>. Arabic verbs come in three forms according to that time:</p>
        <div class="blocks"><div class="blk c4"><span class="ar">لَعِبَ</span><small>past · <span class="ar">ماضٍ</span> · he played</small></div><div class="blk c1"><span class="ar">يَلْعَبُ</span><small>present–future · <span class="ar">مضارع</span> · he plays / will play</small></div><div class="blk c2"><span class="ar">اِلْعَبْ</span><small>command · <span class="ar">أمر</span> · play!</small></div></div>
        <p>Choose a verb and tap a point on the time line.</p>`,
      widget: "timeline",
      wd: { verbs: [
        ["لَعِبَ", "يَلْعَبُ", "اِلْعَبْ", "he played", "he plays / he will play", "play! (to one boy)"],
        ["كَتَبَ", "يَكْتُبُ", "اُكْتُبْ", "he wrote", "he writes / will write", "write!"],
        ["جَلَسَ", "يَجْلِسُ", "اِجْلِسْ", "he sat", "he sits / will sit", "sit!"],
        ["نَظَّفَ", "يُنَظِّفُ", "نَظِّفْ", "he cleaned", "he cleans / will clean", "clean!"],
        ["أَطْعَمَ", "يُطْعِمُ", "أَطْعِمْ", "he fed", "he feeds / will feed", "feed!"],
        ["نَامَ", "يَنَامُ", "نَمْ", "he slept", "he sleeps / will sleep", "sleep!"]
      ] } },

    { id: "madi", t: "The past verb (الفعل الماضي)", ar: "الفعل الماضي", pos: "conjugation", pages: "21–22",
      b: `<p>In <span class="ar">جَرَى الكَلْبُ</span> (the dog ran), <span class="ar">وَقَفَ الرَّجُلُ</span> (the man stood), <span class="ar">ضَاعَ الكِتَابُ</span> (the book got lost), <span class="ar">دَقَّتِ السَّاعَةُ</span> (the clock struck), <span class="ar">جَاءَتِ البِنْتُ</span> (the girl came), <span class="ar">بَاضَتِ الدَّجَاجَةُ</span> (the hen laid an egg) — each verb tells of something that <b>already happened</b>, before the moment of speaking.</p>
        <p>The past verb is the simplest form, and dictionaries list verbs under it. With <i>he</i> it usually has three letters and ends in fatḥa: <span class="ar">كَتَبَ، جَلَسَ، فَهِمَ</span>. Its two clearest signs are endings for the doer:</p>
        <table class="g"><tr><th>ending</th><th>meaning</th><th>example</th></tr>
        <tr><td><span class="ar">ـتْ</span></td><td>she did</td><td><span class="ar">جَاءَتْ · دَقَّتْ · بَاضَتْ</span></td></tr>
        <tr><td><span class="ar">ـتُ</span></td><td>I did</td><td><span class="ar">جِئْتُ · كَتَبْتُ · نِمْتُ</span></td></tr></table>`,
      ex: [["جَرَى الكَلْبُ.", "The dog ran."], ["دَقَّتِ السَّاعَةُ.", "The clock struck.", "The ـتْ (she) takes a kasra before ال to avoid two sukūns: دَقَّتِ السَّاعَةُ."], ["بَاضَتِ الدَّجَاجَةُ.", "The hen laid an egg."]],
      rule: `<p><span class="ar">الفِعْلُ المَاضِي: كُلُّ فِعْلٍ يَدُلُّ عَلَى حُصُولِ عَمَلٍ فِي الزَّمَنِ المَاضِي.</span></p><p>The past verb is any verb that shows an action took place in past time.</p>`,
      check: [["Which is a past verb?", ["وَقَفَ", "يَقِفُ", "قِفْ"], 0, "وقف = he stood."], ["In جَاءَتِ البِنْتُ the ـتْ means…", ["she (the doer is feminine)", "I"], 0, "تاء التأنيث: the girl did it.", false]] },

    { id: "mudari", t: "The present verb and its four letters (أَنَيْتُ)", ar: "الفعل المضارع وأحرف المضارعة", pos: "conjugation", pages: "22–23",
      b: `<p>In <span class="ar">أَغْسِلُ يَدَيَّ</span> (I wash my hands), <span class="ar">نَلْعَبُ بِالكُرَةِ</span> (we play ball), <span class="ar">يَنْبَحُ الكَلْبُ</span> (the dog barks), <span class="ar">تَذْبُلُ الوَرْدَةُ</span> (the rose withers), the action is happening <b>now</b> or will happen <b>later</b>. That is the <span class="ar">مُضَارِع</span>.</p>
        <p>Every present verb <b>must start</b> with one of four letters, the <span class="ar">أَحْرُف المُضَارَعَة</span>. Learn them as the word <span class="ar">أَنَيْتُ</span> (or <span class="ar">نَأْتِي</span>). The letter tells you <b>who</b> is doing the action:</p>`,
      widget: "table",
      wd: { title: "Who is acting? The prefix tells you", head: ["prefix", "who", "example", "meaning"], hi: 1, rows: [
        ["<b>أ</b> hamza", "أَنَا I", "[[أَ]]كْتُبُ", "I write"],
        ["<b>ن</b> nūn", "نَحْنُ we", "[[نَ]]كْتُبُ", "we write"],
        ["<b>ي</b> yāʾ", "هُوَ he · هُمْ they", "[[يَ]]كْتُبُ", "he writes"],
        ["<b>ت</b> tāʾ", "أَنْتَ you · هِيَ she", "[[تَ]]كْتُبُ", "you write / she writes"]] },
      after: `<p>So <span class="ar">تَأْكُلُ البِنْتُ</span> (the girl eats) and <span class="ar">تَمْشِي فِي الحُقُولِ</span> (you walk in the fields) both start with <span class="ar">تـ</span>. The context tells you whether it is <i>she</i> or <i>you</i>.</p>`,
      rule: `<p><span class="ar">الفِعْلُ المُضَارِعُ: كُلُّ فِعْلٍ يَدُلُّ عَلَى حُصُولِ عَمَلٍ فِي الزَّمَنِ الحَاضِرِ أَوِ المُسْتَقْبَلِ، وَلَا بُدَّ أَنْ يَكُونَ مَبْدُوءًا بِحَرْفٍ مِنْ أَحْرُفِ المُضَارَعَةِ: الهَمْزَةِ وَالنُّونِ وَاليَاءِ وَالتَّاءِ.</span></p><p>The present verb shows an action in the present or the future, and must begin with one of the letters hamza, nūn, yāʾ or tāʾ.</p>`,
      warn: `Starting with <span class="ar">أ ن ي ت</span> is necessary, but not enough: <span class="ar">أَكَلَ</span> (he ate), <span class="ar">نَزَلَ</span> (he came down) and <span class="ar">تَعِبَ</span> (he got tired) are <b>past</b> verbs whose first root letter happens to be one of these. Always check the meaning: does it happen now/later? Can you put <span class="ar">سَـ</span> (will) in front?`,
      check: [["Who is acting in نَلْعَبُ?", ["we", "I", "they"], 0, "ن = نحن, we."], ["Is أَكَلَ a present verb?", ["no — it is past (he ate)", "yes — it starts with أ"], 0, "The hamza here is a root letter: أكل يأكل.", false], ["Which is a present verb?", ["يَنْتَبِهُ", "اِنْتَبَهَ", "اِنْتَبِهْ"], 0, "ينتبه = he pays attention: starts with ي."]] },

    { id: "amr", t: "The command (فعل الأمر)", ar: "فعل الأمر", pos: "conjugation", pages: "23–24",
      b: `<p><span class="ar">اِلْعَبْ بِالكُرَةِ</span> (play with the ball), <span class="ar">أَطْعِمْ قِطَّكَ</span> (feed your cat), <span class="ar">نَظِّفْ بَابَكَ</span> (clean your door), <span class="ar">نَمْ مُبَكِّرًا</span> (sleep early), <span class="ar">تَمَهَّلْ فِي السَّيْرِ</span> (go slowly), <span class="ar">أَجِدْ مَضْغَ الطَّعَامِ</span> (chew your food well): each verb <b>asks</b> someone to do something. The action has not happened yet; it is wanted in the future.</p>
        <p><b>How to make it</b> (for one male listener): take the present with <span class="ar">تَـ</span> (<i>you</i>), drop the <span class="ar">تَـ</span>, and end with sukūn.</p>`,
      widget: "transform",
      wd: { title: "From “you do” to “do!”", sets: [
        { base: ["[[تَـ]]لْعَبُ", "you play"], baseLabel: "present", ops: [["drop تـ", "لْعَبُ", "…can't start with sukūn!", "Arabic cannot begin a word with a silent letter."], ["add اِ + sukūn", "[[اِ]]لْعَب[[ْ]]", "play!", "A helping hamza (اِ) is added in front, and the last letter takes sukūn."]] },
        { base: ["[[تَـ]]كْتُبُ", "you write"], baseLabel: "present", ops: [["command", "[[اُ]]كْتُب[[ْ]]", "write!", "When the middle vowel of the present is ḍamma (تَكْتُبُ), the helping hamza takes ḍamma too: اُكْتُبْ."]] },
        { base: ["[[تُـ]]نَظِّفُ", "you clean"], baseLabel: "present", ops: [["command", "نَظِّف[[ْ]]", "clean!", "After dropping تُـ the word already starts with a vowel (نَ), so no hamza is needed."]] },
        { base: ["[[تَـ]]نَامُ", "you sleep"], baseLabel: "present", ops: [["command", "نَ[[مْ]]", "sleep!", "The long ā drops when the last letter becomes silent: تَنَامُ → نَمْ (not نَامْ)."]] }
      ] },
      after: `<p>Speaking to a girl, a group or two people, the command takes an ending instead of sukūn: <span class="ar">اُكْتُبِي</span> (f.), <span class="ar">اُكْتُبُوا</span> (pl.), <span class="ar">اُكْتُبَا</span> (two). Part 2 of the book covers these; for now, learn the form for one boy.</p>`,
      rule: `<p><span class="ar">فِعْلُ الأَمْرِ: كُلُّ فِعْلٍ يُطْلَبُ بِهِ حُصُولُ شَيْءٍ فِي الزَّمَنِ المُسْتَقْبَلِ.</span></p><p>The command is any verb by which we ask for something to happen in the future.</p>`,
      check: [["Command of تَجْلِسُ (you sit)?", ["اِجْلِسْ", "جَلَسَ", "يَجْلِسُ"], 0, "Drop تـ, add اِ, end with sukūn."], ["Command of تَدْخُلُ (you enter)?", ["اُدْخُلْ", "اِدْخُلْ", "دَخَلَ"], 0, "Middle vowel ḍamma (تَدْخُلُ) → hamza with ḍamma."]] },

    { id: "switch", t: "Switching a sentence between the three", ar: "التحويل بين الأزمنة", pos: "sentence structure", pages: "24–28",
      b: `<p>The book's exercises ask you to change sentences from one time to another. Only the verb changes form; the rest of the sentence stays the same. Watch:</p>`,
      widget: "transform",
      wd: { title: "Past → present → command", sets: [
        { base: ["[[غَسَلَ]] الوَلَدُ يَدَيْهِ.", "The boy washed his hands."], baseLabel: "past", ops: [["present", "[[يَغْسِلُ]] الوَلَدُ يَدَيْهِ.", "The boy washes his hands."], ["command", "[[اِغْسِلْ]] يَدَيْكَ يَا وَلَدُ.", "Wash your hands, boy!", "With a command you speak <i>to</i> the person, so “his hands” becomes “your hands”."]] },
        { base: ["[[لَبِسَتْ]] سُعَادُ ثِيَابَهَا.", "Suad put on her clothes."], baseLabel: "past", ops: [["present", "[[تَلْبَسُ]] سُعَادُ ثِيَابَهَا.", "Suad puts on her clothes.", "Feminine doer: past ـتْ → present تـ."], ["command (to a girl)", "[[اِلْبَسِي]] ثِيَابَكِ يَا سُعَادُ.", "Put on your clothes, Suad!", "To a girl the command ends in ـِي."]] }
      ] },
      tip: `To tell the time of an unknown verb quickly: <b>past</b> = you can add <span class="ar">ـتُ</span> (<span class="ar">لَعِبْتُ</span>); <b>present</b> = you can put <span class="ar">لَمْ</span> or <span class="ar">سَـ</span> in front (<span class="ar">سَيَلْعَبُ</span>); <b>command</b> = it gives an order and takes <span class="ar">ـِي</span> for a girl (<span class="ar">اِلْعَبِي</span>).`,
      check: [["Present of وَقَفَ الرَّجُلُ?", ["يَقِفُ الرَّجُلُ", "قِفْ يَا رَجُلُ", "وَقَفَ"], 0, "وقف يقف."]] }
  ],

  scenes: [
    { h: "يَوْمٌ فِي البَيْتِ", en: "A day at home", pic: "🏠", lines: [
      ["", "اسْتَيْقَظَ خَالِدٌ مُبَكِّرًا.", "Khalid woke up early."],
      ["", "غَسَلَ وَجْهَهُ وَيَدَيْهِ، وَلَبِسَ ثِيَابَهُ.", "He washed his face and hands and put on his clothes."],
      ["", "دَقَّتِ السَّاعَةُ سَبْعَ دَقَّاتٍ.", "The clock struck seven."],
      ["", "بَاضَتِ الدَّجَاجَةُ بَيْضَةً، فَأَطْعَمَهَا خَالِدٌ.", "The hen laid an egg, so Khalid fed her."],
      ["", "الآنَ يَنْبَحُ الكَلْبُ فِي الحَدِيقَةِ، وَيَنْتَبِهُ الحَارِسُ.", "Now the dog is barking in the garden, and the guard is paying attention."],
      ["", "غَدًا يَلْعَبُ خَالِدٌ بِالكُرَةِ مَعَ أَصْدِقَائِهِ.", "Tomorrow Khalid will play ball with his friends."]],
      note: "The first four lines tell what happened (past). Then الآن (now) and غدًا (tomorrow) bring present verbs: يَنْبَحُ، يَنْتَبِهُ، يَلْعَبُ." },
    { h: "نَصَائِحُ الأُمِّ", en: "Mother's advice", pic: "👩‍👦", lines: [
      ["الأُمُّ", "يَا خَالِدُ، اِغْسِلْ يَدَيْكَ قَبْلَ الطَّعَامِ.", "Khalid, wash your hands before eating."],
      ["خَالِدٌ", "غَسَلْتُهُمَا يَا أُمِّي.", "I've washed them, mother."],
      ["الأُمُّ", "أَحْسَنْتَ. أَجِدْ مَضْغَ الطَّعَامِ، وَلَا تُسْرِعْ.", "Well done. Chew your food well, and don't hurry."],
      ["خَالِدٌ", "نَعَمْ، أَمْضُغُ الطَّعَامَ جَيِّدًا.", "Yes, I chew the food well."],
      ["الأُمُّ", "وَنَظِّفْ حُجْرَتَكَ، ثُمَّ نَمْ مُبَكِّرًا.", "And clean your room, then go to bed early."],
      ["خَالِدٌ", "سَأُنَظِّفُهَا الآنَ، وَأَنَامُ مُبَكِّرًا.", "I'll clean it now, and I'll go to bed early."]],
      note: "Mother gives commands (اِغْسِلْ، أَجِدْ، نَظِّفْ، نَمْ). Khalid answers with a past verb (غَسَلْتُ) and present verbs starting with أ (I): أَمْضُغُ، أُنَظِّفُ، أَنَامُ." }
  ],

  vocab: [
    ["كَلْبٌ", "dog", "n.m", "🐕", "", "كِلَابٌ", "Home and yard"],
    ["دَجَاجَةٌ", "hen", "n.f", "🐔", "", "دَجَاجٌ", "Home and yard"],
    ["بَيْضَةٌ", "egg", "n.f", "🥚", "", "بَيْضٌ", "Home and yard"],
    ["سَاعَةٌ", "clock; hour", "n.f", "🕰️", "", "سَاعَاتٌ", "Home and yard"],
    ["حَارِسٌ", "guard", "n.m", "💂", "", "حُرَّاسٌ", "Home and yard"],
    ["رَجُلٌ", "man", "n.m", "👨", "", "رِجَالٌ", "Home and yard"],
    ["بِنْتٌ", "girl, daughter", "n.f", "👧", "", "بَنَاتٌ", "Home and yard"],
    ["كُرَةٌ", "ball", "n.f", "⚽", "", "كُرَاتٌ", "Home and yard"],
    ["بَابٌ", "door", "n.m", "🚪", "", "أَبْوَابٌ", "Home and yard"],
    ["ثَوْبٌ", "garment", "n.m", "👕", "", "ثِيَابٌ", "Home and yard"],
    ["يَدٌ", "hand", "n.f", "✋", "feminine without ة; dual يَدَانِ", "أَيْدٍ", "Body"],
    ["وَجْهٌ", "face", "n.m", "🙂", "", "وُجُوهٌ", "Body"],
    ["طَعَامٌ", "food", "n.m", "🍲", "", "أَطْعِمَةٌ", "Body"],
    ["جَرَى", "to run", "v.", "", "يَجْرِي · اِجْرِ", "", "Verbs: past · present · command"],
    ["وَقَفَ", "to stand, stop", "v.", "", "يَقِفُ · قِفْ", "", "Verbs: past · present · command"],
    ["ضَاعَ", "to get lost", "v.", "", "يَضِيعُ", "", "Verbs: past · present · command"],
    ["دَقَّ", "to strike, knock", "v.", "", "يَدُقُّ · دُقَّ", "", "Verbs: past · present · command"],
    ["بَاضَ", "to lay (an egg)", "v.", "", "يَبِيضُ", "", "Verbs: past · present · command"],
    ["غَسَلَ", "to wash", "v.", "", "يَغْسِلُ · اِغْسِلْ", "", "Verbs: past · present · command"],
    ["لَبِسَ", "to put on, wear", "v.", "", "يَلْبَسُ · اِلْبَسْ", "", "Verbs: past · present · command"],
    ["لَعِبَ", "to play", "v.", "", "يَلْعَبُ · اِلْعَبْ", "", "Verbs: past · present · command"],
    ["نَبَحَ", "to bark", "v.", "", "يَنْبَحُ", "", "Verbs: past · present · command"],
    ["اِنْتَبَهَ", "to pay attention", "v.", "", "يَنْتَبِهُ · اِنْتَبِهْ", "", "Verbs: past · present · command"],
    ["ذَبُلَ", "to wither", "v.", "", "يَذْبُلُ", "", "Verbs: past · present · command"],
    ["أَطْعَمَ", "to feed", "v.", "", "يُطْعِمُ · أَطْعِمْ", "", "Verbs: past · present · command"],
    ["نَظَّفَ", "to clean", "v.", "", "يُنَظِّفُ · نَظِّفْ", "", "Verbs: past · present · command"],
    ["نَامَ", "to sleep", "v.", "", "يَنَامُ · نَمْ", "", "Verbs: past · present · command"],
    ["تَمَهَّلَ", "to go slowly, take one's time", "v.", "", "يَتَمَهَّلُ · تَمَهَّلْ", "", "Verbs: past · present · command"],
    ["مَضَغَ", "to chew", "v.", "", "يَمْضُغُ · اُمْضُغْ", "", "Verbs: past · present · command"],
    ["مَاضٍ", "past (verb)", "n.m", "", "grammar term; with al-: المَاضِي", "", "Grammar words"],
    ["مُضَارِعٌ", "present-future (verb)", "n.m", "", "grammar term", "", "Grammar words"],
    ["أَمْرٌ", "command", "n.m", "", "grammar term", "أَوَامِرُ", "Grammar words"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Past, present or command?", cats: ["ماضٍ · past", "مضارع · present", "أمر · command"], items: [
      ["جَلَسَ", "0", ""], ["يَجْلِسُ", "1", ""], ["اِجْلِسْ", "2", ""], ["نَكْتُبُ", "1", "ن = we"], ["كَتَبْتُ", "0", "ـتُ = I did"], ["اُكْتُبْ", "2", ""], ["أَكَلَ", "0", "Careful: the أ is a root letter."], ["تَذْبُلُ", "1", "ت = she (the rose)"], ["نَظِّفْ", "2", ""], ["بَاضَتْ", "0", "ـتْ = she did"]] },
    { k: "mcq", t: "اِخْتَرْ · Who is acting?", en: "Choose the doer that the present prefix points to.", items: [
      ["أَشْرَبُ الحَلِيبَ.", ["أَنَا", "نَحْنُ", "هُوَ"], 0, "أ = I"], ["نَلْعَبُ فِي الحَدِيقَةِ.", ["نَحْنُ", "أَنَا", "هِيَ"], 0, "ن = we"], ["يَنْبَحُ الكَلْبُ.", ["هُوَ", "أَنْتَ", "نَحْنُ"], 0, "ي = he"], ["تَذْبُلُ الوَرْدَةُ.", ["هِيَ", "أَنَا", "هُوَ"], 0, "ت = she (the rose)"], ["هَلْ تَفْهَمُ يَا عَلِيُّ؟", ["أَنْتَ", "هِيَ", "نَحْنُ"], 0, "ت + speaking to Ali = you"]] },
    { k: "gap", t: "حَوِّلْ إِلَى المُضَارِعِ · Change to the present", en: "Write the present tense of the verb in brackets (with the same doer). Ḥarakāt optional.", items: [
      ["___ الكَلْبُ فِي الحَدِيقَةِ. (جَرَى)", "يَجْرِي|يجري"], ["___ الرَّجُلُ أَمَامَ البَابِ. (وَقَفَ)", "يَقِفُ|يقف"], ["___ البِنْتُ التُّفَّاحَةَ. (أَكَلَتْ)", "تَأْكُلُ|تاكل"], ["___ الطِّفْلُ مُبَكِّرًا. (نَامَ)", "يَنَامُ|ينام"], ["___ الحَارِسُ. (اِنْتَبَهَ)", "يَنْتَبِهُ|ينتبه"]] },
    { k: "gap", t: "هَاتِ الأَمْرَ · Give the command", en: "Write the command (to one boy) of each present verb.", items: [
      ["تَلْعَبُ ← ___", "اِلْعَبْ|العب"], ["تَكْتُبُ ← ___", "اُكْتُبْ|اكتب"], ["تَجْلِسُ ← ___", "اِجْلِسْ|اجلس"], ["تُنَظِّفُ ← ___", "نَظِّفْ|نظف"], ["تَغْسِلُ ← ___", "اِغْسِلْ|اغسل"], ["تَنَامُ ← ___", "نَمْ|نم"]] },
    { k: "words", t: "رَتِّبْ · Build the sentence", items: ["دَقَّتِ السَّاعَةُ", "يَنْبَحُ الكَلْبُ فِي الحَدِيقَةِ", "اِلْعَبْ بِالكُرَةِ", "نَظِّفْ بَابَكَ يَا عَلِيُّ", "بَاضَتِ الدَّجَاجَةُ بَيْضَةً"] },
    { k: "tr", t: "تَرْجِمْ · Translate into Arabic", en: "Use the verbs of the lesson. Ḥarakāt optional.", items: [
      ["The dog ran.", "جرى الكلب|جَرَى الكَلْبُ"], ["The rose withers. (present)", "تذبل الوردة|تَذْبُلُ الوَرْدَةُ"], ["Play with the ball!", "العب بالكرة|اِلْعَبْ بِالكُرَةِ"], ["We play in the garden.", "نلعب في الحديقة|نَلْعَبُ فِي الحَدِيقَةِ"], ["The girl came.", "جاءت البنت|جَاءَتِ البِنْتُ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["Every present verb starts with أ، ن، ي or ت.", true, "أحرف المضارعة: أنيت."],
      ["Every verb that starts with أ، ن، ي or ت is a present verb.", false, "أَكَلَ، نَزَلَ، تَعِبَ are past."],
      ["The command asks for an action in the future.", true, ""],
      ["The command of تَكْتُبُ is اِكْتُبْ.", false, "It is اُكْتُبْ: the middle ḍamma gives the hamza a ḍamma."],
      ["In نَلْعَبُ the doer is “we”.", true, ""],
      ["كَتَبْتُ is a past verb.", true, "ـتُ = I."]] }
  ],

  drills: [
    ["The four present prefixes are…", ["أ ن ي ت", "ا و ي ت", "م ن ت ي"], 0, "أَنَيْتُ."],
    ["Which is a present verb?", ["تَأْكُلُ", "أَكَلَتْ", "كُلْ"], 0, "تأكل = she eats / you eat."],
    ["Which is past?", ["نَزَلَ", "يَنْزِلُ", "اِنْزِلْ"], 0, "نزل = he came down. The ن is a root letter."],
    ["Command of تَشْرَبُ?", ["اِشْرَبْ", "اُشْرُبْ", "شَرِبَ"], 0, "تَشْرَبُ has fatḥa in the middle → اِشْرَبْ."],
    ["Command of تَخْرُجُ?", ["اُخْرُجْ", "اِخْرِجْ", "خَرَجَ"], 0, "Middle ḍamma → اُخْرُجْ."],
    ["Command of تُطْعِمُ (you feed)?", ["أَطْعِمْ", "اِطْعَمْ", "طَعِمَ"], 0, "Verbs whose present starts with تُـ from a past in أ- keep a hamza with fatḥa: أَطْعِمْ."],
    ["In أَلْبَسُ ثِيَابِي, who is acting?", ["I", "she", "we"], 0, "أ = I."],
    ["___ الحَارِسُ الآنَ. (present of انتبه)", ["يَنْتَبِهُ", "اِنْتَبَهَ", "اِنْتَبِهْ"], 0, "الآن (now) calls for the present."],
    ["___ أَمْسِ. Which verb fits with أمس (yesterday)?", ["سَافَرْتُ", "أُسَافِرُ", "سَافِرْ"], 0, "أمس → past."],
    ["The command of تَنَامُ is…", ["نَمْ", "نَامْ", "اِنَامْ"], 0, "The long ā drops before sukūn."],
    ["The past verb shows…", ["an action that already happened", "an action now or later", "a request"], 0, "ماضٍ."],
    ["Present of لَبِسَ?", ["يَلْبَسُ", "يَلْبِسُ", "يُلْبَسُ"], 0, "لَبِسَ يَلْبَسُ — learn the middle vowel with the verb."]
  ],

  comp: [
    ["What did Khalid do first?", ["he woke up early", "he played ball", "he fed the dog"], 0, 0],
    ["What did the hen do?", ["she laid an egg", "she barked", "she ran"], 0, 0],
    ["What will Khalid do tomorrow?", ["play ball with his friends", "clean the garden", "travel"], 0, 0],
    ["What does mother tell Khalid to do before eating?", ["wash his hands", "clean his room", "sleep"], 0, 1],
    ["How does Khalid answer “wash your hands”?", ["I have washed them", "I will wash them tomorrow", "no"], 0, 1]
  ],

  cheat: `<h3>الفعل وزمنه · The verb and its time</h3>
    <table class="g"><tr><th></th><th>time</th><th>sign</th><th>example</th></tr>
    <tr><td><b class="ar">الماضي</b></td><td>already happened</td><td><span class="ar">ـتُ (I) · ـتْ (she)</span></td><td><span class="ar">كَتَبَ · كَتَبْتُ · كَتَبَتْ</span></td></tr>
    <tr><td><b class="ar">المضارع</b></td><td>now or later</td><td>starts with <span class="ar">أ ن ي ت</span> (<span class="ar">أَنَيْتُ</span>)</td><td><span class="ar">أَكْتُبُ · نَكْتُبُ · يَكْتُبُ · تَكْتُبُ</span></td></tr>
    <tr><td><b class="ar">الأمر</b></td><td>asked for, in the future</td><td>from <span class="ar">تَـ…</span>: drop تـ, (add اِ / اُ), end in sukūn</td><td><span class="ar">اُكْتُبْ · اِلْعَبْ · نَظِّفْ · نَمْ</span></td></tr></table>
    <h3>Prefixes</h3><p><span class="ar">أ</span> I · <span class="ar">ن</span> we · <span class="ar">ي</span> he / they · <span class="ar">ت</span> you / she</p>
    <h3>Helping hamza of the command</h3><p>middle vowel ḍamma → <span class="ar">اُ</span> (<span class="ar">تَكْتُبُ ← اُكْتُبْ</span>); otherwise <span class="ar">اِ</span> (<span class="ar">تَلْعَبُ ← اِلْعَبْ، تَجْلِسُ ← اِجْلِسْ</span>); none if the stem starts with a vowel (<span class="ar">نَظِّفْ</span>).</p>`,
  mistakes: [
    ["أَكَلَ فِعْلٌ مُضَارِعٌ", "أَكَلَ فِعْلٌ مَاضٍ", "The أ is part of the root (أ ك ل). The present is يَأْكُلُ."],
    ["اِكْتُبْ", "اُكْتُبْ", "The middle vowel of يَكْتُبُ is ḍamma, so the helping hamza takes ḍamma."],
    ["نَامْ مُبَكِّرًا", "نَمْ مُبَكِّرًا", "The long vowel drops when the last letter is silent."],
    ["دَقَّتْ السَّاعَةُ", "دَقَّتِ السَّاعَةُ", "Before ال, the silent ـتْ takes a kasra to join the words smoothly."]
  ],
  tips: [
    { t: "Learn the verb trio", b: `For every new verb learn three forms aloud, as in the vocabulary list: <span class="ar">لَعِبَ – يَلْعَبُ – اِلْعَبْ</span>. Saying them as a little song fixes the middle vowel, which also gives you the hamza of the command.` },
    { t: "Time words are clues", b: `<span class="ar">أَمْسِ</span> (yesterday) goes with the past; <span class="ar">الآنَ</span> (now), <span class="ar">غَدًا</span> (tomorrow) and <span class="ar">سَـ / سَوْفَ</span> (will) go with the present. Use them when you write.` },
    { t: "Give yourself orders", b: `Narrate your morning in commands: <span class="ar">اِسْتَيْقِظْ! اِغْسِلْ وَجْهَكَ! اِلْبَسْ ثِيَابَكَ!</span> Then in the present: <span class="ar">أَسْتَيْقِظُ، أَغْسِلُ وَجْهِي…</span>` }
  ]
});
