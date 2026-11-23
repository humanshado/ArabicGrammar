// الدرس ٥٤ — خبر النواسخ حين يكون جملة أو شبه جملة (PDF pp. 263–266)
COURSE.add({
  n: 54, pages: [263, 266], method: true,
  summary: "The khabar of kāna and inna (and their sisters) can also be a sentence or a semi-sentence: كَانَ الطِّفْلُ يَبْكِي، إِنَّ الحَدِيقَةَ أَزْهَارُهَا جَمِيلَةٌ، كَانَ الكِتَابُ عَلَى المَكْتَبِ. Such a khabar shows no case ending; it is in the place of naṣb (kāna) or rafʿ (inna).",
  objectives: ["use sentence and phrase khabars with kāna and inna", "know their position: في محل نصب (kāna), في محل رفع (inna)", "keep the linking pronoun"],
  lesson: [
    { id: "kana", t: "With kāna and its sisters", ar: "خبر كان جملة أو شبه جملة", pos: "sentence structure", pages: "263–264",
      widget: "transform",
      wd: { title: "Non-single khabars", sets: [
        { base: ["الطِّفْلُ يَبْكِي", "The child is crying."], baseLabel: "nominal", ops: [["كان", "[[كَانَ]] الطِّفْلُ يَبْكِي", "The child was crying.", "يبكي (sentence) in the place of naṣb, khabar of kāna."], ["إنّ", "[[إِنَّ]] [[الطِّفْلَ]] يَبْكِي", "The child is indeed crying.", "Sentence in the place of rafʿ, khabar of inna."]] },
        { base: ["الكِتَابُ عَلَى المَكْتَبِ", "The book is on the desk."], baseLabel: "nominal", ops: [["أصبح", "[[أَصْبَحَ]] الكِتَابُ عَلَى المَكْتَبِ", "The book ended up on the desk.", "Semi-sentence: in the place of naṣb."], ["لعلّ", "[[لَعَلَّ]] [[الكِتَابَ]] عَلَى المَكْتَبِ", "Perhaps the book is on the desk."]] }
      ] },
      rule: `<p><span class="ar">يَكُونُ خَبَرُ كَانَ وَأَخَوَاتِهَا وَخَبَرُ إِنَّ وَأَخَوَاتِهَا مُفْرَدًا أَوْ جُمْلَةً أَوْ شِبْهَ جُمْلَةٍ؛ فَإِذَا كَانَ جُمْلَةً أَوْ شِبْهَ جُمْلَةٍ كَانَ فِي مَحَلِّ نَصْبٍ مَعَ كَانَ، وَفِي مَحَلِّ رَفْعٍ مَعَ إِنَّ.</span></p>`,
      check: [["Position of يَلْعَبُونَ in كَانَ الأَوْلَادُ يَلْعَبُونَ:", ["في محل نصب خبر كان", "في محل رفع"], 0, "", false]] },
    { id: "order", t: "Phrase khabar first", ar: "تقديم الخبر شبه الجملة", pos: "sentence structure", pages: "265–266",
      b: `<p>With a phrase khabar, the khabar can come <b>before</b> the ism — and must when the ism is indefinite: <span class="ar">كَانَ فِي الحَدِيقَةِ طِفْلٌ</span> (there was a child in the garden), <span class="ar">إِنَّ فِي البَيْتِ ضَيْفًا</span> (there is a guest in the house). The ism keeps its own case: marfūʿ with kāna, manṣūb with inna.</p>`,
      check: [["“There's a guest in the house” with إنّ:", ["إِنَّ فِي البَيْتِ ضَيْفًا", "إِنَّ فِي البَيْتِ ضَيْفٌ"], 0, "Ism of inna, delayed, still manṣūb.", "إِنَّ فِي البَيْتِ ضَيْفًا"]] }
  ],
  scenes: [{ h: "ذِكْرَيَاتٌ", en: "Memories", pic: "📷", lines: [["", "كَانَ جَدِّي يَحْكِي لَنَا القِصَصَ.", "My grandfather used to tell us stories."], ["", "وَكَانَ فِي بَيْتِهِ بُسْتَانٌ كَبِيرٌ.", "And there was a big orchard at his house."], ["", "إِنَّ ذِكْرَيَاتِ الطُّفُولَةِ تَبْقَى فِي القَلْبِ.", "Childhood memories stay in the heart."], ["", "لَيْتَ تِلْكَ الأَيَّامَ تَعُودُ!", "If only those days would come back!"]], note: "كَانَ + present (يحكي) = “used to”." }],
  vocab: [["حَكَى", "to tell (a story)", "v.", "", "يَحْكِي", "", "Words"], ["طُفُولَةٌ", "childhood", "n.f", "🧒", "", "", "Words"], ["قَلْبٌ", "heart", "n.m", "❤️", "", "قُلُوبٌ", "Words"], ["ذِكْرَى", "memory", "n.f", "📷", "", "ذِكْرَيَاتٌ", "Words"]],
  exercises: [
    { k: "irab", t: "مَحَلُّ الخَبَرِ", cats: ["في محل نصب خبر كان", "في محل رفع خبر إنّ"], items: [["كَانَ الجَوُّ [يَزْدَادُ بَرْدًا].", "0", ""], ["إِنَّ الصِّدْقَ [يُنْجِي صَاحِبَهُ].", "1", ""], ["أَصْبَحَ المَاءُ [فِي الكُوبِ].", "0", ""], ["لَعَلَّ أَبَاكَ [فِي البَيْتِ].", "1", ""]] },
    { k: "mcq", t: "اِخْتَرْ", items: [["كَانَ فِي السَّمَاءِ ___", ["غُيُومٌ", "غُيُومًا"], 0, "Delayed ism of kāna: marfūʿ."], ["إِنَّ فِي الحَدِيقَةِ ___", ["أَزْهَارًا", "أَزْهَارٌ"], 0, ""]] }
  ],
  drills: [["كَانَ + present verb often means…", ["used to", "will"], 0, ""], ["Sentence khabar of inna is…", ["في محل رفع", "في محل نصب"], 0, ""], ["إِنَّ عِنْدَنَا ___", ["ضَيْفًا", "ضَيْفٌ"], 0, ""]],
  comp: [["What did the grandfather use to do?", ["tell stories", "sing", "travel"], 0, 0]],
  cheat: `<h3>خبر النواسخ جملة أو شبه جملة</h3><p class="ar">كَانَ الطِّفْلُ يَبْكِي (محل نصب) · إِنَّ الطِّفْلَ يَبْكِي (محل رفع) · كَانَ فِي الحَدِيقَةِ طِفْلٌ · إِنَّ فِي البَيْتِ ضَيْفًا</p>`,
  mistakes: [["إِنَّ فِي البَيْتِ ضَيْفٌ", "إِنَّ فِي البَيْتِ ضَيْفًا", "The delayed ism of inna stays manṣūb."]],
  tips: [{ t: "Used to…", b: `Describe your childhood with <span class="ar">كُنْتُ أَلْعَبُ، كَانَ أَبِي يَأْخُذُنِي…</span>` }]
});
