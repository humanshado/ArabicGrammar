// الدرس ١٥ — جرّ الاسم (PDF pp. 77–83)
COURSE.add({
  n: 15, pages: [77, 83], method: true,
  summary: "A noun after a preposition is majrūr: it ends in kasra (ـِ / ـٍ). This lesson teaches the seven prepositions of the book — مِنْ، إِلَى، عَنْ، عَلَى، فِي، الباء، اللام — their meanings, how they are written (بِـ and لِـ join the next word), and how they combine with pronouns.",
  objectives: [
    "use مِنْ، إِلَى، عَنْ، عَلَى، فِي، بِـ، لِـ with their meanings",
    "put the noun after them in jarr: kasra ـِ / ـٍ",
    "write بِـ and لِـ joined, and لِـ + الـ as لِلْـ",
    "pronounce مِنَ الـ and عَنِ الـ correctly",
    "attach pronouns: مِنْهُ، إِلَيْهِ، عَلَيْهِ، فِيهِ، بِهِ، لَهُ"
  ],

  lesson: [
    { id: "scene", t: "Seven little words of place, direction and means", ar: "حروف الجر", pos: "parts of speech", pages: "77–78",
      b: `<p>Look at the last word of each of the book's examples: <span class="ar">نَزَلَ المَطَرُ مِنَ السَّمَاءِ</span> (rain fell from the sky), <span class="ar">سَارَتِ المَاشِيَةُ إِلَى الحَقْلِ</span> (the cattle went to the field), <span class="ar">يَطْفُو الخَشَبُ عَلَى المَاءِ</span> (wood floats on water). Each is a noun ending in <b>kasra</b>, and each comes right after a small particle — a <b>preposition</b> (<span class="ar">حَرْفُ جَرٍّ</span>).</p>
        <p>Play with the sparrow to see what each preposition means.</p>`,
      widget: "prep" },

    { id: "rule", t: "The noun after a preposition: kasra", ar: "الاسم المجرور", pos: "case endings", pages: "79",
      b: `<p>Whatever the noun's job would otherwise be, a preposition takes it over and puts it in <b>jarr</b> (<span class="ar">جَرّ</span>): kasra <span class="ar">ـِ</span>, or <span class="ar">ـٍ</span> if indefinite. The preposition and its noun together are called <span class="ar">جَارٌّ وَمَجْرُورٌ</span> (“the puller and the pulled”).</p>
        <div class="blocks"><div class="blk c4"><span class="ar">فِي</span><small>preposition · حرف جر</small></div><div class="blk c3"><span class="ar">القَفَصِ</span><small>majrūr · ـِ</small></div></div>
        <p>Now you know all three noun cases:</p>
        <p class="endings ar" style="font-size:1.3rem"><span class="end-u">جَاءَ الوَلَدُ</span> · <span class="end-a">رَأَيْتُ الوَلَدَ</span> · <span class="end-i">سَلَّمْتُ عَلَى الوَلَدِ</span></p>`,
      rule: `<p><span class="ar">يُجَرُّ الاسْمُ إِذَا سَبَقَهُ حَرْفٌ مِنْ حُرُوفِ الجَرِّ الآتِيَةِ: مِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي، وَالبَاءُ، وَاللَّامُ.</span></p><p>A noun is put in jarr when one of these prepositions comes before it: min, ilā, ʿan, ʿalā, fī, bi-, li-.</p>`,
      widget: "transform",
      wd: { title: "One noun, three cases", sets: [
        { base: ["الحَقْلُ وَاسِعٌ", "The field is wide."], baseLabel: "marfūʿ", ops: [["manṣūb", "يَحْرُثُ الفَلَّاحُ [[الحَقْلَ]]", "The farmer ploughs the field.", "object → fatḥa"], ["majrūr", "ذَهَبَ الفَلَّاحُ إِلَى [[الحَقْلِ]]", "The farmer went to the field.", "after إلى → kasra"]] }
      ] },
      check: [["سَافَرْتُ إِلَى ___", ["القَاهِرَةِ", "القَاهِرَةُ", "القَاهِرَةَ"], 0, "After إلى: kasra.", "سَافَرْتُ إِلَى القَاهِرَةِ"], ["The noun after a preposition is…", ["majrūr", "manṣūb", "marfūʿ"], 0, "", false]] },

    { id: "meanings", t: "What each one means", ar: "معاني حروف الجر", pos: "parts of speech", pages: "77–80",
      b: `<table class="g"><tr><th>preposition</th><th>main meanings</th><th>examples</th></tr>
        <tr><td><span class="ar">مِنْ</span></td><td>from (starting point); of, some of</td><td><span class="ar">يَأْتِي السَّمَكُ مِنَ البَحْرِ · بَيْتٌ مِنْ حَجَرٍ</span></td></tr>
        <tr><td><span class="ar">إِلَى</span></td><td>to, towards; until</td><td><span class="ar">مَشَى الجَيْشُ إِلَى المَيْدَانِ</span></td></tr>
        <tr><td><span class="ar">عَنْ</span></td><td>away from, off; about</td><td><span class="ar">يَنْزِلُ الجُنْدِيُّ عَنِ الحِصَانِ · يَذْهَبُ الخَوْفُ عَنِ الطِّفْلِ</span></td></tr>
        <tr><td><span class="ar">عَلَى</span></td><td>on, upon; against</td><td><span class="ar">يَطْفُو الخَشَبُ عَلَى المَاءِ</span></td></tr>
        <tr><td><span class="ar">فِي</span></td><td>in (place or time)</td><td><span class="ar">رَأَيْتُ الطَّائِرَ فِي القَفَصِ · فِي الصَّيْفِ</span></td></tr>
        <tr><td><span class="ar">بِـ</span></td><td>with (an instrument); by; in, at</td><td><span class="ar">قَشَرْتُ الفَاكِهَةَ بِالسِّكِّينِ</span></td></tr>
        <tr><td><span class="ar">لِـ</span></td><td>for, belonging to; in order to</td><td><span class="ar">الجَائِزَةُ لِلسَّابِقِ · اشْتَرَيْتُ قُفْلًا لِلْخِزَانَةِ</span></td></tr></table>`,
      widget: "sorter",
      wd: { title: "Which preposition?", sub: "Sort each phrase by the meaning of its preposition.", bins: [["مِنْ", "from"], ["إِلَى", "to"], ["عَنْ", "away from"], ["عَلَى", "on"], ["فِي", "in"], ["بِـ", "with (tool)"], ["لِـ", "for"]],
        items: [["خَرَجَ مِنَ البَيْتِ", 0, ""], ["عَادَ إِلَى المَدْرَسَةِ", 1, ""], ["ابْتَعَدَ عَنِ النَّارِ", 2, ""], ["جَلَسَ عَلَى الكُرْسِيِّ", 3, ""], ["السَّمَكُ فِي المَاءِ", 4, ""], ["كَتَبَ بِالقَلَمِ", 5, ""], ["الهَدِيَّةُ لِأُمِّي", 6, ""], ["نَزَلَ عَنِ الحِصَانِ", 2, "get off: عن"], ["قَطَعَ الخُبْزَ بِالسِّكِّينِ", 5, ""]] },
      check: [["“The prize is for the winner”:", ["الجَائِزَةُ لِلْفَائِزِ", "الجَائِزَةُ لِلْفَائِزُ", "الجَائِزَةُ لِالفَائِزِ"], 0, "لِـ + الـ = لِلْـ; kasra.", "الجَائِزَةُ لِلْفَائِزِ"]] },

    { id: "writing", t: "Spelling and pronunciation", ar: "كتابة حروف الجر ونطقها", pos: "spelling",
      b: `<ul><li><b><span class="ar">بِـ</span> and <span class="ar">لِـ</span></b> are one letter long and are written <b>joined</b> to the next word: <span class="ar">بِالقَلَمِ، لِأَخِي</span>.</li>
        <li><b><span class="ar">لِـ + الـ</span></b> drops the alif: <span class="ar">لِـ + المُعَلِّمِ = لِلْمُعَلِّمِ</span>.</li>
        <li><b>Before <span class="ar">الـ</span></b>, the sukūn of <span class="ar">مِنْ</span> becomes a <b>fatḥa</b>: <span class="ar">مِنَ السَّمَاءِ</span>; the sukūn of <span class="ar">عَنْ</span> becomes a <b>kasra</b>: <span class="ar">عَنِ الطِّفْلِ</span>.</li>
        <li><span class="ar">إِلَى</span> and <span class="ar">عَلَى</span> end in a long ā written with <span class="ar">ى</span>; before <span class="ar">الـ</span> the ā is shortened in speech: <i>ʿala l-māʾ</i>.</li></ul>`,
      check: [["Correct: نَزَلَ المَطَرُ ___ السَّمَاءِ", ["مِنَ", "مِنِ", "مِنْ"], 0, "مِنَ before al-.", "نَزَلَ المَطَرُ مِنَ السَّمَاءِ"], ["Correct spelling of “for the man”:", ["لِلرَّجُلِ", "لِالرَّجُلِ", "لَ الرَّجُلِ"], 0, "", "لِلرَّجُلِ"]] },

    { id: "pronouns", t: "Prepositions with pronouns", ar: "حروف الجر مع الضمائر", pos: "parts of speech",
      b: `<p>When the noun is a pronoun (<i>him, her, me…</i>) it is attached to the preposition. Two prepositions change shape: <span class="ar">إِلَى → إِلَيْـ</span> and <span class="ar">عَلَى → عَلَيْـ</span>; and <span class="ar">بِـ، لِـ</span> become <span class="ar">بِـ، لَـ</span>.</p>`,
      widget: "table",
      wd: { title: "Preposition + pronoun", head: ["", "him", "her", "me", "you (m)"], rows: [
        ["مِنْ from", "مِنْهُ", "مِنْهَا", "مِنِّي", "مِنْكَ"],
        ["إِلَى to", "إِلَيْهِ", "إِلَيْهَا", "إِلَيَّ", "إِلَيْكَ"],
        ["عَنْ about", "عَنْهُ", "عَنْهَا", "عَنِّي", "عَنْكَ"],
        ["عَلَى on", "عَلَيْهِ", "عَلَيْهَا", "عَلَيَّ", "عَلَيْكَ"],
        ["فِي in", "فِيهِ", "فِيهَا", "فِيَّ", "فِيكَ"],
        ["بِـ with", "بِهِ", "بِهَا", "بِي", "بِكَ"],
        ["لِـ for", "لَهُ", "لَهَا", "لِي", "لَكَ"]] },
      tip: `You already know some of these from greetings: <span class="ar">السَّلَامُ عَلَيْكُمْ</span> (peace be upon you), <span class="ar">شُكْرًا لَكَ</span> (thank you), <span class="ar">بَارَكَ اللهُ فِيكَ</span> (God bless you).`,
      check: [["“I wrote to him”:", ["كَتَبْتُ إِلَيْهِ", "كَتَبْتُ إِلَاهُ", "كَتَبْتُ إِلَى هُوَ"], 0, "", "كَتَبْتُ إِلَيْهِ"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">يَطْفُو الخَشَبُ عَلَى المَاءِ.</span></p>
        <p><span class="ar">عَلَى: حَرْفُ جَرٍّ.</span></p>
        <p><span class="ar">المَاءِ: اسْمٌ مَجْرُورٌ بِـ«عَلَى»، وَعَلَامَةُ جَرِّهِ الكَسْرَةُ.</span></p></div>
        <p>Note: a noun after a preposition can never be the doer or the object of the verb; the preposition “pulls” it out of those jobs.</p>`,
      check: [["Parse السِّكِّينِ in قَشَرْتُ الفَاكِهَةَ بِالسِّكِّينِ:", ["اسم مجرور بالباء وعلامة جره الكسرة", "مفعول به", "فاعل"], 0, ""]] }
  ],

  scenes: [
    { h: "رِحْلَةُ العُصْفُورِ", en: "The sparrow's journey", pic: "🐦", lines: [
      ["", "خَرَجَ العُصْفُورُ مِنَ العُشِّ فِي الصَّبَاحِ.", "The sparrow left the nest in the morning."],
      ["", "طَارَ إِلَى الحَدِيقَةِ، وَوَقَفَ عَلَى غُصْنٍ.", "It flew to the garden and stood on a branch."],
      ["", "رَأَى حَبًّا عَلَى الأَرْضِ، فَنَزَلَ إِلَيْهِ.", "It saw seeds on the ground, so it flew down to them."],
      ["", "فَجْأَةً اقْتَرَبَ قِطٌّ، فَابْتَعَدَ العُصْفُورُ عَنِ القِطِّ بِسُرْعَةٍ.", "Suddenly a cat came near, and the sparrow quickly moved away from the cat."],
      ["", "رَجَعَ العُصْفُورُ إِلَى العُشِّ، وَحَمَلَ الطَّعَامَ لِصِغَارِهِ.", "The sparrow returned to the nest and carried food for its young."]],
      note: "Every majrūr noun ends in kasra: العُشِّ، الصَّبَاحِ، الحَدِيقَةِ، غُصْنٍ، الأَرْضِ، القِطِّ، سُرْعَةٍ، صِغَارِهِ. In إِلَيْهِ the noun is a pronoun." },
    { h: "أَيْنَ تُسَافِرُ؟", en: "Where are you travelling?", pic: "🧳", lines: [
      ["عَلِيٌّ", "إِلَى أَيْنَ تُسَافِرُ فِي عُطْلَةِ الصَّيْفِ؟", "Where are you travelling in the summer holiday?"],
      ["حَسَنٌ", "أُسَافِرُ إِلَى الإِسْكَنْدَرِيَّةِ بِالقِطَارِ.", "I'm going to Alexandria by train."],
      ["عَلِيٌّ", "وَمِنْ أَيْنَ يَبْدَأُ القِطَارُ؟", "And where does the train leave from?"],
      ["حَسَنٌ", "يَبْدَأُ مِنَ القَاهِرَةِ فِي السَّاعَةِ الثَّامِنَةِ.", "It leaves from Cairo at eight o'clock."],
      ["عَلِيٌّ", "مَعَ مَنْ تُسَافِرُ؟", "Who are you travelling with?"],
      ["حَسَنٌ", "مَعَ أُسْرَتِي. وَسَأَشْتَرِي هَدِيَّةً لَكَ!", "With my family. And I'll buy a present for you!"]],
      note: "Prepositions can come before question words: إِلَى أَيْنَ؟ (to where?), مِنْ أَيْنَ؟ (from where?), مَعَ مَنْ؟ (with whom?)." }
  ],

  vocab: [
    ["مِنْ", "from; of", "prep.", "", "مِنَ before al-", "", "Prepositions"],
    ["إِلَى", "to, towards", "prep.", "", "+ pronoun: إِلَيْهِ", "", "Prepositions"],
    ["عَنْ", "away from; about", "prep.", "", "عَنِ before al-", "", "Prepositions"],
    ["عَلَى", "on, upon", "prep.", "", "+ pronoun: عَلَيْهِ", "", "Prepositions"],
    ["فِي", "in", "prep.", "", "", "", "Prepositions"],
    ["بِـ", "with, by", "prep.", "", "joined", "", "Prepositions"],
    ["لِـ", "for, to", "prep.", "", "joined; لِلْـ before al-", "", "Prepositions"],
    ["مَجْرُورٌ", "in the genitive (jarr)", "adj.", "", "grammar term", "", "Prepositions"],
    ["قَفَصٌ", "cage", "n.m", "🪺", "", "أَقْفَاصٌ", "Nature"],
    ["عُشٌّ", "nest", "n.m", "🪺", "", "أَعْشَاشٌ", "Nature"],
    ["غُصْنٌ", "branch", "n.m", "🌿", "", "أَغْصَانٌ", "Nature"],
    ["حَبٌّ", "seeds, grain", "n.m", "🌾", "", "حُبُوبٌ", "Nature"],
    ["مَاشِيَةٌ", "livestock, cattle", "n.f", "🐄", "", "مَوَاشٍ", "Nature"],
    ["خَشَبٌ", "wood", "n.m", "🪵", "", "أَخْشَابٌ", "Nature"],
    ["جَيْشٌ", "army", "n.m", "🪖", "", "جُيُوشٌ", "People and places"],
    ["جُنْدِيٌّ", "soldier", "n.m", "💂", "", "جُنُودٌ", "People and places"],
    ["مَيْدَانٌ", "square, field", "n.m", "🏟️", "", "مَيَادِينُ", "People and places"],
    ["القَاهِرَةُ", "Cairo", "n.f", "🏙️", "", "", "People and places"],
    ["سِكِّينٌ", "knife", "n.m/f", "🔪", "", "سَكَاكِينُ", "Things"],
    ["سَيْفٌ", "sword", "n.m", "⚔️", "", "سُيُوفٌ", "Things"],
    ["فَاكِهَةٌ", "fruit", "n.f", "🍎", "", "فَوَاكِهُ", "Things"],
    ["جَائِزَةٌ", "prize", "n.f", "🏅", "", "جَوَائِزُ", "Things"],
    ["قُفْلٌ", "lock", "n.m", "🔒", "", "أَقْفَالٌ", "Things"],
    ["خِزَانَةٌ", "cupboard, safe", "n.f", "🗄️", "", "خَزَائِنُ", "Things"],
    ["هَدِيَّةٌ", "present, gift", "n.f", "🎁", "", "هَدَايَا", "Things"],
    ["كُرْسِيٌّ", "chair", "n.m", "🪑", "", "كَرَاسِيُّ", "Things"],
    ["خَوْفٌ", "fear", "n.m", "😨", "", "", "Things"],
    ["طَفَا", "to float", "v.", "", "يَطْفُو", "", "Verbs"],
    ["قَشَرَ", "to peel", "v.", "", "يَقْشُرُ", "", "Verbs"],
    ["اِبْتَعَدَ", "to move away", "v.", "", "يَبْتَعِدُ", "", "Verbs"],
    ["اِقْتَرَبَ", "to come near", "v.", "", "يَقْتَرِبُ", "", "Verbs"],
    ["رَجَعَ", "to return", "v.", "", "يَرْجِعُ", "", "Verbs"]
  ],

  exercises: [
    { k: "shakl", t: "اشْكُلِ الاسْمَ بَعْدَ حَرْفِ الجَرِّ · Vowel the noun after the preposition", items: [
      "يَقْطَعُ النَّجَّارُ الخَشَبَ بِالمِنْشَار{ِ}", "رَأَيْتُ الطَّائِرَ فِي القَفَص{ِ}", "سَافَرَ أَبِي إِلَى القَاهِرَة{ِ}", "يَطْفُو الخَشَبُ عَلَى المَاء{ِ}", "الجَائِزَةُ لِلسَّابِق{ِ}", "شَرِبْتُ مِنْ كُوب{ٍ}"] },
    { k: "gap", t: "ضَعْ حَرْفَ جَرٍّ مُنَاسِبًا · Add a suitable preposition", bank: true, items: [
      ["يَأْتِي العَسَلُ ___ النَّحْلِ.", "مِنَ"], ["ذَهَبَ التِّلْمِيذُ ___ المَدْرَسَةِ.", "إِلَى"], ["نَزَلَ الفَارِسُ ___ الفَرَسِ.", "عَنِ"], ["جَلَسَتِ القِطَّةُ ___ الكُرْسِيِّ.", "عَلَى"], ["يَسْبَحُ السَّمَكُ ___ النَّهْرِ.", "فِي"], ["نَكْتُبُ ___ القَلَمِ.", "بِـ"]] },
    { k: "irab", t: "أَعْرِبْ · What is the highlighted word?", cats: ["حرف جر", "اسم مجرور", "فاعل", "مفعول به"], items: [
      ["نَزَلَ المَطَرُ [مِنَ] السَّمَاءِ.", "0", ""], ["نَزَلَ المَطَرُ مِنَ [السَّمَاءِ].", "1", ""], ["نَزَلَ [المَطَرُ] مِنَ السَّمَاءِ.", "2", ""], ["قَشَرْتُ [الفَاكِهَةَ] بِالسِّكِّينِ.", "3", ""], ["اشْتَرَيْتُ قُفْلًا لِ[لْخِزَانَةِ].", "1", ""]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["خَرَجَ الوَلَدُ ___ البَيْتِ.", ["مِنَ", "مِنْ", "مِنِ"], 0, "Before al-: مِنَ."], ["ابْتَعِدْ ___ النَّارِ.", ["عَنِ", "عَنَ", "عَلَى"], 0, ""], ["الكِتَابُ ___ (for Ali)", ["لِعَلِيٍّ", "لِعَلِيٌّ", "لِ عَلِيٍّ"], 0, ""], ["“on him”:", ["عَلَيْهِ", "عَلَاهُ", "عَلَى هُوَ"], 0, ""], ["“for me”:", ["لِي", "لَهُ", "لَكَ"], 0, ""]] },
    { k: "tr", t: "تَرْجِمْ · Translate", items: [
      ["The rain fell from the sky.", "نزل المطر من السماء|نَزَلَ المَطَرُ مِنَ السَّمَاءِ"], ["I travelled to Cairo by train.", "سافرت إلى القاهرة بالقطار|سَافَرْتُ إِلَى القَاهِرَةِ بِالقِطَارِ"], ["The book is on the chair.", "الكتاب على الكرسي|الكِتَابُ عَلَى الكُرْسِيِّ"], ["This present is for you.", "هذه الهدية لك|هَذِهِ الهَدِيَّةُ لَكَ"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["A noun after a preposition ends in kasra.", true, ""], ["لِـ + الـ is written لِالـ.", false, "لِلْـ"], ["مِنْ becomes مِنَ before الـ.", true, ""], ["عَنْ means “on”.", false, "Away from, about."], ["إِلَى + هُ = إِلَيْهِ.", true, ""]] }
  ],

  drills: [
    ["The seven prepositions of this lesson:", ["مِنْ، إِلَى، عَنْ، عَلَى، فِي، بِـ، لِـ", "أَنْ، لَنْ، كَيْ، إِذَنْ", "إِنَّ، أَنَّ، كَأَنَّ"], 0, ""],
    ["Sign of jarr:", ["الكسرة", "الفتحة", "الضمة"], 0, ""],
    ["عَادَ الطَّائِرُ إِلَى ___", ["العُشِّ", "العُشُّ", "العُشَّ"], 0, ""],
    ["“about the trip”:", ["عَنِ الرِّحْلَةِ", "عَلَى الرِّحْلَةِ", "مِنَ الرِّحْلَةُ"], 0, ""],
    ["“with the knife”:", ["بِالسِّكِّينِ", "بِ السِّكِّينِ", "لِلسِّكِّينِ"], 0, ""],
    ["Which preposition expresses a tool?", ["بِـ", "لِـ", "عَنْ"], 0, ""],
    ["Which expresses ownership/purpose?", ["لِـ", "فِي", "إِلَى"], 0, ""],
    ["Indefinite majrūr: جَلَسْتُ عَلَى ___", ["كُرْسِيٍّ", "كُرْسِيٌّ", "كُرْسِيًّا"], 0, ""],
    ["“to me”:", ["إِلَيَّ", "إِلَايَ", "لِيَّ"], 0, ""],
    ["Parse مِنْ in مِنْ أَيْنَ؟", ["حرف جر", "اسم", "فعل"], 0, ""],
    ["In ذَهَبْتُ إِلَى السُّوقِ, السُّوقِ is…", ["اسم مجرور", "مفعول به", "فاعل"], 0, ""],
    ["“in summer”:", ["فِي الصَّيْفِ", "عَلَى الصَّيْفِ", "فِي الصَّيْفُ"], 0, ""]
  ],

  comp: [
    ["Where did the sparrow go first?", ["to the garden", "to the river", "to the house"], 0, 0],
    ["Why did the sparrow fly away from the ground?", ["a cat came near", "it rained", "it was full"], 0, 0],
    ["What did it carry back to the nest?", ["food for its young", "a branch", "nothing"], 0, 0],
    ["How is Hasan travelling to Alexandria?", ["by train", "by car", "by plane"], 0, 1],
    ["What time does the train leave?", ["at eight", "at seven", "at noon"], 0, 1]
  ],

  cheat: `<h3>جرّ الاسم · Prepositions</h3>
    <div class="rule"><span class="ar">يُجَرُّ الاسْمُ بَعْدَ: مِنْ، إِلَى، عَنْ، عَلَى، فِي، البَاءِ، اللَّامِ — وَعَلَامَةُ جَرِّهِ الكَسْرَةُ.</span></div>
    <p><span class="ar">مِنْ</span> from · <span class="ar">إِلَى</span> to · <span class="ar">عَنْ</span> away from, about · <span class="ar">عَلَى</span> on · <span class="ar">فِي</span> in · <span class="ar">بِـ</span> with · <span class="ar">لِـ</span> for</p>
    <p>Spelling: <span class="ar">مِنَ الـ · عَنِ الـ · لِلْـ · بِالـ</span> · with pronouns: <span class="ar">مِنْهُ إِلَيْهِ عَنْهُ عَلَيْهِ فِيهِ بِهِ لَهُ</span></p>
    <h3>All three noun cases</h3><p class="endings ar"><span class="end-u">جَاءَ الوَلَدُ</span> · <span class="end-a">رَأَيْتُ الوَلَدَ</span> · <span class="end-i">سَلَّمْتُ عَلَى الوَلَدِ</span></p>`,
  mistakes: [
    ["ذَهَبْتُ إِلَى المَدْرَسَةُ", "ذَهَبْتُ إِلَى المَدْرَسَةِ", "After a preposition: kasra."],
    ["مِنْ السَّمَاءِ (said min as-samāʾ)", "مِنَ السَّمَاءِ", "Say and write mina before al-."],
    ["لِالمُعَلِّمِ", "لِلْمُعَلِّمِ", "لِـ + الـ = لِلْـ."],
    ["عَلَى هُ", "عَلَيْهِ", "على + pronoun → عليه."]
  ],
  tips: [
    { t: "Where is it?", b: `Point at things around you and say where they are: <span class="ar">الكِتَابُ عَلَى المَكْتَبِ، القَلَمُ فِي الحَقِيبَةِ، الصُّورَةُ عَلَى الحَائِطِ</span>. Every one is a nominal sentence whose khabar is a preposition phrase.` },
    { t: "Learn verbs with their preposition", b: `Many verbs come with a fixed preposition: <span class="ar">نَظَرَ إِلَى</span> look at, <span class="ar">بَحَثَ عَنْ</span> search for, <span class="ar">سَلَّمَ عَلَى</span> greet, <span class="ar">رَغِبَ فِي</span> want. Learn them as pairs.` }
  ]
});
