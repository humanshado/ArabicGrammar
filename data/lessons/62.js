// الدرس ٦٢ — همزتا الوصل والقطع (PDF pp. 309–313)
COURSE.add({
  n: 62, pages: [309, 313], method: true,
  summary: "There are two kinds of initial hamza. The joining hamza (همزة الوصل) is only pronounced at the start of speech and is written as a bare alif ا: اِسْتَمِعْ، اِجْتِمَاع، الـ، اسْم، ابْن. The cutting hamza (همزة القطع) is always pronounced and written أ or إ: أَكْرَمَ، إِكْرَام، أَخَذَ، إِنَّ.",
  objectives: ["tell joining from cutting hamza", "write the cutting hamza with its seat أ / إ", "know which verb forms and nouns begin with a joining hamza"],
  lesson: [
    { id: "two", t: "Joining and cutting", ar: "همزة الوصل وهمزة القطع", pos: "spelling", pages: "309–312",
      b: `<p>Say <span class="ar">اِسْتَمِعْ</span> alone: <i>istamiʿ</i>. Now say <span class="ar">ثُمَّ اسْتَمِعْ</span>: <i>thumma-stamiʿ</i> — the hamza disappears. That's a <b>joining</b> hamza. Say <span class="ar">ثُمَّ أَكْرِمْ</span>: <i>thumma ʾakrim</i> — the hamza stays. That's a <b>cutting</b> hamza.</p>
        <table class="g"><tr><th>joining (ا)</th><th>cutting (أ / إ)</th></tr>
        <tr><td>past, command and maṣdar of 5- and 6-letter verbs: <span class="ar">اِنْطَلَقَ، اِنْطَلِقْ، اِنْطِلَاق · اِسْتَخْرَجَ، اِسْتِخْرَاج</span></td><td>past, command and maṣdar of 4-letter <span class="ar">أَفْعَلَ</span>: <span class="ar">أَكْرَمَ، أَكْرِمْ، إِكْرَام</span></td></tr>
        <tr><td>command of 3-letter verbs: <span class="ar">اُكْتُبْ، اِجْلِسْ</span></td><td>hamza that is a root letter: <span class="ar">أَخَذَ، أَمَرَ، أَكَلَ</span></td></tr>
        <tr><td><span class="ar">الـ</span> and the nouns <span class="ar">اِسْم، اِبْن، اِبْنَة، اِمْرَأَة، اِثْنَان</span></td><td>all other nouns and particles: <span class="ar">أَب، أُمّ، إِنَّ، أَوْ</span></td></tr></table>`,
      rule: `<p><span class="ar">هَمْزَةُ الوَصْلِ: هَمْزَةٌ يُنْطَقُ بِهَا فِي ابْتِدَاءِ الكَلَامِ، وَتَسْقُطُ فِي وَسَطِهِ، وَتُكْتَبُ أَلِفًا بِلَا هَمْزَةٍ. وَهَمْزَةُ القَطْعِ: هَمْزَةٌ يُنْطَقُ بِهَا فِي الابْتِدَاءِ وَالوَسَطِ، وَتُكْتَبُ بِصُورَتِهَا.</span></p>`,
      widget: "sorter",
      wd: { title: "Joining or cutting?", bins: [["همزة وصل", "ا"], ["همزة قطع", "أ / إ"]], items: [["اسْتَمَعَ", 0, ""], ["أَكْرَمَ", 1, ""], ["إِكْرَام", 1, ""], ["اجْتِمَاع", 0, ""], ["اُكْتُبْ", 0, ""], ["أَخَذَ", 1, ""], ["ابْن", 0, ""], ["أُمّ", 1, ""], ["انْطِلَاق", 0, ""], ["إِنَّ", 1, ""]] },
      check: [["Maṣdar of أَرْسَلَ:", ["إِرْسَال", "ارْسَال"], 0, "Four-letter أفعل → cutting.", "إِرْسَال"]] }
  ],
  scenes: [{ h: "انْطِلَاقُ القِطَارِ", en: "The train sets off", pic: "🚆", lines: [["", "اِنْطَلَقَ القِطَارُ مِنَ المَحَطَّةِ.", "The train set off from the station."], ["", "أَخْرَجَ المُسَافِرُ تَذْكِرَتَهُ، وَاسْتَمَعَ إِلَى الإِعْلَانِ.", "The traveller took out his ticket and listened to the announcement."], ["", "ثُمَّ اسْتَرَاحَ، وَأَغْمَضَ عَيْنَيْهِ.", "Then he relaxed and closed his eyes."]]}],
  vocab: [["هَمْزَةُ وَصْلٍ", "joining hamza", "n.f", "", "", "", "Grammar"], ["هَمْزَةُ قَطْعٍ", "cutting hamza", "n.f", "", "", "", "Grammar"], ["اِنْطَلَقَ", "to set off", "v.", "", "يَنْطَلِقُ", "", "Words"], ["أَرْسَلَ", "to send", "v.", "", "يُرْسِلُ · إِرْسَال", "", "Words"], ["أَغْمَضَ", "to close (eyes)", "v.", "", "يُغْمِضُ", "", "Words"], ["تَذْكِرَةٌ", "ticket", "n.f", "🎫", "", "تَذَاكِرُ", "Words"], ["إِعْلَانٌ", "announcement", "n.m", "📢", "", "", "Words"], ["امْرَأَةٌ", "woman", "n.f", "👩", "", "نِسَاءٌ", "Words"]],
  exercises: [
    { k: "mcq", t: "اُكْتُبِ الهَمْزَةَ", items: [["(ا/أ)ستخدام", ["اسْتِخْدَام", "أسْتِخْدَام"], 0, ""], ["(ا/إ)حسان", ["إِحْسَان", "احْسَان"], 0, ""], ["(ا/أ)جلس", ["اِجْلِسْ", "أَجْلِسْ (command)"], 0, ""], ["(ا/أ)رسل", ["أَرْسَلَ", "ارْسَلَ"], 0, ""]] },
    { k: "tf", t: "صواب أم خطأ؟", items: [["The hamza of الـ is a joining hamza.", true, ""], ["The hamza of أَكْرَمَ disappears inside a sentence.", false, ""]] }
  ],
  drills: [["Joining hamza is written…", ["ا", "أ"], 0, ""], ["Maṣdar of أَحْسَنَ:", ["إِحْسَان", "احْسَان"], 0, ""], ["Command of كَتَبَ starts with…", ["joining hamza", "cutting hamza"], 0, ""]],
  comp: [["What did the traveller take out?", ["his ticket", "his phone", "a book"], 0, 0]],
  cheat: `<h3>همزتا الوصل والقطع</h3><p>Joining (ا): <span class="ar">الـ، اسم، ابن، امرأة، اثنان؛ أمر الثلاثي؛ ماضي وأمر ومصدر الخماسي والسداسي</span>. Cutting (أ/إ): everything else, including <span class="ar">أَفْعَلَ، إِفْعَال</span>.</p>`,
  mistakes: [["أسْتَمَعَ", "اسْتَمَعَ", "Joining hamza: bare alif."], ["اكْرَام", "إِكْرَام", "Cutting hamza: written."]],
  tips: [{ t: "Listen for it", b: `Read sentences like <span class="ar">وَاسْتَمَعَ</span> and <span class="ar">وَأَكْرَمَ</span> aloud — the first glides, the second stops.` }]
});
