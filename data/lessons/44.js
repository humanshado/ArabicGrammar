// الدرس ٤٤ — الضمير: المنفصل والمتصل والمستتر (PDF pp. 202–216)
COURSE.add({
  n: 44, pages: [202, 216], method: true,
  summary: "Pronouns (الضمائر) stand for the speaker, the listener or someone absent. They are fixed (mabnī) and come in three kinds: separate (منفصل: أَنَا، هُوَ، إِيَّاكَ), attached (متصل: كَتَبْتُ، كِتَابُهُ، رَآنِي) and hidden (مستتر: the “you” in اُكْتُبْ, the “he” in يَكْتُبُ).",
  objectives: ["use the separate subject pronouns أَنَا … هُنَّ", "use separate object pronouns إِيَّايَ … إِيَّاهُنَّ", "use attached pronouns on verbs, nouns and prepositions", "recognise hidden pronouns", "parse a pronoun by its position"],

  lesson: [
    { id: "persons", t: "Speaker, listener, absent", ar: "المتكلم والمخاطب والغائب", pos: "parts of speech", pages: "202–203",
      b: `<p>A pronoun is a fixed noun that points to the <b>speaker</b> (<span class="ar">المُتَكَلِّم</span>), the <b>person addressed</b> (<span class="ar">المُخَاطَب</span>) or an <b>absent</b> person (<span class="ar">الغَائِب</span>).</p>`,
      widget: "table",
      wd: { title: "Separate subject pronouns (ضمائر الرفع المنفصلة)", head: ["", "singular", "dual", "plural"], rows: [
        ["speaker", "أَنَا", "نَحْنُ", "نَحْنُ"], ["addressed (m)", "أَنْتَ", "أَنْتُمَا", "أَنْتُمْ"], ["addressed (f)", "أَنْتِ", "أَنْتُمَا", "أَنْتُنَّ"], ["absent (m)", "هُوَ", "هُمَا", "هُمْ"], ["absent (f)", "هِيَ", "هُمَا", "هُنَّ"]] },
      rule: `<p><span class="ar">الضَّمِيرُ: اسْمٌ يَدُلُّ عَلَى مُتَكَلِّمٍ أَوْ مُخَاطَبٍ أَوْ غَائِبٍ. وَهُوَ ثَلَاثَةُ أَنْوَاعٍ: مُنْفَصِلٌ، وَمُتَّصِلٌ، وَمُسْتَتِرٌ. وَالضَّمَائِرُ كُلُّهَا مَبْنِيَّةٌ.</span></p>` },

    { id: "separate", t: "Separate pronouns: subject and object", ar: "الضمير المنفصل", pos: "parts of speech", pages: "204–207",
      b: `<p>Separate pronouns stand alone as words. <b>Rafʿ</b> ones (<span class="ar">أَنَا، أَنْتَ، هُوَ…</span>) are usually the mubtadaʾ: <span class="ar">أَنَا طَالِبٌ</span>. <b>Naṣb</b> ones are built on <span class="ar">إِيَّا</span>: <span class="ar">إِيَّايَ، إِيَّاكَ، إِيَّاهُ، إِيَّاهَا، إِيَّانَا، إِيَّاكُمْ، إِيَّاهُمْ</span> — used when the object comes first for emphasis: <span class="ar">إِيَّاكَ نَعْبُدُ</span> (You alone we worship).</p>`,
      check: [["“She is a doctor”:", ["هِيَ طَبِيبَةٌ", "هُوَ طَبِيبَةٌ"], 0, "", "هِيَ طَبِيبَةٌ"]] },

    { id: "attached", t: "Attached pronouns", ar: "الضمير المتصل", pos: "parts of speech", pages: "208–213",
      b: `<p>Attached pronouns are joined to a verb, noun or particle:</p>
        <table class="g"><tr><th>attached to…</th><th>job</th><th>examples</th></tr>
        <tr><td>a verb, as subject</td><td>rafʿ</td><td><span class="ar">كَتَبْ<b>تُ</b>، كَتَبْ<b>نَا</b>، كَتَبُ<b>وا</b>، تَكْتُبِ<b>ي</b>نَ</span></td></tr>
        <tr><td>a verb, as object</td><td>naṣb</td><td><span class="ar">رَآ<b>نِي</b>، رَأَيْتُ<b>هُ</b>، أَكْرَمَ<b>كَ</b></span></td></tr>
        <tr><td>a noun (possessor)</td><td>jarr (muḍāf ilayhi)</td><td><span class="ar">كِتَابُ<b>هُ</b>، بَيْتُ<b>نَا</b>، قَلَمُ<b>كِ</b></span></td></tr>
        <tr><td>a preposition</td><td>jarr</td><td><span class="ar">لَ<b>هُ</b>، مِنْ<b>هَا</b>، عَلَيْ<b>كُمْ</b></span></td></tr></table>
        <p>“Me” on a verb is <span class="ar">ـنِي</span> (with the “nūn of protection”): <span class="ar">سَاعَدَنِي</span>; “my” on a noun is <span class="ar">ـِي</span>: <span class="ar">كِتَابِي</span>.</p>`,
      widget: "table",
      wd: { title: "Attached object / possessive pronouns", head: ["", "on a noun (my, your…)", "on a verb (me, you…)"], rows: [
        ["I", "كِتَابِ[[ي]]", "سَاعَدَ[[نِي]]"], ["you (m)", "كِتَابُ[[كَ]]", "سَاعَدَ[[كَ]]"], ["you (f)", "كِتَابُ[[كِ]]", "سَاعَدَ[[كِ]]"], ["he", "كِتَابُ[[هُ]]", "سَاعَدَ[[هُ]]"], ["she", "كِتَابُ[[هَا]]", "سَاعَدَ[[هَا]]"], ["we", "كِتَابُ[[نَا]]", "سَاعَدَ[[نَا]]"], ["you (pl)", "كِتَابُ[[كُمْ]]", "سَاعَدَ[[كُمْ]]"], ["they (m)", "كِتَابُ[[هُمْ]]", "سَاعَدَ[[هُمْ]]"]] },
      check: [["“He helped me”:", ["سَاعَدَنِي", "سَاعَدَي"], 0, "", "سَاعَدَنِي"]] },

    { id: "hidden", t: "Hidden pronouns", ar: "الضمير المستتر", pos: "parts of speech", pages: "214–216",
      b: `<p>Some doers are neither written nor attached, only understood: in <span class="ar">اُكْتُبْ</span> the doer is <i>you</i>; in <span class="ar">أَكْتُبُ</span> <i>I</i>; in <span class="ar">نَكْتُبُ</span> <i>we</i>; in <span class="ar">زَيْدٌ يَكْتُبُ</span> <i>he</i>. Grammarians say: <span class="ar">الفَاعِلُ ضَمِيرٌ مُسْتَتِرٌ تَقْدِيرُهُ أَنْتَ / أَنَا / نَحْنُ / هُوَ</span>.</p>`,
      check: [["Doer of نَلْعَبُ:", ["hidden: نَحْنُ", "none"], 0, "", false]] }
  ],
  scenes: [{ h: "مَنْ أَنْتَ؟", en: "Who are you?", pic: "🙋", lines: [["المُعَلِّمُ", "مَنْ أَنْتَ؟", "Who are you?"], ["الطَّالِبُ", "أَنَا سَمِيرٌ، طَالِبٌ جَدِيدٌ.", "I'm Samir, a new student."], ["المُعَلِّمُ", "أَهْلًا بِكَ. أَيْنَ كِتَابُكَ؟", "Welcome. Where's your book?"], ["الطَّالِبُ", "نَسِيتُهُ فِي البَيْتِ، وَلَكِنَّ صَدِيقِي أَعْطَانِي كِتَابَهُ.", "I forgot it at home, but my friend gave me his book."], ["المُعَلِّمُ", "هُوَ صَدِيقٌ كَرِيمٌ! اِشْكُرْهُ.", "He's a generous friend! Thank him."]], note: "Separate: أَنْتَ، أَنَا، هُوَ · attached: بِكَ، كِتَابُكَ، نَسِيتُهُ، صَدِيقِي، أَعْطَانِي، كِتَابَهُ، اشْكُرْهُ · hidden: the “you” in اشكرْ." }],
  vocab: [["ضَمِيرٌ", "pronoun", "n.m", "", "", "ضَمَائِرُ", "Grammar"], ["مُنْفَصِلٌ", "separate", "adj.", "", "", "", "Grammar"], ["مُتَّصِلٌ", "attached", "adj.", "", "", "", "Grammar"], ["مُسْتَتِرٌ", "hidden", "adj.", "", "", "", "Grammar"], ["مُتَكَلِّمٌ", "speaker (1st person)", "n.m", "🗣️", "", "", "Grammar"], ["مُخَاطَبٌ", "addressee (2nd person)", "n.m", "👂", "", "", "Grammar"], ["غَائِبٌ", "absent (3rd person)", "n.m", "🚶", "", "", "Grammar"], ["إِيَّاكَ", "you (object, emphatic)", "pron.", "", "", "", "Pronouns"], ["عَبَدَ", "to worship", "v.", "", "يَعْبُدُ", "", "Words"]],
  exercises: [
    { k: "sort", t: "صَنِّفِ الضَّمِيرَ", cats: ["منفصل", "متصل"], items: [["أَنْتُمْ", "0", ""], ["ـهُ in كِتَابُهُ", "1", ""], ["إِيَّاهُ", "0", ""], ["ـتُ in كَتَبْتُ", "1", ""], ["هُنَّ", "0", ""], ["ـنَا in بَيْتُنَا", "1", ""]] },
    { k: "irab", t: "مَحَلُّ الضَّمِيرِ · Its position", cats: ["في محل رفع", "في محل نصب", "في محل جر"], items: [["كَتَبْ[تُ] الدَّرْسَ.", "0", "doer"], ["رَأَيْتُ[هُ].", "1", "object"], ["كِتَابُ[كَ] جَدِيدٌ.", "2", "muḍāf ilayhi"], ["[هُوَ] مُسَافِرٌ.", "0", "mubtadaʾ"], ["سَلَّمْتُ عَلَيْ[هِ].", "2", ""], ["[إِيَّاكَ] نَعْبُدُ.", "1", ""]] },
    { k: "gap", t: "أَكْمِلْ بِضَمِيرٍ مُنْفَصِلٍ", items: [["___ طَبِيبٌ (he)", "هُوَ|هو"], ["___ طَالِبَاتٌ (they f.)", "هُنَّ|هن"], ["___ مُجْتَهِدُونَ (we)", "نَحْنُ|نحن"], ["___ مُعَلِّمَةٌ (you f.)", "أَنْتِ|انت"]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["Pronouns are mabnī.", true, ""], ["In اُكْتُبْ the doer is a hidden “you”.", true, ""], ["“My book” is كِتَابُنِي.", false, "كتابي"]] }
  ],
  drills: [["Kinds of pronoun:", ["منفصل، متصل، مستتر", "مفرد، مثنى، جمع"], 0, ""], ["“They (f)”:", ["هُنَّ", "هُمْ"], 0, ""], ["“You two”:", ["أَنْتُمَا", "أَنْتُمْ"], 0, ""], ["“He saw me”:", ["رَآنِي", "رَآي"], 0, ""], ["Hidden doer of أَكْتُبُ:", ["أنا", "هو"], 0, ""], ["إِيَّاهُ is…", ["separate, naṣb", "attached, jarr"], 0, ""]],
  comp: [["What did Samir forget?", ["his book", "his pen", "his bag"], 0, 0], ["Who gave Samir a book?", ["his friend", "the teacher", "nobody"], 0, 0]],
  cheat: `<h3>الضمير</h3><p>Separate rafʿ: <span class="ar">أَنَا نَحْنُ أَنْتَ أَنْتِ أَنْتُمَا أَنْتُمْ أَنْتُنَّ هُوَ هِيَ هُمَا هُمْ هُنَّ</span></p><p>Separate naṣb: <span class="ar">إِيَّايَ إِيَّانَا إِيَّاكَ إِيَّاكِ إِيَّاهُ إِيَّاهَا إِيَّاهُمْ</span></p><p>Attached: <span class="ar">ـتُ ـنَا ـوا (subject) · ـنِي ـكَ ـهُ ـهَا (object) · ـِي ـكَ ـهُ (possessive)</span> · Hidden: <span class="ar">اُكْتُبْ (أنت)، أَكْتُبُ (أنا)، نَكْتُبُ (نحن)</span></p>`,
  mistakes: [["سَاعَدَي", "سَاعَدَنِي", "“Me” on a verb: ـنِي."], ["هُوَ طَالِبَةٌ", "هِيَ طَالِبَةٌ", "Feminine pronoun."]],
  tips: [{ t: "Pronoun drill", b: `Take one noun and add every possessive: <span class="ar">بَيْتِي، بَيْتُكَ، بَيْتُكِ، بَيْتُهُ، بَيْتُهَا، بَيْتُنَا، بَيْتُكُمْ، بَيْتُهُمْ</span>. Then one verb with every object pronoun.` }]
});
