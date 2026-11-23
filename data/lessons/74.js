// الدرس ٧٤ — الفرق بين واو العطف وواو المعية (PDF pp. 401–405)
COURSE.add({
  n: 74, pages: [401, 405], method: true,
  summary: "وَ + noun can mean “and” (عطف: the noun follows the case) or “together with / along” (معية: the noun is manṣūb, المفعول معه). Use معية when the second noun cannot share the action: سِرْتُ وَالنَّهْرَ (I walked along the river) — the river doesn't walk. When it can share, عطف is better: جَاءَ عَلِيٌّ وَخَالِدٌ.",
  objectives: ["tell wāw of conjunction from wāw of accompaniment", "put المفعول معه in naṣb", "choose by meaning: can the second noun share the action?"],
  lesson: [
    { id: "two", t: "And, or along with?", ar: "واو العطف وواو المعية", pos: "case endings", pages: "401–404",
      widget: "transform",
      wd: { title: "Two wāws", sets: [{ base: ["حَضَرَ عَلِيٌّ وَ[[خَالِدٌ]]", "Ali and Khalid came."], baseLabel: "عطف", ops: [["معية", "سِرْتُ وَ[[النَّهْرَ]]", "I walked along the river.", "The river can't walk: wāw of accompaniment, manṣūb."], ["معية", "اسْتَيْقَظْتُ وَ[[طُلُوعَ]] الشَّمْسِ", "I woke at sunrise (with the sun rising).", "Manṣūb: المفعول معه."]] }] },
      rule: `<p><span class="ar">المَفْعُولُ مَعَهُ: اسْمٌ مَنْصُوبٌ يَقَعُ بَعْدَ وَاوٍ بِمَعْنَى «مَعَ» لِلدَّلَالَةِ عَلَى مَا حَصَلَ الفِعْلُ بِمُصَاحَبَتِهِ، وَلَا يَصِحُّ اشْتِرَاكُهُ فِي الفِعْلِ.</span></p>`,
      check: [["ذَاكَرْتُ وَ___ (by lamplight)", ["المِصْبَاحَ", "المِصْبَاحُ", "المِصْبَاحِ"], 0, "", "ذَاكَرْتُ وَالمِصْبَاحَ"]] }
  ],
  scenes: [{ h: "نُزْهَةٌ", en: "A stroll", pic: "🌅", lines: [["", "خَرَجْتُ وَأَخِي إِلَى الحَدِيقَةِ.", "My brother and I went out to the garden."], ["", "سِرْنَا وَالنِّيلَ سَاعَةً.", "We walked along the Nile for an hour."], ["", "وَرَجَعْنَا وَغُرُوبَ الشَّمْسِ.", "And we came back at sunset."]], note: "وَأَخِي: عطف (my brother walked too) · وَالنِّيلَ، وَغُرُوبَ: معية (manṣūb)." }],
  vocab: [["مَفْعُولٌ مَعَهُ", "object of accompaniment", "n.m", "", "", "", "Grammar"], ["وَاوُ المَعِيَّةِ", "wāw of “with”", "n.f", "", "", "", "Grammar"], ["غُرُوبٌ", "sunset", "n.m", "🌇", "", "", "Words"], ["طُلُوعٌ", "rising", "n.m", "🌄", "", "", "Words"]],
  exercises: [
    { k: "sort", t: "عطف أم معية؟", cats: ["واو العطف", "واو المعية"], items: [["جَاءَ الأَبُ وَالابْنُ", "0", ""], ["سِرْتُ وَالشَّاطِئَ", "1", ""], ["أَكَلْتُ الخُبْزَ وَالجُبْنَ", "0", ""], ["سَافَرْتُ وَالفَجْرَ", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["المفعول معه is manṣūb.", true, ""], ["In سِرْتُ وَالنَّهْرَ the river walks too.", false, ""]] }
  ],
  drills: [["Wāw of accompaniment means…", ["with, along", "and"], 0, ""], ["Its noun is…", ["منصوب", "مرفوع"], 0, ""]],
  comp: [["When did they come back?", ["at sunset", "at noon", "at dawn"], 0, 0]],
  cheat: `<h3>واو العطف وواو المعية</h3><p class="ar">جَاءَ عَلِيٌّ وَخَالِدٌ (عطف) · سِرْتُ وَالنَّهْرَ (معية، منصوب)</p>`,
  mistakes: [["سِرْتُ وَالنَّهْرُ", "سِرْتُ وَالنَّهْرَ", "المفعول معه is manṣūb."]],
  tips: [{ t: "Test", b: `Ask: could the second noun do the action too? If not, it's معية.` }]
});
