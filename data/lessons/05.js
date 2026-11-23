// الدرس ٥ — المفعول به (PDF pp. 32–35)
COURSE.add({
  n: 5, pages: [32, 35], method: true,
  summary: "The direct object (المفعول به): the noun that receives the action of the doer. It is always manṣūb — it ends in fatḥa (ـَ, or ـً with tanwīn, usually written ـًا). You will find it with the question “what? / whom?”, write its tanwīn correctly, and learn which verbs need one.",
  objectives: [
    "find the object by asking “what? / whom?” after verb + doer",
    "give it its ending: fatḥa ـَ / ـً (منصوب)",
    "write the tanwīn of fatḥa: كِتَابًا but زَهْرَةً and سَمَاءً",
    "tell verbs that need an object (قرأ، أكل) from those that don't (نام، جلس)",
    "parse an object the way the book does"
  ],

  lesson: [
    { id: "what", t: "What did the action fall on?", ar: "على مَنْ وقع الفعل؟", pos: "sentence structure", pages: "32",
      b: `<p>In <span class="ar">بَرَى التِّلْمِيذُ القَلَمَ</span> (the pupil sharpened the pencil), the verb is <span class="ar">بَرَى</span>, the doer is <span class="ar">التِّلْمِيذُ</span> — and the pencil is the thing that <b>received</b> the action. That noun is the <b>mafʿūl bihi</b> (<span class="ar">المَفْعُولُ بِهِ</span>, “that to which it was done”).</p>
        <div class="blocks"><div class="blk c2"><span class="ar">بَرَى</span><small>verb · فعل</small></div><div class="blk c1"><span class="ar">التِّلْمِيذُ</span><small>doer · فاعل · ـُ</small></div><div class="blk c3"><span class="ar">القَلَمَ</span><small>object · مفعول به · ـَ</small></div></div>
        <p>To find it, ask <span class="ar">مَاذَا؟</span> (what?) or <span class="ar">مَنْ؟</span> (whom?) <b>after the verb and its doer</b>: <i>the pupil sharpened — what?</i> → the pencil.</p>`,
      widget: "parse",
      wd: { legend: { fil: ["verb", "فعل"], fail: ["doer", "فاعل"], maf: ["object", "مفعول به"], other: ["other", "أخرى"] }, sents: [
        { en: "The girl milked the cow.", w: [["حَلَبَتِ", "fil", "Verb, past, with ـتْ because the doer is feminine."], ["الفَتَاةُ", "fail", "Who milked? The girl: fāʿil, ḍamma."], ["البَقَرَةَ", "maf", "Milked what? The cow: mafʿūl bihi, fatḥa."]] },
        { en: "The hunter threw the net.", w: [["رَمَى", "fil", "Verb, past."], ["الصَّيَّادُ", "fail", "Doer: ḍamma."], ["الشَّبَكَةَ", "maf", "Threw what? The net: object, fatḥa."]] },
        { en: "Thunder woke the sleeper.", w: [["أَيْقَظَ", "fil", "Verb, past."], ["الرَّعْدُ", "fail", "What woke him? Thunder: doer."], ["النَّائِمَ", "maf", "Woke whom? The sleeper: object."]] },
        { en: "The man saw the new moon in the sky.", w: [["أَبْصَرَ", "fil", "Verb."], ["الرَّجُلُ", "fail", "Doer."], ["الهِلَالَ", "maf", "Saw what? The crescent: object."], ["فِي", "other", "Particle."], ["السَّمَاءِ", "other", "After a preposition: kasra. Not the object."]] }
      ] },
      rule: `<p><span class="ar">المَفْعُولُ بِهِ: اسْمٌ مَنْصُوبٌ وَقَعَ عَلَيْهِ فِعْلُ الفَاعِلِ.</span></p><p>The direct object is a noun in the accusative (naṣb) on which the action of the doer fell.</p>`,
      check: [["Object in أَكَلَ الحِمَارُ الفُولَ (the donkey ate the beans)?", ["الفُولَ", "الحِمَارُ"], 0, "Ate what? The beans.", "الفُولَ"], ["The object answers the question…", ["what? / whom?", "who did it?", "where?"], 0, "Who did it? gives the doer.", false]] },

    { id: "ending", t: "Its ending: fatḥa (منصوب)", ar: "علامة نصب المفعول به", pos: "case endings", pages: "33",
      b: `<p>Every object above ends in <b>fatḥa</b>: <span class="ar">البَقَرَةَ، الشَّبَكَةَ، النَّائِمَ، الهِلَالَ</span>. The object is <span class="ar">مَنْصُوب</span>, and its sign of naṣb is the fatḥa. Doer and object now sound different even when you can't see them: <i>ar-rajul<b>u</b></i> (doer) vs <i>ar-rajul<b>a</b></i> (object).</p>
        <p><b>Indefinite object</b>: the fatḥa is doubled (<span class="ar">ـً</span>, pronounced -an), and Arabic usually writes an extra <b>alif</b> to carry it:</p>
        <table class="g"><tr><th>word ends in…</th><th>tanwīn -an written</th><th>example</th></tr>
        <tr><td>most letters</td><td>with alif <span class="ar">ـًا</span></td><td><span class="ar">قَرَأْتُ كِتَابًا</span></td></tr>
        <tr><td>tāʾ marbūṭa <span class="ar">ة</span></td><td>no alif <span class="ar">ـةً</span></td><td><span class="ar">قَطَفْتُ زَهْرَةً</span></td></tr>
        <tr><td>hamza after a long ā <span class="ar">ـاء</span></td><td>no alif <span class="ar">ـاءً</span></td><td><span class="ar">شَرِبْتُ مَاءً</span></td></tr></table>`,
      after: `<p>The book's parsing formula:</p><div class="rule"><span class="ar">القَلَمَ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></div>`,
      widget: "transform",
      wd: { title: "Same noun, two jobs", sets: [
        { base: ["أَيْقَظَ [[الرَّعْدُ]] النَّائِمَ", "Thunder woke the sleeper."], baseLabel: "الرعد = doer", ops: [["الرعد = object", "سَمِعَ النَّائِمُ [[الرَّعْدَ]]", "The sleeper heard the thunder.", "Same word, new job: now it receives the action, so it ends in fatḥa."]] },
        { base: ["جَاءَ [[ضَيْفٌ]]", "A guest came."], baseLabel: "doer: ـٌ", ops: [["object: ـًا", "أَكْرَمْنَا [[ضَيْفًا]]", "We honoured a guest.", "Indefinite object: tanwīn -an with alif."]] }
      ] },
      check: [["Correct: قَرَأْتُ ___", ["قِصَّةً", "قِصَّةًا", "قِصَّةٌ"], 0, "With ة the tanwīn -an takes no alif."], ["Correct: رَأَيْتُ ___ (a bird)", ["طَائِرًا", "طَائِرً", "طَائِرٌ"], 0, "Most words write ـًا."]] },

    { id: "needs", t: "Which verbs need an object?", ar: "الفعل الذي يحتاج إلى مفعول به", pos: "sentence structure", pages: "34–35",
      b: `<p>Some verbs feel incomplete without an object: <span class="ar">قَرَأَ</span> (read — what?), <span class="ar">أَكَلَ</span> (ate — what?), <span class="ar">رَأَى</span> (saw — what?). Others are complete with a doer alone: <span class="ar">نَامَ الطِّفْلُ</span> (the child slept), <span class="ar">جَلَسَ الضَّيْفُ</span> (the guest sat), <span class="ar">طَلَعَتِ الشَّمْسُ</span>. Part 3 of the book names them: <b>transitive</b> (<span class="ar">مُتَعَدٍّ</span>) and <b>intransitive</b> (<span class="ar">لَازِم</span>).</p>
        <p>The book's exercises ask you to <b>give each verb a suitable object</b> — choose one that makes sense with the verb.</p>`,
      widget: "sorter",
      wd: { title: "Does it need an object?", bins: [["يحتاج إلى مفعول به", "needs an object"], ["لا يحتاج", "complete without one"]],
        items: [["قَرَأَ", 0, "read what?"], ["نَامَ", 1, "slept — complete"], ["أَكَلَ", 0, "ate what?"], ["جَلَسَ", 1, "sat — complete"], ["كَسَرَ", 0, "broke what?"], ["ضَحِكَ", 1, "laughed — complete"], ["حَلَبَ", 0, "milked what?"], ["طَارَ", 1, "flew — complete"], ["فَتَحَ", 0, "opened what?"]] },
      check: [["Which verb normally needs an object?", ["فَتَحَ", "نَامَ", "جَلَسَ"], 0, "فتح الولدُ البابَ."]] },

    { id: "order", t: "The usual order: verb, doer, object", ar: "ترتيب الجملة الفعلية", pos: "sentence structure",
      b: `<p>The normal order of a verbal sentence is <b>verb – doer – object</b>, and then any extra details (where, when, how):</p>
        <div class="blocks"><div class="blk c2"><span class="ar">يَقْرَأُ</span><small>1 verb</small></div><div class="blk c1"><span class="ar">الطَّالِبُ</span><small>2 doer ـُ</small></div><div class="blk c3"><span class="ar">الكِتَابَ</span><small>3 object ـَ</small></div><div class="blk c4"><span class="ar">فِي المَكْتَبَةِ</span><small>4 where</small></div></div>
        <p>Because the endings mark the jobs, Arabic <i>can</i> move the object before the doer (<span class="ar">قَرَأَ الكِتَابَ الطَّالِبُ</span>) for emphasis — the meaning stays the same. The next lesson shows how the endings make this possible.</p>`,
      tip: `When the object is a pronoun it is attached to the verb: <span class="ar">رَأَيْتُ<b>هُ</b></span> (I saw him), <span class="ar">حَمَلَتْ<b>هُ</b> أُمُّهُ</span> (his mother carried him). You met this in lesson 4's scene.`,
      check: [["Put in order: الكُرَةَ · رَمَى · اللَّاعِبُ", ["رَمَى اللَّاعِبُ الكُرَةَ", "اللَّاعِبُ الكُرَةَ رَمَى", "الكُرَةَ رَمَى"], 0, "Verb, doer, object."]] }
  ],

  scenes: [
    { h: "الصَّيَّادُ وَالبَحْرُ", en: "The fisherman and the sea", pic: "🎣", lines: [
      ["", "حَمَلَ الصَّيَّادُ الشَّبَكَةَ، وَرَكِبَ قَارِبًا صَغِيرًا.", "The fisherman carried the net and got into a small boat."],
      ["", "رَمَى الصَّيَّادُ الشَّبَكَةَ فِي البَحْرِ.", "The fisherman threw the net into the sea."],
      ["", "اصْطَادَ سَمَكًا كَثِيرًا.", "He caught many fish."],
      ["", "رَأَى الصَّيَّادُ غَيْمًا أَسْوَدَ، وَسَمِعَ الرَّعْدَ.", "The fisherman saw black clouds and heard the thunder."],
      ["", "فَأَدَارَ القَارِبَ، وَرَجَعَ إِلَى الشَّاطِئِ.", "So he turned the boat round and went back to the shore."],
      ["", "بَاعَ الصَّيَّادُ السَّمَكَ فِي السُّوقِ، وَاشْتَرَى خُبْزًا.", "The fisherman sold the fish at the market and bought bread."]],
      note: "Objects: الشَّبَكَةَ، قَارِبًا، سَمَكًا، غَيْمًا، الرَّعْدَ، القَارِبَ، السَّمَكَ، خُبْزًا — all with fatḥa. رَجَعَ needs no object." },
    { h: "فِي المَطْبَخِ", en: "In the kitchen", pic: "🍳", lines: [
      ["الأُمُّ", "مَاذَا تُرِيدِينَ يَا سَلْمَى؟", "What do you want, Salma?"],
      ["سَلْمَى", "أُرِيدُ كُوبًا مِنَ الحَلِيبِ.", "I want a cup of milk."],
      ["الأُمُّ", "اِغْسِلِي الكُوبَ أَوَّلًا.", "Wash the cup first."],
      ["سَلْمَى", "غَسَلْتُ الكُوبَ، وَمَلَأْتُهُ.", "I washed the cup and filled it."],
      ["الأُمُّ", "هَلْ أَكَلْتِ الفُطُورَ؟", "Have you eaten breakfast?"],
      ["سَلْمَى", "نَعَمْ، أَكَلْتُ خُبْزًا وَجُبْنًا.", "Yes, I ate bread and cheese."]],
      note: "Objects: كُوبًا، الكُوبَ، الفُطُورَ، خُبْزًا، جُبْنًا. In مَلَأْتُهُ the object is the pronoun ـهُ (it)." }
  ],

  vocab: [
    ["مَفْعُولٌ بِهِ", "direct object", "n.m", "", "grammar term", "", "Grammar words"],
    ["مَنْصُوبٌ", "in the accusative (naṣb)", "adj.", "", "grammar term", "", "Grammar words"],
    ["صَيَّادٌ", "fisherman, hunter", "n.m", "🎣", "", "صَيَّادُونَ", "The sea"],
    ["شَبَكَةٌ", "net", "n.f", "🕸️", "", "شِبَاكٌ", "The sea"],
    ["قَارِبٌ", "small boat", "n.m", "🛶", "", "قَوَارِبُ", "The sea"],
    ["بَحْرٌ", "sea", "n.m", "🌊", "", "بِحَارٌ", "The sea"],
    ["شَاطِئٌ", "shore, beach", "n.m", "🏖️", "", "شَوَاطِئُ", "The sea"],
    ["غَيْمٌ", "clouds", "n.m", "☁️", "one cloud: غَيْمَةٌ", "غُيُومٌ", "The sea"],
    ["رَعْدٌ", "thunder", "n.m", "⛈️", "", "", "The sea"],
    ["هِلَالٌ", "crescent, new moon", "n.m", "🌙", "", "أَهِلَّةٌ", "The sea"],
    ["سُوقٌ", "market", "n.f", "🏪", "usually feminine", "أَسْوَاقٌ", "Food"],
    ["خُبْزٌ", "bread", "n.m", "🍞", "", "", "Food"],
    ["جُبْنٌ", "cheese", "n.m", "🧀", "", "", "Food"],
    ["حَلِيبٌ", "milk", "n.m", "🥛", "", "", "Food"],
    ["كُوبٌ", "cup, glass", "n.m", "🥤", "", "أَكْوَابٌ", "Food"],
    ["فُولٌ", "fava beans", "n.m", "🫘", "", "", "Food"],
    ["حِمَارٌ", "donkey", "n.m", "🫏", "", "حَمِيرٌ", "Food"],
    ["قَلَمٌ", "pen, pencil", "n.m", "✏️", "", "أَقْلَامٌ", "School"],
    ["نَافِذَةٌ", "window", "n.f", "🪟", "", "نَوَافِذُ", "School"],
    ["حِذَاءٌ", "shoe", "n.m", "👞", "", "أَحْذِيَةٌ", "School"],
    ["بَرَى", "to sharpen (a pencil)", "v.", "", "يَبْرِي", "", "Verbs"],
    ["أَيْقَظَ", "to wake (someone)", "v.", "", "يُوقِظُ", "", "Verbs"],
    ["أَبْصَرَ", "to see, catch sight of", "v.", "", "يُبْصِرُ", "", "Verbs"],
    ["اِصْطَادَ", "to catch (fish, game)", "v.", "", "يَصْطَادُ", "", "Verbs"],
    ["بَاعَ", "to sell", "v.", "", "يَبِيعُ", "", "Verbs"],
    ["اِشْتَرَى", "to buy", "v.", "", "يَشْتَرِي", "", "Verbs"],
    ["فَتَحَ", "to open", "v.", "", "يَفْتَحُ", "", "Verbs"],
    ["قَرَأَ", "to read", "v.", "", "يَقْرَأُ", "", "Verbs"],
    ["أَرَادَ", "to want", "v.", "", "يُرِيدُ", "", "Verbs"],
    ["مَلَأَ", "to fill", "v.", "", "يَمْلَأُ", "", "Verbs"],
    ["طَبَخَ", "to cook", "v.", "", "يَطْبُخُ", "", "Verbs"]
  ],

  exercises: [
    { k: "irab", t: "مَا وَظِيفَةُ الكَلِمَةِ؟ · Doer or object?", en: "What is the job of the highlighted word?", cats: ["فاعل · doer", "مفعول به · object", "غير ذلك · other"], items: [
      ["سَرَقَ [اللِّصُّ] الثَّوْبَ.", "0", "Who stole? The thief."], ["سَرَقَ اللِّصُّ [الثَّوْبَ].", "1", "Stole what? The garment."], ["حَلَبَتِ الفَتَاةُ [البَقَرَةَ].", "1", ""], ["رَمَى [الصَّيَّادُ] الشَّبَكَةَ.", "0", ""], ["أَكَلَ الحِمَارُ الفُولَ فِي [الحَقْلِ].", "2", "After a preposition: majrūr."], ["طَبَخَتِ [الأُمُّ] الطَّعَامَ.", "0", ""], ["أَبْصَرَ الرَّجُلُ [الهِلَالَ].", "1", ""], ["جَلَسَ [الضَّيْفُ].", "0", ""]] },
    { k: "shakl", t: "اضْبِطْ أَوَاخِرَ الكَلِمَاتِ · Vowel the doer and the object", items: [
      "فَتَحَ الوَلَد{ُ} البَاب{َ}", "قَرَأَتِ البِنْت{ُ} القِصَّة{َ}", "شَرِبَ الطِّفْل{ُ} الحَلِيب{َ}", "بَاعَ التَّاجِر{ُ} القُطْن{َ}", "أَكَلْتُ تُفَّاحَة{ً}", "رَأَى عَلِيٌّ طَائِر{ً}ا"] },
    { k: "gap", t: "ضَعْ مَفْعُولًا بِهِ مُنَاسِبًا · Add a suitable object", en: "Choose an object that makes sense.", bank: true, items: [
      ["يَبْرِي التِّلْمِيذُ ___ .", "القَلَمَ"], ["تَفْتَحُ الأُمُّ ___ .", "النَّافِذَةَ"], ["لَبِسَ الوَلَدُ ___ .", "الحِذَاءَ"], ["يَصْطَادُ الصَّيَّادُ ___ .", "السَّمَكَ"], ["اشْتَرَى أَبِي ___ .", "خُبْزًا"]] },
    { k: "mcq", t: "اِخْتَرِ الصَّوَابَ · Choose the correct form", items: [
      ["شَرِبَ الطِّفْلُ …", ["مَاءً", "مَاءًا", "مَاءٌ"], 0, "Hamza after ā: no extra alif."], ["قَطَفَتِ البِنْتُ …", ["وَرْدَةً", "وَرْدَةًا", "وَرْدَةٌ"], 0, "ة: no extra alif."], ["رَكِبَ الصَّيَّادُ …", ["قَارِبًا", "قَارِبً", "قَارِبٌ"], 0, "Write the alif: قاربًا."], ["Which sentence has an object?", ["كَتَبَ الطَّالِبُ الدَّرْسَ", "نَامَ الطَّالِبُ", "جَلَسَ الطَّالِبُ"], 0, "الدرسَ."], ["… الأُمُّ الطَّعَامَ.", ["طَبَخَتِ", "طَبَخَ"], 0, "Feminine doer."]] },
    { k: "words", t: "رَتِّبْ · Verb – doer – object", items: ["رَمَى الصَّيَّادُ الشَّبَكَةَ", "يَقْرَأُ الطَّالِبُ الكِتَابَ", "حَلَبَتِ الفَتَاةُ البَقَرَةَ", "أَيْقَظَ الرَّعْدُ النَّائِمَ"] },
    { k: "tr", t: "تَرْجِمْ · Translate", en: "Verb first. Ḥarakāt optional.", items: [
      ["The boy opened the door.", "فتح الولد الباب|فَتَحَ الوَلَدُ البَابَ"], ["The girl read a story.", "قرأت البنت قصة|قَرَأَتِ البِنْتُ قِصَّةً"], ["The fisherman sold the fish.", "باع الصياد السمك|بَاعَ الصَّيَّادُ السَّمَكَ"], ["I drank water.", "شربت ماء|شَرِبْتُ مَاءً"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["The object is marfūʿ.", false, "It is manṣūb: fatḥa."], ["The object answers “what? / whom?” after verb + doer.", true, ""], ["زَهْرَةًا is the correct spelling.", false, "زهرةً: no alif after ة."], ["نَامَ needs an object.", false, "It is complete with its doer."], ["Usual order: verb – doer – object.", true, ""], ["In رَأَيْتُهُ the object is ـهُ.", true, "An attached pronoun."]] }
  ],

  drills: [
    ["The object is…", ["منصوب (fatḥa)", "مرفوع (ḍamma)", "مجرور (kasra)"], 0, "Always naṣb."],
    ["Object in يَزْرَعُ الفَلَّاحُ القُطْنَ:", ["القُطْنَ", "الفَلَّاحُ", "يَزْرَعُ"], 0, "Sows what? Cotton."],
    ["Correct: أَكَلَ الوَلَدُ ___ (an apple)", ["تُفَّاحَةً", "تُفَّاحَةٌ", "تُفَّاحَةًا"], 0, ""],
    ["Correct: كَتَبْتُ ___ (a letter)", ["رِسَالَةً", "رِسَالَةٍ", "رِسَالَةٌ"], 0, ""],
    ["Correct: سَمِعَ الطِّفْلُ ___", ["الرَّعْدَ", "الرَّعْدُ", "الرَّعْدِ"], 0, "Heard what? → object, fatḥa."],
    ["Parse الشَّبَكَةَ in رَمَى الصَّيَّادُ الشَّبَكَةَ:", ["مفعول به منصوب وعلامة نصبه الفتحة", "فاعل مرفوع", "مجرور بالكسرة"], 0, ""],
    ["Which verb is complete without an object?", ["جَلَسَ", "فَتَحَ", "بَاعَ"], 0, ""],
    ["In أَيْقَظَ الرَّعْدُ النَّائِمَ, who woke up?", ["the sleeper", "the thunder"], 0, "النائمَ is the object: the one woken."],
    ["Correct spelling of “a sky” as object:", ["سَمَاءً", "سَمَاءًا"], 0, "ـاء: no extra alif."],
    ["Correct: … الطَّالِبُ الدَّرْسَ.", ["فَهِمَ", "فَهِمُوا"], 0, ""],
    ["Object in اشْتَرَتْ سُعَادُ ثَوْبًا جَدِيدًا:", ["ثَوْبًا", "سُعَادُ", "جَدِيدًا"], 0, "جديدًا describes the object (lesson 16)."],
    ["What changes between الرَّعْدُ (doer) and الرَّعْدَ (object)?", ["only the last vowel", "the whole word", "nothing"], 0, "That is iʿrāb."]
  ],

  comp: [
    ["What did the fisherman throw into the sea?", ["the net", "the boat", "bread"], 0, 0],
    ["Why did he go back to the shore?", ["he saw black clouds and heard thunder", "he was hungry", "the net broke"], 0, 0],
    ["What did he buy at the market?", ["bread", "fish", "a boat"], 0, 0],
    ["What does Salma want?", ["a cup of milk", "bread and cheese", "a new cup"], 0, 1],
    ["What did Salma eat for breakfast?", ["bread and cheese", "fish", "fava beans"], 0, 1]
  ],

  cheat: `<h3>المفعول به · The direct object</h3>
    <div class="rule"><span class="ar">المَفْعُولُ بِهِ: اسْمٌ مَنْصُوبٌ وَقَعَ عَلَيْهِ فِعْلُ الفَاعِلِ.</span></div>
    <div class="blocks"><div class="blk c2"><span class="ar">فَتَحَ</span><small>verb</small></div><div class="blk c1"><span class="ar">الوَلَدُ</span><small>doer ـُ</small></div><div class="blk c3"><span class="ar">البَابَ</span><small>object ـَ</small></div></div>
    <ul><li>Find it: verb + doer + <span class="ar">مَاذَا؟ / مَنْ؟</span></li><li>Ending: <span class="ar">ـَ</span> / <span class="ar">ـً</span>: <span class="ar">كِتَابًا · زَهْرَةً · مَاءً</span></li>
    <li>Verbs like <span class="ar">نَامَ، جَلَسَ، ضَحِكَ</span> need no object.</li></ul>
    <h3>Parsing</h3><p class="ar">البَابَ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</p>`,
  mistakes: [
    ["فَتَحَ الوَلَدُ البَابُ", "فَتَحَ الوَلَدُ البَابَ", "The object is manṣūb: fatḥa."],
    ["قَطَفْتُ زَهْرَةًا", "قَطَفْتُ زَهْرَةً", "No alif after tāʾ marbūṭa."],
    ["قَرَأْتُ كِتَابً", "قَرَأْتُ كِتَابًا", "Most words need the alif that carries -an."],
    ["شَرِبْتُ مَاءًا", "شَرِبْتُ مَاءً", "No alif after ـاء."]
  ],
  tips: [
    { t: "Hear -u and -a", b: `Read each line of the scenes slowly, stressing the last vowel: <i>ramā aṣ-ṣayyādu ash-shabakata</i>. The <i>-u / -a</i> pair is the music of the verbal sentence.` },
    { t: "Make object chains", b: `Take one verb and give it five objects: <span class="ar">اشْتَرَيْتُ خُبْزًا، جُبْنًا، حَلِيبًا، تُفَّاحًا، سَمَكًا</span>. It drills the tanwīn -an and builds vocabulary at the same time.` },
    { t: "Use the book's composition exercise", b: `The book asks for sentences where a given noun is the object. Do it with the objects of this lesson's vocabulary and say each one aloud.` }
  ]
});
