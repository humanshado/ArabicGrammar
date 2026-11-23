// الدرس ٧ — المبتدأ والخبر (PDF pp. 37–40)
COURSE.add({
  n: 7, pages: [37, 40], method: true,
  summary: "The sentence that starts with a noun has two parts: the mubtadaʾ (المبتدأ), the noun we start with and talk about, and the khabar (الخبر), what we say about it. Both are marfūʿ (ḍamma). The mubtadaʾ is usually definite, the khabar usually indefinite, and the khabar agrees with the mubtadaʾ in gender.",
  objectives: [
    "find the mubtadaʾ and the khabar of a sentence",
    "give both their ending: ḍamma ـُ / ـٌ",
    "use a definite mubtadaʾ and an indefinite khabar: البَيْتُ وَاسِعٌ",
    "make the khabar agree in gender: الشَّجَرَةُ مُثْمِرَةٌ",
    "tell “the big house” (a phrase) from “the house is big” (a sentence)"
  ],

  lesson: [
    { id: "parts", t: "What we talk about, and what we say about it", ar: "المبتدأ والخبر", pos: "sentence structure", pages: "37–38",
      b: `<p>In <span class="ar">الدَّوَاءُ مُرٌّ</span> (the medicine is bitter) we <b>start</b> with <span class="ar">الدَّوَاءُ</span> — that is why it is called the <b>mubtadaʾ</b> (<span class="ar">المُبْتَدَأُ</span>, “the thing begun with”). Then we give some <b>news</b> about it: <span class="ar">مُرٌّ</span>. That word is the <b>khabar</b> (<span class="ar">الخَبَرُ</span>, “the news, the information”). Together they make a complete sentence.</p>
        <div class="blocks"><div class="blk c1"><span class="ar">الدَّوَاءُ</span><small>mubtadaʾ · what we talk about</small></div><div class="blk c5"><span class="ar">مُرٌّ</span><small>khabar · what we say about it</small></div></div>`,
      widget: "parse",
      wd: { legend: { mub: ["mubtadaʾ", "مبتدأ"], khb: ["khabar", "خبر"] }, game: true, sents: [
        { en: "The air is renewed.", w: [["الهَوَاءُ", "mub", "We start with it: mubtadaʾ, ḍamma."], ["مُتَجَدِّدٌ", "khb", "What we say about the air: khabar, ḍamma (tanwīn)."]] },
        { en: "The merchant is honest.", w: [["التَّاجِرُ", "mub", "Mubtadaʾ."], ["أَمِينٌ", "khb", "Khabar."]] },
        { en: "The garden is spacious.", w: [["الحَدِيقَةُ", "mub", "Mubtadaʾ (feminine)."], ["فَسِيحَةٌ", "khb", "Khabar — feminine too, agreeing with الحديقة."]] },
        { en: "The poor man is in need.", w: [["الفَقِيرُ", "mub", "Mubtadaʾ."], ["مُحْتَاجٌ", "khb", "Khabar."]] },
        { en: "Ali is present.", w: [["عَلِيٌّ", "mub", "A name is definite by itself, so it can be a mubtadaʾ."], ["حَاضِرٌ", "khb", "Khabar."]] }
      ] },
      rule: `<p><span class="ar">المُبْتَدَأُ: اسْمٌ مَرْفُوعٌ فِي أَوَّلِ الجُمْلَةِ.</span><br><span class="ar">الخَبَرُ: اسْمٌ مَرْفُوعٌ يُكَوِّنُ مَعَ المُبْتَدَأِ جُمْلَةً مُفِيدَةً.</span></p><p>The mubtadaʾ is a noun in rafʿ at the start of the sentence. The khabar is a noun in rafʿ that makes a complete sentence with the mubtadaʾ.</p>`,
      check: [["Khabar in الشَّجَرَةُ مُثْمِرَةٌ?", ["مُثْمِرَةٌ", "الشَّجَرَةُ"], 0, "What do we say about the tree? That it bears fruit.", "مُثْمِرَةٌ"], ["Both mubtadaʾ and khabar are…", ["marfūʿ (ḍamma)", "manṣūb (fatḥa)", "one marfūʿ, one manṣūb"], 0, "Both take ḍamma.", false]] },

    { id: "deftness", t: "Definite subject, indefinite predicate", ar: "المبتدأ معرفة والخبر نكرة", pos: "sentence structure",
      b: `<p>Normally the mubtadaʾ is <b>definite</b> — with <span class="ar">الـ</span>, a name, or a pronoun — because we talk about something the listener knows. The khabar is normally <b>indefinite</b>, with tanwīn, because it brings new information. This is how you can hear the difference between a sentence and a phrase:</p>
        <table class="g"><tr><th>words</th><th>what it is</th><th>meaning</th></tr>
        <tr><td><span class="ar">البَيْتُ وَاسِعٌ</span></td><td>definite + indefinite → <b>sentence</b></td><td>The house is spacious.</td></tr>
        <tr><td><span class="ar">البَيْتُ الوَاسِعُ</span></td><td>definite + definite → <b>phrase</b></td><td>the spacious house … (and?)</td></tr>
        <tr><td><span class="ar">بَيْتٌ وَاسِعٌ</span></td><td>indefinite + indefinite → <b>phrase</b></td><td>a spacious house … (and?)</td></tr></table>
        <p>The second and third are a noun with its adjective (lesson 16); they still need a khabar: <span class="ar">البَيْتُ الوَاسِعُ جَمِيلٌ</span>.</p>`,
      widget: "meter",
      wd: { title: "Sentence or phrase?", items: [
        ["البَيْتُ وَاسِعٌ", true, "Definite + indefinite: a mubtadaʾ and a khabar."],
        ["البَيْتُ الوَاسِعُ", false, "Both definite: a noun and its adjective — “the spacious house”. We wait for the news."],
        ["الجَوُّ بَارِدٌ", true, "The weather is cold."],
        ["القَمَرُ المُنِيرُ", false, "“The shining moon” — a phrase."],
        ["القَمَرُ مُنِيرٌ", true, "The moon is shining."],
        ["مُحَمَّدٌ مُجْتَهِدٌ", true, "A name is definite: Muhammad is hard-working."],
        ["كِتَابٌ جَدِيدٌ", false, "“A new book” — a phrase."]] },
      check: [["Which is a sentence?", ["الطَّرِيقُ طَوِيلٌ", "الطَّرِيقُ الطَّوِيلُ"], 0, "Definite mubtadaʾ + indefinite khabar."]] },

    { id: "agree", t: "The khabar agrees in gender", ar: "مطابقة الخبر للمبتدأ", pos: "agreement", pages: "38–39",
      b: `<p>When the khabar is a describing word, it takes the <b>gender</b> of the mubtadaʾ: masculine with masculine, feminine (<span class="ar">ـَةٌ</span>) with feminine. (Part 3, lesson 52, adds agreement in number: dual and plural.)</p>`,
      widget: "builder",
      wd: { title: "Make the khabar agree", slots: [
        { label: "mubtadaʾ · المبتدأ", opts: [["البُسْتَانُ", "the orchard", "m"], ["الحَدِيقَةُ", "the garden", "f"], ["القَمَرُ", "the moon", "m"], ["الشَّمْسُ", "the sun", "f"], ["الطَّالِبُ", "the student (m)", "m"], ["الطَّالِبَةُ", "the student (f)", "f"]] },
        { label: "khabar · الخبر", opts: [["جَمِيلٌ", "beautiful", "جَمِيلٌ", "جَمِيلَةٌ"], ["كَبِيرٌ", "big", "كَبِيرٌ", "كَبِيرَةٌ"], ["مُشْرِقٌ", "shining", "مُشْرِقٌ", "مُشْرِقَةٌ"], ["مُجْتَهِدٌ", "hard-working", "مُجْتَهِدٌ", "مُجْتَهِدَةٌ"]] }
      ], make: (s) => {
        const f = s[0][2] === "f", k = s[1];
        return { ar: s[0][0] + " " + (f ? k[3].replace("َةٌ", "[[َةٌ]]") : k[2]), en: s[0][1].replace(/^./, (c) => c.toUpperCase()) + " is " + k[1] + ".", note: f ? "Feminine mubtadaʾ → the khabar takes ـَةٌ." : "Masculine mubtadaʾ → masculine khabar." };
      } },
      warn: `Some feminine nouns have no <span class="ar">ة</span>: <span class="ar">الشَّمْسُ، الأَرْضُ، الدَّارُ، الحَرْبُ</span>. The khabar is still feminine: <span class="ar">الشَّمْسُ مُشْرِقَةٌ</span>.`,
      check: [["Correct: الوَرْدَةُ ___", ["ذَابِلَةٌ", "ذَابِلٌ"], 0, "Feminine mubtadaʾ.", "الوَرْدَةُ ذَابِلَةٌ"], ["Correct: الأَرْضُ ___", ["وَاسِعَةٌ", "وَاسِعٌ"], 0, "الأرض is feminine without ة.", "الأَرْضُ وَاسِعَةٌ"]] },

    { id: "parse", t: "Parsing the nominal sentence", ar: "إعراب المبتدأ والخبر", pos: "case endings",
      b: `<p>The book's model answer:</p>
        <div class="rule"><p><span class="ar">الهَوَاءُ مُتَجَدِّدٌ.</span></p>
        <p><span class="ar">الهَوَاءُ: مُبْتَدَأٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p>
        <p><span class="ar">مُتَجَدِّدٌ: خَبَرٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p></div>
        <p>When the book asks you to <b>make a noun a mubtadaʾ and give it a khabar</b> (<span class="ar">اجْعَلْ كُلَّ اسْمٍ مُبْتَدَأً وَأَخْبِرْ عَنْهُ</span>), put the noun first with ḍamma, then say something true about it with tanwīn: <span class="ar">السَّرِيرُ</span> → <span class="ar">السَّرِيرُ مُرِيحٌ</span> (the bed is comfortable).</p>`,
      check: [["Make الحَرُّ (heat) a mubtadaʾ:", ["الحَرُّ شَدِيدٌ", "اشْتَدَّ الحَرُّ", "الحَرُّ الشَّدِيدُ"], 0, "Mubtadaʾ first, then an indefinite khabar."]] }
  ],

  scenes: [
    { h: "بَيْتُنَا", en: "Our house", pic: "🏡", lines: [
      ["", "بَيْتُنَا صَغِيرٌ، وَلَكِنَّهُ نَظِيفٌ.", "Our house is small, but it is clean."],
      ["", "الحَدِيقَةُ فَسِيحَةٌ، وَالأَزْهَارُ جَمِيلَةٌ.", "The garden is spacious, and the flowers are beautiful."],
      ["", "الشَّجَرَةُ مُثْمِرَةٌ، وَالثَّمَرُ نَاضِجٌ.", "The tree is bearing fruit, and the fruit is ripe."],
      ["", "الحُجْرَةُ مُضِيئَةٌ، وَالنَّافِذَةُ مَفْتُوحَةٌ.", "The room is bright, and the window is open."],
      ["", "الهَوَاءُ مُتَجَدِّدٌ، وَالجَوُّ مُعْتَدِلٌ.", "The air is fresh, and the weather is mild."],
      ["", "أَبِي تَاجِرٌ أَمِينٌ، وَأُمِّي طَبِيبَةٌ مَاهِرَةٌ.", "My father is an honest merchant, and my mother is a skilled doctor."]],
      note: "Every clause is mubtadaʾ + khabar, both with ḍamma. Feminine mubtadaʾ → feminine khabar: الحديقةُ فسيحةٌ، الحجرةُ مضيئةٌ، أمّي طبيبةٌ." },
    { h: "عِنْدَ الطَّبِيبِ", en: "At the doctor's", pic: "🩺", lines: [
      ["الطَّبِيبُ", "كَيْفَ حَالُكَ يَا سَمِيرُ؟", "How are you, Samir?"],
      ["سَمِيرٌ", "رَأْسِي ثَقِيلٌ، وَجِسْمِي ضَعِيفٌ.", "My head is heavy, and my body is weak."],
      ["الطَّبِيبُ", "حَرَارَتُكَ مُرْتَفِعَةٌ قَلِيلًا. هَذَا الدَّوَاءُ مُفِيدٌ.", "Your temperature is a little high. This medicine is helpful."],
      ["سَمِيرٌ", "هَلِ الدَّوَاءُ مُرٌّ؟", "Is the medicine bitter?"],
      ["الطَّبِيبُ", "نَعَمْ، الدَّوَاءُ مُرٌّ، وَلَكِنَّ الشِّفَاءَ حُلْوٌ!", "Yes, the medicine is bitter, but recovery is sweet!"],
      ["سَمِيرٌ", "أَنَا شَاكِرٌ يَا دُكْتُورُ.", "I'm grateful, doctor."]],
      note: "Pronouns can be mubtadaʾ too: أَنَا شَاكِرٌ. In هَذَا الدَّوَاءُ مُفِيدٌ, the mubtadaʾ is هذا (this) — lesson 46." }
  ],

  vocab: [
    ["مُبْتَدَأٌ", "subject of a nominal sentence", "n.m", "", "grammar term", "", "Grammar words"],
    ["خَبَرٌ", "predicate; news", "n.m", "", "grammar term", "أَخْبَارٌ", "Grammar words"],
    ["دَوَاءٌ", "medicine", "n.m", "💊", "", "أَدْوِيَةٌ", "Health"],
    ["مُرٌّ", "bitter", "adj.", "", "f. مُرَّةٌ", "", "Health"],
    ["حُلْوٌ", "sweet", "adj.", "", "f. حُلْوَةٌ", "", "Health"],
    ["شِفَاءٌ", "recovery, cure", "n.m", "", "", "", "Health"],
    ["رَأْسٌ", "head", "n.m", "🗣️", "", "رُءُوسٌ", "Health"],
    ["جِسْمٌ", "body", "n.m", "🧍", "", "أَجْسَامٌ", "Health"],
    ["حَرَارَةٌ", "heat; temperature", "n.f", "🌡️", "", "", "Health"],
    ["هَوَاءٌ", "air", "n.m", "🌬️", "", "", "House and weather"],
    ["سَرِيرٌ", "bed", "n.m", "🛏️", "", "أَسِرَّةٌ", "House and weather"],
    ["أَرْضٌ", "earth, ground", "n.f", "🌍", "feminine without ة", "أَرَاضٍ", "House and weather"],
    ["تَاجِرٌ", "merchant", "n.m", "🧑‍💼", "", "تُجَّارٌ", "People"],
    ["فَقِيرٌ", "poor (person)", "adj.", "", "f. فَقِيرَةٌ", "فُقَرَاءُ", "People"],
    ["أَمِينٌ", "honest, trustworthy", "adj.", "", "f. أَمِينَةٌ", "", "Describing words"],
    ["مُحْتَاجٌ", "in need", "adj.", "", "f. مُحْتَاجَةٌ", "", "Describing words"],
    ["مُتَجَدِّدٌ", "renewed, fresh", "adj.", "", "f. مُتَجَدِّدَةٌ", "", "Describing words"],
    ["فَسِيحٌ", "spacious", "adj.", "", "f. فَسِيحَةٌ", "", "Describing words"],
    ["وَاسِعٌ", "wide, roomy", "adj.", "", "f. وَاسِعَةٌ", "", "Describing words"],
    ["مُثْمِرٌ", "fruit-bearing", "adj.", "", "f. مُثْمِرَةٌ", "", "Describing words"],
    ["نَاضِجٌ", "ripe", "adj.", "", "f. نَاضِجَةٌ", "", "Describing words"],
    ["مُضِيءٌ", "bright, lit", "adj.", "", "f. مُضِيئَةٌ", "", "Describing words"],
    ["مَفْتُوحٌ", "open", "adj.", "", "f. مَفْتُوحَةٌ", "", "Describing words"],
    ["مُعْتَدِلٌ", "mild, moderate", "adj.", "", "f. مُعْتَدِلَةٌ", "", "Describing words"],
    ["نَظِيفٌ", "clean", "adj.", "", "f. نَظِيفَةٌ", "", "Describing words"],
    ["ثَقِيلٌ", "heavy", "adj.", "", "f. ثَقِيلَةٌ", "", "Describing words"],
    ["ضَعِيفٌ", "weak", "adj.", "", "f. ضَعِيفَةٌ", "", "Describing words"],
    ["مُجْتَهِدٌ", "hard-working", "adj.", "", "f. مُجْتَهِدَةٌ", "", "Describing words"],
    ["حَاضِرٌ", "present", "adj.", "", "f. حَاضِرَةٌ", "", "Describing words"],
    ["مُرِيحٌ", "comfortable", "adj.", "", "f. مُرِيحَةٌ", "", "Describing words"],
    ["مَاهِرٌ", "skilled", "adj.", "", "f. مَاهِرَةٌ", "", "Describing words"]
  ],

  exercises: [
    { k: "irab", t: "مبتدأ أم خبر؟ · Mubtadaʾ or khabar?", cats: ["مبتدأ", "خبر"], items: [
      ["[الدَّوَاءُ] مُرٌّ.", "0", ""], ["الدَّوَاءُ [مُرٌّ].", "1", ""], ["[الحَدِيقَةُ] فَسِيحَةٌ.", "0", ""], ["التَّاجِرُ [أَمِينٌ].", "1", ""], ["[عَلِيٌّ] حَاضِرٌ.", "0", "A name can begin the sentence."], ["الشَّجَرَةُ [مُثْمِرَةٌ].", "1", ""]] },
    { k: "shakl", t: "اضْبِطْ · Vowel the mubtadaʾ and the khabar", items: [
      "الجَوّ{ُ} بَارِد{ٌ}", "الشَّمْس{ُ} مُشْرِقَة{ٌ}", "البَحْر{ُ} هَائِج{ٌ}", "المَطَر{ُ} غَزِير{ٌ}", "السَّمَاء{ُ} صَافِيَة{ٌ}"] },
    { k: "gap", t: "أَخْبِرْ · Give each mubtadaʾ a khabar", en: "Choose a suitable khabar that agrees in gender.", bank: true, items: [
      ["السَّرِيرُ ___ .", "مُرِيحٌ"], ["الوَرْدَةُ ___ .", "جَمِيلَةٌ"], ["الكِتَابُ ___ .", "مُفِيدٌ"], ["النَّافِذَةُ ___ .", "مَفْتُوحَةٌ"], ["الثَّمَرُ ___ .", "نَاضِجٌ"]] },
    { k: "mcq", t: "اِخْتَرِ الخَبَرَ المُطَابِقَ · Choose the agreeing khabar", items: [
      ["الحُجْرَةُ …", ["مُضِيئَةٌ", "مُضِيءٌ"], 0, "Feminine."], ["الشَّمْسُ …", ["مُشْرِقَةٌ", "مُشْرِقٌ"], 0, "Feminine without ة."], ["القَمَرُ …", ["مُنِيرٌ", "مُنِيرَةٌ"], 0, "Masculine."], ["Which is a complete sentence?", ["الطَّرِيقُ طَوِيلٌ", "الطَّرِيقُ الطَّوِيلُ", "طَرِيقٌ طَوِيلٌ"], 0, "Definite + indefinite."], ["الطَّالِبَةُ …", ["مُجْتَهِدَةٌ", "مُجْتَهِدٌ"], 0, ""]] },
    { k: "tr", t: "تَرْجِمْ · Translate", en: "Nominal sentences. Ḥarakāt optional.", items: [
      ["The garden is spacious.", "الحديقة فسيحة|الحَدِيقَةُ فَسِيحَةٌ"], ["The medicine is bitter.", "الدواء مر|الدَّوَاءُ مُرٌّ"], ["The weather is mild.", "الجو معتدل|الجَوُّ مُعْتَدِلٌ"], ["The window is open.", "النافذة مفتوحة|النَّافِذَةُ مَفْتُوحَةٌ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["The mubtadaʾ is marfūʿ and the khabar is manṣūb.", false, "Both are marfūʿ."], ["البَيْتُ الجَمِيلُ is a complete sentence.", false, "Both definite: a noun and its adjective."], ["The khabar agrees with the mubtadaʾ in gender.", true, ""], ["الأَرْضُ وَاسِعٌ is correct.", false, "الأرض is feminine: واسعةٌ."], ["A name like عَلِيٌّ can be a mubtadaʾ.", true, "Names are definite."]] }
  ],

  drills: [
    ["Mubtadaʾ in التَّاجِرُ أَمِينٌ:", ["التَّاجِرُ", "أَمِينٌ"], 0, ""],
    ["The khabar is…", ["مرفوع", "منصوب", "مجرور"], 0, ""],
    ["Correct: السَّمَاءُ ___", ["صَافِيَةٌ", "صَافِيَةً", "صَافٍ"], 0, "Feminine, marfūʿ."],
    ["Correct: البَحْرُ ___", ["هَائِجٌ", "هَائِجَةٌ", "هَائِجًا"], 0, "Masculine, marfūʿ."],
    ["Which is a sentence?", ["القِطَارُ سَرِيعٌ", "القِطَارُ السَّرِيعُ"], 0, ""],
    ["Normally the mubtadaʾ is…", ["definite", "indefinite"], 0, ""],
    ["Parse الهَوَاءُ in الهَوَاءُ نَقِيٌّ:", ["مبتدأ مرفوع وعلامة رفعه الضمة", "فاعل مرفوع", "خبر مرفوع"], 0, ""],
    ["Parse نَقِيٌّ in الهَوَاءُ نَقِيٌّ:", ["خبر مرفوع وعلامة رفعه الضمة", "مبتدأ مرفوع", "نعت"], 0, ""],
    ["Make الكِتَابُ a mubtadaʾ:", ["الكِتَابُ مُفِيدٌ", "قَرَأْتُ الكِتَابَ", "الكِتَابُ المُفِيدُ"], 0, ""],
    ["“My mother is a doctor”:", ["أُمِّي طَبِيبَةٌ", "أُمِّي طَبِيبٌ", "أُمِّي طَبِيبَةً"], 0, "Feminine, marfūʿ."],
    ["In أَنَا شَاكِرٌ, the mubtadaʾ is…", ["أَنَا", "شَاكِرٌ"], 0, "A pronoun can start the sentence."],
    ["الدَّارُ ___ (the house is wide) — دار is feminine:", ["وَاسِعَةٌ", "وَاسِعٌ"], 0, ""]
  ],

  comp: [
    ["How is the house?", ["small but clean", "big and dirty", "new"], 0, 0],
    ["What is the father's job?", ["an honest merchant", "a doctor", "a farmer"], 0, 0],
    ["Who is a doctor in the family?", ["the mother", "the father", "Samir"], 0, 0],
    ["How does Samir feel?", ["his head is heavy and his body weak", "very well", "hungry"], 0, 1],
    ["What does the doctor say about recovery?", ["it is sweet", "it is bitter", "it is slow"], 0, 1]
  ],

  cheat: `<h3>المبتدأ والخبر</h3>
    <div class="rule"><span class="ar">المُبْتَدَأُ: اسْمٌ مَرْفُوعٌ فِي أَوَّلِ الجُمْلَةِ. الخَبَرُ: اسْمٌ مَرْفُوعٌ يُكَوِّنُ مَعَ المُبْتَدَأِ جُمْلَةً مُفِيدَةً.</span></div>
    <div class="blocks"><div class="blk c1"><span class="ar">الحَدِيقَةُ</span><small>mubtadaʾ ـُ · definite</small></div><div class="blk c5"><span class="ar">فَسِيحَةٌ</span><small>khabar ـٌ · indefinite · agrees</small></div></div>
    <ul><li>sentence: <span class="ar">البَيْتُ وَاسِعٌ</span> · phrase: <span class="ar">البَيْتُ الوَاسِعُ</span></li><li>feminine: <span class="ar">الشَّجَرَةُ مُثْمِرَةٌ · الشَّمْسُ مُشْرِقَةٌ</span></li></ul>
    <h3>Parsing</h3><p class="ar">الدَّوَاءُ: مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ. مُرٌّ: خَبَرٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</p>`,
  mistakes: [
    ["الجَوُّ بَارِدًا", "الجَوُّ بَارِدٌ", "The khabar is marfūʿ, not manṣūb."],
    ["البَيْتُ الجَمِيلُ (meaning: the house is beautiful)", "البَيْتُ جَمِيلٌ", "With ال on both words it is a phrase, not a sentence."],
    ["الحَدِيقَةُ جَمِيلٌ", "الحَدِيقَةُ جَمِيلَةٌ", "The khabar agrees in gender."],
    ["الشَّمْسُ مُشْرِقٌ", "الشَّمْسُ مُشْرِقَةٌ", "الشمس is feminine even without ة."]
  ],
  tips: [
    { t: "Describe your room", b: `Write ten nominal sentences about where you are now: <span class="ar">الحُجْرَةُ مُضِيئَةٌ، الكُرْسِيُّ مُرِيحٌ، النَّافِذَةُ مَفْتُوحَةٌ…</span> Check each khabar's gender.` },
    { t: "Listen for -un", b: `In the Listen tab, notice that most khabars end in <i>-un</i> (tanwīn) while mubtadaʾs end in <i>-u</i>. That little <i>n</i> is often what tells you the sentence is complete.` }
  ]
});
