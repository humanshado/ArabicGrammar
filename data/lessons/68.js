// الدرس ٦٨ — التمييز (PDF pp. 354–363)
COURSE.add({
  n: 68, pages: [354, 363], method: true,
  summary: "The tamyīz (التمييز) is an indefinite manṣūb noun that clears up a vague word before it: after measures of weight, volume and area (اشْتَرَيْتُ رِطْلًا لَحْمًا), after numbers (عِنْدِي عِشْرُونَ كِتَابًا), and after a vague comparison or quality (مُحَمَّدٌ أَكْثَرُ مِنْكَ عِلْمًا، طَابَ الجَوُّ هَوَاءً).",
  objectives: ["use tamyīz after measures: weight, volume, area", "use it after numbers 11–99: singular manṣūb", "use it to specify a comparison: أَكْثَرُ عِلْمًا", "know that after 3–10 the counted noun is plural majrūr"],
  lesson: [
    { id: "measure", t: "A kilo of what?", ar: "تمييز الوزن والكيل والمساحة", pos: "case endings", pages: "354–357",
      b: `<p><span class="ar">اشْتَرَيْتُ رِطْلًا</span> — a pound of what? <span class="ar">اشْتَرَيْتُ رِطْلًا <b>لَحْمًا</b></span>. The noun that clarifies is the tamyīz: indefinite, manṣūb. Also possible: majrūr by iḍāfa or <span class="ar">مِنْ</span>: <span class="ar">رِطْلَ لَحْمٍ</span>, <span class="ar">رِطْلًا مِنْ لَحْمٍ</span>.</p>
        <ul><li>weight: <span class="ar">كِيلُو بُرْتُقَالًا</span></li><li>volume: <span class="ar">لِتْرًا لَبَنًا</span>, <span class="ar">إِرْدَبًّا قَمْحًا</span></li><li>area: <span class="ar">فَدَّانًا قُطْنًا</span>, <span class="ar">مِتْرًا قُمَاشًا</span></li></ul>`,
      rule: `<p><span class="ar">التَّمْيِيزُ: اسْمٌ نَكِرَةٌ مَنْصُوبٌ يُذْكَرُ لِتَوْضِيحِ اسْمٍ مُبْهَمٍ قَبْلَهُ، أَوْ نِسْبَةٍ مُبْهَمَةٍ.</span></p>` },
    { id: "number", t: "After numbers", ar: "تمييز العدد", pos: "case endings", pages: "357–359",
      b: `<table class="g"><tr><th>number</th><th>counted noun</th><th>example</th></tr><tr><td>3–10</td><td>plural, majrūr (iḍāfa)</td><td><span class="ar">ثَلَاثَةُ كُتُبٍ</span></td></tr><tr><td>11–99</td><td><b>singular, manṣūb</b> (tamyīz)</td><td><span class="ar">عِشْرُونَ كِتَابًا، أَحَدَ عَشَرَ طَالِبًا</span></td></tr><tr><td>100, 1000</td><td>singular, majrūr</td><td><span class="ar">مِائَةُ كِتَابٍ، أَلْفُ رَجُلٍ</span></td></tr></table>`,
      check: [["فِي الفَصْلِ ثَلَاثُونَ ___", ["طَالِبًا", "طُلَّابٍ", "طَالِبٍ"], 0, "", "فِي الفَصْلِ ثَلَاثُونَ طَالِبًا"]] },
    { id: "relation", t: "More what?", ar: "تمييز النسبة", pos: "case endings", pages: "359–363",
      b: `<p><span class="ar">مُحَمَّدٌ أَكْثَرُ مِنْكَ</span> — more of what? <span class="ar">أَكْثَرُ مِنْكَ <b>عِلْمًا</b></span> (more knowledgeable than you). Also: <span class="ar">طَابَ الجَوُّ هَوَاءً</span> (the weather was pleasant in its air), <span class="ar">امْتَلَأَ الكُوبُ مَاءً</span> (the cup filled with water).</p>`,
      check: [["“The garden is larger in area”:", ["الحَدِيقَةُ أَوْسَعُ مِسَاحَةً", "الحَدِيقَةُ أَوْسَعُ مِسَاحَةٌ"], 0, "", "الحَدِيقَةُ أَوْسَعُ مِسَاحَةً"]] }
  ],
  scenes: [{ h: "فِي السُّوقِ", en: "At the market", pic: "🧺", lines: [["", "اشْتَرَتْ أُمِّي كِيلُو بُرْتُقَالًا، وَلِتْرَيْنِ لَبَنًا.", "My mother bought a kilo of oranges and two litres of milk."], ["", "وَاشْتَرَى أَبِي عِشْرِينَ رَغِيفًا.", "And my father bought twenty loaves."], ["", "قَالَ البَائِعُ: هَذَا البُرْتُقَالُ أَكْثَرُ حَلَاوَةً مِنْ غَيْرِهِ.", "The seller said: these oranges are sweeter than the others."], ["", "امْتَلَأَتِ السَّلَّةُ فَاكِهَةً.", "The basket filled up with fruit."]]}],
  vocab: [["تَمْيِيزٌ", "specification (tamyīz)", "n.m", "", "", "", "Grammar"], ["رِطْلٌ", "pound (weight)", "n.m", "⚖️", "", "أَرْطَالٌ", "Measures"], ["لِتْرٌ", "litre", "n.m", "🥛", "", "لِتْرَاتٌ", "Measures"], ["فَدَّانٌ", "feddan (area)", "n.m", "🌾", "", "أَفْدِنَةٌ", "Measures"], ["مِتْرٌ", "metre", "n.m", "📏", "", "أَمْتَارٌ", "Measures"], ["لَحْمٌ", "meat", "n.m", "🥩", "", "لُحُومٌ", "Food"], ["بُرْتُقَالٌ", "oranges", "n.m", "🍊", "", "", "Food"], ["لَبَنٌ", "milk", "n.m", "🥛", "", "", "Food"], ["رَغِيفٌ", "loaf", "n.m", "🍞", "", "أَرْغِفَةٌ", "Food"], ["امْتَلَأَ", "to become full", "v.", "", "يَمْتَلِئُ", "", "Words"]],
  exercises: [
    { k: "gap", t: "ضَعْ تَمْيِيزًا", bank: true, items: [["اشْتَرَيْتُ رِطْلًا ___ .", "لَحْمًا"], ["زَرَعَ الفَلَّاحُ فَدَّانًا ___ .", "قُطْنًا"], ["فِي المَكْتَبَةِ خَمْسُونَ ___ .", "كِتَابًا"], ["خَالِدٌ أَحْسَنُ مِنْكَ ___ .", "خَطًّا"]] },
    { k: "mcq", t: "اِخْتَرْ", items: [["عِنْدِي خَمْسَةُ ___", ["أَقْلَامٍ", "قَلَمًا"], 0, "3–10: plural majrūr."], ["عِنْدِي خَمْسَةَ عَشَرَ ___", ["قَلَمًا", "أَقْلَامٍ"], 0, "11–99: singular manṣūb."]] }
  ],
  drills: [["Tamyīz is…", ["indefinite and manṣūb", "definite and majrūr"], 0, ""], ["أَرْبَعُونَ ___", ["يَوْمًا", "أَيَّامٍ"], 0, ""], ["امْتَلَأَ الحَوْضُ ___", ["مَاءً", "مَاءٌ"], 0, ""]],
  comp: [["How many loaves did the father buy?", ["twenty", "two", "ten"], 0, 0]],
  cheat: `<h3>التمييز</h3><p class="ar">رِطْلًا لَحْمًا · عِشْرُونَ كِتَابًا · أَكْثَرُ عِلْمًا · امْتَلَأَ الكُوبُ مَاءً</p><p>3–10 + plural majrūr · 11–99 + singular manṣūb · 100/1000 + singular majrūr</p>`,
  mistakes: [["عِشْرُونَ كُتُبٍ", "عِشْرُونَ كِتَابًا", "11–99: singular manṣūb."]],
  tips: [{ t: "Shopping list", b: `Write your shopping list with tamyīz: <span class="ar">كِيلُو أَرُزًّا، لِتْرًا زَيْتًا، عِشْرِينَ بَيْضَةً</span>.` }]
});
