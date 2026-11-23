// الدرس ٥٣ — خبر المبتدأ حين يكون جملة أو شبه جملة (PDF pp. 257–262)
COURSE.add({
  n: 53, pages: [257, 262], method: true,
  summary: "The khabar need not be one word. It can be a verbal sentence (العُصْفُورُ يُغَرِّدُ), a nominal sentence (الحَدِيقَةُ أَزْهَارُهَا جَمِيلَةٌ), or a “semi-sentence” (شبه جملة): a prepositional phrase (الكِتَابُ فِي الحَقِيبَةِ) or an adverb phrase (الشَّجَرَةُ أَمَامَ البَيْتِ). A sentence-khabar needs a pronoun linking it to the mubtadaʾ.",
  objectives: ["recognise the three kinds of khabar: single word, sentence, semi-sentence", "link a sentence-khabar to its mubtadaʾ with a pronoun", "parse: الجملة في محل رفع خبر"],
  lesson: [
    { id: "kinds", t: "Three kinds of khabar", ar: "أنواع الخبر", pos: "sentence structure", pages: "257–259",
      widget: "parse",
      wd: { title: "Find the khabar", legend: { mub: ["mubtadaʾ", "مبتدأ"], khb: ["khabar (all of it)", "خبر"] }, game: false, sents: [
        { en: "The bird sings. (khabar = verbal sentence)", w: [["العُصْفُورُ", "mub", "Mubtadaʾ."], ["يُغَرِّدُ", "khb", "Verb + hidden doer (هو): a verbal sentence, in the place of rafʿ as khabar."]] },
        { en: "The garden — its flowers are beautiful. (khabar = nominal sentence)", w: [["الحَدِيقَةُ", "mub", "Mubtadaʾ."], ["أَزْهَارُهَا", "khb", "Second mubtadaʾ; the ـهَا links back to الحديقة."], ["جَمِيلَةٌ", "khb", "Khabar of أزهارها. The whole sentence أزهارها جميلة is the khabar of الحديقة."]] },
        { en: "The book is in the bag. (khabar = prepositional phrase)", w: [["الكِتَابُ", "mub", "Mubtadaʾ."], ["فِي", "khb", "Preposition…"], ["الحَقِيبَةِ", "khb", "…and its noun: a semi-sentence, khabar."]] },
        { en: "The tree is in front of the house. (khabar = adverb phrase)", w: [["الشَّجَرَةُ", "mub", "Mubtadaʾ."], ["أَمَامَ", "khb", "Adverb…"], ["البَيْتِ", "khb", "…and its muḍāf ilayhi: semi-sentence khabar."]] }
      ] },
      rule: `<p><span class="ar">الخَبَرُ ثَلَاثَةُ أَنْوَاعٍ: مُفْرَدٌ، وَجُمْلَةٌ (فِعْلِيَّةٌ أَوِ اسْمِيَّةٌ)، وَشِبْهُ جُمْلَةٍ (جَارٌّ وَمَجْرُورٌ أَوْ ظَرْفٌ). وَلَا بُدَّ فِي جُمْلَةِ الخَبَرِ مِنْ رَابِطٍ يَرْبِطُهَا بِالمُبْتَدَإِ، وَهُوَ الضَّمِيرُ غَالِبًا.</span></p>` },
    { id: "link", t: "The linking pronoun", ar: "الرابط", pos: "sentence structure", pages: "259–261",
      b: `<p>In <span class="ar">الحَدِيقَةُ أَزْهَارُ<b>هَا</b> جَمِيلَةٌ</span> the <span class="ar">ـهَا</span> ties the inner sentence to <span class="ar">الحَدِيقَةُ</span>. In <span class="ar">الطُّلَّابُ يَدْرُسُو<b>نَ</b></span> the wāw (they) does the same. Without it, the sentence falls apart: <span class="ar">الحَدِيقَةُ الأَزْهَارُ جَمِيلَةٌ</span> ✗.</p>`,
      check: [["Complete: الشَّجَرَةُ ___ خَضْرَاءُ (its leaves)", ["أَوْرَاقُهَا", "الأَوْرَاقُ"], 0, "", "الشَّجَرَةُ أَوْرَاقُهَا خَضْرَاءُ"], ["“The children are playing” (nominal):", ["الأَطْفَالُ يَلْعَبُونَ", "الأَطْفَالُ يَلْعَبُ"], 0, "", "الأَطْفَالُ يَلْعَبُونَ"]] },
    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings", pages: "261–262",
      b: `<div class="rule"><p><span class="ar">العُصْفُورُ يُغَرِّدُ: يُغَرِّدُ فِعْلٌ مُضَارِعٌ مَرْفُوعٌ، وَالفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ هُوَ، وَالجُمْلَةُ الفِعْلِيَّةُ فِي مَحَلِّ رَفْعٍ خَبَرٌ.</span></p><p><span class="ar">فِي الحَقِيبَةِ: جَارٌّ وَمَجْرُورٌ، شِبْهُ جُمْلَةٍ فِي مَحَلِّ رَفْعٍ خَبَرٌ.</span></p></div>` }
  ],
  scenes: [{ h: "غُرْفَتِي", en: "My room", pic: "🛏️", lines: [["", "غُرْفَتِي نَوَافِذُهَا وَاسِعَةٌ.", "My room has wide windows (its windows are wide)."], ["", "السَّرِيرُ بِجَانِبِ النَّافِذَةِ.", "The bed is next to the window."], ["", "الكُتُبُ عَلَى الرَّفِّ.", "The books are on the shelf."], ["", "أُخْتِي تَدْرُسُ مَعِي، وَالقِطَّةُ تَنَامُ تَحْتَ المَكْتَبِ.", "My sister studies with me, and the cat sleeps under the desk."]]}],
  vocab: [["شِبْهُ جُمْلَةٍ", "semi-sentence (phrase)", "n.m", "", "", "", "Grammar"], ["رَابِطٌ", "linking element", "n.m", "", "", "", "Grammar"], ["رَفٌّ", "shelf", "n.m", "📚", "", "رُفُوفٌ", "Room"], ["غُرْفَةٌ", "room", "n.f", "🚪", "", "غُرَفٌ", "Room"], ["بِجَانِبِ", "next to", "adv.", "", "", "", "Room"]],
  exercises: [
    { k: "sort", t: "مَا نَوْعُ الخَبَرِ؟", cats: ["مفرد", "جملة فعلية", "جملة اسمية", "شبه جملة"], items: [["الجَوُّ صَحْوٌ", "0", ""], ["الطِّفْلُ يَنَامُ", "1", ""], ["البَيْتُ حَدِيقَتُهُ وَاسِعَةٌ", "2", ""], ["الكِتَابُ عَلَى المَكْتَبِ", "3", ""], ["القِطُّ تَحْتَ الكُرْسِيِّ", "3", ""], ["الطُّلَّابُ نَجَحُوا", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["A sentence-khabar needs a linking pronoun.", true, ""], ["الكِتَابُ فِي الحَقِيبَةِ has a single-word khabar.", false, ""]] }
  ],
  drills: [["Khabar type in الشَّمْسُ تُشْرِقُ:", ["جملة فعلية", "مفرد"], 0, ""], ["Khabar type in المَاءُ فِي الكُوبِ:", ["شبه جملة", "جملة اسمية"], 0, ""], ["What links a sentence khabar?", ["a pronoun", "a preposition"], 0, ""]],
  comp: [["Where are the books?", ["on the shelf", "on the bed", "under the desk"], 0, 0]],
  cheat: `<h3>أنواع الخبر</h3><p>single word <span class="ar">الجَوُّ صَحْوٌ</span> · verbal sentence <span class="ar">الطِّفْلُ يَنَامُ</span> · nominal sentence <span class="ar">البَيْتُ حَدِيقَتُهُ وَاسِعَةٌ</span> · semi-sentence <span class="ar">الكِتَابُ عَلَى المَكْتَبِ / أَمَامَ البَيْتِ</span></p>`,
  mistakes: [["الحَدِيقَةُ الأَزْهَارُ جَمِيلَةٌ", "الحَدِيقَةُ أَزْهَارُهَا جَمِيلَةٌ", "Needs a linking pronoun."]],
  tips: [{ t: "Where is it?", b: `Most “where” sentences have a semi-sentence khabar: <span class="ar">المِفْتَاحُ فِي جَيْبِي، أَبِي فِي العَمَلِ</span>.` }]
});
