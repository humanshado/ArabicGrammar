// الدرس ٢٩ — جوازم المضارع: ما يجزم فعلًا واحدًا (PDF pp. 148–151)
COURSE.add({
  n: 29, pages: [148, 151], method: true,
  summary: "Four particles put one present verb in jazm: لَمْ (did not), لَمَّا (has not yet), لامُ الأمر (let him…) and لا الناهية (don't). Their sign is sukūn on sound verbs, dropping the weak letter on weak verbs, and dropping the nūn on the five verbs.",
  objectives: [
    "use لَمْ، لَمَّا، لامُ الأمر، لا الناهية",
    "tell لَمْ (simply didn't) from لَمَّا (hasn't yet, but will)",
    "give orders to a third person with لِـ / فَلْـ / وَلْـ",
    "apply the three signs of jazm"
  ],

  lesson: [
    { id: "four", t: "Four particles, one verb each", ar: "الجوازم لفعل واحد", pos: "conjugation", pages: "148–149",
      widget: "transform",
      wd: { title: "The four jazm particles", sets: [
        { base: ["يَحْضُرُ المُسَافِرُ", "The traveller arrives."], baseLabel: "plain", ops: [
          ["لَمْ", "[[لَمْ]] يَحْضُ[[رِ]] المُسَافِرُ", "The traveller didn't arrive.", "Denies the past."],
          ["لَمَّا", "[[لَمَّا]] يَحْضُ[[رِ]] المُسَافِرُ", "The traveller hasn't arrived yet (but is expected).", "Denies up to now, with expectation."],
          ["لام الأمر", "[[لِـ]]يَحْضُ[[رْ]] كُلُّ مُسَافِرٍ مُبَكِّرًا", "Let every traveller come early.", "A command to a third person (or to “us”)."],
          ["لا الناهية", "[[لَا]] تَحْضُ[[رْ]] مُتَأَخِّرًا", "Don't come late.", "Prohibition."]] }
      ] },
      rule: `<p><span class="ar">يُجْزَمُ الفِعْلُ المُضَارِعُ إِذَا سَبَقَتْهُ إِحْدَى الأَدَوَاتِ: لَمْ، وَلَمَّا، وَلَامُ الأَمْرِ، وَلَا النَّاهِيَةُ.</span></p>`,
      check: [["Which says “not yet”?", ["لَمَّا", "لَمْ", "لَا"], 0, "", false]] },

    { id: "lamma", t: "لَمْ vs لَمَّا", ar: "الفرق بين لم ولمّا", pos: "conjugation", pages: "149",
      b: `<p>Both deny the past, but <span class="ar">لَمَّا</span> reaches right up to now and implies the action is still <b>expected</b>:</p>
        <ul><li><span class="ar">لَمْ يَنْضَجِ العِنَبُ</span> — the grapes didn't ripen (statement).</li>
        <li><span class="ar">لَمَّا يَنْضَجِ العِنَبُ</span> — the grapes haven't ripened <b>yet</b> (they will).</li></ul>`,
      check: [["“The plane hasn't landed yet”:", ["لَمَّا تَهْبِطِ الطَّائِرَةُ", "لَنْ تَهْبِطَ الطَّائِرَةُ"], 0, "", "لَمَّا تَهْبِطِ الطَّائِرَةُ"]] },

    { id: "lam-amr", t: "Lām of command: “let him…”", ar: "لام الأمر", pos: "conjugation", pages: "149–150",
      b: `<p>The imperative (<span class="ar">اُكْتُبْ</span>) only speaks to <i>you</i>. To command someone else, use <span class="ar">لِـ</span> + present in jazm: <span class="ar">لِيَكْتُبْ</span> (let him write), <span class="ar">لِنَذْهَبْ</span> (let's go). After <span class="ar">وَ</span> or <span class="ar">فَ</span> its kasra becomes sukūn: <span class="ar">وَلْيَكْتُبْ، فَلْنَذْهَبْ</span>.</p>`,
      ex: [["لِيُنْفِقْ ذُو سَعَةٍ مِنْ سَعَتِهِ.", "Let the one with plenty spend from his plenty.", "Qur'an 65:7"], ["فَلْنَبْدَأِ الدَّرْسَ.", "So let's begin the lesson."]],
      check: [["“Let's play”:", ["لِنَلْعَبْ", "لِنَلْعَبَ", "نَلْعَبُ"], 0, "", "لِنَلْعَبْ"]] },

    { id: "signs", t: "Three signs of jazm", ar: "علامات الجزم", pos: "case endings", pages: "150–151",
      b: `<table class="g"><tr><th>verb type</th><th>sign</th><th>example</th></tr>
        <tr><td>sound ending</td><td>sukūn</td><td><span class="ar">لَمْ يَكْتُبْ</span></td></tr>
        <tr><td>weak ending</td><td>dropping the weak letter</td><td><span class="ar">لَمْ يَسْعَ · لَمْ يَدْعُ · لَمْ يَرْمِ</span></td></tr>
        <tr><td>five verbs (-ūna, -āni, -īna)</td><td>dropping the nūn</td><td><span class="ar">لَمْ يَكْتُبُوا · لَمْ تَكْتُبِي</span></td></tr></table>`,
      check: [["“Don't go near the fire” (to a boy):", ["لَا تَدْنُ مِنَ النَّارِ", "لَا تَدْنُو مِنَ النَّارِ"], 0, "", "لَا تَدْنُ مِنَ النَّارِ"]] }
  ],

  scenes: [
    { h: "فِي انْتِظَارِ الضُّيُوفِ", en: "Waiting for the guests", pic: "🍽️", lines: [
      ["الأُمُّ", "هَلْ وَصَلَ الضُّيُوفُ؟", "Have the guests arrived?"],
      ["سَلْمَى", "لَمَّا يَصِلُوا يَا أُمِّي.", "Not yet, mother."],
      ["الأُمُّ", "لِيُرَتِّبْ أَخُوكِ الحُجْرَةَ، وَأَعِدِّي أَنْتِ المَائِدَةَ.", "Let your brother tidy the room, and you get the table ready."],
      ["سَلْمَى", "لَمْ أَنْسَ يَا أُمِّي، أَعْدَدْتُهَا.", "I didn't forget, mother — I've set it."],
      ["الأُمُّ", "لَا تَتْرُكُوا البَابَ مُغْلَقًا، فَلْنَنْتَظِرْهُمْ عِنْدَهُ.", "Don't leave the door shut; let's wait for them by it."]],
      note: "لَمَّا يَصِلُوا (nūn dropped), لِيُرَتِّبْ (lām of command, vs the imperative أَعِدِّي), لَمْ أَنْسَ (alif dropped), لَا تَتْرُكُوا, فَلْنَنْتَظِرْ." }
  ],

  vocab: [
    ["لَمَّا", "not yet (+ jussive)", "part.", "", "", "", "Particles"],
    ["لَامُ الأَمْرِ", "li- of command (let…)", "part.", "", "", "", "Particles"],
    ["هَبَطَ", "to land, descend", "v.", "", "يَهْبِطُ", "", "Verbs"],
    ["أَعَدَّ", "to prepare", "v.", "", "يُعِدُّ", "", "Verbs"],
    ["أَنْفَقَ", "to spend", "v.", "", "يُنْفِقُ", "", "Verbs"],
    ["وَصَلَ", "to arrive", "v.", "", "يَصِلُ", "", "Verbs"],
    ["ضَيْفٌ", "guest", "n.m", "🧑‍🤝‍🧑", "", "ضُيُوفٌ", "Nouns"],
    ["مَائِدَةٌ", "dining table", "n.f", "🍽️", "", "مَوَائِدُ", "Nouns"],
    ["طَائِرَةٌ", "aeroplane", "n.f", "✈️", "", "طَائِرَاتٌ", "Nouns"],
    ["مُغْلَقٌ", "closed", "adj.", "", "f. مُغْلَقَةٌ", "", "Nouns"]
  ],

  exercises: [
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["___ يَنْضَجِ التَّمْرُ (not yet)", ["لَمَّا", "لَنْ"], 0, ""], ["“Let him speak the truth”:", ["لِيَقُلِ الحَقَّ", "لِيَقُولَ الحَقَّ"], 0, "يَقُولُ in jazm → يَقُلْ (long ū drops)."], ["لَمْ ___ (they didn't play)", ["يَلْعَبُوا", "يَلْعَبُونَ"], 0, ""], ["لَا ___ (don't complain)", ["تَشْكُ", "تَشْكُو"], 0, ""]] },
    { k: "irab", t: "عَلَامَةُ الجَزْمِ · Sign of jazm", cats: ["السكون", "حذف حرف العلة", "حذف النون"], items: [["لَمْ [يَحْضُرْ].", "0", ""], ["لَمَّا [يَصِلُوا].", "2", ""], ["لَا [تَنْسَ].", "1", ""], ["لِ[يَكْتُبْ] كُلٌّ اسْمَهُ.", "0", ""], ["لَمْ [تَرْمِ] الوَرَقَ.", "1", ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["لَمَّا implies the action is still expected.", true, ""], ["لام الأمر is followed by a manṣūb verb.", false, "majzūm"], ["After وَ, لِيَكْتُبْ becomes وَلْيَكْتُبْ.", true, ""]] }
  ],

  drills: [
    ["Particles that put ONE verb in jazm:", ["لم، لمّا، لام الأمر، لا الناهية", "أن، لن، كي، إذن", "إن، من، ما"], 0, ""],
    ["“Let's go”:", ["لِنَذْهَبْ", "لِنَذْهَبَ"], 0, ""],
    ["“He hasn't come yet”:", ["لَمَّا يَأْتِ", "لَمْ يَأْتِي"], 0, ""],
    ["لَمْ يَدْعُوا — sign:", ["حذف النون", "السكون"], 0, ""],
    ["لَا تَبْكِ — sign:", ["حذف حرف العلة", "السكون"], 0, ""],
    ["فَلْيَحْضُرْ — the lām has…", ["sukūn (after فـ)", "kasra"], 0, ""]
  ],

  comp: [["Have the guests arrived?", ["not yet", "yes", "they cancelled"], 0, 0], ["What did Salma not forget?", ["to set the table", "to tidy the room", "to buy bread"], 0, 0]],

  cheat: `<h3>الجوازم لفعل واحد</h3><p><span class="ar">لَمْ</span> didn't · <span class="ar">لَمَّا</span> not yet · <span class="ar">لِـ / وَلْـ / فَلْـ</span> let… · <span class="ar">لَا</span> don't</p>
    <p>Signs: sukūn (<span class="ar">لَمْ يَكْتُبْ</span>) · drop weak letter (<span class="ar">لَمْ يَدْعُ</span>) · drop nūn (<span class="ar">لَمْ يَكْتُبُوا</span>)</p>`,
  mistakes: [["لَمَّا يَصِلُونَ", "لَمَّا يَصِلُوا", "Five verbs drop the nūn in jazm."], ["لِيَكْتُبُ", "لِيَكْتُبْ", "Lām of command → jazm."]],
  tips: [{ t: "Not yet!", b: `Make a to-do list in Arabic with <span class="ar">لَمَّا</span>: <span class="ar">لَمَّا أُنْهِ الوَاجِبَ، لَمَّا أَتَّصِلْ بِأُمِّي…</span>` }]
});
