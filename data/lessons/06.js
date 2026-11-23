// الدرس ٦ — الموازنة بين الفاعل والمفعول به (PDF p. 36)
COURSE.add({
  n: 6, pages: [36, 36], method: true,
  summary: "Doer and object side by side: the doer did the action and is marfūʿ (ḍamma); the object received it and is manṣūb (fatḥa). Because the endings carry the meaning, Arabic can change the word order — and swapping two endings swaps who did what to whom.",
  objectives: [
    "compare the fāʿil and the mafʿūl bihi: meaning, ending, place",
    "read who did what from the endings, whatever the word order",
    "swap the doer and the object of a sentence correctly",
    "parse both in one sentence"
  ],

  lesson: [
    { id: "compare", t: "Two nouns, two jobs, two endings", ar: "الفاعل والمفعول به", pos: "case endings", pages: "36",
      b: `<p>Many verbal sentences contain two nouns after the verb. One of them <b>did</b> the action, the other <b>received</b> it. The book puts them side by side:</p>
        <table class="g"><tr><th></th><th>الفاعل · doer</th><th>المفعول به · object</th></tr>
        <tr><td>meaning</td><td>did the action</td><td>the action fell on it</td></tr>
        <tr><td>question</td><td><span class="ar">مَنْ فَعَلَ؟</span> who did it?</td><td><span class="ar">مَاذَا / مَنْ؟</span> what / whom?</td></tr>
        <tr><td>state</td><td><span class="ar">مَرْفُوع</span></td><td><span class="ar">مَنْصُوب</span></td></tr>
        <tr><td>sign</td><td class="end-u">ḍamma ـُ / ـٌ</td><td class="end-a">fatḥa ـَ / ـً</td></tr>
        <tr><td>example</td><td><span class="ar">أَكْرَمَ <b>الأُسْتَاذُ</b> التِّلْمِيذَ</span></td><td><span class="ar">أَكْرَمَ الأُسْتَاذُ <b>التِّلْمِيذَ</b></span></td></tr></table>`,
      widget: "parse",
      wd: { legend: { fil: ["verb", "فعل"], fail: ["doer · ـُ", "فاعل"], maf: ["object · ـَ", "مفعول به"] }, sents: [
        { en: "The teacher honoured the pupil.", w: [["أَكْرَمَ", "fil", "Verb."], ["الأُسْتَاذُ", "fail", "ḍamma: the teacher did the honouring."], ["التِّلْمِيذَ", "maf", "fatḥa: the pupil was honoured."]] },
        { en: "The pupil thanked the teacher.", w: [["شَكَرَ", "fil", "Verb."], ["التِّلْمِيذُ", "fail", "Now the pupil is the doer: ḍamma."], ["الأُسْتَاذَ", "maf", "Now the teacher receives the action: fatḥa."]] },
        { en: "The cat chased the mouse.", w: [["طَارَدَ", "fil", "Verb."], ["القِطُّ", "fail", "Doer."], ["الفَأْرَ", "maf", "Object."]] }
      ] },
      check: [["In شَكَرَ التِّلْمِيذُ الأُسْتَاذَ, who thanked whom?", ["the pupil thanked the teacher", "the teacher thanked the pupil"], 0, "التلميذُ has ḍamma: the doer.", false]] },

    { id: "order", t: "The endings, not the order, tell who did it", ar: "الإعراب يبيّن المعنى", pos: "sentence structure",
      b: `<p>In English, <i>the cat chased the mouse</i> and <i>the mouse chased the cat</i> differ only in word order. In Arabic the <b>endings</b> carry that information, so the object can even come first and the meaning does not change:</p>`,
      widget: "transform",
      wd: { title: "Order vs. endings", sets: [
        { base: ["طَارَدَ القِطُّ الفَأْرَ", "The cat chased the mouse."], baseLabel: "normal order", ops: [
          ["object first", "طَارَدَ [[الفَأْرَ]] [[القِطُّ]]", "The cat chased the mouse (stressing “the mouse”).", "The words moved, but the endings did not: القطُّ is still the doer, الفأرَ still the object."],
          ["swap the endings", "طَارَدَ القِطَّ الفَأْرُ", "The mouse chased the cat!", "Same order as the first sentence, but now الفأرُ has ḍamma: the mouse is chasing. Endings rule!"],
          ["swap places and endings", "طَارَدَ [[الفَأْرُ]] [[القِطَّ]]", "The mouse chased the cat.", "This is the normal way to say it: verb, doer, object."]] }
      ] },
      warn: `Because the ending alone can turn a sentence upside down, Arabic readers must <b>read endings carefully</b>, and writers must <b>vowel</b> any sentence that could be misread. In ordinary unvowelled text, writers usually keep the normal order (verb – doer – object) so the meaning is clear.`,
      tip: `When both nouns cannot show their ending (for example <span class="ar">مُوسَى</span> and <span class="ar">عِيسَى</span>, which end in alif), grammarians require the normal order: in <span class="ar">ضَرَبَ مُوسَى عِيسَى</span> the first is always the doer.`,
      check: [["أَكَلَ الخُبْزَ الوَلَدُ means…", ["The boy ate the bread.", "The bread ate the boy."], 0, "الولدُ has ḍamma: the doer, even though it comes last.", false]] },

    { id: "swap", t: "Swapping doer and object", ar: "تحويل الفاعل مفعولًا والمفعول فاعلًا", pos: "case endings", pages: "36",
      b: `<p>A favourite exercise of the book: <b>make the doer the object and the object the doer</b>. Three things change: the two nouns change places, both endings change, and — if the new doer is feminine — the verb changes too. Choose sensible sentences: a pupil can thank a teacher, but a door cannot open a boy!</p>`,
      widget: "transform",
      wd: { title: "Swap the roles", sets: [
        { base: ["سَاعَدَ الأَخُ الأُخْتَ", "The brother helped the sister."], baseLabel: "original", ops: [["swapped", "[[سَاعَدَتِ]] [[الأُخْتُ]] [[الأَخَ]]", "The sister helped the brother.", "The new doer الأخت is feminine, so the verb takes ـتْ."]] },
        { base: ["زَارَ الطَّبِيبُ المَرِيضَ", "The doctor visited the patient."], baseLabel: "original", ops: [["swapped", "زَارَ [[المَرِيضُ]] [[الطَّبِيبَ]]", "The patient visited the doctor."]] },
        { base: ["تُحِبُّ البِنْتُ الأُمَّ", "The girl loves the mother."], baseLabel: "original", ops: [["swapped", "تُحِبُّ [[الأُمُّ]] [[البِنْتَ]]", "The mother loves the girl.", "Both nouns are feminine, so the verb keeps تـ."]] }
      ] },
      check: [["Swap: نَادَى الأَبُ الابْنَ (the father called the son)", ["نَادَى الابْنُ الأَبَ", "نَادَى الابْنَ الأَبُ", "نَادَى الأَبَ الابْنَ"], 0, "Both the place and the endings change."]] },

    { id: "parse", t: "Parsing both", ar: "إعراب الفاعل والمفعول به", pos: "case endings",
      b: `<p>The book's <span class="ar">تمرين في الإعراب</span> asks you to parse whole sentences. Here is a model; in the exercises you will do the same.</p>
        <div class="rule"><p><span class="ar">أَكْرَمَ الأُسْتَاذُ التِّلْمِيذَ.</span></p>
        <p><span class="ar">أَكْرَمَ: فِعْلٌ مَاضٍ.</span> — a past verb.</p>
        <p><span class="ar">الأُسْتَاذُ: فَاعِلٌ مَرْفُوعٌ، وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ.</span></p>
        <p><span class="ar">التِّلْمِيذَ: مَفْعُولٌ بِهِ مَنْصُوبٌ، وَعَلَامَةُ نَصْبِهِ الفَتْحَةُ.</span></p></div>
        <p>(In Part 2 you will add that the past verb is <span class="ar">مَبْنِيٌّ عَلَى الفَتْحِ</span> — “fixed on fatḥa”.)</p>`,
      check: [["Parse الفَأْرَ in طَارَدَ القِطُّ الفَأْرَ:", ["مفعول به منصوب وعلامة نصبه الفتحة", "فاعل مرفوع وعلامة رفعه الضمة"], 0, "Chased what? The mouse."]] }
  ],

  scenes: [
    { h: "القِطُّ وَالفَأْرُ", en: "The cat and the mouse", pic: "🐈", lines: [
      ["", "رَأَى القِطُّ فَأْرًا صَغِيرًا فِي المَطْبَخِ.", "The cat saw a little mouse in the kitchen."],
      ["", "طَارَدَ القِطُّ الفَأْرَ.", "The cat chased the mouse."],
      ["", "دَخَلَ الفَأْرُ جُحْرًا ضَيِّقًا.", "The mouse went into a narrow hole."],
      ["", "انْتَظَرَ القِطُّ الفَأْرَ طَوِيلًا.", "The cat waited a long time for the mouse."],
      ["", "ثُمَّ نَامَ القِطُّ، فَخَرَجَ الفَأْرُ، وَأَكَلَ الجُبْنَ!", "Then the cat fell asleep, so the mouse came out and ate the cheese!"],
      ["", "أَيْقَظَ صَوْتُ الطَّبَقِ القِطَّ، فَهَرَبَ الفَأْرُ.", "The noise of the plate woke the cat, and the mouse ran away."]],
      note: "Follow القطّ and الفأر: sometimes doer (ـُ), sometimes object (ـَ). In the last line the doer is صوتُ (the sound), and القطَّ is the object." },
    { h: "مَنْ سَاعَدَ مَنْ؟", en: "Who helped whom?", pic: "🤝", lines: [
      ["الأُمُّ", "مَنْ سَاعَدَ الجَدَّةَ يَا أَوْلَادُ؟", "Who helped grandmother, children?"],
      ["هِنْدٌ", "سَاعَدَتْ هِنْدٌ الجَدَّةَ!", "Hind helped grandmother!"],
      ["الأُمُّ", "وَمَاذَا فَعَلَ سَعِيدٌ؟", "And what did Said do?"],
      ["سَعِيدٌ", "حَمَلَ سَعِيدٌ الحَقِيبَةَ، وَفَتَحَ البَابَ.", "Said carried the bag and opened the door."],
      ["الأُمُّ", "شَكَرَتِ الجَدَّةُ الوَلَدَيْنِ.", "Grandmother thanked the two children."],
      ["هِنْدٌ", "وَنَحْنُ نَشْكُرُ الجَدَّةَ عَلَى الحَلْوَى!", "And we thank grandmother for the sweets!"]],
      note: "الجدّة is first the object (ساعدت هندٌ الجدّةَ), then the doer (شكرت الجدّةُ). The children speak about themselves in the third person, as Arab children often do in games." }
  ],

  vocab: [
    ["أَكْرَمَ", "to honour, treat generously", "v.", "", "يُكْرِمُ", "", "Verbs"],
    ["شَكَرَ", "to thank", "v.", "", "يَشْكُرُ", "", "Verbs"],
    ["طَارَدَ", "to chase", "v.", "", "يُطَارِدُ", "", "Verbs"],
    ["سَاعَدَ", "to help", "v.", "", "يُسَاعِدُ", "", "Verbs"],
    ["زَارَ", "to visit", "v.", "", "يَزُورُ", "", "Verbs"],
    ["نَادَى", "to call", "v.", "", "يُنَادِي", "", "Verbs"],
    ["اِنْتَظَرَ", "to wait for", "v.", "", "يَنْتَظِرُ", "", "Verbs"],
    ["هَرَبَ", "to run away, flee", "v.", "", "يَهْرُبُ", "", "Verbs"],
    ["دَخَلَ", "to enter", "v.", "", "يَدْخُلُ", "", "Verbs"],
    ["فَأْرٌ", "mouse, rat", "n.m", "🐭", "", "فِئْرَانٌ", "The house"],
    ["جُحْرٌ", "hole, burrow", "n.m", "🕳️", "", "جُحُورٌ", "The house"],
    ["مَطْبَخٌ", "kitchen", "n.m", "🍳", "", "مَطَابِخُ", "The house"],
    ["طَبَقٌ", "plate, dish", "n.m", "🍽️", "", "أَطْبَاقٌ", "The house"],
    ["حَقِيبَةٌ", "bag", "n.f", "👜", "", "حَقَائِبُ", "The house"],
    ["صَوْتٌ", "sound, voice", "n.m", "🔊", "", "أَصْوَاتٌ", "The house"],
    ["حَلْوَى", "sweets", "n.f", "🍬", "", "حَلْوَيَاتٌ", "The house"],
    ["أَخٌ", "brother", "n.m", "👦", "", "إِخْوَةٌ، إِخْوَانٌ", "Family"],
    ["أُخْتٌ", "sister", "n.f", "👧", "", "أَخَوَاتٌ", "Family"],
    ["أَبٌ", "father", "n.m", "👨", "", "آبَاءٌ", "Family"],
    ["أُمٌّ", "mother", "n.f", "👩", "", "أُمَّهَاتٌ", "Family"],
    ["ابْنٌ", "son", "n.m", "👦", "", "أَبْنَاءٌ", "Family"],
    ["جَدَّةٌ", "grandmother", "n.f", "👵", "", "جَدَّاتٌ", "Family"],
    ["مَرِيضٌ", "sick; a patient", "n.m", "🤒", "", "مَرْضَى", "Family"],
    ["ضَيِّقٌ", "narrow", "adj.", "", "f. ضَيِّقَةٌ", "", "Family"],
    ["طَوِيلًا", "for a long time", "adv.", "", "", "", "Family"]
  ],

  exercises: [
    { k: "irab", t: "فاعل أم مفعول به؟ · Doer or object?", cats: ["فاعل", "مفعول به"], items: [
      ["زَارَ [الطَّبِيبُ] المَرِيضَ.", "0", ""], ["زَارَ الطَّبِيبُ [المَرِيضَ].", "1", ""], ["زَارَ [المَرِيضَ] الطَّبِيبُ.", "1", "Fatḥa: object, even first."], ["أَكَلَ الخُبْزَ [الوَلَدُ].", "0", "ḍamma: doer, even last."], ["تُحِبُّ [الأُمُّ] البِنْتَ.", "0", ""], ["نَادَى الأَبُ [الابْنَ].", "1", ""]] },
    { k: "shakl", t: "اضْبِطْ · Vowel both nouns", items: [
      "شَكَرَ التِّلْمِيذ{ُ} الأُسْتَاذ{َ}", "طَارَدَ الكَلْب{ُ} القِطّ{َ}", "سَاعَدَتِ البِنْت{ُ} الأُمّ{َ}", "يَزُورُ الطَّبِيب{ُ} المَرِيض{َ}", "أَكْرَمَ الأَمِير{ُ} الشَّاعِر{َ}"] },
    { k: "mcq", t: "مَنْ فَعَلَ؟ · Who did it?", en: "Read the endings and choose the meaning.", items: [
      ["أَكْرَمَ الضَّيْفَ صَاحِبُ البَيْتِ.", ["The host honoured the guest.", "The guest honoured the host."], 0, "صاحبُ has ḍamma."], ["عَضَّ الكَلْبَ الوَلَدُ.", ["The boy bit the dog!", "The dog bit the boy."], 0, "الولدُ has ḍamma: the boy did the biting."], ["سَبَقَ الأَرْنَبَ السُّلَحْفَاةُ.", ["The tortoise beat the hare.", "The hare beat the tortoise."], 0, "السلحفاةُ has ḍamma."], ["نَادَتِ الأُمُّ البِنْتَ.", ["The mother called the girl.", "The girl called the mother."], 0, ""]] },
    { k: "tr", t: "اِجْعَلِ الفَاعِلَ مَفْعُولًا وَالمَفْعُولَ فَاعِلًا · Swap the roles", en: "Rewrite each sentence so the object becomes the doer and the doer the object (verb first). Ḥarakāt optional, but say them aloud.", items: [
      ["سَاعَدَ الأَخُ الأُخْتَ.", "ساعدت الأخت الأخ|سَاعَدَتِ الأُخْتُ الأَخَ"], ["زَارَ الطَّبِيبُ المَرِيضَ.", "زار المريض الطبيب|زَارَ المَرِيضُ الطَّبِيبَ"], ["شَكَرَ التِّلْمِيذُ الأُسْتَاذَ.", "شكر الأستاذ التلميذ|شَكَرَ الأُسْتَاذُ التِّلْمِيذَ"], ["نَادَى الأَبُ الابْنَ.", "نادى الابن الأب|نَادَى الابْنُ الأَبَ"]] },
    { k: "words", t: "رَتِّبْ · Build the sentence", items: ["طَارَدَ القِطُّ الفَأْرَ", "شَكَرَتِ الجَدَّةُ الوَلَدَيْنِ", "سَاعَدَتْ هِنْدٌ الجَدَّةَ"] },
    { k: "tf", t: "صواب أم خطأ؟ · Review", items: [
      ["In Arabic, the endings show who did the action.", true, ""], ["An object that comes before the doer becomes the doer.", false, "Its fatḥa keeps it the object."], ["سَاعَدَ الأُخْتُ الأَخَ is correct.", false, "Feminine doer: سَاعَدَتِ الأُخْتُ."], ["The doer answers “who did it?”.", true, ""], ["The object is marked by ḍamma.", false, "By fatḥa."]] }
  ],

  drills: [
    ["Doer: ḍamma; object: …", ["fatḥa", "kasra", "sukūn"], 0, ""],
    ["In أَكَلَ الخُبْزَ الوَلَدُ, who ate?", ["the boy", "the bread"], 0, "الولدُ: ḍamma."],
    ["Swap the roles: أَطْعَمَ الوَلَدُ القِطَّ", ["أَطْعَمَ القِطُّ الوَلَدَ", "أَطْعَمَ القِطَّ الوَلَدُ"], 0, "Place and ending both change."],
    ["Swap: سَاعَدَ سَعِيدٌ هِنْدًا", ["سَاعَدَتْ هِنْدٌ سَعِيدًا", "سَاعَدَ هِنْدٌ سَعِيدًا"], 0, "Feminine doer → سَاعَدَتْ."],
    ["Which shows the doer?", ["الأُسْتَاذُ", "الأُسْتَاذَ", "الأُسْتَاذِ"], 0, "ḍamma."],
    ["Which shows the object?", ["المَرِيضَ", "المَرِيضُ", "المَرِيضِ"], 0, "fatḥa."],
    ["Can the object come before the doer?", ["yes, its fatḥa keeps its job", "no, never"], 0, "طَارَدَ الفَأْرَ القِطُّ."],
    ["Parse الأُسْتَاذُ in أَكْرَمَ الأُسْتَاذُ التِّلْمِيذَ:", ["فاعل مرفوع وعلامة رفعه الضمة", "مفعول به منصوب"], 0, ""],
    ["Correct vowelling of “The dog chased the cat”:", ["طَارَدَ الكَلْبُ القِطَّ", "طَارَدَ الكَلْبَ القِطُّ"], 0, "The second one means the cat chased the dog."],
    ["Which question finds the object?", ["مَاذَا؟ / مَنْ؟ after verb + doer", "مَنْ فَعَلَ؟"], 0, ""]
  ],

  comp: [
    ["Where did the cat see the mouse?", ["in the kitchen", "in the garden", "in the hole"], 0, 0],
    ["What did the mouse eat?", ["the cheese", "the bread", "nothing"], 0, 0],
    ["What woke the cat?", ["the noise of the plate", "the mouse", "the mother"], 0, 0],
    ["Who helped grandmother?", ["Hind", "Said", "Mother"], 0, 1],
    ["What did Said do?", ["carried the bag and opened the door", "cooked", "slept"], 0, 1]
  ],

  cheat: `<h3>الموازنة بين الفاعل والمفعول به</h3>
    <table class="g"><tr><th></th><th>الفاعل</th><th>المفعول به</th></tr><tr><td>did / received</td><td>did the action</td><td>received the action</td></tr><tr><td>state · sign</td><td><span class="ar">مرفوع</span> · ـُ ـٌ</td><td><span class="ar">منصوب</span> · ـَ ـً</td></tr><tr><td>question</td><td><span class="ar">مَنْ فَعَلَ؟</span></td><td><span class="ar">مَاذَا؟ مَنْ؟</span></td></tr></table>
    <p>The <b>ending</b> decides, not the place: <span class="ar">طَارَدَ القِطُّ الفَأْرَ = طَارَدَ الفَأْرَ القِطُّ</span>.</p>
    <p>Swapping roles: move the nouns, swap the endings, fix the verb's gender.</p>`,
  mistakes: [
    ["طَارَدَ الفَأْرَ القِطَّ", "طَارَدَ الفَأْرَ القِطُّ", "One of the two must be the doer with ḍamma."],
    ["سَاعَدَ الأُخْتُ الأَخَ", "سَاعَدَتِ الأُخْتُ الأَخَ", "The verb agrees with its feminine doer."],
    ["ضَرَبَ عِيسَى مُوسَى (meaning: Musa hit Isa)", "ضَرَبَ مُوسَى عِيسَى", "When endings can't show, the first noun is the doer."]
  ],
  tips: [
    { t: "Play “who did it?”", b: `Read sentences from the scenes, then swap the endings aloud and say the new meaning in English. It trains your ear to hear meaning in the last vowel.` },
    { t: "Watch the feminine verb when swapping", b: `Most mistakes in this exercise come from forgetting to change the verb: <span class="ar">سَاعَدَ</span> → <span class="ar">سَاعَدَتْ</span> when a feminine noun becomes the doer.` }
  ]
});
