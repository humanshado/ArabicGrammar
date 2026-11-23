// الدرس ٤ — الفاعل (PDF pp. 29–31)
COURSE.add({
  n: 4, pages: [29, 31], method: true,
  summary: "The doer (الفاعل): the noun that comes after a verb and tells who did the action. It is always marfūʿ — it ends in ḍamma (ـُ or ـٌ). You will also see how the verb agrees with a feminine doer, and why the verb stays singular before a plural doer.",
  objectives: [
    "find the doer (الفاعل) of a verb by asking “who did it?”",
    "give the doer its ending: ḍamma ـُ / ـٌ (مرفوع)",
    "make the verb feminine for a feminine doer: جَلَسَتِ البِنْتُ، تَجْلِسُ البِنْتُ",
    "keep the verb singular before a plural doer: حَضَرَ الطُّلَّابُ",
    "parse a doer the way the book does"
  ],

  lesson: [
    { id: "who", t: "Who did it?", ar: "مَنْ فَعَلَ الفِعْلَ؟", pos: "sentence structure", pages: "29",
      b: `<p>In <span class="ar">طَارَ العُصْفُورُ</span> (the sparrow flew), the verb <span class="ar">طَارَ</span> tells us that flying happened. Who flew? <span class="ar">العُصْفُورُ</span>. The noun that <b>did</b> the action of the verb is called the <b>fāʿil</b> (<span class="ar">الفَاعِلُ</span>, literally “the doer”).</p>
        <div class="blocks"><div class="blk c2"><span class="ar">طَارَ</span><small>verb · <span class="ar">فعل</span></small></div><div class="blk c1"><span class="ar">العُصْفُورُ</span><small>doer · <span class="ar">فاعل</span></small></div></div>
        <p>To find the fāʿil, put the question <span class="ar">مَنْ</span> (who?) or <span class="ar">مَاذَا</span> (what?) <b>after the verb</b>: <i>flew — who?</i> → the sparrow. Tap the words below.</p>`,
      widget: "parse",
      wd: { legend: { fil: ["verb", "فعل"], fail: ["doer", "فاعل"], other: ["other words", "كلمة أخرى"] }, sents: [
        { en: "The rooster crowed.", w: [["صَاحَ", "fil", "Verb, past."], ["الدِّيكُ", "fail", "Who crowed? The rooster: fāʿil, marfūʿ with ḍamma."]] },
        { en: "The doctor came.", w: [["حَضَرَ", "fil", "Verb, past."], ["الطَّبِيبُ", "fail", "Who came? The doctor: fāʿil."]] },
        { en: "The farmer sows in the field.", w: [["يَزْرَعُ", "fil", "Verb, present."], ["الفَلَّاحُ", "fail", "Who sows? The farmer: fāʿil."], ["فِي", "other", "Particle."], ["الحَقْلِ", "other", "A noun after a preposition — not the doer."]] },
        { en: "The child cried at night.", w: [["بَكَى", "fil", "Verb, past."], ["الطِّفْلُ", "fail", "Who cried? The child: fāʿil."], ["لَيْلًا", "other", "Tells when; not the doer."]] }
      ] },
      rule: `<p><span class="ar">الفَاعِلُ: اسْمٌ مَرْفُوعٌ تَقَدَّمَهُ فِعْلٌ، وَدَلَّ عَلَى الَّذِي فَعَلَ الفِعْلَ.</span></p><p>The fāʿil is a noun in the nominative (rafʿ) that comes after a verb and shows who did the action.</p>`,
      check: [["In وَقَفَ القِطَارُ (the train stopped), the fāʿil is…", ["القِطَارُ", "وَقَفَ"], 0, "Who stopped? The train.", "القِطَارُ"], ["The fāʿil comes…", ["after its verb", "before its verb"], 0, "In a verbal sentence, the doer follows the verb.", false]] },

    { id: "ending", t: "Its ending: ḍamma (مرفوع)", ar: "علامة رفع الفاعل", pos: "case endings", pages: "30",
      b: `<p>Look at the last letter of every fāʿil: <span class="ar">العُصْفُورُ، الدِّيكُ، الطَّبِيبُ، الفَلَّاحُ</span>. They all end in <b>ḍamma</b>. Grammarians say the fāʿil is <span class="ar">مَرْفُوع</span> (in the state of <i>rafʿ</i>), and the ḍamma is its sign (<span class="ar">عَلَامَة الرَّفْع</span>).</p>
        <p>If the noun is indefinite (no <span class="ar">الـ</span>), the ḍamma is doubled: tanwīn <span class="ar">ـٌ</span>.</p>`,
      ex: [["حَضَرَ الطَّبِيبُ.", "The doctor came.", "definite → ـُ"], ["حَضَرَ طَبِيبٌ.", "A doctor came.", "indefinite → ـٌ"], ["سَافَرَ مُحَمَّدٌ.", "Muhammad travelled.", "Most masculine names take tanwīn."], ["زَرَعَتْ فَاطِمَةُ وَرْدًا.", "Fatima planted roses.", "Some names (like فاطمة, زينب) never take tanwīn — Part 3 explains why."]],
      after: `<p>When the book asks you to <b>parse</b> (<span class="ar">أَعْرِبْ</span>), the answer for a fāʿil sounds like this:</p>
        <div class="rule"><span class="ar">العُصْفُورُ: فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span><br>al-ʿuṣfūru: a doer, in rafʿ; the sign of its rafʿ is the ḍamma.</div>`,
      check: [["Which ending does the fāʿil take?", ["ـُ / ـٌ ḍamma", "ـَ fatḥa", "ـِ kasra"], 0, "The fāʿil is marfūʿ."], ["Correct: نَبَحَ …", ["الكَلْبُ", "الكَلْبَ", "الكَلْبِ"], 0, "Who barked? The dog — fāʿil, ḍamma."]] },

    { id: "fem", t: "A feminine doer: the verb shows it", ar: "تأنيث الفعل مع الفاعل المؤنث", pos: "agreement",
      b: `<p>Arabic verbs <b>agree</b> with a feminine doer. In the past the verb takes <span class="ar">ـتْ</span>; in the present it starts with <span class="ar">تَـ</span> instead of <span class="ar">يَـ</span>:</p>
        <table class="g"><tr><th></th><th>masculine doer</th><th>feminine doer</th></tr>
        <tr><td>past</td><td><span class="ar">جَلَسَ الوَلَدُ</span></td><td><span class="ar">جَلَسَ<b>تِ</b> البِنْتُ</span></td></tr>
        <tr><td>present</td><td><span class="ar"><b>يَ</b>جْلِسُ الوَلَدُ</span></td><td><span class="ar"><b>تَ</b>جْلِسُ البِنْتُ</span></td></tr></table>
        <p>Build sentences and watch the verb follow its doer.</p>`,
      widget: "builder",
      wd: { title: "Make the verb agree", slots: [
        { label: "time", opts: [["مَاضٍ", "past"], ["مُضَارِعٌ", "present"]] },
        { label: "verb", opts: [["جَلَسَ", "sit", "جَلَسَ", "يَجْلِسُ", "sat", "sits"], ["حَضَرَ", "come", "حَضَرَ", "يَحْضُرُ", "came", "comes"], ["ضَحِكَ", "laugh", "ضَحِكَ", "يَضْحَكُ", "laughed", "laughs"]] },
        { label: "doer · الفاعل", opts: [["الوَلَدُ", "the boy", "m"], ["البِنْتُ", "the girl", "f"], ["الأَوْلَادُ", "the boys", "mp"], ["البَنَاتُ", "the girls", "fp"], ["الطَّبِيبَةُ", "the (female) doctor", "f"]] }
      ], make: (s) => {
        const past = s[0][1] === "past", v = s[1], d = s[2], fem = d[2][0] === "f";
        const verb = past ? (fem ? v[2] + "[[تِ]]" : v[2]) : (fem ? "[[تَ]]" + v[3].slice(2) : "[[يَ]]" + v[3].slice(2));
        const note = (fem ? (past ? "Feminine doer → past verb takes ـتْ (with kasra before ال: ـتِ)." : "Feminine doer → present verb starts with تَـ.") : (past ? "Masculine doer → plain past verb." : "Masculine doer → present verb starts with يَـ.")) + (d[2].length > 1 ? " The doer is plural, but the verb stays <b>singular</b> because it comes first." : "");
        return { ar: verb + " " + d[0], en: d[1].replace(/^./, (c) => c.toUpperCase()) + " " + (past ? v[4] : (d[2].length > 1 ? v[5].replace(/s$/, "") : v[5])) + ".", note };
      } },
      warn: `When the verb comes <b>first</b>, it stays <b>singular</b> even if the doer is plural: <span class="ar">حَضَرَ الطُّلَّابُ</span> (the students came), never <span class="ar">حَضَرُوا الطُّلَّابُ</span>. It only shows masculine or feminine: <span class="ar">حَضَرَتِ الطَّالِبَاتُ</span>.`,
      check: [["Correct: ___ البِنْتُ.", ["ضَحِكَتِ", "ضَحِكَ"], 0, "Feminine doer → ـتْ.", "ضَحِكَتِ البِنْتُ"], ["Correct: ___ الفَلَّاحُونَ إِلَى الحَقْلِ.", ["ذَهَبَ", "ذَهَبُوا"], 0, "Verb first → singular.", "ذَهَبَ الفَلَّاحُونَ إِلَى الحَقْلِ"]] },

    { id: "always", t: "Every verb has a doer", ar: "لكل فعل فاعل", pos: "sentence structure",
      b: `<p>Every verb has a fāʿil — sometimes it is a separate noun (<span class="ar">جَاءَ الطَّبِيبُ</span>), sometimes it is inside the verb itself: in <span class="ar">كَتَبْتُ</span> (I wrote) the <span class="ar">ـتُ</span> is the doer; in <span class="ar">أَكْتُبُ</span> (I write) the doer <i>I</i> is understood from the <span class="ar">أَ</span>. Part 2 of the book calls these pronoun doers. In this lesson we practise doers that are separate nouns.</p>
        <p>Can a doer come before its verb? In <span class="ar">العُصْفُورُ طَارَ</span>, <span class="ar">العُصْفُورُ</span> is no longer called fāʿil but <b>mubtadaʾ</b> (the subject of a nominal sentence) — lesson 7.</p>`,
      check: [["In سَافَرْتُ أَمْسِ the doer is…", ["ـتُ (I)", "أَمْسِ"], 0, "The ـتُ attached to the verb is its doer.", false]] }
  ],

  scenes: [
    { h: "صَبَاحٌ فِي القَرْيَةِ", en: "Morning in the village", pic: "🐓", lines: [
      ["", "صَاحَ الدِّيكُ، وَطَلَعَتِ الشَّمْسُ.", "The rooster crowed, and the sun rose."],
      ["", "خَرَجَ الفَلَّاحُ إِلَى الحَقْلِ.", "The farmer went out to the field."],
      ["", "يَزْرَعُ الفَلَّاحُ القَمْحَ، وَتَحْلُبُ الفَتَاةُ البَقَرَةَ.", "The farmer sows wheat, and the young woman milks the cow."],
      ["", "غَرَّدَتِ العَصَافِيرُ عَلَى الأَشْجَارِ.", "The sparrows sang on the trees."],
      ["", "بَكَى الطِّفْلُ، فَحَمَلَتْهُ أُمُّهُ.", "The baby cried, so his mother picked him up."],
      ["", "ذَهَبَ التَّلَامِيذُ إِلَى المَدْرَسَةِ.", "The pupils went to school."]],
      note: "Find the fāʿil of each verb: الدِّيكُ، الشَّمْسُ، الفَلَّاحُ، الفَتَاةُ، العَصَافِيرُ، الطِّفْلُ، أُمُّهُ، التَّلَامِيذُ — all with ḍamma. Notice طَلَعَتْ، تَحْلُبُ، غَرَّدَتْ، حَمَلَتْ: feminine doers." },
    { h: "مَنْ فَعَلَ ذَلِكَ؟", en: "Who did that?", pic: "🔍", lines: [
      ["المُعَلِّمُ", "مَنْ كَسَرَ الزُّجَاجَ؟", "Who broke the glass?"],
      ["سَمِيرٌ", "كَسَرَتْهُ الكُرَةُ يَا أُسْتَاذُ.", "The ball broke it, sir."],
      ["المُعَلِّمُ", "وَمَنْ رَمَى الكُرَةَ؟", "And who threw the ball?"],
      ["سَمِيرٌ", "رَمَاهَا عَلِيٌّ.", "Ali threw it."],
      ["عَلِيٌّ", "أَنَا آسِفٌ، يَا أُسْتَاذُ. سَأُصْلِحُ الزُّجَاجَ.", "I'm sorry, sir. I'll fix the glass."],
      ["المُعَلِّمُ", "أَحْسَنْتَ يَا عَلِيُّ، الصِّدْقُ جَمِيلٌ.", "Well done, Ali — honesty is beautiful."]],
      note: "Each answer gives the fāʿil: الكُرَةُ (with a feminine verb كَسَرَتْ) and عَلِيٌّ (with tanwīn)." }
  ],

  vocab: [
    ["فَاعِلٌ", "doer, subject of a verb", "n.m", "", "grammar term", "", "Grammar words"],
    ["مَرْفُوعٌ", "in the nominative (rafʿ)", "adj.", "", "grammar term", "", "Grammar words"],
    ["عُصْفُورٌ", "sparrow", "n.m", "🐦", "", "عَصَافِيرُ", "Animals"],
    ["دِيكٌ", "rooster", "n.m", "🐓", "", "دِيَكَةٌ", "Animals"],
    ["بَقَرَةٌ", "cow", "n.f", "🐄", "", "بَقَرٌ، أَبْقَارٌ", "Animals"],
    ["ثُعْبَانٌ", "snake", "n.m", "🐍", "", "ثَعَابِينُ", "Animals"],
    ["طَبِيبٌ", "doctor", "n.m", "🧑‍⚕️", "f. طَبِيبَةٌ", "أَطِبَّاءُ", "People"],
    ["طِفْلٌ", "child, baby", "n.m", "👶", "", "أَطْفَالٌ", "People"],
    ["فَتَاةٌ", "young woman, girl", "n.f", "👩", "", "فَتَيَاتٌ", "People"],
    ["تِلْمِيذٌ", "pupil", "n.m", "🧒", "", "تَلَامِيذُ", "People"],
    ["طَالِبٌ", "student", "n.m", "🧑‍🎓", "f. طَالِبَةٌ", "طُلَّابٌ", "People"],
    ["أُسْتَاذٌ", "teacher, sir", "n.m", "👨‍🏫", "", "أَسَاتِذَةٌ", "People"],
    ["قِطَارٌ", "train", "n.m", "🚆", "", "قُطُرٌ", "Things"],
    ["زُجَاجٌ", "glass", "n.m", "🪟", "", "", "Things"],
    ["قَرْيَةٌ", "village", "n.f", "🏘️", "", "قُرًى", "Things"],
    ["طَارَ", "to fly", "v.", "", "يَطِيرُ", "", "Verbs"],
    ["صَاحَ", "to shout, crow", "v.", "", "يَصِيحُ", "", "Verbs"],
    ["حَضَرَ", "to come, be present", "v.", "", "يَحْضُرُ", "", "Verbs"],
    ["بَكَى", "to cry", "v.", "", "يَبْكِي", "", "Verbs"],
    ["زَرَعَ", "to plant, sow", "v.", "", "يَزْرَعُ", "", "Verbs"],
    ["حَلَبَ", "to milk", "v.", "", "يَحْلُبُ", "", "Verbs"],
    ["لَدَغَ", "to sting, bite (snake)", "v.", "", "يَلْدَغُ", "", "Verbs"],
    ["اِمْتَحَنَ", "to examine, test", "v.", "", "يَمْتَحِنُ", "", "Verbs"],
    ["ضَحِكَ", "to laugh", "v.", "", "يَضْحَكُ", "", "Verbs"],
    ["كَسَرَ", "to break", "v.", "", "يَكْسِرُ", "", "Verbs"],
    ["رَمَى", "to throw", "v.", "", "يَرْمِي", "", "Verbs"],
    ["حَمَلَ", "to carry, pick up", "v.", "", "يَحْمِلُ", "", "Verbs"],
    ["عَطِشَ", "to be thirsty", "v.", "", "يَعْطَشُ", "", "Verbs"]
  ],

  exercises: [
    { k: "irab", t: "اِسْتَخْرِجِ الفَاعِلَ · Is the highlighted word the doer?", en: "Decide whether each highlighted word is the fāʿil of the sentence.", cats: ["فاعل · doer", "ليس فاعلًا · not the doer"], items: [
      ["صَاحَ [الدِّيكُ].", "0", "Who crowed? The rooster."], ["وَقَفَ القِطَارُ [فِي] المَحَطَّةِ.", "1", "في is a particle."], ["بَكَى [الطِّفْلُ].", "0", ""], ["جَاءَ [الطَّبِيبُ].", "0", ""], ["لَعِبَ الأَوْلَادُ فِي [الحَدِيقَةِ].", "1", "After a preposition: majrūr, not the doer."], ["لَدَغَ [الثُّعْبَانُ] الرَّجُلَ.", "0", "Who bit? The snake."], ["لَدَغَ الثُّعْبَانُ [الرَّجُلَ].", "1", "The man was bitten: he is the object (next lesson)."], ["زَرَعَ [الفَلَّاحُ] القُطْنَ.", "0", ""]] },
    { k: "shakl", t: "اضْبِطْ آخِرَ الفَاعِلِ · Vowel the doer", en: "Give each fāʿil its ending.", items: [
      "حَضَرَ الطَّبِيب{ُ}", "سَافَرَ مُحَمَّد{ٌ}", "يَنْبَحُ الكَلْب{ُ}", "طَارَتِ الطَّائِرَة{ُ}", "عَطِشَ العَامِل{ُ}", "وَصَلَ قِطَار{ٌ}"] },
    { k: "gap", t: "ضَعْ فَاعِلًا · Give each verb a doer", en: "Choose a suitable doer from the bank.", bank: true, items: [
      ["يَشْرَبُ ___ المَاءَ.", "العَطْشَانُ"], ["يَرْكَبُ ___ الحِصَانَ.", "الفَارِسُ"], ["سَافَرَ ___ فِي السَّفِينَةِ.", "البَحَّارُ"], ["تَطِيرُ ___ فِي الجَوِّ.", "الطَّائِرَةُ"], ["حَلَبَتِ ___ البَقَرَةَ.", "الفَتَاةُ"]] },
    { k: "mcq", t: "اِخْتَرِ الفِعْلَ المُنَاسِبَ · Choose the right verb form", items: [
      ["___ البِنْتُ.", ["نَامَتِ", "نَامَ"], 0, "Feminine doer."], ["___ الطَّالِبَاتُ.", ["حَضَرَتِ", "حَضَرْنَ", "حَضَرَ"], 0, "Verb first: singular, but feminine."], ["___ الفَلَّاحُونَ.", ["زَرَعَ", "زَرَعُوا"], 0, "Verb first stays singular."], ["___ الشَّمْسُ. (present)", ["تَطْلُعُ", "يَطْلُعُ"], 0, "الشمس is feminine → تـ."], ["___ الوَلَدُ. (present)", ["يَضْحَكُ", "تَضْحَكُ"], 0, "Masculine → يـ."]] },
    { k: "tr", t: "تَرْجِمْ · Translate", en: "Write the Arabic (verb first). Ḥarakāt optional.", items: [
      ["The doctor came.", "حضر الطبيب|جاء الطبيب|حَضَرَ الطَّبِيبُ"], ["The girl laughed.", "ضحكت البنت|ضَحِكَتِ البِنْتُ"], ["The pupils went to school.", "ذهب التلاميذ إلى المدرسة|ذَهَبَ التَّلَامِيذُ إِلَى المَدْرَسَةِ"], ["The rooster crows. (present)", "يصيح الديك|يَصِيحُ الدِّيكُ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["The fāʿil comes after its verb.", true, ""], ["The fāʿil ends in fatḥa.", false, "It is marfūʿ: ḍamma."], ["حَضَرُوا الطُّلَّابُ is correct.", false, "Verb first stays singular: حَضَرَ الطُّلَّابُ."], ["With a feminine doer the past verb takes ـتْ.", true, "نَامَتِ البِنْتُ."], ["In نَجَحْتُ the doer is ـتُ.", true, ""], ["A noun after a preposition can be the fāʿil.", false, "After a preposition a noun is majrūr."]] }
  ],

  drills: [
    ["The fāʿil is…", ["مرفوع (ḍamma)", "منصوب (fatḥa)", "مجرور (kasra)"], 0, "Always rafʿ."],
    ["Fāʿil in جَرَى الحِصَانُ فِي المَيْدَانِ:", ["الحِصَانُ", "المَيْدَانِ", "جَرَى"], 0, "Who ran? The horse."],
    ["Correct ending: وَصَلَ الضَّيْف___", ["ـُ", "ـَ", "ـِ"], 0, "Fāʿil → ḍamma: الضَّيْفُ."],
    ["Correct: ___ الدَّجَاجَةُ.", ["بَاضَتِ", "بَاضَ"], 0, "Feminine doer."],
    ["Correct: ___ اللَّاعِبُونَ. (verb first)", ["فَازَ", "فَازُوا"], 0, "The verb before its doer stays singular."],
    ["Indefinite fāʿil: حَضَرَ ___", ["طَبِيبٌ", "طَبِيبًا", "طَبِيبٍ"], 0, "Tanwīn of ḍamma."],
    ["How do you find the fāʿil?", ["ask “who/what did it?” after the verb", "take the last word", "take the word with ال"], 0, "مَنْ / مَاذَا + the verb."],
    ["Parse العُصْفُورُ in طَارَ العُصْفُورُ:", ["فاعل مرفوع وعلامة رفعه الضمة", "مفعول به منصوب", "مبتدأ مرفوع"], 0, "It comes after its verb and did the action."],
    ["Present with a feminine doer: ___ الوَرْدَةُ (to wither)", ["تَذْبُلُ", "يَذْبُلُ"], 0, "تـ for she."],
    ["In العُصْفُورُ طَارَ, العصفور is called…", ["mubtadaʾ (it comes before the verb)", "fāʿil"], 0, "A fāʿil must come after its verb (lesson 7)."],
    ["Which sentence has a fāʿil with tanwīn?", ["نَجَحَ خَالِدٌ", "نَجَحَ الطَّالِبُ", "نَجَحَتْ فَاطِمَةُ"], 0, "خالدٌ."],
    ["Fāʿil in يَلْعَبُ الأَطْفَالُ بِالكُرَةِ:", ["الأَطْفَالُ", "الكُرَةِ", "يَلْعَبُ"], 0, "Who plays? The children."]
  ],

  comp: [
    ["Who went out to the field?", ["the farmer", "the rooster", "the pupils"], 0, 0],
    ["Who milked the cow?", ["the young woman", "the farmer", "the mother"], 0, 0],
    ["What did the mother do when the baby cried?", ["she picked him up", "she sang", "she went to the field"], 0, 0],
    ["What broke the glass?", ["the ball", "Ali's hand", "a stone"], 0, 1],
    ["What does Ali promise?", ["to fix the glass", "to play again", "to go home"], 0, 1]
  ],

  cheat: `<h3>الفاعل · The doer</h3>
    <div class="rule"><span class="ar">الفَاعِلُ: اسْمٌ مَرْفُوعٌ تَقَدَّمَهُ فِعْلٌ، وَدَلَّ عَلَى الَّذِي فَعَلَ الفِعْلَ.</span></div>
    <div class="blocks"><div class="blk c2"><span class="ar">نَبَحَ</span><small>verb</small></div><div class="blk c1"><span class="ar">الكَلْبُ</span><small>fāʿil · ـُ</small></div></div>
    <ul><li>Find it: verb + <span class="ar">مَنْ؟ / مَاذَا؟</span></li><li>Ending: <span class="ar">ـُ</span> (definite) / <span class="ar">ـٌ</span> (indefinite)</li>
    <li>Feminine doer: <span class="ar">جَلَسَتِ البِنْتُ · تَجْلِسُ البِنْتُ</span></li><li>Verb first stays singular: <span class="ar">حَضَرَ الطُّلَّابُ · حَضَرَتِ الطَّالِبَاتُ</span></li></ul>
    <h3>Parsing</h3><p class="ar">الطَّبِيبُ: فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</p>`,
  mistakes: [
    ["حَضَرَ الطَّبِيبَ", "حَضَرَ الطَّبِيبُ", "The doer is marfūʿ: ḍamma."],
    ["ذَهَبُوا التَّلَامِيذُ", "ذَهَبَ التَّلَامِيذُ", "A verb before its doer stays singular."],
    ["طَلَعَ الشَّمْسُ", "طَلَعَتِ الشَّمْسُ", "الشمس is feminine, so the verb takes ـتْ."],
    ["يَحْلُبُ الفَتَاةُ البَقَرَةَ", "تَحْلُبُ الفَتَاةُ البَقَرَةَ", "Feminine doer → present starts with تـ."]
  ],
  tips: [
    { t: "Verb + who?", b: `Make it automatic: every time you read a verb, ask <span class="ar">مَنْ؟</span> and find the doer. Read the scene in the Read tab and say the doer of each verb aloud with its ḍamma.` },
    { t: "Listen for the ـتْ", b: `In fast speech the feminine ـتْ is easy to miss. In the Listen tab, slow the audio down and listen for <i>-at</i> in <span class="ar">طَلَعَتِ، غَرَّدَتِ، حَمَلَتْهُ</span>.` },
    { t: "Write it the book's way", b: `Parse three doers a day in the book's formula: <span class="ar">… فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ</span>. Saying the formula aloud is exactly what Arab pupils do.` }
  ]
});
