// الدرس ٤٣ — المعرّف بأل (PDF pp. 200–201)
COURSE.add({
  n: 43, pages: [200, 201], method: true,
  summary: "Adding الـ makes a noun definite: كِتَابٌ ← الكِتَابُ. Its lām is pronounced before “moon letters” (القَمَرُ al-qamar) but assimilated into “sun letters”, which are then doubled (الشَّمْسُ ash-shams). Its hamza is a joining hamza, silent inside a sentence.",
  objectives: ["make nouns definite with الـ", "pronounce the lām with moon letters and assimilate it with sun letters", "write the shadda after sun letters", "drop tanwīn when adding الـ"],
  lesson: [
    { id: "al", t: "al- makes it definite", ar: "التعريف بأل", pos: "parts of speech", pages: "200",
      b: `<p><span class="ar">رَأَيْتُ قِطًّا</span> (a cat) → <span class="ar">رَأَيْتُ القِطَّ</span> (the cat). Tanwīn and al- never go together: <span class="ar">كِتَابٌ / الكِتَابُ</span>, never <span class="ar">الكِتَابٌ</span>.</p>` },
    { id: "sun", t: "Sun letters and moon letters", ar: "الحروف الشمسية والقمرية", pos: "spelling", pages: "200–201",
      b: `<p>Fourteen “sun letters” swallow the lām and are doubled: <span class="ar">ت ث د ذ ر ز س ش ص ض ط ظ ل ن</span> → <span class="ar">الشَّمْسُ، النُّورُ، الرَّجُلُ، الدَّرْسُ</span>. The other fourteen are “moon letters”: the lām is heard — <span class="ar">القَمَرُ، البَابُ، الكِتَابُ، العَيْنُ</span>. The lām is always <b>written</b>.</p>`,
      widget: "sorter",
      wd: { title: "Sun or moon?", bins: [["شمسية", "lām silent, letter doubled"], ["قمرية", "lām pronounced"]], items: [["الشَّمْسُ", 0, ""], ["القَمَرُ", 1, ""], ["النَّهْرُ", 0, ""], ["البَحْرُ", 1, ""], ["الطَّالِبُ", 0, ""], ["المُعَلِّمُ", 1, ""], ["الدَّرْسُ", 0, ""], ["الكِتَابُ", 1, ""], ["السَّمَاءُ", 0, ""], ["الحَدِيقَةُ", 1, ""]] },
      tip: `The hamza of <span class="ar">الـ</span> is a <b>joining hamza</b> (lesson 62): inside a sentence it is not pronounced — <span class="ar">فِي البَيْتِ</span> <i>fi l-bayt</i>.`,
      check: [["How is الشَّمْسُ pronounced?", ["ash-shams", "al-shams"], 0, "", false]] }
  ],
  scenes: [{ h: "الشَّمْسُ وَالقَمَرُ", en: "The sun and the moon", pic: "🌗", lines: [["", "الشَّمْسُ تُضِيءُ النَّهَارَ، وَالقَمَرُ يُضِيءُ اللَّيْلَ.", "The sun lights the day, and the moon lights the night."], ["", "النُّجُومُ تَلْمَعُ فِي السَّمَاءِ.", "The stars shine in the sky."], ["", "الأَرْضُ تَدُورُ حَوْلَ الشَّمْسِ.", "The earth turns around the sun."]], note: "Sun letters: الشَّمْسُ، النَّهَارَ، اللَّيْلَ، النُّجُومُ، السَّمَاءِ · moon letters: القَمَرُ، الأَرْضُ." }],
  vocab: [["حُرُوفٌ شَمْسِيَّةٌ", "sun letters", "n.f", "☀️", "", "", "Grammar"], ["حُرُوفٌ قَمَرِيَّةٌ", "moon letters", "n.f", "🌙", "", "", "Grammar"], ["نَجْمٌ", "star", "n.m", "⭐", "", "نُجُومٌ", "Sky"], ["لَمَعَ", "to shine", "v.", "", "يَلْمَعُ", "", "Sky"], ["دَارَ", "to turn, revolve", "v.", "", "يَدُورُ", "", "Sky"]],
  exercises: [
    { k: "gap", t: "عَرِّفْ بِأَلْ · Make definite", items: [["قَمَرٌ ← ___", "القَمَرُ|القمر"], ["نَجْمٌ ← ___", "النَّجْمُ|النجم"], ["سَمَاءٌ ← ___", "السَّمَاءُ|السماء"], ["بَحْرٌ ← ___", "البَحْرُ|البحر"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["الكِتَابٌ is correct.", false, ""], ["In الرَّجُلُ the lām is silent.", true, ""]] }
  ],
  drills: [["How many sun letters?", ["14", "7"], 0, ""], ["Which is a sun letter?", ["ر", "ب"], 0, ""], ["al- and tanwīn…", ["never go together", "always go together"], 0, ""], ["Pronounce النُّورُ:", ["an-nūr", "al-nūr"], 0, ""]],
  comp: [["What turns around the sun?", ["the earth", "the moon", "the stars"], 0, 0]],
  cheat: `<h3>المعرف بأل</h3><p>Sun letters (lām silent, shadda): <span class="ar">ت ث د ذ ر ز س ش ص ض ط ظ ل ن</span>. Moon letters: the rest.</p>`,
  mistakes: [["الكِتَابٌ", "الكِتَابُ", "No tanwīn with al-."]],
  tips: [{ t: "Listen to it", b: `Read the scene aloud and exaggerate the doubled letters: <i>ash-shams, an-nahār, al-qamar</i>.` }]
});
