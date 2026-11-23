// الدرس ٢ — أجزاء الجملة: الاسم والفعل والحرف (PDF pp. 15–20)
COURSE.add({
  n: 2, pages: [15, 20], method: true,
  summary: "Every Arabic word is one of three kinds: a noun (اسم) that names something, a verb (فعل) that tells of an action in a certain time, or a particle (حرف) whose meaning only shows with other words. This lesson teaches you to sort any word into one of the three, with the quick tests grammarians use.",
  objectives: [
    "name the three kinds of word: اسم، فعل، حرف",
    "recognise nouns for people, animals, plants, things and ideas",
    "recognise a verb by its action and its time",
    "recognise particles such as في، على، من، إلى، هل، و",
    "use the signs: ال and tanwīn for nouns; قد، سـ and ـتُ for verbs"
  ],

  lesson: [
    { id: "three", t: "Three kinds of word", ar: "الكلمة ثلاثة أنواع", pos: "parts of speech", pages: "15–16",
      b: `<p>Take any complete sentence apart and you find that its words are of only <b>three kinds</b>. Arabic grammar has no separate classes for adjectives, adverbs or pronouns as English does: they are all counted as kinds of <b>noun</b>. So everything is a</p>
        <div class="blocks"><div class="blk c1"><span class="ar">اسْمٌ</span><small>noun · names a thing</small></div><div class="blk c2"><span class="ar">فِعْلٌ</span><small>verb · an action in time</small></div><div class="blk c3"><span class="ar">حَرْفٌ</span><small>particle · meaning with others</small></div></div>
        <p>Tap the words of the book-style sentences below. Each one is coloured by its kind.</p>`,
      widget: "parse",
      wd: { title: "Noun, verb or particle?", legend: { ism: ["noun", "اسم"], fil: ["verb", "فعل"], harf: ["particle", "حرف"] }, sents: [
        { en: "Ibrahim rode the horse.", w: [["رَكِبَ", "fil", "A verb: an action (riding) that happened in the past."], ["إِبْرَاهِيمُ", "ism", "A noun: the name of a person."], ["الحِصَانَ", "ism", "A noun: the name of an animal. It takes ال."]] },
        { en: "The light shines in the room.", w: [["يَسْطَعُ", "fil", "A verb: shining, happening now."], ["النُّورُ", "ism", "A noun: the name of something you cannot hold — still a noun."], ["فِي", "harf", "A particle: “in” tells you nothing until you add a word after it."], ["الحُجْرَةِ", "ism", "A noun: a thing (a room). It ends in kasra because it comes after في."]] },
        { en: "The farmer harvests the wheat.", w: [["يَحْصِدُ", "fil", "A verb: harvesting, now or later."], ["الفَلَّاحُ", "ism", "A noun: a person (the farmer)."], ["القَمْحَ", "ism", "A noun: a plant (wheat)."]] },
        { en: "Do you like travelling?", w: [["هَلْ", "harf", "A particle: it turns the sentence into a yes/no question, but means nothing alone."], ["تُحِبُّ", "fil", "A verb: (you) love / like."], ["السَّفَرَ", "ism", "A noun: the name of an idea (travel)."]] },
        { en: "The ship sails on the water.", w: [["تَجْرِي", "fil", "A verb: runs / sails."], ["السَّفِينَةُ", "ism", "A noun: an object (the ship)."], ["عَلَى", "harf", "A particle: “on”."], ["المَاءِ", "ism", "A noun: water."]] }
      ] } },

    { id: "ism", t: "The noun (الاسم): anything with a name", ar: "الاسم", pos: "parts of speech", pages: "16–17",
      b: `<p>In the book's examples, <span class="ar">إِبْرَاهِيمُ</span> and <span class="ar">الفَلَّاحُ</span> are names of people; <span class="ar">الحِصَانُ</span>, <span class="ar">القِطُّ</span> and <span class="ar">الشَّاةُ</span> of animals; <span class="ar">القَمْحُ</span> and <span class="ar">الشَّعِيرُ</span> of plants; <span class="ar">الحُجْرَةُ</span>, <span class="ar">السَّفِينَةُ</span> and <span class="ar">المَاءُ</span> of things without life (<span class="ar">جَمَاد</span>); and <span class="ar">النَّصِيحَةُ</span>, <span class="ar">النُّورُ</span>, <span class="ar">السَّفَرُ</span> of things we only think of — ideas, feelings, actions seen as things. All of them are <span class="ar">أَسْمَاء</span> (plural of <span class="ar">اسْم</span>).</p>
        <p>Remember that words English calls adjectives (<span class="ar">جَمِيل</span> beautiful), pronouns (<span class="ar">هُوَ</span> he) or some adverbs (<span class="ar">أَمَامَ</span> in front of) are also nouns in Arabic grammar.</p>`,
      widget: "sorter",
      wd: { title: "What does each noun name?", bins: [["إنسان", "a person"], ["حيوان", "an animal"], ["نبات", "a plant"], ["جماد", "a lifeless thing"], ["معنى", "an idea"]],
        items: [["الفَلَّاحُ", 0, "the farmer"], ["التِّلْمِيذُ", 0, "the pupil"], ["الحِصَانُ", 1, "the horse"], ["القِطُّ", 1, "the cat"], ["القَمْحُ", 2, "wheat"], ["الشَّجَرَةُ", 2, "the tree"], ["السَّفِينَةُ", 3, "the ship"], ["الحَجَرُ", 3, "the stone"], ["النَّصِيحَةُ", 4, "advice"], ["الصِّدْقُ", 4, "truthfulness"], ["السَّفَرُ", 4, "travel"]] },
      rule: `<p><span class="ar">الاسْمُ: كُلُّ لَفْظٍ يُسَمَّى بِهِ إِنْسَانٌ أَوْ حَيَوَانٌ أَوْ نَبَاتٌ أَوْ جَمَادٌ أَوْ أَيُّ شَيْءٍ آخَرَ.</span></p><p>A noun is any word used to name a person, an animal, a plant, a lifeless thing or anything else.</p>`,
      check: [["Is الصِّدْقُ (truthfulness) a noun?", ["yes — it names an idea", "no — you cannot touch it"], 0, "Anything that has a name is a noun, including ideas."], ["Which is a noun?", ["الشَّاةُ", "تَأْكُلُ", "عَلَى"], 0, "الشاة = the ewe, an animal."]] },

    { id: "fil", t: "The verb (الفعل): an action in time", ar: "الفعل", pos: "parts of speech", pages: "16–17",
      b: `<p>The words <span class="ar">رَكِبَ</span> (rode), <span class="ar">سَمِعْتُ</span> (I heard), <span class="ar">يُدَاعِبُ</span> (plays with), <span class="ar">يَحْصِدُ</span> (harvests), <span class="ar">تَجْرِي</span> (runs) all tell us that <b>something happened</b> — and they also tell us <b>when</b>: <span class="ar">رَكِبَ</span> in the past, <span class="ar">يَحْصِدُ</span> now or later. That double meaning, <i>action + time</i>, is what makes a word a verb.</p>
        <p>Compare the noun <span class="ar">السَّفَرُ</span> (travel) with the verb <span class="ar">سَافَرَ</span> (he travelled): the noun names the action, the verb tells that it took place at a certain time.</p>`,
      ex: [["سَافَرَ أَبِي.", "My father travelled.", "سافر: action + past time → verb"], ["السَّفَرُ مُمْتِعٌ.", "Travel is enjoyable.", "السفر: the action named as a thing → noun"], ["يَحْصِدُ الفَلَّاحُ القَمْحَ.", "The farmer harvests the wheat.", "يحصد: action + present time → verb"]],
      rule: `<p><span class="ar">الفِعْلُ: كُلُّ لَفْظٍ يَدُلُّ عَلَى حُصُولِ عَمَلٍ فِي زَمَنٍ خَاصٍّ.</span></p><p>A verb is any word that shows an action taking place at a particular time.</p>`,
      check: [["Which is a verb?", ["سَمِعَ", "السَّمْعُ", "مِنْ"], 0, "سمع = he heard: action + past time."], ["الأَكْلُ (eating) is…", ["a noun", "a verb"], 0, "It names the action but has no time: a noun (verbal noun).", false]] },

    { id: "harf", t: "The particle (الحرف): meaning only with others", ar: "الحرف", pos: "parts of speech", pages: "16–17",
      b: `<p>Say <span class="ar">فِي</span> on its own: <i>in</i> … in what? Say <span class="ar">هَلْ</span>: a question … about what? A particle has a meaning, but it <b>only becomes clear when it joins other words</b>. Particles are few but very frequent: prepositions (<span class="ar">مِنْ، إِلَى، عَنْ، عَلَى، فِي</span>), the question particle <span class="ar">هَلْ</span>, <span class="ar">وَ</span> (and), <span class="ar">لَمْ</span> and <span class="ar">لَنْ</span> (not), and so on.</p>
        <p>Some particles are a single letter written joined to the next word: <span class="ar">وَ</span> and, <span class="ar">بِـ</span> with, <span class="ar">لِـ</span> for. In <span class="ar">بِالقَلَمِ</span> there are two words: the particle <span class="ar">بِـ</span> and the noun <span class="ar">القَلَمِ</span>.</p>`,
      widget: "transform",
      wd: { title: "A particle needs company", sets: [
        { base: ["[[فِي]]", "in … ?"], baseLabel: "alone", ops: [["+ a noun", "[[فِي]] الحَدِيقَةِ", "in the garden", "Now في has its meaning, but we still wait for the sentence."], ["in a sentence", "يَلْعَبُ الأَطْفَالُ [[فِي]] الحَدِيقَةِ", "The children play in the garden.", "Now everything is clear."]] },
        { base: ["[[هَلْ]]", "(question) … ?"], baseLabel: "alone", ops: [["in a sentence", "[[هَلْ]] تُحِبُّ السَّفَرَ؟", "Do you like travelling?", "هل turns a statement into a yes/no question."]] }
      ] },
      rule: `<p><span class="ar">الحَرْفُ: كُلُّ لَفْظٍ لَا يَظْهَرُ مَعْنَاهُ كَامِلًا إِلَّا مَعَ غَيْرِهِ.</span></p><p>A particle is any word whose meaning does not appear fully except together with another word.</p>`,
      check: [["In وَالمَاءُ how many words are there?", ["two: وَ + المَاءُ", "one"], 0, "وَ is a one-letter particle written joined to the next word."], ["Which is a particle?", ["إِلَى", "النُّورُ", "سَطَعَ"], 0, "إلى (to) needs a word after it."]] },

    { id: "signs", t: "Quick tests: the signs of each kind", ar: "علامات الاسم والفعل والحرف", pos: "parts of speech",
      b: `<p>The book asks you to decide by meaning. Grammarians also use <b>signs</b> (<span class="ar">عَلَامَات</span>) — small add-ons that only one kind of word accepts. When in doubt, try them:</p>
        <table class="g"><tr><th>kind</th><th>accepts…</th><th>examples</th></tr>
        <tr><td><b>noun</b> <span class="ar">اسم</span></td><td><span class="ar">الـ</span> (the) · tanwīn <span class="ar">ـٌ ـً ـٍ</span> · a preposition before it · <span class="ar">يَا</span> (O…)</td><td><span class="ar">الكِتَابُ · كِتَابٌ · فِي البَيْتِ · يَا عَلِيُّ</span></td></tr>
        <tr><td><b>verb</b> <span class="ar">فعل</span></td><td><span class="ar">قَدْ</span> · <span class="ar">سَـ / سَوْفَ</span> (will) · <span class="ar">ـتُ</span> (I did) · <span class="ar">ـتْ</span> (she did)</td><td><span class="ar">قَدْ نَجَحَ · سَيَنْجَحُ · نَجَحْتُ · نَجَحَتْ</span></td></tr>
        <tr><td><b>particle</b> <span class="ar">حرف</span></td><td>none of these</td><td><span class="ar">فِي · هَلْ · لَمْ · وَ</span></td></tr></table>
        <p>So: can you put <span class="ar">الـ</span> on it? It is a noun. Can you say <span class="ar">قَدْ</span> before it or add <span class="ar">ـتُ</span>? It is a verb. Neither? A particle.</p>`,
      widget: "sorter",
      wd: { title: "Sort by the signs", sub: "Each word carries a sign. Which kind is it?", bins: [["اسم", "noun"], ["فعل", "verb"], ["حرف", "particle"]],
        items: [["كِتَابٌ", 0, "Tanwīn → noun."], ["قَدْ حَضَرَ", 1, "قد before it → verb."], ["الوَرْدَةُ", 0, "ال → noun."], ["لَعِبْتُ", 1, "ـتُ (I) → verb."], ["سَيُسَافِرُ", 1, "سـ (will) → verb."], ["عَنْ", 2, "No sign fits → particle."], ["جَلَسَتْ", 1, "ـتْ (she) → verb."], ["يَا خَالِدُ", 0, "يا before it → noun."], ["لَمْ", 2, "Particle (not)."], ["فِي السُّوقِ", 0, "السوق comes after a preposition → noun."]] },
      tip: `Beware of words that look alike: <span class="ar">عَلَى</span> (on) is a particle, but <span class="ar">عَلِيٌّ</span> (Ali) is a noun with tanwīn; <span class="ar">مِنْ</span> (from) is a particle, but <span class="ar">مَنْ</span> (who) is counted as a noun. Ḥarakāt matter!`,
      check: [["نَجَحْتُ is a verb because…", ["it takes ـتُ (I)", "it has a fatḥa"], 0, "Only verbs take the subject ending ـتُ."], ["Which word can take الـ?", ["قَمَرٌ → القَمَرُ", "ذَهَبَ", "هَلْ"], 0, "Only nouns take ال."]] }
  ],

  scenes: [
    { h: "فِي المَزْرَعَةِ", en: "On the farm", pic: "🌾", lines: [
      ["", "يَسْكُنُ الفَلَّاحُ فِي بَيْتٍ صَغِيرٍ.", "The farmer lives in a small house."],
      ["", "يَحْصِدُ الفَلَّاحُ القَمْحَ فِي الصَّيْفِ.", "The farmer harvests the wheat in summer."],
      ["", "تَأْكُلُ الشَّاةُ الشَّعِيرَ.", "The ewe eats the barley."],
      ["", "رَكِبَ إِبْرَاهِيمُ الحِصَانَ إِلَى الحَقْلِ.", "Ibrahim rode the horse to the field."],
      ["", "يُدَاعِبُ إِسْمَاعِيلُ القِطَّ.", "Ismail plays with the cat."],
      ["", "يَسْطَعُ النُّورُ فِي الحُجْرَةِ.", "The light shines in the room."],
      ["", "سَمِعَ الأَوْلَادُ نَصِيحَةَ أَبِيهِمْ.", "The children heard their father's advice."]],
      note: "Find in each line a noun, a verb and (where there is one) a particle. في and إلى are particles; everything that names a person, animal, plant, thing or idea is a noun." },
    { h: "مَا نَوْعُ الكَلِمَةِ؟", en: "What kind of word is it?", pic: "🧩", lines: [
      ["سَلْمَى", "يَا أَحْمَدُ، هَلْ «السَّفَرُ» فِعْلٌ؟", "Ahmad, is “travel” a verb?"],
      ["أَحْمَدُ", "لَا، السَّفَرُ اسْمٌ، لِأَنَّهُ يَقْبَلُ «الـ».", "No, travel is a noun, because it takes al-."],
      ["سَلْمَى", "وَ«سَافَرَ»؟", "And “he travelled”?"],
      ["أَحْمَدُ", "سَافَرَ فِعْلٌ، نَقُولُ: قَدْ سَافَرَ، وَسَافَرْتُ.", "Sāfara is a verb: we say “he has travelled” and “I travelled”."],
      ["سَلْمَى", "وَ«فِي»؟", "And “in”?"],
      ["أَحْمَدُ", "فِي حَرْفٌ، لَا يَظْهَرُ مَعْنَاهُ إِلَّا مَعَ غَيْرِهِ.", "Fī is a particle: its meaning only shows with another word."]],
      note: "Ahmad uses the signs: ال for nouns, قد and ـتُ for verbs." }
  ],

  vocab: [
    ["اسْمٌ", "noun; name", "n.m", "", "grammar term", "أَسْمَاءٌ", "Grammar words"],
    ["فِعْلٌ", "verb; action", "n.m", "", "grammar term", "أَفْعَالٌ", "Grammar words"],
    ["حَرْفٌ", "particle; letter", "n.m", "", "grammar term", "حُرُوفٌ", "Grammar words"],
    ["إِنْسَانٌ", "human being", "n.m", "🧍", "", "نَاسٌ", "Grammar words"],
    ["حَيَوَانٌ", "animal", "n.m", "🐾", "", "حَيَوَانَاتٌ", "Grammar words"],
    ["نَبَاتٌ", "plant", "n.m", "🌱", "", "نَبَاتَاتٌ", "Grammar words"],
    ["جَمَادٌ", "lifeless thing", "n.m", "🪨", "", "جَمَادَاتٌ", "Grammar words"],
    ["فَلَّاحٌ", "farmer, peasant", "n.m", "👨‍🌾", "", "فَلَّاحُونَ", "The farm"],
    ["حِصَانٌ", "horse", "n.m", "🐎", "", "أَحْصِنَةٌ", "The farm"],
    ["قِطٌّ", "cat", "n.m", "🐈", "", "قِطَطٌ", "The farm"],
    ["شَاةٌ", "ewe, sheep", "n.f", "🐑", "", "شِيَاهٌ", "The farm"],
    ["قَمْحٌ", "wheat", "n.m", "🌾", "", "", "The farm"],
    ["شَعِيرٌ", "barley", "n.m", "🌾", "", "", "The farm"],
    ["حَقْلٌ", "field", "n.m", "🟩", "", "حُقُولٌ", "The farm"],
    ["سَفِينَةٌ", "ship", "n.f", "🚢", "", "سُفُنٌ", "Things"],
    ["حُجْرَةٌ", "room", "n.f", "🚪", "", "حُجُرَاتٌ، حُجَرٌ", "Things"],
    ["نُورٌ", "light", "n.m", "💡", "", "أَنْوَارٌ", "Things"],
    ["حَجَرٌ", "stone", "n.m", "🪨", "", "أَحْجَارٌ", "Things"],
    ["نَصِيحَةٌ", "advice", "n.f", "🗣️", "", "نَصَائِحُ", "Ideas"],
    ["سَفَرٌ", "travel, journey", "n.m", "🧳", "", "أَسْفَارٌ", "Ideas"],
    ["صِدْقٌ", "truthfulness", "n.m", "🤝", "", "", "Ideas"],
    ["رَكِبَ", "to ride, get on", "v.", "", "present: يَرْكَبُ", "", "Verbs"],
    ["سَمِعَ", "to hear", "v.", "", "present: يَسْمَعُ", "", "Verbs"],
    ["دَاعَبَ", "to play with, tease", "v.", "", "present: يُدَاعِبُ", "", "Verbs"],
    ["سَطَعَ", "to shine", "v.", "", "present: يَسْطَعُ", "", "Verbs"],
    ["حَصَدَ", "to harvest", "v.", "", "present: يَحْصِدُ", "", "Verbs"],
    ["جَرَى", "to run, flow, sail", "v.", "", "present: يَجْرِي", "", "Verbs"],
    ["أَكَلَ", "to eat", "v.", "", "present: يَأْكُلُ", "", "Verbs"],
    ["سَافَرَ", "to travel", "v.", "", "present: يُسَافِرُ", "", "Verbs"],
    ["أَحَبَّ", "to love, like", "v.", "", "present: يُحِبُّ", "", "Verbs"],
    ["قَدْ", "(with past) already, indeed", "part.", "", "a sign of the verb", "", "Particles"],
    ["هَلْ", "(yes/no question)", "part.", "", "", "", "Particles"]
  ],

  exercises: [
    { k: "sort", t: "صَنِّفْ · Noun, verb or particle?", cats: ["اسم · noun", "فعل · verb", "حرف · particle"], items: [
      ["الحَدِيقَةُ", "0", "ال → noun"], ["يَلْعَبُ", "1", "action + present"], ["عَلَى", "2", "on — needs another word"], ["الصَّبْرُ", "0", "an idea → noun"], ["كَتَبَ", "1", "action + past"], ["هَلْ", "2", "question particle"], ["طَائِرَةٌ", "0", "tanwīn → noun"], ["سَيَنَامُ", "1", "سـ → verb"], ["إِلَى", "2", "to"], ["جَمِيلٌ", "0", "a describing word is a noun in Arabic"]] },
    { k: "irab", t: "مَا نَوْعُ الكَلِمَةِ المُلَوَّنَةِ؟ · What is the highlighted word?", en: "Choose the kind of the highlighted word in each sentence.", cats: ["اسم", "فعل", "حرف"], items: [
      ["[سَمِعْتُ] النَّصِيحَةَ.", "1", "ـتُ → verb"], ["سَمِعْتُ [النَّصِيحَةَ].", "0", "noun (an idea)"], ["تَجْرِي السَّفِينَةُ [عَلَى] المَاءِ.", "2", "particle"], ["[تَأْكُلُ] الشَّاةُ الشَّعِيرَ.", "1", "verb"], ["هَلْ تُحِبُّ [السَّفَرَ]؟", "0", "noun"], ["[هَلْ] تُحِبُّ السَّفَرَ؟", "2", "particle"], ["ذَهَبَ الوَلَدُ [إِلَى] المَدْرَسَةِ.", "2", "particle"], ["ذَهَبَ [الوَلَدُ] إِلَى المَدْرَسَةِ.", "0", "noun"]] },
    { k: "gap", t: "أَكْمِلْ بِفِعْلٍ · Complete with a verb", en: "Each sentence needs a verb. Pick from the bank.", bank: true, items: [
      ["___ الطِّفْلُ الحَلِيبَ.", "شَرِبَ"], ["___ الفَلَّاحُ القَمْحَ.", "يَحْصِدُ"], ["___ إِبْرَاهِيمُ الحِصَانَ.", "رَكِبَ"], ["___ الطَّائِرُ فِي السَّمَاءِ.", "يَطِيرُ"], ["___ الشَّاةُ الشَّعِيرَ.", "تَأْكُلُ"]] },
    { k: "gap", t: "أَكْمِلْ بِاسْمٍ · Complete with a noun", en: "Each sentence needs a noun. Pick from the bank.", bank: true, items: [
      ["يَسْطَعُ ___ فِي الحُجْرَةِ.", "النُّورُ"], ["تَجْرِي ___ عَلَى المَاءِ.", "السَّفِينَةُ"], ["يُدَاعِبُ الوَلَدُ ___ .", "القِطَّ"], ["سَافَرَ أَبِي إِلَى ___ .", "القَاهِرَةِ"], ["يَعِيشُ ___ فِي المَاءِ.", "السَّمَكُ"]] },
    { k: "mcq", t: "اِخْتَرْ · Signs", items: [
      ["Which word accepts ال (so it is a noun)?", ["قَمَرٌ", "يَكْتُبُ", "لَمْ"], 0, "القمر"],
      ["Which word can follow قَدْ (so it is a verb)?", ["وَصَلَ", "وُصُولٌ", "إِلَى"], 0, "قد وصل = he has arrived."],
      ["Which word can take ـتُ (I did)?", ["فَهِمَ", "فَهْمٌ", "فِي"], 0, "فهمتُ = I understood."],
      ["Which word takes no sign at all?", ["عَنْ", "عَيْنٌ", "عَرَفَ"], 0, "عن is a particle."],
      ["“Truthfulness” (الصِّدْقُ) is…", ["a noun naming an idea", "a verb", "a particle"], 0, "Ideas are nouns too."]] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["A word that names an idea, like النَّصِيحَةُ, is a noun.", true, ""],
      ["A verb shows an action and a time.", true, ""],
      ["فِي means something complete on its own.", false, "A particle's meaning shows only with another word."],
      ["Describing words like جَمِيلٌ are nouns in Arabic grammar.", true, "Arabic has three kinds of word only."],
      ["بِالقَلَمِ is one word.", false, "Two: the particle بِـ and the noun القلم."],
      ["سَيَكْتُبُ is a verb.", true, "The سـ of the future is a sign of the verb."]] }
  ],

  drills: [
    ["How many kinds of word are there in Arabic grammar?", ["three", "eight", "two"], 0, "اسم، فعل، حرف."],
    ["الحِصَانُ is…", ["a noun (an animal)", "a verb", "a particle"], 0, "It names an animal and takes ال."],
    ["يَحْصِدُ is…", ["a verb", "a noun", "a particle"], 0, "Action (harvesting) + present time."],
    ["مِنْ (from) is…", ["a particle", "a noun", "a verb"], 0, "Prepositions are particles."],
    ["Which is NOT a noun?", ["سَطَعَ", "النُّورُ", "الحُجْرَةُ"], 0, "سطع = shone: a verb."],
    ["Which is NOT a verb?", ["السَّفَرُ", "سَافَرَ", "يُسَافِرُ"], 0, "السفر names the action: a noun."],
    ["Tanwīn (ـٌ) is a sign of…", ["the noun", "the verb", "the particle"], 0, "كتابٌ."],
    ["The ending ـتْ in جَلَسَتْ (she sat) is a sign of…", ["the verb", "the noun"], 0, "تاء التأنيث الساكنة attaches to past verbs."],
    ["In وَالقَمَرُ, the وَ is…", ["a particle", "a noun", "part of the noun"], 0, "وَ = and, written joined to the next word."],
    ["Which group has a noun, a verb and a particle?", ["كَتَبَ · قَلَمٌ · فِي", "قَلَمٌ · كِتَابٌ · بَابٌ", "فِي · عَلَى · مِنْ"], 0, "كتب verb, قلم noun, في particle."],
    ["هَلْ changes a sentence into…", ["a yes/no question", "a past sentence", "a negative"], 0, "هل تحب السفر؟"],
    ["The noun الشَّعِيرُ names…", ["a plant", "a person", "an idea"], 0, "barley"]
  ],

  comp: [
    ["What does the farmer harvest?", ["wheat", "barley", "grapes"], 0, 0],
    ["What does the ewe eat?", ["barley", "wheat", "grass"], 0, 0],
    ["Where did Ibrahim ride the horse?", ["to the field", "to the house", "to the river"], 0, 0],
    ["Why is السفر a noun, according to Ahmad?", ["because it takes ال", "because it is long", "because it is a person"], 0, 1],
    ["What does Ahmad say about في?", ["its meaning only shows with another word", "it is a verb", "it takes tanwīn"], 0, 1]
  ],

  cheat: `<h3>أنواع الكلمة · The three kinds of word</h3>
    <table class="g"><tr><th></th><th>definition</th><th>signs</th><th>examples</th></tr>
    <tr><td><b class="ar">الاسم</b></td><td>names a person, animal, plant, thing or idea</td><td><span class="ar">الـ · ـٌ ـً ـٍ · حرف جر قبله · يا</span></td><td><span class="ar">الفَلَّاحُ، الحِصَانُ، القَمْحُ، السَّفِينَةُ، النَّصِيحَةُ</span></td></tr>
    <tr><td><b class="ar">الفعل</b></td><td>an action at a particular time</td><td><span class="ar">قَدْ · سَـ/سَوْفَ · ـتُ · ـتْ</span></td><td><span class="ar">رَكِبَ، يَحْصِدُ، اِلْعَبْ</span></td></tr>
    <tr><td><b class="ar">الحرف</b></td><td>meaning only with other words</td><td>none</td><td><span class="ar">فِي، عَلَى، مِنْ، إِلَى، عَنْ، هَلْ، وَ، لَمْ</span></td></tr></table>
    <p>Adjectives, pronouns, demonstratives and many adverbs are <b>nouns</b> in Arabic grammar.</p>`,
  mistakes: [
    ["السَّفَرُ فِعْلٌ", "السَّفَرُ اسْمٌ", "It names the action but has no time; it takes ال. The verb is سَافَرَ."],
    ["جَمِيلٌ صِفَةٌ وَلَيْسَ اسْمًا", "جَمِيلٌ اسْمٌ", "Describing words are nouns in Arabic grammar (later called نعت when they describe)."],
    ["بِالقَلَمِ كَلِمَةٌ وَاحِدَةٌ", "بِالقَلَمِ: حَرْفٌ + اسْمٌ", "One-letter particles (بـ، لـ، كـ، و، ف) are written joined but are separate words."]
  ],
  tips: [
    { t: "Colour your sentences", b: `Copy a sentence from the book and underline nouns in blue, verbs in red and particles in green — the colours used in this course. After a week you will sort words without thinking.` },
    { t: "Try the signs aloud", b: `Unsure about a word? Say it with <span class="ar">الـ</span>, then with <span class="ar">قَدْ</span> in front. Only one will sound right.` },
    { t: "Learn verbs in pairs", b: `Always learn a verb with its present tense: <span class="ar">رَكِبَ يَرْكَبُ</span>, <span class="ar">سَمِعَ يَسْمَعُ</span>, <span class="ar">حَصَدَ يَحْصِدُ</span>. The vowel in the middle of the present cannot be guessed, and you will need it in the next lesson.` }
  ]
});
