const units = {

1: [
  // 001-1
  {
    word: "agree",
    meaning: "賛成する",
    sentence: "I totally (   ) with this opinion.",
    jp: "私はこの意見に全面的に賛成です。"
  },
  // 001-2
  {
    word: "agreed",
    meaning: "（主語の中で）意見が一致する",
    sentence: "We (   ) on this point.",
    jp: "私たちはこの点で意見が一致した。"
  },
  // 001-3
  {
    word: "agree",
    meaning: "（気候，食べ物が）合う",
    sentence: "Spicy food does not (   ) with me.",
    jp: "辛い食べ物は私には合わない。"
  },
  // 002-1
  {
    word: "oppose",
    meaning: "〜に反対する",
    sentence: "strongly (   ) the plan",
    jp: "その計画に強硬に反対する"
  },
  // 003-1
  {
    word: "advise",
    meaning: "〜に助言する，忠告する",
    sentence: "(   ) him not to eat too much",
    jp: "食べ過ぎないよう彼に忠告する"
  },
  // 004-1
  {
    word: "tips",
    meaning: "助言，ヒント",
    sentence: "(   ) on how to use the library",
    jp: "図書館の利用法に関するヒント"
  },
  // 004-2
  {
    word: "tip",
    meaning: "チップ",
    sentence: "leave a (   ) for the waiter",
    jp: "ウェイターにチップを置く"
  },
  // 004-3
  {
    word: "tips",
    meaning: "（足や山などの）先，先端",
    sentence: "the (   ) of my toes",
    jp: "足の指先"
  },
  // 005-1
  {
    word: "discuss",
    meaning: "〜について話し合う，議論する",
    sentence: "(   ) the problem with a specialist",
    jp: "専門家とその問題について話し合う"
  },
  // 005-2
  {
    word: "discuss",
    meaning: "〜を議題に出す",
    sentence: "(   ) my hidden past",
    jp: "自分の隠された過去のことを話す"
  },
  // 006-1
  {
    word: "blame",
    meaning: "〜に責任があるとする",
    sentence: "(   ) the car's brakes for the accident",
    jp: "その事故の原因は車のブレーキにあるとする"
  },
  // 007-1
  {
    word: "argue",
    meaning: "〜と主張する",
    sentence: "(   ) that reading aloud is important",
    jp: "音読は大切だと主張する"
  },
  // 007-2
  {
    word: "argue",
    meaning: "言い争う",
    sentence: "(   ) with her about training methods",
    jp: "練習方法のことで彼女と言い争う"
  },
  // 008-1
  {
    word: "claim",
    meaning: "〜と主張する",
    sentence: "(   ) that a vegetarian diet is better than a meat diet",
    jp: "菜食は肉食より優れていると主張する"
  },
  // 008-2
  {
    word: "claim",
    meaning: "〜を要求する，主張する",
    sentence: "Does anyone (   ) this umbrella?",
    jp: "自分の持ち主はいませんか（誰かこの傘の持ち主を主張しますか）。"
  },
  // 008-3
  {
    word: "claim",
    meaning: "主張，要求",
    sentence: "make a (   ) against the insurance company",
    jp: "保険会社に（保険金を）請求する"
  },
  // 009-1
  {
    word: "complain",
    meaning: "文句を言う，苦情を言う",
    sentence: "(   ) about their loud music",
    jp: "彼らのうるさい音楽に文句を言う"
  },
  // 009-2
  {
    word: "complain",
    meaning: "（病気など）を訴える",
    sentence: "(   ) of a headache",
    jp: "頭痛がすると訴える"
  },
  // 010-1
  {
    word: "offer",
    meaning: "〜を申し出る",
    sentence: "(   ) him some coffee",
    jp: "彼にコーヒーはどうですかと尋ねる（申し出る）。"
  },
  // 010-2
  {
    word: "offer",
    meaning: "申し出",
    sentence: "refuse his (   )",
    jp: "彼の申し出を断る"
  },
  // 010-3
  {
    word: "offer",
    meaning: "値引き",
    sentence: "T-shirts are on special (   ) today.",
    jp: "今日はTシャツが特価（特別な値引き）だ。"
  },
  // 011-1
  {
    word: "suggests",
    meaning: "〜を示唆する",
    sentence: "That letter (   ) that she is quite happy in her job.",
    jp: "その手紙は，彼女が仕事をかなり楽しんでいることを示唆している。"
  },
  // 011-2
  {
    word: "suggested",
    meaning: "〜を提案する",
    sentence: "She (   ) to us that we (should) take a break.",
    jp: "彼女は私たちに休憩するのはどうだろうと提案した。"
  },
  // 012-1
  {
    word: "recommend",
    meaning: "〜を推薦する，勧める",
    sentence: "What would you (   )?",
    jp: "（レストランなどで）何がお勧めですか（何を勧めますか）。"
  },
  // 013-1
  {
    word: "grateful",
    meaning: "感謝している",
    sentence: "I am (   ) for your help.",
    jp: "ご助力に感謝しています。"
  },
  // 014-1
  {
    word: "apologize",
    meaning: "謝る",
    sentence: "(   ) to her for being late",
    jp: "遅れたことを彼女に謝る"
  },
  // 015-1
  {
    word: "excuses",
    meaning: "言い訳",
    sentence: "Don't make (   ).",
    jp: "言い訳するな。"
  },
  // 015-2
  {
    word: "Excuse",
    meaning: "〜を許す",
    sentence: "(   ) me, but do you happen to know where the station is?",
    jp: "すみませんが，駅がどこにあるかご存じですか。"
  },
  // 015-3
  {
    word: "excused",
    meaning: "〜を免除する",
    sentence: "He was (   ) from the exam.",
    jp: "彼は試験を免除された。"
  },
  // 016-1
  {
    word: "celebrate",
    meaning: "（特別な日，出来事）を祝う",
    sentence: "(   ) her 18th birthday",
    jp: "彼女の18歳の誕生日を祝う"
  },
  // 016-2
  {
    word: "celebrate",
    meaning: "（儀式など）を挙行する，執り行う",
    sentence: "(   ) Mass",
    jp: "ミサを執り行う"
  },
  // 017-1
  {
    word: "congratulate",
    meaning: "（人）を祝う，〜に関して（人）を祝う",
    sentence: "(   ) her on her exam results",
    jp: "試験結果について彼女を祝福する"
  },
  // 018-1
  {
    word: "admire",
    meaning: "〜を称賛する，〜に感心する",
    sentence: "(   ) him for his great performance",
    jp: "すばらしい演技に対して彼を称賛する"
  },
  // 019-1
  {
    word: "impressed",
    meaning: "〜に感銘を与える，〜を感心させる",
    sentence: "I was deeply (   ) by his speech.",
    jp: "彼の演説に深く感銘を受けた（感銘を与えられた）。"
  },
  // 020-1
  {
    word: "award",
    meaning: "賞",
    sentence: "an (   ) ceremony",
    jp: "授賞式"
  },
  // 020-2
  {
    word: "awarded",
    meaning: "〜を授与する",
    sentence: "She was (   ) first prize.",
    jp: "彼女は一等賞をもらった（授与された）。"
  },
  // 021-1
  {
    word: "explain",
    meaning: "〜を説明する",
    sentence: "(   ) the rules of baseball to him",
    jp: "彼に野球のルールを説明する"
  },
  // 022-1
  {
    word: "describe",
    meaning: "〜を説明する",
    sentence: "Could you (   ) your lost bag?",
    jp: "なくしたバッグの特徴を説明していただけませんか。"
  },
  // 023-1
  {
    word: "communicate",
    meaning: "意思の疎通をはかる",
    sentence: "(   ) with each other in sign language",
    jp: "手話でお互いに意思の疎通をはかる"
  },
  // 023-2
  {
    word: "communicate",
    meaning: "〜を伝える",
    sentence: "(   ) my feelings in English",
    jp: "英語で自分の気持ちを伝える"
  },
  // 024-1
  {
    word: "Express",
    meaning: "（意見，気持ち）を表現する",
    sentence: "(   ) your opinions clearly.",
    jp: "はっきりと意見を言い（表現し）なさい。"
  },
  // 024-2
  {
    word: "express",
    meaning: "急行（列車，バス）",
    sentence: "on the 9:00 a.m. (   ) (train)",
    jp: "午前9時の急行列車で"
  },
  // 025-1
  {
    word: "promise",
    meaning: "約束",
    sentence: "make a (   ) to lose weight",
    jp: "減量するという約束をする"
  },
  // 025-2
  {
    word: "promise",
    meaning: "〜を約束する",
    sentence: "(   ) her to be back by 5",
    jp: "5時までには戻ると彼女に約束する"
  },
  // 026-1
  {
    word: "information",
    meaning: "情報",
    sentence: "various kinds of (   )",
    jp: "さまざまな情報"
  },
  // 027-1
  {
    word: "technology",
    meaning: "科学技術，テクノロジー",
    sentence: "science and (   )",
    jp: "科学技術（科学と科学技術）"
  },
  // 028-1
  {
    word: "research",
    meaning: "（学術的）研究",
    sentence: "do (   ) on space rockets",
    jp: "宇宙ロケットに関する研究を行う"
  },
  // 028-2
  {
    word: "research",
    meaning: "〜を研究する",
    sentence: "(   ) an environmental issue",
    jp: "環境問題を研究する"
  },
  // 029-1
  {
    word: "materials",
    meaning: "材料，生地",
    sentence: "collect (   ) for a paper",
    jp: "レポートの材料を集める"
  },
  // 029-2
  {
    word: "materials",
    meaning: "資料，教材",
    sentence: "use movies as teaching (   )",
    jp: "映画を教材として使う"
  },
  // 029-3
  {
    word: "material",
    meaning: "物質的な",
    sentence: "give (   ) support",
    jp: "物質的な援助をする"
  },
  // 029-4
  {
    word: "material",
    meaning: "重大な",
    sentence: "(   ) changes to the schedule",
    jp: "計画の重大な変更"
  },
  // 030-1
  {
    word: "artificial",
    meaning: "人工的な",
    sentence: "(   ) intelligence (AI)",
    jp: "人工知能"
  }
],
31: [
  // 031-1
  {
    word: "electric",
    meaning: "電気の，電動の",
    sentence: "an (   ) car",
    jp: "電気自動車"
  },
  // 032-1
  {
    word: "invent",
    meaning: "〜を発明する",
    sentence: "(   ) a speaking robot",
    jp: "会話のできるロボットを発明する"
  },
  // 032-2
  {
    word: "invent",
    meaning: "（話など）をでっち上げる",
    sentence: "(   ) a fantastic story",
    jp: "とんでもない話をでっち上げる"
  },
  // 033-1
  {
    word: "discover",
    meaning: "〜を発見する",
    sentence: "(   ) a human mummy",
    jp: "人間のミイラを発見する"
  },
  // 033-2
  {
    word: "discover",
    meaning: "〜を知る，〜に気づく",
    sentence: "(   ) that the painting is a fake",
    jp: "その絵が偽物であることに気づく"
  },
  // 033-3
  {
    word: "discover",
    meaning: "（出会い）",
    sentence: "(   ) the Beatles",
    jp: "ビートルズ（の音楽）に出会う"
  },
  // 034-1
  {
    word: "develop",
    meaning: "発達する",
    sentence: "(   ) into a big city",
    jp: "大都市に発展する"
  },
  // 034-2
  {
    word: "develop",
    meaning: "〜を発達させる",
    sentence: "(   ) a sense of humor",
    jp: "ユーモアのセンスを伸ばす"
  },
  // 034-3
  {
    word: "develop",
    meaning: "〜を開発する",
    sentence: "(   ) software",
    jp: "ソフトウェアを開発する"
  },
  // 034-4
  {
    word: "develop",
    meaning: "〜を磨く",
    sentence: "(   ) your ideas",
    jp: "考えを発展させる"
  },
  // 034-5
  {
    word: "develop",
    meaning: "（病気に）かかる",
    sentence: "(   ) pneumonia",
    jp: "肺炎になる"
  },
  // 035-1
  {
    word: "skills",
    meaning: "技術，力",
    sentence: "improve my tennis (   )",
    jp: "テニスの技術を高める"
  },
  // 036-1
  {
    word: "ability",
    meaning: "能力",
    sentence: "improve my (   ) to speak English",
    jp: "英語を話す力を伸ばす"
  },
  // 037-1
  {
    word: "talent",
    meaning: "才能",
    sentence: "show my musical (   )",
    jp: "音楽の才能を発揮する"
  },
  // 038-1
  {
    word: "effort",
    meaning: "努力",
    sentence: "make an (   ) to be on time",
    jp: "時間に間に合うように努力する"
  },
  // 039-1
  {
    word: "practice",
    meaning: "（繰り返しの）練習",
    sentence: "We have (   ) on Saturday.",
    jp: "土曜日に練習がある。"
  },
  // 039-2
  {
    word: "practice",
    meaning: "実践",
    sentence: "put a plan into (   )",
    jp: "計画を実行に移す"
  },
  // 039-3
  {
    word: "practice",
    meaning: "慣習",
    sentence: "the (   ) of sleeping after dinner",
    jp: "夕食後に寝る習慣"
  },
  // 039-4
  {
    word: "practice",
    meaning: "〜を練習する",
    sentence: "(   ) playing the piano",
    jp: "ピアノの練習をする"
  },
  // 039-5
  {
    word: "practice",
    meaning: "〜を実践する",
    sentence: "(   ) my religion",
    jp: "宗教を実践する"
  },
  // 040-1
  {
    word: "achieve",
    meaning: "〜を達成する",
    sentence: "(   ) his goal of becoming a vet",
    jp: "獣医になるという目標を達成する"
  },
  // 041-1
  {
    word: "managed",
    meaning: "何とかして〜する",
    sentence: "I (   ) to catch the last train.",
    jp: "何とか終電に乗ることができた。"
  },
  // 041-2
  {
    word: "manage",
    meaning: "〜を経営する，管理する",
    sentence: "(   ) my time effectively",
    jp: "効果的に時間を管理する"
  },
  // 042-1
  {
    word: "improve",
    meaning: "〜を改善する，磨く",
    sentence: "(   ) my cooking skills",
    jp: "私の料理の腕を上達させる"
  },
  // 042-2
  {
    word: "improved",
    meaning: "よくなる",
    sentence: "His English has (   ) recently.",
    jp: "彼の英語は最近よくなった。"
  },
  // 043-1
  {
    word: "produce",
    meaning: "〜を生産する，産出する",
    sentence: "(   ) rice and vegetables",
    jp: "米と野菜を生産する"
  },
  // 043-2
  {
    word: "produce",
    meaning: "（見せるために）〜を取り出す",
    sentence: "(   ) a ticket from my pocket",
    jp: "ポケットから切符を取り出す"
  },
  // 043-3
  {
    word: "produce",
    meaning: "農作物",
    sentence: "fresh farm (   )",
    jp: "新鮮な農産物"
  },
  // 044-1
  {
    word: "create",
    meaning: "〜を創造する",
    sentence: "(   ) a website",
    jp: "ホームページを創る"
  },
  // 044-2
  {
    word: "create",
    meaning: "〜を引き起こす",
    sentence: "(   ) new problems",
    jp: "新たな問題を引き起こす"
  },
  // 045-1
  {
    word: "establish",
    meaning: "〜を確立する，定着させる",
    sentence: "(   ) a close friendship with him",
    jp: "彼と親密な友情を築く"
  },
  // 045-2
  {
    word: "established",
    meaning: "〜を設立する",
    sentence: "This publishing company was (   ) in 1950.",
    jp: "この出版社は1950年に設立された。"
  },
  // 046-1
  {
    word: "form",
    meaning: "〜を形成する",
    sentence: "(   ) a rock band",
    jp: "ロックバンドを形成する"
  },
  // 046-2
  {
    word: "forms",
    meaning: "形態",
    sentence: "Happiness comes in various (   ).",
    jp: "幸せは様々な形でやって来る。"
  },
  // 046-3
  {
    word: "form",
    meaning: "書式",
    sentence: "fill out an application (   )",
    jp: "申し込み書に記入する"
  },
  // 047-1
  {
    word: "saves",
    meaning: "（時間，手間）を省く",
    sentence: "This (   ) you a lot of trouble.",
    jp: "これによって多くの手間が省ける。"
  },
  // 047-2
  {
    word: "save",
    meaning: "〜を貯金する",
    sentence: "(   ) some money every month.",
    jp: "毎月貯金する。"
  },
  // 047-3
  {
    word: "saved",
    meaning: "（命など）を救う",
    sentence: "You (   ) my life.",
    jp: "君は私の恩人だ（私の命を救った）。"
  },
  // 047-4
  {
    word: "save",
    meaning: "〜を除いて",
    sentence: "answer all of the questions (   ) one",
    jp: "1つを除いてすべての質問に答える。"
  },
  // 048-1
  {
    word: "medicine",
    meaning: "薬",
    sentence: "take the (   ) twice a day",
    jp: "1日に2回その薬を飲む"
  },
  // 048-2
  {
    word: "medicine",
    meaning: "医学",
    sentence: "study (   ) at Harvard",
    jp: "ハーバードで医学を学ぶ"
  },
  // 049-1
  {
    word: "patient",
    meaning: "患者",
    sentence: "The (   ) is getting better.",
    jp: "その患者は快方に向かっている。"
  },
  // 049-2
  {
    word: "patient",
    meaning: "忍耐強い",
    sentence: "Teachers need to be (   ).",
    jp: "教師は忍耐強くならなければならない。"
  },
  // 050-1
  {
    word: "condition",
    meaning: "状態，容態",
    sentence: "My body is in good (   ).",
    jp: "私の体は調子がよい。"
  },
  // 050-2
  {
    word: "conditions",
    meaning: "(周囲の)状況，条件",
    sentence: "work under bad (   )",
    jp: "悪条件の下で働く"
  },
  // 051-1
  {
    word: "medical",
    meaning: "医療の",
    sentence: "(   ) expenses",
    jp: "医療費"
  },
  // 051-2
  {
    word: "medical",
    meaning: "医学の",
    sentence: "(   ) science",
    jp: "医学"
  },
  // 052-1
  {
    word: "stress",
    meaning: "ストレス",
    sentence: "have a lot of (   )",
    jp: "ストレスが多い。"
  },
  // 052-2
  {
    word: "stress",
    meaning: "強調",
    sentence: "put (   ) on foreign language education",
    jp: "外国語教育に重点を置く。"
  },
  // 052-3
  {
    word: "stress",
    meaning: "〜を強調する",
    sentence: "(   ) the importance of teamwork",
    jp: "チームワークの重要性を強調する"
  },
  // 053-1
  {
    word: "suffering",
    meaning: "（病気などで）苦しむ",
    sentence: "I am (   ) from jet lag.",
    jp: "時差ぼけに苦しんでいる。"
  },
  // 053-2
  {
    word: "suffered",
    meaning: "（苦痛，損害）を経験する",
    sentence: "The company (   ) a heavy loss.",
    jp: "その会社は大きな損失を出した。"
  },
  // 054-1
  {
    word: "exercises",
    meaning: "練習",
    sentence: "piano (   )",
    jp: "ピアノの練習"
  },
  // 054-2
  {
    word: "exercise",
    meaning: "運動",
    sentence: "get light (   )",
    jp: "軽い運動をする"
  },
  // 054-3
  {
    word: "exercise",
    meaning: "〜を練習する",
    sentence: "(   ) regularly",
    jp: "定期的に運動する"
  },
  // 054-4
  {
    word: "exercise",
    meaning: "〜を行使する",
    sentence: "(   ) the right to vote",
    jp: "投票権を行使する"
  },
  // 055-1
  {
    word: "breathe",
    meaning: "呼吸する，息を吸う",
    sentence: "(   ) deeply",
    jp: "深呼吸する"
  },
  // 056-1
  {
    word: "thirsty",
    meaning: "のどが渇いた",
    sentence: "I'm really (   ).",
    jp: "本当にのどが渇いた。"
  },
  // 056-2
  {
    word: "thirsty",
    meaning: "（〜を）切望して",
    sentence: "He is (   ) for power.",
    jp: "彼は権力志向が強い。"
  },
  // 057-1
  {
    word: "physical",
    meaning: "身体的な",
    sentence: "(   ) contact",
    jp: "身体的接触"
  },
  // 057-2
  {
    word: "physical",
    meaning: "物理的な",
    sentence: "the (   ) world",
    jp: "物理界"
  },
  // 058-1
  {
    word: "fever",
    meaning: "（体温の）熱",
    sentence: "have a (   ).",
    jp: "熱がある。"
  },
  // 058-2
  {
    word: "fever",
    meaning: "熱狂",
    sentence: "be gripped by soccer (   )",
    jp: "サッカー熱に取りつかれる"
  },
  // 059-1
  {
    word: "strength",
    meaning: "（肉体的な）体力",
    sentence: "build up my physical (   )",
    jp: "体力をつける"
  },
  // 059-2
  {
    word: "strength",
    meaning: "（精神的な）強さ",
    sentence: "try with all my (   ) to lift the piano",
    jp: "持てるすべての力でピアノを持ち上げようとする"
  },
  // 060-1
  {
    word: "tears",
    meaning: "涙",
    sentence: "I was moved to (   ).",
    jp: "私は感動して泣いた。"
  },
  // 060-2
  {
    word: "tear",
    meaning: "〜を引き裂く，引きちぎる",
    sentence: "(   ) up the letter from him",
    jp: "彼からの手紙を引き裂く"
  }
],
61: [
  // 061-1
  {
    word: "tastes",
    meaning: "〜の味がする",
    sentence: "This apple (   ) sweet.",
    jp: "このリンゴは甘い。"
  },
  // 061-2
  {
    word: "taste",
    meaning: "〜の味見をする",
    sentence: "(   ) the soup",
    jp: "スープの味見をする"
  },
  // 061-3
  {
    word: "taste",
    meaning: "味",
    sentence: "This wine has a strong acid (   ).",
    jp: "このワインは酸味が強い。"
  },
  // 061-4
  {
    word: "taste",
    meaning: "好み",
    sentence: "have good (   ) in clothes",
    jp: "服のセンスがよい"
  },
  // 062-1
  {
    word: "rules",
    meaning: "規則",
    sentence: "It is against the (   ).",
    jp: "それは規則違反だ。"
  },
  // 062-2
  {
    word: "rule",
    meaning: "〜を支配する",
    sentence: "(   ) the country",
    jp: "その国を支配する"
  },
  // 063-1
  {
    word: "role",
    meaning: "役割",
    sentence: "play an important (   ) in society",
    jp: "社会で重要な役割を果たす"
  },
  // 064-1
  {
    word: "habit",
    meaning: "（無意識な）習慣",
    sentence: "have a (   ) of making excuses",
    jp: "言い訳をする癖がある"
  },
  // 065-1
  {
    word: "customs",
    meaning: "習慣（社会的な）",
    sentence: "Different countries have different (   ).",
    jp: "習慣は国によって違う。"
  },
  // 065-2
  {
    word: "customs",
    meaning: "税関",
    sentence: "show what is in my suitcase at (   )",
    jp: "税関でスーツケースの中身を見せる"
  },
  // 066-1
  {
    word: "traditions",
    meaning: "伝統",
    sentence: "Japanese (   )",
    jp: "日本の伝統"
  },
  // 067-1
  {
    word: "society",
    meaning: "社会",
    sentence: "women's status in (   )",
    jp: "社会での女性の地位"
  },
  // 067-2
  {
    word: "society",
    meaning: "社交",
    sentence: "enjoy her (   )",
    jp: "彼女と同席することを楽しむ"
  },
  // 067-3
  {
    word: "Society",
    meaning: "協会",
    sentence: "the Royal (   ) for the Prevention of Cruelty to Animals",
    jp: "英国王立動物虐待防止協会"
  },
  // 068-1
  {
    word: "law",
    meaning: "法律，国法",
    sentence: "Parking here is against the (   ).",
    jp: "ここでの駐車は法律違反だ。"
  },
  // 068-2
  {
    word: "law",
    meaning: "（個々の）法律",
    sentence: "a (   ) against smoking on the street",
    jp: "路上喫煙を禁じる法律"
  },
  // 068-3
  {
    word: "laws",
    meaning: "（科学などの）法則",
    sentence: "the (   ) of nature",
    jp: "自然の法則"
  },
  // 069-1
  {
    word: "ancestors",
    meaning: "祖先",
    sentence: "My (   ) were French.",
    jp: "私の祖先はフランス人だった。"
  },
  // 070-1
  {
    word: "population",
    meaning: "人口，個体数",
    sentence: "The (   ) of Tokyo is larger than that of Osaka.",
    jp: "東京の人口は大阪の人口より多い。"
  },
  // 070-2
  {
    word: "population",
    meaning: "住民",
    sentence: "L.A. has a large Chinese (   ).",
    jp: "ロサンゼルスには多くの中国人が住んでいる。"
  },
  // 071-1
  {
    word: "native",
    meaning: "母国の，その土地の",
    sentence: "his (   ) language",
    jp: "彼の母（国）語"
  },
  // 071-2
  {
    word: "native",
    meaning: "（ある土地の）生まれの人",
    sentence: "a (   ) of Japan",
    jp: "日本生まれの人"
  },
  // 072-1
  {
    word: "abroad",
    meaning: "海外へ，海外で",
    sentence: "find a job (   )",
    jp: "海外で仕事を見つける"
  },
  // 073-1
  {
    word: "local",
    meaning: "その土地の，地元の",
    sentence: "a (   ) bank",
    jp: "地元の銀行"
  },
  // 073-2
  {
    word: "local",
    meaning: "地方の",
    sentence: "(   ) government",
    jp: "地方自治体"
  },
  // 073-3
  {
    word: "locals",
    meaning: "地元の人",
    sentence: "talk with the (   )",
    jp: "地元の人々と話す"
  },
  // 074-1
  {
    word: "survey",
    meaning: "調査",
    sentence: "according to a recent (   )",
    jp: "最近の調査によると"
  },
  // 074-2
  {
    word: "survey",
    meaning: "〜を調査する",
    sentence: "(   ) the opinions of teenagers",
    jp: "10代の若者たちの意見を調査する"
  },
  // 075-1
  {
    word: "value",
    meaning: "価値",
    sentence: "the (   ) of the painting",
    jp: "その絵の価値"
  },
  // 075-2
  {
    word: "values",
    meaning: "価値観",
    sentence: "Everyone has their own (   ).",
    jp: "誰もが自分独自の価値観を有する。"
  },
  // 075-3
  {
    word: "value",
    meaning: "お買い得品",
    sentence: "This shirt is really good (   ).",
    jp: "このシャツは本当にお買い得だ。"
  },
  // 075-4
  {
    word: "value",
    meaning: "〜を重んじる",
    sentence: "(   ) their privacy",
    jp: "彼らのプライバシーを重んじる"
  },
  // 076-1
  {
    word: "treasure",
    meaning: "財宝，宝",
    sentence: "a national (   )",
    jp: "国宝"
  },
  // 076-2
  {
    word: "treasure",
    meaning: "大事な人物",
    sentence: "My secretary is a real (   ).",
    jp: "私の秘書は本当に宝物のような存在だ。"
  },
  // 076-3
  {
    word: "treasure",
    meaning: "〜を大事にする",
    sentence: "(   ) this moment with her",
    jp: "彼女とのこの瞬間を大切にする"
  },
  // 077-1
  {
    word: "fashion",
    meaning: "流行",
    sentence: "follow the latest (   )",
    jp: "最新のファッションを追う"
  },
  // 077-2
  {
    word: "fashion",
    meaning: "流儀，やり方",
    sentence: "in the traditional (   )",
    jp: "伝統的なやり方で"
  },
  // 077-3
  {
    word: "fashion",
    meaning: "作る",
    sentence: "(   ) stone tools",
    jp: "石器を作る"
  },
  // 078-1
  {
    word: "public",
    meaning: "大衆",
    sentence: "the general (   )",
    jp: "一般大衆"
  },
  // 078-2
  {
    word: "public",
    meaning: "公の，公衆の",
    sentence: "(   ) places",
    jp: "公衆の場所"
  },
  // 079-1
  {
    word: "evidence",
    meaning: "証拠",
    sentence: "There is no (   ) to support his story.",
    jp: "彼の話を裏付ける証拠はない。"
  },
  // 080-1
  {
    word: "vote",
    meaning: "投票（数）",
    sentence: "receive 45% of the (   )",
    jp: "投票数の45％を獲得する"
  },
  // 080-2
  {
    word: "vote",
    meaning: "投票する",
    sentence: "the right to (   )",
    jp: "投票権（投票する権利）"
  },
  // 081-1
  {
    word: "government",
    meaning: "政府",
    sentence: "the Japanese (   )",
    jp: "日本政府"
  },
  // 082-1
  {
    word: "nation",
    meaning: "国家",
    sentence: "the most powerful (   ) in the world",
    jp: "世界で一番力のある国"
  },
  // 082-2
  {
    word: "nation",
    meaning: "国民",
    sentence: "the voice of the (   )",
    jp: "国民の声"
  },
  // 083-1
  {
    word: "capital",
    meaning: "首都",
    sentence: "What is the (   ) of Canada?",
    jp: "カナダの首都はどこですか。"
  },
  // 083-2
  {
    word: "capital",
    meaning: "資本",
    sentence: "start a company with only a little (   )",
    jp: "わずかな資本で会社を始める"
  },
  // 083-3
  {
    word: "capital",
    meaning: "死に値する",
    sentence: "a (   ) offence",
    jp: "死罪"
  },
  // 084-1
  {
    word: "state",
    meaning: "状態",
    sentence: "his (   ) of mind",
    jp: "彼の精神状態"
  },
  // 084-2
  {
    word: "States",
    meaning: "（米国の）州",
    sentence: "the United (   ) of America",
    jp: "アメリカ合衆国"
  },
  // 084-3
  {
    word: "state",
    meaning: "国家",
    sentence: "the separation of church and (   )",
    jp: "教会と国家の分離"
  },
  // 084-4
  {
    word: "state",
    meaning: "述べる",
    sentence: "(   ) my opinion",
    jp: "私の意見を言う"
  },
  // 085-1
  {
    word: "political",
    meaning: "政治的な，政治の",
    sentence: "the (   ) situation in Russia",
    jp: "ロシアの政治情勢"
  },
  // 086-1
  {
    word: "price",
    meaning: "価格",
    sentence: "pay a very high (   ) for the painting",
    jp: "その絵に非常に高額な価格を払う"
  },
  // 086-2
  {
    word: "Prices",
    meaning: "物価",
    sentence: "(   ) have gone up by 5%.",
    jp: "物価が5％上がった。"
  },
  // 086-3
  {
    word: "price",
    meaning: "代償",
    sentence: "pay the (   ) of success",
    jp: "成功の代価を払う"
  },
  // 087-1
  {
    word: "sum",
    meaning: "金額",
    sentence: "pay a large (   ) for antiques",
    jp: "骨とう品に大金を払う"
  },
  // 087-2
  {
    word: "sum",
    meaning: "合計",
    sentence: "The (   ) of 5 and 8 is 13.",
    jp: "5と8の和は13だ。"
  },
  // 087-3
  {
    word: "sums",
    meaning: "計算",
    sentence: "do (   ) in my head",
    jp: "暗算する"
  },
  // 087-4
  {
    word: "sum",
    meaning: "要約する",
    sentence: "(   ) up the main points",
    jp: "重要な点を要約する"
  },
  // 088-1
  {
    word: "budget",
    meaning: "予算",
    sentence: "our (   ) for this trip",
    jp: "今回の旅の予算"
  },
  // 088-2
  {
    word: "budget",
    meaning: "安い",
    sentence: "at (   ) price",
    jp: "お手頃価格で"
  },
  // 089-1
  {
    word: "fee",
    meaning: "料金",
    sentence: "pay a cancellation (   )",
    jp: "キャンセル料を払う"
  },
  // 089-2
  {
    word: "fees",
    meaning: "謝礼",
    sentence: "legal (   )",
    jp: "弁護士への謝礼"
  },
  // 090-1
  {
    word: "fares",
    meaning: "（乗り物の）運賃",
    sentence: "Taxi (   ) are low in Singapore.",
    jp: "シンガポールのタクシー料金は安い。"
  }
],
91: [
  // 091-1
  {
    word: "bill",
    meaning: "勘定",
    sentence: "May we have the (   )?",
    jp: "お会計お願いします。"
  },
  // 091-2
  {
    word: "bill",
    meaning: "請求書",
    sentence: "the phone (   )",
    jp: "電話代の請求書"
  },
  // 091-3
  {
    word: "bill",
    meaning: "紙幣",
    sentence: "a ten thousand-yen (   )",
    jp: "1万円札"
  },
  // 091-4
  {
    word: "bill",
    meaning: "法案",
    sentence: "approve a (   )",
    jp: "法案を承認する"
  },
  // 092-1
  {
    word: "trade",
    meaning: "貿易",
    sentence: "Japan's (   ) with the U.S.",
    jp: "日本の対米貿易"
  },
  // 092-2
  {
    word: "trade",
    meaning: "業界",
    sentence: "the hotel (   )",
    jp: "ホテル業界"
  },
  // 092-3
  {
    word: "trade",
    meaning: "商売",
    sentence: "the basics of (   )",
    jp: "商売の基本"
  },
  // 092-4
  {
    word: "trade",
    meaning: "交換する",
    sentence: "(   ) email addresses with him",
    jp: "彼とメールアドレスを交換する"
  },
  // 093-1
  {
    word: "wealth",
    meaning: "富，財産",
    sentence: "achieve (   ) and power",
    jp: "富と権力を手にする"
  },
  // 093-2
  {
    word: "wealth",
    meaning: "豊富な〜",
    sentence: "a (   ) of knowledge",
    jp: "豊富な知識"
  },
  // 094-1
  {
    word: "economy",
    meaning: "経済",
    sentence: "boost the Japanese (   )",
    jp: "日本経済を活性化する"
  },
  // 094-2
  {
    word: "economy",
    meaning: "節約",
    sentence: "for the sake of (   )",
    jp: "節約のため"
  },
  // 095-1
  {
    word: "cost",
    meaning: "費用を要する，かかる",
    sentence: "The suit (   ) me 500 dollars.",
    jp: "そのスーツは，500ドルした。"
  },
  // 095-2
  {
    word: "cost",
    meaning: "犠牲にする",
    sentence: "That mistake (   ) me my fortune.",
    jp: "そのミスで全財産を失った。"
  },
  // 095-3
  {
    word: "cost",
    meaning: "費用，犠牲",
    sentence: "In Switzerland, the (   ) of living is very high.",
    jp: "スイスでは生活費がとても高い。"
  },
  // 096-1
  {
    word: "company",
    meaning: "会社",
    sentence: "work for a big (   )",
    jp: "大きな会社で働く"
  },
  // 096-2
  {
    word: "company",
    meaning: "一緒にいること",
    sentence: "I always enjoy his (   ).",
    jp: "彼と一緒にいるときはいつも楽しい。"
  },
  // 096-3
  {
    word: "company",
    meaning: "仲間",
    sentence: "People judge you by the (   ) you keep.",
    jp: "人は付き合っている仲間で判断される。"
  },
  // 096-4
  {
    word: "company",
    meaning: "来客",
    sentence: "We are expecting (   ) today.",
    jp: "今日は来客があります。"
  },
  // 097-1
  {
    word: "task",
    meaning: "仕事，任務",
    sentence: "accomplish a difficult (   )",
    jp: "困難な仕事を成し遂げる。"
  },
  // 098-1
  {
    word: "earn",
    meaning: "金を稼ぐ",
    sentence: "(   ) money to pay my school fees",
    jp: "学費を払うお金を稼ぐ"
  },
  // 098-2
  {
    word: "earn",
    meaning: "得る",
    sentence: "(   ) a reputation as a hard worker",
    jp: "勤勉との評判を得る"
  },
  // 099-1
  {
    word: "hurts",
    meaning: "部位が痛む",
    sentence: "My back (   ) a lot.",
    jp: "腰がとても痛い。"
  },
  // 099-2
  {
    word: "hurt",
    meaning: "身体，感情を傷つける",
    sentence: "He (   ) his knee while playing football.",
    jp: "彼はサッカーをやっていて膝を痛めた。"
  },
  // 100-1
  {
    word: "injure",
    meaning: "〜をけがさせる",
    sentence: "(   ) my back",
    jp: "腰を痛める"
  },
  // 100-2
  {
    word: "injured",
    meaning: "けがを負う",
    sentence: "be seriously (   ) in an accident",
    jp: "事故で重傷を負う"
  },
  // 101-1
  {
    word: "damage",
    meaning: "損害",
    sentence: "seriously (   ) the environment",
    jp: "環境に深刻な被害を与える"
  },
  // 101-2
  {
    word: "damage",
    meaning: "被害",
    sentence: "do (   ) to the village",
    jp: "その村に被害を与える"
  },
  // 101-3
  {
    word: "damages",
    meaning: "賠償金",
    sentence: "claim (   )",
    jp: "損害賠償を請求する"
  },
  // 102-1
  {
    word: "destroy",
    meaning: "破壊する",
    sentence: "(   ) all weapons",
    jp: "すべての武器を破壊する"
  },
  // 102-2
  {
    word: "destroyed",
    meaning: "全滅させる",
    sentence: "This horse has to be (   ).",
    jp: "この馬を殺処分するしかない。"
  },
  // 103-1
  {
    word: "ruined",
    meaning: "台無しにする",
    sentence: "You (   ) my plan.",
    jp: "君のせいで計画が台無しだよ。"
  },
  // 103-2
  {
    word: "ruined",
    meaning: "破壊する",
    sentence: "The flood (   ) the town.",
    jp: "洪水が町を破壊してしまった。"
  },
  // 103-3
  {
    word: "ruins",
    meaning: "廃墟",
    sentence: "the (   ) of Pompeii",
    jp: "ポンペイの遺跡"
  },
  // 104-1
  {
    word: "danger",
    meaning: "危険",
    sentence: "Tigers are in (   ) of extinction.",
    jp: "トラが絶滅の危機にある。"
  },
  // 105-1
  {
    word: "neighbor",
    meaning: "近所の人",
    sentence: "chat with a (   )",
    jp: "近所の人と話す"
  },
  // 105-2
  {
    word: "neighbor's",
    meaning: "隣の人",
    sentence: "My next-door (   ) dog barks day and night.",
    jp: "隣の人のイヌが昼夜問わずほえる。"
  },
  // 106-1
  {
    word: "audience",
    meaning: "観客",
    sentence: "draw a large (   )",
    jp: "大観衆を集める"
  },
  // 107-1
  {
    word: "crowd",
    meaning: "群衆",
    sentence: "A (   ) rushed into the hall.",
    jp: "群衆が会場になだれ込んだ。"
  },
  // 108-1
  {
    word: "author",
    meaning: "著者，作家",
    sentence: "the (   ) of War and Peace",
    jp: "『戦争と平和』の著者"
  },
  // 109-1
  {
    word: "staff",
    meaning: "職員，従業員",
    sentence: "Most of the (   ) is from Australia.",
    jp: "職員の半分はオーストラリア出身です。"
  },
  // 110-1
  {
    word: "clerks",
    meaning: "店員",
    sentence: "the (   ) at that department store",
    jp: "あのデパートの店員"
  },
  // 110-2
  {
    word: "clerk",
    meaning: "事務員，社員",
    sentence: "a bank (   )",
    jp: "銀行員"
  },
  // 111-1
  {
    word: "customers",
    meaning: "客",
    sentence: "The restaurant was crowded with (   ) from abroad.",
    jp: "そのレストランは外国人客で混雑していた。"
  },
  // 112-1
  {
    word: "passengers",
    meaning: "乗客",
    sentence: "There were a lot of (   ) on the train.",
    jp: "列車には多くの乗客が乗っていた。"
  },
  // 113-1
  {
    word: "elderly",
    meaning: "年配の",
    sentence: "give up my seat to (   ) people",
    jp: "お年寄りに席を譲る"
  },
  // 113-2
  {
    word: "elderly",
    meaning: "年配の人々",
    sentence: "priority seats for the (   )",
    jp: "お年寄りのための優先席"
  },
  // 114-1
  {
    word: "female",
    meaning: "女性の，雌の",
    sentence: "(   ) workers",
    jp: "女性の労働者"
  },
  // 114-2
  {
    word: "female",
    meaning: "雌",
    sentence: "a (   ) cat",
    jp: "雌のネコ"
  },
  // 114-3
  {
    word: "female",
    meaning: "雌",
    sentence: "the (   ) of the species",
    jp: "その種の雌"
  },
  // 115-1
  {
    word: "head",
    meaning: "向かう",
    sentence: "(   ) for the beach",
    jp: "海辺に向かう"
  },
  // 115-2
  {
    word: "headed",
    meaning: "率いる",
    sentence: "an investigative team (   ) by Mr. Nakahara",
    jp: "中原氏が率いる調査団"
  },
  // 116-1
  {
    word: "following",
    meaning: "後について行く，続く",
    sentence: "Someone was (   ) me.",
    jp: "誰かが私をつけていた。"
  },
  // 116-2
  {
    word: "follow",
    meaning: "従う",
    sentence: "(   ) his advice",
    jp: "彼の忠告に従う"
  },
  // 117-1
  {
    word: "wander",
    meaning: "歩き回る，さまよう",
    sentence: "(   ) about the town",
    jp: "街をぶらぶら歩き回る"
  },
  // 118-1
  {
    word: "travel",
    meaning: "旅行する，移動する",
    sentence: "(   ) around the world",
    jp: "世界中を旅する"
  },
  // 118-2
  {
    word: "travels",
    meaning: "進む",
    sentence: "Light (   ) faster than sound.",
    jp: "光は音より速く進む。"
  },
  // 119-1
  {
    word: "pass",
    meaning: "通り過ぎる",
    sentence: "(   ) the post office",
    jp: "郵便局の（前を）通り過ぎる"
  },
  // 119-2
  {
    word: "pass",
    meaning: "抜く",
    sentence: "(   ) five runners on the final lap",
    jp: "最後の1周で5人の走者を抜く"
  },
  // 119-3
  {
    word: "pass",
    meaning: "受かる",
    sentence: "(   ) the bar exam",
    jp: "司法試験に受かる"
  },
  // 119-4
  {
    word: "Pass",
    meaning: "渡す",
    sentence: "(   ) me the salt, please.",
    jp: "塩を取って（私に渡して）ください。"
  },
  // 119-5
  {
    word: "passes",
    meaning: "過ぎる",
    sentence: "as time (   )",
    jp: "時の経過と共に"
  },
  // 119-6
  {
    word: "pass",
    meaning: "通行証",
    sentence: "an annual (   ) for the theme park",
    jp: "そのテーマパークの年間パス"
  },
  // 120-1
  {
    word: "likely",
    meaning: "〜しそうだ",
    sentence: "Things are (   ) to improve.",
    jp: "事態はよくなりそうだ。"
  },
  // 120-2
  {
    word: "likely",
    meaning: "おそらく",
    sentence: "He will very (   ) stay home.",
    jp: "おそらく，彼は家にいるだろう。"
  }
],
121: [
  // 121-1
  {
    word: "natural",
    meaning: "当然の",
    sentence: "It is only (   ) that you cannot catch words you do not know.",
    jp: "知らない単語を聞き取れないのは当然のことだ。"
  },
  // 121-2
  {
    word: "natural",
    meaning: "自然の",
    sentence: "(   ) beauty",
    jp: "自然美"
  },
  // 121-3
  {
    word: "natural",
    meaning: "生まれながらの",
    sentence: "her (   ) talent",
    jp: "彼女の生まれつきの才能"
  },
  // 122-1
  {
    word: "certain",
    meaning: "確かな",
    sentence: "He is (   ) to become a star player.",
    jp: "彼はきっとスター選手になるよ。"
  },
  // 122-2
  {
    word: "certain",
    meaning: "ある〜",
    sentence: "be sent to a (   ) country",
    jp: "ある国に派遣される"
  },
  // 123-1
  {
    word: "probably",
    meaning: "おそらく",
    sentence: "The repairs will (   ) take a month.",
    jp: "修理はおそらく1か月はかかるだろう。"
  },
  // 124-1
  {
    word: "faced",
    meaning: "直面する",
    sentence: "We are (   ) with crisis.",
    jp: "私たちは危機に直面している。"
  },
  // 124-2
  {
    word: "facing",
    meaning: "向いている",
    sentence: "a window (   ) (the) south",
    jp: "南向きの窓"
  },
  // 124-3
  {
    word: "face",
    meaning: "体面",
    sentence: "lose (   )",
    jp: "面目を失う"
  },
  // 125-1
  {
    word: "Avoid",
    meaning: "避ける",
    sentence: "(   ) making eye contact with monkeys.",
    jp: "サルと目を合わせないようにしなさい。"
  },
  // 126-1
  {
    word: "solve",
    meaning: "解決する，解く",
    sentence: "(   ) the math problem",
    jp: "その数学の問題を解く"
  },
  // 127-1
  {
    word: "trouble",
    meaning: "問題，ごたごた",
    sentence: "have (   ) sleeping",
    jp: "寝つけない（眠るのに苦労する）。"
  },
  // 127-2
  {
    word: "trouble",
    meaning: "困らせる",
    sentence: "I'm sorry to (   ) you.",
    jp: "お手間をおかけして（あなたを困らせて）すみません。"
  },
  // 128-1
  {
    word: "issue",
    meaning: "問題",
    sentence: "an international (   )",
    jp: "国際問題"
  },
  // 128-2
  {
    word: "issue",
    meaning: "号",
    sentence: "the latest (   ) of a magazine",
    jp: "雑誌の最新号"
  },
  // 128-3
  {
    word: "issue",
    meaning: "発行する",
    sentence: "(   ) a passport",
    jp: "パスポートを発行する"
  },
  // 129-1
  {
    word: "cheer",
    meaning: "声援を送る",
    sentence: "(   ) all the players on",
    jp: "すべての選手たちに声援を送る"
  },
  // 129-2
  {
    word: "cheered",
    meaning: "励ます",
    sentence: "His arrival (   ) me up.",
    jp: "彼の到着で元気が出た（私を励ました）。"
  },
  // 129-3
  {
    word: "cheer",
    meaning: "声援",
    sentence: "give a (   )",
    jp: "声援を送る"
  },
  // 129-4
  {
    word: "Cheers",
    meaning: "乾杯",
    sentence: "\"(   )!\" shouted Adam.",
    jp: "「乾杯！」とアダムは叫んだ。"
  },
  // 130-1
  {
    word: "encourage",
    meaning: "促す，勧める",
    sentence: "(   ) people to bike to work",
    jp: "人々に自転車通勤するよう促す"
  },
  // 130-2
  {
    word: "encourage",
    meaning: "励ます",
    sentence: "(   ) the students",
    jp: "生徒たちを元気づける"
  },
  // 131-1
  {
    word: "support",
    meaning: "支持する",
    sentence: "firmly (   ) her",
    jp: "強く彼女を支持する"
  },
  // 131-2
  {
    word: "support",
    meaning: "養う",
    sentence: "(   ) a family of four",
    jp: "4人家族を養う"
  },
  // 131-3
  {
    word: "supports",
    meaning: "立証する",
    sentence: "This (   ) my idea.",
    jp: "これが私の考えを立証する。"
  },
  // 131-4
  {
    word: "support",
    meaning: "支持，支援",
    sentence: "financial (   )",
    jp: "財政的援助"
  },
  // 132-1
  {
    word: "prevented",
    meaning: "妨げる",
    sentence: "The heavy snow (   ) us from going out.",
    jp: "大雪のため（私たちの）外出できなかった。"
  },
  // 132-2
  {
    word: "prevent",
    meaning: "予防する",
    sentence: "(   ) the flu",
    jp: "インフルエンザの予防をする"
  },
  // 133-1
  {
    word: "deny",
    meaning: "否定する",
    sentence: "(   ) that he is a great scientist",
    jp: "彼が偉大な科学者であることを否定する"
  },
  // 133-2
  {
    word: "deny",
    meaning: "与えない",
    sentence: "(   ) them the right to vote",
    jp: "彼らに投票権を与えない"
  },
  // 134-1
  {
    word: "enabled",
    meaning: "可能にする",
    sentence: "The internet has (   ) us to receive information right away.",
    jp: "インターネットのおかげで情報をすぐ得られるようになった（私たちに得ることを可能にした）。"
  },
  // 135-1
  {
    word: "succeed",
    meaning: "成功する",
    sentence: "(   ) in landing on the moon",
    jp: "月面着陸に成功する"
  },
  // 135-2
  {
    word: "succeed",
    meaning: "継ぐ",
    sentence: "(   ) to the family business",
    jp: "家業を引き継ぐ"
  },
  // 136-1
  {
    word: "miss",
    meaning: "逃す",
    sentence: "(   ) the last train",
    jp: "終電を逃す"
  },
  // 136-2
  {
    word: "miss",
    meaning: "休む",
    sentence: "(   ) school for two days",
    jp: "2日間学校を休む"
  },
  // 136-3
  {
    word: "miss",
    meaning: "寂しく思う",
    sentence: "I (   ) you.",
    jp: "あなたに会えなくて寂しい（あなたを恋しく思う）。"
  },
  // 137-1
  {
    word: "fail",
    meaning: "失敗する",
    sentence: "(   ) in business",
    jp: "商売で失敗する"
  },
  // 137-2
  {
    word: "fail",
    meaning: "できない",
    sentence: "(   ) to see what happened",
    jp: "何が起きたかわからない（知ることに失敗する）"
  },
  // 137-3
  {
    word: "fail",
    meaning: "落ちる",
    sentence: "(   ) the exam",
    jp: "試験に落ちる"
  },
  // 137-4
  {
    word: "fails",
    meaning: "役に立たない",
    sentence: "My memory (   ) me these days.",
    jp: "近頃，記憶が役に立たない（私に役立たない）。"
  },
  // 138-1
  {
    word: "mistake",
    meaning: "間違える",
    sentence: "(   ) him for his twin brother",
    jp: "彼を双子の弟と間違える"
  },
  // 138-2
  {
    word: "mistakes",
    meaning: "間違い",
    sentence: "make grammatical (   )",
    jp: "文法ミスをする"
  },
  // 139-1
  {
    word: "check",
    meaning: "調べる",
    sentence: "(   ) the brakes",
    jp: "そのブレーキを調べる"
  },
  // 139-2
  {
    word: "check",
    meaning: "阻止する",
    sentence: "(   ) the spread of the disease",
    jp: "病気の流行を阻止する"
  },
  // 139-3
  {
    word: "check",
    meaning: "小切手",
    sentence: "sign a (   )",
    jp: "小切手に署名する"
  },
  // 139-4
  {
    word: "check",
    meaning: "勘定書",
    sentence: "Can I have the (   ), please?",
    jp: "お勘定をお願いいたします。"
  },
  // 139-5
  {
    word: "check",
    meaning: "検査",
    sentence: "have a medical (   ) (up)",
    jp: "健康診断を受ける"
  },
  // 139-6
  {
    word: "check",
    meaning: "抑制",
    sentence: "hold their activities in (   )",
    jp: "彼らの活動を食い止める（抑制して留める）"
  },
  // 140-1
  {
    word: "hide",
    meaning: "〜を隠す",
    sentence: "(   ) the comic under the pillow",
    jp: "枕の下に漫画を隠す"
  },
  // 140-2
  {
    word: "hiding",
    meaning: "隠れ場所",
    sentence: "my (   ) place",
    jp: "私の隠れ場所"
  },
  // 141-1
  {
    word: "draw",
    meaning: "描く",
    sentence: "(   ) her portrait",
    jp: "彼女の似顔絵を描く"
  },
  // 141-2
  {
    word: "draw",
    meaning: "引く",
    sentence: "(   ) his attention to that fact",
    jp: "その事に彼の注目を向けさせる"
  },
  // 141-3
  {
    word: "drawn",
    meaning: "引っ張る",
    sentence: "a cart (   ) by two horses",
    jp: "2頭の馬に引かれた荷馬車"
  },
  // 142-1
  {
    word: "join",
    meaning: "加わる",
    sentence: "(   ) the Me Too movement",
    jp: "Me Too 運動に参加する"
  },
  // 142-2
  {
    word: "join",
    meaning: "つなぐ",
    sentence: "(   ) pipes together",
    jp: "配水管を一本につなぐ"
  },
  // 142-3
  {
    word: "Join",
    meaning: "食事をともにする",
    sentence: "(   ) us for lunch.",
    jp: "お昼を一緒に食べようよ。"
  },
  // 142-4
  {
    word: "join",
    meaning: "参加する",
    sentence: "(   ) in the discussion",
    jp: "その議論に（途中から）参加する"
  },
  // 143-1
  {
    word: "Throw",
    meaning: "投げる",
    sentence: "(   ) me a rope.",
    jp: "ロープを投げてくれ。"
  },
  // 143-2
  {
    word: "throw",
    meaning: "捨てる",
    sentence: "Don't (   ) away your empty cans here.",
    jp: "ここに空き缶を捨てるな。"
  },
  // 143-3
  {
    word: "throw",
    meaning: "催す",
    sentence: "(   ) a party for him",
    jp: "彼のためにパーティを開く"
  },
  // 143-4
  {
    word: "throw",
    meaning: "投てき",
    sentence: "a (   ) of 100 meters",
    jp: "100メートルの投てき"
  },
  // 144-1
  {
    word: "operate",
    meaning: "操作する",
    sentence: "(   ) five machines at once",
    jp: "一度に5台の機械を操作する"
  },
  // 144-2
  {
    word: "operate",
    meaning: "手術する",
    sentence: "(   ) on a patient for cancer",
    jp: "患者のがんの手術をする"
  },
  // 144-3
  {
    word: "operate",
    meaning: "運営される",
    sentence: "(   ) efficiently",
    jp: "能率的に運営される"
  },
  // 145-1
  {
    word: "repair",
    meaning: "修理する",
    sentence: "(   ) a bicycle",
    jp: "自転車を修理する"
  },
  // 145-2
  {
    word: "repair",
    meaning: "修復する",
    sentence: "(   ) damage to his neck",
    jp: "彼の首の損傷を修復する"
  },
  // 145-3
  {
    word: "repair",
    meaning: "修理中",
    sentence: "a smartphone under (   )",
    jp: "修理中のスマートフォン"
  },
  // 146-1
  {
    word: "sews",
    meaning: "縫う",
    sentence: "She (   ) all her own dresses.",
    jp: "彼女は自分の服をすべて自分で縫っている。"
  },
  // 146-2
  {
    word: "sew",
    meaning: "縫いつける",
    sentence: "(   ) a button on",
    jp: "ボタンを縫いつける"
  },
  // 147-1
  {
    word: "Raise",
    meaning: "〜を上げる",
    sentence: "(   ) your hand.",
    jp: "手を上げて。"
  },
  // 147-2
  {
    word: "raise",
    meaning: "育てる",
    sentence: "(   ) children",
    jp: "子どもを育てる"
  },
  // 147-3
  {
    word: "raise",
    meaning: "集める",
    sentence: "(   ) funds",
    jp: "資金を集める"
  },
  // 147-4
  {
    word: "raise",
    meaning: "提起する",
    sentence: "(   ) the issue of aging",
    jp: "高齢化の問題を提起する"
  },
  // 147-5
  {
    word: "raise",
    meaning: "賃上げ",
    sentence: "get a pay (   )",
    jp: "給料が上がる（賃上げを得る）"
  },
  // 148-1
  {
    word: "serve",
    meaning: "飲食物を出す",
    sentence: "(   ) wine to the guests",
    jp: "客にワインを出す"
  },
  // 148-2
  {
    word: "serve",
    meaning: "役に立つ",
    sentence: "This experience will (   ) you well.",
    jp: "この経験は君の役に立つだろう。"
  },
  // 148-3
  {
    word: "served",
    meaning: "役立つ",
    sentence: "The hospital (   ) as a school.",
    jp: "その病院は学校として使われていた（役立っていた）。"
  },
  // 149-1
  {
    word: "pour",
    meaning: "〜を注ぐ",
    sentence: "(   ) tea for all of the guests",
    jp: "客みんなにお茶を注ぐ"
  },
  // 149-2
  {
    word: "poured",
    meaning: "降りそそぐ",
    sentence: "It (   ) all night.",
    jp: "一晩中土砂降りだった（雨が降りそそいだ）。"
  },
  // 150-1
  {
    word: "spill",
    meaning: "〜をこぼす",
    sentence: "(   ) coffee all over my laptop",
    jp: "コーヒーをノートパソコンの上にこぼす"
  },
  // 150-2
  {
    word: "spill",
    meaning: "流出",
    sentence: "an oil (   ) in the Atlantic Ocean",
    jp: "大西洋の石油流出"
  }
],
151: [
  // 151-1
  {
    word: "pretend",
    meaning: "〜するふりをする",
    sentence: "(   ) to be sleeping",
    jp: "寝ているふりをする"
  },
  // 152-1
  {
    word: "behaves",
    meaning: "ふるまう",
    sentence: "He (   ) badly in class.",
    jp: "彼の授業中の態度は悪い（悪いふるまいをする）。"
  },
  // 152-2
  {
    word: "behave",
    meaning: "行儀よくふるまう",
    sentence: "tell him to (   ) himself",
    jp: "彼に行儀よくふるまうように言う"
  },
  // 153-1
  {
    word: "bear",
    meaning: "〜に耐える",
    sentence: "cannot (   ) the noise",
    jp: "騒音に耐えられない"
  },
  // 153-2
  {
    word: "bear",
    meaning: "心に留める",
    sentence: "(   ) the responsibility for the accident",
    jp: "その事故の責任を負う（責任を心に持つ）"
  },
  // 153-3
  {
    word: "born",
    meaning: "〜を産む",
    sentence: "She was (   ) with a silver spoon in her mouth.",
    jp: "彼女は裕福な家に生まれた"
  },
  // 154-1
  {
    word: "explore",
    meaning: "探検する",
    sentence: "(   ) the surface of Mars",
    jp: "火星の地表を探査する（探検する）"
  },
  // 154-2
  {
    word: "explore",
    meaning: "探ぐる",
    sentence: "(   ) the possibility of collaboration",
    jp: "コラボの可能性を探る"
  },
  // 155-1
  {
    word: "happened",
    meaning: "起こる",
    sentence: "What (   ) to her?",
    jp: "彼女に何が起こったの？"
  },
  // 155-2
  {
    word: "happened",
    meaning: "偶然〜する",
    sentence: "I (   ) to meet him.",
    jp: "彼にたまたま（偶然）会った。"
  },
  // 156-1
  {
    word: "appeared",
    meaning: "現れる",
    sentence: "The singer (   ) on the stage.",
    jp: "その歌手がステージに現れた。"
  },
  // 156-2
  {
    word: "appears",
    meaning: "〜のように思える",
    sentence: "He (   ) to be sleeping.",
    jp: "彼は寝ているようだ（思える）。"
  },
  // 157-1
  {
    word: "remains",
    meaning: "〜のままでいる",
    sentence: "The cause of the accident (   ) unknown.",
    jp: "その事故の原因はいまだに知られていない（未知のままである）。"
  },
  // 157-2
  {
    word: "remained",
    meaning: "残る",
    sentence: "Five people (   ) in the room.",
    jp: "部屋に5人が残っていた。"
  },
  // 158-1
  {
    word: "survive",
    meaning: "生き残る",
    sentence: "eat grass in order to (   )",
    jp: "生き延びる（生き残る）ために草を食べる"
  },
  // 158-2
  {
    word: "survive",
    meaning: "〜から生き延びる",
    sentence: "(   ) a plane crash",
    jp: "飛行機の事故で生き残る"
  },
  // 159-1
  {
    word: "belongs",
    meaning: "所属している",
    sentence: "Sam (   ) to the Sales Department.",
    jp: "サムは営業部に所属している。"
  },
  // 160-1
  {
    word: "represent",
    meaning: "代表する",
    sentence: "(   ) Japan at the World Cup",
    jp: "ワールドカップ日本代表となる（代表する）"
  },
  // 160-2
  {
    word: "represents",
    meaning: "表す",
    sentence: "This sign (   ) a temple.",
    jp: "このマークは寺を表す。"
  },
  // 160-3
  {
    word: "represents",
    meaning: "表現する",
    sentence: "This painting (   ) the fight between good and evil.",
    jp: "この絵画は善と悪の戦いを表現している。"
  },
  // 161-1
  {
    word: "based",
    meaning: "基礎を置く",
    sentence: "This novel is (   ) on facts.",
    jp: "この小説は事実に基づいている（基礎を置いている）。"
  },
  // 161-2
  {
    word: "base",
    meaning: "基盤",
    sentence: "I work in many places, but my (   ) is here.",
    jp: "多くの場所で働いているが，私の基盤はここだ。"
  },
  // 161-3
  {
    word: "base",
    meaning: "基地",
    sentence: "a secret (   )",
    jp: "秘密基地"
  },
  // 162-1
  {
    word: "includes",
    meaning: "含む",
    sentence: "The price (   ) postage.",
    jp: "価格には送料が含まれています。"
  },
  // 163-1
  {
    word: "contains",
    meaning: "含んでいる",
    sentence: "This soup (   ) various herbs.",
    jp: "このスープにはさまざまな薬草が入っている（含んでいる）。"
  },
  // 163-2
  {
    word: "contain",
    meaning: "抑える",
    sentence: "I cannot (   ) my anger.",
    jp: "怒りを抑えられない。"
  },
  // 164-1
  {
    word: "own",
    meaning: "所有している",
    sentence: "(   ) ten companies in India",
    jp: "インドに10の会社を所有している"
  },
  // 164-2
  {
    word: "own",
    meaning: "自分自身の",
    sentence: "with my (   ) eyes",
    jp: "私自身の目で"
  },
  // 164-3
  {
    word: "own",
    meaning: "自分自身のもの",
    sentence: "I decided to quit the company and start my (   ).",
    jp: "会社を辞め，自分の（会社を）始めることに決めた。"
  },
  // 165-1
  {
    word: "share",
    meaning: "〜を共有する",
    sentence: "(   ) a table with a stranger",
    jp: "知らない人と相席する（席を共有する）"
  },
  // 165-2
  {
    word: "share",
    meaning: "伝える",
    sentence: "Could you (   ) your opinion about this?",
    jp: "これについてのあなたの意見を聞かせて（共有して）ください。"
  },
  // 165-3
  {
    word: "share",
    meaning: "共有",
    sentence: "a flat (   )",
    jp: "アパートの共有"
  },
  // 165-4
  {
    word: "share",
    meaning: "分け前",
    sentence: "a (   ) of the profits",
    jp: "利益の分け前"
  },
  // 166-1
  {
    word: "collect",
    meaning: "集める",
    sentence: "(   ) teddy bears",
    jp: "クマのぬいぐるみを集める"
  },
  // 166-2
  {
    word: "collect",
    meaning: "回収する",
    sentence: "(   ) empty cans for recycling",
    jp: "リサイクルのために空き缶を回収する"
  },
  // 167-1
  {
    word: "gather",
    meaning: "集める",
    sentence: "(   ) information",
    jp: "情報を集める"
  },
  // 167-2
  {
    word: "gather",
    meaning: "集まる",
    sentence: "(   ) around the teacher",
    jp: "先生の周りに集まる"
  },
  // 168-1
  {
    word: "history",
    meaning: "歴史",
    sentence: "the best soccer player in (   )",
    jp: "史上（歴史上）最高のサッカー選手"
  },
  // 168-2
  {
    word: "history",
    meaning: "履歴",
    sentence: "an update (   )",
    jp: "更新履歴"
  },
  // 169-1
  {
    word: "subject",
    meaning: "科目",
    sentence: "a required (   )",
    jp: "必須科目"
  },
  // 169-2
  {
    word: "subject",
    meaning: "話題",
    sentence: "get off the (   )",
    jp: "話題からそれる"
  },
  // 169-3
  {
    word: "subject",
    meaning: "被験者",
    sentence: "the (   ) of the experiment",
    jp: "その実験の被験者"
  },
  // 169-4
  {
    word: "subject",
    meaning: "受けやすい",
    sentence: "The program is (   ) to change.",
    jp: "プログラムは変更の可能性があります（変更を受けやすい）。"
  },
  // 170-1
  {
    word: "education",
    meaning: "教育",
    sentence: "receive a good (   )",
    jp: "よい教育を受ける"
  },
  // 171-1
  {
    word: "knowledge",
    meaning: "知識，知っていること",
    sentence: "have a wide range of (   ) of cinema",
    jp: "映画に関する幅広い知識を持っている"
  },
  // 172-1
  {
    word: "uniform",
    meaning: "制服",
    sentence: "wear a school (   )",
    jp: "学校の制服を着ている"
  },
  // 172-2
  {
    word: "uniform",
    meaning: "一定の",
    sentence: "maintain a (   ) temperature",
    jp: "一定の温度を保つ"
  },
  // 173-1
  {
    word: "grade",
    meaning: "学年",
    sentence: "She is in the eighth (   ).",
    jp: "彼女は8年生（中学2年生）だ。"
  },
  // 173-2
  {
    word: "grade",
    meaning: "等級",
    sentence: "low-(   ) products",
    jp: "低級の製品"
  },
  // 173-3
  {
    word: "grade",
    meaning: "成績",
    sentence: "a high (   ) in math",
    jp: "数学での好成績"
  },
  // 174-1
  {
    word: "senior",
    meaning: "最上級生",
    sentence: "a college (   )",
    jp: "大学4年生"
  },
  // 174-2
  {
    word: "senior",
    meaning: "高齢者の",
    sentence: "(   ) citizens",
    jp: "高齢者"
  },
  // 174-3
  {
    word: "senior",
    meaning: "上位の",
    sentence: "a (   ) manager",
    jp: "上級管理者"
  },
  // 175-1
  {
    word: "graduate",
    meaning: "卒業する",
    sentence: "(   ) from high school",
    jp: "高校を卒業する"
  },
  // 176-1
  {
    word: "decide",
    meaning: "決定する，決める",
    sentence: "(   ) to live on my own",
    jp: "一人で暮らすことを決心する"
  },
  // 176-2
  {
    word: "decide",
    meaning: "決定する，決める",
    sentence: "(   ) on a date for the wedding",
    jp: "結婚式の日取りを決める"
  },
  // 177-1
  {
    word: "judge",
    meaning: "判断する",
    sentence: "(   ) someone by their appearance",
    jp: "人を外見で判断する"
  },
  // 177-2
  {
    word: "judge",
    meaning: "裁判官，審判",
    sentence: "Supreme Court (   )",
    jp: "最高裁判所の裁判官"
  },
  // 178-1
  {
    word: "quit",
    meaning: "辞める",
    sentence: "(   ) my job",
    jp: "仕事を辞める"
  },
  // 179-1
  {
    word: "retire",
    meaning: "引退する，退職する",
    sentence: "(   ) from the company",
    jp: "会社を（定年で）退職する"
  },
  // 180-1
  {
    word: "review",
    meaning: "再検討",
    sentence: "a (   ) of the tax system",
    jp: "税制の見直し"
  },
  // 180-2
  {
    word: "review",
    meaning: "批評",
    sentence: "a (   ) of his new book",
    jp: "彼の新刊本の批評"
  },
  // 180-3
  {
    word: "review",
    meaning: "復習",
    sentence: "do a (   ) of the last lesson",
    jp: "前の課を復習する"
  }
],
181: [
  // 181-1
  {
    word: "choose",
    meaning: "選ぶ",
    sentence: "(   ) what to wear to school",
    jp: "学校へ着ていく服を選ぶ"
  },
  // 181-2
  {
    word: "choose",
    meaning: "選ぶ",
    sentence: "(   ) between the two",
    jp: "2つから選ぶ"
  },
  // 182-1
  {
    word: "Imagine",
    meaning: "想像する",
    sentence: "(   ) life without electricity.",
    jp: "電気のない生活を想像してごらん。"
  },
  // 183-1
  {
    word: "Guess",
    meaning: "推測する",
    sentence: "(   ) what is in this bag.",
    jp: "この袋に何が入っているかを当ててごらん。"
  },
  // 183-2
  {
    word: "guess",
    meaning: "推測",
    sentence: "This is only a (   ).",
    jp: "これは単なる推測にすぎない。"
  },
  // 184-1
  {
    word: "expecting",
    meaning: "予期する，期待する",
    sentence: "We are (   ) a typhoon.",
    jp: "台風が来るらしい（来ることを予期している）。"
  },
  // 184-2
  {
    word: "expect",
    meaning: "予期する，期待する",
    sentence: "Don't (   ) too much of him.",
    jp: "彼にあまり期待しすぎるな。"
  },
  // 184-3
  {
    word: "expecting",
    meaning: "予期する，期待する",
    sentence: "She is (   ) (a baby).",
    jp: "彼女はおめでたです（赤ん坊を予期しています）。"
  },
  // 185-1
  {
    word: "predict",
    meaning: "〜を予測する",
    sentence: "(   ) when cherry blossoms will start to flower",
    jp: "桜の開花時期を予測する"
  },
  // 186-1
  {
    word: "remember",
    meaning: "覚えている，忘れずに〜する",
    sentence: "I (   ) meeting her here.",
    jp: "彼女にここで会ったことを覚えている。"
  },
  // 186-2
  {
    word: "remember",
    meaning: "覚えている，忘れずに〜する",
    sentence: "Did you (   ) to feed the dog?",
    jp: "イヌにエサをやるのを覚えてた？"
  },
  // 186-3
  {
    word: "Remember",
    meaning: "覚えている，忘れずに〜する",
    sentence: "(   ) me to your wife.",
    jp: "奥様によろしくお伝えください。"
  },
  // 187-1
  {
    word: "reminds",
    meaning: "思い出させる",
    sentence: "This song (   ) me of him.",
    jp: "この歌は彼のことを私に思い出させる。"
  },
  // 187-2
  {
    word: "remind",
    meaning: "思い出させる",
    sentence: "(   ) him not to be late",
    jp: "彼に遅れないように念を押す"
  },
  // 188-1
  {
    word: "realized",
    meaning: "理解する，実現する",
    sentence: "Jim (   ) that he did not love her any more.",
    jp: "ジムはもう彼女のことを愛していないことに気づいた（理解した）。"
  },
  // 188-2
  {
    word: "realized",
    meaning: "理解する，実現する",
    sentence: "She (   ) her dream of running her own shop.",
    jp: "彼女は自分の店を経営するという夢を実現した。"
  },
  // 189-1
  {
    word: "appreciate",
    meaning: "理解する，よさがわかる，感謝する",
    sentence: "(   ) the importance of discussion",
    jp: "話し合いの重要性を理解する"
  },
  // 189-2
  {
    word: "appreciate",
    meaning: "理解する，よさがわかる，感謝する",
    sentence: "(   ) the delicate flavors of Japanese cuisine",
    jp: "和食の（繊細な）味がわかる"
  },
  // 189-3
  {
    word: "appreciate",
    meaning: "理解する，よさがわかる，感謝する",
    sentence: "I'd (   ) it if you could help me.",
    jp: "助けていただければ，ありがたいのですが。"
  },
  // 190-1
  {
    word: "accept",
    meaning: "〜を受け入れる",
    sentence: "(   ) other people's opinions",
    jp: "他人の意見を受け入れる"
  },
  // 191-1
  {
    word: "consider",
    meaning: "考慮する，思いやる，みなす",
    sentence: "(   ) all the possibilities",
    jp: "すべての可能性を考える（考慮する）"
  },
  // 191-2
  {
    word: "consider",
    meaning: "考慮する，思いやる，みなす",
    sentence: "(   ) other people",
    jp: "人の（気持ちを）思いやる"
  },
  // 191-3
  {
    word: "consider",
    meaning: "考慮する，思いやる，みなす",
    sentence: "(   ) it to be meaningless",
    jp: "それは無意味だとみなす"
  },
  // 192-1
  {
    word: "mind",
    meaning: "気にする",
    sentence: "Do you (   ) if I open the window?",
    jp: "窓を開けていいですか（気になさいますか）？"
  },
  // 192-2
  {
    word: "minds",
    meaning: "精神",
    sentence: "the (   ) of children",
    jp: "子どもの心"
  },
  // 192-3
  {
    word: "minds",
    meaning: "才能のある人",
    sentence: "Great (   ) think alike.",
    jp: "（ことわざ）賢人は同じように考える。"
  },
  // 193-1
  {
    word: "wonder",
    meaning: "〜かなと思う",
    sentence: "I (   ) where he has gone.",
    jp: "彼はどこに行ってしまったのだろうか。"
  },
  // 193-2
  {
    word: "wonder",
    meaning: "驚く",
    sentence: "(   ) at his ability",
    jp: "彼の才能に驚く"
  },
  // 194-1
  {
    word: "seems",
    meaning: "〜のように思われる",
    sentence: "It (   ) that he knows what happened.",
    jp: "彼は起きたことを知っているようだ。"
  },
  // 195-1
  {
    word: "compare",
    meaning: "比較する",
    sentence: "(   ) city life with country life",
    jp: "都会の生活を田舎の生活と比較する"
  },
  // 195-2
  {
    word: "compare",
    meaning: "たとえる",
    sentence: "(   ) life to a voyage",
    jp: "人生を航海にたとえる"
  },
  // 195-3
  {
    word: "compare",
    meaning: "匹敵する",
    sentence: "No one can (   ) with him in academic ability.",
    jp: "学力で彼に匹敵する者はいない。"
  },
  // 196-1
  {
    word: "concentrate",
    meaning: "集中する",
    sentence: "(   ) on my studies",
    jp: "勉強に集中する"
  },
  // 196-2
  {
    word: "concentrate",
    meaning: "集中させる",
    sentence: "(   ) your attention on your job.",
    jp: "仕事に集中しなさい。"
  },
  // 197-1
  {
    word: "focuses",
    meaning: "〜に焦点を当てる",
    sentence: "This book (   ) on French culture.",
    jp: "この本はフランス文化に焦点を当てている。"
  },
  // 197-2
  {
    word: "focus",
    meaning: "焦点",
    sentence: "become the (   ) of media attention",
    jp: "マスコミの注目の的になる"
  },
  // 198-1
  {
    word: "allow",
    meaning: "許可する",
    sentence: "Please (   ) me to introduce myself.",
    jp: "自己紹介をさせてください（自己紹介することを許可してください）。"
  },
  // 198-2
  {
    word: "allows",
    meaning: "可能にする",
    sentence: "This machine (   ) you to measure your blood pressure.",
    jp: "この機械で血圧を測ることができます（測ることを可能にする）。"
  },
  // 199-1
  {
    word: "admitted",
    meaning: "認める",
    sentence: "Tom (   ) that he had been mistaken.",
    jp: "トムは自分が間違っていたことを認めた。"
  },
  // 199-2
  {
    word: "admitted",
    meaning: "許可する",
    sentence: "be (   ) to the university",
    jp: "大学入学を許可される。"
  },
  // 200-1
  {
    word: "ground",
    meaning: "地面",
    sentence: "deep in the (   )",
    jp: "地中深く"
  },
  // 200-2
  {
    word: "grounds",
    meaning: "根拠",
    sentence: "on the (   ) that he is young",
    jp: "彼が若いという理由（根拠）で"
  },
  // 201-1
  {
    word: "pollution",
    meaning: "公害，汚染",
    sentence: "prevent marine (   )",
    jp: "海洋汚染を食い止める"
  },
  // 202-1
  {
    word: "sight",
    meaning: "光景",
    sentence: "Snow is a rare (   ) in this area.",
    jp: "雪はこの地域では珍しい光景です。"
  },
  // 202-2
  {
    word: "sight",
    meaning: "視力",
    sentence: "recover my (   )",
    jp: "視力を回復する"
  },
  // 203-1
  {
    word: "view",
    meaning: "眺め",
    sentence: "enjoy a night (   ) of Kobe",
    jp: "神戸の夜景（の景色）を楽しむ"
  },
  // 203-2
  {
    word: "view",
    meaning: "視点",
    sentence: "look at things from a different point of (   )",
    jp: "物事を（異なる視点から）別の角度から見る"
  },
  // 203-3
  {
    word: "viewed",
    meaning: "みなす",
    sentence: "Skiing is (   ) as the national sport of Norway.",
    jp: "スキーは，ノルウェーの国技だとみなされている。"
  },
  // 204-1
  {
    word: "landscape",
    meaning: "風景",
    sentence: "the beautiful (   ) of Scotland",
    jp: "スコットランドの美しい風景"
  },
  // 204-2
  {
    word: "landscape",
    meaning: "情勢",
    sentence: "the (   ) of Japan",
    jp: "日本の政治情勢"
  },
  // 205-1
  {
    word: "nature",
    meaning: "自然",
    sentence: "preserve (   )",
    jp: "自然を守る"
  },
  // 205-2
  {
    word: "nature",
    meaning: "性質",
    sentence: "the true (   ) of the problem",
    jp: "その問題の本質"
  },
  // 206-1
  {
    word: "seeds",
    meaning: "種",
    sentence: "sunflower (   )",
    jp: "ひまわりの種"
  },
  // 206-2
  {
    word: "seed",
    meaning: "シード選手",
    sentence: "He is top (   ) in this tournament.",
    jp: "彼はこのトーナメントで第1シードの選手だ。"
  },
  // 207-1
  {
    word: "plant",
    meaning: "植物",
    sentence: "water a (   )",
    jp: "植物に水をやる"
  },
  // 207-2
  {
    word: "plant",
    meaning: "工場",
    sentence: "a chemical (   )",
    jp: "化学工場"
  },
  // 207-3
  {
    word: "plant",
    meaning: "植える",
    sentence: "(   ) tulips in the garden",
    jp: "庭にチューリップを植える"
  },
  // 208-1
  {
    word: "bloomed",
    meaning: "咲く",
    sentence: "Flowers (   ) all over the field.",
    jp: "野原には一面花が咲いていた。"
  },
  // 208-2
  {
    word: "bloom",
    meaning: "開花",
    sentence: "The cherry trees are in full (   ).",
    jp: "サクラが満開だ。"
  },
  // 209-1
  {
    word: "harvest",
    meaning: "収穫",
    sentence: "the rice (   ) this year",
    jp: "今年の米の収穫"
  },
  // 209-2
  {
    word: "harvested",
    meaning: "収穫する",
    sentence: "newly-(   ) rice",
    jp: "新米（新しく収穫された米）"
  },
  // 209-3
  {
    word: "harvest",
    meaning: "摘出する",
    sentence: "(   ) organs",
    jp: "臓器を摘出する"
  },
  // 210-1
  {
    word: "insects",
    meaning: "昆虫",
    sentence: "the chirping of (   )",
    jp: "虫（昆虫）の音"
  }
],
211: [
  // 211-1
  {
    word: "earthquake",
    meaning: "地震",
    sentence: "There was an (   ) last week.",
    jp: "先週，地震が起きた。"
  },
  // 212-1
  {
    word: "temperature",
    meaning: "気温",
    sentence: "The (   ) reached 40 degrees.",
    jp: "気温が40度に達した。"
  },
  // 212-2
  {
    word: "temperature",
    meaning: "体温",
    sentence: "take his (   )",
    jp: "彼の体温を測る"
  },
  // 213-1
  {
    word: "degrees",
    meaning: "度",
    sentence: "freeze at zero (   )",
    jp: "0度で凍る"
  },
  // 213-2
  {
    word: "degree",
    meaning: "程度",
    sentence: "speak French to some (   )",
    jp: "ある程度フランス語を話す"
  },
  // 213-3
  {
    word: "degree",
    meaning: "学位",
    sentence: "get a (   ) in engineering",
    jp: "工学の学位をとる"
  },
  // 214-1
  {
    word: "flood",
    meaning: "洪水",
    sentence: "The (   ) washed the bridge away.",
    jp: "洪水で橋が流された。"
  },
  // 214-2
  {
    word: "flooded",
    meaning: "水浸しにする",
    sentence: "The streets are (   ).",
    jp: "通りは水浸しだ（水浸しにされた）。"
  },
  // 215-1
  {
    word: "froze",
    meaning: "凍る",
    sentence: "The pond (   ) over.",
    jp: "池が一面凍った。"
  },
  // 215-2
  {
    word: "freeze",
    meaning: "凍らせる",
    sentence: "(   ) bananas in the freezer",
    jp: "冷凍庫でバナナを凍らせる"
  },
  // 216-1
  {
    word: "reflect",
    meaning: "反射する",
    sentence: "(   ) the sunlight",
    jp: "日光を反射する"
  },
  // 216-2
  {
    word: "reflect",
    meaning: "反映する",
    sentence: "The clothes people wear (   ) the times.",
    jp: "人々の着ている服は時代を反映している。"
  },
  // 216-3
  {
    word: "reflect",
    meaning: "熟考する",
    sentence: "(   ) on my successes and failures",
    jp: "私の成功と失敗について振り返る（熟考する）"
  },
  // 217-1
  {
    word: "polite",
    meaning: "礼儀正しい",
    sentence: "a (   ) young man",
    jp: "礼儀正しい若い男"
  },
  // 218-1
  {
    word: "rude",
    meaning: "無礼な",
    sentence: "It is (   ) to ask women their age.",
    jp: "女性に年齢を尋ねるのは失礼（無礼）です。"
  },
  // 219-1
  {
    word: "lonely",
    meaning: "孤独な",
    sentence: "(   ) old people",
    jp: "孤独な老人たち"
  },
  // 220-1
  {
    word: "lazy",
    meaning: "怠惰な",
    sentence: "He is (   ) at work.",
    jp: "彼は仕事中いい加減（怠惰）である。"
  },
  // 220-2
  {
    word: "lazy",
    meaning: "寛いだ",
    sentence: "spend (   ) days on the beach",
    jp: "浜辺でのんびりした（寛いだ）日々を過ごす"
  },
  // 221-1
  {
    word: "strict",
    meaning: "厳しい",
    sentence: "a (   ) rule",
    jp: "厳しい規則"
  },
  // 222-1
  {
    word: "Ugly",
    meaning: "醜い",
    sentence: "The (   ) Duckling",
    jp: "『醜いアヒルの子』"
  },
  // 223-1
  {
    word: "intelligent",
    meaning: "知的な",
    sentence: "a highly (   ) woman",
    jp: "きわめて聡明な（知的な）女性"
  },
  // 224-1
  {
    word: "silly",
    meaning: "ばかな",
    sentence: "Don't be (   )!",
    jp: "ばかなことを言うな！"
  },
  // 225-1
  {
    word: "nervous",
    meaning: "あがって",
    sentence: "get (   ) during the exam",
    jp: "試験中にあがる"
  },
  // 225-2
  {
    word: "nervous",
    meaning: "神経質な",
    sentence: "a (   ) child",
    jp: "臆病な（神経質な）子ども"
  },
  // 225-3
  {
    word: "nervous",
    meaning: "身体の",
    sentence: "the (   ) system",
    jp: "神経系"
  },
  // 226-1
  {
    word: "awake",
    meaning: "目を覚まして",
    sentence: "The noise kept me (   ) all night.",
    jp: "騒音で一晩中（目を覚ました状態にさせられた）眠れなかった。"
  },
  // 227-1
  {
    word: "alone",
    meaning: "1人で",
    sentence: "She lives (   ).",
    jp: "彼女は一人暮らしだ。"
  },
  // 227-2
  {
    word: "alone",
    meaning: "〜だけ",
    sentence: "Bob (   ) went there.",
    jp: "ボブだけがそこへ行った。"
  },
  // 228-1
  {
    word: "attitude",
    meaning: "態度",
    sentence: "have a positive (   ) toward life",
    jp: "人生に対し前向きな姿勢（態度）でいる"
  },
  // 229-1
  {
    word: "character",
    meaning: "性格",
    sentence: "Printed books have (   ).",
    jp: "活字本には味（性格）がある。"
  },
  // 229-2
  {
    word: "character",
    meaning: "登場人物",
    sentence: "the main (   ) of this novel",
    jp: "この小説の主人公（主な登場人物）"
  },
  // 229-3
  {
    word: "characters",
    meaning: "文字",
    sentence: "Chinese (   )",
    jp: "漢字（中国の文字）"
  },
  // 230-1
  {
    word: "characteristics",
    meaning: "特徴",
    sentence: "one of the (   ) of large cities",
    jp: "大都市の特徴の1つ"
  },
  // 230-2
  {
    word: "characteristic",
    meaning: "特有の",
    sentence: "his (   ) writing style",
    jp: "彼特有の文体"
  },
  // 231-1
  {
    word: "feature",
    meaning: "特徴",
    sentence: "Low rainfall is a (   ) of deserts.",
    jp: "少ない降水量は砂漠の特徴だ。"
  },
  // 231-2
  {
    word: "feature",
    meaning: "特集記事",
    sentence: "a (   ) on Samoa",
    jp: "サモアに関する特集記事"
  },
  // 231-3
  {
    word: "features",
    meaning: "特集する",
    sentence: "The exhibition (   ) paintings by Van Gogh.",
    jp: "その展覧会はヴァン・ゴッホの絵画を目玉としている（特集している）。"
  },
  // 232-1
  {
    word: "details",
    meaning: "詳細",
    sentence: "check the (   ) of the report",
    jp: "その報告書の詳細を確認する"
  },
  // 232-2
  {
    word: "details",
    meaning: "細部",
    sentence: "see the (   ) of the building",
    jp: "その建物の細部を見る"
  },
  // 233-1
  {
    word: "advantages",
    meaning: "利点",
    sentence: "There are (   ) and disadvantages to self-driving cars.",
    jp: "自動運転の車にはメリット（利点）とデメリットがある。"
  },
  // 234-1
  {
    word: "faults",
    meaning: "欠点",
    sentence: "complain about my husband's (   )",
    jp: "夫の欠点について文句を言う"
  },
  // 234-2
  {
    word: "fault",
    meaning: "責任",
    sentence: "That is my (   ).",
    jp: "それは私の責任です。"
  },
  // 235-1
  {
    word: "quality",
    meaning: "質",
    sentence: "improve the (   ) of life",
    jp: "生活の質を向上させる"
  },
  // 235-2
  {
    word: "qualities",
    meaning: "資質",
    sentence: "the personal (   ) necessary to be a successful salesperson",
    jp: "営業マンとして成功するのに必要な個人の資質"
  },
  // 236-1
  {
    word: "correct",
    meaning: "正確な",
    sentence: "Let's see if our answers are (   ).",
    jp: "答えが正しい（正確な）かどうか見てみよう。"
  },
  // 236-2
  {
    word: "correct",
    meaning: "訂正する",
    sentence: "(   ) his pronunciation",
    jp: "彼の発音を矯正する（訂正する）"
  },
  // 237-1
  {
    word: "ideal",
    meaning: "理想的な",
    sentence: "an (   ) place for camping",
    jp: "キャンプにはうってつけの（理想的な）場所"
  },
  // 237-2
  {
    word: "ideal",
    meaning: "理想",
    sentence: "the (   ) of social equality",
    jp: "社会的平等の理想像"
  },
  // 238-1
  {
    word: "fair",
    meaning: "公正な",
    sentence: "It's not (   )!",
    jp: "それは不公平だ（公正ではない）。"
  },
  // 238-2
  {
    word: "fair",
    meaning: "品評会",
    sentence: "an international trade (   )",
    jp: "国際（産業）見本市"
  },
  // 239-1
  {
    word: "appropriate",
    meaning: "適切な",
    sentence: "clothes (   ) for a job interview",
    jp: "仕事の面接に適切な服"
  },
  // 240-1
  {
    word: "famous",
    meaning: "有名な",
    sentence: "Kyoto is (   ) for its temples.",
    jp: "京都は寺で有名だ。"
  },
  // 240-2
  {
    word: "famous",
    meaning: "〜として有名な",
    sentence: "Arima is (   ) as a hot-spring resort.",
    jp: "有馬は温泉地として有名だ。"
  }
],
241: [
  // 241-1
  {
    word: "elementary",
    meaning: "初歩的な",
    sentence: "when I was in (   ) school",
    jp: "小学生（初等教育の学校）のとき"
  },
  // 242-1
  {
    word: "major",
    meaning: "主要な",
    sentence: "a (   ) cause of global warming",
    jp: "地球温暖化の主要な原因"
  },
  // 242-2
  {
    word: "major",
    meaning: "専攻する",
    sentence: "I (   ) in botany",
    jp: "植物学を専攻する"
  },
  // 242-3
  {
    word: "major",
    meaning: "専攻",
    sentence: "What is your (   )?",
    jp: "専攻は何ですか。"
  },
  // 243-1
  {
    word: "matter",
    meaning: "重要である",
    sentence: "It does not (   ) whether he succeeds or not.",
    jp: "彼が成功するかどうかは重要ではない。"
  },
  // 243-2
  {
    word: "matter",
    meaning: "物",
    sentence: "waste (   )",
    jp: "廃棄物"
  },
  // 243-3
  {
    word: "matters",
    meaning: "事情",
    sentence: "To make (   ) worse, it began to snow.",
    jp: "さらに悪いこと（事情）には，雪が降り始めた。"
  },
  // 244-1
  {
    word: "bright",
    meaning: "明るい",
    sentence: "The moon is (   ) tonight.",
    jp: "今夜は月が明るい。"
  },
  // 244-2
  {
    word: "bright",
    meaning: "賢い",
    sentence: "a (   ) child",
    jp: "聡明な（賢い）子ども"
  },
  // 245-1
  {
    word: "brilliant",
    meaning: "まばゆい",
    sentence: "swim in the (   ) sunshine",
    jp: "まばゆい太陽光の下で泳ぐ"
  },
  // 245-2
  {
    word: "brilliant",
    meaning: "すばらしい",
    sentence: "a (   ) idea",
    jp: "すばらしい考え"
  },
  // 246-1
  {
    word: "lively",
    meaning: "生き生きとした",
    sentence: "have a (   ) conversation",
    jp: "生き生きとした会話をする"
  },
  // 247-1
  {
    word: "comfortable",
    meaning: "快適な",
    sentence: "a (   ) bed",
    jp: "快適なベッド"
  },
  // 247-2
  {
    word: "comfortable",
    meaning: "心地よい",
    sentence: "I feel (   ) in that café.",
    jp: "あのカフェは居心地がよい（心地よく感じる）。"
  },
  // 248-1
  {
    word: "pleasant",
    meaning: "楽しい",
    sentence: "I find it (   ) to talk with her.",
    jp: "彼女との話は楽しいと感じる。"
  },
  // 249-1
  {
    word: "convenient",
    meaning: "便利な",
    sentence: "My house is (   ) to the station.",
    jp: "私の家は駅から近くて便利だ。"
  },
  // 249-2
  {
    word: "convenient",
    meaning: "都合がよい",
    sentence: "Call me when it is (   ) for you.",
    jp: "都合のよいときに電話してください。"
  },
  // 250-1
  {
    word: "false",
    meaning: "誤った",
    sentence: "(   ) information",
    jp: "誤った情報"
  },
  // 250-2
  {
    word: "false",
    meaning: "偽の",
    sentence: "give a (   ) name",
    jp: "偽名（偽の名前）を使う"
  },
  // 251-1
  {
    word: "terrible",
    meaning: "ひどい",
    sentence: "I have a (   ) sense of direction.",
    jp: "私はひどい方向音痴だ。"
  },
  // 251-2
  {
    word: "terrible",
    meaning: "苦手で",
    sentence: "I am (   ) at remembering people's names.",
    jp: "人の名前を覚えるのが苦手だ。"
  },
  // 252-1
  {
    word: "awful",
    meaning: "ひどい",
    sentence: "an (   ) smell of cat urine",
    jp: "ネコのひどい（おしっこの）臭い"
  },
  // 253-1
  {
    word: "thin",
    meaning: "薄い",
    sentence: "a (   ) jacket",
    jp: "薄い上着"
  },
  // 253-2
  {
    word: "thin",
    meaning: "やせた",
    sentence: "Although she eats a lot, she is very (   ).",
    jp: "彼女はたくさん食べるが，とてもやせている。"
  },
  // 253-3
  {
    word: "thin",
    meaning: "薄い",
    sentence: "His hair is getting (   ) on top.",
    jp: "彼の頭のてっぺんが薄くなってきた。"
  },
  // 254-1
  {
    word: "tight",
    meaning: "きつい",
    sentence: "(   ) jeans",
    jp: "きついジーンズ"
  },
  // 254-2
  {
    word: "tight",
    meaning: "厳しい",
    sentence: "(   ) control on immigration",
    jp: "移民に関する厳しい管理"
  },
  // 255-1
  {
    word: "loose",
    meaning: "ゆるい",
    sentence: "wear (   ) clothes",
    jp: "ダボっとした（ゆるい）服を着ている"
  },
  // 255-2
  {
    word: "loose",
    meaning: "自由にして",
    sentence: "let my dog (   ) on the beach",
    jp: "浜辺でイヌを自由にしてやる"
  },
  // 256-1
  {
    word: "raw",
    meaning: "生の",
    sentence: "(   ) materials",
    jp: "原料（生の材料）"
  },
  // 256-2
  {
    word: "raw",
    meaning: "生魚",
    sentence: "(   ) fish",
    jp: "生魚"
  },
  // 257-1
  {
    word: "empty",
    meaning: "空の",
    sentence: "an (   ) bottle",
    jp: "空瓶"
  },
  // 257-2
  {
    word: "empty",
    meaning: "空にする",
    sentence: "(   ) his glass in one gulp",
    jp: "一気に（一口で）グラスを空にする"
  },
  // 258-1
  {
    word: "smooth",
    meaning: "滑らかな",
    sentence: "This soap makes your skin very (   ).",
    jp: "この石けんでお肌はとてもツルツル（滑らか）になります。"
  },
  // 258-2
  {
    word: "smooth",
    meaning: "順調な",
    sentence: "the (   ) running of the company",
    jp: "会社の順調な運営"
  },
  // 258-3
  {
    word: "smooth",
    meaning: "なでつける",
    sentence: "(   ) back my hair",
    jp: "髪の毛をなでつける"
  },
  // 259-1
  {
    word: "direct",
    meaning: "直接的な",
    sentence: "a (   ) flight to Paris",
    jp: "パリへの直行便（直接的なフライト）"
  },
  // 259-2
  {
    word: "direct",
    meaning: "演出する",
    sentence: "(   ) the play",
    jp: "その劇を演出する"
  },
  // 259-3
  {
    word: "direct",
    meaning: "向ける",
    sentence: "(   ) their attention to this problem",
    jp: "この問題に彼らの注意を向ける"
  },
  // 259-4
  {
    word: "direct",
    meaning: "教える",
    sentence: "(   ) her to the airport",
    jp: "彼女に空港への道を教える"
  },
  // 260-1
  {
    word: "familiar",
    meaning: "よく知っている",
    sentence: "I am very (   ) with this town.",
    jp: "私はこの街をよく知っている。"
  },
  // 260-2
  {
    word: "familiar",
    meaning: "よく知られている",
    sentence: "Shakespeare is (   ) to people all over the world.",
    jp: "シェイクスピアは世界中の人々に（よく知られている）親しまれている。"
  },
  // 261-1
  {
    word: "similar",
    meaning: "似た",
    sentence: "She is (   ) to her mother in appearance.",
    jp: "彼女は見た目が母親に似ている。"
  },
  // 262-1
  {
    word: "differ",
    meaning: "異なる",
    sentence: "His tastes (   ) from mine.",
    jp: "彼の趣味（好み）は私のと異なる。"
  },
  // 263-1
  {
    word: "varies",
    meaning: "さまざまだ",
    sentence: "The way people greet each other (   ) from country to country.",
    jp: "挨拶の仕方は国によってさまざまだ。"
  },
  // 264-1
  {
    word: "specific",
    meaning: "特定の",
    sentence: "a (   ) age group",
    jp: "ある特定の年齢のグループ"
  },
  // 264-2
  {
    word: "specific",
    meaning: "明確な",
    sentence: "(   ) instructions",
    jp: "明確な指示"
  },
  // 265-1
  {
    word: "common",
    meaning: "普及した",
    sentence: "E-books are becoming (   ).",
    jp: "電子書籍は普及しつつある。"
  },
  // 265-2
  {
    word: "common",
    meaning: "共通の",
    sentence: "a (   ) ancestor",
    jp: "共通の祖先"
  },
  // 266-1
  {
    word: "unusual",
    meaning: "珍しい",
    sentence: "These days it is not (   ) for men to wear makeup.",
    jp: "最近は，男性が化粧するのは（珍しいことではない）よくあることだ。"
  },
  // 267-1
  {
    word: "add",
    meaning: "加える",
    sentence: "(   ) some milk to the coffee",
    jp: "コーヒーにミルクを加える"
  },
  // 267-2
  {
    word: "added",
    meaning: "増やす",
    sentence: "His chilling words (   ) to her fear.",
    jp: "彼のぞっとするような言葉で彼女の恐怖は増した。"
  },
  // 268-1
  {
    word: "increase",
    meaning: "増える",
    sentence: "(   ) by 30 percent",
    jp: "30％増える"
  },
  // 268-2
  {
    word: "increase",
    meaning: "増やす",
    sentence: "(   ) my vocabulary",
    jp: "語彙を増やす"
  },
  // 268-3
  {
    word: "increase",
    meaning: "増加",
    sentence: "an (   ) in land prices",
    jp: "地価の上昇（増加）"
  },
  // 269-1
  {
    word: "reduce",
    meaning: "減らす",
    sentence: "(   ) the amount of garbage",
    jp: "ゴミの量を減らす"
  },
  // 269-2
  {
    word: "reduced",
    meaning: "陥る",
    sentence: "be (   ) to poverty",
    jp: "貧困に陥る。"
  },
  // 270-1
  {
    word: "divide",
    meaning: "分割する",
    sentence: "(   ) the stew into small portions",
    jp: "シチューを小分けにする（分割する）"
  },
  // 270-2
  {
    word: "divided",
    meaning: "割る",
    sentence: "Eight (   ) by four is two.",
    jp: "8 ÷ 4 = 2"
  }
],
271: [
  // 271-1
  {
    word: "count",
    meaning: "数える",
    sentence: "(   ) the money",
    jp: "お金を数える"
  },
  // 271-2
  {
    word: "count",
    meaning: "重要である",
    sentence: "First impressions really (   ).",
    jp: "第一印象は本当に重要だ。"
  },
  // 271-3
  {
    word: "counting",
    meaning: "当てにする",
    sentence: "I'm (   ) on you.",
    jp: "君を当てにしているよ。"
  },
  // 272-1
  {
    word: "weigh",
    meaning: "重さがある",
    sentence: "(   ) 40 kilograms",
    jp: "40キロの重さだ"
  },
  // 272-2
  {
    word: "weigh",
    meaning: "体重を計る",
    sentence: "(   ) myself on the scale",
    jp: "体重計で体重を計る"
  },
  // 272-3
  {
    word: "weigh",
    meaning: "検討する",
    sentence: "(   ) up the benefits of the plan against the costs",
    jp: "費用に照らしてその計画の利点を検討する"
  },
  // 273-1
  {
    word: "quarter",
    meaning: "4分の1",
    sentence: "a (   ) to ten",
    jp: "10時15分前（10時への4分の1）"
  },
  // 273-2
  {
    word: "quarter",
    meaning: "地域",
    sentence: "a student (   )",
    jp: "学生街（地域）"
  },
  // 274-1
  {
    word: "lot",
    meaning: "多くの〜",
    sentence: "a (   ) of dolphins",
    jp: "多くのイルカ"
  },
  // 274-2
  {
    word: "lot",
    meaning: "とても",
    sentence: "He has changed a (   ).",
    jp: "彼はとても変わった。"
  },
  // 274-3
  {
    word: "lot",
    meaning: "状況",
    sentence: "work hard to improve my (   )",
    jp: "私の置かれた状況を改善する努力をする"
  },
  // 274-4
  {
    word: "lot",
    meaning: "駐車場",
    sentence: "a parking (   )",
    jp: "駐車場"
  },
  // 275-1
  {
    word: "pile",
    meaning: "山",
    sentence: "a (   ) of ironed shirts",
    jp: "アイロンをかけたシャツの山"
  },
  // 275-2
  {
    word: "piles",
    meaning: "多量の仕事",
    sentence: "(   ) of work",
    jp: "山のような（多量の）仕事"
  },
  // 275-3
  {
    word: "pile",
    meaning: "盛る",
    sentence: "(   ) spaghetti onto her plate",
    jp: "彼女の皿にスパゲッティを盛る"
  },
  // 276-1
  {
    word: "rate",
    meaning: "割合",
    sentence: "the declining birth (   )",
    jp: "少子化（出生の割合の低下）"
  },
  // 276-2
  {
    word: "rates",
    meaning: "料金",
    sentence: "Our hotel offers special (   ) for children.",
    jp: "私たちのホテルではお子様には特別料金を提供しています。"
  },
  // 276-3
  {
    word: "rate",
    meaning: "評価する",
    sentence: "(   ) him as a good poet",
    jp: "彼を良い詩人だと評価する"
  },
  // 277-1
  {
    word: "figures",
    meaning: "数字",
    sentence: "memorize a list of (   )",
    jp: "数字の一覧を暗記する"
  },
  // 277-2
  {
    word: "figure",
    meaning: "人物",
    sentence: "a political (   )",
    jp: "政治家（政治的人物）"
  },
  // 277-3
  {
    word: "figure",
    meaning: "スタイル",
    sentence: "have a nice (   )",
    jp: "スタイルがよい"
  },
  // 277-4
  {
    word: "Fig.",
    meaning: "図",
    sentence: "See (   ) 1.",
    jp: "図1を見なさい。"
  },
  // 277-5
  {
    word: "figures",
    meaning: "有名だ",
    sentence: "Her name (   ) in history.",
    jp: "彼女の名前は歴史上有名だ。"
  },
  // 278-1
  {
    word: "lack",
    meaning: "不足",
    sentence: "I am tired due to (   ) of sleep.",
    jp: "私は睡眠不足（の不足）のため疲れている。"
  },
  // 278-2
  {
    word: "lacks",
    meaning: "欠いている",
    sentence: "He (   ) confidence.",
    jp: "彼は自信がない（を欠いている）。"
  },
  // 279-1
  {
    word: "extra",
    meaning: "追加の",
    sentence: "an (   ) charge",
    jp: "追加料金（追加の料金）"
  },
  // 279-2
  {
    word: "extra",
    meaning: "余分",
    sentence: "pay a little (   )",
    jp: "少し余分に払う"
  },
  // 280-1
  {
    word: "ready",
    meaning: "用意ができている",
    sentence: "I'm not (   ) yet.",
    jp: "まだ準備（用意）ができていません。"
  },
  // 280-2
  {
    word: "ready",
    meaning: "進んで〜する",
    sentence: "be (   ) to help us",
    jp: "進んで私たちを助けてくれる"
  },
  // 281-1
  {
    word: "prepare",
    meaning: "準備をする",
    sentence: "(   ) a meal",
    jp: "食事の準備をする"
  },
  // 281-2
  {
    word: "prepare",
    meaning: "備える",
    sentence: "(   ) for a powerful typhoon",
    jp: "大型の台風に備える"
  },
  // 281-3
  {
    word: "prepared",
    meaning: "準備ができて",
    sentence: "I am (   ) to accept your advice.",
    jp: "あなたの助言を（進んで）受け入れる準備ができています。"
  },
  // 282-1
  {
    word: "adjust",
    meaning: "慣れる",
    sentence: "(   ) to a new school life",
    jp: "新しい学校生活に慣れる"
  },
  // 282-2
  {
    word: "adjust",
    meaning: "調整する",
    sentence: "(   ) the temperature on the air conditioner",
    jp: "エアコンの温度を調整する"
  },
  // 283-1
  {
    word: "applies",
    meaning: "当てはまる",
    sentence: "That rule (   ) to students.",
    jp: "その規則は学生に適用される（当てはまる）。"
  },
  // 283-2
  {
    word: "apply",
    meaning: "申し込む",
    sentence: "(   ) for a passport",
    jp: "パスポートを申請する（申し込む）"
  },
  // 283-3
  {
    word: "apply",
    meaning: "応用する",
    sentence: "(   ) the technology to a wide range of fields",
    jp: "さまざまな分野にその技術を応用する"
  },
  // 283-4
  {
    word: "apply",
    meaning: "塗る",
    sentence: "(   ) enough sunscreen to my face",
    jp: "顔に十分な日焼け止めクリームを塗る"
  },
  // 284-1
  {
    word: "suits",
    meaning: "好都合だ",
    sentence: "What time (   ) you best?",
    jp: "何時があなたにとって（好都合）一番都合がいいですか。"
  },
  // 284-2
  {
    word: "suits",
    meaning: "似合う",
    sentence: "That tie (   ) you.",
    jp: "そのネクタイは君に似合う。"
  },
  // 284-3
  {
    word: "suit",
    meaning: "告訴",
    sentence: "file a (   ) against her",
    jp: "彼女を告訴する"
  },
  // 284-4
  {
    word: "suit",
    meaning: "スーツ",
    sentence: "a three-piece (   )",
    jp: "スリーピースのスーツ"
  },
  // 285-1
  {
    word: "cases",
    meaning: "場合",
    sentence: "In some (   ), honesty does not pay.",
    jp: "正直が報われない場合もある。"
  },
  // 285-2
  {
    word: "case",
    meaning: "事実",
    sentence: "This is the (   ) with humans.",
    jp: "これは人間にも当てはまる（事実である）。"
  },
  // 285-3
  {
    word: "case",
    meaning: "事件",
    sentence: "a murder (   )",
    jp: "殺人事件"
  },
  // 285-4
  {
    word: "cases",
    meaning: "症例",
    sentence: "new (   ) of ebola",
    jp: "エボラ出血熱の新たな症例"
  },
  // 285-5
  {
    word: "case",
    meaning: "主張",
    sentence: "make a (   ) before the judge",
    jp: "裁判官の前で自分の分（主張）を述べる"
  },
  // 286-1
  {
    word: "scene",
    meaning: "場面",
    sentence: "a love (   )",
    jp: "ラブシーン（場面）"
  },
  // 286-2
  {
    word: "scene",
    meaning: "現場",
    sentence: "Police cars rushed to the (   ).",
    jp: "パトカーが現場に急行した。"
  },
  // 286-3
  {
    word: "scene",
    meaning: "業界",
    sentence: "the American music (   )",
    jp: "アメリカの音楽業界"
  },
  // 287-1
  {
    word: "chance",
    meaning: "機会",
    sentence: "a (   ) to play the lead",
    jp: "主役を演じる機会"
  },
  // 287-2
  {
    word: "chance",
    meaning: "可能性",
    sentence: "There is little (   ) of his winning.",
    jp: "彼が勝つ可能性はほとんどない。"
  },
  // 288-1
  {
    word: "opportunity",
    meaning: "機会",
    sentence: "have a golden (   ) to speak English",
    jp: "英語を話す絶好の機会を持つ"
  },
  // 289-1
  {
    word: "experience",
    meaning: "経験",
    sentence: "learn from (   )",
    jp: "経験から学ぶ"
  },
  // 289-2
  {
    word: "experience",
    meaning: "経験",
    sentence: "the bitter (   ) of losing",
    jp: "初戦敗退という苦い経験"
  },
  // 289-3
  {
    word: "experience",
    meaning: "経験する",
    sentence: "(   ) many hardships",
    jp: "多くの困難を経験する"
  },
  // 290-1
  {
    word: "time",
    meaning: "時間",
    sentence: "If you have (   ), help me.",
    jp: "時間があれば手伝ってよ。"
  },
  // 290-2
  {
    word: "times",
    meaning: "回",
    sentence: "change jobs many (   )",
    jp: "職を何回も変える"
  },
  // 290-3
  {
    word: "times",
    meaning: "倍",
    sentence: "This one is three (   ) as large as that one.",
    jp: "これはあれの3倍の大きさだ。"
  },
  // 290-4
  {
    word: "times",
    meaning: "時代",
    sentence: "keep up with the (   )",
    jp: "時代についていく"
  },
  // 290-5
  {
    word: "time",
    meaning: "次",
    sentence: "the next (   ) you come here",
    jp: "あなたが次に来るとき"
  }
],
291: [
  // 291-1
  {
    word: "time",
    meaning: "期間",
    sentence: "wait for a long (   )",
    jp: "長時間待つ"
  },
  // 291-2
  {
    word: "time",
    meaning: "時々",
    sentence: "from (   ) to time",
    jp: "時々"
  },
  // 291-3
  {
    word: "time",
    meaning: "ずっと",
    sentence: "all the (   )",
    jp: "ずっと"
  },
  // 291-4
  {
    word: "time",
    meaning: "やがて",
    sentence: "in (   )",
    jp: "やがて"
  },
  // 291-5
  {
    word: "time",
    meaning: "時間通りに",
    sentence: "on (   )",
    jp: "時間通りに"
  },
  // 291-6
  {
    word: "time",
    meaning: "時間を作る",
    sentence: "make (   ) to do",
    jp: "時間を作る"
  },
  // 291-7
  {
    word: "time",
    meaning: "ゆっくりやる",
    sentence: "take one's (   )",
    jp: "ゆっくりやる"
  },
  // 291-8
  {
    word: "time",
    meaning: "1回に1個",
    sentence: "one at a (   )",
    jp: "1回に1個"
  },
  // 291-9
  {
    word: "times",
    meaning: "2倍の",
    sentence: "twice as (   )",
    jp: "2倍の"
  },
  // 292-1
  {
    word: "minutes'",
    meaning: "分",
    sentence: "The station is ten (   ) walk from here.",
    jp: "駅はここから歩いて10分です。"
  },
  // 292-2
  {
    word: "minute",
    meaning: "ちょっと",
    sentence: "Wait a (   ).",
    jp: "ちょっと待ってください。"
  },
  // 292-3
  {
    word: "minutes",
    meaning: "議事録",
    sentence: "take the (   ) of the meeting",
    jp: "会議の議事録を取る"
  },
  // 292-4
  {
    word: "minute",
    meaning: "小さな",
    sentence: "a (   ) fraction",
    jp: "ごく小さな破片"
  },
  // 292-5
  {
    word: "minute",
    meaning: "瞬間に",
    sentence: "the (   ) he came in",
    jp: "彼が入ってきた瞬間に"
  },
  // 293-1
  {
    word: "age",
    meaning: "中年",
    sentence: "a man past middle (   )",
    jp: "中年を過ぎた男性"
  },
  // 293-2
  {
    word: "Ages",
    meaning: "中世",
    sentence: "in the Middle (   )",
    jp: "中世において"
  },
  // 293-3
  {
    word: "ages",
    meaning: "久しぶり",
    sentence: "It's been (   ) since I saw you last.",
    jp: "久しぶり。"
  },
  // 293-4
  {
    word: "aging",
    meaning: "高齢化",
    sentence: "an (   ) society",
    jp: "高齢化社会"
  },
  // 294-1
  {
    word: "generation",
    meaning: "世代",
    sentence: "a (   ) gap",
    jp: "世代間格差"
  },
  // 294-2
  {
    word: "generation",
    meaning: "生み出すこと",
    sentence: "the (   ) of wealth",
    jp: "富を生み出すこと"
  },
  // 294-3
  {
    word: "generation",
    meaning: "発電",
    sentence: "hydropower (   )",
    jp: "水力発電"
  },
  // 295-1
  {
    word: "anniversary",
    meaning: "100周年",
    sentence: "celebrate our school's 100th (   )",
    jp: "我が校の創立100周年を祝う"
  },
  // 296-1
  {
    word: "recently",
    meaning: "最近",
    sentence: "I moved to this city just (   ).",
    jp: "最近この市に引っ越してきました。"
  },
  // 297-1
  {
    word: "used",
    meaning: "以前は〜だった",
    sentence: "I (   ) to drive to work, but nowadays I take the train.",
    jp: "以前は車で仕事に行っていたが，今は電車を利用する。"
  },
  // 297-2
  {
    word: "used",
    meaning: "慣れている",
    sentence: "be (   ) to getting up early",
    jp: "早起きに慣れている"
  },
  // 297-3
  {
    word: "used",
    meaning: "中古",
    sentence: "an (   ) car",
    jp: "中古車"
  },
  // 298-1
  {
    word: "early",
    meaning: "早く",
    sentence: "(   ) in the morning",
    jp: "朝早くに"
  },
  // 298-2
  {
    word: "earlier",
    meaning: "早く",
    sentence: "The bus came three minutes (   ) than usual.",
    jp: "そのバスはいつもより3分早く来た。"
  },
  // 298-3
  {
    word: "early",
    meaning: "初期",
    sentence: "the (   ) works of Murakami Haruki",
    jp: "村上春樹の初期の作品"
  },
  // 299-1
  {
    word: "first",
    meaning: "1等賞",
    sentence: "win (   ) prize",
    jp: "1等賞をとる"
  },
  // 299-2
  {
    word: "first",
    meaning: "初めて",
    sentence: "I went up Tokyo Tower for the (   ) time in my life.",
    jp: "生まれて初めて東京タワーにのぼった。"
  },
  // 299-3
  {
    word: "first",
    meaning: "初めて",
    sentence: "When I (   ) met her, she was a student.",
    jp: "彼女と初めて会ったとき，彼女は学生だった。"
  },
  // 299-4
  {
    word: "First",
    meaning: "まず",
    sentence: "(   ), e-books are less expensive.",
    jp: "まず，電子書籍のほうが安い。"
  },
  // 299-5
  {
    word: "first",
    meaning: "最初は",
    sentence: "At (   ), I thought it was a joke, but later I realized it was true.",
    jp: "最初は冗談かと思ったが，後で事実だとわかった。"
  },
  // 300-1
  {
    word: "latest",
    meaning: "最新の",
    sentence: "follow the (   ) fashions",
    jp: "最新のファッションを追う"
  }
],
301: [
  // 301-1
  {
    word: "modern",
    meaning: "現代",
    sentence: "in (   ) society",
    jp: "現代社会では"
  },
  // 301-2
  {
    word: "modern",
    meaning: "近代的な",
    sentence: "a bright, (   ) office",
    jp: "明るい近代的なオフィス"
  },
  // 302-1
  {
    word: "ancient",
    meaning: "古代の",
    sentence: "in (   ) times",
    jp: "大昔に（古代に）"
  },
  // 302-2
  {
    word: "ancient",
    meaning: "古びた",
    sentence: "an (   ), worn-out coat",
    jp: "古びてすり切れたコート"
  },
  // 303-1
  {
    word: "spend",
    meaning: "時間を費やす",
    sentence: "(   ) most of my time reading in my room with my family",
    jp: "家族と一緒に部屋で読書をして時間の大部分を費やす。"
  },
  // 303-2
  {
    word: "spend",
    meaning: "お金を使う",
    sentence: "(   ) too much money on clothes",
    jp: "洋服にお金をかけすぎる"
  },
  // 304-1
  {
    word: "delayed",
    meaning: "遅らせる",
    sentence: "Our train was (   ) two hours.",
    jp: "私たちが乗った列車が2時間遅れた。"
  },
  // 304-2
  {
    word: "delay",
    meaning: "遅れることなく",
    sentence: "without (   )",
    jp: "遅れることなく"
  },
  // 305-1
  {
    word: "borrow",
    meaning: "〜を借りる",
    sentence: "(   ) two books from the library",
    jp: "図書館から2冊の本を借りる"
  },
  // 306-1
  {
    word: "lend",
    meaning: "貸す",
    sentence: "Could you (   ) me 10,000 yen?",
    jp: "1万円貸してもらえませんか。"
  },
  // 306-2
  {
    word: "lend",
    meaning: "貸してくれる",
    sentence: "How much will the bank (   ) me?",
    jp: "銀行はいくら貸してくれるだろうか。"
  },
  // 307-1
  {
    word: "rent",
    meaning: "借りる",
    sentence: "(   ) a car for six hours",
    jp: "6時間，車を借りる"
  },
  // 307-2
  {
    word: "rents",
    meaning: "賃貸しする",
    sentence: "She (   ) out three rooms to students.",
    jp: "彼女は学生に3部屋を賃貸ししている。"
  },
  // 307-3
  {
    word: "rent",
    meaning: "家賃",
    sentence: "pay a high (   )",
    jp: "高い（高い）家賃を払う"
  },
  // 308-1
  {
    word: "provide",
    meaning: "〜を供給する，与える",
    sentence: "(   ) students with an opportunity to study in the U.K.",
    jp: "イギリス留学（を学ぶ）の機会を学生に与える"
  },
  // 309-1
  {
    word: "board",
    meaning: "板",
    sentence: "drill a hole through a (   )",
    jp: "板にドリルで穴を開ける"
  },
  // 309-2
  {
    word: "board",
    meaning: "委員会",
    sentence: "a (   ) of education",
    jp: "教育委員会"
  },
  // 309-3
  {
    word: "board",
    meaning: "乗る",
    sentence: "(   ) a bus",
    jp: "バスに乗る"
  },
  // 310-1
  {
    word: "garbage",
    meaning: "ごみ",
    sentence: "plastic (   ) bags",
    jp: "ビニールのごみ袋"
  },
  // 311-1
  {
    word: "items",
    meaning: "品物",
    sentence: "buy (   ) on sale",
    jp: "バーゲン品（品物）を買う"
  },
  // 311-2
  {
    word: "item",
    meaning: "ニュース",
    sentence: "a news (   ) about the village",
    jp: "その村に関する1つのニュース（ニュース）"
  },
  // 311-3
  {
    word: "items",
    meaning: "項目",
    sentence: "check all the (   ) on the list",
    jp: "リストのすべての項目を確認する"
  },
  // 312-1
  {
    word: "wheel",
    meaning: "車輪",
    sentence: "the front (   ) of my bicycle",
    jp: "自転車の前輪（前の車輪）"
  },
  // 312-2
  {
    word: "wheel",
    meaning: "ハンドル",
    sentence: "sit at the (   )",
    jp: "運転する（ハンドルの所に座る）"
  },
  // 312-3
  {
    word: "wheel",
    meaning: "動かす",
    sentence: "(   ) a cart",
    jp: "カートを動かす"
  },
  // 313-1
  {
    word: "notes",
    meaning: "メモ",
    sentence: "take (   ) in class",
    jp: "授業中にメモをとる"
  },
  // 313-2
  {
    word: "note",
    meaning: "紙幣",
    sentence: "a 50-pound (   )",
    jp: "50ポンド紙幣"
  },
  // 313-3
  {
    word: "note",
    meaning: "指摘する",
    sentence: "(   ) that we face a real challenge",
    jp: "私たちが大きな難局に直面していると指摘する"
  },
  // 313-4
  {
    word: "note",
    meaning: "注意して",
    sentence: "Please (   ) that the homework is due on Friday.",
    jp: "宿題の締め切りは金曜日だということを忘れないように注意してください。"
  },
  // 314-1
  {
    word: "present",
    meaning: "プレゼント",
    sentence: "open the (   )",
    jp: "プレゼントを開ける"
  },
  // 314-2
  {
    word: "present",
    meaning: "現在",
    sentence: "up to the (   )",
    jp: "現在に至るまで"
  },
  // 314-3
  {
    word: "present",
    meaning: "出席者",
    sentence: "those (   )",
    jp: "出席者（出席している人々）"
  },
  // 314-4
  {
    word: "present",
    meaning: "今の",
    sentence: "my (   ) job",
    jp: "（私の）今の仕事"
  },
  // 314-5
  {
    word: "present",
    meaning: "贈る",
    sentence: "(   ) him with an award",
    jp: "彼に賞を贈る"
  },
  // 315-1
  {
    word: "bargain",
    meaning: "お買い得品",
    sentence: "find a good (   )",
    jp: "良いお買い得品を見つける"
  },
  // 315-2
  {
    word: "bargain",
    meaning: "交渉する",
    sentence: "(   ) for better pay",
    jp: "賃上げを求めて交渉する"
  },
  // 316-1
  {
    word: "stuff",
    meaning: "物",
    sentence: "lift heavy (   )",
    jp: "重い物を持ち上げる"
  },
  // 316-2
  {
    word: "stuffed",
    meaning: "詰められた",
    sentence: "chicken (   ) with rice",
    jp: "お米が詰められた鶏肉"
  },
  // 317-1
  {
    word: "string",
    meaning: "ひも",
    sentence: "tie up the box with some (   )",
    jp: "ひもで箱を縛る"
  },
  // 317-2
  {
    word: "string",
    meaning: "一連の",
    sentence: "a (   ) of questions",
    jp: "一連の質問"
  },
  // 317-3
  {
    word: "string",
    meaning: "弦",
    sentence: "a six-(   ) guitar",
    jp: "6弦ギター"
  },
  // 318-1
  {
    word: "leisure",
    meaning: "余暇",
    sentence: "enjoy my (   ) time",
    jp: "余暇を楽しむ"
  },
  // 318-2
  {
    word: "leisure",
    meaning: "産業",
    sentence: "the (   ) industry",
    jp: "レジャー（余暇）産業"
  },
  // 319-1
  {
    word: "diet",
    meaning: "食事",
    sentence: "a well-balanced (   )",
    jp: "栄養バランスのとれた食事"
  },
  // 319-2
  {
    word: "diet",
    meaning: "ダイエット",
    sentence: "I am on a (   ) now.",
    jp: "今ダイエット中です。"
  },
  // 319-3
  {
    word: "Diet",
    meaning: "国会",
    sentence: "a (   ) member",
    jp: "国会議員"
  },
  // 320-1
  {
    word: "furniture",
    meaning: "家具",
    sentence: "a set of (   )",
    jp: "家具一式"
  },
  // 321-1
  {
    word: "refrigerator",
    meaning: "冷蔵庫",
    sentence: "put the leftovers in the (   )",
    jp: "冷蔵庫に残り物を入れる"
  },
  // 322-1
  {
    word: "traffic",
    meaning: "車",
    sentence: "There is little (   ) on the street today.",
    jp: "今日は，通りに車が（交通量がほとんどない）少ない。"
  },
  // 323-1
  {
    word: "sold",
    meaning: "売る",
    sentence: "We (   ) our car for 500,000 yen.",
    jp: "私たちは車を50万円で売った。"
  },
  // 323-2
  {
    word: "sell",
    meaning: "売れる",
    sentence: "Her books (   ) very well.",
    jp: "彼女の本は売れ行きがとてもよい（よく売れる）。"
  },
  // 324-1
  {
    word: "pay",
    meaning: "支払う",
    sentence: "(   ) five dollars for the book",
    jp: "その本の代金として5ドルを払う"
  },
  // 324-2
  {
    word: "pay",
    meaning: "部屋代を払う",
    sentence: "(   ) for the room",
    jp: "その部屋代を払う"
  },
  // 324-3
  {
    word: "pay",
    meaning: "割に合わない",
    sentence: "Honesty does not (   ).",
    jp: "正直者は馬鹿を見る（正直は割に合わない）。"
  },
  // 324-4
  {
    word: "pay",
    meaning: "有給休暇",
    sentence: "have a vacation with (   )",
    jp: "有給休暇をとる"
  },
  // 325-1
  {
    word: "wear",
    meaning: "をつけている",
    sentence: "I (   ) contact lenses.",
    jp: "コンタクトレンズをつけている。"
  },
  // 325-2
  {
    word: "wearing",
    meaning: "をつけている",
    sentence: "I am (   ) contact lenses.",
    jp: "（私は今）コンタクトレンズをつけている。"
  },
  // 325-3
  {
    word: "worn",
    meaning: "すり切れている",
    sentence: "My shirt is badly (   ).",
    jp: "私のシャツはひどくすり切れている。"
  },
  // 325-4
  {
    word: "wear",
    meaning: "すり減る",
    sentence: "The carpet is starting to (   ) a little.",
    jp: "カーペットが少しすり減り始めている。"
  },
  // 327-1
  {
    word: "marry",
    meaning: "〜と結婚する",
    sentence: "Will you (   ) me?",
    jp: "（私と）結婚してくれますか？"
  },
  // 327-2
  {
    word: "married",
    meaning: "夫婦",
    sentence: "a (   ) couple",
    jp: "夫婦（結婚しているカップル）"
  },
  // 328-1
  {
    word: "greet",
    meaning: "〜に挨拶をする",
    sentence: "(   ) each other",
    jp: "お互いに挨拶をする"
  },
  // 329-1
  {
    word: "order",
    meaning: "〜を注文する",
    sentence: "(   ) rice directly from the farm",
    jp: "産地に直接米を注文する"
  },
  // 329-2
  {
    word: "order",
    meaning: "命令する",
    sentence: "(   ) him to stop smoking",
    jp: "たばこをやめるように彼に命じる"
  },
  // 329-3
  {
    word: "order",
    meaning: "注文",
    sentence: "place an (   ) by telephone",
    jp: "電話で注文する"
  },
  // 329-4
  {
    word: "order",
    meaning: "命令",
    sentence: "obey an (   )",
    jp: "命令に従う"
  },
  // 329-5
  {
    word: "order",
    meaning: "順で",
    sentence: "in alphabetical (   )",
    jp: "アルファベット順で"
  },
  // 329-6
  {
    word: "order",
    meaning: "秩序",
    sentence: "maintain peace and (   )",
    jp: "平和と秩序を維持する"
  },
  // 330-1
  {
    word: "book",
    meaning: "〜を予約する",
    sentence: "(   ) a single room for two nights",
    jp: "シングルルームを2泊予約する"
  },
  // 330-2
  {
    word: "room",
    meaning: "別腹",
    sentence: "have (   ) for dessert",
    jp: "デザートは別腹だ（デザートのための余地がある）。"
  }
],
331: [
  // 331-1
  {
    word: "story",
    meaning: "階",
    sentence: "a two-hundred-(   ) skyscraper",
    jp: "200階建ての超高層ビル"
  },
  // 332-1
  {
    word: "site",
    meaning: "用地",
    sentence: "a dam (   ) ( = site for a dam)",
    jp: "ダムの用地"
  },
  // 332-2
  {
    word: "site",
    meaning: "現場",
    sentence: "a construction (   )",
    jp: "建設現場（工事現場）"
  },
  // 332-3
  {
    word: "site",
    meaning: "跡",
    sentence: "the (   ) of the Battle of Sekigahara",
    jp: "関ケ原の戦いの跡"
  },
  // 333-1
  {
    word: "yard",
    meaning: "庭",
    sentence: "mow the lawn in our (   )",
    jp: "私たちの庭の芝を刈る"
  },
  // 333-2
  {
    word: "yards",
    meaning: "ヤード",
    sentence: "drive a golf ball over 300 (   )",
    jp: "300ヤード以上ゴルフボールを飛ばす"
  },
  // 334-1
  {
    word: "bottom",
    meaning: "海底",
    sentence: "the (   ) of the sea",
    jp: "海底"
  },
  // 334-2
  {
    word: "bottom",
    meaning: "下",
    sentence: "Look at the (   ) of page 10.",
    jp: "10ページの下を見てください。"
  },
  // 334-3
  {
    word: "bottom",
    meaning: "尻",
    sentence: "fall on my (   )",
    jp: "尻もちをつく（尻の上に落ちる）"
  },
  // 335-1
  {
    word: "line",
    meaning: "列",
    sentence: "stand in (   )",
    jp: "列に並ぶ"
  },
  // 335-2
  {
    word: "line",
    meaning: "サインする",
    sentence: "sign on the dotted (   )",
    jp: "点線のところにサインする"
  },
  // 335-3
  {
    word: "line",
    meaning: "お話し中",
    sentence: "The (   ) is busy.",
    jp: "電話がお話し中です。"
  },
  // 335-4
  {
    word: "lines",
    meaning: "セリフ",
    sentence: "practice my (   ) over and over",
    jp: "セリフを何度も練習する"
  },
  // 335-5
  {
    word: "line",
    meaning: "行列を作る",
    sentence: "(   ) up to buy tickets",
    jp: "チケットを求めて行列を作る"
  },
  // 336-1
  {
    word: "row",
    meaning: "列",
    sentence: "the people sitting in the back (   )",
    jp: "後列に座っている人々"
  },
  // 336-2
  {
    word: "row",
    meaning: "こぐ",
    sentence: "(   ) a boat on the lake",
    jp: "湖でボートをこぐ"
  },
  // 337-1
  {
    word: "background",
    meaning: "背景",
    sentence: "Classical music was playing in the (   ).",
    jp: "BGM（背景）にクラシック音楽が流れていた。"
  },
  // 337-2
  {
    word: "backgrounds",
    meaning: "経歴",
    sentence: "people from different (   )",
    jp: "さまざまな経歴の人々"
  },
  // 338-1
  {
    word: "direction",
    meaning: "方向",
    sentence: "go in the opposite (   )",
    jp: "反対の方向へ行く"
  },
  // 338-2
  {
    word: "directions",
    meaning: "道順",
    sentence: "ask for (   )",
    jp: "道順を尋ねる"
  },
  // 338-3
  {
    word: "direction",
    meaning: "指揮",
    sentence: "under his (   )",
    jp: "彼の指揮の下で"
  },
  // 339-1
  {
    word: "cultures",
    meaning: "文化",
    sentence: "various foreign (   )",
    jp: "さまざまな外国文化"
  },
  // 339-2
  {
    word: "culture",
    meaning: "培養",
    sentence: "a (   ) of bacteria",
    jp: "細菌の培養"
  },
  // 339-3
  {
    word: "culture",
    meaning: "教養",
    sentence: "a woman of (   )",
    jp: "教養ある女性"
  },
  // 339-4
  {
    word: "cultured",
    meaning: "養殖",
    sentence: "(   ) pearls",
    jp: "養殖（された）真珠"
  },
  // 340-1
  {
    word: "art",
    meaning: "芸術",
    sentence: "works of modern (   )",
    jp: "現代芸術の作品"
  },
  // 340-2
  {
    word: "art",
    meaning: "技術",
    sentence: "the (   ) of conversation",
    jp: "会話の技術"
  },
  // 340-3
  {
    word: "arts",
    meaning: "一般教養",
    sentence: "a liberal (   ) course",
    jp: "一般教養課程"
  },
  // 341-1
  {
    word: "cartoons",
    meaning: "漫画",
    sentence: "Japanese animated (   )",
    jp: "日本の（アニメーション作品）漫画"
  },
  // 342-1
  {
    word: "plot",
    meaning: "あらすじ",
    sentence: "the (   ) of this novel",
    jp: "この小説のあらすじ"
  },
  // 342-2
  {
    word: "novel",
    meaning: "斬新な",
    sentence: "come up with a (   ) idea",
    jp: "斬新な考えを思いつく"
  },
  // 343-1
  {
    word: "instrument",
    meaning: "楽器",
    sentence: "play a musical (   )",
    jp: "楽器を演奏する"
  },
  // 343-2
  {
    word: "instrument",
    meaning: "器具",
    sentence: "a medical (   )",
    jp: "医療器具"
  },
  // 344-1
  {
    word: "tune",
    meaning: "曲",
    sentence: "That is a nice (   ).",
    jp: "いい曲だね。"
  },
  // 344-2
  {
    word: "tune",
    meaning: "チャンネルを合わせる",
    sentence: "(   ) in to channel 6",
    jp: "6チャンネルに合わせる"
  },
  // 344-3
  {
    word: "tune",
    meaning: "調律する",
    sentence: "(   ) the piano",
    jp: "ピアノを調律する"
  },
  // 345-1
  {
    word: "sentence",
    meaning: "文",
    sentence: "delete the (   )",
    jp: "その1文を削除する"
  },
  // 345-2
  {
    word: "sentence",
    meaning: "判決",
    sentence: "be given the death (   )",
    jp: "死刑判決を受ける"
  },
  // 345-3
  {
    word: "sentenced",
    meaning: "判決を下される",
    sentence: "be (   ) to five years in prison",
    jp: "懲役5年の刑を言い渡される（判決を下される）。"
  },
  // 346-1
  {
    word: "article",
    meaning: "記事",
    sentence: "a magazine (   ) on Portugal",
    jp: "ポルトガルに関する雑誌の記事"
  },
  // 346-2
  {
    word: "article",
    meaning: "品物",
    sentence: "an (   ) of furniture",
    jp: "家具1点（品物）"
  },
  // 346-3
  {
    word: "article",
    meaning: "冠詞",
    sentence: "This word takes no (   ).",
    jp: "この語は冠詞をつけない。"
  },
  // 346-4
  {
    word: "Article",
    meaning: "条項",
    sentence: "(   ) 9 of the Japanese Constitution",
    jp: "日本の憲法第9条"
  },
  // 347-1
  {
    word: "passage",
    meaning: "一節",
    sentence: "a famous (   ) from the Bible",
    jp: "聖書の有名な一節"
  },
  // 347-2
  {
    word: "passage",
    meaning: "経過",
    sentence: "with the (   ) of time",
    jp: "時の経過と共に"
  },
  // 348-1
  {
    word: "vocabulary",
    meaning: "語彙",
    sentence: "increase my (   )",
    jp: "語彙を増やす"
  },
  // 349-1
  {
    word: "Rumors",
    meaning: "うわさ",
    sentence: "(   ) about him spread throughout the school.",
    jp: "彼に関するうわさが学校中に広まった。"
  },
  // 350-1
  {
    word: "spell",
    meaning: "綴る",
    sentence: "How do you (   ) your name?",
    jp: "名前はどのように綴りますか。"
  },
  // 350-2
  {
    word: "spell",
    meaning: "呪文",
    sentence: "cast a (   ) on the man",
    jp: "その男に呪文をかける"
  },
  // 350-3
  {
    word: "spell",
    meaning: "期間",
    sentence: "I've had a (   ) of bad luck recently.",
    jp: "最近ずっと（期間）ついてない。"
  },
  // 351-1
  {
    word: "pronounce",
    meaning: "発音する",
    sentence: "How do you (   ) your name?",
    jp: "お名前はどう発音するのですか。"
  },
  // 351-2
  {
    word: "pronounce",
    meaning: "宣告する",
    sentence: "(   ) a sentence",
    jp: "判決を宣告する"
  },
  // 352-1
  {
    word: "signs",
    meaning: "兆候",
    sentence: "show (   ) of recovery",
    jp: "回復の兆し（兆候）が見られる"
  },
  // 352-2
  {
    word: "sign",
    meaning: "看板",
    sentence: "a (   ) saying \"No more Hiroshimas\"",
    jp: "「ノーモアヒロシマ」の看板"
  },
  // 352-3
  {
    word: "sign",
    meaning: "署名する",
    sentence: "(   ) an autograph for a fan",
    jp: "ファンのためにサインをする（署名する）"
  },
  // 353-1
  {
    word: "mean",
    meaning: "意味する",
    sentence: "What does that (   )?",
    jp: "それはどういう意味ですか（意味しますか）。"
  },
  // 353-2
  {
    word: "mean",
    meaning: "つもりだ",
    sentence: "I didn't (   ) to bother you.",
    jp: "邪魔をするつもりじゃなかった。"
  },
  // 353-3
  {
    word: "mean",
    meaning: "意地悪な",
    sentence: "Don't be so (   ).",
    jp: "そんなに意地悪（意地悪なこと）言わないでよ。"
  },
  // 354-1
  {
    word: "published",
    meaning: "発行される",
    sentence: "This magazine is (   ) twice a year.",
    jp: "この雑誌は年に2回発行されている。"
  },
  // 354-2
  {
    word: "published",
    meaning: "発表される",
    sentence: "The latest results will be (   ) tomorrow.",
    jp: "最新の結果は明日発表される。"
  }
],
355: [
  // 355-1
  {
    word: "display",
    meaning: "〜を展示する",
    sentence: "(   ) the latest fashions",
    jp: "最新のファッションを展示する"
  },
  // 355-2
  {
    word: "display",
    meaning: "（実力など）を発揮する",
    sentence: "(   ) my real ability",
    jp: "実力を発揮する"
  },
  // 355-3
  {
    word: "display",
    meaning: "〜を誇示する",
    sentence: "(   ) my jewelry",
    jp: "宝石を誇示する"
  },
  // 355-4
  {
    word: "display",
    meaning: "展示，表現",
    sentence: "a fireworks (   )",
    jp: "花火大会"
  },
  // 356-1
  {
    word: "trust",
    meaning: "〜を信頼する",
    sentence: "You can (   ) him; he keeps secrets.",
    jp: "彼のことを信頼してよい。彼は秘密を守る。"
  },
  // 356-2
  {
    word: "trust",
    meaning: "信頼，信用",
    sentence: "put my (   ) in her",
    jp: "彼女を信頼する"
  },
  // 357-1
  {
    word: "depends",
    meaning: "〜次第である",
    sentence: "Your success (   ) on how much effort you make.",
    jp: "成功は君の努力（がどれくらい努力するか）次第だ。"
  },
  // 357-2
  {
    word: "depend",
    meaning: "（〜に）頼る",
    sentence: "I (   ) on my parents for university tuition.",
    jp: "私は両親に大学の学費を頼っている。"
  },
  // 358-1
  {
    word: "rely",
    meaning: "（〜に）頼る",
    sentence: "You can (   ) on him.",
    jp: "彼なら頼っても大丈夫。"
  },
  // 359-1
  {
    word: "pray",
    meaning: "祈る",
    sentence: "(   ) for her safety",
    jp: "彼女の無事を祈る"
  },
  // 360-1
  {
    word: "beg",
    meaning: "〜を嘆願する",
    sentence: "(   ) her to overlook my mistakes",
    jp: "ミスを見逃してもらうよう，彼女にお願いする"
  },
  // 360-2
  {
    word: "beg",
    meaning: "求める",
    sentence: "(   ) for something to eat",
    jp: "食べ物をねだる"
  },
  // 361-1
  {
    word: "prefer",
    meaning: "（BよりA）を好む",
    sentence: "(   ) beef to chicken",
    jp: "鶏肉より牛肉を好む"
  },
  // 362-1
  {
    word: "wept",
    meaning: "（しくしく）泣く",
    sentence: "All America (   ).",
    jp: "全米が泣いた。"
  },
  // 363-1
  {
    word: "hate",
    meaning: "〜を嫌う",
    sentence: "(   ) doing housework",
    jp: "家事をするのが嫌いだ"
  },
  // 364-1
  {
    word: "worry",
    meaning: "心配する",
    sentence: "Don't (   ) about it.",
    jp: "そんなことを気にするな。"
  },
  // 364-2
  {
    word: "worries",
    meaning: "心配（事）",
    sentence: "Life is full of (   ).",
    jp: "人生は心配事が多い。"
  },
  // 365-1
  {
    word: "anxious",
    meaning: "（〜を）心配して",
    sentence: "I'm (   ) about her health.",
    jp: "彼女の健康が心配だ。"
  },
  // 365-2
  {
    word: "anxious",
    meaning: "（〜を）切望して",
    sentence: "Ben is (   ) to see you.",
    jp: "ベンは君に会いたがっているよ。"
  },
  // 366-1
  {
    word: "satisfied",
    meaning: "〜を満足させる",
    sentence: "I'm not (   ) with the exam result.",
    jp: "試験結果に満足していない。"
  },
  // 366-2
  {
    word: "satisfy",
    meaning: "（必要条件などを）満たす",
    sentence: "(   ) the needs of tourists",
    jp: "旅行者のニーズに応える"
  },
  // 367-1
  {
    word: "annoys",
    meaning: "〜をわずらわせる",
    sentence: "It really (   ) me when I see people smoking while (they are) walking.",
    jp: "歩きタバコを見かけると頭にくる（歩きタバコは私を苛立たせる）。"
  },
  // 368-1
  {
    word: "bother",
    meaning: "〜に面倒をかける",
    sentence: "I'm sorry to (   ) you, but could you give me a hand?",
    jp: "ご迷惑をおかけしてすみませんが，手を貸していただけないでしょうか。"
  },
  // 368-2
  {
    word: "bother",
    meaning: "（〜することを）わざわざする",
    sentence: "Don't (   ) to gift-wrap it.",
    jp: "わざわざ包装しなくて構いません。"
  },
  // 368-3
  {
    word: "bother",
    meaning: "面倒なこと",
    sentence: "find it a (   ) to go out in the rain",
    jp: "雨の中，外出するのは面倒だと思う"
  },
  // 369-1
  {
    word: "disturb",
    meaning: "（うるさくして）〜に迷惑をかける",
    sentence: "Don't (   ) other people.",
    jp: "ほかの人に迷惑をかけないようにしなさい。"
  },
  // 369-2
  {
    word: "disturb",
    meaning: "（平和などを）乱す",
    sentence: "(   ) my sleep [concentration]",
    jp: "睡眠［集中］を妨げる"
  },
  // 370-1
  {
    word: "frightened",
    meaning: "〜を怯えさせる",
    sentence: "I am (   ) of spiders.",
    jp: "クモがこわい（クモに怯えさせられる）。"
  },
  // 371-1
  {
    word: "regret",
    meaning: "〜を後悔する",
    sentence: "I (   ) that I did not study hard in my teens.",
    jp: "10代のころ一生懸命勉強しなかったことを後悔している。"
  },
  // 371-2
  {
    word: "regret",
    meaning: "（〜することを）残念に思う",
    sentence: "I (   ) to say that I cannot help you.",
    jp: "残念ながらあなたを助けられないと言わなければなりません。"
  },
  // 371-3
  {
    word: "regrets",
    meaning: "後悔",
    sentence: "I have no (   ).",
    jp: "後悔はない。"
  },
  // 372-1
  {
    word: "favors",
    meaning: "親切な行為",
    sentence: "Could you do me a couple of (   )?",
    jp: "いくつかお願いがあるのですが。"
  },
  // 372-2
  {
    word: "favor",
    meaning: "支持",
    sentence: "be in (   ) of his proposal",
    jp: "彼の提案に賛成だ"
  },
  // 373-1
  {
    word: "interest",
    meaning: "関心",
    sentence: "have [show] an (   ) in history",
    jp: "歴史に興味を持っている"
  },
  // 373-2
  {
    word: "interests",
    meaning: "利益",
    sentence: "It is in your best (   ) to stay with your grandparents.",
    jp: "祖父母と暮らすのが君たちにとって一番よい。"
  },
  // 373-3
  {
    word: "interest",
    meaning: "利子",
    sentence: "the (   ) on a loan",
    jp: "ローンの利子"
  },
  // 374-1
  {
    word: "pity",
    meaning: "残念なこと",
    sentence: "It is a (   ) that you missed the movie.",
    jp: "あなたがその映画を見逃したのは残念です。"
  },
  // 374-2
  {
    word: "pity",
    meaning: "哀れみ",
    sentence: "feel (   ) for the child",
    jp: "その子をかわいそうに思う"
  },
  // 375-1
  {
    word: "due to",
    meaning: "〜が原因で",
    sentence: "Our flight was delayed (   ) the storm.",
    jp: "嵐のために飛行機が遅れた。"
  },
  // 375-2
  {
    word: "due",
    meaning: "締め切りの",
    sentence: "The report is (   ) on Monday.",
    jp: "報告書は月曜日が締め切りだ。"
  },
  // 375-3
  {
    word: "due",
    meaning: "到着予定の",
    sentence: "The train is (   ) to arrive at 9:00.",
    jp: "電車は9時に到着予定です。"
  },
  // 376-1
  {
    word: "reasons",
    meaning: "理由",
    sentence: "agree with his opinion for the following (   )",
    jp: "次のような理由で彼の意見に賛成だ"
  },
  // 376-2
  {
    word: "reason",
    meaning: "理性",
    sentence: "(   ) and emotion",
    jp: "理性と感情"
  },
  // 376-3
  {
    word: "reasoned",
    meaning: "〜を推論する",
    sentence: "He (   ) that he must have left his bag on the bus.",
    jp: "彼はカバンをバスの中に忘れてきたに違いないと推論した。"
  },
  // 376-4
  {
    word: "reason",
    meaning: "思考する",
    sentence: "have the ability to (   )",
    jp: "（論理的に）思考する力がある"
  },
  // 377-1
  {
    word: "result",
    meaning: "結果",
    sentence: "as a (   ) of inflation",
    jp: "インフレの結果として"
  },
  // 377-2
  {
    word: "resulted",
    meaning: "（〜という結果に）なる",
    sentence: "The project (   ) in success.",
    jp: "その事業は結果として成功した。"
  },
  // 377-3
  {
    word: "resulted",
    meaning: "（〜の結果として）起こる",
    sentence: "Serious damage (   ) from the earthquake.",
    jp: "地震の結果，深刻な被害が生じた。"
  },
  // 378-1
  {
    word: "effect",
    meaning: "効果，影響",
    sentence: "Drinking too much has a bad (   ) on the brain.",
    jp: "過度の飲酒は脳に悪影響を与える。"
  },
  // 379-1
  {
    word: "influence",
    meaning: "影響（力）",
    sentence: "have a strong (   ) on them",
    jp: "彼らに強い影響を与える"
  },
  // 379-2
  {
    word: "influenced",
    meaning: "〜に影響を与える",
    sentence: "This book deeply (   ) my way of thinking.",
    jp: "この本は私の考え方に深く影響を与えた。"
  },
  // 380-1
  {
    word: "ended up",
    meaning: "結局〜することになる",
    sentence: "We (   ) spending the night at the airport.",
    jp: "私たちは結局，空港で一夜を過ごすことになった。"
  },
  // 380-2
  {
    word: "end",
    meaning: "終わり",
    sentence: "at the (   ) of May",
    jp: "5月の終わりに"
  },
  // 380-3
  {
    word: "end",
    meaning: "目的",
    sentence: "a means to an (   )",
    jp: "目的のための手段"
  },
  // 381-1
  {
    word: "cause",
    meaning: "〜を引き起こす",
    sentence: "(   ) trouble",
    jp: "面倒を引き起こす"
  },
  // 381-2
  {
    word: "cause",
    meaning: "原因",
    sentence: "the root (   ) of the war",
    jp: "その戦争の根本的な原因"
  },
  // 382-1
  {
    word: "affects",
    meaning: "〜に影響を与える，作用する",
    sentence: "Lack of sleep seriously (   ) your performance at work.",
    jp: "睡眠不足は仕事（の出来栄え）に悪影響を及ぼす。"
  },
  // 383-1
  {
    word: "way",
    meaning: "方法",
    sentence: "my (   ) of studying",
    jp: "私の勉強の仕方"
  },
  // 383-2
  {
    word: "way",
    meaning: "〜の点で",
    sentence: "We differ in this (   ).",
    jp: "この点において私たちは異なる。"
  },
  // 383-3
  {
    word: "way",
    meaning: "道",
    sentence: "go all the (   ) to Tokyo",
    jp: "はるばる（長い道中を）東京まで行く"
  },
  // 383-4
  {
    word: "way",
    meaning: "はるかに",
    sentence: "His IQ is (   ) above average.",
    jp: "彼の知能指数は平均よりはるかに上だ。"
  },
  // 384-1
  {
    word: "manner",
    meaning: "方法，流儀",
    sentence: "behave in a responsible (   )",
    jp: "責任ある方法でふるまう"
  },
  // 384-2
  {
    word: "manner",
    meaning: "態度，話し方",
    sentence: "his (   ) of speaking",
    jp: "彼の話し方"
  },
  // 384-3
  {
    word: "manners",
    meaning: "マナー",
    sentence: "have [know] no (   )",
    jp: "マナーを知らない"
  }
],
385: [
  // 385-1
  {
    word: "purpose",
    meaning: "目的",
    sentence: "What is the (   ) of your visit?",
    jp: "あなたの訪問の目的は何ですか。"
  },
  // 386-1
  {
    word: "sake",
    meaning: "〜のため",
    sentence: "for the (   ) of your health",
    jp: "健康のため"
  },
  // 386-2
  {
    word: "Sake",
    meaning: "日本酒",
    sentence: "(   ) is becoming popular among Europeans.",
    jp: "日本酒はヨーロッパの人々の間で人気が出ている。"
  },
  // 387-1
  {
    word: "right",
    meaning: "ちょうど",
    sentence: "(   ) in front of me",
    jp: "私のちょうど目の前で"
  },
  // 387-2
  {
    word: "right",
    meaning: "正しい",
    sentence: "You are (   ).",
    jp: "君が正しいよ。"
  },
  // 387-3
  {
    word: "right",
    meaning: "右の",
    sentence: "my (   ) hand",
    jp: "私の右手"
  },
  // 387-4
  {
    word: "right",
    meaning: "権利",
    sentence: "the (   ) to vote",
    jp: "投票権"
  },
  // 388-1
  {
    word: "complete",
    meaning: "完全な",
    sentence: "a (   ) stranger",
    jp: "見ず知らずの人（完全に知らない人）"
  },
  // 388-2
  {
    word: "complete",
    meaning: "〜を完成させる",
    sentence: "This tunnel took ten years to (   ).",
    jp: "このトンネルは完成するのに10年かかった。"
  },
  // 389-1
  {
    word: "hardly",
    meaning: "ほとんど〜ない",
    sentence: "I can (   ) wait for the summer.",
    jp: "夏が待ち遠しい（ほとんど待てない）。"
  },
  // 389-2
  {
    word: "hardly",
    meaning: "めったに〜ない",
    sentence: "He (   ) ever smiles.",
    jp: "彼はめったに笑わない。"
  },
  // 390-1
  {
    word: "almost",
    meaning: "ほとんど",
    sentence: "I go to the gym (   ) every day.",
    jp: "ほとんど毎日ジムに通っている。"
  },
  // 391-1
  {
    word: "partly",
    meaning: "ある程度，部分的に",
    sentence: "I am (   ) to blame.",
    jp: "私にも一部責任がある。"
  },
  // 392-1
  {
    word: "indeed",
    meaning: "実際に，本当に",
    sentence: "He is (   ) a kind person.",
    jp: "彼は本当に親切な人です。"
  },
  // 392-2
  {
    word: "Indeed",
    meaning: "確かに",
    sentence: "(   ), he is young, but he is very smart.",
    jp: "確かに彼は若いですが，とても賢い。"
  },
  // 393-1
  {
    word: "Even",
    meaning: "〜でさえ",
    sentence: "(   ) Homer sometimes nods.",
    jp: "弘法にも筆の誤り。"
  },
  // 393-2
  {
    word: "even",
    meaning: "さらに",
    sentence: "Things became (   ) more difficult.",
    jp: "事態はさらに難しくなった。"
  },
  // 393-3
  {
    word: "even",
    meaning: "偶数の",
    sentence: "(   ) numbers",
    jp: "偶数"
  },
  // 393-4
  {
    word: "even",
    meaning: "平らな，揃った",
    sentence: "white, (   ) teeth",
    jp: "白くきれいにそろった歯"
  },
  // 393-5
  {
    word: "even",
    meaning: "ちょうど",
    sentence: "It cost 10 dollars (   ).",
    jp: "ちょうど10ドルでした。"
  },
  // 394-1
  {
    word: "exactly",
    meaning: "正確に",
    sentence: "Where (   ) did you stay in Australia?",
    jp: "オーストラリアの正確にはどこに滞在したのですか。"
  },
  // 394-2
  {
    word: "Exactly",
    meaning: "そのとおり",
    sentence: "\"(   ).\" / \"Not exactly.\"",
    jp: "「そのとおりです」「ちょっと違います」。"
  },
  // 395-1
  {
    word: "gradually",
    meaning: "徐々に",
    sentence: "Land prices are (   ) increasing.",
    jp: "土地の値段が徐々に上がっている。"
  },
  // 396-1
  {
    word: "therefore",
    meaning: "それゆえに",
    sentence: "Even experts are only human, and (   ) mistakes sometimes occur.",
    jp: "専門家でもただの人間だ。それゆえ，ミスが時々起きる。"
  },
  // 397-1
  {
    word: "instead",
    meaning: "代わりに",
    sentence: "If you can't make it, your mother may go (   ).",
    jp: "もし君が行けないのなら，君のお母さんが代わりに行ってもよい。"
  },
  // 397-2
  {
    word: "instead of",
    meaning: "〜の代わりに",
    sentence: "take the stairs (   ) the elevator",
    jp: "エレベーターの代わりに階段を使う"
  },
  // 398-1
  {
    word: "until",
    meaning: "〜まで（ずっと）",
    sentence: "We are open (   ) 11 p.m. on weekdays.",
    jp: "平日は午後11時まで営業しています。"
  },
  // 398-2
  {
    word: "until",
    meaning: "〜して初めて",
    sentence: "Stay here (   ) I get back.",
    jp: "私が戻るまでここにいて。"
  },
  // 399-1
  {
    word: "besides",
    meaning: "〜に加えて",
    sentence: "learn another foreign language (   ) English",
    jp: "英語以外の外国語を勉強する"
  },
  // 399-2
  {
    word: "besides",
    meaning: "おまけに",
    sentence: "It's too late to go out; (   ), it's snowing.",
    jp: "外出するには遅すぎだし，おまけに，雪が降っている。"
  },
  // 400-1
  {
    word: "except",
    meaning: "〜を除いて",
    sentence: "Everybody was asleep (   ) (for) him.",
    jp: "彼以外は皆眠っていた。"
  },
  // 400-2
  {
    word: "Except for",
    meaning: "〜を除けば",
    sentence: "(   ) a dog, the park was empty.",
    jp: "1匹のイヌを除いて，公園には誰もいなかった。"
  },
  // 401-1
  {
    word: "debate",
    meaning: "討論",
    sentence: "the (   ) on whaling",
    jp: "捕鯨に関する討論"
  },
  // 401-2
  {
    word: "debate",
    meaning: "〜を討論する",
    sentence: "(   ) the pros and cons of this",
    jp: "この是非について話し合う"
  },
  // 402-1
  {
    word: "criticizing",
    meaning: "〜を批判する",
    sentence: "Stop (   ) my cooking!",
    jp: "私の料理を批判するのをやめて。"
  },
  // 403-1
  {
    word: "accuse",
    meaning: "〜を非難する",
    sentence: "(   ) her of lying",
    jp: "うそをついたことで彼女を非難する"
  },
  // 403-2
  {
    word: "accuse",
    meaning: "〜を告訴する",
    sentence: "(   ) him of murder",
    jp: "殺人で彼を告訴する"
  },
  // 404-1
  {
    word: "insist",
    meaning: "〜と言い張る",
    sentence: "(   ) on returning home",
    jp: "家に帰ると言い張る"
  },
  // 404-2
  {
    word: "insisted",
    meaning: "強く求める",
    sentence: "I (   ) that she wait.",
    jp: "私は彼女が待つように求めた。"
  },
  // 405-1
  {
    word: "object",
    meaning: "反対する",
    sentence: "(   ) to my studying abroad",
    jp: "私の留学に反対する"
  },
  // 405-2
  {
    word: "object",
    meaning: "物",
    sentence: "a solid (   )",
    jp: "硬い物"
  },
  // 405-3
  {
    word: "object",
    meaning: "目的",
    sentence: "The (   ) of this game is to develop children's vocabulary.",
    jp: "このゲームの目的は子どもの語彙を増やすことだ。"
  },
  // 405-4
  {
    word: "object",
    meaning: "対象",
    sentence: "an (   ) of pity",
    jp: "哀れみの対象"
  },
  // 406-1
  {
    word: "protest",
    meaning: "抗議する",
    sentence: "(   ) against nuclear tests",
    jp: "核実験に抗議する"
  },
  // 406-2
  {
    word: "protest",
    meaning: "抗議",
    sentence: "non-violent (   )",
    jp: "非暴力の抗議"
  },
  // 407-1
  {
    word: "controversial",
    meaning: "論争を招く，物議をかもす",
    sentence: "a highly (   ) issue",
    jp: "非常に論争になっている問題"
  },
  // 408-1
  {
    word: "bound",
    meaning: "きっと〜する",
    sentence: "He is (   ) to be in the classroom now.",
    jp: "今彼はきっと教室にいるはずだ。"
  },
  // 408-2
  {
    word: "bound",
    meaning: "〜行きで",
    sentence: "the Nozomi Superexpress (   ) for Tokyo",
    jp: "東京行きののぞみ号"
  },
  // 409-1
  {
    word: "bet",
    meaning: "きっと〜だと思う",
    sentence: "I'll (   ) (that) he's coming.",
    jp: "きっと彼は来ると思う。"
  },
  // 409-2
  {
    word: "bet",
    meaning: "〜を賭ける",
    sentence: "(   ) 500 yen on a horse",
    jp: "馬に500円を賭ける"
  },
  // 410-1
  {
    word: "demand",
    meaning: "要求する",
    sentence: "(   ) an apology",
    jp: "謝罪を要求する"
  },
  // 410-2
  {
    word: "demand",
    meaning: "需要",
    sentence: "supply and (   )",
    jp: "需要と供給"
  },
  // 411-1
  {
    word: "desire",
    meaning: "願望",
    sentence: "have a strong (   ) to study in the U.K.",
    jp: "イギリスに留学したいという強い願望をもつ"
  },
  // 411-2
  {
    word: "desire",
    meaning: "〜を強く望む",
    sentence: "(   ) to marry her",
    jp: "彼女と結婚したいと強く望む"
  },
  // 412-1
  {
    word: "praise",
    meaning: "褒める",
    sentence: "(   ) the man for his diligence",
    jp: "その男の勤勉さを褒める"
  },
  // 412-2
  {
    word: "praise",
    meaning: "賞賛",
    sentence: "His novel won high (   ).",
    jp: "彼の小説は絶賛された。"
  },
  // 413-1
  {
    word: "honor",
    meaning: "名誉，栄誉",
    sentence: "It is an (   ) to be here.",
    jp: "お招き頂きありがとうございます。"
  },
  // 413-2
  {
    word: "honor",
    meaning: "〜を敬う",
    sentence: "(   ) my parents",
    jp: "両親を敬う"
  },
  // 414-1
  {
    word: "chat",
    meaning: "おしゃべりする",
    sentence: "(   ) over tea",
    jp: "お茶を飲みながらおしゃべりする"
  },
  // 414-2
  {
    word: "chat",
    meaning: "おしゃべり",
    sentence: "enjoy a (   ) with neighbors",
    jp: "近所の人たちとのおしゃべりを楽しむ"
  }
],
415: [
  // 415-1
  {
    word: "refer",
    meaning: "言及する，参照する",
    sentence: "(   ) to my childhood",
    jp: "私の子どものころについて触れる"
  },
  // 415-2
  {
    word: "refer",
    meaning: "指す",
    sentence: "What does the underlined \"it\" (   ) to?",
    jp: "下線を引いた \"it\" の指すものは何か。"
  },
  // 416-1
  {
    word: "mention",
    meaning: "〜について述べる，言及する",
    sentence: "You'd better not (   ) it.",
    jp: "それには触れないほうがいい。"
  },
  // 417-1
  {
    word: "convey",
    meaning: "〜を伝える",
    sentence: "(   ) my feelings by touching her hand",
    jp: "彼女の手に触れて，気持ちを伝える"
  },
  // 417-2
  {
    word: "conveyed",
    meaning: "〜を運ぶ",
    sentence: "Blood is (   ) to the heart by the veins.",
    jp: "血液は静脈から心臓へと運ばれる。"
  },
  // 418-1
  {
    word: "demonstrate",
    meaning: "〜をはっきり示す，実演する",
    sentence: "(   ) my real ability",
    jp: "実力を発揮する（真の実力を示す）"
  },
  // 419-1
  {
    word: "emphasize",
    meaning: "〜を強調する",
    sentence: "(   ) the importance of breakfast",
    jp: "朝食の重要性を強調する"
  },
  // 420-1
  {
    word: "exaggerate",
    meaning: "〜を誇張する",
    sentence: "greatly (   ) a story",
    jp: "話をとても大げさに言う"
  },
  // 420-2
  {
    word: "exaggerates",
    meaning: "大げさに言う",
    sentence: "He often (   ) when talking about fish he caught.",
    jp: "彼は釣った魚について話すときに大げさに言う。"
  },
  // 421-1
  {
    word: "reply",
    meaning: "返事をする，答える",
    sentence: "I asked him why, but he didn't (   ).",
    jp: "彼になぜかと尋ねたが，彼は返事をしなかった。"
  },
  // 421-2
  {
    word: "reply",
    meaning: "返事，答え",
    sentence: "I look forward to your (   ).",
    jp: "あなたの返事を楽しみにしています。"
  },
  // 422-1
  {
    word: "respond",
    meaning: "返答する，対応する",
    sentence: "(   ) to a question",
    jp: "質問に回答する"
  },
  // 422-2
  {
    word: "respond",
    meaning: "反応する",
    sentence: "(   ) quickly to customer complaints",
    jp: "客のクレームに素早く対応する"
  },
  // 423-1
  {
    word: "whisper",
    meaning: "ささやく",
    sentence: "(   ) in her ear",
    jp: "彼女の耳元でささやく"
  },
  // 423-2
  {
    word: "whisper",
    meaning: "ささやき",
    sentence: "talk in a (   )",
    jp: "小声で話す"
  },
  // 424-1
  {
    word: "remark",
    meaning: "発言",
    sentence: "his casual (   )",
    jp: "彼の何気なく言った発言"
  },
  // 424-2
  {
    word: "remarked",
    meaning: "〜と述べる",
    sentence: "He (   ) that the pot was very old.",
    jp: "そのつぼはとても古いものだと彼は言った。"
  },
  // 425-1
  {
    word: "observe",
    meaning: "〜を観察する",
    sentence: "(   ) the behavior of birds",
    jp: "鳥の行動を観察する"
  },
  // 425-2
  {
    word: "observe",
    meaning: "〜と述べる",
    sentence: "(   ) that humans fall into three social classes",
    jp: "人間は3つの社会集団に分かれると述べる"
  },
  // 425-3
  {
    word: "observe",
    meaning: "遵守する",
    sentence: "(   ) the school regulations",
    jp: "校則を守る"
  },
  // 425-4
  {
    word: "observe",
    meaning: "祝う",
    sentence: "(   ) Christmas",
    jp: "クリスマスを祝う"
  },
  // 426-1
  {
    word: "theory",
    meaning: "理論",
    sentence: "Your plan is excellent in (   ).",
    jp: "あなたの計画は理論上はすばらしい。"
  },
  // 426-2
  {
    word: "theory",
    meaning: "学説",
    sentence: "publish a new (   )",
    jp: "新しい学説を発表する"
  },
  // 427-1
  {
    word: "analysis",
    meaning: "分析",
    sentence: "handwriting (   )",
    jp: "筆跡鑑定（分析）"
  },
  // 428-1
  {
    word: "phenomena",
    meaning: "現象",
    sentence: "natural (   )",
    jp: "自然現象"
  },
  // 428-2
  {
    word: "phenomenon",
    meaning: "特異なもの，天才",
    sentence: "a child (   )",
    jp: "神童"
  },
  // 429-1
  {
    word: "device",
    meaning: "装置，道具",
    sentence: "a drone with a GPS (   )",
    jp: "GPS装置を搭載したドローン"
  },
  // 430-1
  {
    word: "experiment",
    meaning: "実験",
    sentence: "carry out a chemical (   )",
    jp: "化学の実験をする"
  },
  // 430-2
  {
    word: "experiment",
    meaning: "実験する",
    sentence: "(   ) with a new medicine",
    jp: "新薬で実験する"
  },
  // 431-1
  {
    word: "chemicals",
    meaning: "化学物質",
    sentence: "(   ) that are harmful to the environment",
    jp: "環境に有害な化学物質"
  },
  // 431-2
  {
    word: "chemical",
    meaning: "化学の",
    sentence: "a (   ) symbol",
    jp: "化学記号"
  },
  // 432-1
  {
    word: "fuels",
    meaning: "燃料",
    sentence: "burn fossil (   )",
    jp: "化石燃料を燃やす"
  },
  // 432-2
  {
    word: "fuel",
    meaning: "〜を大きくする，煽る",
    sentence: "(   ) her fear",
    jp: "彼女の恐怖を増大させる"
  },
  // 433-1
  {
    word: "nuclear",
    meaning: "原子力の，核の",
    sentence: "a (   ) power plant",
    jp: "原子力発電所"
  },
  // 434-1
  {
    word: "Statistics",
    meaning: "統計（値）",
    sentence: "(   ) show that younger people prefer football to baseball.",
    jp: "統計によると，若年層は野球よりサッカーを好むようだ。"
  },
  // 434-2
  {
    word: "statistics",
    meaning: "統計学",
    sentence: "mathematical (   )",
    jp: "数理統計学"
  },
  // 435-1
  {
    word: "pursue",
    meaning: "〜を追求する",
    sentence: "(   ) a career in journalism",
    jp: "報道関係の道に進む"
  },
  // 435-2
  {
    word: "pursue",
    meaning: "〜を追跡する",
    sentence: "(   ) a criminal",
    jp: "犯人を追いかける"
  },
  // 436-1
  {
    word: "accomplish",
    meaning: "〜をやり遂げる",
    sentence: "(   ) this task",
    jp: "この仕事をやり遂げる"
  },
  // 437-1
  {
    word: "overcome",
    meaning: "〜を克服する",
    sentence: "(   ) my shyness",
    jp: "私の内気なところを克服する"
  },
  // 438-1
  {
    word: "fulfill",
    meaning: "果たす",
    sentence: "(   ) a childhood dream",
    jp: "子どものころの夢を果たす"
  },
  // 438-2
  {
    word: "fulfill",
    meaning: "満たす",
    sentence: "(   ) our requirements",
    jp: "私たちの要求を満たす"
  },
  // 439-1
  {
    word: "devote",
    meaning: "〜をささげる",
    sentence: "(   ) my life to helping others",
    jp: "人助けに人生をささげる"
  },
  // 440-1
  {
    word: "strive",
    meaning: "努力する",
    sentence: "(   ) to cut costs",
    jp: "経費削減に努力する"
  },
  // 441-1
  {
    word: "aim",
    meaning: "〜しようとする",
    sentence: "(   ) to finish by Wednesday",
    jp: "水曜日までに終わらせるつもりだ"
  },
  // 441-2
  {
    word: "aimed",
    meaning: "〜向けだ",
    sentence: "This book is (   ) at teenagers.",
    jp: "この本は10代の若者向けです。"
  },
  // 441-3
  {
    word: "aim",
    meaning: "狙い，目的",
    sentence: "the (   ) of this course",
    jp: "この講座の狙い"
  },
  // 442-1
  {
    word: "challenge",
    meaning: "課題，困難なこと",
    sentence: "face a big (   )",
    jp: "大きな課題に直面する"
  },
  // 442-2
  {
    word: "challenge",
    meaning: "〜に異議を唱える",
    sentence: "(   ) the decision",
    jp: "その決定に異議を唱える"
  },
  // 443-1
  {
    word: "trial",
    meaning: "試み，試行",
    sentence: "by (   ) and error",
    jp: "試行錯誤で"
  },
  // 443-2
  {
    word: "trial",
    meaning: "裁判",
    sentence: "stand (   ) for murder",
    jp: "殺人罪で裁判を受ける"
  },
  // 443-3
  {
    word: "trial",
    meaning: "試練",
    sentence: "go through a bitter (   )",
    jp: "苦しい試練を受ける"
  },
  // 444-1
  {
    word: "dizzy",
    meaning: "めまいがして",
    sentence: "I felt (   ) when I stood up.",
    jp: "立ち上がったときにめまいがした。"
  }
],
445: [
  // 445-1
  {
    word: "appetite",
    meaning: "食欲",
    sentence: "have a hearty (   )",
    jp: "食欲が旺盛だ"
  },
  // 446-1
  {
    word: "starving",
    meaning: "飢える",
    sentence: "A lot of people are (   ) to death in Africa.",
    jp: "アフリカでは多くの人が餓死している。"
  },
  // 446-2
  {
    word: "starving",
    meaning: "とてもお腹が空いている",
    sentence: "I'm (   ). What's for dinner?",
    jp: "お腹がぺこぺこだ。夕食は何？"
  },
  // 447-1
  {
    word: "mental",
    meaning: "精神の",
    sentence: "(   ) and physical health",
    jp: "心身の健康"
  },
  // 447-2
  {
    word: "mental",
    meaning: "知的な，頭脳に関わる",
    sentence: "(   ) labor",
    jp: "知的労働"
  },
  // 448-1
  {
    word: "rest",
    meaning: "休憩",
    sentence: "take a (   )",
    jp: "（ちょっと）休憩する"
  },
  // 448-2
  {
    word: "rest",
    meaning: "残り",
    sentence: "the (   ) of the day",
    jp: "その日の残りの時間"
  },
  // 448-3
  {
    word: "rest",
    meaning: "休む",
    sentence: "You need to (   ) for a while.",
    jp: "君はしばらく休む必要がある。"
  },
  // 448-4
  {
    word: "rests",
    meaning: "〜次第だ",
    sentence: "Our success (   ) on his ability.",
    jp: "私たちの成功は彼の能力次第だ。"
  },
  // 448-5
  {
    word: "rest",
    meaning: "〜を休ませる",
    sentence: "(   ) my eyes",
    jp: "目を休ませる"
  },
  // 449-1
  {
    word: "surgery",
    meaning: "手術",
    sentence: "have heart bypass (   )",
    jp: "心臓バイパス手術を受ける"
  },
  // 449-2
  {
    word: "surgery",
    meaning: "外科",
    sentence: "dental (   )",
    jp: "口腔外科"
  },
  // 450-1
  {
    word: "disease",
    meaning: "病気",
    sentence: "the risk of heart (   )",
    jp: "心臓病のリスク"
  },
  // 451-1
  {
    word: "stomachache",
    meaning: "腹痛",
    sentence: "drop out of the race because of a sudden (   )",
    jp: "突然の腹痛でレースを棄権する"
  },
  // 452-1
  {
    word: "symptoms",
    meaning: "症状",
    sentence: "show the (   ) of heatstroke",
    jp: "熱中症の症状が現れる"
  },
  // 452-2
  {
    word: "symptom",
    meaning: "兆候",
    sentence: "a (   ) of social inequality",
    jp: "社会的不平等の兆候"
  },
  // 453-1
  {
    word: "cancer",
    meaning: "がん",
    sentence: "get (   )",
    jp: "がんになる"
  },
  // 453-2
  {
    word: "Cancer",
    meaning: "かに座",
    sentence: "My star sign is (   ).",
    jp: "私の星座はかに座です。"
  },
  // 454-1
  {
    word: "ambulances",
    meaning: "救急車",
    sentence: "fire engines and (   )",
    jp: "消防車と救急車"
  },
  // 455-1
  {
    word: "recover",
    meaning: "回復する",
    sentence: "(   ) from a heart attack",
    jp: "心臓発作から回復する"
  },
  // 455-2
  {
    word: "recover",
    meaning: "取り戻す",
    sentence: "(   ) the paintings stolen from the museum",
    jp: "美術館から盗まれた絵画を取り戻す"
  },
  // 456-1
  {
    word: "sore",
    meaning: "痛い",
    sentence: "I have a (   ) throat from a cold.",
    jp: "かぜでのどが痛い。"
  },
  // 457-1
  {
    word: "swelled",
    meaning: "腫れる",
    sentence: "My eyelids (   ) up.",
    jp: "まぶたが腫れ上がった。"
  },
  // 457-2
  {
    word: "swelling",
    meaning: "膨らむ",
    sentence: "The balloon was (   ) more and more.",
    jp: "その風船はどんどん膨らんでいった。"
  },
  // 458-1
  {
    word: "cough",
    meaning: "咳をする",
    sentence: "(   ) loudly",
    jp: "大きく咳をする"
  },
  // 458-2
  {
    word: "cough",
    meaning: "咳",
    sentence: "I have a bad (   ).",
    jp: "咳がひどい。"
  },
  // 459-1
  {
    word: "bleed",
    meaning: "出血する",
    sentence: "My nose has started to (   ).",
    jp: "鼻血が出てきた。"
  },
  // 460-1
  {
    word: "faint",
    meaning: "かすかな",
    sentence: "(   ) pencil lines",
    jp: "かすかな鉛筆の跡"
  },
  // 460-2
  {
    word: "faint",
    meaning: "気絶する",
    sentence: "(   ) in the extreme heat",
    jp: "猛暑の中で気絶する"
  },
  // 460-3
  {
    word: "faint",
    meaning: "気絶",
    sentence: "fall down in a (   )",
    jp: "気絶して倒れる"
  },
  // 461-1
  {
    word: "exhausted",
    meaning: "〜を疲れ果てさせる",
    sentence: "I am (   ) from walking all day.",
    jp: "1日中歩いてくたくただ。"
  },
  // 461-2
  {
    word: "exhausted",
    meaning: "〜を使い果たす",
    sentence: "I have (   ) my savings.",
    jp: "貯金を使い果たした。"
  },
  // 461-3
  {
    word: "exhaust",
    meaning: "排気ガス",
    sentence: "automobile (   ) fumes",
    jp: "自動車の排気ガス"
  },
  // 462-1
  {
    word: "cure",
    meaning: "〜を治療する",
    sentence: "(   ) you of your disease",
    jp: "あなたの病気を治す"
  },
  // 462-2
  {
    word: "cure",
    meaning: "治療法，治療薬",
    sentence: "a (   ) for a headache",
    jp: "頭痛の治療法"
  },
  // 463-1
  {
    word: "disabled",
    meaning: "障がいのある",
    sentence: "He is physically (   ).",
    jp: "彼は身体に障がいがある。"
  },
  // 463-2
  {
    word: "disabled",
    meaning: "障がい者（たち）",
    sentence: "a toilet for the (   )",
    jp: "障がい者用のトイレ"
  },
  // 464-1
  {
    word: "stiff",
    meaning: "凝った，痛い",
    sentence: "Desk work gives me a (   ) back.",
    jp: "デスクワークで腰が痛い。"
  },
  // 464-2
  {
    word: "stiff",
    meaning: "堅苦しい",
    sentence: "behave in a (   ) manner",
    jp: "堅苦しい感じにふるまう"
  },
  // 465-1
  {
    word: "muscles",
    meaning: "筋肉",
    sentence: "develop my arm (   )",
    jp: "腕の筋肉をつける"
  },
  // 466-1
  {
    word: "tongue",
    meaning: "舌",
    sentence: "stick my (   ) out at him",
    jp: "彼にあかんべえをする。"
  },
  // 466-2
  {
    word: "tongue",
    meaning: "言葉遣い",
    sentence: "Watch your (   ).",
    jp: "言葉遣いに気をつけなさい。"
  },
  // 466-3
  {
    word: "tongue",
    meaning: "口（の悪さ）",
    sentence: "have a sharp (   )",
    jp: "口が悪い"
  },
  // 467-1
  {
    word: "sense",
    meaning: "感覚",
    sentence: "lose my (   ) of time",
    jp: "時間の感覚をなくす"
  },
  // 467-2
  {
    word: "sense",
    meaning: "分別",
    sentence: "common (   )",
    jp: "常識"
  },
  // 467-3
  {
    word: "sense",
    meaning: "意味",
    sentence: "in a broad [narrow] (   )",
    jp: "広い［狭い］意味では"
  },
  // 467-4
  {
    word: "sense",
    meaning: "〜を感じる",
    sentence: "(   ) that something is wrong",
    jp: "何かがおかしいと感じる"
  },
  // 468-1
  {
    word: "sweat",
    meaning: "汗",
    sentence: "wipe the (   ) off my forehead",
    jp: "額の汗をぬぐう"
  },
  // 468-2
  {
    word: "sweat",
    meaning: "汗をかく",
    sentence: "(   ) a lot",
    jp: "汗だくになる（たくさん汗をかく）"
  },
  // 469-1
  {
    word: "gender",
    meaning: "性別",
    sentence: "regardless of age or (   )",
    jp: "年齢，性別とは無関係に"
  },
  // 470-1
  {
    word: "nationality",
    meaning: "国籍",
    sentence: "\"What is your (   )?\" \"I'm Japanese.\"",
    jp: "「あなたの国籍は？」「日本人です」"
  },
  // 471-1
  {
    word: "citizens",
    meaning: "市民",
    sentence: "the population of senior (   )",
    jp: "高齢者人口"
  },
  // 471-2
  {
    word: "citizens",
    meaning: "国民",
    sentence: "British (   ) living in Japan",
    jp: "日本に住むイギリス人"
  },
  // 472-1
  {
    word: "rights",
    meaning: "公民の",
    sentence: "civil (   )",
    jp: "公民権"
  },
  // 472-2
  {
    word: "War",
    meaning: "国内の",
    sentence: "the Civil (   )",
    jp: "アメリカ南北戦争"
  },
  // 472-3
  {
    word: "civil",
    meaning: "礼儀正しい",
    sentence: "She is (   ) but not friendly.",
    jp: "彼女は礼儀正しいが友好的ではない。"
  },
  // 473-1
  {
    word: "discrimination",
    meaning: "人種の",
    sentence: "racial (   )",
    jp: "人種差別"
  },
  // 474-1
  {
    word: "rural",
    meaning: "田舎の",
    sentence: "show an interest in a (   ) lifestyle",
    jp: "田舎暮らしに興味を示す"
  }
],
475: [
  // 475-1
  {
    word: "flight",
    meaning: "国内の",
    sentence: "a domestic (   )",
    jp: "国内線"
  },
  // 475-2
  {
    word: "violence",
    meaning: "家庭内の",
    sentence: "domestic (   ) [DV]",
    jp: "家庭内暴力"
  },
  // 476-1
  {
    word: "global",
    meaning: "全世界的な",
    sentence: "(   ) climate change",
    jp: "世界的な気候変動"
  },
  // 477-1
  {
    word: "suburbs",
    meaning: "郊外",
    sentence: "live in the (   ) of Yokohama City",
    jp: "横浜市の郊外に住む"
  },
  // 478-1
  {
    word: "border",
    meaning: "国境",
    sentence: "cross the (   )",
    jp: "国境を越える"
  },
  // 478-2
  {
    word: "bordered",
    meaning: "〜を縁取る",
    sentence: "The street is (   ) by trees.",
    jp: "その通りは両側に木が植えてある。"
  },
  // 479-1
  {
    word: "burden",
    meaning: "重荷，負担",
    sentence: "take on a financial (   )",
    jp: "財政的な負担を負う"
  },
  // 480-1
  {
    word: "impact",
    meaning: "影響",
    sentence: "have a negative (   ) on the tourist industry",
    jp: "観光業にマイナスの影響を与える"
  },
  // 480-2
  {
    word: "impact",
    meaning: "衝撃",
    sentence: "the (   ) of the explosion",
    jp: "爆発の衝撃"
  },
  // 480-3
  {
    word: "impacted",
    meaning: "影響を与える",
    sentence: "This strategy (   ) on sales.",
    jp: "この戦略が売り上げに影響を与えた。"
  },
  // 481-1
  {
    word: "status",
    meaning: "地位",
    sentence: "women's social (   )",
    jp: "女性の社会的地位"
  },
  // 481-2
  {
    word: "status",
    meaning: "状況",
    sentence: "check the shipment (   )",
    jp: "配送状況を確認する"
  },
  // 482-1
  {
    word: "equal",
    meaning: "等しい",
    sentence: "All human beings are created (   ).",
    jp: "すべての人は平等に作られている。"
  },
  // 482-2
  {
    word: "equals",
    meaning: "〜に等しい",
    sentence: "Two plus three (   ) five.",
    jp: "2 + 3 = 5"
  },
  // 483-1
  {
    word: "relationships",
    meaning: "関係",
    sentence: "have good (   ) with other people",
    jp: "他者との良好な人間関係をもつ"
  },
  // 483-2
  {
    word: "relationship",
    meaning: "親密な関係",
    sentence: "Are you in a (   ) right now?",
    jp: "今付き合っている人はいるの。"
  },
  // 484-1
  {
    word: "reputation",
    meaning: "評判",
    sentence: "have a good (   ) for its beautiful night view",
    jp: "夜景がきれいなことで評判がよい"
  },
  // 485-1
  {
    word: "trend",
    meaning: "風潮",
    sentence: "a (   ) toward hiring cheap labor",
    jp: "安価な労働者を雇う風潮"
  },
  // 485-2
  {
    word: "trend",
    meaning: "流行",
    sentence: "the latest (   ) in clothes",
    jp: "服の最新の流行"
  },
  // 486-1
  {
    word: "services",
    meaning: "事業",
    sentence: "public (   )",
    jp: "公共事業"
  },
  // 486-2
  {
    word: "service",
    meaning: "事業",
    sentence: "water [gas] (   )",
    jp: "水道［ガス］事業"
  },
  // 486-3
  {
    word: "service",
    meaning: "便",
    sentence: "There is no bus (   ) to that town.",
    jp: "その町へのバスの便はない。"
  },
  // 486-4
  {
    word: "service",
    meaning: "サービス，接客",
    sentence: "This restaurant has a (   ) for good service.",
    jp: "このレストランはサービスがよいと評判だ。"
  },
  // 487-1
  {
    word: "religion",
    meaning: "宗教",
    sentence: "have a (   )",
    jp: "宗教を信じている"
  },
  // 488-1
  {
    word: "moral",
    meaning: "道徳的な",
    sentence: "a (   ) responsibility",
    jp: "道徳的責任"
  },
  // 488-2
  {
    word: "morals",
    meaning: "教訓",
    sentence: "the (   ) of Aesop's Fables",
    jp: "イソップ物語の教訓"
  },
  // 488-3
  {
    word: "morals",
    meaning: "道徳，風紀",
    sentence: "public (   )",
    jp: "風紀"
  },
  // 489-1
  {
    word: "standards",
    meaning: "基準",
    sentence: "meet our safety (   )",
    jp: "私たちの安全基準を満たす"
  },
  // 489-2
  {
    word: "standard",
    meaning: "標準の",
    sentence: "a (   ) size",
    jp: "標準サイズ"
  },
  // 490-1
  {
    word: "prosperity",
    meaning: "繁栄",
    sentence: "bring (   ) to our country",
    jp: "我が国に繁栄をもたらす"
  },
  // 491-1
  {
    word: "crisis",
    meaning: "危機",
    sentence: "face a serious economic (   )",
    jp: "深刻な経済危機に直面する"
  },
  // 492-1
  {
    word: "prejudice",
    meaning: "偏見",
    sentence: "end racial (   )",
    jp: "人種的偏見を終わらせる"
  },
  // 492-2
  {
    word: "prejudiced",
    meaning: "〜に偏見をもたせる",
    sentence: "Don't be (   ) against Muslims.",
    jp: "イスラム教徒に対して偏見をもつな。"
  },
  // 493-1
  {
    word: "discrimination",
    meaning: "差別",
    sentence: "fight racial (   )",
    jp: "人種差別と戦う"
  },
  // 493-2
  {
    word: "Discrimination",
    meaning: "識別",
    sentence: "(   ) between L sounds and R sounds is difficult.",
    jp: "LとRの音の識別は難しい。"
  },
  // 494-1
  {
    word: "charity",
    meaning: "慈善（活動）",
    sentence: "do a lot of work for (   )",
    jp: "多くの慈善活動を行う"
  },
  // 494-2
  {
    word: "charities",
    meaning: "慈善団体",
    sentence: "give money to several (different) (   )",
    jp: "いくつかの慈善団体に金を寄付する"
  },
  // 494-3
  {
    word: "charity",
    meaning: "チャリティーの",
    sentence: "hold a (   ) concert",
    jp: "チャリティーコンサートを開く"
  },
  // 495-1
  {
    word: "benefits",
    meaning: "恩恵",
    sentence: "Tourism has brought great (   ) to this village.",
    jp: "観光がこの村に多大な恩恵をもたらした。"
  },
  // 495-2
  {
    word: "benefits",
    meaning: "手当",
    sentence: "salary and other (   )",
    jp: "給与とほかの諸手当"
  },
  // 495-3
  {
    word: "benefit",
    meaning: "恩恵を得る",
    sentence: "(   ) from the new treatment",
    jp: "新しい治療法から恩恵を受ける"
  },
  // 495-4
  {
    word: "benefit",
    meaning: "恩恵を与える",
    sentence: "The fresh air will (   ) you.",
    jp: "新鮮な空気はあなたによいでしょう。"
  },
  // 496-1
  {
    word: "welfare",
    meaning: "福祉",
    sentence: "work for social (   )",
    jp: "社会福祉のために働く"
  },
  // 496-2
  {
    word: "welfare",
    meaning: "幸福",
    sentence: "Parents are always concerned about their children's (   ).",
    jp: "親は常に子どもの幸福を気に掛けている。"
  },
  // 496-3
  {
    word: "welfare",
    meaning: "生活保護",
    sentence: "(   ) benefits",
    jp: "生活保護受給金"
  },
  // 497-1
  {
    word: "community",
    meaning: "社会，共同体",
    sentence: "the Polish (   ) in the U.K.",
    jp: "イギリスのポーランド人社会"
  },
  // 498-1
  {
    word: "individual",
    meaning: "個人",
    sentence: "each (   )'s right to privacy",
    jp: "各個人のプライバシーの権利"
  },
  // 498-2
  {
    word: "individual",
    meaning: "個人の",
    sentence: "(   ) action",
    jp: "個人行動"
  },
  // 499-1
  {
    word: "official",
    meaning: "役人",
    sentence: "a government (   )",
    jp: "政府の役人"
  },
  // 499-2
  {
    word: "official",
    meaning: "公式の",
    sentence: "an (   ) language",
    jp: "公用語"
  },
  // 500-1
  {
    word: "immigrants",
    meaning: "移民",
    sentence: "(   ) from India",
    jp: "インドからの移民"
  },
  // 501-1
  {
    word: "volunteer",
    meaning: "ボランティア",
    sentence: "take part in (   ) activities",
    jp: "ボランティア活動に参加する"
  },
  // 501-2
  {
    word: "volunteer",
    meaning: "自発的に申し出る",
    sentence: "(   ) to do the dishes",
    jp: "皿洗いを自発的に申し出る"
  },
  // 502-1
  {
    word: "interact",
    meaning: "交流する",
    sentence: "(   ) well with other students",
    jp: "ほかの生徒とうまく付き合う"
  },
  // 503-1
  {
    word: "contribute",
    meaning: "貢献する",
    sentence: "(   ) to world peace",
    jp: "世界平和に貢献する"
  },
  // 503-2
  {
    word: "contribute",
    meaning: "一因となる",
    sentence: "(   ) to global warming",
    jp: "地球温暖化の一因である"
  },
  // 503-3
  {
    word: "contribute",
    meaning: "寄付する",
    sentence: "(   ) a great deal of money to the church",
    jp: "教会に多額の寄付をする"
  },
  // 504-1
  {
    word: "abolish",
    meaning: "〜を廃止する",
    sentence: "(   ) capital punishment",
    jp: "死刑制度を廃止する"
  }
],
505: [
  // 505-1
  {
    word: "impose",
    meaning: "〜を課す",
    sentence: "The government should (   ) a total ban on cigarette advertising.",
    jp: "政府はタバコの広告を全面的に禁止すべきだ。"
  },
  // 506-1
  {
    word: "access",
    meaning: "利用する権利",
    sentence: "have free (   ) to a computer",
    jp: "コンピュータを自由に利用できる。"
  },
  // 506-2
  {
    word: "access",
    meaning: "接近方法",
    sentence: "(   ) to the restrooms",
    jp: "トイレへの行き方"
  },
  // 507-1
  {
    word: "duties",
    meaning: "義務",
    sentence: "fulfill my (   )",
    jp: "義務を果たす"
  },
  // 507-2
  {
    word: "duty",
    meaning: "関税",
    sentence: "a 6 percent (   ) on imports",
    jp: "輸入品に対する6%の関税"
  },
  // 508-1
  {
    word: "responsible",
    meaning: "責任がある",
    sentence: "I am (   ) for what happens at school.",
    jp: "私は学校で起きることに対して責任がある。"
  },
  // 508-2
  {
    word: "responsible",
    meaning: "原因となっている",
    sentence: "The typhoon was (   ) for over 100 deaths.",
    jp: "その台風のため100人以上の人が犠牲になった。"
  },
  // 509-1
  {
    word: "policy",
    meaning: "政策",
    sentence: "China's one-child (   )",
    jp: "中国の一人っ子政策"
  },
  // 509-2
  {
    word: "policy",
    meaning: "方針，ポリシー",
    sentence: "It is my (   ) not to say bad things about others.",
    jp: "他人の悪口を言わないというのが私のポリシーだ。"
  },
  // 509-3
  {
    word: "policy",
    meaning: "保険契約",
    sentence: "renew an insurance (   )",
    jp: "保険契約を更新する"
  },
  // 510-1
  {
    word: "elected",
    meaning: "〜を選挙で選ぶ",
    sentence: "I was (   ) a class representative.",
    jp: "私はクラス委員に選ばれた。"
  },
  // 511-1
  {
    word: "industry",
    meaning: "業界",
    sentence: "commerce and (   )",
    jp: "商工業"
  },
  // 511-2
  {
    word: "industry",
    meaning: "産業",
    sentence: "the fashion (   )",
    jp: "ファッション業界"
  },
  // 511-3
  {
    word: "Industry",
    meaning: "勤勉",
    sentence: "(   ) is the mother of success.",
    jp: "勤勉は成功の母だ。"
  },
  // 512-1
  {
    word: "income",
    meaning: "収入",
    sentence: "my monthly (   )",
    jp: "私の月収"
  },
  // 513-1
  {
    word: "profit",
    meaning: "利益，利潤",
    sentence: "The restaurant's daily (   ) is about $1,000.",
    jp: "そのレストランの1日の利益はおよそ1,000ドルだ。"
  },
  // 514-1
  {
    word: "taxes",
    meaning: "税金",
    sentence: "pay (   ) on my income",
    jp: "収入に課された税金を払う"
  },
  // 515-1
  {
    word: "expenses",
    meaning: "費用",
    sentence: "This money will cover all your (   ).",
    jp: "このお金があなたのすべての費用をまかなうだろう。"
  },
  // 515-2
  {
    word: "expense",
    meaning: "犠牲",
    sentence: "at the (   ) of my health",
    jp: "健康を犠牲にして"
  },
  // 516-1
  {
    word: "debt",
    meaning: "借金",
    sentence: "pay back a (   ) of 100 dollars",
    jp: "100ドルの借金を返す"
  },
  // 517-1
  {
    word: "deposit",
    meaning: "預金",
    sentence: "have a large (   ) in the bank",
    jp: "銀行に多額の預金がある"
  },
  // 517-2
  {
    word: "deposit",
    meaning: "手付金",
    sentence: "pay a (   ) on a house",
    jp: "家の手付金を払う"
  },
  // 517-3
  {
    word: "deposit",
    meaning: "堆積物",
    sentence: "a rich (   ) of oil",
    jp: "豊富な石油の埋蔵量"
  },
  // 517-4
  {
    word: "deposit",
    meaning: "預ける",
    sentence: "(   ) ¥10,000 in a bank",
    jp: "銀行口座に10,000円を預金する"
  },
  // 518-1
  {
    word: "charge",
    meaning: "料金",
    sentence: "Goods are delivered free of (   ).",
    jp: "商品は無料でお届けします。"
  },
  // 518-2
  {
    word: "charge",
    meaning: "責任",
    sentence: "Who is in (   ) of this shop?",
    jp: "この店の責任者はどなたですか。"
  },
  // 518-3
  {
    word: "charge",
    meaning: "非難，告発",
    sentence: "a (   ) against the company",
    jp: "会社に対する告発"
  },
  // 518-4
  {
    word: "charge",
    meaning: "〜を請求する",
    sentence: "(   ) 5,000 yen for a half-hour class",
    jp: "30分の授業で5,000円を請求する"
  },
  // 518-5
  {
    word: "charged",
    meaning: "告訴する",
    sentence: "be (   ) with accepting bribes",
    jp: "賄賂を受け取ったとして告発される"
  },
  // 518-6
  {
    word: "charge",
    meaning: "充電する",
    sentence: "(   ) my smartphone",
    jp: "スマートフォンを充電する"
  },
  // 519-1
  {
    word: "wage",
    meaning: "賃金",
    sentence: "get a daily (   ) of $100",
    jp: "日給100ドルを得る"
  },
  // 520-1
  {
    word: "recession",
    meaning: "不況",
    sentence: "close down my inn because of the continuing (   )",
    jp: "長引く不況のため旅館を閉める。"
  },
  // 521-1
  {
    word: "consume",
    meaning: "〜を消費する",
    sentence: "(   ) a large amount of electricity",
    jp: "大量の電気を消費する。"
  },
  // 522-1
  {
    word: "waste",
    meaning: "〜を浪費する",
    sentence: "Don't (   ) so much time on video games.",
    jp: "テレビゲームにそんなに多くの時間を費やしてはいけません。"
  },
  // 522-2
  {
    word: "waste",
    meaning: "無駄",
    sentence: "It is a (   ) of time and money.",
    jp: "それは時間と金の無駄だ。"
  },
  // 522-3
  {
    word: "waste",
    meaning: "廃棄物",
    sentence: "industrial (   )",
    jp: "産業廃棄物"
  },
  // 523-1
  {
    word: "invest",
    meaning: "投資する",
    sentence: "(   ) one million yen in stocks",
    jp: "株に100万円を投資する。"
  },
  // 523-2
  {
    word: "invested",
    meaning: "与える",
    sentence: "He is (   ) with absolute authority.",
    jp: "彼に絶対的権限が与えられている。"
  },
  // 524-1
  {
    word: "import",
    meaning: "〜を輸入する",
    sentence: "(   ) beef from the U.S.",
    jp: "アメリカから牛肉を輸入する。"
  },
  // 524-2
  {
    word: "Imports",
    meaning: "輸入",
    sentence: "(   ) slightly exceeded exports.",
    jp: "輸入が輸出を少し上回った。"
  }
],
525: [
  // 525-1
  {
    word: "financial",
    meaning: "財政的な",
    sentence: "receive (   ) support",
    jp: "経済的支援を受ける。"
  },
  // 526-1
  {
    word: "hire",
    meaning: "〜を雇う",
    sentence: "(   ) movers to do all the work",
    jp: "引越し業者を雇って全部任せる。"
  },
  // 526-2
  {
    word: "hire",
    meaning: "借りる",
    sentence: "(   ) a car",
    jp: "車を借りる。"
  },
  // 527-1
  {
    word: "employ",
    meaning: "雇う",
    sentence: "(   ) minors",
    jp: "未成年者を雇う。"
  },
  // 527-2
  {
    word: "employ",
    meaning: "用いる",
    sentence: "(   ) new technology",
    jp: "新しい技術を用いる。"
  },
  // 528-1
  {
    word: "resign",
    meaning: "辞職する",
    sentence: "(   ) as a coach",
    jp: "コーチを辞める。"
  },
  // 528-2
  {
    word: "resign",
    meaning: "辞める",
    sentence: "(   ) my post",
    jp: "ポストを辞める。"
  },
  // 529-1
  {
    word: "qualify",
    meaning: "資格がある",
    sentence: "(   ) for bank loans",
    jp: "銀行ローンを受ける資格がある。"
  },
  // 529-2
  {
    word: "qualify",
    meaning: "資格を得る",
    sentence: "(   ) as a teacher",
    jp: "教師としての資格を得る。"
  },
  // 529-3
  {
    word: "qualifying",
    meaning: "資格を与える",
    sentence: "World Cup (   ) game",
    jp: "ワールドカップの予選。"
  },
  // 530-1
  {
    word: "assign",
    meaning: "割り当てる",
    sentence: "(   ) that important job to him",
    jp: "彼にその大切な仕事を割り当てる。"
  },
  // 530-2
  {
    word: "assigned",
    meaning: "配属する",
    sentence: "be (   ) to the head office",
    jp: "本社に配属される。"
  },
  // 531-1
  {
    word: "occupation",
    meaning: "職業",
    sentence: "my name, address, and (   )",
    jp: "氏名，住所，職業。"
  },
  // 531-2
  {
    word: "occupation",
    meaning: "占領",
    sentence: "be under (   )",
    jp: "占領下にある。"
  },
  // 532-1
  {
    word: "career",
    meaning: "職業",
    sentence: "start a (   ) as a doctor",
    jp: "医者として働き始める。"
  },
  // 532-2
  {
    word: "career",
    meaning: "経歴",
    sentence: "during her long (   ) as a teacher",
    jp: "彼女の長い教員生活の間に。"
  },
  // 533-1
  {
    word: "profession",
    meaning: "職業",
    sentence: "enter the legal (   )",
    jp: "法律関係の仕事に就く。"
  },
  // 533-2
  {
    word: "profession",
    meaning: "同業者集団",
    sentence: "the medical (   )",
    jp: "医療従事者。"
  },
  // 534-1
  {
    word: "Unemployment",
    meaning: "失業",
    sentence: "(   ) has fallen.",
    jp: "失業率が下がった。"
  },
  // 535-1
  {
    word: "documents",
    meaning: "書類，資料",
    sentence: "look over the (   )",
    jp: "資料に目を通す。"
  },
  // 535-2
  {
    word: "document",
    meaning: "記録する",
    sentence: "(   ) how this event happened",
    jp: "この出来事がどのように起きたかを記録する。"
  },
  // 536-1
  {
    word: "department",
    meaning: "部門，売り場",
    sentence: "the toy (   )",
    jp: "おもちゃ売り場。"
  },
  // 536-2
  {
    word: "department",
    meaning: "学科",
    sentence: "the English (   )",
    jp: "英語学科。"
  },
  // 536-3
  {
    word: "Department",
    meaning: "省",
    sentence: "the U.S. State (   )",
    jp: "米国国務省。"
  },
  // 537-1
  {
    word: "branch",
    meaning: "支店",
    sentence: "a (   ) of this bank",
    jp: "この銀行の支店。"
  },
  // 537-2
  {
    word: "branch",
    meaning: "分野",
    sentence: "a (   ) of biology",
    jp: "生物学の一部門。"
  },
  // 537-3
  {
    word: "branches",
    meaning: "枝",
    sentence: "Don't break (   ) off the trees.",
    jp: "木の枝を折ってはいけません。"
  },
  // 538-1
  {
    word: "retail",
    meaning: "小売り",
    sentence: "recommended (   ) price",
    jp: "希望小売価格。"
  },
  // 538-2
  {
    word: "retails",
    meaning: "小売りされている",
    sentence: "The vinegar (   ) at 1,000 yen a bottle.",
    jp: "その酢の小売価格は1本千円だ。"
  },
  // 539-1
  {
    word: "colleague",
    meaning: "同僚",
    sentence: "a (   ) from work",
    jp: "会社の同僚。"
  },
  // 540-1
  {
    word: "system",
    meaning: "制度",
    sentence: "the tax (   )",
    jp: "税制。"
  },
  // 540-2
  {
    word: "system",
    meaning: "体系",
    sentence: "the solar (   )",
    jp: "太陽系。"
  },
  // 541-1
  {
    word: "structure",
    meaning: "構造，建築物",
    sentence: "a wooden (   )",
    jp: "木造建築物。"
  },
  // 542-1
  {
    word: "architecture",
    meaning: "建築様式",
    sentence: "study (   )",
    jp: "建築様式を勉強する。"
  },
  // 543-1
  {
    word: "construction",
    meaning: "建設",
    sentence: "The new city hall is under (   ).",
    jp: "新しい市役所が建設中です。"
  },
  // 544-1
  {
    word: "functions",
    meaning: "機能",
    sentence: "bodily (   )",
    jp: "身体の機能。"
  },
  // 544-2
  {
    word: "functioning",
    meaning: "機能する",
    sentence: "His heart is (   ) normally.",
    jp: "彼の心臓は正常に機能している。"
  }
],
545: [
  // 545-1
  {
    word: "surface",
    meaning: "表面",
    sentence: "the (   ) of the moon",
    jp: "月面。"
  },
  // 545-2
  {
    word: "surfaced",
    meaning: "表面化する",
    sentence: "The rumor (   ) in the press.",
    jp: "そのうわさがメディアで表面化した。"
  },
  // 546-1
  {
    word: "aspects",
    meaning: "側面",
    sentence: "learn about various (   ) of Japanese culture",
    jp: "さまざまな日本文化の側面を学ぶ。"
  },
  // 547-1
  {
    word: "edge",
    meaning: "端",
    sentence: "sit on the (   ) of the bed",
    jp: "ベッドの端に座る。"
  },
  // 547-2
  {
    word: "edge",
    meaning: "刃",
    sentence: "This knife has a sharp (   ).",
    jp: "このナイフはよく切れる。"
  },
  // 547-3
  {
    word: "edge",
    meaning: "優位",
    sentence: "have the (   ) over my rival",
    jp: "競争相手より優位である。"
  },
  // 548-1
  {
    word: "makeup",
    meaning: "構成",
    sentence: "the (   ) of the team",
    jp: "そのチームの構成。"
  },
  // 548-2
  {
    word: "makeup",
    meaning: "資質",
    sentence: "the unique (   ) of each person",
    jp: "1人1人の独自の資質。"
  },
  // 548-3
  {
    word: "makeup",
    meaning: "化粧",
    sentence: "wear heavy (   )",
    jp: "厚化粧をしている。"
  },
  // 548-4
  {
    word: "makeup",
    meaning: "追試験",
    sentence: "take a (   ) exam in Latin",
    jp: "ラテン語の追試験を受ける。"
  },
  // 549-1
  {
    word: "consisted",
    meaning: "〜で構成されている",
    sentence: "The audience (   ) mainly of young people.",
    jp: "観客は大半が若者だった。"
  },
  // 549-2
  {
    word: "consists",
    meaning: "〜にある",
    sentence: "Happiness (   ) in contentment.",
    jp: "幸福の本質は満足にある。"
  },
  // 550-1
  {
    word: "composed",
    meaning: "構成する",
    sentence: "Water is (   ) of hydrogen and oxygen.",
    jp: "水は水素と酸素から構成される。"
  },
  // 550-2
  {
    word: "compose",
    meaning: "作曲する，詠む",
    sentence: "(   ) a haiku",
    jp: "俳句を詠む。"
  },
  // 550-3
  {
    word: "composed",
    meaning: "落ち着いている",
    sentence: "remain perfectly (   )",
    jp: "落ち着き払う。"
  },
  // 551-1
  {
    word: "attach",
    meaning: "添付する",
    sentence: "(   ) a file to an email",
    jp: "Eメールにファイルを添付する。"
  },
  // 551-2
  {
    word: "attached",
    meaning: "愛着を持たせる",
    sentence: "feel (   ) to this jacket",
    jp: "この上着に愛着を感じる。"
  },
  // 552-1
  {
    word: "connect",
    meaning: "つなげる",
    sentence: "(   ) the printer to my PC",
    jp: "パソコンにプリンターを接続する。"
  },
  // 552-2
  {
    word: "connected",
    meaning: "関連づける",
    sentence: "Exercise is closely (   ) with your health.",
    jp: "運動は健康に密接に関わっている。"
  },
  // 552-3
  {
    word: "connect",
    meaning: "つながる",
    sentence: "(   ) to the internet",
    jp: "インターネットに接続する。"
  },
  // 553-1
  {
    word: "related",
    meaning: "関連づける",
    sentence: "These two events are closely (   ).",
    jp: "これら2つの出来事は密接に関連している。"
  },
  // 553-2
  {
    word: "relate",
    meaning: "話す",
    sentence: "(   ) my adventures",
    jp: "冒険談を語る。"
  },
  // 553-3
  {
    word: "relate",
    meaning: "共感する",
    sentence: "cannot (   ) to his way of thinking",
    jp: "彼の考え方が理解できない。"
  },
  // 554-1
  {
    word: "thief",
    meaning: "泥棒",
    sentence: "A (   ) broke into the building.",
    jp: "泥棒がその建物に侵入した。"
  },
  // 555-1
  {
    word: "stick",
    meaning: "貼り付ける",
    sentence: "(   ) posters on the wall",
    jp: "壁にポスターを貼る。"
  },
  // 555-2
  {
    word: "stick",
    meaning: "突き出す",
    sentence: "(   ) my head out of the window",
    jp: "窓から顔を突き出す。"
  },
  // 555-3
  {
    word: "stick",
    meaning: "主義などを守る",
    sentence: "(   ) to my principles",
    jp: "自分の主義を守る。"
  },
  // 556-1
  {
    word: "crime",
    meaning: "犯罪",
    sentence: "combat (   )",
    jp: "犯罪と戦う。"
  },
  // 557-1
  {
    word: "motive",
    meaning: "動機",
    sentence: "his (   ) for the crime",
    jp: "彼の犯行の動機。"
  },
  // 558-1
  {
    word: "punish",
    meaning: "〜を罰する",
    sentence: "severely (   ) him for breaking the rules",
    jp: "規則を破ったことに対して彼を厳しく罰する。"
  },
  // 559-1
  {
    word: "violate",
    meaning: "違反する",
    sentence: "(   ) international law",
    jp: "国際法を破る。"
  },
  // 559-2
  {
    word: "violate",
    meaning: "侵害する",
    sentence: "(   ) human rights",
    jp: "人権を侵害する。"
  },
  // 560-1
  {
    word: "legal",
    meaning: "合法の",
    sentence: "In Japan, the current (   ) drinking age is 20.",
    jp: "日本では，現在，飲酒が許されているのは20歳からだ。"
  },
  // 560-2
  {
    word: "legal",
    meaning: "法律の",
    sentence: "seek (   ) advice",
    jp: "法的助言を求める。"
  },
  // 561-1
  {
    word: "associate",
    meaning: "関連づける",
    sentence: "(   ) brand names with high quality",
    jp: "ブランド名から高品質を連想する。"
  },
  // 561-2
  {
    word: "associate",
    meaning: "付き合う",
    sentence: "Don't (   ) with shady people.",
    jp: "怪しいやつらと付き合うな。"
  },
  // 561-3
  {
    word: "associates",
    meaning: "同僚，共同経営者",
    sentence: "work with my (   ) till nine",
    jp: "9時まで同僚と働く。"
  },
  // 562-1
  {
    word: "enemy",
    meaning: "敵",
    sentence: "fight with the (   )",
    jp: "その敵と戦う。"
  },
  // 562-2
  {
    word: "enemy",
    meaning: "敵の",
    sentence: "(   ) soldiers",
    jp: "敵の兵士。"
  },
  // 563-1
  {
    word: "conflict",
    meaning: "対立，紛争",
    sentence: "a (   ) between two parties",
    jp: "2つの政党間の対立。"
  },
  // 563-2
  {
    word: "conflict",
    meaning: "葛藤",
    sentence: "a psychological (   )",
    jp: "心の葛藤。"
  },
  // 563-3
  {
    word: "conflicts",
    meaning: "矛盾する",
    sentence: "This (   ) with his theory.",
    jp: "これは彼の理論と矛盾する。"
  },
  // 564-1
  {
    word: "compete",
    meaning: "競争する",
    sentence: "(   ) with each other for good grades",
    jp: "よい成績を目指してお互いに競い合う。"
  },
  // 564-2
  {
    word: "compete",
    meaning: "参加する",
    sentence: "(   ) in a half marathon",
    jp: "ハーフマラソンに参加する。"
  }
],
565: [
  // 565-1
  {
    word: "defeated",
    meaning: "打ち負かす",
    sentence: "Our team was completely (   ).",
    jp: "私たちのチームは完敗した。"
  },
  // 565-2
  {
    word: "defeat",
    meaning: "敗北",
    sentence: "Japan's (   ) in World War II",
    jp: "第二次世界大戦における日本の敗北。"
  },
  // 566-1
  {
    word: "victim",
    meaning: "犠牲者，被害者",
    sentence: "Over 30 people fell (   ) to the terrorist attack.",
    jp: "30人以上の人がそのテロの犠牲になった。"
  },
  // 567-1
  {
    word: "obstacle",
    meaning: "障害",
    sentence: "remove an (   ) to an agreement",
    jp: "合意への障害を取り除く。"
  },
  // 568-1
  {
    word: "harm",
    meaning: "害を及ぼす",
    sentence: "Smoking does you (   ).",
    jp: "喫煙は害を及ぼす。"
  },
  // 568-2
  {
    word: "harm",
    meaning: "害",
    sentence: "(   ) his reputation",
    jp: "彼の評判を悪くする。"
  },
  // 569-1
  {
    word: "invade",
    meaning: "侵害する",
    sentence: "(   ) our privacy",
    jp: "私たちのプライバシーを侵害する。"
  },
  // 569-2
  {
    word: "invade",
    meaning: "侵略する",
    sentence: "(   ) a neighboring country",
    jp: "隣接する国に侵略する。"
  },
  // 570-1
  {
    word: "endanger",
    meaning: "危険にさらす",
    sentence: "(   ) the lives of the passengers",
    jp: "乗客の命を危険にさらす。"
  },
  // 571-1
  {
    word: "interrupted",
    meaning: "中断する",
    sentence: "The meeting was temporarily (   ) by a blackout.",
    jp: "停電のため会議は一時中断した。"
  },
  // 571-2
  {
    word: "interrupt",
    meaning: "遮る",
    sentence: "(   ) a speech with questions",
    jp: "質問して講演を遮る。"
  },
  // 571-3
  {
    word: "interrupt",
    meaning: "話を遮る",
    sentence: "Don't (   ).",
    jp: "話を遮らないでください。"
  },
  // 572-1
  {
    word: "spoiled",
    meaning: "台無しにする",
    sentence: "Ben's sudden arrival (   ) our plans.",
    jp: "ベンが突然来たので私たちの計画が台無しになった。"
  },
  // 572-2
  {
    word: "spoil",
    meaning: "甘やかす",
    sentence: "(   ) the child",
    jp: "子どもを甘やかす。"
  },
  // 573-1
  {
    word: "spectators",
    meaning: "観客",
    sentence: "The football match attracted more than 10,000 (   ).",
    jp: "そのサッカーの試合には1万人以上の観客が押し寄せた。"
  },
  // 574-1
  {
    word: "relatives",
    meaning: "親戚",
    sentence: "one of my (   )",
    jp: "親戚の1人。"
  },
  // 574-2
  {
    word: "relative",
    meaning: "相対的な",
    sentence: "(   ) merits",
    jp: "相対的な利点。"
  },
  // 575-1
  {
    word: "departure",
    meaning: "出発",
    sentence: "the flight's (   )",
    jp: "飛行機の出発。"
  },
  // 575-2
  {
    word: "departure",
    meaning: "逸脱",
    sentence: "a (   ) from the norm",
    jp: "常識を逸脱したもの。"
  },
  // 576-1
  {
    word: "destination",
    meaning: "目的地",
    sentence: "get to my (   )",
    jp: "目的地に到着する。"
  },
  // 577-1
  {
    word: "transportation",
    meaning: "公共交通機関",
    sentence: "by public (   )",
    jp: "公共交通機関で。"
  },
  // 578-1
  {
    word: "vehicles",
    meaning: "車両",
    sentence: "emergency (   )",
    jp: "緊急車両。"
  },
  // 578-2
  {
    word: "vehicle",
    meaning: "伝達手段",
    sentence: "Poetry is the (   ) of my ideas.",
    jp: "詩は私の思想を伝達する手段です。"
  },
  // 579-1
  {
    word: "baggage",
    meaning: "手荷物",
    sentence: "How many pieces of (   ) can I take on the airplane with me?",
    jp: "機内へは手荷物は何個まで持ち込むことができますか。"
  },
  // 580-1
  {
    word: "via",
    meaning: "経由で",
    sentence: "fly to Zurich (   ) Hong Kong",
    jp: "香港経由でチューリッヒに飛ぶ。"
  },
  // 580-2
  {
    word: "via",
    meaning: "によって",
    sentence: "send a message to a friend (   ) email",
    jp: "Eメールで友だちにメッセージを送る。"
  },
  // 581-1
  {
    word: "leads",
    meaning: "至る",
    sentence: "Laziness (   ) to failure.",
    jp: "怠けることは失敗に至る。"
  },
  // 581-2
  {
    word: "lead",
    meaning: "生活を送る",
    sentence: "(   ) an easy life",
    jp: "楽な生活を送る。"
  },
  // 581-3
  {
    word: "led",
    meaning: "〜させる",
    sentence: "What (   ) you to do it?",
    jp: "なぜそんなことをしたの。"
  },
  // 581-4
  {
    word: "lead",
    meaning: "鉛",
    sentence: "The pencil (   ) has broken.",
    jp: "鉛筆の芯が折れた。"
  },
  // 582-1
  {
    word: "rises",
    meaning: "上がる",
    sentence: "The sun (   ) in the east.",
    jp: "太陽は東から昇る。"
  },
  // 582-2
  {
    word: "rise",
    meaning: "上昇",
    sentence: "a (   ) in sea levels",
    jp: "海面の上昇。"
  },
  // 583-1
  {
    word: "flows",
    meaning: "流れる",
    sentence: "This river (   ) into the Pacific.",
    jp: "この川は太平洋に流れ込む。"
  },
  // 583-2
  {
    word: "flow",
    meaning: "流れ",
    sentence: "the (   ) of conversation",
    jp: "会話の流れ。"
  },
  // 584-1
  {
    word: "burst",
    meaning: "はじける",
    sentence: "Japan's economic bubble (   ) in the 1990s.",
    jp: "日本のバブル経済は1990年代にはじけた。"
  },
  // 584-2
  {
    word: "burst",
    meaning: "突然〜し始める",
    sentence: "She (   ) out crying.",
    jp: "彼女は突然泣き始めた。"
  }
],
585: [
  // 585-1
  {
    word: "melted",
    meaning: "溶ける",
    sentence: "The ice cream quickly (   ).",
    jp: "アイスクリームがすぐに溶けてしまった。"
  },
  // 585-2
  {
    word: "melt",
    meaning: "〜を溶かす",
    sentence: "(   ) the butter",
    jp: "バターを溶かす。"
  },
  // 586-1
  {
    word: "commute",
    meaning: "通勤する",
    sentence: "I (   ) to work by train.",
    jp: "電車を使って通勤する。"
  },
  // 586-2
  {
    word: "commute",
    meaning: "通勤",
    sentence: "My (   ) takes around one hour.",
    jp: "通勤には1時間くらいかかります。"
  },
  // 587-1
  {
    word: "accompany",
    meaning: "同行する",
    sentence: "(   ) my boss to Germany",
    jp: "上司に同行してドイツに行く。"
  },
  // 587-2
  {
    word: "accompanied",
    meaning: "伴う",
    sentence: "A cold is often (   ) by a fever.",
    jp: "かぜはしばしば熱を伴う。"
  },
  // 588-1
  {
    word: "emit",
    meaning: "排出する",
    sentence: "(   ) greenhouse gas",
    jp: "温室効果ガスを排出する。"
  },
  // 589-1
  {
    word: "progress",
    meaning: "進歩",
    sentence: "make great (   ) in English",
    jp: "英語が格段に上達する。"
  },
  // 589-2
  {
    word: "progressed",
    meaning: "進む",
    sentence: "As the meeting (   ), I grew more and more tired.",
    jp: "会議が進むにつれて，ますます疲れた。"
  },
  // 590-1
  {
    word: "advances",
    meaning: "進歩",
    sentence: "(   ) in technology",
    jp: "科学技術の進歩。"
  },
  // 590-2
  {
    word: "advanced",
    meaning: "前進する",
    sentence: "The team (   ) to the final.",
    jp: "チームは決勝戦に進んだ。"
  },
  // 590-3
  {
    word: "advance",
    meaning: "事前の",
    sentence: "an (   ) ticket",
    jp: "前売り券。"
  },
  // 591-1
  {
    word: "deal",
    meaning: "扱う",
    sentence: "(   ) with the drunk well",
    jp: "酔っ払いをうまく扱う。"
  },
  // 591-2
  {
    word: "deal",
    meaning: "取引",
    sentence: "make a (   ) with the kidnapper",
    jp: "その誘拐犯と取引する。"
  },
  // 592-1
  {
    word: "handle",
    meaning: "対処する",
    sentence: "(   ) stress well",
    jp: "ストレスにうまく対処する。"
  },
  // 592-2
  {
    word: "handle",
    meaning: "手を触れる",
    sentence: "Please do not (   ) the exhibits.",
    jp: "展示品に手を触れないでください。"
  },
  // 592-3
  {
    word: "handle",
    meaning: "取っ手",
    sentence: "the (   ) of a mug",
    jp: "マグカップの取っ手。"
  },
  // 593-1
  {
    word: "treat",
    meaning: "扱う",
    sentence: "(   ) children fairly",
    jp: "公平に子どもを扱う。"
  },
  // 593-2
  {
    word: "treat",
    meaning: "治療する",
    sentence: "(   ) patients",
    jp: "患者を治療する。"
  },
  // 593-3
  {
    word: "treat",
    meaning: "ご馳走する",
    sentence: "Let me (   ) you to dinner tonight.",
    jp: "今夜の食事は私におごらせてください。"
  },
  // 593-4
  {
    word: "treat",
    meaning: "楽しみ",
    sentence: "The trip was a real (   ).",
    jp: "その旅行は本当に楽しかった。"
  },
  // 594-1
  {
    word: "clue",
    meaning: "手がかり",
    sentence: "find a (   ) to his whereabouts",
    jp: "彼の居所の手がかりを見つける。"
  },
  // 595-1
  {
    word: "restrict",
    meaning: "制限する",
    sentence: "(   ) the amount of carbohydrate",
    jp: "炭水化物の量を制限する。"
  },
  // 596-1
  {
    word: "limit",
    meaning: "制限する",
    sentence: "(   ) class size to fifteen",
    jp: "クラスの人数を15名に制限する。"
  },
  // 596-2
  {
    word: "limit",
    meaning: "制限",
    sentence: "put a (   ) on the number of participants",
    jp: "参加者の数に制限を設ける。"
  },
  // 597-1
  {
    word: "forbid",
    meaning: "〜を禁じる",
    sentence: "(   ) employees to accept tips from customers",
    jp: "従業員が客からのチップを受け取ることを禁じる。"
  },
  // 598-1
  {
    word: "ban",
    meaning: "禁止",
    sentence: "impose a total (   ) on smoking in public places",
    jp: "公共の場所での喫煙を全面的に禁止する。"
  },
  // 598-2
  {
    word: "ban",
    meaning: "禁止する",
    sentence: "(   ) the illegal downloading of music",
    jp: "音楽の違法ダウンロードを禁止する。"
  },
  // 599-1
  {
    word: "refuse",
    meaning: "拒む",
    sentence: "(   ) to listen to him",
    jp: "彼の話を聞くのを拒む。"
  },
  // 599-2
  {
    word: "refuse",
    meaning: "断る",
    sentence: "flatly (   ) the offer",
    jp: "きっぱりとその申し出を断る。"
  },
  // 600-1
  {
    word: "reject",
    meaning: "拒絶する",
    sentence: "(   ) the idea",
    jp: "その考えを拒絶する。"
  },
  // 600-2
  {
    word: "rejected",
    meaning: "のけ者にする",
    sentence: "People in the village (   ) him.",
    jp: "村の人々は彼をのけ者にした。"
  },
  // 601-1
  {
    word: "persuade",
    meaning: "説得して〜させる",
    sentence: "It is no use trying to (   ) him to eat carrots.",
    jp: "ニンジンを食べるよう彼を説得するのは無駄だ。"
  },
  // 602-1
  {
    word: "convince",
    meaning: "確信させる",
    sentence: "(   ) him that I am right",
    jp: "私が正しいことを彼に確信させる。"
  },
  // 602-2
  {
    word: "convince",
    meaning: "説得して〜させる",
    sentence: "(   ) him to study hard",
    jp: "彼を説得して熱心に勉強させる。"
  },
  // 603-1
  {
    word: "inspired",
    meaning: "奮い立たせる",
    sentence: "His remark (   ) me to study.",
    jp: "彼の言葉で私の勉強のスイッチが入った。"
  },
  // 603-2
  {
    word: "inspired",
    meaning: "ヒントを与えられた",
    sentence: "This novel was (   ) by real events.",
    jp: "この小説は実話をヒントにしている。"
  },
  // 604-1
  {
    word: "discourage",
    meaning: "思いとどまらせる",
    sentence: "(   ) her from buying expensive clothes",
    jp: "彼女に高い服を買うのを思いとどまらせる。"
  }
],
605: [
  // 605-1
  {
    word: "promote",
    meaning: "促進する",
    sentence: "(   ) healthy eating habits",
    jp: "健全な食生活を促進する。"
  },
  // 605-2
  {
    word: "promoted",
    meaning: "昇進する",
    sentence: "get (   ) to vice-president",
    jp: "副社長に昇進する。"
  },
  // 606-1
  {
    word: "boost",
    meaning: "高める",
    sentence: "(   ) the team's morale",
    jp: "チームの士気を高める。"
  },
  // 607-1
  {
    word: "expands",
    meaning: "膨張する",
    sentence: "Water (   ) when it freezes.",
    jp: "水は凍ると膨張する。"
  },
  // 607-2
  {
    word: "expand",
    meaning: "拡大する",
    sentence: "(   ) my business",
    jp: "ビジネスを拡張する。"
  },
  // 608-1
  {
    word: "extend",
    meaning: "延長する",
    sentence: "(   ) the deadline by one week",
    jp: "締め切りを1週間延長する。"
  },
  // 608-2
  {
    word: "extended",
    meaning: "及ぶ",
    sentence: "The meeting (   ) over five hours.",
    jp: "その会議は5時間にも及んだ。"
  },
  // 609-1
  {
    word: "broadens",
    meaning: "広げる",
    sentence: "Travel (   ) your horizons.",
    jp: "旅は視野を広げてくれる。"
  },
  // 609-2
  {
    word: "broadened",
    meaning: "広がる",
    sentence: "After studying in New Zealand, my outlook on life has (   ).",
    jp: "ニュージーランドに留学して，自分の人生観が広がった。"
  },
  // 610-1
  {
    word: "spread",
    meaning: "広げる",
    sentence: "(   ) a handkerchief over my lap",
    jp: "ひざの上にハンカチを広げる。"
  },
  // 610-2
  {
    word: "spread",
    meaning: "広まる",
    sentence: "The news (   ) rapidly.",
    jp: "そのニュースは急速に広まった。"
  },
  // 610-3
  {
    word: "spread",
    meaning: "蔓延",
    sentence: "the rapid (   ) of cholera",
    jp: "コレラの急速な蔓延。"
  },
  // 611-1
  {
    word: "tie",
    meaning: "縛る",
    sentence: "(   ) up old books with some string",
    jp: "ひもで古本を縛る。"
  },
  // 611-2
  {
    word: "tie",
    meaning: "結ぶ",
    sentence: "(   ) my shoelaces",
    jp: "靴ひもを結ぶ。"
  },
  // 611-3
  {
    word: "tie",
    meaning: "ネクタイを直す",
    sentence: "fix my (   )",
    jp: "ネクタイを直す。"
  },
  // 611-4
  {
    word: "ties",
    meaning: "きずな",
    sentence: "parent-child (   )",
    jp: "親子のきずな。"
  },
  // 612-1
  {
    word: "fasten",
    meaning: "締める",
    sentence: "(   ) my seat belt",
    jp: "シートベルトを締める。"
  },
  // 612-2
  {
    word: "fasten",
    meaning: "留める",
    sentence: "(   ) my coat",
    jp: "コートのボタンを留める。"
  },
  // 613-1
  {
    word: "fix",
    meaning: "固定する",
    sentence: "(   ) the camera to the tripod",
    jp: "カメラを三脚に固定する。"
  },
  // 613-2
  {
    word: "fix",
    meaning: "修理する",
    sentence: "(   ) the bike",
    jp: "自転車を修理する。"
  },
  // 613-3
  {
    word: "fix",
    meaning: "用意する",
    sentence: "(   ) lunch",
    jp: "昼食を用意する。"
  },
  // 614-1
  {
    word: "install",
    meaning: "設置する",
    sentence: "(   ) a vending machine in the school cafeteria",
    jp: "学生食堂に自動販売機を設置する。"
  },
  // 614-2
  {
    word: "install",
    meaning: "インストールする",
    sentence: "(   ) the app on my smartphone",
    jp: "私のスマートフォンにそのアプリをインストールする。"
  },
  // 615-1
  {
    word: "resist",
    meaning: "我慢する",
    sentence: "cannot (   ) buying new shoes",
    jp: "ついつい新しい靴を買ってしまう。"
  },
  // 615-2
  {
    word: "resists",
    meaning: "抵抗する",
    sentence: "Stainless steel (   ) rust.",
    jp: "ステンレスはさびに抵抗する。"
  },
  // 616-1
  {
    word: "obey",
    meaning: "従う",
    sentence: "(   ) my parents",
    jp: "親の言うことに従う。"
  },
  // 617-1
  {
    word: "engage",
    meaning: "従事する",
    sentence: "(   ) in relief operations",
    jp: "救援活動に従事する。"
  },
  // 617-2
  {
    word: "engage",
    meaning: "関わる",
    sentence: "(   ) with the kids",
    jp: "その子どもたちと関わる。"
  },
  // 617-3
  {
    word: "engaged",
    meaning: "引く",
    sentence: "The puzzle (   ) his interest all day.",
    jp: "彼は1日中パズルをしていた。"
  },
  // 618-1
  {
    word: "bump",
    meaning: "ぶつかる",
    sentence: "(   ) into a pile of books",
    jp: "本の山にぶつかる。"
  },
  // 618-2
  {
    word: "bump",
    meaning: "偶然出会う",
    sentence: "(   ) into my ex-girlfriend in a supermarket",
    jp: "スーパーで前の彼女に偶然出会う。"
  },
  // 619-1
  {
    word: "bend",
    meaning: "身をかがめる",
    sentence: "(   ) down to pick up the pen",
    jp: "ペンを拾い上げるために腰をかがめる。"
  },
  // 619-2
  {
    word: "bend",
    meaning: "曲げる",
    sentence: "(   ) my knees",
    jp: "ひざを曲げる。"
  },
  // 619-3
  {
    word: "bend",
    meaning: "カーブ",
    sentence: "go around a (   )",
    jp: "カーブを曲がる。"
  },
  // 620-1
  {
    word: "hugged",
    meaning: "抱き合う",
    sentence: "The players (   ) each other tightly.",
    jp: "選手たちは互いにしっかり抱き合った。"
  },
  // 620-2
  {
    word: "hug",
    meaning: "抱きしめる",
    sentence: "give her a (   )",
    jp: "彼女を抱きしめる。"
  },
  // 621-1
  {
    word: "stare",
    meaning: "じっと見つめる",
    sentence: "(   ) at a computer screen",
    jp: "コンピュータの画面をじっと見つめる。"
  },
  // 621-2
  {
    word: "stare",
    meaning: "凝視",
    sentence: "give him a long, hard (   )",
    jp: "彼を長い間睨みつける。"
  },
  // 622-1
  {
    word: "gaze",
    meaning: "見つめる",
    sentence: "(   ) at the ceiling",
    jp: "天井を見つめる。"
  },
  // 622-2
  {
    word: "gaze",
    meaning: "視線",
    sentence: "attract everybody's (   )",
    jp: "皆の視線を集める。"
  },
  // 623-1
  {
    word: "glance",
    meaning: "ちらりと見る",
    sentence: "(   ) at the clock",
    jp: "時計をちらっと見る。"
  },
  // 623-2
  {
    word: "glance",
    meaning: "ちらりと見ること",
    sentence: "have a (   ) at her",
    jp: "彼女をちらっと見る。"
  },
  // 624-1
  {
    word: "glimpse",
    meaning: "ちらりと見える",
    sentence: "(   ) her face",
    jp: "彼女の顔がちらりと見える。"
  },
  // 624-2
  {
    word: "glimpse",
    meaning: "一目見る",
    sentence: "catch a (   ) of the singer",
    jp: "その歌手を一目見る。"
  }
],
625: [
  // 625-1
  {
    word: "stretch",
    meaning: "伸ばす",
    sentence: "(   ) my arms",
    jp: "腕を伸ばす。"
  },
  // 625-2
  {
    word: "stretch",
    meaning: "広がる",
    sentence: "(   ) to the horizon",
    jp: "地平線まで広がる。"
  },
  // 625-3
  {
    word: "stretch",
    meaning: "広がり",
    sentence: "(   ) of desert",
    jp: "一面の砂漠。"
  },
  // 626-1
  {
    word: "stumble",
    meaning: "つまずく",
    sentence: "(   ) over a rock",
    jp: "石につまずく。"
  },
  // 626-2
  {
    word: "stumble",
    meaning: "偶然出会う",
    sentence: "(   ) across an old friend",
    jp: "旧友と偶然出会う。"
  },
  // 627-1
  {
    word: "press",
    meaning: "押す",
    sentence: "(   ) the button",
    jp: "ボタンを押す。"
  },
  // 627-2
  {
    word: "press",
    meaning: "無理やり渡す",
    sentence: "(   ) money on him",
    jp: "彼にお金を無理やり渡す。"
  },
  // 627-3
  {
    word: "press",
    meaning: "報道",
    sentence: "freedom of the (   )",
    jp: "報道の自由。"
  },
  // 628-1
  {
    word: "drag",
    meaning: "引きずる",
    sentence: "(   ) the table into the kitchen",
    jp: "台所までそのテーブルを引きずる。"
  },
  // 629-1
  {
    word: "lean",
    meaning: "寄りかかる",
    sentence: "(   ) against the wall",
    jp: "壁にもたれる。"
  },
  // 629-2
  {
    word: "lean",
    meaning: "身を乗り出す",
    sentence: "(   ) forward over the handrail",
    jp: "手すりから身を乗り出す。"
  },
  // 629-3
  {
    word: "lean",
    meaning: "痩せている",
    sentence: "a tall, (   ) man",
    jp: "背の高い痩せっぽちの男。"
  },
  // 630-1
  {
    word: "scratch",
    meaning: "かく",
    sentence: "(   ) my back",
    jp: "背中をかく。"
  },
  // 630-2
  {
    word: "scratch",
    meaning: "ひっかき傷",
    sentence: "a (   ) on her arm",
    jp: "彼女の腕のひっかき傷。"
  },
  // 631-1
  {
    word: "bow",
    meaning: "おじぎする",
    sentence: "(   ) to each other",
    jp: "お互いにおじぎをする。"
  },
  // 631-2
  {
    word: "bow",
    meaning: "おじぎ",
    sentence: "The singer gave a (   ) to the audience.",
    jp: "その歌手は観客におじぎをした。"
  },
  // 632-1
  {
    word: "nodded",
    meaning: "うなずく",
    sentence: "She (   ) and smiled.",
    jp: "彼女はうなずき，ほほ笑んだ。"
  },
  // 632-2
  {
    word: "nod",
    meaning: "うたた寝する",
    sentence: "(   ) off in class",
    jp: "授業中にうたた寝する。"
  },
  // 632-3
  {
    word: "nod",
    meaning: "軽くうなずく",
    sentence: "give a slight (   )",
    jp: "軽くうなずく。"
  },
  // 633-1
  {
    word: "sighed",
    meaning: "ため息をつく",
    sentence: "He (   ) saying, \"You win.\"",
    jp: "「降参だ」と言って彼はため息をついた。"
  },
  // 633-2
  {
    word: "sigh",
    meaning: "ため息",
    sentence: "with a (   ) of relief",
    jp: "ほっと安堵のため息をついて。"
  },
  // 634-1
  {
    word: "yawn",
    meaning: "あくびをする",
    sentence: "stretch and (   ) loudly",
    jp: "伸びをして大きな声であくびをする。"
  },
  // 634-2
  {
    word: "yawn",
    meaning: "あくび",
    sentence: "hold back a (   )",
    jp: "あくびをこらえる。"
  },
  // 635-1
  {
    word: "sneeze",
    meaning: "くしゃみをする",
    sentence: "Cover your mouth when you (   ).",
    jp: "くしゃみをするときには口を覆いなさい。"
  },
  // 636-1
  {
    word: "bury",
    meaning: "埋める",
    sentence: "(   ) a time capsule at the foot of the cherry tree",
    jp: "桜の木の根元にタイムカプセルを埋める。"
  },
  // 636-2
  {
    word: "bury",
    meaning: "埋葬する",
    sentence: "(   ) a dead cat in the garden",
    jp: "庭に死んだネコを埋葬する。"
  },
  // 637-1
  {
    word: "perform",
    meaning: "遂行する",
    sentence: "(   ) difficult tasks",
    jp: "困難な仕事を遂行する。"
  },
  // 637-2
  {
    word: "perform",
    meaning: "演じる",
    sentence: "(   ) three plays",
    jp: "3つの劇を演じる。"
  },
  // 637-3
  {
    word: "performed",
    meaning: "活躍した",
    sentence: "The star player (   ) well.",
    jp: "そのスター選手は活躍した。"
  },
  // 638-1
  {
    word: "adopt",
    meaning: "採用する",
    sentence: "(   ) his plan",
    jp: "彼の計画を採用する。"
  },
  // 638-2
  {
    word: "adopt",
    meaning: "引き取る",
    sentence: "(   ) a dog from an animal shelter",
    jp: "動物保護施設からイヌを引き取る。"
  },
  // 639-1
  {
    word: "escape",
    meaning: "逃げる",
    sentence: "(   ) from the burning house",
    jp: "燃える家から逃げる。"
  },
  // 639-2
  {
    word: "escape",
    meaning: "免れる",
    sentence: "(   ) injury",
    jp: "けがを避ける。"
  },
  // 639-3
  {
    word: "escape",
    meaning: "逃げ道",
    sentence: "look for an (   ) route",
    jp: "逃げ道を探す。"
  },
  // 640-1
  {
    word: "scattered",
    meaning: "脱ぎ散らかされていた",
    sentence: "His clothes were (   ) all over the floor.",
    jp: "彼の服が部屋中に脱ぎ散らかされていた。"
  },
  // 640-2
  {
    word: "scatter",
    meaning: "散る",
    sentence: "(   ) in all directions",
    jp: "四方八方に散る。"
  },
  // 641-1
  {
    word: "fold",
    meaning: "折る",
    sentence: "(   ) the paper along the dotted line",
    jp: "点線に沿って紙を折る。"
  },
  // 641-2
  {
    word: "fold up",
    meaning: "たたむ",
    sentence: "(   ) my clothes",
    jp: "服をたたむ。"
  },
  // 641-3
  {
    word: "folded",
    meaning: "腕組みをして",
    sentence: "with my arms (   )",
    jp: "腕組みをして。"
  },
  // 641-4
  {
    word: "folds",
    meaning: "折りたためる",
    sentence: "This chair (   ) flat.",
    jp: "この椅子は平たく折りたためる。"
  },
  // 642-1
  {
    word: "hang",
    meaning: "〜を掛ける",
    sentence: "(   ) the washing on the pole",
    jp: "物干しざおに洗濯物を掛ける。"
  },
  // 642-2
  {
    word: "hanged",
    meaning: "絞首刑になる",
    sentence: "be (   ) for murder",
    jp: "殺人で絞首刑になる。"
  },
  // 642-3
  {
    word: "hanging",
    meaning: "ぶら下がっていた",
    sentence: "An old lamp was (   ) from the ceiling.",
    jp: "古いランプが天井からぶら下がっていた。"
  },
  // 643-1
  {
    word: "release",
    meaning: "解放する",
    sentence: "(   ) the hostages",
    jp: "人質を解放する。"
  },
  // 643-2
  {
    word: "release",
    meaning: "出す",
    sentence: "(   ) his new album",
    jp: "彼の新しいアルバムを出す。"
  },
  // 643-3
  {
    word: "release",
    meaning: "放出する",
    sentence: "(   ) CO2",
    jp: "二酸化炭素を放出する。"
  },
  // 643-4
  {
    word: "release",
    meaning: "解放",
    sentence: "the (   ) of the prisoners",
    jp: "囚人の解放。"
  },
  // 644-1
  {
    word: "strike",
    meaning: "〜を打つ",
    sentence: "(   ) him on the cheek",
    jp: "彼のほほを打つ。"
  },
  // 644-2
  {
    word: "struck",
    meaning: "襲った",
    sentence: "The earthquake (   ) the area.",
    jp: "地震がその地域を襲った。"
  },
  // 644-3
  {
    word: "struck",
    meaning: "浮かんだ",
    sentence: "A good idea (   ) me.",
    jp: "よい考えが浮かんだ。"
  },
  // 644-4
  {
    word: "struck",
    meaning: "思えた",
    sentence: "His plan (   ) me as impractical.",
    jp: "彼の計画は実用的ではないと思えた。"
  },
  // 644-5
  {
    word: "strike",
    meaning: "ストライキ",
    sentence: "go on (   )",
    jp: "ストライキをする。"
  },
  // 645-1
  {
    word: "beat",
    meaning: "〜を打つ",
    sentence: "(   ) a drum",
    jp: "太鼓をたたく。"
  },
  // 645-2
  {
    word: "beat",
    meaning: "〜に勝つ",
    sentence: "(   ) the world champion at chess",
    jp: "チェスの世界チャンピオンに勝つ。"
  },
  // 646-1
  {
    word: "protect",
    meaning: "守る",
    sentence: "(   ) our skin from the sun",
    jp: "日差しから肌を守る。"
  },
  // 647-1
  {
    word: "twist",
    meaning: "ねじ曲げる",
    sentence: "(   ) a wire",
    jp: "針金をねじ曲げる。"
  },
  // 647-2
  {
    word: "twist",
    meaning: "捻挫する",
    sentence: "(   ) my ankle",
    jp: "足首を捻挫する。"
  },
  // 648-1
  {
    word: "skip",
    meaning: "サボる",
    sentence: "(   ) cram school",
    jp: "塾をサボる。"
  },
  // 649-1
  {
    word: "exposed",
    meaning: "触れる",
    sentence: "Children should be (   ) to different cultures.",
    jp: "子どもはさまざまな文化に触れるべきだ。"
  },
  // 649-2
  {
    word: "expose",
    meaning: "暴露する",
    sentence: "(   ) a secret",
    jp: "秘密を暴露する。"
  }
],
650: [
  // 650-1
  {
    word: "stir",
    meaning: "（液体など）を混ぜる",
    sentence: "(   ) my coffee with a spoon",
    jp: "スプーンでコーヒーを混ぜる"
  },
  // 650-2
  {
    word: "stir",
    meaning: "（〜 up）（感情など）を呼び覚ます",
    sentence: "(   ) up childhood memories",
    jp: "子どものころの記憶を呼び覚ます"
  },
  // 651-1
  {
    word: "shake",
    meaning: "〜を振る",
    sentence: "Don't (   ) the bottle of soda water.",
    jp: "炭酸の瓶を振るな。"
  },
  // 651-2
  {
    word: "shook",
    meaning: "震える",
    sentence: "The powerful earthquake (   ) the town.",
    jp: "大地震がその町を襲った（その町を揺さぶった）。"
  },
  // 651-3
  {
    word: "shake",
    meaning: "震える",
    sentence: "My hand began to (   ).",
    jp: "手が震え始めた。"
  },
  // 652-1
  {
    word: "polish",
    meaning: "〜を磨く",
    sentence: "(   ) my glasses with a piece of cloth",
    jp: "布で眼鏡（のレンズ）を磨く"
  },
  // 653-1
  {
    word: "attend",
    meaning: "〜に出席する",
    sentence: "(   ) my sister's wedding",
    jp: "姉の結婚式に出席する"
  },
  // 653-2
  {
    word: "attend",
    meaning: "（to 〜）（〜に）注意を向ける",
    sentence: "(   ) to his words",
    jp: "彼の言うことに注意を向ける"
  },
  // 653-3
  {
    word: "attended",
    meaning: "（to 〜）（〜を）世話する",
    sentence: "A nurse (   ) to his broken arm.",
    jp: "看護師が折れた腕の手当てをした。"
  },
  // 654-1
  {
    word: "imitate",
    meaning: "〜をまねる",
    sentence: "(   ) the American teacher's English",
    jp: "そのアメリカ人教師の英語をまねる"
  },
  // 655-1
  {
    word: "conduct",
    meaning: "〜を行う",
    sentence: "(   ) research",
    jp: "研究を行う"
  },
  // 655-2
  {
    word: "conduct",
    meaning: "（電気，熱）を伝える",
    sentence: "(   ) electricity",
    jp: "電気を伝える"
  },
  // 655-3
  {
    word: "conduct",
    meaning: "（を）指揮する",
    sentence: "a code of (   )",
    jp: "行動規範"
  },
  // 656-1
  {
    word: "struggle",
    meaning: "奮闘する，もがく",
    sentence: "(   ) to bring up my children",
    jp: "必死になって子どもたちを育てる"
  },
  // 656-2
  {
    word: "struggle",
    meaning: "奮闘する，もがく",
    sentence: "a (   ) for existence",
    jp: "生存競争"
  },
  // 657-1
  {
    word: "burned down",
    meaning: "焼ける",
    sentence: "Kinkakuji Temple has (   ) several times.",
    jp: "金閣寺は何度か焼け落ちている。"
  },
  // 657-2
  {
    word: "burn",
    meaning: "〜を燃やす",
    sentence: "(   ) things in a fire",
    jp: "火に入れて物を燃やす"
  },
  // 658-1
  {
    word: "cheat",
    meaning: "ごまかす",
    sentence: "(   ) in an exam",
    jp: "試験でカンニングをする"
  },
  // 658-2
  {
    word: "cheat",
    meaning: "〜をだます",
    sentence: "(   ) the woman out of money",
    jp: "その女性をだまして金を取る"
  },
  // 659-1
  {
    word: "participate",
    meaning: "（in 〜）（〜に）参加する",
    sentence: "(   ) in the National Sports Festival",
    jp: "国民体育大会（国体）に参加する"
  },
  // 660-1
  {
    word: "exists",
    meaning: "存在する",
    sentence: "believe that Santa Claus (   )",
    jp: "サンタクロースは存在すると信じる"
  },
  // 661-1
  {
    word: "arose",
    meaning: "生じる",
    sentence: "Several problems (   ).",
    jp: "いくつかの問題が生じた。"
  },
  // 662-1
  {
    word: "occurred",
    meaning: "起こる",
    sentence: "The accident (   ) at this intersection at about 10 p.m.",
    jp: "その事故は午後10時ごろにこの交差点で起きた。"
  },
  // 662-2
  {
    word: "occurred",
    meaning: "（to A）（考えなどが）（Aに）思いつく",
    sentence: "A wonderful idea suddenly (   ) to me.",
    jp: "いい考えが突然浮かんだ。"
  },
  // 663-1
  {
    word: "involved",
    meaning: "（be 〜ed in 〜）（事件などに）巻き込まれる",
    sentence: "I was (   ) in a traffic accident.",
    jp: "交通事故に巻き込まれた。"
  },
  // 663-2
  {
    word: "involved",
    meaning: "（be 〜ed in 〜）（子育てなどに）参加する",
    sentence: "be (   ) in child-rearing",
    jp: "子育てに参加する"
  },
  // 663-3
  {
    word: "involve",
    meaning: "〜を伴う",
    sentence: "Traveling abroad may (   ) danger.",
    jp: "海外旅行は危険を伴うかもしれない。"
  },
  // 664-1
  {
    word: "requires",
    meaning: "〜を必要とする",
    sentence: "This job (   ) many years' experience.",
    jp: "この仕事には長年の経験が必要だ。"
  },
  // 665-1
  {
    word: "counterparts",
    meaning: "（to 〜）（〜に対応する）（〜と同等の）人［物，事］",
    sentence: "The Japanese officials discussed the issue with their French (   ).",
    jp: "日本政府高官はフランス政府の高官（対応する人）とその問題について話し合った。"
  },
  // 666-1
  {
    word: "advent",
    meaning: "（the a〜 of A）（Aの）到来，出現",
    sentence: "the (   ) of new technology",
    jp: "新技術の到来"
  }
],

666: [
  // 666-2
  {
    word: "Advent",
    meaning: "（the a〜 of A）（Aの）到来，出現",
    sentence: "the (   ) season",
    jp: "降臨節"
  },
  // 667-1
  {
    word: "maintain",
    meaning: "〜を維持する",
    sentence: "(   ) a proper work-life balance",
    jp: "適切なワークライフバランスを維持する"
  },
  // 667-2
  {
    word: "maintain",
    meaning: "（that SV）（〜を強く）主張する",
    sentence: "(   ) that it is true",
    jp: "それは真実だと主張する"
  },
  // 668-1
  {
    word: "lasted",
    meaning: "（時間的に）続く",
    sentence: "The meeting (   ) (for) three hours.",
    jp: "会議は3時間続いた。"
  },
  // 668-2
  {
    word: "last",
    meaning: "（服などが）長持ちする",
    sentence: "A quality jacket will (   ) (you) a long time.",
    jp: "よい上着は長持ちするものだ。"
  },
  // 668-3
  {
    word: "last",
    meaning: "この前の，最後の",
    sentence: "for the [this / (   )] twenty days",
    jp: "この20日間"
  },
  // 668-4
  {
    word: "last",
    meaning: "最も〜でない",
    sentence: "the (   ) person to be late",
    jp: "もっとも遅刻しそうにない人"
  },
  // 668-5
  {
    word: "At last",
    meaning: "この前の，最後の",
    sentence: "(   ), she passed the exam.",
    jp: "ついに，彼女は試験に合格した。"
  },
  // 669-1
  {
    word: "persists",
    meaning: "持続する",
    sentence: "If your fever (   ), you should see a doctor.",
    jp: "熱が続くようなら，医者に行ったほうがいい。"
  },
  // 669-2
  {
    word: "persist",
    meaning: "（in [with] 〜）（〜を）しつこく貫く，（〜に）固執する",
    sentence: "(   ) in causing trouble",
    jp: "厄介なことばかり引き起こす（引き起こし続ける）"
  },
  // 670-1
  {
    word: "examine",
    meaning: "〜を調査する",
    sentence: "(   ) the old records",
    jp: "古い記録を調べる"
  },
  // 670-2
  {
    word: "examined",
    meaning: "〜を検査する",
    sentence: "have my stomach (   )",
    jp: "胃の検査を受ける（胃を検査してもらう）"
  },
  // 671-1
  {
    word: "gained",
    meaning: "〜を増やす",
    sentence: "I have (   ) five kilos.",
    jp: "5キロ太った。"
  },
  // 671-2
  {
    word: "gain",
    meaning: "〜を得る",
    sentence: "(   ) valuable experience",
    jp: "価値ある経験を得る"
  },
  // 671-3
  {
    word: "gain",
    meaning: "利益，増加",
    sentence: "for practical (   )",
    jp: "実益のために"
  },
  // 672-1
  {
    word: "obtain",
    meaning: "（努力や能力の結果）を得る",
    sentence: "(   ) a work visa",
    jp: "就労ビザを得る"
  },
  // 673-1
  {
    word: "acquire",
    meaning: "〜を習得する",
    sentence: "(   ) a foreign language",
    jp: "外国語を習得する"
  },
  // 673-2
  {
    word: "acquire",
    meaning: "〜を獲得する",
    sentence: "(   ) U.S. citizenship",
    jp: "アメリカ市民権を取得する"
  },
  // 673-3
  {
    word: "acquire",
    meaning: "〜を買収する",
    sentence: "(   ) a software company",
    jp: "ソフトウェアの会社を買収する"
  },
  // 674-1
  {
    word: "search",
    meaning: "（for B）（Bを）求めて（A（場所））を捜す",
    sentence: "(   ) the house for my earrings",
    jp: "イヤリングがないか家を捜す"
  },
  // 674-2
  {
    word: "search",
    meaning: "捜索，調査",
    sentence: "in (   ) of the missing key",
    jp: "なくした鍵を捜して"
  },
  // 675-1
  {
    word: "logical",
    meaning: "論理的な",
    sentence: "(   ) thinking",
    jp: "論理的な思考"
  },
  // 676-1
  {
    word: "scholarship",
    meaning: "奨学金",
    sentence: "study abroad on a (   )",
    jp: "奨学金で留学する"
  },
  // 676-2
  {
    word: "scholarship",
    meaning: "学問，（人文科学の）学識",
    sentence: "He is proud of his (   ).",
    jp: "彼は学識を自慢している。"
  },
  // 677-1
  {
    word: "instructions",
    meaning: "（通例 -s）指示，（取扱）説明書",
    sentence: "follow the on-screen (   )",
    jp: "画面上の指示に従う"
  },
  // 678-1
  {
    word: "determined",
    meaning: "〜を決める",
    sentence: "People's lifestyles are often (   ) by their incomes.",
    jp: "人の生活スタイルは収入で決まることが多い。"
  },
  // 678-2
  {
    word: "determined",
    meaning: "〜を大きく影響する",
    sentence: "I am (   ) to win the game.",
    jp: "私は試合に勝つ決意をしている。"
  },
  // 678-3
  {
    word: "determine",
    meaning: "（原因など）を特定する",
    sentence: "(   ) the cause of the accident",
    jp: "その事故の原因を特定する"
  },
  // 679-1
  {
    word: "conclude",
    meaning: "（that SV）〜と結論を下す",
    sentence: "(   ) that the factory should be closed",
    jp: "その工場は閉鎖すべきだと結論を下す"
  },
  // 680-1
  {
    word: "distinguish",
    meaning: "〜を区別する",
    sentence: "(   ) sheep from goats",
    jp: "ヒツジをヤギと区別する"
  }
],

681: [
  // 681-1
  {
    word: "classify",
    meaning: "〜を分類する",
    sentence: "(   ) the books according to subject [their subject(s)]",
    jp: "テーマで図書を分類する"
  },
  // 682-1
  {
    word: "estimated",
    meaning: "〜と推定する，見積もる",
    sentence: "It is (   ) that this shrine is over 500 years old.",
    jp: "この神社の歴史は500年以上だと見積もられている。"
  },
  // 682-2
  {
    word: "estimate",
    meaning: "（for 〜）（〜の）見積もり",
    sentence: "give an (   ) for fixing the roof",
    jp: "屋根の修理の見積もりを出す"
  },
  // 683-1
  {
    word: "organize",
    meaning: "（考えなどを）まとめる",
    sentence: "(   ) my thoughts before speaking",
    jp: "話す前に自分の考えをまとめる"
  },
  // 683-2
  {
    word: "organize",
    meaning: "〜を組織する，取りまとめる",
    sentence: "(   ) an event",
    jp: "イベントを取りまとめる"
  },
  // 684-1
  {
    word: "recognize",
    meaning: "（知り合いなどだと）わかる",
    sentence: "Do you (   ) me?",
    jp: "私が誰だかわかりますか。"
  },
  // 684-2
  {
    word: "recognize",
    meaning: "（that SV）（事実だと）認める",
    sentence: "(   ) that I was wrong",
    jp: "私が間違っていたと認める"
  },
  // 685-1
  {
    word: "supposed",
    meaning: "（be 〜d to 〜）〜することになっている",
    sentence: "You are (   ) to take off your shoes at the door.",
    jp: "玄関では靴を脱ぐことになっています。"
  },
  // 685-2
  {
    word: "Suppose",
    meaning: "〜と思う，仮定する",
    sentence: "(   ) you got lost there. What would you do?",
    jp: "そこで迷子になったとします。あなたならどうしますか。"
  },
  // 686-1
  {
    word: "assume",
    meaning: "〜と思い込む，決めつける",
    sentence: "(   ) (that) all people are the same",
    jp: "人間は皆同じだと思い込む"
  },
  // 686-2
  {
    word: "assume",
    meaning: "〜を引き受ける",
    sentence: "(   ) responsibility",
    jp: "責任をとる"
  },
  // 687-1
  {
    word: "care",
    meaning: "（否定文で）気にする",
    sentence: "I don't (   ) about trivial matters.",
    jp: "私は細かいことを気にしません。"
  },
  // 687-2
  {
    word: "care",
    meaning: "世話をする",
    sentence: "(   ) for orphans",
    jp: "孤児の世話をする"
  },
  // 687-3
  {
    word: "care",
    meaning: "世話，心配",
    sentence: "medical (   ) for the elderly",
    jp: "高齢者の医療"
  },
  // 688-1
  {
    word: "approved",
    meaning: "（of 〜）（〜を）認める，承認する",
    sentence: "Her parents (   ) of her marriage.",
    jp: "彼女の両親は彼女の結婚を認めた。"
  },
  // 688-2
  {
    word: "approved",
    meaning: "〜を承認する",
    sentence: "Congress (   ) the president's plans.",
    jp: "議会は大統領の計画を承認した。"
  },
  // 689-1
  {
    word: "noticed",
    meaning: "〜に気がついている",
    sentence: "I (   ) that there was a hole in my sock.",
    jp: "靴下に穴が空いていることに気がついた。"
  },
  // 689-2
  {
    word: "notice",
    meaning: "通知，掲示，注意",
    sentence: "(   ) of a change of address",
    jp: "住所変更の通知"
  },
  // 690-1
  {
    word: "aware",
    meaning: "気づいている",
    sentence: "I am (   ) that my time on earth is limited.",
    jp: "この世の時間には限りがあると思っている。"
  },
  // 691-1
  {
    word: "conscious",
    meaning: "意識している，気づいている",
    sentence: "I was (   ) of the fact that it was an important meeting.",
    jp: "それが重要な会議であるということを意識していた。"
  },
  // 691-2
  {
    word: "conscious",
    meaning: "意識がある",
    sentence: "He was still (   ) when we arrived.",
    jp: "私たちが到着したとき，彼はまだ意識があった。"
  },
  // 692-1
  {
    word: "concerned",
    meaning: "（with [about] 〜）（〜に）関心を持っている，重視している",
    sentence: "The professor is (   ) with environmental problems.",
    jp: "その教授は環境問題に関心を持っている。"
  },
  // 692-2
  {
    word: "concerned",
    meaning: "（with 〜）（〜を）扱っている",
    sentence: "His book is (   ) with environmental problems.",
    jp: "彼の本は環境問題を扱っている。"
  },
  // 692-3
  {
    word: "concerned",
    meaning: "（about [for] 〜）（〜を）懸念している，心配している",
    sentence: "be (   ) about her safety",
    jp: "彼女の安全を懸念している。"
  },
  // 693-1
  {
    word: "regards",
    meaning: "（as B）（AをBと）みなす",
    sentence: "Zack was born in the U.S. but he (   ) Japan as his home.",
    jp: "ザックはアメリカ生まれだが，日本を故郷だと思っている。"
  },
  // 693-2
  {
    word: "regarded",
    meaning: "（関係を）評価する",
    sentence: "be highly (   ) as a singer",
    jp: "歌手として高く評価されている"
  },
  // 693-3
  {
    word: "regard",
    meaning: "この点で",
    sentence: "in this (   )",
    jp: "この点で"
  },
  // 693-4
  {
    word: "regards",
    meaning: "よろしくという挨拶",
    sentence: "Please give [send] my (   ) to Mr. Smith.",
    jp: "スミスさんによろしくお伝えください。"
  },
  // 694-1
  {
    word: "committed",
    meaning: "（oneself to 〜 / be 〜ed to 〜）〜に専念する",
    sentence: "We are fully (   ) to the project.",
    jp: "私たちはその計画に専念している。"
  },
  // 694-2
  {
    word: "commit",
    meaning: "（言葉を）記憶する",
    sentence: "(   ) the words to memory",
    jp: "その言葉を記憶する（言葉を記憶に委ねる）"
  }
],

694: [
  // 694-3
  {
    word: "commit",
    meaning: "（犯罪などを）犯す",
    sentence: "(   ) a foul",
    jp: "反則を犯す"
  },
  // 695-1
  {
    word: "doubted",
    meaning: "〜を疑う",
    sentence: "I have never once (   ) him.",
    jp: "彼のことを疑ったことは一度もない。"
  },
  // 695-2
  {
    word: "doubt",
    meaning: "（that SV）〜とは思わない",
    sentence: "I (   ) that this diamond is real.",
    jp: "このダイヤモンドは本物ではないと思う。"
  },
  // 695-3
  {
    word: "doubt",
    meaning: "疑い",
    sentence: "There is no (   ) that he was happy.",
    jp: "きっと（疑いなく）彼は幸せだった。"
  },
  // 696-1
  {
    word: "memorize",
    meaning: "〜を暗記する",
    sentence: "(   ) the times tables",
    jp: "九九を暗記する"
  },
  // 697-1
  {
    word: "forgive",
    meaning: "（人，過ちを）許す",
    sentence: "(   ) him for what he said",
    jp: "彼の発言に対して彼を許す"
  },
  // 698-1
  {
    word: "granted",
    meaning: "（take 〜 for granted）〜を当然のことと思う",
    sentence: "take cars for (   )",
    jp: "車の存在を当然と考える"
  },
  // 698-2
  {
    word: "grant",
    meaning: "（権利など）を与える",
    sentence: "(   ) permission to visit",
    jp: "訪問の許可を与える"
  },
  // 698-3
  {
    word: "grant",
    meaning: "交付，補助金",
    sentence: "obtain a (   )",
    jp: "補助金を得る"
  },
  // 699-1
  {
    word: "recalled",
    meaning: "〜を思い出す",
    sentence: "I (   ) that I had seen him cheating on the test.",
    jp: "彼がテストでカンニングするのを目撃したことを思い出した。"
  },
  // 699-2
  {
    word: "recall",
    meaning: "（商品を）回収する，リコールする",
    sentence: "(   ) cars due to an engine fault",
    jp: "エンジンの欠陥のため車を回収する"
  },
  // 700-1
  {
    word: "outlook",
    meaning: "（A's 〜 on life）（Aの）人生観",
    sentence: "broaden my (   ) on life",
    jp: "人生観を広げる"
  },
  // 700-2
  {
    word: "outlook",
    meaning: "（経済，天候などの）見通し，展望",
    sentence: "the economic (   )",
    jp: "経済的な見通し"
  },
  // 701-1
  {
    word: "perspective",
    meaning: "（経験などで得られる）視点",
    sentence: "gain a fresh (   )",
    jp: "新たな視点を得る"
  },
  // 701-2
  {
    word: "perspective",
    meaning: "（大局的な）見方，遠近法",
    sentence: "keep the situation in (   )",
    jp: "状況を大局的に捉える"
  },
  // 702-1
  {
    word: "abandon",
    meaning: "〜を捨てる，放棄する",
    sentence: "(   ) my dream of studying abroad",
    jp: "留学する夢を諦める"
  },
  // 703-1
  {
    word: "eliminate",
    meaning: "（不要な人，物）を排除する",
    sentence: "(   ) gender discrimination",
    jp: "性差別をなくす"
  },
  // 703-2
  {
    word: "eliminated",
    meaning: "（be 〜d）敗退する",
    sentence: "be (   ) in the second round",
    jp: "2回戦で敗退する"
  },
  // 704-1
  {
    word: "get rid of",
    meaning: "（get 〜 of 〜）（不要な人，物）を処分する",
    sentence: "(   ) my old toys",
    jp: "古いおもちゃを処分する"
  },
  // 704-2
  {
    word: "get rid of",
    meaning: "〜を取り除く",
    sentence: "(   ) cockroaches",
    jp: "ゴキブリを駆除する"
  },
  // 705-1
  {
    word: "removed",
    meaning: "〜を取り除く，取り去る",
    sentence: "Illegally parked bicycles will be (   ).",
    jp: "放置自転車（不法駐輪された自転車）は撤去される。"
  },
  // 705-2
  {
    word: "remove",
    meaning: "（衣服）を脱ぐ",
    sentence: "(   ) my hat",
    jp: "帽子を脱ぐ"
  },
  // 706-1
  {
    word: "resources",
    meaning: "（-s）（石油などの）資源，（人，国の）財産",
    sentence: "develop natural (   )",
    jp: "天然資源を開発する"
  },
  // 706-2
  {
    word: "resources",
    meaning: "（困難に立ち向かう力）蓄え",
    sentence: "sufficient (   ) to survive",
    jp: "生き残るだけの十分な蓄え"
  },
  // 706-3
  {
    word: "resource",
    meaning: "手段",
    sentence: "as a last (   )",
    jp: "最後の手段として"
  },
  // 707-1
  {
    word: "conservation",
    meaning: "保護",
    sentence: "(   ) groups",
    jp: "環境保護団体"
  },
  // 707-2
  {
    word: "conservation",
    meaning: "保存",
    sentence: "the law of (   ) of energy",
    jp: "エネルギー保存の法則"
  },
  // 708-1
  {
    word: "preserve",
    meaning: "（自然などを）保護する",
    sentence: "(   ) endangered species",
    jp: "絶滅危惧種を保護する"
  },
  // 708-2
  {
    word: "preserved",
    meaning: "（景観，平和，食品など）を保つ",
    sentence: "a well-(   ) fossil",
    jp: "保存状態のよい（よく保存されている）化石"
  },
  // 709-1
  {
    word: "disasters",
    meaning: "災害",
    sentence: "natural (   ) in Japan",
    jp: "日本の自然災害"
  }
],

709: [
  // 709-2
  {
    word: "disaster",
    meaning: "大失敗",
    sentence: "My math test was a (   )!",
    jp: "数学の試験は大失敗だった！"
  },
  // 710-1
  {
    word: "planet",
    meaning: "惑星，（the 〜）地球",
    sentence: "creatures from another (   )",
    jp: "別の惑星から来た生物"
  },
  // 710-2
  {
    word: "planet",
    meaning: "惑星，（the 〜）地球",
    sentence: "on the (   )",
    jp: "地球上で"
  },
  // 711-1
  {
    word: "environment",
    meaning: "環境，周囲の状況",
    sentence: "the natural (   )",
    jp: "自然環境"
  },
  // 712-1
  {
    word: "horizon",
    meaning: "水平線，地平線",
    sentence: "The sun appeared on the (   ).",
    jp: "太陽が水平線上に現れた。"
  },
  // 712-2
  {
    word: "horizons",
    meaning: "（-s）視野",
    sentence: "Traveling broadens your (   ).",
    jp: "旅は視野を広げる。"
  },
  // 713-1
  {
    word: "layer",
    meaning: "層",
    sentence: "the ozone (   )",
    jp: "オゾン層"
  },
  // 714-1
  {
    word: "agriculture",
    meaning: "農業",
    sentence: "organic (   )",
    jp: "有機農業"
  },
  // 715-1
  {
    word: "crops",
    meaning: "作物",
    sentence: "the main (   ) in this area",
    jp: "この地域の主要な農産物"
  },
  // 715-2
  {
    word: "crop",
    meaning: "収穫（高）",
    sentence: "this region's rice (   )",
    jp: "この地域の米の収穫（高）"
  },
  // 715-3
  {
    word: "cropped",
    meaning: "（up）生じる",
    sentence: "A new problem (   ) up.",
    jp: "新たな問題が突然生じた。"
  },
  // 716-1
  {
    word: "soil",
    meaning: "土，土壌",
    sentence: "cultivate the (   )",
    jp: "土を耕す"
  },
  // 717-1
  {
    word: "weeds",
    meaning: "雑草，海草",
    sentence: "pull up (   )",
    jp: "雑草を抜く"
  },
  // 717-2
  {
    word: "weed",
    meaning: "〜の雑草を抜く",
    sentence: "(   ) the garden",
    jp: "庭の雑草を抜く"
  },
  // 718-1
  {
    word: "Pollen",
    meaning: "花粉",
    sentence: "(   ) levels are high today.",
    jp: "今日は花粉の量が多い。"
  },
  // 719-1
  {
    word: "drowned",
    meaning: "溺れ死ぬ",
    sentence: "He almost (   ), but luckily he was saved.",
    jp: "彼は溺れかけたが，幸い救助された。"
  },
  // 720-1
  {
    word: "leaks",
    meaning: "漏れる",
    sentence: "This roof (   ).",
    jp: "雨漏りがする（この屋根は漏れる）。"
  },
  // 720-2
  {
    word: "leak",
    meaning: "〜を漏らす",
    sentence: "(   ) secret information",
    jp: "秘密の情報を漏らす"
  },
  // 720-3
  {
    word: "leak",
    meaning: "漏れ",
    sentence: "a gas (   )",
    jp: "ガス漏れ"
  },
  // 721-1
  {
    word: "climate",
    meaning: "気候",
    sentence: "This town has a mild [harsh] (   ).",
    jp: "この町の気候は温暖［酷暑］です。"
  },
  // 721-2
  {
    word: "climate",
    meaning: "（政治，経済，文化の）状況",
    sentence: "the present economic (   )",
    jp: "現在の経済状況"
  },
  // 722-1
  {
    word: "atmosphere",
    meaning: "（地球，惑星の）大気",
    sentence: "ice crystals in the (   )",
    jp: "大気中の氷の結晶"
  },
  // 722-2
  {
    word: "atmosphere",
    meaning: "雰囲気",
    sentence: "Our workplace has a friendly (   ).",
    jp: "私たちの職場は和やかな雰囲気だ。"
  },
  // 722-3
  {
    word: "atmosphere",
    meaning: "（地球，惑星の）大気",
    sentence: "re-enter the (   )",
    jp: "大気に再突入する"
  },
  // 723-1
  {
    word: "forecast",
    meaning: "（天気）予報",
    sentence: "according to the weather (   )",
    jp: "天気予報によれば"
  },
  // 723-2
  {
    word: "forecast",
    meaning: "〜を予報する",
    sentence: "Snow is (   ) for the weekend.",
    jp: "週末は雪の予報だ（雪が予報された）。"
  },
  // 724-1
  {
    word: "humid",
    meaning: "湿気が多い",
    sentence: "Kyoto is hot and (   ) in summer.",
    jp: "京都の夏は蒸し暑い。"
  },
  // 725-1
  {
    word: "rainforests",
    meaning: "熱帯の",
    sentence: "tropical (   )",
    jp: "熱帯雨林"
  },
  // 726-1
  {
    word: "solar",
    meaning: "太陽の，太陽光線を利用した",
    sentence: "install (   ) panels on the roof",
    jp: "屋根にソーラーパネルを取り付ける"
  },
  // 800-1
  {
    word: "available",
    meaning: "手に入る，利用できる",
    sentence: "This T-shirt is (   ) in all sizes.",
    jp: "このTシャツはすべてのサイズでご用意できます（手に入る）。"
  }
],
727: [
  // 727
  {
    word: "species",
    meaning: "（生物分類上の）種",
    sentence: "Elephants and other endangered ( ).",
    jp: "ゾウなどの絶滅危惧種"
  },

  // 728
  {
    word: "pesticides",
    meaning: "（虫や小動物などの）殺虫剤、除草剤",
    sentence: "Spray crops with ( ).",
    jp: "作物に農薬を散布する"
  },

  // 729
  {
    word: "extinct",
    meaning: "絶滅した",
    sentence: "Dinosaurs became ( ) millions of years ago.",
    jp: "恐竜は何百万年も前に絶滅した。"
  },

  // 730 feed
  {
    word: "feed",
    meaning: "〜にえさを与える",
    sentence: "( ) these goldfish.",
    jp: "これらの金魚にえさを与える"
  },
  {
    word: "feed",
    meaning: "（人・家族など）を養う",
    sentence: "( ) a family of five.",
    jp: "5人家族を養う"
  },
  {
    word: "feed",
    meaning: "（on ～）（～を）常食とする",
    sentence: "Sheep ( ) on grass.",
    jp: "ヒツジは草を常食とする"
  },

  // 731
  {
    word: "energetic",
    meaning: "活発な",
    sentence: "( ) boys and girls",
    jp: "活発な少年少女たち"
  },

  // 732
  {
    word: "greedy",
    meaning: "貪欲な",
    sentence: "A ( ) child ate all the pies.",
    jp: "食い意地の張った子がパイを全部食べた。"
  },

  // 733
  {
    word: "brave",
    meaning: "勇敢な",
    sentence: "A ( ) firefighter",
    jp: "勇敢な消防士"
  },

  // 734
  {
    word: "generous",
    meaning: "寛大な、気前のよい",
    sentence: "Leave a ( ) tip.",
    jp: "気前よくチップを置く"
  },

  // 735
  {
    word: "intellectual",
    meaning: "知的な",
    sentence: "( ) property",
    jp: "知的財産"
  },

  // 736 curious
  {
    word: "curious",
    meaning: "好奇心が強い",
    sentence: "Babies are ( ) about everything.",
    jp: "赤ん坊はすべての物に対して好奇心が強い。"
  },
  {
    word: "curious",
    meaning: "奇妙な、好奇心をそそる",
    sentence: "It is ( ) that we haven't heard from her for days.",
    jp: "彼女から何日も連絡がないのは奇妙だ。"
  },

  // 737
  {
    word: "imaginative",
    meaning: "想像力豊かな",
    sentence: "Children are very ( ).",
    jp: "子どもは非常に想像力が豊かだ。"
  },

  // 738 afford
  {
    word: "afford",
    meaning: "（can ～）〜する余裕がある",
    sentence: "I can't ( ) to buy a new car.",
    jp: "新車を買う余裕がない。"
  },
  {
    word: "afford",
    meaning: "（人）に（物・事）を与える",
    sentence: "Music ( )s me great pleasure.",
    jp: "音楽は私に大きな喜びを与えてくれる。"
  },

  // 739
  {
    word: "eager",
    meaning: "熱心な",
    sentence: "She is ( ) to buy a fur coat.",
    jp: "彼女は毛皮のコートを買いたがっている。"
  },

  // 740
  {
    word: "selfish",
    meaning: "利己的な、自分勝手な",
    sentence: "Don't be ( )!",
    jp: "自分勝手なことをしてはだめだよ。"
  },

  // 741 aggressive
  {
    word: "aggressive",
    meaning: "攻撃的な",
    sentence: "Her attitude suddenly became ( ).",
    jp: "彼女の態度が突然攻撃的になった。"
  },
  {
    word: "aggressive",
    meaning: "積極的な",
    sentence: "A successful businessperson needs to be ( ).",
    jp: "ビジネスで成功するには積極的でないといけない。"
  },

  // 742
  {
    word: "cruel",
    meaning: "残酷な",
    sentence: "Never be ( ) to animals.",
    jp: "動物を残酷に扱うな。"
  },

  // 743
  {
    word: "addicted",
    meaning: "～の中毒になっている",
    sentence: "Lucy is ( ) to her smartphone.",
    jp: "ルーシーはスマホ中毒である。"
  },

  // 744
  {
    word: "stubborn",
    meaning: "頑固な",
    sentence: "A ( ) old man",
    jp: "頑固な老人"
  },

  // 745
  {
    word: "bold",
    meaning: "大胆な",
    sentence: "A dress with a ( ) design",
    jp: "大胆なデザインの服"
  },

  // 746 guilty
  {
    word: "guilty",
    meaning: "申し訳なく思う、罪の意識がある",
    sentence: "I feel ( ) about lying to her.",
    jp: "彼女にうそをついたことを申し訳なく思う。"
  },
  {
    word: "guilty",
    meaning: "（of ～）罪を犯した",
    sentence: "He was ( ) of cheating at cards.",
    jp: "彼はいかさまをした。"
  },

  // 747 innocent
  {
    word: "innocent",
    meaning: "（of ～）無実の",
    sentence: "He is ( ) of the crime.",
    jp: "彼はその犯罪に関して無実だ。"
  },
  {
    word: "innocent",
    meaning: "無邪気な",
    sentence: "An ( ) girl",
    jp: "無邪気な少女"
  },

  // 748 sincere
  {
    word: "sincere",
    meaning: "誠実な",
    sentence: "Make a ( ) effort.",
    jp: "誠実な努力をする"
  },
  {
    word: "sincere",
    meaning: "心からの",
    sentence: "Express my ( ) thanks.",
    jp: "心からの感謝を表現する"
  },

  // 749 modest
  {
    word: "modest",
    meaning: "（人が）謙虚な",
    sentence: "He is ( ) about his success.",
    jp: "彼は成功を鼻にかけない。"
  },
  {
    word: "modest",
    meaning: "（物が）質素な",
    sentence: "A ( ) house with a small garden",
    jp: "小さな庭つきの質素な家"
  },

  // 750
  {
    word: "stupid",
    meaning: "ばかな",
    sentence: "Make a ( ) mistake.",
    jp: "ばかな間違いをする"
  },

  // 751
  {
    word: "indifferent",
    meaning: "無関心な",
    sentence: "He is ( ) to politics.",
    jp: "彼は政治に無関心だ。"
  },

  // 752
  {
    word: "punctual",
    meaning: "時間を守る",
    sentence: "Japanese trains are extremely ( ).",
    jp: "日本の列車は非常に時間に正確だ。"
  },

  // 753
  {
    word: "coward",
    meaning: "臆病者",
    sentence: "He is a ( ) when it comes to dentists.",
    jp: "彼は歯医者に関しては臆病者だ。"
  },

  // 754
  {
    word: "precise",
    meaning: "正確な、精密な",
    sentence: "Each plane follows a ( ) route.",
    jp: "各飛行機は正確な航路をたどる。"
  },

  // 755
  {
    word: "accurate",
    meaning: "正確な",
    sentence: "An ( ) map",
    jp: "正確な地図"
  },

  // 756
  {
    word: "proper",
    meaning: "適切な",
    sentence: "The ( ) use of chopsticks",
    jp: "箸の正しい使い方"
  },

  // 757 tidy
  {
    word: "tidy",
    meaning: "整然とした",
    sentence: "Keep the office ( ).",
    jp: "事務所をきちんとしておく"
  },
  {
    word: "tidy",
    meaning: "整頓する",
    sentence: "( ) your room.",
    jp: "部屋を整頓しなさい。"
  },

  // 758 efficient
  {
    word: "efficient",
    meaning: "能率的な",
    sentence: "An ( ) method of transporting goods",
    jp: "商品を輸送する能率的な方法"
  },
  {
    word: "efficient",
    meaning: "有能な",
    sentence: "An ( ) accountant",
    jp: "有能な会計士"
  },

  // 759 reasonable
  {
    word: "reasonable",
    meaning: "理にかなった",
    sentence: "What you're saying is ( ).",
    jp: "あなたの言っていることはもっともだ。"
  },
  {
    word: "reasonable",
    meaning: "手ごろな",
    sentence: "At a ( ) price",
    jp: "手ごろな値段で"
  },

  // 760 significant
  {
    word: "significant",
    meaning: "重要な、有意義な",
    sentence: "A historically ( ) event",
    jp: "歴史的に重要な出来事"
  },
  {
    word: "significant",
    meaning: "かなりの",
    sentence: "A ( ) increase in sales",
    jp: "売り上げのかなりの増加"
  },

  // 761 precious
  {
    word: "precious",
    meaning: "貴重な",
    sentence: "Don't waste your ( ) time.",
    jp: "貴重な時間を浪費するな。"
  },
  {
    word: "precious",
    meaning: "高価な",
    sentence: "( ) metals",
    jp: "貴金属"
  },

  // 762 essential
  {
    word: "essential",
    meaning: "不可欠な",
    sentence: "Water is ( ) to living things.",
    jp: "水は生物にとって不可欠だ。"
  },
  {
    word: "essential",
    meaning: "最も重要な、本質的な",
    sentence: "The bare ( )s",
    jp: "最低限必要なもの"
  }
],
763: [
    // 240-241ページ
    {
      word: "fundamental",
      meaning: "根本的な、基本的な",
      sentence: "make a ( ) change",
      jp: "根本的な改善を行う"
    },
    {
      word: "fundamental",
      meaning: "基本事項",
      sentence: "advance from the ( )s to the applications",
      jp: "基礎から応用へと進む"
    },
    {
      word: "outweigh",
      meaning: "…に（価値・重要性・影響力で）勝る",
      sentence: "The advantages ( ) the disadvantages.",
      jp: "メリットがデメリットを上回る（デメリットより勝る）"
    },
    {
      word: "critical",
      meaning: "重大な、危機的な状況の",
      sentence: "in a ( ) condition",
      jp: "危篤状態（危機的な体調）で"
    },
    {
      word: "critical",
      meaning: "批判的な",
      sentence: "be ( ) of the policy",
      jp: "その政策に批判的だ"
    },
    {
      word: "serious",
      meaning: "深刻な",
      sentence: "do ( ) damage to the environment",
      jp: "環境に深刻な打撃を与える"
    },
    {
      word: "serious",
      meaning: "（人が）真面目な、本気の",
      sentence: "be ( ) about finding a job",
      jp: "職探しに真面目だ"
    },
    {
      word: "complex",
      meaning: "複雑な",
      sentence: "a highly ( ) process",
      jp: "非常に複雑な過程"
    },
    {
      word: "complex",
      meaning: "複合的な（建物）",
      sentence: "a leisure ( )",
      jp: "総合レジャーセンター（複合施設）"
    },
    {
      word: "complex",
      meaning: "強迫観念（まれ）",
      sentence: "an inferiority ( )",
      jp: "劣等感（劣っているという強迫観念）"
    },
    {
      word: "complicated",
      meaning: "複雑な、ややこしい",
      sentence: "make things ( )",
      jp: "事態を複雑にする"
    },

    // 242-243ページ
    {
      word: "delicate",
      meaning: "繊細な、微妙な",
      sentence: "the ( ) question of salary",
      jp: "給与という繊細な問題"
    },
    {
      word: "delicate",
      meaning: "（人が）虚弱な",
      sentence: "a ( ) child",
      jp: "虚弱な子ども"
    },
    {
      word: "plain",
      meaning: "明白な、わかりやすい",
      sentence: "write in ( ) English",
      jp: "平易な英語で書く"
    },
    {
      word: "plain",
      meaning: "質素な",
      sentence: "a ( ) building",
      jp: "飾り気のない建物"
    },
    {
      word: "plain",
      meaning: "平野、原野",
      sentence: "the Kanto ( )",
      jp: "関東平野"
    },
    {
      word: "obvious",
      meaning: "明白な",
      sentence: "It was ( ) that she was unwell.",
      jp: "彼女の体調がすぐれないのは明白だった。"
    },
    {
      word: "remarkable",
      meaning: "注目すべき、すばらしい",
      sentence: "make ( ) progress",
      jp: "注目すべき進歩を遂げる"
    },
    {
      word: "outstanding",
      meaning: "傑出した、目立った",
      sentence: "an ( ) shogi player",
      jp: "傑出した棋士"
    },
    {
      word: "various",
      meaning: "さまざまな",
      sentence: "( ) ideas",
      jp: "さまざまな考え"
    },
    {
      word: "various",
      meaning: "さまざまな",
      sentence: "( ) kinds of information",
      jp: "さまざまな情報"
    },
    {
      word: "diversity",
      meaning: "多様性",
      sentence: "the ( ) of life on earth",
      jp: "地上の生物の多様性"
    },

    // 244-245ページ
    {
      word: "sort",
      meaning: "種類",
      sentence: "What ( ) of soap do you use?",
      jp: "どのような（種類の）石けんを使っているの。"
    },
    {
      word: "sort",
      meaning: "（副詞的に）（～が多少）",
      sentence: "I'm ( ) of tired today.",
      jp: "今日はちょっと疲れている。"
    },
    {
      word: "sort",
      meaning: "…を分類する",
      sentence: "The watermelons are ( )ed according to size.",
      jp: "スイカは大きさによって分類されている。"
    },
    {
      word: "marvelous",
      meaning: "驚くべき、素晴らしい",
      sentence: "have a ( ) memory",
      jp: "驚くべき記憶力を持っている"
    },
    {
      word: "active",
      meaning: "積極的な、活発な",
      sentence: "lead an ( ) school life",
      jp: "活動的な学校生活を送る"
    },
    {
      word: "positive",
      meaning: "前向きな、積極的な",
      sentence: "( ) thinking",
      jp: "前向きな考え"
    },
    {
      word: "positive",
      meaning: "確信している",
      sentence: "Are you ( )?",
      jp: "自信あるの（確信しているの）？"
    },
    {
      word: "pure",
      meaning: "純粋な",
      sentence: "a ( ) wool blanket",
      jp: "100%（純粋な）ウールの毛布"
    },
    {
      word: "pure",
      meaning: "（水、空気が）澄んだ",
      sentence: "( ) air and water",
      jp: "澄み切った空気と水"
    },
    {
      word: "steady",
      meaning: "着実な、一定の",
      sentence: "make ( ) progress",
      jp: "着実に進歩する（着実な進歩をする）"
    },
    {
      word: "flexible",
      meaning: "柔軟な、融通のきく",
      sentence: "Jim is ( ) about everything.",
      jp: "ジムはあらゆるときに柔軟に対応する。"
    },
    {
      word: "ripe",
      meaning: "熟した",
      sentence: "a ( ) mango",
      jp: "熟したマンゴー"
    },

    // 246-247ページ
    {
      word: "stable",
      meaning: "安定した",
      sentence: "His temperature remains ( ).",
      jp: "彼の体温は安定している。"
    },
    {
      word: "stable",
      meaning: "馬小屋、きゅう舎",
      sentence: "a racehorse ( )",
      jp: "競走馬のきゅう舎"
    },
    {
      word: "negative",
      meaning: "否定的な、否定の",
      sentence: "the ( ) aspects of aging",
      jp: "歳をとることの否定的な側面"
    },
    {
      word: "vague",
      meaning: "曖昧な、漠然とした",
      sentence: "a ( ) description",
      jp: "曖昧な説明"
    },
    {
      word: "weird",
      meaning: "変な",
      sentence: "Steve is a little ( ), isn't he?",
      jp: "スティーブってちょっと変だよね。"
    },
    {
      word: "rough",
      meaning: "（表面が）粗い",
      sentence: "a ( ) road",
      jp: "でこぼこの道"
    },
    {
      word: "rough",
      meaning: "おおざっぱな",
      sentence: "a ( ) idea of the plan",
      jp: "その計画の概略（おおまかな考え）"
    },
    {
      word: "rough",
      meaning: "（海、天候などが）荒れている",
      sentence: "( ) weather",
      jp: "荒れた天候"
    },
    {
      word: "severe",
      meaning: "（天候、批判、罰などが）厳しい",
      sentence: "( ) criticism",
      jp: "厳しい批判"
    },
    {
      word: "severe",
      meaning: "（けが、問題などが）ひどい",
      sentence: "a ( ) injury",
      jp: "ひどいけが"
    },
    {
      word: "passive",
      meaning: "受動的な、消極的な",
      sentence: "He is quite ( ), and never speaks out.",
      jp: "彼はかなり消極的で、決して意見をはっきり言わない。"
    },
    {
      word: "vain",
      meaning: "無駄に",
      sentence: "His effort was ( )",
      jp: "彼の努力は無駄になった。"
    },
    {
      word: "vain",
      meaning: "（努力などが）無益な",
      sentence: "( ) attempt",
      jp: "無駄な試みをして"
    },
    {
      word: "vain",
      meaning: "うぬぼれの強い",
      sentence: "a ( ) man",
      jp: "虚栄心の強い男性"
    },

    // 248-249ページ
    {
      word: "fake",
      meaning: "偽の、偽造の",
      sentence: "a ( ) diamond",
      jp: "偽物のダイヤモンド"
    },
    {
      word: "fake",
      meaning: "偽造品",
      sentence: "The picture was a ( ).",
      jp: "その絵は偽物だった。"
    },
    {
      word: "risky",
      meaning: "危険な、危ない",
      sentence: "It is ( ) to buy a used car from a private seller.",
      jp: "個人の売り手から中古車を買うのは危険だ。"
    },
    {
      word: "odd",
      meaning: "奇妙な",
      sentence: "an ( ) habit",
      jp: "奇妙な習慣"
    },
    {
      word: "odd",
      meaning: "奇数の",
      sentence: "a ticket with an ( ) number",
      jp: "奇数の番号札"
    },
    {
      word: "odd",
      meaning: "半端な、雑多な",
      sentence: "an ( ) job",
      jp: "雑用（雑多な仕事）"
    },
    {
      word: "odd",
      meaning: "（the ~s）可能性",
      sentence: "the ( ) of a plane crash",
      jp: "飛行機が墜落する可能性"
    },
    {
      word: "ignorant",
      meaning: "無知の",
      sentence: "Doris is ( ) of the world.",
      jp: "ドリスは世間知らずだ（世界について無知だ）"
    },
    {
      word: "contrast",
      meaning: "対比",
      sentence: "the ( ) between the two",
      jp: "その両者の対比"
    },
    {
      word: "contrast",
      meaning: "…を対比する",
      sentence: "( ) two things",
      jp: "2つの物を対比する"
    },
    {
      word: "contrast",
      meaning: "対照をなす",
      sentence: "( ) with the previous results",
      jp: "前回の結果と対照的だ（対照をなす）"
    },
    {
      word: "valid",
      meaning: "（理由、主張などが）妥当な、正当な",
      sentence: "a ( ) reason",
      jp: "妥当な理由"
    },
    {
      word: "valid",
      meaning: "（切符などが）有効な",
      sentence: "This passport is ( ) for ten years.",
      jp: "このパスポートは10年間有効です。"
    },
    {
      word: "rare",
      meaning: "珍しい",
      sentence: "collect ( ) stamps",
      jp: "珍しい切手を集める"
    },
    {
      word: "casual",
      meaning: "ふとした、何気ない",
      sentence: "I feel more relaxed in ( ) clothes",
      jp: "ふだん着（気楽な服）のほうが落ち着く"
    },
    {
      word: "casual",
      meaning: "形式ばらない",
      sentence: "a ( ) remark",
      jp: "ふとした発言"
    }
],
800: [
  // 800-2
  {
    word: "available",
    meaning: "（人の予定が）空いている",
    sentence: "Mr. Rogers is (   ) today.",
    jp: "ロジャース氏は本日時間がとれます。"
  },
  // 801-1
  {
    word: "practical",
    meaning: "（人，知識が）現実的な，実務の",
    sentence: "gain (   ) experience",
    jp: "実践経験を積む"
  },
  // 801-2
  {
    word: "practical",
    meaning: "（発明，道具などが）実用的な，実践的な",
    sentence: "a (   ) training system",
    jp: "実践的な練習方法"
  },
  // 802-1
  {
    word: "abstract",
    meaning: "抽象的な",
    sentence: "an (   ) work of art",
    jp: "抽象的な芸術作品"
  },
  // 802-2
  {
    word: "abstract",
    meaning: "（論文などの）要旨",
    sentence: "an (   ) of this paper",
    jp: "この論文の要旨"
  },
  // 803-1
  {
    word: "brand-new",
    meaning: "新品の，真新しい",
    sentence: "(   ) climbing boots",
    jp: "新品の登山靴"
  },
  // 804-1
  {
    word: "secondhand",
    meaning: "中古の",
    sentence: "buy (   ) clothes cheaply",
    jp: "古着を安く買う"
  },
  // 804-2
  {
    word: "secondhand",
    meaning: "間接的な",
    sentence: "(   ) news",
    jp: "又聞きのニュース"
  },
  // 805-1
  {
    word: "rapid",
    meaning: "急速な，速い",
    sentence: "(   ) economic growth",
    jp: "急速な経済成長"
  },
  // 805-2
  {
    word: "rapids",
    meaning: "急速な，速い",
    sentence: "shoot the (   ) in our canoe",
    jp: "急流をカヌーで下る"
  },
  // 806-1
  {
    word: "urgent",
    meaning: "緊急の，差し迫った",
    sentence: "There is an (   ) need for more nursery schools.",
    jp: "もっと多くの保育所が緊急に必要だ。"
  },
  // 807-1
  {
    word: "shallow",
    meaning: "浅い",
    sentence: "a (   ) bathtub",
    jp: "浅い浴槽"
  },
  // 807-2
  {
    word: "shallow",
    meaning: "（人，言動などが）浅はかな",
    sentence: "(   ) speech",
    jp: "中身のない演説"
  },
  // 808-1
  {
    word: "sharp",
    meaning: "（変化，方向転換などが）急激な",
    sentence: "a (   ) increase in prices",
    jp: "急激な物価の上昇"
  },
  // 808-2
  {
    word: "sharp",
    meaning: "（言葉が）きつい",
    sentence: "his (   ) tongue",
    jp: "彼の毒舌（きつい言葉）"
  },
  // 808-3
  {
    word: "sharp",
    meaning: "（刃物，感覚，人などが）鋭い",
    sentence: "a (   ) knife",
    jp: "鋭いナイフ"
  },
  // 808-4
  {
    word: "sharp",
    meaning: "（時間）きっかりで",
    sentence: "at ten (o'clock) (   )",
    jp: "10時きっかりに"
  },
  // 809-1
  {
    word: "calm",
    meaning: "落ち着いた",
    sentence: "The supporters stayed (   ).",
    jp: "サポーターたちは落ち着いていた。"
  },
  // 809-2
  {
    word: "calm",
    meaning: "落ち着く",
    sentence: "Try and (   ) down.",
    jp: "落ち着きなさい。"
  },
  // 809-3
  {
    word: "calm",
    meaning: "〜を落ち着かせる",
    sentence: "The doctor used medicine to (   ) him down.",
    jp: "医者は彼を落ち着かせるために薬を使った。"
  },
  // 810-1
  {
    word: "naked",
    meaning: "（人が）裸の，むき出しの",
    sentence: "swim (   ) in the river",
    jp: "川で裸で（裸の状態で）泳ぐ"
  },
  // 811-1
  {
    word: "independent",
    meaning: "独立した，無所属の",
    sentence: "I am (   ) of my parents.",
    jp: "私は両親の世話になっていない（両親から独立している）。"
  },
  // 811-2
  {
    word: "independent",
    meaning: "独立した，無所属の",
    sentence: "run as an (   )",
    jp: "無所属で立候補する"
  },
  // 812-1
  {
    word: "tense",
    meaning: "（雰囲気が）張り詰めた",
    sentence: "a (   ) atmosphere in the waiting room",
    jp: "待合室の張り詰めた雰囲気"
  },
  // 812-2
  {
    word: "tense",
    meaning: "（人が）緊張した",
    sentence: "The examinees looked (   ).",
    jp: "受験生たちは緊張しているようだった。"
  },
  // 812-3
  {
    word: "tense",
    meaning: "時制",
    sentence: "the present (   )",
    jp: "現在時制"
  },
  // 813-1
  {
    word: "narrow",
    meaning: "狭い",
    sentence: "a (   ) mountain path",
    jp: "狭い山道"
  },
  // 813-2
  {
    word: "narrow",
    meaning: "〜を狭くする，細める",
    sentence: "(   ) my eyes",
    jp: "目を細める"
  },
  // 814-1
  {
    word: "vacant",
    meaning: "（席などが）空いている，使用されていない",
    sentence: "The seat next to mine was (   ).",
    jp: "私の隣の席は空いていた。"
  },
  // 815-1
  {
    word: "vivid",
    meaning: "（記憶，描写などが）鮮明な",
    sentence: "have (   ) memories of my time in Sydney",
    jp: "シドニーで過ごした日々の鮮明な思い出が残っている。"
  }
],

815: [
  // 815-2
  {
    word: "vivid",
    meaning: "（色が）鮮やかな",
    sentence: "a (   ) blue sky",
    jp: "目の覚めるような青空。"
  },
  // 816-1
  {
    word: "awkward",
    meaning: "（動きなどが）ぎこちない",
    sentence: "the (   ) movements of the robot",
    jp: "そのロボットのぎこちない動き"
  },
  // 816-2
  {
    word: "awkward",
    meaning: "（状況が）気まずい",
    sentence: "After I laughed out loud, there was an (   ) silence.",
    jp: "私が大声で笑った後，気まずい沈黙があった。"
  },
  // 816-3
  {
    word: "awkward",
    meaning: "扱いにくい",
    sentence: "(   ) questions like \"Where do babies come from?\"",
    jp: "「赤ちゃんはどこから来るの？」といった困った（扱いにくい）質問"
  },
  // 817-1
  {
    word: "objective",
    meaning: "客観的な",
    sentence: "Historians try to be (   ).",
    jp: "歴史家は客観的であるよう努める。"
  },
  // 817-2
  {
    word: "objective",
    meaning: "目標",
    sentence: "Our main (   ) is to help the homeless.",
    jp: "私たちの主な目的はホームレスの方々に力になることだ。"
  },
  // 818-1
  {
    word: "manual",
    meaning: "手を使う，身体を使う",
    sentence: "(   ) work",
    jp: "手仕事（＝頭脳労働）"
  },
  // 818-2
  {
    word: "manual",
    meaning: "手動の",
    sentence: "switch to (   ) operation",
    jp: "手動（の操作）に切り替える"
  },
  // 818-3
  {
    word: "manual",
    meaning: "手引書",
    sentence: "a computer (   )",
    jp: "コンピュータの手引書"
  },
  // 819-1
  {
    word: "alike",
    meaning: "似ている",
    sentence: "The twins are very (   ).",
    jp: "その双子はとてもよく似ている。"
  },
  // 819-2
  {
    word: "alike",
    meaning: "（A and B 〜）（AもBも）同様に",
    sentence: "Children and parents (   ) can enjoy this book.",
    jp: "この本は子ども共々（子どもも親も）同様に楽しめる。"
  },
  // 820-1
  {
    word: "alien",
    meaning: "異質な",
    sentence: "a custom that is (   ) to me",
    jp: "私にとって異質な慣習"
  },
  // 820-2
  {
    word: "alien",
    meaning: "外国の",
    sentence: "(   ) cultures",
    jp: "外国の文化"
  },
  // 821-1
  {
    word: "tend",
    meaning: "（to do）〜する傾向にある",
    sentence: "Women (   ) to count calories more than men do.",
    jp: "女性は男性よりカロリー計算をする傾向がある。"
  },
  // 822-1
  {
    word: "deserves",
    meaning: "〜に値する",
    sentence: "Masato has trained so hard that he (   ) to win.",
    jp: "マサトは一生懸命トレーニングしたので，勝ってもおかしくない（勝つのに値する）。"
  },
  // 823-1
  {
    word: "fragments",
    meaning: "破片",
    sentence: "glass (   )",
    jp: "ガラスの破片"
  },
  // 824-1
  {
    word: "range",
    meaning: "範囲",
    sentence: "a wide (   ) of topics",
    jp: "幅広い話題"
  },
  // 824-2
  {
    word: "range",
    meaning: "（from A to B）（AからBの）範囲に及ぶ",
    sentence: "Their ages (   ) from seven to eleven.",
    jp: "彼らの年齢は7歳から11歳にわたっている。"
  },
  // 825-1
  {
    word: "scale",
    meaning: "規模",
    sentence: "do business on a large (   )",
    jp: "手広く（大規模に）商売をする"
  },
  // 825-2
  {
    word: "scale(s)",
    meaning: "（-s）体重計",
    sentence: "step on the (   )",
    jp: "体重計に乗る"
  },
  // 825-3
  {
    word: "scales",
    meaning: "うろこ",
    sentence: "remove (   ) from a fish",
    jp: "魚のうろこを落とす"
  },
  // 826-1
  {
    word: "unique",
    meaning: "（to 〜）（〜に）特有の，独自の",
    sentence: "This custom is (   ) to Japan.",
    jp: "この慣習は日本特有のものだ。"
  },
  // 826-2
  {
    word: "unique",
    meaning: "ほかに類を見ない",
    sentence: "Her voice is totally (   ).",
    jp: "彼女の声はとても独特だ。"
  },
  // 827-1
  {
    word: "particular",
    meaning: "ある特定の",
    sentence: "a (   ) situation",
    jp: "特定の状況"
  },
  // 827-2
  {
    word: "particular",
    meaning: "（about 〜）（〜に）こだわりがある",
    sentence: "I am (   ) about pillows.",
    jp: "私は枕にこだわりがある。"
  },
  // 827-3
  {
    word: "particular",
    meaning: "ある特定の",
    sentence: "Nothing in (   ).",
    jp: "（意見や予定などを尋ねられた答えとして）特にないです。"
  },
  // 828-1
  {
    word: "typical",
    meaning: "典型的な",
    sentence: "a (   ) Japanese-style breakfast",
    jp: "典型的な日本の朝食"
  },
  // 829-1
  {
    word: "general",
    meaning: "一般的な，全体の",
    sentence: "the (   ) public",
    jp: "一般大衆"
  },
  // 829-2
  {
    word: "General",
    meaning: "大将，将軍",
    sentence: "(   ) Grant",
    jp: "グラント将軍"
  },
  // 830-1
  {
    word: "ordinary",
    meaning: "平凡な，ふつうの",
    sentence: "the lives of (   ) people",
    jp: "庶民（ふつうの人々）の生活"
  }
],

831: [
  // 831-1
  {
    word: "account",
    meaning: "割合を占める",
    sentence: "Middle-aged and older people (   ) for 70% of the group.",
    jp: "中高年がその集団の70％を占める。"
  },
  // 831-2
  {
    word: "accounts",
    meaning: "（〜の）原因を説明する",
    sentence: "Stress (   ) for his failure.",
    jp: "ストレスが彼の失敗の原因だ。"
  },
  // 831-3
  {
    word: "account",
    meaning: "説明",
    sentence: "by her (   )",
    jp: "彼女の説明では"
  },
  // 831-4
  {
    word: "account",
    meaning: "口座",
    sentence: "open a bank (   )",
    jp: "銀行口座を開く"
  },
  // 832-1
  {
    word: "calculate",
    meaning: "〜を計算する",
    sentence: "(   ) this month's expenses",
    jp: "今月の出費を計算する"
  },
  // 833-1
  {
    word: "measure",
    meaning: "〜を測る",
    sentence: "Please (   ) your blood pressure.",
    jp: "血圧を測ってください。"
  },
  // 833-2
  {
    word: "measures",
    meaning: "（〜の）寸法がある",
    sentence: "His waist (   ) over a meter.",
    jp: "彼のウエストは1メートルを超えている（寸法がある）。"
  },
  // 833-3
  {
    word: "measures",
    meaning: "（-s）手段",
    sentence: "take drastic (   ) to pass the bill",
    jp: "法案を通すために強硬手段に出る"
  },
  // 834-1
  {
    word: "declining",
    meaning: "減る，衰退する",
    sentence: "Educational standards are (   ).",
    jp: "教育水準が下がっている。"
  },
  // 834-2
  {
    word: "decline",
    meaning: "〜を断る",
    sentence: "(   ) an invitation to dinner",
    jp: "夕食の誘いを断る"
  },
  // 834-3
  {
    word: "decline",
    meaning: "減少，下落",
    sentence: "a sharp (   ) in unemployment",
    jp: "失業率の急激な減少"
  },
  // 835-1
  {
    word: "split",
    meaning: "〜を割る",
    sentence: "Let's (   ) the bill.",
    jp: "割り勘にしよう（勘定を割る）。"
  },
  // 835-2
  {
    word: "split",
    meaning: "〜を分裂させる",
    sentence: "The issue (   ) the church.",
    jp: "その問題は教会を分裂させた。"
  },
  // 835-3
  {
    word: "split",
    meaning: "〜を割る",
    sentence: "(   ) into three groups",
    jp: "3つのグループに分かれる"
  },
  // 835-4
  {
    word: "split",
    meaning: "分裂",
    sentence: "a (   ) in the party",
    jp: "党の分裂"
  },
  // 836-1
  {
    word: "volume",
    meaning: "容積，体積",
    sentence: "the (   ) of a cylinder",
    jp: "円柱の体積"
  },
  // 836-2
  {
    word: "volume",
    meaning: "ボリューム，音量",
    sentence: "turn down the (   ) on the TV",
    jp: "テレビのボリュームを小さくする"
  },
  // 836-3
  {
    word: "volumes",
    meaning: "（全集などの）1巻",
    sentence: "an encyclopedia in 30 (   )",
    jp: "30巻からなる百科事典"
  },
  // 837-1
  {
    word: "proportion",
    meaning: "比率",
    sentence: "The (   ) of boys to girls in my school is five to one.",
    jp: "私の学校の男女比は5：1だ。"
  },
  // 837-2
  {
    word: "proportion",
    meaning: "部分",
    sentence: "a large (   ) of the audience",
    jp: "観客の大部分"
  },
  // 837-3
  {
    word: "proportions",
    meaning: "（-s）規模，大きさ",
    sentence: "a dam of great (   )",
    jp: "大規模なダム"
  },
  // 838-1
  {
    word: "dozen",
    meaning: "1ダース（12個）",
    sentence: "two (   ) eggs",
    jp: "2ダースの卵"
  },
  // 838-2
  {
    word: "dozens",
    meaning: "（-s of 〜）数〜",
    sentence: "(   ) of people",
    jp: "数十人"
  },
  // 839-1
  {
    word: "amount",
    meaning: "量",
    sentence: "a large (   ) of fat",
    jp: "大量の脂肪"
  },
  // 839-2
  {
    word: "amount",
    meaning: "（to 〜）（合計が）〜に達する",
    sentence: "My debts (   ) to $200.",
    jp: "私の借金は合計200ドルになる。"
  },
  // 839-3
  {
    word: "amount",
    meaning: "結局〜になる",
    sentence: "Our ideas (   ) to the same thing.",
    jp: "私たちの考えは結局同じことだ。"
  },
  // 840-1
  {
    word: "mass",
    meaning: "大量",
    sentence: "a huge (   ) of data",
    jp: "非常に多くのデータ"
  },
  // 840-2
  {
    word: "masses",
    meaning: "（the -es）大衆",
    sentence: "a movie aimed at the (   )",
    jp: "大衆向けの映画"
  },
  // 840-3
  {
    word: "mass",
    meaning: "かたまり",
    sentence: "a (   ) of concrete",
    jp: "コンクリートのかたまり"
  },
  // 840-4
  {
    word: "mass",
    meaning: "質量",
    sentence: "the (   ) of our solar system",
    jp: "太陽系の質量"
  }
],

840: [
  // 840-5
  {
    word: "Mass",
    meaning: "（M-）ミサ",
    sentence: "go to (   )",
    jp: "ミサに行く"
  },
  // 841-1
  {
    word: "shortage",
    meaning: "不足",
    sentence: "There is a water (   ) in this area.",
    jp: "この地域は水が不足している。"
  },
  // 842-1
  {
    word: "enormous",
    meaning: "莫大な，巨大な",
    sentence: "an (   ) amount of time",
    jp: "莫大な（量の）時間"
  },
  // 843-1
  {
    word: "spare",
    meaning: "余分な，予備の",
    sentence: "in my (   ) time",
    jp: "余分な時間で"
  },
  // 843-2
  {
    word: "spare",
    meaning: "（時間やお金，労力）を割く",
    sentence: "Could you (   ) me a few minutes?",
    jp: "2，3分割いてもらえませんか？"
  },
  // 843-3
  {
    word: "spare",
    meaning: "〜を惜しむ",
    sentence: "(   ) no expense",
    jp: "出費を惜しまない"
  },
  // 844-1
  {
    word: "arrange",
    meaning: "〜を手配する",
    sentence: "(   ) for someone to drive her home",
    jp: "誰かが彼女を家まで車で送ってくれるよう手配する"
  },
  // 844-2
  {
    word: "arrange",
    meaning: "〜を整理する",
    sentence: "(   ) the documents according to size [their size(s)]",
    jp: "大きさに合わせて書類を整理する"
  },
  // 845-1
  {
    word: "adapt",
    meaning: "適応する",
    sentence: "(   ) to a new school life",
    jp: "新しい学校生活に適応する"
  },
  // 845-2
  {
    word: "adapt",
    meaning: "〜を適応させる",
    sentence: "(   ) the menu to customers' needs",
    jp: "メニューを客の要望に合わせる"
  },
  // 846-1
  {
    word: "matches",
    meaning: "（サイズが人に）合う",
    sentence: "This sweater (   ) (= goes with) your skirt.",
    jp: "このセーターは君のスカートによく合っている。"
  },
  // 846-2
  {
    word: "match",
    meaning: "〜に匹敵する",
    sentence: "No one can (   ) her in tennis.",
    jp: "テニスで彼女にかなう人はいない。"
  },
  // 846-3
  {
    word: "match",
    meaning: "（釣り合う人，物）好敵手",
    sentence: "He is no (   ) for the champion.",
    jp: "彼はチャンピオンの相手（好敵手）ではない。"
  },
  // 847-1
  {
    word: "fits",
    meaning: "（サイズが人に）合う",
    sentence: "This dress (   ) you.",
    jp: "このワンピースは（サイズが）君にぴったりだ。"
  },
  // 847-2
  {
    word: "fit",
    meaning: "健康な",
    sentence: "walk every morning to keep (   )",
    jp: "健康維持のため毎朝歩く"
  },
  // 847-3
  {
    word: "fit",
    meaning: "（to do）〜（するの）に適した",
    sentence: "This mushroom is not (   ) to eat.",
    jp: "このキノコは食用には適さない。"
  },
  // 848-1
  {
    word: "emergency",
    meaning: "緊急事態",
    sentence: "An (   ) has arisen.",
    jp: "緊急事態が生じた。"
  },
  // 848-2
  {
    word: "emergency",
    meaning: "緊急の",
    sentence: "an (   ) room (ER)",
    jp: "救急処置室"
  },
  // 849-1
  {
    word: "occasion",
    meaning: "場合",
    sentence: "on this (   )",
    jp: "このような場合には"
  },
  // 849-2
  {
    word: "occasions",
    meaning: "行事，祝い事",
    sentence: "keep the dress for special (   )",
    jp: "その服を特別な行事のためにとっておく"
  },
  // 850-1
  {
    word: "accidental",
    meaning: "偶然の，偶発的な",
    sentence: "an (   ) meeting",
    jp: "偶然の出会い"
  },
  // 851-1
  {
    word: "current",
    meaning: "最新の，今の",
    sentence: "the (   ) energy crisis",
    jp: "現在のエネルギー危機"
  },
  // 851-2
  {
    word: "current",
    meaning: "流通して",
    sentence: "according to a (   ) rumor",
    jp: "世間の流通しているうわさによれば"
  },
  // 851-3
  {
    word: "current",
    meaning: "流れ，風潮",
    sentence: "a 10 amp electrical (   )",
    jp: "10アンペアの電流"
  },
  // 852-1
  {
    word: "temporary",
    meaning: "一時的な",
    sentence: "a (   ) license",
    jp: "仮免許"
  },
  // 853-1
  {
    word: "permanent",
    meaning: "永久的な",
    sentence: "a (   ) member of the U.N. Security Council",
    jp: "国連安全保障理事会の常任理事国"
  },
  // 854-1
  {
    word: "previous",
    meaning: "（時間，順序で）前の，以前の",
    sentence: "the (   ) morning",
    jp: "（ある日の）前の朝"
  },
  // 855-1
  {
    word: "former",
    meaning: "（the 〜）前者",
    sentence: "the (   ) and the latter",
    jp: "前者と後者"
  },
  // 855-2
  {
    word: "former",
    meaning: "元の，前の，旧",
    sentence: "a (   ) colony of Britain",
    jp: "旧英国植民地"
  },
  // 856-1
  {
    word: "contemporary",
    meaning: "現代の",
    sentence: "(   ) literature",
    jp: "現代文学"
  }
],

856: [
  // 856-2
  {
    word: "contemporary",
    meaning: "同時代の",
    sentence: "Shakespeare was (   ) with Tokugawa Ieyasu.",
    jp: "シェイクスピアは徳川家康と同時代の人だった。"
  },
  // 856-3
  {
    word: "contemporaries",
    meaning: "同時代の人",
    sentence: "We were (   ) at high school.",
    jp: "私たちは高校の同期だった。"
  },
  // 857-1
  {
    word: "lately",
    meaning: "最近",
    sentence: "Have you seen him (   )?",
    jp: "最近彼と会った？"
  },
  // 858-1
  {
    word: "immediately",
    meaning: "すぐに",
    sentence: "(   ) after breakfast",
    jp: "朝食後すぐに"
  },
  // 858-2
  {
    word: "immediately",
    meaning: "直後に",
    sentence: "(   ) behind the driver",
    jp: "運転手のすぐ後ろに"
  },
  // 859-1
  {
    word: "deadline",
    meaning: "（〜の）締め切り（日）",
    sentence: "The (   ) for entries is next Monday.",
    jp: "登録の締め切りは次の月曜日だ。"
  },
  // 860-1
  {
    word: "decade",
    meaning: "10年",
    sentence: "decades of research",
    jp: "数十年にわたる研究"
  },
  // 861-1
  {
    word: "supply",
    meaning: "〜を供給する",
    sentence: "(   ) people with drinking water",
    jp: "人々に飲み水を供給する"
  },
  // 861-2
  {
    word: "supply",
    meaning: "供給",
    sentence: "(   ) and demand",
    jp: "需要と供給"
  },
  // 862-1
  {
    word: "replaced",
    meaning: "〜に取って代わる",
    sentence: "AI has (   ) humans in many fields.",
    jp: "人工知能が多くの分野で人間に取って代わった。"
  },
  // 862-2
  {
    word: "replace",
    meaning: "（A with [by] B）（AをBに）取り替える",
    sentence: "(   ) [exchange] the worn tire with a new one",
    jp: "すり減ったタイヤを新しいタイヤに交換する"
  },
  // 863-1
  {
    word: "exchange",
    meaning: "〜を交換する",
    sentence: "(   ) Japanese yen for U.S. dollars",
    jp: "日本円を米ドルと交換する"
  },
  // 863-2
  {
    word: "exchange",
    meaning: "交換",
    sentence: "go abroad on a student (   ) program",
    jp: "学生交換プログラムで留学する"
  },
  // 864-1
  {
    word: "substitute",
    meaning: "（A for B）（Bの代わりにA）を用いる",
    sentence: "(   ) honey for sugar",
    jp: "砂糖の代わりにはちみつを使う"
  },
  // 864-2
  {
    word: "substitute",
    meaning: "〜を代わりにする",
    sentence: "(   ) for her",
    jp: "彼女の代役をする"
  },
  // 864-3
  {
    word: "substitute",
    meaning: "身代わり，代用品",
    sentence: "a (   ) national holiday",
    jp: "振替休日"
  },
  // 864-4
  {
    word: "substitute",
    meaning: "（for 〜）（〜の）代わりになる",
    sentence: "There is no (   ) for experience.",
    jp: "経験に代わるものはない。"
  },
  // 865-1
  {
    word: "submit",
    meaning: "（書類，発表などを）提出する",
    sentence: "(   ) an application form",
    jp: "申込用紙を提出する"
  },
  // 865-2
  {
    word: "submit",
    meaning: "（to 〜）（〜に）屈服する",
    sentence: "(   ) to authority",
    jp: "権力に屈する"
  },
  // 866-1
  {
    word: "alternative",
    meaning: "（to 〜）（〜の）代わり（のもの）",
    sentence: "an (   ) to nuclear power",
    jp: "原子力の代わりになるもの"
  },
  // 866-2
  {
    word: "alternative",
    meaning: "選択肢",
    sentence: "There is no other (   ).",
    jp: "ほかの選択肢がない。"
  },
  // 866-3
  {
    word: "alternative",
    meaning: "代替エネルギー源",
    sentence: "(   ) energy sources",
    jp: "代替エネルギー源"
  },
  // 867-1
  {
    word: "deliver",
    meaning: "〜を配達する",
    sentence: "(   ) pizzas",
    jp: "ピザを配達する"
  },
  // 867-2
  {
    word: "deliver",
    meaning: "（演説など）をする",
    sentence: "(   ) his inaugural address",
    jp: "（彼の）就任演説をする"
  },
  // 868-1
  {
    word: "enclose",
    meaning: "〜を同封する",
    sentence: "(   ) several photos",
    jp: "何枚かの写真を同封する"
  },
  // 868-2
  {
    word: "enclosed",
    meaning: "〜を囲む，閉じ込める",
    sentence: "be (   ) by high walls",
    jp: "高い塀に囲まれている"
  },
  // 869-1
  {
    word: "envelope",
    meaning: "封筒",
    sentence: "put a stamp on the (   )",
    jp: "封筒に切手を貼る"
  },
  // 870-1
  {
    word: "tricks",
    meaning: "（悪意のない）いたずら",
    sentence: "play (   ) on Kevin",
    jp: "ケビンにいたずらをする"
  },
  // 870-2
  {
    word: "tricks",
    meaning: "（巧妙な）手口，策略",
    sentence: "use cheap (   ) to get promoted",
    jp: "出世のために小細工をする"
  },
  // 870-3
  {
    word: "tricks",
    meaning: "芸，手品",
    sentence: "teach a dog some (   )",
    jp: "イヌに芸を教える"
  }
],

870: [
  // 870-4
  {
    word: "tricks",
    meaning: "（of 〜）秘訣",
    sentence: "learn the (   ) of the trade",
    jp: "商売のコツをつかむ"
  },
  // 870-5
  {
    word: "trick",
    meaning: "〜をだます",
    sentence: "(   ) him out of his money",
    jp: "彼をだまして金を巻き上げる"
  },
  // 871-1
  {
    word: "load",
    meaning: "荷（物）",
    sentence: "carry a heavy (   ) on my back",
    jp: "重い荷物を背負う"
  },
  // 871-2
  {
    word: "loaded",
    meaning: "（A with B）（AにB（荷））を積む",
    sentence: "be (   ) with timber",
    jp: "材木が積まれている"
  },
  // 872-1
  {
    word: "contents",
    meaning: "中身，内容",
    sentence: "the (   ) of her bag",
    jp: "彼女のかばんの中身"
  },
  // 872-2
  {
    word: "content",
    meaning: "（〜に）満足して",
    sentence: "I'm (   ) with my current job.",
    jp: "今の仕事に満足している。"
  },
  // 873-1
  {
    word: "households",
    meaning: "（集団的に）世帯，家庭",
    sentence: "a survey of 2,000 (   )",
    jp: "2,000世帯の調査"
  },
  // 873-2
  {
    word: "household",
    meaning: "家庭の",
    sentence: "do (   ) chores",
    jp: "家事（家庭の雑事）をする"
  },
  // 874-1
  {
    word: "goods",
    meaning: "（-s）商品",
    sentence: "antibacterial (   )",
    jp: "抗菌グッズ"
  },
  // 874-2
  {
    word: "good",
    meaning: "利益",
    sentence: "Walking will do you (   ).",
    jp: "歩くのはいいよ（あなたに利益をもたらす）。"
  },
  // 874-3
  {
    word: "good",
    meaning: "（a 〜 many 〜）かなりの",
    sentence: "a (   ) many hours",
    jp: "かなりの時間"
  },
  // 875-1
  {
    word: "luxuries",
    meaning: "高級（品），ぜいたく品",
    sentence: "spend a lot of money on (   )",
    jp: "ぜいたく品に多額のお金を使う"
  },
  // 875-2
  {
    word: "luxury",
    meaning: "豪華な，ぜいたくな",
    sentence: "a (   ) hotel",
    jp: "豪華なホテル"
  },
  // 876-1
  {
    word: "credit",
    meaning: "クレジットカード",
    sentence: "Do you accept (   ) cards?",
    jp: "クレジットカードは使えますか。"
  },
  // 876-2
  {
    word: "credit",
    meaning: "功績，手柄",
    sentence: "All the (   ) goes to him.",
    jp: "すべての彼の手柄（功績）だ。"
  },
  // 876-3
  {
    word: "credits",
    meaning: "（大学の）単位",
    sentence: "cannot get (   ) simply by attending class",
    jp: "授業に出るだけでは単位はもらえない。"
  },
  // 876-4
  {
    word: "credited",
    meaning: "〜の功績を認める",
    sentence: "He is (   ) with that invention.",
    jp: "その発明は彼の功績だ（彼はその発明の功績があると認められる）。"
  },
  // 877-1
  {
    word: "questionnaire",
    meaning: "アンケート",
    sentence: "a survey using a (   )",
    jp: "アンケート（を用いた）調査"
  },
  // 878-1
  {
    word: "reservation",
    meaning: "予約",
    sentence: "make a (   ) under the name of Sophie",
    jp: "ソフィーの名前で予約する"
  },
  // 878-2
  {
    word: "reservations",
    meaning: "慎重な姿勢",
    sentence: "have (   ) about the proposal",
    jp: "その提案に対して慎重な姿勢を保つ"
  },
  // 879-1
  {
    word: "fuss",
    meaning: "大騒ぎ",
    sentence: "make a (   ) about trivial things",
    jp: "くだらないことで大騒ぎする"
  },
  // 880-1
  {
    word: "reward",
    meaning: "報酬，報奨金",
    sentence: "the (   ) for the job",
    jp: "その仕事に対する報酬"
  },
  // 880-2
  {
    word: "reward",
    meaning: "〜に褒美を与える，報いる",
    sentence: "(   ) children for behaving well",
    jp: "いい子にしていた子どもたちにご褒美をあげる"
  },
  // 881-1
  {
    word: "farewell",
    meaning: "別れのあいさつ",
    sentence: "have a (   ) party",
    jp: "送別会を開く"
  },
  // 882-1
  {
    word: "reception",
    meaning: "（受付の）もてなし，歓迎会",
    sentence: "receive a warm (   )",
    jp: "温かい歓迎を受ける"
  },
  // 882-2
  {
    word: "reception",
    meaning: "（ホテルの）フロント",
    sentence: "leave the key at the (   ) desk",
    jp: "（ホテルの）フロントに鍵を預ける"
  },
  // 882-3
  {
    word: "reception",
    meaning: "受信状況",
    sentence: "The phone (   ) is not good here.",
    jp: "ここは電波（の受信状況）がよくない。"
  },
  // 883-1
  {
    word: "portion",
    meaning: "（食事の）1盛り",
    sentence: "a large (   ) of roast beef",
    jp: "大盛りのローストビーフ"
  },
  // 883-2
  {
    word: "portions",
    meaning: "食事の分",
    sentence: "eat two (   ) of spaghetti",
    jp: "スパゲッティを2人前食べる"
  },
  // 883-3
  {
    word: "portion",
    meaning: "（全体の）一部分",
    sentence: "a (   ) of his income",
    jp: "彼の収入の一部"
  }
],

884: [
  // 884-1
  {
    word: "laundry",
    meaning: "（集中的に）洗濯物",
    sentence: "cook, clean, and do the (   )",
    jp: "料理，掃除，洗濯をする"
  },
  // 884-2
  {
    word: "laundry",
    meaning: "（集中的に）洗濯物",
    sentence: "bring the (   ) in",
    jp: "洗濯物を取り込む"
  },
  // 884-3
  {
    word: "laundry",
    meaning: "（集中的に）洗濯物",
    sentence: "a coin-operated (   )",
    jp: "コインランドリー"
  },
  // 885-1
  {
    word: "nap",
    meaning: "昼寝，仮眠",
    sentence: "I'll just take a little (   ).",
    jp: "ちょっと昼寝をします。"
  },
  // 885-2
  {
    word: "nap",
    meaning: "昼寝をする，仮眠をとる",
    sentence: "(   ) after lunch",
    jp: "昼食後に昼寝をする"
  },
  // 886-1
  {
    word: "woke",
    meaning: "目が覚める",
    sentence: "I (   ) up at six a.m., but did not get up.",
    jp: "午前6時に目が覚めたが，起きなかった。"
  },
  // 886-2
  {
    word: "Wake",
    meaning: "（寝ている人）を起こす",
    sentence: "(   ) me up at five a.m.",
    jp: "午前5時に起こしてください。"
  },
  // 887-1
  {
    word: "vending machine",
    meaning: "自動販売機",
    sentence: "a soft drink (   )",
    jp: "清涼飲料水の自動販売機"
  },
  // 888-1
  {
    word: "grocery",
    meaning: "食料雑貨店",
    sentence: "a local (   ) (store)",
    jp: "地元の食料雑貨店"
  },
  // 888-2
  {
    word: "groceries",
    meaning: "（-ies）食料雑貨類",
    sentence: "put my (   ) in a plastic bag",
    jp: "食料品をビニール袋に入れる"
  },
  // 889-1
  {
    word: "appointment",
    meaning: "（病院などの）予約，（会合などの）約束",
    sentence: "I have an (   ) to see the dentist at five.",
    jp: "5時に歯医者の予約を入れている。"
  },
  // 889-2
  {
    word: "appointment",
    meaning: "（役職などの）任命，指名",
    sentence: "the (   ) of new ministers",
    jp: "新たな大臣の任命"
  },
  // 890-1
  {
    word: "consult",
    meaning: "〜に相談する",
    sentence: "You'd better (   ) your doctor.",
    jp: "医者に診てもらいなさい。"
  },
  // 890-2
  {
    word: "consult",
    meaning: "（辞書などを）引く",
    sentence: "(   ) a dictionary",
    jp: "辞書を引く"
  },
  // 890-3
  {
    word: "consult",
    meaning: "（with 〜）（〜に）相談する",
    sentence: "(   ) with a friend about study methods",
    jp: "勉強の仕方について友達に相談する"
  },
  // 891-1
  {
    word: "registered",
    meaning: "〜を登録する，記録する",
    sentence: "Koyasan is (   ) as a World Heritage Site.",
    jp: "高野山は世界遺産に登録されている。"
  },
  // 891-2
  {
    word: "register",
    meaning: "（for 〜）（授業などに）登録する",
    sentence: "(   ) for the first semester",
    jp: "前期の履修を登録する"
  },
  // 891-3
  {
    word: "register",
    meaning: "（ホテルなどで）記帳する",
    sentence: "(   ) at the reception desk",
    jp: "フロントで記帳する"
  },
  // 891-4
  {
    word: "register",
    meaning: "名簿",
    sentence: "a class (   )",
    jp: "クラス名簿"
  },
  // 892-1
  {
    word: "dye",
    meaning: "〜を染める",
    sentence: "(   ) my hair brown",
    jp: "髪を茶色に染める"
  },
  // 892-2
  {
    word: "dye",
    meaning: "染料",
    sentence: "an acid (   )",
    jp: "酸性染料"
  },
  // 893-1
  {
    word: "subscribe",
    meaning: "（to 〜）（〜を）定期購読する，加入している",
    sentence: "(   ) to the magazine",
    jp: "雑誌を定期購読する"
  },
  // 893-2
  {
    word: "subscribe",
    meaning: "（主に否定文で）（to 〜）（考えなどを）支持する",
    sentence: "cannot (   ) to that opinion",
    jp: "その意見には賛成（支持）できない。"
  },
  // 894-1
  {
    word: "guaranteed",
    meaning: "〜を保証する",
    sentence: "Freedom of speech is (   ) under the Constitution of Japan.",
    jp: "言論の自由は日本国憲法で保証されている。"
  },
  // 894-2
  {
    word: "guarantee",
    meaning: "保証（期間）",
    sentence: "a PC with a one-year (   )",
    jp: "1年間の保証つきパソコン"
  },
  // 895-1
  {
    word: "wipe",
    meaning: "〜を拭く",
    sentence: "(   ) the table",
    jp: "テーブルを拭く"
  },
  // 895-2
  {
    word: "wiped",
    meaning: "〜を拭き取る，壊滅させる",
    sentence: "The entire village was (   ) out by the tornado.",
    jp: "村全体が竜巻によって壊滅させられた。"
  },
  // 896-1
  {
    word: "sweep",
    meaning: "（床，地面を）掃く",
    sentence: "(   ) the floor with a broom",
    jp: "ほうきで床を掃く"
  },
  // 896-2
  {
    word: "swept",
    meaning: "（嵐，波などが）〜を押し流す",
    sentence: "The flood (   ) away the bridge.",
    jp: "洪水が橋を押し流した。"
  },
  // 897-1
  {
    word: "transfer",
    meaning: "乗り換える",
    sentence: "(   ) at Rome",
    jp: "ローマで乗り換える"
  }
],

897: [
  // 897-2
  {
    word: "transferred",
    meaning: "（転勤，転校，移動）させる",
    sentence: "be (   ) to the London branch",
    jp: "ロンドン支店に転勤する"
  },
  // 897-3
  {
    word: "transferred",
    meaning: "（転勤，転校，移動）させる",
    sentence: "be (   ) to another department",
    jp: "別の部署に異動する（異動させられる）"
  },
  // 897-4
  {
    word: "transfer",
    meaning: "（銀行で）〜を振り込む",
    sentence: "(   ) 100,000 yen to his bank account",
    jp: "彼の銀行口座に10万円を振り込む"
  },
  // 898-1
  {
    word: "divorced",
    meaning: "離婚する",
    sentence: "They have (   ).",
    jp: "彼らは離婚した。"
  },
  // 898-2
  {
    word: "divorce",
    meaning: "〜と離婚する",
    sentence: "(   ) my wife",
    jp: "妻と離婚する"
  },
  // 898-3
  {
    word: "divorce",
    meaning: "離婚",
    sentence: "a rise in the (   ) rate",
    jp: "離婚率の増加"
  },
  // 899-1
  {
    word: "fate",
    meaning: "運命，宿命",
    sentence: "A terrible (   ) awaited them.",
    jp: "恐ろしい運命が彼らを待ち受けていた。"
  },
  // 900-1
  {
    word: "destiny",
    meaning: "運命",
    sentence: "It was his (   ) to save his nation.",
    jp: "国を救うことが彼の運命だった。"
  },
  // 901-1
  {
    word: "flavor",
    meaning: "風味，味",
    sentence: "ice cream with a green tea (   )",
    jp: "抹茶味のアイスクリーム"
  },
  // 902-1
  {
    word: "perfume",
    meaning: "香水",
    sentence: "the (   ) of roses",
    jp: "バラの香り"
  },
  // 902-2
  {
    word: "perfume",
    meaning: "香水",
    sentence: "wear a cheap (   )",
    jp: "安物の香水をつけている"
  },
  // 903-1
  {
    word: "ingredients",
    meaning: "（料理などの）材料",
    sentence: "the (   ) of lasagne",
    jp: "ラザニアの材料"
  },
  // 903-2
  {
    word: "ingredient",
    meaning: "（何かを達成するための）要因",
    sentence: "the essential (   ) of a great team",
    jp: "すばらしいチームに不可欠な要素"
  },
  // 903-3
  {
    word: "ingredients",
    meaning: "成分",
    sentence: "active (   ) in these cosmetics",
    jp: "これらの化粧品の有効成分"
  },
  // 904-1
  {
    word: "bitter",
    meaning: "苦い，つらい",
    sentence: "a (   ) experience",
    jp: "つらい経験"
  },
  // 904-2
  {
    word: "bitter",
    meaning: "憤慨して",
    sentence: "feel (   ) about the way I have been treated",
    jp: "今までの扱われ方に憤慨する"
  },
  // 905-1
  {
    word: "aisle",
    meaning: "通路",
    sentence: "prefer an (   ) seat to a window seat",
    jp: "窓側の席より通路側の席のほうが好きだ"
  },
  // 906-1
  {
    word: "track",
    meaning: "足跡，小道",
    sentence: "keep (   ) of my schedule",
    jp: "スケジュール管理をする（スケジュールの経過を追う）"
  },
  // 906-2
  {
    word: "track",
    meaning: "（鉄道の）線路，プラットホーム",
    sentence: "This train leaves from (   ) 5.",
    jp: "この電車は5番線から発車します。"
  },
  // 906-3
  {
    word: "track",
    meaning: "〜を追跡する",
    sentence: "(   ) the plane with radar",
    jp: "レーダーで飛行機を追跡する"
  },
  // 907-1
  {
    word: "district",
    meaning: "地区",
    sentence: "an election (   )",
    jp: "選挙区"
  },
  // 908-1
  {
    word: "facilities",
    meaning: "施設，設備",
    sentence: "indoor sports (   )",
    jp: "室内スポーツ施設"
  },
  // 908-2
  {
    word: "facility",
    meaning: "能力，器用さ",
    sentence: "have a great (   ) for language",
    jp: "語学のすぐれた才能がある"
  },
  // 909-1
  {
    word: "height",
    meaning: "高さ",
    sentence: "line up in order of (   )",
    jp: "身長順に並ぶ"
  },
  // 909-2
  {
    word: "heights",
    meaning: "高い所",
    sentence: "I am scared of (   ).",
    jp: "私は高所恐怖症です。"
  },
  // 909-3
  {
    word: "height",
    meaning: "最盛期",
    sentence: "at the (   ) of the tourist season",
    jp: "観光シーズンの最盛期に"
  },
  // 910-1
  {
    word: "distant",
    meaning: "遠い",
    sentence: "a (   ) [far] island",
    jp: "遠い島"
  },
  // 911-1
  {
    word: "located",
    meaning: "（be 〜d）〜に位置している",
    sentence: "New Mexico is (   ) 2,240 meters above sea level.",
    jp: "ニューメキシコは海抜2,240メートルの位置にある。"
  },
  // 911-2
  {
    word: "locate",
    meaning: "〜の場所を見つける",
    sentence: "(   ) the restaurant on the map",
    jp: "地図でレストランの場所を見つける"
  },
  // 912-1
  {
    word: "occupy",
    meaning: "〜を占める",
    sentence: "(   ) two seats on the train",
    jp: "電車で2つの席を占有する"
  }
],

913: [
  // 913-1
  {
    word: "surrounded",
    meaning: "〜を取り囲む，包囲する",
    sentence: "a mansion (   ) by red brick walls",
    jp: "赤れんがの塀に囲まれたお屋敷"
  },
  // 914-1
  {
    word: "classical",
    meaning: "（音楽，バレエなどで）クラシックの",
    sentence: "(   ) music",
    jp: "クラシック音楽"
  },
  // 914-2
  {
    word: "classical",
    meaning: "古典的な",
    sentence: "(   ) literature",
    jp: "（ギリシャ，ローマの）古典文学"
  },
  // 915-1
  {
    word: "civilization",
    meaning: "文明",
    sentence: "an advanced (   )",
    jp: "高度な文明"
  },
  // 916-1
  {
    word: "heritage",
    meaning: "遺産",
    sentence: "the cultural (   ) of Japan",
    jp: "日本の文化遺産"
  },
  // 917-1
  {
    word: "script",
    meaning: "台本，脚本",
    sentence: "a film (   )",
    jp: "映画の台本"
  },
  // 917-2
  {
    word: "script",
    meaning: "（ある言語の）文字",
    sentence: "in Arabic (   )",
    jp: "アラビア文字で"
  },
  // 917-3
  {
    word: "scripts",
    meaning: "（手書きの）文字",
    sentence: "try to read his badly written (   )",
    jp: "彼の下手な文字を読もうとする"
  },
  // 918-1
  {
    word: "tale",
    meaning: "話",
    sentence: "a Japanese folk (   )",
    jp: "日本の民話"
  },
  // 919-1
  {
    word: "literature",
    meaning: "文学",
    sentence: "the Nobel Prize in (   )",
    jp: "ノーベル文学賞"
  },
  // 919-2
  {
    word: "literature",
    meaning: "（特定の分野の）文献",
    sentence: "the medical (   )",
    jp: "医学に関わる文献"
  },
  // 920-1
  {
    word: "tragedy",
    meaning: "悲劇",
    sentence: "9/11 was a terrible (   ).",
    jp: "9/11（同時多発テロ）は本当に悲劇だった。"
  },
  // 921-1
  {
    word: "poetry",
    meaning: "（集合的に）詩",
    sentence: "learn a lot of (   ) by heart",
    jp: "多くの詩を暗記する"
  },
  // 921-2
  {
    word: "poem",
    meaning: "個々の詩",
    sentence: "learn a (   ) by heart",
    jp: "1つの詩を暗記する"
  },
  // 922-1
  {
    word: "biography",
    meaning: "伝記",
    sentence: "a (   ) of Helen Keller",
    jp: "ヘレン・ケラーの伝記"
  },
  // 923-1
  {
    word: "term",
    meaning: "用語，言葉",
    sentence: "the (   ) \"digital native\"",
    jp: "「デジタルネイティブ」という言葉"
  },
  // 923-2
  {
    word: "term",
    meaning: "期間，学期，任期",
    sentence: "our autumn (   )",
    jp: "秋学期"
  },
  // 923-3
  {
    word: "terms",
    meaning: "関係にある",
    sentence: "I am on good (   ) with her after our divorce.",
    jp: "離婚後も彼女と良好な関係にある。"
  },
  // 923-4
  {
    word: "terms",
    meaning: "契約などの条件",
    sentence: "I'll only take the job on my own (   ).",
    jp: "私の条件を受け入れていただけないなら，その仕事はやれません。"
  },
  // 924-1
  {
    word: "proverb",
    meaning: "ことわざ",
    sentence: "As the (   ) goes [says], time flies.",
    jp: "諺にもあるように，光陰矢の如しだ。"
  },
  // 925-1
  {
    word: "dialect",
    meaning: "方言",
    sentence: "speak in the Kansai (   )",
    jp: "関西弁で話す"
  },
  // 926-1
  {
    word: "fluent",
    meaning: "流暢な",
    sentence: "He speaks (   ) Spanish.",
    jp: "彼はスペイン語が流暢だ。"
  },
  // 927-1
  {
    word: "translate",
    meaning: "〜を翻訳する",
    sentence: "(   ) a sentence literally",
    jp: "文を直訳する（文字どおりに文を訳す）"
  },
  // 927-2
  {
    word: "translate",
    meaning: "（into 〜）（結果として）〜に変わる",
    sentence: "Anger can (   ) into violence.",
    jp: "怒りは暴力に変わり得る。"
  },
  // 928-1
  {
    word: "defined",
    meaning: "〜を定義する",
    sentence: "Obesity is (   ) as a BMI of 30 or above.",
    jp: "肥満はBMI30以上と定義されている。"
  },
  // 928-2
  {
    word: "define",
    meaning: "〜を規定する",
    sentence: "(   ) our duties",
    jp: "私たちの任務を規定する"
  },
  // 929-1
  {
    word: "interpret",
    meaning: "〜を解釈する",
    sentence: "(   ) his silence as a refusal",
    jp: "彼の沈黙を拒絶と解釈する"
  },
  // 929-2
  {
    word: "interpret",
    meaning: "〜を通訳する",
    sentence: "(   ) foreign languages",
    jp: "外国語を通訳する"
  },
  // 929-3
  {
    word: "interpret",
    meaning: "通訳する",
    sentence: "I'll (   ) for you.",
    jp: "僕が君のために通訳をします。"
  },
  // 930-1
  {
    word: "quote",
    meaning: "〜を引用する",
    sentence: "(   ) a passage from the Bible",
    jp: "聖書の一節を引用する"
  }
],

930: [
  // 930-2
  {
    word: "quote",
    meaning: "（人に）価格を提示する",
    sentence: "(   ) $100 for this table",
    jp: "このテーブルに100ドルの価格を提示する"
  },
  // 930-3
  {
    word: "quote",
    meaning: "引用",
    sentence: "a (   ) from a paper",
    jp: "論文からの引用"
  },
  // 930-4
  {
    word: "quote",
    meaning: "提示価格",
    sentence: "the original (   )",
    jp: "最初の提示価格"
  },
  // 931-1
  {
    word: "literally",
    meaning: "文字どおりに",
    sentence: "The word bōnen-kai (   ) means \"a forget-the-year party.\"",
    jp: "「忘年会」は文字どおりには「年を忘れる会」を意味する。"
  },
  // 932-1
  {
    word: "indicates",
    meaning: "（データなどが）〜を示す",
    sentence: "Research (   ) that the medicine can be harmful to children.",
    jp: "研究はその薬が子どもに害があるかもしれないことを示している。"
  },
  // 932-2
  {
    word: "indicate",
    meaning: "〜を指し示す",
    sentence: "(   ) a place on a map",
    jp: "地図上の場所を指す"
  },
  // 933-1
  {
    word: "reveal",
    meaning: "〜を明らかにする，暴露する",
    sentence: "(   ) a secret to her",
    jp: "彼女に秘密を漏らす"
  },
  // 934-1
  {
    word: "announce",
    meaning: "〜を発表する",
    sentence: "(   ) the results of the election",
    jp: "選挙の結果を発表する"
  },
  // 935-1
  {
    word: "broadcast",
    meaning: "〜を放送する",
    sentence: "The interview with him was (   ) live.",
    jp: "彼のインタビューは生放送された。"
  },
  // 935-2
  {
    word: "broadcast",
    meaning: "（1回の）放送",
    sentence: "watch a live (   ) of a baseball game",
    jp: "野球の試合の生放送を見る"
  },
  // 936-1
  {
    word: "prove",
    meaning: "〜を証明する",
    sentence: "(   ) (that) it is false",
    jp: "それが偽物だと証明する"
  },
  // 936-2
  {
    word: "proved",
    meaning: "（to be 〜）〜だと判明する",
    sentence: "The rumor (   ) (to be) true.",
    jp: "そのうわさは本当だとわかった。"
  },
  // 937-1
  {
    word: "advertise",
    meaning: "〜を宣伝する",
    sentence: "(   ) the concert",
    jp: "コンサートを宣伝する"
  },
  // 938-1
  {
    word: "clarify",
    meaning: "〜を明らかにする",
    sentence: "Let me (   ) my point.",
    jp: "言いたいことを明確にします。"
  },
  // 939-1
  {
    word: "seek",
    meaning: "〜を求める",
    sentence: "(   ) specialist advice",
    jp: "専門家の意見を求める"
  },
  // 939-2
  {
    word: "seek",
    meaning: "（to do）〜しようと努める",
    sentence: "(   ) to achieve a goal",
    jp: "目的を達成しようと努める"
  },
  // 940-1
  {
    word: "entertain",
    meaning: "〜を楽しませる",
    sentence: "(   ) an audience",
    jp: "観客を楽しませる"
  },
  // 940-2
  {
    word: "entertain",
    meaning: "〜をもてなす",
    sentence: "(   ) them with Italian cuisine",
    jp: "イタリア料理で彼らをもてなす"
  },
  // 941-1
  {
    word: "amused",
    meaning: "（人）を（笑顔にさせて）楽しませる",
    sentence: "The clown (   ) us all.",
    jp: "そのピエロは私たちみんなを楽しませた。"
  },
  // 942-1
  {
    word: "attracted",
    meaning: "〜を引きつける，魅了する",
    sentence: "The pop star's marriage (   ) media attention.",
    jp: "人気スターの結婚はマスコミの関心を引きつけた。"
  },
  // 943-1
  {
    word: "fascinated",
    meaning: "〜を魅了する，〜にとても興味を持たせる",
    sentence: "I was (   ) by the Sagrada Familia.",
    jp: "サグラダ・ファミリアに魅了された。"
  },
  // 944-1
  {
    word: "absorbed",
    meaning: "（be 〜ed in 〜）〜に没頭する",
    sentence: "I was (   ) in a book.",
    jp: "私は本に夢中になっていた。"
  },
  // 944-2
  {
    word: "absorb",
    meaning: "〜を吸収する",
    sentence: "(   ) water",
    jp: "水を吸収する"
  },
  // 945-1
  {
    word: "fond",
    meaning: "（be 〜 of 〜）（〜が）好きだ",
    sentence: "I am very (   ) of ramen.",
    jp: "私はラーメンが大好きだ。"
  },
  // 945-2
  {
    word: "fond",
    meaning: "懐かしい",
    sentence: "bring back (   ) memories",
    jp: "懐かしい思い出をよみがえらせる"
  },
  // 946-1
  {
    word: "scared",
    meaning: "〜を怯えさせる",
    sentence: "Oh! You (   ) me!",
    jp: "もう，びっくりしたじゃない（あなたは私を怯えさせた）。"
  },
  // 947-1
  {
    word: "alarmed",
    meaning: "〜をぎょっとさせる",
    sentence: "I was (   ) to hear a man shout.",
    jp: "男が叫ぶのを聞いて，ぎょっとした。"
  },
  // 947-2
  {
    word: "alarm",
    meaning: "恐怖，不安",
    sentence: "cry out in (   )",
    jp: "恐怖を感じて叫ぶ"
  },
  // 948-1
  {
    word: "amazed",
    meaning: "〜を驚かせる",
    sentence: "Sam (   ) me with his cooking skills.",
    jp: "サムはその料理の腕で私を驚かせた。"
  },
  // 949-1
  {
    word: "irritates",
    meaning: "（長期にわたって）〜をいらいらさせる",
    sentence: "Her habit of biting her nails (   ) me.",
    jp: "彼女の爪を噛む癖は私をいらいらさせる。"
  }
],

950: [
  // 950-1
  {
    word: "upset",
    meaning: "〜を当惑させる，動揺させる",
    sentence: "The news (   ) her.",
    jp: "その知らせは彼女を動揺させた。"
  },
  // 950-2
  {
    word: "upset",
    meaning: "（秩序などを）乱す",
    sentence: "(   ) the environmental balance",
    jp: "環境のバランスを乱す"
  },
  // 950-3
  {
    word: "upset",
    meaning: "当惑した，動揺した",
    sentence: "be (   ) about a friend's death",
    jp: "友だちの死に動揺する"
  },
  // 951-1
  {
    word: "puzzles",
    meaning: "〜を当惑させる",
    sentence: "What (   ) me is why she can't understand me.",
    jp: "私を当惑させるのは，なぜ彼女が私の言うことが理解できないかだ。"
  },
  // 951-2
  {
    word: "puzzle",
    meaning: "難問，パズル",
    sentence: "a 2,000-piece jigsaw (   )",
    jp: "2,000ピースのジグソーパズル"
  },
  // 952-1
  {
    word: "confused",
    meaning: "〜を混乱させる，困惑させる",
    sentence: "His reply (   ) me.",
    jp: "彼の返答は私を困惑させた。"
  },
  // 952-2
  {
    word: "confuse",
    meaning: "（A with [and] B）（AをBと）混同する",
    sentence: "(   ) Nancy with her twin sister",
    jp: "ナンシーを双子の姉妹と混同する"
  },
  // 953-1
  {
    word: "bored",
    meaning: "〜をうんざりさせる，退屈させる",
    sentence: "I was (   ) with his long speech.",
    jp: "彼の長い話にうんざりした。"
  },
  // 954-1
  {
    word: "frustrated",
    meaning: "〜を欲求不満にさせる",
    sentence: "I felt (   ) because I could not express myself well.",
    jp: "うまく表現できなくてもどかしい思いをした。"
  },
  // 954-2
  {
    word: "frustrated",
    meaning: "（計画などを）挫折させる",
    sentence: "His plan was (   ) by a lack of money.",
    jp: "彼の計画はお金がなかったため頓挫した。"
  },
  // 955-1
  {
    word: "disappointed",
    meaning: "〜を失望させる",
    sentence: "I was (   ) with the soccer game.",
    jp: "サッカーの試合にがっかりした。"
  },
  // 956-1
  {
    word: "embarrassed",
    meaning: "〜に恥ずかしい思いをさせる，困惑させる",
    sentence: "I was (   ) about using the wrong fork at dinner.",
    jp: "夕食時，フォークを使い間違えて恥ずかしかった。"
  },
  // 957-1
  {
    word: "ashamed",
    meaning: "恥ずかしい",
    sentence: "I'm (   ) of hurting her feelings.",
    jp: "彼女の気持ちを傷つけたことを恥じている。"
  },
  // 958-1
  {
    word: "uneasy",
    meaning: "不安な，落ち着かない",
    sentence: "feel (   ) about living alone",
    jp: "ひとり暮らしは不安だ"
  },
  // 959-1
  {
    word: "hesitate",
    meaning: "ためらう",
    sentence: "Please do not (   ) to contact me if you have any questions.",
    jp: "質問があればどうぞご遠慮なく（連絡するのをためらわないで）ご連絡ください。"
  },
  // 960-1
  {
    word: "reluctant",
    meaning: "（to do）〜（するの）が気が進まない",
    sentence: "I was (   ) to go with him.",
    jp: "彼と一緒に行くのは気が進まなかった。"
  },
  // 961-1
  {
    word: "trembling",
    meaning: "震える",
    sentence: "The little girl was (   ) with fear.",
    jp: "その少女は恐怖で震えていた。"
  },
  // 962-1
  {
    word: "boast",
    meaning: "自慢する",
    sentence: "(   ) about how clever my son is",
    jp: "私の息子がどれほど賢いかを自慢する"
  },
  // 962-2
  {
    word: "boasts",
    meaning: "（場所や組織が）〜を誇りにしている",
    sentence: "Our school (   ) a long history of 110 years.",
    jp: "我が校は110年という長い歴史を誇っている。"
  },
  // 963-1
  {
    word: "jealous",
    meaning: "（of 〜）（〜に）嫉妬した",
    sentence: "be (   ) of his promotion",
    jp: "彼の昇進に嫉妬している。"
  },
  // 964-1
  {
    word: "envy",
    meaning: "〜をうらやましく思う",
    sentence: "(   ) him for his wealth",
    jp: "財産のことで彼を羨ましく思う"
  },
  // 964-2
  {
    word: "envy",
    meaning: "羨望",
    sentence: "feel (   ) at her success",
    jp: "彼女の成功を羨む（羨望を感じる）"
  },
  // 965-1
  {
    word: "yell",
    meaning: "叫ぶ，大声をあげる",
    sentence: "(   ) at the children to be quiet",
    jp: "子どもたちに静かにさせようと叫ぶ（大声で言う）"
  },
  // 965-2
  {
    word: "yell",
    meaning: "叫び，わめき声",
    sentence: "let out a (   ) of delight",
    jp: "喜びの叫びをあげる"
  },
  // 966-1
  {
    word: "respect",
    meaning: "（人）を尊敬する",
    sentence: "(   ) Gandhi",
    jp: "ガンジーを尊敬する"
  },
  // 966-2
  {
    word: "respect",
    meaning: "（物）を尊重する",
    sentence: "(   ) his judgement",
    jp: "彼の判断を尊重する"
  },
  // 966-3
  {
    word: "respect",
    meaning: "敬意",
    sentence: "a deep (   ) for the aged",
    jp: "老人への深い敬意"
  },
  // 966-4
  {
    word: "respect",
    meaning: "〜の点で",
    sentence: "differ in this (   )",
    jp: "この点で異なる"
  },
  // 967-1
  {
    word: "despair",
    meaning: "絶望",
    sentence: "a deep sense of (   )",
    jp: "深い絶望感"
  },
  // 968-1
  {
    word: "emotions",
    meaning: "（特に強い）感情",
    sentence: "show my (   )",
    jp: "感情を表に出す"
  }
],

969: [
  // 969-1
  {
    word: "sympathy",
    meaning: "同情",
    sentence: "have deep (   ) for the victims",
    jp: "犠牲者たちに本当に同情する"
  },
  // 969-2
  {
    word: "sympathy",
    meaning: "共感",
    sentence: "be in (   ) with his opinion",
    jp: "彼の考えに共感する"
  },
  // 970-1
  {
    word: "shame",
    meaning: "残念なこと",
    sentence: "It is a (   ) that you didn't see that movie.",
    jp: "あなたがその映画を見ていないのは残念です。"
  },
  // 970-2
  {
    word: "shame",
    meaning: "恥",
    sentence: "To my (   ), I lied to him.",
    jp: "恥ずかしながら，私は彼にうそをついた。"
  },
  // 971-1
  {
    word: "confidence",
    meaning: "自信",
    sentence: "boost my (   )",
    jp: "（私の）自信を高める"
  },
  // 971-2
  {
    word: "confidence",
    meaning: "（in 〜）（〜に対する）信頼",
    sentence: "I have great (   ) in my staff.",
    jp: "私は職員を全面的に信頼している。"
  },
  // 972-1
  {
    word: "courage",
    meaning: "勇気",
    sentence: "have the (   ) to say no",
    jp: "断る勇気を持つ"
  },
  // 973-1
  {
    word: "passion",
    meaning: "情熱",
    sentence: "have a (   ) for music",
    jp: "音楽への情熱を持っている"
  },
  // 974-1
  {
    word: "sorrows",
    meaning: "悲しみ",
    sentence: "experience the joys and (   ) of life",
    jp: "人生の苦楽を経験する"
  },
  // 975-1
  {
    word: "ignore",
    meaning: "〜を無視する",
    sentence: "completely (   ) him",
    jp: "完全に彼を無視する"
  },
  // 976-1
  {
    word: "offended",
    meaning: "（人，気分）を怒らせる，の気分を害する",
    sentence: "His jokes (   ) Irish people.",
    jp: "彼のジョークはアイルランドの人たちを怒らせた。"
  },
  // 977-1
  {
    word: "depressed",
    meaning: "〜を憂うつにさせる，落ち込ませる",
    sentence: "The rainy weather (   ) me.",
    jp: "雨ですっかり気がめいってしまった（私を落ち込ませた）。"
  },
  // 978-1
  {
    word: "owe",
    meaning: "（A to B）（AはBの）おかげだ",
    sentence: "I (   ) my success to him.",
    jp: "私の成功は彼のおかげだ。"
  },
  // 978-2
  {
    word: "owe",
    meaning: "（A（金）をBに）借りている",
    sentence: "I (   ) 2,000 yen to him. / I (   ) him 2,000 yen.",
    jp: "彼に2,000円を借りている。（下線は重点を示す。）"
  },
  // 979-1
  {
    word: "fear",
    meaning: "恐怖",
    sentence: "overcome my (   ) of snakes",
    jp: "ヘビに対する恐怖を克服する"
  },
  // 979-2
  {
    word: "fear",
    meaning: "恐れる",
    sentence: "(   ) that we may not receive a pension",
    jp: "年金をもらえないかもしれないと恐れる"
  },
  // 979-3
  {
    word: "fear",
    meaning: "〜を心配する",
    sentence: "(   ) that it will rain tomorrow",
    jp: "明日雨が降らないかを心配する"
  },
  // 980-1
  {
    word: "method",
    meaning: "方法",
    sentence: "a (   ) for reducing stress",
    jp: "ストレスを減らすやり方"
  },
  // 981-1
  {
    word: "media",
    meaning: "（情報伝達の）手段，媒体，メディア",
    sentence: "receive a great deal of (   ) attention",
    jp: "メディアにとても注目される"
  },
  // 981-2
  {
    word: "medium",
    meaning: "中間の",
    sentence: "What size shirt do you wear — small, (   ), or large?",
    jp: "あなたのシャツのサイズは，小，中，大のどれですか。"
  },
  // 982-1
  {
    word: "means",
    meaning: "手段",
    sentence: "a (   ) of communication",
    jp: "意思疎通の手段"
  },
  // 982-2
  {
    word: "means",
    meaning: "財産，収入",
    sentence: "live beyond my (   )",
    jp: "収入以上の暮らしをする"
  },
  // 983-1
  {
    word: "extent",
    meaning: "程度",
    sentence: "You are correct to some (   ).",
    jp: "君はある程度正しい。"
  },
  // 984-1
  {
    word: "extremely",
    meaning: "極度に，非常に",
    sentence: "It's (   ) hot outside.",
    jp: "外はひどく暑い。"
  },
  // 985-1
  {
    word: "total",
    meaning: "全体の",
    sentence: "the (   ) cost",
    jp: "総費用"
  },
  // 985-2
  {
    word: "total",
    meaning: "まったったくの",
    sentence: "a (   ) stranger",
    jp: "赤の（まったくの）他人"
  },
  // 985-3
  {
    word: "total",
    meaning: "合計",
    sentence: "The (   ) comes to 50 dollars.",
    jp: "合計50ドルです。"
  },
  // 986-1
  {
    word: "largely",
    meaning: "大部分は",
    sentence: "Our customers are (   ) women.",
    jp: "私たちのお客様は大部分が女性だ。"
  },
  // 986-2
  {
    word: "largely",
    meaning: "主に",
    sentence: "(   ) because of its beauty",
    jp: "主にその美しさのために"
  },
  // 987-1
  {
    word: "moderate",
    meaning: "適度な，度を超さない",
    sentence: "get (   ) exercise",
    jp: "適度な運動をする"
  }
],

988: [
  // 988-1
  {
    word: "somewhat",
    meaning: "いくぶん",
    sentence: "feel (   ) sad",
    jp: "いくぶん悲しい気分だ"
  },
  // 989-1
  {
    word: "subtle",
    meaning: "かすかな",
    sentence: "a (   ) difference in meaning",
    jp: "かすかな意味の違い"
  },
  // 990-1
  {
    word: "possibly",
    meaning: "ひょっとすると",
    sentence: "It will take two weeks, (   ) longer.",
    jp: "2週間，ひょっとしたらそれ以上かかるかもしれない。"
  },
  // 990-2
  {
    word: "possibly",
    meaning: "（cannot 〜）どうしても（〜できない）",
    sentence: "I cannot (   ) solve this problem.",
    jp: "この問題はどうしても解けない。"
  },
  // 991-1
  {
    word: "eventually",
    meaning: "最終的に，ついに",
    sentence: "After changing jobs many times, I (   ) found a job in a bank.",
    jp: "何度も転職を繰り返した後，最終的に，銀行に就職しました。"
  },
  // 992-1
  {
    word: "necessarily",
    meaning: "（not 〜）必ずしも（〜でない）",
    sentence: "Rich people are not (   ) happy.",
    jp: "金持ちが必ずしも幸せとは限らない。"
  },
  // 993-1
  {
    word: "frankly",
    meaning: "率率に",
    sentence: "talk (   ) with a friend",
    jp: "友だちと率直に話そう"
  },
  // 994-1
  {
    word: "Ironically",
    meaning: "皮肉なことに",
    sentence: "(   ), my car was stolen right in front of the police station.",
    jp: "皮肉なことに，私の車は警察署の真ん前で盗まれた。"
  },
  // 995-1
  {
    word: "Moreover",
    meaning: "そのうえ，さらに",
    sentence: "Smoking is bad for you. (   ), it costs a lot.",
    jp: "喫煙は体に悪い。そのうえお金がかかる。"
  },
  // 996-1
  {
    word: "otherwise",
    meaning: "さもなければ",
    sentence: "Hurry up; (   ) you'll be late.",
    jp: "急げ！さもないと遅れるぞ。"
  },
  // 996-2
  {
    word: "otherwise",
    meaning: "ほかの点では",
    sentence: "This room is small but (   ) perfect.",
    jp: "この部屋は狭いが，ほかの点では申し分ない。"
  },
  // 996-3
  {
    word: "otherwise",
    meaning: "違うと思うように",
    sentence: "They say that the movie is wonderful, but I think (   ).",
    jp: "その映画はすばらしいと言うが，私は違うと思う（違うように考える）。"
  },
  // 997-1
  {
    word: "regardless",
    meaning: "（of 〜）（〜に）とは無関係に",
    sentence: "(   ) of gender, race, or nationality",
    jp: "性別，民族，国籍とは無関係に"
  },
  // 998-1
  {
    word: "worth",
    meaning: "〜の価値がある",
    sentence: "This ring is (   ) over two million dollars.",
    jp: "この指輪は200万ドル以上の価値がある。"
  },
  // 998-2
  {
    word: "worth",
    meaning: "（〜する）価値がある",
    sentence: "The film is (   ) seeing.",
    jp: "その映画は見る価値がある。"
  },
  // 998-3
  {
    word: "worth",
    meaning: "価値，（〜相当）",
    sentence: "$100,000 (   ) of damage",
    jp: "10万ドル相当の被害"
  },
  // 999-1
  {
    word: "according to",
    meaning: "（調査，人の話など）によれば",
    sentence: "(   ) a public poll",
    jp: "世論調査によると"
  },
  // 999-2
  {
    word: "according to",
    meaning: "（調査，人の話など）によれば",
    sentence: "Charges vary (   ) size.",
    jp: "料金は大きさによって変わります。"
  },
  // 1000-1
  {
    word: "despite",
    meaning: "〜にもかかわらず",
    sentence: "The soccer match was held, (   ) the heavy rain.",
    jp: "大雨にもかかわらず，そのサッカーの試合が行われた。"
  }
],
  };  
  
  
  // ====== 状態 ======
  let currentUnit = [];
  let currentIndex = 0;
  let wrongWords = [];
  let isRandom = false;
  
  // ====== DOM ======
  const home = document.getElementById("home");
  const quiz = document.getElementById("quiz");
  const resultScreen = document.getElementById("resultScreen");
  
  const sentenceEl = document.getElementById("sentence");
  const jpEl = document.getElementById("jp");
  const input = document.getElementById("answerInput");
  const resultEl = document.getElementById("result");
  const progress = document.getElementById("progress");
  
  const judgeBtn = document.getElementById("judgeBtn");
  const nextBtn = document.getElementById("nextBtn");
  const speakBtn = document.getElementById("speakBtn");
  const reviewBtn = document.getElementById("reviewBtn");
  const meaningEl = document.getElementById("meaning");


  
  // ====== Unit一覧生成 ======
  const unitList = document.getElementById("unitList");
  Object.keys(units).forEach(key => {
    const btn = document.createElement("button");
    btn.textContent = key.toUpperCase();
    btn.className = "unit-btn";
    btn.onclick = () => startUnit(key);
    unitList.appendChild(btn);
  });
  
  // ====== 設定 ======
  document.getElementById("randomToggle").onchange = e => {
    isRandom = e.target.checked;
  };
  
  const homeBtn = document.getElementById("homeBtn");

  homeBtn.style.display = "none";

homeBtn.onclick = () => {
  if (confirm("Unitを中断してホームに戻りますか？")) {
    quiz.classList.add("hidden");
    resultScreen.classList.add("hidden");
    home.classList.remove("hidden");

    currentUnit = [];
    currentIndex = 0;
    wrongWords = [];

    homeBtn.style.display = "none";
  }
};
  
  // ====== 開始 ======
  function startUnit(key) {
    currentUnit = [...units[key]];
    if (isRandom) shuffle(currentUnit);
  
    currentIndex = 0;
    wrongWords = [];
  
    home.classList.add("hidden");
    quiz.classList.remove("hidden");
  
    homeBtn.style.display = "block";

    showCard();
  }

  // ====== 表示 ======
  function showCard() {
    const q = currentUnit[currentIndex];
  
    sentenceEl.textContent = q.sentence;
    jpEl.textContent = q.jp;
  
    input.value = "";
    input.disabled = false;
  
    resultEl.textContent = "";
    resultEl.className = "";
  
    meaningEl.textContent = "";
    meaningEl.classList.add("hidden");
  
    nextBtn.classList.add("hidden");
    speakBtn.classList.add("hidden");
  
    progress.textContent = `${currentIndex + 1} / ${currentUnit.length}`;
    input.focus();
  }
  
  // ====== 判定 ======
  function judge() {
    if (input.disabled) return;
  
    const q = currentUnit[currentIndex];
    const user = input.value.trim().toLowerCase();
  
    input.disabled = true;
  
    // 意味表示
    meaningEl.textContent = `意味：${q.meaning}`;
    meaningEl.classList.remove("hidden");
  
    if (user === q.word.toLowerCase()) {
      resultEl.textContent = "⭕ 正解";
      resultEl.classList.add("correct");
  
      // ★ ここを speakWord に変更
      speakWord(q.word);
  
      setTimeout(next, 1000);
    } else {
      resultEl.textContent = `❌ 不正解：${q.word}`;
      resultEl.classList.add("wrong");
      wrongWords.push(q);
  
      speakBtn.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
    }
  }
  // ====== 次 ======
  function next() {
    currentIndex++;
    if (currentIndex >= currentUnit.length) {
      endUnit();
    } else {
      showCard();
    }
  }
  
  // ====== 終了 ======
  function endUnit() {
    quiz.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    homeBtn.style.display = "none";
  
    if (wrongWords.length > 0) {
      reviewBtn.classList.remove("hidden");
    } else {
      reviewBtn.classList.add("hidden");
    }
  }
  
  // ====== 復習 ======
  reviewBtn.onclick = () => {
    currentUnit = [...wrongWords];
    wrongWords = [];
    currentIndex = 0;
  
    resultScreen.classList.add("hidden");
    quiz.classList.remove("hidden");

    homeBtn.style.display = "block";

    showCard();
  };
  
  // ====== ホーム ======
  document.getElementById("backHome").onclick = () => {
    resultScreen.classList.add("hidden");
    home.classList.remove("hidden");
  };
  
// ====== 発音（スマホ対応） ======
function speakWord(word) {
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-US';
  utter.rate = 1.0; // 速さ
  utter.pitch = 1.2;  // 音程

  // 声を取得（iOS / Android対応）
  const voices = speechSynthesis.getVoices();
  let voice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google'));
  if (!voice && voices.length > 0) voice = voices[0]; // もしGoogle声がなければ最初の声
  if (voice) utter.voice = voice;

  speechSynthesis.speak(utter);
}

// iOSで最初に声が取得できない問題対策
window.speechSynthesis.onvoiceschanged = () => {
  speechSynthesis.getVoices();
};
  
speakBtn.onclick = () => {
  speakWord(currentUnit[currentIndex].word);
};
  
  // ====== イベント ======
  judgeBtn.onclick = judge;
  nextBtn.onclick = next;
  
  input.addEventListener("keydown", e => {
    if (e.key === "Enter" && !input.disabled) judge();
  });
  
  // ====== シャッフル ======
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  function login() {
    const password = document.getElementById("pw").value;
    const correctPassword = ""; // 好きなパスワード
  
    if (password === correctPassword) {
      document.getElementById("login").style.display = "none";
      document.getElementById("app").style.display = "block";
    } else {
      alert("パスワードが違います");
    }
  }
  function getAllWords() {
    let all = [];
    Object.values(units).forEach(arr => {
      all = all.concat(arr);
    });
    return all;
  }
  const random10Btn = document.getElementById("random10Btn");

  random10Btn.onclick = () => {
    let allWords = getAllWords();
  
    shuffle(allWords);         // 既存のシャッフル関数使う
    currentUnit = allWords.slice(0, 10); // 先頭10個だけ取る
  
    currentIndex = 0;
    wrongWords = [];
  
    home.classList.add("hidden");
    quiz.classList.remove("hidden");
    homeBtn.style.display = "block";
  
    showCard();
  };
    
  