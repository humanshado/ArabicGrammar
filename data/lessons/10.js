// الدرس ١٠ — نصب الفعل المضارع (PDF pp. 48–53)
COURSE.add({
  n: 10, pages: [48, 53], method: true,
  summary: "The present verb normally ends in ḍamma (يَكْتُبُ). After four particles — أَنْ (to, that), لَنْ (will not), كَيْ (so that) and إِذَنْ (then, in that case) — it becomes manṣūb and ends in fatḥa (أَنْ يَكْتُبَ). You will learn the meaning of each particle, when to use it, and how to parse the verb after it.",
  objectives: [
    "notice that the present verb can change its ending, just like a noun",
    "use أَنْ، لَنْ، كَيْ، إِذَنْ with the right meaning",
    "put the present verb after them in naṣb: fatḥa ـَ",
    "say “I want to…”, “I will never…”, “so that…” in Arabic",
    "parse a manṣūb present verb"
  ],

  lesson: [
    { id: "mood", t: "Verbs have endings too", ar: "المضارع يتغيّر آخره", pos: "conjugation", pages: "48–49",
      b: `<p>So far only nouns changed their last vowel. The <b>present verb</b> does too. On its own it ends in ḍamma: <span class="ar">يَكْتُبُ، أَكْذِبُ، تَزُورُ</span>. But put certain particles in front, and the ḍamma turns into a <b>fatḥa</b>: the verb is now <span class="ar">مَنْصُوب</span>.</p>
        <p>Pick a particle and watch the end of the verb.</p>`,
      widget: "transform",
      wd: { title: "Four particles that give the verb a fatḥa", sets: [
        { base: ["يَكْتُبُ عَلِيٌّ الدَّرْسَ", "Ali writes the lesson."], baseLabel: "no particle: ـُ", ops: [
          ["أَنْ", "يُرِيدُ عَلِيٌّ [[أَنْ]] يَكْتُ[[بَ]] الدَّرْسَ", "Ali wants to write the lesson.", "أَنْ = to / that. The verb after it: fatḥa."],
          ["لَنْ", "[[لَنْ]] يَكْتُ[[بَ]] عَلِيٌّ الدَّرْسَ", "Ali will not write the lesson.", "لَنْ = will not (future negation)."],
          ["كَيْ", "جَلَسَ عَلِيٌّ [[كَيْ]] يَكْتُ[[بَ]] الدَّرْسَ", "Ali sat down so that he could write the lesson.", "كَيْ = so that, in order to."],
          ["إِذَنْ", "— سَأُسَاعِدُكَ. — [[إِذَنْ]] يَكْتُ[[بَ]] عَلِيٌّ الدَّرْسَ", "— I'll help you. — Then Ali will write the lesson.", "إِذَنْ = then, in that case: it opens a reply."]] }
      ] },
      check: [["The present verb with no particle ends in…", ["ḍamma ـُ", "fatḥa ـَ", "sukūn ـْ"], 0, "يَكْتُبُ: marfūʿ (lesson 12).", false], ["After لَنْ the verb ends in…", ["fatḥa", "ḍamma", "kasra"], 0, "لَنْ أَكْذِبَ.", false]] },

    { id: "an", t: "أَنْ — “to”, “that”", ar: "أَنْ", pos: "conjugation", pages: "48",
      b: `<p><span class="ar">أَنْ</span> joins a verb to what comes before it, like English <i>to</i> or <i>that</i>. It is everywhere after verbs of wanting, hoping, loving, being able: <span class="ar">أُرِيدُ، أَرْجُو، أُحِبُّ، أَسْتَطِيعُ، يَسُرُّنِي</span>.</p>`,
      ex: [["أُرِيدُ أَنْ أُحْسِنَ السِّبَاحَةَ.", "I want to swim well."], ["أَرْجُو أَنْ يَعْتَدِلَ الجَوُّ.", "I hope the weather turns mild."], ["يَسُرُّنِي أَنْ تَزُورَنَا.", "It pleases me that you visit us."], ["أَسْتَطِيعُ أَنْ أَقْرَأَ القُرْآنَ.", "I can read the Qur'an."]],
      warn: `Arabic has no infinitive. Where English says “I want <b>to go</b>”, Arabic says “I want <b>that I go</b>”: <span class="ar">أُرِيدُ أَنْ أَذْهَبَ</span>. The person changes with the subject: <span class="ar">يُرِيدُ أَنْ يَذْهَبَ</span> (he wants to go), <span class="ar">تُرِيدُ أَنْ تَذْهَبَ</span> (she wants to go).`,
      check: [["“I hope to succeed”:", ["أَرْجُو أَنْ أَنْجَحَ", "أَرْجُو أَنْ أَنْجَحُ", "أَرْجُو أَنْ نَجَحَ"], 0, "أن + present verb with fatḥa, same person.", "أَرْجُو أَنْ أَنْجَحَ"]] },

    { id: "lan", t: "لَنْ — “will not”", ar: "لَنْ", pos: "conjugation", pages: "48",
      b: `<p><span class="ar">لَنْ</span> denies something in the <b>future</b>: <span class="ar">لَنْ أَكْذِبَ</span> (I will not lie), <span class="ar">لَنْ يَفُوزَ الكَسْلَانُ</span> (the lazy one will not win). It is the opposite of <span class="ar">سَـ / سَوْفَ</span>:</p>
        <table class="g"><tr><th>future</th><th>denied future</th></tr>
        <tr><td><span class="ar">سَأُسَافِرُ غَدًا</span> I will travel tomorrow</td><td><span class="ar">لَنْ أُسَافِرَ غَدًا</span> I won't travel tomorrow</td></tr>
        <tr><td><span class="ar">سَيَنْجَحُ المُجْتَهِدُ</span></td><td><span class="ar">لَنْ يَنْجَحَ الكَسْلَانُ</span></td></tr></table>
        <p>Compare <span class="ar">لَا</span> + present (does not, now): <span class="ar">لَا أَكْذِبُ</span> “I don't lie” — the verb keeps its ḍamma, because this <span class="ar">لا</span> is not a naṣb particle.</p>`,
      check: [["“The lazy one will not win”:", ["لَنْ يَفُوزَ الكَسْلَانُ", "لَنْ يَفُوزُ الكَسْلَانُ", "لَا يَفُوزَ الكَسْلَانُ"], 0, "لن + fatḥa.", "لَنْ يَفُوزَ الكَسْلَانُ"], ["Deny سَأَلْعَبُ:", ["لَنْ أَلْعَبَ", "لَمْ أَلْعَبْ", "لَا لَعِبْتُ"], 0, "Future denied → لن.", "لَنْ أَلْعَبَ"]] },

    { id: "kay", t: "كَيْ — “so that”, “in order to”", ar: "كَيْ", pos: "conjugation", pages: "48–49",
      b: `<p><span class="ar">كَيْ</span> gives the <b>purpose</b> of an action: <span class="ar">اِحْتَرِمْ جَارَكَ كَيْ يَحْتَرِمَكَ</span> (respect your neighbour so that he respects you), <span class="ar">كُنْ مُؤَدَّبًا كَيْ تَكُونَ مَحْبُوبًا</span> (be polite so that you are loved). You will often see it as <span class="ar">لِكَيْ</span>, with the same meaning.</p>`,
      ex: [["أَسْتَيْقِظُ مُبَكِّرًا كَيْ أُدْرِكَ القِطَارَ.", "I get up early so that I catch the train."], ["ذَهَبْتُ إِلَى الشَّجَرَةِ كَيْ أَسْتَظِلَّ بِظِلِّهَا.", "I went to the tree to take shelter in its shade."]],
      check: [["Complete: اِجْتَهِدْ كَيْ ___", ["تَنْجَحَ", "تَنْجَحُ", "نَجَحْتَ"], 0, "كي + fatḥa.", "اِجْتَهِدْ كَيْ تَنْجَحَ"]] },

    { id: "idhan", t: "إِذَنْ — “then”, “in that case” (in a reply)", ar: "إِذَنْ", pos: "conjugation", pages: "49–50",
      b: `<p><span class="ar">إِذَنْ</span> is used in <b>answer</b> to what someone has just said, to state the result:</p>
        <ul><li>— <span class="ar">سَأَجْتَهِدُ.</span> I'll work hard. — <span class="ar">إِذَنْ تَنْجَحَ.</span> Then you'll succeed.</li>
        <li>— <span class="ar">سَأَزُورُكَ غَدًا.</span> I'll visit you tomorrow. — <span class="ar">إِذَنْ أُكْرِمَكَ.</span> Then I'll treat you generously.</li></ul>
        <p>It makes the verb manṣūb only when three things are true (grammarians' fine print): it comes <b>first</b> in the reply, the verb refers to the <b>future</b>, and nothing separates them (except an oath or <span class="ar">لا</span>). Otherwise the verb keeps its ḍamma.</p>`,
      tip: `In modern writing <span class="ar">إِذَنْ</span> is also common as “so, therefore” at the start of a conclusion, often followed by a nominal sentence — then it does not affect anything.`,
      check: [["— سَأُذَاكِرُ دُرُوسِي. — ___ تَتَفَوَّقَ.", ["إِذَنْ", "لَنْ", "كَيْ"], 0, "A reply stating the result → إذن.", "إِذَنْ تَتَفَوَّقَ"]] },

    { id: "parse", t: "Parsing the manṣūb verb", ar: "إعراب المضارع المنصوب", pos: "case endings",
      b: `<p>The book's model:</p>
        <div class="rule"><p><span class="ar">لَنْ أَكْذِبَ.</span></p>
        <p><span class="ar">لَنْ: حَرْفُ نَصْبٍ.</span> — a naṣb particle.</p>
        <p><span class="ar">أَكْذِبَ: فِعْلٌ مُضَارِعٌ مَنْصُوبٌ بِـ«لَنْ»، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p></div>`,
      rule: `<p><span class="ar">يُنْصَبُ الفِعْلُ المُضَارِعُ إِذَا سَبَقَهُ حَرْفٌ مِنْ حُرُوفِ النَّصْبِ، وَهِيَ: أَنْ، وَلَنْ، وَكَيْ، وَإِذَنْ.</span></p><p>The present verb is put in naṣb when one of the naṣb particles comes before it: an, lan, kay, idhan.</p>`,
      check: [["Parse يَعْتَدِلَ in أَرْجُو أَنْ يَعْتَدِلَ الجَوُّ:", ["فعل مضارع منصوب بأن وعلامة نصبه الفتحة", "فعل مضارع مرفوع", "فعل ماضٍ"], 0, ""]] }
  ],

  scenes: [
    { h: "أَحْلَامُ سَمِيرٍ", en: "Samir's dreams", pic: "💭", lines: [
      ["", "يُرِيدُ سَمِيرٌ أَنْ يُصْبِحَ طَبِيبًا.", "Samir wants to become a doctor."],
      ["", "يَدْرُسُ كُلَّ يَوْمٍ كَيْ يَنْجَحَ فِي الامْتِحَانِ.", "He studies every day so that he passes the exam."],
      ["", "يَقُولُ: لَنْ أُضَيِّعَ وَقْتِي فِي اللَّعِبِ.", "He says: I will not waste my time playing."],
      ["", "يُحِبُّ أَنْ يُسَاعِدَ المَرْضَى.", "He loves to help the sick."],
      ["", "وَيَرْجُو أَنْ يَبْنِيَ مُسْتَشْفًى فِي قَرْيَتِهِ.", "And he hopes to build a hospital in his village."]],
      note: "Every present verb after أن، كي، لن has a fatḥa: يُصْبِحَ، يَنْجَحَ، أُضَيِّعَ، يُسَاعِدَ، يَبْنِيَ. The others (يُرِيدُ، يَدْرُسُ، يَقُولُ، يُحِبُّ، يَرْجُو) have no particle: ḍamma." },
    { h: "وَعْدٌ", en: "A promise", pic: "🤝", lines: [
      ["الأُمُّ", "يَا خَالِدُ، أُرِيدُ أَنْ تُرَتِّبَ حُجْرَتَكَ.", "Khalid, I want you to tidy your room."],
      ["خَالِدٌ", "سَأُرَتِّبُهَا الآنَ يَا أُمِّي.", "I'll tidy it now, mother."],
      ["الأُمُّ", "إِذَنْ أَصْنَعَ لَكَ كَعْكَةً.", "Then I'll make you a cake."],
      ["خَالِدٌ", "وَلَنْ أَتْرُكَ ثِيَابِي عَلَى الأَرْضِ بَعْدَ اليَوْمِ.", "And I won't leave my clothes on the floor any more."],
      ["الأُمُّ", "أَحْسَنْتَ! رَتِّبْ حُجْرَتَكَ كَيْ تَجِدَ أَشْيَاءَكَ بِسُهُولَةٍ.", "Well done! Tidy your room so that you find your things easily."]],
      note: "All four particles appear: أَنْ تُرَتِّبَ، إِذَنْ أَصْنَعَ، لَنْ أَتْرُكَ، كَيْ تَجِدَ. Note سَأُرَتِّبُهَا: future with سـ keeps the ḍamma." }
  ],

  vocab: [
    ["أَنْ", "to, that (+ subjunctive)", "part.", "", "حرف نصب", "", "Naṣb particles"],
    ["لَنْ", "will not (+ subjunctive)", "part.", "", "حرف نصب", "", "Naṣb particles"],
    ["كَيْ", "so that, in order to", "part.", "", "حرف نصب; also لِكَيْ", "", "Naṣb particles"],
    ["إِذَنْ", "then, in that case", "part.", "", "حرف نصب (in a reply)", "", "Naṣb particles"],
    ["أَرَادَ", "to want", "v.", "", "يُرِيدُ", "", "Verbs of wanting"],
    ["رَجَا", "to hope", "v.", "", "يَرْجُو", "", "Verbs of wanting"],
    ["اسْتَطَاعَ", "to be able", "v.", "", "يَسْتَطِيعُ", "", "Verbs of wanting"],
    ["سَرَّ", "to please, delight", "v.", "", "يَسُرُّ", "", "Verbs of wanting"],
    ["أَحْسَنَ", "to do well, master", "v.", "", "يُحْسِنُ", "", "Verbs"],
    ["اِعْتَدَلَ", "to become mild, moderate", "v.", "", "يَعْتَدِلُ", "", "Verbs"],
    ["كَذَبَ", "to lie", "v.", "", "يَكْذِبُ", "", "Verbs"],
    ["فَازَ", "to win", "v.", "", "يَفُوزُ", "", "Verbs"],
    ["اِحْتَرَمَ", "to respect", "v.", "", "يَحْتَرِمُ", "", "Verbs"],
    ["أَدْرَكَ", "to catch up with, reach", "v.", "", "يُدْرِكُ", "", "Verbs"],
    ["اِسْتَظَلَّ", "to take shade", "v.", "", "يَسْتَظِلُّ", "", "Verbs"],
    ["أَصْبَحَ", "to become", "v.", "", "يُصْبِحُ", "", "Verbs"],
    ["ضَيَّعَ", "to waste, lose", "v.", "", "يُضَيِّعُ", "", "Verbs"],
    ["بَنَى", "to build", "v.", "", "يَبْنِي", "", "Verbs"],
    ["رَتَّبَ", "to tidy, arrange", "v.", "", "يُرَتِّبُ", "", "Verbs"],
    ["تَرَكَ", "to leave", "v.", "", "يَتْرُكُ", "", "Verbs"],
    ["صَنَعَ", "to make", "v.", "", "يَصْنَعُ", "", "Verbs"],
    ["سِبَاحَةٌ", "swimming", "n.f", "🏊", "", "", "Nouns"],
    ["جَارٌ", "neighbour", "n.m", "🏘️", "", "جِيرَانٌ", "Nouns"],
    ["ظِلٌّ", "shade, shadow", "n.m", "🌳", "", "ظِلَالٌ", "Nouns"],
    ["امْتِحَانٌ", "exam", "n.m", "📝", "", "امْتِحَانَاتٌ", "Nouns"],
    ["وَقْتٌ", "time", "n.m", "⏰", "", "أَوْقَاتٌ", "Nouns"],
    ["مُسْتَشْفًى", "hospital", "n.m", "🏥", "", "مُسْتَشْفَيَاتٌ", "Nouns"],
    ["كَعْكَةٌ", "cake", "n.f", "🎂", "", "كَعْكٌ", "Nouns"],
    ["كَسْلَانُ", "lazy", "adj.", "", "f. كَسْلَى", "كُسَالَى", "Describing words"],
    ["مُؤَدَّبٌ", "polite, well-mannered", "adj.", "", "f. مُؤَدَّبَةٌ", "", "Describing words"],
    ["مَحْبُوبٌ", "loved, popular", "adj.", "", "f. مَحْبُوبَةٌ", "", "Describing words"]
  ],

  exercises: [
    { k: "shakl", t: "اضْبِطْ آخِرَ المُضَارِعِ · Vowel the present verb", en: "Is the verb manṣūb (after a particle) or not?", marks: ["ُ", "َ"], items: [
      "أُرِيدُ أَنْ أَلْعَب{َ}", "أَنَا أَلْعَب{ُ} فِي الحَدِيقَةِ", "لَنْ يَفُوز{َ} الكَسْلَانُ", "اِجْتَهِدْ كَيْ تَنْجَح{َ}", "يَنْجَح{ُ} المُجْتَهِدُ", "سَيَحْضُر{ُ} أَبِي غَدًا"] },
    { k: "mcq", t: "اِخْتَرِ الحَرْفَ المُنَاسِبَ · Choose the right particle", items: [
      ["أُحِبُّ ___ أَقْرَأَ القِصَصَ.", ["أَنْ", "لَنْ", "إِذَنْ"], 0, "after أحبّ → أن"], ["___ أُهْمِلَ وَاجِبِي أَبَدًا.", ["لَنْ", "كَيْ", "أَنْ"], 0, "I will never neglect…"], ["نَامَ مُبَكِّرًا ___ يَسْتَيْقِظَ نَشِيطًا.", ["كَيْ", "لَنْ", "إِذَنْ"], 0, "purpose"], ["— سَأَزُورُكَ. — ___ أُكْرِمَكَ.", ["إِذَنْ", "أَنْ", "لَنْ"], 0, "reply"], ["أَرْجُو ___ يَشْفَى المَرِيضُ.", ["أَنْ", "لَنْ"], 0, ""]] },
    { k: "gap", t: "أَدْخِلْ «لَنْ» · Deny the future", en: "Rewrite each future sentence with لَنْ (write only the verb with its new ending).", items: [
      ["سَأَكْذِبُ ← لَنْ ___", "أَكْذِبَ|اكذب"], ["سَيَتَأَخَّرُ القِطَارُ ← لَنْ ___ القِطَارُ", "يَتَأَخَّرَ|يتاخر"], ["سَنَلْعَبُ ← لَنْ ___", "نَلْعَبَ|نلعب"], ["سَتَذْبُلُ الوَرْدَةُ ← لَنْ ___ الوَرْدَةُ", "تَذْبُلَ|تذبل"]] },
    { k: "sort", t: "مَنْصُوبٌ أَمْ لَا؟ · Manṣūb or not?", cats: ["منصوب · fatḥa", "غير منصوب · ḍamma"], items: [
      ["لَنْ أُسَافِرَ", "0", ""], ["لَا أُسَافِرُ", "1", "لا (not) is not a naṣb particle."], ["سَأُسَافِرُ", "1", ""], ["أُرِيدُ أَنْ أُسَافِرَ", "0", ""], ["أُسَافِرُ كَيْ أَتَعَلَّمَ", "0", "Only أَتَعَلَّمَ is after كي; أُسَافِرُ is not."]] },
    { k: "tr", t: "تَرْجِمْ · Translate", en: "Use أَنْ، لَنْ، كَيْ. Ḥarakāt optional — but say the fatḥa!", items: [
      ["I want to swim.", "أريد أن أسبح|أُرِيدُ أَنْ أَسْبَحَ"], ["I will not lie.", "لن أكذب|لَنْ أَكْذِبَ"], ["Study so that you succeed.", "ادرس كي تنجح|اُدْرُسْ كَيْ تَنْجَحَ|اجتهد كي تنجح"], ["The lazy one will not win.", "لن يفوز الكسلان|لَنْ يَفُوزَ الكَسْلَانُ"]] },
    { k: "irab", t: "أَعْرِبْ · Parse the highlighted word", cats: ["فعل مضارع منصوب وعلامة نصبه الفتحة", "فعل مضارع مرفوع وعلامة رفعه الضمة", "حرف نصب"], items: [
      ["لَنْ [أَكْذِبَ].", "0", ""], ["[لَنْ] أَكْذِبَ.", "2", ""], ["[يَنْبَحُ] الكَلْبُ.", "1", ""], ["أَرْجُو أَنْ [يَعْتَدِلَ] الجَوُّ.", "0", ""], ["[أَرْجُو] أَنْ يَعْتَدِلَ الجَوُّ.", "1", "No particle before it."], ["جِئْتُ [كَيْ] أَتَعَلَّمَ.", "2", ""]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["After أَنْ the present verb ends in fatḥa.", true, ""], ["لَنْ denies the past.", false, "It denies the future."], ["لَا أَكْذِبُ has a manṣūb verb.", false, "لا is not a naṣb particle: ḍamma."], ["كَيْ expresses purpose.", true, ""], ["إِذَنْ is used in a reply.", true, ""]] }
  ],

  drills: [
    ["The naṣb particles of this lesson:", ["أَنْ، لَنْ، كَيْ، إِذَنْ", "لَمْ، لَا، إِنْ", "مِنْ، إِلَى، عَنْ"], 0, ""],
    ["أُرِيدُ أَنْ ___", ["أَشْرَبَ", "أَشْرَبُ", "أَشْرَبْ"], 0, ""],
    ["لَنْ ___ الجُنْدِيُّ مِنَ المَعْرَكَةِ.", ["يَهْرُبَ", "يَهْرُبُ", "هَرَبَ"], 0, ""],
    ["“so that” =", ["كَيْ", "لَنْ", "إِذَنْ"], 0, ""],
    ["“will not” =", ["لَنْ", "لَمْ", "لَا"], 0, ""],
    ["Which verb is manṣūb?", ["يَحْتَرِمَكَ in كَيْ يَحْتَرِمَكَ", "يَحْتَرِمُكَ in هُوَ يَحْتَرِمُكَ"], 0, ""],
    ["Deny سَيَرْسُبُ المُجْتَهِدُ:", ["لَنْ يَرْسُبَ المُجْتَهِدُ", "لَمْ يَرْسُبِ المُجْتَهِدُ", "لَا رَسَبَ"], 0, ""],
    ["— سَأَتَمَرَّنُ كُلَّ يَوْمٍ. — ___", ["إِذَنْ تَفُوزَ", "إِذَنْ تَفُوزُ", "كَيْ تَفُوزُ"], 0, ""],
    ["“She wants to go” =", ["تُرِيدُ أَنْ تَذْهَبَ", "تُرِيدُ أَنْ يَذْهَبَ", "تُرِيدُ ذَهَبَتْ"], 0, "Same person after أن."],
    ["The sign of naṣb in the present verb is…", ["الفتحة", "الضمة", "الكسرة"], 0, ""],
    ["سَـ / سَوْفَ before a verb…", ["do not change its ḍamma", "make it manṣūb"], 0, "سَأَزُورُكَ."],
    ["Parse أَنْ in أُرِيدُ أَنْ أَنَامَ:", ["حرف نصب", "فعل", "اسم"], 0, ""]
  ],

  comp: [
    ["What does Samir want to become?", ["a doctor", "a teacher", "a farmer"], 0, 0],
    ["Why does he study every day?", ["to pass the exam", "to play", "to travel"], 0, 0],
    ["What does he hope to build?", ["a hospital in his village", "a school", "a house"], 0, 0],
    ["What will mother make if Khalid tidies his room?", ["a cake", "lunch", "tea"], 0, 1],
    ["What does Khalid promise?", ["not to leave his clothes on the floor", "to go to bed early", "to help his sister"], 0, 1]
  ],

  cheat: `<h3>نصب الفعل المضارع</h3>
    <div class="rule"><span class="ar">يُنْصَبُ المُضَارِعُ إِذَا سَبَقَهُ: أَنْ، لَنْ، كَيْ، إِذَنْ — وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></div>
    <table class="g"><tr><th>particle</th><th>meaning</th><th>example</th></tr>
    <tr><td><span class="ar">أَنْ</span></td><td>to, that</td><td><span class="ar">أُرِيدُ أَنْ أَسْبَحَ</span></td></tr>
    <tr><td><span class="ar">لَنْ</span></td><td>will not</td><td><span class="ar">لَنْ أَكْذِبَ</span></td></tr>
    <tr><td><span class="ar">كَيْ</span></td><td>so that</td><td><span class="ar">اِجْتَهِدْ كَيْ تَنْجَحَ</span></td></tr>
    <tr><td><span class="ar">إِذَنْ</span></td><td>then (reply)</td><td><span class="ar">— سَأَجْتَهِدُ. — إِذَنْ تَنْجَحَ.</span></td></tr></table>
    <p>Not naṣb particles: <span class="ar">لَا</span> (not, now), <span class="ar">سَـ / سَوْفَ</span> (will).</p>
    <p class="ar">لَنْ: حَرْفُ نَصْبٍ. أَكْذِبَ: فِعْلٌ مُضَارِعٌ مَنْصُوبٌ بِلَنْ وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</p>`,
  mistakes: [
    ["أُرِيدُ أَنْ أَذْهَبُ", "أُرِيدُ أَنْ أَذْهَبَ", "After أن the verb takes fatḥa."],
    ["لَنْ سَأَذْهَبَ", "لَنْ أَذْهَبَ", "لن already points to the future: never add سـ."],
    ["أُرِيدُ أَنْ ذَهَبْتُ", "أُرِيدُ أَنْ أَذْهَبَ", "After أن for a wish, use the present verb."],
    ["لَا أَكْذِبَ", "لَا أَكْذِبُ / لَنْ أَكْذِبَ", "لا does not give fatḥa; لن does."]
  ],
  tips: [
    { t: "Three useful frames", b: `Learn these by heart and fill them with any verb: <span class="ar">أُرِيدُ أَنْ…</span> (I want to…), <span class="ar">لَنْ… أَبَدًا</span> (I will never…), <span class="ar">…كَيْ…</span> (…so that…). Make five sentences with each.` },
    { t: "Hear the fatḥa", b: `In fast speech the difference between <i>yaktubu</i> and <i>yaktuba</i> is small. Read the scenes slowly and exaggerate the final <i>-a</i> after each particle.` }
  ]
});
