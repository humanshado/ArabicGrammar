// الدرس ٧١ — النعت الحقيقي والسببي (PDF pp. 378–386)
COURSE.add({
  n: 71, pages: [378, 386], method: true,
  summary: "A real adjective (نعت حقيقي) describes its own noun and agrees with it in case, definiteness, gender and number: جَاءَ الطُّلَّابُ المُجْتَهِدُونَ. A causal adjective (نعت سببي) describes something related to the noun — followed by a noun with a pronoun referring back: جَاءَ الرَّجُلُ الكَرِيمُ أَبُوهُ (the man whose father is generous). It agrees with the noun before it in case and definiteness, but with the noun after it in gender, and is always singular. A naʿt can also be a sentence after an indefinite noun.",
  objectives: ["make a real naʿt agree in four things", "build a causal naʿt: الكَرِيمُ أَبُوهُ", "use a sentence as naʿt after an indefinite noun"],
  lesson: [
    { id: "real", t: "Real adjective: agrees in four things", ar: "النعت الحقيقي", pos: "agreement", pages: "378–381",
      b: `<p>Lesson 16 gave case, definiteness and gender; now add <b>number</b>: <span class="ar">طَالِبَانِ مُجْتَهِدَانِ، طُلَّابٌ مُجْتَهِدُونَ، طَالِبَاتٌ مُجْتَهِدَاتٌ</span>. Plurals of things: feminine singular (<span class="ar">كُتُبٌ مُفِيدَةٌ</span>).</p>`,
      check: [["رَأَيْتُ الطَّالِبَيْنِ ___", ["المُجْتَهِدَيْنِ", "المُجْتَهِدَانِ", "مُجْتَهِدَيْنِ"], 0, "", "رَأَيْتُ الطَّالِبَيْنِ المُجْتَهِدَيْنِ"]] },
    { id: "sababi", t: "Causal adjective", ar: "النعت السببي", pos: "agreement", pages: "381–384",
      widget: "transform",
      wd: { title: "Real vs causal", sets: [{ base: ["جَاءَ الرَّجُلُ الكَرِيمُ", "The generous man came."], baseLabel: "real", ops: [["causal (m)", "جَاءَ الرَّجُلُ الكَرِيمُ [[أَبُوهُ]]", "The man whose father is generous came.", "الكريمُ follows الرجل in case and al-; masculine because أبوه is masculine."], ["causal (f)", "جَاءَ الرَّجُلُ [[الكَرِيمَةُ]] [[أُمُّهُ]]", "The man whose mother is generous came.", "Feminine because أمّه is feminine."], ["plural noun", "جَاءَ الرِّجَالُ [[الكَرِيمُ]] أَبُوهُمْ", "The men whose father is generous came.", "Causal naʿt is always singular."]] }] },
      rule: `<p><span class="ar">النَّعْتُ الحَقِيقِيُّ يُطَابِقُ مَنْعُوتَهُ فِي الإِعْرَابِ وَالتَّعْرِيفِ وَالتَّنْكِيرِ وَالتَّذْكِيرِ وَالتَّأْنِيثِ وَالإِفْرَادِ وَالتَّثْنِيَةِ وَالجَمْعِ. وَالنَّعْتُ السَّبَبِيُّ يُطَابِقُ مَا قَبْلَهُ فِي الإِعْرَابِ وَالتَّعْرِيفِ وَالتَّنْكِيرِ، وَمَا بَعْدَهُ فِي التَّذْكِيرِ وَالتَّأْنِيثِ، وَيَكُونُ مُفْرَدًا دَائِمًا.</span></p>`,
      check: [["“I saw a girl whose brother is tall”:", ["رَأَيْتُ بِنْتًا طَوِيلًا أَخُوهَا", "رَأَيْتُ بِنْتًا طَوِيلَةً أَخُوهَا"], 0, "Gender follows أخوها.", "رَأَيْتُ بِنْتًا طَوِيلًا أَخُوهَا"]] },
    { id: "sentence", t: "A sentence as adjective", ar: "النعت جملة", pos: "sentence structure", pages: "384–386",
      b: `<p>After an <b>indefinite</b> noun, a sentence with a linking pronoun can describe it: <span class="ar">رَأَيْتُ طِفْلًا يَبْكِي</span> (a child who was crying), <span class="ar">هَذَا بَيْتٌ نَوَافِذُهُ وَاسِعَةٌ</span>. After a definite noun you need <span class="ar">الَّذِي</span> (lesson 45).</p>` }
  ],
  scenes: [{ h: "جِيرَانُنَا", en: "Our neighbours", pic: "🏘️", lines: [["", "جَارُنَا رَجُلٌ طَيِّبٌ، وَأَبْنَاؤُهُ المُؤَدَّبُونَ يُسَاعِدُونَ النَّاسَ.", "Our neighbour is a good man, and his polite sons help people."], ["", "وَفِي الشَّارِعِ بَيْتٌ كَبِيرَةٌ حَدِيقَتُهُ.", "And in the street there is a house whose garden is big."], ["", "يَسْكُنُهُ رَجُلٌ يُحِبُّ الزُّهُورَ.", "A man who loves flowers lives in it."]]}],
  vocab: [["نَعْتٌ حَقِيقِيٌّ", "real adjective", "n.m", "", "", "", "Grammar"], ["نَعْتٌ سَبَبِيٌّ", "causal adjective", "n.m", "", "", "", "Grammar"], ["طَيِّبٌ", "good, kind", "adj.", "😊", "", "", "Words"], ["جَارٌ", "neighbour", "n.m", "🏡", "", "جِيرَانٌ", "Words"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرِ النَّعْتَ", items: [["هَؤُلَاءِ طَالِبَاتٌ ___", ["مُجْتَهِدَاتٌ", "مُجْتَهِدَةٌ"], 0, ""], ["مَرَرْتُ بِرَجُلٍ ___ ابْنُهُ", ["كَرِيمٍ", "كَرِيمٌ", "كَرِيمَةٍ"], 0, ""], ["هَذَا وَلَدٌ ___ أُمُّهُ", ["مُعَلِّمَةٌ", "مُعَلِّمٌ"], 0, "Gender follows أمّه."]] },
    { k: "sort", t: "حقيقي أم سببي؟", cats: ["حقيقي", "سببي"], items: [["جَاءَ الطَّالِبُ المُجْتَهِدُ", "0", ""], ["جَاءَ الطَّالِبُ المُجْتَهِدُ أَخُوهُ", "1", ""], ["هَذِهِ حَدِيقَةٌ جَمِيلَةٌ", "0", ""], ["هَذِهِ حَدِيقَةٌ جَمِيلٌ مَنْظَرُهَا", "1", ""]] }
  ],
  drills: [["Causal naʿt is always…", ["singular", "plural"], 0, ""], ["Its gender follows…", ["the noun after it", "the noun before it"], 0, ""], ["“Two polite boys”:", ["وَلَدَانِ مُؤَدَّبَانِ", "وَلَدَانِ مُؤَدَّبٌ"], 0, ""]],
  comp: [["What does the man in the big house love?", ["flowers", "books", "cars"], 0, 0]],
  cheat: `<h3>النعت الحقيقي والسببي</h3><p>Real: agrees in case, definiteness, gender, number. Causal: <span class="ar">الرَّجُلُ الكَرِيمُ أَبُوهُ</span> — case and definiteness from before, gender from after, always singular. Sentence naʿt after indefinite: <span class="ar">رَأَيْتُ طِفْلًا يَبْكِي</span>.</p>`,
  mistakes: [["جَاءَ الرِّجَالُ الكُرَمَاءُ أَبُوهُمْ", "جَاءَ الرِّجَالُ الكَرِيمُ أَبُوهُمْ", "Causal naʿt is singular."]],
  tips: [{ t: "Whose…", b: `Causal naʿt translates English “whose”: <span class="ar">مَدِينَةٌ قَدِيمَةٌ أَسْوَارُهَا</span> — a city whose walls are old.` }]
});
