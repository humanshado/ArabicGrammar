// الدرس ٦٠ — إسناد الأفعال الصحيحة والمعتلة إلى الضمائر (PDF pp. 289–303)
COURSE.add({
  n: 60, pages: [289, 303], method: true,
  summary: "How verbs change when subject pronouns are attached. Sound, hamzated and مثال verbs don't change (كَتَبْتُ، أَخَذْتُ، وَعَدْتُ). Doubled verbs split their shadda before a consonant ending (مَدَّ ← مَدَدْتُ). Hollow verbs shorten their long vowel (قَالَ ← قُلْتُ، بَاعَ ← بِعْتُ). Defective verbs handle their weak letter in set ways (دَعَا ← دَعَوْتُ، دَعَوْا · رَمَى ← رَمَيْتُ، رَمَوْا · يَدْعُونَ، تَرْمِينَ).",
  objectives: ["attach pronouns to sound, hamzated and مثال verbs", "un-double the مضعّف before ـتُ، ـنَا، ـنَ", "shorten the أجوف: قُلْتُ، بِعْتُ، نِمْتُ", "conjugate the ناقص in past, present and command"],
  lesson: [
    { id: "sound", t: "Sound, hamzated and مثال verbs", ar: "السالم والمهموز والمثال", pos: "conjugation", pages: "289–291",
      b: `<p>These keep all their letters: <span class="ar">كَتَبْتُ، كَتَبُوا</span>; <span class="ar">أَخَذْتُ، سَأَلُوا، قَرَأْنَا</span>; <span class="ar">وَعَدْتُ، وَصَلْنَ</span>. (The مثال loses its wāw only in the present and command: <span class="ar">وَعَدَ يَعِدُ عِدْ</span>.)</p>` },
    { id: "doubled", t: "Doubled verbs (المضعّف)", ar: "إسناد المضعف", pos: "conjugation", pages: "292–294",
      widget: "table",
      wd: { title: "مَدَّ (to extend)", head: ["subject", "form", "note"], rows: [["هُوَ", "مَدَّ", "shadda kept"], ["هُمْ", "مَدُّوا", "vowel ending → kept"], ["هُمَا", "مَدَّا", "kept"], ["أَنَا", "مَ[[دَدْ]]تُ", "split before ـتُ"], ["نَحْنُ", "مَ[[دَدْ]]نَا", "split"], ["هُنَّ", "مَ[[دَدْ]]نَ", "split"]] },
      check: [["“I counted” (عَدَّ):", ["عَدَدْتُ", "عَدَّتُ"], 0, "", "عَدَدْتُ"]] },
    { id: "hollow", t: "Hollow verbs (الأجوف)", ar: "إسناد الأجوف", pos: "conjugation", pages: "292–294",
      b: `<p>Before a consonant ending (<span class="ar">ـتُ، ـنَا، ـنَ</span>) the long ā drops and the first letter takes the vowel of the hidden root letter: wāw → ḍamma, yāʾ → kasra. <span class="ar">نَامَ / خَافَ</span> (with <i>a</i> in the present) take kasra.</p>`,
      widget: "table",
      wd: { title: "Hollow verbs with ـتُ", head: ["verb", "present", "I …", "they (f) …"], rows: [["قَالَ", "يَقُولُ", "[[قُ]]لْتُ", "قُلْنَ"], ["زَارَ", "يَزُورُ", "[[زُ]]رْتُ", "زُرْنَ"], ["بَاعَ", "يَبِيعُ", "[[بِ]]عْتُ", "بِعْنَ"], ["سَارَ", "يَسِيرُ", "[[سِ]]رْتُ", "سِرْنَ"], ["نَامَ", "يَنَامُ", "[[نِ]]مْتُ", "نِمْنَ"]] },
      check: [["“I visited”:", ["زُرْتُ", "زَارْتُ", "زِرْتُ"], 0, "", "زُرْتُ"]] },
    { id: "defective", t: "Defective verbs (الناقص)", ar: "إسناد الناقص", pos: "conjugation", pages: "295–303",
      b: `<ul><li><b>Past, ending in ا (from wāw)</b>: the wāw returns before consonant endings: <span class="ar">دَعَا ← دَعَوْتُ، دَعَوْنَا، دَعَوَا</span>; with the wāw of the group the alif drops: <span class="ar">دَعَوْا</span>.</li>
        <li><b>Past, ending in ى (from yāʾ)</b>: <span class="ar">رَمَى ← رَمَيْتُ، رَمَيْنَا، رَمَيَا</span>; <span class="ar">رَمَوْا</span>.</li>
        <li><b>Past ending in يَ</b>: <span class="ar">نَسِيَ ← نَسِيتُ، نَسُوا</span>.</li>
        <li><b>Present & command</b>: <span class="ar">يَدْعُو ← يَدْعُونَ (they), تَدْعِينَ (you f), يَدْعُوَانِ</span>; <span class="ar">يَرْمِي ← يَرْمُونَ، تَرْمِينَ، يَرْمِيَانِ</span>; <span class="ar">يَسْعَى ← يَسْعَوْنَ، تَسْعَيْنَ، يَسْعَيَانِ</span>; commands: <span class="ar">اُدْعُوا، اِرْمِي، اِسْعَوْا</span>.</li></ul>`,
      widget: "table",
      wd: { title: "Three defective verbs, past", head: ["subject", "دَعَا", "رَمَى", "نَسِيَ"], rows: [["أَنَا", "دَعَوْتُ", "رَمَيْتُ", "نَسِيتُ"], ["هُمَا", "دَعَوَا", "رَمَيَا", "نَسِيَا"], ["هُمْ", "دَعَوْا", "رَمَوْا", "نَسُوا"], ["هِيَ", "دَعَتْ", "رَمَتْ", "نَسِيَتْ"], ["هُنَّ", "دَعَوْنَ", "رَمَيْنَ", "نَسِينَ"]] },
      check: [["“They (m) threw”:", ["رَمَوْا", "رَمُوا", "رَمَيُوا"], 0, "", "رَمَوْا"], ["“You (f) walk” (يمشي):", ["تَمْشِينَ", "تَمْشِيِينَ"], 0, "", "تَمْشِينَ"]] }
  ],
  scenes: [{ h: "رِحْلَةٌ إِلَى الأُقْصُرِ", en: "A trip to Luxor", pic: "🏛️", lines: [["", "زُرْنَا الأُقْصُرَ فِي الشِّتَاءِ.", "We visited Luxor in winter."], ["", "سِرْنَا بَيْنَ المَعَابِدِ، وَقُلْنَا: مَا أَجْمَلَهَا!", "We walked among the temples and said: how beautiful they are!"], ["", "دَعَوْنَا أَصْدِقَاءَنَا، فَلَبَّوْا الدَّعْوَةَ.", "We invited our friends, and they accepted."], ["", "رَمَيْنَا الحِجَارَةَ فِي النِّيلِ، وَعَدَدْنَا الدَّوَائِرَ.", "We threw stones into the Nile and counted the circles."], ["", "وَفِي اللَّيْلِ نِمْنَا نَوْمًا عَمِيقًا.", "And at night we slept deeply."]]}],
  vocab: [["إِسْنَادٌ", "attaching (pronouns)", "n.m", "", "", "", "Grammar"], ["مَعْبَدٌ", "temple", "n.m", "🏛️", "", "مَعَابِدُ", "Words"], ["لَبَّى", "to accept (an invitation)", "v.", "", "يُلَبِّي", "", "Words"], ["دَعْوَةٌ", "invitation", "n.f", "✉️", "", "دَعَوَاتٌ", "Words"], ["دَائِرَةٌ", "circle", "n.f", "⭕", "", "دَوَائِرُ", "Words"], ["خَافَ", "to fear", "v.", "", "يَخَافُ · خِفْتُ", "", "Words"], ["عَدَّ", "to count", "v.", "", "يَعُدُّ · عَدَدْتُ", "", "Words"]],
  exercises: [
    { k: "gap", t: "أَسْنِدْ إِلَى «تُ» · Add ـتُ (I)", items: [["قَالَ ← ___", "قُلْتُ|قلت"], ["بَاعَ ← ___", "بِعْتُ|بعت"], ["شَدَّ ← ___", "شَدَدْتُ|شددت"], ["دَعَا ← ___", "دَعَوْتُ|دعوت"], ["رَمَى ← ___", "رَمَيْتُ|رميت"], ["سَأَلَ ← ___", "سَأَلْتُ|سالت"]] },
    { k: "gap", t: "أَسْنِدْ إِلَى وَاوِ الجَمَاعَةِ · Past, they (m)", items: [["دَعَا ← ___", "دَعَوْا|دعوا"], ["مَشَى ← ___", "مَشَوْا|مشوا"], ["بَقِيَ ← ___", "بَقُوا|بقوا"], ["قَالَ ← ___", "قَالُوا|قالوا"]] },
    { k: "mcq", t: "اِخْتَرْ", items: [["“You (f) call” (يدعو):", ["تَدْعِينَ", "تَدْعُوِينَ"], 0, ""], ["“They (m) strive” (يسعى):", ["يَسْعَوْنَ", "يَسْعُونَ"], 0, ""], ["“I slept”:", ["نِمْتُ", "نُمْتُ", "نَامْتُ"], 0, ""]] }
  ],
  drills: [["“I said”:", ["قُلْتُ", "قِلْتُ"], 0, ""], ["“I sold”:", ["بِعْتُ", "بُعْتُ"], 0, ""], ["“We extended”:", ["مَدَدْنَا", "مَدَّنَا"], 0, ""], ["“They (m) called”:", ["دَعَوْا", "دَعُوا"], 0, ""], ["“They (m) forgot”:", ["نَسُوا", "نَسَوْا"], 0, ""]],
  comp: [["Where did they go?", ["Luxor", "Cairo", "Alexandria"], 0, 0], ["What did they throw into the Nile?", ["stones", "flowers", "bread"], 0, 0]],
  cheat: `<h3>إسناد الأفعال إلى الضمائر</h3><p>Doubled: <span class="ar">مَدَّ ← مَدَدْتُ</span> · hollow: <span class="ar">قَالَ ← قُلْتُ، بَاعَ ← بِعْتُ، نَامَ ← نِمْتُ</span> · defective: <span class="ar">دَعَوْتُ/دَعَوْا، رَمَيْتُ/رَمَوْا، نَسِيتُ/نَسُوا، يَدْعُونَ، تَرْمِينَ، يَسْعَوْنَ</span></p>`,
  mistakes: [["قَالْتُ", "قُلْتُ", "Hollow verb shortens."], ["رَمُوا", "رَمَوْا", "Defective in ى keeps fatḥa: -aw."], ["مَدَّتُ", "مَدَدْتُ", "Doubled splits before ـتُ."]],
  tips: [{ t: "Model verbs", b: `Learn one model for each type — <span class="ar">قَالَ، بَاعَ، نَامَ، دَعَا، رَمَى، سَعَى، نَسِيَ، مَدَّ</span> — through all persons. Every other verb copies one of them.` }]
});
