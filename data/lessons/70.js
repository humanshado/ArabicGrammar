// الدرس ٧٠ — الممنوع من الصرف (PDF pp. 369–377)
COURSE.add({
  n: 70, pages: [369, 377], method: true,
  summary: "Some nouns are “prevented from tanwīn” (الممنوع من الصرف, diptotes): they never take tanwīn, and in jarr they take fatḥa instead of kasra (مَرَرْتُ بِفَاطِمَةَ) — unless they have al- or are muḍāf. They include many proper names (feminine, foreign, on a verb pattern, ending in ـان), adjectives on أَفْعَل / فَعْلَان (أَحْمَرُ، عَطْشَانُ), plurals like مَسَاجِدُ، مَصَابِيحُ, and words ending in ـاء / ـى of the feminine (صَحْرَاءُ، ذِكْرَى).",
  objectives: ["recognise diptotes", "give them no tanwīn and fatḥa in jarr", "restore kasra with al- or iḍāfa", "list the main kinds: names, adjectives, plural patterns, feminine alif"],
  lesson: [
    { id: "what", t: "No tanwīn, fatḥa for kasra", ar: "ما الممنوع من الصرف؟", pos: "case endings", pages: "369–371",
      widget: "transform",
      wd: { title: "A diptote in three cases", sets: [{ base: ["جَاءَتْ [[فَاطِمَةُ]]", "Fatima came."], baseLabel: "rafʿ: ـُ (no tanwīn)", ops: [["naṣb", "رَأَيْتُ [[فَاطِمَةَ]]", "I saw Fatima."], ["jarr", "سَلَّمْتُ عَلَى [[فَاطِمَةَ]]", "I greeted Fatima.", "Fatḥa instead of kasra!"]] }, { base: ["صَلَّيْتُ فِي [[مَسَاجِدَ]] كَثِيرَةٍ", "I prayed in many mosques."], baseLabel: "jarr: fatḥa", ops: [["with al-", "صَلَّيْتُ فِي [[المَسَاجِدِ]]", "I prayed in the mosques.", "With al- → normal kasra."], ["muḍāf", "صَلَّيْتُ فِي [[مَسَاجِدِ]] القَاهِرَةِ", "I prayed in Cairo's mosques.", "Muḍāf → normal kasra."]] }] },
      rule: `<p><span class="ar">المَمْنُوعُ مِنَ الصَّرْفِ: اسْمٌ لَا يُنَوَّنُ، وَيُجَرُّ بِالفَتْحَةِ نِيَابَةً عَنِ الكَسْرَةِ، مَا لَمْ يُعَرَّفْ بِأَلْ أَوْ يُضَفْ.</span></p>`,
      check: [["مَرَرْتُ بِـ___ (Ahmad)", ["أَحْمَدَ", "أَحْمَدٍ"], 0, "", "مَرَرْتُ بِأَحْمَدَ"]] },
    { id: "kinds", t: "Which nouns?", ar: "أنواع الممنوع من الصرف", pos: "parts of speech", pages: "371–377",
      b: `<table class="g"><tr><th>kind</th><th>examples</th></tr>
        <tr><td>feminine names (with or without ة)</td><td><span class="ar">فَاطِمَةُ، زَيْنَبُ، طَلْحَةُ</span></td></tr>
        <tr><td>foreign names</td><td><span class="ar">إِبْرَاهِيمُ، إِسْمَاعِيلُ، يُوسُفُ</span></td></tr>
        <tr><td>names on a verb pattern</td><td><span class="ar">أَحْمَدُ، يَزِيدُ، يَثْرِبُ</span></td></tr>
        <tr><td>names ending in ـان</td><td><span class="ar">عُثْمَانُ، عَدْنَانُ، رَمَضَانُ</span></td></tr>
        <tr><td>compound names</td><td><span class="ar">بَعْلَبَكُّ، حَضْرَمَوْتُ</span></td></tr>
        <tr><td>adjectives أَفْعَل / فَعْلَان</td><td><span class="ar">أَحْمَرُ، أَكْبَرُ، عَطْشَانُ، غَضْبَانُ</span></td></tr>
        <tr><td>plurals مَفَاعِل / مَفَاعِيل</td><td><span class="ar">مَسَاجِدُ، مَدَارِسُ، مَصَابِيحُ، عَصَافِيرُ</span></td></tr>
        <tr><td>ending in feminine ـاء / ـى</td><td><span class="ar">صَحْرَاءُ، حَمْرَاءُ، أَصْدِقَاءُ، ذِكْرَى، كُبْرَى</span></td></tr></table>`,
      widget: "sorter",
      wd: { title: "Diptote or not?", bins: [["ممنوع من الصرف", "no tanwīn"], ["مصروف", "takes tanwīn"]], items: [["زَيْنَبُ", 0, ""], ["مُحَمَّدٌ", 1, ""], ["مَدَارِسُ", 0, ""], ["كُتُبٌ", 1, ""], ["أَخْضَرُ", 0, ""], ["كَبِيرٌ", 1, ""], ["صَحْرَاءُ", 0, ""], ["عُثْمَانُ", 0, ""], ["خَالِدٌ", 1, ""], ["مَصَابِيحُ", 0, ""]] } }
  ],
  scenes: [{ h: "رِحْلَةُ إِبْرَاهِيمَ", en: "Ibrahim's journey", pic: "🐪", lines: [["", "سَافَرَ إِبْرَاهِيمُ مَعَ أَصْدِقَاءَ كَثِيرِينَ.", "Ibrahim travelled with many friends."], ["", "عَبَرُوا صَحْرَاءَ وَاسِعَةً فِي رَمَضَانَ.", "They crossed a vast desert in Ramadan."], ["", "وَزَارُوا مَسَاجِدَ قَدِيمَةً فِي مَكَّةَ.", "And visited ancient mosques in Mecca."], ["", "ثُمَّ نَزَلُوا عِنْدَ عُثْمَانَ، فَأَكْرَمَهُمْ.", "Then they stayed with Uthman, who treated them generously."]], note: "No tanwīn: إبراهيمُ، أصدقاءَ، صحراءَ، رمضانَ، مساجدَ، مكةَ، عثمانَ — and fatḥa in jarr: مَعَ أَصْدِقَاءَ، فِي رَمَضَانَ، فِي مَكَّةَ، عِنْدَ عُثْمَانَ." }],
  vocab: [["مَمْنُوعٌ مِنَ الصَّرْفِ", "diptote", "adj.", "", "", "", "Grammar"], ["عَطْشَانُ", "thirsty", "adj.", "🥤", "f. عَطْشَى", "", "Words"], ["غَضْبَانُ", "angry", "adj.", "😠", "f. غَضْبَى", "", "Words"], ["رَمَضَانُ", "Ramadan", "n.m", "🌙", "", "", "Words"], ["مِصْبَاحٌ", "lamp", "n.m", "🪔", "", "مَصَابِيحُ", "Words"]],
  exercises: [
    { k: "shakl", t: "اضْبِطْ", marks: ["ِ", "َ", "ٍ"], items: ["سَلَّمْتُ عَلَى زَيْنَب{َ}", "سَلَّمْتُ عَلَى خَالِد{ٍ}", "دَرَسْتُ فِي مَدَارِس{َ} كَثِيرَةٍ", "دَرَسْتُ فِي المَدَارِس{ِ}", "مَرَرْتُ بِأَحْمَد{َ}"] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Diptotes take fatḥa in jarr.", true, "Unless al- or muḍāf."], ["أَحْمَرُ takes tanwīn.", false, ""], ["فِي المَسَاجِدِ is correct.", true, ""]] }
  ],
  drills: [["ذَهَبْتُ إِلَى ___", ["يُوسُفَ", "يُوسُفٍ"], 0, ""], ["Which takes tanwīn?", ["عَلِيٌّ", "عُمَرُ"], 0, "عمر is on the فُعَل pattern: diptote."], ["Diptotes with al- take…", ["kasra in jarr", "fatḥa in jarr"], 0, ""], ["Which is a diptote?", ["عَصَافِيرُ", "طُيُورٌ"], 0, ""]],
  comp: [["When did they cross the desert?", ["in Ramadan", "in winter", "at night"], 0, 0]],
  cheat: `<h3>الممنوع من الصرف</h3><p>No tanwīn; jarr with fatḥa (unless al- / muḍāf): <span class="ar">بِفَاطِمَةَ · فِي مَسَاجِدَ · فِي المَسَاجِدِ</span></p><p>Names (feminine, foreign, verb pattern, ـان) · <span class="ar">أَفْعَل، فَعْلَان</span> · <span class="ar">مَفَاعِل، مَفَاعِيل</span> · <span class="ar">ـاء، ـى</span></p>`,
  mistakes: [["مَرَرْتُ بِأَحْمَدٍ", "مَرَرْتُ بِأَحْمَدَ", "Diptote: fatḥa in jarr."], ["فِي مَسَاجِدٍ", "فِي مَسَاجِدَ", "No tanwīn."]],
  tips: [{ t: "Names first", b: `Most diptotes you'll meet are names. Practise <span class="ar">مَعَ</span> + name: <span class="ar">مَعَ زَيْنَبَ، مَعَ أَحْمَدَ، مَعَ يُوسُفَ</span> — but <span class="ar">مَعَ خَالِدٍ، مَعَ عَلِيٍّ</span>.` }]
});
