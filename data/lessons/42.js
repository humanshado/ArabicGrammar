// الدرس ٤٢ — العلم (PDF pp. 197–199)
COURSE.add({
  n: 42, pages: [197, 199], method: true,
  summary: "A proper noun (العَلَم) names one particular person, place, or animal: مُحَمَّدٌ، فَاطِمَةُ، مِصْرُ، النِّيلُ، مَكَّةُ. It is definite by itself, so it takes no al- (unless al- is part of the name) and its adjective takes al-: خَالِدٌ المُجْتَهِدُ.",
  objectives: ["recognise proper nouns of people, places, animals", "know they are definite without al-", "give them definite adjectives"],
  lesson: [
    { id: "what", t: "Names", ar: "العلم", pos: "parts of speech", pages: "197–198",
      b: `<p>Names of people (<span class="ar">عَلِيٌّ، مَرْيَمُ</span>), countries and cities (<span class="ar">مِصْرُ، دِمَشْقُ، بَغْدَادُ</span>), rivers and mountains (<span class="ar">النِّيلُ، الفُرَاتُ</span>), even a pet's name: each points to <b>one</b> particular thing. That's why a name is maʿrifa by itself. Some names include al- (<span class="ar">القَاهِرَةُ، الحَسَنُ</span>).</p>`,
      rule: `<p><span class="ar">العَلَمُ: اسْمٌ يُعَيِّنُ مُسَمَّاهُ تَعْيِينًا مُطْلَقًا، كَأَسْمَاءِ الأَشْخَاصِ وَالبِلَادِ وَالأَنْهَارِ وَالجِبَالِ.</span></p>`,
      widget: "sorter",
      wd: { title: "Name of…", bins: [["إنسان", "person"], ["مكان", "place"], ["نهر أو جبل", "river / mountain"]], items: [["خَالِدٌ", 0, ""], ["دِمَشْقُ", 1, ""], ["النِّيلُ", 2, ""], ["زَيْنَبُ", 0, ""], ["مَكَّةُ", 1, ""], ["الفُرَاتُ", 2, ""]] } },
    { id: "naat", t: "Its adjective takes al-", ar: "نعت العلم", pos: "agreement", pages: "198–199",
      b: `<p><span class="ar">مُحَمَّدٌ المُجْتَهِدُ</span> (hard-working Muhammad), <span class="ar">مِصْرُ الجَمِيلَةُ</span>. Without al-, the word is a khabar: <span class="ar">مُحَمَّدٌ مُجْتَهِدٌ</span> (Muhammad is hard-working).</p>`,
      check: [["“beautiful Damascus” (a phrase):", ["دِمَشْقُ الجَمِيلَةُ", "دِمَشْقُ جَمِيلَةٌ"], 0, "", "دِمَشْقُ الجَمِيلَةُ"]] }
  ],
  scenes: [{ h: "رِحْلَةُ خَالِدٍ", en: "Khalid's journey", pic: "🗺️", lines: [["", "سَافَرَ خَالِدٌ مِنَ القَاهِرَةِ إِلَى دِمَشْقَ.", "Khalid travelled from Cairo to Damascus."], ["", "زَارَ بَغْدَادَ، وَرَأَى نَهْرَ دِجْلَةَ.", "He visited Baghdad and saw the Tigris."], ["", "ثُمَّ ذَهَبَ إِلَى مَكَّةَ المُكَرَّمَةِ.", "Then he went to holy Mecca."], ["", "وَرَجَعَ إِلَى مِصْرَ، وَجَلَسَ عَلَى شَاطِئِ النِّيلِ.", "And he returned to Egypt and sat on the bank of the Nile."]], note: "Names: خالد، القاهرة، دمشق، بغداد، دجلة، مكة، مصر، النيل. Many take no tanwīn (diptotes, lesson 70)." }],
  vocab: [["عَلَمٌ", "proper noun", "n.m", "", "", "أَعْلَامٌ", "Grammar"], ["مِصْرُ", "Egypt", "n.f", "🇪🇬", "", "", "Places"], ["دِمَشْقُ", "Damascus", "n.f", "🏙️", "", "", "Places"], ["بَغْدَادُ", "Baghdad", "n.f", "🏙️", "", "", "Places"], ["مَكَّةُ", "Mecca", "n.f", "🕋", "", "", "Places"], ["دِجْلَةُ", "the Tigris", "n.f", "🏞️", "", "", "Places"], ["الفُرَاتُ", "the Euphrates", "n.m", "🏞️", "", "", "Places"]],
  exercises: [
    { k: "sort", t: "علم أم لا؟", cats: ["علم", "ليس علمًا"], items: [["بَغْدَادُ", "0", ""], ["مَدِينَةٌ", "1", ""], ["فَاطِمَةُ", "0", ""], ["بِنْتٌ", "1", ""], ["النِّيلُ", "0", ""], ["نَهْرٌ", "1", ""]] },
    { k: "mcq", t: "اِخْتَرْ", items: [["سَافَرْتُ إِلَى ___", ["مِصْرَ", "المِصْرِ"], 0, "No al- on the name."], ["“I visited sick Ali” (naʿt):", ["زُرْتُ عَلِيًّا المَرِيضَ", "زُرْتُ عَلِيًّا مَرِيضٌ"], 0, "A name is definite, so its naʿt takes al-."]] }
  ],
  drills: [["A proper noun is…", ["maʿrifa", "nakira"], 0, ""], ["Adjective of a name takes…", ["الـ", "tanwīn"], 0, ""], ["Which is ʿalam?", ["دِمَشْقُ", "عَاصِمَةٌ"], 0, ""]],
  comp: [["Where did Khalid start?", ["Cairo", "Damascus", "Mecca"], 0, 0]],
  cheat: `<h3>العلم</h3><p>Names of people, places, rivers, mountains — definite by themselves. Adjective with <span class="ar">الـ</span>: <span class="ar">خَالِدٌ المُجْتَهِدُ</span>.</p>`,
  mistakes: [["المِصْرُ", "مِصْرُ", "No al- on most names."]],
  tips: [{ t: "Your own name", b: `Write your name and five Arab cities with an adjective each: <span class="ar">القَاهِرَةُ المُزْدَحِمَةُ، دِمَشْقُ القَدِيمَةُ…</span>` }]
});
