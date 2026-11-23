// الدرس ١١ — جزم الفعل المضارع (PDF pp. 54–58)
COURSE.add({
  n: 11, pages: [54, 58], method: true,
  summary: "After لَمْ (did not) and لا of prohibition (don't!), the present verb loses its vowel and ends in sukūn: it is majzūm (لَمْ يَحْضُرْ، لَا تَكْذِبْ). The conditional إِنْ (if) puts two verbs in jazm at once: the condition and its result (إِنْ تَجْتَهِدْ تَنْجَحْ).",
  objectives: [
    "put the present verb in jazm: sukūn ـْ",
    "use لَمْ to say “did not” (with a present form!)",
    "tell لا of prohibition (don't) from لا of negation (doesn't)",
    "build conditional sentences with إِنْ: condition + result, both majzūm",
    "add the helping kasra before ال: لَمْ يَحْضُرِ الطَّبِيبُ"
  ],

  lesson: [
    { id: "sukun", t: "The verb goes silent: sukūn", ar: "علامة الجزم: السكون", pos: "conjugation", pages: "54–55",
      b: `<p>You have seen the present verb with ḍamma (<span class="ar">يَحْضُرُ</span>) and with fatḥa after naṣb particles (<span class="ar">لَنْ يَحْضُرَ</span>). A third group of particles takes the vowel away altogether: the last letter gets a <b>sukūn</b>. The verb is then <span class="ar">مَجْزُوم</span> (in jazm, “cut off”).</p>`,
      widget: "transform",
      wd: { title: "Three endings of one verb", sets: [
        { base: ["يَحْفَظُ مُحَمَّدٌ دَرْسَهُ", "Muhammad memorises his lesson."], baseLabel: "rafʿ ـُ", ops: [
          ["naṣb ـَ (لن)", "لَنْ يَحْفَ[[ظَ]] مُحَمَّدٌ دَرْسَهُ", "Muhammad will not memorise his lesson."],
          ["jazm ـْ (لم)", "[[لَمْ]] يَحْفَ[[ظْ]] مُحَمَّدٌ دَرْسَهُ", "Muhammad did not memorise his lesson.", "لم + sukūn: and the meaning moves to the past!"],
          ["jazm ـْ (لا)", "[[لَا]] تَحْفَ[[ظْ]] دَرْسَكَ فِي الضَّجِيجِ", "Don't memorise your lesson in the noise.", "لا of prohibition + sukūn."]] }
      ] },
      check: [["The sign of jazm is…", ["sukūn ـْ", "fatḥa ـَ", "kasra ـِ"], 0, "", false]] },

    { id: "lam", t: "لَمْ — “did not”", ar: "لَمْ", pos: "conjugation", pages: "54",
      b: `<p><span class="ar">لَمْ</span> is followed by the <b>present</b> form of the verb, but the meaning is <b>past</b>: <span class="ar">لَمْ يَحْضُرْ أَحَدٌ</span> = nobody came. It is the usual way to deny a past action in writing:</p>
        <table class="g"><tr><th>happened</th><th>did not happen</th></tr>
        <tr><td><span class="ar">حَفِظَ الدَّرْسَ</span> he memorised the lesson</td><td><span class="ar">لَمْ يَحْفَظِ الدَّرْسَ</span> he didn't memorise it</td></tr>
        <tr><td><span class="ar">سَقَطَ المَطَرُ</span> the rain fell</td><td><span class="ar">لَمْ يَسْقُطِ المَطَرُ</span> the rain didn't fall</td></tr>
        <tr><td><span class="ar">ذَهَبْتُ</span> I went</td><td><span class="ar">لَمْ أَذْهَبْ</span> I didn't go</td></tr></table>
        <p>(You may also meet <span class="ar">مَا</span> + past: <span class="ar">مَا ذَهَبْتُ</span>, “I didn't go”. It has no effect on the verb.)</p>`,
      warn: `Never put a past verb after <span class="ar">لَمْ</span>: <span class="ar">لَمْ ذَهَبَ</span> is wrong. <span class="ar">لَمْ</span> always takes the present form: <span class="ar">لَمْ يَذْهَبْ</span>.`,
      check: [["“I didn't understand”:", ["لَمْ أَفْهَمْ", "لَمْ فَهِمْتُ", "لَنْ أَفْهَمَ"], 0, "لم + present form + sukūn.", "لَمْ أَفْهَمْ"]] },

    { id: "la", t: "لا of prohibition vs. لا of negation", ar: "لا الناهية ولا النافية", pos: "conjugation", pages: "54–55",
      b: `<p>The same little word <span class="ar">لَا</span> does two jobs, and only one of them changes the verb:</p>
        <table class="g"><tr><th></th><th><span class="ar">لَا النَّاهِيَةُ</span> — prohibition</th><th><span class="ar">لَا النَّافِيَةُ</span> — negation</th></tr>
        <tr><td>meaning</td><td>don't! (an order)</td><td>does not (a statement)</td></tr>
        <tr><td>verb</td><td>majzūm: sukūn</td><td>unchanged: ḍamma</td></tr>
        <tr><td>example</td><td><span class="ar">لَا تَأْكُلْ وَأَنْتَ شَبْعَانُ</span><br>Don't eat when you are full.</td><td><span class="ar">لَا يَأْكُلُ القِطُّ الخُبْزَ</span><br>The cat doesn't eat bread.</td></tr></table>
        <p>Prohibition is a negative command, so it is usually addressed to <i>you</i>: the verb starts with <span class="ar">تَـ</span>. Its positive is the imperative: <span class="ar">اُكْتُبْ</span> ↔ <span class="ar">لَا تَكْتُبْ</span>.</p>`,
      ex: [["لَا تُكْثِرْ مِنَ الضَّحِكِ.", "Don't laugh too much."], ["لَا تُسْرِعْ فِي السَّيْرِ.", "Don't walk too fast."], ["لَا تَلْعَبْ فِي الشَّارِعِ.", "Don't play in the street."]],
      check: [["Which لا is prohibition?", ["لَا تَلْعَبْ بِالنَّارِ", "لَا أَلْعَبُ الآنَ"], 0, "An order with sukūn.", false], ["Negative of اِجْلِسْ:", ["لَا تَجْلِسْ", "لَا تَجْلِسُ", "لَمْ تَجْلِسْ"], 0, "Prohibition: لا + تـ + sukūn.", "لَا تَجْلِسْ"]] },

    { id: "in", t: "إِنْ — “if”: two verbs in jazm", ar: "إِنْ الشرطية", pos: "sentence structure", pages: "55",
      b: `<p><span class="ar">إِنْ</span> (if) links two actions: the second happens only if the first does. Both present verbs become majzūm:</p>
        <div class="blocks"><div class="blk c4"><span class="ar">إِنْ</span><small>if</small></div><div class="blk c2"><span class="ar">تَفْتَحْ نَوَافِذَ الحُجْرَةِ</span><small>condition · فعل الشرط</small></div><div class="blk c5"><span class="ar">يَتَجَدَّدْ هَوَاؤُهَا</span><small>result · جواب الشرط</small></div></div>
        <p>If you open the room's windows, its air is renewed.</p>`,
      ex: [["إِنْ تَجْلِسْ فِي مَجْرَى الهَوَاءِ تَمْرَضْ.", "If you sit in a draught, you'll get ill."], ["إِنْ تَجْتَهِدْ تَنْجَحْ.", "If you work hard, you'll succeed."], ["إِنْ يُسَافِرْ أَبِي أُسَافِرْ مَعَهُ.", "If my father travels, I'll travel with him."]],
      rule: `<p><span class="ar">يُجْزَمُ الفِعْلُ المُضَارِعُ إِذَا سَبَقَهُ حَرْفٌ جَازِمٌ: لَمْ وَلَا النَّاهِيَةُ تَجْزِمَانِ فِعْلًا وَاحِدًا، وَإِنْ تَجْزِمُ فِعْلَيْنِ: الأَوَّلُ شَرْطٌ فِي حُصُولِ الثَّانِي.</span></p><p>The present verb is majzūm after a jazm particle. lam (denies the past) and lā of prohibition govern one verb; in (if) governs two, the first being the condition for the second.</p>`,
      check: [["Complete: إِنْ تَزْرَعْ ___", ["تَحْصُدْ", "تَحْصُدُ", "حَصَدْتَ"], 0, "The result is majzūm too.", "إِنْ تَزْرَعْ تَحْصُدْ"]] },

    { id: "kasra", t: "Two silent letters can't meet: the helping kasra", ar: "التخلص من التقاء الساكنين", pos: "spelling",
      b: `<p>When a majzūm verb is followed by a word with <span class="ar">الـ</span>, its sukūn would meet the silent <i>l</i> of <i>al-</i>. Arabic avoids two silent sounds in a row, so the sukūn turns into a <b>kasra</b> — only for pronunciation; the verb is still majzūm:</p>
        <ul><li><span class="ar">لَمْ يَحْضُرْ</span> + <span class="ar">الطَّبِيبُ</span> → <span class="ar">لَمْ يَحْضُرِ الطَّبِيبُ</span></li><li><span class="ar">لَا تَتْرُكْ</span> + <span class="ar">البَابَ</span> → <span class="ar">لَا تَتْرُكِ البَابَ مَفْتُوحًا</span></li></ul>
        <p>You met the same thing with <span class="ar">ـتْ</span>: <span class="ar">جَلَسَتِ البِنْتُ</span>.</p>`,
      check: [["“The rain didn't fall”:", ["لَمْ يَسْقُطِ المَطَرُ", "لَمْ يَسْقُطَ المَطَرُ", "لَمْ يَسْقُطُ المَطَرُ"], 0, "Sukūn → kasra before ال; still majzūm.", "لَمْ يَسْقُطِ المَطَرُ"]] },

    { id: "parse", t: "Parsing the majzūm verb", ar: "إعراب المضارع المجزوم", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">لَمْ يَحْضُرْ أَحَدٌ.</span></p>
        <p><span class="ar">لَمْ: حَرْفُ جَزْمٍ.</span></p>
        <p><span class="ar">يَحْضُرْ: فِعْلٌ مُضَارِعٌ مَجْزُومٌ بِـ«لَمْ»، وَعَلَامَةُ جَزْمِهِ السُّكُونُ.</span></p>
        <p><span class="ar">أَحَدٌ: فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p></div>
        <p>For <span class="ar">إِنْ</span>: <span class="ar">تَجْتَهِدْ: فِعْلُ الشَّرْطِ مَجْزُومٌ… تَنْجَحْ: جَوَابُ الشَّرْطِ مَجْزُومٌ…</span></p>`,
      check: [["Parse تَكْذِبْ in لَا تَكْذِبْ:", ["فعل مضارع مجزوم بلا الناهية وعلامة جزمه السكون", "فعل مضارع مرفوع", "فعل أمر"], 0, ""]] }
  ],

  scenes: [
    { h: "نَصَائِحُ الطَّبِيبِ", en: "The doctor's advice", pic: "🩺", lines: [
      ["الطَّبِيبُ", "هَلْ نِمْتَ جَيِّدًا يَا سَعِيدُ؟", "Did you sleep well, Said?"],
      ["سَعِيدٌ", "لَا، لَمْ أَنَمْ جَيِّدًا، وَلَمْ آكُلْ شَيْئًا.", "No, I didn't sleep well, and I didn't eat anything."],
      ["الطَّبِيبُ", "لَا تَجْلِسْ فِي مَجْرَى الهَوَاءِ، وَلَا تَشْرَبِ المَاءَ البَارِدَ.", "Don't sit in a draught, and don't drink cold water."],
      ["سَعِيدٌ", "وَهَلْ أَذْهَبُ إِلَى المَدْرَسَةِ غَدًا؟", "And do I go to school tomorrow?"],
      ["الطَّبِيبُ", "إِنْ تَسْتَرِحِ اليَوْمَ تَذْهَبْ غَدًا.", "If you rest today, you'll go tomorrow."],
      ["سَعِيدٌ", "شُكْرًا يَا دُكْتُورُ، لَنْ أَنْسَى نَصِيحَتَكَ.", "Thank you, doctor, I won't forget your advice."]],
      note: "لَمْ أَنَمْ (the long ā drops: أَنَامُ → لَمْ أَنَمْ), لَمْ آكُلْ, لَا تَجْلِسْ, لَا تَشْرَبِ (kasra before ال), إِنْ تَسْتَرِحِ … تَذْهَبْ." },
    { h: "قَوَاعِدُ الطَّرِيقِ", en: "Rules of the road", pic: "🚦", lines: [
      ["", "لَا تَعْبُرِ الشَّارِعَ وَالإِشَارَةُ حَمْرَاءُ.", "Don't cross the street when the light is red."],
      ["", "لَا تَلْعَبْ بِالكُرَةِ فِي الطَّرِيقِ.", "Don't play ball in the road."],
      ["", "إِنْ تَنْظُرْ يَمِينًا وَيَسَارًا تَعْبُرْ بِأَمَانٍ.", "If you look right and left, you'll cross safely."],
      ["", "أَمْسِ لَمْ يَنْتَبِهْ طِفْلٌ إِلَى السَّيَّارَةِ،", "Yesterday a child didn't pay attention to the car,"],
      ["", "وَلَكِنَّ السَّائِقَ تَوَقَّفَ، فَلَمْ يُصَبِ الطِّفْلُ بِسُوءٍ.", "but the driver stopped, so the child was not hurt."]],
      note: "Prohibitions with لا, a condition with إن, and past denials with لم — all with sukūn (or kasra before ال)." }
  ],

  vocab: [
    ["لَمْ", "did not (+ jussive)", "part.", "", "حرف جزم", "", "Jazm particles"],
    ["لَا النَّاهِيَةُ", "don't (+ jussive)", "part.", "", "حرف جزم", "", "Jazm particles"],
    ["إِنْ", "if (+ two jussives)", "part.", "", "حرف شرط جازم", "", "Jazm particles"],
    ["مَجْزُومٌ", "in the jussive (jazm)", "adj.", "", "grammar term", "", "Jazm particles"],
    ["شَرْطٌ", "condition", "n.m", "", "grammar term", "شُرُوطٌ", "Jazm particles"],
    ["جَوَابٌ", "answer; result (of a condition)", "n.m", "", "", "أَجْوِبَةٌ", "Jazm particles"],
    ["أَحَدٌ", "anyone, someone", "n.m", "🧍", "", "", "Nouns"],
    ["ضَجِيجٌ", "noise", "n.m", "📢", "", "", "Nouns"],
    ["مَجْرَى الهَوَاءِ", "draught", "n.m", "🌬️", "", "", "Nouns"],
    ["نَارٌ", "fire", "n.f", "🔥", "feminine", "نِيرَانٌ", "Nouns"],
    ["شَارِعٌ", "street", "n.m", "🛣️", "", "شَوَارِعُ", "Nouns"],
    ["إِشَارَةٌ", "traffic light; sign", "n.f", "🚦", "", "إِشَارَاتٌ", "Nouns"],
    ["سَيَّارَةٌ", "car", "n.f", "🚗", "", "سَيَّارَاتٌ", "Nouns"],
    ["سَائِقٌ", "driver", "n.m", "🧑‍✈️", "", "سَائِقُونَ", "Nouns"],
    ["أَمَانٌ", "safety", "n.m", "🛡️", "", "", "Nouns"],
    ["شَبْعَانُ", "full (not hungry)", "adj.", "", "f. شَبْعَى", "", "Describing words"],
    ["سَقَطَ", "to fall", "v.", "", "يَسْقُطُ", "", "Verbs"],
    ["أَكْثَرَ", "to do a lot of", "v.", "", "يُكْثِرُ", "", "Verbs"],
    ["أَسْرَعَ", "to hurry", "v.", "", "يُسْرِعُ", "", "Verbs"],
    ["مَرِضَ", "to fall ill", "v.", "", "يَمْرَضُ", "", "Verbs"],
    ["تَجَدَّدَ", "to be renewed", "v.", "", "يَتَجَدَّدُ", "", "Verbs"],
    ["اجْتَهَدَ", "to work hard", "v.", "", "يَجْتَهِدُ", "", "Verbs"],
    ["اسْتَرَاحَ", "to rest", "v.", "", "يَسْتَرِيحُ · لم يَسْتَرِحْ", "", "Verbs"],
    ["عَبَرَ", "to cross", "v.", "", "يَعْبُرُ", "", "Verbs"],
    ["نَظَرَ", "to look", "v.", "", "يَنْظُرُ", "", "Verbs"],
    ["تَوَقَّفَ", "to stop", "v.", "", "يَتَوَقَّفُ", "", "Verbs"],
    ["نَسِيَ", "to forget", "v.", "", "يَنْسَى", "", "Verbs"],
    ["يَمِينًا", "to the right", "adv.", "", "", "", "Directions"],
    ["يَسَارًا", "to the left", "adv.", "", "", "", "Directions"]
  ],

  exercises: [
    { k: "shakl", t: "اضْبِطْ آخِرَ المُضَارِعِ · Rafʿ, naṣb or jazm?", marks: ["ُ", "َ", "ْ"], items: [
      "لَمْ يَحْضُر{ْ} أَحَدٌ", "لَنْ يَحْضُر{َ} أَحَدٌ", "يَحْضُر{ُ} أَبِي كُلَّ يَوْمٍ", "لَا تَكْذِب{ْ}", "لَا أَكْذِب{ُ} أَبَدًا", "إِنْ تَجْتَهِد{ْ} تَنْجَح{ْ}"] },
    { k: "gap", t: "اِنْفِ بِـ«لَمْ» · Deny with لم", en: "Rewrite the verb after لَمْ (with sukūn).", items: [
      ["حَفِظَ الدَّرْسَ ← لَمْ ___ الدَّرْسَ", "يَحْفَظِ|يحفظ"], ["ذَهَبْتُ ← لَمْ ___", "أَذْهَبْ|اذهب"], ["لَعِبْنَا ← لَمْ ___", "نَلْعَبْ|نلعب"], ["جَلَسَتْ ← لَمْ ___", "تَجْلِسْ|تجلس"], ["نَامَ الطِّفْلُ ← لَمْ ___ الطِّفْلُ", "يَنَمِ|ينم"]] },
    { k: "gap", t: "اِنْهَ · Turn the command into a prohibition", en: "Write the لا + verb form.", items: [
      ["اِلْعَبْ ← ___", "لَا تَلْعَبْ|لا تلعب"], ["اِجْلِسْ ← ___", "لَا تَجْلِسْ|لا تجلس"], ["أَسْرِعْ ← ___", "لَا تُسْرِعْ|لا تسرع"], ["اُخْرُجْ ← ___", "لَا تَخْرُجْ|لا تخرج"]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["Which لا is prohibition?", ["لَا تُهْمِلْ وَاجِبَكَ", "لَا يُهْمِلُ المُجْتَهِدُ وَاجِبَهُ"], 0, ""], ["إِنْ تَقْرَأْ ___", ["تَتَعَلَّمْ", "تَتَعَلَّمُ", "تَعَلَّمْتَ"], 0, ""], ["“Nobody came”:", ["لَمْ يَحْضُرْ أَحَدٌ", "لَنْ يَحْضُرَ أَحَدٌ", "لَمْ حَضَرَ أَحَدٌ"], 0, ""], ["لَمْ يَشْرَبِ ___", ["الطِّفْلُ الحَلِيبَ", "الطِّفْلَ الحَلِيبُ"], 0, "Doer ḍamma, object fatḥa."]] },
    { k: "irab", t: "أَعْرِبْ · Parse the highlighted word", cats: ["حرف جزم", "فعل مضارع مجزوم وعلامة جزمه السكون", "فعل مضارع مرفوع وعلامة رفعه الضمة", "حرف نفي (لا يعمل)"], items: [
      ["[لَمْ] يَنْجَحِ الكَسُولُ.", "0", ""], ["لَمْ [يَحْضُرْ] أَحَدٌ.", "1", ""], ["لَا [تَأْكُلْ] كَثِيرًا.", "1", ""], ["[لَا] يَأْكُلُ القِطُّ الخُبْزَ.", "3", "Negation: no effect."], ["لَا [يَأْكُلُ] القِطُّ الخُبْزَ.", "2", ""], ["إِنْ تَجْتَهِدْ [تَنْجَحْ].", "1", "The result of the condition."]] },
    { k: "tr", t: "تَرْجِمْ · Translate", items: [
      ["I didn't go to school.", "لم أذهب إلى المدرسة|لَمْ أَذْهَبْ إِلَى المَدْرَسَةِ"], ["Don't play in the street.", "لا تلعب في الشارع|لَا تَلْعَبْ فِي الشَّارِعِ"], ["If you work hard you'll succeed.", "إن تجتهد تنجح|إِنْ تَجْتَهِدْ تَنْجَحْ"], ["The doctor didn't come.", "لم يحضر الطبيب|لَمْ يَحْضُرِ الطَّبِيبُ|لم يأت الطبيب"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["لَمْ is followed by a past verb.", false, "By a present form: لم يذهبْ."], ["لَمْ + present means the past.", true, ""], ["Every لا makes the verb majzūm.", false, "Only the لا of prohibition."], ["إِنْ puts two verbs in jazm.", true, ""], ["In لَمْ يَحْضُرِ الطَّبِيبُ the verb is majzūm.", true, "The kasra is only to avoid two sukūns."]] }
  ],

  drills: [
    ["Jazm particles of this lesson:", ["لَمْ، لا الناهية، إِنْ", "أَنْ، لَنْ، كَيْ", "مِنْ، فِي، عَلَى"], 0, ""],
    ["لَمْ ___ الوَاجِبَ.", ["أَكْتُبِ", "أَكْتُبُ", "كَتَبْتُ"], 0, "Sukūn → kasra before ال."],
    ["“Don't lie!”", ["لَا تَكْذِبْ", "لَا تَكْذِبُ", "لَنْ تَكْذِبَ"], 0, ""],
    ["لَا تَكْذِبُ (with ḍamma) means…", ["you don't lie (a statement)", "don't lie! (an order)"], 0, ""],
    ["إِنْ تَزُرْنِي ___", ["أُكْرِمْكَ", "أُكْرِمُكَ", "أَكْرَمْتُكَ"], 0, "Result majzūm."],
    ["Deny سَافَرَ أَبِي (past):", ["لَمْ يُسَافِرْ أَبِي", "لَنْ يُسَافِرَ أَبِي", "لَا سَافَرَ"], 0, ""],
    ["Sign of jazm:", ["السكون", "الفتحة", "الضمة"], 0, ""],
    ["Which verb is majzūm?", ["تَمْرَضْ in إِنْ تَجْلِسْ فِي مَجْرَى الهَوَاءِ تَمْرَضْ", "يَمْرَضُ in يَمْرَضُ الكَسُولُ"], 0, ""],
    ["لَمْ أَنَمْ comes from…", ["أَنَامُ (the ā drops)", "أَنْمُو"], 0, ""],
    ["Condition and result are called…", ["فعل الشرط وجواب الشرط", "فاعل ومفعول", "مبتدأ وخبر"], 0, ""],
    ["“If you open the window, the air is renewed”:", ["إِنْ تَفْتَحِ النَّافِذَةَ يَتَجَدَّدِ الهَوَاءُ", "إِنْ تَفْتَحُ النَّافِذَةَ يَتَجَدَّدُ الهَوَاءُ"], 0, "Both majzūm (kasra before ال)."]
  ],

  comp: [
    ["Why does Said see the doctor?", ["he didn't sleep or eat", "he broke his arm", "he wants to travel"], 0, 0],
    ["What does the doctor forbid?", ["sitting in a draught and cold water", "going to school", "eating"], 0, 0],
    ["When can Said go to school?", ["tomorrow, if he rests today", "today", "next week"], 0, 0],
    ["What should you do to cross safely?", ["look right and left", "run", "wait for a friend"], 0, 1],
    ["Was the child hurt?", ["no — the driver stopped", "yes", "the text doesn't say"], 0, 1]
  ],

  cheat: `<h3>جزم الفعل المضارع</h3>
    <div class="rule"><span class="ar">لَمْ، لَا النَّاهِيَةُ ← تَجْزِمَانِ فِعْلًا وَاحِدًا · إِنْ ← تَجْزِمُ فِعْلَيْنِ · عَلَامَةُ الجَزْمِ: السُّكُونُ</span></div>
    <table class="g"><tr><th>particle</th><th>meaning</th><th>example</th></tr>
    <tr><td><span class="ar">لَمْ</span></td><td>did not (past)</td><td><span class="ar">لَمْ يَحْضُرْ أَحَدٌ</span></td></tr>
    <tr><td><span class="ar">لَا</span> (prohibition)</td><td>don't!</td><td><span class="ar">لَا تَكْذِبْ</span></td></tr>
    <tr><td><span class="ar">إِنْ</span></td><td>if … (then)</td><td><span class="ar">إِنْ تَجْتَهِدْ تَنْجَحْ</span></td></tr></table>
    <p>Before <span class="ar">الـ</span>: sukūn → kasra: <span class="ar">لَمْ يَحْضُرِ الطَّبِيبُ</span>.</p>
    <h3>The three moods</h3><p class="ar endings"><span class="end-u">يَحْضُرُ</span> · <span class="end-a">لَنْ يَحْضُرَ</span> · <span class="end-o">لَمْ يَحْضُرْ</span></p>`,
  mistakes: [
    ["لَمْ ذَهَبْتُ", "لَمْ أَذْهَبْ", "لم takes the present form."],
    ["لَا تَكْذِبُ (meaning: don't lie!)", "لَا تَكْذِبْ", "Prohibition: sukūn."],
    ["إِنْ تَجْتَهِدْ تَنْجَحُ", "إِنْ تَجْتَهِدْ تَنْجَحْ", "Both verbs after إن are majzūm."],
    ["لَمْ يَحْضُرْ الطَّبِيبُ (pronounced -r al-)", "لَمْ يَحْضُرِ الطَّبِيبُ", "Say and write the helping kasra."]
  ],
  tips: [
    { t: "The mood table", b: `Take five verbs and say each in three moods: <span class="ar">يَكْتُبُ — لَنْ يَكْتُبَ — لَمْ يَكْتُبْ</span>. Rafʿ, naṣb, jazm: -u, -a, silence.` },
    { t: "Classroom rules", b: `Write the rules of your house or classroom as prohibitions: <span class="ar">لَا تَتَأَخَّرْ، لَا تَأْكُلْ فِي الفَصْلِ، لَا تَتْرُكِ البَابَ مَفْتُوحًا…</span>` },
    { t: "Proverbs with إن", b: `Arabic has many conditional sayings. A classic: <span class="ar">إِنْ تَزْرَعْ خَيْرًا تَحْصُدْ خَيْرًا</span> — if you sow good, you reap good.` }
  ]
});
