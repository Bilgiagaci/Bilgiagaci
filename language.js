const translations = {
    tr: {
        gameTitle: "Bilgi Ağacı",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Zorluk Seçin:",
        difficultyEasy: "Kolay",
        difficultyMedium: "Orta",
        difficultyHard: "Zor",
        classicMode: "Klasik Mod",
        timeAttackMode: "Zamana Karşı",
        survivalMode: "Hayatta Kalma",
        categoryChallengeMode: "Kategori Uzmanı",
        scoreboard: "Puan Tablosu",
        achievements: "Başarımlar",
        settings: "Ayarlar ⚙️",
        shop: "Mağaza 🛍️",
        tagline: "🍀 Bilgiye açılan kapınız... 🍀",

        "howToPlay": "Nasıl Oynanır?",
        "credits": "Künye",
        "privacyPolicy": "Gizlilik Politikası",
        
        selectCategory: "Kategori Seç",
        backToMenu: "Ana Menü",

        categoryLabel: "Kategori:",
        scoreLabel: "Puan:",
        correctLabel: "Doğru:",
        streakLabel: "Seri:",
        loadingQuestions: "Sorular yükleniyor...",
        nextQuestion: "Sonraki Soru",
        joker5050: "50/50",
        jokerTime: "Süre +",
        jokerSkip: "Pas",
        jokerHint: "İpucu",
        enterYourName: "Adınızı girin...",
        saveScore: "Puanı Kaydet",
        
        highScoresTitle: "🏆 Yüksek Puanlar 🏆",
        settingsTitle: "⚙️ Ayarlar ⚙️",
        achievementsTitle: "🏆 Başarımlar 🏆",
        shopTitle: "Mağaza",
        
        leaderboardTitle: "🏆 Puan Tablosu 🏆",
        daily: "Günlük",
        weekly: "Haftalık",
        monthly: "Aylık",
        alltime: "Tüm Zamanlar",
        
        language: "Dil:",
        backgroundMusic: "Arka Plan Müziği:",
        soundEffects: "Ses Efektleri:",
        mute: "Sessiz",
        saveSettings: "Ayarları Kaydet",
        dangerZone: "⚠️ Tehlikeli Alan ⚠️",
        dangerZoneDesc: "Bu işlemler geri alınamaz!",
        resetScores: "Tüm Puanları Sıfırla",
        resetAchievements: "Tüm Başarımları Sıfırla",

        currentGold: "Mevcut Altın:",
        jokers: "Jokerler",
        lives: "Can",
        joker5050_shop: "🌓 50/50 Jokeri",
        jokerTime_shop: "⏳ Süre Jokeri",
        jokerSkip_shop: "⏩ Pas Jokeri",
        jokerHint_shop: "💡 İpucu Jokeri",
        life_single_shop: "❤️ 1 Can",
        life_full_shop: "❤️❤️❤️ 5 Can (Tam Doldur)",
        buyButton: "Satın Al",

        errorJoker5050: "50/50 jokeri bu soru için kullanılamaz.",
        errorTimeJokerInTimeAttack: "Bu modda süre jokeri kullanılamaz.",
        hintUnavailable: "Bu soru için ipucu bulunmamaktadır.",
        scoreSaved: (name, score) => `${name}, puanınız (${score}) kaydedildi!`,
        settingsSaved: "Ayarlar kaydedildi!",
        allScoresReset: "Tüm yüksek puanlar başarıyla sıfırlandı.",
        noScoresToReset: "Sıfırlanacak bir puan kaydı bulunamadı.",
        allAchievementsReset: "Tüm başarımlar ve istatistikler sıfırlandı.",
        itemBought: (itemName) => `${itemName} satın aldın!`,
        notEnoughGold: "Yeterli altının yok!",
        notEnoughLives: "Yeterli canın yok! Mağazadan satın alabilirsin.",
        livesFull: "Canların tamamen dolduruldu!",
        confirmResetScores: "Emin misiniz? Tüm oyun modlarındaki BÜTÜN yüksek puanlarınız kalıcı olarak silinecek! Bu işlem geri alınamaz.",
        confirmResetAchievements: "Emin misiniz? Kazanılmış BÜTÜN başarımlarınız ve istatistikleriniz kalıcı olarak silinecek! Bu işlem geri alınamaz.",
        questionSkipped: "Soru pas geçildi!",
        correctAnswerLabel: "Doğru Cevap:",
        resetPlayerData: "Tüm Oyuncu Verisini Sıfırla",
        'confirmResetPlayerData': 'Tüm oyuncu verilerini (can, altın, jokerler, isim, puanlar VE TÜM BAŞARIMLAR) kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz!',
        'tooManyWrongAnswers': "4 yanlış cevap verdiniz. Oyun sona erdi!",

        gameEnded: "Oyun Bitti!",
        yourScore: "Puanınız:",
        totalCorrect: "Toplam Doğru:",
        questionsAnswered: (count) => `${count} soru bildiniz.`,
        timeUp: "Süre Doldu!",
        noScoresForThisMode: "Bu mod için henüz kayıtlı puan yok.",

        category_Tarih: "Tarih",
        category_Coğrafya: "Coğrafya",
        category_Bilim_ve_Teknoloji: "Bilim ve Teknoloji",
        category_Sanat: "Sanat",
        category_Edebiyat: "Edebiyat",
        category_Sinema_ve_Televizyon: "Sinema ve Televizyon",
        category_Müzik: "Müzik",
        category_Spor: "Spor",
        category_Matematik: "Matematik",
        category_Felsefe: "Felsefe",
        category_Mitoloji: "Mitoloji",
        category_Doğa_ve_Çevre: "Doğa ve Çevre",
        category_Genel_Kültür: "Genel Kültür",
        category_Güncel_Olaylar: "Güncel Olaylar",

        
        achievements_bilimTomurcugu_name: "Bilim Tomurcuğu",
        achievements_bilimTomurcugu_desc: "10 'Bilim ve Teknoloji' sorusunu doğru cevapla.",
        achievements_stratejist_name: "Stratejist",
        achievements_stratejist_desc: "Bir oyunda tüm joker türlerini kullan.",
        achievements_bilgelikSerisi_name: "Bilgelik Serisi",
        achievements_bilgelikSerisi_desc: "Art arda 5 soruya doğru cevap ver.",
        achievements_oyunAcemisi_name: "Oyun Acemisi",
        achievements_oyunAcemisi_desc: "İlk oyununu tamamla (herhangi bir mod).",
        achievements_merakliZihin_name: "Meraklı Zihin",
        achievements_merakliZihin_desc: "Toplam 50 soruyu doğru cevapla.",
        achievements_kategoriKasifi_name: "Kategori Kaşifi",
        achievements_kategoriKasifi_desc: "3 farklı kategoride en az 3'er soru bil.",
        achievements_klasikUzmani_name: "Klasik Uzmanı",
        achievements_klasikUzmani_desc: "Klasik Mod'da 200+ puan al.",
        achievements_hizTutkunu_name: "Hız Tutkunu",
        achievements_hizTutkunu_desc: "Zamana Karşı Mod'da 15+ doğru yap.",
        achievements_hayattaKalan_name: "Hayatta Kalan",
        achievements_hayattaKalan_desc: "Hayatta Kalma Mod'da 10+ soru bil.",
        achievements_uzunSeri_name: "Uzun Soluklu Seri",
        achievements_uzunSeri_desc: "Art arda 10 soruya doğru cevap ver.",
        achievements_jokerSever_name: "Joker Sever",
        achievements_jokerSever_desc: "Toplam 20 joker kullan (herhangi bir tür).",
        achievements_puanAvcisi_name: "Puan Avcısı",
        achievements_puanAvcisi_desc: "Tek bir Klasik oyunda 300+ puan yap.",
        achievements_bilgiKurdu_name: "Bilgi Kurdu",
        achievements_bilgiKurdu_desc: "Toplam 250 soruyu doğru cevapla.",
        achievements_kategoriUstasi_name: "Kategori Ustası",
        achievements_kategoriUstasi_desc: "Bir Kategori Uzmanı modunu %80+ başarıyla tamamla (min 10 soru).",
        achievements_zamanEfendisi_name: "Zaman Efendisi",
        achievements_zamanEfendisi_desc: "Zamana Karşı Mod'da 25+ doğru yap.",
        achievements_yenilmezRuh_name: "Yenilmez Ruh",
        achievements_yenilmezRuh_desc: "Hayatta Kalma Mod'da 20+ soru bil.",
        achievements_mukemmeliyetciOyuncu_name: "Mükemmeliyetçi",
        achievements_mukemmeliyetciOyuncu_desc: "Bir Klasik oyunu (min 10 soru) hatasız tamamla.",
        achievements_jokersizKahraman_name: "Jokersiz Kahraman",
        achievements_jokersizKahraman_desc: "Bir Klasik oyunu (min 10 soru, 150+ puan) hiç joker kullanmadan tamamla.",
        achievements_tarihciRuhu_name: "Tarihçi Ruhu",
        achievements_tarihciRuhu_desc: "20 Tarih sorusunu doğru bil.",
        achievements_cografyaMeraki_name: "Coğrafya Merakı",
        achievements_cografyaMeraki_desc: "20 Coğrafya sorusunu doğru bil.",
        achievements_sanatElestirmeni_name: "Sanat Eleştirmeni",
        achievements_sanatElestirmeni_desc: "15 Sanat sorusunu doğru bil.",
        achievements_edebiyatAsigi_name: "Edebiyat Aşığı",
        achievements_edebiyatAsigi_desc: "15 Edebiyat sorusunu doğru bil.",
        achievements_sporTutkunu_name: "Spor Tutkunu",
        achievements_sporTutkunu_desc: "15 Spor sorusunu doğru bil.",
        achievements_matematikCanavari_name: "Matematik Canavarı",
        achievements_matematikCanavari_desc: "10 Matematik sorusunu doğru bil.",
        achievements_filozofTohumu_name: "Filozof Tohumu",
        achievements_filozofTohumu_desc: "10 Felsefe sorusunu doğru bil.",
        achievements_mitolojiAvcisi_name: "Mitoloji Avcısı",
        achievements_mitolojiAvcisi_desc: "10 Mitoloji sorusunu doğru bil.",
        achievements_bilge_name: "Bilge",
        achievements_bilge_desc: "Toplamda 500 soruyu doğru cevapla.",
        achievements_ansiklopedi_name: "Ansiklopedi",
        achievements_ansiklopedi_desc: "Toplamda 1000 soruyu doğru cevapla.",
        achievements_ilkAlisveris_name: "İlk Alışveriş",
        achievements_ilkAlisveris_desc: "Mağazadan herhangi bir ürünü ilk kez satın al.",
        achievements_isAdami_name: "İş İnsanı",
        achievements_isAdami_desc: "Mağazada toplam 10,000 Altın harca.",
        achievements_adanmisOyuncu_name: "Adanmış Oyuncu",
        achievements_adanmisOyuncu_desc: "7 günlük ödül serisini tamamla ve büyük ödülü al.",
        achievements_maceraciRuh_name: "Maceracı Ruh",
        achievements_maceraciRuh_desc: "Oyunu Kolay, Orta ve Zor zorluk seviyelerinde en az birer kez bitir.",
        achievements_katkidaBulunan_name: "Katkıda Bulunan",
        achievements_katkidaBulunan_desc: "'Soru Gönder' özelliğini kullanarak oyunun gelişimine destek ol.",
        achievements_zorluZeka_name: "Zorlu Zeka",
        achievements_zorluZeka_desc: "Zor seviyede bir Klasik oyunu 250+ puanla bitir.",
        achievements_hizliVeMerakli_name: "Hızlı ve Meraklı",
        achievements_hizliVeMerakli_desc: "Bir soruyu 3 saniyeden az sürede doğru cevapla.",
        achievements_sonSaniyeci_name: "Son Saniyeci",
        achievements_sonSaniyeci_desc: "Bir soruyu son 1 saniyede doğru cevapla.",
        achievements_modGezgini_name: "Mod Gezgini",
        achievements_modGezgini_desc: "Tüm oyun modlarını (Klasik, Zamana Karşı, Hayatta Kalma, Kategori Uzmanı) en az bir kere oyna.",
        
        'tooManyWrongAnswers': "4 yanlış cevap verdiniz. Oyun sona erdi!",
        'wrongLabel': "Yanlış!",
        'İstatistikler': 'İstatistikler',

        profile: "Profil 👤",
        statistics: "İstatistikler",
        languageSettings: "Dil Ayarları",
        soundSettings: "Ses Ayarları",
        dataManagement: "Veri Yönetimi",
        watchAndEarn: "İzle Kazan",
        earnGold: "Altın Kazan",
        earnGoldDesc: "+50 Altın",
        watchBtn: "İZLE",
        earnLife: "Can Kazan",
        earnLifeDesc: "+1 Can",
        life_unlimited_1h: "Sınırsız Can (1 Saat)",
        life_unlimited_24h: "Sınırsız Can (24 Saat)",
        popular: "EN POPÜLER",
        selectAvatar: "Avatar Seç",
        rateUsTitle: "Oyunumuzu Sevdiniz mi?",
        rateUsDesc: "Desteğiniz bizim için çok değerli. Mağazada bize puan vererek daha fazla kişiye ulaşmamıza yardımcı olabilirsiniz!",
        rateGameBtn: "Oyuna Puan Ver",
        contributeTitle: "Gelişime Katkıda Bulun",
        contributeDesc: "Oyuna eklenmesini istediğiniz soruları bize göndererek Bilgi Ağacı'nın büyümesine yardımcı olabilirsiniz!",
        submitQuestionBtn: "Soru Gönder",
        feedbackTitle: "Öneri ve Sorun Bildir",
        feedbackDesc: "Oyunla ilgili fikirlerinizi, önerilerinizi veya karşılaştığınız sorunları bize buradan bildirebilirsiniz.",
        feedbackBtn: "Öneri ve Sorun Bildir",
        dailyRewardsTitle: "Günlük Ödüller",
        dailyRewardsSubtitle: "Büyük ödül için her gün giriş yap!",
        claimReward: "Ödülü Al",
        noScoresYet: "Henüz bu mod için kaydedilmiş puan yok.",


        howToPlayTitle: "Nasıl Oynanır?",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Amaç</h4>
        <p>Mümkün olduğunca çok soruyu doğru cevaplayarak en yüksek puanı elde etmek ve Bilgi Ağacı'nda en üst seviyeye ulaşmaktır.</p>
        <hr>
        <h4>🎲 Oyun Modları</h4>
        <ul>
        <li><strong>Klasik Mod:</strong> Standart bilgi yarışması deneyimi. Yanlış cevap hakkınız sınırlıdır!</li>
        <li><strong>Zamana Karşı:</strong> Süre bitmeden yapabildiğiniz kadar doğru yapın. Her doğru cevap süreyi biraz artırır.</li>
        <li><strong>Hayatta Kalma:</strong> Tek bir yanlış cevap hakkınız var. Ne kadar ileri gidebileceksiniz?</li>
        <li><strong>Kategori Uzmanı:</strong> Seçtiğiniz bir kategorideki tüm soruları bitirmeye çalışın.</li>
        </ul>
        <hr>
        <h4>🃏 Jokerler</h4>
        <p>Zorlandığınız anlarda bu jokerleri kullanarak avantaj elde edebilirsiniz:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> İki yanlış şıkkı eler.</li>
        <li><strong>⏳ Ekstra Süre:</strong> Soru sürenize 10 saniye ekler.</li>
        <li><strong>⏩ Pas Geç:</strong> Soruyu cevaplamadan geçmenizi sağlar. (Serinizi bozmaz)</li>
        <li><strong>💡 İpucu:</strong> Soruyla ilgili küçük bir ipucu verir.</li>
        </ul>`,
        
        
        creditsTitle: "Künye",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Bu oyun <strong>BEYZZ GAMES</strong> tarafından tasarlanmış ve geliştirilmiştir.</p>
        <p>Bilgi Ağacı'nı büyütme yolculuğumuzda bize katıldığınız için teşekkür ederiz! Umarız oynarken hem eğlenir hem de yeni şeyler öğrenirsiniz.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Bizi Takip Edin & İletişime Geçin</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="YouTube Kanalımız"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Twitter Hesabımız"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Bize E-posta Gönderin"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Tüm hakları saklıdır. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Gizlilik Politikası",
        privacyContentHTML: `
        <p>Uygulamamız, oyun ilerlemenizi (puanlar, başarımlar, ayarlar vb.) kaydetmek için cihazınızın yerel depolama alanını kullanır. Bu veriler cihazınızın dışına çıkmaz ve kimseyle paylaşılmaz.</p>
        <p style="margin-top: 25px;">Daha detaylı bilgi için gizlilik politikamızın tam metnine göz atabilirsiniz:<br>
        <a href="https://docs.google.com/document/d/1zamkqtXE8TRVFYhctoQk3lme8QtQb8aKEqDGvUxbVF8/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Gizlilik Politikası Sayfasına Git</a>
        </p>`,

    },
    en: {
        gameTitle: "Tree of Knowledge",
        koreanSubtitle: "(Tree of Knowledge)",
        difficultySelect: "Select Difficulty:",
        difficultyEasy: "Easy",
        difficultyMedium: "Medium",
        difficultyHard: "Hard",
        classicMode: "Classic Mode",
        timeAttackMode: "Time Attack",
        survivalMode: "Survival",
        categoryChallengeMode: "Category Expert",
        scoreboard: "Scoreboard",
        achievements: "Achievements",
        settings: "Settings",
        shop: "Shop 🛍️",
        tagline: "🍀 Your gateway to knowledge... 🍀",

        "howToPlay": "How to Play?",
        "credits": "Credits",
        "privacyPolicy": "Privacy Policy",
        
        selectCategory: "Select Category",
        backToMenu: "Main Menu",

        categoryLabel: "Category:",
        scoreLabel: "Score:",
        correctLabel: "Correct:",
        streakLabel: "Streak:",
        loadingQuestions: "Loading questions...",
        nextQuestion: "Next Question",
        joker5050: "50/50",
        jokerTime: "Time +",
        jokerSkip: "Skip",
        jokerHint: "Hint",
        enterYourName: "Enter your name...",
        saveScore: "Save Score",
        
        highScoresTitle: "🏆 High Scores 🏆",
        settingsTitle: "⚙️ Settings ⚙️",
        achievementsTitle: "🏆 Achievements 🏆",
        shopTitle: "Shop",
        
        leaderboardTitle: "🏆 Leaderboard 🏆",
        daily: "Daily",
        weekly: "Weekly",
        monthly: "Monthly",
        alltime: "All Time",
        
        language: "Language:",
        backgroundMusic: "Background Music:",
        soundEffects: "Sound Effects:",
        mute: "Mute",
        saveSettings: "Save Settings",
        dangerZone: "⚠️ Danger Zone ⚠️",
        dangerZoneDesc: "These actions cannot be undone!",
        resetScores: "Reset All Scores",
        resetAchievements: "Reset All Achievements",

        currentGold: "Current Gold:",
        jokers: "Jokers",
        lives: "Lives",
        joker5050_shop: "🌓 50/50 Joker",
        jokerTime_shop: "⏳ Time Joker",
        jokerSkip_shop: "⏩ Skip Joker",
        jokerHint_shop: "💡 Hint Joker",
        life_single_shop: "❤️ 1 Life",
        life_full_shop: "❤️❤️❤️ 5 Lives (Full Refill)",
        buyButton: "Buy",

        errorJoker5050: "50/50 joker cannot be used for this question.",
        errorTimeJokerInTimeAttack: "Time joker cannot be used in this mode.",
        hintUnavailable: "No hint is available for this question.",
        scoreSaved: (name, score) => `Your score (${score}) has been saved, ${name}!`,
        settingsSaved: "Settings saved!",
        allScoresReset: "All high scores have been successfully reset.",
        noScoresToReset: "No score records found to reset.",
        allAchievementsReset: "All achievements and stats have been reset.",
        itemBought: (itemName) => `You bought ${itemName}!`,
        notEnoughGold: "Not enough gold!",
        notEnoughLives: "You don't have enough lives! You can buy more from the shop.",
        livesFull: "Your lives have been fully refilled!",
        confirmResetScores: "Are you sure? ALL your high scores in all game modes will be permanently deleted! This action cannot be undone.",
        confirmResetAchievements: "Are you sure? ALL your unlocked achievements and stats will be permanently deleted! This action cannot be undone.",
        questionSkipped: "Question skipped!",
        correctAnswerLabel: "Correct Answer:",
        resetPlayerData: "Reset All Player Data",
        confirmResetPlayerData: "Are you sure? All of your gold, lives, and jokers will be RESET to the initial values defined in the code! This action cannot be undone.",
        'tooManyWrongAnswers': "4 wrong answers given. Game over!",
        
        gameEnded: "Game Over!",
        yourScore: "Your Score:",
        totalCorrect: "Total Correct:",
        questionsAnswered: (count) => `You answered ${count} questions.`,
        timeUp: "Time's Up!",
        noScoresForThisMode: "No scores recorded for this mode yet.",
        'tooManyWrongAnswers': "4 wrong answers given. Game over!",
        'wrongLabel': "Wrong!",
        'statistics': 'Statistics',

        profile: "Profile",
        statistics: "Statistics",
        languageSettings: "Language Settings",
        soundSettings: "Sound Settings",
        dataManagement: "Data Management",
        watchAndEarn: "Watch & Earn",
        earnGold: "Earn Gold",
        earnGoldDesc: "+50 Gold",
        watchBtn: "WATCH",
        earnLife: "Earn Life",
        earnLifeDesc: "+1 Life",
        life_unlimited_1h: "Unlimited Lives (1 Hour)",
        life_unlimited_24h: "Unlimited Lives (24 Hours)",
        popular: "MOST POPULAR",
        selectAvatar: "Select Avatar",
        rateUsTitle: "Do You Like Our Game?",
        rateUsDesc: "Your support is valuable to us. You can help us reach more people by rating us in the store!",
        rateGameBtn: "Rate The Game",
        contributeTitle: "Contribute to Development",
        contributeDesc: "You can help the Knowledge Tree grow by sending us questions you'd like to see added to the game!",
        submitQuestionBtn: "Submit a Question",
        feedbackTitle: "Report Suggestions & Issues",
        feedbackDesc: "You can report your ideas, suggestions, or any issues you've encountered with the game here.",
        feedbackBtn: "Report Suggestion/Issue",
        dailyRewardsTitle: "Daily Rewards",
        dailyRewardsSubtitle: "Log in every day for the grand prize!",
        claimReward: "Claim Reward",
        noScoresYet: "No scores have been recorded for this mode yet.",

        category_Tarih: "History",
        category_Coğrafya: "Geography",
        category_Bilim_ve_Teknoloji: "Science & Technology",
        category_Sanat: "Art",
        category_Edebiyat: "Literature",
        category_Sinema_ve_Televizyon: "Cinema & Television",
        category_Müzik: "Music",
        category_Spor: "Sports",
        category_Matematik: "Mathematics",
        category_Felsefe: "Philosophy",
        category_Mitoloji: "Mythology",
        category_Doğa_ve_Çevre: "Nature & Environment",
        category_Genel_Kültür: "General Knowledge",
        category_Güncel_Olaylar: "Current Events",
        
        achievements_bilimTomurcugu_name: "Science Bud",
        achievements_bilimTomurcugu_desc: "Correctly answer 10 'Science & Technology' questions",
        achievements_stratejist_name: "Strategist",
        achievements_stratejist_desc: "Use all joker types in a single game",
        achievements_bilgelikSerisi_name: "Wisdom Streak",
        achievements_bilgelikSerisi_desc: "Answer 5 questions correctly in a row",
        achievements_oyunAcemisi_name: "Game Novice",
        achievements_oyunAcemisi_desc: "Complete your first game (any mode)",
        achievements_merakliZihin_name: "Curious Mind",
        achievements_merakliZihin_desc: "Correctly answer a total of 50 questions",
        achievements_kategoriKasifi_name: "Category Explorer",
        achievements_kategoriKasifi_desc: "Answer at least 3 questions correctly in 3 different categories",
        achievements_klasikUzmani_name: "Classic Expert",
        achievements_klasikUzmani_desc: "Get 200+ score in Classic Mode",
        achievements_hizTutkunu_name: "Speed Enthusiast",
        achievements_hizTutkunu_desc: "Get 15+ correct in Time Attack Mode",
        achievements_hayattaKalan_name: "Survivor",
        achievements_hayattaKalan_desc: "Answer 10+ questions in Survival Mode",
        achievements_uzunSeri_name: "Long Streak",
        achievements_uzunSeri_desc: "Answer 10 questions correctly in a row",
        achievements_jokerSever_name: "Joker Lover",
        achievements_jokerSever_desc: "Use a total of 20 jokers (any type)",
        achievements_puanAvcisi_name: "Score Hunter",
        achievements_puanAvcisi_desc: "Get 300+ score in a single Classic game",
        achievements_bilgiKurdu_name: "Bookworm",
        achievements_bilgiKurdu_desc: "Correctly answer a total of 250 questions",
        achievements_kategoriUstasi_name: "Category Master",
        achievements_kategoriUstasi_desc: "Complete a Category Expert mode with 80%+ success (min 10 questions)",
        achievements_zamanEfendisi_name: "Time Lord",
        achievements_zamanEfendisi_desc: "Get 25+ correct in Time Attack Mode",
        achievements_yenilmezRuh_name: "Invincible Spirit",
        achievements_yenilmezRuh_desc: "Answer 20+ questions in Survival Mode",
        achievements_mukemmeliyetciOyuncu_name: "Perfectionist",
        achievements_mukemmeliyetciOyuncu_desc: "Complete a Classic game (min 10 questions) without any mistakes",
        achievements_jokersizKahraman_name: "Jokerless Hero",
        achievements_jokersizKahraman_desc: "Complete a Classic game (min 10 questions, 150+ score) without using any jokers",
        achievements_tarihciRuhu_name: "Spirit of a Historian",
        achievements_tarihciRuhu_desc: "Correctly answer 20 History questions",
        achievements_cografyaMeraki_name: "Geography Enthusiast",
        achievements_cografyaMeraki_desc: "Correctly answer 20 Geography questions",
        achievements_sanatElestirmeni_name: "Art Critic",
        achievements_sanatElestirmeni_desc: "Correctly answer 15 Art questions",
        achievements_edebiyatAsigi_name: "Literature Lover",
        achievements_edebiyatAsigi_desc: "Correctly answer 15 Literature questions",
        achievements_sporTutkunu_name: "Sports Fanatic",
        achievements_sporTutkunu_desc: "Correctly answer 15 Sports questions",
        achievements_matematikCanavari_name: "Math Whiz",
        achievements_matematikCanavari_desc: "Correctly answer 10 Mathematics questions",
        achievements_filozofTohumu_name: "Seed of a Philosopher",
        achievements_filozofTohumu_desc: "Correctly answer 10 Philosophy questions",
        achievements_mitolojiAvcisi_name: "Mythology Hunter",
        achievements_mitolojiAvcisi_desc: "Correctly answer 10 Mythology questions",
        achievements_hizliVeMerakli_name: "Fast & Curious",
        achievements_hizliVeMerakli_desc: "Correctly answer a question in less than 3 seconds",
        achievements_sonSaniyeci_name: "Last Second",
        achievements_sonSaniyeci_desc: "Correctly answer a question in the last second",
        achievements_modGezgini_name: "Mode Explorer",
        achievements_modGezgini_desc: "Play all game modes (Classic, Time Attack, Survival, Category Expert) at least once",
        achievements_bilge_name: "Sage",
        achievements_bilge_desc: "Correctly answer a total of 500 questions.",
        achievements_ansiklopedi_name: "Encyclopedia",
        achievements_ansiklopedi_desc: "Correctly answer a total of 1000 questions.",
        achievements_ilkAlisveris_name: "First Purchase",
        achievements_ilkAlisveris_desc: "Buy any item from the shop for the first time.",
        achievements_isAdami_name: "Business Person",
        achievements_isAdami_desc: "Spend a total of 10,000 Gold in the shop.",
        achievements_adanmisOyuncu_name: "Dedicated Player",
        achievements_adanmisOyuncu_desc: "Complete the 7-day reward streak and claim the grand prize.",
        achievements_maceraciRuh_name: "Adventurous Spirit",
        achievements_maceraciRuh_desc: "Finish the game at least once on Easy, Medium, and Hard difficulty levels.",
        achievements_katkidaBulunan_name: "Contributor",
        achievements_katkidaBulunan_desc: "Support the game's development by using the 'Submit a Question' feature.",
        achievements_zorluZeka_name: "Tough Mind",
        achievements_zorluZeka_desc: "Finish a Classic game on Hard difficulty with 250+ points.",
        achievements_hizliVeMerakli_name: "Quick and Curious",
        achievements_hizliVeMerakli_desc: "Correctly answer a question in less than 3 seconds.",
        achievements_sonSaniyeci_name: "Last Seconder",
        achievements_sonSaniyeci_desc: "Correctly answer a question in the last 1 second.",
        achievements_modGezgini_name: "Mode Explorer",
        achievements_modGezgini_desc: "Play all game modes (Classic, Time Attack, Survival, Category Challenge) at least once.",
        
        
        backToSettings: "Back to Settings",
        howToPlayTitle: "How to Play?",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Objective</h4>
        <p>To get the highest score by answering as many questions correctly as possible and reach the highest level on the Knowledge Tree.</p>
        <hr>
        <h4>🎲 Game Modes</h4>
        <ul>
        <li><strong>Classic Mode:</strong> The standard quiz experience. You have a limited number of wrong answers!</li>
        <li><strong>Time Attack:</strong> Answer as many questions as you can before the time runs out. Each correct answer adds a little more time.</li>
        <li><strong>Survival:</strong> You only have one chance to answer incorrectly. How far can you go?</li>
        <li><strong>Category Expert:</strong> Try to finish all the questions in a category you choose.</li>
        </ul>
        <hr>
        <h4>🃏 Power-ups</h4>
        <p>You can use these power-ups to gain an advantage when you're stuck:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Eliminates two wrong options.</li>
        <li><strong>⏳ Extra Time:</strong> Adds 10 seconds to your question timer.</li>
        <li><strong>⏩ Skip:</strong> Allows you to skip a question without answering. (Doesn't break your streak)</li>
        <li><strong>💡 Hint:</strong> Provides a small clue related to the question.</li>
        </ul>`,
        
        
        creditsTitle: "Credits",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">This game was designed and developed by <strong>BEYZZ GAMES</strong>.</p>
        <p>Thank you for joining us on our journey to grow the Tree of Knowledge! We hope you have fun and learn new things while playing.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Follow Us & Get in Touch</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Our YouTube Channel"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Our Twitter Account"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Send Us an Email"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">All rights reserved. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Privacy Policy",
        privacyContentHTML: `
        <p>Our application uses your device's local storage to save your game progress (scores, achievements, settings, etc.). This data does not leave your device and is not shared with anyone.</p>
        <p style="margin-top: 25px;">For more detailed information, you can review the full text of our privacy policy:<br>
        <a href="https://docs.google.com/document/d/1CGFLn-y3t0mW6u3eZQCtqPTYYuTG83lUZIsBpb4EcHk/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Go to Privacy Policy Page</a>
        </p>`,

    },
    de: {
        gameTitle: "Baum des Wissens",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Schwierigkeit wählen:",
        difficultyEasy: "Leicht",
        difficultyMedium: "Mittel",
        difficultyHard: "Schwer",
        classicMode: "Klassischer Modus",
        timeAttackMode: "Zeitangriff",
        survivalMode: "Überleben",
        categoryChallengeMode: "Kategorie-Experte",
        scoreboard: "Bestenliste",
        achievements: "Erfolge",
        settings: "Einstellungen ⚙️",
        shop: "Shop 🛍️",
        tagline: "🍀 Dein Tor zum Wissen... 🍀",

        "howToPlay": "Wie wird gespielt?",
        "credits": "Mitwirkende",
        "privacyPolicy": "Datenschutzrichtlinie",
        
        selectCategory: "Kategorie wählen",
        backToMenu: "Hauptmenü",

        categoryLabel: "Kategorie:",
        scoreLabel: "Punkte:",
        correctLabel: "Richtig:",
        streakLabel: "Serie:",
        loadingQuestions: "Fragen werden geladen...",
        nextQuestion: "Nächste Frage",
        joker5050: "50/50",
        jokerTime: "Zeit +",
        jokerSkip: "Überspringen",
        jokerHint: "Hinweis",
        enterYourName: "Gib deinen Namen ein...",
        saveScore: "Punktestand speichern",
        
        highScoresTitle: "🏆 Highscores 🏆",
        settingsTitle: "⚙️ Einstellungen ⚙️",
        achievementsTitle: "🏆 Erfolge 🏆",
        shopTitle: "Shop",

        leaderboardTitle: "🏆 Bestenliste 🏆",
        daily: "Täglich",
        weekly: "Wöchentlich",
        monthly: "Monatlich",
        alltime: "Gesamt",
        
        language: "Sprache:",
        backgroundMusic: "Hintergrundmusik:",
        soundEffects: "Soundeffekte:",
        mute: "Stumm",
        saveSettings: "Einstellungen speichern",
        dangerZone: "⚠️ Gefahrenzone ⚠️",
        dangerZoneDesc: "Diese Aktionen können nicht rückgängig gemacht werden!",
        resetScores: "Alle Punktestände zurücksetzen",
        resetAchievements: "Alle Erfolge zurücksetzen",

        currentGold: "Aktuelles Gold:",
        jokers: "Joker",
        lives: "Leben",
        joker5050_shop: "🌓 50/50 Joker",
        jokerTime_shop: "⏳ Zeit-Joker",
        jokerSkip_shop: "⏩ Überspringen-Joker",
        jokerHint_shop: "💡 Hinweis-Joker",
        life_single_shop: "❤️ 1 Leben",
        life_full_shop: "❤️❤️❤️ 5 Leben (Komplett auffüllen)",
        buyButton: "Kaufen",

        errorJoker5050: "Der 50/50-Joker kann für diese Frage nicht verwendet werden.",
        errorTimeJokerInTimeAttack: "In diesem Modus kann der Zeit-Joker nicht verwendet werden.",
        hintUnavailable: "Für diese Frage ist kein Hinweis verfügbar.",
        scoreSaved: (name, score) => `${name}, dein Punktestand (${score}) wurde gespeichert!`,
        settingsSaved: "Einstellungen gespeichert!",
        allScoresReset: "Alle Highscores wurden erfolgreich zurückgesetzt.",
        noScoresToReset: "Keine Punktestände zum Zurücksetzen gefunden.",
        allAchievementsReset: "Alle Erfolge und Statistiken wurden zurückgesetzt.",
        itemBought: (itemName) => `Du hast ${itemName} gekauft!`,
        notEnoughGold: "Nicht genug Gold!",
        notEnoughLives: "Du hast nicht genügend Leben! Du kannst im Shop mehr kaufen.",
        livesFull: "Deine Leben wurden vollständig aufgefüllt!",
        confirmResetScores: "Bist du sicher? ALLE deine Highscores in allen Spielmodi werden dauerhaft gelöscht! Diese Aktion kann nicht rückgängig gemacht werden.",
        confirmResetAchievements: "Bist du sicher? ALLE deine freigeschalteten Erfolge und Statistiken werden dauerhaft gelöscht! Diese Aktion kann nicht rückgängig gemacht werden.",
        questionSkipped: "Frage übersprungen!",
        correctAnswerLabel: "Richtige Antwort:",
        resetPlayerData: "Alle Spielerdaten zurücksetzen",
        'confirmResetPlayerData': 'Bist du sicher, dass du alle Spielerdaten (Leben, Gold, Joker, Name, Punkte UND ALLE ERFOLGE) dauerhaft löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden!',
        'tooManyWrongAnswers': "4 falsche Antworten gegeben. Spiel vorbei!",

        gameEnded: "Spiel beendet!",
        yourScore: "Dein Punktestand:",
        totalCorrect: "Insgesamt richtig:",
        questionsAnswered: (count) => `Du hast ${count} Fragen beantwortet.`,
        timeUp: "Zeit abgelaufen!",
        noScoresForThisMode: "Für diesen Modus gibt es noch keine gespeicherten Punkte.",

        category_Tarih: "Geschichte",
        category_Coğrafya: "Geografie",
        category_Bilim_ve_Teknoloji: "Wissenschaft & Technik",
        category_Sanat: "Kunst",
        category_Edebiyat: "Literatur",
        category_Sinema_ve_Televizyon: "Kino & Fernsehen",
        category_Müzik: "Musik",
        category_Spor: "Sport",
        category_Matematik: "Mathematik",
        category_Felsefe: "Philosophie",
        category_Mitoloji: "Mythologie",
        category_Doğa_ve_Çevre: "Natur & Umwelt",
        category_Genel_Kültür: "Allgemeinwissen",
        category_Güncel_Olaylar: "Aktuelle Ereignisse",

        
        achievements_bilimTomurcugu_name: "Wissenschaftsknospe",
        achievements_bilimTomurcugu_desc: "Beantworte 10 Fragen aus 'Wissenschaft & Technik' richtig.",
        achievements_stratejist_name: "Stratege",
        achievements_stratejist_desc: "Benutze alle Joker-Typen in einem einzigen Spiel.",
        achievements_bilgelikSerisi_name: "Weisheitsserie",
        achievements_bilgelikSerisi_desc: "Beantworte 5 Fragen hintereinander richtig.",
        achievements_oyunAcemisi_name: "Spielanfänger",
        achievements_oyunAcemisi_desc: "Schließe dein erstes Spiel ab (beliebiger Modus).",
        achievements_merakliZihin_name: "Neugieriger Geist",
        achievements_merakliZihin_desc: "Beantworte insgesamt 50 Fragen richtig.",
        achievements_kategoriKasifi_name: "Kategorie-Entdecker",
        achievements_kategoriKasifi_desc: "Beantworte mindestens 3 Fragen in 3 verschiedenen Kategorien richtig.",
        achievements_klasikUzmani_name: "Klassik-Experte",
        achievements_klasikUzmani_desc: "Erreiche 200+ Punkte im klassischen Modus.",
        achievements_hizTutkunu_name: "Geschwindigkeits-Fan",
        achievements_hizTutkunu_desc: "Erreiche 15+ richtige Antworten im Zeitangriff-Modus.",
        achievements_hayattaKalan_name: "Überlebender",
        achievements_hayattaKalan_desc: "Beantworte 10+ Fragen im Überlebensmodus.",
        achievements_uzunSeri_name: "Lange Serie",
        achievements_uzunSeri_desc: "Beantworte 10 Fragen hintereinander richtig.",
        achievements_jokerSever_name: "Joker-Liebhaber",
        achievements_jokerSever_desc: "Benutze insgesamt 20 Joker (beliebiger Typ).",
        achievements_puanAvcisi_name: "Punktejäger",
        achievements_puanAvcisi_desc: "Erreiche 300+ Punkte in einem einzigen klassischen Spiel.",
        achievements_bilgiKurdu_name: "Bücherwurm",
        achievements_bilgiKurdu_desc: "Beantworte insgesamt 250 Fragen richtig.",
        achievements_kategoriUstasi_name: "Kategorie-Meister",
        achievements_kategoriUstasi_desc: "Schließe einen Kategorie-Experten-Modus mit über 80% Erfolg ab (min. 10 Fragen).",
        achievements_zamanEfendisi_name: "Herr der Zeit",
        achievements_zamanEfendisi_desc: "Erreiche 25+ richtige Antworten im Zeitangriff-Modus.",
        achievements_yenilmezRuh_name: "Unbesiegbarer Geist",
        achievements_yenilmezRuh_desc: "Beantworte 20+ Fragen im Überlebensmodus.",
        achievements_mukemmeliyetciOyuncu_name: "Perfektionist",
        achievements_mukemmeliyetciOyuncu_desc: "Schließe ein klassisches Spiel (min. 10 Fragen) fehlerfrei ab.",
        achievements_jokersizKahraman_name: "Held ohne Joker",
        achievements_jokersizKahraman_desc: "Schließe ein klassisches Spiel (min. 10 Fragen, 150+ Punkte) ohne Joker ab.",
        achievements_tarihciRuhu_name: "Geist des Historikers",
        achievements_tarihciRuhu_desc: "Beantworte 20 Geschichtsfragen richtig.",
        achievements_cografyaMeraki_name: "Geografie-Fan",
        achievements_cografyaMeraki_desc: "Beantworte 20 Geografiefragen richtig.",
        achievements_sanatElestirmeni_name: "Kunstkritiker",
        achievements_sanatElestirmeni_desc: "Beantworte 15 Kunstfragen richtig.",
        achievements_edebiyatAsigi_name: "Literaturliebhaber",
        achievements_edebiyatAsigi_desc: "Beantworte 15 Literaturfragen richtig.",
        achievements_sporTutkunu_name: "Sportfanatiker",
        achievements_sporTutkunu_desc: "Beantworte 15 Sportfragen richtig.",
        achievements_matematikCanavari_name: "Mathe-Genie",
        achievements_matematikCanavari_desc: "Beantworte 10 Mathematikfragen richtig.",
        achievements_filozofTohumu_name: "Samen des Philosophen",
        achievements_filozofTohumu_desc: "Beantworte 10 Philosophiefragen richtig.",
        achievements_mitolojiAvcisi_name: "Mythologie-Jäger",
        achievements_mitolojiAvcisi_desc: "Beantworte 10 Mythologiefragen richtig.",
        achievements_bilge_name: "Weiser",
        achievements_bilge_desc: "Beantworte insgesamt 500 Fragen richtig.",
        achievements_ansiklopedi_name: "Enzyklopädie",
        achievements_ansiklopedi_desc: "Beantworte insgesamt 1000 Fragen richtig.",
        achievements_ilkAlisveris_name: "Erster Kauf",
        achievements_ilkAlisveris_desc: "Kaufe zum ersten Mal einen beliebigen Artikel im Shop.",
        achievements_isAdami_name: "Geschäftsmann",
        achievements_isAdami_desc: "Gib insgesamt 10.000 Gold im Shop aus.",
        achievements_adanmisOyuncu_name: "Engagierter Spieler",
        achievements_adanmisOyuncu_desc: "Schließe die 7-tägige Belohnungsserie ab und erhalte die große Belohnung.",
        achievements_maceraciRuh_name: "Abenteuergeist",
        achievements_maceraciRuh_desc: "Beende das Spiel mindestens einmal auf den Schwierigkeitsstufen Leicht, Mittel und Schwer.",
        achievements_katkidaBulunan_name: "Mitwirkender",
        achievements_katkidaBulunan_desc: "Unterstütze die Entwicklung des Spiels, indem du die Funktion 'Frage einreichen' nutzt.",
        achievements_zorluZeka_name: "Zäher Verstand",
        achievements_zorluZeka_desc: "Beende ein klassisches Spiel auf der Stufe Schwer mit 250+ Punkten.",
        achievements_hizliVeMerakli_name: "Schnell und neugierig",
        achievements_hizliVeMerakli_desc: "Beantworte eine Frage in weniger als 3 Sekunden richtig.",
        achievements_sonSaniyeci_name: "Letzte Sekunde",
        achievements_sonSaniyeci_desc: "Beantworte eine Frage in der letzten Sekunde richtig.",
        achievements_modGezgini_name: "Modus-Entdecker",
        achievements_modGezgini_desc: "Spiele alle Spielmodi (Klassisch, Zeitangriff, Überleben, Kategorie-Experte) mindestens einmal.",
        
        'tooManyWrongAnswers': "4 falsche Antworten gegeben. Spiel vorbei!",
        'wrongLabel': "Falsch!",
        'İstatistikler': 'Statistiken',

        profile: "Profil 👤",
        statistics: "Statistiken",
        languageSettings: "Spracheinstellungen",
        soundSettings: "Sound-Einstellungen",
        dataManagement: "Datenverwaltung",
        watchAndEarn: "Ansehen & Verdienen",
        earnGold: "Gold verdienen",
        earnGoldDesc: "+50 Gold",
        watchBtn: "ANSEHEN",
        earnLife: "Leben verdienen",
        earnLifeDesc: "+1 Leben",
        life_unlimited_1h: "Unbegrenzte Leben (1 Stunde)",
        life_unlimited_24h: "Unbegrenzte Leben (24 Stunden)",
        popular: "SEHR BELIEBT",
        selectAvatar: "Avatar wählen",
        rateUsTitle: "Gefällt dir unser Spiel?",
        rateUsDesc: "Deine Unterstützung ist uns sehr wichtig. Hilf uns, mehr Menschen zu erreichen, indem du uns im Store bewertest!",
        rateGameBtn: "Spiel bewerten",
        contributeTitle: "Zur Entwicklung beitragen",
        contributeDesc: "Hilf dem Baum des Wissens zu wachsen, indem du uns Fragen schickst, die du gerne im Spiel sehen würdest!",
        submitQuestionBtn: "Frage einreichen",
        feedbackTitle: "Vorschläge & Probleme melden",
        feedbackDesc: "Hier kannst du uns deine Ideen, Vorschläge oder Probleme mit dem Spiel mitteilen.",
        feedbackBtn: "Vorschlag/Problem melden",
        dailyRewardsTitle: "Tägliche Belohnungen",
        dailyRewardsSubtitle: "Melde dich jeden Tag an für den Hauptpreis!",
        claimReward: "Belohnung abholen",
        noScoresYet: "Für diesen Modus gibt es noch keine gespeicherten Punkte.",

        
        backToSettings: "Zurück zu den Einstellungen",
        howToPlayTitle: "Spielanleitung",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Ziel</h4>
        <p>Die höchste Punktzahl zu erreichen, indem du so viele Fragen wie möglich richtig beantwortest und das höchste Level auf dem Baum des Wissens erreichst.</p>
        <hr>
        <h4>🎲 Spielmodi</h4>
        <ul>
        <li><strong>Klassischer Modus:</strong> Das Standard-Quiz-Erlebnis. Du hast eine begrenzte Anzahl falscher Antworten!</li>
        <li><strong>Zeitangriff:</strong> Beantworte so viele Fragen wie möglich, bevor die Zeit abläuft. Jede richtige Antwort fügt etwas Zeit hinzu.</li>
        <li><strong>Überleben:</strong> Du hast nur eine Chance, falsch zu antworten. Wie weit kannst du kommen?</li>
        <li><strong>Kategorie-Experte:</strong> Versuche, alle Fragen in einer von dir gewählten Kategorie zu beenden.</li>
        </ul>
        <hr>
        <h4>🃏 Joker</h4>
        <p>Du kannst diese Joker verwenden, um einen Vorteil zu erlangen, wenn du nicht weiterweißt:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Eliminiert zwei falsche Optionen.</li>
        <li><strong>⏳ Extra-Zeit:</strong> Fügt deinem Frage-Timer 10 Sekunden hinzu.</li>
        <li><strong>⏩ Überspringen:</strong> Ermöglicht es dir, eine Frage zu überspringen, ohne sie zu beantworten. (Unterbricht deine Serie nicht)</li>
        <li><strong>💡 Tipp:</strong> Gibt einen kleinen Hinweis zur Frage.</li>
        </ul>`,
        
        
        creditsTitle: "Impressum",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Dieses Spiel wurde von <strong>BEYZZ GAMES</strong> entworfen und entwickelt.</p>
        <p>Danke, dass du uns auf unserer Reise begleitest, den Baum des Wissens wachsen zu lassen! Wir hoffen, du hast Spaß beim Spielen und lernst dabei neue Dinge.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Folge uns & Kontaktiere uns</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Unser YouTube-Kanal"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Unser Twitter-Account"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Sende uns eine E-Mail"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Alle Rechte vorbehalten. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Datenschutzrichtlinie",
        privacyContentHTML: `
        <p>Unsere Anwendung verwendet den lokalen Speicher deines Geräts, um deinen Spielfortschritt (Punktestände, Erfolge, Einstellungen usw.) zu speichern. Diese Daten verlassen dein Gerät nicht und werden mit niemandem geteilt.</p>
        <p style="margin-top: 25px;">Für detailliertere Informationen kannst du den vollständigen Text unserer Datenschutzrichtlinie einsehen:<br>
        <a href="https://docs.google.com/document/d/1Vaz9SrKc2ywnQWhAo3NTd3IoND7gEQY2NchE84J1BrY/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Zur Seite der Datenschutzrichtlinie</a>
        </p>`,

        },
ko: {
        gameTitle: "지식의 나무",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "난이도 선택:",
        difficultyEasy: "쉬움",
        difficultyMedium: "중간",
        difficultyHard: "어려움",
        classicMode: "클래식 모드",
        timeAttackMode: "타임 어택",
        survivalMode: "서바이벌",
        categoryChallengeMode: "카테고리 전문가",
        scoreboard: "점수판",
        achievements: "업적",
        settings: "설정 ⚙️",
        shop: "상점 🛍️",
        tagline: "🍀 지식으로 가는 당신의 길... 🍀",

        "howToPlay": "게임 방법",
        "credits": "만든 사람들",
        "privacyPolicy": "개인정보 처리방침",
        
        selectCategory: "카테고리 선택",
        backToMenu: "메인 메뉴",

        categoryLabel: "카테고리:",
        scoreLabel: "점수:",
        correctLabel: "정답:",
        streakLabel: "연속:",
        loadingQuestions: "문제 로딩 중...",
        nextQuestion: "다음 문제",
        joker5050: "50/50",
        jokerTime: "시간 +",
        jokerSkip: "패스",
        jokerHint: "힌트",
        enterYourName: "이름을 입력하세요...",
        saveScore: "점수 저장",
        
        highScoresTitle: "🏆 최고 점수 🏆",
        settingsTitle: "⚙️ 설정 ⚙️",
        achievementsTitle: "🏆 업적 🏆",
        shopTitle: "상점",

        leaderboardTitle: "🏆 순위표 🏆",
        daily: "일간",
        weekly: "주간",
        monthly: "월간",
        alltime: "전체",
        
        language: "언어:",
        backgroundMusic: "배경 음악:",
        soundEffects: "효과음:",
        mute: "음소거",
        saveSettings: "설정 저장",
        dangerZone: "⚠️ 위험 구역 ⚠️",
        dangerZoneDesc: "이 작업은 되돌릴 수 없습니다!",
        resetScores: "모든 점수 초기화",
        resetAchievements: "모든 업적 초기화",

        currentGold: "보유 골드:",
        jokers: "조커",
        lives: "생명",
        joker5050_shop: "🌓 50/50 조커",
        jokerTime_shop: "⏳ 시간 조커",
        jokerSkip_shop: "⏩ 패스 조커",
        jokerHint_shop: "💡 힌트 조커",
        life_single_shop: "❤️ 생명 1개",
        life_full_shop: "❤️❤️❤️ 생명 5개 (전체 채우기)",
        buyButton: "구매하기",

        errorJoker5050: "이 문제에는 50/50 조커를 사용할 수 없습니다.",
        errorTimeJokerInTimeAttack: "이 모드에서는 시간 조커를 사용할 수 없습니다.",
        hintUnavailable: "이 문제에 대한 힌트가 없습니다.",
        scoreSaved: (name, score) => `${name}님의 점수(${score})가 저장되었습니다!`,
        settingsSaved: "설정이 저장되었습니다!",
        allScoresReset: "모든 최고 점수가 성공적으로 초기화되었습니다.",
        noScoresToReset: "초기화할 점수 기록이 없습니다.",
        allAchievementsReset: "모든 업적과 통계가 초기화되었습니다.",
        itemBought: (itemName) => `${itemName}을(를) 구매했습니다!`,
        notEnoughGold: "골드가 부족합니다!",
        notEnoughLives: "생명이 부족합니다! 상점에서 더 구매할 수 있습니다.",
        livesFull: "생명이 모두 채워졌습니다!",
        confirmResetScores: "확실합니까? 모든 게임 모드의 최고 점수가 영구적으로 삭제됩니다! 이 작업은 되돌릴 수 없습니다.",
        confirmResetAchievements: "확실합니까? 획득한 모든 업적과 통계가 영구적으로 삭제됩니다! 이 작업은 되돌릴 수 없습니다.",
        questionSkipped: "문제를 패스했습니다!",
        correctAnswerLabel: "정답:",
        resetPlayerData: "모든 플레이어 데이터 초기화",
        'confirmResetPlayerData': '모든 플레이어 데이터(생명, 골드, 조커, 이름, 점수 및 모든 업적)를 영구적으로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다!',
        'tooManyWrongAnswers': "4번 잘못 답변했습니다. 게임 오버!",

        gameEnded: "게임 종료!",
        yourScore: "당신의 점수:",
        totalCorrect: "총 정답 수:",
        questionsAnswered: (count) => `${count}개의 질문에 답변했습니다.`,
        timeUp: "시간 초과!",
        noScoresForThisMode: "이 모드에 아직 기록된 점수가 없습니다.",

        category_Tarih: "역사",
        category_Coğrafya: "지리",
        category_Bilim_ve_Teknoloji: "과학 및 기술",
        category_Sanat: "예술",
        category_Edebiyat: "문학",
        category_Sinema_ve_Televizyon: "영화 및 텔레비전",
        category_Müzik: "음악",
        category_Spor: "스포츠",
        category_Matematik: "수학",
        category_Felsefe: "철학",
        category_Mitoloji: "신화",
        category_Doğa_ve_Çevre: "자연 및 환경",
        category_Genel_Kültür: "일반 상식",
        category_Güncel_Olaylar: "시사",

        
        achievements_bilimTomurcugu_name: "과학의 싹",
        achievements_bilimTomurcugu_desc: "'과학 및 기술' 문제 10개를 맞히세요.",
        achievements_stratejist_name: "전략가",
        achievements_stratejist_desc: "한 게임에서 모든 종류의 조커를 사용하세요.",
        achievements_bilgelikSerisi_name: "지혜의 연속",
        achievements_bilgelikSerisi_desc: "5문제를 연속으로 맞히세요.",
        achievements_oyunAcemisi_name: "게임 초보자",
        achievements_oyunAcemisi_desc: "첫 게임을 완료하세요 (모든 모드).",
        achievements_merakliZihin_name: "호기심 많은 마음",
        achievements_merakliZihin_desc: "총 50문제를 맞히세요.",
        achievements_kategoriKasifi_name: "카테고리 탐험가",
        achievements_kategoriKasifi_desc: "3개의 다른 카테고리에서 각각 3문제 이상 맞히세요.",
        achievements_klasikUzmani_name: "클래식 전문가",
        achievements_klasikUzmani_desc: "클래식 모드에서 200점 이상 획득하세요.",
        achievements_hizTutkunu_name: "속도광",
        achievements_hizTutkunu_desc: "타임 어택 모드에서 15개 이상 맞히세요.",
        achievements_hayattaKalan_name: "생존자",
        achievements_hayattaKalan_desc: "서바이벌 모드에서 10문제 이상 맞히세요.",
        achievements_uzunSeri_name: "긴 연속 정답",
        achievements_uzunSeri_desc: "10문제를 연속으로 맞히세요.",
        achievements_jokerSever_name: "조커 애호가",
        achievements_jokerSever_desc: "총 20개의 조커를 사용하세요 (모든 종류).",
        achievements_puanAvcisi_name: "점수 사냥꾼",
        achievements_puanAvcisi_desc: "한 번의 클래식 게임에서 300점 이상 획득하세요.",
        achievements_bilgiKurdu_name: "책벌레",
        achievements_bilgiKurdu_desc: "총 250문제를 맞히세요.",
        achievements_kategoriUstasi_name: "카테고리 마스터",
        achievements_kategoriUstasi_desc: "카테고리 전문가 모드를 80% 이상의 성공률로 완료하세요 (최소 10문제).",
        achievements_zamanEfendisi_name: "시간의 군주",
        achievements_zamanEfendisi_desc: "타임 어택 모드에서 25개 이상 맞히세요.",
        achievements_yenilmezRuh_name: "불굴의 정신",
        achievements_yenilmezRuh_desc: "서바이벌 모드에서 20문제 이상 맞히세요.",
        achievements_mukemmeliyetciOyuncu_name: "완벽주의자",
        achievements_mukemmeliyetciOyuncu_desc: "클래식 게임을 실수 없이 완료하세요 (최소 10문제).",
        achievements_jokersizKahraman_name: "조커 없는 영웅",
        achievements_jokersizKahraman_desc: "조커를 사용하지 않고 클래식 게임을 완료하세요 (최소 10문제, 150점 이상).",
        achievements_tarihciRuhu_name: "역사가의 정신",
        achievements_tarihciRuhu_desc: "역사 문제 20개를 맞히세요.",
        achievements_cografyaMeraki_name: "지리 애호가",
        achievements_cografyaMeraki_desc: "지리 문제 20개를 맞히세요.",
        achievements_sanatElestirmeni_name: "예술 평론가",
        achievements_sanatElestirmeni_desc: "예술 문제 15개를 맞히세요.",
        achievements_edebiyatAsigi_name: "문학 애호가",
        achievements_edebiyatAsigi_desc: "문학 문제 15개를 맞히세요.",
        achievements_sporTutkunu_name: "스포츠 광",
        achievements_sporTutkunu_desc: "스포츠 문제 15개를 맞히세요.",
        achievements_matematikCanavari_name: "수학 괴물",
        achievements_matematikCanavari_desc: "수학 문제 10개를 맞히세요.",
        achievements_filozofTohumu_name: "철학자의 씨앗",
        achievements_filozofTohumu_desc: "철학 문제 10개를 맞히세요.",
        achievements_mitolojiAvcisi_name: "신화 사냥꾼",
        achievements_mitolojiAvcisi_desc: "신화 문제 10개를 맞히세요.",
        achievements_bilge_name: "현자",
        achievements_bilge_desc: "총 500문제를 맞히세요.",
        achievements_ansiklopedi_name: "백과사전",
        achievements_ansiklopedi_desc: "총 1000문제를 맞히세요.",
        achievements_ilkAlisveris_name: "첫 구매",
        achievements_ilkAlisveris_desc: "상점에서 처음으로 아이템을 구매하세요.",
        achievements_isAdami_name: "사업가",
        achievements_isAdami_desc: "상점에서 총 10,000 골드를 사용하세요.",
        achievements_adanmisOyuncu_name: "헌신적인 플레이어",
        achievements_adanmisOyuncu_desc: "7일 연속 보상을 완료하고 큰 보상을 받으세요.",
        achievements_maceraciRuh_name: "모험적인 영혼",
        achievements_maceraciRuh_desc: "쉬움, 중간, 어려움 난이도에서 각각 한 번 이상 게임을 완료하세요.",
        achievements_katkidaBulunan_name: "기여자",
        achievements_katkidaBulunan_desc: "'문제 제출' 기능을 사용하여 게임 개발을 지원하세요.",
        achievements_zorluZeka_name: "강인한 지성",
        achievements_zorluZeka_desc: "어려움 난이도의 클래식 게임을 250점 이상으로 완료하세요.",
        achievements_hizliVeMerakli_name: "빠르고 호기심 많은",
        achievements_hizliVeMerakli_desc: "3초 이내에 문제를 맞히세요.",
        achievements_sonSaniyeci_name: "마지막 순간",
        achievements_sonSaniyeci_desc: "마지막 1초에 문제를 맞히세요.",
        achievements_modGezgini_name: "모드 탐험가",
        achievements_modGezgini_desc: "모든 게임 모드(클래식, 타임 어택, 서바이벌, 카테고리 전문가)를 한 번 이상 플레이하세요.",
        
        'tooManyWrongAnswers': "4번 잘못 답변했습니다. 게임 오버!",
        'wrongLabel': "오답!",
        'İstatistikler': '통계',

        profile: "프로필 👤",
        statistics: "통계",
        languageSettings: "언어 설정",
        soundSettings: "소리 설정",
        dataManagement: "데이터 관리",
        watchAndEarn: "보고 얻기",
        earnGold: "골드 얻기",
        earnGoldDesc: "+50 골드",
        watchBtn: "보기",
        earnLife: "생명 얻기",
        earnLifeDesc: "+1 생명",
        life_unlimited_1h: "무제한 생명 (1시간)",
        life_unlimited_24h: "무제한 생명 (24시간)",
        popular: "인기 최고",
        selectAvatar: "아바타 선택",
        rateUsTitle: "저희 게임이 마음에 드시나요?",
        rateUsDesc: "여러분의 지원은 저희에게 큰 힘이 됩니다. 스토어에서 별점을 주시면 더 많은 사람들에게 다가갈 수 있습니다!",
        rateGameBtn: "게임 평가하기",
        contributeTitle: "개발에 기여하기",
        contributeDesc: "게임에 추가하고 싶은 문제를 보내주시면 지식의 나무가 성장하는 데 도움이 됩니다!",
        submitQuestionBtn: "문제 제출",
        feedbackTitle: "제안 및 문제 신고",
        feedbackDesc: "게임에 대한 아이디어나 제안, 또는 겪으신 문제를 여기로 알려주세요.",
        feedbackBtn: "제안/문제 신고",
        dailyRewardsTitle: "일일 보상",
        dailyRewardsSubtitle: "매일 로그인하여 큰 보상을 받으세요!",
        claimReward: "보상 받기",
        noScoresYet: "이 모드에 아직 기록된 점수가 없습니다.",

        
        backToSettings: "설정으로 돌아가기",
        howToPlayTitle: "게임 방법",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 목표</h4>
        <p>최대한 많은 문제에 정확하게 답하여 최고 점수를 얻고 지식의 나무에서 가장 높은 레벨에 도달하는 것입니다.</p>
        <hr>
        <h4>🎲 게임 모드</h4>
        <ul>
        <li><strong>클래식 모드:</strong> 표준 퀴즈 경험. 오답 횟수가 제한되어 있습니다!</li>
        <li><strong>타임 어택:</strong> 시간이 다 떨어지기 전에 최대한 많은 문제를 맞추세요. 정답을 맞힐 때마다 시간이 조금씩 추가됩니다.</li>
        <li><strong>서바이벌:</strong> 오답 기회는 단 한 번뿐입니다. 얼마나 멀리 갈 수 있을까요?</li>
        <li><strong>카테고리 전문가:</strong> 선택한 카테고리의 모든 문제를 완료해 보세요.</li>
        </ul>
        <hr>
        <h4>🃏 파워업</h4>
        <p>어려울 때 다음 파워업을 사용하여 이점을 얻을 수 있습니다:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> 잘못된 선택지 두 개를 제거합니다.</li>
        <li><strong>⏳ 추가 시간:</strong> 문제 타이머에 10초를 추가합니다.</li>
        <li><strong>⏩ 건너뛰기:</strong> 답하지 않고 문제를 건너뛸 수 있습니다. (연속 정답이 끊기지 않음)</li>
        <li><strong>💡 힌트:</strong> 문제와 관련된 작은 단서를 제공합니다.</li>
        </ul>`,
        
        
        creditsTitle: "크레딧",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">이 게임은 <strong>BEYZZ GAMES</strong>에서 기획하고 개발했습니다.</p>
        <p>지식의 나무를 키우는 저희의 여정에 함께해 주셔서 감사합니다! 플레이하면서 즐거움과 새로운 배움을 모두 얻으시길 바랍니다.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">팔로우 및 연락처</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="유튜브 채널"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="트위터 계정"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="이메일 보내기"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">모든 권리 보유. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "개인정보 처리방침",
        privacyContentHTML: `
        <p>저희 애플리케이션은 게임 진행 상황(점수, 업적, 설정 등)을 저장하기 위해 기기의 로컬 저장소를 사용합니다. 이 데이터는 기기 외부로 전송되지 않으며 누구와도 공유되지 않습니다.</p>
        <p style="margin-top: 25px;">자세한 내용은 개인정보 처리방침 전문을 참조하십시오:<br>
        <a href="https://docs.google.com/document/d/1mEaM0gaIn4I0gWHmBeoZshJBPtjEa1CsgFBSwaZEGXw/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">개인정보 처리방침 페이지로 이동</a>
        </p>`,

    },
zh: {
        gameTitle: "知识之树",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "选择难度:",
        difficultyEasy: "简单",
        difficultyMedium: "中等",
        difficultyHard: "困难",
        classicMode: "经典模式",
        timeAttackMode: "计时赛",
        survivalMode: "生存模式",
        categoryChallengeMode: "分类专家",
        scoreboard: "排行榜",
        achievements: "成就",
        settings: "设置 ⚙️",
        shop: "商店 🛍️",
        tagline: "🍀 您通往知识的大门... 🍀",

        "howToPlay": "游戏玩法",
        "credits": "制作人员",
        "privacyPolicy": "隐私政策",
        
        selectCategory: "选择分类",
        backToMenu: "主菜单",

        categoryLabel: "分类:",
        scoreLabel: "分数:",
        correctLabel: "正确:",
        streakLabel: "连对:",
        loadingQuestions: "正在加载问题...",
        nextQuestion: "下一题",
        joker5050: "50/50",
        jokerTime: "时间 +",
        jokerSkip: "跳过",
        jokerHint: "提示",
        enterYourName: "输入您的名字...",
        saveScore: "保存分数",
        
        highScoresTitle: "🏆 高分榜 🏆",
        settingsTitle: "⚙️ 设置 ⚙️",
        achievementsTitle: "🏆 成就 🏆",
        shopTitle: "商店",

        leaderboardTitle: "🏆 排行榜 🏆",
        daily: "每日",
        weekly: "每周",
        monthly: "每月",
        alltime: "全部",
        
        language: "语言:",
        backgroundMusic: "背景音乐:",
        soundEffects: "音效:",
        mute: "静音",
        saveSettings: "保存设置",
        dangerZone: "⚠️ 危险区域 ⚠️",
        dangerZoneDesc: "这些操作无法撤销！",
        resetScores: "重置所有分数",
        resetAchievements: "重置所有成就",

        currentGold: "当前金币:",
        jokers: "王牌",
        lives: "生命",
        joker5050_shop: "🌓 50/50 王牌",
        jokerTime_shop: "⏳ 时间王牌",
        jokerSkip_shop: "⏩ 跳过王牌",
        jokerHint_shop: "💡 提示王牌",
        life_single_shop: "❤️ 1条生命",
        life_full_shop: "❤️❤️❤️ 5条生命 (补满)",
        buyButton: "购买",

        errorJoker5050: "此问题无法使用 50/50 王牌。",
        errorTimeJokerInTimeAttack: "此模式下无法使用时间王牌。",
        hintUnavailable: "此问题没有提示。",
        scoreSaved: (name, score) => `${name}，您的分数 (${score}) 已保存！`,
        settingsSaved: "设置已保存！",
        allScoresReset: "所有高分已成功重置。",
        noScoresToReset: "未找到可重置的分数记录。",
        allAchievementsReset: "所有成就和统计数据已重置。",
        itemBought: (itemName) => `您已购买 ${itemName}！`,
        notEnoughGold: "金币不足！",
        notEnoughLives: "生命值不足！您可以从商店购买更多。",
        livesFull: "生命已补满！",
        confirmResetScores: "您确定吗？您在所有游戏模式下的所有高分都将被永久删除！此操作无法撤销。",
        confirmResetAchievements: "您确定吗？您所有已解锁的成就和统计数据都将被永久删除！此操作无法撤销。",
        questionSkipped: "已跳过问题！",
        correctAnswerLabel: "正确答案:",
        resetPlayerData: "重置所有玩家数据",
        'confirmResetPlayerData': '您确定要永久删除所有玩家数据（生命、金币、王牌、名称、分数和所有成就）吗？此操作无法撤销！',
        'tooManyWrongAnswers': "回答错误4次。游戏结束！",

        gameEnded: "游戏结束！",
        yourScore: "您的分数:",
        totalCorrect: "总计正确:",
        questionsAnswered: (count) => `您回答了 ${count} 个问题。`,
        timeUp: "时间到！",
        noScoresForThisMode: "此模式尚无分数记录。",

        category_Tarih: "历史",
        category_Coğrafya: "地理",
        category_Bilim_ve_Teknoloji: "科学与技术",
        category_Sanat: "艺术",
        category_Edebiyat: "文学",
        category_Sinema_ve_Televizyon: "电影与电视",
        category_Müzik: "音乐",
        category_Spor: "体育",
        category_Matematik: "数学",
        category_Felsefe: "哲学",
        category_Mitoloji: "神话",
        category_Doğa_ve_Çevre: "自然与环境",
        category_Genel_Kültür: "常识",
        category_Güncel_Olaylar: "时事",

        
        achievements_bilimTomurcugu_name: "科学萌芽",
        achievements_bilimTomurcugu_desc: "正确回答10个“科学与技术”问题。",
        achievements_stratejist_name: "战略家",
        achievements_stratejist_desc: "在单局游戏中使用所有类型的王牌。",
        achievements_bilgelikSerisi_name: "智慧连胜",
        achievements_bilgelikSerisi_desc: "连续正确回答5个问题。",
        achievements_oyunAcemisi_name: "游戏新手",
        achievements_oyunAcemisi_desc: "完成您的第一局游戏（任何模式）。",
        achievements_merakliZihin_name: "好奇心",
        achievements_merakliZihin_desc: "总共正确回答50个问题。",
        achievements_kategoriKasifi_name: "分类探险家",
        achievements_kategoriKasifi_desc: "在3个不同分类中各至少答对3题。",
        achievements_klasikUzmani_name: "经典专家",
        achievements_klasikUzmani_desc: "在经典模式中获得200分以上。",
        achievements_hizTutkunu_name: "速度爱好者",
        achievements_hizTutkunu_desc: "在计时赛模式中答对15题以上。",
        achievements_hayattaKalan_name: "幸存者",
        achievements_hayattaKalan_desc: "在生存模式中答对10题以上。",
        achievements_uzunSeri_name: "长期连胜",
        achievements_uzunSeri_desc: "连续正确回答10个问题。",
        achievements_jokerSever_name: "王牌爱好者",
        achievements_jokerSever_desc: "总共使用20张王牌（任何类型）。",
        achievements_puanAvcisi_name: "分数猎人",
        achievements_puanAvcisi_desc: "在单局经典游戏中获得300分以上。",
        achievements_bilgiKurdu_name: "书虫",
        achievements_bilgiKurdu_desc: "总共正确回答250个问题。",
        achievements_kategoriUstasi_name: "分类大师",
        achievements_kategoriUstasi_desc: "以80%以上的成功率完成分类专家模式（最少10题）。",
        achievements_zamanEfendisi_name: "时间领主",
        achievements_zamanEfendisi_desc: "在计时赛模式中答对25题以上。",
        achievements_yenilmezRuh_name: "不败精神",
        achievements_yenilmezRuh_desc: "在生存模式中答对20题以上。",
        achievements_mukemmeliyetciOyuncu_name: "完美主义者",
        achievements_mukemmeliyetciOyuncu_desc: "无错误地完成一局经典游戏（最少10题）。",
        achievements_jokersizKahraman_name: "无王牌英雄",
        achievements_jokersizKahraman_desc: "不使用任何王牌完成一局经典游戏（最少10题，150分以上）。",
        achievements_tarihciRuhu_name: "历史学家之魂",
        achievements_tarihciRuhu_desc: "正确回答20个历史问题。",
        achievements_cografyaMeraki_name: "地理爱好者",
        achievements_cografyaMeraki_desc: "正确回答20个地理问题。",
        achievements_sanatElestirmeni_name: "艺术评论家",
        achievements_sanatElestirmeni_desc: "正确回答15个艺术问题。",
        achievements_edebiyatAsigi_name: "文学爱好者",
        achievements_edebiyatAsigi_desc: "正确回答15个文学问题。",
        achievements_sporTutkunu_name: "体育狂人",
        achievements_sporTutkunu_desc: "正确回答15个体育问题。",
        achievements_matematikCanavari_name: "数学怪才",
        achievements_matematikCanavari_desc: "正确回答10个数学问题。",
        achievements_filozofTohumu_name: "哲学家之种",
        achievements_filozofTohumu_desc: "正确回答10个哲学问题。",
        achievements_mitolojiAvcisi_name: "神话猎人",
        achievements_mitolojiAvcisi_desc: "正确回答10个神话问题。",
        achievements_bilge_name: "智者",
        achievements_bilge_desc: "总共正确回答500个问题。",
        achievements_ansiklopedi_name: "百科全书",
        achievements_ansiklopedi_desc: "总共正确回答1000个问题。",
        achievements_ilkAlisveris_name: "首次购买",
        achievements_ilkAlisveris_desc: "首次在商店购买任何物品。",
        achievements_isAdami_name: "商人",
        achievements_isAdami_desc: "在商店总共花费10,000金币。",
        achievements_adanmisOyuncu_name: "忠实玩家",
        achievements_adanmisOyuncu_desc: "完成7日奖励连胜并领取大奖。",
        achievements_maceraciRuh_name: "冒险精神",
        achievements_maceraciRuh_desc: "在简单、中等和困难难度下至少各完成一次游戏。",
        achievements_katkidaBulunan_name: "贡献者",
        achievements_katkidaBulunan_desc: "使用“提交问题”功能支持游戏发展。",
        achievements_zorluZeka_name: "智慧挑战",
        achievements_zorluZeka_desc: "在困难难度的经典游戏中以250分以上完成。",
        achievements_hizliVeMerakli_name: "眼疾手快",
        achievements_hizliVeMerakli_desc: "在3秒内正确回答一个问题。",
        achievements_sonSaniyeci_name: "压哨抢答",
        achievements_sonSaniyeci_desc: "在最后1秒正确回答一个问题。",
        achievements_modGezgini_name: "模式探险家",
        achievements_modGezgini_desc: "至少玩过所有游戏模式（经典、计时赛、生存、分类专家）一次。",
        
        'tooManyWrongAnswers': "回答错误4次。游戏结束！",
        'wrongLabel': "错误！",
        'İstatistikler': '统计',

        profile: "个人资料 👤",
        statistics: "统计",
        languageSettings: "语言设置",
        soundSettings: "声音设置",
        dataManagement: "数据管理",
        watchAndEarn: "观看并赚取",
        earnGold: "赚取金币",
        earnGoldDesc: "+50 金币",
        watchBtn: "观看",
        earnLife: "赚取生命",
        earnLifeDesc: "+1 生命",
        life_unlimited_1h: "无限生命 (1小时)",
        life_unlimited_24h: "无限生命 (24小时)",
        popular: "最受欢迎",
        selectAvatar: "选择头像",
        rateUsTitle: "喜欢我们的游戏吗？",
        rateUsDesc: "您的支持对我们至关重要。在商店给我们评分可以帮助我们接触到更多玩家！",
        rateGameBtn: "评价游戏",
        contributeTitle: "为发展做出贡献",
        contributeDesc: "您可以将希望添加到游戏中的问题发送给我们，帮助知识之树成长！",
        submitQuestionBtn: "提交问题",
        feedbackTitle: "建议和问题反馈",
        feedbackDesc: "您可以在这里报告您对游戏的想法、建议或遇到的任何问题。",
        feedbackBtn: "反馈建议/问题",
        dailyRewardsTitle: "每日奖励",
        dailyRewardsSubtitle: "每天登录领取大奖！",
        claimReward: "领取奖励",
        noScoresYet: "此模式尚无分数记录。",
 
        
        backToSettings: "返回设置",
        howToPlayTitle: "怎么玩？",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 目标</h4>
        <p>通过正确回答尽可能多的问题来获得最高分，并达到知识树的最高级别。</p>
        <hr>
        <h4>🎲 游戏模式</h4>
        <ul>
        <li><strong>经典模式：</strong>标准的问答体验。您答错的次数有限！</li>
        <li><strong>时间挑战：</strong>在时间用完之前，尽可能多地回答问题。每个正确的答案都会增加一点时间。</li>
        <li><strong>生存模式：</strong>您只有一次答错的机会。您能走多远？</li>
        <li><strong>分类专家：</strong>尝试完成您选择的类别中的所有问题。</li>
        </ul>
        <hr>
        <h4>🃏 道具</h4>
        <p>当您遇到困难时，可以使用这些道具来获得优势：</p>
        <ul>
        <li><strong>🌓 50/50：</strong>排除两个错误选项。</li>
        <li><strong>⏳ 额外时间：</strong>为您的问题计时器增加10秒。</li>
        <li><strong>⏩ 跳过：</strong>允许您跳过一个问题而不回答。（不会中断您的连胜纪录）</li>
        <li><strong>💡 提示：</strong>提供与问题相关的小提示。</li>
        </ul>`,
        
        
        creditsTitle: "制作人员",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">本游戏由<strong>BEYZZ GAMES</strong>设计和开发。</p>
        <p>感谢您加入我们培育知识之树的旅程！我们希望您在玩得开心的同时，也能学到新东西。</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">关注我们 & 联系我们</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="我们的YouTube频道"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="我们的Twitter账户"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="给我们发送电子邮件"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">版权所有。© 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "隐私政策",
        privacyContentHTML: `
        <p>我们的应用程序使用您设备的本地存储来保存您的游戏进度（分数、成就、设置等）。这些数据不会离开您的设备，也不会与任何人共享。</p>
        <p style="margin-top: 25px;">有关更详细的信息，您可以查看我们隐私政策的全文：<br>
        <a href="https://docs.google.com/document/d/1YFxgZBUGBWQiMtw2sFMn9SiG2K8uTfP4TNeEsbUtYHE/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">转到隐私政策页面</a>
        </p>`,

    },
fr: {
        gameTitle: "L'Arbre de la Connaissance",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Choisissez la difficulté :",
        difficultyEasy: "Facile",
        difficultyMedium: "Moyen",
        difficultyHard: "Difficile",
        classicMode: "Mode Classique",
        timeAttackMode: "Contre-la-montre",
        survivalMode: "Survie",
        categoryChallengeMode: "Expert par Catégorie",
        scoreboard: "Tableau des scores",
        achievements: "Succès",
        settings: "Paramètres ⚙️",
        shop: "Boutique 🛍️",
        tagline: "🍀 Votre portail vers le savoir... 🍀",

        "howToPlay": "Comment jouer ?",
        "credits": "Crédits",
        "privacyPolicy": "Politique de confidentialité",
        
        selectCategory: "Choisir une catégorie",
        backToMenu: "Menu Principal",

        categoryLabel: "Catégorie :",
        scoreLabel: "Score :",
        correctLabel: "Correct :",
        streakLabel: "Série :",
        loadingQuestions: "Chargement des questions...",
        nextQuestion: "Question suivante",
        joker5050: "50/50",
        jokerTime: "Temps +",
        jokerSkip: "Passer",
        jokerHint: "Indice",
        enterYourName: "Entrez votre nom...",
        saveScore: "Enregistrer le score",
        
        highScoresTitle: "🏆 Meilleurs Scores 🏆",
        settingsTitle: "⚙️ Paramètres ⚙️",
        achievementsTitle: "🏆 Succès 🏆",
        shopTitle: "Boutique",

        leaderboardTitle: "🏆 Classement 🏆",
        daily: "Quotidien",
        weekly: "Hebdomadaire",
        monthly: "Mensuel",
        alltime: "Général",
        
        language: "Langue :",
        backgroundMusic: "Musique de fond :",
        soundEffects: "Effets sonores :",
        mute: "Muet",
        saveSettings: "Enregistrer les paramètres",
        dangerZone: "⚠️ Zone de Danger ⚠️",
        dangerZoneDesc: "Ces actions sont irréversibles !",
        resetScores: "Réinitialiser tous les scores",
        resetAchievements: "Réinitialiser tous les succès",

        currentGold: "Or actuel :",
        jokers: "Jokers",
        lives: "Vies",
        joker5050_shop: "🌓 Joker 50/50",
        jokerTime_shop: "⏳ Joker Temps",
        jokerSkip_shop: "⏩ Joker Passer",
        jokerHint_shop: "💡 Joker Indice",
        life_single_shop: "❤️ 1 Vie",
        life_full_shop: "❤️❤️❤️ 5 Vies (Recharge complète)",
        buyButton: "Acheter",

        errorJoker5050: "Le joker 50/50 ne peut pas être utilisé pour cette question.",
        errorTimeJokerInTimeAttack: "Le joker de temps ne peut pas être utilisé dans ce mode.",
        hintUnavailable: "Aucun indice n'est disponible pour cette question.",
        scoreSaved: (name, score) => `${name}, votre score (${score}) a été enregistré !`,
        settingsSaved: "Paramètres enregistrés !",
        allScoresReset: "Tous les meilleurs scores ont été réinitialisés avec succès.",
        noScoresToReset: "Aucun score à réinitialiser n'a été trouvé.",
        allAchievementsReset: "Tous les succès et statistiques ont été réinitialisés.",
        itemBought: (itemName) => `Vous avez acheté ${itemName} !`,
        notEnoughGold: "Pas assez d'or !",
        notEnoughLives: "Vous n'avez pas assez de vies ! Vous pouvez en acheter plus dans la boutique.",
        livesFull: "Vos vies ont été entièrement rechargées !",
        confirmResetScores: "Êtes-vous sûr ? TOUS vos meilleurs scores dans tous les modes de jeu seront supprimés définitivement ! Cette action est irréversible.",
        confirmResetAchievements: "Êtes-vous sûr ? TOUS vos succès débloqués et vos statistiques seront supprimés définitivement ! Cette action est irréversible.",
        questionSkipped: "Question passée !",
        correctAnswerLabel: "Bonne réponse :",
        resetPlayerData: "Réinitialiser toutes les données du joueur",
        'confirmResetPlayerData': 'Êtes-vous sûr de vouloir supprimer définitivement toutes les données du joueur (vies, or, jokers, nom, scores ET TOUS LES SUCCÈS) ? Cette action est irréversible !',
        'tooManyWrongAnswers': "4 mauvaises réponses. Fin de la partie !",

        gameEnded: "Partie terminée !",
        yourScore: "Votre score :",
        totalCorrect: "Total correct :",
        questionsAnswered: (count) => `Vous avez répondu à ${count} questions.`,
        timeUp: "Temps écoulé !",
        noScoresForThisMode: "Aucun score enregistré pour ce mode pour le moment.",

        category_Tarih: "Histoire",
        category_Coğrafya: "Géographie",
        category_Bilim_ve_Teknoloji: "Science & Technologie",
        category_Sanat: "Art",
        category_Edebiyat: "Littérature",
        category_Sinema_ve_Televizyon: "Cinéma & Télévision",
        category_Müzik: "Musique",
        category_Spor: "Sport",
        category_Matematik: "Mathématiques",
        category_Felsefe: "Philosophie",
        category_Mitoloji: "Mythologie",
        category_Doğa_ve_Çevre: "Nature & Environnement",
        category_Genel_Kültür: "Culture Générale",
        category_Güncel_Olaylar: "Actualités",

        
        achievements_bilimTomurcugu_name: "Bourgeon de Science",
        achievements_bilimTomurcugu_desc: "Répondez correctement à 10 questions de 'Science & Technologie'.",
        achievements_stratejist_name: "Stratège",
        achievements_stratejist_desc: "Utilisez tous les types de jokers en une seule partie.",
        achievements_bilgelikSerisi_name: "Série de Sagesse",
        achievements_bilgelikSerisi_desc: "Répondez correctement à 5 questions d'affilée.",
        achievements_oyunAcemisi_name: "Novice du Jeu",
        achievements_oyunAcemisi_desc: "Terminez votre première partie (n'importe quel mode).",
        achievements_merakliZihin_name: "Esprit Curieux",
        achievements_merakliZihin_desc: "Répondez correctement à un total de 50 questions.",
        achievements_kategoriKasifi_name: "Explorateur de Catégories",
        achievements_kategoriKasifi_desc: "Répondez correctement à au moins 3 questions dans 3 catégories différentes.",
        achievements_klasikUzmani_name: "Expert du Classique",
        achievements_klasikUzmani_desc: "Obtenez un score de 200+ en mode Classique.",
        achievements_hizTutkunu_name: "Fou de Vitesse",
        achievements_hizTutkunu_desc: "Obtenez 15+ bonnes réponses en mode Contre-la-montre.",
        achievements_hayattaKalan_name: "Survivant",
        achievements_hayattaKalan_desc: "Répondez à 10+ questions en mode Survie.",
        achievements_uzunSeri_name: "Longue Série",
        achievements_uzunSeri_desc: "Répondez correctly à 10 questions d'affilée.",
        achievements_jokerSever_name: "Amateur de Jokers",
        achievements_jokerSever_desc: "Utilisez un total de 20 jokers (tous types).",
        achievements_puanAvcisi_name: "Chasseur de Scores",
        achievements_puanAvcisi_desc: "Obtenez un score de 300+ en une seule partie Classique.",
        achievements_bilgiKurdu_name: "Rat de bibliothèque",
        achievements_bilgiKurdu_desc: "Répondez correctement à un total de 250 questions.",
        achievements_kategoriUstasi_name: "Maître des Catégories",
        achievements_kategoriUstasi_desc: "Terminez un mode Expert par Catégorie avec 80%+ de réussite (min 10 questions).",
        achievements_zamanEfendisi_name: "Seigneur du Temps",
        achievements_zamanEfendisi_desc: "Obtenez 25+ bonnes réponses en mode Contre-la-montre.",
        achievements_yenilmezRuh_name: "Esprit Invincible",
        achievements_yenilmezRuh_desc: "Répondez à 20+ questions en mode Survie.",
        achievements_mukemmeliyetciOyuncu_name: "Perfectionniste",
        achievements_mukemmeliyetciOyuncu_desc: "Terminez une partie Classique (min 10 questions) sans aucune erreur.",
        achievements_jokersizKahraman_name: "Héros sans Joker",
        achievements_jokersizKahraman_desc: "Terminez une partie Classique (min 10 questions, 150+ score) sans utiliser de joker.",
        achievements_tarihciRuhu_name: "Âme d'Historien",
        achievements_tarihciRuhu_desc: "Répondez correctement à 20 questions d'Histoire.",
        achievements_cografyaMeraki_name: "Passionné de Géographie",
        achievements_cografyaMeraki_desc: "Répondez correctly à 20 questions de Géographie.",
        achievements_sanatElestirmeni_name: "Critique d'Art",
        achievements_sanatElestirmeni_desc: "Répondez correctement à 15 questions d'Art.",
        achievements_edebiyatAsigi_name: "Amoureux de la Littérature",
        achievements_edebiyatAsigi_desc: "Répondez correctement à 15 questions de Littérature.",
        achievements_sporTutkunu_name: "Fan de Sport",
        achievements_sporTutkunu_desc: "Répondez correctement à 15 questions de Sport.",
        achievements_matematikCanavari_name: "As des Maths",
        achievements_matematikCanavari_desc: "Répondez correctement à 10 questions de Mathématiques.",
        achievements_filozofTohumu_name: "Graine de Philosophe",
        achievements_filozofTohumu_desc: "Répondez correctement à 10 questions de Philosophie.",
        achievements_mitolojiAvcisi_name: "Chasseur de Mythologie",
        achievements_mitolojiAvcisi_desc: "Répondez correctement à 10 questions de Mythologie.",
        achievements_bilge_name: "Sage",
        achievements_bilge_desc: "Répondez correctement à un total de 500 questions.",
        achievements_ansiklopedi_name: "Encyclopédie",
        achievements_ansiklopedi_desc: "Répondez correctement à un total de 1000 questions.",
        achievements_ilkAlisveris_name: "Premier Achat",
        achievements_ilkAlisveris_desc: "Achetez n'importe quel article de la boutique pour la première fois.",
        achievements_isAdami_name: "Homme d'Affaires",
        achievements_isAdami_desc: "Dépensez un total de 10 000 Or dans la boutique.",
        achievements_adanmisOyuncu_name: "Joueur Dévoué",
        achievements_adanmisOyuncu_desc: "Terminez la série de récompenses de 7 jours et réclamez le grand prix.",
        achievements_maceraciRuh_name: "Âme d'Aventurier",
        achievements_maceraciRuh_desc: "Terminez le jeu au moins une fois dans les niveaux de difficulté Facile, Moyen et Difficile.",
        achievements_katkidaBulunan_name: "Contributeur",
        achievements_katkidaBulunan_desc: "Soutenez le développement du jeu en utilisant la fonction 'Proposer une question'.",
        achievements_zorluZeka_name: "Intellect Redoutable",
        achievements_zorluZeka_desc: "Terminez une partie Classique en difficulté Difficile avec un score de 250+.",
        achievements_hizliVeMerakli_name: "Rapide et Curieux",
        achievements_hizliVeMerakli_desc: "Répondez correctement à une question en moins de 3 secondes.",
        achievements_sonSaniyeci_name: "Dernière Seconde",
        achievements_sonSaniyeci_desc: "Répondez correctement à une question dans la dernière seconde.",
        achievements_modGezgini_name: "Explorateur de Modes",
        achievements_modGezgini_desc: "Jouez au moins une fois à tous les modes de jeu (Classique, Contre-la-montre, Survie, Expert par Catégorie).",
        
        'tooManyWrongAnswers': "4 mauvaises réponses. Fin de la partie !",
        'wrongLabel': "Faux !",
        'İstatistikler': 'Statistiques',

        profile: "Profil 👤",
        statistics: "Statistiques",
        languageSettings: "Paramètres de langue",
        soundSettings: "Paramètres audio",
        dataManagement: "Gestion des données",
        watchAndEarn: "Regarder & Gagner",
        earnGold: "Gagner de l'Or",
        earnGoldDesc: "+50 Or",
        watchBtn: "REGARDER",
        earnLife: "Gagner une Vie",
        earnLifeDesc: "+1 Vie",
        life_unlimited_1h: "Vies illimitées (1 heure)",
        life_unlimited_24h: "Vies illimitées (24 heures)",
        popular: "LE PLUS POPULAIRE",
        selectAvatar: "Choisir un avatar",
        rateUsTitle: "Vous aimez notre jeu ?",
        rateUsDesc: "Votre soutien est précieux pour nous. Vous pouvez nous aider à toucher plus de monde en nous notant sur le store !",
        rateGameBtn: "Noter le jeu",
        contributeTitle: "Contribuer au développement",
        contributeDesc: "Aidez l'Arbre de la Connaissance à grandir en nous envoyant les questions que vous aimeriez voir ajoutées au jeu !",
        submitQuestionBtn: "Proposer une question",
        feedbackTitle: "Suggérer & Signaler un problème",
        feedbackDesc: "Vous pouvez nous faire part de vos idées, suggestions ou des problèmes que vous avez rencontrés ici.",
        feedbackBtn: "Suggérer/Signaler",
        dailyRewardsTitle: "Récompenses Quotidiennes",
        dailyRewardsSubtitle: "Connectez-vous chaque jour pour le grand prix !",
        claimReward: "Réclamer la récompense",
        noScoresYet: "Aucun score enregistré pour ce mode pour le moment.",

        
        backToSettings: "Retour aux paramètres",
        howToPlayTitle: "Comment jouer ?",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Objectif</h4>
        <p>Obtenir le score le plus élevé en répondant correctement à un maximum de questions et atteindre le plus haut niveau de l'Arbre de la Connaissance.</p>
        <hr>
        <h4>🎲 Modes de jeu</h4>
        <ul>
        <li><strong>Mode Classique :</strong> L'expérience de quiz standard. Vous avez un nombre limité de mauvaises réponses !</li>
        <li><strong>Contre-la-montre :</strong> Répondez à autant de questions que possible avant la fin du temps imparti. Chaque bonne réponse ajoute un peu de temps.</li>
        <li><strong>Survie :</strong> Vous n'avez droit qu'à une seule mauvaise réponse. Jusqu'où irez-vous ?</li>
        <li><strong>Expert par catégorie :</strong> Essayez de terminer toutes les questions d'une catégorie que vous choisissez.</li>
        </ul>
        <hr>
        <h4>🃏 Jokers</h4>
        <p>Vous pouvez utiliser ces jokers pour obtenir un avantage lorsque vous êtes bloqué :</p>
        <ul>
        <li><strong>🌓 50/50 :</strong> Élimine deux mauvaises options.</li>
        <li><strong>⏳ Temps supplémentaire :</strong> Ajoute 10 secondes à votre chronomètre.</li>
        <li><strong>⏩ Passer :</strong> Vous permet de passer une question sans y répondre. (Ne brise pas votre série)</li>
        <li><strong>💡 Indice :</strong> Fournit un petit indice lié à la question.</li>
        </ul>`,
        
        
        creditsTitle: "Crédits",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Ce jeu a été conçu et développé par <strong>BEYZZ GAMES</strong>.</p>
        <p>Merci de nous rejoindre dans notre aventure pour faire grandir l'Arbre de la Connaissance ! Nous espérons que vous vous amuserez et apprendrez de nouvelles choses en jouant.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Suivez-nous & Contactez-nous</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Notre chaîne YouTube"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Notre compte Twitter"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Envoyez-nous un e-mail"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Tous droits réservés. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Politique de confidentialité",
        privacyContentHTML: `
        <p>Notre application utilise le stockage local de votre appareil pour enregistrer votre progression dans le jeu (scores, succès, paramètres, etc.). Ces données ne quittent pas votre appareil et ne sont partagées avec personne.</p>
        <p style="margin-top: 25px;">Pour des informations plus détaillées, vous pouvez consulter le texte intégral de notre politique de confidentialité :<br>
        <a href="https://docs.google.com/document/d/1TVA68xk8HN5eGo5OcVLPwkIQSHRNu4_IDaresmq8SOI/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Accéder à la page de la politique de confidentialité</a>
        </p>`,

    },
ru: {
        gameTitle: "Древо Знаний",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Выберите сложность:",
        difficultyEasy: "Легко",
        difficultyMedium: "Средне",
        difficultyHard: "Сложно",
        classicMode: "Классический режим",
        timeAttackMode: "Игра на время",
        survivalMode: "Выживание",
        categoryChallengeMode: "Эксперт по категориям",
        scoreboard: "Таблица рекордов",
        achievements: "Достижения",
        settings: "Настройки ⚙️",
        shop: "Магазин 🛍️",
        tagline: "🍀 Ваш путь к знаниям... 🍀",

        "howToPlay": "Как играть?",
        "credits": "Создатели",
        "privacyPolicy": "Политика конфиденциальности",
        
        selectCategory: "Выберите категорию",
        backToMenu: "Главное меню",

        categoryLabel: "Категория:",
        scoreLabel: "Счёт:",
        correctLabel: "Правильно:",
        streakLabel: "Серия:",
        loadingQuestions: "Загрузка вопросов...",
        nextQuestion: "Следующий вопрос",
        joker5050: "50/50",
        jokerTime: "Время +",
        jokerSkip: "Пропустить",
        jokerHint: "Подсказка",
        enterYourName: "Введите ваше имя...",
        saveScore: "Сохранить счёт",
        
        highScoresTitle: "🏆 Рекорды 🏆",
        settingsTitle: "⚙️ Настройки ⚙️",
        achievementsTitle: "🏆 Достижения 🏆",
        shopTitle: "Магазин",

        leaderboardTitle: "🏆 Таблица лидеров 🏆",
        daily: "Ежедневно",
        weekly: "Еженедельно",
        monthly: "Ежемесячно",
        alltime: "За всё время",
        
        language: "Язык:",
        backgroundMusic: "Фоновая музыка:",
        soundEffects: "Звуковые эффекты:",
        mute: "Без звука",
        saveSettings: "Сохранить настройки",
        dangerZone: "⚠️ Опасная зона ⚠️",
        dangerZoneDesc: "Эти действия необратимы!",
        resetScores: "Сбросить все очки",
        resetAchievements: "Сбросить все достижения",

        currentGold: "Имеющееся золото:",
        jokers: "Джокеры",
        lives: "Жизни",
        joker5050_shop: "🌓 Джокер 50/50",
        jokerTime_shop: "⏳ Джокер 'Время'",
        jokerSkip_shop: "⏩ Джокер 'Пропуск'",
        jokerHint_shop: "💡 Джокер 'Подсказка'",
        life_single_shop: "❤️ 1 жизнь",
        life_full_shop: "❤️❤️❤️ 5 жизней (полное пополнение)",
        buyButton: "Купить",

        errorJoker5050: "Джокер 50/50 нельзя использовать для этого вопроса.",
        errorTimeJokerInTimeAttack: "Джокер времени нельзя использовать в этом режиме.",
        hintUnavailable: "Для этого вопроса нет подсказки.",
        scoreSaved: (name, score) => `${name}, ваш счёт (${score}) сохранён!`,
        settingsSaved: "Настройки сохранены!",
        allScoresReset: "Все рекорды успешно сброшены.",
        noScoresToReset: "Записи очков для сброса не найдены.",
        allAchievementsReset: "Все достижения и статистика сброшены.",
        itemBought: (itemName) => `Вы купили ${itemName}!`,
        notEnoughGold: "Недостаточно золота!",
        notEnoughLives: "У вас недостаточно жизней! Вы можете купить больше в магазине.",
        livesFull: "Ваши жизни полностью восстановлены!",
        confirmResetScores: "Вы уверены? ВСЕ ваши рекорды во всех режимах игры будут безвозвратно удалены! Это действие нельзя отменить.",
        confirmResetAchievements: "Вы уверены? ВСЕ ваши разблокированные достижения и статистика будут безвозвратно удалены! Это действие нельзя отменить.",
        questionSkipped: "Вопрос пропущен!",
        correctAnswerLabel: "Правильный ответ:",
        resetPlayerData: "Сбросить все данные игрока",
        'confirmResetPlayerData': 'Вы уверены, что хотите безвозвратно удалить все данные игрока (жизни, золото, джокеры, имя, очки и ВСЕ ДОСТИЖЕНИЯ)? Это действие нельзя отменить!',
        'tooManyWrongAnswers': "4 неправильных ответа. Игра окончена!",

        gameEnded: "Игра окончена!",
        yourScore: "Ваш счёт:",
        totalCorrect: "Всего правильных:",
        questionsAnswered: (count) => `Вы ответили на ${count} вопросов.`,
        timeUp: "Время вышло!",
        noScoresForThisMode: "Для этого режима пока нет сохраненных очков.",

        category_Tarih: "История",
        category_Coğrafya: "География",
        category_Bilim_ve_Teknoloji: "Наука и технологии",
        category_Sanat: "Искусство",
        category_Edebiyat: "Литература",
        category_Sinema_ve_Televizyon: "Кино и телевидение",
        category_Müzik: "Музыка",
        category_Spor: "Спорт",
        category_Matematik: "Математика",
        category_Felsefe: "Философия",
        category_Mitoloji: "Мифология",
        category_Doğa_ve_Çevre: "Природа и окружающая среда",
        category_Genel_Kültür: "Общие знания",
        category_Güncel_Olaylar: "Текущие события",

        
        achievements_bilimTomurcugu_name: "Росток науки",
        achievements_bilimTomurcugu_desc: "Правильно ответьте на 10 вопросов из категории 'Наука и технологии'.",
        achievements_stratejist_name: "Стратег",
        achievements_stratejist_desc: "Используйте все типы джокеров в одной игре.",
        achievements_bilgelikSerisi_name: "Серия мудрости",
        achievements_bilgelikSerisi_desc: "Правильно ответьте на 5 вопросов подряд.",
        achievements_oyunAcemisi_name: "Новичок в игре",
        achievements_oyunAcemisi_desc: "Завершите свою первую игру (любой режим).",
        achievements_merakliZihin_name: "Любознательный ум",
        achievements_merakliZihin_desc: "Правильно ответьте на 50 вопросов.",
        achievements_kategoriKasifi_name: "Исследователь категорий",
        achievements_kategoriKasifi_desc: "Правильно ответьте как минимум на 3 вопроса в 3 разных категориях.",
        achievements_klasikUzmani_name: "Эксперт по классике",
        achievements_klasikUzmani_desc: "Наберите 200+ очков в классическом режиме.",
        achievements_hizTutkunu_name: "Любитель скорости",
        achievements_hizTutkunu_desc: "Дайте 15+ правильных ответов в режиме 'Игра на время'.",
        achievements_hayattaKalan_name: "Выживший",
        achievements_hayattaKalan_desc: "Ответьте на 10+ вопросов в режиме 'Выживание'.",
        achievements_uzunSeri_name: "Длинная серия",
        achievements_uzunSeri_desc: "Правильно ответьте на 10 вопросов подряд.",
        achievements_jokerSever_name: "Любитель джокеров",
        achievements_jokerSever_desc: "Используйте всего 20 джокеров (любого типа).",
        achievements_puanAvcisi_name: "Охотник за очками",
        achievements_puanAvcisi_desc: "Наберите 300+ очков в одной классической игре.",
        achievements_bilgiKurdu_name: "Книжный червь",
        achievements_bilgiKurdu_desc: "Правильно ответьте на 250 вопросов.",
        achievements_kategoriUstasi_name: "Мастер категорий",
        achievements_kategoriUstasi_desc: "Завершите режим 'Эксперт по категориям' с успехом 80%+ (мин. 10 вопросов).",
        achievements_zamanEfendisi_name: "Повелитель времени",
        achievements_zamanEfendisi_desc: "Дайте 25+ правильных ответов в режиме 'Игра на время'.",
        achievements_yenilmezRuh_name: "Непобедимый дух",
        achievements_yenilmezRuh_desc: "Ответьте на 20+ вопросов в режиме 'Выживание'.",
        achievements_mukemmeliyetciOyuncu_name: "Перфекционист",
        achievements_mukemmeliyetciOyuncu_desc: "Завершите классическую игру (мин. 10 вопросов) без ошибок.",
        achievements_jokersizKahraman_name: "Герой без джокеров",
        achievements_jokersizKahraman_desc: "Завершите классическую игру (мин. 10 вопросов, 150+ очков) без использования джокеров.",
        achievements_tarihciRuhu_name: "Дух историка",
        achievements_tarihciRuhu_desc: "Правильно ответьте на 20 вопросов по истории.",
        achievements_cografyaMeraki_name: "Любитель географии",
        achievements_cografyaMeraki_desc: "Правильно ответьте на 20 вопросов по географии.",
        achievements_sanatElestirmeni_name: "Искусствовед",
        achievements_sanatElestirmeni_desc: "Правильно ответьте на 15 вопросов по искусству.",
        achievements_edebiyatAsigi_name: "Любитель литературы",
        achievements_edebiyatAsigi_desc: "Правильно ответьте на 15 вопросов по литературе.",
        achievements_sporTutkunu_name: "Спортивный фанат",
        achievements_sporTutkunu_desc: "Правильно ответьте на 15 вопросов о спорте.",
        achievements_matematikCanavari_name: "Монстр математики",
        achievements_matematikCanavari_desc: "Правильно ответьте на 10 вопросов по математике.",
        achievements_filozofTohumu_name: "Семя философа",
        achievements_filozofTohumu_desc: "Правильно ответьте на 10 вопросов по философии.",
        achievements_mitolojiAvcisi_name: "Охотник за мифами",
        achievements_mitolojiAvcisi_desc: "Правильно ответьте на 10 вопросов по мифологии.",
        achievements_bilge_name: "Мудрец",
        achievements_bilge_desc: "Правильно ответьте на 500 вопросов.",
        achievements_ansiklopedi_name: "Энциклопедия",
        achievements_ansiklopedi_desc: "Правильно ответьте на 1000 вопросов.",
        achievements_ilkAlisveris_name: "Первая покупка",
        achievements_ilkAlisveris_desc: "Купите любой товар в магазине впервые.",
        achievements_isAdami_name: "Бизнесмен",
        achievements_isAdami_desc: "Потратьте в магазине в общей сложности 10 000 золота.",
        achievements_adanmisOyuncu_name: "Преданный игрок",
        achievements_adanmisOyuncu_desc: "Завершите 7-дневную серию наград и получите главный приз.",
        achievements_maceraciRuh_name: "Дух авантюризма",
        achievements_maceraciRuh_desc: "Завершите игру хотя бы по одному разу на легком, среднем и сложном уровнях.",
        achievements_katkidaBulunan_name: "Участник",
        achievements_katkidaBulunan_desc: "Поддержите развитие игры, используя функцию 'Предложить вопрос'.",
        achievements_zorluZeka_name: "Сложный интеллект",
        achievements_zorluZeka_desc: "Завершите классическую игру на сложном уровне с 250+ очками.",
        achievements_hizliVeMerakli_name: "Быстрый и любопытный",
        achievements_hizliVeMerakli_desc: "Правильно ответьте на вопрос менее чем за 3 секунды.",
        achievements_sonSaniyeci_name: "Последняя секунда",
        achievements_sonSaniyeci_desc: "Правильно ответьте на вопрос в последнюю секунду.",
        achievements_modGezgini_name: "Исследователь режимов",
        achievements_modGezgini_desc: "Сыграйте хотя бы один раз во все режимы игры (Классический, Игра на время, Выживание, Эксперт по категориям).",
        
        'tooManyWrongAnswers': "4 неправильных ответа. Игра окончена!",
        'wrongLabel': "Неправильно!",
        'İstatistikler': 'Статистика',

        profile: "Профиль 👤",
        statistics: "Статистика",
        languageSettings: "Настройки языка",
        soundSettings: "Настройки звука",
        dataManagement: "Управление данными",
        watchAndEarn: "Смотри и зарабатывай",
        earnGold: "Заработать золото",
        earnGoldDesc: "+50 золота",
        watchBtn: "СМОТРЕТЬ",
        earnLife: "Заработать жизнь",
        earnLifeDesc: "+1 жизнь",
        life_unlimited_1h: "Бесконечные жизни (1 час)",
        life_unlimited_24h: "Бесконечные жизни (24 часа)",
        popular: "САМОЕ ПОПУЛЯРНОЕ",
        selectAvatar: "Выбрать аватар",
        rateUsTitle: "Вам нравится наша игра?",
        rateUsDesc: "Ваша поддержка очень важна для нас. Оценив нас в магазине, вы поможете нам охватить больше людей!",
        rateGameBtn: "Оценить игру",
        contributeTitle: "Внести вклад в развитие",
        contributeDesc: "Помогите Древу Знаний расти, присылая нам вопросы, которые вы хотели бы видеть в игре!",
        submitQuestionBtn: "Предложить вопрос",
        feedbackTitle: "Сообщить о предложениях и проблемах",
        feedbackDesc: "Здесь вы можете сообщить нам о своих идеях, предложениях или проблемах, с которыми вы столкнулись.",
        feedbackBtn: "Сообщить о предложении/проблеме",
        dailyRewardsTitle: "Ежедневные награды",
        dailyRewardsSubtitle: "Заходите каждый день за главным призом!",
        claimReward: "Получить награду",
        noScoresYet: "Для этого режима пока нет сохраненных очков.",

        
        backToSettings: "Вернуться к настройкам",
        howToPlayTitle: "Как играть?",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Цель</h4>
        <p>Набрать как можно больше очков, правильно ответив на максимальное количество вопросов, и достичь самого высокого уровня на Древе Знаний.</p>
        <hr>
        <h4>🎲 Режимы игры</h4>
        <ul>
        <li><strong>Классический режим:</strong> Стандартный режим викторины. У вас ограниченное количество неправильных ответов!</li>
        <li><strong>На время:</strong> Ответьте на как можно больше вопросов, пока не истечет время. Каждый правильный ответ добавляет немного времени.</li>
        <li><strong>Выживание:</strong> У вас есть только один шанс на ошибку. Как далеко вы сможете зайти?</li>
        <li><strong>Эксперт по категориям:</strong> Постарайтесь закончить все вопросы в выбранной вами категории.</li>
        </ul>
        <hr>
        <h4>🃏 Подсказки</h4>
        <p>Вы можете использовать эти подсказки, чтобы получить преимущество, когда вы в затруднении:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Убирает два неправильных варианта.</li>
        <li><strong>⏳ Дополнительное время:</strong> Добавляет 10 секунд к таймеру вопроса.</li>
        <li><strong>⏩ Пропустить:</strong> Позволяет пропустить вопрос, не отвечая на него. (Не прерывает вашу серию)</li>
        <li><strong>💡 Намёк:</strong> Дает небольшую подсказку, связанную с вопросом.</li>
        </ul>`,
        
        
        creditsTitle: "Создатели",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Эта игра была разработана и создана <strong>BEYZZ GAMES</strong>.</p>
        <p>Спасибо, что присоединились к нашему путешествию по взращиванию Древа Знаний! Надеемся, вы получите удовольствие от игры и узнаете много нового.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Следите за нами и свяжитесь с нами</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Наш YouTube канал"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Наш аккаунт в Twitter"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Отправьте нам электронное письмо"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Все права защищены. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Политика конфиденциальности",
        privacyContentHTML: `
        <p>Наше приложение использует локальное хранилище вашего устройства для сохранения вашего игрового прогресса (очки, достижения, настройки и т.д.). Эти данные не покидают ваше устройство и ни с кем не передаются.</p>
        <p style="margin-top: 25px;">Для получения более подробной информации вы можете ознакомиться с полным текстом нашей политики конфиденциальности:<br>
        <a href="https://docs.google.com/document/d/1Y8JVF9xn1Vn8PPpPTnz7ZGyBaMUTEggl34WVXermZTw/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Перейти на страницу Политики конфиденциальности</a>
        </p>`,

    },
ja: {
        gameTitle: "知識の木",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "難易度を選択:",
        difficultyEasy: "簡単",
        difficultyMedium: "普通",
        difficultyHard: "難しい",
        classicMode: "クラシックモード",
        timeAttackMode: "タイムアタック",
        survivalMode: "サバイバル",
        categoryChallengeMode: "カテゴリ専門",
        scoreboard: "スコアボード",
        achievements: "実績",
        settings: "設定 ⚙️",
        shop: "ショップ 🛍️",
        tagline: "🍀 知識への扉... 🍀",

        "howToPlay": "遊び方",
        "credits": "クレジット",
        "privacyPolicy": "プライバシーポリシー",
        
        selectCategory: "カテゴリを選択",
        backToMenu: "メインメニュー",

        categoryLabel: "カテゴリ:",
        scoreLabel: "スコア:",
        correctLabel: "正解:",
        streakLabel: "連続:",
        loadingQuestions: "問題を読み込み中...",
        nextQuestion: "次の問題",
        joker5050: "50/50",
        jokerTime: "時間 +",
        jokerSkip: "スキップ",
        jokerHint: "ヒント",
        enterYourName: "名前を入力してください...",
        saveScore: "スコアを保存",
        
        highScoresTitle: "🏆 ハイスコア 🏆",
        settingsTitle: "⚙️ 設定 ⚙️",
        achievementsTitle: "🏆 実績 🏆",
        shopTitle: "ショップ",

        leaderboardTitle: "🏆 ランキング 🏆",
        daily: "デイリー",
        weekly: "ウィークリー",
        monthly: "マンスリー",
        alltime: "総合",
        
        language: "言語:",
        backgroundMusic: "BGM:",
        soundEffects: "効果音:",
        mute: "ミュート",
        saveSettings: "設定を保存",
        dangerZone: "⚠️ 危険地帯 ⚠️",
        dangerZoneDesc: "この操作は元に戻せません！",
        resetScores: "すべてのスコアをリセット",
        resetAchievements: "すべての実績をリセット",

        currentGold: "所持ゴールド:",
        jokers: "ジョーカー",
        lives: "ライフ",
        joker5050_shop: "🌓 50/50 ジョーカー",
        jokerTime_shop: "⏳ 時間ジョーカー",
        jokerSkip_shop: "⏩ スキップジョーカー",
        jokerHint_shop: "💡 ヒントジョーカー",
        life_single_shop: "❤️ 1ライフ",
        life_full_shop: "❤️❤️❤️ 5ライフ (全回復)",
        buyButton: "購入",

        errorJoker5050: "この問題では50/50ジョーカーは使用できません。",
        errorTimeJokerInTimeAttack: "このモードでは時間ジョーカーは使用できません。",
        hintUnavailable: "この問題で利用できるヒントはありません。",
        scoreSaved: (name, score) => `${name}さんのスコア（${score}）が保存されました！`,
        settingsSaved: "設定が保存されました！",
        allScoresReset: "すべてのハイスコアが正常にリセットされました。",
        noScoresToReset: "リセットするスコア記録が見つかりませんでした。",
        allAchievementsReset: "すべての実績と統計がリセットされました。",
        itemBought: (itemName) => `${itemName}を購入しました！`,
        notEnoughGold: "ゴールドが不足しています！",
        notEnoughLives: "ライフが足りません！ショップで追加購入できます。",
        livesFull: "ライフが完全に回復しました！",
        confirmResetScores: "よろしいですか？すべてのゲームモードのハイスコアが完全に削除されます！この操作は元に戻せません。",
        confirmResetAchievements: "よろしいですか？解除されたすべての実績と統計が完全に削除されます！この操作は元に戻せません。",
        questionSkipped: "問題をスキップしました！",
        correctAnswerLabel: "正解:",
        resetPlayerData: "すべてのプレイヤーデータをリセット",
        'confirmResetPlayerData': 'すべてのプレイヤーデータ（ライフ、ゴールド、ジョーカー、名前、スコア、およびすべての実績）を完全に削除してもよろしいですか？この操作は元に戻せません！',
        'tooManyWrongAnswers': "4回間違えました。ゲームオーバー！",

        gameEnded: "ゲーム終了！",
        yourScore: "あなたのスコア:",
        totalCorrect: "合計正解数:",
        questionsAnswered: (count) => `${count}問に回答しました。`,
        timeUp: "時間切れ！",
        noScoresForThisMode: "このモードにはまだ記録されたスコアがありません。",

        category_Tarih: "歴史",
        category_Coğrafya: "地理",
        category_Bilim_ve_Teknoloji: "科学技術",
        category_Sanat: "芸術",
        category_Edebiyat: "文学",
        category_Sinema_ve_Televizyon: "映画・テレビ",
        category_Müzik: "音楽",
        category_Spor: "スポーツ",
        category_Matematik: "数学",
        category_Felsefe: "哲学",
        category_Mitoloji: "神話",
        category_Doğa_ve_Çevre: "自然・環境",
        category_Genel_Kültür: "一般知識",
        category_Güncel_Olaylar: "時事問題",

        
        achievements_bilimTomurcugu_name: "科学の芽",
        achievements_bilimTomurcugu_desc: "「科学技術」の問題に10問正解する。",
        achievements_stratejist_name: "戦略家",
        achievements_stratejist_desc: "1回のゲームですべての種類のジョーカーを使用する。",
        achievements_bilgelikSerisi_name: "知恵の連続",
        achievements_bilgelikSerisi_desc: "5問連続で正解する。",
        achievements_oyunAcemisi_name: "ゲーム初心者",
        achievements_oyunAcemisi_desc: "最初のゲームをクリアする（どのモードでも可）。",
        achievements_merakliZihin_name: "好奇心旺盛",
        achievements_merakliZihin_desc: "合計50問に正解する。",
        achievements_kategoriKasifi_name: "カテゴリ探検家",
        achievements_kategoriKasifi_desc: "3つの異なるカテゴリでそれぞれ3問以上正解する。",
        achievements_klasikUzmani_name: "クラシック専門家",
        achievements_klasikUzmani_desc: "クラシックモードで200点以上獲得する。",
        achievements_hizTutkunu_name: "スピード狂",
        achievements_hizTutkunu_desc: "タイムアタックモードで15問以上正解する。",
        achievements_hayattaKalan_name: "サバイバー",
        achievements_hayattaKalan_desc: "サバイバルモードで10問以上正解する。",
        achievements_uzunSeri_name: "長期連続",
        achievements_uzunSeri_desc: "10問連続で正解する。",
        achievements_jokerSever_name: "ジョーカー好き",
        achievements_jokerSever_desc: "合計で20回ジョーカーを使用する（種類問わず）。",
        achievements_puanAvcisi_name: "スコアハンター",
        achievements_puanAvcisi_desc: "1回のクラシックゲームで300点以上獲得する。",
        achievements_bilgiKurdu_name: "本の虫",
        achievements_bilgiKurdu_desc: "合計で250問に正解する。",
        achievements_kategoriUstasi_name: "カテゴリマスター",
        achievements_kategoriUstasi_desc: "カテゴリ専門モードを80%以上の正解率でクリアする（最低10問）。",
        achievements_zamanEfendisi_name: "時の支配者",
        achievements_zamanEfendisi_desc: "タイムアタックモードで25問以上正解する。",
        achievements_yenilmezRuh_name: "不屈の精神",
        achievements_yenilmezRuh_desc: "サバイバルモードで20問以上正解する。",
        achievements_mukemmeliyetciOyuncu_name: "完璧主義者",
        achievements_mukemmeliyetciOyuncu_desc: "クラシックゲームをミスなしでクリアする（最低10問）。",
        achievements_jokersizKahraman_name: "ジョーカーなしの英雄",
        achievements_jokersizKahraman_desc: "ジョーカーを一切使わずにクラシックゲームをクリアする（最低10問、150点以上）。",
        achievements_tarihciRuhu_name: "歴史家の魂",
        achievements_tarihciRuhu_desc: "歴史の問題に20問正解する。",
        achievements_cografyaMeraki_name: "地理マニア",
        achievements_cografyaMeraki_desc: "地理の問題に20問正解する。",
        achievements_sanatElestirmeni_name: "芸術評論家",
        achievements_sanatElestirmeni_desc: "芸術の問題に15問正解する。",
        achievements_edebiyatAsigi_name: "文学愛好家",
        achievements_edebiyatAsigi_desc: "文学の問題に15問正解する。",
        achievements_sporTutkunu_name: "スポーツ狂",
        achievements_sporTutkunu_desc: "スポーツの問題に15問正解する。",
        achievements_matematikCanavari_name: "数学の怪物",
        achievements_matematikCanavari_desc: "数学の問題に10問正解する。",
        achievements_filozofTohumu_name: "哲学の種",
        achievements_filozofTohumu_desc: "哲学の問題に10問正解する。",
        achievements_mitolojiAvcisi_name: "神話ハンター",
        achievements_mitolojiAvcisi_desc: "神話の問題に10問正解する。",
        achievements_bilge_name: "賢者",
        achievements_bilge_desc: "合計で500問に正解する。",
        achievements_ansiklopedi_name: "百科事典",
        achievements_ansiklopedi_desc: "合計で1000問に正解する。",
        achievements_ilkAlisveris_name: "初めての購入",
        achievements_ilkAlisveris_desc: "ショップで初めてアイテムを購入する。",
        achievements_isAdami_name: "ビジネスマン",
        achievements_isAdami_desc: "ショップで合計10,000ゴールドを使用する。",
        achievements_adanmisOyuncu_name: "熱心なプレイヤー",
        achievements_adanmisOyuncu_desc: "7日間のログインボーナスを達成し、豪華報酬を受け取る。",
        achievements_maceraciRuh_name: "冒険者の魂",
        achievements_maceraciRuh_desc: "簡単、普通、難しいの各難易度で少なくとも1回ずつゲームをクリアする。",
        achievements_katkidaBulunan_name: "貢献者",
        achievements_katkidaBulunan_desc: "「問題投稿」機能を使ってゲームの発展に貢献する。",
        achievements_zorluZeka_name: "難解な知性",
        achievements_zorluZeka_desc: "難しい難易度のクラシックゲームを250点以上でクリアする。",
        achievements_hizliVeMerakli_name: "迅速かつ好奇心旺盛",
        achievements_hizliVeMerakli_desc: "3秒未満で問題に正解する。",
        achievements_sonSaniyeci_name: "ラストセコンド",
        achievements_sonSaniyeci_desc: "残り1秒で問題に正解する。",
        achievements_modGezgini_name: "モード探検家",
        achievements_modGezgini_desc: "すべてのゲームモード（クラシック、タイムアタック、サバイバル、カテゴリ専門）を少なくとも1回プレイする。",
        
        'tooManyWrongAnswers': "4回間違えました。ゲームオーバー！",
        'wrongLabel': "不正解！",
        'İstatistikler': '統計',

        profile: "プロフィール 👤",
        statistics: "統計",
        languageSettings: "言語設定",
        soundSettings: "サウンド設定",
        dataManagement: "データ管理",
        watchAndEarn: "視聴して獲得",
        earnGold: "ゴールドを獲得",
        earnGoldDesc: "+50 ゴールド",
        watchBtn: "視聴",
        earnLife: "ライフを獲得",
        earnLifeDesc: "+1 ライフ",
        life_unlimited_1h: "無制限ライフ (1時間)",
        life_unlimited_24h: "無制限ライフ (24時間)",
        popular: "一番人気",
        selectAvatar: "アバターを選択",
        rateUsTitle: "このゲームを気に入りましたか？",
        rateUsDesc: "皆様のサポートが私たちの力になります。ストアで評価して、より多くの人にこのゲームを届けましょう！",
        rateGameBtn: "ゲームを評価する",
        contributeTitle: "開発に貢献",
        contributeDesc: "ゲームに追加したい問題を送信して、知識の木の成長にご協力ください！",
        submitQuestionBtn: "問題を投稿",
        feedbackTitle: "提案・問題の報告",
        feedbackDesc: "ゲームに関するご意見、ご提案、または発生した問題はこちらからご報告ください。",
        feedbackBtn: "提案・問題を報告",
        dailyRewardsTitle: "デイリー報酬",
        dailyRewardsSubtitle: "毎日ログインして豪華報酬を手に入れよう！",
        claimReward: "報酬を受け取る",
        noScoresYet: "このモードにはまだ記録されたスコアがありません。",

        
        backToSettings: "設定に戻る",
        howToPlayTitle: "遊び方",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 目的</h4>
        <p>できるだけ多くの問題に正解して最高のスコアを獲得し、知識の木で最高のレベルに到達することです。</p>
        <hr>
        <h4>🎲 ゲームモード</h4>
        <ul>
        <li><strong>クラシックモード：</strong>標準的なクイズ体験。間違えられる回数には制限があります！</li>
        <li><strong>タイムアタック：</strong>時間切れになる前に、できるだけ多くの問題に正解してください。正解するごとに時間が少し増えます。</li>
        <li><strong>サバイバル：</strong>不正解は一度しか許されません。どこまで進めるでしょうか？</li>
        <li><strong>カテゴリ専門家：</strong>選択したカテゴリのすべての問題をクリアすることを目指します。</li>
        </ul>
        <hr>
        <h4>🃏 パワーアップ</h4>
        <p>困ったときには、これらのパワーアップを使って有利に進めることができます：</p>
        <ul>
        <li><strong>🌓 50/50：</strong>間違った選択肢を2つ消去します。</li>
        <li><strong>⏳ 時間追加：</strong>問題のタイマーに10秒追加します。</li>
        <li><strong>⏩ スキップ：</strong>答えずに問題をスキップできます。（連続正解は途切れません）</li>
        <li><strong>💡 ヒント：</strong>問題に関連する小さな手がかりを提供します。</li>
        </ul>`,
        
        
        creditsTitle: "クレジット",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">このゲームは<strong>BEYZZ GAMES</strong>によって設計・開発されました。</p>
        <p>知識の木を育てる私たちの旅にご参加いただき、ありがとうございます！プレイしながら楽しんで新しいことを学んでいただけることを願っています。</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">フォロー＆お問い合わせ</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="私たちのYouTubeチャンネル"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="私たちのTwitterアカウント"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="メールを送る"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">無断複写・転載を禁じます。© 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "プライバシーポリシー",
        privacyContentHTML: `
        <p>私たちのアプリケーションは、ゲームの進行状況（スコア、実績、設定など）を保存するために、お使いのデバイスのローカルストレージを使用します。このデータがデバイスの外に出ることはなく、誰とも共有されることはありません。</p>
        <p style="margin-top: 25px;">詳細については、プライバシーポリシーの全文をご覧ください：<br>
        <a href="https://docs.google.com/document/d/1RA87Ap7QEkp7hOBnFkyBo5SWOSdeuJsv5PjodizySNU/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">プライバシーポリシーのページへ</a>
        </p>`,

    },
sv: {
        gameTitle: "Kunskapens Träd",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Välj svårighetsgrad:",
        difficultyEasy: "Lätt",
        difficultyMedium: "Medel",
        difficultyHard: "Svår",
        classicMode: "Klassiskt läge",
        timeAttackMode: "Tidsattack",
        survivalMode: "Överlevnad",
        categoryChallengeMode: "Kategoriexpert",
        scoreboard: "Topplista",
        achievements: "Prestationer",
        settings: "Inställningar ⚙️",
        shop: "Butik 🛍️",
        tagline: "🍀 Din port till kunskap... 🍀",

        "howToPlay": "Hur man spelar",
        "credits": "Medverkande",
        "privacyPolicy": "Integritetspolicy",
        
        selectCategory: "Välj kategori",
        backToMenu: "Huvudmeny",

        categoryLabel: "Kategori:",
        scoreLabel: "Poäng:",
        correctLabel: "Rätt:",
        streakLabel: "Svit:",
        loadingQuestions: "Laddar frågor...",
        nextQuestion: "Nästa fråga",
        joker5050: "50/50",
        jokerTime: "Tid +",
        jokerSkip: "Hoppa över",
        jokerHint: "Ledtråd",
        enterYourName: "Ange ditt namn...",
        saveScore: "Spara poäng",
        
        highScoresTitle: "🏆 Topplistor 🏆",
        settingsTitle: "⚙️ Inställningar ⚙️",
        achievementsTitle: "🏆 Prestationer 🏆",
        shopTitle: "Butik",

        leaderboardTitle: "🏆 Topplista 🏆",
        daily: "Dagligen",
        weekly: "Veckovis",
        monthly: "Månadsvis",
        alltime: "Alla tider",
        
        language: "Språk:",
        backgroundMusic: "Bakgrundsmusik:",
        soundEffects: "Ljudeffekter:",
        mute: "Tyst",
        saveSettings: "Spara inställningar",
        dangerZone: "⚠️ Farlig zon ⚠️",
        dangerZoneDesc: "Dessa åtgärder kan inte ångras!",
        resetScores: "Nollställ alla poäng",
        resetAchievements: "Nollställ alla prestationer",

        currentGold: "Nuvarande guld:",
        jokers: "Jokrar",
        lives: "Liv",
        joker5050_shop: "🌓 50/50-Joker",
        jokerTime_shop: "⏳ Tidsjoker",
        jokerSkip_shop: "⏩ Hoppa över-Joker",
        jokerHint_shop: "💡 Ledtrådsjoker",
        life_single_shop: "❤️ 1 Liv",
        life_full_shop: "❤️❤️❤️ 5 Liv (Full påfyllning)",
        buyButton: "Köp",

        errorJoker5050: "50/50-jokern kan inte användas för denna fråga.",
        errorTimeJokerInTimeAttack: "Tidsjokern kan inte användas i detta läge.",
        hintUnavailable: "Det finns ingen ledtråd tillgänglig för denna fråga.",
        scoreSaved: (name, score) => `${name}, din poäng (${score}) har sparats!`,
        settingsSaved: "Inställningarna har sparats!",
        allScoresReset: "Alla toppresultat har nollställts.",
        noScoresToReset: "Inga poäng att nollställa hittades.",
        allAchievementsReset: "Alla prestationer och all statistik har nollställts.",
        itemBought: (itemName) => `Du köpte ${itemName}!`,
        notEnoughGold: "Inte tillräckligt med guld!",
        notEnoughLives: "Du har inte tillräckligt med liv! Du kan köpa fler i butiken.",
        livesFull: "Dina liv har fyllts på helt!",
        confirmResetScores: "Är du säker? ALLA dina toppresultat i alla spellägen kommer att raderas permanent! Denna åtgärd kan inte ångras.",
        confirmResetAchievements: "Är du säker? ALLA dina upplåsta prestationer och din statistik kommer att raderas permanent! Denna åtgärd kan inte ångras.",
        questionSkipped: "Frågan hoppades över!",
        correctAnswerLabel: "Rätt svar:",
        resetPlayerData: "Nollställ all spelardata",
        'confirmResetPlayerData': 'Är du säker på att du vill radera all spelardata (liv, guld, jokrar, namn, poäng OCH ALLA PRESTATIONER) permanent? Denna åtgärd kan inte ångras!',
        'tooManyWrongAnswers': "4 felaktiga svar. Spelet är över!",

        gameEnded: "Spelet är över!",
        yourScore: "Din poäng:",
        totalCorrect: "Totalt antal rätt:",
        questionsAnswered: (count) => `Du svarade på ${count} frågor.`,
        timeUp: "Tiden är ute!",
        noScoresForThisMode: "Det finns inga sparade poäng för detta läge än.",

        category_Tarih: "Historia",
        category_Coğrafya: "Geografi",
        category_Bilim_ve_Teknoloji: "Vetenskap & Teknik",
        category_Sanat: "Konst",
        category_Edebiyat: "Litteratur",
        category_Sinema_ve_Televizyon: "Film & TV",
        category_Müzik: "Musik",
        category_Spor: "Sport",
        category_Matematik: "Matematik",
        category_Felsefe: "Filosofi",
        category_Mitoloji: "Mytologi",
        category_Doğa_ve_Çevre: "Natur & Miljö",
        category_Genel_Kültür: "Allmänbildning",
        category_Güncel_Olaylar: "Aktuella händelser",

        
        achievements_bilimTomurcugu_name: "Vetenskapsknopp",
        achievements_bilimTomurcugu_desc: "Svara rätt på 10 frågor inom 'Vetenskap & Teknik'.",
        achievements_stratejist_name: "Strateg",
        achievements_stratejist_desc: "Använd alla jokertyper i ett och samma spel.",
        achievements_bilgelikSerisi_name: "Visdomssvit",
        achievements_bilgelikSerisi_desc: "Svara rätt på 5 frågor i rad.",
        achievements_oyunAcemisi_name: "Spelnybörjare",
        achievements_oyunAcemisi_desc: "Slutför ditt första spel (valfritt läge).",
        achievements_merakliZihin_name: "Nyfiket sinne",
        achievements_merakliZihin_desc: "Svara rätt på totalt 50 frågor.",
        achievements_kategoriKasifi_name: "Kategoriutforskare",
        achievements_kategoriKasifi_desc: "Svara rätt på minst 3 frågor i 3 olika kategorier.",
        achievements_klasikUzmani_name: "Klassisk expert",
        achievements_klasikUzmani_desc: "Få 200+ poäng i klassiskt läge.",
        achievements_hizTutkunu_name: "Fartentusiast",
        achievements_hizTutkunu_desc: "Få 15+ rätt i tidsattack-läget.",
        achievements_hayattaKalan_name: "Överlevare",
        achievements_hayattaKalan_desc: "Svara på 10+ frågor i överlevnadsläget.",
        achievements_uzunSeri_name: "Lång svit",
        achievements_uzunSeri_desc: "Svara rätt på 10 frågor i rad.",
        achievements_jokerSever_name: "Jokerälskare",
        achievements_jokerSever_desc: "Använd totalt 20 jokrar (valfri typ).",
        achievements_puanAvcisi_name: "Poängjägare",
        achievements_puanAvcisi_desc: "Få 300+ poäng i ett enda klassiskt spel.",
        achievements_bilgiKurdu_name: "Bokmal",
        achievements_bilgiKurdu_desc: "Svara rätt på totalt 250 frågor.",
        achievements_kategoriUstasi_name: "Kategorimästare",
        achievements_kategoriUstasi_desc: "Slutför ett kategoriexpert-läge med 80%+ framgång (minst 10 frågor).",
        achievements_zamanEfendisi_name: "Tidsherre",
        achievements_zamanEfendisi_desc: "Få 25+ rätt i tidsattack-läget.",
        achievements_yenilmezRuh_name: "Oövervinnerlig ande",
        achievements_yenilmezRuh_desc: "Svara på 20+ frågor i överlevnadsläget.",
        achievements_mukemmeliyetciOyuncu_name: "Perfektionist",
        achievements_mukemmeliyetciOyuncu_desc: "Slutför ett klassiskt spel (minst 10 frågor) utan misstag.",
        achievements_jokersizKahraman_name: "Hjälte utan jokrar",
        achievements_jokersizKahraman_desc: "Slutför ett klassiskt spel (minst 10 frågor, 150+ poäng) utan att använda jokrar.",
        achievements_tarihciRuhu_name: "Historikeranda",
        achievements_tarihciRuhu_desc: "Svara rätt på 20 historiefrågor.",
        achievements_cografyaMeraki_name: "Geografientusiast",
        achievements_cografyaMeraki_desc: "Svara rätt på 20 geografifrågor.",
        achievements_sanatElestirmeni_name: "Konstkritiker",
        achievements_sanatElestirmeni_desc: "Svara rätt på 15 konstfrågor.",
        achievements_edebiyatAsigi_name: "Litteraturälskare",
        achievements_edebiyatAsigi_desc: "Svara rätt på 15 litteraturfrågor.",
        achievements_sporTutkunu_name: "Sportfantast",
        achievements_sporTutkunu_desc: "Svara rätt på 15 sportfrågor.",
        achievements_matematikCanavari_name: "Matematikmonster",
        achievements_matematikCanavari_desc: "Svara rätt på 10 matematikfrågor.",
        achievements_filozofTohumu_name: "Filosofiskt frö",
        achievements_filozofTohumu_desc: "Svara rätt på 10 filosofifrågor.",
        achievements_mitolojiAvcisi_name: "Mytologijägare",
        achievements_mitolojiAvcisi_desc: "Svara rätt på 10 mytologifrågor.",
        achievements_bilge_name: "Vise",
        achievements_bilge_desc: "Svara rätt på totalt 500 frågor.",
        achievements_ansiklopedi_name: "Encyklopedi",
        achievements_ansiklopedi_desc: "Svara rätt på totalt 1000 frågor.",
        achievements_ilkAlisveris_name: "Första köpet",
        achievements_ilkAlisveris_desc: "Köp en valfri vara från butiken för första gången.",
        achievements_isAdami_name: "Affärsman",
        achievements_isAdami_desc: "Spendera totalt 10 000 guld i butiken.",
        achievements_adanmisOyuncu_name: "Hängiven spelare",
        achievements_adanmisOyuncu_desc: "Slutför 7-dagars belöningssviten och hämta det stora priset.",
        achievements_maceraciRuh_name: "Äventyrlig ande",
        achievements_maceraciRuh_desc: "Slutför spelet minst en gång på svårighetsgraderna Lätt, Medel och Svår.",
        achievements_katkidaBulunan_name: "Bidragsgivare",
        achievements_katkidaBulunan_desc: "Stöd spelets utveckling genom att använda funktionen 'Skicka in en fråga'.",
        achievements_zorluZeka_name: "Tufft intellekt",
        achievements_zorluZeka_desc: "Slutför ett klassiskt spel på svår nivå med 250+ poäng.",
        achievements_hizliVeMerakli_name: "Snabb och nyfiken",
        achievements_hizliVeMerakli_desc: "Svara rätt på en fråga på mindre än 3 sekunder.",
        achievements_sonSaniyeci_name: "Sista sekunden",
        achievements_sonSaniyeci_desc: "Svara rätt på en fråga under den sista sekunden.",
        achievements_modGezgini_name: "Lägesutforskare",
        achievements_modGezgini_desc: "Spela alla spellägen (Klassiskt, Tidsattack, Överlevnad, Kategoriexpert) minst en gång.",
        
        'tooManyWrongAnswers': "4 felaktiga svar. Spelet är över!",
        'wrongLabel': "Fel!",
        'İstatistikler': 'Statistik',

        profile: "Profil 👤",
        statistics: "Statistik",
        languageSettings: "Språkinställningar",
        soundSettings: "Ljudinställningar",
        dataManagement: "Datahantering",
        watchAndEarn: "Titta & Tjäna",
        earnGold: "Tjäna guld",
        earnGoldDesc: "+50 guld",
        watchBtn: "TITTA",
        earnLife: "Tjäna liv",
        earnLifeDesc: "+1 liv",
        life_unlimited_1h: "Obegränsat med liv (1 timme)",
        life_unlimited_24h: "Obegränsat med liv (24 timmar)",
        popular: "MEST POPULÄR",
        selectAvatar: "Välj avatar",
        rateUsTitle: "Gillar du vårt spel?",
        rateUsDesc: "Ditt stöd är värdefullt för oss. Du kan hjälpa oss att nå fler människor genom att betygsätta oss i butiken!",
        rateGameBtn: "Betygsätt spelet",
        contributeTitle: "Bidra till utvecklingen",
        contributeDesc: "Hjälp Kunskapens Träd att växa genom att skicka in frågor som du skulle vilja se i spelet!",
        submitQuestionBtn: "Skicka in fråga",
        feedbackTitle: "Lämna förslag & rapportera problem",
        feedbackDesc: "Du kan rapportera dina idéer, förslag eller problem du har stött på här.",
        feedbackBtn: "Lämna förslag/Rapportera",
        dailyRewardsTitle: "Dagliga belöningar",
        dailyRewardsSubtitle: "Logga in varje dag för att få det stora priset!",
        claimReward: "Hämta belöning",
        noScoresYet: "Det finns inga sparade poäng för detta läge än.",

        
        backToSettings: "Tillbaka till inställningar",
        howToPlayTitle: "Hur man spelar",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Mål</h4>
        <p>Att få högsta poäng genom att svara rätt på så många frågor som möjligt och nå den högsta nivån på Kunskapens träd.</p>
        <hr>
        <h4>🎲 Spellägen</h4>
        <ul>
        <li><strong>Klassiskt läge:</strong> Standardfrågesportupplevelsen. Du har ett begränsat antal felaktiga svar!</li>
        <li><strong>Tidsattack:</strong> Svara på så många frågor du kan innan tiden tar slut. Varje rätt svar ger lite extra tid.</li>
        <li><strong>Överlevnad:</strong> Du har bara en chans att svara fel. Hur långt kan du gå?</li>
        <li><strong>Kategoriexpert:</strong> Försök att slutföra alla frågor i en kategori du väljer.</li>
        </ul>
        <hr>
        <h4>🃏 Livlinor</h4>
        <p>Du kan använda dessa livlinor för att få en fördel när du har kört fast:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Tar bort två felaktiga svarsalternativ.</li>
        <li><strong>⏳ Extra tid:</strong> Lägger till 10 sekunder på din frågetimer.</li>
        <li><strong>⏩ Hoppa över:</strong> Låter dig hoppa över en fråga utan att svara. (Bryter inte din segersvit)</li>
        <li><strong>💡 Ledtråd:</strong> Ger en liten ledtråd relaterad till frågan.</li>
        </ul>`,
        
        
        creditsTitle: "Medverkande",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Detta spel har designats och utvecklats av <strong>BEYZZ GAMES</strong>.</p>
        <p>Tack för att du följer med oss på resan för att få Kunskapens träd att växa! Vi hoppas att du har roligt och lär dig nya saker medan du spelar.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Följ oss & Kontakta oss</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Vår YouTube-kanal"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Vårt Twitter-konto"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Skicka ett e-postmeddelande till oss"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Alla rättigheter förbehållna. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Integritetspolicy",
        privacyContentHTML: `
        <p>Vår applikation använder din enhets lokala lagring för att spara dina spelframsteg (poäng, prestationer, inställningar etc.). Denna data lämnar inte din enhet och delas inte med någon.</p>
        <p style="margin-top: 25px;">För mer detaljerad information kan du läsa den fullständiga texten i vår integritetspolicy:<br>
        <a href="https://docs.google.com/document/d/1HcAyNJnYuVOsKODU-CaFUiWtpkeSFQRiIFi4i3mQf28/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Gå till sidan för integritetspolicy</a>
        </p>`,

    },
it: {
        gameTitle: "L'Albero della Conoscenza",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Seleziona la difficoltà:",
        difficultyEasy: "Facile",
        difficultyMedium: "Medio",
        difficultyHard: "Difficile",
        classicMode: "Modalità Classica",
        timeAttackMode: "Attacco a Tempo",
        survivalMode: "Sopravvivenza",
        categoryChallengeMode: "Esperto di Categoria",
        scoreboard: "Classifica",
        achievements: "Obiettivi",
        settings: "Impostazioni ⚙️",
        shop: "Negozio 🛍️",
        tagline: "🍀 La tua porta verso la conoscenza... 🍀",

        "howToPlay": "Come si gioca?",
        "credits": "Crediti",
        "privacyPolicy": "Informativa sulla privacy",
        
        selectCategory: "Seleziona Categoria",
        backToMenu: "Menu Principale",

        categoryLabel: "Categoria:",
        scoreLabel: "Punteggio:",
        correctLabel: "Corrette:",
        streakLabel: "Serie:",
        loadingQuestions: "Caricamento domande...",
        nextQuestion: "Prossima Domanda",
        joker5050: "50/50",
        jokerTime: "Tempo +",
        jokerSkip: "Salta",
        jokerHint: "Suggerimento",
        enterYourName: "Inserisci il tuo nome...",
        saveScore: "Salva Punteggio",
        
        highScoresTitle: "🏆 Punteggi Migliori 🏆",
        settingsTitle: "⚙️ Impostazioni ⚙️",
        achievementsTitle: "🏆 Obiettivi 🏆",
        shopTitle: "Negozio",

        leaderboardTitle: "🏆 Classifica 🏆",
        daily: "Giornaliera",
        weekly: "Settimanale",
        monthly: "Mensile",
        alltime: "Generale",
        
        language: "Lingua:",
        backgroundMusic: "Musica di sottofondo:",
        soundEffects: "Effetti sonori:",
        mute: "Muto",
        saveSettings: "Salva Impostazioni",
        dangerZone: "⚠️ Zona Pericolosa ⚠️",
        dangerZoneDesc: "Queste azioni non possono essere annullate!",
        resetScores: "Azzera tutti i punteggi",
        resetAchievements: "Azzera tutti gli obiettivi",

        currentGold: "Oro attuale:",
        jokers: "Jolly",
        lives: "Vite",
        joker5050_shop: "🌓 Jolly 50/50",
        jokerTime_shop: "⏳ Jolly Tempo",
        jokerSkip_shop: "⏩ Jolly Salta",
        jokerHint_shop: "💡 Jolly Suggerimento",
        life_single_shop: "❤️ 1 Vita",
        life_full_shop: "❤️❤️❤️ 5 Vite (Ricarica completa)",
        buyButton: "Compra",

        errorJoker5050: "Il jolly 50/50 non può essere usato per questa domanda.",
        errorTimeJokerInTimeAttack: "Il jolly del tempo non può essere usato in questa modalità.",
        hintUnavailable: "Nessun suggerimento disponibile per questa domanda.",
        scoreSaved: (name, score) => `${name}, il tuo punteggio (${score}) è stato salvato!`,
        settingsSaved: "Impostazioni salvate!",
        allScoresReset: "Tutti i punteggi migliori sono stati azzerati con successo.",
        noScoresToReset: "Nessun record di punteggio da azzerare.",
        allAchievementsReset: "Tutti gli obiettivi e le statistiche sono stati azzerati.",
        itemBought: (itemName) => `Hai acquistato ${itemName}!`,
        notEnoughGold: "Oro non sufficiente!",
        notEnoughLives: "Non hai abbastanza vite! Puoi acquistarne altre nel negozio.",
        livesFull: "Le tue vite sono state completamente ricaricate!",
        confirmResetScores: "Sei sicuro? TUTTI i tuoi punteggi migliori in tutte le modalità di gioco verranno eliminati permanentemente! Questa azione è irreversibile.",
        confirmResetAchievements: "Sei sicuro? TUTTI i tuoi obiettivi sbloccati e le tue statistiche verranno eliminati permanentemente! Questa azione è irreversibile.",
        questionSkipped: "Domanda saltata!",
        correctAnswerLabel: "Risposta corretta:",
        resetPlayerData: "Azzera tutti i dati del giocatore",
        'confirmResetPlayerData': 'Sei sicuro di voler eliminare permanentemente tutti i dati del giocatore (vite, oro, jolly, nome, punteggi E TUTTI GLI OBIETTIVI)? Questa azione è irreversibile!',
        'tooManyWrongAnswers': "4 risposte sbagliate. Fine del gioco!",

        gameEnded: "Gioco Finito!",
        yourScore: "Il tuo punteggio:",
        totalCorrect: "Totale risposte corrette:",
        questionsAnswered: (count) => `Hai risposto a ${count} domande.`,
        timeUp: "Tempo scaduto!",
        noScoresForThisMode: "Nessun punteggio registrato per questa modalità.",

        category_Tarih: "Storia",
        category_Coğrafya: "Geografia",
        category_Bilim_ve_Teknoloji: "Scienza e Tecnologia",
        category_Sanat: "Arte",
        category_Edebiyat: "Letteratura",
        category_Sinema_ve_Televizyon: "Cinema e Televisione",
        category_Müzik: "Musica",
        category_Spor: "Sport",
        category_Matematik: "Matematica",
        category_Felsefe: "Filosofia",
        category_Mitoloji: "Mitologia",
        category_Doğa_ve_Çevre: "Natura e Ambiente",
        category_Genel_Kültür: "Cultura Generale",
        category_Güncel_Olaylar: "Attualità",

        
        achievements_bilimTomurcugu_name: "Gemma di Scienza",
        achievements_bilimTomurcugu_desc: "Rispondi correttamente a 10 domande di 'Scienza e Tecnologia'.",
        achievements_stratejist_name: "Stratega",
        achievements_stratejist_desc: "Usa tutti i tipi di jolly in una singola partita.",
        achievements_bilgelikSerisi_name: "Serie di Saggezza",
        achievements_bilgelikSerisi_desc: "Rispondi correttamente a 5 domande di fila.",
        achievements_oyunAcemisi_name: "Principiante",
        achievements_oyunAcemisi_desc: "Completa la tua prima partita (qualsiasi modalità).",
        achievements_merakliZihin_name: "Mente Curiosa",
        achievements_merakliZihin_desc: "Rispondi correttamente a un totale di 50 domande.",
        achievements_kategoriKasifi_name: "Esploratore di Categorie",
        achievements_kategoriKasifi_desc: "Rispondi correttamente ad almeno 3 domande in 3 categorie diverse.",
        achievements_klasikUzmani_name: "Esperto del Classico",
        achievements_klasikUzmani_desc: "Ottieni 200+ punti in Modalità Classica.",
        achievements_hizTutkunu_name: "Fanatico della Velocità",
        achievements_hizTutkunu_desc: "Ottieni 15+ risposte corrette in Modalità Attacco a Tempo.",
        achievements_hayattaKalan_name: "Sopravvissuto",
        achievements_hayattaKalan_desc: "Rispondi a 10+ domande in Modalità Sopravvivenza.",
        achievements_uzunSeri_name: "Lunga Serie",
        achievements_uzunSeri_desc: "Rispondi correttamente a 10 domande di fila.",
        achievements_jokerSever_name: "Amante dei Jolly",
        achievements_jokerSever_desc: "Usa un totale di 20 jolly (qualsiasi tipo).",
        achievements_puanAvcisi_name: "Cacciatore di Punti",
        achievements_puanAvcisi_desc: "Ottieni 300+ punti in una singola partita Classica.",
        achievements_bilgiKurdu_name: "Topo di biblioteca",
        achievements_bilgiKurdu_desc: "Rispondi correttamente a un totale di 250 domande.",
        achievements_kategoriUstasi_name: "Maestro di Categoria",
        achievements_kategoriUstasi_desc: "Completa una modalità Esperto di Categoria con l'80%+ di successo (min 10 domande).",
        achievements_zamanEfendisi_name: "Signore del Tempo",
        achievements_zamanEfendisi_desc: "Ottieni 25+ risposte corrette in Modalità Attacco a Tempo.",
        achievements_yenilmezRuh_name: "Spirito Invincibile",
        achievements_yenilmezRuh_desc: "Rispondi a 20+ domande in Modalità Sopravvivenza.",
        achievements_mukemmeliyetciOyuncu_name: "Perfezionista",
        achievements_mukemmeliyetciOyuncu_desc: "Completa una partita Classica (min 10 domande) senza errori.",
        achievements_jokersizKahraman_name: "Eroe senza Jolly",
        achievements_jokersizKahraman_desc: "Completa una partita Classica (min 10 domande, 150+ punti) senza usare jolly.",
        achievements_tarihciRuhu_name: "Animo da Storico",
        achievements_tarihciRuhu_desc: "Rispondi correttamente a 20 domande di Storia.",
        achievements_cografyaMeraki_name: "Appassionato di Geografia",
        achievements_cografyaMeraki_desc: "Rispondi correttamente a 20 domande di Geografia.",
        achievements_sanatElestirmeni_name: "Critico d'Arte",
        achievements_sanatElestirmeni_desc: "Rispondi correttamente a 15 domande d'Arte.",
        achievements_edebiyatAsigi_name: "Amante della Letteratura",
        achievements_edebiyatAsigi_desc: "Rispondi correttamente a 15 domande di Letteratura.",
        achievements_sporTutkunu_name: "Fanatico dello Sport",
        achievements_sporTutkunu_desc: "Rispondi correttamente a 15 domande di Sport.",
        achievements_matematikCanavari_name: "Mostro della Matematica",
        achievements_matematikCanavari_desc: "Rispondi correttamente a 10 domande di Matematica.",
        achievements_filozofTohumu_name: "Seme di Filosofo",
        achievements_filozofTohumu_desc: "Rispondi correttamente a 10 domande di Filosofia.",
        achievements_mitolojiAvcisi_name: "Cacciatore di Mitologia",
        achievements_mitolojiAvcisi_desc: "Rispondi correttamente a 10 domande di Mitologia.",
        achievements_bilge_name: "Saggio",
        achievements_bilge_desc: "Rispondi correttamente a un totale di 500 domande.",
        achievements_ansiklopedi_name: "Enciclopedia",
        achievements_ansiklopedi_desc: "Rispondi correttamente a un totale di 1000 domande.",
        achievements_ilkAlisveris_name: "Primo Acquisto",
        achievements_ilkAlisveris_desc: "Compra un qualsiasi articolo dal negozio per la prima volta.",
        achievements_isAdami_name: "Uomo d'Affari",
        achievements_isAdami_desc: "Spendi un totale di 10.000 Oro nel negozio.",
        achievements_adanmisOyuncu_name: "Giocatore Devoto",
        achievements_adanmisOyuncu_desc: "Completa la serie di ricompense di 7 giorni e ottieni il gran premio.",
        achievements_maceraciRuh_name: "Spirito Avventuroso",
        achievements_maceraciRuh_desc: "Finisci il gioco almeno una volta a ogni livello di difficoltà: Facile, Medio e Difficile.",
        achievements_katkidaBulunan_name: "Contributore",
        achievements_katkidaBulunan_desc: "Sostieni lo sviluppo del gioco usando la funzione 'Invia una domanda'.",
        achievements_zorluZeka_name: "Ingegno Tenace",
        achievements_zorluZeka_desc: "Finisci una partita Classica a livello Difficile con 250+ punti.",
        achievements_hizliVeMerakli_name: "Veloce e Curioso",
        achievements_hizliVeMerakli_desc: "Rispondi correttamente a una domanda in meno di 3 secondi.",
        achievements_sonSaniyeci_name: "Ultimo Secondo",
        achievements_sonSaniyeci_desc: "Rispondi correttamente a una domanda nell'ultimo secondo.",
        achievements_modGezgini_name: "Esploratore di Modalità",
        achievements_modGezgini_desc: "Gioca a tutte le modalità di gioco (Classica, Attacco a Tempo, Sopravvivenza, Esperto di Categoria) almeno una volta.",
        
        'tooManyWrongAnswers': "4 risposte sbagliate. Fine del gioco!",
        'wrongLabel': "Sbagliato!",
        'İstatistikler': 'Statistiche',

        profile: "Profilo 👤",
        statistics: "Statistiche",
        languageSettings: "Impostazioni lingua",
        soundSettings: "Impostazioni audio",
        dataManagement: "Gestione dati",
        watchAndEarn: "Guarda e Guadagna",
        earnGold: "Guadagna Oro",
        earnGoldDesc: "+50 Oro",
        watchBtn: "GUARDA",
        earnLife: "Guadagna Vita",
        earnLifeDesc: "+1 Vita",
        life_unlimited_1h: "Vite illimitate (1 ora)",
        life_unlimited_24h: "Vite illimitate (24 ore)",
        popular: "PIÙ POPOLARE",
        selectAvatar: "Scegli avatar",
        rateUsTitle: "Ti piace il nostro gioco?",
        rateUsDesc: "Il tuo supporto è prezioso per noi. Puoi aiutarci a raggiungere più persone valutandoci nello store!",
        rateGameBtn: "Valuta il gioco",
        contributeTitle: "Contribuisci allo sviluppo",
        contributeDesc: "Aiuta l'Albero della Conoscenza a crescere inviandoci le domande che vorresti vedere aggiunte al gioco!",
        submitQuestionBtn: "Invia una domanda",
        feedbackTitle: "Suggerimenti e Segnalazioni",
        feedbackDesc: "Puoi segnalarci le tue idee, i tuoi suggerimenti o qualsiasi problema tu abbia riscontrato qui.",
        feedbackBtn: "Suggerisci/Segnala",
        dailyRewardsTitle: "Premi Giornalieri",
        dailyRewardsSubtitle: "Accedi ogni giorno per il gran premio!",
        claimReward: "Riscatta premio",
        noScoresYet: "Nessun punteggio ancora registrato per questa modalità.",

        
        backToSettings: "Torna alle impostazioni",
        howToPlayTitle: "Come si gioca?",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Obiettivo</h4>
        <p>Ottenere il punteggio più alto rispondendo correttamente al maggior numero di domande possibile e raggiungere il livello più alto sull'Albero della Conoscenza.</p>
        <hr>
        <h4>🎲 Modalità di gioco</h4>
        <ul>
        <li><strong>Modalità Classica:</strong> L'esperienza quiz standard. Hai un numero limitato di risposte sbagliate!</li>
        <li><strong>Attacco a tempo:</strong> Rispondi a quante più domande puoi prima che scada il tempo. Ogni risposta corretta aggiunge un po' di tempo.</li>
        <li><strong>Sopravvivenza:</strong> Hai solo una possibilità di rispondere in modo errato. Fin dove riesci ad arrivare?</li>
        <li><strong>Esperto di categoria:</strong> Cerca di completare tutte le domande in una categoria a tua scelta.</li>
        </ul>
        <hr>
        <h4>🃏 Aiuti</h4>
        <p>Puoi usare questi aiuti per ottenere un vantaggio quando sei in difficoltà:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Elimina due opzioni sbagliate.</li>
        <li><strong>⏳ Tempo extra:</strong> Aggiunge 10 secondi al timer della domanda.</li>
        <li><strong>⏩ Salta:</strong> Ti permette di saltare una domanda senza rispondere. (Non interrompe la tua serie)</li>
        <li><strong>💡 Suggerimento:</strong> Fornisce un piccolo indizio relativo alla domanda.</li>
        </ul>`,
        
        
        creditsTitle: "Crediti",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Questo gioco è stato progettato e sviluppato da <strong>BEYZZ GAMES</strong>.</p>
        <p>Grazie per esserti unito/a a noi in questo viaggio per far crescere l'Albero della Conoscenza! Speriamo che tu ti diverta e impari cose nuove giocando.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Seguici e Contattaci</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Il nostro canale YouTube"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Il nostro account Twitter"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Inviaci un'e-mail"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Tutti i diritti riservati. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Informativa sulla privacy",
        privacyContentHTML: `
        <p>La nostra applicazione utilizza la memoria locale del tuo dispositivo per salvare i tuoi progressi di gioco (punteggi, obiettivi, impostazioni, ecc.). Questi dati non lasciano il tuo dispositivo e non vengono condivisi con nessuno.</p>
        <p style="margin-top: 25px;">Per informazioni più dettagliate, puoi consultare il testo completo della nostra informativa sulla privacy:<br>
        <a href="https://docs.google.com/document/d/1iG7kGyvinToFt4DNUa_DqtZwNro4M6HgB9RK5KRIrs8/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Vai alla pagina dell'Informativa sulla privacy</a>
        </p>`,

    },
no: {
        gameTitle: "Kunnskapens Tre",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Velg vanskelighetsgrad:",
        difficultyEasy: "Lett",
        difficultyMedium: "Middels",
        difficultyHard: "Vanskelig",
        classicMode: "Klassisk modus",
        timeAttackMode: "Tidsangrep",
        survivalMode: "Overlevelse",
        categoryChallengeMode: "Kategoriekspert",
        scoreboard: "Resultattavle",
        achievements: "Prestasjoner",
        settings: "Innstillinger ⚙️",
        shop: "Butikk 🛍️",
        tagline: "🍀 Din portal til kunnskap... 🍀",

        "howToPlay": "Hvordan spille",
        "credits": "Medvirkende",
        "privacyPolicy": "Personvernerklæring",
        
        selectCategory: "Velg kategori",
        backToMenu: "Hovedmeny",

        categoryLabel: "Kategori:",
        scoreLabel: "Poeng:",
        correctLabel: "Riktig:",
        streakLabel: "Rekke:",
        loadingQuestions: "Laster inn spørsmål...",
        nextQuestion: "Neste spørsmål",
        joker5050: "50/50",
        jokerTime: "Tid +",
        jokerSkip: "Hopp over",
        jokerHint: "Hint",
        enterYourName: "Skriv inn navnet ditt...",
        saveScore: "Lagre poengsum",
        
        highScoresTitle: "🏆 Toppscorer 🏆",
        settingsTitle: "⚙️ Innstillinger ⚙️",
        achievementsTitle: "🏆 Prestasjoner 🏆",
        shopTitle: "Butikk",

        leaderboardTitle: "🏆 Toppliste 🏆",
        daily: "Daglig",
        weekly: "Ukentlig",
        monthly: "Månedlig",
        alltime: "Alle tider",
        
        language: "Språk:",
        backgroundMusic: "Bakgrunnsmusikk:",
        soundEffects: "Lydeffekter:",
        mute: "Demp",
        saveSettings: "Lagre innstillinger",
        dangerZone: "⚠️ Faresone ⚠️",
        dangerZoneDesc: "Disse handlingene kan ikke angres!",
        resetScores: "Nullstill alle poengsummer",
        resetAchievements: "Nullstill alle prestasjoner",

        currentGold: "Nåværende gull:",
        jokers: "Jokere",
        lives: "Liv",
        joker5050_shop: "🌓 50/50 Joker",
        jokerTime_shop: "⏳ Tidsjoker",
        jokerSkip_shop: "⏩ Hopp-over-joker",
        jokerHint_shop: "💡 Hint-joker",
        life_single_shop: "❤️ 1 Liv",
        life_full_shop: "❤️❤️❤️ 5 Liv (Full påfylling)",
        buyButton: "Kjøp",

        errorJoker5050: "50/50-jokeren kan ikke brukes på dette spørsmålet.",
        errorTimeJokerInTimeAttack: "Tidsjokeren kan ikke brukes i denne modusen.",
        hintUnavailable: "Det er ikke noe hint tilgjengelig for dette spørsmålet.",
        scoreSaved: (name, score) => `${name}, poengsummen din (${score}) er lagret!`,
        settingsSaved: "Innstillinger lagret!",
        allScoresReset: "Alle toppscore er nullstilt.",
        noScoresToReset: "Ingen poengsummer funnet å nullstille.",
        allAchievementsReset: "Alle prestasjoner og statistikker er nullstilt.",
        itemBought: (itemName) => `Du kjøpte ${itemName}!`,
        notEnoughGold: "Ikke nok gull!",
        notEnoughLives: "Du har ikke nok liv! Du kan kjøpe mer i butikken.",
        livesFull: "Livene dine er fylt helt opp!",
        confirmResetScores: "Er du sikker? ALLE toppscorene dine i alle spillmoduser vil bli slettet permanent! Denne handlingen kan ikke angres.",
        confirmResetAchievements: "Er du sikker? ALLE dine opplåste prestasjoner og statistikker vil bli slettet permanent! Denne handlingen kan ikke angres.",
        questionSkipped: "Spørsmål hoppet over!",
        correctAnswerLabel: "Riktig svar:",
        resetPlayerData: "Nullstill all spillerdata",
        'confirmResetPlayerData': 'Er du sikker på at du vil slette all spillerdata (liv, gull, jokere, navn, poeng OG ALLE PRESTASJONER) permanent? Denne handlingen kan ikke angres!',
        'tooManyWrongAnswers': "4 gale svar. Spillet er over!",

        gameEnded: "Spillet er over!",
        yourScore: "Din poengsum:",
        totalCorrect: "Totalt riktige:",
        questionsAnswered: (count) => `Du svarte på ${count} spørsmål.`,
        timeUp: "Tiden er ute!",
        noScoresForThisMode: "Ingen poengsum registrert for denne modusen ennå.",

        category_Tarih: "Historie",
        category_Coğrafya: "Geografi",
        category_Bilim_ve_Teknoloji: "Vitenskap og teknologi",
        category_Sanat: "Kunst",
        category_Edebiyat: "Litteratur",
        category_Sinema_ve_Televizyon: "Film og TV",
        category_Müzik: "Musikk",
        category_Spor: "Sport",
        category_Matematik: "Matematikk",
        category_Felsefe: "Filosofi",
        category_Mitoloji: "Mytologi",
        category_Doğa_ve_Çevre: "Natur og miljø",
        category_Genel_Kültür: "Allmennkunnskap",
        category_Güncel_Olaylar: "Aktuelle hendelser",

        
        achievements_bilimTomurcugu_name: "Vitenskapens Spire",
        achievements_bilimTomurcugu_desc: "Svar riktig på 10 spørsmål innen 'Vitenskap og teknologi'.",
        achievements_stratejist_name: "Strateg",
        achievements_stratejist_desc: "Bruk alle jokertyper i ett enkelt spill.",
        achievements_bilgelikSerisi_name: "Visdomsrekke",
        achievements_bilgelikSerisi_desc: "Svar riktig på 5 spørsmål på rad.",
        achievements_oyunAcemisi_name: "Nybegynner",
        achievements_oyunAcemisi_desc: "Fullfør ditt første spill (hvilken som helst modus).",
        achievements_merakliZihin_name: "Nysgjerrig sinn",
        achievements_merakliZihin_desc: "Svar riktig på totalt 50 spørsmål.",
        achievements_kategoriKasifi_name: "Kategoriutforsker",
        achievements_kategoriKasifi_desc: "Svar riktig på minst 3 spørsmål i 3 forskjellige kategorier.",
        achievements_klasikUzmani_name: "Klassisk ekspert",
        achievements_klasikUzmani_desc: "Få 200+ poeng i klassisk modus.",
        achievements_hizTutkunu_name: "Fartsentusiast",
        achievements_hizTutkunu_desc: "Få 15+ riktige svar i Tidsangrep-modus.",
        achievements_hayattaKalan_name: "Overlever",
        achievements_hayattaKalan_desc: "Svar på 10+ spørsmål i Overlevelsesmodus.",
        achievements_uzunSeri_name: "Lang rekke",
        achievements_uzunSeri_desc: "Svar riktig på 10 spørsmål på rad.",
        achievements_jokerSever_name: "Jokerelsker",
        achievements_jokerSever_desc: "Bruk totalt 20 jokere (uansett type).",
        achievements_puanAvcisi_name: "Poengjeger",
        achievements_puanAvcisi_desc: "Få 300+ poeng i ett enkelt klassisk spill.",
        achievements_bilgiKurdu_name: "Bokorm",
        achievements_bilgiKurdu_desc: "Svar riktig på totalt 250 spørsmål.",
        achievements_kategoriUstasi_name: "Kategorimester",
        achievements_kategoriUstasi_desc: "Fullfør en Kategoriekspert-modus med 80%+ suksess (minst 10 spørsmål).",
        achievements_zamanEfendisi_name: "Tidsherre",
        achievements_zamanEfendisi_desc: "Få 25+ riktige svar i Tidsangrep-modus.",
        achievements_yenilmezRuh_name: "Uovervinnelig ånd",
        achievements_yenilmezRuh_desc: "Svar på 20+ spørsmål i Overlevelsesmodus.",
        achievements_mukemmeliyetciOyuncu_name: "Perfeksjonist",
        achievements_mukemmeliyetciOyuncu_desc: "Fullfør et klassisk spill (minst 10 spørsmål) uten feil.",
        achievements_jokersizKahraman_name: "Helt uten jokere",
        achievements_jokersizKahraman_desc: "Fullfør et klassisk spill (minst 10 spørsmål, 150+ poeng) uten å bruke jokere.",
        achievements_tarihciRuhu_name: "Historikerens ånd",
        achievements_tarihciRuhu_desc: "Svar riktig på 20 historiespørsmål.",
        achievements_cografyaMeraki_name: "Geografientusiast",
        achievements_cografyaMeraki_desc: "Svar riktig på 20 geografispørsmål.",
        achievements_sanatElestirmeni_name: "Kunstkritiker",
        achievements_sanatElestirmeni_desc: "Svar riktig på 15 kunstspørsmål.",
        achievements_edebiyatAsigi_name: "Litteraturelsker",
        achievements_edebiyatAsigi_desc: "Svar riktig på 15 litteraturspørsmål.",
        achievements_sporTutkunu_name: "Sportsfanatiker",
        achievements_sporTutkunu_desc: "Svar riktig på 15 sportsspørsmål.",
        achievements_matematikCanavari_name: "Matematikkmonster",
        achievements_matematikCanavari_desc: "Svar riktig på 10 matematikkspørsmål.",
        achievements_filozofTohumu_name: "Filosofisk frø",
        achievements_filozofTohumu_desc: "Svar riktig på 10 filosofispørsmål.",
        achievements_mitolojiAvcisi_name: "Mytologijeger",
        achievements_mitolojiAvcisi_desc: "Svar riktig på 10 mytologispørsmål.",
        achievements_bilge_name: "Visperson",
        achievements_bilge_desc: "Svar riktig på totalt 500 spørsmål.",
        achievements_ansiklopedi_name: "Leksikon",
        achievements_ansiklopedi_desc: "Svar riktig på totalt 1000 spørsmål.",
        achievements_ilkAlisveris_name: "Første kjøp",
        achievements_ilkAlisveris_desc: "Kjøp en vare fra butikken for første gang.",
        achievements_isAdami_name: "Forretningsperson",
        achievements_isAdami_desc: "Bruk totalt 10 000 gull i butikken.",
        achievements_adanmisOyuncu_name: "Dedikert spiller",
        achievements_adanmisOyuncu_desc: "Fullfør 7-dagers belønningsrekken og hent hovedpremien.",
        achievements_maceraciRuh_name: "Eventyrlysten sjel",
        achievements_maceraciRuh_desc: "Fullfør spillet minst én gang på hver av vanskelighetsgradene Lett, Middels og Vanskelig.",
        achievements_katkidaBulunan_name: "Bidragsyter",
        achievements_katkidaBulunan_desc: "Støtt spillets utvikling ved å bruke funksjonen 'Send inn spørsmål'.",
        achievements_zorluZeka_name: "Tøff hjerne",
        achievements_zorluZeka_desc: "Fullfør et klassisk spill på vanskelig nivå med 250+ poeng.",
        achievements_hizliVeMerakli_name: "Rask og nysgjerrig",
        achievements_hizliVeMerakli_desc: "Svar riktig på et spørsmål på mindre enn 3 sekunder.",
        achievements_sonSaniyeci_name: "Siste sekund",
        achievements_sonSaniyeci_desc: "Svar riktig på et spørsmål i løpet av det siste sekundet.",
        achievements_modGezgini_name: "Modusutforsker",
        achievements_modGezgini_desc: "Spill alle spillmodusene (Klassisk, Tidsangrep, Overlevelse, Kategoriekspert) minst én gang.",
        
        'tooManyWrongAnswers': "4 gale svar. Spillet er over!",
        'wrongLabel': "Feil!",
        'İstatistikler': 'Statistikk',

        profile: "Profil 👤",
        statistics: "Statistikk",
        languageSettings: "Språkinnstillinger",
        soundSettings: "Lydinnstillinger",
        dataManagement: "Databehandling",
        watchAndEarn: "Se og tjen",
        earnGold: "Tjen gull",
        earnGoldDesc: "+50 gull",
        watchBtn: "SE",
        earnLife: "Tjen liv",
        earnLifeDesc: "+1 liv",
        life_unlimited_1h: "Ubegrenset med liv (1 time)",
        life_unlimited_24h: "Ubegrenset med liv (24 timer)",
        popular: "MEST POPULÆR",
        selectAvatar: "Velg avatar",
        rateUsTitle: "Liker du spillet vårt?",
        rateUsDesc: "Din støtte er verdifull for oss. Du kan hjelpe oss med å nå ut til flere ved å gi oss en vurdering i butikken!",
        rateGameBtn: "Vurder spillet",
        contributeTitle: "Bidra til utviklingen",
        contributeDesc: "Hjelp Kunnskapens Tre med å vokse ved å sende oss spørsmål du gjerne vil se i spillet!",
        submitQuestionBtn: "Send inn spørsmål",
        feedbackTitle: "Foreslå og rapporter problemer",
        feedbackDesc: "Her kan du rapportere dine ideer, forslag eller problemer du har støtt på.",
        feedbackBtn: "Foreslå/Rapporter",
        dailyRewardsTitle: "Daglige belønninger",
        dailyRewardsSubtitle: "Logg inn hver dag for å få hovedpremien!",
        claimReward: "Hent belønning",
        noScoresYet: "Ingen poengsum registrert for denne modusen ennå.",

        
        backToSettings: "Tilbake til innstillinger",
        howToPlayTitle: "Hvordan spille",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Mål</h4>
        <p>Å få høyest poengsum ved å svare riktig på så mange spørsmål som mulig og nå det høyeste nivået på Kunnskapstreet.</p>
        <hr>
        <h4>🎲 Spillmoduser</h4>
        <ul>
        <li><strong>Klassisk modus:</strong> Standard quiz-opplevelse. Du har et begrenset antall gale svar!</li>
        <li><strong>Tidsangrep:</strong> Svar på så mange spørsmål du kan før tiden renner ut. Hvert riktige svar gir litt ekstra tid.</li>
        <li><strong>Overlevelse:</strong> Du har bare én sjanse til å svare feil. Hvor langt kan du komme?</li>
        <li><strong>Kategoriekspert:</strong> Prøv å fullføre alle spørsmålene i en kategori du velger.</li>
        </ul>
        <hr>
        <h4>🃏 Hjelpemidler</h4>
        <p>Du kan bruke disse hjelpemidlene for å få en fordel når du står fast:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Fjerner to gale alternativer.</li>
        <li><strong>⏳ Ekstra tid:</strong> Legger til 10 sekunder på spørsmålstidtakeren.</li>
        <li><strong>⏩ Hopp over:</strong> Lar deg hoppe over et spørsmål uten å svare. (Bryter ikke seiersrekken din)</li>
        <li><strong>💡 Hint:</strong> Gir et lite hint relatert til spørsmålet.</li>
        </ul>`,
        
        
        creditsTitle: "Kreditering",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Dette spillet er designet og utviklet av <strong>BEYZZ GAMES</strong>.</p>
        <p>Takk for at du blir med oss på reisen for å dyrke Kunnskapens tre! Vi håper du har det gøy og lærer nye ting mens du spiller.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Følg oss og ta kontakt</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Vår YouTube-kanal"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Vår Twitter-konto"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Send oss en e-post"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Alle rettigheter forbeholdt. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Personvernregler",
        privacyContentHTML: `
        <p>Applikasjonen vår bruker enhetens lokale lagring for å lagre spillfremgangen din (poeng, prestasjoner, innstillinger osv.). Disse dataene forlater ikke enheten din og deles ikke med noen.</p>
        <p style="margin-top: 25px;">For mer detaljert informasjon kan du se den fullstendige teksten i personvernreglene våre:<br>
        <a href="https://docs.google.com/document/d/1ZT0PhM5GvYlhWNlYvZBbt-43Dbh_K_qfIgdbX8agrdg/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Gå til siden for personvernregler</a>
        </p>`,

    },
ro: {
        gameTitle: "Copacul Cunoașterii",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Selectează dificultatea:",
        difficultyEasy: "Ușor",
        difficultyMedium: "Mediu",
        difficultyHard: "Greu",
        classicMode: "Mod Clasic",
        timeAttackMode: "Atac pe Timp",
        survivalMode: "Supraviețuire",
        categoryChallengeMode: "Expert pe Categorie",
        scoreboard: "Clasament",
        achievements: "Realizări",
        settings: "Setări ⚙️",
        shop: "Magazin 🛍️",
        tagline: "🍀 Poarta ta către cunoaștere... 🍀",

        "howToPlay": "Cum se joacă?",
        "credits": "Credite",
        "privacyPolicy": "Politică de confidențialitate",
        
        selectCategory: "Selectează Categoria",
        backToMenu: "Meniu Principal",

        categoryLabel: "Categorie:",
        scoreLabel: "Scor:",
        correctLabel: "Corect:",
        streakLabel: "Serie:",
        loadingQuestions: "Se încarcă întrebările...",
        nextQuestion: "Următoarea Întrebare",
        joker5050: "50/50",
        jokerTime: "Timp +",
        jokerSkip: "Sari peste",
        jokerHint: "Indiciu",
        enterYourName: "Introdu numele tău...",
        saveScore: "Salvează Scorul",
        
        highScoresTitle: "🏆 Scoruri Maxime 🏆",
        settingsTitle: "⚙️ Setări ⚙️",
        achievementsTitle: "🏆 Realizări 🏆",
        shopTitle: "Magazin",

        leaderboardTitle: "🏆 Clasament 🏆",
        daily: "Zilnic",
        weekly: "Săptămânal",
        monthly: "Lunar",
        alltime: "General",
        
        language: "Limbă:",
        backgroundMusic: "Muzică de fundal:",
        soundEffects: "Efecte sonore:",
        mute: "Mut",
        saveSettings: "Salvează Setările",
        dangerZone: "⚠️ Zonă periculoasă ⚠️",
        dangerZoneDesc: "Aceste acțiuni sunt ireversibile!",
        resetScores: "Resetează toate scorurile",
        resetAchievements: "Resetează toate realizările",

        currentGold: "Aur actual:",
        jokers: "Jokeri",
        lives: "Vieți",
        joker5050_shop: "🌓 Joker 50/50",
        jokerTime_shop: "⏳ Joker Timp",
        jokerSkip_shop: "⏩ Joker Sari peste",
        jokerHint_shop: "💡 Joker Indiciu",
        life_single_shop: "❤️ 1 Viață",
        life_full_shop: "❤️❤️❤️ 5 Vieți (Reumplere completă)",
        buyButton: "Cumpără",

        errorJoker5050: "Jokerul 50/50 nu poate fi folosit pentru această întrebare.",
        errorTimeJokerInTimeAttack: "Jokerul de timp nu poate fi folosit în acest mod.",
        hintUnavailable: "Niciun indiciu disponibil pentru această întrebare.",
        scoreSaved: (name, score) => `${name}, scorul tău (${score}) a fost salvat!`,
        settingsSaved: "Setările au fost salvate!",
        allScoresReset: "Toate scorurile maxime au fost resetate cu succes.",
        noScoresToReset: "Nu s-au găsit înregistrări de scor pentru resetare.",
        allAchievementsReset: "Toate realizările și statisticile au fost resetate.",
        itemBought: (itemName) => `Ai cumpărat ${itemName}!`,
        notEnoughGold: "Nu ai suficient aur!",
        notEnoughLives: "Nu ai suficiente vieți! Poți cumpăra mai multe din magazin.",
        livesFull: "Viețile tale au fost complet reumplute!",
        confirmResetScores: "Ești sigur? TOATE scorurile tale maxime din toate modurile de joc vor fi șterse permanent! Această acțiune este ireversibilă.",
        confirmResetAchievements: "Ești sigur? TOATE realizările deblocate și statisticile tale vor fi șterse permanent! Această acțiune este ireversibilă.",
        questionSkipped: "Întrebare omisă!",
        correctAnswerLabel: "Răspuns corect:",
        resetPlayerData: "Resetează toate datele jucătorului",
        'confirmResetPlayerData': 'Ești sigur că vrei să ștergi permanent toate datele jucătorului (vieți, aur, jokeri, nume, scoruri ȘI TOATE REALIZĂRILE)? Această acțiune este ireversibilă!',
        'tooManyWrongAnswers': "4 răspunsuri greșite. Joc încheiat!",

        gameEnded: "Joc Încheiat!",
        yourScore: "Scorul tău:",
        totalCorrect: "Total corecte:",
        questionsAnswered: (count) => `Ai răspuns la ${count} întrebări.`,
        timeUp: "Timpul a expirat!",
        noScoresForThisMode: "Niciun scor înregistrat pentru acest mod încă.",

        category_Tarih: "Istorie",
        category_Coğrafya: "Geografie",
        category_Bilim_ve_Teknoloji: "Știință și Tehnologie",
        category_Sanat: "Artă",
        category_Edebiyat: "Literatură",
        category_Sinema_ve_Televizyon: "Cinema și Televiziune",
        category_Müzik: "Muzică",
        category_Spor: "Sport",
        category_Matematik: "Matematică",
        category_Felsefe: "Filosofie",
        category_Mitoloji: "Mitologie",
        category_Doğa_ve_Çevre: "Natură și Mediu",
        category_Genel_Kültür: "Cultură Generală",
        category_Güncel_Olaylar: "Evenimente Curente",

        
        achievements_bilimTomurcugu_name: "Mugur de Știință",
        achievements_bilimTomurcugu_desc: "Răspunde corect la 10 întrebări de 'Știință și Tehnologie'.",
        achievements_stratejist_name: "Strateg",
        achievements_stratejist_desc: "Folosește toate tipurile de jokeri într-un singur joc.",
        achievements_bilgelikSerisi_name: "Serie de Înțelepciune",
        achievements_bilgelikSerisi_desc: "Răspunde corect la 5 întrebări la rând.",
        achievements_oyunAcemisi_name: "Începător",
        achievements_oyunAcemisi_desc: "Termină primul tău joc (orice mod).",
        achievements_merakliZihin_name: "Minte Curioasă",
        achievements_merakliZihin_desc: "Răspunde corect la un total de 50 de întrebări.",
        achievements_kategoriKasifi_name: "Explorator de Categorii",
        achievements_kategoriKasifi_desc: "Răspunde corect la cel puțin 3 întrebări în 3 categorii diferite.",
        achievements_klasikUzmani_name: "Expert Clasic",
        achievements_klasikUzmani_desc: "Obține 200+ puncte în Modul Clasic.",
        achievements_hizTutkunu_name: "Pasionat de Viteză",
        achievements_hizTutkunu_desc: "Obține 15+ răspunsuri corecte în Modul Atac pe Timp.",
        achievements_hayattaKalan_name: "Supraviețuitor",
        achievements_hayattaKalan_desc: "Răspunde la 10+ întrebări în Modul Supraviețuire.",
        achievements_uzunSeri_name: "Serie Lungă",
        achievements_uzunSeri_desc: "Răspunde corect la 10 întrebări la rând.",
        achievements_jokerSever_name: "Iubitor de Jokeri",
        achievements_jokerSever_desc: "Folosește un total de 20 de jokeri (de orice tip).",
        achievements_puanAvcisi_name: "Vânător de Puncte",
        achievements_puanAvcisi_desc: "Obține 300+ puncte într-un singur joc Clasic.",
        achievements_bilgiKurdu_name: "Șoarece de bibliotecă",
        achievements_bilgiKurdu_desc: "Răspunde corect la un total de 250 de întrebări.",
        achievements_kategoriUstasi_name: "Maestru pe Categorie",
        achievements_kategoriUstasi_desc: "Termină un mod Expert pe Categorie cu 80%+ succes (min. 10 întrebări).",
        achievements_zamanEfendisi_name: "Stăpânul Timpului",
        achievements_zamanEfendisi_desc: "Obține 25+ răspunsuri corecte în Modul Atac pe Timp.",
        achievements_yenilmezRuh_name: "Spirit Invincibil",
        achievements_yenilmezRuh_desc: "Răspunde la 20+ întrebări în Modul Supraviețuire.",
        achievements_mukemmeliyetciOyuncu_name: "Perfecționist",
        achievements_mukemmeliyetciOyuncu_desc: "Termină un joc Clasic (min. 10 întrebări) fără greșeli.",
        achievements_jokersizKahraman_name: "Erou fără Jokeri",
        achievements_jokersizKahraman_desc: "Termină un joc Clasic (min. 10 întrebări, 150+ puncte) fără a folosi jokeri.",
        achievements_tarihciRuhu_name: "Suflet de Istoric",
        achievements_tarihciRuhu_desc: "Răspunde corect la 20 de întrebări de Istorie.",
        achievements_cografyaMeraki_name: "Pasionat de Geografie",
        achievements_cografyaMeraki_desc: "Răspunde corect la 20 de întrebări de Geografie.",
        achievements_sanatElestirmeni_name: "Critic de Artă",
        achievements_sanatElestirmeni_desc: "Răspunde corect la 15 întrebări de Artă.",
        achievements_edebiyatAsigi_name: "Iubitor de Literatură",
        achievements_edebiyatAsigi_desc: "Răspunde corect la 15 întrebări de Literatură.",
        achievements_sporTutkunu_name: "Fanatic Sportiv",
        achievements_sporTutkunu_desc: "Răspunde corect la 15 întrebări de Sport.",
        achievements_matematikCanavari_name: " monstru al Matematicii",
        achievements_matematikCanavari_desc: "Răspunde corect la 10 întrebări de Matematică.",
        achievements_filozofTohumu_name: "Sămânță de Filosof",
        achievements_filozofTohumu_desc: "Răspunde corect la 10 întrebări de Filosofie.",
        achievements_mitolojiAvcisi_name: "Vânător de Mitologie",
        achievements_mitolojiAvcisi_desc: "Răspunde corect la 10 întrebări de Mitologie.",
        achievements_bilge_name: "Înțelept",
        achievements_bilge_desc: "Răspunde corect la un total de 500 de întrebări.",
        achievements_ansiklopedi_name: "Enciclopedie",
        achievements_ansiklopedi_desc: "Răspunde corect la un total de 1000 de întrebări.",
        achievements_ilkAlisveris_name: "Prima Cumpărătură",
        achievements_ilkAlisveris_desc: "Cumpără orice articol din magazin pentru prima dată.",
        achievements_isAdami_name: "Om de Afaceri",
        achievements_isAdami_desc: "Cheltuie un total de 10.000 de Aur în magazin.",
        achievements_adanmisOyuncu_name: "Jucător Devotat",
        achievements_adanmisOyuncu_desc: "Completează seria de recompense de 7 zile și revendică marele premiu.",
        achievements_maceraciRuh_name: "Spirit Aventurier",
        achievements_maceraciRuh_desc: "Termină jocul cel puțin o dată la fiecare nivel de dificultate: Ușor, Mediu și Greu.",
        achievements_katkidaBulunan_name: "Contributor",
        achievements_katkidaBulunan_desc: "Sprijină dezvoltarea jocului folosind funcția 'Trimite o întrebare'.",
        achievements_zorluZeka_name: "Intelect Puternic",
        achievements_zorluZeka_desc: "Termină un joc Clasic la nivelul Greu cu 250+ puncte.",
        achievements_hizliVeMerakli_name: "Rapid și Curios",
        achievements_hizliVeMerakli_desc: "Răspunde corect la o întrebare în mai puțin de 3 secunde.",
        achievements_sonSaniyeci_name: "Ultima Secundă",
        achievements_sonSaniyeci_desc: "Răspunde corect la o întrebare în ultima secundă.",
        achievements_modGezgini_name: "Explorator de Moduri",
        achievements_modGezgini_desc: "Joacă toate modurile de joc (Clasic, Atac pe Timp, Supraviețuire, Expert pe Categorie) cel puțin o dată.",
        
        'tooManyWrongAnswers': "4 răspunsuri greșite. Joc încheiat!",
        'wrongLabel': "Greșit!",
        'İstatistikler': 'Statistici',

        profile: "Profil 👤",
        statistics: "Statistici",
        languageSettings: "Setări de limbă",
        soundSettings: "Setări de sunet",
        dataManagement: "Gestionarea datelor",
        watchAndEarn: "Vizionează și Câștigă",
        earnGold: "Câștigă Aur",
        earnGoldDesc: "+50 Aur",
        watchBtn: "VIZIONEAZĂ",
        earnLife: "Câștigă Viață",
        earnLifeDesc: "+1 Viață",
        life_unlimited_1h: "Vieți nelimitate (1 oră)",
        life_unlimited_24h: "Vieți nelimitate (24 de ore)",
        popular: "CEL MAI POPULAR",
        selectAvatar: "Selectează avatar",
        rateUsTitle: "Îți place jocul nostru?",
        rateUsDesc: "Sprijinul tău este valoros pentru noi. Ne poți ajuta să ajungem la mai mulți oameni evaluându-ne în magazin!",
        rateGameBtn: "Evaluează jocul",
        contributeTitle: "Contribuie la dezvoltare",
        contributeDesc: "Ajută Copacul Cunoașterii să crească trimițându-ne întrebări pe care ai dori să le vezi adăugate în joc!",
        submitQuestionBtn: "Trimite o întrebare",
        feedbackTitle: "Sugestii și Raportări",
        feedbackDesc: "Poți să ne raportezi ideile, sugestiile sau orice probleme ai întâmpinat aici.",
        feedbackBtn: "Sugerează/Raportează",
        dailyRewardsTitle: "Recompense Zilnice",
        dailyRewardsSubtitle: "Conectează-te în fiecare zi pentru marele premiu!",
        claimReward: "Revendică recompensa",
        noScoresYet: "Niciun scor înregistrat încă pentru acest mod.",

        
        backToSettings: "Înapoi la Setări",
        howToPlayTitle: "Cum se joacă?",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Obiectiv</h4>
        <p>Să obții cel mai mare scor răspunzând corect la cât mai multe întrebări și să ajungi la cel mai înalt nivel în Arborele Cunoașterii.</p>
        <hr>
        <h4>🎲 Moduri de joc</h4>
        <ul>
        <li><strong>Mod Clasic:</strong> Experiența standard de quiz. Ai un număr limitat de răspunsuri greșite!</li>
        <li><strong>Contra timp:</strong> Răspunde la cât mai multe întrebări înainte de expirarea timpului. Fiecare răspuns corect adaugă puțin timp suplimentar.</li>
        <li><strong>Supraviețuire:</strong> Ai o singură șansă să răspunzi greșit. Cât de departe poți ajunge?</li>
        <li><strong>Expert pe categorie:</strong> Încearcă să termini toate întrebările dintr-o categorie aleasă de tine.</li>
        </ul>
        <hr>
        <h4>🃏 Linii de ajutor</h4>
        <p>Poți folosi aceste linii de ajutor pentru a obține un avantaj atunci când ești în dificultate:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Elimină două variante greșite.</li>
        <li><strong>⏳ Timp suplimentar:</strong> Adaugă 10 secunde la cronometrul întrebării.</li>
        <li><strong>⏩ Sari peste:</strong> Îți permite să sari peste o întrebare fără a răspunde. (Nu îți întrerupe seria)</li>
        <li><strong>💡 Indiciu:</strong> Oferă un mic indiciu legat de întrebare.</li>
        </ul>`,
        
        
        creditsTitle: "Credite",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Acest joc a fost proiectat și dezvoltat de <strong>BEYZZ GAMES</strong>.</p>
        <p>Vă mulțumim că v-ați alăturat călătoriei noastre de a crește Copacul Cunoașterii! Sperăm să vă distrați și să învățați lucruri noi în timp ce jucați.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Urmărește-ne și contactează-ne</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Canalul nostru de YouTube"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Contul nostru de Twitter"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Trimite-ne un e-mail"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Toate drepturile rezervate. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Politică de confidențialitate",
        privacyContentHTML: `
        <p>Aplicația noastră folosește spațiul de stocare local al dispozitivului tău pentru a salva progresul în joc (scoruri, realizări, setări etc.). Aceste date nu părăsesc dispozitivul tău și nu sunt partajate cu nimeni.</p>
        <p style="margin-top: 25px;">Pentru informații mai detaliate, poți consulta textul integral al politicii noastre de confidențialitate:<br>
        <a href="https://docs.google.com/document/d/1cmLcxs96Su58mkgimsMJAkKMaw02o72mNI6MzvREb6Q/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Mergi la pagina Politicii de confidențialitate</a>
        </p>`,

    },
pl: {
        gameTitle: "Drzewo Wiedzy",
        koreanSubtitle: "(지식의 나무)",
        difficultySelect: "Wybierz poziom trudności:",
        difficultyEasy: "Łatwy",
        difficultyMedium: "Średni",
        difficultyHard: "Trudny",
        classicMode: "Tryb Klasyczny",
        timeAttackMode: "Gra na Czas",
        survivalMode: "Przetrwanie",
        categoryChallengeMode: "Ekspert Kategorii",
        scoreboard: "Tabela wyników",
        achievements: "Osiągnięcia",
        settings: "Ustawienia ⚙️",
        shop: "Sklep 🛍️",
        tagline: "🍀 Twoja brama do wiedzy... 🍀",

        "howToPlay": "Jak grać?",
        "credits": "Twórcy",
        "privacyPolicy": "Polityka prywatności",
        
        selectCategory: "Wybierz kategorię",
        backToMenu: "Menu Główne",

        categoryLabel: "Kategoria:",
        scoreLabel: "Wynik:",
        correctLabel: "Poprawne:",
        streakLabel: "Seria:",
        loadingQuestions: "Ładowanie pytań...",
        nextQuestion: "Następne pytanie",
        joker5050: "50/50",
        jokerTime: "Czas +",
        jokerSkip: "Pomiń",
        jokerHint: "Wskazówka",
        enterYourName: "Wpisz swoje imię...",
        saveScore: "Zapisz wynik",
        
        highScoresTitle: "🏆 Najlepsze Wyniki 🏆",
        settingsTitle: "⚙️ Ustawienia ⚙️",
        achievementsTitle: "🏆 Osiągnięcia 🏆",
        shopTitle: "Sklep",

        leaderboardTitle: "🏆 Tabela wyników 🏆",
        daily: "Dzienny",
        weekly: "Tygodniowy",
        monthly: "Miesięczny",
        alltime: "Wszystkie czasy",
        
        language: "Język:",
        backgroundMusic: "Muzyka w tle:",
        soundEffects: "Efekty dźwiękowe:",
        mute: "Wycisz",
        saveSettings: "Zapisz ustawienia",
        dangerZone: "⚠️ Strefa niebezpieczna ⚠️",
        dangerZoneDesc: "Tych operacji nie można cofnąć!",
        resetScores: "Zresetuj wszystkie wyniki",
        resetAchievements: "Zresetuj wszystkie osiągnięcia",

        currentGold: "Aktualne złoto:",
        jokers: "Jokery",
        lives: "Życia",
        joker5050_shop: "🌓 Joker 50/50",
        jokerTime_shop: "⏳ Joker Czasu",
        jokerSkip_shop: "⏩ Joker Pominięcia",
        jokerHint_shop: "💡 Joker Wskazówki",
        life_single_shop: "❤️ 1 Życie",
        life_full_shop: "❤️❤️❤️ 5 Żyć (Pełne uzupełnienie)",
        buyButton: "Kup",

        errorJoker5050: "Joker 50/50 nie może być użyty do tego pytania.",
        errorTimeJokerInTimeAttack: "Joker czasu nie może być użyty w tym trybie.",
        hintUnavailable: "Brak wskazówki dla tego pytania.",
        scoreSaved: (name, score) => `${name}, twój wynik (${score}) został zapisany!`,
        settingsSaved: "Ustawienia zapisane!",
        allScoresReset: "Wszystkie najlepsze wyniki zostały pomyślnie zresetowane.",
        noScoresToReset: "Nie znaleziono wyników do zresetowania.",
        allAchievementsReset: "Wszystkie osiągnięcia i statystyki zostały zresetowane.",
        itemBought: (itemName) => `Kupiłeś(-aś) ${itemName}!`,
        notEnoughGold: "Niewystarczająca ilość złota!",
        notEnoughLives: "Nie masz wystarczająco dużo żyć! Możesz kupić więcej w sklepie.",
        livesFull: "Twoje życia zostały w pełni uzupełnione!",
        confirmResetScores: "Jesteś pewien/pewna? WSZYSTKIE twoje najlepsze wyniki we wszystkich trybach gry zostaną trwale usunięte! Tej operacji nie można cofnąć.",
        confirmResetAchievements: "Jesteś pewien/pewna? WSZYSTKIE twoje odblokowane osiągnięcia i statystyki zostaną trwale usunięte! Tej operacji nie można cofnąć.",
        questionSkipped: "Pytanie pominięte!",
        correctAnswerLabel: "Poprawna odpowiedź:",
        resetPlayerData: "Zresetuj wszystkie dane gracza",
        'confirmResetPlayerData': 'Czy na pewno chcesz trwale usunąć wszystkie dane gracza (życia, złoto, jokery, imię, wyniki ORAZ WSZYSTKIE OSIĄGNIĘCIA)? Tej operacji nie można cofnąć!',
        'tooManyWrongAnswers': "4 błędne odpowiedzi. Koniec gry!",

        gameEnded: "Koniec gry!",
        yourScore: "Twój wynik:",
        totalCorrect: "Łącznie poprawnych:",
        questionsAnswered: (count) => `Odpowiedziałeś(-aś) na ${count} pytań.`,
        timeUp: "Czas minął!",
        noScoresForThisMode: "Brak zapisanych wyników dla tego trybu.",

        category_Tarih: "Historia",
        category_Coğrafya: "Geografia",
        category_Bilim_ve_Teknoloji: "Nauka i Technologia",
        category_Sanat: "Sztuka",
        category_Edebiyat: "Literatura",
        category_Sinema_ve_Televizyon: "Film i Telewizja",
        category_Müzik: "Muzyka",
        category_Spor: "Sport",
        category_Matematik: "Matematyka",
        category_Felsefe: "Filozofia",
        category_Mitoloji: "Mitologia",
        category_Doğa_ve_Çevre: "Przyroda i Środowisko",
        category_Genel_Kültür: "Wiedza Ogólna",
        category_Güncel_Olaylar: "Wydarzenia Bieżące",

        
        achievements_bilimTomurcugu_name: "Pąk Nauki",
        achievements_bilimTomurcugu_desc: "Odpowiedz poprawnie na 10 pytań z kategorii 'Nauka i Technologia'.",
        achievements_stratejist_name: "Strateg",
        achievements_stratejist_desc: "Użyj wszystkich typów jokerów w jednej grze.",
        achievements_bilgelikSerisi_name: "Seria Mądrości",
        achievements_bilgelikSerisi_desc: "Odpowiedz poprawnie na 5 pytań z rzędu.",
        achievements_oyunAcemisi_name: "Nowicjusz",
        achievements_oyunAcemisi_desc: "Ukończ swoją pierwszą grę (dowolny tryb).",
        achievements_merakliZihin_name: "Ciekawy Umysł",
        achievements_merakliZihin_desc: "Odpowiedz poprawnie na łącznie 50 pytań.",
        achievements_kategoriKasifi_name: "Odkrywca Kategorii",
        achievements_kategoriKasifi_desc: "Odpowiedz poprawnie na co najmniej 3 pytania w 3 różnych kategoriach.",
        achievements_klasikUzmani_name: "Ekspert Klasyczny",
        achievements_klasikUzmani_desc: "Zdobądź 200+ punktów w Trybie Klasycznym.",
        achievements_hizTutkunu_name: "Miłośnik Prędkości",
        achievements_hizTutkunu_desc: "Zdobądź 15+ poprawnych odpowiedzi w Trybie Gry na Czas.",
        achievements_hayattaKalan_name: "Ocalały",
        achievements_hayattaKalan_desc: "Odpowiedz na 10+ pytań w Trybie Przetrwania.",
        achievements_uzunSeri_name: "Długa Seria",
        achievements_uzunSeri_desc: "Odpowiedz poprawnie na 10 pytań z rzędu.",
        achievements_jokerSever_name: "Miłośnik Jokerów",
        achievements_jokerSever_desc: "Użyj łącznie 20 jokerów (dowolnego typu).",
        achievements_puanAvcisi_name: "Łowca Punktów",
        achievements_puanAvcisi_desc: "Zdobądź 300+ punktów w jednej grze w Trybie Klasycznym.",
        achievements_bilgiKurdu_name: "Mól Książkowy",
        achievements_bilgiKurdu_desc: "Odpowiedz poprawnie na łącznie 250 pytań.",
        achievements_kategoriUstasi_name: "Mistrz Kategorii",
        achievements_kategoriUstasi_desc: "Ukończ tryb Eksperta Kategorii z 80%+ skutecznością (min. 10 pytań).",
        achievements_zamanEfendisi_name: "Władca Czasu",
        achievements_zamanEfendisi_desc: "Zdobądź 25+ poprawnych odpowiedzi w Trybie Gry na Czas.",
        achievements_yenilmezRuh_name: "Niezwyciężony Duch",
        achievements_yenilmezRuh_desc: "Odpowiedz na 20+ pytań w Trybie Przetrwania.",
        achievements_mukemmeliyetciOyuncu_name: "Perfekcjonista",
        achievements_mukemmeliyetciOyuncu_desc: "Ukończ grę w Trybie Klasycznym (min. 10 pytań) bezbłędnie.",
        achievements_jokersizKahraman_name: "Bohater bez Jokerów",
        achievements_jokersizKahraman_desc: "Ukończ grę w Trybie Klasycznym (min. 10 pytań, 150+ punktów) bez użycia jokerów.",
        achievements_tarihciRuhu_name: "Duch Historyka",
        achievements_tarihciRuhu_desc: "Odpowiedz poprawnie na 20 pytań z historii.",
        achievements_cografyaMeraki_name: "Miłośnik Geografii",
        achievements_cografyaMeraki_desc: "Odpowiedz poprawnie na 20 pytań z geografii.",
        achievements_sanatElestirmeni_name: "Krytyk Sztuki",
        achievements_sanatElestirmeni_desc: "Odpowiedz poprawnie na 15 pytań ze sztuki.",
        achievements_edebiyatAsigi_name: "Miłośnik Literatury",
        achievements_edebiyatAsigi_desc: "Odpowiedz poprawnie na 15 pytań z literatury.",
        achievements_sporTutkunu_name: "Fan Sportu",
        achievements_sporTutkunu_desc: "Odpowiedz poprawnie na 15 pytań sportowych.",
        achievements_matematikCanavari_name: "Potwór Matematyczny",
        achievements_matematikCanavari_desc: "Odpowiedz poprawnie na 10 pytań z matematyki.",
        achievements_filozofTohumu_name: "Ziarenko Filozofa",
        achievements_filozofTohumu_desc: "Odpowiedz poprawnie na 10 pytań z filozofii.",
        achievements_mitolojiAvcisi_name: "Łowca Mitologii",
        achievements_mitolojiAvcisi_desc: "Odpowiedz poprawnie na 10 pytań z mitologii.",
        achievements_bilge_name: "Mędrzec",
        achievements_bilge_desc: "Odpowiedz poprawnie na łącznie 500 pytań.",
        achievements_ansiklopedi_name: "Encyklopedia",
        achievements_ansiklopedi_desc: "Odpowiedz poprawnie na łącznie 1000 pytań.",
        achievements_ilkAlisveris_name: "Pierwszy Zakup",
        achievements_ilkAlisveris_desc: "Kup dowolny przedmiot w sklepie po raz pierwszy.",
        achievements_isAdami_name: "Biznesmen",
        achievements_isAdami_desc: "Wydaj łącznie 10 000 złota w sklepie.",
        achievements_adanmisOyuncu_name: "Oddany Gracz",
        achievements_adanmisOyuncu_desc: "Ukończ 7-dniową serię nagród i odbierz główną nagrodę.",
        achievements_maceraciRuh_name: "Duch Przygody",
        achievements_maceraciRuh_desc: "Ukończ grę co najmniej raz na każdym poziomie trudności: Łatwym, Średnim i Trudnym.",
        achievements_katkidaBulunan_name: "Współtwórca",
        achievements_katkidaBulunan_desc: "Wesprzyj rozwój gry, korzystając z funkcji 'Zaproponuj pytanie'.",
        achievements_zorluZeka_name: "Wytrwały Intelekt",
        achievements_zorluZeka_desc: "Ukończ grę w Trybie Klasycznym na trudnym poziomie z wynikiem 250+.",
        achievements_hizliVeMerakli_name: "Szybki i Ciekawy",
        achievements_hizliVeMerakli_desc: "Odpowiedz poprawnie na pytanie w mniej niż 3 sekundy.",
        achievements_sonSaniyeci_name: "Ostatnia Sekunda",
        achievements_sonSaniyeci_desc: "Odpowiedz poprawnie na pytanie w ostatniej sekundzie.",
        achievements_modGezgini_name: "Odkrywca Trybów",
        achievements_modGezgini_desc: "Zagraj we wszystkie tryby gry (Klasyczny, Gra na Czas, Przetrwanie, Ekspert Kategorii) co najmniej raz.",
        
        'tooManyWrongAnswers': "4 błędne odpowiedzi. Koniec gry!",
        'wrongLabel': "Błąd!",
        'İstatistikler': 'Statystyki',

        profile: "Profil 👤",
        statistics: "Statystyki",
        languageSettings: "Ustawienia języka",
        soundSettings: "Ustawienia dźwięku",
        dataManagement: "Zarządzanie danymi",
        watchAndEarn: "Oglądaj i Zarabiaj",
        earnGold: "Zarabiaj złoto",
        earnGoldDesc: "+50 złota",
        watchBtn: "OGLĄDAJ",
        earnLife: "Zarabiaj życie",
        earnLifeDesc: "+1 życie",
        life_unlimited_1h: "Nielimitowane życia (1 godzina)",
        life_unlimited_24h: "Nielimitowane życia (24 godziny)",
        popular: "NAJPOPULARNIEJSZE",
        selectAvatar: "Wybierz awatar",
        rateUsTitle: "Podoba Ci się nasza gra?",
        rateUsDesc: "Twoje wsparcie jest dla nas cenne. Możesz pomóc nam dotrzeć do większej liczby osób, oceniając nas w sklepie!",
        rateGameBtn: "Oceń grę",
        contributeTitle: "Wspomóż rozwój",
        contributeDesc: "Pomóż Drzewu Wiedzy rosnąć, wysyłając nam pytania, które chciałbyś(-abyś) zobaczyć w grze!",
        submitQuestionBtn: "Zaproponuj pytanie",
        feedbackTitle: "Zgłoś sugestie i problemy",
        feedbackDesc: "Możesz tutaj zgłaszać swoje pomysły, sugestie lub napotkane problemy.",
        feedbackBtn: "Zgłoś sugestię/problem",
        dailyRewardsTitle: "Codzienne Nagrody",
        dailyRewardsSubtitle: "Loguj się codziennie, aby odebrać główną nagrodę!",
        claimReward: "Odbierz nagrodę",
        noScoresYet: "Brak jeszcze zapisanych wyników dla tego trybu.",

        
        backToSettings: "Powrót do ustawień",
        howToPlayTitle: "Jak grać?",
        howToPlayContentHTML: `
        <h4 style="margin-top:0;">🎯 Cel</h4>
        <p>Zdobyć jak najwyższy wynik, odpowiadając poprawnie na jak najwięcej pytań i osiągnąć najwyższy poziom na Drzewie Wiedzy.</p>
        <hr>
        <h4>🎲 Tryby gry</h4>
        <ul>
        <li><strong>Tryb klasyczny:</strong> Standardowe doświadczenie quizu. Masz ograniczoną liczbę błędnych odpowiedzi!</li>
        <li><strong>Na czas:</strong> Odpowiedz na jak najwięcej pytań, zanim skończy się czas. Każda poprawna odpowiedź dodaje trochę czasu.</li>
        <li><strong>Przetrwanie:</strong> Masz tylko jedną szansę na błędną odpowiedź. Jak daleko zdołasz dotrzeć?</li>
        <li><strong>Ekspert kategorii:</strong> Spróbuj ukończyć wszystkie pytania w wybranej przez siebie kategorii.</li>
        </ul>
        <hr>
        <h4>🃏 Koła ratunkowe</h4>
        <p>Możesz użyć tych kół ratunkowych, aby zyskać przewagę, gdy utkniesz:</p>
        <ul>
        <li><strong>🌓 50/50:</strong> Eliminuje dwie błędne odpowiedzi.</li>
        <li><strong>⏳ Dodatkowy czas:</strong> Dodaje 10 sekund do licznika czasu na pytanie.</li>
        <li><strong>⏩ Pomiń:</strong> Pozwala pominąć pytanie bez udzielania odpowiedzi. (Nie przerywa twojej passy)</li>
        <li><strong>💡 Wskazówka:</strong> Daje małą podpowiedź związaną z pytaniem.</li>
        </ul>`,
        
        
        creditsTitle: "Twórcy",
        creditsContentHTML: `
        <p style="font-size: 1.1em;">Ta gra została zaprojektowana i opracowana przez <strong>BEYZZ GAMES</strong>.</p>
        <p>Dziękujemy, że dołączyłeś/aś do nas w podróży, której celem jest rozwijanie Drzewa Wiedzy! Mamy nadzieję, że będziesz się dobrze bawić i uczyć nowych rzeczy podczas gry.</p>
        <hr style="margin: 20px auto; width: 80%;">
        <h4 style="margin-bottom: 10px;">Obserwuj nas i skontaktuj się z nami</h4>
        <div class="social-links">
        <a href="https://www.youtube.com/@BeyzzGames" target="_blank" class="youtube" title="Nasz kanał na YouTube"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/BeyzzGames" target="_blank" class="twitter" title="Nasze konto na Twitterze"><i class="fab fa-twitter"></i></a>
        <a href="mailto:beyzzgamesdestek@gmail.com" class="email" title="Wyślij do nas e-mail"><i class="fas fa-envelope"></i></a>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #666;">Wszelkie prawa zastrzeżone. © 2025 BEYZZ GAMES</p>`,
        
        
        privacyTitle: "Polityka prywatności",
        privacyContentHTML: `
        <p>Nasza aplikacja korzysta z lokalnej pamięci Twojego urządzenia, aby zapisywać postępy w grze (wyniki, osiągnięcia, ustawienia itp.). Te dane не opuszczają Twojego urządzenia i nie są nikomu udostępniane.</p>
        <p style="margin-top: 25px;">Aby uzyskać bardziej szczegółowe informacje, możesz zapoznać się z pełnym tekstem naszej polityki prywatności:<br>
        <a href="https://docs.google.com/document/d/1Vuv0cmXxB0Prh3_jtdhLmWLu6jZnQmb7TpkgQIXgM5w/preview" target="_blank" style="color: #007bff; display: inline-block; margin-top: 10px; font-weight: bold;">Przejdź do strony Polityki prywatności</a>
         </p>`,

      },
  }
