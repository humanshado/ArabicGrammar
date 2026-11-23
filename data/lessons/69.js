// الدرس ٦٩ — المنادى (PDF pp. 364–368)
COURSE.add({
  n: 69, pages: [364, 368], method: true,
  summary: "The vocative (المنادى) is the person called with يَا. A single name or a specific indefinite noun is fixed on ḍamma: يَا عَلِيُّ، يَا رَجُلُ. A muḍāf, a noun “like a muḍāf”, or an unspecified indefinite is manṣūb: يَا طَالِبَ العِلْمِ، يَا طَالِعًا جَبَلًا، يَا غَافِلًا تَنَبَّهْ.",
  objectives: ["call someone with يَا", "build a single name on ḍamma: يَا خَالِدُ", "put a muḍāf in naṣb: يَا عَبْدَ اللهِ", "use أَيُّهَا / أَيَّتُهَا with al-"],
  lesson: [
    { id: "kinds", t: "Ḍamma or fatḥa after يَا?", ar: "أنواع المنادى", pos: "case endings", pages: "364–367",
      b: `<table class="g"><tr><th>kind</th><th>ending</th><th>example</th></tr>
        <tr><td>single name (<span class="ar">عَلَم مفرد</span>)</td><td>fixed on ḍamma</td><td><span class="ar">يَا مُحَمَّدُ، يَا فَاطِمَةُ</span></td></tr>
        <tr><td>specific indefinite (<span class="ar">نكرة مقصودة</span>) — a particular person addressed</td><td>fixed on ḍamma</td><td><span class="ar">يَا رَجُلُ، يَا شُرْطِيُّ</span></td></tr>
        <tr><td>muḍāf</td><td>manṣūb</td><td><span class="ar">يَا طَالِبَ العِلْمِ، يَا أَبَا خَالِدٍ</span></td></tr>
        <tr><td>“like a muḍāf” (followed by its complement)</td><td>manṣūb</td><td><span class="ar">يَا طَالِعًا الجَبَلَ</span></td></tr>
        <tr><td>unspecified indefinite (<span class="ar">نكرة غير مقصودة</span>)</td><td>manṣūb</td><td><span class="ar">يَا غَافِلًا تَنَبَّهْ</span> (O heedless one, whoever you are)</td></tr></table>`,
      rule: `<p><span class="ar">المُنَادَى يُبْنَى عَلَى الضَّمِّ إِذَا كَانَ عَلَمًا مُفْرَدًا أَوْ نَكِرَةً مَقْصُودَةً، وَيُنْصَبُ إِذَا كَانَ مُضَافًا أَوْ شَبِيهًا بِالمُضَافِ أَوْ نَكِرَةً غَيْرَ مَقْصُودَةٍ.</span></p>`,
      check: [["يَا ___ (Khalid)", ["خَالِدُ", "خَالِدًا", "خَالِدٍ"], 0, "", "يَا خَالِدُ"], ["يَا ___ المَدْرَسَةِ (headmaster)", ["مُدِيرَ", "مُدِيرُ"], 0, "Muḍāf.", "يَا مُدِيرَ المَدْرَسَةِ"]] },
    { id: "ayyuha", t: "Calling a noun with al-", ar: "أيها وأيتها", pos: "sentence structure", pages: "367–368",
      b: `<p><span class="ar">يَا</span> cannot sit directly before <span class="ar">الـ</span>. Use <span class="ar">أَيُّهَا</span> (m) or <span class="ar">أَيَّتُهَا</span> (f): <span class="ar">يَا أَيُّهَا الطُّلَّابُ</span>, <span class="ar">يَا أَيَّتُهَا الأُمُّ</span>. The noun after it is marfūʿ.</p>`,
      check: [["“O students!”:", ["يَا أَيُّهَا الطُّلَّابُ", "يَا الطُّلَّابُ"], 0, "", "يَا أَيُّهَا الطُّلَّابُ"]] }
  ],
  scenes: [{ h: "نِدَاءَاتٌ", en: "Calls", pic: "📢", lines: [["المُعَلِّمُ", "يَا أَيُّهَا التَّلَامِيذُ، اسْتَمِعُوا!", "Pupils, listen!"], ["المُعَلِّمُ", "يَا سَعِيدُ، اقْرَأِ الدَّرْسَ.", "Said, read the lesson."], ["المُعَلِّمُ", "يَا طَالِبَ العِلْمِ، لَا تَيْأَسْ.", "Seeker of knowledge, don't despair."], ["سَعِيدٌ", "يَا أُسْتَاذُ، هَلْ أَقْرَأُ بِصَوْتٍ عَالٍ؟", "Sir, shall I read aloud?"], ["المُعَلِّمُ", "نَعَمْ يَا بُنَيَّ.", "Yes, my son."]]}],
  vocab: [["مُنَادًى", "vocative", "n.m", "", "", "", "Grammar"], ["يَا", "O … (calling)", "part.", "📢", "", "", "Grammar"], ["أَيُّهَا", "O (before al-, m)", "", "", "", "", "Grammar"], ["أَيَّتُهَا", "O (before al-, f)", "", "", "", "", "Grammar"], ["غَافِلٌ", "heedless", "adj.", "", "", "", "Words"], ["تَنَبَّهَ", "to wake up, pay attention", "v.", "", "يَتَنَبَّهُ", "", "Words"], ["بُنَيَّ", "my little son", "n.", "👦", "", "", "Words"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرْ", items: [["يَا ___ (Fatima)", ["فَاطِمَةُ", "فَاطِمَةَ"], 0, ""], ["يَا ___ البَيْتِ (owner)", ["صَاحِبَ", "صَاحِبُ"], 0, ""], ["يَا ___ (a policeman you address)", ["شُرْطِيُّ", "شُرْطِيًّا"], 0, ""], ["يَا أَيُّهَا ___", ["النَّاسُ", "النَّاسَ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["يَا الوَلَدُ is correct.", false, "يا أيها الولد"], ["A muḍāf vocative is manṣūb.", true, ""]] }
  ],
  drills: [["يَا ___ (Ali)", ["عَلِيُّ", "عَلِيًّا"], 0, ""], ["يَا ___ اللهِ (Abdullah)", ["عَبْدَ", "عَبْدُ"], 0, ""], ["Before al- use…", ["أَيُّهَا / أَيَّتُهَا", "nothing"], 0, ""]],
  comp: [["What does the teacher tell the seeker of knowledge?", ["don't despair", "go home", "be quiet"], 0, 0]],
  cheat: `<h3>المنادى</h3><p>Fixed on ḍamma: <span class="ar">يَا عَلِيُّ، يَا رَجُلُ</span> · manṣūb: <span class="ar">يَا طَالِبَ العِلْمِ، يَا طَالِعًا جَبَلًا، يَا غَافِلًا</span> · with al-: <span class="ar">يَا أَيُّهَا النَّاسُ</span></p>`,
  mistakes: [["يَا خَالِدًا", "يَا خَالِدُ", "Single name → ḍamma."], ["يَا عَبْدُ اللهِ", "يَا عَبْدَ اللهِ", "Muḍāf → naṣb."]],
  tips: [{ t: "Call people", b: `Call everyone around you properly: <span class="ar">يَا أُمِّي، يَا أَبِي، يَا أَخِي، يَا صَدِيقِي، يَا أَيُّهَا الأَصْدِقَاءُ</span>.` }]
});
