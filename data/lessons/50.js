// الدرس ٥٠ — المفعول لأجله (PDF pp. 241–244)
COURSE.add({
  n: 50, pages: [241, 244], method: true,
  summary: "The object of purpose (المفعول لأجله) is a maṣdar in naṣb that tells why the action was done: وَقَفْتُ احْتِرَامًا لِلْمُعَلِّمِ (I stood out of respect for the teacher). It answers “why?” (لِمَاذَا؟).",
  objectives: ["give the reason for an action with a manṣūb maṣdar", "answer لِمَاذَا؟", "compare with لِـ + noun and لِـ + verb"],

  lesson: [
    { id: "what", t: "Why did you do it?", ar: "المفعول لأجله", pos: "case endings", pages: "241–243",
      widget: "transform",
      wd: { title: "Three ways to give a reason", sets: [{ base: ["وَقَفْتُ", "I stood up."], baseLabel: "action", ops: [["maṣdar (naṣb)", "وَقَفْتُ [[احْتِرَامًا]] لِلْمُعَلِّمِ", "I stood out of respect for the teacher.", "المفعول لأجله."], ["لِـ + maṣdar", "وَقَفْتُ [[لِاحْتِرَامِ]] المُعَلِّمِ", "I stood out of respect for the teacher.", "Also correct: majrūr."], ["لِـ + verb", "وَقَفْتُ [[لِأُحَيِّيَ]] المُعَلِّمَ", "I stood to greet the teacher.", "Lesson 28."]] }] },
      rule: `<p><span class="ar">المَفْعُولُ لِأَجْلِهِ: مَصْدَرٌ مَنْصُوبٌ يُذْكَرُ بَيَانًا لِسَبَبِ وُقُوعِ الفِعْلِ.</span></p>`,
      check: [["“He studied out of desire for success”:", ["ذَاكَرَ رَغْبَةً فِي النَّجَاحِ", "ذَاكَرَ رَغْبَةٌ فِي النَّجَاحِ"], 0, "", "ذَاكَرَ رَغْبَةً فِي النَّجَاحِ"]] }
  ],
  scenes: [{ h: "لِمَاذَا؟", en: "Why?", pic: "❓", lines: [["الأُمُّ", "لِمَاذَا تَسْتَيْقِظُ مُبَكِّرًا؟", "Why do you get up early?"], ["الابْنُ", "أَسْتَيْقِظُ حِرْصًا عَلَى صَلَاةِ الفَجْرِ.", "I get up out of care for the dawn prayer."], ["الأُمُّ", "وَلِمَاذَا تُسَاعِدُ جَارَكَ؟", "And why do you help your neighbour?"], ["الابْنُ", "أُسَاعِدُهُ حُبًّا لَهُ وَرَغْبَةً فِي الخَيْرِ.", "I help him out of love for him and a wish to do good."]]}],
  vocab: [["مَفْعُولٌ لِأَجْلِهِ", "object of purpose", "n.m", "", "", "", "Grammar"], ["احْتِرَامٌ", "respect", "n.m", "🙇", "", "", "Reasons"], ["رَغْبَةٌ", "desire", "n.f", "💭", "", "", "Reasons"], ["حِرْصٌ", "eagerness, care", "n.m", "", "", "", "Reasons"], ["خَوْفٌ", "fear", "n.m", "😨", "", "", "Reasons"], ["حُبٌّ", "love", "n.m", "❤️", "", "", "Reasons"], ["حَيَّا", "to greet", "v.", "", "يُحَيِّي", "", "Reasons"]],
  exercises: [
    { k: "gap", t: "ضَعْ مَفْعُولًا لِأَجْلِهِ", bank: true, items: [["هَرَبَ اللِّصُّ ___ مِنَ الشُّرْطَةِ.", "خَوْفًا"], ["تَصَدَّقْتُ ___ فِي الثَّوَابِ.", "رَغْبَةً"], ["قُمْتُ ___ لِأَبِي.", "احْتِرَامًا"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The object of purpose answers “why?”.", true, ""], ["It is marfūʿ.", false, ""]] }
  ],
  drills: [["The object of purpose is…", ["منصوب", "مجرور"], 0, ""], ["It answers…", ["لِمَاذَا؟", "كَيْفَ؟"], 0, ""], ["“I kept quiet out of politeness”:", ["سَكَتُّ أَدَبًا", "سَكَتُّ أَدَبٌ"], 0, ""]],
  comp: [["Why does the son help his neighbour?", ["out of love and wish to do good", "for money", "his mother asked"], 0, 0]],
  cheat: `<h3>المفعول لأجله</h3><p class="ar">وَقَفْتُ احْتِرَامًا · ذَاكَرْتُ رَغْبَةً فِي النَّجَاحِ · هَرَبَ خَوْفًا</p>`,
  mistakes: [["وَقَفْتُ احْتِرَامٌ", "وَقَفْتُ احْتِرَامًا", "Manṣūb."]],
  tips: [{ t: "Ask why", b: `For five things you did today, give a reason with a manṣūb maṣdar.` }]
});
