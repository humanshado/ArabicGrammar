// الدرس ٤٠ — علامات التأنيث في الأسماء (PDF pp. 192–194)
COURSE.add({
  n: 40, pages: [192, 194], method: true,
  summary: "Feminine nouns and adjectives are usually marked by one of three endings: tāʾ marbūṭa ـة (فَاطِمَةُ، كَبِيرَةٌ), alif maqṣūra ـى (كُبْرَى، سَلْمَى) or extended alif ـاء (حَمْرَاءُ، صَحْرَاءُ). Some feminine nouns have no marker at all: شَمْسٌ، أَرْضٌ، دَارٌ، يَدٌ.",
  objectives: ["recognise the three feminine endings ـة، ـى، ـاء", "form feminine adjectives with them", "know common unmarked feminine nouns"],

  lesson: [
    { id: "three", t: "Three feminine endings", ar: "علامات التأنيث في الأسماء", pos: "agreement", pages: "192–193",
      b: `<table class="g"><tr><th>ending</th><th>masculine → feminine</th><th>nouns</th></tr><tr><td><span class="ar">ـة</span> tāʾ marbūṭa</td><td><span class="ar">كَبِيرٌ ← كَبِيرَةٌ</span></td><td><span class="ar">فَاطِمَةُ، شَجَرَةٌ</span></td></tr><tr><td><span class="ar">ـى</span> alif maqṣūra</td><td><span class="ar">أَكْبَرُ ← كُبْرَى</span></td><td><span class="ar">سَلْمَى، ذِكْرَى</span></td></tr><tr><td><span class="ar">ـاء</span> extended alif</td><td><span class="ar">أَحْمَرُ ← حَمْرَاءُ</span></td><td><span class="ar">صَحْرَاءُ، أَسْمَاءُ (name)</span></td></tr></table>`,
      rule: `<p><span class="ar">عَلَامَاتُ التَّأْنِيثِ فِي الأَسْمَاءِ ثَلَاثٌ: التَّاءُ المَرْبُوطَةُ، وَالأَلِفُ المَقْصُورَةُ، وَالأَلِفُ المَمْدُودَةُ.</span></p>` },
    { id: "hidden", t: "Feminine without a marker", ar: "المؤنث المعنوي", pos: "agreement", pages: "193–194",
      b: `<p>Some nouns are feminine by meaning or by usage, with no ending: female names (<span class="ar">زَيْنَبُ، مَرْيَمُ، هِنْدٌ</span>), paired body parts (<span class="ar">يَدٌ، عَيْنٌ، أُذُنٌ، رِجْلٌ</span>) and a list to memorise: <span class="ar">شَمْسٌ، أَرْضٌ، دَارٌ، نَارٌ، رِيحٌ، حَرْبٌ، بِئْرٌ، سُوقٌ، نَفْسٌ</span>.</p>`,
      widget: "sorter",
      wd: { title: "Which marker?", bins: [["ـة", "tāʾ marbūṭa"], ["ـى", "alif maqṣūra"], ["ـاء", "extended alif"], ["بلا علامة", "no marker"]], items: [["حَدِيقَةٌ", 0, ""], ["كُبْرَى", 1, ""], ["خَضْرَاءُ", 2, ""], ["شَمْسٌ", 3, ""], ["لَيْلَى", 1, ""], ["صَحْرَاءُ", 2, ""], ["نَارٌ", 3, ""], ["مَدِينَةٌ", 0, ""]] },
      check: [["الأَرْضُ ___", ["وَاسِعَةٌ", "وَاسِعٌ"], 0, "", "الأَرْضُ وَاسِعَةٌ"]] }
  ],
  scenes: [{ h: "فِي الصَّحْرَاءِ", en: "In the desert", pic: "🏜️", lines: [["", "الصَّحْرَاءُ وَاسِعَةٌ، وَالشَّمْسُ حَارَّةٌ.", "The desert is vast and the sun is hot."], ["", "فِي الوَاحَةِ نَخْلَةٌ خَضْرَاءُ وَبِئْرٌ عَمِيقَةٌ.", "In the oasis there is a green palm and a deep well."], ["", "الرِّيحُ شَدِيدَةٌ، وَالأَرْضُ جَافَّةٌ.", "The wind is strong and the ground is dry."], ["", "كَانَتْ رِحْلَتُنَا ذِكْرَى جَمِيلَةً.", "Our trip was a beautiful memory."]], note: "Unmarked feminines: الشَّمْسُ، بِئْرٌ، الرِّيحُ، الأَرْضُ — their adjectives are feminine." }],
  vocab: [["تَاءٌ مَرْبُوطَةٌ", "tāʾ marbūṭa ة", "n.f", "", "", "", "Grammar"], ["أَلِفٌ مَمْدُودَةٌ", "extended alif ـاء", "n.f", "", "", "", "Grammar"], ["وَاحَةٌ", "oasis", "n.f", "🌴", "", "وَاحَاتٌ", "Desert"], ["جَافٌّ", "dry", "adj.", "", "f. جَافَّةٌ", "", "Desert"], ["عَمِيقٌ", "deep", "adj.", "", "f. عَمِيقَةٌ", "", "Desert"], ["حَارٌّ", "hot", "adj.", "", "f. حَارَّةٌ", "", "Desert"], ["دَارٌ", "house", "n.f", "🏠", "", "دُورٌ", "Desert"], ["حَرْبٌ", "war", "n.f", "⚔️", "", "حُرُوبٌ", "Desert"], ["نَفْسٌ", "soul, self", "n.f", "", "", "أَنْفُسٌ", "Desert"]],
  exercises: [
    { k: "gap", t: "أَنِّثْ · Feminine form", items: [["كَبِيرٌ ← ___", "كَبِيرَةٌ|كبيرة"], ["أَحْمَرُ ← ___", "حَمْرَاءُ|حمراء"], ["أَكْبَرُ ← ___", "كُبْرَى|كبرى"], ["أَخْضَرُ ← ___", "خَضْرَاءُ|خضراء"]] },
    { k: "mcq", t: "اِخْتَرْ", items: [["الحَرْبُ ___", ["مُدَمِّرَةٌ", "مُدَمِّرٌ"], 0, ""], ["العَيْنُ ___", ["جَمِيلَةٌ", "جَمِيلٌ"], 0, ""], ["Which is feminine without a marker?", ["سُوقٌ", "بَابٌ", "قَلَمٌ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["حَمْرَاءُ is the feminine of أَحْمَرُ.", true, ""], ["شَمْسٌ is masculine because it has no ة.", false, ""]] }
  ],
  drills: [["Feminine markers in nouns:", ["ـة، ـى، ـاء", "ـتْ، تـ"], 0, ""], ["Feminine of أَصْغَرُ:", ["صُغْرَى", "صَغْرَاءُ"], 0, ""], ["Feminine of أَبْيَضُ:", ["بَيْضَاءُ", "بِيضَةٌ"], 0, ""], ["الدَّارُ ___", ["وَاسِعَةٌ", "وَاسِعٌ"], 0, ""]],
  comp: [["What is in the oasis?", ["a green palm and a deep well", "a river", "a city"], 0, 0]],
  cheat: `<h3>علامات التأنيث في الأسماء</h3><p><span class="ar">ـة</span> (كَبِيرَةٌ) · <span class="ar">ـى</span> (كُبْرَى) · <span class="ar">ـاء</span> (حَمْرَاءُ) · unmarked: <span class="ar">شَمْسٌ، أَرْضٌ، دَارٌ، نَارٌ، رِيحٌ، حَرْبٌ، بِئْرٌ، سُوقٌ، يَدٌ، عَيْنٌ</span></p>`,
  mistakes: [["الشَّمْسُ حَارٌّ", "الشَّمْسُ حَارَّةٌ", "الشمس is feminine."], ["أَحْمَرَةٌ", "حَمْرَاءُ", "Colours: أَفْعَلُ → فَعْلَاءُ."]],
  tips: [{ t: "Colour pairs", b: `<span class="ar">أَحْمَرُ/حَمْرَاءُ، أَخْضَرُ/خَضْرَاءُ، أَزْرَقُ/زَرْقَاءُ، أَبْيَضُ/بَيْضَاءُ، أَسْوَدُ/سَوْدَاءُ</span> — say them in pairs.` }]
});
