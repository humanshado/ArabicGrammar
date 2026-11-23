// الدرس ٣٩ — علامات التأنيث في الأفعال (PDF pp. 189–191)
COURSE.add({
  n: 39, pages: [189, 191], method: true,
  summary: "A verb shows that its doer is feminine: the past takes a silent tāʾ at the end (جَلَسَتْ), the present starts with تَـ (تَجْلِسُ). This lesson adds the rules: when the feminine marker is required and when it is optional.",
  objectives: ["mark the verb for a feminine doer: ـتْ in the past, تـ in the present", "know when it is required (real feminine right after the verb, or a pronoun)", "know when it is optional (separated, or a plural of things / broken plural)"],

  lesson: [
    { id: "marks", t: "Two feminine markers", ar: "تاء التأنيث وتاء المضارعة", pos: "agreement", pages: "189–190",
      b: `<table class="g"><tr><th></th><th>masculine doer</th><th>feminine doer</th></tr><tr><td>past</td><td><span class="ar">حَضَرَ الطَّالِبُ</span></td><td><span class="ar">حَضَرَ<b>تِ</b> الطَّالِبَةُ</span></td></tr><tr><td>present</td><td><span class="ar"><b>يَ</b>حْضُرُ الطَّالِبُ</span></td><td><span class="ar"><b>تَ</b>حْضُرُ الطَّالِبَةُ</span></td></tr></table>`,
      rule: `<p><span class="ar">إِذَا كَانَ الفَاعِلُ مُؤَنَّثًا أُنِّثَ فِعْلُهُ: بِتَاءٍ سَاكِنَةٍ فِي آخِرِ المَاضِي، وَبِتَاءٍ مُتَحَرِّكَةٍ فِي أَوَّلِ المُضَارِعِ.</span></p>` },
    { id: "when", t: "Required or optional?", ar: "وجوب التأنيث وجوازه", pos: "agreement", pages: "190–191",
      b: `<ul><li><b>Required</b>: a real feminine (a woman, a female animal) right after the verb: <span class="ar">جَاءَتْ فَاطِمَةُ</span>; or a feminine pronoun doer: <span class="ar">الشَّمْسُ طَلَعَتْ</span>.</li>
        <li><b>Optional</b>: a grammatically feminine thing (<span class="ar">طَلَعَ / طَلَعَتِ الشَّمْسُ</span>); a doer separated from the verb (<span class="ar">حَضَرَ / حَضَرَتِ اليَوْمَ الطَّالِبَةُ</span>); a broken plural (<span class="ar">قَالَ / قَالَتِ الرِّجَالُ</span>).</li></ul>`,
      widget: "sorter",
      wd: { title: "Is ـتْ required here?", bins: [["واجب", "required"], ["جائز", "optional"]], items: [["___ هِنْدٌ (حضر)", 0, "real feminine, adjacent"], ["___ الشَّمْسُ (طلع)", 1, "not a real feminine"], ["الوَرْدَةُ ___ (ذبل)", 0, "feminine pronoun doer"], ["___ اليَوْمَ المُعَلِّمَةُ (حضر)", 1, "separated"], ["___ الرِّجَالُ (قال)", 1, "broken plural"], ["___ البَقَرَةُ (خار)", 0, "real feminine (animal)"]] },
      check: [["الحَدِيقَةُ ___", ["أَزْهَرَتْ", "أَزْهَرَ"], 0, "A feminine pronoun doer → required.", "الحَدِيقَةُ أَزْهَرَتْ"]] }
  ],
  scenes: [{ h: "يَوْمٌ فِي المَدْرَسَةِ", en: "A day at school", pic: "🏫", lines: [["", "حَضَرَتِ المُعَلِّمَةُ مُبَكِّرَةً.", "The teacher (f) came early."], ["", "طَلَعَتِ الشَّمْسُ، وَأَشْرَقَتِ الفُصُولُ.", "The sun rose and the classrooms lit up."], ["", "تَكْتُبُ سَلْمَى، وَتَرْسُمُ هِنْدٌ.", "Salma writes, Hind draws."], ["", "وَقَالَتِ التِّلْمِيذَاتُ: نُحِبُّ مَدْرَسَتَنَا.", "And the pupils said: we love our school."]]}],
  vocab: [["تَاءُ التَّأْنِيثِ", "feminine tāʾ", "n.f", "", "", "", "Grammar"], ["رَسَمَ", "to draw", "v.", "", "يَرْسُمُ", "", "Verbs"], ["أَزْهَرَ", "to blossom", "v.", "", "يُزْهِرُ", "", "Verbs"], ["خَارَ", "to moo", "v.", "", "يَخُورُ", "", "Verbs"], ["مُعَلِّمَةٌ", "teacher (f)", "n.f", "👩‍🏫", "", "مُعَلِّمَاتٌ", "People"], ["تِلْمِيذَةٌ", "pupil (f)", "n.f", "👧", "", "تِلْمِيذَاتٌ", "People"]],
  exercises: [
    { k: "mcq", t: "اِخْتَرْ", items: [["___ البِنْتُ", ["نَامَتِ", "نَامَ"], 0, "required"], ["الأُمُّ ___", ["تَطْبُخُ", "يَطْبُخُ"], 0, ""], ["___ الطَّالِبَاتُ (both possible) — choose the more usual", ["نَجَحَتِ", "نَجَحَ"], 0, ""]] },
    { k: "tr", t: "أَنِّثْ · Make the doer feminine", items: [["حَضَرَ الطَّبِيبُ ← (الطبيبة)", "حضرت الطبيبة|حَضَرَتِ الطَّبِيبَةُ"], ["يَكْتُبُ الوَلَدُ ← (البنت)", "تكتب البنت|تَكْتُبُ البِنْتُ"], ["سَافَرَ المُدِيرُ ← (المديرة)", "سافرت المديرة|سَافَرَتِ المُدِيرَةُ"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["جَاءَ فَاطِمَةُ is correct.", false, "Required: جاءت."], ["طَلَعَ الشَّمْسُ is acceptable.", true, "Optional with non-real feminine."]] }
  ],
  drills: [["Past feminine marker:", ["ـتْ at the end", "تـ at the start"], 0, ""], ["Present feminine marker:", ["تَـ at the start", "ـتْ at the end"], 0, ""], ["When is ـتْ required?", ["real feminine right after the verb", "always"], 0, ""], ["الوَرْدَةُ ___", ["ذَبُلَتْ", "ذَبُلَ"], 0, ""]],
  comp: [["Who came early?", ["the teacher", "Salma", "the pupils"], 0, 0]],
  cheat: `<h3>علامات التأنيث في الأفعال</h3><p class="ar">حَضَرَتْ · تَحْضُرُ</p><p>Required: real feminine adjacent, or feminine pronoun doer. Optional: non-real feminine, separated doer, broken plural.</p>`,
  mistakes: [["جَاءَ هِنْدٌ", "جَاءَتْ هِنْدٌ", "Real feminine right after the verb."]],
  tips: [{ t: "Safest choice", b: `When in doubt, use the feminine marker with any feminine doer — it is never wrong.` }]
});
