// الدرس ١٣ — كان وأخواتها (PDF pp. 63–69)
COURSE.add({
  n: 13, pages: [63, 69], method: true,
  summary: "Kāna (كان) and its sisters — صار، ليس، أصبح، أمسى، أضحى، ظلّ، بات — come before a nominal sentence and change it: the mubtadaʾ stays marfūʿ and is now called the ism of kāna; the khabar becomes manṣūb and is called the khabar of kāna. Each sister adds a meaning of time or change.",
  objectives: [
    "list the eight verbs كان، صار، ليس، أصبح، أمسى، أضحى، ظلّ، بات and their meanings",
    "put them before a nominal sentence: ism marfūʿ, khabar manṣūb",
    "use their present and imperative forms (يكونُ، كُنْ …) the same way",
    "remember that ليس has no present or imperative",
    "parse the ism and khabar of kāna"
  ],

  lesson: [
    { id: "effect", t: "A verb that changes a nominal sentence", ar: "عمل كان", pos: "case endings", pages: "63–64",
      b: `<p>Take a nominal sentence: <span class="ar">الزِّحَامُ شَدِيدٌ</span> (the crowding is heavy). Put <span class="ar">كَانَ</span> (was) in front: <span class="ar">كَانَ الزِّحَامُ شَدِيدًا</span> (the crowding was heavy). Two things happened: the meaning moved to the past, and the khabar <span class="ar">شَدِيدٌ</span> turned into <span class="ar">شَدِيدًا</span> — it is now <b>manṣūb</b>.</p>
        <div class="blocks"><div class="blk c2"><span class="ar">كَانَ</span><small>كان</small></div><div class="blk c1"><span class="ar">الزِّحَامُ</span><small>ism of kāna · ـُ</small></div><div class="blk c3"><span class="ar">شَدِيدًا</span><small>khabar of kāna · ـً</small></div></div>
        <p>Grammarians call these verbs <span class="ar">النَّوَاسِخ</span> (“the abrogators”) because they cancel the old names and endings of the nominal sentence.</p>`,
      widget: "transform",
      wd: { title: "Before and after kāna and its sisters", sets: [
        { base: ["الزِّحَامُ شَدِيدٌ", "The crowding is heavy."], baseLabel: "nominal sentence", ops: [["كَانَ", "[[كَانَ]] الزِّحَامُ [[شَدِيدًا]]", "The crowding was heavy.", "كان = was (past state)."]] },
        { base: ["البَرْدُ قَارِسٌ", "The cold is biting."], baseLabel: "nominal sentence", ops: [["صَارَ", "[[صَارَ]] البَرْدُ [[قَارِسًا]]", "The cold became biting.", "صار = became (change)."]] },
        { base: ["الخَادِمُ قَوِيٌّ", "The servant is strong."], baseLabel: "nominal sentence", ops: [["لَيْسَ", "[[لَيْسَ]] الخَادِمُ [[قَوِيًّا]]", "The servant is not strong.", "ليس = is not (denies the present)."]] },
        { base: ["العَامِلُ نَشِيطٌ", "The worker is active."], baseLabel: "nominal sentence", ops: [["أَصْبَحَ", "[[أَصْبَحَ]] العَامِلُ [[نَشِيطًا]]", "The worker was active in the morning / became active.", "أصبح = in the morning; also simply “became”."]] },
        { base: ["الجَوُّ بَارِدٌ", "The weather is cold."], baseLabel: "nominal sentence", ops: [["أَمْسَى", "[[أَمْسَى]] الجَوُّ [[بَارِدًا]]", "The weather turned cold in the evening.", "أمسى = in the evening."]] },
        { base: ["الشَّارِعُ مُزْدَحِمٌ", "The street is crowded."], baseLabel: "nominal sentence", ops: [["أَضْحَى", "[[أَضْحَى]] الشَّارِعُ [[مُزْدَحِمًا]]", "The street was crowded in the forenoon.", "أضحى = in the forenoon (morning to midday)."]] },
        { base: ["الفَلَّاحُ مَشْغُولٌ", "The farmer is busy."], baseLabel: "nominal sentence", ops: [["ظَلَّ", "[[ظَلَّ]] الفَلَّاحُ [[مَشْغُولًا]]", "The farmer stayed busy (all day).", "ظلّ = kept on, remained (by day)."]] },
        { base: ["المَرِيضُ سَاهِرٌ", "The patient is awake."], baseLabel: "nominal sentence", ops: [["بَاتَ", "[[بَاتَ]] المَرِيضُ [[سَاهِرًا]]", "The patient stayed awake all night.", "بات = spent the night."]] }
      ] },
      rule: `<p><span class="ar">تَدْخُلُ كَانَ عَلَى المُبْتَدَإِ وَالخَبَرِ فَتَرْفَعُ الأَوَّلَ وَيُسَمَّى اسْمَهَا، وَتَنْصِبُ الثَّانِيَ وَيُسَمَّى خَبَرَهَا.</span></p><p>Kāna comes before the mubtadaʾ and the khabar: it keeps the first in rafʿ (now called its ism) and puts the second in naṣb (now called its khabar).</p>`,
      check: [["Add كان to الجَوُّ صَحْوٌ (the weather is clear):", ["كَانَ الجَوُّ صَحْوًا", "كَانَ الجَوَّ صَحْوٌ", "كَانَ الجَوُّ صَحْوٌ"], 0, "Ism ḍamma, khabar fatḥa.", "كَانَ الجَوُّ صَحْوًا"]] },

    { id: "sisters", t: "The eight sisters and their meanings", ar: "أخوات كان ومعانيها", pos: "parts of speech", pages: "64–65",
      b: `<table class="g"><tr><th>verb</th><th>adds the meaning…</th><th>example</th></tr>
        <tr><td><span class="ar">كَانَ</span></td><td>was (in the past)</td><td><span class="ar">كَانَ البَيْتُ نَظِيفًا</span></td></tr>
        <tr><td><span class="ar">صَارَ</span></td><td>became (a change)</td><td><span class="ar">صَارَ الثَّوْبُ قَصِيرًا</span></td></tr>
        <tr><td><span class="ar">لَيْسَ</span></td><td>is not</td><td><span class="ar">لَيْسَ الكَذِبُ مُفِيدًا</span></td></tr>
        <tr><td><span class="ar">أَصْبَحَ</span></td><td>in the morning; became</td><td><span class="ar">أَصْبَحَ الجَوُّ صَافِيًا</span></td></tr>
        <tr><td><span class="ar">أَضْحَى</span></td><td>in the forenoon</td><td><span class="ar">أَضْحَى الشَّارِعُ مُزْدَحِمًا</span></td></tr>
        <tr><td><span class="ar">ظَلَّ</span></td><td>remained, all day</td><td><span class="ar">ظَلَّ المَطَرُ غَزِيرًا</span></td></tr>
        <tr><td><span class="ar">أَمْسَى</span></td><td>in the evening</td><td><span class="ar">أَمْسَى البَحْرُ هَادِئًا</span></td></tr>
        <tr><td><span class="ar">بَاتَ</span></td><td>through the night</td><td><span class="ar">بَاتَ الحَارِسُ يَقِظًا</span></td></tr></table>
        <p>A mnemonic order used by teachers: <span class="ar">كَانَ، أَصْبَحَ، أَضْحَى، ظَلَّ، أَمْسَى، بَاتَ، صَارَ، لَيْسَ</span> — morning, forenoon, day, evening, night, then change and negation.</p>`,
      widget: "sorter",
      wd: { title: "Which time of day?", bins: [["الصباح", "morning"], ["الضحى", "forenoon"], ["النهار كله", "all day"], ["المساء", "evening"], ["الليل", "night"]],
        items: [["أَصْبَحَ", 0, ""], ["أَضْحَى", 1, ""], ["ظَلَّ", 2, ""], ["أَمْسَى", 3, ""], ["بَاتَ", 4, ""]] },
      check: [["“The garment became short”:", ["صَارَ الثَّوْبُ قَصِيرًا", "لَيْسَ الثَّوْبُ قَصِيرًا", "بَاتَ الثَّوْبُ قَصِيرًا"], 0, "صار = became.", "صَارَ الثَّوْبُ قَصِيرًا"], ["“Lying is not useful”:", ["لَيْسَ الكَذِبُ مُفِيدًا", "لَيْسَ الكَذِبَ مُفِيدٌ", "لَيْسَ الكَذِبُ مُفِيدٌ"], 0, "", "لَيْسَ الكَذِبُ مُفِيدًا"]] },

    { id: "forms", t: "Present and imperative forms work too", ar: "مضارع كان وأمرها", pos: "conjugation", pages: "65",
      b: `<p>Most of these verbs have a present and an imperative, and they do exactly the same job:</p>
        <table class="g"><tr><th>past</th><th>present</th><th>imperative</th><th>example</th></tr>
        <tr><td><span class="ar">كَانَ</span></td><td><span class="ar">يَكُونُ</span></td><td><span class="ar">كُنْ</span></td><td><span class="ar">كُنْ أَمِينًا</span> — be honest!</td></tr>
        <tr><td><span class="ar">صَارَ</span></td><td><span class="ar">يَصِيرُ</span></td><td><span class="ar">صِرْ</span></td><td><span class="ar">يَصِيرُ المَاءُ ثَلْجًا</span> — water becomes ice</td></tr>
        <tr><td><span class="ar">أَصْبَحَ</span></td><td><span class="ar">يُصْبِحُ</span></td><td><span class="ar">أَصْبِحْ</span></td><td><span class="ar">يُصْبِحُ الجَوُّ بَارِدًا</span></td></tr>
        <tr><td><span class="ar">ظَلَّ</span></td><td><span class="ar">يَظَلُّ</span></td><td><span class="ar">ظَلَّ</span></td><td><span class="ar">يَظَلُّ الحَارِسُ يَقِظًا</span></td></tr>
        <tr><td><span class="ar">لَيْسَ</span></td><td colspan="2">— none —</td><td><span class="ar">لَسْتُ كَسْلَانَ</span> — I'm not lazy</td></tr></table>`,
      warn: `<span class="ar">لَيْسَ</span> looks like a past verb but means “is not” <b>now</b>, and it has no other forms. It changes with the subject: <span class="ar">لَيْسَ، لَيْسَتْ، لَسْتُ، لَسْتَ</span>.`,
      check: [["“Be polite!”:", ["كُنْ مُؤَدَّبًا", "كُنْ مُؤَدَّبٌ", "يَكُونُ مُؤَدَّبًا"], 0, "Imperative of كان; khabar manṣūb.", "كُنْ مُؤَدَّبًا"]] },

    { id: "agree", t: "Agreement and the feminine", ar: "تأنيث كان وأخواتها", pos: "agreement",
      b: `<p>These are verbs, so they take <span class="ar">ـتْ</span> with a feminine ism, just like <span class="ar">جَلَسَتِ البِنْتُ</span>. And the khabar still agrees with the ism in gender:</p>`,
      ex: [["كَانَتِ الحَدِيقَةُ جَمِيلَةً.", "The garden was beautiful."], ["أَصْبَحَتِ السَّمَاءُ صَافِيَةً.", "The sky became clear."], ["لَيْسَتِ الشَّمْسُ حَارَّةً اليَوْمَ.", "The sun isn't hot today."]],
      check: [["___ الشَّجَرَةُ مُثْمِرَةً.", ["صَارَتِ", "صَارَ"], 0, "Feminine ism.", "صَارَتِ الشَّجَرَةُ مُثْمِرَةً"]] },

    { id: "parse", t: "Parsing", ar: "الإعراب", pos: "case endings",
      b: `<div class="rule"><p><span class="ar">كَانَ الزِّحَامُ شَدِيدًا.</span></p>
        <p><span class="ar">كَانَ: فِعْلٌ مَاضٍ نَاسِخٌ.</span></p>
        <p><span class="ar">الزِّحَامُ: اسْمُ كَانَ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p>
        <p><span class="ar">شَدِيدًا: خَبَرُ كَانَ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p></div>`,
      tip: `Don't confuse the khabar of kāna with an object. Kāna does not “do” anything to a thing; it just places the sentence in time. That's why the book gives it its own names: <span class="ar">اسم كان</span> and <span class="ar">خبر كان</span>.`,
      check: [["Parse قَصِيرًا in صَارَ الثَّوْبُ قَصِيرًا:", ["خبر صار منصوب وعلامة نصبه الفتحة", "مفعول به منصوب", "حال"], 0, ""]] }
  ],

  scenes: [
    { h: "يَوْمٌ مِنْ أَيَّامِ الشِّتَاءِ", en: "A winter's day", pic: "❄️", lines: [
      ["", "أَصْبَحَ الجَوُّ بَارِدًا، وَكَانَتِ السَّمَاءُ مُلَبَّدَةً بِالغُيُومِ.", "In the morning the weather was cold, and the sky was overcast."],
      ["", "أَضْحَى الشَّارِعُ مُزْدَحِمًا بِالنَّاسِ.", "By mid-morning the street was crowded with people."],
      ["", "ظَلَّ المَطَرُ غَزِيرًا طُولَ النَّهَارِ.", "The rain stayed heavy all day long."],
      ["", "أَمْسَى البَرْدُ قَارِسًا، فَصَارَتِ الطُّرُقُ خَالِيَةً.", "In the evening the cold was biting, and the roads became empty."],
      ["", "بَاتَ الحَارِسُ يَقِظًا أَمَامَ البَابِ.", "The guard stayed awake all night in front of the door."],
      ["", "لَيْسَ الشِّتَاءُ قَاسِيًا دَائِمًا؛ فَغَدًا يَكُونُ الجَوُّ صَحْوًا.", "Winter isn't always harsh: tomorrow the weather will be clear."]],
      note: "All eight sisters, in the order of the day. Every khabar is manṣūb: بَارِدًا، مُلَبَّدَةً، مُزْدَحِمًا، غَزِيرًا، قَارِسًا، خَالِيَةً، يَقِظًا، قَاسِيًا، صَحْوًا." },
    { h: "كُنْ…", en: "Be…", pic: "🌟", lines: [
      ["الأَبُ", "يَا بُنَيَّ، كُنْ صَادِقًا فِي قَوْلِكَ.", "My son, be truthful in what you say."],
      ["الابْنُ", "سَأَكُونُ صَادِقًا يَا أَبِي.", "I will be truthful, father."],
      ["الأَبُ", "وَكُنْ رَحِيمًا بِالضَّعِيفِ، وَلَا تَكُنْ مُتَكَبِّرًا.", "And be kind to the weak, and don't be arrogant."],
      ["الابْنُ", "لَسْتُ مُتَكَبِّرًا، وَلَنْ أَكُونَ كَذَلِكَ.", "I'm not arrogant, and I won't be."],
      ["الأَبُ", "بَارَكَ اللهُ فِيكَ؛ هَكَذَا يَصِيرُ الإِنْسَانُ مَحْبُوبًا.", "God bless you; that is how a person becomes loved."]],
      note: "Imperative كُنْ, present سَأَكُونُ، لَا تَكُنْ، لَنْ أَكُونَ، يَصِيرُ, and لَسْتُ — all with a manṣūb khabar." }
  ],

  vocab: [
    ["كَانَ", "to be (was)", "v.", "", "يَكُونُ · كُنْ", "", "Kāna and its sisters"],
    ["صَارَ", "to become", "v.", "", "يَصِيرُ · صِرْ", "", "Kāna and its sisters"],
    ["لَيْسَ", "is not", "v.", "", "no present or imperative; لَسْتُ، لَيْسَتْ", "", "Kāna and its sisters"],
    ["أَصْبَحَ", "to be in the morning; to become", "v.", "", "يُصْبِحُ", "", "Kāna and its sisters"],
    ["أَضْحَى", "to be in the forenoon", "v.", "", "يُضْحِي", "", "Kāna and its sisters"],
    ["ظَلَّ", "to remain (by day)", "v.", "", "يَظَلُّ", "", "Kāna and its sisters"],
    ["أَمْسَى", "to be in the evening", "v.", "", "يُمْسِي", "", "Kāna and its sisters"],
    ["بَاتَ", "to spend the night", "v.", "", "يَبِيتُ", "", "Kāna and its sisters"],
    ["زِحَامٌ", "crowding, crowd", "n.m", "👥", "", "", "Nouns"],
    ["خَادِمٌ", "servant", "n.m", "🧑‍🍳", "", "خَدَمٌ", "Nouns"],
    ["عَامِلٌ", "worker", "n.m", "👷", "", "عُمَّالٌ", "Nouns"],
    ["ثَلْجٌ", "ice, snow", "n.m", "🧊", "", "ثُلُوجٌ", "Nouns"],
    ["نَهَارٌ", "daytime", "n.m", "🌞", "", "", "Nouns"],
    ["لَيْلٌ", "night", "n.m", "🌃", "", "لَيَالٍ", "Nouns"],
    ["طَرِيقٌ", "road, way", "n.m", "🛤️", "", "طُرُقٌ", "Nouns"],
    ["كَذِبٌ", "lying", "n.m", "🤥", "", "", "Nouns"],
    ["شَدِيدٌ", "severe, strong", "adj.", "", "f. شَدِيدَةٌ", "", "Describing words"],
    ["قَارِسٌ", "biting (cold)", "adj.", "", "", "", "Describing words"],
    ["قَوِيٌّ", "strong", "adj.", "", "f. قَوِيَّةٌ", "أَقْوِيَاءُ", "Describing words"],
    ["نَشِيطٌ", "active, energetic", "adj.", "", "f. نَشِيطَةٌ", "", "Describing words"],
    ["مُزْدَحِمٌ", "crowded", "adj.", "", "f. مُزْدَحِمَةٌ", "", "Describing words"],
    ["مَشْغُولٌ", "busy", "adj.", "", "f. مَشْغُولَةٌ", "", "Describing words"],
    ["سَاهِرٌ", "staying awake", "adj.", "", "", "", "Describing words"],
    ["يَقِظٌ", "awake, alert", "adj.", "", "f. يَقِظَةٌ", "", "Describing words"],
    ["صَحْوٌ", "clear (sky)", "adj.", "", "", "", "Describing words"],
    ["خَالٍ", "empty", "adj.", "", "f. خَالِيَةٌ; with al-: الخَالِي", "", "Describing words"],
    ["قَاسٍ", "harsh", "adj.", "", "f. قَاسِيَةٌ", "", "Describing words"],
    ["صَادِقٌ", "truthful", "adj.", "", "f. صَادِقَةٌ", "", "Describing words"],
    ["رَحِيمٌ", "merciful, kind", "adj.", "", "f. رَحِيمَةٌ", "", "Describing words"],
    ["مُتَكَبِّرٌ", "arrogant", "adj.", "", "f. مُتَكَبِّرَةٌ", "", "Describing words"]
  ],

  exercises: [
    { k: "irab", t: "بَيِّنِ الاسْمَ وَالخَبَرَ · Ism or khabar of kāna?", cats: ["اسم كان (مرفوع)", "خبر كان (منصوب)", "الفعل الناسخ"], items: [
      ["كَانَ [البَيْتُ] نَظِيفًا.", "0", ""], ["كَانَ البَيْتُ [نَظِيفًا].", "1", ""], ["[أَصْبَحَ] الجَوُّ صَافِيًا.", "2", ""], ["لَيْسَ [الكَذِبُ] مُفِيدًا.", "0", ""], ["ظَلَّ المَطَرُ [غَزِيرًا].", "1", ""], ["صَارَتِ [الشَّجَرَةُ] مُثْمِرَةً.", "0", ""]] },
    { k: "shakl", t: "اضْبِطْ · Vowel the ism and the khabar", items: [
      "كَانَ الجَوّ{ُ} بَارِد{ً}ا", "صَارَ البَرْد{ُ} قَارِس{ً}ا", "لَيْسَ الخَادِم{ُ} قَوِيّ{ً}ا", "أَمْسَى البَحْر{ُ} هَادِئ{ً}ا", "كَانَتِ الحَدِيقَة{ُ} جَمِيلَة{ً}"] },
    { k: "tr", t: "أَدْخِلِ الفِعْلَ النَّاسِخَ · Add the verb in brackets", en: "Rewrite the sentence with the verb in front and change the endings. Ḥarakāt optional, but say them!", items: [
      ["الشَّجَرُ مُورِقٌ. (أَصْبَحَ)", "أصبح الشجر مورقا|أَصْبَحَ الشَّجَرُ مُورِقًا"], ["الهَوَاءُ بَارِدٌ. (صَارَ)", "صار الهواء باردا|صَارَ الهَوَاءُ بَارِدًا"], ["الطَّرِيقُ طَوِيلٌ. (لَيْسَ)", "ليس الطريق طويلا|لَيْسَ الطَّرِيقُ طَوِيلًا"], ["الحَارِسُ يَقِظٌ. (بَاتَ)", "بات الحارس يقظا|بَاتَ الحَارِسُ يَقِظًا"], ["السَّمَاءُ صَافِيَةٌ. (كَانَ)", "كانت السماء صافية|كَانَتِ السَّمَاءُ صَافِيَةً"]] },
    { k: "mcq", t: "اِخْتَرْ · Choose", items: [
      ["Which means “became”?", ["صَارَ", "بَاتَ", "لَيْسَ"], 0, ""], ["“The guard stayed awake all night” uses…", ["بَاتَ", "أَضْحَى", "أَصْبَحَ"], 0, ""], ["كُنْ ___", ["شُجَاعًا", "شُجَاعٌ", "شُجَاعٍ"], 0, "Khabar manṣūb."], ["Which has no present form?", ["لَيْسَ", "كَانَ", "صَارَ"], 0, ""], ["___ الوَرْدَةُ ذَابِلَةً.", ["أَصْبَحَتِ", "أَصْبَحَ"], 0, ""]] },
    { k: "gap", t: "أَكْمِلْ بِخَبَرٍ مَنْصُوبٍ · Complete with a manṣūb khabar", bank: true, items: [
      ["ظَلَّ الفَلَّاحُ ___ فِي حَقْلِهِ.", "مَشْغُولًا"], ["أَمْسَى البَحْرُ ___ .", "هَادِئًا"], ["صَارَ المَاءُ ___ .", "ثَلْجًا"], ["كُنْ ___ فِي قَوْلِكَ.", "صَادِقًا"]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["Kāna makes its ism manṣūb.", false, "Its ism stays marfūʿ; its khabar becomes manṣūb."], ["أَمْسَى refers to the evening.", true, ""], ["لَيْسَ means “is not”.", true, ""], ["يَكُونُ works like كان.", true, ""], ["In كان الجَوُّ صَحْوًا, صحوًا is an object.", false, "It is the khabar of kāna."]] }
  ],

  drills: [
    ["Kāna's ism is…", ["marfūʿ", "manṣūb", "majrūr"], 0, ""],
    ["Kāna's khabar is…", ["manṣūb", "marfūʿ", "majrūr"], 0, ""],
    ["كَانَ الطَّالِبُ ___", ["مُجْتَهِدًا", "مُجْتَهِدٌ", "مُجْتَهِدٍ"], 0, ""],
    ["لَيْسَ ___ بَعِيدًا.", ["المَكَانُ", "المَكَانَ", "المَكَانِ"], 0, ""],
    ["“In the evening the sea was calm”:", ["أَمْسَى البَحْرُ هَادِئًا", "أَصْبَحَ البَحْرُ هَادِئًا", "بَاتَ البَحْرُ هَادِئٌ"], 0, ""],
    ["Present of كَانَ:", ["يَكُونُ", "يَكِينُ", "يُكَانُ"], 0, ""],
    ["Imperative of كَانَ:", ["كُنْ", "كَانْ", "اُكْوُنْ"], 0, ""],
    ["“I am not lazy”:", ["لَسْتُ كَسْلَانَ", "لَيْسَ أَنَا كَسْلَانُ", "لَسْتُ كَسْلَانُ"], 0, ""],
    ["Feminine: ___ السَّمَاءُ مُمْطِرَةً", ["ظَلَّتِ", "ظَلَّ"], 0, "السماء is feminine."],
    ["Parse كَانَ in كَانَ الجَوُّ بَارِدًا:", ["فعل ماضٍ ناسخ", "حرف", "فعل أمر"], 0, ""],
    ["How many sisters (with kāna itself) in this lesson?", ["eight", "six", "four"], 0, ""],
    ["ظَلَّ means…", ["remained (all day)", "spent the night", "is not"], 0, ""]
  ],

  comp: [
    ["How was the sky in the morning?", ["overcast", "clear", "red"], 0, 0],
    ["How long did the rain stay heavy?", ["all day", "one hour", "all night"], 0, 0],
    ["What did the guard do?", ["stayed awake all night", "went home", "slept"], 0, 0],
    ["What does the father ask first?", ["to be truthful", "to be rich", "to be quiet"], 0, 1],
    ["What does the son say about arrogance?", ["he isn't arrogant and won't be", "he is a little arrogant", "nothing"], 0, 1]
  ],

  cheat: `<h3>كان وأخواتها</h3>
    <div class="rule"><span class="ar">كَانَ وَأَخَوَاتُهَا تَرْفَعُ المُبْتَدَأَ (اسْمَهَا) وَتَنْصِبُ الخَبَرَ (خَبَرَهَا).</span></div>
    <div class="blocks"><div class="blk c2"><span class="ar">صَارَ</span><small>verb</small></div><div class="blk c1"><span class="ar">المَاءُ</span><small>ism ـُ</small></div><div class="blk c3"><span class="ar">ثَلْجًا</span><small>khabar ـً</small></div></div>
    <p><span class="ar">كَانَ</span> was · <span class="ar">أَصْبَحَ</span> morning / became · <span class="ar">أَضْحَى</span> forenoon · <span class="ar">ظَلَّ</span> all day · <span class="ar">أَمْسَى</span> evening · <span class="ar">بَاتَ</span> night · <span class="ar">صَارَ</span> became · <span class="ar">لَيْسَ</span> is not</p>
    <p>Present and imperative work too (<span class="ar">يَكُونُ، كُنْ</span>); <span class="ar">لَيْسَ</span> has neither.</p>`,
  mistakes: [
    ["كَانَ الجَوُّ بَارِدٌ", "كَانَ الجَوُّ بَارِدًا", "The khabar of kāna is manṣūb."],
    ["كَانَ الجَوَّ بَارِدًا", "كَانَ الجَوُّ بَارِدًا", "The ism stays marfūʿ."],
    ["كَانَ السَّمَاءُ صَافِيَةً", "كَانَتِ السَّمَاءُ صَافِيَةً", "Feminine ism → كانتْ."],
    ["كُنْ صَادِقٌ", "كُنْ صَادِقًا", "The imperative كُنْ also takes a manṣūb khabar."]
  ],
  tips: [
    { t: "Tell your day with the sisters", b: `Describe one day in eight sentences, one for each sister, from <span class="ar">أَصْبَحْتُ نَشِيطًا</span> to <span class="ar">بِتُّ مُتْعَبًا</span> — exactly like the winter text.` },
    { t: "كُنْ … — a moral habit", b: `Arabic teachers love <span class="ar">كُنْ</span> sentences: <span class="ar">كُنْ صَادِقًا، كُنْ أَمِينًا، كُنْ رَحِيمًا</span>. Make a list of ten for yourself and say them with the <i>-an</i> ending.` }
  ]
});
