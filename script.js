const units = {

1: [
  {
    wordNo: 1,
    word: "agree",
    meaning: "賛成する",
    sentence: "I totally (   ) with this opinion.",
    jp: "私はこの意見に全面的に賛成です。",
    jpBlank: "私はこの意見に全面的に(   )です。",
    jpAnswer: "賛成"
  },
  {
    wordNo: 1,
    word: "agreed",
    meaning: "（主語の中で）意見が一致する",
    sentence: "We (   ) on this point.",
    jp: "私たちはこの点で意見が一致した。",
    jpBlank: "私たちはこの点で(   )した。",
    jpAnswer: "意見が一致"
  },
  {
    wordNo: 1,
    word: "agree",
    meaning: "（気候，食べ物が）合う",
    sentence: "Spicy food does not (   ) with me.",
    jp: "辛い食べ物は私には合わない。",
    jpBlank: "辛い食べ物は私には(   )。",
    jpAnswer: "合わない"
  },
  {
    wordNo: 2,
    word: "oppose",
    meaning: "〜に反対する",
    sentence: "strongly (   ) the plan",
    jp: "その計画に強硬に反対する",
    jpBlank: "その計画に強硬に(   )する",
    jpAnswer: "反対"
  },
  {
    wordNo: 3,
    word: "advise",
    meaning: "〜に助言する，忠告する",
    sentence: "(   ) him not to eat too much",
    jp: "食べ過ぎないよう彼に忠告する",
    jpBlank: "食べ過ぎないよう彼に(   )",
    jpAnswer: "忠告する"
  },
  {
    wordNo: 4,
    word: "tips",
    meaning: "助言，ヒント",
    sentence: "(   ) on how to use the library",
    jp: "図書館の利用法に関するヒント",
    jpBlank: "図書館の利用法に関する(   )",
    jpAnswer: "ヒント"
  },
  {
    wordNo: 4,
    word: "tip",
    meaning: "チップ",
    sentence: "leave a (   ) for the waiter",
    jp: "ウェイターにチップを置く",
    jpBlank: "ウェイターに(   )を置く",
    jpAnswer: "チップ"
  },
  {
    wordNo: 4,
    word: "tips",
    meaning: "（足や山などの）先，先端",
    sentence: "the (   ) of my toes",
    jp: "足の指先",
    jpBlank: "(   )",
    jpAnswer: "足の指先"
  },
  {
    wordNo: 5,
    word: "discuss",
    meaning: "〜について話し合う，議論する",
    sentence: "(   ) the problem with a specialist",
    jp: "専門家とその問題について話し合う",
    jpBlank: "専門家とその問題に(   )",
    jpAnswer: "ついて話し合う"
  },
  {
    wordNo: 5,
    word: "discuss",
    meaning: "〜を議題に出す",
    sentence: "(   ) my hidden past",
    jp: "自分の隠された過去のことを話す",
    jpBlank: "自分の隠された過去のことを(   )",
    jpAnswer: "話す"
  },
  {
    wordNo: 6,
    word: "blame",
    meaning: "〜に責任があるとする",
    sentence: "(   ) the car's brakes for the accident",
    jp: "その事故の原因は車のブレーキにあるとする",
    jpBlank: "その事故の原因は車のブレーキ(   )",
    jpAnswer: "にあるとする"
  },
  {
    wordNo: 7,
    word: "argue",
    meaning: "〜と主張する",
    sentence: "(   ) that reading aloud is important",
    jp: "音読は大切だと主張する",
    jpBlank: "音読は大切だと(   )する",
    jpAnswer: "主張"
  },
  {
    wordNo: 7,
    word: "argue",
    meaning: "言い争う",
    sentence: "(   ) with her about training methods",
    jp: "練習方法のことで彼女と言い争う",
    jpBlank: "練習方法のことで彼女と(   )",
    jpAnswer: "言い争う"
  },
  {
    wordNo: 8,
    word: "claim",
    meaning: "〜と主張する",
    sentence: "(   ) that a vegetarian diet is better than a meat diet",
    jp: "菜食は肉食より優れていると主張する",
    jpBlank: "菜食は肉食より優れていると(   )",
    jpAnswer: "主張する"
  },
  {
    wordNo: 8,
    word: "claim",
    meaning: "〜を要求する，主張する",
    sentence: "Does anyone (   ) this umbrella?",
    jp: "自分の持ち主はいませんか（誰かこの傘の持ち主を主張しますか）。",
    jpBlank: "自分の持ち主は(   )。",
    jpAnswer: "いませんか"
  },
  {
    wordNo: 8,
    word: "claim",
    meaning: "主張，要求",
    sentence: "make a (   ) against the insurance company",
    jp: "保険会社に（保険金を）請求する",
    jpBlank: "保険会社に(   )する",
    jpAnswer: "請求"
  },
  {
    wordNo: 9,
    word: "complain",
    meaning: "文句を言う，苦情を言う",
    sentence: "(   ) about their loud music",
    jp: "彼らのうるさい音楽に文句を言う",
    jpBlank: "彼らのうるさい音楽に(   )",
    jpAnswer: "文句を言う"
  },
  {
    wordNo: 9,
    word: "complain",
    meaning: "（病気など）を訴える",
    sentence: "(   ) of a headache",
    jp: "頭痛がすると訴える",
    jpBlank: "頭痛がすると(   )",
    jpAnswer: "訴える"
  },
  {
    wordNo: 10,
    word: "offer",
    meaning: "〜を申し出る",
    sentence: "(   ) him some coffee",
    jp: "彼にコーヒーはどうですかと尋ねる（申し出る）。",
    jpBlank: "彼にコーヒーはどうですかと(   )。",
    jpAnswer: "尋ねる"
  },
  {
    wordNo: 10,
    word: "offer",
    meaning: "申し出",
    sentence: "refuse his (   )",
    jp: "彼の申し出を断る",
    jpBlank: "彼の(   )を断る",
    jpAnswer: "申し出"
  },
  {
    wordNo: 10,
    word: "offer",
    meaning: "値引き",
    sentence: "T-shirts are on special (   ) today.",
    jp: "今日はTシャツが特価（特別な値引き）だ。",
    jpBlank: "今日はTシャツが特価(   )だ。",
    jpAnswer: "特別な値引き"
  },
  {
    wordNo: 11,
    word: "suggests",
    meaning: "〜を示唆する",
    sentence: "That letter (   ) that she is quite happy in her job.",
    jp: "その手紙は，彼女が仕事をかなり楽しんでいることを示唆している。",
    jpBlank: "その手紙は，彼女が仕事をかなり楽しんでいることを(   )している。",
    jpAnswer: "示唆"
  },
  {
    wordNo: 11,
    word: "suggested",
    meaning: "〜を提案する",
    sentence: "She (   ) to us that we (should) take a break.",
    jp: "彼女は私たちに休憩するのはどうだろうと提案した。",
    jpBlank: "彼女は私たちに休憩するのはどうだろうと(   )した。",
    jpAnswer: "提案"
  },
  {
    wordNo: 12,
    word: "recommend",
    meaning: "〜を推薦する，勧める",
    sentence: "What would you (   )?",
    jp: "（レストランなどで）何がお勧めですか（何を勧めますか）。",
    jpBlank: "何が(   )ですか。",
    jpAnswer: "お勧め"
  },
  {
    wordNo: 13,
    word: "grateful",
    meaning: "感謝している",
    sentence: "I am (   ) for your help.",
    jp: "ご助力に感謝しています。",
    jpBlank: "ご助力に(   )ます。",
    jpAnswer: "感謝してい"
  },
  {
    wordNo: 14,
    word: "apologize",
    meaning: "謝る",
    sentence: "(   ) to her for being late",
    jp: "遅れたことを彼女に謝る",
    jpBlank: "遅れたことを彼女に(   )",
    jpAnswer: "謝る"
  },
  {
    wordNo: 15,
    word: "excuses",
    meaning: "言い訳",
    sentence: "Don't make (   ).",
    jp: "言い訳するな。",
    jpBlank: "(   )するな。",
    jpAnswer: "言い訳"
  },
  {
    wordNo: 15,
    word: "Excuse",
    meaning: "〜を許す",
    sentence: "(   ) me, but do you happen to know where the station is?",
    jp: "すみませんが，駅がどこにあるかご存じですか。",
    jpBlank: "(   )が，駅がどこにあるかご存じですか。",
    jpAnswer: "すみません"
  },
  {
    wordNo: 15,
    word: "excused",
    meaning: "〜を免除する",
    sentence: "He was (   ) from the exam.",
    jp: "彼は試験を免除された。",
    jpBlank: "彼は試験を(   )された。",
    jpAnswer: "免除"
  },
  {
    wordNo: 16,
    word: "celebrate",
    meaning: "（特別な日，出来事）を祝う",
    sentence: "(   ) her 18th birthday",
    jp: "彼女の18歳の誕生日を祝う",
    jpBlank: "彼女の18歳の誕生日(   )",
    jpAnswer: "を祝う"
  },
  {
    wordNo: 16,
    word: "celebrate",
    meaning: "（儀式など）を挙行する，執り行う",
    sentence: "(   ) Mass",
    jp: "ミサを執り行う",
    jpBlank: "ミサを(   )",
    jpAnswer: "執り行う"
  },
  {
    wordNo: 17,
    word: "congratulate",
    meaning: "（人）を祝う，〜に関して（人）を祝う",
    sentence: "(   ) her on her exam results",
    jp: "試験結果について彼女を祝福する",
    jpBlank: "試験結果について彼女を(   )",
    jpAnswer: "祝福する"
  },
  {
    wordNo: 18,
    word: "admire",
    meaning: "〜を称賛する，〜に感心する",
    sentence: "(   ) him for his great performance",
    jp: "すばらしい演技に対して彼を称賛する",
    jpBlank: "すばらしい演技に対して彼を(   )",
    jpAnswer: "称賛する"
  },
  {
    wordNo: 19,
    word: "impressed",
    meaning: "〜に感銘を与える，〜を感心させる",
    sentence: "I was deeply (   ) by his speech.",
    jp: "彼の演説に深く感銘を受けた（感銘を与えられた）。",
    jpBlank: "(   )く感銘を受けた。",
    jpAnswer: "彼の演説に深"
  },
  {
    wordNo: 20,
    word: "award",
    meaning: "賞",
    sentence: "an (   ) ceremony",
    jp: "授賞式",
    jpBlank: "(   )",
    jpAnswer: "授賞式"
  },
  {
    wordNo: 20,
    word: "awarded",
    meaning: "〜を授与する",
    sentence: "She was (   ) first prize.",
    jp: "彼女は一等賞をもらった（授与された）。",
    jpBlank: "彼女は一等賞をもらった(   )。",
    jpAnswer: "授与された"
  },
  {
    wordNo: 21,
    word: "explain",
    meaning: "〜を説明する",
    sentence: "(   ) the rules of baseball to him",
    jp: "彼に野球のルールを説明する",
    jpBlank: "彼に野球のルールを(   )",
    jpAnswer: "説明する"
  },
  {
    wordNo: 22,
    word: "describe",
    meaning: "〜を説明する",
    sentence: "Could you (   ) your lost bag?",
    jp: "なくしたバッグの特徴を説明していただけませんか。",
    jpBlank: "なくしたバッグの特徴を(   )していただけませんか。",
    jpAnswer: "説明"
  },
  {
    wordNo: 23,
    word: "communicate",
    meaning: "意思の疎通をはかる",
    sentence: "(   ) with each other in sign language",
    jp: "手話でお互いに意思の疎通をはかる",
    jpBlank: "手話でお互いに(   )をはかる",
    jpAnswer: "意思の疎通"
  },
  {
    wordNo: 23,
    word: "communicate",
    meaning: "〜を伝える",
    sentence: "(   ) my feelings in English",
    jp: "英語で自分の気持ちを伝える",
    jpBlank: "英語で自分の気持ちを(   )",
    jpAnswer: "伝える"
  },
  {
    wordNo: 24,
    word: "Express",
    meaning: "（意見，気持ち）を表現する",
    sentence: "(   ) your opinions clearly.",
    jp: "はっきりと意見を言い（表現し）なさい。",
    jpBlank: "はっきりと意見を言い(   )なさい。",
    jpAnswer: "表現し"
  },
  {
    wordNo: 24,
    word: "express",
    meaning: "急行（列車，バス）",
    sentence: "on the 9:00 a.m. (   ) (train)",
    jp: "午前9時の急行列車で",
    jpBlank: "午前9時の(   )列車で",
    jpAnswer: "急行"
  },
  {
    wordNo: 25,
    word: "promise",
    meaning: "約束",
    sentence: "make a (   ) to lose weight",
    jp: "減量するという約束をする",
    jpBlank: "減量するという(   )をする",
    jpAnswer: "約束"
  },
  {
    wordNo: 25,
    word: "promise",
    meaning: "〜を約束する",
    sentence: "(   ) her to be back by 5",
    jp: "5時までには戻ると彼女に約束する",
    jpBlank: "5時までには戻ると彼女に(   )",
    jpAnswer: "約束する"
  },
  {
    wordNo: 26,
    word: "information",
    meaning: "情報",
    sentence: "various kinds of (   )",
    jp: "さまざまな情報",
    jpBlank: "さまざまな(   )",
    jpAnswer: "情報"
  },
  {
    wordNo: 27,
    word: "technology",
    meaning: "科学技術，テクノロジー",
    sentence: "science and (   )",
    jp: "科学技術（科学と科学技術）",
    jpBlank: "(   )",
    jpAnswer: "科学技術"
  },
  {
    wordNo: 28,
    word: "research",
    meaning: "（学術的）研究",
    sentence: "do (   ) on space rockets",
    jp: "宇宙ロケットに関する研究を行う",
    jpBlank: "宇宙ロケットに関する(   )を行う",
    jpAnswer: "研究"
  },
  {
    wordNo: 28,
    word: "research",
    meaning: "〜を研究する",
    sentence: "(   ) an environmental issue",
    jp: "環境問題を研究する",
    jpBlank: "環境問題を(   )する",
    jpAnswer: "研究"
  },
  {
    wordNo: 29,
    word: "materials",
    meaning: "材料，生地",
    sentence: "collect (   ) for a paper",
    jp: "レポートの材料を集める",
    jpBlank: "レポートの(   )を集める",
    jpAnswer: "材料"
  },
  {
    wordNo: 29,
    word: "materials",
    meaning: "資料，教材",
    sentence: "use movies as teaching (   )",
    jp: "映画を教材として使う",
    jpBlank: "映画を(   )として使う",
    jpAnswer: "教材"
  },
  {
    wordNo: 29,
    word: "material",
    meaning: "物質的な",
    sentence: "give (   ) support",
    jp: "物質的な援助をする",
    jpBlank: "(   )的な援助をする",
    jpAnswer: "物質"
  },
  {
    wordNo: 29,
    word: "material",
    meaning: "重大な",
    sentence: "(   ) changes to the schedule",
    jp: "計画の重大な変更",
    jpBlank: "計画の(   )変更",
    jpAnswer: "重大な"
  },
  {
    wordNo: 30,
    word: "artificial",
    meaning: "人工的な",
    sentence: "(   ) intelligence (AI)",
    jp: "人工知能",
    jpBlank: "(   )知能",
    jpAnswer: "人工"
  },
],
31: [
  {
    wordNo: 31,
    word: "electric",
    meaning: "電気の，電動の",
    sentence: "an (   ) car",
    jp: "電気自動車",
    jpBlank: "(   )自動車",
    jpAnswer: "電気"
  },
  {
    wordNo: 32,
    word: "invent",
    meaning: "〜を発明する",
    sentence: "(   ) a speaking robot",
    jp: "会話のできるロボットを発明する",
    jpBlank: "会話のできるロボットを(   )",
    jpAnswer: "発明する"
  },
  {
    wordNo: 32,
    word: "invent",
    meaning: "（話など）をでっち上げる",
    sentence: "(   ) a fantastic story",
    jp: "とんでもない話をでっち上げる",
    jpBlank: "とんでもない話(   )",
    jpAnswer: "をでっち上げる"
  },
  {
    wordNo: 33,
    word: "discover",
    meaning: "〜を発見する",
    sentence: "(   ) a human mummy",
    jp: "人間のミイラを発見する",
    jpBlank: "人間のミイラを(   )する",
    jpAnswer: "発見"
  },
  {
    wordNo: 33,
    word: "discover",
    meaning: "〜を知る，〜に気づく",
    sentence: "(   ) that the painting is a fake",
    jp: "その絵が偽物であることに気づく",
    jpBlank: "その絵が偽物であることに(   )",
    jpAnswer: "気づく"
  },
  {
    wordNo: 33,
    word: "discover",
    meaning: "（出会い）",
    sentence: "(   ) the Beatles",
    jp: "ビートルズ（の音楽）に出会う",
    jpBlank: "ビートルズ(   )に出会う",
    jpAnswer: "の音楽"
  },
  {
    wordNo: 34,
    word: "develop",
    meaning: "発達する",
    sentence: "(   ) into a big city",
    jp: "大都市に発展する",
    jpBlank: "大都市に発展(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 34,
    word: "develop",
    meaning: "〜を発達させる",
    sentence: "(   ) a sense of humor",
    jp: "ユーモアのセンスを伸ばす",
    jpBlank: "ユーモアのセンスを(   )",
    jpAnswer: "伸ばす"
  },
  {
    wordNo: 34,
    word: "develop",
    meaning: "〜を開発する",
    sentence: "(   ) software",
    jp: "ソフトウェアを開発する",
    jpBlank: "ソフトウェアを(   )する",
    jpAnswer: "開発"
  },
  {
    wordNo: 34,
    word: "develop",
    meaning: "〜を磨く",
    sentence: "(   ) your ideas",
    jp: "考えを発展させる",
    jpBlank: "考えを(   )",
    jpAnswer: "発展させる"
  },
  {
    wordNo: 34,
    word: "develop",
    meaning: "（病気に）かかる",
    sentence: "(   ) pneumonia",
    jp: "肺炎になる",
    jpBlank: "(   )",
    jpAnswer: "肺炎になる"
  },
  {
    wordNo: 35,
    word: "skills",
    meaning: "技術，力",
    sentence: "improve my tennis (   )",
    jp: "テニスの技術を高める",
    jpBlank: "テニスの(   )を高める",
    jpAnswer: "技術"
  },
  {
    wordNo: 36,
    word: "ability",
    meaning: "能力",
    sentence: "improve my (   ) to speak English",
    jp: "英語を話す力を伸ばす",
    jpBlank: "英語を話す(   )を伸ばす",
    jpAnswer: "力"
  },
  {
    wordNo: 37,
    word: "talent",
    meaning: "才能",
    sentence: "show my musical (   )",
    jp: "音楽の才能を発揮する",
    jpBlank: "音楽の(   )を発揮する",
    jpAnswer: "才能"
  },
  {
    wordNo: 38,
    word: "effort",
    meaning: "努力",
    sentence: "make an (   ) to be on time",
    jp: "時間に間に合うように努力する",
    jpBlank: "時間に間に合うように(   )する",
    jpAnswer: "努力"
  },
  {
    wordNo: 39,
    word: "practice",
    meaning: "（繰り返しの）練習",
    sentence: "We have (   ) on Saturday.",
    jp: "土曜日に練習がある。",
    jpBlank: "土曜日に(   )がある。",
    jpAnswer: "練習"
  },
  {
    wordNo: 39,
    word: "practice",
    meaning: "実践",
    sentence: "put a plan into (   )",
    jp: "計画を実行に移す",
    jpBlank: "計画を実行に(   )",
    jpAnswer: "移す"
  },
  {
    wordNo: 39,
    word: "practice",
    meaning: "慣習",
    sentence: "the (   ) of sleeping after dinner",
    jp: "夕食後に寝る習慣",
    jpBlank: "夕食後に寝る(   )",
    jpAnswer: "習慣"
  },
  {
    wordNo: 39,
    word: "practice",
    meaning: "〜を練習する",
    sentence: "(   ) playing the piano",
    jp: "ピアノの練習をする",
    jpBlank: "ピアノの(   )をする",
    jpAnswer: "練習"
  },
  {
    wordNo: 39,
    word: "practice",
    meaning: "〜を実践する",
    sentence: "(   ) my religion",
    jp: "宗教を実践する",
    jpBlank: "宗教を(   )する",
    jpAnswer: "実践"
  },
  {
    wordNo: 40,
    word: "achieve",
    meaning: "〜を達成する",
    sentence: "(   ) his goal of becoming a vet",
    jp: "獣医になるという目標を達成する",
    jpBlank: "獣医になるという目標を(   )",
    jpAnswer: "達成する"
  },
  {
    wordNo: 41,
    word: "managed",
    meaning: "何とかして〜する",
    sentence: "I (   ) to catch the last train.",
    jp: "何とか終電に乗ることができた。",
    jpBlank: "何とか終電に乗ることが(   )。",
    jpAnswer: "できた"
  },
  {
    wordNo: 41,
    word: "manage",
    meaning: "〜を経営する，管理する",
    sentence: "(   ) my time effectively",
    jp: "効果的に時間を管理する",
    jpBlank: "効果的に時間を(   )する",
    jpAnswer: "管理"
  },
  {
    wordNo: 42,
    word: "improve",
    meaning: "〜を改善する，磨く",
    sentence: "(   ) my cooking skills",
    jp: "私の料理の腕を上達させる",
    jpBlank: "私の料理の腕を(   )",
    jpAnswer: "上達させる"
  },
  {
    wordNo: 42,
    word: "improved",
    meaning: "よくなる",
    sentence: "His English has (   ) recently.",
    jp: "彼の英語は最近よくなった。",
    jpBlank: "彼の英語は最近(   )った。",
    jpAnswer: "よくな"
  },
  {
    wordNo: 43,
    word: "produce",
    meaning: "〜を生産する，産出する",
    sentence: "(   ) rice and vegetables",
    jp: "米と野菜を生産する",
    jpBlank: "米と野菜を(   )する",
    jpAnswer: "生産"
  },
  {
    wordNo: 43,
    word: "produce",
    meaning: "（見せるために）〜を取り出す",
    sentence: "(   ) a ticket from my pocket",
    jp: "ポケットから切符を取り出す",
    jpBlank: "ポケットから切符を(   )",
    jpAnswer: "取り出す"
  },
  {
    wordNo: 43,
    word: "produce",
    meaning: "農作物",
    sentence: "fresh farm (   )",
    jp: "新鮮な農産物",
    jpBlank: "(   )",
    jpAnswer: "新鮮な農産物"
  },
  {
    wordNo: 44,
    word: "create",
    meaning: "〜を創造する",
    sentence: "(   ) a website",
    jp: "ホームページを創る",
    jpBlank: "ホームページ(   )",
    jpAnswer: "を創る"
  },
  {
    wordNo: 44,
    word: "create",
    meaning: "〜を引き起こす",
    sentence: "(   ) new problems",
    jp: "新たな問題を引き起こす",
    jpBlank: "新たな問題を(   )",
    jpAnswer: "引き起こす"
  },
  {
    wordNo: 45,
    word: "establish",
    meaning: "〜を確立する，定着させる",
    sentence: "(   ) a close friendship with him",
    jp: "彼と親密な友情を築く",
    jpBlank: "彼と親密な友情を(   )",
    jpAnswer: "築く"
  },
  {
    wordNo: 45,
    word: "established",
    meaning: "〜を設立する",
    sentence: "This publishing company was (   ) in 1950.",
    jp: "この出版社は1950年に設立された。",
    jpBlank: "この出版社は1950年に(   )された。",
    jpAnswer: "設立"
  },
  {
    wordNo: 46,
    word: "form",
    meaning: "〜を形成する",
    sentence: "(   ) a rock band",
    jp: "ロックバンドを形成する",
    jpBlank: "ロックバンドを(   )する",
    jpAnswer: "形成"
  },
  {
    wordNo: 46,
    word: "forms",
    meaning: "形態",
    sentence: "Happiness comes in various (   ).",
    jp: "幸せは様々な形でやって来る。",
    jpBlank: "幸せは様々な形でやって(   )。",
    jpAnswer: "来る"
  },
  {
    wordNo: 46,
    word: "form",
    meaning: "書式",
    sentence: "fill out an application (   )",
    jp: "申し込み書に記入する",
    jpBlank: "申し込み書に(   )",
    jpAnswer: "記入する"
  },
  {
    wordNo: 47,
    word: "saves",
    meaning: "（時間，手間）を省く",
    sentence: "This (   ) you a lot of trouble.",
    jp: "これによって多くの手間が省ける。",
    jpBlank: "これによって多くの手間が(   )。",
    jpAnswer: "省ける"
  },
  {
    wordNo: 47,
    word: "save",
    meaning: "〜を貯金する",
    sentence: "(   ) some money every month.",
    jp: "毎月貯金する。",
    jpBlank: "毎月(   )する。",
    jpAnswer: "貯金"
  },
  {
    wordNo: 47,
    word: "saved",
    meaning: "（命など）を救う",
    sentence: "You (   ) my life.",
    jp: "君は私の恩人だ（私の命を救った）。",
    jpBlank: "(   )だ。",
    jpAnswer: "君は私の恩人"
  },
  {
    wordNo: 47,
    word: "save",
    meaning: "〜を除いて",
    sentence: "answer all of the questions (   ) one",
    jp: "1つを除いてすべての質問に答える。",
    jpBlank: "1つを(   )すべての質問に答える。",
    jpAnswer: "除いて"
  },
  {
    wordNo: 48,
    word: "medicine",
    meaning: "薬",
    sentence: "take the (   ) twice a day",
    jp: "1日に2回その薬を飲む",
    jpBlank: "1(   )2回その薬を飲む",
    jpAnswer: "日に"
  },
  {
    wordNo: 48,
    word: "medicine",
    meaning: "医学",
    sentence: "study (   ) at Harvard",
    jp: "ハーバードで医学を学ぶ",
    jpBlank: "ハーバードで(   )を学ぶ",
    jpAnswer: "医学"
  },
  {
    wordNo: 49,
    word: "patient",
    meaning: "患者",
    sentence: "The (   ) is getting better.",
    jp: "その患者は快方に向かっている。",
    jpBlank: "その(   )は快方に向かっている。",
    jpAnswer: "患者"
  },
  {
    wordNo: 49,
    word: "patient",
    meaning: "忍耐強い",
    sentence: "Teachers need to be (   ).",
    jp: "教師は忍耐強くならなければならない。",
    jpBlank: "教師は(   )ならなければならない。",
    jpAnswer: "忍耐強く"
  },
  {
    wordNo: 50,
    word: "condition",
    meaning: "状態，容態",
    sentence: "My body is in good (   ).",
    jp: "私の体は調子がよい。",
    jpBlank: "私の体は(   )。",
    jpAnswer: "調子がよい"
  },
  {
    wordNo: 50,
    word: "conditions",
    meaning: "(周囲の)状況，条件",
    sentence: "work under bad (   )",
    jp: "悪条件の下で働く",
    jpBlank: "悪(   )の下で働く",
    jpAnswer: "条件"
  },
  {
    wordNo: 51,
    word: "medical",
    meaning: "医療の",
    sentence: "(   ) expenses",
    jp: "医療費",
    jpBlank: "(   )費",
    jpAnswer: "医療"
  },
  {
    wordNo: 51,
    word: "medical",
    meaning: "医学の",
    sentence: "(   ) science",
    jp: "医学",
    jpBlank: "(   )",
    jpAnswer: "医学"
  },
  {
    wordNo: 52,
    word: "stress",
    meaning: "ストレス",
    sentence: "have a lot of (   )",
    jp: "ストレスが多い。",
    jpBlank: "(   )が多い。",
    jpAnswer: "ストレス"
  },
  {
    wordNo: 52,
    word: "stress",
    meaning: "強調",
    sentence: "put (   ) on foreign language education",
    jp: "外国語教育に重点を置く。",
    jpBlank: "外国語教育に(   )。",
    jpAnswer: "重点を置く"
  },
  {
    wordNo: 52,
    word: "stress",
    meaning: "〜を強調する",
    sentence: "(   ) the importance of teamwork",
    jp: "チームワークの重要性を強調する",
    jpBlank: "チームワークの重要性を(   )",
    jpAnswer: "強調する"
  },
  {
    wordNo: 53,
    word: "suffering",
    meaning: "（病気などで）苦しむ",
    sentence: "I am (   ) from jet lag.",
    jp: "時差ぼけに苦しんでいる。",
    jpBlank: "時差ぼけに苦(   )。",
    jpAnswer: "しんでいる"
  },
  {
    wordNo: 53,
    word: "suffered",
    meaning: "（苦痛，損害）を経験する",
    sentence: "The company (   ) a heavy loss.",
    jp: "その会社は大きな損失を出した。",
    jpBlank: "その会社は大きな(   )。",
    jpAnswer: "損失を出した"
  },
  {
    wordNo: 54,
    word: "exercises",
    meaning: "練習",
    sentence: "piano (   )",
    jp: "ピアノの練習",
    jpBlank: "ピアノの(   )",
    jpAnswer: "練習"
  },
  {
    wordNo: 54,
    word: "exercise",
    meaning: "運動",
    sentence: "get light (   )",
    jp: "軽い運動をする",
    jpBlank: "軽い(   )をする",
    jpAnswer: "運動"
  },
  {
    wordNo: 54,
    word: "exercise",
    meaning: "〜を練習する",
    sentence: "(   ) regularly",
    jp: "定期的に運動する",
    jpBlank: "定期的に運動(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 54,
    word: "exercise",
    meaning: "〜を行使する",
    sentence: "(   ) the right to vote",
    jp: "投票権を行使する",
    jpBlank: "投票権を(   )する",
    jpAnswer: "行使"
  },
  {
    wordNo: 55,
    word: "breathe",
    meaning: "呼吸する，息を吸う",
    sentence: "(   ) deeply",
    jp: "深呼吸する",
    jpBlank: "深(   )する",
    jpAnswer: "呼吸"
  },
  {
    wordNo: 56,
    word: "thirsty",
    meaning: "のどが渇いた",
    sentence: "I'm really (   ).",
    jp: "本当にのどが渇いた。",
    jpBlank: "本当に(   )。",
    jpAnswer: "のどが渇いた"
  },
  {
    wordNo: 56,
    word: "thirsty",
    meaning: "（〜を）切望して",
    sentence: "He is (   ) for power.",
    jp: "彼は権力志向が強い。",
    jpBlank: "彼は(   )。",
    jpAnswer: "権力志向が強い"
  },
  {
    wordNo: 57,
    word: "physical",
    meaning: "身体的な",
    sentence: "(   ) contact",
    jp: "身体的接触",
    jpBlank: "(   )的接触",
    jpAnswer: "身体"
  },
  {
    wordNo: 57,
    word: "physical",
    meaning: "物理的な",
    sentence: "the (   ) world",
    jp: "物理界",
    jpBlank: "(   )界",
    jpAnswer: "物理"
  },
  {
    wordNo: 58,
    word: "fever",
    meaning: "（体温の）熱",
    sentence: "have a (   ).",
    jp: "熱がある。",
    jpBlank: "(   )。",
    jpAnswer: "熱がある"
  },
  {
    wordNo: 58,
    word: "fever",
    meaning: "熱狂",
    sentence: "be gripped by soccer (   )",
    jp: "サッカー熱に取りつかれる",
    jpBlank: "(   )取りつかれる",
    jpAnswer: "サッカー熱に"
  },
  {
    wordNo: 59,
    word: "strength",
    meaning: "（肉体的な）体力",
    sentence: "build up my physical (   )",
    jp: "体力をつける",
    jpBlank: "(   )をつける",
    jpAnswer: "体力"
  },
  {
    wordNo: 59,
    word: "strength",
    meaning: "（精神的な）強さ",
    sentence: "try with all my (   ) to lift the piano",
    jp: "持てるすべての力でピアノを持ち上げようとする",
    jpBlank: "持てるすべての(   )でピアノを持ち上げようとする",
    jpAnswer: "力"
  },
  {
    wordNo: 60,
    word: "tears",
    meaning: "涙",
    sentence: "I was moved to (   ).",
    jp: "私は感動して泣いた。",
    jpBlank: "私は感動して(   )。",
    jpAnswer: "泣いた"
  },
  {
    wordNo: 60,
    word: "tear",
    meaning: "〜を引き裂く，引きちぎる",
    sentence: "(   ) up the letter from him",
    jp: "彼からの手紙を引き裂く",
    jpBlank: "彼からの手紙を(   )",
    jpAnswer: "引き裂く"
  },
],
61: [
  {
    wordNo: 61,
    word: "tastes",
    meaning: "〜の味がする",
    sentence: "This apple (   ) sweet.",
    jp: "このリンゴは甘い。",
    jpBlank: "このリンゴは(   )。",
    jpAnswer: "甘い"
  },
  {
    wordNo: 61,
    word: "taste",
    meaning: "〜の味見をする",
    sentence: "(   ) the soup",
    jp: "スープの味見をする",
    jpBlank: "スープの(   )する",
    jpAnswer: "味見を"
  },
  {
    wordNo: 61,
    word: "taste",
    meaning: "味",
    sentence: "This wine has a strong acid (   ).",
    jp: "このワインは酸味が強い。",
    jpBlank: "このワインは(   )。",
    jpAnswer: "酸味が強い"
  },
  {
    wordNo: 61,
    word: "taste",
    meaning: "好み",
    sentence: "have good (   ) in clothes",
    jp: "服のセンスがよい",
    jpBlank: "服のセンスが(   )",
    jpAnswer: "よい"
  },
  {
    wordNo: 62,
    word: "rules",
    meaning: "規則",
    sentence: "It is against the (   ).",
    jp: "それは規則違反だ。",
    jpBlank: "それは(   )違反だ。",
    jpAnswer: "規則"
  },
  {
    wordNo: 62,
    word: "rule",
    meaning: "〜を支配する",
    sentence: "(   ) the country",
    jp: "その国を支配する",
    jpBlank: "その国を(   )する",
    jpAnswer: "支配"
  },
  {
    wordNo: 63,
    word: "role",
    meaning: "役割",
    sentence: "play an important (   ) in society",
    jp: "社会で重要な役割を果たす",
    jpBlank: "社会で重要な(   )を果たす",
    jpAnswer: "役割"
  },
  {
    wordNo: 64,
    word: "habit",
    meaning: "（無意識な）習慣",
    sentence: "have a (   ) of making excuses",
    jp: "言い訳をする癖がある",
    jpBlank: "言い訳をする(   )がある",
    jpAnswer: "癖"
  },
  {
    wordNo: 65,
    word: "customs",
    meaning: "習慣（社会的な）",
    sentence: "Different countries have different (   ).",
    jp: "習慣は国によって違う。",
    jpBlank: "(   )は国によって違う。",
    jpAnswer: "習慣"
  },
  {
    wordNo: 65,
    word: "customs",
    meaning: "税関",
    sentence: "show what is in my suitcase at (   )",
    jp: "税関でスーツケースの中身を見せる",
    jpBlank: "(   )でスーツケースの中身を見せる",
    jpAnswer: "税関"
  },
  {
    wordNo: 66,
    word: "traditions",
    meaning: "伝統",
    sentence: "Japanese (   )",
    jp: "日本の伝統",
    jpBlank: "日本の(   )",
    jpAnswer: "伝統"
  },
  {
    wordNo: 67,
    word: "society",
    meaning: "社会",
    sentence: "women's status in (   )",
    jp: "社会での女性の地位",
    jpBlank: "(   )での女性の地位",
    jpAnswer: "社会"
  },
  {
    wordNo: 67,
    word: "society",
    meaning: "社交",
    sentence: "enjoy her (   )",
    jp: "彼女と同席することを楽しむ",
    jpBlank: "彼女と(   )することを楽しむ",
    jpAnswer: "同席"
  },
  {
    wordNo: 67,
    word: "Society",
    meaning: "協会",
    sentence: "the Royal (   ) for the Prevention of Cruelty to Animals",
    jp: "英国王立動物虐待防止協会",
    jpBlank: "英国王立動物虐待防止(   )",
    jpAnswer: "協会"
  },
  {
    wordNo: 68,
    word: "law",
    meaning: "法律，国法",
    sentence: "Parking here is against the (   ).",
    jp: "ここでの駐車は法律違反だ。",
    jpBlank: "ここでの駐車は(   )違反だ。",
    jpAnswer: "法律"
  },
  {
    wordNo: 68,
    word: "law",
    meaning: "（個々の）法律",
    sentence: "a (   ) against smoking on the street",
    jp: "路上喫煙を禁じる法律",
    jpBlank: "路上喫煙を禁じる(   )",
    jpAnswer: "法律"
  },
  {
    wordNo: 68,
    word: "laws",
    meaning: "（科学などの）法則",
    sentence: "the (   ) of nature",
    jp: "自然の法則",
    jpBlank: "自然の(   )",
    jpAnswer: "法則"
  },
  {
    wordNo: 69,
    word: "ancestors",
    meaning: "祖先",
    sentence: "My (   ) were French.",
    jp: "私の祖先はフランス人だった。",
    jpBlank: "私の(   )はフランス人だった。",
    jpAnswer: "祖先"
  },
  {
    wordNo: 70,
    word: "population",
    meaning: "人口，個体数",
    sentence: "The (   ) of Tokyo is larger than that of Osaka.",
    jp: "東京の人口は大阪の人口より多い。",
    jpBlank: "東京の(   )は大阪の人口より多い。",
    jpAnswer: "人口"
  },
  {
    wordNo: 70,
    word: "population",
    meaning: "住民",
    sentence: "L.A. has a large Chinese (   ).",
    jp: "ロサンゼルスには多くの中国人が住んでいる。",
    jpBlank: "ロサンゼルスには多くの(   )が住んでいる。",
    jpAnswer: "中国人"
  },
  {
    wordNo: 71,
    word: "native",
    meaning: "母国の，その土地の",
    sentence: "his (   ) language",
    jp: "彼の母（国）語",
    jpBlank: "彼の母(   )語",
    jpAnswer: "国"
  },
  {
    wordNo: 71,
    word: "native",
    meaning: "（ある土地の）生まれの人",
    sentence: "a (   ) of Japan",
    jp: "日本生まれの人",
    jpBlank: "日本(   )",
    jpAnswer: "生まれの人"
  },
  {
    wordNo: 72,
    word: "abroad",
    meaning: "海外へ，海外で",
    sentence: "find a job (   )",
    jp: "海外で仕事を見つける",
    jpBlank: "(   )仕事を見つける",
    jpAnswer: "海外で"
  },
  {
    wordNo: 73,
    word: "local",
    meaning: "その土地の，地元の",
    sentence: "a (   ) bank",
    jp: "地元の銀行",
    jpBlank: "(   )銀行",
    jpAnswer: "地元の"
  },
  {
    wordNo: 73,
    word: "local",
    meaning: "地方の",
    sentence: "(   ) government",
    jp: "地方自治体",
    jpBlank: "(   )自治体",
    jpAnswer: "地方"
  },
  {
    wordNo: 73,
    word: "locals",
    meaning: "地元の人",
    sentence: "talk with the (   )",
    jp: "地元の人々と話す",
    jpBlank: "(   )々と話す",
    jpAnswer: "地元の人"
  },
  {
    wordNo: 74,
    word: "survey",
    meaning: "調査",
    sentence: "according to a recent (   )",
    jp: "最近の調査によると",
    jpBlank: "最近の(   )によると",
    jpAnswer: "調査"
  },
  {
    wordNo: 74,
    word: "survey",
    meaning: "〜を調査する",
    sentence: "(   ) the opinions of teenagers",
    jp: "10代の若者たちの意見を調査する",
    jpBlank: "10代の若者たちの意見を(   )",
    jpAnswer: "調査する"
  },
  {
    wordNo: 75,
    word: "value",
    meaning: "価値",
    sentence: "the (   ) of the painting",
    jp: "その絵の価値",
    jpBlank: "その絵の(   )",
    jpAnswer: "価値"
  },
  {
    wordNo: 75,
    word: "values",
    meaning: "価値観",
    sentence: "Everyone has their own (   ).",
    jp: "誰もが自分独自の価値観を有する。",
    jpBlank: "誰もが自分独自の(   )を有する。",
    jpAnswer: "価値観"
  },
  {
    wordNo: 75,
    word: "value",
    meaning: "お買い得品",
    sentence: "This shirt is really good (   ).",
    jp: "このシャツは本当にお買い得だ。",
    jpBlank: "このシャツは本当にお買い(   )。",
    jpAnswer: "得だ"
  },
  {
    wordNo: 75,
    word: "value",
    meaning: "〜を重んじる",
    sentence: "(   ) their privacy",
    jp: "彼らのプライバシーを重んじる",
    jpBlank: "彼らのプライバシーを(   )",
    jpAnswer: "重んじる"
  },
  {
    wordNo: 76,
    word: "treasure",
    meaning: "財宝，宝",
    sentence: "a national (   )",
    jp: "国宝",
    jpBlank: "(   )",
    jpAnswer: "国宝"
  },
  {
    wordNo: 76,
    word: "treasure",
    meaning: "大事な人物",
    sentence: "My secretary is a real (   ).",
    jp: "私の秘書は本当に宝物のような存在だ。",
    jpBlank: "私の秘書は本当に(   )のような存在だ。",
    jpAnswer: "宝物"
  },
  {
    wordNo: 76,
    word: "treasure",
    meaning: "〜を大事にする",
    sentence: "(   ) this moment with her",
    jp: "彼女とのこの瞬間を大切にする",
    jpBlank: "彼女とのこの瞬間を大切に(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 77,
    word: "fashion",
    meaning: "流行",
    sentence: "follow the latest (   )",
    jp: "最新のファッションを追う",
    jpBlank: "最新のファッションを(   )",
    jpAnswer: "追う"
  },
  {
    wordNo: 77,
    word: "fashion",
    meaning: "流儀，やり方",
    sentence: "in the traditional (   )",
    jp: "伝統的なやり方で",
    jpBlank: "伝統的な(   )で",
    jpAnswer: "やり方"
  },
  {
    wordNo: 77,
    word: "fashion",
    meaning: "作る",
    sentence: "(   ) stone tools",
    jp: "石器を作る",
    jpBlank: "石器を(   )",
    jpAnswer: "作る"
  },
  {
    wordNo: 78,
    word: "public",
    meaning: "大衆",
    sentence: "the general (   )",
    jp: "一般大衆",
    jpBlank: "一般(   )",
    jpAnswer: "大衆"
  },
  {
    wordNo: 78,
    word: "public",
    meaning: "公の，公衆の",
    sentence: "(   ) places",
    jp: "公衆の場所",
    jpBlank: "(   )場所",
    jpAnswer: "公衆の"
  },
  {
    wordNo: 79,
    word: "evidence",
    meaning: "証拠",
    sentence: "There is no (   ) to support his story.",
    jp: "彼の話を裏付ける証拠はない。",
    jpBlank: "彼の話を裏付ける(   )はない。",
    jpAnswer: "証拠"
  },
  {
    wordNo: 80,
    word: "vote",
    meaning: "投票（数）",
    sentence: "receive 45% of the (   )",
    jp: "投票数の45％を獲得する",
    jpBlank: "(   )数の45％を獲得する",
    jpAnswer: "投票"
  },
  {
    wordNo: 80,
    word: "vote",
    meaning: "投票する",
    sentence: "the right to (   )",
    jp: "投票権（投票する権利）",
    jpBlank: "(   )権",
    jpAnswer: "投票"
  },
  {
    wordNo: 81,
    word: "government",
    meaning: "政府",
    sentence: "the Japanese (   )",
    jp: "日本政府",
    jpBlank: "日本(   )",
    jpAnswer: "政府"
  },
  {
    wordNo: 82,
    word: "nation",
    meaning: "国家",
    sentence: "the most powerful (   ) in the world",
    jp: "世界で一番力のある国",
    jpBlank: "世界で一番力(   )",
    jpAnswer: "のある国"
  },
  {
    wordNo: 82,
    word: "nation",
    meaning: "国民",
    sentence: "the voice of the (   )",
    jp: "国民の声",
    jpBlank: "(   )の声",
    jpAnswer: "国民"
  },
  {
    wordNo: 83,
    word: "capital",
    meaning: "首都",
    sentence: "What is the (   ) of Canada?",
    jp: "カナダの首都はどこですか。",
    jpBlank: "カナダの(   )はどこですか。",
    jpAnswer: "首都"
  },
  {
    wordNo: 83,
    word: "capital",
    meaning: "資本",
    sentence: "start a company with only a little (   )",
    jp: "わずかな資本で会社を始める",
    jpBlank: "わずかな(   )で会社を始める",
    jpAnswer: "資本"
  },
  {
    wordNo: 83,
    word: "capital",
    meaning: "死に値する",
    sentence: "a (   ) offence",
    jp: "死罪",
    jpBlank: "(   )",
    jpAnswer: "死罪"
  },
  {
    wordNo: 84,
    word: "state",
    meaning: "状態",
    sentence: "his (   ) of mind",
    jp: "彼の精神状態",
    jpBlank: "彼の精神(   )",
    jpAnswer: "状態"
  },
  {
    wordNo: 84,
    word: "States",
    meaning: "（米国の）州",
    sentence: "the United (   ) of America",
    jp: "アメリカ合衆国",
    jpBlank: "(   )国",
    jpAnswer: "アメリカ合衆"
  },
  {
    wordNo: 84,
    word: "state",
    meaning: "国家",
    sentence: "the separation of church and (   )",
    jp: "教会と国家の分離",
    jpBlank: "教会と(   )の分離",
    jpAnswer: "国家"
  },
  {
    wordNo: 84,
    word: "state",
    meaning: "述べる",
    sentence: "(   ) my opinion",
    jp: "私の意見を言う",
    jpBlank: "(   )う",
    jpAnswer: "私の意見を言"
  },
  {
    wordNo: 85,
    word: "political",
    meaning: "政治的な，政治の",
    sentence: "the (   ) situation in Russia",
    jp: "ロシアの政治情勢",
    jpBlank: "ロシアの(   )情勢",
    jpAnswer: "政治"
  },
  {
    wordNo: 86,
    word: "price",
    meaning: "価格",
    sentence: "pay a very high (   ) for the painting",
    jp: "その絵に非常に高額な価格を払う",
    jpBlank: "その絵に非常に高額な(   )を払う",
    jpAnswer: "価格"
  },
  {
    wordNo: 86,
    word: "Prices",
    meaning: "物価",
    sentence: "(   ) have gone up by 5%.",
    jp: "物価が5％上がった。",
    jpBlank: "(   )が5％上がった。",
    jpAnswer: "物価"
  },
  {
    wordNo: 86,
    word: "price",
    meaning: "代償",
    sentence: "pay the (   ) of success",
    jp: "成功の代価を払う",
    jpBlank: "成功の代価を(   )",
    jpAnswer: "払う"
  },
  {
    wordNo: 87,
    word: "sum",
    meaning: "金額",
    sentence: "pay a large (   ) for antiques",
    jp: "骨とう品に大金を払う",
    jpBlank: "骨とう品に大(   )",
    jpAnswer: "金を払う"
  },
  {
    wordNo: 87,
    word: "sum",
    meaning: "合計",
    sentence: "The (   ) of 5 and 8 is 13.",
    jp: "5と8の和は13だ。",
    jpBlank: "5と8の(   )は13だ。",
    jpAnswer: "和"
  },
  {
    wordNo: 87,
    word: "sums",
    meaning: "計算",
    sentence: "do (   ) in my head",
    jp: "暗算する",
    jpBlank: "(   )",
    jpAnswer: "暗算する"
  },
  {
    wordNo: 87,
    word: "sum",
    meaning: "要約する",
    sentence: "(   ) up the main points",
    jp: "重要な点を要約する",
    jpBlank: "重要な点を(   )する",
    jpAnswer: "要約"
  },
  {
    wordNo: 88,
    word: "budget",
    meaning: "予算",
    sentence: "our (   ) for this trip",
    jp: "今回の旅の予算",
    jpBlank: "今回の旅の(   )",
    jpAnswer: "予算"
  },
  {
    wordNo: 88,
    word: "budget",
    meaning: "安い",
    sentence: "at (   ) price",
    jp: "お手頃価格で",
    jpBlank: "(   )",
    jpAnswer: "お手頃価格で"
  },
  {
    wordNo: 89,
    word: "fee",
    meaning: "料金",
    sentence: "pay a cancellation (   )",
    jp: "キャンセル料を払う",
    jpBlank: "キャンセル料(   )",
    jpAnswer: "を払う"
  },
  {
    wordNo: 89,
    word: "fees",
    meaning: "謝礼",
    sentence: "legal (   )",
    jp: "弁護士への謝礼",
    jpBlank: "弁護士への(   )",
    jpAnswer: "謝礼"
  },
  {
    wordNo: 90,
    word: "fares",
    meaning: "（乗り物の）運賃",
    sentence: "Taxi (   ) are low in Singapore.",
    jp: "シンガポールのタクシー料金は安い。",
    jpBlank: "シンガポールのタクシー(   )は安い。",
    jpAnswer: "料金"
  },
],
91: [
  {
    wordNo: 91,
    word: "bill",
    meaning: "勘定",
    sentence: "May we have the (   )?",
    jp: "お会計お願いします。",
    jpBlank: "(   )お願いします。",
    jpAnswer: "お会計"
  },
  {
    wordNo: 91,
    word: "bill",
    meaning: "請求書",
    sentence: "the phone (   )",
    jp: "電話代の請求書",
    jpBlank: "電話代の(   )",
    jpAnswer: "請求書"
  },
  {
    wordNo: 91,
    word: "bill",
    meaning: "紙幣",
    sentence: "a ten thousand-yen (   )",
    jp: "1万円札",
    jpBlank: "1(   )",
    jpAnswer: "万円札"
  },
  {
    wordNo: 91,
    word: "bill",
    meaning: "法案",
    sentence: "approve a (   )",
    jp: "法案を承認する",
    jpBlank: "(   )を承認する",
    jpAnswer: "法案"
  },
  {
    wordNo: 92,
    word: "trade",
    meaning: "貿易",
    sentence: "Japan's (   ) with the U.S.",
    jp: "日本の対米貿易",
    jpBlank: "日本の対米(   )",
    jpAnswer: "貿易"
  },
  {
    wordNo: 92,
    word: "trade",
    meaning: "業界",
    sentence: "the hotel (   )",
    jp: "ホテル業界",
    jpBlank: "ホテル(   )",
    jpAnswer: "業界"
  },
  {
    wordNo: 92,
    word: "trade",
    meaning: "商売",
    sentence: "the basics of (   )",
    jp: "商売の基本",
    jpBlank: "(   )の基本",
    jpAnswer: "商売"
  },
  {
    wordNo: 92,
    word: "trade",
    meaning: "交換する",
    sentence: "(   ) email addresses with him",
    jp: "彼とメールアドレスを交換する",
    jpBlank: "彼とメールアドレスを(   )",
    jpAnswer: "交換する"
  },
  {
    wordNo: 93,
    word: "wealth",
    meaning: "富，財産",
    sentence: "achieve (   ) and power",
    jp: "富と権力を手にする",
    jpBlank: "富と権力を手(   )",
    jpAnswer: "にする"
  },
  {
    wordNo: 93,
    word: "wealth",
    meaning: "豊富な〜",
    sentence: "a (   ) of knowledge",
    jp: "豊富な知識",
    jpBlank: "(   )",
    jpAnswer: "豊富な知識"
  },
  {
    wordNo: 94,
    word: "economy",
    meaning: "経済",
    sentence: "boost the Japanese (   )",
    jp: "日本経済を活性化する",
    jpBlank: "日本(   )を活性化する",
    jpAnswer: "経済"
  },
  {
    wordNo: 94,
    word: "economy",
    meaning: "節約",
    sentence: "for the sake of (   )",
    jp: "節約のため",
    jpBlank: "(   )のため",
    jpAnswer: "節約"
  },
  {
    wordNo: 95,
    word: "cost",
    meaning: "費用を要する，かかる",
    sentence: "The suit (   ) me 500 dollars.",
    jp: "そのスーツは，500ドルした。",
    jpBlank: "そのスーツは，(   )。",
    jpAnswer: "500ドルした"
  },
  {
    wordNo: 95,
    word: "cost",
    meaning: "犠牲にする",
    sentence: "That mistake (   ) me my fortune.",
    jp: "そのミスで全財産を失った。",
    jpBlank: "そのミスで全財産を(   )。",
    jpAnswer: "失った"
  },
  {
    wordNo: 95,
    word: "cost",
    meaning: "費用，犠牲",
    sentence: "In Switzerland, the (   ) of living is very high.",
    jp: "スイスでは生活費がとても高い。",
    jpBlank: "スイスでは生活費がとても(   )。",
    jpAnswer: "高い"
  },
  {
    wordNo: 96,
    word: "company",
    meaning: "会社",
    sentence: "work for a big (   )",
    jp: "大きな会社で働く",
    jpBlank: "大きな(   )で働く",
    jpAnswer: "会社"
  },
  {
    wordNo: 96,
    word: "company",
    meaning: "一緒にいること",
    sentence: "I always enjoy his (   ).",
    jp: "彼と一緒にいるときはいつも楽しい。",
    jpBlank: "彼と一緒にいるときはいつ(   )。",
    jpAnswer: "も楽しい"
  },
  {
    wordNo: 96,
    word: "company",
    meaning: "仲間",
    sentence: "People judge you by the (   ) you keep.",
    jp: "人は付き合っている仲間で判断される。",
    jpBlank: "人は付き合っている(   )で判断される。",
    jpAnswer: "仲間"
  },
  {
    wordNo: 96,
    word: "company",
    meaning: "来客",
    sentence: "We are expecting (   ) today.",
    jp: "今日は来客があります。",
    jpBlank: "今日は(   )があります。",
    jpAnswer: "来客"
  },
  {
    wordNo: 97,
    word: "task",
    meaning: "仕事，任務",
    sentence: "accomplish a difficult (   )",
    jp: "困難な仕事を成し遂げる。",
    jpBlank: "困難な(   )を成し遂げる。",
    jpAnswer: "仕事"
  },
  {
    wordNo: 98,
    word: "earn",
    meaning: "金を稼ぐ",
    sentence: "(   ) money to pay my school fees",
    jp: "学費を払うお金を稼ぐ",
    jpBlank: "学費を払うお(   )",
    jpAnswer: "金を稼ぐ"
  },
  {
    wordNo: 98,
    word: "earn",
    meaning: "得る",
    sentence: "(   ) a reputation as a hard worker",
    jp: "勤勉との評判を得る",
    jpBlank: "勤勉との評判を(   )",
    jpAnswer: "得る"
  },
  {
    wordNo: 99,
    word: "hurts",
    meaning: "部位が痛む",
    sentence: "My back (   ) a lot.",
    jp: "腰がとても痛い。",
    jpBlank: "(   )い。",
    jpAnswer: "腰がとても痛"
  },
  {
    wordNo: 99,
    word: "hurt",
    meaning: "身体，感情を傷つける",
    sentence: "He (   ) his knee while playing football.",
    jp: "彼はサッカーをやっていて膝を痛めた。",
    jpBlank: "彼はサッカーをやっていて膝を(   )。",
    jpAnswer: "痛めた"
  },
  {
    wordNo: 100,
    word: "injure",
    meaning: "〜をけがさせる",
    sentence: "(   ) my back",
    jp: "腰を痛める",
    jpBlank: "(   )",
    jpAnswer: "腰を痛める"
  },
  {
    wordNo: 100,
    word: "injured",
    meaning: "けがを負う",
    sentence: "be seriously (   ) in an accident",
    jp: "事故で重傷を負う",
    jpBlank: "事故で重傷を(   )",
    jpAnswer: "負う"
  },
  {
    wordNo: 101,
    word: "damage",
    meaning: "損害",
    sentence: "seriously (   ) the environment",
    jp: "環境に深刻な被害を与える",
    jpBlank: "環境に深刻な被害を(   )",
    jpAnswer: "与える"
  },
  {
    wordNo: 101,
    word: "damage",
    meaning: "被害",
    sentence: "do (   ) to the village",
    jp: "その村に被害を与える",
    jpBlank: "その村に(   )を与える",
    jpAnswer: "被害"
  },
  {
    wordNo: 101,
    word: "damages",
    meaning: "賠償金",
    sentence: "claim (   )",
    jp: "損害賠償を請求する",
    jpBlank: "損害賠償を請(   )",
    jpAnswer: "求する"
  },
  {
    wordNo: 102,
    word: "destroy",
    meaning: "破壊する",
    sentence: "(   ) all weapons",
    jp: "すべての武器を破壊する",
    jpBlank: "すべての武器を(   )する",
    jpAnswer: "破壊"
  },
  {
    wordNo: 102,
    word: "destroyed",
    meaning: "全滅させる",
    sentence: "This horse has to be (   ).",
    jp: "この馬を殺処分するしかない。",
    jpBlank: "(   )分するしかない。",
    jpAnswer: "この馬を殺処"
  },
  {
    wordNo: 103,
    word: "ruined",
    meaning: "台無しにする",
    sentence: "You (   ) my plan.",
    jp: "君のせいで計画が台無しだよ。",
    jpBlank: "(   )画が台無しだよ。",
    jpAnswer: "君のせいで計"
  },
  {
    wordNo: 103,
    word: "ruined",
    meaning: "破壊する",
    sentence: "The flood (   ) the town.",
    jp: "洪水が町を破壊してしまった。",
    jpBlank: "洪水が町を(   )してしまった。",
    jpAnswer: "破壊"
  },
  {
    wordNo: 103,
    word: "ruins",
    meaning: "廃墟",
    sentence: "the (   ) of Pompeii",
    jp: "ポンペイの遺跡",
    jpBlank: "(   )跡",
    jpAnswer: "ポンペイの遺"
  },
  {
    wordNo: 104,
    word: "danger",
    meaning: "危険",
    sentence: "Tigers are in (   ) of extinction.",
    jp: "トラが絶滅の危機にある。",
    jpBlank: "トラが絶滅の(   )。",
    jpAnswer: "危機にある"
  },
  {
    wordNo: 105,
    word: "neighbor",
    meaning: "近所の人",
    sentence: "chat with a (   )",
    jp: "近所の人と話す",
    jpBlank: "(   )と話す",
    jpAnswer: "近所の人"
  },
  {
    wordNo: 105,
    word: "neighbor's",
    meaning: "隣の人",
    sentence: "My next-door (   ) dog barks day and night.",
    jp: "隣の人のイヌが昼夜問わずほえる。",
    jpBlank: "(   )のイヌが昼夜問わずほえる。",
    jpAnswer: "隣の人"
  },
  {
    wordNo: 106,
    word: "audience",
    meaning: "観客",
    sentence: "draw a large (   )",
    jp: "大観衆を集める",
    jpBlank: "(   )る",
    jpAnswer: "大観衆を集め"
  },
  {
    wordNo: 107,
    word: "crowd",
    meaning: "群衆",
    sentence: "A (   ) rushed into the hall.",
    jp: "群衆が会場になだれ込んだ。",
    jpBlank: "(   )が会場になだれ込んだ。",
    jpAnswer: "群衆"
  },
  {
    wordNo: 108,
    word: "author",
    meaning: "著者，作家",
    sentence: "the (   ) of War and Peace",
    jp: "『戦争と平和』の著者",
    jpBlank: "『戦争と平和』の(   )",
    jpAnswer: "著者"
  },
  {
    wordNo: 109,
    word: "staff",
    meaning: "職員，従業員",
    sentence: "Most of the (   ) is from Australia.",
    jp: "職員の半分はオーストラリア出身です。",
    jpBlank: "(   )の半分はオーストラリア出身です。",
    jpAnswer: "職員"
  },
  {
    wordNo: 110,
    word: "clerks",
    meaning: "店員",
    sentence: "the (   ) at that department store",
    jp: "あのデパートの店員",
    jpBlank: "あのデパートの(   )",
    jpAnswer: "店員"
  },
  {
    wordNo: 110,
    word: "clerk",
    meaning: "事務員，社員",
    sentence: "a bank (   )",
    jp: "銀行員",
    jpBlank: "(   )",
    jpAnswer: "銀行員"
  },
  {
    wordNo: 111,
    word: "customers",
    meaning: "客",
    sentence: "The restaurant was crowded with (   ) from abroad.",
    jp: "そのレストランは外国人客で混雑していた。",
    jpBlank: "(   )ンは外国人客で混雑していた。",
    jpAnswer: "そのレストラ"
  },
  {
    wordNo: 112,
    word: "passengers",
    meaning: "乗客",
    sentence: "There were a lot of (   ) on the train.",
    jp: "列車には多くの乗客が乗っていた。",
    jpBlank: "列車には多くの(   )が乗っていた。",
    jpAnswer: "乗客"
  },
  {
    wordNo: 113,
    word: "elderly",
    meaning: "年配の",
    sentence: "give up my seat to (   ) people",
    jp: "お年寄りに席を譲る",
    jpBlank: "お年寄りに席(   )",
    jpAnswer: "を譲る"
  },
  {
    wordNo: 113,
    word: "elderly",
    meaning: "年配の人々",
    sentence: "priority seats for the (   )",
    jp: "お年寄りのための優先席",
    jpBlank: "お年寄りのた(   )",
    jpAnswer: "めの優先席"
  },
  {
    wordNo: 114,
    word: "female",
    meaning: "女性の，雌の",
    sentence: "(   ) workers",
    jp: "女性の労働者",
    jpBlank: "(   )労働者",
    jpAnswer: "女性の"
  },
  {
    wordNo: 114,
    word: "female",
    meaning: "雌",
    sentence: "a (   ) cat",
    jp: "雌のネコ",
    jpBlank: "(   )",
    jpAnswer: "雌のネコ"
  },
  {
    wordNo: 114,
    word: "female",
    meaning: "雌",
    sentence: "the (   ) of the species",
    jp: "その種の雌",
    jpBlank: "(   )",
    jpAnswer: "その種の雌"
  },
  {
    wordNo: 115,
    word: "head",
    meaning: "向かう",
    sentence: "(   ) for the beach",
    jp: "海辺に向かう",
    jpBlank: "海辺に(   )",
    jpAnswer: "向かう"
  },
  {
    wordNo: 115,
    word: "headed",
    meaning: "率いる",
    sentence: "an investigative team (   ) by Mr. Nakahara",
    jp: "中原氏が率いる調査団",
    jpBlank: "中原氏が(   )調査団",
    jpAnswer: "率いる"
  },
  {
    wordNo: 116,
    word: "following",
    meaning: "後について行く，続く",
    sentence: "Someone was (   ) me.",
    jp: "誰かが私をつけていた。",
    jpBlank: "誰かが私を(   )。",
    jpAnswer: "つけていた"
  },
  {
    wordNo: 116,
    word: "follow",
    meaning: "従う",
    sentence: "(   ) his advice",
    jp: "彼の忠告に従う",
    jpBlank: "彼の忠告に(   )",
    jpAnswer: "従う"
  },
  {
    wordNo: 117,
    word: "wander",
    meaning: "歩き回る，さまよう",
    sentence: "(   ) about the town",
    jp: "街をぶらぶら歩き回る",
    jpBlank: "街をぶらぶら(   )",
    jpAnswer: "歩き回る"
  },
  {
    wordNo: 118,
    word: "travel",
    meaning: "旅行する，移動する",
    sentence: "(   ) around the world",
    jp: "世界中を旅する",
    jpBlank: "(   )る",
    jpAnswer: "世界中を旅す"
  },
  {
    wordNo: 118,
    word: "travels",
    meaning: "進む",
    sentence: "Light (   ) faster than sound.",
    jp: "光は音より速く進む。",
    jpBlank: "光は音より速く(   )。",
    jpAnswer: "進む"
  },
  {
    wordNo: 119,
    word: "pass",
    meaning: "通り過ぎる",
    sentence: "(   ) the post office",
    jp: "郵便局の（前を）通り過ぎる",
    jpBlank: "郵便局の(   )",
    jpAnswer: "通り過ぎる"
  },
  {
    wordNo: 119,
    word: "pass",
    meaning: "抜く",
    sentence: "(   ) five runners on the final lap",
    jp: "最後の1周で5人の走者を抜く",
    jpBlank: "最後の1周で5人の走者を(   )",
    jpAnswer: "抜く"
  },
  {
    wordNo: 119,
    word: "pass",
    meaning: "受かる",
    sentence: "(   ) the bar exam",
    jp: "司法試験に受かる",
    jpBlank: "司法試験に(   )",
    jpAnswer: "受かる"
  },
  {
    wordNo: 119,
    word: "Pass",
    meaning: "渡す",
    sentence: "(   ) me the salt, please.",
    jp: "塩を取って（私に渡して）ください。",
    jpBlank: "塩を取って(   )ください。",
    jpAnswer: "私に渡して"
  },
  {
    wordNo: 119,
    word: "passes",
    meaning: "過ぎる",
    sentence: "as time (   )",
    jp: "時の経過と共に",
    jpBlank: "(   )に",
    jpAnswer: "時の経過と共"
  },
  {
    wordNo: 119,
    word: "pass",
    meaning: "通行証",
    sentence: "an annual (   ) for the theme park",
    jp: "そのテーマパークの年間パス",
    jpBlank: "そのテーマパークの(   )",
    jpAnswer: "年間パス"
  },
  {
    wordNo: 120,
    word: "likely",
    meaning: "〜しそうだ",
    sentence: "Things are (   ) to improve.",
    jp: "事態はよくなりそうだ。",
    jpBlank: "事態は(   )だ。",
    jpAnswer: "よくなりそう"
  },
  {
    wordNo: 120,
    word: "likely",
    meaning: "おそらく",
    sentence: "He will very (   ) stay home.",
    jp: "おそらく，彼は家にいるだろう。",
    jpBlank: "(   )，彼は家にいるだろう。",
    jpAnswer: "おそらく"
  },
],
121: [
  {
    wordNo: 121,
    word: "natural",
    meaning: "当然の",
    sentence: "It is only (   ) that you cannot catch words you do not know.",
    jp: "知らない単語を聞き取れないのは当然のことだ。",
    jpBlank: "知らない単語を聞き取れないのは(   )ことだ。",
    jpAnswer: "当然の"
  },
  {
    wordNo: 121,
    word: "natural",
    meaning: "自然の",
    sentence: "(   ) beauty",
    jp: "自然美",
    jpBlank: "(   )美",
    jpAnswer: "自然"
  },
  {
    wordNo: 121,
    word: "natural",
    meaning: "生まれながらの",
    sentence: "her (   ) talent",
    jp: "彼女の生まれつきの才能",
    jpBlank: "彼女の生まれ(   )",
    jpAnswer: "つきの才能"
  },
  {
    wordNo: 122,
    word: "certain",
    meaning: "確かな",
    sentence: "He is (   ) to become a star player.",
    jp: "彼はきっとスター選手になるよ。",
    jpBlank: "彼は(   )スター選手になるよ。",
    jpAnswer: "きっと"
  },
  {
    wordNo: 122,
    word: "certain",
    meaning: "ある〜",
    sentence: "be sent to a (   ) country",
    jp: "ある国に派遣される",
    jpBlank: "ある国に派遣(   )",
    jpAnswer: "される"
  },
  {
    wordNo: 123,
    word: "probably",
    meaning: "おそらく",
    sentence: "The repairs will (   ) take a month.",
    jp: "修理はおそらく1か月はかかるだろう。",
    jpBlank: "修理は(   )1か月はかかるだろう。",
    jpAnswer: "おそらく"
  },
  {
    wordNo: 124,
    word: "faced",
    meaning: "直面する",
    sentence: "We are (   ) with crisis.",
    jp: "私たちは危機に直面している。",
    jpBlank: "私たちは危機に(   )している。",
    jpAnswer: "直面"
  },
  {
    wordNo: 124,
    word: "facing",
    meaning: "向いている",
    sentence: "a window (   ) (the) south",
    jp: "南向きの窓",
    jpBlank: "(   )",
    jpAnswer: "南向きの窓"
  },
  {
    wordNo: 124,
    word: "face",
    meaning: "体面",
    sentence: "lose (   )",
    jp: "面目を失う",
    jpBlank: "(   )",
    jpAnswer: "面目を失う"
  },
  {
    wordNo: 125,
    word: "Avoid",
    meaning: "避ける",
    sentence: "(   ) making eye contact with monkeys.",
    jp: "サルと目を合わせないようにしなさい。",
    jpBlank: "サルと目を(   )しなさい。",
    jpAnswer: "合わせないように"
  },
  {
    wordNo: 126,
    word: "solve",
    meaning: "解決する，解く",
    sentence: "(   ) the math problem",
    jp: "その数学の問題を解く",
    jpBlank: "その数学の問題を(   )",
    jpAnswer: "解く"
  },
  {
    wordNo: 127,
    word: "trouble",
    meaning: "問題，ごたごた",
    sentence: "have (   ) sleeping",
    jp: "寝つけない（眠るのに苦労する）。",
    jpBlank: "(   )。",
    jpAnswer: "寝つけない"
  },
  {
    wordNo: 127,
    word: "trouble",
    meaning: "困らせる",
    sentence: "I'm sorry to (   ) you.",
    jp: "お手間をおかけして（あなたを困らせて）すみません。",
    jpBlank: "お手間をおかけしてすみま(   )。",
    jpAnswer: "せん"
  },
  {
    wordNo: 128,
    word: "issue",
    meaning: "問題",
    sentence: "an international (   )",
    jp: "国際問題",
    jpBlank: "国際(   )",
    jpAnswer: "問題"
  },
  {
    wordNo: 128,
    word: "issue",
    meaning: "号",
    sentence: "the latest (   ) of a magazine",
    jp: "雑誌の最新号",
    jpBlank: "(   )",
    jpAnswer: "雑誌の最新号"
  },
  {
    wordNo: 128,
    word: "issue",
    meaning: "発行する",
    sentence: "(   ) a passport",
    jp: "パスポートを発行する",
    jpBlank: "パスポートを(   )する",
    jpAnswer: "発行"
  },
  {
    wordNo: 129,
    word: "cheer",
    meaning: "声援を送る",
    sentence: "(   ) all the players on",
    jp: "すべての選手たちに声援を送る",
    jpBlank: "すべての選手たちに(   )",
    jpAnswer: "声援を送る"
  },
  {
    wordNo: 129,
    word: "cheered",
    meaning: "励ます",
    sentence: "His arrival (   ) me up.",
    jp: "彼の到着で元気が出た（私を励ました）。",
    jpBlank: "彼の到着で元気が出た(   )。",
    jpAnswer: "私を励ました"
  },
  {
    wordNo: 129,
    word: "cheer",
    meaning: "声援",
    sentence: "give a (   )",
    jp: "声援を送る",
    jpBlank: "(   )を送る",
    jpAnswer: "声援"
  },
  {
    wordNo: 129,
    word: "Cheers",
    meaning: "乾杯",
    sentence: "\"(   )!\" shouted Adam.",
    jp: "「乾杯！」とアダムは叫んだ。",
    jpBlank: "「(   )！」とアダムは叫んだ。",
    jpAnswer: "乾杯"
  },
  {
    wordNo: 130,
    word: "encourage",
    meaning: "促す，勧める",
    sentence: "(   ) people to bike to work",
    jp: "人々に自転車通勤するよう促す",
    jpBlank: "人々に自転車通勤するよう(   )",
    jpAnswer: "促す"
  },
  {
    wordNo: 130,
    word: "encourage",
    meaning: "励ます",
    sentence: "(   ) the students",
    jp: "生徒たちを元気づける",
    jpBlank: "生徒たちを(   )",
    jpAnswer: "元気づける"
  },
  {
    wordNo: 131,
    word: "support",
    meaning: "支持する",
    sentence: "firmly (   ) her",
    jp: "強く彼女を支持する",
    jpBlank: "強く彼女を(   )する",
    jpAnswer: "支持"
  },
  {
    wordNo: 131,
    word: "support",
    meaning: "養う",
    sentence: "(   ) a family of four",
    jp: "4人家族を養う",
    jpBlank: "4人家族を(   )",
    jpAnswer: "養う"
  },
  {
    wordNo: 131,
    word: "supports",
    meaning: "立証する",
    sentence: "This (   ) my idea.",
    jp: "これが私の考えを立証する。",
    jpBlank: "これが私の考えを(   )。",
    jpAnswer: "立証する"
  },
  {
    wordNo: 131,
    word: "support",
    meaning: "支持，支援",
    sentence: "financial (   )",
    jp: "財政的援助",
    jpBlank: "(   )",
    jpAnswer: "財政的援助"
  },
  {
    wordNo: 132,
    word: "prevented",
    meaning: "妨げる",
    sentence: "The heavy snow (   ) us from going out.",
    jp: "大雪のため（私たちの）外出できなかった。",
    jpBlank: "大雪のため(   )外出できなかった。",
    jpAnswer: "私たちの"
  },
  {
    wordNo: 132,
    word: "prevent",
    meaning: "予防する",
    sentence: "(   ) the flu",
    jp: "インフルエンザの予防をする",
    jpBlank: "インフルエンザの(   )をする",
    jpAnswer: "予防"
  },
  {
    wordNo: 133,
    word: "deny",
    meaning: "否定する",
    sentence: "(   ) that he is a great scientist",
    jp: "彼が偉大な科学者であることを否定する",
    jpBlank: "彼が偉大な科学者であることを(   )",
    jpAnswer: "否定する"
  },
  {
    wordNo: 133,
    word: "deny",
    meaning: "与えない",
    sentence: "(   ) them the right to vote",
    jp: "彼らに投票権を与えない",
    jpBlank: "彼らに投票権を(   )",
    jpAnswer: "与えない"
  },
  {
    wordNo: 134,
    word: "enabled",
    meaning: "可能にする",
    sentence: "The internet has (   ) us to receive information right away.",
    jp: "インターネットのおかげで情報をすぐ得られるようになった（私たちに得ることを可能にした）。",
    jpBlank: "インターネットのおかげで情報をすぐ得られるように(   )。",
    jpAnswer: "なった"
  },
  {
    wordNo: 135,
    word: "succeed",
    meaning: "成功する",
    sentence: "(   ) in landing on the moon",
    jp: "月面着陸に成功する",
    jpBlank: "月面着陸に(   )する",
    jpAnswer: "成功"
  },
  {
    wordNo: 135,
    word: "succeed",
    meaning: "継ぐ",
    sentence: "(   ) to the family business",
    jp: "家業を引き継ぐ",
    jpBlank: "家業を引き(   )",
    jpAnswer: "継ぐ"
  },
  {
    wordNo: 136,
    word: "miss",
    meaning: "逃す",
    sentence: "(   ) the last train",
    jp: "終電を逃す",
    jpBlank: "終電を(   )",
    jpAnswer: "逃す"
  },
  {
    wordNo: 136,
    word: "miss",
    meaning: "休む",
    sentence: "(   ) school for two days",
    jp: "2日間学校を休む",
    jpBlank: "2日間学校を(   )",
    jpAnswer: "休む"
  },
  {
    wordNo: 136,
    word: "miss",
    meaning: "寂しく思う",
    sentence: "I (   ) you.",
    jp: "あなたに会えなくて寂しい（あなたを恋しく思う）。",
    jpBlank: "(   )なくて寂しい。",
    jpAnswer: "あなたに会え"
  },
  {
    wordNo: 137,
    word: "fail",
    meaning: "失敗する",
    sentence: "(   ) in business",
    jp: "商売で失敗する",
    jpBlank: "商売で(   )する",
    jpAnswer: "失敗"
  },
  {
    wordNo: 137,
    word: "fail",
    meaning: "できない",
    sentence: "(   ) to see what happened",
    jp: "何が起きたかわからない（知ることに失敗する）",
    jpBlank: "何が起きたか(   )",
    jpAnswer: "わからない"
  },
  {
    wordNo: 137,
    word: "fail",
    meaning: "落ちる",
    sentence: "(   ) the exam",
    jp: "試験に落ちる",
    jpBlank: "試験に(   )",
    jpAnswer: "落ちる"
  },
  {
    wordNo: 137,
    word: "fails",
    meaning: "役に立たない",
    sentence: "My memory (   ) me these days.",
    jp: "近頃，記憶が役に立たない（私に役立たない）。",
    jpBlank: "近頃，記憶が(   )。",
    jpAnswer: "役に立たない"
  },
  {
    wordNo: 138,
    word: "mistake",
    meaning: "間違える",
    sentence: "(   ) him for his twin brother",
    jp: "彼を双子の弟と間違える",
    jpBlank: "彼を双子の弟と(   )",
    jpAnswer: "間違える"
  },
  {
    wordNo: 138,
    word: "mistakes",
    meaning: "間違い",
    sentence: "make grammatical (   )",
    jp: "文法ミスをする",
    jpBlank: "(   )る",
    jpAnswer: "文法ミスをす"
  },
  {
    wordNo: 139,
    word: "check",
    meaning: "調べる",
    sentence: "(   ) the brakes",
    jp: "そのブレーキを調べる",
    jpBlank: "そのブレーキを(   )",
    jpAnswer: "調べる"
  },
  {
    wordNo: 139,
    word: "check",
    meaning: "阻止する",
    sentence: "(   ) the spread of the disease",
    jp: "病気の流行を阻止する",
    jpBlank: "病気の流行を(   )する",
    jpAnswer: "阻止"
  },
  {
    wordNo: 139,
    word: "check",
    meaning: "小切手",
    sentence: "sign a (   )",
    jp: "小切手に署名する",
    jpBlank: "(   )に署名する",
    jpAnswer: "小切手"
  },
  {
    wordNo: 139,
    word: "check",
    meaning: "勘定書",
    sentence: "Can I have the (   ), please?",
    jp: "お勘定をお願いいたします。",
    jpBlank: "(   )いいたします。",
    jpAnswer: "お勘定をお願"
  },
  {
    wordNo: 139,
    word: "check",
    meaning: "検査",
    sentence: "have a medical (   ) (up)",
    jp: "健康診断を受ける",
    jpBlank: "健康診断を受(   )",
    jpAnswer: "ける"
  },
  {
    wordNo: 139,
    word: "check",
    meaning: "抑制",
    sentence: "hold their activities in (   )",
    jp: "彼らの活動を食い止める（抑制して留める）",
    jpBlank: "彼らの活動を(   )",
    jpAnswer: "食い止める"
  },
  {
    wordNo: 140,
    word: "hide",
    meaning: "〜を隠す",
    sentence: "(   ) the comic under the pillow",
    jp: "枕の下に漫画を隠す",
    jpBlank: "枕の下に漫画を(   )",
    jpAnswer: "隠す"
  },
  {
    wordNo: 140,
    word: "hiding",
    meaning: "隠れ場所",
    sentence: "my (   ) place",
    jp: "私の隠れ場所",
    jpBlank: "私の(   )",
    jpAnswer: "隠れ場所"
  },
  {
    wordNo: 141,
    word: "draw",
    meaning: "描く",
    sentence: "(   ) her portrait",
    jp: "彼女の似顔絵を描く",
    jpBlank: "彼女の似顔絵を(   )",
    jpAnswer: "描く"
  },
  {
    wordNo: 141,
    word: "draw",
    meaning: "引く",
    sentence: "(   ) his attention to that fact",
    jp: "その事に彼の注目を向けさせる",
    jpBlank: "その事に彼の(   )",
    jpAnswer: "注目を向けさせる"
  },
  {
    wordNo: 141,
    word: "drawn",
    meaning: "引っ張る",
    sentence: "a cart (   ) by two horses",
    jp: "2頭の馬に引かれた荷馬車",
    jpBlank: "2頭の馬に引か(   )",
    jpAnswer: "れた荷馬車"
  },
  {
    wordNo: 142,
    word: "join",
    meaning: "加わる",
    sentence: "(   ) the Me Too movement",
    jp: "Me Too 運動に参加する",
    jpBlank: "Me Too (   )る",
    jpAnswer: "運動に参加す"
  },
  {
    wordNo: 142,
    word: "join",
    meaning: "つなぐ",
    sentence: "(   ) pipes together",
    jp: "配水管を一本につなぐ",
    jpBlank: "配水管を一本に(   )",
    jpAnswer: "つなぐ"
  },
  {
    wordNo: 142,
    word: "Join",
    meaning: "食事をともにする",
    sentence: "(   ) us for lunch.",
    jp: "お昼を一緒に食べようよ。",
    jpBlank: "お昼を一緒に(   )。",
    jpAnswer: "食べようよ"
  },
  {
    wordNo: 142,
    word: "join",
    meaning: "参加する",
    sentence: "(   ) in the discussion",
    jp: "その議論に（途中から）参加する",
    jpBlank: "その議論に(   )する",
    jpAnswer: "参加"
  },
  {
    wordNo: 143,
    word: "Throw",
    meaning: "投げる",
    sentence: "(   ) me a rope.",
    jp: "ロープを投げてくれ。",
    jpBlank: "ロープを(   )てくれ。",
    jpAnswer: "投げ"
  },
  {
    wordNo: 143,
    word: "throw",
    meaning: "捨てる",
    sentence: "Don't (   ) away your empty cans here.",
    jp: "ここに空き缶を捨てるな。",
    jpBlank: "ここに空き缶を(   )な。",
    jpAnswer: "捨てる"
  },
  {
    wordNo: 143,
    word: "throw",
    meaning: "催す",
    sentence: "(   ) a party for him",
    jp: "彼のためにパーティを開く",
    jpBlank: "(   )ーティを開く",
    jpAnswer: "彼のためにパ"
  },
  {
    wordNo: 143,
    word: "throw",
    meaning: "投てき",
    sentence: "a (   ) of 100 meters",
    jp: "100メートルの投てき",
    jpBlank: "100メートルの(   )",
    jpAnswer: "投てき"
  },
  {
    wordNo: 144,
    word: "operate",
    meaning: "操作する",
    sentence: "(   ) five machines at once",
    jp: "一度に5台の機械を操作する",
    jpBlank: "一度に5台の機械を(   )",
    jpAnswer: "操作する"
  },
  {
    wordNo: 144,
    word: "operate",
    meaning: "手術する",
    sentence: "(   ) on a patient for cancer",
    jp: "患者のがんの手術をする",
    jpBlank: "患者のがんの(   )をする",
    jpAnswer: "手術"
  },
  {
    wordNo: 144,
    word: "operate",
    meaning: "運営される",
    sentence: "(   ) efficiently",
    jp: "能率的に運営される",
    jpBlank: "能率的に(   )",
    jpAnswer: "運営される"
  },
  {
    wordNo: 145,
    word: "repair",
    meaning: "修理する",
    sentence: "(   ) a bicycle",
    jp: "自転車を修理する",
    jpBlank: "自転車を(   )する",
    jpAnswer: "修理"
  },
  {
    wordNo: 145,
    word: "repair",
    meaning: "修復する",
    sentence: "(   ) damage to his neck",
    jp: "彼の首の損傷を修復する",
    jpBlank: "彼の首の損傷を(   )する",
    jpAnswer: "修復"
  },
  {
    wordNo: 145,
    word: "repair",
    meaning: "修理中",
    sentence: "a smartphone under (   )",
    jp: "修理中のスマートフォン",
    jpBlank: "(   )のスマートフォン",
    jpAnswer: "修理中"
  },
  {
    wordNo: 146,
    word: "sews",
    meaning: "縫う",
    sentence: "She (   ) all her own dresses.",
    jp: "彼女は自分の服をすべて自分で縫っている。",
    jpBlank: "(   )服をすべて自分で縫っている。",
    jpAnswer: "彼女は自分の"
  },
  {
    wordNo: 146,
    word: "sew",
    meaning: "縫いつける",
    sentence: "(   ) a button on",
    jp: "ボタンを縫いつける",
    jpBlank: "ボタンを(   )",
    jpAnswer: "縫いつける"
  },
  {
    wordNo: 147,
    word: "Raise",
    meaning: "〜を上げる",
    sentence: "(   ) your hand.",
    jp: "手を上げて。",
    jpBlank: "手を(   )て。",
    jpAnswer: "上げ"
  },
  {
    wordNo: 147,
    word: "raise",
    meaning: "育てる",
    sentence: "(   ) children",
    jp: "子どもを育てる",
    jpBlank: "子どもを(   )",
    jpAnswer: "育てる"
  },
  {
    wordNo: 147,
    word: "raise",
    meaning: "集める",
    sentence: "(   ) funds",
    jp: "資金を集める",
    jpBlank: "資金を(   )",
    jpAnswer: "集める"
  },
  {
    wordNo: 147,
    word: "raise",
    meaning: "提起する",
    sentence: "(   ) the issue of aging",
    jp: "高齢化の問題を提起する",
    jpBlank: "高齢化の問題を(   )する",
    jpAnswer: "提起"
  },
  {
    wordNo: 147,
    word: "raise",
    meaning: "賃上げ",
    sentence: "get a pay (   )",
    jp: "給料が上がる（賃上げを得る）",
    jpBlank: "(   )",
    jpAnswer: "給料が上がる"
  },
  {
    wordNo: 148,
    word: "serve",
    meaning: "飲食物を出す",
    sentence: "(   ) wine to the guests",
    jp: "客にワインを出す",
    jpBlank: "客にワインを(   )",
    jpAnswer: "出す"
  },
  {
    wordNo: 148,
    word: "serve",
    meaning: "役に立つ",
    sentence: "This experience will (   ) you well.",
    jp: "この経験は君の役に立つだろう。",
    jpBlank: "この経験は君の(   )だろう。",
    jpAnswer: "役に立つ"
  },
  {
    wordNo: 148,
    word: "served",
    meaning: "役立つ",
    sentence: "The hospital (   ) as a school.",
    jp: "その病院は学校として使われていた（役立っていた）。",
    jpBlank: "その病院は学校として使われていた(   )。",
    jpAnswer: "役立っていた"
  },
  {
    wordNo: 149,
    word: "pour",
    meaning: "〜を注ぐ",
    sentence: "(   ) tea for all of the guests",
    jp: "客みんなにお茶を注ぐ",
    jpBlank: "客みんなにお茶を(   )",
    jpAnswer: "注ぐ"
  },
  {
    wordNo: 149,
    word: "poured",
    meaning: "降りそそぐ",
    sentence: "It (   ) all night.",
    jp: "一晩中土砂降りだった（雨が降りそそいだ）。",
    jpBlank: "一晩中土砂降(   )。",
    jpAnswer: "りだった"
  },
  {
    wordNo: 150,
    word: "spill",
    meaning: "〜をこぼす",
    sentence: "(   ) coffee all over my laptop",
    jp: "コーヒーをノートパソコンの上にこぼす",
    jpBlank: "コーヒーをノートパソコンの上に(   )",
    jpAnswer: "こぼす"
  },
  {
    wordNo: 150,
    word: "spill",
    meaning: "流出",
    sentence: "an oil (   ) in the Atlantic Ocean",
    jp: "大西洋の石油流出",
    jpBlank: "大西洋の石油(   )",
    jpAnswer: "流出"
  },
],
151: [
  {
    wordNo: 151,
    word: "pretend",
    meaning: "〜するふりをする",
    sentence: "(   ) to be sleeping",
    jp: "寝ているふりをする",
    jpBlank: "寝ているふり(   )",
    jpAnswer: "をする"
  },
  {
    wordNo: 152,
    word: "behaves",
    meaning: "ふるまう",
    sentence: "He (   ) badly in class.",
    jp: "彼の授業中の態度は悪い（悪いふるまいをする）。",
    jpBlank: "彼の授業中の(   )。",
    jpAnswer: "態度は悪い"
  },
  {
    wordNo: 152,
    word: "behave",
    meaning: "行儀よくふるまう",
    sentence: "tell him to (   ) himself",
    jp: "彼に行儀よくふるまうように言う",
    jpBlank: "彼に(   )ように言う",
    jpAnswer: "行儀よくふるまう"
  },
  {
    wordNo: 153,
    word: "bear",
    meaning: "〜に耐える",
    sentence: "cannot (   ) the noise",
    jp: "騒音に耐えられない",
    jpBlank: "騒音に(   )られない",
    jpAnswer: "耐え"
  },
  {
    wordNo: 153,
    word: "bear",
    meaning: "心に留める",
    sentence: "(   ) the responsibility for the accident",
    jp: "その事故の責任を負う（責任を心に持つ）",
    jpBlank: "その事故の責(   )",
    jpAnswer: "任を負う"
  },
  {
    wordNo: 153,
    word: "born",
    meaning: "〜を産む",
    sentence: "She was (   ) with a silver spoon in her mouth.",
    jp: "彼女は裕福な家に生まれた",
    jpBlank: "彼女は裕福な家に(   )",
    jpAnswer: "生まれた"
  },
  {
    wordNo: 154,
    word: "explore",
    meaning: "探検する",
    sentence: "(   ) the surface of Mars",
    jp: "火星の地表を探査する（探検する）",
    jpBlank: "火星の地表を(   )",
    jpAnswer: "探査する"
  },
  {
    wordNo: 154,
    word: "explore",
    meaning: "探ぐる",
    sentence: "(   ) the possibility of collaboration",
    jp: "コラボの可能性を探る",
    jpBlank: "コラボの可能(   )",
    jpAnswer: "性を探る"
  },
  {
    wordNo: 155,
    word: "happened",
    meaning: "起こる",
    sentence: "What (   ) to her?",
    jp: "彼女に何が起こったの？",
    jpBlank: "彼女に何が(   )ったの？",
    jpAnswer: "起こ"
  },
  {
    wordNo: 155,
    word: "happened",
    meaning: "偶然〜する",
    sentence: "I (   ) to meet him.",
    jp: "彼にたまたま（偶然）会った。",
    jpBlank: "彼にたまたま(   )会った。",
    jpAnswer: "偶然"
  },
  {
    wordNo: 156,
    word: "appeared",
    meaning: "現れる",
    sentence: "The singer (   ) on the stage.",
    jp: "その歌手がステージに現れた。",
    jpBlank: "その歌手がステージに(   )。",
    jpAnswer: "現れた"
  },
  {
    wordNo: 156,
    word: "appears",
    meaning: "〜のように思える",
    sentence: "He (   ) to be sleeping.",
    jp: "彼は寝ているようだ（思える）。",
    jpBlank: "彼は寝ているようだ(   )。",
    jpAnswer: "思える"
  },
  {
    wordNo: 157,
    word: "remains",
    meaning: "〜のままでいる",
    sentence: "The cause of the accident (   ) unknown.",
    jp: "その事故の原因はいまだに知られていない（未知のままである）。",
    jpBlank: "(   )因はいまだに知られていない。",
    jpAnswer: "その事故の原"
  },
  {
    wordNo: 157,
    word: "remained",
    meaning: "残る",
    sentence: "Five people (   ) in the room.",
    jp: "部屋に5人が残っていた。",
    jpBlank: "(   )5人が残っていた。",
    jpAnswer: "部屋に"
  },
  {
    wordNo: 158,
    word: "survive",
    meaning: "生き残る",
    sentence: "eat grass in order to (   )",
    jp: "生き延びる（生き残る）ために草を食べる",
    jpBlank: "生き延びる(   )ために草を食べる",
    jpAnswer: "生き残る"
  },
  {
    wordNo: 158,
    word: "survive",
    meaning: "〜から生き延びる",
    sentence: "(   ) a plane crash",
    jp: "飛行機の事故で生き残る",
    jpBlank: "飛行機の事故(   )",
    jpAnswer: "で生き残る"
  },
  {
    wordNo: 159,
    word: "belongs",
    meaning: "所属している",
    sentence: "Sam (   ) to the Sales Department.",
    jp: "サムは営業部に所属している。",
    jpBlank: "サムは営業部に(   )。",
    jpAnswer: "所属している"
  },
  {
    wordNo: 160,
    word: "represent",
    meaning: "代表する",
    sentence: "(   ) Japan at the World Cup",
    jp: "ワールドカップ日本代表となる（代表する）",
    jpBlank: "ワールドカップ日本(   )となる",
    jpAnswer: "代表"
  },
  {
    wordNo: 160,
    word: "represents",
    meaning: "表す",
    sentence: "This sign (   ) a temple.",
    jp: "このマークは寺を表す。",
    jpBlank: "このマークは寺を(   )。",
    jpAnswer: "表す"
  },
  {
    wordNo: 160,
    word: "represents",
    meaning: "表現する",
    sentence: "This painting (   ) the fight between good and evil.",
    jp: "この絵画は善と悪の戦いを表現している。",
    jpBlank: "この絵画は善と悪の戦いを(   )している。",
    jpAnswer: "表現"
  },
  {
    wordNo: 161,
    word: "based",
    meaning: "基礎を置く",
    sentence: "This novel is (   ) on facts.",
    jp: "この小説は事実に基づいている（基礎を置いている）。",
    jpBlank: "この小説は事実に基づいて(   )。",
    jpAnswer: "いる"
  },
  {
    wordNo: 161,
    word: "base",
    meaning: "基盤",
    sentence: "I work in many places, but my (   ) is here.",
    jp: "多くの場所で働いているが，私の基盤はここだ。",
    jpBlank: "多くの場所で働いているが，私の(   )はここだ。",
    jpAnswer: "基盤"
  },
  {
    wordNo: 161,
    word: "base",
    meaning: "基地",
    sentence: "a secret (   )",
    jp: "秘密基地",
    jpBlank: "秘密(   )",
    jpAnswer: "基地"
  },
  {
    wordNo: 162,
    word: "includes",
    meaning: "含む",
    sentence: "The price (   ) postage.",
    jp: "価格には送料が含まれています。",
    jpBlank: "価格には送料が含まれてい(   )。",
    jpAnswer: "ます"
  },
  {
    wordNo: 163,
    word: "contains",
    meaning: "含んでいる",
    sentence: "This soup (   ) various herbs.",
    jp: "このスープにはさまざまな薬草が入っている（含んでいる）。",
    jpBlank: "このスープにはさまざまな薬草が入っている(   )。",
    jpAnswer: "含んでいる"
  },
  {
    wordNo: 163,
    word: "contain",
    meaning: "抑える",
    sentence: "I cannot (   ) my anger.",
    jp: "怒りを抑えられない。",
    jpBlank: "怒りを(   )られない。",
    jpAnswer: "抑え"
  },
  {
    wordNo: 164,
    word: "own",
    meaning: "所有している",
    sentence: "(   ) ten companies in India",
    jp: "インドに10の会社を所有している",
    jpBlank: "インドに10の会社を(   )",
    jpAnswer: "所有している"
  },
  {
    wordNo: 164,
    word: "own",
    meaning: "自分自身の",
    sentence: "with my (   ) eyes",
    jp: "私自身の目で",
    jpBlank: "(   )",
    jpAnswer: "私自身の目で"
  },
  {
    wordNo: 164,
    word: "own",
    meaning: "自分自身のもの",
    sentence: "I decided to quit the company and start my (   ).",
    jp: "会社を辞め，自分の（会社を）始めることに決めた。",
    jpBlank: "会社を辞め，自分の(   )始めることに決めた。",
    jpAnswer: "会社を"
  },
  {
    wordNo: 165,
    word: "share",
    meaning: "〜を共有する",
    sentence: "(   ) a table with a stranger",
    jp: "知らない人と相席する（席を共有する）",
    jpBlank: "知らない人と(   )",
    jpAnswer: "相席する"
  },
  {
    wordNo: 165,
    word: "share",
    meaning: "伝える",
    sentence: "Could you (   ) your opinion about this?",
    jp: "これについてのあなたの意見を聞かせて（共有して）ください。",
    jpBlank: "これについてのあなたの意見を聞かせて(   )ください。",
    jpAnswer: "共有して"
  },
  {
    wordNo: 165,
    word: "share",
    meaning: "共有",
    sentence: "a flat (   )",
    jp: "アパートの共有",
    jpBlank: "アパートの(   )",
    jpAnswer: "共有"
  },
  {
    wordNo: 165,
    word: "share",
    meaning: "分け前",
    sentence: "a (   ) of the profits",
    jp: "利益の分け前",
    jpBlank: "利益の(   )",
    jpAnswer: "分け前"
  },
  {
    wordNo: 166,
    word: "collect",
    meaning: "集める",
    sentence: "(   ) teddy bears",
    jp: "クマのぬいぐるみを集める",
    jpBlank: "クマのぬいぐるみを(   )",
    jpAnswer: "集める"
  },
  {
    wordNo: 166,
    word: "collect",
    meaning: "回収する",
    sentence: "(   ) empty cans for recycling",
    jp: "リサイクルのために空き缶を回収する",
    jpBlank: "リサイクルのために空き缶を(   )",
    jpAnswer: "回収する"
  },
  {
    wordNo: 167,
    word: "gather",
    meaning: "集める",
    sentence: "(   ) information",
    jp: "情報を集める",
    jpBlank: "情報を(   )",
    jpAnswer: "集める"
  },
  {
    wordNo: 167,
    word: "gather",
    meaning: "集まる",
    sentence: "(   ) around the teacher",
    jp: "先生の周りに集まる",
    jpBlank: "先生の周りに(   )",
    jpAnswer: "集まる"
  },
  {
    wordNo: 168,
    word: "history",
    meaning: "歴史",
    sentence: "the best soccer player in (   )",
    jp: "史上（歴史上）最高のサッカー選手",
    jpBlank: "史上(   )最高のサッカー選手",
    jpAnswer: "歴史上"
  },
  {
    wordNo: 168,
    word: "history",
    meaning: "履歴",
    sentence: "an update (   )",
    jp: "更新履歴",
    jpBlank: "更新(   )",
    jpAnswer: "履歴"
  },
  {
    wordNo: 169,
    word: "subject",
    meaning: "科目",
    sentence: "a required (   )",
    jp: "必須科目",
    jpBlank: "必須(   )",
    jpAnswer: "科目"
  },
  {
    wordNo: 169,
    word: "subject",
    meaning: "話題",
    sentence: "get off the (   )",
    jp: "話題からそれる",
    jpBlank: "(   )からそれる",
    jpAnswer: "話題"
  },
  {
    wordNo: 169,
    word: "subject",
    meaning: "被験者",
    sentence: "the (   ) of the experiment",
    jp: "その実験の被験者",
    jpBlank: "その実験の(   )",
    jpAnswer: "被験者"
  },
  {
    wordNo: 169,
    word: "subject",
    meaning: "受けやすい",
    sentence: "The program is (   ) to change.",
    jp: "プログラムは変更の可能性があります（変更を受けやすい）。",
    jpBlank: "プログラムは変更の可能性(   )。",
    jpAnswer: "があります"
  },
  {
    wordNo: 170,
    word: "education",
    meaning: "教育",
    sentence: "receive a good (   )",
    jp: "よい教育を受ける",
    jpBlank: "よい(   )を受ける",
    jpAnswer: "教育"
  },
  {
    wordNo: 171,
    word: "knowledge",
    meaning: "知識，知っていること",
    sentence: "have a wide range of (   ) of cinema",
    jp: "映画に関する幅広い知識を持っている",
    jpBlank: "映画に関する幅広い(   )を持っている",
    jpAnswer: "知識"
  },
  {
    wordNo: 172,
    word: "uniform",
    meaning: "制服",
    sentence: "wear a school (   )",
    jp: "学校の制服を着ている",
    jpBlank: "学校の(   )を着ている",
    jpAnswer: "制服"
  },
  {
    wordNo: 172,
    word: "uniform",
    meaning: "一定の",
    sentence: "maintain a (   ) temperature",
    jp: "一定の温度を保つ",
    jpBlank: "(   )温度を保つ",
    jpAnswer: "一定の"
  },
  {
    wordNo: 173,
    word: "grade",
    meaning: "学年",
    sentence: "She is in the eighth (   ).",
    jp: "彼女は8年生（中学2年生）だ。",
    jpBlank: "彼女は8年生(   )だ。",
    jpAnswer: "中学2年生"
  },
  {
    wordNo: 173,
    word: "grade",
    meaning: "等級",
    sentence: "low-(   ) products",
    jp: "低級の製品",
    jpBlank: "(   )",
    jpAnswer: "低級の製品"
  },
  {
    wordNo: 173,
    word: "grade",
    meaning: "成績",
    sentence: "a high (   ) in math",
    jp: "数学での好成績",
    jpBlank: "数学での好(   )",
    jpAnswer: "成績"
  },
  {
    wordNo: 174,
    word: "senior",
    meaning: "最上級生",
    sentence: "a college (   )",
    jp: "大学4年生",
    jpBlank: "(   )4年生",
    jpAnswer: "大学"
  },
  {
    wordNo: 174,
    word: "senior",
    meaning: "高齢者の",
    sentence: "(   ) citizens",
    jp: "高齢者",
    jpBlank: "(   )",
    jpAnswer: "高齢者"
  },
  {
    wordNo: 174,
    word: "senior",
    meaning: "上位の",
    sentence: "a (   ) manager",
    jp: "上級管理者",
    jpBlank: "(   )",
    jpAnswer: "上級管理者"
  },
  {
    wordNo: 175,
    word: "graduate",
    meaning: "卒業する",
    sentence: "(   ) from high school",
    jp: "高校を卒業する",
    jpBlank: "高校を(   )する",
    jpAnswer: "卒業"
  },
  {
    wordNo: 176,
    word: "decide",
    meaning: "決定する，決める",
    sentence: "(   ) to live on my own",
    jp: "一人で暮らすことを決心する",
    jpBlank: "(   )ことを決心する",
    jpAnswer: "一人で暮らす"
  },
  {
    wordNo: 176,
    word: "decide",
    meaning: "決定する，決める",
    sentence: "(   ) on a date for the wedding",
    jp: "結婚式の日取りを決める",
    jpBlank: "結婚式の日取りを(   )",
    jpAnswer: "決める"
  },
  {
    wordNo: 177,
    word: "judge",
    meaning: "判断する",
    sentence: "(   ) someone by their appearance",
    jp: "人を外見で判断する",
    jpBlank: "人を外見で(   )する",
    jpAnswer: "判断"
  },
  {
    wordNo: 177,
    word: "judge",
    meaning: "裁判官，審判",
    sentence: "Supreme Court (   )",
    jp: "最高裁判所の裁判官",
    jpBlank: "最高裁判所の(   )",
    jpAnswer: "裁判官"
  },
  {
    wordNo: 178,
    word: "quit",
    meaning: "辞める",
    sentence: "(   ) my job",
    jp: "仕事を辞める",
    jpBlank: "仕事を(   )",
    jpAnswer: "辞める"
  },
  {
    wordNo: 179,
    word: "retire",
    meaning: "引退する，退職する",
    sentence: "(   ) from the company",
    jp: "会社を（定年で）退職する",
    jpBlank: "会社を(   )する",
    jpAnswer: "退職"
  },
  {
    wordNo: 180,
    word: "review",
    meaning: "再検討",
    sentence: "a (   ) of the tax system",
    jp: "税制の見直し",
    jpBlank: "(   )",
    jpAnswer: "税制の見直し"
  },
  {
    wordNo: 180,
    word: "review",
    meaning: "批評",
    sentence: "a (   ) of his new book",
    jp: "彼の新刊本の批評",
    jpBlank: "彼の新刊本の(   )",
    jpAnswer: "批評"
  },
  {
    wordNo: 180,
    word: "review",
    meaning: "復習",
    sentence: "do a (   ) of the last lesson",
    jp: "前の課を復習する",
    jpBlank: "前の課を(   )する",
    jpAnswer: "復習"
  },
],
181: [
  {
    wordNo: 181,
    word: "choose",
    meaning: "選ぶ",
    sentence: "(   ) what to wear to school",
    jp: "学校へ着ていく服を選ぶ",
    jpBlank: "学校へ着ていく服を(   )",
    jpAnswer: "選ぶ"
  },
  {
    wordNo: 181,
    word: "choose",
    meaning: "選ぶ",
    sentence: "(   ) between the two",
    jp: "2つから選ぶ",
    jpBlank: "2つから(   )",
    jpAnswer: "選ぶ"
  },
  {
    wordNo: 182,
    word: "Imagine",
    meaning: "想像する",
    sentence: "(   ) life without electricity.",
    jp: "電気のない生活を想像してごらん。",
    jpBlank: "電気のない生活を(   )してごらん。",
    jpAnswer: "想像"
  },
  {
    wordNo: 183,
    word: "Guess",
    meaning: "推測する",
    sentence: "(   ) what is in this bag.",
    jp: "この袋に何が入っているかを当ててごらん。",
    jpBlank: "この袋に何が入っているかを(   )。",
    jpAnswer: "当ててごらん"
  },
  {
    wordNo: 183,
    word: "guess",
    meaning: "推測",
    sentence: "This is only a (   ).",
    jp: "これは単なる推測にすぎない。",
    jpBlank: "これは単なる(   )にすぎない。",
    jpAnswer: "推測"
  },
  {
    wordNo: 184,
    word: "expecting",
    meaning: "予期する，期待する",
    sentence: "We are (   ) a typhoon.",
    jp: "台風が来るらしい（来ることを予期している）。",
    jpBlank: "台風が来るら(   )。",
    jpAnswer: "しい"
  },
  {
    wordNo: 184,
    word: "expect",
    meaning: "予期する，期待する",
    sentence: "Don't (   ) too much of him.",
    jp: "彼にあまり期待しすぎるな。",
    jpBlank: "彼にあまり(   )しすぎるな。",
    jpAnswer: "期待"
  },
  {
    wordNo: 184,
    word: "expecting",
    meaning: "予期する，期待する",
    sentence: "She is (   ) (a baby).",
    jp: "彼女はおめでたです（赤ん坊を予期しています）。",
    jpBlank: "彼女はおめで(   )。",
    jpAnswer: "たです"
  },
  {
    wordNo: 185,
    word: "predict",
    meaning: "〜を予測する",
    sentence: "(   ) when cherry blossoms will start to flower",
    jp: "桜の開花時期を予測する",
    jpBlank: "桜の開花時期を(   )する",
    jpAnswer: "予測"
  },
  {
    wordNo: 186,
    word: "remember",
    meaning: "覚えている，忘れずに〜する",
    sentence: "I (   ) meeting her here.",
    jp: "彼女にここで会ったことを覚えている。",
    jpBlank: "彼女にここで会ったことを(   )。",
    jpAnswer: "覚えている"
  },
  {
    wordNo: 186,
    word: "remember",
    meaning: "覚えている，忘れずに〜する",
    sentence: "Did you (   ) to feed the dog?",
    jp: "イヌにエサをやるのを覚えてた？",
    jpBlank: "イヌにエサをやるのを覚え(   )？",
    jpAnswer: "てた"
  },
  {
    wordNo: 186,
    word: "Remember",
    meaning: "覚えている，忘れずに〜する",
    sentence: "(   ) me to your wife.",
    jp: "奥様によろしくお伝えください。",
    jpBlank: "奥様によろしく(   )。",
    jpAnswer: "お伝えください"
  },
  {
    wordNo: 187,
    word: "reminds",
    meaning: "思い出させる",
    sentence: "This song (   ) me of him.",
    jp: "この歌は彼のことを私に思い出させる。",
    jpBlank: "この歌は彼のことを私に(   )。",
    jpAnswer: "思い出させる"
  },
  {
    wordNo: 187,
    word: "remind",
    meaning: "思い出させる",
    sentence: "(   ) him not to be late",
    jp: "彼に遅れないように念を押す",
    jpBlank: "彼に遅れないように(   )",
    jpAnswer: "念を押す"
  },
  {
    wordNo: 188,
    word: "realized",
    meaning: "理解する，実現する",
    sentence: "Jim (   ) that he did not love her any more.",
    jp: "ジムはもう彼女のことを愛していないことに気づいた（理解した）。",
    jpBlank: "ジムはもう彼女のことを愛していないことに気づいた(   )。",
    jpAnswer: "理解した"
  },
  {
    wordNo: 188,
    word: "realized",
    meaning: "理解する，実現する",
    sentence: "She (   ) her dream of running her own shop.",
    jp: "彼女は自分の店を経営するという夢を実現した。",
    jpBlank: "彼女は自分の店を経営するという夢を(   )した。",
    jpAnswer: "実現"
  },
  {
    wordNo: 189,
    word: "appreciate",
    meaning: "理解する，よさがわかる，感謝する",
    sentence: "(   ) the importance of discussion",
    jp: "話し合いの重要性を理解する",
    jpBlank: "話し合いの重要性を(   )",
    jpAnswer: "理解する"
  },
  {
    wordNo: 189,
    word: "appreciate",
    meaning: "理解する，よさがわかる，感謝する",
    sentence: "(   ) the delicate flavors of Japanese cuisine",
    jp: "和食の（繊細な）味がわかる",
    jpBlank: "和食の(   )味がわかる",
    jpAnswer: "繊細な"
  },
  {
    wordNo: 189,
    word: "appreciate",
    meaning: "理解する，よさがわかる，感謝する",
    sentence: "I'd (   ) it if you could help me.",
    jp: "助けていただければ，ありがたいのですが。",
    jpBlank: "助けていただければ，(   )のですが。",
    jpAnswer: "ありがたい"
  },
  {
    wordNo: 190,
    word: "accept",
    meaning: "〜を受け入れる",
    sentence: "(   ) other people's opinions",
    jp: "他人の意見を受け入れる",
    jpBlank: "他人の意見を(   )",
    jpAnswer: "受け入れる"
  },
  {
    wordNo: 191,
    word: "consider",
    meaning: "考慮する，思いやる，みなす",
    sentence: "(   ) all the possibilities",
    jp: "すべての可能性を考える（考慮する）",
    jpBlank: "すべての可能(   )",
    jpAnswer: "性を考える"
  },
  {
    wordNo: 191,
    word: "consider",
    meaning: "考慮する，思いやる，みなす",
    sentence: "(   ) other people",
    jp: "人の（気持ちを）思いやる",
    jpBlank: "人の(   )",
    jpAnswer: "思いやる"
  },
  {
    wordNo: 191,
    word: "consider",
    meaning: "考慮する，思いやる，みなす",
    sentence: "(   ) it to be meaningless",
    jp: "それは無意味だとみなす",
    jpBlank: "それは無意味だと(   )",
    jpAnswer: "みなす"
  },
  {
    wordNo: 192,
    word: "mind",
    meaning: "気にする",
    sentence: "Do you (   ) if I open the window?",
    jp: "窓を開けていいですか（気になさいますか）？",
    jpBlank: "窓を開けてい(   )？",
    jpAnswer: "いですか"
  },
  {
    wordNo: 192,
    word: "minds",
    meaning: "精神",
    sentence: "the (   ) of children",
    jp: "子どもの心",
    jpBlank: "(   )",
    jpAnswer: "子どもの心"
  },
  {
    wordNo: 192,
    word: "minds",
    meaning: "才能のある人",
    sentence: "Great (   ) think alike.",
    jp: "（ことわざ）賢人は同じように考える。",
    jpBlank: "賢人は同じよ(   )。",
    jpAnswer: "うに考える"
  },
  {
    wordNo: 193,
    word: "wonder",
    meaning: "〜かなと思う",
    sentence: "I (   ) where he has gone.",
    jp: "彼はどこに行ってしまったのだろうか。",
    jpBlank: "彼はどこに行ってしまったの(   )。",
    jpAnswer: "だろうか"
  },
  {
    wordNo: 193,
    word: "wonder",
    meaning: "驚く",
    sentence: "(   ) at his ability",
    jp: "彼の才能に驚く",
    jpBlank: "彼の才能に(   )",
    jpAnswer: "驚く"
  },
  {
    wordNo: 194,
    word: "seems",
    meaning: "〜のように思われる",
    sentence: "It (   ) that he knows what happened.",
    jp: "彼は起きたことを知っているようだ。",
    jpBlank: "彼は起きたことを知ってい(   )。",
    jpAnswer: "るようだ"
  },
  {
    wordNo: 195,
    word: "compare",
    meaning: "比較する",
    sentence: "(   ) city life with country life",
    jp: "都会の生活を田舎の生活と比較する",
    jpBlank: "都会の生活を田舎の生活と(   )",
    jpAnswer: "比較する"
  },
  {
    wordNo: 195,
    word: "compare",
    meaning: "たとえる",
    sentence: "(   ) life to a voyage",
    jp: "人生を航海にたとえる",
    jpBlank: "人生を航海に(   )",
    jpAnswer: "たとえる"
  },
  {
    wordNo: 195,
    word: "compare",
    meaning: "匹敵する",
    sentence: "No one can (   ) with him in academic ability.",
    jp: "学力で彼に匹敵する者はいない。",
    jpBlank: "学力で彼に(   )る者はいない。",
    jpAnswer: "匹敵す"
  },
  {
    wordNo: 196,
    word: "concentrate",
    meaning: "集中する",
    sentence: "(   ) on my studies",
    jp: "勉強に集中する",
    jpBlank: "勉強に(   )する",
    jpAnswer: "集中"
  },
  {
    wordNo: 196,
    word: "concentrate",
    meaning: "集中させる",
    sentence: "(   ) your attention on your job.",
    jp: "仕事に集中しなさい。",
    jpBlank: "仕事に集中し(   )。",
    jpAnswer: "なさい"
  },
  {
    wordNo: 197,
    word: "focuses",
    meaning: "〜に焦点を当てる",
    sentence: "This book (   ) on French culture.",
    jp: "この本はフランス文化に焦点を当てている。",
    jpBlank: "この本はフランス文化に(   )ている。",
    jpAnswer: "焦点を当て"
  },
  {
    wordNo: 197,
    word: "focus",
    meaning: "焦点",
    sentence: "become the (   ) of media attention",
    jp: "マスコミの注目の的になる",
    jpBlank: "マスコミの(   )の的になる",
    jpAnswer: "注目"
  },
  {
    wordNo: 198,
    word: "allow",
    meaning: "許可する",
    sentence: "Please (   ) me to introduce myself.",
    jp: "自己紹介をさせてください（自己紹介することを許可してください）。",
    jpBlank: "(   )せてください。",
    jpAnswer: "自己紹介をさ"
  },
  {
    wordNo: 198,
    word: "allows",
    meaning: "可能にする",
    sentence: "This machine (   ) you to measure your blood pressure.",
    jp: "この機械で血圧を測ることができます（測ることを可能にする）。",
    jpBlank: "この機械で血圧を測ること(   )。",
    jpAnswer: "ができます"
  },
  {
    wordNo: 199,
    word: "admitted",
    meaning: "認める",
    sentence: "Tom (   ) that he had been mistaken.",
    jp: "トムは自分が間違っていたことを認めた。",
    jpBlank: "トムは自分が間違っていたことを(   )。",
    jpAnswer: "認めた"
  },
  {
    wordNo: 199,
    word: "admitted",
    meaning: "許可する",
    sentence: "be (   ) to the university",
    jp: "大学入学を許可される。",
    jpBlank: "大学入学を(   )される。",
    jpAnswer: "許可"
  },
  {
    wordNo: 200,
    word: "ground",
    meaning: "地面",
    sentence: "deep in the (   )",
    jp: "地中深く",
    jpBlank: "(   )",
    jpAnswer: "地中深く"
  },
  {
    wordNo: 200,
    word: "grounds",
    meaning: "根拠",
    sentence: "on the (   ) that he is young",
    jp: "彼が若いという理由（根拠）で",
    jpBlank: "彼が若いという理由(   )で",
    jpAnswer: "根拠"
  },
  {
    wordNo: 201,
    word: "pollution",
    meaning: "公害，汚染",
    sentence: "prevent marine (   )",
    jp: "海洋汚染を食い止める",
    jpBlank: "海洋(   )を食い止める",
    jpAnswer: "汚染"
  },
  {
    wordNo: 202,
    word: "sight",
    meaning: "光景",
    sentence: "Snow is a rare (   ) in this area.",
    jp: "雪はこの地域では珍しい光景です。",
    jpBlank: "雪はこの地域では珍しい(   )です。",
    jpAnswer: "光景"
  },
  {
    wordNo: 202,
    word: "sight",
    meaning: "視力",
    sentence: "recover my (   )",
    jp: "視力を回復する",
    jpBlank: "(   )を回復する",
    jpAnswer: "視力"
  },
  {
    wordNo: 203,
    word: "view",
    meaning: "眺め",
    sentence: "enjoy a night (   ) of Kobe",
    jp: "神戸の夜景（の景色）を楽しむ",
    jpBlank: "神戸の夜景(   )を楽しむ",
    jpAnswer: "の景色"
  },
  {
    wordNo: 203,
    word: "view",
    meaning: "視点",
    sentence: "look at things from a different point of (   )",
    jp: "物事を（異なる視点から）別の角度から見る",
    jpBlank: "物事を別の角(   )",
    jpAnswer: "度から見る"
  },
  {
    wordNo: 203,
    word: "viewed",
    meaning: "みなす",
    sentence: "Skiing is (   ) as the national sport of Norway.",
    jp: "スキーは，ノルウェーの国技だとみなされている。",
    jpBlank: "(   )，ノルウェーの国技だとみなされている。",
    jpAnswer: "スキーは"
  },
  {
    wordNo: 204,
    word: "landscape",
    meaning: "風景",
    sentence: "the beautiful (   ) of Scotland",
    jp: "スコットランドの美しい風景",
    jpBlank: "スコットランドの美しい(   )",
    jpAnswer: "風景"
  },
  {
    wordNo: 204,
    word: "landscape",
    meaning: "情勢",
    sentence: "the (   ) of Japan",
    jp: "日本の政治情勢",
    jpBlank: "日本の政治(   )",
    jpAnswer: "情勢"
  },
  {
    wordNo: 205,
    word: "nature",
    meaning: "自然",
    sentence: "preserve (   )",
    jp: "自然を守る",
    jpBlank: "(   )を守る",
    jpAnswer: "自然"
  },
  {
    wordNo: 205,
    word: "nature",
    meaning: "性質",
    sentence: "the true (   ) of the problem",
    jp: "その問題の本質",
    jpBlank: "(   )質",
    jpAnswer: "その問題の本"
  },
  {
    wordNo: 206,
    word: "seeds",
    meaning: "種",
    sentence: "sunflower (   )",
    jp: "ひまわりの種",
    jpBlank: "(   )",
    jpAnswer: "ひまわりの種"
  },
  {
    wordNo: 206,
    word: "seed",
    meaning: "シード選手",
    sentence: "He is top (   ) in this tournament.",
    jp: "彼はこのトーナメントで第1シードの選手だ。",
    jpBlank: "彼はこのトーナメントで第1(   )の選手だ。",
    jpAnswer: "シード"
  },
  {
    wordNo: 207,
    word: "plant",
    meaning: "植物",
    sentence: "water a (   )",
    jp: "植物に水をやる",
    jpBlank: "(   )に水をやる",
    jpAnswer: "植物"
  },
  {
    wordNo: 207,
    word: "plant",
    meaning: "工場",
    sentence: "a chemical (   )",
    jp: "化学工場",
    jpBlank: "化学(   )",
    jpAnswer: "工場"
  },
  {
    wordNo: 207,
    word: "plant",
    meaning: "植える",
    sentence: "(   ) tulips in the garden",
    jp: "庭にチューリップを植える",
    jpBlank: "庭にチューリップを(   )",
    jpAnswer: "植える"
  },
  {
    wordNo: 208,
    word: "bloomed",
    meaning: "咲く",
    sentence: "Flowers (   ) all over the field.",
    jp: "野原には一面花が咲いていた。",
    jpBlank: "(   )花が咲いていた。",
    jpAnswer: "野原には一面"
  },
  {
    wordNo: 208,
    word: "bloom",
    meaning: "開花",
    sentence: "The cherry trees are in full (   ).",
    jp: "サクラが満開だ。",
    jpBlank: "(   )だ。",
    jpAnswer: "サクラが満開"
  },
  {
    wordNo: 209,
    word: "harvest",
    meaning: "収穫",
    sentence: "the rice (   ) this year",
    jp: "今年の米の収穫",
    jpBlank: "今年の米の(   )",
    jpAnswer: "収穫"
  },
  {
    wordNo: 209,
    word: "harvested",
    meaning: "収穫する",
    sentence: "newly-(   ) rice",
    jp: "新米（新しく収穫された米）",
    jpBlank: "(   )",
    jpAnswer: "新米"
  },
  {
    wordNo: 209,
    word: "harvest",
    meaning: "摘出する",
    sentence: "(   ) organs",
    jp: "臓器を摘出する",
    jpBlank: "臓器を(   )する",
    jpAnswer: "摘出"
  },
  {
    wordNo: 210,
    word: "insects",
    meaning: "昆虫",
    sentence: "the chirping of (   )",
    jp: "虫（昆虫）の音",
    jpBlank: "虫(   )の音",
    jpAnswer: "昆虫"
  },
],
211: [
  {
    wordNo: 211,
    word: "earthquake",
    meaning: "地震",
    sentence: "There was an (   ) last week.",
    jp: "先週，地震が起きた。",
    jpBlank: "先週，(   )が起きた。",
    jpAnswer: "地震"
  },
  {
    wordNo: 212,
    word: "temperature",
    meaning: "気温",
    sentence: "The (   ) reached 40 degrees.",
    jp: "気温が40度に達した。",
    jpBlank: "(   )が40度に達した。",
    jpAnswer: "気温"
  },
  {
    wordNo: 212,
    word: "temperature",
    meaning: "体温",
    sentence: "take his (   )",
    jp: "彼の体温を測る",
    jpBlank: "彼の(   )を測る",
    jpAnswer: "体温"
  },
  {
    wordNo: 213,
    word: "degrees",
    meaning: "度",
    sentence: "freeze at zero (   )",
    jp: "0度で凍る",
    jpBlank: "0(   )",
    jpAnswer: "度で凍る"
  },
  {
    wordNo: 213,
    word: "degree",
    meaning: "程度",
    sentence: "speak French to some (   )",
    jp: "ある程度フランス語を話す",
    jpBlank: "ある(   )フランス語を話す",
    jpAnswer: "程度"
  },
  {
    wordNo: 213,
    word: "degree",
    meaning: "学位",
    sentence: "get a (   ) in engineering",
    jp: "工学の学位をとる",
    jpBlank: "工学の(   )をとる",
    jpAnswer: "学位"
  },
  {
    wordNo: 214,
    word: "flood",
    meaning: "洪水",
    sentence: "The (   ) washed the bridge away.",
    jp: "洪水で橋が流された。",
    jpBlank: "(   )で橋が流された。",
    jpAnswer: "洪水"
  },
  {
    wordNo: 214,
    word: "flooded",
    meaning: "水浸しにする",
    sentence: "The streets are (   ).",
    jp: "通りは水浸しだ（水浸しにされた）。",
    jpBlank: "(   )だ。",
    jpAnswer: "通りは水浸し"
  },
  {
    wordNo: 215,
    word: "froze",
    meaning: "凍る",
    sentence: "The pond (   ) over.",
    jp: "池が一面凍った。",
    jpBlank: "(   )た。",
    jpAnswer: "池が一面凍っ"
  },
  {
    wordNo: 215,
    word: "freeze",
    meaning: "凍らせる",
    sentence: "(   ) bananas in the freezer",
    jp: "冷凍庫でバナナを凍らせる",
    jpBlank: "冷凍庫でバナナを(   )",
    jpAnswer: "凍らせる"
  },
  {
    wordNo: 216,
    word: "reflect",
    meaning: "反射する",
    sentence: "(   ) the sunlight",
    jp: "日光を反射する",
    jpBlank: "日光を(   )する",
    jpAnswer: "反射"
  },
  {
    wordNo: 216,
    word: "reflect",
    meaning: "反映する",
    sentence: "The clothes people wear (   ) the times.",
    jp: "人々の着ている服は時代を反映している。",
    jpBlank: "人々の着ている服は時代を(   )している。",
    jpAnswer: "反映"
  },
  {
    wordNo: 216,
    word: "reflect",
    meaning: "熟考する",
    sentence: "(   ) on my successes and failures",
    jp: "私の成功と失敗について振り返る（熟考する）",
    jpBlank: "私の成功と失敗について振(   )",
    jpAnswer: "り返る"
  },
  {
    wordNo: 217,
    word: "polite",
    meaning: "礼儀正しい",
    sentence: "a (   ) young man",
    jp: "礼儀正しい若い男",
    jpBlank: "(   )若い男",
    jpAnswer: "礼儀正しい"
  },
  {
    wordNo: 218,
    word: "rude",
    meaning: "無礼な",
    sentence: "It is (   ) to ask women their age.",
    jp: "女性に年齢を尋ねるのは失礼（無礼）です。",
    jpBlank: "女性に年齢を尋ねるのは失礼(   )です。",
    jpAnswer: "無礼"
  },
  {
    wordNo: 219,
    word: "lonely",
    meaning: "孤独な",
    sentence: "(   ) old people",
    jp: "孤独な老人たち",
    jpBlank: "(   )老人たち",
    jpAnswer: "孤独な"
  },
  {
    wordNo: 220,
    word: "lazy",
    meaning: "怠惰な",
    sentence: "He is (   ) at work.",
    jp: "彼は仕事中いい加減（怠惰）である。",
    jpBlank: "彼は仕事中いい加減(   )である。",
    jpAnswer: "怠惰"
  },
  {
    wordNo: 220,
    word: "lazy",
    meaning: "寛いだ",
    sentence: "spend (   ) days on the beach",
    jp: "浜辺でのんびりした（寛いだ）日々を過ごす",
    jpBlank: "浜辺でのんびりした(   )日々を過ごす",
    jpAnswer: "寛いだ"
  },
  {
    wordNo: 221,
    word: "strict",
    meaning: "厳しい",
    sentence: "a (   ) rule",
    jp: "厳しい規則",
    jpBlank: "(   )規則",
    jpAnswer: "厳しい"
  },
  {
    wordNo: 222,
    word: "Ugly",
    meaning: "醜い",
    sentence: "The (   ) Duckling",
    jp: "『醜いアヒルの子』",
    jpBlank: "『(   )アヒルの子』",
    jpAnswer: "醜い"
  },
  {
    wordNo: 223,
    word: "intelligent",
    meaning: "知的な",
    sentence: "a highly (   ) woman",
    jp: "きわめて聡明な（知的な）女性",
    jpBlank: "きわめて聡明な(   )女性",
    jpAnswer: "知的な"
  },
  {
    wordNo: 224,
    word: "silly",
    meaning: "ばかな",
    sentence: "Don't be (   )!",
    jp: "ばかなことを言うな！",
    jpBlank: "(   )ことを言うな！",
    jpAnswer: "ばかな"
  },
  {
    wordNo: 225,
    word: "nervous",
    meaning: "あがって",
    sentence: "get (   ) during the exam",
    jp: "試験中にあがる",
    jpBlank: "(   )る",
    jpAnswer: "試験中にあが"
  },
  {
    wordNo: 225,
    word: "nervous",
    meaning: "神経質な",
    sentence: "a (   ) child",
    jp: "臆病な（神経質な）子ども",
    jpBlank: "臆病な(   )子ども",
    jpAnswer: "神経質な"
  },
  {
    wordNo: 225,
    word: "nervous",
    meaning: "身体の",
    sentence: "the (   ) system",
    jp: "神経系",
    jpBlank: "(   )",
    jpAnswer: "神経系"
  },
  {
    wordNo: 226,
    word: "awake",
    meaning: "目を覚まして",
    sentence: "The noise kept me (   ) all night.",
    jp: "騒音で一晩中（目を覚ました状態にさせられた）眠れなかった。",
    jpBlank: "(   )眠れなかった。",
    jpAnswer: "騒音で一晩中"
  },
  {
    wordNo: 227,
    word: "alone",
    meaning: "1人で",
    sentence: "She lives (   ).",
    jp: "彼女は一人暮らしだ。",
    jpBlank: "彼女は(   )だ。",
    jpAnswer: "一人暮らし"
  },
  {
    wordNo: 227,
    word: "alone",
    meaning: "〜だけ",
    sentence: "Bob (   ) went there.",
    jp: "ボブだけがそこへ行った。",
    jpBlank: "ボブ(   )がそこへ行った。",
    jpAnswer: "だけ"
  },
  {
    wordNo: 228,
    word: "attitude",
    meaning: "態度",
    sentence: "have a positive (   ) toward life",
    jp: "人生に対し前向きな姿勢（態度）でいる",
    jpBlank: "人生に対し前向きな姿勢(   )でいる",
    jpAnswer: "態度"
  },
  {
    wordNo: 229,
    word: "character",
    meaning: "性格",
    sentence: "Printed books have (   ).",
    jp: "活字本には味（性格）がある。",
    jpBlank: "活字本には味(   )がある。",
    jpAnswer: "性格"
  },
  {
    wordNo: 229,
    word: "character",
    meaning: "登場人物",
    sentence: "the main (   ) of this novel",
    jp: "この小説の主人公（主な登場人物）",
    jpBlank: "この小説の主(   )",
    jpAnswer: "人公"
  },
  {
    wordNo: 229,
    word: "characters",
    meaning: "文字",
    sentence: "Chinese (   )",
    jp: "漢字（中国の文字）",
    jpBlank: "(   )",
    jpAnswer: "漢字"
  },
  {
    wordNo: 230,
    word: "characteristics",
    meaning: "特徴",
    sentence: "one of the (   ) of large cities",
    jp: "大都市の特徴の1つ",
    jpBlank: "大都市の(   )の1つ",
    jpAnswer: "特徴"
  },
  {
    wordNo: 230,
    word: "characteristic",
    meaning: "特有の",
    sentence: "his (   ) writing style",
    jp: "彼特有の文体",
    jpBlank: "彼(   )文体",
    jpAnswer: "特有の"
  },
  {
    wordNo: 231,
    word: "feature",
    meaning: "特徴",
    sentence: "Low rainfall is a (   ) of deserts.",
    jp: "少ない降水量は砂漠の特徴だ。",
    jpBlank: "少ない降水量は砂漠の(   )だ。",
    jpAnswer: "特徴"
  },
  {
    wordNo: 231,
    word: "feature",
    meaning: "特集記事",
    sentence: "a (   ) on Samoa",
    jp: "サモアに関する特集記事",
    jpBlank: "サモアに関する(   )",
    jpAnswer: "特集記事"
  },
  {
    wordNo: 231,
    word: "features",
    meaning: "特集する",
    sentence: "The exhibition (   ) paintings by Van Gogh.",
    jp: "その展覧会はヴァン・ゴッホの絵画を目玉としている（特集している）。",
    jpBlank: "その展覧会はヴァン・ゴッホの絵画を目玉としている(   )。",
    jpAnswer: "特集している"
  },
  {
    wordNo: 232,
    word: "details",
    meaning: "詳細",
    sentence: "check the (   ) of the report",
    jp: "その報告書の詳細を確認する",
    jpBlank: "その報告書の(   )を確認する",
    jpAnswer: "詳細"
  },
  {
    wordNo: 232,
    word: "details",
    meaning: "細部",
    sentence: "see the (   ) of the building",
    jp: "その建物の細部を見る",
    jpBlank: "その建物の(   )を見る",
    jpAnswer: "細部"
  },
  {
    wordNo: 233,
    word: "advantages",
    meaning: "利点",
    sentence: "There are (   ) and disadvantages to self-driving cars.",
    jp: "自動運転の車にはメリット（利点）とデメリットがある。",
    jpBlank: "自動運転の車にはメリット(   )とデメリットがある。",
    jpAnswer: "利点"
  },
  {
    wordNo: 234,
    word: "faults",
    meaning: "欠点",
    sentence: "complain about my husband's (   )",
    jp: "夫の欠点について文句を言う",
    jpBlank: "夫の(   )について文句を言う",
    jpAnswer: "欠点"
  },
  {
    wordNo: 234,
    word: "fault",
    meaning: "責任",
    sentence: "That is my (   ).",
    jp: "それは私の責任です。",
    jpBlank: "それは私の(   )です。",
    jpAnswer: "責任"
  },
  {
    wordNo: 235,
    word: "quality",
    meaning: "質",
    sentence: "improve the (   ) of life",
    jp: "生活の質を向上させる",
    jpBlank: "生活の質を向(   )",
    jpAnswer: "上させる"
  },
  {
    wordNo: 235,
    word: "qualities",
    meaning: "資質",
    sentence: "the personal (   ) necessary to be a successful salesperson",
    jp: "営業マンとして成功するのに必要な個人の資質",
    jpBlank: "営業マンとして成功するのに必要な個人の(   )",
    jpAnswer: "資質"
  },
  {
    wordNo: 236,
    word: "correct",
    meaning: "正確な",
    sentence: "Let's see if our answers are (   ).",
    jp: "答えが正しい（正確な）かどうか見てみよう。",
    jpBlank: "答えが正しい(   )かどうか見てみよう。",
    jpAnswer: "正確な"
  },
  {
    wordNo: 236,
    word: "correct",
    meaning: "訂正する",
    sentence: "(   ) his pronunciation",
    jp: "彼の発音を矯正する（訂正する）",
    jpBlank: "彼の発音を矯(   )",
    jpAnswer: "正する"
  },
  {
    wordNo: 237,
    word: "ideal",
    meaning: "理想的な",
    sentence: "an (   ) place for camping",
    jp: "キャンプにはうってつけの（理想的な）場所",
    jpBlank: "キャンプにはうってつけの(   )場所",
    jpAnswer: "理想的な"
  },
  {
    wordNo: 237,
    word: "ideal",
    meaning: "理想",
    sentence: "the (   ) of social equality",
    jp: "社会的平等の理想像",
    jpBlank: "社会的平等の(   )像",
    jpAnswer: "理想"
  },
  {
    wordNo: 238,
    word: "fair",
    meaning: "公正な",
    sentence: "It's not (   )!",
    jp: "それは不公平だ（公正ではない）。",
    jpBlank: "それは不公平だ(   )。",
    jpAnswer: "公正ではない"
  },
  {
    wordNo: 238,
    word: "fair",
    meaning: "品評会",
    sentence: "an international trade (   )",
    jp: "国際（産業）見本市",
    jpBlank: "国際(   )見本市",
    jpAnswer: "産業"
  },
  {
    wordNo: 239,
    word: "appropriate",
    meaning: "適切な",
    sentence: "clothes (   ) for a job interview",
    jp: "仕事の面接に適切な服",
    jpBlank: "仕事の面接に(   )服",
    jpAnswer: "適切な"
  },
  {
    wordNo: 240,
    word: "famous",
    meaning: "有名な",
    sentence: "Kyoto is (   ) for its temples.",
    jp: "京都は寺で有名だ。",
    jpBlank: "京都は寺で有(   )。",
    jpAnswer: "名だ"
  },
  {
    wordNo: 240,
    word: "famous",
    meaning: "〜として有名な",
    sentence: "Arima is (   ) as a hot-spring resort.",
    jp: "有馬は温泉地として有名だ。",
    jpBlank: "(   )として有名だ。",
    jpAnswer: "有馬は温泉地"
  },
],
241: [
  {
    wordNo: 241,
    word: "elementary",
    meaning: "初歩的な",
    sentence: "when I was in (   ) school",
    jp: "小学生（初等教育の学校）のとき",
    jpBlank: "(   )のとき",
    jpAnswer: "小学生"
  },
  {
    wordNo: 242,
    word: "major",
    meaning: "主要な",
    sentence: "a (   ) cause of global warming",
    jp: "地球温暖化の主要な原因",
    jpBlank: "地球温暖化の(   )原因",
    jpAnswer: "主要な"
  },
  {
    wordNo: 242,
    word: "major",
    meaning: "専攻する",
    sentence: "I (   ) in botany",
    jp: "植物学を専攻する",
    jpBlank: "植物学を(   )する",
    jpAnswer: "専攻"
  },
  {
    wordNo: 242,
    word: "major",
    meaning: "専攻",
    sentence: "What is your (   )?",
    jp: "専攻は何ですか。",
    jpBlank: "(   )は何ですか。",
    jpAnswer: "専攻"
  },
  {
    wordNo: 243,
    word: "matter",
    meaning: "重要である",
    sentence: "It does not (   ) whether he succeeds or not.",
    jp: "彼が成功するかどうかは重要ではない。",
    jpBlank: "彼が成功するかどうかは重(   )。",
    jpAnswer: "要ではない"
  },
  {
    wordNo: 243,
    word: "matter",
    meaning: "物",
    sentence: "waste (   )",
    jp: "廃棄物",
    jpBlank: "(   )",
    jpAnswer: "廃棄物"
  },
  {
    wordNo: 243,
    word: "matters",
    meaning: "事情",
    sentence: "To make (   ) worse, it began to snow.",
    jp: "さらに悪いこと（事情）には，雪が降り始めた。",
    jpBlank: "さらに悪いこと(   )には，雪が降り始めた。",
    jpAnswer: "事情"
  },
  {
    wordNo: 244,
    word: "bright",
    meaning: "明るい",
    sentence: "The moon is (   ) tonight.",
    jp: "今夜は月が明るい。",
    jpBlank: "今夜は月が(   )。",
    jpAnswer: "明るい"
  },
  {
    wordNo: 244,
    word: "bright",
    meaning: "賢い",
    sentence: "a (   ) child",
    jp: "聡明な（賢い）子ども",
    jpBlank: "聡明な(   )子ども",
    jpAnswer: "賢い"
  },
  {
    wordNo: 245,
    word: "brilliant",
    meaning: "まばゆい",
    sentence: "swim in the (   ) sunshine",
    jp: "まばゆい太陽光の下で泳ぐ",
    jpBlank: "(   )太陽光の下で泳ぐ",
    jpAnswer: "まばゆい"
  },
  {
    wordNo: 245,
    word: "brilliant",
    meaning: "すばらしい",
    sentence: "a (   ) idea",
    jp: "すばらしい考え",
    jpBlank: "(   )考え",
    jpAnswer: "すばらしい"
  },
  {
    wordNo: 246,
    word: "lively",
    meaning: "生き生きとした",
    sentence: "have a (   ) conversation",
    jp: "生き生きとした会話をする",
    jpBlank: "(   )会話をする",
    jpAnswer: "生き生きとした"
  },
  {
    wordNo: 247,
    word: "comfortable",
    meaning: "快適な",
    sentence: "a (   ) bed",
    jp: "快適なベッド",
    jpBlank: "(   )ベッド",
    jpAnswer: "快適な"
  },
  {
    wordNo: 247,
    word: "comfortable",
    meaning: "心地よい",
    sentence: "I feel (   ) in that café.",
    jp: "あのカフェは居心地がよい（心地よく感じる）。",
    jpBlank: "(   )居心地がよい。",
    jpAnswer: "あのカフェは"
  },
  {
    wordNo: 248,
    word: "pleasant",
    meaning: "楽しい",
    sentence: "I find it (   ) to talk with her.",
    jp: "彼女との話は楽しいと感じる。",
    jpBlank: "彼女との話は(   )と感じる。",
    jpAnswer: "楽しい"
  },
  {
    wordNo: 249,
    word: "convenient",
    meaning: "便利な",
    sentence: "My house is (   ) to the station.",
    jp: "私の家は駅から近くて便利だ。",
    jpBlank: "(   )ら近くて便利だ。",
    jpAnswer: "私の家は駅か"
  },
  {
    wordNo: 249,
    word: "convenient",
    meaning: "都合がよい",
    sentence: "Call me when it is (   ) for you.",
    jp: "都合のよいときに電話してください。",
    jpBlank: "都合のよいときに電話して(   )。",
    jpAnswer: "ください"
  },
  {
    wordNo: 250,
    word: "false",
    meaning: "誤った",
    sentence: "(   ) information",
    jp: "誤った情報",
    jpBlank: "(   )情報",
    jpAnswer: "誤った"
  },
  {
    wordNo: 250,
    word: "false",
    meaning: "偽の",
    sentence: "give a (   ) name",
    jp: "偽名（偽の名前）を使う",
    jpBlank: "偽名(   )を使う",
    jpAnswer: "偽の名前"
  },
  {
    wordNo: 251,
    word: "terrible",
    meaning: "ひどい",
    sentence: "I have a (   ) sense of direction.",
    jp: "私はひどい方向音痴だ。",
    jpBlank: "私は(   )方向音痴だ。",
    jpAnswer: "ひどい"
  },
  {
    wordNo: 251,
    word: "terrible",
    meaning: "苦手で",
    sentence: "I am (   ) at remembering people's names.",
    jp: "人の名前を覚えるのが苦手だ。",
    jpBlank: "(   )えるのが苦手だ。",
    jpAnswer: "人の名前を覚"
  },
  {
    wordNo: 252,
    word: "awful",
    meaning: "ひどい",
    sentence: "an (   ) smell of cat urine",
    jp: "ネコのひどい（おしっこの）臭い",
    jpBlank: "ネコの(   )臭い",
    jpAnswer: "ひどい"
  },
  {
    wordNo: 253,
    word: "thin",
    meaning: "薄い",
    sentence: "a (   ) jacket",
    jp: "薄い上着",
    jpBlank: "(   )上着",
    jpAnswer: "薄い"
  },
  {
    wordNo: 253,
    word: "thin",
    meaning: "やせた",
    sentence: "Although she eats a lot, she is very (   ).",
    jp: "彼女はたくさん食べるが，とてもやせている。",
    jpBlank: "彼女はたくさん食べるが，とてもやせて(   )。",
    jpAnswer: "いる"
  },
  {
    wordNo: 253,
    word: "thin",
    meaning: "薄い",
    sentence: "His hair is getting (   ) on top.",
    jp: "彼の頭のてっぺんが薄くなってきた。",
    jpBlank: "彼の頭のてっぺんが(   )なってきた。",
    jpAnswer: "薄く"
  },
  {
    wordNo: 254,
    word: "tight",
    meaning: "きつい",
    sentence: "(   ) jeans",
    jp: "きついジーンズ",
    jpBlank: "(   )ジーンズ",
    jpAnswer: "きつい"
  },
  {
    wordNo: 254,
    word: "tight",
    meaning: "厳しい",
    sentence: "(   ) control on immigration",
    jp: "移民に関する厳しい管理",
    jpBlank: "移民に関する(   )管理",
    jpAnswer: "厳しい"
  },
  {
    wordNo: 255,
    word: "loose",
    meaning: "ゆるい",
    sentence: "wear (   ) clothes",
    jp: "ダボっとした（ゆるい）服を着ている",
    jpBlank: "ダボっとした(   )服を着ている",
    jpAnswer: "ゆるい"
  },
  {
    wordNo: 255,
    word: "loose",
    meaning: "自由にして",
    sentence: "let my dog (   ) on the beach",
    jp: "浜辺でイヌを自由にしてやる",
    jpBlank: "浜辺でイヌを(   )やる",
    jpAnswer: "自由にして"
  },
  {
    wordNo: 256,
    word: "raw",
    meaning: "生の",
    sentence: "(   ) materials",
    jp: "原料（生の材料）",
    jpBlank: "(   )",
    jpAnswer: "原料"
  },
  {
    wordNo: 256,
    word: "raw",
    meaning: "生魚",
    sentence: "(   ) fish",
    jp: "生魚",
    jpBlank: "(   )",
    jpAnswer: "生魚"
  },
  {
    wordNo: 257,
    word: "empty",
    meaning: "空の",
    sentence: "an (   ) bottle",
    jp: "空瓶",
    jpBlank: "(   )",
    jpAnswer: "空瓶"
  },
  {
    wordNo: 257,
    word: "empty",
    meaning: "空にする",
    sentence: "(   ) his glass in one gulp",
    jp: "一気に（一口で）グラスを空にする",
    jpBlank: "一気にグラスを(   )する",
    jpAnswer: "空に"
  },
  {
    wordNo: 258,
    word: "smooth",
    meaning: "滑らかな",
    sentence: "This soap makes your skin very (   ).",
    jp: "この石けんでお肌はとてもツルツル（滑らか）になります。",
    jpBlank: "この石けんでお肌はとてもツルツル(   )になります。",
    jpAnswer: "滑らか"
  },
  {
    wordNo: 258,
    word: "smooth",
    meaning: "順調な",
    sentence: "the (   ) running of the company",
    jp: "会社の順調な運営",
    jpBlank: "会社の(   )運営",
    jpAnswer: "順調な"
  },
  {
    wordNo: 258,
    word: "smooth",
    meaning: "なでつける",
    sentence: "(   ) back my hair",
    jp: "髪の毛をなでつける",
    jpBlank: "髪の毛を(   )",
    jpAnswer: "なでつける"
  },
  {
    wordNo: 259,
    word: "direct",
    meaning: "直接的な",
    sentence: "a (   ) flight to Paris",
    jp: "パリへの直行便（直接的なフライト）",
    jpBlank: "(   )便",
    jpAnswer: "パリへの直行"
  },
  {
    wordNo: 259,
    word: "direct",
    meaning: "演出する",
    sentence: "(   ) the play",
    jp: "その劇を演出する",
    jpBlank: "その劇を(   )する",
    jpAnswer: "演出"
  },
  {
    wordNo: 259,
    word: "direct",
    meaning: "向ける",
    sentence: "(   ) their attention to this problem",
    jp: "この問題に彼らの注意を向ける",
    jpBlank: "この問題に彼らの注意を(   )",
    jpAnswer: "向ける"
  },
  {
    wordNo: 259,
    word: "direct",
    meaning: "教える",
    sentence: "(   ) her to the airport",
    jp: "彼女に空港への道を教える",
    jpBlank: "彼女に空港への道を(   )",
    jpAnswer: "教える"
  },
  {
    wordNo: 260,
    word: "familiar",
    meaning: "よく知っている",
    sentence: "I am very (   ) with this town.",
    jp: "私はこの街をよく知っている。",
    jpBlank: "私はこの街を(   )。",
    jpAnswer: "よく知っている"
  },
  {
    wordNo: 260,
    word: "familiar",
    meaning: "よく知られている",
    sentence: "Shakespeare is (   ) to people all over the world.",
    jp: "シェイクスピアは世界中の人々に（よく知られている）親しまれている。",
    jpBlank: "シェイクスピアは世界中の人々に親しまれて(   )。",
    jpAnswer: "いる"
  },
  {
    wordNo: 261,
    word: "similar",
    meaning: "似た",
    sentence: "She is (   ) to her mother in appearance.",
    jp: "彼女は見た目が母親に似ている。",
    jpBlank: "彼女は見た目が母親に似て(   )。",
    jpAnswer: "いる"
  },
  {
    wordNo: 262,
    word: "differ",
    meaning: "異なる",
    sentence: "His tastes (   ) from mine.",
    jp: "彼の趣味（好み）は私のと異なる。",
    jpBlank: "彼の趣味は私のと(   )。",
    jpAnswer: "異なる"
  },
  {
    wordNo: 263,
    word: "varies",
    meaning: "さまざまだ",
    sentence: "The way people greet each other (   ) from country to country.",
    jp: "挨拶の仕方は国によってさまざまだ。",
    jpBlank: "挨拶の仕方は国によって(   )。",
    jpAnswer: "さまざまだ"
  },
  {
    wordNo: 264,
    word: "specific",
    meaning: "特定の",
    sentence: "a (   ) age group",
    jp: "ある特定の年齢のグループ",
    jpBlank: "ある(   )年齢のグループ",
    jpAnswer: "特定の"
  },
  {
    wordNo: 264,
    word: "specific",
    meaning: "明確な",
    sentence: "(   ) instructions",
    jp: "明確な指示",
    jpBlank: "(   )指示",
    jpAnswer: "明確な"
  },
  {
    wordNo: 265,
    word: "common",
    meaning: "普及した",
    sentence: "E-books are becoming (   ).",
    jp: "電子書籍は普及しつつある。",
    jpBlank: "(   )及しつつある。",
    jpAnswer: "電子書籍は普"
  },
  {
    wordNo: 265,
    word: "common",
    meaning: "共通の",
    sentence: "a (   ) ancestor",
    jp: "共通の祖先",
    jpBlank: "(   )祖先",
    jpAnswer: "共通の"
  },
  {
    wordNo: 266,
    word: "unusual",
    meaning: "珍しい",
    sentence: "These days it is not (   ) for men to wear makeup.",
    jp: "最近は，男性が化粧するのは（珍しいことではない）よくあることだ。",
    jpBlank: "(   )，男性が化粧するのはよくあることだ。",
    jpAnswer: "最近は"
  },
  {
    wordNo: 267,
    word: "add",
    meaning: "加える",
    sentence: "(   ) some milk to the coffee",
    jp: "コーヒーにミルクを加える",
    jpBlank: "コーヒーにミルクを(   )",
    jpAnswer: "加える"
  },
  {
    wordNo: 267,
    word: "added",
    meaning: "増やす",
    sentence: "His chilling words (   ) to her fear.",
    jp: "彼のぞっとするような言葉で彼女の恐怖は増した。",
    jpBlank: "彼のぞっとするような言葉で彼女の恐怖は(   )。",
    jpAnswer: "増した"
  },
  {
    wordNo: 268,
    word: "increase",
    meaning: "増える",
    sentence: "(   ) by 30 percent",
    jp: "30％増える",
    jpBlank: "30％(   )",
    jpAnswer: "増える"
  },
  {
    wordNo: 268,
    word: "increase",
    meaning: "増やす",
    sentence: "(   ) my vocabulary",
    jp: "語彙を増やす",
    jpBlank: "語彙を(   )",
    jpAnswer: "増やす"
  },
  {
    wordNo: 268,
    word: "increase",
    meaning: "増加",
    sentence: "an (   ) in land prices",
    jp: "地価の上昇（増加）",
    jpBlank: "(   )",
    jpAnswer: "地価の上昇"
  },
  {
    wordNo: 269,
    word: "reduce",
    meaning: "減らす",
    sentence: "(   ) the amount of garbage",
    jp: "ゴミの量を減らす",
    jpBlank: "ゴミの量を(   )",
    jpAnswer: "減らす"
  },
  {
    wordNo: 269,
    word: "reduced",
    meaning: "陥る",
    sentence: "be (   ) to poverty",
    jp: "貧困に陥る。",
    jpBlank: "貧困に(   )。",
    jpAnswer: "陥る"
  },
  {
    wordNo: 270,
    word: "divide",
    meaning: "分割する",
    sentence: "(   ) the stew into small portions",
    jp: "シチューを小分けにする（分割する）",
    jpBlank: "シチューを小(   )",
    jpAnswer: "分けにする"
  },
  {
    wordNo: 270,
    word: "divided",
    meaning: "割る",
    sentence: "Eight (   ) by four is two.",
    jp: "8 ÷ 4 = 2",
    jpBlank: "8 (   ) 4 = 2",
    jpAnswer: "÷"
  },
],
271: [
  {
    wordNo: 271,
    word: "count",
    meaning: "数える",
    sentence: "(   ) the money",
    jp: "お金を数える",
    jpBlank: "お金を(   )",
    jpAnswer: "数える"
  },
  {
    wordNo: 271,
    word: "count",
    meaning: "重要である",
    sentence: "First impressions really (   ).",
    jp: "第一印象は本当に重要だ。",
    jpBlank: "第一印象は本(   )。",
    jpAnswer: "当に重要だ"
  },
  {
    wordNo: 271,
    word: "counting",
    meaning: "当てにする",
    sentence: "I'm (   ) on you.",
    jp: "君を当てにしているよ。",
    jpBlank: "君を(   )しているよ。",
    jpAnswer: "当てに"
  },
  {
    wordNo: 272,
    word: "weigh",
    meaning: "重さがある",
    sentence: "(   ) 40 kilograms",
    jp: "40キロの重さだ",
    jpBlank: "40(   )",
    jpAnswer: "キロの重さだ"
  },
  {
    wordNo: 272,
    word: "weigh",
    meaning: "体重を計る",
    sentence: "(   ) myself on the scale",
    jp: "体重計で体重を計る",
    jpBlank: "体重計で(   )",
    jpAnswer: "体重を計る"
  },
  {
    wordNo: 272,
    word: "weigh",
    meaning: "検討する",
    sentence: "(   ) up the benefits of the plan against the costs",
    jp: "費用に照らしてその計画の利点を検討する",
    jpBlank: "費用に照らしてその計画の利点を(   )",
    jpAnswer: "検討する"
  },
  {
    wordNo: 273,
    word: "quarter",
    meaning: "4分の1",
    sentence: "a (   ) to ten",
    jp: "10時15分前（10時への4分の1）",
    jpBlank: "10時15(   )",
    jpAnswer: "分前"
  },
  {
    wordNo: 273,
    word: "quarter",
    meaning: "地域",
    sentence: "a student (   )",
    jp: "学生街（地域）",
    jpBlank: "(   )",
    jpAnswer: "学生街"
  },
  {
    wordNo: 274,
    word: "lot",
    meaning: "多くの〜",
    sentence: "a (   ) of dolphins",
    jp: "多くのイルカ",
    jpBlank: "(   )",
    jpAnswer: "多くのイルカ"
  },
  {
    wordNo: 274,
    word: "lot",
    meaning: "とても",
    sentence: "He has changed a (   ).",
    jp: "彼はとても変わった。",
    jpBlank: "彼は(   )変わった。",
    jpAnswer: "とても"
  },
  {
    wordNo: 274,
    word: "lot",
    meaning: "状況",
    sentence: "work hard to improve my (   )",
    jp: "私の置かれた状況を改善する努力をする",
    jpBlank: "私の置かれた(   )を改善する努力をする",
    jpAnswer: "状況"
  },
  {
    wordNo: 274,
    word: "lot",
    meaning: "駐車場",
    sentence: "a parking (   )",
    jp: "駐車場",
    jpBlank: "(   )",
    jpAnswer: "駐車場"
  },
  {
    wordNo: 275,
    word: "pile",
    meaning: "山",
    sentence: "a (   ) of ironed shirts",
    jp: "アイロンをかけたシャツの山",
    jpBlank: "(   )けたシャツの山",
    jpAnswer: "アイロンをか"
  },
  {
    wordNo: 275,
    word: "piles",
    meaning: "多量の仕事",
    sentence: "(   ) of work",
    jp: "山のような（多量の）仕事",
    jpBlank: "山のような(   )仕事",
    jpAnswer: "多量の"
  },
  {
    wordNo: 275,
    word: "pile",
    meaning: "盛る",
    sentence: "(   ) spaghetti onto her plate",
    jp: "彼女の皿にスパゲッティを盛る",
    jpBlank: "彼女の皿にスパゲッティを(   )",
    jpAnswer: "盛る"
  },
  {
    wordNo: 276,
    word: "rate",
    meaning: "割合",
    sentence: "the declining birth (   )",
    jp: "少子化（出生の割合の低下）",
    jpBlank: "(   )",
    jpAnswer: "少子化"
  },
  {
    wordNo: 276,
    word: "rates",
    meaning: "料金",
    sentence: "Our hotel offers special (   ) for children.",
    jp: "私たちのホテルではお子様には特別料金を提供しています。",
    jpBlank: "私たちのホテルではお子様には特別(   )を提供しています。",
    jpAnswer: "料金"
  },
  {
    wordNo: 276,
    word: "rate",
    meaning: "評価する",
    sentence: "(   ) him as a good poet",
    jp: "彼を良い詩人だと評価する",
    jpBlank: "彼を良い詩人だと(   )する",
    jpAnswer: "評価"
  },
  {
    wordNo: 277,
    word: "figures",
    meaning: "数字",
    sentence: "memorize a list of (   )",
    jp: "数字の一覧を暗記する",
    jpBlank: "(   )の一覧を暗記する",
    jpAnswer: "数字"
  },
  {
    wordNo: 277,
    word: "figure",
    meaning: "人物",
    sentence: "a political (   )",
    jp: "政治家（政治的人物）",
    jpBlank: "(   )",
    jpAnswer: "政治家"
  },
  {
    wordNo: 277,
    word: "figure",
    meaning: "スタイル",
    sentence: "have a nice (   )",
    jp: "スタイルがよい",
    jpBlank: "(   )がよい",
    jpAnswer: "スタイル"
  },
  {
    wordNo: 277,
    word: "Fig.",
    meaning: "図",
    sentence: "See (   ) 1.",
    jp: "図1を見なさい。",
    jpBlank: "図1(   )。",
    jpAnswer: "を見なさい"
  },
  {
    wordNo: 277,
    word: "figures",
    meaning: "有名だ",
    sentence: "Her name (   ) in history.",
    jp: "彼女の名前は歴史上有名だ。",
    jpBlank: "彼女の名前は歴史上(   )。",
    jpAnswer: "有名だ"
  },
  {
    wordNo: 278,
    word: "lack",
    meaning: "不足",
    sentence: "I am tired due to (   ) of sleep.",
    jp: "私は睡眠不足（の不足）のため疲れている。",
    jpBlank: "私は睡眠(   )のため疲れている。",
    jpAnswer: "不足"
  },
  {
    wordNo: 278,
    word: "lacks",
    meaning: "欠いている",
    sentence: "He (   ) confidence.",
    jp: "彼は自信がない（を欠いている）。",
    jpBlank: "彼は自信がない(   )。",
    jpAnswer: "を欠いている"
  },
  {
    wordNo: 279,
    word: "extra",
    meaning: "追加の",
    sentence: "an (   ) charge",
    jp: "追加料金（追加の料金）",
    jpBlank: "(   )料金",
    jpAnswer: "追加"
  },
  {
    wordNo: 279,
    word: "extra",
    meaning: "余分",
    sentence: "pay a little (   )",
    jp: "少し余分に払う",
    jpBlank: "少し(   )に払う",
    jpAnswer: "余分"
  },
  {
    wordNo: 280,
    word: "ready",
    meaning: "用意ができている",
    sentence: "I'm not (   ) yet.",
    jp: "まだ準備（用意）ができていません。",
    jpBlank: "まだ準備(   )ができていません。",
    jpAnswer: "用意"
  },
  {
    wordNo: 280,
    word: "ready",
    meaning: "進んで〜する",
    sentence: "be (   ) to help us",
    jp: "進んで私たちを助けてくれる",
    jpBlank: "(   )を助けてくれる",
    jpAnswer: "進んで私たち"
  },
  {
    wordNo: 281,
    word: "prepare",
    meaning: "準備をする",
    sentence: "(   ) a meal",
    jp: "食事の準備をする",
    jpBlank: "食事の(   )する",
    jpAnswer: "準備を"
  },
  {
    wordNo: 281,
    word: "prepare",
    meaning: "備える",
    sentence: "(   ) for a powerful typhoon",
    jp: "大型の台風に備える",
    jpBlank: "大型の台風に(   )",
    jpAnswer: "備える"
  },
  {
    wordNo: 281,
    word: "prepared",
    meaning: "準備ができて",
    sentence: "I am (   ) to accept your advice.",
    jp: "あなたの助言を（進んで）受け入れる準備ができています。",
    jpBlank: "あなたの助言を受け入れる(   )います。",
    jpAnswer: "準備ができて"
  },
  {
    wordNo: 282,
    word: "adjust",
    meaning: "慣れる",
    sentence: "(   ) to a new school life",
    jp: "新しい学校生活に慣れる",
    jpBlank: "新しい学校生活に(   )",
    jpAnswer: "慣れる"
  },
  {
    wordNo: 282,
    word: "adjust",
    meaning: "調整する",
    sentence: "(   ) the temperature on the air conditioner",
    jp: "エアコンの温度を調整する",
    jpBlank: "エアコンの温度を(   )する",
    jpAnswer: "調整"
  },
  {
    wordNo: 283,
    word: "applies",
    meaning: "当てはまる",
    sentence: "That rule (   ) to students.",
    jp: "その規則は学生に適用される（当てはまる）。",
    jpBlank: "その規則は学生に適用される(   )。",
    jpAnswer: "当てはまる"
  },
  {
    wordNo: 283,
    word: "apply",
    meaning: "申し込む",
    sentence: "(   ) for a passport",
    jp: "パスポートを申請する（申し込む）",
    jpBlank: "パスポートを(   )",
    jpAnswer: "申請する"
  },
  {
    wordNo: 283,
    word: "apply",
    meaning: "応用する",
    sentence: "(   ) the technology to a wide range of fields",
    jp: "さまざまな分野にその技術を応用する",
    jpBlank: "さまざまな分野にその技術を(   )",
    jpAnswer: "応用する"
  },
  {
    wordNo: 283,
    word: "apply",
    meaning: "塗る",
    sentence: "(   ) enough sunscreen to my face",
    jp: "顔に十分な日焼け止めクリームを塗る",
    jpBlank: "顔に十分な日焼け止めクリームを(   )",
    jpAnswer: "塗る"
  },
  {
    wordNo: 284,
    word: "suits",
    meaning: "好都合だ",
    sentence: "What time (   ) you best?",
    jp: "何時があなたにとって（好都合）一番都合がいいですか。",
    jpBlank: "何時があなたにとって(   )一番都合がいいですか。",
    jpAnswer: "好都合"
  },
  {
    wordNo: 284,
    word: "suits",
    meaning: "似合う",
    sentence: "That tie (   ) you.",
    jp: "そのネクタイは君に似合う。",
    jpBlank: "そのネクタイは君に(   )。",
    jpAnswer: "似合う"
  },
  {
    wordNo: 284,
    word: "suit",
    meaning: "告訴",
    sentence: "file a (   ) against her",
    jp: "彼女を告訴する",
    jpBlank: "彼女を(   )する",
    jpAnswer: "告訴"
  },
  {
    wordNo: 284,
    word: "suit",
    meaning: "スーツ",
    sentence: "a three-piece (   )",
    jp: "スリーピースのスーツ",
    jpBlank: "スリーピースの(   )",
    jpAnswer: "スーツ"
  },
  {
    wordNo: 285,
    word: "cases",
    meaning: "場合",
    sentence: "In some (   ), honesty does not pay.",
    jp: "正直が報われない場合もある。",
    jpBlank: "正直が報われない(   )もある。",
    jpAnswer: "場合"
  },
  {
    wordNo: 285,
    word: "case",
    meaning: "事実",
    sentence: "This is the (   ) with humans.",
    jp: "これは人間にも当てはまる（事実である）。",
    jpBlank: "これは人間にも当てはまる(   )。",
    jpAnswer: "事実である"
  },
  {
    wordNo: 285,
    word: "case",
    meaning: "事件",
    sentence: "a murder (   )",
    jp: "殺人事件",
    jpBlank: "殺人(   )",
    jpAnswer: "事件"
  },
  {
    wordNo: 285,
    word: "cases",
    meaning: "症例",
    sentence: "new (   ) of ebola",
    jp: "エボラ出血熱の新たな症例",
    jpBlank: "エボラ出血熱の新たな(   )",
    jpAnswer: "症例"
  },
  {
    wordNo: 285,
    word: "case",
    meaning: "主張",
    sentence: "make a (   ) before the judge",
    jp: "裁判官の前で自分の分（主張）を述べる",
    jpBlank: "裁判官の前で自分の分(   )を述べる",
    jpAnswer: "主張"
  },
  {
    wordNo: 286,
    word: "scene",
    meaning: "場面",
    sentence: "a love (   )",
    jp: "ラブシーン（場面）",
    jpBlank: "(   )",
    jpAnswer: "ラブシーン"
  },
  {
    wordNo: 286,
    word: "scene",
    meaning: "現場",
    sentence: "Police cars rushed to the (   ).",
    jp: "パトカーが現場に急行した。",
    jpBlank: "パトカーが(   )に急行した。",
    jpAnswer: "現場"
  },
  {
    wordNo: 286,
    word: "scene",
    meaning: "業界",
    sentence: "the American music (   )",
    jp: "アメリカの音楽業界",
    jpBlank: "アメリカの音楽(   )",
    jpAnswer: "業界"
  },
  {
    wordNo: 287,
    word: "chance",
    meaning: "機会",
    sentence: "a (   ) to play the lead",
    jp: "主役を演じる機会",
    jpBlank: "主役を演じる(   )",
    jpAnswer: "機会"
  },
  {
    wordNo: 287,
    word: "chance",
    meaning: "可能性",
    sentence: "There is little (   ) of his winning.",
    jp: "彼が勝つ可能性はほとんどない。",
    jpBlank: "彼が勝つ(   )はほとんどない。",
    jpAnswer: "可能性"
  },
  {
    wordNo: 288,
    word: "opportunity",
    meaning: "機会",
    sentence: "have a golden (   ) to speak English",
    jp: "英語を話す絶好の機会を持つ",
    jpBlank: "英語を話す絶好の(   )を持つ",
    jpAnswer: "機会"
  },
  {
    wordNo: 289,
    word: "experience",
    meaning: "経験",
    sentence: "learn from (   )",
    jp: "経験から学ぶ",
    jpBlank: "(   )から学ぶ",
    jpAnswer: "経験"
  },
  {
    wordNo: 289,
    word: "experience",
    meaning: "経験",
    sentence: "the bitter (   ) of losing",
    jp: "初戦敗退という苦い経験",
    jpBlank: "初戦敗退という苦い(   )",
    jpAnswer: "経験"
  },
  {
    wordNo: 289,
    word: "experience",
    meaning: "経験する",
    sentence: "(   ) many hardships",
    jp: "多くの困難を経験する",
    jpBlank: "多くの困難を(   )する",
    jpAnswer: "経験"
  },
  {
    wordNo: 290,
    word: "time",
    meaning: "時間",
    sentence: "If you have (   ), help me.",
    jp: "時間があれば手伝ってよ。",
    jpBlank: "(   )があれば手伝ってよ。",
    jpAnswer: "時間"
  },
  {
    wordNo: 290,
    word: "times",
    meaning: "回",
    sentence: "change jobs many (   )",
    jp: "職を何回も変える",
    jpBlank: "職を何回も変(   )",
    jpAnswer: "える"
  },
  {
    wordNo: 290,
    word: "times",
    meaning: "倍",
    sentence: "This one is three (   ) as large as that one.",
    jp: "これはあれの3倍の大きさだ。",
    jpBlank: "(   )3倍の大きさだ。",
    jpAnswer: "これはあれの"
  },
  {
    wordNo: 290,
    word: "times",
    meaning: "時代",
    sentence: "keep up with the (   )",
    jp: "時代についていく",
    jpBlank: "(   )についていく",
    jpAnswer: "時代"
  },
  {
    wordNo: 290,
    word: "time",
    meaning: "次",
    sentence: "the next (   ) you come here",
    jp: "あなたが次に来るとき",
    jpBlank: "あなたが次に(   )",
    jpAnswer: "来るとき"
  },
],
291: [
  {
    wordNo: 291,
    word: "time",
    meaning: "期間",
    sentence: "wait for a long (   )",
    jp: "長時間待つ",
    jpBlank: "(   )",
    jpAnswer: "長時間待つ"
  },
  {
    wordNo: 291,
    word: "time",
    meaning: "時々",
    sentence: "from (   ) to time",
    jp: "時々",
    jpBlank: "(   )",
    jpAnswer: "時々"
  },
  {
    wordNo: 291,
    word: "time",
    meaning: "ずっと",
    sentence: "all the (   )",
    jp: "ずっと",
    jpBlank: "(   )",
    jpAnswer: "ずっと"
  },
  {
    wordNo: 291,
    word: "time",
    meaning: "やがて",
    sentence: "in (   )",
    jp: "やがて",
    jpBlank: "(   )",
    jpAnswer: "やがて"
  },
  {
    wordNo: 291,
    word: "time",
    meaning: "時間通りに",
    sentence: "on (   )",
    jp: "時間通りに",
    jpBlank: "(   )",
    jpAnswer: "時間通りに"
  },
  {
    wordNo: 291,
    word: "time",
    meaning: "時間を作る",
    sentence: "make (   ) to do",
    jp: "時間を作る",
    jpBlank: "(   )",
    jpAnswer: "時間を作る"
  },
  {
    wordNo: 291,
    word: "time",
    meaning: "ゆっくりやる",
    sentence: "take one's (   )",
    jp: "ゆっくりやる",
    jpBlank: "(   )",
    jpAnswer: "ゆっくりやる"
  },
  {
    wordNo: 291,
    word: "time",
    meaning: "1回に1個",
    sentence: "one at a (   )",
    jp: "1回に1個",
    jpBlank: "(   )",
    jpAnswer: "1回に1個"
  },
  {
    wordNo: 291,
    word: "times",
    meaning: "2倍の",
    sentence: "twice as (   )",
    jp: "2倍の",
    jpBlank: "(   )",
    jpAnswer: "2倍の"
  },
  {
    wordNo: 292,
    word: "minutes'",
    meaning: "分",
    sentence: "The station is ten (   ) walk from here.",
    jp: "駅はここから歩いて10分です。",
    jpBlank: "駅はここから(   )10分です。",
    jpAnswer: "歩いて"
  },
  {
    wordNo: 292,
    word: "minute",
    meaning: "ちょっと",
    sentence: "Wait a (   ).",
    jp: "ちょっと待ってください。",
    jpBlank: "(   )待ってください。",
    jpAnswer: "ちょっと"
  },
  {
    wordNo: 292,
    word: "minutes",
    meaning: "議事録",
    sentence: "take the (   ) of the meeting",
    jp: "会議の議事録を取る",
    jpBlank: "会議の(   )を取る",
    jpAnswer: "議事録"
  },
  {
    wordNo: 292,
    word: "minute",
    meaning: "小さな",
    sentence: "a (   ) fraction",
    jp: "ごく小さな破片",
    jpBlank: "ごく(   )破片",
    jpAnswer: "小さな"
  },
  {
    wordNo: 292,
    word: "minute",
    meaning: "瞬間に",
    sentence: "the (   ) he came in",
    jp: "彼が入ってきた瞬間に",
    jpBlank: "彼が入ってきた(   )",
    jpAnswer: "瞬間に"
  },
  {
    wordNo: 293,
    word: "age",
    meaning: "中年",
    sentence: "a man past middle (   )",
    jp: "中年を過ぎた男性",
    jpBlank: "(   )を過ぎた男性",
    jpAnswer: "中年"
  },
  {
    wordNo: 293,
    word: "Ages",
    meaning: "中世",
    sentence: "in the Middle (   )",
    jp: "中世において",
    jpBlank: "(   )において",
    jpAnswer: "中世"
  },
  {
    wordNo: 293,
    word: "ages",
    meaning: "久しぶり",
    sentence: "It's been (   ) since I saw you last.",
    jp: "久しぶり。",
    jpBlank: "(   )。",
    jpAnswer: "久しぶり"
  },
  {
    wordNo: 293,
    word: "aging",
    meaning: "高齢化",
    sentence: "an (   ) society",
    jp: "高齢化社会",
    jpBlank: "(   )社会",
    jpAnswer: "高齢化"
  },
  {
    wordNo: 294,
    word: "generation",
    meaning: "世代",
    sentence: "a (   ) gap",
    jp: "世代間格差",
    jpBlank: "(   )間格差",
    jpAnswer: "世代"
  },
  {
    wordNo: 294,
    word: "generation",
    meaning: "生み出すこと",
    sentence: "the (   ) of wealth",
    jp: "富を生み出すこと",
    jpBlank: "富を(   )",
    jpAnswer: "生み出すこと"
  },
  {
    wordNo: 294,
    word: "generation",
    meaning: "発電",
    sentence: "hydropower (   )",
    jp: "水力発電",
    jpBlank: "水力(   )",
    jpAnswer: "発電"
  },
  {
    wordNo: 295,
    word: "anniversary",
    meaning: "100周年",
    sentence: "celebrate our school's 100th (   )",
    jp: "我が校の創立100周年を祝う",
    jpBlank: "我が校の創立(   )を祝う",
    jpAnswer: "100周年"
  },
  {
    wordNo: 296,
    word: "recently",
    meaning: "最近",
    sentence: "I moved to this city just (   ).",
    jp: "最近この市に引っ越してきました。",
    jpBlank: "(   )この市に引っ越してきました。",
    jpAnswer: "最近"
  },
  {
    wordNo: 297,
    word: "used",
    meaning: "以前は〜だった",
    sentence: "I (   ) to drive to work, but nowadays I take the train.",
    jp: "以前は車で仕事に行っていたが，今は電車を利用する。",
    jpBlank: "以前は車で仕事に行ってい(   )，今は電車を利用する。",
    jpAnswer: "たが"
  },
  {
    wordNo: 297,
    word: "used",
    meaning: "慣れている",
    sentence: "be (   ) to getting up early",
    jp: "早起きに慣れている",
    jpBlank: "早起きに(   )",
    jpAnswer: "慣れている"
  },
  {
    wordNo: 297,
    word: "used",
    meaning: "中古",
    sentence: "an (   ) car",
    jp: "中古車",
    jpBlank: "(   )車",
    jpAnswer: "中古"
  },
  {
    wordNo: 298,
    word: "early",
    meaning: "早く",
    sentence: "(   ) in the morning",
    jp: "朝早くに",
    jpBlank: "朝(   )に",
    jpAnswer: "早く"
  },
  {
    wordNo: 298,
    word: "earlier",
    meaning: "早く",
    sentence: "The bus came three minutes (   ) than usual.",
    jp: "そのバスはいつもより3分早く来た。",
    jpBlank: "そのバスはいつもより3分(   )来た。",
    jpAnswer: "早く"
  },
  {
    wordNo: 298,
    word: "early",
    meaning: "初期",
    sentence: "the (   ) works of Murakami Haruki",
    jp: "村上春樹の初期の作品",
    jpBlank: "村上春樹の(   )の作品",
    jpAnswer: "初期"
  },
  {
    wordNo: 299,
    word: "first",
    meaning: "1等賞",
    sentence: "win (   ) prize",
    jp: "1等賞をとる",
    jpBlank: "(   )をとる",
    jpAnswer: "1等賞"
  },
  {
    wordNo: 299,
    word: "first",
    meaning: "初めて",
    sentence: "I went up Tokyo Tower for the (   ) time in my life.",
    jp: "生まれて初めて東京タワーにのぼった。",
    jpBlank: "生まれて(   )東京タワーにのぼった。",
    jpAnswer: "初めて"
  },
  {
    wordNo: 299,
    word: "first",
    meaning: "初めて",
    sentence: "When I (   ) met her, she was a student.",
    jp: "彼女と初めて会ったとき，彼女は学生だった。",
    jpBlank: "彼女と(   )会ったとき，彼女は学生だった。",
    jpAnswer: "初めて"
  },
  {
    wordNo: 299,
    word: "First",
    meaning: "まず",
    sentence: "(   ), e-books are less expensive.",
    jp: "まず，電子書籍のほうが安い。",
    jpBlank: "(   )，電子書籍のほうが安い。",
    jpAnswer: "まず"
  },
  {
    wordNo: 299,
    word: "first",
    meaning: "最初は",
    sentence: "At (   ), I thought it was a joke, but later I realized it was true.",
    jp: "最初は冗談かと思ったが，後で事実だとわかった。",
    jpBlank: "(   )冗談かと思ったが，後で事実だとわかった。",
    jpAnswer: "最初は"
  },
  {
    wordNo: 300,
    word: "latest",
    meaning: "最新の",
    sentence: "follow the (   ) fashions",
    jp: "最新のファッションを追う",
    jpBlank: "(   )ファッションを追う",
    jpAnswer: "最新の"
  },
],
301: [
  {
    wordNo: 301,
    word: "modern",
    meaning: "現代",
    sentence: "in (   ) society",
    jp: "現代社会では",
    jpBlank: "(   )社会では",
    jpAnswer: "現代"
  },
  {
    wordNo: 301,
    word: "modern",
    meaning: "近代的な",
    sentence: "a bright, (   ) office",
    jp: "明るい近代的なオフィス",
    jpBlank: "明るい(   )的なオフィス",
    jpAnswer: "近代"
  },
  {
    wordNo: 302,
    word: "ancient",
    meaning: "古代の",
    sentence: "in (   ) times",
    jp: "大昔に（古代に）",
    jpBlank: "(   )",
    jpAnswer: "大昔に"
  },
  {
    wordNo: 302,
    word: "ancient",
    meaning: "古びた",
    sentence: "an (   ), worn-out coat",
    jp: "古びてすり切れたコート",
    jpBlank: "古びてすり切(   )",
    jpAnswer: "れたコート"
  },
  {
    wordNo: 303,
    word: "spend",
    meaning: "時間を費やす",
    sentence: "(   ) most of my time reading in my room with my family",
    jp: "家族と一緒に部屋で読書をして時間の大部分を費やす。",
    jpBlank: "(   )部屋で読書をして時間の大部分を費やす。",
    jpAnswer: "家族と一緒に"
  },
  {
    wordNo: 303,
    word: "spend",
    meaning: "お金を使う",
    sentence: "(   ) too much money on clothes",
    jp: "洋服にお金をかけすぎる",
    jpBlank: "洋服にお金を(   )",
    jpAnswer: "かけすぎる"
  },
  {
    wordNo: 304,
    word: "delayed",
    meaning: "遅らせる",
    sentence: "Our train was (   ) two hours.",
    jp: "私たちが乗った列車が2時間遅れた。",
    jpBlank: "私たちが乗っ(   )2時間遅れた。",
    jpAnswer: "た列車が"
  },
  {
    wordNo: 304,
    word: "delay",
    meaning: "遅れることなく",
    sentence: "without (   )",
    jp: "遅れることなく",
    jpBlank: "(   )",
    jpAnswer: "遅れることなく"
  },
  {
    wordNo: 305,
    word: "borrow",
    meaning: "〜を借りる",
    sentence: "(   ) two books from the library",
    jp: "図書館から2冊の本を借りる",
    jpBlank: "図書館から2冊の本を(   )",
    jpAnswer: "借りる"
  },
  {
    wordNo: 306,
    word: "lend",
    meaning: "貸す",
    sentence: "Could you (   ) me 10,000 yen?",
    jp: "1万円貸してもらえませんか。",
    jpBlank: "1(   )らえませんか。",
    jpAnswer: "万円貸しても"
  },
  {
    wordNo: 306,
    word: "lend",
    meaning: "貸してくれる",
    sentence: "How much will the bank (   ) me?",
    jp: "銀行はいくら貸してくれるだろうか。",
    jpBlank: "銀行はいくら(   )だろうか。",
    jpAnswer: "貸してくれる"
  },
  {
    wordNo: 307,
    word: "rent",
    meaning: "借りる",
    sentence: "(   ) a car for six hours",
    jp: "6時間，車を借りる",
    jpBlank: "6時間，車を(   )",
    jpAnswer: "借りる"
  },
  {
    wordNo: 307,
    word: "rents",
    meaning: "賃貸しする",
    sentence: "She (   ) out three rooms to students.",
    jp: "彼女は学生に3部屋を賃貸ししている。",
    jpBlank: "彼女は学生に3部屋を(   )している。",
    jpAnswer: "賃貸し"
  },
  {
    wordNo: 307,
    word: "rent",
    meaning: "家賃",
    sentence: "pay a high (   )",
    jp: "高い（高い）家賃を払う",
    jpBlank: "高い(   )を払う",
    jpAnswer: "家賃"
  },
  {
    wordNo: 308,
    word: "provide",
    meaning: "〜を供給する，与える",
    sentence: "(   ) students with an opportunity to study in the U.K.",
    jp: "イギリス留学（を学ぶ）の機会を学生に与える",
    jpBlank: "イギリス留学の機会を学生に(   )",
    jpAnswer: "与える"
  },
  {
    wordNo: 309,
    word: "board",
    meaning: "板",
    sentence: "drill a hole through a (   )",
    jp: "板にドリルで穴を開ける",
    jpBlank: "板にドリルで(   )",
    jpAnswer: "穴を開ける"
  },
  {
    wordNo: 309,
    word: "board",
    meaning: "委員会",
    sentence: "a (   ) of education",
    jp: "教育委員会",
    jpBlank: "教育(   )",
    jpAnswer: "委員会"
  },
  {
    wordNo: 309,
    word: "board",
    meaning: "乗る",
    sentence: "(   ) a bus",
    jp: "バスに乗る",
    jpBlank: "バスに(   )",
    jpAnswer: "乗る"
  },
  {
    wordNo: 310,
    word: "garbage",
    meaning: "ごみ",
    sentence: "plastic (   ) bags",
    jp: "ビニールのごみ袋",
    jpBlank: "ビニールの(   )袋",
    jpAnswer: "ごみ"
  },
  {
    wordNo: 311,
    word: "items",
    meaning: "品物",
    sentence: "buy (   ) on sale",
    jp: "バーゲン品（品物）を買う",
    jpBlank: "バーゲン品(   )を買う",
    jpAnswer: "品物"
  },
  {
    wordNo: 311,
    word: "item",
    meaning: "ニュース",
    sentence: "a news (   ) about the village",
    jp: "その村に関する1つのニュース（ニュース）",
    jpBlank: "その村に関する1つの(   )",
    jpAnswer: "ニュース"
  },
  {
    wordNo: 311,
    word: "items",
    meaning: "項目",
    sentence: "check all the (   ) on the list",
    jp: "リストのすべての項目を確認する",
    jpBlank: "リストのすべての(   )を確認する",
    jpAnswer: "項目"
  },
  {
    wordNo: 312,
    word: "wheel",
    meaning: "車輪",
    sentence: "the front (   ) of my bicycle",
    jp: "自転車の前輪（前の車輪）",
    jpBlank: "(   )",
    jpAnswer: "自転車の前輪"
  },
  {
    wordNo: 312,
    word: "wheel",
    meaning: "ハンドル",
    sentence: "sit at the (   )",
    jp: "運転する（ハンドルの所に座る）",
    jpBlank: "(   )",
    jpAnswer: "運転する"
  },
  {
    wordNo: 312,
    word: "wheel",
    meaning: "動かす",
    sentence: "(   ) a cart",
    jp: "カートを動かす",
    jpBlank: "カートを(   )",
    jpAnswer: "動かす"
  },
  {
    wordNo: 313,
    word: "notes",
    meaning: "メモ",
    sentence: "take (   ) in class",
    jp: "授業中にメモをとる",
    jpBlank: "授業中に(   )をとる",
    jpAnswer: "メモ"
  },
  {
    wordNo: 313,
    word: "note",
    meaning: "紙幣",
    sentence: "a 50-pound (   )",
    jp: "50ポンド紙幣",
    jpBlank: "50ポンド(   )",
    jpAnswer: "紙幣"
  },
  {
    wordNo: 313,
    word: "note",
    meaning: "指摘する",
    sentence: "(   ) that we face a real challenge",
    jp: "私たちが大きな難局に直面していると指摘する",
    jpBlank: "私たちが大きな難局に直面していると(   )",
    jpAnswer: "指摘する"
  },
  {
    wordNo: 313,
    word: "note",
    meaning: "注意して",
    sentence: "Please (   ) that the homework is due on Friday.",
    jp: "宿題の締め切りは金曜日だということを忘れないように注意してください。",
    jpBlank: "宿題の締め切りは金曜日だということを忘れないように(   )ください。",
    jpAnswer: "注意して"
  },
  {
    wordNo: 314,
    word: "present",
    meaning: "プレゼント",
    sentence: "open the (   )",
    jp: "プレゼントを開ける",
    jpBlank: "(   )を開ける",
    jpAnswer: "プレゼント"
  },
  {
    wordNo: 314,
    word: "present",
    meaning: "現在",
    sentence: "up to the (   )",
    jp: "現在に至るまで",
    jpBlank: "(   )に至るまで",
    jpAnswer: "現在"
  },
  {
    wordNo: 314,
    word: "present",
    meaning: "出席者",
    sentence: "those (   )",
    jp: "出席者（出席している人々）",
    jpBlank: "(   )",
    jpAnswer: "出席者"
  },
  {
    wordNo: 314,
    word: "present",
    meaning: "今の",
    sentence: "my (   ) job",
    jp: "（私の）今の仕事",
    jpBlank: "(   )仕事",
    jpAnswer: "今の"
  },
  {
    wordNo: 314,
    word: "present",
    meaning: "贈る",
    sentence: "(   ) him with an award",
    jp: "彼に賞を贈る",
    jpBlank: "彼に賞を(   )",
    jpAnswer: "贈る"
  },
  {
    wordNo: 315,
    word: "bargain",
    meaning: "お買い得品",
    sentence: "find a good (   )",
    jp: "良いお買い得品を見つける",
    jpBlank: "良い(   )を見つける",
    jpAnswer: "お買い得品"
  },
  {
    wordNo: 315,
    word: "bargain",
    meaning: "交渉する",
    sentence: "(   ) for better pay",
    jp: "賃上げを求めて交渉する",
    jpBlank: "賃上げを求めて(   )する",
    jpAnswer: "交渉"
  },
  {
    wordNo: 316,
    word: "stuff",
    meaning: "物",
    sentence: "lift heavy (   )",
    jp: "重い物を持ち上げる",
    jpBlank: "重い物を持ち(   )",
    jpAnswer: "上げる"
  },
  {
    wordNo: 316,
    word: "stuffed",
    meaning: "詰められた",
    sentence: "chicken (   ) with rice",
    jp: "お米が詰められた鶏肉",
    jpBlank: "お米が(   )鶏肉",
    jpAnswer: "詰められた"
  },
  {
    wordNo: 317,
    word: "string",
    meaning: "ひも",
    sentence: "tie up the box with some (   )",
    jp: "ひもで箱を縛る",
    jpBlank: "(   )で箱を縛る",
    jpAnswer: "ひも"
  },
  {
    wordNo: 317,
    word: "string",
    meaning: "一連の",
    sentence: "a (   ) of questions",
    jp: "一連の質問",
    jpBlank: "(   )質問",
    jpAnswer: "一連の"
  },
  {
    wordNo: 317,
    word: "string",
    meaning: "弦",
    sentence: "a six-(   ) guitar",
    jp: "6弦ギター",
    jpBlank: "6(   )",
    jpAnswer: "弦ギター"
  },
  {
    wordNo: 318,
    word: "leisure",
    meaning: "余暇",
    sentence: "enjoy my (   ) time",
    jp: "余暇を楽しむ",
    jpBlank: "(   )を楽しむ",
    jpAnswer: "余暇"
  },
  {
    wordNo: 318,
    word: "leisure",
    meaning: "産業",
    sentence: "the (   ) industry",
    jp: "レジャー（余暇）産業",
    jpBlank: "レジャー(   )",
    jpAnswer: "産業"
  },
  {
    wordNo: 319,
    word: "diet",
    meaning: "食事",
    sentence: "a well-balanced (   )",
    jp: "栄養バランスのとれた食事",
    jpBlank: "栄養バランスのとれた(   )",
    jpAnswer: "食事"
  },
  {
    wordNo: 319,
    word: "diet",
    meaning: "ダイエット",
    sentence: "I am on a (   ) now.",
    jp: "今ダイエット中です。",
    jpBlank: "今(   )中です。",
    jpAnswer: "ダイエット"
  },
  {
    wordNo: 319,
    word: "Diet",
    meaning: "国会",
    sentence: "a (   ) member",
    jp: "国会議員",
    jpBlank: "(   )議員",
    jpAnswer: "国会"
  },
  {
    wordNo: 320,
    word: "furniture",
    meaning: "家具",
    sentence: "a set of (   )",
    jp: "家具一式",
    jpBlank: "(   )一式",
    jpAnswer: "家具"
  },
  {
    wordNo: 321,
    word: "refrigerator",
    meaning: "冷蔵庫",
    sentence: "put the leftovers in the (   )",
    jp: "冷蔵庫に残り物を入れる",
    jpBlank: "(   )に残り物を入れる",
    jpAnswer: "冷蔵庫"
  },
  {
    wordNo: 322,
    word: "traffic",
    meaning: "車",
    sentence: "There is little (   ) on the street today.",
    jp: "今日は，通りに車が（交通量がほとんどない）少ない。",
    jpBlank: "今日は，通りに車が少(   )。",
    jpAnswer: "ない"
  },
  {
    wordNo: 323,
    word: "sold",
    meaning: "売る",
    sentence: "We (   ) our car for 500,000 yen.",
    jp: "私たちは車を50万円で売った。",
    jpBlank: "(   )50万円で売った。",
    jpAnswer: "私たちは車を"
  },
  {
    wordNo: 323,
    word: "sell",
    meaning: "売れる",
    sentence: "Her books (   ) very well.",
    jp: "彼女の本は売れ行きがとてもよい（よく売れる）。",
    jpBlank: "彼女の本は(   )行きがとてもよい。",
    jpAnswer: "売れ"
  },
  {
    wordNo: 324,
    word: "pay",
    meaning: "支払う",
    sentence: "(   ) five dollars for the book",
    jp: "その本の代金として5ドルを払う",
    jpBlank: "その本の代金として5ドルを(   )",
    jpAnswer: "払う"
  },
  {
    wordNo: 324,
    word: "pay",
    meaning: "部屋代を払う",
    sentence: "(   ) for the room",
    jp: "その部屋代を払う",
    jpBlank: "その(   )",
    jpAnswer: "部屋代を払う"
  },
  {
    wordNo: 324,
    word: "pay",
    meaning: "割に合わない",
    sentence: "Honesty does not (   ).",
    jp: "正直者は馬鹿を見る（正直は割に合わない）。",
    jpBlank: "正直者は馬鹿(   )。",
    jpAnswer: "を見る"
  },
  {
    wordNo: 324,
    word: "pay",
    meaning: "有給休暇",
    sentence: "have a vacation with (   )",
    jp: "有給休暇をとる",
    jpBlank: "(   )をとる",
    jpAnswer: "有給休暇"
  },
  {
    wordNo: 325,
    word: "wear",
    meaning: "をつけている",
    sentence: "I (   ) contact lenses.",
    jp: "コンタクトレンズをつけている。",
    jpBlank: "コンタクトレンズ(   )。",
    jpAnswer: "をつけている"
  },
  {
    wordNo: 325,
    word: "wearing",
    meaning: "をつけている",
    sentence: "I am (   ) contact lenses.",
    jp: "（私は今）コンタクトレンズをつけている。",
    jpBlank: "コンタクトレンズ(   )。",
    jpAnswer: "をつけている"
  },
  {
    wordNo: 325,
    word: "worn",
    meaning: "すり切れている",
    sentence: "My shirt is badly (   ).",
    jp: "私のシャツはひどくすり切れている。",
    jpBlank: "私のシャツはひどく(   )。",
    jpAnswer: "すり切れている"
  },
  {
    wordNo: 325,
    word: "wear",
    meaning: "すり減る",
    sentence: "The carpet is starting to (   ) a little.",
    jp: "カーペットが少しすり減り始めている。",
    jpBlank: "カーペットが少し(   )り始めている。",
    jpAnswer: "すり減"
  },
  {
    wordNo: 327,
    word: "marry",
    meaning: "〜と結婚する",
    sentence: "Will you (   ) me?",
    jp: "（私と）結婚してくれますか？",
    jpBlank: "(   )してくれますか？",
    jpAnswer: "結婚"
  },
  {
    wordNo: 327,
    word: "married",
    meaning: "夫婦",
    sentence: "a (   ) couple",
    jp: "夫婦（結婚しているカップル）",
    jpBlank: "(   )",
    jpAnswer: "夫婦"
  },
  {
    wordNo: 328,
    word: "greet",
    meaning: "〜に挨拶をする",
    sentence: "(   ) each other",
    jp: "お互いに挨拶をする",
    jpBlank: "お互いに(   )する",
    jpAnswer: "挨拶を"
  },
  {
    wordNo: 329,
    word: "order",
    meaning: "〜を注文する",
    sentence: "(   ) rice directly from the farm",
    jp: "産地に直接米を注文する",
    jpBlank: "産地に直接米を(   )する",
    jpAnswer: "注文"
  },
  {
    wordNo: 329,
    word: "order",
    meaning: "命令する",
    sentence: "(   ) him to stop smoking",
    jp: "たばこをやめるように彼に命じる",
    jpBlank: "たばこをやめるように彼に(   )",
    jpAnswer: "命じる"
  },
  {
    wordNo: 329,
    word: "order",
    meaning: "注文",
    sentence: "place an (   ) by telephone",
    jp: "電話で注文する",
    jpBlank: "電話で(   )する",
    jpAnswer: "注文"
  },
  {
    wordNo: 329,
    word: "order",
    meaning: "命令",
    sentence: "obey an (   )",
    jp: "命令に従う",
    jpBlank: "(   )に従う",
    jpAnswer: "命令"
  },
  {
    wordNo: 329,
    word: "order",
    meaning: "順で",
    sentence: "in alphabetical (   )",
    jp: "アルファベット順で",
    jpBlank: "アルファベット(   )",
    jpAnswer: "順で"
  },
  {
    wordNo: 329,
    word: "order",
    meaning: "秩序",
    sentence: "maintain peace and (   )",
    jp: "平和と秩序を維持する",
    jpBlank: "平和と(   )を維持する",
    jpAnswer: "秩序"
  },
  {
    wordNo: 330,
    word: "book",
    meaning: "〜を予約する",
    sentence: "(   ) a single room for two nights",
    jp: "シングルルームを2泊予約する",
    jpBlank: "シングルルームを2泊(   )",
    jpAnswer: "予約する"
  },
  {
    wordNo: 330,
    word: "room",
    meaning: "別腹",
    sentence: "have (   ) for dessert",
    jp: "デザートは別腹だ（デザートのための余地がある）。",
    jpBlank: "デザートは(   )だ。",
    jpAnswer: "別腹"
  },
],
331: [
  {
    wordNo: 331,
    word: "story",
    meaning: "階",
    sentence: "a two-hundred-(   ) skyscraper",
    jp: "200階建ての超高層ビル",
    jpBlank: "200階建ての超高(   )",
    jpAnswer: "層ビル"
  },
  {
    wordNo: 332,
    word: "site",
    meaning: "用地",
    sentence: "a dam (   ) ( = site for a dam)",
    jp: "ダムの用地",
    jpBlank: "ダムの(   )",
    jpAnswer: "用地"
  },
  {
    wordNo: 332,
    word: "site",
    meaning: "現場",
    sentence: "a construction (   )",
    jp: "建設現場（工事現場）",
    jpBlank: "建設(   )",
    jpAnswer: "現場"
  },
  {
    wordNo: 332,
    word: "site",
    meaning: "跡",
    sentence: "the (   ) of the Battle of Sekigahara",
    jp: "関ケ原の戦いの跡",
    jpBlank: "関ケ原の戦い(   )",
    jpAnswer: "の跡"
  },
  {
    wordNo: 333,
    word: "yard",
    meaning: "庭",
    sentence: "mow the lawn in our (   )",
    jp: "私たちの庭の芝を刈る",
    jpBlank: "私たちの庭の(   )",
    jpAnswer: "芝を刈る"
  },
  {
    wordNo: 333,
    word: "yards",
    meaning: "ヤード",
    sentence: "drive a golf ball over 300 (   )",
    jp: "300ヤード以上ゴルフボールを飛ばす",
    jpBlank: "300(   )以上ゴルフボールを飛ばす",
    jpAnswer: "ヤード"
  },
  {
    wordNo: 334,
    word: "bottom",
    meaning: "海底",
    sentence: "the (   ) of the sea",
    jp: "海底",
    jpBlank: "(   )",
    jpAnswer: "海底"
  },
  {
    wordNo: 334,
    word: "bottom",
    meaning: "下",
    sentence: "Look at the (   ) of page 10.",
    jp: "10ページの下を見てください。",
    jpBlank: "10(   )見てください。",
    jpAnswer: "ページの下を"
  },
  {
    wordNo: 334,
    word: "bottom",
    meaning: "尻",
    sentence: "fall on my (   )",
    jp: "尻もちをつく（尻の上に落ちる）",
    jpBlank: "(   )",
    jpAnswer: "尻もちをつく"
  },
  {
    wordNo: 335,
    word: "line",
    meaning: "列",
    sentence: "stand in (   )",
    jp: "列に並ぶ",
    jpBlank: "(   )",
    jpAnswer: "列に並ぶ"
  },
  {
    wordNo: 335,
    word: "line",
    meaning: "サインする",
    sentence: "sign on the dotted (   )",
    jp: "点線のところにサインする",
    jpBlank: "点線のところに(   )する",
    jpAnswer: "サイン"
  },
  {
    wordNo: 335,
    word: "line",
    meaning: "お話し中",
    sentence: "The (   ) is busy.",
    jp: "電話がお話し中です。",
    jpBlank: "電話が(   )です。",
    jpAnswer: "お話し中"
  },
  {
    wordNo: 335,
    word: "lines",
    meaning: "セリフ",
    sentence: "practice my (   ) over and over",
    jp: "セリフを何度も練習する",
    jpBlank: "(   )を何度も練習する",
    jpAnswer: "セリフ"
  },
  {
    wordNo: 335,
    word: "line",
    meaning: "行列を作る",
    sentence: "(   ) up to buy tickets",
    jp: "チケットを求めて行列を作る",
    jpBlank: "チケットを求めて(   )",
    jpAnswer: "行列を作る"
  },
  {
    wordNo: 336,
    word: "row",
    meaning: "列",
    sentence: "the people sitting in the back (   )",
    jp: "後列に座っている人々",
    jpBlank: "後列に座って(   )々",
    jpAnswer: "いる人"
  },
  {
    wordNo: 336,
    word: "row",
    meaning: "こぐ",
    sentence: "(   ) a boat on the lake",
    jp: "湖でボートをこぐ",
    jpBlank: "湖でボートを(   )",
    jpAnswer: "こぐ"
  },
  {
    wordNo: 337,
    word: "background",
    meaning: "背景",
    sentence: "Classical music was playing in the (   ).",
    jp: "BGM（背景）にクラシック音楽が流れていた。",
    jpBlank: "BGM(   )にクラシック音楽が流れていた。",
    jpAnswer: "背景"
  },
  {
    wordNo: 337,
    word: "backgrounds",
    meaning: "経歴",
    sentence: "people from different (   )",
    jp: "さまざまな経歴の人々",
    jpBlank: "さまざまな(   )の人々",
    jpAnswer: "経歴"
  },
  {
    wordNo: 338,
    word: "direction",
    meaning: "方向",
    sentence: "go in the opposite (   )",
    jp: "反対の方向へ行く",
    jpBlank: "反対の(   )へ行く",
    jpAnswer: "方向"
  },
  {
    wordNo: 338,
    word: "directions",
    meaning: "道順",
    sentence: "ask for (   )",
    jp: "道順を尋ねる",
    jpBlank: "(   )を尋ねる",
    jpAnswer: "道順"
  },
  {
    wordNo: 338,
    word: "direction",
    meaning: "指揮",
    sentence: "under his (   )",
    jp: "彼の指揮の下で",
    jpBlank: "彼の(   )の下で",
    jpAnswer: "指揮"
  },
  {
    wordNo: 339,
    word: "cultures",
    meaning: "文化",
    sentence: "various foreign (   )",
    jp: "さまざまな外国文化",
    jpBlank: "さまざまな外国(   )",
    jpAnswer: "文化"
  },
  {
    wordNo: 339,
    word: "culture",
    meaning: "培養",
    sentence: "a (   ) of bacteria",
    jp: "細菌の培養",
    jpBlank: "細菌の(   )",
    jpAnswer: "培養"
  },
  {
    wordNo: 339,
    word: "culture",
    meaning: "教養",
    sentence: "a woman of (   )",
    jp: "教養ある女性",
    jpBlank: "(   )ある女性",
    jpAnswer: "教養"
  },
  {
    wordNo: 339,
    word: "cultured",
    meaning: "養殖",
    sentence: "(   ) pearls",
    jp: "養殖（された）真珠",
    jpBlank: "(   )真珠",
    jpAnswer: "養殖"
  },
  {
    wordNo: 340,
    word: "art",
    meaning: "芸術",
    sentence: "works of modern (   )",
    jp: "現代芸術の作品",
    jpBlank: "現代(   )の作品",
    jpAnswer: "芸術"
  },
  {
    wordNo: 340,
    word: "art",
    meaning: "技術",
    sentence: "the (   ) of conversation",
    jp: "会話の技術",
    jpBlank: "会話の(   )",
    jpAnswer: "技術"
  },
  {
    wordNo: 340,
    word: "arts",
    meaning: "一般教養",
    sentence: "a liberal (   ) course",
    jp: "一般教養課程",
    jpBlank: "(   )課程",
    jpAnswer: "一般教養"
  },
  {
    wordNo: 341,
    word: "cartoons",
    meaning: "漫画",
    sentence: "Japanese animated (   )",
    jp: "日本の（アニメーション作品）漫画",
    jpBlank: "日本の(   )",
    jpAnswer: "漫画"
  },
  {
    wordNo: 342,
    word: "plot",
    meaning: "あらすじ",
    sentence: "the (   ) of this novel",
    jp: "この小説のあらすじ",
    jpBlank: "この小説の(   )",
    jpAnswer: "あらすじ"
  },
  {
    wordNo: 342,
    word: "novel",
    meaning: "斬新な",
    sentence: "come up with a (   ) idea",
    jp: "斬新な考えを思いつく",
    jpBlank: "(   )考えを思いつく",
    jpAnswer: "斬新な"
  },
  {
    wordNo: 343,
    word: "instrument",
    meaning: "楽器",
    sentence: "play a musical (   )",
    jp: "楽器を演奏する",
    jpBlank: "(   )を演奏する",
    jpAnswer: "楽器"
  },
  {
    wordNo: 343,
    word: "instrument",
    meaning: "器具",
    sentence: "a medical (   )",
    jp: "医療器具",
    jpBlank: "医療(   )",
    jpAnswer: "器具"
  },
  {
    wordNo: 344,
    word: "tune",
    meaning: "曲",
    sentence: "That is a nice (   ).",
    jp: "いい曲だね。",
    jpBlank: "(   )。",
    jpAnswer: "いい曲だね"
  },
  {
    wordNo: 344,
    word: "tune",
    meaning: "チャンネルを合わせる",
    sentence: "(   ) in to channel 6",
    jp: "6チャンネルに合わせる",
    jpBlank: "6(   )に合わせる",
    jpAnswer: "チャンネル"
  },
  {
    wordNo: 344,
    word: "tune",
    meaning: "調律する",
    sentence: "(   ) the piano",
    jp: "ピアノを調律する",
    jpBlank: "ピアノを(   )する",
    jpAnswer: "調律"
  },
  {
    wordNo: 345,
    word: "sentence",
    meaning: "文",
    sentence: "delete the (   )",
    jp: "その1文を削除する",
    jpBlank: "(   )1文を削除する",
    jpAnswer: "その"
  },
  {
    wordNo: 345,
    word: "sentence",
    meaning: "判決",
    sentence: "be given the death (   )",
    jp: "死刑判決を受ける",
    jpBlank: "死刑(   )を受ける",
    jpAnswer: "判決"
  },
  {
    wordNo: 345,
    word: "sentenced",
    meaning: "判決を下される",
    sentence: "be (   ) to five years in prison",
    jp: "懲役5年の刑を言い渡される（判決を下される）。",
    jpBlank: "(   )5年の刑を言い渡される。",
    jpAnswer: "懲役"
  },
  {
    wordNo: 346,
    word: "article",
    meaning: "記事",
    sentence: "a magazine (   ) on Portugal",
    jp: "ポルトガルに関する雑誌の記事",
    jpBlank: "ポルトガルに関する雑誌の(   )",
    jpAnswer: "記事"
  },
  {
    wordNo: 346,
    word: "article",
    meaning: "品物",
    sentence: "an (   ) of furniture",
    jp: "家具1点（品物）",
    jpBlank: "(   )1点",
    jpAnswer: "家具"
  },
  {
    wordNo: 346,
    word: "article",
    meaning: "冠詞",
    sentence: "This word takes no (   ).",
    jp: "この語は冠詞をつけない。",
    jpBlank: "この語は(   )をつけない。",
    jpAnswer: "冠詞"
  },
  {
    wordNo: 346,
    word: "Article",
    meaning: "条項",
    sentence: "(   ) 9 of the Japanese Constitution",
    jp: "日本の憲法第9条",
    jpBlank: "(   )9条",
    jpAnswer: "日本の憲法第"
  },
  {
    wordNo: 347,
    word: "passage",
    meaning: "一節",
    sentence: "a famous (   ) from the Bible",
    jp: "聖書の有名な一節",
    jpBlank: "聖書の有名な(   )",
    jpAnswer: "一節"
  },
  {
    wordNo: 347,
    word: "passage",
    meaning: "経過",
    sentence: "with the (   ) of time",
    jp: "時の経過と共に",
    jpBlank: "時の(   )と共に",
    jpAnswer: "経過"
  },
  {
    wordNo: 348,
    word: "vocabulary",
    meaning: "語彙",
    sentence: "increase my (   )",
    jp: "語彙を増やす",
    jpBlank: "(   )を増やす",
    jpAnswer: "語彙"
  },
  {
    wordNo: 349,
    word: "Rumors",
    meaning: "うわさ",
    sentence: "(   ) about him spread throughout the school.",
    jp: "彼に関するうわさが学校中に広まった。",
    jpBlank: "彼に関する(   )が学校中に広まった。",
    jpAnswer: "うわさ"
  },
  {
    wordNo: 350,
    word: "spell",
    meaning: "綴る",
    sentence: "How do you (   ) your name?",
    jp: "名前はどのように綴りますか。",
    jpBlank: "(   )うに綴りますか。",
    jpAnswer: "名前はどのよ"
  },
  {
    wordNo: 350,
    word: "spell",
    meaning: "呪文",
    sentence: "cast a (   ) on the man",
    jp: "その男に呪文をかける",
    jpBlank: "その男に(   )をかける",
    jpAnswer: "呪文"
  },
  {
    wordNo: 350,
    word: "spell",
    meaning: "期間",
    sentence: "I've had a (   ) of bad luck recently.",
    jp: "最近ずっと（期間）ついてない。",
    jpBlank: "最近ずっと(   )ついてない。",
    jpAnswer: "期間"
  },
  {
    wordNo: 351,
    word: "pronounce",
    meaning: "発音する",
    sentence: "How do you (   ) your name?",
    jp: "お名前はどう発音するのですか。",
    jpBlank: "お名前はどう(   )るのですか。",
    jpAnswer: "発音す"
  },
  {
    wordNo: 351,
    word: "pronounce",
    meaning: "宣告する",
    sentence: "(   ) a sentence",
    jp: "判決を宣告する",
    jpBlank: "判決を(   )する",
    jpAnswer: "宣告"
  },
  {
    wordNo: 352,
    word: "signs",
    meaning: "兆候",
    sentence: "show (   ) of recovery",
    jp: "回復の兆し（兆候）が見られる",
    jpBlank: "回復の兆し(   )が見られる",
    jpAnswer: "兆候"
  },
  {
    wordNo: 352,
    word: "sign",
    meaning: "看板",
    sentence: "a (   ) saying \"No more Hiroshimas\"",
    jp: "「ノーモアヒロシマ」の看板",
    jpBlank: "「ノーモアヒロシマ」の(   )",
    jpAnswer: "看板"
  },
  {
    wordNo: 352,
    word: "sign",
    meaning: "署名する",
    sentence: "(   ) an autograph for a fan",
    jp: "ファンのためにサインをする（署名する）",
    jpBlank: "(   )にサインをする",
    jpAnswer: "ファンのため"
  },
  {
    wordNo: 353,
    word: "mean",
    meaning: "意味する",
    sentence: "What does that (   )?",
    jp: "それはどういう意味ですか（意味しますか）。",
    jpBlank: "それはどういう(   )ですか。",
    jpAnswer: "意味"
  },
  {
    wordNo: 353,
    word: "mean",
    meaning: "つもりだ",
    sentence: "I didn't (   ) to bother you.",
    jp: "邪魔をするつもりじゃなかった。",
    jpBlank: "邪魔をするつもりじゃなか(   )。",
    jpAnswer: "った"
  },
  {
    wordNo: 353,
    word: "mean",
    meaning: "意地悪な",
    sentence: "Don't be so (   ).",
    jp: "そんなに意地悪（意地悪なこと）言わないでよ。",
    jpBlank: "そんなに意地悪(   )言わないでよ。",
    jpAnswer: "意地悪なこと"
  },
  {
    wordNo: 354,
    word: "published",
    meaning: "発行される",
    sentence: "This magazine is (   ) twice a year.",
    jp: "この雑誌は年に2回発行されている。",
    jpBlank: "この雑誌は年に2回(   )ている。",
    jpAnswer: "発行され"
  },
  {
    wordNo: 354,
    word: "published",
    meaning: "発表される",
    sentence: "The latest results will be (   ) tomorrow.",
    jp: "最新の結果は明日発表される。",
    jpBlank: "最新の結果は明日(   )。",
    jpAnswer: "発表される"
  },
],
355: [
  {
    wordNo: 355,
    word: "display",
    meaning: "〜を展示する",
    sentence: "(   ) the latest fashions",
    jp: "最新のファッションを展示する",
    jpBlank: "最新のファッションを(   )",
    jpAnswer: "展示する"
  },
  {
    wordNo: 355,
    word: "display",
    meaning: "（実力など）を発揮する",
    sentence: "(   ) my real ability",
    jp: "実力を発揮する",
    jpBlank: "実力(   )する",
    jpAnswer: "を発揮"
  },
  {
    wordNo: 355,
    word: "display",
    meaning: "〜を誇示する",
    sentence: "(   ) my jewelry",
    jp: "宝石を誇示する",
    jpBlank: "宝石を(   )する",
    jpAnswer: "誇示"
  },
  {
    wordNo: 355,
    word: "display",
    meaning: "展示，表現",
    sentence: "a fireworks (   )",
    jp: "花火大会",
    jpBlank: "(   )",
    jpAnswer: "花火大会"
  },
  {
    wordNo: 356,
    word: "trust",
    meaning: "〜を信頼する",
    sentence: "You can (   ) him; he keeps secrets.",
    jp: "彼のことを信頼してよい。彼は秘密を守る。",
    jpBlank: "彼のことを(   )してよい。彼は秘密を守る。",
    jpAnswer: "信頼"
  },
  {
    wordNo: 356,
    word: "trust",
    meaning: "信頼，信用",
    sentence: "put my (   ) in her",
    jp: "彼女を信頼する",
    jpBlank: "彼女を(   )する",
    jpAnswer: "信頼"
  },
  {
    wordNo: 357,
    word: "depends",
    meaning: "〜次第である",
    sentence: "Your success (   ) on how much effort you make.",
    jp: "成功は君の努力（がどれくらい努力するか）次第だ。",
    jpBlank: "成功は君の努力(   )だ。",
    jpAnswer: "次第"
  },
  {
    wordNo: 357,
    word: "depend",
    meaning: "（〜に）頼る",
    sentence: "I (   ) on my parents for university tuition.",
    jp: "私は両親に大学の学費を頼っている。",
    jpBlank: "私は両親に大学の学費を頼(   )。",
    jpAnswer: "っている"
  },
  {
    wordNo: 358,
    word: "rely",
    meaning: "（〜に）頼る",
    sentence: "You can (   ) on him.",
    jp: "彼なら頼っても大丈夫。",
    jpBlank: "彼なら頼って(   )。",
    jpAnswer: "も大丈夫"
  },
  {
    wordNo: 359,
    word: "pray",
    meaning: "祈る",
    sentence: "(   ) for her safety",
    jp: "彼女の無事を祈る",
    jpBlank: "彼女の無事を(   )",
    jpAnswer: "祈る"
  },
  {
    wordNo: 360,
    word: "beg",
    meaning: "〜を嘆願する",
    sentence: "(   ) her to overlook my mistakes",
    jp: "ミスを見逃してもらうよう，彼女にお願いする",
    jpBlank: "ミスを見逃してもらうよう，彼女にお願い(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 360,
    word: "beg",
    meaning: "求める",
    sentence: "(   ) for something to eat",
    jp: "食べ物をねだる",
    jpBlank: "(   )る",
    jpAnswer: "食べ物をねだ"
  },
  {
    wordNo: 361,
    word: "prefer",
    meaning: "（BよりA）を好む",
    sentence: "(   ) beef to chicken",
    jp: "鶏肉より牛肉を好む",
    jpBlank: "鶏肉より牛肉(   )",
    jpAnswer: "を好む"
  },
  {
    wordNo: 362,
    word: "wept",
    meaning: "（しくしく）泣く",
    sentence: "All America (   ).",
    jp: "全米が泣いた。",
    jpBlank: "(   )。",
    jpAnswer: "全米が泣いた"
  },
  {
    wordNo: 363,
    word: "hate",
    meaning: "〜を嫌う",
    sentence: "(   ) doing housework",
    jp: "家事をするのが嫌いだ",
    jpBlank: "家事をするの(   )",
    jpAnswer: "が嫌いだ"
  },
  {
    wordNo: 364,
    word: "worry",
    meaning: "心配する",
    sentence: "Don't (   ) about it.",
    jp: "そんなことを気にするな。",
    jpBlank: "そんなことを(   )な。",
    jpAnswer: "気にする"
  },
  {
    wordNo: 364,
    word: "worries",
    meaning: "心配（事）",
    sentence: "Life is full of (   ).",
    jp: "人生は心配事が多い。",
    jpBlank: "人生は(   )事が多い。",
    jpAnswer: "心配"
  },
  {
    wordNo: 365,
    word: "anxious",
    meaning: "（〜を）心配して",
    sentence: "I'm (   ) about her health.",
    jp: "彼女の健康が心配だ。",
    jpBlank: "彼女の健康が(   )。",
    jpAnswer: "心配だ"
  },
  {
    wordNo: 365,
    word: "anxious",
    meaning: "（〜を）切望して",
    sentence: "Ben is (   ) to see you.",
    jp: "ベンは君に会いたがっているよ。",
    jpBlank: "ベンは君に(   )よ。",
    jpAnswer: "会いたがっている"
  },
  {
    wordNo: 366,
    word: "satisfied",
    meaning: "〜を満足させる",
    sentence: "I'm not (   ) with the exam result.",
    jp: "試験結果に満足していない。",
    jpBlank: "(   )足していない。",
    jpAnswer: "試験結果に満"
  },
  {
    wordNo: 366,
    word: "satisfy",
    meaning: "（必要条件などを）満たす",
    sentence: "(   ) the needs of tourists",
    jp: "旅行者のニーズに応える",
    jpBlank: "旅行者のニー(   )",
    jpAnswer: "ズに応える"
  },
  {
    wordNo: 367,
    word: "annoys",
    meaning: "〜をわずらわせる",
    sentence: "It really (   ) me when I see people smoking while (they are) walking.",
    jp: "歩きタバコを見かけると頭にくる（歩きタバコは私を苛立たせる）。",
    jpBlank: "歩きタバコを見かけると(   )。",
    jpAnswer: "頭にくる"
  },
  {
    wordNo: 368,
    word: "bother",
    meaning: "〜に面倒をかける",
    sentence: "I'm sorry to (   ) you, but could you give me a hand?",
    jp: "ご迷惑をおかけしてすみませんが，手を貸していただけないでしょうか。",
    jpBlank: "ご迷惑を(   )すみませんが，手を貸していただけないでしょうか。",
    jpAnswer: "おかけして"
  },
  {
    wordNo: 368,
    word: "bother",
    meaning: "（〜することを）わざわざする",
    sentence: "Don't (   ) to gift-wrap it.",
    jp: "わざわざ包装しなくて構いません。",
    jpBlank: "(   )包装しなくて構いません。",
    jpAnswer: "わざわざ"
  },
  {
    wordNo: 368,
    word: "bother",
    meaning: "面倒なこと",
    sentence: "find it a (   ) to go out in the rain",
    jp: "雨の中，外出するのは面倒だと思う",
    jpBlank: "(   )，外出するのは面倒だと思う",
    jpAnswer: "雨の中"
  },
  {
    wordNo: 369,
    word: "disturb",
    meaning: "（うるさくして）〜に迷惑をかける",
    sentence: "Don't (   ) other people.",
    jp: "ほかの人に迷惑をかけないようにしなさい。",
    jpBlank: "ほかの人に(   )ないようにしなさい。",
    jpAnswer: "迷惑をかけ"
  },
  {
    wordNo: 369,
    word: "disturb",
    meaning: "（平和などを）乱す",
    sentence: "(   ) my sleep [concentration]",
    jp: "睡眠［集中］を妨げる",
    jpBlank: "(   )［集中］を妨げる",
    jpAnswer: "睡眠"
  },
  {
    wordNo: 370,
    word: "frightened",
    meaning: "〜を怯えさせる",
    sentence: "I am (   ) of spiders.",
    jp: "クモがこわい（クモに怯えさせられる）。",
    jpBlank: "(   )。",
    jpAnswer: "クモがこわい"
  },
  {
    wordNo: 371,
    word: "regret",
    meaning: "〜を後悔する",
    sentence: "I (   ) that I did not study hard in my teens.",
    jp: "10代のころ一生懸命勉強しなかったことを後悔している。",
    jpBlank: "10代のころ一生懸命勉強しなかったことを(   )している。",
    jpAnswer: "後悔"
  },
  {
    wordNo: 371,
    word: "regret",
    meaning: "（〜することを）残念に思う",
    sentence: "I (   ) to say that I cannot help you.",
    jp: "残念ながらあなたを助けられないと言わなければなりません。",
    jpBlank: "残念ながらあなたを助けられないと言わなければなり(   )。",
    jpAnswer: "ません"
  },
  {
    wordNo: 371,
    word: "regrets",
    meaning: "後悔",
    sentence: "I have no (   ).",
    jp: "後悔はない。",
    jpBlank: "(   )はない。",
    jpAnswer: "後悔"
  },
  {
    wordNo: 372,
    word: "favors",
    meaning: "親切な行為",
    sentence: "Could you do me a couple of (   )?",
    jp: "いくつかお願いがあるのですが。",
    jpBlank: "いくつか(   )があるのですが。",
    jpAnswer: "お願い"
  },
  {
    wordNo: 372,
    word: "favor",
    meaning: "支持",
    sentence: "be in (   ) of his proposal",
    jp: "彼の提案に賛成だ",
    jpBlank: "彼の提案に賛(   )",
    jpAnswer: "成だ"
  },
  {
    wordNo: 373,
    word: "interest",
    meaning: "関心",
    sentence: "have [show] an (   ) in history",
    jp: "歴史に興味を持っている",
    jpBlank: "歴史に(   )を持っている",
    jpAnswer: "興味"
  },
  {
    wordNo: 373,
    word: "interests",
    meaning: "利益",
    sentence: "It is in your best (   ) to stay with your grandparents.",
    jp: "祖父母と暮らすのが君たちにとって一番よい。",
    jpBlank: "祖父母と暮らすのが君たちにとって(   )。",
    jpAnswer: "一番よい"
  },
  {
    wordNo: 373,
    word: "interest",
    meaning: "利子",
    sentence: "the (   ) on a loan",
    jp: "ローンの利子",
    jpBlank: "ローンの(   )",
    jpAnswer: "利子"
  },
  {
    wordNo: 374,
    word: "pity",
    meaning: "残念なこと",
    sentence: "It is a (   ) that you missed the movie.",
    jp: "あなたがその映画を見逃したのは残念です。",
    jpBlank: "(   )映画を見逃したのは残念です。",
    jpAnswer: "あなたがその"
  },
  {
    wordNo: 374,
    word: "pity",
    meaning: "哀れみ",
    sentence: "feel (   ) for the child",
    jp: "その子をかわいそうに思う",
    jpBlank: "その子を(   )に思う",
    jpAnswer: "かわいそう"
  },
  {
    wordNo: 375,
    word: "due to",
    meaning: "〜が原因で",
    sentence: "Our flight was delayed (   ) the storm.",
    jp: "嵐のために飛行機が遅れた。",
    jpBlank: "(   )飛行機が遅れた。",
    jpAnswer: "嵐のために"
  },
  {
    wordNo: 375,
    word: "due",
    meaning: "締め切りの",
    sentence: "The report is (   ) on Monday.",
    jp: "報告書は月曜日が締め切りだ。",
    jpBlank: "(   )日が締め切りだ。",
    jpAnswer: "報告書は月曜"
  },
  {
    wordNo: 375,
    word: "due",
    meaning: "到着予定の",
    sentence: "The train is (   ) to arrive at 9:00.",
    jp: "電車は9時に到着予定です。",
    jpBlank: "電車は9時に到着予定(   )。",
    jpAnswer: "です"
  },
  {
    wordNo: 376,
    word: "reasons",
    meaning: "理由",
    sentence: "agree with his opinion for the following (   )",
    jp: "次のような理由で彼の意見に賛成だ",
    jpBlank: "次のような(   )で彼の意見に賛成だ",
    jpAnswer: "理由"
  },
  {
    wordNo: 376,
    word: "reason",
    meaning: "理性",
    sentence: "(   ) and emotion",
    jp: "理性と感情",
    jpBlank: "(   )と感情",
    jpAnswer: "理性"
  },
  {
    wordNo: 376,
    word: "reasoned",
    meaning: "〜を推論する",
    sentence: "He (   ) that he must have left his bag on the bus.",
    jp: "彼はカバンをバスの中に忘れてきたに違いないと推論した。",
    jpBlank: "彼はカバンをバスの中に忘れてきたに違いないと(   )した。",
    jpAnswer: "推論"
  },
  {
    wordNo: 376,
    word: "reason",
    meaning: "思考する",
    sentence: "have the ability to (   )",
    jp: "（論理的に）思考する力がある",
    jpBlank: "(   )する力がある",
    jpAnswer: "思考"
  },
  {
    wordNo: 377,
    word: "result",
    meaning: "結果",
    sentence: "as a (   ) of inflation",
    jp: "インフレの結果として",
    jpBlank: "インフレの(   )として",
    jpAnswer: "結果"
  },
  {
    wordNo: 377,
    word: "resulted",
    meaning: "（〜という結果に）なる",
    sentence: "The project (   ) in success.",
    jp: "その事業は結果として成功した。",
    jpBlank: "その事業は結果として(   )。",
    jpAnswer: "成功した"
  },
  {
    wordNo: 377,
    word: "resulted",
    meaning: "（〜の結果として）起こる",
    sentence: "Serious damage (   ) from the earthquake.",
    jp: "地震の結果，深刻な被害が生じた。",
    jpBlank: "地震の結果，深刻な被害が(   )。",
    jpAnswer: "生じた"
  },
  {
    wordNo: 378,
    word: "effect",
    meaning: "効果，影響",
    sentence: "Drinking too much has a bad (   ) on the brain.",
    jp: "過度の飲酒は脳に悪影響を与える。",
    jpBlank: "過度の飲酒は脳に悪(   )を与える。",
    jpAnswer: "影響"
  },
  {
    wordNo: 379,
    word: "influence",
    meaning: "影響（力）",
    sentence: "have a strong (   ) on them",
    jp: "彼らに強い影響を与える",
    jpBlank: "彼らに強い(   )を与える",
    jpAnswer: "影響"
  },
  {
    wordNo: 379,
    word: "influenced",
    meaning: "〜に影響を与える",
    sentence: "This book deeply (   ) my way of thinking.",
    jp: "この本は私の考え方に深く影響を与えた。",
    jpBlank: "この本は私の考え方に深く(   )た。",
    jpAnswer: "影響を与え"
  },
  {
    wordNo: 380,
    word: "ended up",
    meaning: "結局〜することになる",
    sentence: "We (   ) spending the night at the airport.",
    jp: "私たちは結局，空港で一夜を過ごすことになった。",
    jpBlank: "私たちは結局，空港で一夜を過ごすことに(   )。",
    jpAnswer: "なった"
  },
  {
    wordNo: 380,
    word: "end",
    meaning: "終わり",
    sentence: "at the (   ) of May",
    jp: "5月の終わりに",
    jpBlank: "5月の(   )に",
    jpAnswer: "終わり"
  },
  {
    wordNo: 380,
    word: "end",
    meaning: "目的",
    sentence: "a means to an (   )",
    jp: "目的のための手段",
    jpBlank: "(   )のための手段",
    jpAnswer: "目的"
  },
  {
    wordNo: 381,
    word: "cause",
    meaning: "〜を引き起こす",
    sentence: "(   ) trouble",
    jp: "面倒を引き起こす",
    jpBlank: "面倒を(   )",
    jpAnswer: "引き起こす"
  },
  {
    wordNo: 381,
    word: "cause",
    meaning: "原因",
    sentence: "the root (   ) of the war",
    jp: "その戦争の根本的な原因",
    jpBlank: "その戦争の根本的な(   )",
    jpAnswer: "原因"
  },
  {
    wordNo: 382,
    word: "affects",
    meaning: "〜に影響を与える，作用する",
    sentence: "Lack of sleep seriously (   ) your performance at work.",
    jp: "睡眠不足は仕事（の出来栄え）に悪影響を及ぼす。",
    jpBlank: "睡眠不足は仕事(   )に悪影響を及ぼす。",
    jpAnswer: "の出来栄え"
  },
  {
    wordNo: 383,
    word: "way",
    meaning: "方法",
    sentence: "my (   ) of studying",
    jp: "私の勉強の仕方",
    jpBlank: "(   )方",
    jpAnswer: "私の勉強の仕"
  },
  {
    wordNo: 383,
    word: "way",
    meaning: "〜の点で",
    sentence: "We differ in this (   ).",
    jp: "この点において私たちは異なる。",
    jpBlank: "この点において私たちは異(   )。",
    jpAnswer: "なる"
  },
  {
    wordNo: 383,
    word: "way",
    meaning: "道",
    sentence: "go all the (   ) to Tokyo",
    jp: "はるばる（長い道中を）東京まで行く",
    jpBlank: "はるばる(   )東京まで行く",
    jpAnswer: "長い道中を"
  },
  {
    wordNo: 383,
    word: "way",
    meaning: "はるかに",
    sentence: "His IQ is (   ) above average.",
    jp: "彼の知能指数は平均よりはるかに上だ。",
    jpBlank: "彼の知能指数は平均より(   )上だ。",
    jpAnswer: "はるかに"
  },
  {
    wordNo: 384,
    word: "manner",
    meaning: "方法，流儀",
    sentence: "behave in a responsible (   )",
    jp: "責任ある方法でふるまう",
    jpBlank: "責任ある(   )でふるまう",
    jpAnswer: "方法"
  },
  {
    wordNo: 384,
    word: "manner",
    meaning: "態度，話し方",
    sentence: "his (   ) of speaking",
    jp: "彼の話し方",
    jpBlank: "彼の(   )",
    jpAnswer: "話し方"
  },
  {
    wordNo: 384,
    word: "manners",
    meaning: "マナー",
    sentence: "have [know] no (   )",
    jp: "マナーを知らない",
    jpBlank: "(   )を知らない",
    jpAnswer: "マナー"
  },
],
385: [
  {
    wordNo: 385,
    word: "purpose",
    meaning: "目的",
    sentence: "What is the (   ) of your visit?",
    jp: "あなたの訪問の目的は何ですか。",
    jpBlank: "あなたの訪問の(   )は何ですか。",
    jpAnswer: "目的"
  },
  {
    wordNo: 386,
    word: "sake",
    meaning: "〜のため",
    sentence: "for the (   ) of your health",
    jp: "健康のため",
    jpBlank: "健康の(   )",
    jpAnswer: "ため"
  },
  {
    wordNo: 386,
    word: "Sake",
    meaning: "日本酒",
    sentence: "(   ) is becoming popular among Europeans.",
    jp: "日本酒はヨーロッパの人々の間で人気が出ている。",
    jpBlank: "(   )はヨーロッパの人々の間で人気が出ている。",
    jpAnswer: "日本酒"
  },
  {
    wordNo: 387,
    word: "right",
    meaning: "ちょうど",
    sentence: "(   ) in front of me",
    jp: "私のちょうど目の前で",
    jpBlank: "私の(   )目の前で",
    jpAnswer: "ちょうど"
  },
  {
    wordNo: 387,
    word: "right",
    meaning: "正しい",
    sentence: "You are (   ).",
    jp: "君が正しいよ。",
    jpBlank: "君が(   )よ。",
    jpAnswer: "正しい"
  },
  {
    wordNo: 387,
    word: "right",
    meaning: "右の",
    sentence: "my (   ) hand",
    jp: "私の右手",
    jpBlank: "(   )",
    jpAnswer: "私の右手"
  },
  {
    wordNo: 387,
    word: "right",
    meaning: "権利",
    sentence: "the (   ) to vote",
    jp: "投票権",
    jpBlank: "(   )",
    jpAnswer: "投票権"
  },
  {
    wordNo: 388,
    word: "complete",
    meaning: "完全な",
    sentence: "a (   ) stranger",
    jp: "見ず知らずの人（完全に知らない人）",
    jpBlank: "(   )人",
    jpAnswer: "見ず知らずの"
  },
  {
    wordNo: 388,
    word: "complete",
    meaning: "〜を完成させる",
    sentence: "This tunnel took ten years to (   ).",
    jp: "このトンネルは完成するのに10年かかった。",
    jpBlank: "このトンネルは完成するのに10(   )。",
    jpAnswer: "年かかった"
  },
  {
    wordNo: 389,
    word: "hardly",
    meaning: "ほとんど〜ない",
    sentence: "I can (   ) wait for the summer.",
    jp: "夏が待ち遠しい（ほとんど待てない）。",
    jpBlank: "(   )い。",
    jpAnswer: "夏が待ち遠し"
  },
  {
    wordNo: 389,
    word: "hardly",
    meaning: "めったに〜ない",
    sentence: "He (   ) ever smiles.",
    jp: "彼はめったに笑わない。",
    jpBlank: "彼はめったに(   )。",
    jpAnswer: "笑わない"
  },
  {
    wordNo: 390,
    word: "almost",
    meaning: "ほとんど",
    sentence: "I go to the gym (   ) every day.",
    jp: "ほとんど毎日ジムに通っている。",
    jpBlank: "(   )毎日ジムに通っている。",
    jpAnswer: "ほとんど"
  },
  {
    wordNo: 391,
    word: "partly",
    meaning: "ある程度，部分的に",
    sentence: "I am (   ) to blame.",
    jp: "私にも一部責任がある。",
    jpBlank: "私にも一部責(   )。",
    jpAnswer: "任がある"
  },
  {
    wordNo: 392,
    word: "indeed",
    meaning: "実際に，本当に",
    sentence: "He is (   ) a kind person.",
    jp: "彼は本当に親切な人です。",
    jpBlank: "彼は(   )親切な人です。",
    jpAnswer: "本当に"
  },
  {
    wordNo: 392,
    word: "Indeed",
    meaning: "確かに",
    sentence: "(   ), he is young, but he is very smart.",
    jp: "確かに彼は若いですが，とても賢い。",
    jpBlank: "(   )彼は若いですが，とても賢い。",
    jpAnswer: "確かに"
  },
  {
    wordNo: 393,
    word: "Even",
    meaning: "〜でさえ",
    sentence: "(   ) Homer sometimes nods.",
    jp: "弘法にも筆の誤り。",
    jpBlank: "弘法にも筆の(   )。",
    jpAnswer: "誤り"
  },
  {
    wordNo: 393,
    word: "even",
    meaning: "さらに",
    sentence: "Things became (   ) more difficult.",
    jp: "事態はさらに難しくなった。",
    jpBlank: "事態は(   )難しくなった。",
    jpAnswer: "さらに"
  },
  {
    wordNo: 393,
    word: "even",
    meaning: "偶数の",
    sentence: "(   ) numbers",
    jp: "偶数",
    jpBlank: "(   )",
    jpAnswer: "偶数"
  },
  {
    wordNo: 393,
    word: "even",
    meaning: "平らな，揃った",
    sentence: "white, (   ) teeth",
    jp: "白くきれいにそろった歯",
    jpBlank: "白くきれいに(   )歯",
    jpAnswer: "そろった"
  },
  {
    wordNo: 393,
    word: "even",
    meaning: "ちょうど",
    sentence: "It cost 10 dollars (   ).",
    jp: "ちょうど10ドルでした。",
    jpBlank: "(   )10ドルでした。",
    jpAnswer: "ちょうど"
  },
  {
    wordNo: 394,
    word: "exactly",
    meaning: "正確に",
    sentence: "Where (   ) did you stay in Australia?",
    jp: "オーストラリアの正確にはどこに滞在したのですか。",
    jpBlank: "オーストラリアの(   )はどこに滞在したのですか。",
    jpAnswer: "正確に"
  },
  {
    wordNo: 394,
    word: "Exactly",
    meaning: "そのとおり",
    sentence: "\"(   ).\" / \"Not exactly.\"",
    jp: "「そのとおりです」「ちょっと違います」。",
    jpBlank: "「(   )です」「ちょっと違います」。",
    jpAnswer: "そのとおり"
  },
  {
    wordNo: 395,
    word: "gradually",
    meaning: "徐々に",
    sentence: "Land prices are (   ) increasing.",
    jp: "土地の値段が徐々に上がっている。",
    jpBlank: "土地の値段が(   )上がっている。",
    jpAnswer: "徐々に"
  },
  {
    wordNo: 396,
    word: "therefore",
    meaning: "それゆえに",
    sentence: "Even experts are only human, and (   ) mistakes sometimes occur.",
    jp: "専門家でもただの人間だ。それゆえ，ミスが時々起きる。",
    jpBlank: "専門家でもただの人間だ。それゆえ，ミスが時々(   )。",
    jpAnswer: "起きる"
  },
  {
    wordNo: 397,
    word: "instead",
    meaning: "代わりに",
    sentence: "If you can't make it, your mother may go (   ).",
    jp: "もし君が行けないのなら，君のお母さんが代わりに行ってもよい。",
    jpBlank: "もし君が行けないのなら，君のお母さんが(   )行ってもよい。",
    jpAnswer: "代わりに"
  },
  {
    wordNo: 397,
    word: "instead of",
    meaning: "〜の代わりに",
    sentence: "take the stairs (   ) the elevator",
    jp: "エレベーターの代わりに階段を使う",
    jpBlank: "エレベーターの(   )階段を使う",
    jpAnswer: "代わりに"
  },
  {
    wordNo: 398,
    word: "until",
    meaning: "〜まで（ずっと）",
    sentence: "We are open (   ) 11 p.m. on weekdays.",
    jp: "平日は午後11時まで営業しています。",
    jpBlank: "平日は午後11時まで営業し(   )。",
    jpAnswer: "ています"
  },
  {
    wordNo: 398,
    word: "until",
    meaning: "〜して初めて",
    sentence: "Stay here (   ) I get back.",
    jp: "私が戻るまでここにいて。",
    jpBlank: "私が戻る(   )ここにいて。",
    jpAnswer: "まで"
  },
  {
    wordNo: 399,
    word: "besides",
    meaning: "〜に加えて",
    sentence: "learn another foreign language (   ) English",
    jp: "英語以外の外国語を勉強する",
    jpBlank: "英語(   )の外国語を勉強する",
    jpAnswer: "以外"
  },
  {
    wordNo: 399,
    word: "besides",
    meaning: "おまけに",
    sentence: "It's too late to go out; (   ), it's snowing.",
    jp: "外出するには遅すぎだし，おまけに，雪が降っている。",
    jpBlank: "外出するには遅すぎだし，(   )，雪が降っている。",
    jpAnswer: "おまけに"
  },
  {
    wordNo: 400,
    word: "except",
    meaning: "〜を除いて",
    sentence: "Everybody was asleep (   ) (for) him.",
    jp: "彼以外は皆眠っていた。",
    jpBlank: "彼(   )は皆眠っていた。",
    jpAnswer: "以外"
  },
  {
    wordNo: 400,
    word: "Except for",
    meaning: "〜を除けば",
    sentence: "(   ) a dog, the park was empty.",
    jp: "1匹のイヌを除いて，公園には誰もいなかった。",
    jpBlank: "1匹のイヌを除(   )，公園には誰もいなかった。",
    jpAnswer: "いて"
  },
  {
    wordNo: 401,
    word: "debate",
    meaning: "討論",
    sentence: "the (   ) on whaling",
    jp: "捕鯨に関する討論",
    jpBlank: "捕鯨に関する(   )",
    jpAnswer: "討論"
  },
  {
    wordNo: 401,
    word: "debate",
    meaning: "〜を討論する",
    sentence: "(   ) the pros and cons of this",
    jp: "この是非について話し合う",
    jpBlank: "この是非について(   )",
    jpAnswer: "話し合う"
  },
  {
    wordNo: 402,
    word: "criticizing",
    meaning: "〜を批判する",
    sentence: "Stop (   ) my cooking!",
    jp: "私の料理を批判するのをやめて。",
    jpBlank: "私の料理を(   )るのをやめて。",
    jpAnswer: "批判す"
  },
  {
    wordNo: 403,
    word: "accuse",
    meaning: "〜を非難する",
    sentence: "(   ) her of lying",
    jp: "うそをついたことで彼女を非難する",
    jpBlank: "うそをついたことで彼女を(   )",
    jpAnswer: "非難する"
  },
  {
    wordNo: 403,
    word: "accuse",
    meaning: "〜を告訴する",
    sentence: "(   ) him of murder",
    jp: "殺人で彼を告訴する",
    jpBlank: "殺人で彼を(   )する",
    jpAnswer: "告訴"
  },
  {
    wordNo: 404,
    word: "insist",
    meaning: "〜と言い張る",
    sentence: "(   ) on returning home",
    jp: "家に帰ると言い張る",
    jpBlank: "家に帰ると(   )",
    jpAnswer: "言い張る"
  },
  {
    wordNo: 404,
    word: "insisted",
    meaning: "強く求める",
    sentence: "I (   ) that she wait.",
    jp: "私は彼女が待つように求めた。",
    jpBlank: "私は彼女が待つように(   )。",
    jpAnswer: "求めた"
  },
  {
    wordNo: 405,
    word: "object",
    meaning: "反対する",
    sentence: "(   ) to my studying abroad",
    jp: "私の留学に反対する",
    jpBlank: "私の留学に(   )する",
    jpAnswer: "反対"
  },
  {
    wordNo: 405,
    word: "object",
    meaning: "物",
    sentence: "a solid (   )",
    jp: "硬い物",
    jpBlank: "(   )",
    jpAnswer: "硬い物"
  },
  {
    wordNo: 405,
    word: "object",
    meaning: "目的",
    sentence: "The (   ) of this game is to develop children's vocabulary.",
    jp: "このゲームの目的は子どもの語彙を増やすことだ。",
    jpBlank: "このゲームの(   )は子どもの語彙を増やすことだ。",
    jpAnswer: "目的"
  },
  {
    wordNo: 405,
    word: "object",
    meaning: "対象",
    sentence: "an (   ) of pity",
    jp: "哀れみの対象",
    jpBlank: "哀れみの(   )",
    jpAnswer: "対象"
  },
  {
    wordNo: 406,
    word: "protest",
    meaning: "抗議する",
    sentence: "(   ) against nuclear tests",
    jp: "核実験に抗議する",
    jpBlank: "核実験に(   )する",
    jpAnswer: "抗議"
  },
  {
    wordNo: 406,
    word: "protest",
    meaning: "抗議",
    sentence: "non-violent (   )",
    jp: "非暴力の抗議",
    jpBlank: "非暴力の(   )",
    jpAnswer: "抗議"
  },
  {
    wordNo: 407,
    word: "controversial",
    meaning: "論争を招く，物議をかもす",
    sentence: "a highly (   ) issue",
    jp: "非常に論争になっている問題",
    jpBlank: "(   )なっている問題",
    jpAnswer: "非常に論争に"
  },
  {
    wordNo: 408,
    word: "bound",
    meaning: "きっと〜する",
    sentence: "He is (   ) to be in the classroom now.",
    jp: "今彼はきっと教室にいるはずだ。",
    jpBlank: "今彼はきっと教室にいるは(   )。",
    jpAnswer: "ずだ"
  },
  {
    wordNo: 408,
    word: "bound",
    meaning: "〜行きで",
    sentence: "the Nozomi Superexpress (   ) for Tokyo",
    jp: "東京行きののぞみ号",
    jpBlank: "東京行きのの(   )",
    jpAnswer: "ぞみ号"
  },
  {
    wordNo: 409,
    word: "bet",
    meaning: "きっと〜だと思う",
    sentence: "I'll (   ) (that) he's coming.",
    jp: "きっと彼は来ると思う。",
    jpBlank: "きっと彼は来(   )。",
    jpAnswer: "ると思う"
  },
  {
    wordNo: 409,
    word: "bet",
    meaning: "〜を賭ける",
    sentence: "(   ) 500 yen on a horse",
    jp: "馬に500円を賭ける",
    jpBlank: "馬に500円を(   )",
    jpAnswer: "賭ける"
  },
  {
    wordNo: 410,
    word: "demand",
    meaning: "要求する",
    sentence: "(   ) an apology",
    jp: "謝罪を要求する",
    jpBlank: "謝罪を(   )する",
    jpAnswer: "要求"
  },
  {
    wordNo: 410,
    word: "demand",
    meaning: "需要",
    sentence: "supply and (   )",
    jp: "需要と供給",
    jpBlank: "(   )と供給",
    jpAnswer: "需要"
  },
  {
    wordNo: 411,
    word: "desire",
    meaning: "願望",
    sentence: "have a strong (   ) to study in the U.K.",
    jp: "イギリスに留学したいという強い願望をもつ",
    jpBlank: "イギリスに留学したいという強い(   )をもつ",
    jpAnswer: "願望"
  },
  {
    wordNo: 411,
    word: "desire",
    meaning: "〜を強く望む",
    sentence: "(   ) to marry her",
    jp: "彼女と結婚したいと強く望む",
    jpBlank: "彼女と結婚したいと(   )",
    jpAnswer: "強く望む"
  },
  {
    wordNo: 412,
    word: "praise",
    meaning: "褒める",
    sentence: "(   ) the man for his diligence",
    jp: "その男の勤勉さを褒める",
    jpBlank: "その男の勤勉さを(   )",
    jpAnswer: "褒める"
  },
  {
    wordNo: 412,
    word: "praise",
    meaning: "賞賛",
    sentence: "His novel won high (   ).",
    jp: "彼の小説は絶賛された。",
    jpBlank: "彼の小説は(   )された。",
    jpAnswer: "絶賛"
  },
  {
    wordNo: 413,
    word: "honor",
    meaning: "名誉，栄誉",
    sentence: "It is an (   ) to be here.",
    jp: "お招き頂きありがとうございます。",
    jpBlank: "(   )頂きありがとうございます。",
    jpAnswer: "お招き"
  },
  {
    wordNo: 413,
    word: "honor",
    meaning: "〜を敬う",
    sentence: "(   ) my parents",
    jp: "両親を敬う",
    jpBlank: "両親を(   )",
    jpAnswer: "敬う"
  },
  {
    wordNo: 414,
    word: "chat",
    meaning: "おしゃべりする",
    sentence: "(   ) over tea",
    jp: "お茶を飲みながらおしゃべりする",
    jpBlank: "お茶を飲みながら(   )する",
    jpAnswer: "おしゃべり"
  },
  {
    wordNo: 414,
    word: "chat",
    meaning: "おしゃべり",
    sentence: "enjoy a (   ) with neighbors",
    jp: "近所の人たちとのおしゃべりを楽しむ",
    jpBlank: "近所の人たちとの(   )を楽しむ",
    jpAnswer: "おしゃべり"
  },
],
415: [
  {
    wordNo: 415,
    word: "refer",
    meaning: "言及する，参照する",
    sentence: "(   ) to my childhood",
    jp: "私の子どものころについて触れる",
    jpBlank: "私の子どものころについて(   )",
    jpAnswer: "触れる"
  },
  {
    wordNo: 415,
    word: "refer",
    meaning: "指す",
    sentence: "What does the underlined \"it\" (   ) to?",
    jp: "下線を引いた \"it\" の指すものは何か。",
    jpBlank: "下線を引いた \"it\" の(   )ものは何か。",
    jpAnswer: "指す"
  },
  {
    wordNo: 416,
    word: "mention",
    meaning: "〜について述べる，言及する",
    sentence: "You'd better not (   ) it.",
    jp: "それには触れないほうがいい。",
    jpBlank: "それには(   )ほうがいい。",
    jpAnswer: "触れない"
  },
  {
    wordNo: 417,
    word: "convey",
    meaning: "〜を伝える",
    sentence: "(   ) my feelings by touching her hand",
    jp: "彼女の手に触れて，気持ちを伝える",
    jpBlank: "彼女の手に触れて，気持ちを(   )",
    jpAnswer: "伝える"
  },
  {
    wordNo: 417,
    word: "conveyed",
    meaning: "〜を運ぶ",
    sentence: "Blood is (   ) to the heart by the veins.",
    jp: "血液は静脈から心臓へと運ばれる。",
    jpBlank: "血液は静脈から心臓へと(   )。",
    jpAnswer: "運ばれる"
  },
  {
    wordNo: 418,
    word: "demonstrate",
    meaning: "〜をはっきり示す，実演する",
    sentence: "(   ) my real ability",
    jp: "実力を発揮する（真の実力を示す）",
    jpBlank: "(   )る",
    jpAnswer: "実力を発揮す"
  },
  {
    wordNo: 419,
    word: "emphasize",
    meaning: "〜を強調する",
    sentence: "(   ) the importance of breakfast",
    jp: "朝食の重要性を強調する",
    jpBlank: "朝食の重要性を(   )する",
    jpAnswer: "強調"
  },
  {
    wordNo: 420,
    word: "exaggerate",
    meaning: "〜を誇張する",
    sentence: "greatly (   ) a story",
    jp: "話をとても大げさに言う",
    jpBlank: "話をとても(   )言う",
    jpAnswer: "大げさに"
  },
  {
    wordNo: 420,
    word: "exaggerates",
    meaning: "大げさに言う",
    sentence: "He often (   ) when talking about fish he caught.",
    jp: "彼は釣った魚について話すときに大げさに言う。",
    jpBlank: "彼は釣った魚について話すときに(   )。",
    jpAnswer: "大げさに言う"
  },
  {
    wordNo: 421,
    word: "reply",
    meaning: "返事をする，答える",
    sentence: "I asked him why, but he didn't (   ).",
    jp: "彼になぜかと尋ねたが，彼は返事をしなかった。",
    jpBlank: "彼になぜかと尋ねたが，彼は(   )しなかった。",
    jpAnswer: "返事を"
  },
  {
    wordNo: 421,
    word: "reply",
    meaning: "返事，答え",
    sentence: "I look forward to your (   ).",
    jp: "あなたの返事を楽しみにしています。",
    jpBlank: "あなたの(   )を楽しみにしています。",
    jpAnswer: "返事"
  },
  {
    wordNo: 422,
    word: "respond",
    meaning: "返答する，対応する",
    sentence: "(   ) to a question",
    jp: "質問に回答する",
    jpBlank: "(   )る",
    jpAnswer: "質問に回答す"
  },
  {
    wordNo: 422,
    word: "respond",
    meaning: "反応する",
    sentence: "(   ) quickly to customer complaints",
    jp: "客のクレームに素早く対応する",
    jpBlank: "客のクレームに素早く対応(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 423,
    word: "whisper",
    meaning: "ささやく",
    sentence: "(   ) in her ear",
    jp: "彼女の耳元でささやく",
    jpBlank: "彼女の耳元で(   )",
    jpAnswer: "ささやく"
  },
  {
    wordNo: 423,
    word: "whisper",
    meaning: "ささやき",
    sentence: "talk in a (   )",
    jp: "小声で話す",
    jpBlank: "(   )",
    jpAnswer: "小声で話す"
  },
  {
    wordNo: 424,
    word: "remark",
    meaning: "発言",
    sentence: "his casual (   )",
    jp: "彼の何気なく言った発言",
    jpBlank: "彼の何気なく言った(   )",
    jpAnswer: "発言"
  },
  {
    wordNo: 424,
    word: "remarked",
    meaning: "〜と述べる",
    sentence: "He (   ) that the pot was very old.",
    jp: "そのつぼはとても古いものだと彼は言った。",
    jpBlank: "そのつぼはとても古いものだと彼は(   )。",
    jpAnswer: "言った"
  },
  {
    wordNo: 425,
    word: "observe",
    meaning: "〜を観察する",
    sentence: "(   ) the behavior of birds",
    jp: "鳥の行動を観察する",
    jpBlank: "鳥の行動を(   )する",
    jpAnswer: "観察"
  },
  {
    wordNo: 425,
    word: "observe",
    meaning: "〜と述べる",
    sentence: "(   ) that humans fall into three social classes",
    jp: "人間は3つの社会集団に分かれると述べる",
    jpBlank: "人間は3つの社会集団に分かれると(   )",
    jpAnswer: "述べる"
  },
  {
    wordNo: 425,
    word: "observe",
    meaning: "遵守する",
    sentence: "(   ) the school regulations",
    jp: "校則を守る",
    jpBlank: "(   )",
    jpAnswer: "校則を守る"
  },
  {
    wordNo: 425,
    word: "observe",
    meaning: "祝う",
    sentence: "(   ) Christmas",
    jp: "クリスマスを祝う",
    jpBlank: "クリスマスを(   )",
    jpAnswer: "祝う"
  },
  {
    wordNo: 426,
    word: "theory",
    meaning: "理論",
    sentence: "Your plan is excellent in (   ).",
    jp: "あなたの計画は理論上はすばらしい。",
    jpBlank: "あなたの計画は(   )上はすばらしい。",
    jpAnswer: "理論"
  },
  {
    wordNo: 426,
    word: "theory",
    meaning: "学説",
    sentence: "publish a new (   )",
    jp: "新しい学説を発表する",
    jpBlank: "新しい(   )を発表する",
    jpAnswer: "学説"
  },
  {
    wordNo: 427,
    word: "analysis",
    meaning: "分析",
    sentence: "handwriting (   )",
    jp: "筆跡鑑定（分析）",
    jpBlank: "(   )",
    jpAnswer: "筆跡鑑定"
  },
  {
    wordNo: 428,
    word: "phenomena",
    meaning: "現象",
    sentence: "natural (   )",
    jp: "自然現象",
    jpBlank: "自然(   )",
    jpAnswer: "現象"
  },
  {
    wordNo: 428,
    word: "phenomenon",
    meaning: "特異なもの，天才",
    sentence: "a child (   )",
    jp: "神童",
    jpBlank: "(   )",
    jpAnswer: "神童"
  },
  {
    wordNo: 429,
    word: "device",
    meaning: "装置，道具",
    sentence: "a drone with a GPS (   )",
    jp: "GPS装置を搭載したドローン",
    jpBlank: "GPS(   )を搭載したドローン",
    jpAnswer: "装置"
  },
  {
    wordNo: 430,
    word: "experiment",
    meaning: "実験",
    sentence: "carry out a chemical (   )",
    jp: "化学の実験をする",
    jpBlank: "化学の(   )をする",
    jpAnswer: "実験"
  },
  {
    wordNo: 430,
    word: "experiment",
    meaning: "実験する",
    sentence: "(   ) with a new medicine",
    jp: "新薬で実験する",
    jpBlank: "新薬で(   )する",
    jpAnswer: "実験"
  },
  {
    wordNo: 431,
    word: "chemicals",
    meaning: "化学物質",
    sentence: "(   ) that are harmful to the environment",
    jp: "環境に有害な化学物質",
    jpBlank: "環境に有害な(   )",
    jpAnswer: "化学物質"
  },
  {
    wordNo: 431,
    word: "chemical",
    meaning: "化学の",
    sentence: "a (   ) symbol",
    jp: "化学記号",
    jpBlank: "(   )記号",
    jpAnswer: "化学"
  },
  {
    wordNo: 432,
    word: "fuels",
    meaning: "燃料",
    sentence: "burn fossil (   )",
    jp: "化石燃料を燃やす",
    jpBlank: "化石(   )を燃やす",
    jpAnswer: "燃料"
  },
  {
    wordNo: 432,
    word: "fuel",
    meaning: "〜を大きくする，煽る",
    sentence: "(   ) her fear",
    jp: "彼女の恐怖を増大させる",
    jpBlank: "彼女の恐怖を(   )",
    jpAnswer: "増大させる"
  },
  {
    wordNo: 433,
    word: "nuclear",
    meaning: "原子力の，核の",
    sentence: "a (   ) power plant",
    jp: "原子力発電所",
    jpBlank: "(   )発電所",
    jpAnswer: "原子力"
  },
  {
    wordNo: 434,
    word: "Statistics",
    meaning: "統計（値）",
    sentence: "(   ) show that younger people prefer football to baseball.",
    jp: "統計によると，若年層は野球よりサッカーを好むようだ。",
    jpBlank: "(   )によると，若年層は野球よりサッカーを好むようだ。",
    jpAnswer: "統計"
  },
  {
    wordNo: 434,
    word: "statistics",
    meaning: "統計学",
    sentence: "mathematical (   )",
    jp: "数理統計学",
    jpBlank: "数理(   )",
    jpAnswer: "統計学"
  },
  {
    wordNo: 435,
    word: "pursue",
    meaning: "〜を追求する",
    sentence: "(   ) a career in journalism",
    jp: "報道関係の道に進む",
    jpBlank: "報道関係の道に(   )",
    jpAnswer: "進む"
  },
  {
    wordNo: 435,
    word: "pursue",
    meaning: "〜を追跡する",
    sentence: "(   ) a criminal",
    jp: "犯人を追いかける",
    jpBlank: "犯人を追いか(   )",
    jpAnswer: "ける"
  },
  {
    wordNo: 436,
    word: "accomplish",
    meaning: "〜をやり遂げる",
    sentence: "(   ) this task",
    jp: "この仕事をやり遂げる",
    jpBlank: "この仕事を(   )",
    jpAnswer: "やり遂げる"
  },
  {
    wordNo: 437,
    word: "overcome",
    meaning: "〜を克服する",
    sentence: "(   ) my shyness",
    jp: "私の内気なところを克服する",
    jpBlank: "私の内気なところを(   )",
    jpAnswer: "克服する"
  },
  {
    wordNo: 438,
    word: "fulfill",
    meaning: "果たす",
    sentence: "(   ) a childhood dream",
    jp: "子どものころの夢を果たす",
    jpBlank: "子どものころの夢を(   )",
    jpAnswer: "果たす"
  },
  {
    wordNo: 438,
    word: "fulfill",
    meaning: "満たす",
    sentence: "(   ) our requirements",
    jp: "私たちの要求を満たす",
    jpBlank: "私たちの要求を(   )",
    jpAnswer: "満たす"
  },
  {
    wordNo: 439,
    word: "devote",
    meaning: "〜をささげる",
    sentence: "(   ) my life to helping others",
    jp: "人助けに人生をささげる",
    jpBlank: "人助けに人生を(   )",
    jpAnswer: "ささげる"
  },
  {
    wordNo: 440,
    word: "strive",
    meaning: "努力する",
    sentence: "(   ) to cut costs",
    jp: "経費削減に努力する",
    jpBlank: "経費削減に(   )する",
    jpAnswer: "努力"
  },
  {
    wordNo: 441,
    word: "aim",
    meaning: "〜しようとする",
    sentence: "(   ) to finish by Wednesday",
    jp: "水曜日までに終わらせるつもりだ",
    jpBlank: "水曜日までに終わらせる(   )",
    jpAnswer: "つもりだ"
  },
  {
    wordNo: 441,
    word: "aimed",
    meaning: "〜向けだ",
    sentence: "This book is (   ) at teenagers.",
    jp: "この本は10代の若者向けです。",
    jpBlank: "この本は10代の若者向け(   )。",
    jpAnswer: "です"
  },
  {
    wordNo: 441,
    word: "aim",
    meaning: "狙い，目的",
    sentence: "the (   ) of this course",
    jp: "この講座の狙い",
    jpBlank: "この講座の(   )",
    jpAnswer: "狙い"
  },
  {
    wordNo: 442,
    word: "challenge",
    meaning: "課題，困難なこと",
    sentence: "face a big (   )",
    jp: "大きな課題に直面する",
    jpBlank: "大きな(   )に直面する",
    jpAnswer: "課題"
  },
  {
    wordNo: 442,
    word: "challenge",
    meaning: "〜に異議を唱える",
    sentence: "(   ) the decision",
    jp: "その決定に異議を唱える",
    jpBlank: "その決定に(   )",
    jpAnswer: "異議を唱える"
  },
  {
    wordNo: 443,
    word: "trial",
    meaning: "試み，試行",
    sentence: "by (   ) and error",
    jp: "試行錯誤で",
    jpBlank: "(   )錯誤で",
    jpAnswer: "試行"
  },
  {
    wordNo: 443,
    word: "trial",
    meaning: "裁判",
    sentence: "stand (   ) for murder",
    jp: "殺人罪で裁判を受ける",
    jpBlank: "殺人罪で(   )を受ける",
    jpAnswer: "裁判"
  },
  {
    wordNo: 443,
    word: "trial",
    meaning: "試練",
    sentence: "go through a bitter (   )",
    jp: "苦しい試練を受ける",
    jpBlank: "苦しい(   )を受ける",
    jpAnswer: "試練"
  },
  {
    wordNo: 444,
    word: "dizzy",
    meaning: "めまいがして",
    sentence: "I felt (   ) when I stood up.",
    jp: "立ち上がったときにめまいがした。",
    jpBlank: "立ち上がったときにめまい(   )。",
    jpAnswer: "がした"
  },
],
445: [
  {
    wordNo: 445,
    word: "appetite",
    meaning: "食欲",
    sentence: "have a hearty (   )",
    jp: "食欲が旺盛だ",
    jpBlank: "(   )が旺盛だ",
    jpAnswer: "食欲"
  },
  {
    wordNo: 446,
    word: "starving",
    meaning: "飢える",
    sentence: "A lot of people are (   ) to death in Africa.",
    jp: "アフリカでは多くの人が餓死している。",
    jpBlank: "アフリカでは多くの人が(   )している。",
    jpAnswer: "餓死"
  },
  {
    wordNo: 446,
    word: "starving",
    meaning: "とてもお腹が空いている",
    sentence: "I'm (   ). What's for dinner?",
    jp: "お腹がぺこぺこだ。夕食は何？",
    jpBlank: "お腹が(   )だ。夕食は何？",
    jpAnswer: "ぺこぺこ"
  },
  {
    wordNo: 447,
    word: "mental",
    meaning: "精神の",
    sentence: "(   ) and physical health",
    jp: "心身の健康",
    jpBlank: "(   )",
    jpAnswer: "心身の健康"
  },
  {
    wordNo: 447,
    word: "mental",
    meaning: "知的な，頭脳に関わる",
    sentence: "(   ) labor",
    jp: "知的労働",
    jpBlank: "(   )",
    jpAnswer: "知的労働"
  },
  {
    wordNo: 448,
    word: "rest",
    meaning: "休憩",
    sentence: "take a (   )",
    jp: "（ちょっと）休憩する",
    jpBlank: "(   )する",
    jpAnswer: "休憩"
  },
  {
    wordNo: 448,
    word: "rest",
    meaning: "残り",
    sentence: "the (   ) of the day",
    jp: "その日の残りの時間",
    jpBlank: "その日の(   )の時間",
    jpAnswer: "残り"
  },
  {
    wordNo: 448,
    word: "rest",
    meaning: "休む",
    sentence: "You need to (   ) for a while.",
    jp: "君はしばらく休む必要がある。",
    jpBlank: "君はしばらく(   )必要がある。",
    jpAnswer: "休む"
  },
  {
    wordNo: 448,
    word: "rests",
    meaning: "〜次第だ",
    sentence: "Our success (   ) on his ability.",
    jp: "私たちの成功は彼の能力次第だ。",
    jpBlank: "私たちの成功は彼の能力(   )。",
    jpAnswer: "次第だ"
  },
  {
    wordNo: 448,
    word: "rest",
    meaning: "〜を休ませる",
    sentence: "(   ) my eyes",
    jp: "目を休ませる",
    jpBlank: "目を(   )",
    jpAnswer: "休ませる"
  },
  {
    wordNo: 449,
    word: "surgery",
    meaning: "手術",
    sentence: "have heart bypass (   )",
    jp: "心臓バイパス手術を受ける",
    jpBlank: "心臓バイパス(   )を受ける",
    jpAnswer: "手術"
  },
  {
    wordNo: 449,
    word: "surgery",
    meaning: "外科",
    sentence: "dental (   )",
    jp: "口腔外科",
    jpBlank: "口腔(   )",
    jpAnswer: "外科"
  },
  {
    wordNo: 450,
    word: "disease",
    meaning: "病気",
    sentence: "the risk of heart (   )",
    jp: "心臓病のリスク",
    jpBlank: "(   )ク",
    jpAnswer: "心臓病のリス"
  },
  {
    wordNo: 451,
    word: "stomachache",
    meaning: "腹痛",
    sentence: "drop out of the race because of a sudden (   )",
    jp: "突然の腹痛でレースを棄権する",
    jpBlank: "突然の(   )でレースを棄権する",
    jpAnswer: "腹痛"
  },
  {
    wordNo: 452,
    word: "symptoms",
    meaning: "症状",
    sentence: "show the (   ) of heatstroke",
    jp: "熱中症の症状が現れる",
    jpBlank: "熱中症の(   )が現れる",
    jpAnswer: "症状"
  },
  {
    wordNo: 452,
    word: "symptom",
    meaning: "兆候",
    sentence: "a (   ) of social inequality",
    jp: "社会的不平等の兆候",
    jpBlank: "社会的不平等の(   )",
    jpAnswer: "兆候"
  },
  {
    wordNo: 453,
    word: "cancer",
    meaning: "がん",
    sentence: "get (   )",
    jp: "がんになる",
    jpBlank: "(   )になる",
    jpAnswer: "がん"
  },
  {
    wordNo: 453,
    word: "Cancer",
    meaning: "かに座",
    sentence: "My star sign is (   ).",
    jp: "私の星座はかに座です。",
    jpBlank: "私の星座は(   )です。",
    jpAnswer: "かに座"
  },
  {
    wordNo: 454,
    word: "ambulances",
    meaning: "救急車",
    sentence: "fire engines and (   )",
    jp: "消防車と救急車",
    jpBlank: "消防車と(   )",
    jpAnswer: "救急車"
  },
  {
    wordNo: 455,
    word: "recover",
    meaning: "回復する",
    sentence: "(   ) from a heart attack",
    jp: "心臓発作から回復する",
    jpBlank: "心臓発作から(   )する",
    jpAnswer: "回復"
  },
  {
    wordNo: 455,
    word: "recover",
    meaning: "取り戻す",
    sentence: "(   ) the paintings stolen from the museum",
    jp: "美術館から盗まれた絵画を取り戻す",
    jpBlank: "美術館から盗まれた絵画を(   )",
    jpAnswer: "取り戻す"
  },
  {
    wordNo: 456,
    word: "sore",
    meaning: "痛い",
    sentence: "I have a (   ) throat from a cold.",
    jp: "かぜでのどが痛い。",
    jpBlank: "かぜでのどが(   )。",
    jpAnswer: "痛い"
  },
  {
    wordNo: 457,
    word: "swelled",
    meaning: "腫れる",
    sentence: "My eyelids (   ) up.",
    jp: "まぶたが腫れ上がった。",
    jpBlank: "まぶたが(   )上がった。",
    jpAnswer: "腫れ"
  },
  {
    wordNo: 457,
    word: "swelling",
    meaning: "膨らむ",
    sentence: "The balloon was (   ) more and more.",
    jp: "その風船はどんどん膨らんでいった。",
    jpBlank: "その風船はどんどん膨らん(   )。",
    jpAnswer: "でいった"
  },
  {
    wordNo: 458,
    word: "cough",
    meaning: "咳をする",
    sentence: "(   ) loudly",
    jp: "大きく咳をする",
    jpBlank: "大きく(   )する",
    jpAnswer: "咳を"
  },
  {
    wordNo: 458,
    word: "cough",
    meaning: "咳",
    sentence: "I have a bad (   ).",
    jp: "咳がひどい。",
    jpBlank: "(   )。",
    jpAnswer: "咳がひどい"
  },
  {
    wordNo: 459,
    word: "bleed",
    meaning: "出血する",
    sentence: "My nose has started to (   ).",
    jp: "鼻血が出てきた。",
    jpBlank: "鼻血が(   )。",
    jpAnswer: "出てきた"
  },
  {
    wordNo: 460,
    word: "faint",
    meaning: "かすかな",
    sentence: "(   ) pencil lines",
    jp: "かすかな鉛筆の跡",
    jpBlank: "(   )鉛筆の跡",
    jpAnswer: "かすかな"
  },
  {
    wordNo: 460,
    word: "faint",
    meaning: "気絶する",
    sentence: "(   ) in the extreme heat",
    jp: "猛暑の中で気絶する",
    jpBlank: "猛暑の中で(   )する",
    jpAnswer: "気絶"
  },
  {
    wordNo: 460,
    word: "faint",
    meaning: "気絶",
    sentence: "fall down in a (   )",
    jp: "気絶して倒れる",
    jpBlank: "(   )して倒れる",
    jpAnswer: "気絶"
  },
  {
    wordNo: 461,
    word: "exhausted",
    meaning: "〜を疲れ果てさせる",
    sentence: "I am (   ) from walking all day.",
    jp: "1日中歩いてくたくただ。",
    jpBlank: "1日中歩いて(   )。",
    jpAnswer: "くたくただ"
  },
  {
    wordNo: 461,
    word: "exhausted",
    meaning: "〜を使い果たす",
    sentence: "I have (   ) my savings.",
    jp: "貯金を使い果たした。",
    jpBlank: "貯金を使い果(   )。",
    jpAnswer: "たした"
  },
  {
    wordNo: 461,
    word: "exhaust",
    meaning: "排気ガス",
    sentence: "automobile (   ) fumes",
    jp: "自動車の排気ガス",
    jpBlank: "自動車の排気(   )",
    jpAnswer: "ガス"
  },
  {
    wordNo: 462,
    word: "cure",
    meaning: "〜を治療する",
    sentence: "(   ) you of your disease",
    jp: "あなたの病気を治す",
    jpBlank: "あなたの病気(   )",
    jpAnswer: "を治す"
  },
  {
    wordNo: 462,
    word: "cure",
    meaning: "治療法，治療薬",
    sentence: "a (   ) for a headache",
    jp: "頭痛の治療法",
    jpBlank: "頭痛の(   )",
    jpAnswer: "治療法"
  },
  {
    wordNo: 463,
    word: "disabled",
    meaning: "障がいのある",
    sentence: "He is physically (   ).",
    jp: "彼は身体に障がいがある。",
    jpBlank: "彼は身体に障(   )。",
    jpAnswer: "がいがある"
  },
  {
    wordNo: 463,
    word: "disabled",
    meaning: "障がい者（たち）",
    sentence: "a toilet for the (   )",
    jp: "障がい者用のトイレ",
    jpBlank: "(   )用のトイレ",
    jpAnswer: "障がい者"
  },
  {
    wordNo: 464,
    word: "stiff",
    meaning: "凝った，痛い",
    sentence: "Desk work gives me a (   ) back.",
    jp: "デスクワークで腰が痛い。",
    jpBlank: "デスクワークで腰が(   )。",
    jpAnswer: "痛い"
  },
  {
    wordNo: 464,
    word: "stiff",
    meaning: "堅苦しい",
    sentence: "behave in a (   ) manner",
    jp: "堅苦しい感じにふるまう",
    jpBlank: "(   )感じにふるまう",
    jpAnswer: "堅苦しい"
  },
  {
    wordNo: 465,
    word: "muscles",
    meaning: "筋肉",
    sentence: "develop my arm (   )",
    jp: "腕の筋肉をつける",
    jpBlank: "腕の(   )をつける",
    jpAnswer: "筋肉"
  },
  {
    wordNo: 466,
    word: "tongue",
    meaning: "舌",
    sentence: "stick my (   ) out at him",
    jp: "彼にあかんべえをする。",
    jpBlank: "彼に(   )をする。",
    jpAnswer: "あかんべえ"
  },
  {
    wordNo: 466,
    word: "tongue",
    meaning: "言葉遣い",
    sentence: "Watch your (   ).",
    jp: "言葉遣いに気をつけなさい。",
    jpBlank: "(   )に気をつけなさい。",
    jpAnswer: "言葉遣い"
  },
  {
    wordNo: 466,
    word: "tongue",
    meaning: "口（の悪さ）",
    sentence: "have a sharp (   )",
    jp: "口が悪い",
    jpBlank: "(   )",
    jpAnswer: "口が悪い"
  },
  {
    wordNo: 467,
    word: "sense",
    meaning: "感覚",
    sentence: "lose my (   ) of time",
    jp: "時間の感覚をなくす",
    jpBlank: "時間の(   )をなくす",
    jpAnswer: "感覚"
  },
  {
    wordNo: 467,
    word: "sense",
    meaning: "分別",
    sentence: "common (   )",
    jp: "常識",
    jpBlank: "(   )",
    jpAnswer: "常識"
  },
  {
    wordNo: 467,
    word: "sense",
    meaning: "意味",
    sentence: "in a broad [narrow] (   )",
    jp: "広い［狭い］意味では",
    jpBlank: "広い［狭い］(   )では",
    jpAnswer: "意味"
  },
  {
    wordNo: 467,
    word: "sense",
    meaning: "〜を感じる",
    sentence: "(   ) that something is wrong",
    jp: "何かがおかしいと感じる",
    jpBlank: "何かがおかしいと(   )",
    jpAnswer: "感じる"
  },
  {
    wordNo: 468,
    word: "sweat",
    meaning: "汗",
    sentence: "wipe the (   ) off my forehead",
    jp: "額の汗をぬぐう",
    jpBlank: "(   )う",
    jpAnswer: "額の汗をぬぐ"
  },
  {
    wordNo: 468,
    word: "sweat",
    meaning: "汗をかく",
    sentence: "(   ) a lot",
    jp: "汗だくになる（たくさん汗をかく）",
    jpBlank: "(   )",
    jpAnswer: "汗だくになる"
  },
  {
    wordNo: 469,
    word: "gender",
    meaning: "性別",
    sentence: "regardless of age or (   )",
    jp: "年齢，性別とは無関係に",
    jpBlank: "年齢，(   )とは無関係に",
    jpAnswer: "性別"
  },
  {
    wordNo: 470,
    word: "nationality",
    meaning: "国籍",
    sentence: "\"What is your (   )?\" \"I'm Japanese.\"",
    jp: "「あなたの国籍は？」「日本人です」",
    jpBlank: "「あなたの(   )は？」「日本人です」",
    jpAnswer: "国籍"
  },
  {
    wordNo: 471,
    word: "citizens",
    meaning: "市民",
    sentence: "the population of senior (   )",
    jp: "高齢者人口",
    jpBlank: "(   )",
    jpAnswer: "高齢者人口"
  },
  {
    wordNo: 471,
    word: "citizens",
    meaning: "国民",
    sentence: "British (   ) living in Japan",
    jp: "日本に住むイギリス人",
    jpBlank: "日本に住むイギリス(   )",
    jpAnswer: "人"
  },
  {
    wordNo: 472,
    word: "rights",
    meaning: "公民の",
    sentence: "civil (   )",
    jp: "公民権",
    jpBlank: "(   )権",
    jpAnswer: "公民"
  },
  {
    wordNo: 472,
    word: "War",
    meaning: "国内の",
    sentence: "the Civil (   )",
    jp: "アメリカ南北戦争",
    jpBlank: "アメリカ南北(   )",
    jpAnswer: "戦争"
  },
  {
    wordNo: 472,
    word: "civil",
    meaning: "礼儀正しい",
    sentence: "She is (   ) but not friendly.",
    jp: "彼女は礼儀正しいが友好的ではない。",
    jpBlank: "彼女は(   )が友好的ではない。",
    jpAnswer: "礼儀正しい"
  },
  {
    wordNo: 473,
    word: "discrimination",
    meaning: "人種の",
    sentence: "racial (   )",
    jp: "人種差別",
    jpBlank: "(   )差別",
    jpAnswer: "人種"
  },
  {
    wordNo: 474,
    word: "rural",
    meaning: "田舎の",
    sentence: "show an interest in a (   ) lifestyle",
    jp: "田舎暮らしに興味を示す",
    jpBlank: "(   )暮らしに興味を示す",
    jpAnswer: "田舎"
  },
],
475: [
  {
    wordNo: 475,
    word: "flight",
    meaning: "国内の",
    sentence: "a domestic (   )",
    jp: "国内線",
    jpBlank: "(   )線",
    jpAnswer: "国内"
  },
  {
    wordNo: 475,
    word: "violence",
    meaning: "家庭内の",
    sentence: "domestic (   ) [DV]",
    jp: "家庭内暴力",
    jpBlank: "(   )暴力",
    jpAnswer: "家庭内"
  },
  {
    wordNo: 476,
    word: "global",
    meaning: "全世界的な",
    sentence: "(   ) climate change",
    jp: "世界的な気候変動",
    jpBlank: "世界的な気候(   )",
    jpAnswer: "変動"
  },
  {
    wordNo: 477,
    word: "suburbs",
    meaning: "郊外",
    sentence: "live in the (   ) of Yokohama City",
    jp: "横浜市の郊外に住む",
    jpBlank: "横浜市の(   )に住む",
    jpAnswer: "郊外"
  },
  {
    wordNo: 478,
    word: "border",
    meaning: "国境",
    sentence: "cross the (   )",
    jp: "国境を越える",
    jpBlank: "(   )を越える",
    jpAnswer: "国境"
  },
  {
    wordNo: 478,
    word: "bordered",
    meaning: "〜を縁取る",
    sentence: "The street is (   ) by trees.",
    jp: "その通りは両側に木が植えてある。",
    jpBlank: "その通りは両側に木が(   )。",
    jpAnswer: "植えてある"
  },
  {
    wordNo: 479,
    word: "burden",
    meaning: "重荷，負担",
    sentence: "take on a financial (   )",
    jp: "財政的な負担を負う",
    jpBlank: "財政的な(   )を負う",
    jpAnswer: "負担"
  },
  {
    wordNo: 480,
    word: "impact",
    meaning: "影響",
    sentence: "have a negative (   ) on the tourist industry",
    jp: "観光業にマイナスの影響を与える",
    jpBlank: "観光業にマイナスの(   )を与える",
    jpAnswer: "影響"
  },
  {
    wordNo: 480,
    word: "impact",
    meaning: "衝撃",
    sentence: "the (   ) of the explosion",
    jp: "爆発の衝撃",
    jpBlank: "爆発の(   )",
    jpAnswer: "衝撃"
  },
  {
    wordNo: 480,
    word: "impacted",
    meaning: "影響を与える",
    sentence: "This strategy (   ) on sales.",
    jp: "この戦略が売り上げに影響を与えた。",
    jpBlank: "この戦略が売り上げに(   )た。",
    jpAnswer: "影響を与え"
  },
  {
    wordNo: 481,
    word: "status",
    meaning: "地位",
    sentence: "women's social (   )",
    jp: "女性の社会的地位",
    jpBlank: "女性の社会的(   )",
    jpAnswer: "地位"
  },
  {
    wordNo: 481,
    word: "status",
    meaning: "状況",
    sentence: "check the shipment (   )",
    jp: "配送状況を確認する",
    jpBlank: "配送(   )を確認する",
    jpAnswer: "状況"
  },
  {
    wordNo: 482,
    word: "equal",
    meaning: "等しい",
    sentence: "All human beings are created (   ).",
    jp: "すべての人は平等に作られている。",
    jpBlank: "すべての人は(   )に作られている。",
    jpAnswer: "平等"
  },
  {
    wordNo: 482,
    word: "equals",
    meaning: "〜に等しい",
    sentence: "Two plus three (   ) five.",
    jp: "2 + 3 = 5",
    jpBlank: "2 + 3 (   ) 5",
    jpAnswer: "="
  },
  {
    wordNo: 483,
    word: "relationships",
    meaning: "関係",
    sentence: "have good (   ) with other people",
    jp: "他者との良好な人間関係をもつ",
    jpBlank: "他者との良好な人間(   )をもつ",
    jpAnswer: "関係"
  },
  {
    wordNo: 483,
    word: "relationship",
    meaning: "親密な関係",
    sentence: "Are you in a (   ) right now?",
    jp: "今付き合っている人はいるの。",
    jpBlank: "今(   )人はいるの。",
    jpAnswer: "付き合っている"
  },
  {
    wordNo: 484,
    word: "reputation",
    meaning: "評判",
    sentence: "have a good (   ) for its beautiful night view",
    jp: "夜景がきれいなことで評判がよい",
    jpBlank: "夜景がきれいなことで(   )がよい",
    jpAnswer: "評判"
  },
  {
    wordNo: 485,
    word: "trend",
    meaning: "風潮",
    sentence: "a (   ) toward hiring cheap labor",
    jp: "安価な労働者を雇う風潮",
    jpBlank: "安価な労働者を雇う(   )",
    jpAnswer: "風潮"
  },
  {
    wordNo: 485,
    word: "trend",
    meaning: "流行",
    sentence: "the latest (   ) in clothes",
    jp: "服の最新の流行",
    jpBlank: "服の最新の(   )",
    jpAnswer: "流行"
  },
  {
    wordNo: 486,
    word: "services",
    meaning: "事業",
    sentence: "public (   )",
    jp: "公共事業",
    jpBlank: "公共(   )",
    jpAnswer: "事業"
  },
  {
    wordNo: 486,
    word: "service",
    meaning: "事業",
    sentence: "water [gas] (   )",
    jp: "水道［ガス］事業",
    jpBlank: "水道［ガス］(   )",
    jpAnswer: "事業"
  },
  {
    wordNo: 486,
    word: "service",
    meaning: "便",
    sentence: "There is no bus (   ) to that town.",
    jp: "その町へのバスの便はない。",
    jpBlank: "(   )スの便はない。",
    jpAnswer: "その町へのバ"
  },
  {
    wordNo: 486,
    word: "service",
    meaning: "サービス，接客",
    sentence: "This restaurant has a (   ) for good service.",
    jp: "このレストランはサービスがよいと評判だ。",
    jpBlank: "このレストランは(   )がよいと評判だ。",
    jpAnswer: "サービス"
  },
  {
    wordNo: 487,
    word: "religion",
    meaning: "宗教",
    sentence: "have a (   )",
    jp: "宗教を信じている",
    jpBlank: "(   )を信じている",
    jpAnswer: "宗教"
  },
  {
    wordNo: 488,
    word: "moral",
    meaning: "道徳的な",
    sentence: "a (   ) responsibility",
    jp: "道徳的責任",
    jpBlank: "(   )的責任",
    jpAnswer: "道徳"
  },
  {
    wordNo: 488,
    word: "morals",
    meaning: "教訓",
    sentence: "the (   ) of Aesop's Fables",
    jp: "イソップ物語の教訓",
    jpBlank: "イソップ物語の(   )",
    jpAnswer: "教訓"
  },
  {
    wordNo: 488,
    word: "morals",
    meaning: "道徳，風紀",
    sentence: "public (   )",
    jp: "風紀",
    jpBlank: "(   )",
    jpAnswer: "風紀"
  },
  {
    wordNo: 489,
    word: "standards",
    meaning: "基準",
    sentence: "meet our safety (   )",
    jp: "私たちの安全基準を満たす",
    jpBlank: "私たちの安全(   )を満たす",
    jpAnswer: "基準"
  },
  {
    wordNo: 489,
    word: "standard",
    meaning: "標準の",
    sentence: "a (   ) size",
    jp: "標準サイズ",
    jpBlank: "(   )サイズ",
    jpAnswer: "標準"
  },
  {
    wordNo: 490,
    word: "prosperity",
    meaning: "繁栄",
    sentence: "bring (   ) to our country",
    jp: "我が国に繁栄をもたらす",
    jpBlank: "我が国に(   )をもたらす",
    jpAnswer: "繁栄"
  },
  {
    wordNo: 491,
    word: "crisis",
    meaning: "危機",
    sentence: "face a serious economic (   )",
    jp: "深刻な経済危機に直面する",
    jpBlank: "深刻な経済(   )に直面する",
    jpAnswer: "危機"
  },
  {
    wordNo: 492,
    word: "prejudice",
    meaning: "偏見",
    sentence: "end racial (   )",
    jp: "人種的偏見を終わらせる",
    jpBlank: "人種的(   )を終わらせる",
    jpAnswer: "偏見"
  },
  {
    wordNo: 492,
    word: "prejudiced",
    meaning: "〜に偏見をもたせる",
    sentence: "Don't be (   ) against Muslims.",
    jp: "イスラム教徒に対して偏見をもつな。",
    jpBlank: "イスラム教徒に対して偏見(   )。",
    jpAnswer: "をもつな"
  },
  {
    wordNo: 493,
    word: "discrimination",
    meaning: "差別",
    sentence: "fight racial (   )",
    jp: "人種差別と戦う",
    jpBlank: "人種(   )と戦う",
    jpAnswer: "差別"
  },
  {
    wordNo: 493,
    word: "Discrimination",
    meaning: "識別",
    sentence: "(   ) between L sounds and R sounds is difficult.",
    jp: "LとRの音の識別は難しい。",
    jpBlank: "LとRの音の(   )は難しい。",
    jpAnswer: "識別"
  },
  {
    wordNo: 494,
    word: "charity",
    meaning: "慈善（活動）",
    sentence: "do a lot of work for (   )",
    jp: "多くの慈善活動を行う",
    jpBlank: "多くの(   )活動を行う",
    jpAnswer: "慈善"
  },
  {
    wordNo: 494,
    word: "charities",
    meaning: "慈善団体",
    sentence: "give money to several (different) (   )",
    jp: "いくつかの慈善団体に金を寄付する",
    jpBlank: "いくつかの(   )に金を寄付する",
    jpAnswer: "慈善団体"
  },
  {
    wordNo: 494,
    word: "charity",
    meaning: "チャリティーの",
    sentence: "hold a (   ) concert",
    jp: "チャリティーコンサートを開く",
    jpBlank: "(   )コンサートを開く",
    jpAnswer: "チャリティー"
  },
  {
    wordNo: 495,
    word: "benefits",
    meaning: "恩恵",
    sentence: "Tourism has brought great (   ) to this village.",
    jp: "観光がこの村に多大な恩恵をもたらした。",
    jpBlank: "観光がこの村に多大な(   )をもたらした。",
    jpAnswer: "恩恵"
  },
  {
    wordNo: 495,
    word: "benefits",
    meaning: "手当",
    sentence: "salary and other (   )",
    jp: "給与とほかの諸手当",
    jpBlank: "給与とほかの諸(   )",
    jpAnswer: "手当"
  },
  {
    wordNo: 495,
    word: "benefit",
    meaning: "恩恵を得る",
    sentence: "(   ) from the new treatment",
    jp: "新しい治療法から恩恵を受ける",
    jpBlank: "新しい治療法から恩恵を受(   )",
    jpAnswer: "ける"
  },
  {
    wordNo: 495,
    word: "benefit",
    meaning: "恩恵を与える",
    sentence: "The fresh air will (   ) you.",
    jp: "新鮮な空気はあなたによいでしょう。",
    jpBlank: "新鮮な空気はあなたに(   )でしょう。",
    jpAnswer: "よい"
  },
  {
    wordNo: 496,
    word: "welfare",
    meaning: "福祉",
    sentence: "work for social (   )",
    jp: "社会福祉のために働く",
    jpBlank: "社会(   )のために働く",
    jpAnswer: "福祉"
  },
  {
    wordNo: 496,
    word: "welfare",
    meaning: "幸福",
    sentence: "Parents are always concerned about their children's (   ).",
    jp: "親は常に子どもの幸福を気に掛けている。",
    jpBlank: "親は常に子どもの(   )を気に掛けている。",
    jpAnswer: "幸福"
  },
  {
    wordNo: 496,
    word: "welfare",
    meaning: "生活保護",
    sentence: "(   ) benefits",
    jp: "生活保護受給金",
    jpBlank: "(   )受給金",
    jpAnswer: "生活保護"
  },
  {
    wordNo: 497,
    word: "community",
    meaning: "社会，共同体",
    sentence: "the Polish (   ) in the U.K.",
    jp: "イギリスのポーランド人社会",
    jpBlank: "イギリスのポーランド人(   )",
    jpAnswer: "社会"
  },
  {
    wordNo: 498,
    word: "individual",
    meaning: "個人",
    sentence: "each (   )'s right to privacy",
    jp: "各個人のプライバシーの権利",
    jpBlank: "各(   )のプライバシーの権利",
    jpAnswer: "個人"
  },
  {
    wordNo: 498,
    word: "individual",
    meaning: "個人の",
    sentence: "(   ) action",
    jp: "個人行動",
    jpBlank: "(   )行動",
    jpAnswer: "個人"
  },
  {
    wordNo: 499,
    word: "official",
    meaning: "役人",
    sentence: "a government (   )",
    jp: "政府の役人",
    jpBlank: "政府の(   )",
    jpAnswer: "役人"
  },
  {
    wordNo: 499,
    word: "official",
    meaning: "公式の",
    sentence: "an (   ) language",
    jp: "公用語",
    jpBlank: "(   )",
    jpAnswer: "公用語"
  },
  {
    wordNo: 500,
    word: "immigrants",
    meaning: "移民",
    sentence: "(   ) from India",
    jp: "インドからの移民",
    jpBlank: "インドからの(   )",
    jpAnswer: "移民"
  },
  {
    wordNo: 501,
    word: "volunteer",
    meaning: "ボランティア",
    sentence: "take part in (   ) activities",
    jp: "ボランティア活動に参加する",
    jpBlank: "(   )活動に参加する",
    jpAnswer: "ボランティア"
  },
  {
    wordNo: 501,
    word: "volunteer",
    meaning: "自発的に申し出る",
    sentence: "(   ) to do the dishes",
    jp: "皿洗いを自発的に申し出る",
    jpBlank: "皿洗いを(   )",
    jpAnswer: "自発的に申し出る"
  },
  {
    wordNo: 502,
    word: "interact",
    meaning: "交流する",
    sentence: "(   ) well with other students",
    jp: "ほかの生徒とうまく付き合う",
    jpBlank: "ほかの生徒とうまく(   )",
    jpAnswer: "付き合う"
  },
  {
    wordNo: 503,
    word: "contribute",
    meaning: "貢献する",
    sentence: "(   ) to world peace",
    jp: "世界平和に貢献する",
    jpBlank: "世界平和に(   )する",
    jpAnswer: "貢献"
  },
  {
    wordNo: 503,
    word: "contribute",
    meaning: "一因となる",
    sentence: "(   ) to global warming",
    jp: "地球温暖化の一因である",
    jpBlank: "地球温暖化の(   )",
    jpAnswer: "一因である"
  },
  {
    wordNo: 503,
    word: "contribute",
    meaning: "寄付する",
    sentence: "(   ) a great deal of money to the church",
    jp: "教会に多額の寄付をする",
    jpBlank: "教会に多額の(   )をする",
    jpAnswer: "寄付"
  },
  {
    wordNo: 504,
    word: "abolish",
    meaning: "〜を廃止する",
    sentence: "(   ) capital punishment",
    jp: "死刑制度を廃止する",
    jpBlank: "死刑制度を(   )する",
    jpAnswer: "廃止"
  },
],
505: [
  {
    wordNo: 505,
    word: "impose",
    meaning: "〜を課す",
    sentence: "The government should (   ) a total ban on cigarette advertising.",
    jp: "政府はタバコの広告を全面的に禁止すべきだ。",
    jpBlank: "政府はタバコの広告を全面的に(   )すべきだ。",
    jpAnswer: "禁止"
  },
  {
    wordNo: 506,
    word: "access",
    meaning: "利用する権利",
    sentence: "have free (   ) to a computer",
    jp: "コンピュータを自由に利用できる。",
    jpBlank: "コンピュータを自由に利用(   )。",
    jpAnswer: "できる"
  },
  {
    wordNo: 506,
    word: "access",
    meaning: "接近方法",
    sentence: "(   ) to the restrooms",
    jp: "トイレへの行き方",
    jpBlank: "トイレへの行(   )",
    jpAnswer: "き方"
  },
  {
    wordNo: 507,
    word: "duties",
    meaning: "義務",
    sentence: "fulfill my (   )",
    jp: "義務を果たす",
    jpBlank: "(   )を果たす",
    jpAnswer: "義務"
  },
  {
    wordNo: 507,
    word: "duty",
    meaning: "関税",
    sentence: "a 6 percent (   ) on imports",
    jp: "輸入品に対する6%の関税",
    jpBlank: "輸入品に対する6%の(   )",
    jpAnswer: "関税"
  },
  {
    wordNo: 508,
    word: "responsible",
    meaning: "責任がある",
    sentence: "I am (   ) for what happens at school.",
    jp: "私は学校で起きることに対して責任がある。",
    jpBlank: "私は学校で起きることに対して(   )。",
    jpAnswer: "責任がある"
  },
  {
    wordNo: 508,
    word: "responsible",
    meaning: "原因となっている",
    sentence: "The typhoon was (   ) for over 100 deaths.",
    jp: "その台風のため100人以上の人が犠牲になった。",
    jpBlank: "その台風のため100人以上の人が(   )。",
    jpAnswer: "犠牲になった"
  },
  {
    wordNo: 509,
    word: "policy",
    meaning: "政策",
    sentence: "China's one-child (   )",
    jp: "中国の一人っ子政策",
    jpBlank: "中国の一人っ子(   )",
    jpAnswer: "政策"
  },
  {
    wordNo: 509,
    word: "policy",
    meaning: "方針，ポリシー",
    sentence: "It is my (   ) not to say bad things about others.",
    jp: "他人の悪口を言わないというのが私のポリシーだ。",
    jpBlank: "他人の悪口を言わないというのが私の(   )だ。",
    jpAnswer: "ポリシー"
  },
  {
    wordNo: 509,
    word: "policy",
    meaning: "保険契約",
    sentence: "renew an insurance (   )",
    jp: "保険契約を更新する",
    jpBlank: "(   )を更新する",
    jpAnswer: "保険契約"
  },
  {
    wordNo: 510,
    word: "elected",
    meaning: "〜を選挙で選ぶ",
    sentence: "I was (   ) a class representative.",
    jp: "私はクラス委員に選ばれた。",
    jpBlank: "(   )員に選ばれた。",
    jpAnswer: "私はクラス委"
  },
  {
    wordNo: 511,
    word: "industry",
    meaning: "業界",
    sentence: "commerce and (   )",
    jp: "商工業",
    jpBlank: "(   )",
    jpAnswer: "商工業"
  },
  {
    wordNo: 511,
    word: "industry",
    meaning: "産業",
    sentence: "the fashion (   )",
    jp: "ファッション業界",
    jpBlank: "ファッション(   )",
    jpAnswer: "業界"
  },
  {
    wordNo: 511,
    word: "Industry",
    meaning: "勤勉",
    sentence: "(   ) is the mother of success.",
    jp: "勤勉は成功の母だ。",
    jpBlank: "(   )は成功の母だ。",
    jpAnswer: "勤勉"
  },
  {
    wordNo: 512,
    word: "income",
    meaning: "収入",
    sentence: "my monthly (   )",
    jp: "私の月収",
    jpBlank: "(   )",
    jpAnswer: "私の月収"
  },
  {
    wordNo: 513,
    word: "profit",
    meaning: "利益，利潤",
    sentence: "The restaurant's daily (   ) is about $1,000.",
    jp: "そのレストランの1日の利益はおよそ1,000ドルだ。",
    jpBlank: "そのレストランの1日の(   )はおよそ1,000ドルだ。",
    jpAnswer: "利益"
  },
  {
    wordNo: 514,
    word: "taxes",
    meaning: "税金",
    sentence: "pay (   ) on my income",
    jp: "収入に課された税金を払う",
    jpBlank: "収入に課された(   )を払う",
    jpAnswer: "税金"
  },
  {
    wordNo: 515,
    word: "expenses",
    meaning: "費用",
    sentence: "This money will cover all your (   ).",
    jp: "このお金があなたのすべての費用をまかなうだろう。",
    jpBlank: "このお金があなたのすべての(   )をまかなうだろう。",
    jpAnswer: "費用"
  },
  {
    wordNo: 515,
    word: "expense",
    meaning: "犠牲",
    sentence: "at the (   ) of my health",
    jp: "健康を犠牲にして",
    jpBlank: "健康を(   )にして",
    jpAnswer: "犠牲"
  },
  {
    wordNo: 516,
    word: "debt",
    meaning: "借金",
    sentence: "pay back a (   ) of 100 dollars",
    jp: "100ドルの借金を返す",
    jpBlank: "100ドルの(   )を返す",
    jpAnswer: "借金"
  },
  {
    wordNo: 517,
    word: "deposit",
    meaning: "預金",
    sentence: "have a large (   ) in the bank",
    jp: "銀行に多額の預金がある",
    jpBlank: "銀行に多額の(   )がある",
    jpAnswer: "預金"
  },
  {
    wordNo: 517,
    word: "deposit",
    meaning: "手付金",
    sentence: "pay a (   ) on a house",
    jp: "家の手付金を払う",
    jpBlank: "家の(   )を払う",
    jpAnswer: "手付金"
  },
  {
    wordNo: 517,
    word: "deposit",
    meaning: "堆積物",
    sentence: "a rich (   ) of oil",
    jp: "豊富な石油の埋蔵量",
    jpBlank: "豊富な石油の(   )",
    jpAnswer: "埋蔵量"
  },
  {
    wordNo: 517,
    word: "deposit",
    meaning: "預ける",
    sentence: "(   ) ¥10,000 in a bank",
    jp: "銀行口座に10,000円を預金する",
    jpBlank: "(   )10,000円を預金する",
    jpAnswer: "銀行口座に"
  },
  {
    wordNo: 518,
    word: "charge",
    meaning: "料金",
    sentence: "Goods are delivered free of (   ).",
    jp: "商品は無料でお届けします。",
    jpBlank: "(   )お届けします。",
    jpAnswer: "商品は無料で"
  },
  {
    wordNo: 518,
    word: "charge",
    meaning: "責任",
    sentence: "Who is in (   ) of this shop?",
    jp: "この店の責任者はどなたですか。",
    jpBlank: "この店の(   )者はどなたですか。",
    jpAnswer: "責任"
  },
  {
    wordNo: 518,
    word: "charge",
    meaning: "非難，告発",
    sentence: "a (   ) against the company",
    jp: "会社に対する告発",
    jpBlank: "会社に対する(   )",
    jpAnswer: "告発"
  },
  {
    wordNo: 518,
    word: "charge",
    meaning: "〜を請求する",
    sentence: "(   ) 5,000 yen for a half-hour class",
    jp: "30分の授業で5,000円を請求する",
    jpBlank: "30分の授業で5,000円を(   )",
    jpAnswer: "請求する"
  },
  {
    wordNo: 518,
    word: "charged",
    meaning: "告訴する",
    sentence: "be (   ) with accepting bribes",
    jp: "賄賂を受け取ったとして告発される",
    jpBlank: "賄賂を受け取ったとして(   )される",
    jpAnswer: "告発"
  },
  {
    wordNo: 518,
    word: "charge",
    meaning: "充電する",
    sentence: "(   ) my smartphone",
    jp: "スマートフォンを充電する",
    jpBlank: "スマートフォンを(   )する",
    jpAnswer: "充電"
  },
  {
    wordNo: 519,
    word: "wage",
    meaning: "賃金",
    sentence: "get a daily (   ) of $100",
    jp: "日給100ドルを得る",
    jpBlank: "(   )100ドルを得る",
    jpAnswer: "日給"
  },
  {
    wordNo: 520,
    word: "recession",
    meaning: "不況",
    sentence: "close down my inn because of the continuing (   )",
    jp: "長引く不況のため旅館を閉める。",
    jpBlank: "長引く(   )のため旅館を閉める。",
    jpAnswer: "不況"
  },
  {
    wordNo: 521,
    word: "consume",
    meaning: "〜を消費する",
    sentence: "(   ) a large amount of electricity",
    jp: "大量の電気を消費する。",
    jpBlank: "大量の電気を(   )する。",
    jpAnswer: "消費"
  },
  {
    wordNo: 522,
    word: "waste",
    meaning: "〜を浪費する",
    sentence: "Don't (   ) so much time on video games.",
    jp: "テレビゲームにそんなに多くの時間を費やしてはいけません。",
    jpBlank: "テレビゲームにそんなに多くの時間を(   )はいけません。",
    jpAnswer: "費やして"
  },
  {
    wordNo: 522,
    word: "waste",
    meaning: "無駄",
    sentence: "It is a (   ) of time and money.",
    jp: "それは時間と金の無駄だ。",
    jpBlank: "それは時間と金の(   )だ。",
    jpAnswer: "無駄"
  },
  {
    wordNo: 522,
    word: "waste",
    meaning: "廃棄物",
    sentence: "industrial (   )",
    jp: "産業廃棄物",
    jpBlank: "産業(   )",
    jpAnswer: "廃棄物"
  },
  {
    wordNo: 523,
    word: "invest",
    meaning: "投資する",
    sentence: "(   ) one million yen in stocks",
    jp: "株に100万円を投資する。",
    jpBlank: "株に100万円を(   )。",
    jpAnswer: "投資する"
  },
  {
    wordNo: 523,
    word: "invested",
    meaning: "与える",
    sentence: "He is (   ) with absolute authority.",
    jp: "彼に絶対的権限が与えられている。",
    jpBlank: "彼に絶対的権限が(   )られている。",
    jpAnswer: "与え"
  },
  {
    wordNo: 524,
    word: "import",
    meaning: "〜を輸入する",
    sentence: "(   ) beef from the U.S.",
    jp: "アメリカから牛肉を輸入する。",
    jpBlank: "アメリカから牛肉を(   )。",
    jpAnswer: "輸入する"
  },
  {
    wordNo: 524,
    word: "Imports",
    meaning: "輸入",
    sentence: "(   ) slightly exceeded exports.",
    jp: "輸入が輸出を少し上回った。",
    jpBlank: "(   )が輸出を少し上回った。",
    jpAnswer: "輸入"
  },
],
525: [
  {
    wordNo: 525,
    word: "financial",
    meaning: "財政的な",
    sentence: "receive (   ) support",
    jp: "経済的支援を受ける。",
    jpBlank: "(   )支援を受ける。",
    jpAnswer: "経済的"
  },
  {
    wordNo: 526,
    word: "hire",
    meaning: "〜を雇う",
    sentence: "(   ) movers to do all the work",
    jp: "引越し業者を雇って全部任せる。",
    jpBlank: "引越し業者を雇って全部任(   )。",
    jpAnswer: "せる"
  },
  {
    wordNo: 526,
    word: "hire",
    meaning: "借りる",
    sentence: "(   ) a car",
    jp: "車を借りる。",
    jpBlank: "車を(   )。",
    jpAnswer: "借りる"
  },
  {
    wordNo: 527,
    word: "employ",
    meaning: "雇う",
    sentence: "(   ) minors",
    jp: "未成年者を雇う。",
    jpBlank: "未成年者を(   )。",
    jpAnswer: "雇う"
  },
  {
    wordNo: 527,
    word: "employ",
    meaning: "用いる",
    sentence: "(   ) new technology",
    jp: "新しい技術を用いる。",
    jpBlank: "新しい技術を(   )。",
    jpAnswer: "用いる"
  },
  {
    wordNo: 528,
    word: "resign",
    meaning: "辞職する",
    sentence: "(   ) as a coach",
    jp: "コーチを辞める。",
    jpBlank: "(   )る。",
    jpAnswer: "コーチを辞め"
  },
  {
    wordNo: 528,
    word: "resign",
    meaning: "辞める",
    sentence: "(   ) my post",
    jp: "ポストを辞める。",
    jpBlank: "ポストを(   )。",
    jpAnswer: "辞める"
  },
  {
    wordNo: 529,
    word: "qualify",
    meaning: "資格がある",
    sentence: "(   ) for bank loans",
    jp: "銀行ローンを受ける資格がある。",
    jpBlank: "銀行ローンを受ける(   )。",
    jpAnswer: "資格がある"
  },
  {
    wordNo: 529,
    word: "qualify",
    meaning: "資格を得る",
    sentence: "(   ) as a teacher",
    jp: "教師としての資格を得る。",
    jpBlank: "教師としての(   )。",
    jpAnswer: "資格を得る"
  },
  {
    wordNo: 529,
    word: "qualifying",
    meaning: "資格を与える",
    sentence: "World Cup (   ) game",
    jp: "ワールドカップの予選。",
    jpBlank: "ワールドカップの(   )。",
    jpAnswer: "予選"
  },
  {
    wordNo: 530,
    word: "assign",
    meaning: "割り当てる",
    sentence: "(   ) that important job to him",
    jp: "彼にその大切な仕事を割り当てる。",
    jpBlank: "彼にその大切な仕事を(   )。",
    jpAnswer: "割り当てる"
  },
  {
    wordNo: 530,
    word: "assigned",
    meaning: "配属する",
    sentence: "be (   ) to the head office",
    jp: "本社に配属される。",
    jpBlank: "本社に(   )される。",
    jpAnswer: "配属"
  },
  {
    wordNo: 531,
    word: "occupation",
    meaning: "職業",
    sentence: "my name, address, and (   )",
    jp: "氏名，住所，職業。",
    jpBlank: "氏名，住所，(   )。",
    jpAnswer: "職業"
  },
  {
    wordNo: 531,
    word: "occupation",
    meaning: "占領",
    sentence: "be under (   )",
    jp: "占領下にある。",
    jpBlank: "(   )下にある。",
    jpAnswer: "占領"
  },
  {
    wordNo: 532,
    word: "career",
    meaning: "職業",
    sentence: "start a (   ) as a doctor",
    jp: "医者として働き始める。",
    jpBlank: "医者として(   )始める。",
    jpAnswer: "働き"
  },
  {
    wordNo: 532,
    word: "career",
    meaning: "経歴",
    sentence: "during her long (   ) as a teacher",
    jp: "彼女の長い教員生活の間に。",
    jpBlank: "彼女の長い(   )の間に。",
    jpAnswer: "教員生活"
  },
  {
    wordNo: 533,
    word: "profession",
    meaning: "職業",
    sentence: "enter the legal (   )",
    jp: "法律関係の仕事に就く。",
    jpBlank: "法律関係の仕事に(   )。",
    jpAnswer: "就く"
  },
  {
    wordNo: 533,
    word: "profession",
    meaning: "同業者集団",
    sentence: "the medical (   )",
    jp: "医療従事者。",
    jpBlank: "(   )。",
    jpAnswer: "医療従事者"
  },
  {
    wordNo: 534,
    word: "Unemployment",
    meaning: "失業",
    sentence: "(   ) has fallen.",
    jp: "失業率が下がった。",
    jpBlank: "(   )率が下がった。",
    jpAnswer: "失業"
  },
  {
    wordNo: 535,
    word: "documents",
    meaning: "書類，資料",
    sentence: "look over the (   )",
    jp: "資料に目を通す。",
    jpBlank: "(   )に目を通す。",
    jpAnswer: "資料"
  },
  {
    wordNo: 535,
    word: "document",
    meaning: "記録する",
    sentence: "(   ) how this event happened",
    jp: "この出来事がどのように起きたかを記録する。",
    jpBlank: "この出来事がどのように起きたかを(   )。",
    jpAnswer: "記録する"
  },
  {
    wordNo: 536,
    word: "department",
    meaning: "部門，売り場",
    sentence: "the toy (   )",
    jp: "おもちゃ売り場。",
    jpBlank: "おもちゃ(   )。",
    jpAnswer: "売り場"
  },
  {
    wordNo: 536,
    word: "department",
    meaning: "学科",
    sentence: "the English (   )",
    jp: "英語学科。",
    jpBlank: "英語(   )。",
    jpAnswer: "学科"
  },
  {
    wordNo: 536,
    word: "Department",
    meaning: "省",
    sentence: "the U.S. State (   )",
    jp: "米国国務省。",
    jpBlank: "(   )。",
    jpAnswer: "米国国務省"
  },
  {
    wordNo: 537,
    word: "branch",
    meaning: "支店",
    sentence: "a (   ) of this bank",
    jp: "この銀行の支店。",
    jpBlank: "この銀行の(   )。",
    jpAnswer: "支店"
  },
  {
    wordNo: 537,
    word: "branch",
    meaning: "分野",
    sentence: "a (   ) of biology",
    jp: "生物学の一部門。",
    jpBlank: "(   )門。",
    jpAnswer: "生物学の一部"
  },
  {
    wordNo: 537,
    word: "branches",
    meaning: "枝",
    sentence: "Don't break (   ) off the trees.",
    jp: "木の枝を折ってはいけません。",
    jpBlank: "(   )てはいけません。",
    jpAnswer: "木の枝を折っ"
  },
  {
    wordNo: 538,
    word: "retail",
    meaning: "小売り",
    sentence: "recommended (   ) price",
    jp: "希望小売価格。",
    jpBlank: "(   )。",
    jpAnswer: "希望小売価格"
  },
  {
    wordNo: 538,
    word: "retails",
    meaning: "小売りされている",
    sentence: "The vinegar (   ) at 1,000 yen a bottle.",
    jp: "その酢の小売価格は1本千円だ。",
    jpBlank: "その酢の小売(   )1本千円だ。",
    jpAnswer: "価格は"
  },
  {
    wordNo: 539,
    word: "colleague",
    meaning: "同僚",
    sentence: "a (   ) from work",
    jp: "会社の同僚。",
    jpBlank: "会社の(   )。",
    jpAnswer: "同僚"
  },
  {
    wordNo: 540,
    word: "system",
    meaning: "制度",
    sentence: "the tax (   )",
    jp: "税制。",
    jpBlank: "(   )。",
    jpAnswer: "税制"
  },
  {
    wordNo: 540,
    word: "system",
    meaning: "体系",
    sentence: "the solar (   )",
    jp: "太陽系。",
    jpBlank: "(   )。",
    jpAnswer: "太陽系"
  },
  {
    wordNo: 541,
    word: "structure",
    meaning: "構造，建築物",
    sentence: "a wooden (   )",
    jp: "木造建築物。",
    jpBlank: "木造(   )。",
    jpAnswer: "建築物"
  },
  {
    wordNo: 542,
    word: "architecture",
    meaning: "建築様式",
    sentence: "study (   )",
    jp: "建築様式を勉強する。",
    jpBlank: "(   )を勉強する。",
    jpAnswer: "建築様式"
  },
  {
    wordNo: 543,
    word: "construction",
    meaning: "建設",
    sentence: "The new city hall is under (   ).",
    jp: "新しい市役所が建設中です。",
    jpBlank: "新しい市役所が(   )中です。",
    jpAnswer: "建設"
  },
  {
    wordNo: 544,
    word: "functions",
    meaning: "機能",
    sentence: "bodily (   )",
    jp: "身体の機能。",
    jpBlank: "身体の(   )。",
    jpAnswer: "機能"
  },
  {
    wordNo: 544,
    word: "functioning",
    meaning: "機能する",
    sentence: "His heart is (   ) normally.",
    jp: "彼の心臓は正常に機能している。",
    jpBlank: "彼の心臓は正常に(   )している。",
    jpAnswer: "機能"
  },
],
545: [
  {
    wordNo: 545,
    word: "surface",
    meaning: "表面",
    sentence: "the (   ) of the moon",
    jp: "月面。",
    jpBlank: "(   )。",
    jpAnswer: "月面"
  },
  {
    wordNo: 545,
    word: "surfaced",
    meaning: "表面化する",
    sentence: "The rumor (   ) in the press.",
    jp: "そのうわさがメディアで表面化した。",
    jpBlank: "そのうわさがメディアで(   )した。",
    jpAnswer: "表面化"
  },
  {
    wordNo: 546,
    word: "aspects",
    meaning: "側面",
    sentence: "learn about various (   ) of Japanese culture",
    jp: "さまざまな日本文化の側面を学ぶ。",
    jpBlank: "さまざまな日本文化の(   )を学ぶ。",
    jpAnswer: "側面"
  },
  {
    wordNo: 547,
    word: "edge",
    meaning: "端",
    sentence: "sit on the (   ) of the bed",
    jp: "ベッドの端に座る。",
    jpBlank: "ベッドの端に(   )。",
    jpAnswer: "座る"
  },
  {
    wordNo: 547,
    word: "edge",
    meaning: "刃",
    sentence: "This knife has a sharp (   ).",
    jp: "このナイフはよく切れる。",
    jpBlank: "このナイフはよく(   )。",
    jpAnswer: "切れる"
  },
  {
    wordNo: 547,
    word: "edge",
    meaning: "優位",
    sentence: "have the (   ) over my rival",
    jp: "競争相手より優位である。",
    jpBlank: "競争相手より(   )である。",
    jpAnswer: "優位"
  },
  {
    wordNo: 548,
    word: "makeup",
    meaning: "構成",
    sentence: "the (   ) of the team",
    jp: "そのチームの構成。",
    jpBlank: "そのチームの(   )。",
    jpAnswer: "構成"
  },
  {
    wordNo: 548,
    word: "makeup",
    meaning: "資質",
    sentence: "the unique (   ) of each person",
    jp: "1人1人の独自の資質。",
    jpBlank: "1人1人の独自の(   )。",
    jpAnswer: "資質"
  },
  {
    wordNo: 548,
    word: "makeup",
    meaning: "化粧",
    sentence: "wear heavy (   )",
    jp: "厚化粧をしている。",
    jpBlank: "厚(   )をしている。",
    jpAnswer: "化粧"
  },
  {
    wordNo: 548,
    word: "makeup",
    meaning: "追試験",
    sentence: "take a (   ) exam in Latin",
    jp: "ラテン語の追試験を受ける。",
    jpBlank: "ラテン語の(   )を受ける。",
    jpAnswer: "追試験"
  },
  {
    wordNo: 549,
    word: "consisted",
    meaning: "〜で構成されている",
    sentence: "The audience (   ) mainly of young people.",
    jp: "観客は大半が若者だった。",
    jpBlank: "観客は(   )が若者だった。",
    jpAnswer: "大半"
  },
  {
    wordNo: 549,
    word: "consists",
    meaning: "〜にある",
    sentence: "Happiness (   ) in contentment.",
    jp: "幸福の本質は満足にある。",
    jpBlank: "幸福の本質は満足に(   )。",
    jpAnswer: "ある"
  },
  {
    wordNo: 550,
    word: "composed",
    meaning: "構成する",
    sentence: "Water is (   ) of hydrogen and oxygen.",
    jp: "水は水素と酸素から構成される。",
    jpBlank: "水は水素と酸素から(   )される。",
    jpAnswer: "構成"
  },
  {
    wordNo: 550,
    word: "compose",
    meaning: "作曲する，詠む",
    sentence: "(   ) a haiku",
    jp: "俳句を詠む。",
    jpBlank: "俳句を(   )。",
    jpAnswer: "詠む"
  },
  {
    wordNo: 550,
    word: "composed",
    meaning: "落ち着いている",
    sentence: "remain perfectly (   )",
    jp: "落ち着き払う。",
    jpBlank: "(   )。",
    jpAnswer: "落ち着き払う"
  },
  {
    wordNo: 551,
    word: "attach",
    meaning: "添付する",
    sentence: "(   ) a file to an email",
    jp: "Eメールにファイルを添付する。",
    jpBlank: "Eメールにファイルを(   )。",
    jpAnswer: "添付する"
  },
  {
    wordNo: 551,
    word: "attached",
    meaning: "愛着を持たせる",
    sentence: "feel (   ) to this jacket",
    jp: "この上着に愛着を感じる。",
    jpBlank: "この上着に愛(   )。",
    jpAnswer: "着を感じる"
  },
  {
    wordNo: 552,
    word: "connect",
    meaning: "つなげる",
    sentence: "(   ) the printer to my PC",
    jp: "パソコンにプリンターを接続する。",
    jpBlank: "パソコンにプリンターを接(   )。",
    jpAnswer: "続する"
  },
  {
    wordNo: 552,
    word: "connected",
    meaning: "関連づける",
    sentence: "Exercise is closely (   ) with your health.",
    jp: "運動は健康に密接に関わっている。",
    jpBlank: "運動は健康に密接に(   )いる。",
    jpAnswer: "関わって"
  },
  {
    wordNo: 552,
    word: "connect",
    meaning: "つながる",
    sentence: "(   ) to the internet",
    jp: "インターネットに接続する。",
    jpBlank: "(   )トに接続する。",
    jpAnswer: "インターネッ"
  },
  {
    wordNo: 553,
    word: "related",
    meaning: "関連づける",
    sentence: "These two events are closely (   ).",
    jp: "これら2つの出来事は密接に関連している。",
    jpBlank: "(   )2つの出来事は密接に関連している。",
    jpAnswer: "これら"
  },
  {
    wordNo: 553,
    word: "relate",
    meaning: "話す",
    sentence: "(   ) my adventures",
    jp: "冒険談を語る。",
    jpBlank: "(   )。",
    jpAnswer: "冒険談を語る"
  },
  {
    wordNo: 553,
    word: "relate",
    meaning: "共感する",
    sentence: "cannot (   ) to his way of thinking",
    jp: "彼の考え方が理解できない。",
    jpBlank: "(   )理解できない。",
    jpAnswer: "彼の考え方が"
  },
  {
    wordNo: 554,
    word: "thief",
    meaning: "泥棒",
    sentence: "A (   ) broke into the building.",
    jp: "泥棒がその建物に侵入した。",
    jpBlank: "(   )がその建物に侵入した。",
    jpAnswer: "泥棒"
  },
  {
    wordNo: 555,
    word: "stick",
    meaning: "貼り付ける",
    sentence: "(   ) posters on the wall",
    jp: "壁にポスターを貼る。",
    jpBlank: "壁にポスター(   )。",
    jpAnswer: "を貼る"
  },
  {
    wordNo: 555,
    word: "stick",
    meaning: "突き出す",
    sentence: "(   ) my head out of the window",
    jp: "窓から顔を突き出す。",
    jpBlank: "窓から顔を(   )。",
    jpAnswer: "突き出す"
  },
  {
    wordNo: 555,
    word: "stick",
    meaning: "主義などを守る",
    sentence: "(   ) to my principles",
    jp: "自分の主義を守る。",
    jpBlank: "自分の主義を(   )。",
    jpAnswer: "守る"
  },
  {
    wordNo: 556,
    word: "crime",
    meaning: "犯罪",
    sentence: "combat (   )",
    jp: "犯罪と戦う。",
    jpBlank: "(   )と戦う。",
    jpAnswer: "犯罪"
  },
  {
    wordNo: 557,
    word: "motive",
    meaning: "動機",
    sentence: "his (   ) for the crime",
    jp: "彼の犯行の動機。",
    jpBlank: "彼の犯行の(   )。",
    jpAnswer: "動機"
  },
  {
    wordNo: 558,
    word: "punish",
    meaning: "〜を罰する",
    sentence: "severely (   ) him for breaking the rules",
    jp: "規則を破ったことに対して彼を厳しく罰する。",
    jpBlank: "規則を破ったことに対して彼を厳しく(   )。",
    jpAnswer: "罰する"
  },
  {
    wordNo: 559,
    word: "violate",
    meaning: "違反する",
    sentence: "(   ) international law",
    jp: "国際法を破る。",
    jpBlank: "(   )。",
    jpAnswer: "国際法を破る"
  },
  {
    wordNo: 559,
    word: "violate",
    meaning: "侵害する",
    sentence: "(   ) human rights",
    jp: "人権を侵害する。",
    jpBlank: "人権を(   )する。",
    jpAnswer: "侵害"
  },
  {
    wordNo: 560,
    word: "legal",
    meaning: "合法の",
    sentence: "In Japan, the current (   ) drinking age is 20.",
    jp: "日本では，現在，飲酒が許されているのは20歳からだ。",
    jpBlank: "日本では，現在，飲酒が(   )のは20歳からだ。",
    jpAnswer: "許されている"
  },
  {
    wordNo: 560,
    word: "legal",
    meaning: "法律の",
    sentence: "seek (   ) advice",
    jp: "法的助言を求める。",
    jpBlank: "法的助言を求(   )。",
    jpAnswer: "める"
  },
  {
    wordNo: 561,
    word: "associate",
    meaning: "関連づける",
    sentence: "(   ) brand names with high quality",
    jp: "ブランド名から高品質を連想する。",
    jpBlank: "ブランド名から高品質を(   )する。",
    jpAnswer: "連想"
  },
  {
    wordNo: 561,
    word: "associate",
    meaning: "付き合う",
    sentence: "Don't (   ) with shady people.",
    jp: "怪しいやつらと付き合うな。",
    jpBlank: "怪しいやつらと(   )な。",
    jpAnswer: "付き合う"
  },
  {
    wordNo: 561,
    word: "associates",
    meaning: "同僚，共同経営者",
    sentence: "work with my (   ) till nine",
    jp: "9時まで同僚と働く。",
    jpBlank: "9時まで(   )と働く。",
    jpAnswer: "同僚"
  },
  {
    wordNo: 562,
    word: "enemy",
    meaning: "敵",
    sentence: "fight with the (   )",
    jp: "その敵と戦う。",
    jpBlank: "(   )。",
    jpAnswer: "その敵と戦う"
  },
  {
    wordNo: 562,
    word: "enemy",
    meaning: "敵の",
    sentence: "(   ) soldiers",
    jp: "敵の兵士。",
    jpBlank: "(   )兵士。",
    jpAnswer: "敵の"
  },
  {
    wordNo: 563,
    word: "conflict",
    meaning: "対立，紛争",
    sentence: "a (   ) between two parties",
    jp: "2つの政党間の対立。",
    jpBlank: "2つの政党間の(   )。",
    jpAnswer: "対立"
  },
  {
    wordNo: 563,
    word: "conflict",
    meaning: "葛藤",
    sentence: "a psychological (   )",
    jp: "心の葛藤。",
    jpBlank: "心の(   )。",
    jpAnswer: "葛藤"
  },
  {
    wordNo: 563,
    word: "conflicts",
    meaning: "矛盾する",
    sentence: "This (   ) with his theory.",
    jp: "これは彼の理論と矛盾する。",
    jpBlank: "これは彼の理論と(   )。",
    jpAnswer: "矛盾する"
  },
  {
    wordNo: 564,
    word: "compete",
    meaning: "競争する",
    sentence: "(   ) with each other for good grades",
    jp: "よい成績を目指してお互いに競い合う。",
    jpBlank: "よい成績を目指してお互いに(   )合う。",
    jpAnswer: "競い"
  },
  {
    wordNo: 564,
    word: "compete",
    meaning: "参加する",
    sentence: "(   ) in a half marathon",
    jp: "ハーフマラソンに参加する。",
    jpBlank: "ハーフマラソンに(   )。",
    jpAnswer: "参加する"
  },
],
565: [
  {
    wordNo: 565,
    word: "defeated",
    meaning: "打ち負かす",
    sentence: "Our team was completely (   ).",
    jp: "私たちのチームは完敗した。",
    jpBlank: "(   )ムは完敗した。",
    jpAnswer: "私たちのチー"
  },
  {
    wordNo: 565,
    word: "defeat",
    meaning: "敗北",
    sentence: "Japan's (   ) in World War II",
    jp: "第二次世界大戦における日本の敗北。",
    jpBlank: "第二次世界大戦における日本の(   )。",
    jpAnswer: "敗北"
  },
  {
    wordNo: 566,
    word: "victim",
    meaning: "犠牲者，被害者",
    sentence: "Over 30 people fell (   ) to the terrorist attack.",
    jp: "30人以上の人がそのテロの犠牲になった。",
    jpBlank: "30人以上の人がそのテロの犠(   )。",
    jpAnswer: "牲になった"
  },
  {
    wordNo: 567,
    word: "obstacle",
    meaning: "障害",
    sentence: "remove an (   ) to an agreement",
    jp: "合意への障害を取り除く。",
    jpBlank: "合意への(   )を取り除く。",
    jpAnswer: "障害"
  },
  {
    wordNo: 568,
    word: "harm",
    meaning: "害を及ぼす",
    sentence: "Smoking does you (   ).",
    jp: "喫煙は害を及ぼす。",
    jpBlank: "喫煙は(   )。",
    jpAnswer: "害を及ぼす"
  },
  {
    wordNo: 568,
    word: "harm",
    meaning: "害",
    sentence: "(   ) his reputation",
    jp: "彼の評判を悪くする。",
    jpBlank: "彼の評判を(   )する。",
    jpAnswer: "悪く"
  },
  {
    wordNo: 569,
    word: "invade",
    meaning: "侵害する",
    sentence: "(   ) our privacy",
    jp: "私たちのプライバシーを侵害する。",
    jpBlank: "私たちのプライバシーを(   )。",
    jpAnswer: "侵害する"
  },
  {
    wordNo: 569,
    word: "invade",
    meaning: "侵略する",
    sentence: "(   ) a neighboring country",
    jp: "隣接する国に侵略する。",
    jpBlank: "隣接する国に(   )する。",
    jpAnswer: "侵略"
  },
  {
    wordNo: 570,
    word: "endanger",
    meaning: "危険にさらす",
    sentence: "(   ) the lives of the passengers",
    jp: "乗客の命を危険にさらす。",
    jpBlank: "乗客の命を(   )。",
    jpAnswer: "危険にさらす"
  },
  {
    wordNo: 571,
    word: "interrupted",
    meaning: "中断する",
    sentence: "The meeting was temporarily (   ) by a blackout.",
    jp: "停電のため会議は一時中断した。",
    jpBlank: "停電のため会議は一時(   )した。",
    jpAnswer: "中断"
  },
  {
    wordNo: 571,
    word: "interrupt",
    meaning: "遮る",
    sentence: "(   ) a speech with questions",
    jp: "質問して講演を遮る。",
    jpBlank: "質問して講演を(   )。",
    jpAnswer: "遮る"
  },
  {
    wordNo: 571,
    word: "interrupt",
    meaning: "話を遮る",
    sentence: "Don't (   ).",
    jp: "話を遮らないでください。",
    jpBlank: "(   )らないでください。",
    jpAnswer: "話を遮"
  },
  {
    wordNo: 572,
    word: "spoiled",
    meaning: "台無しにする",
    sentence: "Ben's sudden arrival (   ) our plans.",
    jp: "ベンが突然来たので私たちの計画が台無しになった。",
    jpBlank: "ベンが突然来たので私たちの計画が(   )なった。",
    jpAnswer: "台無しに"
  },
  {
    wordNo: 572,
    word: "spoil",
    meaning: "甘やかす",
    sentence: "(   ) the child",
    jp: "子どもを甘やかす。",
    jpBlank: "子どもを(   )。",
    jpAnswer: "甘やかす"
  },
  {
    wordNo: 573,
    word: "spectators",
    meaning: "観客",
    sentence: "The football match attracted more than 10,000 (   ).",
    jp: "そのサッカーの試合には1万人以上の観客が押し寄せた。",
    jpBlank: "そのサッカーの試合には1万人以上の(   )が押し寄せた。",
    jpAnswer: "観客"
  },
  {
    wordNo: 574,
    word: "relatives",
    meaning: "親戚",
    sentence: "one of my (   )",
    jp: "親戚の1人。",
    jpBlank: "(   )の1人。",
    jpAnswer: "親戚"
  },
  {
    wordNo: 574,
    word: "relative",
    meaning: "相対的な",
    sentence: "(   ) merits",
    jp: "相対的な利点。",
    jpBlank: "(   )的な利点。",
    jpAnswer: "相対"
  },
  {
    wordNo: 575,
    word: "departure",
    meaning: "出発",
    sentence: "the flight's (   )",
    jp: "飛行機の出発。",
    jpBlank: "飛行機の(   )。",
    jpAnswer: "出発"
  },
  {
    wordNo: 575,
    word: "departure",
    meaning: "逸脱",
    sentence: "a (   ) from the norm",
    jp: "常識を逸脱したもの。",
    jpBlank: "常識を(   )したもの。",
    jpAnswer: "逸脱"
  },
  {
    wordNo: 576,
    word: "destination",
    meaning: "目的地",
    sentence: "get to my (   )",
    jp: "目的地に到着する。",
    jpBlank: "(   )に到着する。",
    jpAnswer: "目的地"
  },
  {
    wordNo: 577,
    word: "transportation",
    meaning: "公共交通機関",
    sentence: "by public (   )",
    jp: "公共交通機関で。",
    jpBlank: "(   )で。",
    jpAnswer: "公共交通機関"
  },
  {
    wordNo: 578,
    word: "vehicles",
    meaning: "車両",
    sentence: "emergency (   )",
    jp: "緊急車両。",
    jpBlank: "緊急(   )。",
    jpAnswer: "車両"
  },
  {
    wordNo: 578,
    word: "vehicle",
    meaning: "伝達手段",
    sentence: "Poetry is the (   ) of my ideas.",
    jp: "詩は私の思想を伝達する手段です。",
    jpBlank: "詩は私の思想を伝達する手(   )。",
    jpAnswer: "段です"
  },
  {
    wordNo: 579,
    word: "baggage",
    meaning: "手荷物",
    sentence: "How many pieces of (   ) can I take on the airplane with me?",
    jp: "機内へは手荷物は何個まで持ち込むことができますか。",
    jpBlank: "機内へは(   )は何個まで持ち込むことができますか。",
    jpAnswer: "手荷物"
  },
  {
    wordNo: 580,
    word: "via",
    meaning: "経由で",
    sentence: "fly to Zurich (   ) Hong Kong",
    jp: "香港経由でチューリッヒに飛ぶ。",
    jpBlank: "香港(   )チューリッヒに飛ぶ。",
    jpAnswer: "経由で"
  },
  {
    wordNo: 580,
    word: "via",
    meaning: "によって",
    sentence: "send a message to a friend (   ) email",
    jp: "Eメールで友だちにメッセージを送る。",
    jpBlank: "Eメール(   )友だちにメッセージを送る。",
    jpAnswer: "で"
  },
  {
    wordNo: 581,
    word: "leads",
    meaning: "至る",
    sentence: "Laziness (   ) to failure.",
    jp: "怠けることは失敗に至る。",
    jpBlank: "怠けることは失敗に(   )。",
    jpAnswer: "至る"
  },
  {
    wordNo: 581,
    word: "lead",
    meaning: "生活を送る",
    sentence: "(   ) an easy life",
    jp: "楽な生活を送る。",
    jpBlank: "楽な(   )。",
    jpAnswer: "生活を送る"
  },
  {
    wordNo: 581,
    word: "led",
    meaning: "〜させる",
    sentence: "What (   ) you to do it?",
    jp: "なぜそんなことをしたの。",
    jpBlank: "(   )そんなことをしたの。",
    jpAnswer: "なぜ"
  },
  {
    wordNo: 581,
    word: "lead",
    meaning: "鉛",
    sentence: "The pencil (   ) has broken.",
    jp: "鉛筆の芯が折れた。",
    jpBlank: "鉛筆の芯が折(   )。",
    jpAnswer: "れた"
  },
  {
    wordNo: 582,
    word: "rises",
    meaning: "上がる",
    sentence: "The sun (   ) in the east.",
    jp: "太陽は東から昇る。",
    jpBlank: "太陽は東から(   )。",
    jpAnswer: "昇る"
  },
  {
    wordNo: 582,
    word: "rise",
    meaning: "上昇",
    sentence: "a (   ) in sea levels",
    jp: "海面の上昇。",
    jpBlank: "海面の(   )。",
    jpAnswer: "上昇"
  },
  {
    wordNo: 583,
    word: "flows",
    meaning: "流れる",
    sentence: "This river (   ) into the Pacific.",
    jp: "この川は太平洋に流れ込む。",
    jpBlank: "この川は太平洋に(   )込む。",
    jpAnswer: "流れ"
  },
  {
    wordNo: 583,
    word: "flow",
    meaning: "流れ",
    sentence: "the (   ) of conversation",
    jp: "会話の流れ。",
    jpBlank: "会話の(   )。",
    jpAnswer: "流れ"
  },
  {
    wordNo: 584,
    word: "burst",
    meaning: "はじける",
    sentence: "Japan's economic bubble (   ) in the 1990s.",
    jp: "日本のバブル経済は1990年代にはじけた。",
    jpBlank: "日本のバブル経済は1990年代に(   )た。",
    jpAnswer: "はじけ"
  },
  {
    wordNo: 584,
    word: "burst",
    meaning: "突然〜し始める",
    sentence: "She (   ) out crying.",
    jp: "彼女は突然泣き始めた。",
    jpBlank: "彼女は突然泣(   )。",
    jpAnswer: "き始めた"
  },
],
585: [
  {
    wordNo: 585,
    word: "melted",
    meaning: "溶ける",
    sentence: "The ice cream quickly (   ).",
    jp: "アイスクリームがすぐに溶けてしまった。",
    jpBlank: "アイスクリームがすぐに(   )しまった。",
    jpAnswer: "溶けて"
  },
  {
    wordNo: 585,
    word: "melt",
    meaning: "〜を溶かす",
    sentence: "(   ) the butter",
    jp: "バターを溶かす。",
    jpBlank: "バターを(   )。",
    jpAnswer: "溶かす"
  },
  {
    wordNo: 586,
    word: "commute",
    meaning: "通勤する",
    sentence: "I (   ) to work by train.",
    jp: "電車を使って通勤する。",
    jpBlank: "電車を使って(   )する。",
    jpAnswer: "通勤"
  },
  {
    wordNo: 586,
    word: "commute",
    meaning: "通勤",
    sentence: "My (   ) takes around one hour.",
    jp: "通勤には1時間くらいかかります。",
    jpBlank: "(   )には1時間くらいかかります。",
    jpAnswer: "通勤"
  },
  {
    wordNo: 587,
    word: "accompany",
    meaning: "同行する",
    sentence: "(   ) my boss to Germany",
    jp: "上司に同行してドイツに行く。",
    jpBlank: "上司に(   )してドイツに行く。",
    jpAnswer: "同行"
  },
  {
    wordNo: 587,
    word: "accompanied",
    meaning: "伴う",
    sentence: "A cold is often (   ) by a fever.",
    jp: "かぜはしばしば熱を伴う。",
    jpBlank: "かぜはしばしば熱を(   )。",
    jpAnswer: "伴う"
  },
  {
    wordNo: 588,
    word: "emit",
    meaning: "排出する",
    sentence: "(   ) greenhouse gas",
    jp: "温室効果ガスを排出する。",
    jpBlank: "温室効果ガスを(   )する。",
    jpAnswer: "排出"
  },
  {
    wordNo: 589,
    word: "progress",
    meaning: "進歩",
    sentence: "make great (   ) in English",
    jp: "英語が格段に上達する。",
    jpBlank: "英語が格段に(   )する。",
    jpAnswer: "上達"
  },
  {
    wordNo: 589,
    word: "progressed",
    meaning: "進む",
    sentence: "As the meeting (   ), I grew more and more tired.",
    jp: "会議が進むにつれて，ますます疲れた。",
    jpBlank: "会議が(   )につれて，ますます疲れた。",
    jpAnswer: "進む"
  },
  {
    wordNo: 590,
    word: "advances",
    meaning: "進歩",
    sentence: "(   ) in technology",
    jp: "科学技術の進歩。",
    jpBlank: "科学技術の(   )。",
    jpAnswer: "進歩"
  },
  {
    wordNo: 590,
    word: "advanced",
    meaning: "前進する",
    sentence: "The team (   ) to the final.",
    jp: "チームは決勝戦に進んだ。",
    jpBlank: "チームは決勝戦に(   )。",
    jpAnswer: "進んだ"
  },
  {
    wordNo: 590,
    word: "advance",
    meaning: "事前の",
    sentence: "an (   ) ticket",
    jp: "前売り券。",
    jpBlank: "(   )。",
    jpAnswer: "前売り券"
  },
  {
    wordNo: 591,
    word: "deal",
    meaning: "扱う",
    sentence: "(   ) with the drunk well",
    jp: "酔っ払いをうまく扱う。",
    jpBlank: "酔っ払いをうまく(   )。",
    jpAnswer: "扱う"
  },
  {
    wordNo: 591,
    word: "deal",
    meaning: "取引",
    sentence: "make a (   ) with the kidnapper",
    jp: "その誘拐犯と取引する。",
    jpBlank: "その誘拐犯と(   )する。",
    jpAnswer: "取引"
  },
  {
    wordNo: 592,
    word: "handle",
    meaning: "対処する",
    sentence: "(   ) stress well",
    jp: "ストレスにうまく対処する。",
    jpBlank: "ストレスにうまく(   )。",
    jpAnswer: "対処する"
  },
  {
    wordNo: 592,
    word: "handle",
    meaning: "手を触れる",
    sentence: "Please do not (   ) the exhibits.",
    jp: "展示品に手を触れないでください。",
    jpBlank: "展示品に(   )ないでください。",
    jpAnswer: "手を触れ"
  },
  {
    wordNo: 592,
    word: "handle",
    meaning: "取っ手",
    sentence: "the (   ) of a mug",
    jp: "マグカップの取っ手。",
    jpBlank: "マグカップの(   )。",
    jpAnswer: "取っ手"
  },
  {
    wordNo: 593,
    word: "treat",
    meaning: "扱う",
    sentence: "(   ) children fairly",
    jp: "公平に子どもを扱う。",
    jpBlank: "公平に子どもを(   )。",
    jpAnswer: "扱う"
  },
  {
    wordNo: 593,
    word: "treat",
    meaning: "治療する",
    sentence: "(   ) patients",
    jp: "患者を治療する。",
    jpBlank: "患者を(   )する。",
    jpAnswer: "治療"
  },
  {
    wordNo: 593,
    word: "treat",
    meaning: "ご馳走する",
    sentence: "Let me (   ) you to dinner tonight.",
    jp: "今夜の食事は私におごらせてください。",
    jpBlank: "今夜の食事は私におごらせ(   )。",
    jpAnswer: "てください"
  },
  {
    wordNo: 593,
    word: "treat",
    meaning: "楽しみ",
    sentence: "The trip was a real (   ).",
    jp: "その旅行は本当に楽しかった。",
    jpBlank: "(   )当に楽しかった。",
    jpAnswer: "その旅行は本"
  },
  {
    wordNo: 594,
    word: "clue",
    meaning: "手がかり",
    sentence: "find a (   ) to his whereabouts",
    jp: "彼の居所の手がかりを見つける。",
    jpBlank: "彼の居所の(   )を見つける。",
    jpAnswer: "手がかり"
  },
  {
    wordNo: 595,
    word: "restrict",
    meaning: "制限する",
    sentence: "(   ) the amount of carbohydrate",
    jp: "炭水化物の量を制限する。",
    jpBlank: "炭水化物の量を(   )する。",
    jpAnswer: "制限"
  },
  {
    wordNo: 596,
    word: "limit",
    meaning: "制限する",
    sentence: "(   ) class size to fifteen",
    jp: "クラスの人数を15名に制限する。",
    jpBlank: "クラスの人数を15名に(   )。",
    jpAnswer: "制限する"
  },
  {
    wordNo: 596,
    word: "limit",
    meaning: "制限",
    sentence: "put a (   ) on the number of participants",
    jp: "参加者の数に制限を設ける。",
    jpBlank: "参加者の数に(   )を設ける。",
    jpAnswer: "制限"
  },
  {
    wordNo: 597,
    word: "forbid",
    meaning: "〜を禁じる",
    sentence: "(   ) employees to accept tips from customers",
    jp: "従業員が客からのチップを受け取ることを禁じる。",
    jpBlank: "従業員が客からのチップを受け取ることを(   )。",
    jpAnswer: "禁じる"
  },
  {
    wordNo: 598,
    word: "ban",
    meaning: "禁止",
    sentence: "impose a total (   ) on smoking in public places",
    jp: "公共の場所での喫煙を全面的に禁止する。",
    jpBlank: "公共の場所での喫煙を全面的に(   )する。",
    jpAnswer: "禁止"
  },
  {
    wordNo: 598,
    word: "ban",
    meaning: "禁止する",
    sentence: "(   ) the illegal downloading of music",
    jp: "音楽の違法ダウンロードを禁止する。",
    jpBlank: "音楽の違法ダウンロードを(   )。",
    jpAnswer: "禁止する"
  },
  {
    wordNo: 599,
    word: "refuse",
    meaning: "拒む",
    sentence: "(   ) to listen to him",
    jp: "彼の話を聞くのを拒む。",
    jpBlank: "彼の話を聞くのを(   )。",
    jpAnswer: "拒む"
  },
  {
    wordNo: 599,
    word: "refuse",
    meaning: "断る",
    sentence: "flatly (   ) the offer",
    jp: "きっぱりとその申し出を断る。",
    jpBlank: "きっぱりとその申し出を(   )。",
    jpAnswer: "断る"
  },
  {
    wordNo: 600,
    word: "reject",
    meaning: "拒絶する",
    sentence: "(   ) the idea",
    jp: "その考えを拒絶する。",
    jpBlank: "その考えを(   )する。",
    jpAnswer: "拒絶"
  },
  {
    wordNo: 600,
    word: "rejected",
    meaning: "のけ者にする",
    sentence: "People in the village (   ) him.",
    jp: "村の人々は彼をのけ者にした。",
    jpBlank: "村の人々は彼を(   )した。",
    jpAnswer: "のけ者に"
  },
  {
    wordNo: 601,
    word: "persuade",
    meaning: "説得して〜させる",
    sentence: "It is no use trying to (   ) him to eat carrots.",
    jp: "ニンジンを食べるよう彼を説得するのは無駄だ。",
    jpBlank: "ニンジンを食べるよう彼を説得するのは(   )。",
    jpAnswer: "無駄だ"
  },
  {
    wordNo: 602,
    word: "convince",
    meaning: "確信させる",
    sentence: "(   ) him that I am right",
    jp: "私が正しいことを彼に確信させる。",
    jpBlank: "私が正しいことを彼に(   )。",
    jpAnswer: "確信させる"
  },
  {
    wordNo: 602,
    word: "convince",
    meaning: "説得して〜させる",
    sentence: "(   ) him to study hard",
    jp: "彼を説得して熱心に勉強させる。",
    jpBlank: "彼を説得して熱心に勉強さ(   )。",
    jpAnswer: "せる"
  },
  {
    wordNo: 603,
    word: "inspired",
    meaning: "奮い立たせる",
    sentence: "His remark (   ) me to study.",
    jp: "彼の言葉で私の勉強のスイッチが入った。",
    jpBlank: "彼の言葉で私の勉強の(   )。",
    jpAnswer: "スイッチが入った"
  },
  {
    wordNo: 603,
    word: "inspired",
    meaning: "ヒントを与えられた",
    sentence: "This novel was (   ) by real events.",
    jp: "この小説は実話をヒントにしている。",
    jpBlank: "この小説は実話を(   )にしている。",
    jpAnswer: "ヒント"
  },
  {
    wordNo: 604,
    word: "discourage",
    meaning: "思いとどまらせる",
    sentence: "(   ) her from buying expensive clothes",
    jp: "彼女に高い服を買うのを思いとどまらせる。",
    jpBlank: "彼女に高い服を買うのを(   )。",
    jpAnswer: "思いとどまらせる"
  },
],
605: [
  {
    wordNo: 605,
    word: "promote",
    meaning: "促進する",
    sentence: "(   ) healthy eating habits",
    jp: "健全な食生活を促進する。",
    jpBlank: "健全な食生活を(   )する。",
    jpAnswer: "促進"
  },
  {
    wordNo: 605,
    word: "promoted",
    meaning: "昇進する",
    sentence: "get (   ) to vice-president",
    jp: "副社長に昇進する。",
    jpBlank: "副社長に(   )する。",
    jpAnswer: "昇進"
  },
  {
    wordNo: 606,
    word: "boost",
    meaning: "高める",
    sentence: "(   ) the team's morale",
    jp: "チームの士気を高める。",
    jpBlank: "チームの士気を(   )。",
    jpAnswer: "高める"
  },
  {
    wordNo: 607,
    word: "expands",
    meaning: "膨張する",
    sentence: "Water (   ) when it freezes.",
    jp: "水は凍ると膨張する。",
    jpBlank: "水は凍ると(   )する。",
    jpAnswer: "膨張"
  },
  {
    wordNo: 607,
    word: "expand",
    meaning: "拡大する",
    sentence: "(   ) my business",
    jp: "ビジネスを拡張する。",
    jpBlank: "ビジネスを拡(   )。",
    jpAnswer: "張する"
  },
  {
    wordNo: 608,
    word: "extend",
    meaning: "延長する",
    sentence: "(   ) the deadline by one week",
    jp: "締め切りを1週間延長する。",
    jpBlank: "締め切りを1週間(   )。",
    jpAnswer: "延長する"
  },
  {
    wordNo: 608,
    word: "extended",
    meaning: "及ぶ",
    sentence: "The meeting (   ) over five hours.",
    jp: "その会議は5時間にも及んだ。",
    jpBlank: "(   )5時間にも及んだ。",
    jpAnswer: "その会議は"
  },
  {
    wordNo: 609,
    word: "broadens",
    meaning: "広げる",
    sentence: "Travel (   ) your horizons.",
    jp: "旅は視野を広げてくれる。",
    jpBlank: "旅は視野を(   )てくれる。",
    jpAnswer: "広げ"
  },
  {
    wordNo: 609,
    word: "broadened",
    meaning: "広がる",
    sentence: "After studying in New Zealand, my outlook on life has (   ).",
    jp: "ニュージーランドに留学して，自分の人生観が広がった。",
    jpBlank: "ニュージーランドに留学して，自分の人生観が(   )った。",
    jpAnswer: "広が"
  },
  {
    wordNo: 610,
    word: "spread",
    meaning: "広げる",
    sentence: "(   ) a handkerchief over my lap",
    jp: "ひざの上にハンカチを広げる。",
    jpBlank: "ひざの上にハンカチを(   )。",
    jpAnswer: "広げる"
  },
  {
    wordNo: 610,
    word: "spread",
    meaning: "広まる",
    sentence: "The news (   ) rapidly.",
    jp: "そのニュースは急速に広まった。",
    jpBlank: "そのニュースは急速に(   )った。",
    jpAnswer: "広ま"
  },
  {
    wordNo: 610,
    word: "spread",
    meaning: "蔓延",
    sentence: "the rapid (   ) of cholera",
    jp: "コレラの急速な蔓延。",
    jpBlank: "コレラの急速な(   )。",
    jpAnswer: "蔓延"
  },
  {
    wordNo: 611,
    word: "tie",
    meaning: "縛る",
    sentence: "(   ) up old books with some string",
    jp: "ひもで古本を縛る。",
    jpBlank: "ひもで古本を(   )。",
    jpAnswer: "縛る"
  },
  {
    wordNo: 611,
    word: "tie",
    meaning: "結ぶ",
    sentence: "(   ) my shoelaces",
    jp: "靴ひもを結ぶ。",
    jpBlank: "靴ひもを(   )。",
    jpAnswer: "結ぶ"
  },
  {
    wordNo: 611,
    word: "tie",
    meaning: "ネクタイを直す",
    sentence: "fix my (   )",
    jp: "ネクタイを直す。",
    jpBlank: "(   )を直す。",
    jpAnswer: "ネクタイ"
  },
  {
    wordNo: 611,
    word: "ties",
    meaning: "きずな",
    sentence: "parent-child (   )",
    jp: "親子のきずな。",
    jpBlank: "親子の(   )。",
    jpAnswer: "きずな"
  },
  {
    wordNo: 612,
    word: "fasten",
    meaning: "締める",
    sentence: "(   ) my seat belt",
    jp: "シートベルトを締める。",
    jpBlank: "シートベルトを(   )。",
    jpAnswer: "締める"
  },
  {
    wordNo: 612,
    word: "fasten",
    meaning: "留める",
    sentence: "(   ) my coat",
    jp: "コートのボタンを留める。",
    jpBlank: "コートのボタンを(   )。",
    jpAnswer: "留める"
  },
  {
    wordNo: 613,
    word: "fix",
    meaning: "固定する",
    sentence: "(   ) the camera to the tripod",
    jp: "カメラを三脚に固定する。",
    jpBlank: "カメラを三脚に(   )する。",
    jpAnswer: "固定"
  },
  {
    wordNo: 613,
    word: "fix",
    meaning: "修理する",
    sentence: "(   ) the bike",
    jp: "自転車を修理する。",
    jpBlank: "自転車を(   )する。",
    jpAnswer: "修理"
  },
  {
    wordNo: 613,
    word: "fix",
    meaning: "用意する",
    sentence: "(   ) lunch",
    jp: "昼食を用意する。",
    jpBlank: "昼食を(   )する。",
    jpAnswer: "用意"
  },
  {
    wordNo: 614,
    word: "install",
    meaning: "設置する",
    sentence: "(   ) a vending machine in the school cafeteria",
    jp: "学生食堂に自動販売機を設置する。",
    jpBlank: "学生食堂に自動販売機を(   )。",
    jpAnswer: "設置する"
  },
  {
    wordNo: 614,
    word: "install",
    meaning: "インストールする",
    sentence: "(   ) the app on my smartphone",
    jp: "私のスマートフォンにそのアプリをインストールする。",
    jpBlank: "私のスマートフォンにそのアプリを(   )する。",
    jpAnswer: "インストール"
  },
  {
    wordNo: 615,
    word: "resist",
    meaning: "我慢する",
    sentence: "cannot (   ) buying new shoes",
    jp: "ついつい新しい靴を買ってしまう。",
    jpBlank: "ついつい新しい靴を(   )。",
    jpAnswer: "買ってしまう"
  },
  {
    wordNo: 615,
    word: "resists",
    meaning: "抵抗する",
    sentence: "Stainless steel (   ) rust.",
    jp: "ステンレスはさびに抵抗する。",
    jpBlank: "ステンレスはさびに(   )。",
    jpAnswer: "抵抗する"
  },
  {
    wordNo: 616,
    word: "obey",
    meaning: "従う",
    sentence: "(   ) my parents",
    jp: "親の言うことに従う。",
    jpBlank: "親の言うことに(   )。",
    jpAnswer: "従う"
  },
  {
    wordNo: 617,
    word: "engage",
    meaning: "従事する",
    sentence: "(   ) in relief operations",
    jp: "救援活動に従事する。",
    jpBlank: "救援活動に(   )する。",
    jpAnswer: "従事"
  },
  {
    wordNo: 617,
    word: "engage",
    meaning: "関わる",
    sentence: "(   ) with the kids",
    jp: "その子どもたちと関わる。",
    jpBlank: "その子どもたちと(   )。",
    jpAnswer: "関わる"
  },
  {
    wordNo: 617,
    word: "engaged",
    meaning: "引く",
    sentence: "The puzzle (   ) his interest all day.",
    jp: "彼は1日中パズルをしていた。",
    jpBlank: "彼は1日中(   )。",
    jpAnswer: "パズルをしていた"
  },
  {
    wordNo: 618,
    word: "bump",
    meaning: "ぶつかる",
    sentence: "(   ) into a pile of books",
    jp: "本の山にぶつかる。",
    jpBlank: "本の山に(   )。",
    jpAnswer: "ぶつかる"
  },
  {
    wordNo: 618,
    word: "bump",
    meaning: "偶然出会う",
    sentence: "(   ) into my ex-girlfriend in a supermarket",
    jp: "スーパーで前の彼女に偶然出会う。",
    jpBlank: "スーパーで前の彼女に(   )。",
    jpAnswer: "偶然出会う"
  },
  {
    wordNo: 619,
    word: "bend",
    meaning: "身をかがめる",
    sentence: "(   ) down to pick up the pen",
    jp: "ペンを拾い上げるために腰をかがめる。",
    jpBlank: "ペンを拾い上げるために腰を(   )。",
    jpAnswer: "かがめる"
  },
  {
    wordNo: 619,
    word: "bend",
    meaning: "曲げる",
    sentence: "(   ) my knees",
    jp: "ひざを曲げる。",
    jpBlank: "ひざを(   )。",
    jpAnswer: "曲げる"
  },
  {
    wordNo: 619,
    word: "bend",
    meaning: "カーブ",
    sentence: "go around a (   )",
    jp: "カーブを曲がる。",
    jpBlank: "(   )を曲がる。",
    jpAnswer: "カーブ"
  },
  {
    wordNo: 620,
    word: "hugged",
    meaning: "抱き合う",
    sentence: "The players (   ) each other tightly.",
    jp: "選手たちは互いにしっかり抱き合った。",
    jpBlank: "選手たちは互いにしっかり(   )。",
    jpAnswer: "抱き合った"
  },
  {
    wordNo: 620,
    word: "hug",
    meaning: "抱きしめる",
    sentence: "give her a (   )",
    jp: "彼女を抱きしめる。",
    jpBlank: "彼女を(   )。",
    jpAnswer: "抱きしめる"
  },
  {
    wordNo: 621,
    word: "stare",
    meaning: "じっと見つめる",
    sentence: "(   ) at a computer screen",
    jp: "コンピュータの画面をじっと見つめる。",
    jpBlank: "コンピュータの画面を(   )。",
    jpAnswer: "じっと見つめる"
  },
  {
    wordNo: 621,
    word: "stare",
    meaning: "凝視",
    sentence: "give him a long, hard (   )",
    jp: "彼を長い間睨みつける。",
    jpBlank: "彼を長い間(   )。",
    jpAnswer: "睨みつける"
  },
  {
    wordNo: 622,
    word: "gaze",
    meaning: "見つめる",
    sentence: "(   ) at the ceiling",
    jp: "天井を見つめる。",
    jpBlank: "天井を(   )。",
    jpAnswer: "見つめる"
  },
  {
    wordNo: 622,
    word: "gaze",
    meaning: "視線",
    sentence: "attract everybody's (   )",
    jp: "皆の視線を集める。",
    jpBlank: "皆の(   )を集める。",
    jpAnswer: "視線"
  },
  {
    wordNo: 623,
    word: "glance",
    meaning: "ちらりと見る",
    sentence: "(   ) at the clock",
    jp: "時計をちらっと見る。",
    jpBlank: "時計をちらっ(   )。",
    jpAnswer: "と見る"
  },
  {
    wordNo: 623,
    word: "glance",
    meaning: "ちらりと見ること",
    sentence: "have a (   ) at her",
    jp: "彼女をちらっと見る。",
    jpBlank: "彼女をちらっ(   )。",
    jpAnswer: "と見る"
  },
  {
    wordNo: 624,
    word: "glimpse",
    meaning: "ちらりと見える",
    sentence: "(   ) her face",
    jp: "彼女の顔がちらりと見える。",
    jpBlank: "彼女の顔が(   )。",
    jpAnswer: "ちらりと見える"
  },
  {
    wordNo: 624,
    word: "glimpse",
    meaning: "一目見る",
    sentence: "catch a (   ) of the singer",
    jp: "その歌手を一目見る。",
    jpBlank: "その歌手を(   )。",
    jpAnswer: "一目見る"
  },
],
625: [
  {
    wordNo: 625,
    word: "stretch",
    meaning: "伸ばす",
    sentence: "(   ) my arms",
    jp: "腕を伸ばす。",
    jpBlank: "腕を(   )。",
    jpAnswer: "伸ばす"
  },
  {
    wordNo: 625,
    word: "stretch",
    meaning: "広がる",
    sentence: "(   ) to the horizon",
    jp: "地平線まで広がる。",
    jpBlank: "地平線まで(   )。",
    jpAnswer: "広がる"
  },
  {
    wordNo: 625,
    word: "stretch",
    meaning: "広がり",
    sentence: "(   ) of desert",
    jp: "一面の砂漠。",
    jpBlank: "(   )。",
    jpAnswer: "一面の砂漠"
  },
  {
    wordNo: 626,
    word: "stumble",
    meaning: "つまずく",
    sentence: "(   ) over a rock",
    jp: "石につまずく。",
    jpBlank: "石に(   )。",
    jpAnswer: "つまずく"
  },
  {
    wordNo: 626,
    word: "stumble",
    meaning: "偶然出会う",
    sentence: "(   ) across an old friend",
    jp: "旧友と偶然出会う。",
    jpBlank: "旧友と(   )。",
    jpAnswer: "偶然出会う"
  },
  {
    wordNo: 627,
    word: "press",
    meaning: "押す",
    sentence: "(   ) the button",
    jp: "ボタンを押す。",
    jpBlank: "ボタンを(   )。",
    jpAnswer: "押す"
  },
  {
    wordNo: 627,
    word: "press",
    meaning: "無理やり渡す",
    sentence: "(   ) money on him",
    jp: "彼にお金を無理やり渡す。",
    jpBlank: "彼にお金を(   )。",
    jpAnswer: "無理やり渡す"
  },
  {
    wordNo: 627,
    word: "press",
    meaning: "報道",
    sentence: "freedom of the (   )",
    jp: "報道の自由。",
    jpBlank: "(   )の自由。",
    jpAnswer: "報道"
  },
  {
    wordNo: 628,
    word: "drag",
    meaning: "引きずる",
    sentence: "(   ) the table into the kitchen",
    jp: "台所までそのテーブルを引きずる。",
    jpBlank: "台所までそのテーブルを(   )。",
    jpAnswer: "引きずる"
  },
  {
    wordNo: 629,
    word: "lean",
    meaning: "寄りかかる",
    sentence: "(   ) against the wall",
    jp: "壁にもたれる。",
    jpBlank: "(   )。",
    jpAnswer: "壁にもたれる"
  },
  {
    wordNo: 629,
    word: "lean",
    meaning: "身を乗り出す",
    sentence: "(   ) forward over the handrail",
    jp: "手すりから身を乗り出す。",
    jpBlank: "手すりから(   )。",
    jpAnswer: "身を乗り出す"
  },
  {
    wordNo: 629,
    word: "lean",
    meaning: "痩せている",
    sentence: "a tall, (   ) man",
    jp: "背の高い痩せっぽちの男。",
    jpBlank: "背の高い痩せ(   )。",
    jpAnswer: "っぽちの男"
  },
  {
    wordNo: 630,
    word: "scratch",
    meaning: "かく",
    sentence: "(   ) my back",
    jp: "背中をかく。",
    jpBlank: "背中を(   )。",
    jpAnswer: "かく"
  },
  {
    wordNo: 630,
    word: "scratch",
    meaning: "ひっかき傷",
    sentence: "a (   ) on her arm",
    jp: "彼女の腕のひっかき傷。",
    jpBlank: "彼女の腕の(   )。",
    jpAnswer: "ひっかき傷"
  },
  {
    wordNo: 631,
    word: "bow",
    meaning: "おじぎする",
    sentence: "(   ) to each other",
    jp: "お互いにおじぎをする。",
    jpBlank: "お互いに(   )をする。",
    jpAnswer: "おじぎ"
  },
  {
    wordNo: 631,
    word: "bow",
    meaning: "おじぎ",
    sentence: "The singer gave a (   ) to the audience.",
    jp: "その歌手は観客におじぎをした。",
    jpBlank: "その歌手は観客に(   )をした。",
    jpAnswer: "おじぎ"
  },
  {
    wordNo: 632,
    word: "nodded",
    meaning: "うなずく",
    sentence: "She (   ) and smiled.",
    jp: "彼女はうなずき，ほほ笑んだ。",
    jpBlank: "彼女は(   )き，ほほ笑んだ。",
    jpAnswer: "うなず"
  },
  {
    wordNo: 632,
    word: "nod",
    meaning: "うたた寝する",
    sentence: "(   ) off in class",
    jp: "授業中にうたた寝する。",
    jpBlank: "授業中に(   )する。",
    jpAnswer: "うたた寝"
  },
  {
    wordNo: 632,
    word: "nod",
    meaning: "軽くうなずく",
    sentence: "give a slight (   )",
    jp: "軽くうなずく。",
    jpBlank: "(   )。",
    jpAnswer: "軽くうなずく"
  },
  {
    wordNo: 633,
    word: "sighed",
    meaning: "ため息をつく",
    sentence: "He (   ) saying, \"You win.\"",
    jp: "「降参だ」と言って彼はため息をついた。",
    jpBlank: "「降参だ」と言って彼は(   )いた。",
    jpAnswer: "ため息をつ"
  },
  {
    wordNo: 633,
    word: "sigh",
    meaning: "ため息",
    sentence: "with a (   ) of relief",
    jp: "ほっと安堵のため息をついて。",
    jpBlank: "ほっと安堵の(   )をついて。",
    jpAnswer: "ため息"
  },
  {
    wordNo: 634,
    word: "yawn",
    meaning: "あくびをする",
    sentence: "stretch and (   ) loudly",
    jp: "伸びをして大きな声であくびをする。",
    jpBlank: "伸びをして大きな声で(   )する。",
    jpAnswer: "あくびを"
  },
  {
    wordNo: 634,
    word: "yawn",
    meaning: "あくび",
    sentence: "hold back a (   )",
    jp: "あくびをこらえる。",
    jpBlank: "(   )をこらえる。",
    jpAnswer: "あくび"
  },
  {
    wordNo: 635,
    word: "sneeze",
    meaning: "くしゃみをする",
    sentence: "Cover your mouth when you (   ).",
    jp: "くしゃみをするときには口を覆いなさい。",
    jpBlank: "(   )するときには口を覆いなさい。",
    jpAnswer: "くしゃみを"
  },
  {
    wordNo: 636,
    word: "bury",
    meaning: "埋める",
    sentence: "(   ) a time capsule at the foot of the cherry tree",
    jp: "桜の木の根元にタイムカプセルを埋める。",
    jpBlank: "桜の木の根元にタイムカプセルを(   )。",
    jpAnswer: "埋める"
  },
  {
    wordNo: 636,
    word: "bury",
    meaning: "埋葬する",
    sentence: "(   ) a dead cat in the garden",
    jp: "庭に死んだネコを埋葬する。",
    jpBlank: "庭に死んだネコを(   )。",
    jpAnswer: "埋葬する"
  },
  {
    wordNo: 637,
    word: "perform",
    meaning: "遂行する",
    sentence: "(   ) difficult tasks",
    jp: "困難な仕事を遂行する。",
    jpBlank: "困難な仕事を(   )する。",
    jpAnswer: "遂行"
  },
  {
    wordNo: 637,
    word: "perform",
    meaning: "演じる",
    sentence: "(   ) three plays",
    jp: "3つの劇を演じる。",
    jpBlank: "3つの劇を(   )。",
    jpAnswer: "演じる"
  },
  {
    wordNo: 637,
    word: "performed",
    meaning: "活躍した",
    sentence: "The star player (   ) well.",
    jp: "そのスター選手は活躍した。",
    jpBlank: "そのスター選手は(   )。",
    jpAnswer: "活躍した"
  },
  {
    wordNo: 638,
    word: "adopt",
    meaning: "採用する",
    sentence: "(   ) his plan",
    jp: "彼の計画を採用する。",
    jpBlank: "彼の計画を(   )する。",
    jpAnswer: "採用"
  },
  {
    wordNo: 638,
    word: "adopt",
    meaning: "引き取る",
    sentence: "(   ) a dog from an animal shelter",
    jp: "動物保護施設からイヌを引き取る。",
    jpBlank: "動物保護施設からイヌを(   )。",
    jpAnswer: "引き取る"
  },
  {
    wordNo: 639,
    word: "escape",
    meaning: "逃げる",
    sentence: "(   ) from the burning house",
    jp: "燃える家から逃げる。",
    jpBlank: "燃える家から(   )。",
    jpAnswer: "逃げる"
  },
  {
    wordNo: 639,
    word: "escape",
    meaning: "免れる",
    sentence: "(   ) injury",
    jp: "けがを避ける。",
    jpBlank: "(   )。",
    jpAnswer: "けがを避ける"
  },
  {
    wordNo: 639,
    word: "escape",
    meaning: "逃げ道",
    sentence: "look for an (   ) route",
    jp: "逃げ道を探す。",
    jpBlank: "(   )を探す。",
    jpAnswer: "逃げ道"
  },
  {
    wordNo: 640,
    word: "scattered",
    meaning: "脱ぎ散らかされていた",
    sentence: "His clothes were (   ) all over the floor.",
    jp: "彼の服が部屋中に脱ぎ散らかされていた。",
    jpBlank: "彼の服が部屋中に(   )ていた。",
    jpAnswer: "脱ぎ散らかされ"
  },
  {
    wordNo: 640,
    word: "scatter",
    meaning: "散る",
    sentence: "(   ) in all directions",
    jp: "四方八方に散る。",
    jpBlank: "四方八方に(   )。",
    jpAnswer: "散る"
  },
  {
    wordNo: 641,
    word: "fold",
    meaning: "折る",
    sentence: "(   ) the paper along the dotted line",
    jp: "点線に沿って紙を折る。",
    jpBlank: "点線に沿って紙を(   )。",
    jpAnswer: "折る"
  },
  {
    wordNo: 641,
    word: "fold up",
    meaning: "たたむ",
    sentence: "(   ) my clothes",
    jp: "服をたたむ。",
    jpBlank: "服を(   )。",
    jpAnswer: "たたむ"
  },
  {
    wordNo: 641,
    word: "folded",
    meaning: "腕組みをして",
    sentence: "with my arms (   )",
    jp: "腕組みをして。",
    jpBlank: "(   )。",
    jpAnswer: "腕組みをして"
  },
  {
    wordNo: 641,
    word: "folds",
    meaning: "折りたためる",
    sentence: "This chair (   ) flat.",
    jp: "この椅子は平たく折りたためる。",
    jpBlank: "この椅子は平たく(   )。",
    jpAnswer: "折りたためる"
  },
  {
    wordNo: 642,
    word: "hang",
    meaning: "〜を掛ける",
    sentence: "(   ) the washing on the pole",
    jp: "物干しざおに洗濯物を掛ける。",
    jpBlank: "物干しざおに洗濯物を(   )。",
    jpAnswer: "掛ける"
  },
  {
    wordNo: 642,
    word: "hanged",
    meaning: "絞首刑になる",
    sentence: "be (   ) for murder",
    jp: "殺人で絞首刑になる。",
    jpBlank: "殺人で(   )。",
    jpAnswer: "絞首刑になる"
  },
  {
    wordNo: 642,
    word: "hanging",
    meaning: "ぶら下がっていた",
    sentence: "An old lamp was (   ) from the ceiling.",
    jp: "古いランプが天井からぶら下がっていた。",
    jpBlank: "古いランプが天井から(   )。",
    jpAnswer: "ぶら下がっていた"
  },
  {
    wordNo: 643,
    word: "release",
    meaning: "解放する",
    sentence: "(   ) the hostages",
    jp: "人質を解放する。",
    jpBlank: "人質を(   )する。",
    jpAnswer: "解放"
  },
  {
    wordNo: 643,
    word: "release",
    meaning: "出す",
    sentence: "(   ) his new album",
    jp: "彼の新しいアルバムを出す。",
    jpBlank: "彼の新しいアルバムを(   )。",
    jpAnswer: "出す"
  },
  {
    wordNo: 643,
    word: "release",
    meaning: "放出する",
    sentence: "(   ) CO2",
    jp: "二酸化炭素を放出する。",
    jpBlank: "二酸化炭素を(   )する。",
    jpAnswer: "放出"
  },
  {
    wordNo: 643,
    word: "release",
    meaning: "解放",
    sentence: "the (   ) of the prisoners",
    jp: "囚人の解放。",
    jpBlank: "囚人の(   )。",
    jpAnswer: "解放"
  },
  {
    wordNo: 644,
    word: "strike",
    meaning: "〜を打つ",
    sentence: "(   ) him on the cheek",
    jp: "彼のほほを打つ。",
    jpBlank: "彼のほほを(   )。",
    jpAnswer: "打つ"
  },
  {
    wordNo: 644,
    word: "struck",
    meaning: "襲った",
    sentence: "The earthquake (   ) the area.",
    jp: "地震がその地域を襲った。",
    jpBlank: "地震がその地域を(   )。",
    jpAnswer: "襲った"
  },
  {
    wordNo: 644,
    word: "struck",
    meaning: "浮かんだ",
    sentence: "A good idea (   ) me.",
    jp: "よい考えが浮かんだ。",
    jpBlank: "よい考えが(   )。",
    jpAnswer: "浮かんだ"
  },
  {
    wordNo: 644,
    word: "struck",
    meaning: "思えた",
    sentence: "His plan (   ) me as impractical.",
    jp: "彼の計画は実用的ではないと思えた。",
    jpBlank: "彼の計画は実用的ではないと(   )。",
    jpAnswer: "思えた"
  },
  {
    wordNo: 644,
    word: "strike",
    meaning: "ストライキ",
    sentence: "go on (   )",
    jp: "ストライキをする。",
    jpBlank: "(   )をする。",
    jpAnswer: "ストライキ"
  },
  {
    wordNo: 645,
    word: "beat",
    meaning: "〜を打つ",
    sentence: "(   ) a drum",
    jp: "太鼓をたたく。",
    jpBlank: "(   )。",
    jpAnswer: "太鼓をたたく"
  },
  {
    wordNo: 645,
    word: "beat",
    meaning: "〜に勝つ",
    sentence: "(   ) the world champion at chess",
    jp: "チェスの世界チャンピオンに勝つ。",
    jpBlank: "チェスの世界チャンピオンに(   )。",
    jpAnswer: "勝つ"
  },
  {
    wordNo: 646,
    word: "protect",
    meaning: "守る",
    sentence: "(   ) our skin from the sun",
    jp: "日差しから肌を守る。",
    jpBlank: "日差しから肌を(   )。",
    jpAnswer: "守る"
  },
  {
    wordNo: 647,
    word: "twist",
    meaning: "ねじ曲げる",
    sentence: "(   ) a wire",
    jp: "針金をねじ曲げる。",
    jpBlank: "針金を(   )。",
    jpAnswer: "ねじ曲げる"
  },
  {
    wordNo: 647,
    word: "twist",
    meaning: "捻挫する",
    sentence: "(   ) my ankle",
    jp: "足首を捻挫する。",
    jpBlank: "足首を(   )する。",
    jpAnswer: "捻挫"
  },
  {
    wordNo: 648,
    word: "skip",
    meaning: "サボる",
    sentence: "(   ) cram school",
    jp: "塾をサボる。",
    jpBlank: "塾を(   )る。",
    jpAnswer: "サボ"
  },
  {
    wordNo: 649,
    word: "exposed",
    meaning: "触れる",
    sentence: "Children should be (   ) to different cultures.",
    jp: "子どもはさまざまな文化に触れるべきだ。",
    jpBlank: "子どもはさまざまな文化に(   )べきだ。",
    jpAnswer: "触れる"
  },
  {
    wordNo: 649,
    word: "expose",
    meaning: "暴露する",
    sentence: "(   ) a secret",
    jp: "秘密を暴露する。",
    jpBlank: "秘密を(   )する。",
    jpAnswer: "暴露"
  },
],
650: [
  {
    wordNo: 650,
    word: "stir",
    meaning: "（液体など）を混ぜる",
    sentence: "(   ) my coffee with a spoon",
    jp: "スプーンでコーヒーを混ぜる",
    jpBlank: "スプーンでコーヒー(   )",
    jpAnswer: "を混ぜる"
  },
  {
    wordNo: 650,
    word: "stir",
    meaning: "（〜 up）（感情など）を呼び覚ます",
    sentence: "(   ) up childhood memories",
    jp: "子どものころの記憶を呼び覚ます",
    jpBlank: "子どものころの記憶(   )",
    jpAnswer: "を呼び覚ます"
  },
  {
    wordNo: 651,
    word: "shake",
    meaning: "〜を振る",
    sentence: "Don't (   ) the bottle of soda water.",
    jp: "炭酸の瓶を振るな。",
    jpBlank: "炭酸の瓶を(   )な。",
    jpAnswer: "振る"
  },
  {
    wordNo: 651,
    word: "shook",
    meaning: "震える",
    sentence: "The powerful earthquake (   ) the town.",
    jp: "大地震がその町を襲った（その町を揺さぶった）。",
    jpBlank: "大地震がその町を(   )。",
    jpAnswer: "襲った"
  },
  {
    wordNo: 651,
    word: "shake",
    meaning: "震える",
    sentence: "My hand began to (   ).",
    jp: "手が震え始めた。",
    jpBlank: "手が(   )始めた。",
    jpAnswer: "震え"
  },
  {
    wordNo: 652,
    word: "polish",
    meaning: "〜を磨く",
    sentence: "(   ) my glasses with a piece of cloth",
    jp: "布で眼鏡（のレンズ）を磨く",
    jpBlank: "布で眼鏡を(   )",
    jpAnswer: "磨く"
  },
  {
    wordNo: 653,
    word: "attend",
    meaning: "〜に出席する",
    sentence: "(   ) my sister's wedding",
    jp: "姉の結婚式に出席する",
    jpBlank: "姉の結婚式に(   )する",
    jpAnswer: "出席"
  },
  {
    wordNo: 653,
    word: "attend",
    meaning: "（to 〜）（〜に）注意を向ける",
    sentence: "(   ) to his words",
    jp: "彼の言うことに注意を向ける",
    jpBlank: "彼の言うことに(   )",
    jpAnswer: "注意を向ける"
  },
  {
    wordNo: 653,
    word: "attended",
    meaning: "（to 〜）（〜を）世話する",
    sentence: "A nurse (   ) to his broken arm.",
    jp: "看護師が折れた腕の手当てをした。",
    jpBlank: "看護師が折れた腕の(   )をした。",
    jpAnswer: "手当て"
  },
  {
    wordNo: 654,
    word: "imitate",
    meaning: "〜をまねる",
    sentence: "(   ) the American teacher's English",
    jp: "そのアメリカ人教師の英語をまねる",
    jpBlank: "そのアメリカ人教師の英語を(   )",
    jpAnswer: "まねる"
  },
  {
    wordNo: 655,
    word: "conduct",
    meaning: "〜を行う",
    sentence: "(   ) research",
    jp: "研究を行う",
    jpBlank: "研究を(   )",
    jpAnswer: "行う"
  },
  {
    wordNo: 655,
    word: "conduct",
    meaning: "（電気，熱）を伝える",
    sentence: "(   ) electricity",
    jp: "電気を伝える",
    jpBlank: "電気(   )",
    jpAnswer: "を伝える"
  },
  {
    wordNo: 655,
    word: "conduct",
    meaning: "（を）指揮する",
    sentence: "a code of (   )",
    jp: "行動規範",
    jpBlank: "(   )",
    jpAnswer: "行動規範"
  },
  {
    wordNo: 656,
    word: "struggle",
    meaning: "奮闘する，もがく",
    sentence: "(   ) to bring up my children",
    jp: "必死になって子どもたちを育てる",
    jpBlank: "必死になって子どもたちを(   )",
    jpAnswer: "育てる"
  },
  {
    wordNo: 656,
    word: "struggle",
    meaning: "奮闘する，もがく",
    sentence: "a (   ) for existence",
    jp: "生存競争",
    jpBlank: "(   )",
    jpAnswer: "生存競争"
  },
  {
    wordNo: 657,
    word: "burned down",
    meaning: "焼ける",
    sentence: "Kinkakuji Temple has (   ) several times.",
    jp: "金閣寺は何度か焼け落ちている。",
    jpBlank: "金閣寺は何度か(   )落ちている。",
    jpAnswer: "焼け"
  },
  {
    wordNo: 657,
    word: "burn",
    meaning: "〜を燃やす",
    sentence: "(   ) things in a fire",
    jp: "火に入れて物を燃やす",
    jpBlank: "火に入れて物を(   )",
    jpAnswer: "燃やす"
  },
  {
    wordNo: 658,
    word: "cheat",
    meaning: "ごまかす",
    sentence: "(   ) in an exam",
    jp: "試験でカンニングをする",
    jpBlank: "試験で(   )をする",
    jpAnswer: "カンニング"
  },
  {
    wordNo: 658,
    word: "cheat",
    meaning: "〜をだます",
    sentence: "(   ) the woman out of money",
    jp: "その女性をだまして金を取る",
    jpBlank: "(   )まして金を取る",
    jpAnswer: "その女性をだ"
  },
  {
    wordNo: 659,
    word: "participate",
    meaning: "（in 〜）（〜に）参加する",
    sentence: "(   ) in the National Sports Festival",
    jp: "国民体育大会（国体）に参加する",
    jpBlank: "国民体育大会に(   )する",
    jpAnswer: "参加"
  },
  {
    wordNo: 660,
    word: "exists",
    meaning: "存在する",
    sentence: "believe that Santa Claus (   )",
    jp: "サンタクロースは存在すると信じる",
    jpBlank: "サンタクロースは(   )ると信じる",
    jpAnswer: "存在す"
  },
  {
    wordNo: 661,
    word: "arose",
    meaning: "生じる",
    sentence: "Several problems (   ).",
    jp: "いくつかの問題が生じた。",
    jpBlank: "いくつかの問題が(   )た。",
    jpAnswer: "生じ"
  },
  {
    wordNo: 662,
    word: "occurred",
    meaning: "起こる",
    sentence: "The accident (   ) at this intersection at about 10 p.m.",
    jp: "その事故は午後10時ごろにこの交差点で起きた。",
    jpBlank: "(   )後10時ごろにこの交差点で起きた。",
    jpAnswer: "その事故は午"
  },
  {
    wordNo: 662,
    word: "occurred",
    meaning: "（to A）（考えなどが）（Aに）思いつく",
    sentence: "A wonderful idea suddenly (   ) to me.",
    jp: "いい考えが突然浮かんだ。",
    jpBlank: "いい考えが突然(   )。",
    jpAnswer: "浮かんだ"
  },
  {
    wordNo: 663,
    word: "involved",
    meaning: "（be 〜ed in 〜）（事件などに）巻き込まれる",
    sentence: "I was (   ) in a traffic accident.",
    jp: "交通事故に巻き込まれた。",
    jpBlank: "交通事故に(   )た。",
    jpAnswer: "巻き込まれ"
  },
  {
    wordNo: 663,
    word: "involved",
    meaning: "（be 〜ed in 〜）（子育てなどに）参加する",
    sentence: "be (   ) in child-rearing",
    jp: "子育てに参加する",
    jpBlank: "子育てに(   )する",
    jpAnswer: "参加"
  },
  {
    wordNo: 663,
    word: "involve",
    meaning: "〜を伴う",
    sentence: "Traveling abroad may (   ) danger.",
    jp: "海外旅行は危険を伴うかもしれない。",
    jpBlank: "海外旅行は危険を(   )かもしれない。",
    jpAnswer: "伴う"
  },
  {
    wordNo: 664,
    word: "requires",
    meaning: "〜を必要とする",
    sentence: "This job (   ) many years' experience.",
    jp: "この仕事には長年の経験が必要だ。",
    jpBlank: "この仕事には長年の経験が(   )。",
    jpAnswer: "必要だ"
  },
  {
    wordNo: 665,
    word: "counterparts",
    meaning: "（to 〜）（〜に対応する）（〜と同等の）人［物，事］",
    sentence: "The Japanese officials discussed the issue with their French (   ).",
    jp: "日本政府高官はフランス政府の高官（対応する人）とその問題について話し合った。",
    jpBlank: "日本政府高官はフランス政府の高官(   )とその問題について話し合った。",
    jpAnswer: "対応する人"
  },
  {
    wordNo: 666,
    word: "advent",
    meaning: "（the a〜 of A）（Aの）到来，出現",
    sentence: "the (   ) of new technology",
    jp: "新技術の到来",
    jpBlank: "新技術の(   )",
    jpAnswer: "到来"
  },
],
666: [
  {
    wordNo: 666,
    word: "Advent",
    meaning: "（the a〜 of A）（Aの）到来，出現",
    sentence: "the (   ) season",
    jp: "降臨節",
    jpBlank: "(   )",
    jpAnswer: "降臨節"
  },
  {
    wordNo: 667,
    word: "maintain",
    meaning: "〜を維持する",
    sentence: "(   ) a proper work-life balance",
    jp: "適切なワークライフバランスを維持する",
    jpBlank: "適切なワークライフバランスを(   )",
    jpAnswer: "維持する"
  },
  {
    wordNo: 667,
    word: "maintain",
    meaning: "（that SV）（〜を強く）主張する",
    sentence: "(   ) that it is true",
    jp: "それは真実だと主張する",
    jpBlank: "それは真実だと(   )する",
    jpAnswer: "主張"
  },
  {
    wordNo: 668,
    word: "lasted",
    meaning: "（時間的に）続く",
    sentence: "The meeting (   ) (for) three hours.",
    jp: "会議は3時間続いた。",
    jpBlank: "(   )3時間続いた。",
    jpAnswer: "会議は"
  },
  {
    wordNo: 668,
    word: "last",
    meaning: "（服などが）長持ちする",
    sentence: "A quality jacket will (   ) (you) a long time.",
    jp: "よい上着は長持ちするものだ。",
    jpBlank: "よい上着は(   )するものだ。",
    jpAnswer: "長持ち"
  },
  {
    wordNo: 668,
    word: "last",
    meaning: "この前の，最後の",
    sentence: "for the [this / (   )] twenty days",
    jp: "この20日間",
    jpBlank: "(   )20日間",
    jpAnswer: "この"
  },
  {
    wordNo: 668,
    word: "last",
    meaning: "最も〜でない",
    sentence: "the (   ) person to be late",
    jp: "もっとも遅刻しそうにない人",
    jpBlank: "もっとも(   )人",
    jpAnswer: "遅刻しそうにない"
  },
  {
    wordNo: 668,
    word: "At last",
    meaning: "この前の，最後の",
    sentence: "(   ), she passed the exam.",
    jp: "ついに，彼女は試験に合格した。",
    jpBlank: "(   )，彼女は試験に合格した。",
    jpAnswer: "ついに"
  },
  {
    wordNo: 669,
    word: "persists",
    meaning: "持続する",
    sentence: "If your fever (   ), you should see a doctor.",
    jp: "熱が続くようなら，医者に行ったほうがいい。",
    jpBlank: "熱が(   )ようなら，医者に行ったほうがいい。",
    jpAnswer: "続く"
  },
  {
    wordNo: 669,
    word: "persist",
    meaning: "（in [with] 〜）（〜を）しつこく貫く，（〜に）固執する",
    sentence: "(   ) in causing trouble",
    jp: "厄介なことばかり引き起こす（引き起こし続ける）",
    jpBlank: "(   )かり引き起こす",
    jpAnswer: "厄介なことば"
  },
  {
    wordNo: 670,
    word: "examine",
    meaning: "〜を調査する",
    sentence: "(   ) the old records",
    jp: "古い記録を調べる",
    jpBlank: "古い記録を調(   )",
    jpAnswer: "べる"
  },
  {
    wordNo: 670,
    word: "examined",
    meaning: "〜を検査する",
    sentence: "have my stomach (   )",
    jp: "胃の検査を受ける（胃を検査してもらう）",
    jpBlank: "胃の(   )を受ける",
    jpAnswer: "検査"
  },
  {
    wordNo: 671,
    word: "gained",
    meaning: "〜を増やす",
    sentence: "I have (   ) five kilos.",
    jp: "5キロ太った。",
    jpBlank: "5(   )。",
    jpAnswer: "キロ太った"
  },
  {
    wordNo: 671,
    word: "gain",
    meaning: "〜を得る",
    sentence: "(   ) valuable experience",
    jp: "価値ある経験を得る",
    jpBlank: "価値ある経験を(   )",
    jpAnswer: "得る"
  },
  {
    wordNo: 671,
    word: "gain",
    meaning: "利益，増加",
    sentence: "for practical (   )",
    jp: "実益のために",
    jpBlank: "(   )",
    jpAnswer: "実益のために"
  },
  {
    wordNo: 672,
    word: "obtain",
    meaning: "（努力や能力の結果）を得る",
    sentence: "(   ) a work visa",
    jp: "就労ビザを得る",
    jpBlank: "就労ビザ(   )",
    jpAnswer: "を得る"
  },
  {
    wordNo: 673,
    word: "acquire",
    meaning: "〜を習得する",
    sentence: "(   ) a foreign language",
    jp: "外国語を習得する",
    jpBlank: "外国語を(   )する",
    jpAnswer: "習得"
  },
  {
    wordNo: 673,
    word: "acquire",
    meaning: "〜を獲得する",
    sentence: "(   ) U.S. citizenship",
    jp: "アメリカ市民権を取得する",
    jpBlank: "(   )権を取得する",
    jpAnswer: "アメリカ市民"
  },
  {
    wordNo: 673,
    word: "acquire",
    meaning: "〜を買収する",
    sentence: "(   ) a software company",
    jp: "ソフトウェアの会社を買収する",
    jpBlank: "ソフトウェアの会社を(   )",
    jpAnswer: "買収する"
  },
  {
    wordNo: 674,
    word: "search",
    meaning: "（for B）（Bを）求めて（A（場所））を捜す",
    sentence: "(   ) the house for my earrings",
    jp: "イヤリングがないか家を捜す",
    jpBlank: "イヤリングがないか家を(   )",
    jpAnswer: "捜す"
  },
  {
    wordNo: 674,
    word: "search",
    meaning: "捜索，調査",
    sentence: "in (   ) of the missing key",
    jp: "なくした鍵を捜して",
    jpBlank: "なくした鍵を(   )",
    jpAnswer: "捜して"
  },
  {
    wordNo: 675,
    word: "logical",
    meaning: "論理的な",
    sentence: "(   ) thinking",
    jp: "論理的な思考",
    jpBlank: "(   )的な思考",
    jpAnswer: "論理"
  },
  {
    wordNo: 676,
    word: "scholarship",
    meaning: "奨学金",
    sentence: "study abroad on a (   )",
    jp: "奨学金で留学する",
    jpBlank: "(   )で留学する",
    jpAnswer: "奨学金"
  },
  {
    wordNo: 676,
    word: "scholarship",
    meaning: "学問，（人文科学の）学識",
    sentence: "He is proud of his (   ).",
    jp: "彼は学識を自慢している。",
    jpBlank: "彼は(   )を自慢している。",
    jpAnswer: "学識"
  },
  {
    wordNo: 677,
    word: "instructions",
    meaning: "（通例 -s）指示，（取扱）説明書",
    sentence: "follow the on-screen (   )",
    jp: "画面上の指示に従う",
    jpBlank: "画面上の(   )に従う",
    jpAnswer: "指示"
  },
  {
    wordNo: 678,
    word: "determined",
    meaning: "〜を決める",
    sentence: "People's lifestyles are often (   ) by their incomes.",
    jp: "人の生活スタイルは収入で決まることが多い。",
    jpBlank: "人の生活スタイルは収入で決まることが(   )。",
    jpAnswer: "多い"
  },
  {
    wordNo: 678,
    word: "determined",
    meaning: "〜を大きく影響する",
    sentence: "I am (   ) to win the game.",
    jp: "私は試合に勝つ決意をしている。",
    jpBlank: "私は試合に勝つ(   )をしている。",
    jpAnswer: "決意"
  },
  {
    wordNo: 678,
    word: "determine",
    meaning: "（原因など）を特定する",
    sentence: "(   ) the cause of the accident",
    jp: "その事故の原因を特定する",
    jpBlank: "その事故の原因(   )する",
    jpAnswer: "を特定"
  },
  {
    wordNo: 679,
    word: "conclude",
    meaning: "（that SV）〜と結論を下す",
    sentence: "(   ) that the factory should be closed",
    jp: "その工場は閉鎖すべきだと結論を下す",
    jpBlank: "その工場は閉鎖すべきだと(   )",
    jpAnswer: "結論を下す"
  },
  {
    wordNo: 680,
    word: "distinguish",
    meaning: "〜を区別する",
    sentence: "(   ) sheep from goats",
    jp: "ヒツジをヤギと区別する",
    jpBlank: "ヒツジをヤギと(   )する",
    jpAnswer: "区別"
  },
],
681: [
  {
    wordNo: 681,
    word: "classify",
    meaning: "〜を分類する",
    sentence: "(   ) the books according to subject [their subject(s)]",
    jp: "テーマで図書を分類する",
    jpBlank: "テーマで図書を(   )する",
    jpAnswer: "分類"
  },
  {
    wordNo: 682,
    word: "estimated",
    meaning: "〜と推定する，見積もる",
    sentence: "It is (   ) that this shrine is over 500 years old.",
    jp: "この神社の歴史は500年以上だと見積もられている。",
    jpBlank: "この神社の歴史は500年以上だと(   )られている。",
    jpAnswer: "見積も"
  },
  {
    wordNo: 682,
    word: "estimate",
    meaning: "（for 〜）（〜の）見積もり",
    sentence: "give an (   ) for fixing the roof",
    jp: "屋根の修理の見積もりを出す",
    jpBlank: "屋根の修理の(   )を出す",
    jpAnswer: "見積もり"
  },
  {
    wordNo: 683,
    word: "organize",
    meaning: "（考えなどを）まとめる",
    sentence: "(   ) my thoughts before speaking",
    jp: "話す前に自分の考えをまとめる",
    jpBlank: "話す前に自分の考えを(   )",
    jpAnswer: "まとめる"
  },
  {
    wordNo: 683,
    word: "organize",
    meaning: "〜を組織する，取りまとめる",
    sentence: "(   ) an event",
    jp: "イベントを取りまとめる",
    jpBlank: "イベントを(   )",
    jpAnswer: "取りまとめる"
  },
  {
    wordNo: 684,
    word: "recognize",
    meaning: "（知り合いなどだと）わかる",
    sentence: "Do you (   ) me?",
    jp: "私が誰だかわかりますか。",
    jpBlank: "私が誰だか(   )りますか。",
    jpAnswer: "わか"
  },
  {
    wordNo: 684,
    word: "recognize",
    meaning: "（that SV）（事実だと）認める",
    sentence: "(   ) that I was wrong",
    jp: "私が間違っていたと認める",
    jpBlank: "私が間違っていたと(   )",
    jpAnswer: "認める"
  },
  {
    wordNo: 685,
    word: "supposed",
    meaning: "（be 〜d to 〜）〜することになっている",
    sentence: "You are (   ) to take off your shoes at the door.",
    jp: "玄関では靴を脱ぐことになっています。",
    jpBlank: "玄関では靴を脱ぐことに(   )ます。",
    jpAnswer: "なってい"
  },
  {
    wordNo: 685,
    word: "Suppose",
    meaning: "〜と思う，仮定する",
    sentence: "(   ) you got lost there. What would you do?",
    jp: "そこで迷子になったとします。あなたならどうしますか。",
    jpBlank: "そこで迷子になった(   )。あなたならどうしますか。",
    jpAnswer: "とします"
  },
  {
    wordNo: 686,
    word: "assume",
    meaning: "〜と思い込む，決めつける",
    sentence: "(   ) (that) all people are the same",
    jp: "人間は皆同じだと思い込む",
    jpBlank: "人間は皆同じだと(   )",
    jpAnswer: "思い込む"
  },
  {
    wordNo: 686,
    word: "assume",
    meaning: "〜を引き受ける",
    sentence: "(   ) responsibility",
    jp: "責任をとる",
    jpBlank: "(   )",
    jpAnswer: "責任をとる"
  },
  {
    wordNo: 687,
    word: "care",
    meaning: "（否定文で）気にする",
    sentence: "I don't (   ) about trivial matters.",
    jp: "私は細かいことを気にしません。",
    jpBlank: "私は細かいことを(   )しません。",
    jpAnswer: "気に"
  },
  {
    wordNo: 687,
    word: "care",
    meaning: "世話をする",
    sentence: "(   ) for orphans",
    jp: "孤児の世話をする",
    jpBlank: "孤児の(   )する",
    jpAnswer: "世話を"
  },
  {
    wordNo: 687,
    word: "care",
    meaning: "世話，心配",
    sentence: "medical (   ) for the elderly",
    jp: "高齢者の医療",
    jpBlank: "(   )",
    jpAnswer: "高齢者の医療"
  },
  {
    wordNo: 688,
    word: "approved",
    meaning: "（of 〜）（〜を）認める，承認する",
    sentence: "Her parents (   ) of her marriage.",
    jp: "彼女の両親は彼女の結婚を認めた。",
    jpBlank: "彼女の両親は彼女の結婚を(   )。",
    jpAnswer: "認めた"
  },
  {
    wordNo: 688,
    word: "approved",
    meaning: "〜を承認する",
    sentence: "Congress (   ) the president's plans.",
    jp: "議会は大統領の計画を承認した。",
    jpBlank: "議会は大統領の計画を(   )した。",
    jpAnswer: "承認"
  },
  {
    wordNo: 689,
    word: "noticed",
    meaning: "〜に気がついている",
    sentence: "I (   ) that there was a hole in my sock.",
    jp: "靴下に穴が空いていることに気がついた。",
    jpBlank: "(   )いていることに気がついた。",
    jpAnswer: "靴下に穴が空"
  },
  {
    wordNo: 689,
    word: "notice",
    meaning: "通知，掲示，注意",
    sentence: "(   ) of a change of address",
    jp: "住所変更の通知",
    jpBlank: "住所変更の(   )",
    jpAnswer: "通知"
  },
  {
    wordNo: 690,
    word: "aware",
    meaning: "気づいている",
    sentence: "I am (   ) that my time on earth is limited.",
    jp: "この世の時間には限りがあると思っている。",
    jpBlank: "この世の時間には(   )があると思っている。",
    jpAnswer: "限り"
  },
  {
    wordNo: 691,
    word: "conscious",
    meaning: "意識している，気づいている",
    sentence: "I was (   ) of the fact that it was an important meeting.",
    jp: "それが重要な会議であるということを意識していた。",
    jpBlank: "それが重要な会議であるということを(   )た。",
    jpAnswer: "意識してい"
  },
  {
    wordNo: 691,
    word: "conscious",
    meaning: "意識がある",
    sentence: "He was still (   ) when we arrived.",
    jp: "私たちが到着したとき，彼はまだ意識があった。",
    jpBlank: "私たちが到着したとき，彼はまだ(   )った。",
    jpAnswer: "意識があ"
  },
  {
    wordNo: 692,
    word: "concerned",
    meaning: "（with [about] 〜）（〜に）関心を持っている，重視している",
    sentence: "The professor is (   ) with environmental problems.",
    jp: "その教授は環境問題に関心を持っている。",
    jpBlank: "その教授は環境問題に(   )。",
    jpAnswer: "関心を持っている"
  },
  {
    wordNo: 692,
    word: "concerned",
    meaning: "（with 〜）（〜を）扱っている",
    sentence: "His book is (   ) with environmental problems.",
    jp: "彼の本は環境問題を扱っている。",
    jpBlank: "彼の本は環境問題を(   )。",
    jpAnswer: "扱っている"
  },
  {
    wordNo: 692,
    word: "concerned",
    meaning: "（about [for] 〜）（〜を）懸念している，心配している",
    sentence: "be (   ) about her safety",
    jp: "彼女の安全を懸念している。",
    jpBlank: "彼女の安全を(   )。",
    jpAnswer: "懸念している"
  },
  {
    wordNo: 693,
    word: "regards",
    meaning: "（as B）（AをBと）みなす",
    sentence: "Zack was born in the U.S. but he (   ) Japan as his home.",
    jp: "ザックはアメリカ生まれだが，日本を故郷だと思っている。",
    jpBlank: "ザックはアメリカ生まれだが，日本を(   )だと思っている。",
    jpAnswer: "故郷"
  },
  {
    wordNo: 693,
    word: "regarded",
    meaning: "（関係を）評価する",
    sentence: "be highly (   ) as a singer",
    jp: "歌手として高く評価されている",
    jpBlank: "歌手として高く(   )されている",
    jpAnswer: "評価"
  },
  {
    wordNo: 693,
    word: "regard",
    meaning: "この点で",
    sentence: "in this (   )",
    jp: "この点で",
    jpBlank: "(   )",
    jpAnswer: "この点で"
  },
  {
    wordNo: 693,
    word: "regards",
    meaning: "よろしくという挨拶",
    sentence: "Please give [send] my (   ) to Mr. Smith.",
    jp: "スミスさんによろしくお伝えください。",
    jpBlank: "スミスさんによろしくお伝(   )。",
    jpAnswer: "えください"
  },
  {
    wordNo: 694,
    word: "committed",
    meaning: "（oneself to 〜 / be 〜ed to 〜）〜に専念する",
    sentence: "We are fully (   ) to the project.",
    jp: "私たちはその計画に専念している。",
    jpBlank: "私たちはその計画に(   )している。",
    jpAnswer: "専念"
  },
  {
    wordNo: 694,
    word: "commit",
    meaning: "（言葉を）記憶する",
    sentence: "(   ) the words to memory",
    jp: "その言葉を記憶する（言葉を記憶に委ねる）",
    jpBlank: "その言葉を(   )する",
    jpAnswer: "記憶"
  },
],
694: [
  {
    wordNo: 694,
    word: "commit",
    meaning: "（犯罪などを）犯す",
    sentence: "(   ) a foul",
    jp: "反則を犯す",
    jpBlank: "反則を(   )",
    jpAnswer: "犯す"
  },
  {
    wordNo: 695,
    word: "doubted",
    meaning: "〜を疑う",
    sentence: "I have never once (   ) him.",
    jp: "彼のことを疑ったことは一度もない。",
    jpBlank: "彼のことを疑ったことは一(   )。",
    jpAnswer: "度もない"
  },
  {
    wordNo: 695,
    word: "doubt",
    meaning: "（that SV）〜とは思わない",
    sentence: "I (   ) that this diamond is real.",
    jp: "このダイヤモンドは本物ではないと思う。",
    jpBlank: "このダイヤモンドは本物では(   )。",
    jpAnswer: "ないと思う"
  },
  {
    wordNo: 695,
    word: "doubt",
    meaning: "疑い",
    sentence: "There is no (   ) that he was happy.",
    jp: "きっと（疑いなく）彼は幸せだった。",
    jpBlank: "きっと(   )彼は幸せだった。",
    jpAnswer: "疑いなく"
  },
  {
    wordNo: 696,
    word: "memorize",
    meaning: "〜を暗記する",
    sentence: "(   ) the times tables",
    jp: "九九を暗記する",
    jpBlank: "九九を(   )する",
    jpAnswer: "暗記"
  },
  {
    wordNo: 697,
    word: "forgive",
    meaning: "（人，過ちを）許す",
    sentence: "(   ) him for what he said",
    jp: "彼の発言に対して彼を許す",
    jpBlank: "彼の発言に対して彼を(   )",
    jpAnswer: "許す"
  },
  {
    wordNo: 698,
    word: "granted",
    meaning: "（take 〜 for granted）〜を当然のことと思う",
    sentence: "take cars for (   )",
    jp: "車の存在を当然と考える",
    jpBlank: "車の存在を当(   )",
    jpAnswer: "然と考える"
  },
  {
    wordNo: 698,
    word: "grant",
    meaning: "（権利など）を与える",
    sentence: "(   ) permission to visit",
    jp: "訪問の許可を与える",
    jpBlank: "訪問の許可(   )",
    jpAnswer: "を与える"
  },
  {
    wordNo: 698,
    word: "grant",
    meaning: "交付，補助金",
    sentence: "obtain a (   )",
    jp: "補助金を得る",
    jpBlank: "(   )を得る",
    jpAnswer: "補助金"
  },
  {
    wordNo: 699,
    word: "recalled",
    meaning: "〜を思い出す",
    sentence: "I (   ) that I had seen him cheating on the test.",
    jp: "彼がテストでカンニングするのを目撃したことを思い出した。",
    jpBlank: "彼がテストでカンニングするのを目撃したことを思い(   )。",
    jpAnswer: "出した"
  },
  {
    wordNo: 699,
    word: "recall",
    meaning: "（商品を）回収する，リコールする",
    sentence: "(   ) cars due to an engine fault",
    jp: "エンジンの欠陥のため車を回収する",
    jpBlank: "エンジンの欠陥のため車を(   )",
    jpAnswer: "回収する"
  },
  {
    wordNo: 700,
    word: "outlook",
    meaning: "（A's 〜 on life）（Aの）人生観",
    sentence: "broaden my (   ) on life",
    jp: "人生観を広げる",
    jpBlank: "(   )を広げる",
    jpAnswer: "人生観"
  },
  {
    wordNo: 700,
    word: "outlook",
    meaning: "（経済，天候などの）見通し，展望",
    sentence: "the economic (   )",
    jp: "経済的な見通し",
    jpBlank: "経済的な(   )",
    jpAnswer: "見通し"
  },
  {
    wordNo: 701,
    word: "perspective",
    meaning: "（経験などで得られる）視点",
    sentence: "gain a fresh (   )",
    jp: "新たな視点を得る",
    jpBlank: "新たな(   )を得る",
    jpAnswer: "視点"
  },
  {
    wordNo: 701,
    word: "perspective",
    meaning: "（大局的な）見方，遠近法",
    sentence: "keep the situation in (   )",
    jp: "状況を大局的に捉える",
    jpBlank: "状況を(   )的に捉える",
    jpAnswer: "大局"
  },
  {
    wordNo: 702,
    word: "abandon",
    meaning: "〜を捨てる，放棄する",
    sentence: "(   ) my dream of studying abroad",
    jp: "留学する夢を諦める",
    jpBlank: "留学する夢を(   )",
    jpAnswer: "諦める"
  },
  {
    wordNo: 703,
    word: "eliminate",
    meaning: "（不要な人，物）を排除する",
    sentence: "(   ) gender discrimination",
    jp: "性差別をなくす",
    jpBlank: "(   )す",
    jpAnswer: "性差別をなく"
  },
  {
    wordNo: 703,
    word: "eliminated",
    meaning: "（be 〜d）敗退する",
    sentence: "be (   ) in the second round",
    jp: "2回戦で敗退する",
    jpBlank: "2回戦で(   )する",
    jpAnswer: "敗退"
  },
  {
    wordNo: 704,
    word: "get rid of",
    meaning: "（get 〜 of 〜）（不要な人，物）を処分する",
    sentence: "(   ) my old toys",
    jp: "古いおもちゃを処分する",
    jpBlank: "古いおもちゃ(   )する",
    jpAnswer: "を処分"
  },
  {
    wordNo: 704,
    word: "get rid of",
    meaning: "〜を取り除く",
    sentence: "(   ) cockroaches",
    jp: "ゴキブリを駆除する",
    jpBlank: "ゴキブリを駆(   )",
    jpAnswer: "除する"
  },
  {
    wordNo: 705,
    word: "removed",
    meaning: "〜を取り除く，取り去る",
    sentence: "Illegally parked bicycles will be (   ).",
    jp: "放置自転車（不法駐輪された自転車）は撤去される。",
    jpBlank: "放置自転車は(   )。",
    jpAnswer: "撤去される"
  },
  {
    wordNo: 705,
    word: "remove",
    meaning: "（衣服）を脱ぐ",
    sentence: "(   ) my hat",
    jp: "帽子を脱ぐ",
    jpBlank: "帽子(   )",
    jpAnswer: "を脱ぐ"
  },
  {
    wordNo: 706,
    word: "resources",
    meaning: "（-s）（石油などの）資源，（人，国の）財産",
    sentence: "develop natural (   )",
    jp: "天然資源を開発する",
    jpBlank: "天然(   )を開発する",
    jpAnswer: "資源"
  },
  {
    wordNo: 706,
    word: "resources",
    meaning: "（困難に立ち向かう力）蓄え",
    sentence: "sufficient (   ) to survive",
    jp: "生き残るだけの十分な蓄え",
    jpBlank: "生き残るだけの十分な(   )",
    jpAnswer: "蓄え"
  },
  {
    wordNo: 706,
    word: "resource",
    meaning: "手段",
    sentence: "as a last (   )",
    jp: "最後の手段として",
    jpBlank: "最後の(   )として",
    jpAnswer: "手段"
  },
  {
    wordNo: 707,
    word: "conservation",
    meaning: "保護",
    sentence: "(   ) groups",
    jp: "環境保護団体",
    jpBlank: "環境(   )団体",
    jpAnswer: "保護"
  },
  {
    wordNo: 707,
    word: "conservation",
    meaning: "保存",
    sentence: "the law of (   ) of energy",
    jp: "エネルギー保存の法則",
    jpBlank: "エネルギー(   )の法則",
    jpAnswer: "保存"
  },
  {
    wordNo: 708,
    word: "preserve",
    meaning: "（自然などを）保護する",
    sentence: "(   ) endangered species",
    jp: "絶滅危惧種を保護する",
    jpBlank: "絶滅危惧種を(   )する",
    jpAnswer: "保護"
  },
  {
    wordNo: 708,
    word: "preserved",
    meaning: "（景観，平和，食品など）を保つ",
    sentence: "a well-(   ) fossil",
    jp: "保存状態のよい（よく保存されている）化石",
    jpBlank: "(   )状態のよい化石",
    jpAnswer: "保存"
  },
  {
    wordNo: 709,
    word: "disasters",
    meaning: "災害",
    sentence: "natural (   ) in Japan",
    jp: "日本の自然災害",
    jpBlank: "日本の自然(   )",
    jpAnswer: "災害"
  },
],
709: [
  {
    wordNo: 709,
    word: "disaster",
    meaning: "大失敗",
    sentence: "My math test was a (   )!",
    jp: "数学の試験は大失敗だった！",
    jpBlank: "数学の試験は(   )だった！",
    jpAnswer: "大失敗"
  },
  {
    wordNo: 710,
    word: "planet",
    meaning: "惑星，（the 〜）地球",
    sentence: "creatures from another (   )",
    jp: "別の惑星から来た生物",
    jpBlank: "別の(   )から来た生物",
    jpAnswer: "惑星"
  },
  {
    wordNo: 710,
    word: "planet",
    meaning: "惑星，（the 〜）地球",
    sentence: "on the (   )",
    jp: "地球上で",
    jpBlank: "(   )上で",
    jpAnswer: "地球"
  },
  {
    wordNo: 711,
    word: "environment",
    meaning: "環境，周囲の状況",
    sentence: "the natural (   )",
    jp: "自然環境",
    jpBlank: "自然(   )",
    jpAnswer: "環境"
  },
  {
    wordNo: 712,
    word: "horizon",
    meaning: "水平線，地平線",
    sentence: "The sun appeared on the (   ).",
    jp: "太陽が水平線上に現れた。",
    jpBlank: "太陽が(   )上に現れた。",
    jpAnswer: "水平線"
  },
  {
    wordNo: 712,
    word: "horizons",
    meaning: "（-s）視野",
    sentence: "Traveling broadens your (   ).",
    jp: "旅は視野を広げる。",
    jpBlank: "旅は(   )を広げる。",
    jpAnswer: "視野"
  },
  {
    wordNo: 713,
    word: "layer",
    meaning: "層",
    sentence: "the ozone (   )",
    jp: "オゾン層",
    jpBlank: "(   )",
    jpAnswer: "オゾン層"
  },
  {
    wordNo: 714,
    word: "agriculture",
    meaning: "農業",
    sentence: "organic (   )",
    jp: "有機農業",
    jpBlank: "有機(   )",
    jpAnswer: "農業"
  },
  {
    wordNo: 715,
    word: "crops",
    meaning: "作物",
    sentence: "the main (   ) in this area",
    jp: "この地域の主要な農産物",
    jpBlank: "この地域の主要な(   )",
    jpAnswer: "農産物"
  },
  {
    wordNo: 715,
    word: "crop",
    meaning: "収穫（高）",
    sentence: "this region's rice (   )",
    jp: "この地域の米の収穫（高）",
    jpBlank: "この地域の米の(   )",
    jpAnswer: "収穫"
  },
  {
    wordNo: 715,
    word: "cropped",
    meaning: "（up）生じる",
    sentence: "A new problem (   ) up.",
    jp: "新たな問題が突然生じた。",
    jpBlank: "新たな問題が突然(   )た。",
    jpAnswer: "生じ"
  },
  {
    wordNo: 716,
    word: "soil",
    meaning: "土，土壌",
    sentence: "cultivate the (   )",
    jp: "土を耕す",
    jpBlank: "(   )",
    jpAnswer: "土を耕す"
  },
  {
    wordNo: 717,
    word: "weeds",
    meaning: "雑草，海草",
    sentence: "pull up (   )",
    jp: "雑草を抜く",
    jpBlank: "(   )を抜く",
    jpAnswer: "雑草"
  },
  {
    wordNo: 717,
    word: "weed",
    meaning: "〜の雑草を抜く",
    sentence: "(   ) the garden",
    jp: "庭の雑草を抜く",
    jpBlank: "庭の(   )",
    jpAnswer: "雑草を抜く"
  },
  {
    wordNo: 718,
    word: "Pollen",
    meaning: "花粉",
    sentence: "(   ) levels are high today.",
    jp: "今日は花粉の量が多い。",
    jpBlank: "今日は(   )の量が多い。",
    jpAnswer: "花粉"
  },
  {
    wordNo: 719,
    word: "drowned",
    meaning: "溺れ死ぬ",
    sentence: "He almost (   ), but luckily he was saved.",
    jp: "彼は溺れかけたが，幸い救助された。",
    jpBlank: "彼は溺れかけ(   )，幸い救助された。",
    jpAnswer: "たが"
  },
  {
    wordNo: 720,
    word: "leaks",
    meaning: "漏れる",
    sentence: "This roof (   ).",
    jp: "雨漏りがする（この屋根は漏れる）。",
    jpBlank: "(   )。",
    jpAnswer: "雨漏りがする"
  },
  {
    wordNo: 720,
    word: "leak",
    meaning: "〜を漏らす",
    sentence: "(   ) secret information",
    jp: "秘密の情報を漏らす",
    jpBlank: "秘密の情報を(   )",
    jpAnswer: "漏らす"
  },
  {
    wordNo: 720,
    word: "leak",
    meaning: "漏れ",
    sentence: "a gas (   )",
    jp: "ガス漏れ",
    jpBlank: "ガス(   )",
    jpAnswer: "漏れ"
  },
  {
    wordNo: 721,
    word: "climate",
    meaning: "気候",
    sentence: "This town has a mild [harsh] (   ).",
    jp: "この町の気候は温暖［酷暑］です。",
    jpBlank: "この町の(   )は温暖［酷暑］です。",
    jpAnswer: "気候"
  },
  {
    wordNo: 721,
    word: "climate",
    meaning: "（政治，経済，文化の）状況",
    sentence: "the present economic (   )",
    jp: "現在の経済状況",
    jpBlank: "現在の経済(   )",
    jpAnswer: "状況"
  },
  {
    wordNo: 722,
    word: "atmosphere",
    meaning: "（地球，惑星の）大気",
    sentence: "ice crystals in the (   )",
    jp: "大気中の氷の結晶",
    jpBlank: "(   )中の氷の結晶",
    jpAnswer: "大気"
  },
  {
    wordNo: 722,
    word: "atmosphere",
    meaning: "雰囲気",
    sentence: "Our workplace has a friendly (   ).",
    jp: "私たちの職場は和やかな雰囲気だ。",
    jpBlank: "私たちの職場は和やかな(   )だ。",
    jpAnswer: "雰囲気"
  },
  {
    wordNo: 722,
    word: "atmosphere",
    meaning: "（地球，惑星の）大気",
    sentence: "re-enter the (   )",
    jp: "大気に再突入する",
    jpBlank: "(   )に再突入する",
    jpAnswer: "大気"
  },
  {
    wordNo: 723,
    word: "forecast",
    meaning: "（天気）予報",
    sentence: "according to the weather (   )",
    jp: "天気予報によれば",
    jpBlank: "天気(   )によれば",
    jpAnswer: "予報"
  },
  {
    wordNo: 723,
    word: "forecast",
    meaning: "〜を予報する",
    sentence: "Snow is (   ) for the weekend.",
    jp: "週末は雪の予報だ（雪が予報された）。",
    jpBlank: "週末は雪の(   )だ。",
    jpAnswer: "予報"
  },
  {
    wordNo: 724,
    word: "humid",
    meaning: "湿気が多い",
    sentence: "Kyoto is hot and (   ) in summer.",
    jp: "京都の夏は蒸し暑い。",
    jpBlank: "京都の夏は蒸(   )。",
    jpAnswer: "し暑い"
  },
  {
    wordNo: 725,
    word: "rainforests",
    meaning: "熱帯の",
    sentence: "tropical (   )",
    jp: "熱帯雨林",
    jpBlank: "(   )雨林",
    jpAnswer: "熱帯"
  },
  {
    wordNo: 726,
    word: "solar",
    meaning: "太陽の，太陽光線を利用した",
    sentence: "install (   ) panels on the roof",
    jp: "屋根にソーラーパネルを取り付ける",
    jpBlank: "屋根にソーラーパネルを取(   )",
    jpAnswer: "り付ける"
  },
  {
    wordNo: 800,
    word: "available",
    meaning: "手に入る，利用できる",
    sentence: "This T-shirt is (   ) in all sizes.",
    jp: "このTシャツはすべてのサイズでご用意できます（手に入る）。",
    jpBlank: "このTシャツはすべてのサイズでご用意できます(   )。",
    jpAnswer: "手に入る"
  },
],
727: [
  {
    wordNo: undefined,
    word: "species",
    meaning: "（生物分類上の）種",
    sentence: "Elephants and other endangered ( ).",
    jp: "ゾウなどの絶滅危惧種",
    jpBlank: "ゾウなどの絶(   )",
    jpAnswer: "滅危惧種"
  },
  {
    wordNo: undefined,
    word: "pesticides",
    meaning: "（虫や小動物などの）殺虫剤、除草剤",
    sentence: "Spray crops with ( ).",
    jp: "作物に農薬を散布する",
    jpBlank: "作物に農薬を(   )する",
    jpAnswer: "散布"
  },
  {
    wordNo: undefined,
    word: "extinct",
    meaning: "絶滅した",
    sentence: "Dinosaurs became ( ) millions of years ago.",
    jp: "恐竜は何百万年も前に絶滅した。",
    jpBlank: "恐竜は何百万年も前に(   )。",
    jpAnswer: "絶滅した"
  },
  {
    wordNo: undefined,
    word: "feed",
    meaning: "〜にえさを与える",
    sentence: "( ) these goldfish.",
    jp: "これらの金魚にえさを与える",
    jpBlank: "これらの金魚に(   )",
    jpAnswer: "えさを与える"
  },
  {
    wordNo: undefined,
    word: "feed",
    meaning: "（人・家族など）を養う",
    sentence: "( ) a family of five.",
    jp: "5人家族を養う",
    jpBlank: "5人家族(   )",
    jpAnswer: "を養う"
  },
  {
    wordNo: undefined,
    word: "feed",
    meaning: "（on ～）（～を）常食とする",
    sentence: "Sheep ( ) on grass.",
    jp: "ヒツジは草を常食とする",
    jpBlank: "ヒツジは草を(   )する",
    jpAnswer: "常食と"
  },
  {
    wordNo: undefined,
    word: "energetic",
    meaning: "活発な",
    sentence: "( ) boys and girls",
    jp: "活発な少年少女たち",
    jpBlank: "(   )少年少女たち",
    jpAnswer: "活発な"
  },
  {
    wordNo: undefined,
    word: "greedy",
    meaning: "貪欲な",
    sentence: "A ( ) child ate all the pies.",
    jp: "食い意地の張った子がパイを全部食べた。",
    jpBlank: "(   )子がパイを全部食べた。",
    jpAnswer: "食い意地の張った"
  },
  {
    wordNo: undefined,
    word: "brave",
    meaning: "勇敢な",
    sentence: "A ( ) firefighter",
    jp: "勇敢な消防士",
    jpBlank: "(   )消防士",
    jpAnswer: "勇敢な"
  },
  {
    wordNo: undefined,
    word: "generous",
    meaning: "寛大な、気前のよい",
    sentence: "Leave a ( ) tip.",
    jp: "気前よくチップを置く",
    jpBlank: "気前よくチッ(   )",
    jpAnswer: "プを置く"
  },
  {
    wordNo: undefined,
    word: "intellectual",
    meaning: "知的な",
    sentence: "( ) property",
    jp: "知的財産",
    jpBlank: "(   )",
    jpAnswer: "知的財産"
  },
  {
    wordNo: undefined,
    word: "curious",
    meaning: "好奇心が強い",
    sentence: "Babies are ( ) about everything.",
    jp: "赤ん坊はすべての物に対して好奇心が強い。",
    jpBlank: "赤ん坊はすべての物に対して(   )。",
    jpAnswer: "好奇心が強い"
  },
  {
    wordNo: undefined,
    word: "curious",
    meaning: "奇妙な、好奇心をそそる",
    sentence: "It is ( ) that we haven't heard from her for days.",
    jp: "彼女から何日も連絡がないのは奇妙だ。",
    jpBlank: "彼女から何日も連絡がない(   )。",
    jpAnswer: "のは奇妙だ"
  },
  {
    wordNo: undefined,
    word: "imaginative",
    meaning: "想像力豊かな",
    sentence: "Children are very ( ).",
    jp: "子どもは非常に想像力が豊かだ。",
    jpBlank: "子どもは非常に想像力が豊(   )。",
    jpAnswer: "かだ"
  },
  {
    wordNo: undefined,
    word: "afford",
    meaning: "（can ～）〜する余裕がある",
    sentence: "I can't ( ) to buy a new car.",
    jp: "新車を買う余裕がない。",
    jpBlank: "新車を買う余(   )。",
    jpAnswer: "裕がない"
  },
  {
    wordNo: undefined,
    word: "afford",
    meaning: "（人）に（物・事）を与える",
    sentence: "Music ( )s me great pleasure.",
    jp: "音楽は私に大きな喜びを与えてくれる。",
    jpBlank: "音楽は私に大きな喜びを与(   )。",
    jpAnswer: "えてくれる"
  },
  {
    wordNo: undefined,
    word: "eager",
    meaning: "熱心な",
    sentence: "She is ( ) to buy a fur coat.",
    jp: "彼女は毛皮のコートを買いたがっている。",
    jpBlank: "彼女は毛皮のコートを(   )。",
    jpAnswer: "買いたがっている"
  },
  {
    wordNo: undefined,
    word: "selfish",
    meaning: "利己的な、自分勝手な",
    sentence: "Don't be ( )!",
    jp: "自分勝手なことをしてはだめだよ。",
    jpBlank: "(   )ことをしてはだめだよ。",
    jpAnswer: "自分勝手な"
  },
  {
    wordNo: undefined,
    word: "aggressive",
    meaning: "攻撃的な",
    sentence: "Her attitude suddenly became ( ).",
    jp: "彼女の態度が突然攻撃的になった。",
    jpBlank: "彼女の態度が突然(   )的になった。",
    jpAnswer: "攻撃"
  },
  {
    wordNo: undefined,
    word: "aggressive",
    meaning: "積極的な",
    sentence: "A successful businessperson needs to be ( ).",
    jp: "ビジネスで成功するには積極的でないといけない。",
    jpBlank: "ビジネスで成功するには(   )的でないといけない。",
    jpAnswer: "積極"
  },
  {
    wordNo: undefined,
    word: "cruel",
    meaning: "残酷な",
    sentence: "Never be ( ) to animals.",
    jp: "動物を残酷に扱うな。",
    jpBlank: "動物を残酷に(   )。",
    jpAnswer: "扱うな"
  },
  {
    wordNo: undefined,
    word: "addicted",
    meaning: "～の中毒になっている",
    sentence: "Lucy is ( ) to her smartphone.",
    jp: "ルーシーはスマホ中毒である。",
    jpBlank: "ルーシーは(   )である。",
    jpAnswer: "スマホ中毒"
  },
  {
    wordNo: undefined,
    word: "stubborn",
    meaning: "頑固な",
    sentence: "A ( ) old man",
    jp: "頑固な老人",
    jpBlank: "(   )老人",
    jpAnswer: "頑固な"
  },
  {
    wordNo: undefined,
    word: "bold",
    meaning: "大胆な",
    sentence: "A dress with a ( ) design",
    jp: "大胆なデザインの服",
    jpBlank: "(   )デザインの服",
    jpAnswer: "大胆な"
  },
  {
    wordNo: undefined,
    word: "guilty",
    meaning: "申し訳なく思う、罪の意識がある",
    sentence: "I feel ( ) about lying to her.",
    jp: "彼女にうそをついたことを申し訳なく思う。",
    jpBlank: "彼女にうそをついたことを(   )。",
    jpAnswer: "申し訳なく思う"
  },
  {
    wordNo: undefined,
    word: "guilty",
    meaning: "（of ～）罪を犯した",
    sentence: "He was ( ) of cheating at cards.",
    jp: "彼はいかさまをした。",
    jpBlank: "彼は(   )をした。",
    jpAnswer: "いかさま"
  },
  {
    wordNo: undefined,
    word: "innocent",
    meaning: "（of ～）無実の",
    sentence: "He is ( ) of the crime.",
    jp: "彼はその犯罪に関して無実だ。",
    jpBlank: "(   )に関して無実だ。",
    jpAnswer: "彼はその犯罪"
  },
  {
    wordNo: undefined,
    word: "innocent",
    meaning: "無邪気な",
    sentence: "An ( ) girl",
    jp: "無邪気な少女",
    jpBlank: "(   )少女",
    jpAnswer: "無邪気な"
  },
  {
    wordNo: undefined,
    word: "sincere",
    meaning: "誠実な",
    sentence: "Make a ( ) effort.",
    jp: "誠実な努力をする",
    jpBlank: "(   )努力をする",
    jpAnswer: "誠実な"
  },
  {
    wordNo: undefined,
    word: "sincere",
    meaning: "心からの",
    sentence: "Express my ( ) thanks.",
    jp: "心からの感謝を表現する",
    jpBlank: "(   )感謝を表現する",
    jpAnswer: "心からの"
  },
  {
    wordNo: undefined,
    word: "modest",
    meaning: "（人が）謙虚な",
    sentence: "He is ( ) about his success.",
    jp: "彼は成功を鼻にかけない。",
    jpBlank: "彼は成功を鼻(   )。",
    jpAnswer: "にかけない"
  },
  {
    wordNo: undefined,
    word: "modest",
    meaning: "（物が）質素な",
    sentence: "A ( ) house with a small garden",
    jp: "小さな庭つきの質素な家",
    jpBlank: "小さな庭つきの(   )家",
    jpAnswer: "質素な"
  },
  {
    wordNo: undefined,
    word: "stupid",
    meaning: "ばかな",
    sentence: "Make a ( ) mistake.",
    jp: "ばかな間違いをする",
    jpBlank: "(   )間違いをする",
    jpAnswer: "ばかな"
  },
  {
    wordNo: undefined,
    word: "indifferent",
    meaning: "無関心な",
    sentence: "He is ( ) to politics.",
    jp: "彼は政治に無関心だ。",
    jpBlank: "彼は政治に無(   )。",
    jpAnswer: "関心だ"
  },
  {
    wordNo: undefined,
    word: "punctual",
    meaning: "時間を守る",
    sentence: "Japanese trains are extremely ( ).",
    jp: "日本の列車は非常に時間に正確だ。",
    jpBlank: "日本の列車は非常に時間に(   )。",
    jpAnswer: "正確だ"
  },
  {
    wordNo: undefined,
    word: "coward",
    meaning: "臆病者",
    sentence: "He is a ( ) when it comes to dentists.",
    jp: "彼は歯医者に関しては臆病者だ。",
    jpBlank: "彼は歯医者に関しては(   )だ。",
    jpAnswer: "臆病者"
  },
  {
    wordNo: undefined,
    word: "precise",
    meaning: "正確な、精密な",
    sentence: "Each plane follows a ( ) route.",
    jp: "各飛行機は正確な航路をたどる。",
    jpBlank: "各飛行機は(   )航路をたどる。",
    jpAnswer: "正確な"
  },
  {
    wordNo: undefined,
    word: "accurate",
    meaning: "正確な",
    sentence: "An ( ) map",
    jp: "正確な地図",
    jpBlank: "(   )地図",
    jpAnswer: "正確な"
  },
  {
    wordNo: undefined,
    word: "proper",
    meaning: "適切な",
    sentence: "The ( ) use of chopsticks",
    jp: "箸の正しい使い方",
    jpBlank: "箸の正しい使(   )",
    jpAnswer: "い方"
  },
  {
    wordNo: undefined,
    word: "tidy",
    meaning: "整然とした",
    sentence: "Keep the office ( ).",
    jp: "事務所をきちんとしておく",
    jpBlank: "事務所を(   )としておく",
    jpAnswer: "きちん"
  },
  {
    wordNo: undefined,
    word: "tidy",
    meaning: "整頓する",
    sentence: "( ) your room.",
    jp: "部屋を整頓しなさい。",
    jpBlank: "部屋を(   )しなさい。",
    jpAnswer: "整頓"
  },
  {
    wordNo: undefined,
    word: "efficient",
    meaning: "能率的な",
    sentence: "An ( ) method of transporting goods",
    jp: "商品を輸送する能率的な方法",
    jpBlank: "商品を輸送する(   )方法",
    jpAnswer: "能率的な"
  },
  {
    wordNo: undefined,
    word: "efficient",
    meaning: "有能な",
    sentence: "An ( ) accountant",
    jp: "有能な会計士",
    jpBlank: "(   )会計士",
    jpAnswer: "有能な"
  },
  {
    wordNo: undefined,
    word: "reasonable",
    meaning: "理にかなった",
    sentence: "What you're saying is ( ).",
    jp: "あなたの言っていることはもっともだ。",
    jpBlank: "あなたの言っていることは(   )だ。",
    jpAnswer: "もっとも"
  },
  {
    wordNo: undefined,
    word: "reasonable",
    meaning: "手ごろな",
    sentence: "At a ( ) price",
    jp: "手ごろな値段で",
    jpBlank: "(   )値段で",
    jpAnswer: "手ごろな"
  },
  {
    wordNo: undefined,
    word: "significant",
    meaning: "重要な、有意義な",
    sentence: "A historically ( ) event",
    jp: "歴史的に重要な出来事",
    jpBlank: "歴史的に(   )出来事",
    jpAnswer: "重要な"
  },
  {
    wordNo: undefined,
    word: "significant",
    meaning: "かなりの",
    sentence: "A ( ) increase in sales",
    jp: "売り上げのかなりの増加",
    jpBlank: "売り上げの(   )増加",
    jpAnswer: "かなりの"
  },
  {
    wordNo: undefined,
    word: "precious",
    meaning: "貴重な",
    sentence: "Don't waste your ( ) time.",
    jp: "貴重な時間を浪費するな。",
    jpBlank: "(   )時間を浪費するな。",
    jpAnswer: "貴重な"
  },
  {
    wordNo: undefined,
    word: "precious",
    meaning: "高価な",
    sentence: "( ) metals",
    jp: "貴金属",
    jpBlank: "(   )",
    jpAnswer: "貴金属"
  },
  {
    wordNo: undefined,
    word: "essential",
    meaning: "不可欠な",
    sentence: "Water is ( ) to living things.",
    jp: "水は生物にとって不可欠だ。",
    jpBlank: "(   )って不可欠だ。",
    jpAnswer: "水は生物にと"
  },
  {
    wordNo: undefined,
    word: "essential",
    meaning: "最も重要な、本質的な",
    sentence: "The bare ( )s",
    jp: "最低限必要なもの",
    jpBlank: "最低限必要な(   )",
    jpAnswer: "もの"
  },
],
763: [
  {
    wordNo: undefined,
    word: "fundamental",
    meaning: "根本的な、基本的な",
    sentence: "make a ( ) change",
    jp: "根本的な改善を行う",
    jpBlank: "(   )的な改善を行う",
    jpAnswer: "根本"
  },
  {
    wordNo: undefined,
    word: "fundamental",
    meaning: "基本事項",
    sentence: "advance from the ( )s to the applications",
    jp: "基礎から応用へと進む",
    jpBlank: "基礎から応用(   )",
    jpAnswer: "へと進む"
  },
  {
    wordNo: undefined,
    word: "outweigh",
    meaning: "…に（価値・重要性・影響力で）勝る",
    sentence: "The advantages ( ) the disadvantages.",
    jp: "メリットがデメリットを上回る（デメリットより勝る）",
    jpBlank: "メリットがデメリットを(   )",
    jpAnswer: "上回る"
  },
  {
    wordNo: undefined,
    word: "critical",
    meaning: "重大な、危機的な状況の",
    sentence: "in a ( ) condition",
    jp: "危篤状態（危機的な体調）で",
    jpBlank: "危篤状態(   )で",
    jpAnswer: "危機的な体調"
  },
  {
    wordNo: undefined,
    word: "critical",
    meaning: "批判的な",
    sentence: "be ( ) of the policy",
    jp: "その政策に批判的だ",
    jpBlank: "その政策に(   )的だ",
    jpAnswer: "批判"
  },
  {
    wordNo: undefined,
    word: "serious",
    meaning: "深刻な",
    sentence: "do ( ) damage to the environment",
    jp: "環境に深刻な打撃を与える",
    jpBlank: "環境に(   )打撃を与える",
    jpAnswer: "深刻な"
  },
  {
    wordNo: undefined,
    word: "serious",
    meaning: "（人が）真面目な、本気の",
    sentence: "be ( ) about finding a job",
    jp: "職探しに真面目だ",
    jpBlank: "職探しに真面(   )",
    jpAnswer: "目だ"
  },
  {
    wordNo: undefined,
    word: "complex",
    meaning: "複雑な",
    sentence: "a highly ( ) process",
    jp: "非常に複雑な過程",
    jpBlank: "非常に(   )過程",
    jpAnswer: "複雑な"
  },
  {
    wordNo: undefined,
    word: "complex",
    meaning: "複合的な（建物）",
    sentence: "a leisure ( )",
    jp: "総合レジャーセンター（複合施設）",
    jpBlank: "総合レジャー(   )",
    jpAnswer: "センター"
  },
  {
    wordNo: undefined,
    word: "complex",
    meaning: "強迫観念（まれ）",
    sentence: "an inferiority ( )",
    jp: "劣等感（劣っているという強迫観念）",
    jpBlank: "(   )",
    jpAnswer: "劣等感"
  },
  {
    wordNo: undefined,
    word: "complicated",
    meaning: "複雑な、ややこしい",
    sentence: "make things ( )",
    jp: "事態を複雑にする",
    jpBlank: "事態を複雑に(   )",
    jpAnswer: "する"
  },
  {
    wordNo: undefined,
    word: "delicate",
    meaning: "繊細な、微妙な",
    sentence: "the ( ) question of salary",
    jp: "給与という繊細な問題",
    jpBlank: "給与という(   )問題",
    jpAnswer: "繊細な"
  },
  {
    wordNo: undefined,
    word: "delicate",
    meaning: "（人が）虚弱な",
    sentence: "a ( ) child",
    jp: "虚弱な子ども",
    jpBlank: "(   )子ども",
    jpAnswer: "虚弱な"
  },
  {
    wordNo: undefined,
    word: "plain",
    meaning: "明白な、わかりやすい",
    sentence: "write in ( ) English",
    jp: "平易な英語で書く",
    jpBlank: "平易な英語で(   )",
    jpAnswer: "書く"
  },
  {
    wordNo: undefined,
    word: "plain",
    meaning: "質素な",
    sentence: "a ( ) building",
    jp: "飾り気のない建物",
    jpBlank: "飾り気のない(   )",
    jpAnswer: "建物"
  },
  {
    wordNo: undefined,
    word: "plain",
    meaning: "平野、原野",
    sentence: "the Kanto ( )",
    jp: "関東平野",
    jpBlank: "関東(   )",
    jpAnswer: "平野"
  },
  {
    wordNo: undefined,
    word: "obvious",
    meaning: "明白な",
    sentence: "It was ( ) that she was unwell.",
    jp: "彼女の体調がすぐれないのは明白だった。",
    jpBlank: "(   )すぐれないのは明白だった。",
    jpAnswer: "彼女の体調が"
  },
  {
    wordNo: undefined,
    word: "remarkable",
    meaning: "注目すべき、すばらしい",
    sentence: "make ( ) progress",
    jp: "注目すべき進歩を遂げる",
    jpBlank: "(   )進歩を遂げる",
    jpAnswer: "注目すべき"
  },
  {
    wordNo: undefined,
    word: "outstanding",
    meaning: "傑出した、目立った",
    sentence: "an ( ) shogi player",
    jp: "傑出した棋士",
    jpBlank: "(   )棋士",
    jpAnswer: "傑出した"
  },
  {
    wordNo: undefined,
    word: "various",
    meaning: "さまざまな",
    sentence: "( ) ideas",
    jp: "さまざまな考え",
    jpBlank: "(   )考え",
    jpAnswer: "さまざまな"
  },
  {
    wordNo: undefined,
    word: "various",
    meaning: "さまざまな",
    sentence: "( ) kinds of information",
    jp: "さまざまな情報",
    jpBlank: "(   )情報",
    jpAnswer: "さまざまな"
  },
  {
    wordNo: undefined,
    word: "diversity",
    meaning: "多様性",
    sentence: "the ( ) of life on earth",
    jp: "地上の生物の多様性",
    jpBlank: "地上の生物の(   )",
    jpAnswer: "多様性"
  },
  {
    wordNo: undefined,
    word: "sort",
    meaning: "種類",
    sentence: "What ( ) of soap do you use?",
    jp: "どのような（種類の）石けんを使っているの。",
    jpBlank: "どのような(   )石けんを使っているの。",
    jpAnswer: "種類の"
  },
  {
    wordNo: undefined,
    word: "sort",
    meaning: "（副詞的に）（～が多少）",
    sentence: "I'm ( ) of tired today.",
    jp: "今日はちょっと疲れている。",
    jpBlank: "今日は(   )疲れている。",
    jpAnswer: "ちょっと"
  },
  {
    wordNo: undefined,
    word: "sort",
    meaning: "…を分類する",
    sentence: "The watermelons are ( )ed according to size.",
    jp: "スイカは大きさによって分類されている。",
    jpBlank: "スイカは大きさによって(   )されている。",
    jpAnswer: "分類"
  },
  {
    wordNo: undefined,
    word: "marvelous",
    meaning: "驚くべき、素晴らしい",
    sentence: "have a ( ) memory",
    jp: "驚くべき記憶力を持っている",
    jpBlank: "(   )記憶力を持っている",
    jpAnswer: "驚くべき"
  },
  {
    wordNo: undefined,
    word: "active",
    meaning: "積極的な、活発な",
    sentence: "lead an ( ) school life",
    jp: "活動的な学校生活を送る",
    jpBlank: "活動的な学校(   )",
    jpAnswer: "生活を送る"
  },
  {
    wordNo: undefined,
    word: "positive",
    meaning: "前向きな、積極的な",
    sentence: "( ) thinking",
    jp: "前向きな考え",
    jpBlank: "(   )考え",
    jpAnswer: "前向きな"
  },
  {
    wordNo: undefined,
    word: "positive",
    meaning: "確信している",
    sentence: "Are you ( )?",
    jp: "自信あるの（確信しているの）？",
    jpBlank: "(   )？",
    jpAnswer: "自信あるの"
  },
  {
    wordNo: undefined,
    word: "pure",
    meaning: "純粋な",
    sentence: "a ( ) wool blanket",
    jp: "100%（純粋な）ウールの毛布",
    jpBlank: "100%(   )ウールの毛布",
    jpAnswer: "純粋な"
  },
  {
    wordNo: undefined,
    word: "pure",
    meaning: "（水、空気が）澄んだ",
    sentence: "( ) air and water",
    jp: "澄み切った空気と水",
    jpBlank: "澄み切った空(   )",
    jpAnswer: "気と水"
  },
  {
    wordNo: undefined,
    word: "steady",
    meaning: "着実な、一定の",
    sentence: "make ( ) progress",
    jp: "着実に進歩する（着実な進歩をする）",
    jpBlank: "(   )進歩する",
    jpAnswer: "着実に"
  },
  {
    wordNo: undefined,
    word: "flexible",
    meaning: "柔軟な、融通のきく",
    sentence: "Jim is ( ) about everything.",
    jp: "ジムはあらゆるときに柔軟に対応する。",
    jpBlank: "ジムはあらゆるときに柔軟(   )。",
    jpAnswer: "に対応する"
  },
  {
    wordNo: undefined,
    word: "ripe",
    meaning: "熟した",
    sentence: "a ( ) mango",
    jp: "熟したマンゴー",
    jpBlank: "(   )マンゴー",
    jpAnswer: "熟した"
  },
  {
    wordNo: undefined,
    word: "stable",
    meaning: "安定した",
    sentence: "His temperature remains ( ).",
    jp: "彼の体温は安定している。",
    jpBlank: "彼の体温は安(   )。",
    jpAnswer: "定している"
  },
  {
    wordNo: undefined,
    word: "stable",
    meaning: "馬小屋、きゅう舎",
    sentence: "a racehorse ( )",
    jp: "競走馬のきゅう舎",
    jpBlank: "競走馬の(   )",
    jpAnswer: "きゅう舎"
  },
  {
    wordNo: undefined,
    word: "negative",
    meaning: "否定的な、否定の",
    sentence: "the ( ) aspects of aging",
    jp: "歳をとることの否定的な側面",
    jpBlank: "歳をとることの(   )側面",
    jpAnswer: "否定的な"
  },
  {
    wordNo: undefined,
    word: "vague",
    meaning: "曖昧な、漠然とした",
    sentence: "a ( ) description",
    jp: "曖昧な説明",
    jpBlank: "(   )説明",
    jpAnswer: "曖昧な"
  },
  {
    wordNo: undefined,
    word: "weird",
    meaning: "変な",
    sentence: "Steve is a little ( ), isn't he?",
    jp: "スティーブってちょっと変だよね。",
    jpBlank: "スティーブってちょっと変(   )。",
    jpAnswer: "だよね"
  },
  {
    wordNo: undefined,
    word: "rough",
    meaning: "（表面が）粗い",
    sentence: "a ( ) road",
    jp: "でこぼこの道",
    jpBlank: "(   )",
    jpAnswer: "でこぼこの道"
  },
  {
    wordNo: undefined,
    word: "rough",
    meaning: "おおざっぱな",
    sentence: "a ( ) idea of the plan",
    jp: "その計画の概略（おおまかな考え）",
    jpBlank: "(   )略",
    jpAnswer: "その計画の概"
  },
  {
    wordNo: undefined,
    word: "rough",
    meaning: "（海、天候などが）荒れている",
    sentence: "( ) weather",
    jp: "荒れた天候",
    jpBlank: "(   )",
    jpAnswer: "荒れた天候"
  },
  {
    wordNo: undefined,
    word: "severe",
    meaning: "（天候、批判、罰などが）厳しい",
    sentence: "( ) criticism",
    jp: "厳しい批判",
    jpBlank: "(   )批判",
    jpAnswer: "厳しい"
  },
  {
    wordNo: undefined,
    word: "severe",
    meaning: "（けが、問題などが）ひどい",
    sentence: "a ( ) injury",
    jp: "ひどいけが",
    jpBlank: "(   )けが",
    jpAnswer: "ひどい"
  },
  {
    wordNo: undefined,
    word: "passive",
    meaning: "受動的な、消極的な",
    sentence: "He is quite ( ), and never speaks out.",
    jp: "彼はかなり消極的で、決して意見をはっきり言わない。",
    jpBlank: "彼はかなり(   )的で、決して意見をはっきり言わない。",
    jpAnswer: "消極"
  },
  {
    wordNo: undefined,
    word: "vain",
    meaning: "無駄に",
    sentence: "His effort was ( )",
    jp: "彼の努力は無駄になった。",
    jpBlank: "彼の努力は(   )なった。",
    jpAnswer: "無駄に"
  },
  {
    wordNo: undefined,
    word: "vain",
    meaning: "（努力などが）無益な",
    sentence: "( ) attempt",
    jp: "無駄な試みをして",
    jpBlank: "無駄な試みを(   )",
    jpAnswer: "して"
  },
  {
    wordNo: undefined,
    word: "vain",
    meaning: "うぬぼれの強い",
    sentence: "a ( ) man",
    jp: "虚栄心の強い男性",
    jpBlank: "虚栄心の強い(   )",
    jpAnswer: "男性"
  },
  {
    wordNo: undefined,
    word: "fake",
    meaning: "偽の、偽造の",
    sentence: "a ( ) diamond",
    jp: "偽物のダイヤモンド",
    jpBlank: "偽物のダイヤ(   )",
    jpAnswer: "モンド"
  },
  {
    wordNo: undefined,
    word: "fake",
    meaning: "偽造品",
    sentence: "The picture was a ( ).",
    jp: "その絵は偽物だった。",
    jpBlank: "その絵は偽物(   )。",
    jpAnswer: "だった"
  },
  {
    wordNo: undefined,
    word: "risky",
    meaning: "危険な、危ない",
    sentence: "It is ( ) to buy a used car from a private seller.",
    jp: "個人の売り手から中古車を買うのは危険だ。",
    jpBlank: "(   )から中古車を買うのは危険だ。",
    jpAnswer: "個人の売り手"
  },
  {
    wordNo: undefined,
    word: "odd",
    meaning: "奇妙な",
    sentence: "an ( ) habit",
    jp: "奇妙な習慣",
    jpBlank: "(   )習慣",
    jpAnswer: "奇妙な"
  },
  {
    wordNo: undefined,
    word: "odd",
    meaning: "奇数の",
    sentence: "a ticket with an ( ) number",
    jp: "奇数の番号札",
    jpBlank: "(   )番号札",
    jpAnswer: "奇数の"
  },
  {
    wordNo: undefined,
    word: "odd",
    meaning: "半端な、雑多な",
    sentence: "an ( ) job",
    jp: "雑用（雑多な仕事）",
    jpBlank: "(   )",
    jpAnswer: "雑用"
  },
  {
    wordNo: undefined,
    word: "odd",
    meaning: "（the ~s）可能性",
    sentence: "the ( ) of a plane crash",
    jp: "飛行機が墜落する可能性",
    jpBlank: "飛行機が墜落する(   )",
    jpAnswer: "可能性"
  },
  {
    wordNo: undefined,
    word: "ignorant",
    meaning: "無知の",
    sentence: "Doris is ( ) of the world.",
    jp: "ドリスは世間知らずだ（世界について無知だ）",
    jpBlank: "ドリスは世間(   )",
    jpAnswer: "知らずだ"
  },
  {
    wordNo: undefined,
    word: "contrast",
    meaning: "対比",
    sentence: "the ( ) between the two",
    jp: "その両者の対比",
    jpBlank: "その両者の(   )",
    jpAnswer: "対比"
  },
  {
    wordNo: undefined,
    word: "contrast",
    meaning: "…を対比する",
    sentence: "( ) two things",
    jp: "2つの物を対比する",
    jpBlank: "2つの物を対比(   )",
    jpAnswer: "する"
  },
  {
    wordNo: undefined,
    word: "contrast",
    meaning: "対照をなす",
    sentence: "( ) with the previous results",
    jp: "前回の結果と対照的だ（対照をなす）",
    jpBlank: "前回の結果と(   )",
    jpAnswer: "対照的だ"
  },
  {
    wordNo: undefined,
    word: "valid",
    meaning: "（理由、主張などが）妥当な、正当な",
    sentence: "a ( ) reason",
    jp: "妥当な理由",
    jpBlank: "(   )理由",
    jpAnswer: "妥当な"
  },
  {
    wordNo: undefined,
    word: "valid",
    meaning: "（切符などが）有効な",
    sentence: "This passport is ( ) for ten years.",
    jp: "このパスポートは10年間有効です。",
    jpBlank: "このパスポー(   )10年間有効です。",
    jpAnswer: "トは"
  },
  {
    wordNo: undefined,
    word: "rare",
    meaning: "珍しい",
    sentence: "collect ( ) stamps",
    jp: "珍しい切手を集める",
    jpBlank: "(   )切手を集める",
    jpAnswer: "珍しい"
  },
  {
    wordNo: undefined,
    word: "casual",
    meaning: "ふとした、何気ない",
    sentence: "I feel more relaxed in ( ) clothes",
    jp: "ふだん着（気楽な服）のほうが落ち着く",
    jpBlank: "ふだん着(   )のほうが落ち着く",
    jpAnswer: "気楽な服"
  },
  {
    wordNo: undefined,
    word: "casual",
    meaning: "形式ばらない",
    sentence: "a ( ) remark",
    jp: "ふとした発言",
    jpBlank: "(   )",
    jpAnswer: "ふとした発言"
  },
],
800: [
  {
    wordNo: 800,
    word: "available",
    meaning: "（人の予定が）空いている",
    sentence: "Mr. Rogers is (   ) today.",
    jp: "ロジャース氏は本日時間がとれます。",
    jpBlank: "ロジャース氏は本日(   )。",
    jpAnswer: "時間がとれます"
  },
  {
    wordNo: 801,
    word: "practical",
    meaning: "（人，知識が）現実的な，実務の",
    sentence: "gain (   ) experience",
    jp: "実践経験を積む",
    jpBlank: "(   )む",
    jpAnswer: "実践経験を積"
  },
  {
    wordNo: 801,
    word: "practical",
    meaning: "（発明，道具などが）実用的な，実践的な",
    sentence: "a (   ) training system",
    jp: "実践的な練習方法",
    jpBlank: "(   )的な練習方法",
    jpAnswer: "実践"
  },
  {
    wordNo: 802,
    word: "abstract",
    meaning: "抽象的な",
    sentence: "an (   ) work of art",
    jp: "抽象的な芸術作品",
    jpBlank: "(   )的な芸術作品",
    jpAnswer: "抽象"
  },
  {
    wordNo: 802,
    word: "abstract",
    meaning: "（論文などの）要旨",
    sentence: "an (   ) of this paper",
    jp: "この論文の要旨",
    jpBlank: "この論文の(   )",
    jpAnswer: "要旨"
  },
  {
    wordNo: 803,
    word: "brand-new",
    meaning: "新品の，真新しい",
    sentence: "(   ) climbing boots",
    jp: "新品の登山靴",
    jpBlank: "(   )登山靴",
    jpAnswer: "新品の"
  },
  {
    wordNo: 804,
    word: "secondhand",
    meaning: "中古の",
    sentence: "buy (   ) clothes cheaply",
    jp: "古着を安く買う",
    jpBlank: "(   )う",
    jpAnswer: "古着を安く買"
  },
  {
    wordNo: 804,
    word: "secondhand",
    meaning: "間接的な",
    sentence: "(   ) news",
    jp: "又聞きのニュース",
    jpBlank: "又聞きのニュ(   )",
    jpAnswer: "ース"
  },
  {
    wordNo: 805,
    word: "rapid",
    meaning: "急速な，速い",
    sentence: "(   ) economic growth",
    jp: "急速な経済成長",
    jpBlank: "(   )経済成長",
    jpAnswer: "急速な"
  },
  {
    wordNo: 805,
    word: "rapids",
    meaning: "急速な，速い",
    sentence: "shoot the (   ) in our canoe",
    jp: "急流をカヌーで下る",
    jpBlank: "急流をカヌー(   )",
    jpAnswer: "で下る"
  },
  {
    wordNo: 806,
    word: "urgent",
    meaning: "緊急の，差し迫った",
    sentence: "There is an (   ) need for more nursery schools.",
    jp: "もっと多くの保育所が緊急に必要だ。",
    jpBlank: "もっと多くの保育所が緊急(   )。",
    jpAnswer: "に必要だ"
  },
  {
    wordNo: 807,
    word: "shallow",
    meaning: "浅い",
    sentence: "a (   ) bathtub",
    jp: "浅い浴槽",
    jpBlank: "(   )浴槽",
    jpAnswer: "浅い"
  },
  {
    wordNo: 807,
    word: "shallow",
    meaning: "（人，言動などが）浅はかな",
    sentence: "(   ) speech",
    jp: "中身のない演説",
    jpBlank: "(   )説",
    jpAnswer: "中身のない演"
  },
  {
    wordNo: 808,
    word: "sharp",
    meaning: "（変化，方向転換などが）急激な",
    sentence: "a (   ) increase in prices",
    jp: "急激な物価の上昇",
    jpBlank: "(   )物価の上昇",
    jpAnswer: "急激な"
  },
  {
    wordNo: 808,
    word: "sharp",
    meaning: "（言葉が）きつい",
    sentence: "his (   ) tongue",
    jp: "彼の毒舌（きつい言葉）",
    jpBlank: "(   )",
    jpAnswer: "彼の毒舌"
  },
  {
    wordNo: 808,
    word: "sharp",
    meaning: "（刃物，感覚，人などが）鋭い",
    sentence: "a (   ) knife",
    jp: "鋭いナイフ",
    jpBlank: "(   )ナイフ",
    jpAnswer: "鋭い"
  },
  {
    wordNo: 808,
    word: "sharp",
    meaning: "（時間）きっかりで",
    sentence: "at ten (o'clock) (   )",
    jp: "10時きっかりに",
    jpBlank: "10(   )",
    jpAnswer: "時きっかりに"
  },
  {
    wordNo: 809,
    word: "calm",
    meaning: "落ち着いた",
    sentence: "The supporters stayed (   ).",
    jp: "サポーターたちは落ち着いていた。",
    jpBlank: "サポーターたちは落ち着い(   )。",
    jpAnswer: "ていた"
  },
  {
    wordNo: 809,
    word: "calm",
    meaning: "落ち着く",
    sentence: "Try and (   ) down.",
    jp: "落ち着きなさい。",
    jpBlank: "(   )きなさい。",
    jpAnswer: "落ち着"
  },
  {
    wordNo: 809,
    word: "calm",
    meaning: "〜を落ち着かせる",
    sentence: "The doctor used medicine to (   ) him down.",
    jp: "医者は彼を落ち着かせるために薬を使った。",
    jpBlank: "医者は彼を(   )ために薬を使った。",
    jpAnswer: "落ち着かせる"
  },
  {
    wordNo: 810,
    word: "naked",
    meaning: "（人が）裸の，むき出しの",
    sentence: "swim (   ) in the river",
    jp: "川で裸で（裸の状態で）泳ぐ",
    jpBlank: "川で裸で(   )泳ぐ",
    jpAnswer: "裸の状態で"
  },
  {
    wordNo: 811,
    word: "independent",
    meaning: "独立した，無所属の",
    sentence: "I am (   ) of my parents.",
    jp: "私は両親の世話になっていない（両親から独立している）。",
    jpBlank: "私は両親の世話になってい(   )。",
    jpAnswer: "ない"
  },
  {
    wordNo: 811,
    word: "independent",
    meaning: "独立した，無所属の",
    sentence: "run as an (   )",
    jp: "無所属で立候補する",
    jpBlank: "(   )で立候補する",
    jpAnswer: "無所属"
  },
  {
    wordNo: 812,
    word: "tense",
    meaning: "（雰囲気が）張り詰めた",
    sentence: "a (   ) atmosphere in the waiting room",
    jp: "待合室の張り詰めた雰囲気",
    jpBlank: "待合室の(   )雰囲気",
    jpAnswer: "張り詰めた"
  },
  {
    wordNo: 812,
    word: "tense",
    meaning: "（人が）緊張した",
    sentence: "The examinees looked (   ).",
    jp: "受験生たちは緊張しているようだった。",
    jpBlank: "受験生たちは緊張している(   )。",
    jpAnswer: "ようだった"
  },
  {
    wordNo: 812,
    word: "tense",
    meaning: "時制",
    sentence: "the present (   )",
    jp: "現在時制",
    jpBlank: "現在(   )",
    jpAnswer: "時制"
  },
  {
    wordNo: 813,
    word: "narrow",
    meaning: "狭い",
    sentence: "a (   ) mountain path",
    jp: "狭い山道",
    jpBlank: "(   )山道",
    jpAnswer: "狭い"
  },
  {
    wordNo: 813,
    word: "narrow",
    meaning: "〜を狭くする，細める",
    sentence: "(   ) my eyes",
    jp: "目を細める",
    jpBlank: "目を(   )",
    jpAnswer: "細める"
  },
  {
    wordNo: 814,
    word: "vacant",
    meaning: "（席などが）空いている，使用されていない",
    sentence: "The seat next to mine was (   ).",
    jp: "私の隣の席は空いていた。",
    jpBlank: "私の隣の席は(   )た。",
    jpAnswer: "空いてい"
  },
  {
    wordNo: 815,
    word: "vivid",
    meaning: "（記憶，描写などが）鮮明な",
    sentence: "have (   ) memories of my time in Sydney",
    jp: "シドニーで過ごした日々の鮮明な思い出が残っている。",
    jpBlank: "シドニーで過ごした日々の(   )思い出が残っている。",
    jpAnswer: "鮮明な"
  },
],
815: [
  {
    wordNo: 815,
    word: "vivid",
    meaning: "（色が）鮮やかな",
    sentence: "a (   ) blue sky",
    jp: "目の覚めるような青空。",
    jpBlank: "目の(   )青空。",
    jpAnswer: "覚めるような"
  },
  {
    wordNo: 816,
    word: "awkward",
    meaning: "（動きなどが）ぎこちない",
    sentence: "the (   ) movements of the robot",
    jp: "そのロボットのぎこちない動き",
    jpBlank: "そのロボットの(   )動き",
    jpAnswer: "ぎこちない"
  },
  {
    wordNo: 816,
    word: "awkward",
    meaning: "（状況が）気まずい",
    sentence: "After I laughed out loud, there was an (   ) silence.",
    jp: "私が大声で笑った後，気まずい沈黙があった。",
    jpBlank: "私が大声で笑った後，(   )沈黙があった。",
    jpAnswer: "気まずい"
  },
  {
    wordNo: 816,
    word: "awkward",
    meaning: "扱いにくい",
    sentence: "(   ) questions like \"Where do babies come from?\"",
    jp: "「赤ちゃんはどこから来るの？」といった困った（扱いにくい）質問",
    jpBlank: "「赤ちゃんはどこから来るの？」といった困った(   )質問",
    jpAnswer: "扱いにくい"
  },
  {
    wordNo: 817,
    word: "objective",
    meaning: "客観的な",
    sentence: "Historians try to be (   ).",
    jp: "歴史家は客観的であるよう努める。",
    jpBlank: "歴史家は(   )的であるよう努める。",
    jpAnswer: "客観"
  },
  {
    wordNo: 817,
    word: "objective",
    meaning: "目標",
    sentence: "Our main (   ) is to help the homeless.",
    jp: "私たちの主な目的はホームレスの方々に力になることだ。",
    jpBlank: "私たちの主な目的はホームレスの方々に力になるこ(   )。",
    jpAnswer: "とだ"
  },
  {
    wordNo: 818,
    word: "manual",
    meaning: "手を使う，身体を使う",
    sentence: "(   ) work",
    jp: "手仕事（＝頭脳労働）",
    jpBlank: "(   )",
    jpAnswer: "手仕事"
  },
  {
    wordNo: 818,
    word: "manual",
    meaning: "手動の",
    sentence: "switch to (   ) operation",
    jp: "手動（の操作）に切り替える",
    jpBlank: "手動(   )に切り替える",
    jpAnswer: "の操作"
  },
  {
    wordNo: 818,
    word: "manual",
    meaning: "手引書",
    sentence: "a computer (   )",
    jp: "コンピュータの手引書",
    jpBlank: "コンピュータの(   )",
    jpAnswer: "手引書"
  },
  {
    wordNo: 819,
    word: "alike",
    meaning: "似ている",
    sentence: "The twins are very (   ).",
    jp: "その双子はとてもよく似ている。",
    jpBlank: "その双子はとてもよく(   )。",
    jpAnswer: "似ている"
  },
  {
    wordNo: 819,
    word: "alike",
    meaning: "（A and B 〜）（AもBも）同様に",
    sentence: "Children and parents (   ) can enjoy this book.",
    jp: "この本は子ども共々（子どもも親も）同様に楽しめる。",
    jpBlank: "この本は子ども共々(   )楽しめる。",
    jpAnswer: "同様に"
  },
  {
    wordNo: 820,
    word: "alien",
    meaning: "異質な",
    sentence: "a custom that is (   ) to me",
    jp: "私にとって異質な慣習",
    jpBlank: "私にとって(   )慣習",
    jpAnswer: "異質な"
  },
  {
    wordNo: 820,
    word: "alien",
    meaning: "外国の",
    sentence: "(   ) cultures",
    jp: "外国の文化",
    jpBlank: "(   )文化",
    jpAnswer: "外国の"
  },
  {
    wordNo: 821,
    word: "tend",
    meaning: "（to do）〜する傾向にある",
    sentence: "Women (   ) to count calories more than men do.",
    jp: "女性は男性よりカロリー計算をする傾向がある。",
    jpBlank: "女性は男性よりカロリー計算をする傾向(   )。",
    jpAnswer: "がある"
  },
  {
    wordNo: 822,
    word: "deserves",
    meaning: "〜に値する",
    sentence: "Masato has trained so hard that he (   ) to win.",
    jp: "マサトは一生懸命トレーニングしたので，勝ってもおかしくない（勝つのに値する）。",
    jpBlank: "マサトは一生懸命トレーニングしたので，勝ってもおか(   )。",
    jpAnswer: "しくない"
  },
  {
    wordNo: 823,
    word: "fragments",
    meaning: "破片",
    sentence: "glass (   )",
    jp: "ガラスの破片",
    jpBlank: "ガラスの(   )",
    jpAnswer: "破片"
  },
  {
    wordNo: 824,
    word: "range",
    meaning: "範囲",
    sentence: "a wide (   ) of topics",
    jp: "幅広い話題",
    jpBlank: "(   )",
    jpAnswer: "幅広い話題"
  },
  {
    wordNo: 824,
    word: "range",
    meaning: "（from A to B）（AからBの）範囲に及ぶ",
    sentence: "Their ages (   ) from seven to eleven.",
    jp: "彼らの年齢は7歳から11歳にわたっている。",
    jpBlank: "彼らの年齢は7歳から11歳にわたって(   )。",
    jpAnswer: "いる"
  },
  {
    wordNo: 825,
    word: "scale",
    meaning: "規模",
    sentence: "do business on a large (   )",
    jp: "手広く（大規模に）商売をする",
    jpBlank: "手広く(   )商売をする",
    jpAnswer: "大規模に"
  },
  {
    wordNo: 825,
    word: "scale(s)",
    meaning: "（-s）体重計",
    sentence: "step on the (   )",
    jp: "体重計に乗る",
    jpBlank: "(   )に乗る",
    jpAnswer: "体重計"
  },
  {
    wordNo: 825,
    word: "scales",
    meaning: "うろこ",
    sentence: "remove (   ) from a fish",
    jp: "魚のうろこを落とす",
    jpBlank: "魚の(   )を落とす",
    jpAnswer: "うろこ"
  },
  {
    wordNo: 826,
    word: "unique",
    meaning: "（to 〜）（〜に）特有の，独自の",
    sentence: "This custom is (   ) to Japan.",
    jp: "この慣習は日本特有のものだ。",
    jpBlank: "この慣習は日本(   )ものだ。",
    jpAnswer: "特有の"
  },
  {
    wordNo: 826,
    word: "unique",
    meaning: "ほかに類を見ない",
    sentence: "Her voice is totally (   ).",
    jp: "彼女の声はとても独特だ。",
    jpBlank: "彼女の声はとても(   )だ。",
    jpAnswer: "独特"
  },
  {
    wordNo: 827,
    word: "particular",
    meaning: "ある特定の",
    sentence: "a (   ) situation",
    jp: "特定の状況",
    jpBlank: "(   )",
    jpAnswer: "特定の状況"
  },
  {
    wordNo: 827,
    word: "particular",
    meaning: "（about 〜）（〜に）こだわりがある",
    sentence: "I am (   ) about pillows.",
    jp: "私は枕にこだわりがある。",
    jpBlank: "私は枕に(   )。",
    jpAnswer: "こだわりがある"
  },
  {
    wordNo: 827,
    word: "particular",
    meaning: "ある特定の",
    sentence: "Nothing in (   ).",
    jp: "（意見や予定などを尋ねられた答えとして）特にないです。",
    jpBlank: "(   )。",
    jpAnswer: "特にないです"
  },
  {
    wordNo: 828,
    word: "typical",
    meaning: "典型的な",
    sentence: "a (   ) Japanese-style breakfast",
    jp: "典型的な日本の朝食",
    jpBlank: "(   )的な日本の朝食",
    jpAnswer: "典型"
  },
  {
    wordNo: 829,
    word: "general",
    meaning: "一般的な，全体の",
    sentence: "the (   ) public",
    jp: "一般大衆",
    jpBlank: "(   )大衆",
    jpAnswer: "一般"
  },
  {
    wordNo: 829,
    word: "General",
    meaning: "大将，将軍",
    sentence: "(   ) Grant",
    jp: "グラント将軍",
    jpBlank: "グラント(   )",
    jpAnswer: "将軍"
  },
  {
    wordNo: 830,
    word: "ordinary",
    meaning: "平凡な，ふつうの",
    sentence: "the lives of (   ) people",
    jp: "庶民（ふつうの人々）の生活",
    jpBlank: "庶民(   )の生活",
    jpAnswer: "ふつうの人々"
  },
],
831: [
  {
    wordNo: 831,
    word: "account",
    meaning: "割合を占める",
    sentence: "Middle-aged and older people (   ) for 70% of the group.",
    jp: "中高年がその集団の70％を占める。",
    jpBlank: "中高年がその(   )70％を占める。",
    jpAnswer: "集団の"
  },
  {
    wordNo: 831,
    word: "accounts",
    meaning: "（〜の）原因を説明する",
    sentence: "Stress (   ) for his failure.",
    jp: "ストレスが彼の失敗の原因だ。",
    jpBlank: "(   )の失敗の原因だ。",
    jpAnswer: "ストレスが彼"
  },
  {
    wordNo: 831,
    word: "account",
    meaning: "説明",
    sentence: "by her (   )",
    jp: "彼女の説明では",
    jpBlank: "彼女の(   )では",
    jpAnswer: "説明"
  },
  {
    wordNo: 831,
    word: "account",
    meaning: "口座",
    sentence: "open a bank (   )",
    jp: "銀行口座を開く",
    jpBlank: "銀行(   )を開く",
    jpAnswer: "口座"
  },
  {
    wordNo: 832,
    word: "calculate",
    meaning: "〜を計算する",
    sentence: "(   ) this month's expenses",
    jp: "今月の出費を計算する",
    jpBlank: "今月の出費を(   )する",
    jpAnswer: "計算"
  },
  {
    wordNo: 833,
    word: "measure",
    meaning: "〜を測る",
    sentence: "Please (   ) your blood pressure.",
    jp: "血圧を測ってください。",
    jpBlank: "血圧を測って(   )。",
    jpAnswer: "ください"
  },
  {
    wordNo: 833,
    word: "measures",
    meaning: "（〜の）寸法がある",
    sentence: "His waist (   ) over a meter.",
    jp: "彼のウエストは1メートルを超えている（寸法がある）。",
    jpBlank: "彼のウエストは1メートルを超えている(   )。",
    jpAnswer: "寸法がある"
  },
  {
    wordNo: 833,
    word: "measures",
    meaning: "（-s）手段",
    sentence: "take drastic (   ) to pass the bill",
    jp: "法案を通すために強硬手段に出る",
    jpBlank: "法案を通すために強硬(   )に出る",
    jpAnswer: "手段"
  },
  {
    wordNo: 834,
    word: "declining",
    meaning: "減る，衰退する",
    sentence: "Educational standards are (   ).",
    jp: "教育水準が下がっている。",
    jpBlank: "教育水準が(   )。",
    jpAnswer: "下がっている"
  },
  {
    wordNo: 834,
    word: "decline",
    meaning: "〜を断る",
    sentence: "(   ) an invitation to dinner",
    jp: "夕食の誘いを断る",
    jpBlank: "夕食の誘いを(   )",
    jpAnswer: "断る"
  },
  {
    wordNo: 834,
    word: "decline",
    meaning: "減少，下落",
    sentence: "a sharp (   ) in unemployment",
    jp: "失業率の急激な減少",
    jpBlank: "失業率の急激な(   )",
    jpAnswer: "減少"
  },
  {
    wordNo: 835,
    word: "split",
    meaning: "〜を割る",
    sentence: "Let's (   ) the bill.",
    jp: "割り勘にしよう（勘定を割る）。",
    jpBlank: "割り勘にしよう(   )。",
    jpAnswer: "勘定を割る"
  },
  {
    wordNo: 835,
    word: "split",
    meaning: "〜を分裂させる",
    sentence: "The issue (   ) the church.",
    jp: "その問題は教会を分裂させた。",
    jpBlank: "その問題は教会を(   )た。",
    jpAnswer: "分裂させ"
  },
  {
    wordNo: 835,
    word: "split",
    meaning: "〜を割る",
    sentence: "(   ) into three groups",
    jp: "3つのグループに分かれる",
    jpBlank: "3つのグループ(   )",
    jpAnswer: "に分かれる"
  },
  {
    wordNo: 835,
    word: "split",
    meaning: "分裂",
    sentence: "a (   ) in the party",
    jp: "党の分裂",
    jpBlank: "党の(   )",
    jpAnswer: "分裂"
  },
  {
    wordNo: 836,
    word: "volume",
    meaning: "容積，体積",
    sentence: "the (   ) of a cylinder",
    jp: "円柱の体積",
    jpBlank: "円柱の(   )",
    jpAnswer: "体積"
  },
  {
    wordNo: 836,
    word: "volume",
    meaning: "ボリューム，音量",
    sentence: "turn down the (   ) on the TV",
    jp: "テレビのボリュームを小さくする",
    jpBlank: "テレビの(   )を小さくする",
    jpAnswer: "ボリューム"
  },
  {
    wordNo: 836,
    word: "volumes",
    meaning: "（全集などの）1巻",
    sentence: "an encyclopedia in 30 (   )",
    jp: "30巻からなる百科事典",
    jpBlank: "30(   )からなる百科事典",
    jpAnswer: "巻"
  },
  {
    wordNo: 837,
    word: "proportion",
    meaning: "比率",
    sentence: "The (   ) of boys to girls in my school is five to one.",
    jp: "私の学校の男女比は5：1だ。",
    jpBlank: "私の学校の男(   )5：1だ。",
    jpAnswer: "女比は"
  },
  {
    wordNo: 837,
    word: "proportion",
    meaning: "部分",
    sentence: "a large (   ) of the audience",
    jp: "観客の大部分",
    jpBlank: "観客の大(   )",
    jpAnswer: "部分"
  },
  {
    wordNo: 837,
    word: "proportions",
    meaning: "（-s）規模，大きさ",
    sentence: "a dam of great (   )",
    jp: "大規模なダム",
    jpBlank: "大(   )なダム",
    jpAnswer: "規模"
  },
  {
    wordNo: 838,
    word: "dozen",
    meaning: "1ダース（12個）",
    sentence: "two (   ) eggs",
    jp: "2ダースの卵",
    jpBlank: "2(   )の卵",
    jpAnswer: "ダース"
  },
  {
    wordNo: 838,
    word: "dozens",
    meaning: "（-s of 〜）数〜",
    sentence: "(   ) of people",
    jp: "数十人",
    jpBlank: "(   )",
    jpAnswer: "数十人"
  },
  {
    wordNo: 839,
    word: "amount",
    meaning: "量",
    sentence: "a large (   ) of fat",
    jp: "大量の脂肪",
    jpBlank: "(   )",
    jpAnswer: "大量の脂肪"
  },
  {
    wordNo: 839,
    word: "amount",
    meaning: "（to 〜）（合計が）〜に達する",
    sentence: "My debts (   ) to $200.",
    jp: "私の借金は合計200ドルになる。",
    jpBlank: "私の借金は合計(   )。",
    jpAnswer: "200ドルになる"
  },
  {
    wordNo: 839,
    word: "amount",
    meaning: "結局〜になる",
    sentence: "Our ideas (   ) to the same thing.",
    jp: "私たちの考えは結局同じことだ。",
    jpBlank: "私たちの考えは結局同じこ(   )。",
    jpAnswer: "とだ"
  },
  {
    wordNo: 840,
    word: "mass",
    meaning: "大量",
    sentence: "a huge (   ) of data",
    jp: "非常に多くのデータ",
    jpBlank: "非常に(   )データ",
    jpAnswer: "多くの"
  },
  {
    wordNo: 840,
    word: "masses",
    meaning: "（the -es）大衆",
    sentence: "a movie aimed at the (   )",
    jp: "大衆向けの映画",
    jpBlank: "(   )向けの映画",
    jpAnswer: "大衆"
  },
  {
    wordNo: 840,
    word: "mass",
    meaning: "かたまり",
    sentence: "a (   ) of concrete",
    jp: "コンクリートのかたまり",
    jpBlank: "コンクリートの(   )",
    jpAnswer: "かたまり"
  },
  {
    wordNo: 840,
    word: "mass",
    meaning: "質量",
    sentence: "the (   ) of our solar system",
    jp: "太陽系の質量",
    jpBlank: "太陽系の(   )",
    jpAnswer: "質量"
  },
],
840: [
  {
    wordNo: 840,
    word: "Mass",
    meaning: "（M-）ミサ",
    sentence: "go to (   )",
    jp: "ミサに行く",
    jpBlank: "(   )に行く",
    jpAnswer: "ミサ"
  },
  {
    wordNo: 841,
    word: "shortage",
    meaning: "不足",
    sentence: "There is a water (   ) in this area.",
    jp: "この地域は水が不足している。",
    jpBlank: "この地域は水が(   )している。",
    jpAnswer: "不足"
  },
  {
    wordNo: 842,
    word: "enormous",
    meaning: "莫大な，巨大な",
    sentence: "an (   ) amount of time",
    jp: "莫大な（量の）時間",
    jpBlank: "(   )時間",
    jpAnswer: "莫大な"
  },
  {
    wordNo: 843,
    word: "spare",
    meaning: "余分な，予備の",
    sentence: "in my (   ) time",
    jp: "余分な時間で",
    jpBlank: "(   )時間で",
    jpAnswer: "余分な"
  },
  {
    wordNo: 843,
    word: "spare",
    meaning: "（時間やお金，労力）を割く",
    sentence: "Could you (   ) me a few minutes?",
    jp: "2，3分割いてもらえませんか？",
    jpBlank: "2，3分(   )もらえませんか？",
    jpAnswer: "割いて"
  },
  {
    wordNo: 843,
    word: "spare",
    meaning: "〜を惜しむ",
    sentence: "(   ) no expense",
    jp: "出費を惜しまない",
    jpBlank: "出費を惜しま(   )",
    jpAnswer: "ない"
  },
  {
    wordNo: 844,
    word: "arrange",
    meaning: "〜を手配する",
    sentence: "(   ) for someone to drive her home",
    jp: "誰かが彼女を家まで車で送ってくれるよう手配する",
    jpBlank: "誰かが彼女を家まで車で送ってくれるよう(   )",
    jpAnswer: "手配する"
  },
  {
    wordNo: 844,
    word: "arrange",
    meaning: "〜を整理する",
    sentence: "(   ) the documents according to size [their size(s)]",
    jp: "大きさに合わせて書類を整理する",
    jpBlank: "大きさに合わせて書類を(   )",
    jpAnswer: "整理する"
  },
  {
    wordNo: 845,
    word: "adapt",
    meaning: "適応する",
    sentence: "(   ) to a new school life",
    jp: "新しい学校生活に適応する",
    jpBlank: "新しい学校生活に(   )する",
    jpAnswer: "適応"
  },
  {
    wordNo: 845,
    word: "adapt",
    meaning: "〜を適応させる",
    sentence: "(   ) the menu to customers' needs",
    jp: "メニューを客の要望に合わせる",
    jpBlank: "メニューを客の要望に(   )",
    jpAnswer: "合わせる"
  },
  {
    wordNo: 846,
    word: "matches",
    meaning: "（サイズが人に）合う",
    sentence: "This sweater (   ) (= goes with) your skirt.",
    jp: "このセーターは君のスカートによく合っている。",
    jpBlank: "このセーターは君のスカートによく合っ(   )。",
    jpAnswer: "ている"
  },
  {
    wordNo: 846,
    word: "match",
    meaning: "〜に匹敵する",
    sentence: "No one can (   ) her in tennis.",
    jp: "テニスで彼女にかなう人はいない。",
    jpBlank: "テニスで彼女にかなう人は(   )。",
    jpAnswer: "いない"
  },
  {
    wordNo: 846,
    word: "match",
    meaning: "（釣り合う人，物）好敵手",
    sentence: "He is no (   ) for the champion.",
    jp: "彼はチャンピオンの相手（好敵手）ではない。",
    jpBlank: "彼はチャンピオンの相手(   )ではない。",
    jpAnswer: "好敵手"
  },
  {
    wordNo: 847,
    word: "fits",
    meaning: "（サイズが人に）合う",
    sentence: "This dress (   ) you.",
    jp: "このワンピースは（サイズが）君にぴったりだ。",
    jpBlank: "このワンピースは(   )君にぴったりだ。",
    jpAnswer: "サイズが"
  },
  {
    wordNo: 847,
    word: "fit",
    meaning: "健康な",
    sentence: "walk every morning to keep (   )",
    jp: "健康維持のため毎朝歩く",
    jpBlank: "(   )維持のため毎朝歩く",
    jpAnswer: "健康"
  },
  {
    wordNo: 847,
    word: "fit",
    meaning: "（to do）〜（するの）に適した",
    sentence: "This mushroom is not (   ) to eat.",
    jp: "このキノコは食用には適さない。",
    jpBlank: "このキノコは食用には適さ(   )。",
    jpAnswer: "ない"
  },
  {
    wordNo: 848,
    word: "emergency",
    meaning: "緊急事態",
    sentence: "An (   ) has arisen.",
    jp: "緊急事態が生じた。",
    jpBlank: "(   )が生じた。",
    jpAnswer: "緊急事態"
  },
  {
    wordNo: 848,
    word: "emergency",
    meaning: "緊急の",
    sentence: "an (   ) room (ER)",
    jp: "救急処置室",
    jpBlank: "(   )",
    jpAnswer: "救急処置室"
  },
  {
    wordNo: 849,
    word: "occasion",
    meaning: "場合",
    sentence: "on this (   )",
    jp: "このような場合には",
    jpBlank: "このような(   )には",
    jpAnswer: "場合"
  },
  {
    wordNo: 849,
    word: "occasions",
    meaning: "行事，祝い事",
    sentence: "keep the dress for special (   )",
    jp: "その服を特別な行事のためにとっておく",
    jpBlank: "その服を特別な(   )のためにとっておく",
    jpAnswer: "行事"
  },
  {
    wordNo: 850,
    word: "accidental",
    meaning: "偶然の，偶発的な",
    sentence: "an (   ) meeting",
    jp: "偶然の出会い",
    jpBlank: "(   )出会い",
    jpAnswer: "偶然の"
  },
  {
    wordNo: 851,
    word: "current",
    meaning: "最新の，今の",
    sentence: "the (   ) energy crisis",
    jp: "現在のエネルギー危機",
    jpBlank: "(   )のエネルギー危機",
    jpAnswer: "現在"
  },
  {
    wordNo: 851,
    word: "current",
    meaning: "流通して",
    sentence: "according to a (   ) rumor",
    jp: "世間の流通しているうわさによれば",
    jpBlank: "世間の(   )いるうわさによれば",
    jpAnswer: "流通して"
  },
  {
    wordNo: 851,
    word: "current",
    meaning: "流れ，風潮",
    sentence: "a 10 amp electrical (   )",
    jp: "10アンペアの電流",
    jpBlank: "10(   )流",
    jpAnswer: "アンペアの電"
  },
  {
    wordNo: 852,
    word: "temporary",
    meaning: "一時的な",
    sentence: "a (   ) license",
    jp: "仮免許",
    jpBlank: "(   )",
    jpAnswer: "仮免許"
  },
  {
    wordNo: 853,
    word: "permanent",
    meaning: "永久的な",
    sentence: "a (   ) member of the U.N. Security Council",
    jp: "国連安全保障理事会の常任理事国",
    jpBlank: "国連安全保障理事会の(   )理事国",
    jpAnswer: "常任"
  },
  {
    wordNo: 854,
    word: "previous",
    meaning: "（時間，順序で）前の，以前の",
    sentence: "the (   ) morning",
    jp: "（ある日の）前の朝",
    jpBlank: "(   )朝",
    jpAnswer: "前の"
  },
  {
    wordNo: 855,
    word: "former",
    meaning: "（the 〜）前者",
    sentence: "the (   ) and the latter",
    jp: "前者と後者",
    jpBlank: "(   )と後者",
    jpAnswer: "前者"
  },
  {
    wordNo: 855,
    word: "former",
    meaning: "元の，前の，旧",
    sentence: "a (   ) colony of Britain",
    jp: "旧英国植民地",
    jpBlank: "(   )",
    jpAnswer: "旧英国植民地"
  },
  {
    wordNo: 856,
    word: "contemporary",
    meaning: "現代の",
    sentence: "(   ) literature",
    jp: "現代文学",
    jpBlank: "(   )文学",
    jpAnswer: "現代"
  },
],
856: [
  {
    wordNo: 856,
    word: "contemporary",
    meaning: "同時代の",
    sentence: "Shakespeare was (   ) with Tokugawa Ieyasu.",
    jp: "シェイクスピアは徳川家康と同時代の人だった。",
    jpBlank: "シェイクスピアは徳川家康と(   )人だった。",
    jpAnswer: "同時代の"
  },
  {
    wordNo: 856,
    word: "contemporaries",
    meaning: "同時代の人",
    sentence: "We were (   ) at high school.",
    jp: "私たちは高校の同期だった。",
    jpBlank: "(   )の同期だった。",
    jpAnswer: "私たちは高校"
  },
  {
    wordNo: 857,
    word: "lately",
    meaning: "最近",
    sentence: "Have you seen him (   )?",
    jp: "最近彼と会った？",
    jpBlank: "(   )彼と会った？",
    jpAnswer: "最近"
  },
  {
    wordNo: 858,
    word: "immediately",
    meaning: "すぐに",
    sentence: "(   ) after breakfast",
    jp: "朝食後すぐに",
    jpBlank: "朝食後(   )",
    jpAnswer: "すぐに"
  },
  {
    wordNo: 858,
    word: "immediately",
    meaning: "直後に",
    sentence: "(   ) behind the driver",
    jp: "運転手のすぐ後ろに",
    jpBlank: "運転手のすぐ(   )に",
    jpAnswer: "後ろ"
  },
  {
    wordNo: 859,
    word: "deadline",
    meaning: "（〜の）締め切り（日）",
    sentence: "The (   ) for entries is next Monday.",
    jp: "登録の締め切りは次の月曜日だ。",
    jpBlank: "登録の(   )は次の月曜日だ。",
    jpAnswer: "締め切り"
  },
  {
    wordNo: 860,
    word: "decade",
    meaning: "10年",
    sentence: "decades of research",
    jp: "数十年にわたる研究",
    jpBlank: "(   )にわたる研究",
    jpAnswer: "数十年"
  },
  {
    wordNo: 861,
    word: "supply",
    meaning: "〜を供給する",
    sentence: "(   ) people with drinking water",
    jp: "人々に飲み水を供給する",
    jpBlank: "人々に飲み水を(   )する",
    jpAnswer: "供給"
  },
  {
    wordNo: 861,
    word: "supply",
    meaning: "供給",
    sentence: "(   ) and demand",
    jp: "需要と供給",
    jpBlank: "需要と(   )",
    jpAnswer: "供給"
  },
  {
    wordNo: 862,
    word: "replaced",
    meaning: "〜に取って代わる",
    sentence: "AI has (   ) humans in many fields.",
    jp: "人工知能が多くの分野で人間に取って代わった。",
    jpBlank: "人工知能が多くの分野で人間に(   )った。",
    jpAnswer: "取って代わ"
  },
  {
    wordNo: 862,
    word: "replace",
    meaning: "（A with [by] B）（AをBに）取り替える",
    sentence: "(   ) [exchange] the worn tire with a new one",
    jp: "すり減ったタイヤを新しいタイヤに交換する",
    jpBlank: "すり減ったタイヤを新しいタイヤに交換(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 863,
    word: "exchange",
    meaning: "〜を交換する",
    sentence: "(   ) Japanese yen for U.S. dollars",
    jp: "日本円を米ドルと交換する",
    jpBlank: "日本円を米ドルと(   )する",
    jpAnswer: "交換"
  },
  {
    wordNo: 863,
    word: "exchange",
    meaning: "交換",
    sentence: "go abroad on a student (   ) program",
    jp: "学生交換プログラムで留学する",
    jpBlank: "学生(   )プログラムで留学する",
    jpAnswer: "交換"
  },
  {
    wordNo: 864,
    word: "substitute",
    meaning: "（A for B）（Bの代わりにA）を用いる",
    sentence: "(   ) honey for sugar",
    jp: "砂糖の代わりにはちみつを使う",
    jpBlank: "砂糖の代わりにはちみつを(   )",
    jpAnswer: "使う"
  },
  {
    wordNo: 864,
    word: "substitute",
    meaning: "〜を代わりにする",
    sentence: "(   ) for her",
    jp: "彼女の代役をする",
    jpBlank: "彼女の代役を(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 864,
    word: "substitute",
    meaning: "身代わり，代用品",
    sentence: "a (   ) national holiday",
    jp: "振替休日",
    jpBlank: "(   )",
    jpAnswer: "振替休日"
  },
  {
    wordNo: 864,
    word: "substitute",
    meaning: "（for 〜）（〜の）代わりになる",
    sentence: "There is no (   ) for experience.",
    jp: "経験に代わるものはない。",
    jpBlank: "経験に代わる(   )。",
    jpAnswer: "ものはない"
  },
  {
    wordNo: 865,
    word: "submit",
    meaning: "（書類，発表などを）提出する",
    sentence: "(   ) an application form",
    jp: "申込用紙を提出する",
    jpBlank: "申込用紙を(   )する",
    jpAnswer: "提出"
  },
  {
    wordNo: 865,
    word: "submit",
    meaning: "（to 〜）（〜に）屈服する",
    sentence: "(   ) to authority",
    jp: "権力に屈する",
    jpBlank: "(   )",
    jpAnswer: "権力に屈する"
  },
  {
    wordNo: 866,
    word: "alternative",
    meaning: "（to 〜）（〜の）代わり（のもの）",
    sentence: "an (   ) to nuclear power",
    jp: "原子力の代わりになるもの",
    jpBlank: "原子力の(   )になるもの",
    jpAnswer: "代わり"
  },
  {
    wordNo: 866,
    word: "alternative",
    meaning: "選択肢",
    sentence: "There is no other (   ).",
    jp: "ほかの選択肢がない。",
    jpBlank: "ほかの(   )がない。",
    jpAnswer: "選択肢"
  },
  {
    wordNo: 866,
    word: "alternative",
    meaning: "代替エネルギー源",
    sentence: "(   ) energy sources",
    jp: "代替エネルギー源",
    jpBlank: "代替(   )源",
    jpAnswer: "エネルギー"
  },
  {
    wordNo: 867,
    word: "deliver",
    meaning: "〜を配達する",
    sentence: "(   ) pizzas",
    jp: "ピザを配達する",
    jpBlank: "ピザを(   )する",
    jpAnswer: "配達"
  },
  {
    wordNo: 867,
    word: "deliver",
    meaning: "（演説など）をする",
    sentence: "(   ) his inaugural address",
    jp: "（彼の）就任演説をする",
    jpBlank: "就任演説(   )る",
    jpAnswer: "をす"
  },
  {
    wordNo: 868,
    word: "enclose",
    meaning: "〜を同封する",
    sentence: "(   ) several photos",
    jp: "何枚かの写真を同封する",
    jpBlank: "何枚かの写真を(   )する",
    jpAnswer: "同封"
  },
  {
    wordNo: 868,
    word: "enclosed",
    meaning: "〜を囲む，閉じ込める",
    sentence: "be (   ) by high walls",
    jp: "高い塀に囲まれている",
    jpBlank: "高い塀に囲ま(   )",
    jpAnswer: "れている"
  },
  {
    wordNo: 869,
    word: "envelope",
    meaning: "封筒",
    sentence: "put a stamp on the (   )",
    jp: "封筒に切手を貼る",
    jpBlank: "(   )に切手を貼る",
    jpAnswer: "封筒"
  },
  {
    wordNo: 870,
    word: "tricks",
    meaning: "（悪意のない）いたずら",
    sentence: "play (   ) on Kevin",
    jp: "ケビンにいたずらをする",
    jpBlank: "ケビンに(   )をする",
    jpAnswer: "いたずら"
  },
  {
    wordNo: 870,
    word: "tricks",
    meaning: "（巧妙な）手口，策略",
    sentence: "use cheap (   ) to get promoted",
    jp: "出世のために小細工をする",
    jpBlank: "出世のために(   )をする",
    jpAnswer: "小細工"
  },
  {
    wordNo: 870,
    word: "tricks",
    meaning: "芸，手品",
    sentence: "teach a dog some (   )",
    jp: "イヌに芸を教える",
    jpBlank: "イヌに芸を教(   )",
    jpAnswer: "える"
  },
],
870: [
  {
    wordNo: 870,
    word: "tricks",
    meaning: "（of 〜）秘訣",
    sentence: "learn the (   ) of the trade",
    jp: "商売のコツをつかむ",
    jpBlank: "商売の(   )をつかむ",
    jpAnswer: "コツ"
  },
  {
    wordNo: 870,
    word: "trick",
    meaning: "〜をだます",
    sentence: "(   ) him out of his money",
    jp: "彼をだまして金を巻き上げる",
    jpBlank: "(   )金を巻き上げる",
    jpAnswer: "彼をだまして"
  },
  {
    wordNo: 871,
    word: "load",
    meaning: "荷（物）",
    sentence: "carry a heavy (   ) on my back",
    jp: "重い荷物を背負う",
    jpBlank: "重い荷物を背(   )",
    jpAnswer: "負う"
  },
  {
    wordNo: 871,
    word: "loaded",
    meaning: "（A with B）（AにB（荷））を積む",
    sentence: "be (   ) with timber",
    jp: "材木が積まれている",
    jpBlank: "材木が(   )",
    jpAnswer: "積まれている"
  },
  {
    wordNo: 872,
    word: "contents",
    meaning: "中身，内容",
    sentence: "the (   ) of her bag",
    jp: "彼女のかばんの中身",
    jpBlank: "彼女のかばんの(   )",
    jpAnswer: "中身"
  },
  {
    wordNo: 872,
    word: "content",
    meaning: "（〜に）満足して",
    sentence: "I'm (   ) with my current job.",
    jp: "今の仕事に満足している。",
    jpBlank: "今の仕事に(   )いる。",
    jpAnswer: "満足して"
  },
  {
    wordNo: 873,
    word: "households",
    meaning: "（集団的に）世帯，家庭",
    sentence: "a survey of 2,000 (   )",
    jp: "2,000世帯の調査",
    jpBlank: "2,000(   )の調査",
    jpAnswer: "世帯"
  },
  {
    wordNo: 873,
    word: "household",
    meaning: "家庭の",
    sentence: "do (   ) chores",
    jp: "家事（家庭の雑事）をする",
    jpBlank: "家事(   )をする",
    jpAnswer: "家庭の雑事"
  },
  {
    wordNo: 874,
    word: "goods",
    meaning: "（-s）商品",
    sentence: "antibacterial (   )",
    jp: "抗菌グッズ",
    jpBlank: "(   )",
    jpAnswer: "抗菌グッズ"
  },
  {
    wordNo: 874,
    word: "good",
    meaning: "利益",
    sentence: "Walking will do you (   ).",
    jp: "歩くのはいいよ（あなたに利益をもたらす）。",
    jpBlank: "(   )よ。",
    jpAnswer: "歩くのはいい"
  },
  {
    wordNo: 874,
    word: "good",
    meaning: "（a 〜 many 〜）かなりの",
    sentence: "a (   ) many hours",
    jp: "かなりの時間",
    jpBlank: "(   )時間",
    jpAnswer: "かなりの"
  },
  {
    wordNo: 875,
    word: "luxuries",
    meaning: "高級（品），ぜいたく品",
    sentence: "spend a lot of money on (   )",
    jp: "ぜいたく品に多額のお金を使う",
    jpBlank: "(   )に多額のお金を使う",
    jpAnswer: "ぜいたく品"
  },
  {
    wordNo: 875,
    word: "luxury",
    meaning: "豪華な，ぜいたくな",
    sentence: "a (   ) hotel",
    jp: "豪華なホテル",
    jpBlank: "(   )ホテル",
    jpAnswer: "豪華な"
  },
  {
    wordNo: 876,
    word: "credit",
    meaning: "クレジットカード",
    sentence: "Do you accept (   ) cards?",
    jp: "クレジットカードは使えますか。",
    jpBlank: "(   )は使えますか。",
    jpAnswer: "クレジットカード"
  },
  {
    wordNo: 876,
    word: "credit",
    meaning: "功績，手柄",
    sentence: "All the (   ) goes to him.",
    jp: "すべての彼の手柄（功績）だ。",
    jpBlank: "すべての彼の(   )だ。",
    jpAnswer: "手柄"
  },
  {
    wordNo: 876,
    word: "credits",
    meaning: "（大学の）単位",
    sentence: "cannot get (   ) simply by attending class",
    jp: "授業に出るだけでは単位はもらえない。",
    jpBlank: "授業に出るだけでは(   )はもらえない。",
    jpAnswer: "単位"
  },
  {
    wordNo: 876,
    word: "credited",
    meaning: "〜の功績を認める",
    sentence: "He is (   ) with that invention.",
    jp: "その発明は彼の功績だ（彼はその発明の功績があると認められる）。",
    jpBlank: "その発明は彼(   )。",
    jpAnswer: "の功績だ"
  },
  {
    wordNo: 877,
    word: "questionnaire",
    meaning: "アンケート",
    sentence: "a survey using a (   )",
    jp: "アンケート（を用いた）調査",
    jpBlank: "(   )調査",
    jpAnswer: "アンケート"
  },
  {
    wordNo: 878,
    word: "reservation",
    meaning: "予約",
    sentence: "make a (   ) under the name of Sophie",
    jp: "ソフィーの名前で予約する",
    jpBlank: "ソフィーの名前で(   )する",
    jpAnswer: "予約"
  },
  {
    wordNo: 878,
    word: "reservations",
    meaning: "慎重な姿勢",
    sentence: "have (   ) about the proposal",
    jp: "その提案に対して慎重な姿勢を保つ",
    jpBlank: "その提案に対して(   )を保つ",
    jpAnswer: "慎重な姿勢"
  },
  {
    wordNo: 879,
    word: "fuss",
    meaning: "大騒ぎ",
    sentence: "make a (   ) about trivial things",
    jp: "くだらないことで大騒ぎする",
    jpBlank: "くだらないことで(   )する",
    jpAnswer: "大騒ぎ"
  },
  {
    wordNo: 880,
    word: "reward",
    meaning: "報酬，報奨金",
    sentence: "the (   ) for the job",
    jp: "その仕事に対する報酬",
    jpBlank: "その仕事に対する(   )",
    jpAnswer: "報酬"
  },
  {
    wordNo: 880,
    word: "reward",
    meaning: "〜に褒美を与える，報いる",
    sentence: "(   ) children for behaving well",
    jp: "いい子にしていた子どもたちにご褒美をあげる",
    jpBlank: "いい子にしていた子どもたちにご褒美を(   )",
    jpAnswer: "あげる"
  },
  {
    wordNo: 881,
    word: "farewell",
    meaning: "別れのあいさつ",
    sentence: "have a (   ) party",
    jp: "送別会を開く",
    jpBlank: "(   )",
    jpAnswer: "送別会を開く"
  },
  {
    wordNo: 882,
    word: "reception",
    meaning: "（受付の）もてなし，歓迎会",
    sentence: "receive a warm (   )",
    jp: "温かい歓迎を受ける",
    jpBlank: "温かい歓迎を(   )",
    jpAnswer: "受ける"
  },
  {
    wordNo: 882,
    word: "reception",
    meaning: "（ホテルの）フロント",
    sentence: "leave the key at the (   ) desk",
    jp: "（ホテルの）フロントに鍵を預ける",
    jpBlank: "(   )に鍵を預ける",
    jpAnswer: "フロント"
  },
  {
    wordNo: 882,
    word: "reception",
    meaning: "受信状況",
    sentence: "The phone (   ) is not good here.",
    jp: "ここは電波（の受信状況）がよくない。",
    jpBlank: "ここは電波(   )がよくない。",
    jpAnswer: "の受信状況"
  },
  {
    wordNo: 883,
    word: "portion",
    meaning: "（食事の）1盛り",
    sentence: "a large (   ) of roast beef",
    jp: "大盛りのローストビーフ",
    jpBlank: "(   )のローストビーフ",
    jpAnswer: "大盛り"
  },
  {
    wordNo: 883,
    word: "portions",
    meaning: "食事の分",
    sentence: "eat two (   ) of spaghetti",
    jp: "スパゲッティを2人前食べる",
    jpBlank: "スパゲッティを2(   )",
    jpAnswer: "人前食べる"
  },
  {
    wordNo: 883,
    word: "portion",
    meaning: "（全体の）一部分",
    sentence: "a (   ) of his income",
    jp: "彼の収入の一部",
    jpBlank: "(   )部",
    jpAnswer: "彼の収入の一"
  },
],
884: [
  {
    wordNo: 884,
    word: "laundry",
    meaning: "（集中的に）洗濯物",
    sentence: "cook, clean, and do the (   )",
    jp: "料理，掃除，洗濯をする",
    jpBlank: "(   )，掃除，洗濯をする",
    jpAnswer: "料理"
  },
  {
    wordNo: 884,
    word: "laundry",
    meaning: "（集中的に）洗濯物",
    sentence: "bring the (   ) in",
    jp: "洗濯物を取り込む",
    jpBlank: "(   )を取り込む",
    jpAnswer: "洗濯物"
  },
  {
    wordNo: 884,
    word: "laundry",
    meaning: "（集中的に）洗濯物",
    sentence: "a coin-operated (   )",
    jp: "コインランドリー",
    jpBlank: "コインランド(   )",
    jpAnswer: "リー"
  },
  {
    wordNo: 885,
    word: "nap",
    meaning: "昼寝，仮眠",
    sentence: "I'll just take a little (   ).",
    jp: "ちょっと昼寝をします。",
    jpBlank: "ちょっと(   )をします。",
    jpAnswer: "昼寝"
  },
  {
    wordNo: 885,
    word: "nap",
    meaning: "昼寝をする，仮眠をとる",
    sentence: "(   ) after lunch",
    jp: "昼食後に昼寝をする",
    jpBlank: "昼食後に(   )する",
    jpAnswer: "昼寝を"
  },
  {
    wordNo: 886,
    word: "woke",
    meaning: "目が覚める",
    sentence: "I (   ) up at six a.m., but did not get up.",
    jp: "午前6時に目が覚めたが，起きなかった。",
    jpBlank: "午前6時に(   )たが，起きなかった。",
    jpAnswer: "目が覚め"
  },
  {
    wordNo: 886,
    word: "Wake",
    meaning: "（寝ている人）を起こす",
    sentence: "(   ) me up at five a.m.",
    jp: "午前5時に起こしてください。",
    jpBlank: "午前5時に(   )ください。",
    jpAnswer: "起こして"
  },
  {
    wordNo: 887,
    word: "vending machine",
    meaning: "自動販売機",
    sentence: "a soft drink (   )",
    jp: "清涼飲料水の自動販売機",
    jpBlank: "清涼飲料水の(   )",
    jpAnswer: "自動販売機"
  },
  {
    wordNo: 888,
    word: "grocery",
    meaning: "食料雑貨店",
    sentence: "a local (   ) (store)",
    jp: "地元の食料雑貨店",
    jpBlank: "地元の(   )",
    jpAnswer: "食料雑貨店"
  },
  {
    wordNo: 888,
    word: "groceries",
    meaning: "（-ies）食料雑貨類",
    sentence: "put my (   ) in a plastic bag",
    jp: "食料品をビニール袋に入れる",
    jpBlank: "(   )ール袋に入れる",
    jpAnswer: "食料品をビニ"
  },
  {
    wordNo: 889,
    word: "appointment",
    meaning: "（病院などの）予約，（会合などの）約束",
    sentence: "I have an (   ) to see the dentist at five.",
    jp: "5時に歯医者の予約を入れている。",
    jpBlank: "5時に歯医者の(   )を入れている。",
    jpAnswer: "予約"
  },
  {
    wordNo: 889,
    word: "appointment",
    meaning: "（役職などの）任命，指名",
    sentence: "the (   ) of new ministers",
    jp: "新たな大臣の任命",
    jpBlank: "新たな大臣の(   )",
    jpAnswer: "任命"
  },
  {
    wordNo: 890,
    word: "consult",
    meaning: "〜に相談する",
    sentence: "You'd better (   ) your doctor.",
    jp: "医者に診てもらいなさい。",
    jpBlank: "医者に診ても(   )。",
    jpAnswer: "らいなさい"
  },
  {
    wordNo: 890,
    word: "consult",
    meaning: "（辞書などを）引く",
    sentence: "(   ) a dictionary",
    jp: "辞書を引く",
    jpBlank: "辞書を(   )",
    jpAnswer: "引く"
  },
  {
    wordNo: 890,
    word: "consult",
    meaning: "（with 〜）（〜に）相談する",
    sentence: "(   ) with a friend about study methods",
    jp: "勉強の仕方について友達に相談する",
    jpBlank: "勉強の仕方について友達に(   )",
    jpAnswer: "相談する"
  },
  {
    wordNo: 891,
    word: "registered",
    meaning: "〜を登録する，記録する",
    sentence: "Koyasan is (   ) as a World Heritage Site.",
    jp: "高野山は世界遺産に登録されている。",
    jpBlank: "高野山は世界遺産に(   )されている。",
    jpAnswer: "登録"
  },
  {
    wordNo: 891,
    word: "register",
    meaning: "（for 〜）（授業などに）登録する",
    sentence: "(   ) for the first semester",
    jp: "前期の履修を登録する",
    jpBlank: "前期の履修を(   )する",
    jpAnswer: "登録"
  },
  {
    wordNo: 891,
    word: "register",
    meaning: "（ホテルなどで）記帳する",
    sentence: "(   ) at the reception desk",
    jp: "フロントで記帳する",
    jpBlank: "フロントで(   )する",
    jpAnswer: "記帳"
  },
  {
    wordNo: 891,
    word: "register",
    meaning: "名簿",
    sentence: "a class (   )",
    jp: "クラス名簿",
    jpBlank: "クラス(   )",
    jpAnswer: "名簿"
  },
  {
    wordNo: 892,
    word: "dye",
    meaning: "〜を染める",
    sentence: "(   ) my hair brown",
    jp: "髪を茶色に染める",
    jpBlank: "髪を茶色に(   )",
    jpAnswer: "染める"
  },
  {
    wordNo: 892,
    word: "dye",
    meaning: "染料",
    sentence: "an acid (   )",
    jp: "酸性染料",
    jpBlank: "酸性(   )",
    jpAnswer: "染料"
  },
  {
    wordNo: 893,
    word: "subscribe",
    meaning: "（to 〜）（〜を）定期購読する，加入している",
    sentence: "(   ) to the magazine",
    jp: "雑誌を定期購読する",
    jpBlank: "雑誌を(   )する",
    jpAnswer: "定期購読"
  },
  {
    wordNo: 893,
    word: "subscribe",
    meaning: "（主に否定文で）（to 〜）（考えなどを）支持する",
    sentence: "cannot (   ) to that opinion",
    jp: "その意見には賛成（支持）できない。",
    jpBlank: "その意見には賛成(   )できない。",
    jpAnswer: "支持"
  },
  {
    wordNo: 894,
    word: "guaranteed",
    meaning: "〜を保証する",
    sentence: "Freedom of speech is (   ) under the Constitution of Japan.",
    jp: "言論の自由は日本国憲法で保証されている。",
    jpBlank: "言論の自由は日本国憲法で(   )されている。",
    jpAnswer: "保証"
  },
  {
    wordNo: 894,
    word: "guarantee",
    meaning: "保証（期間）",
    sentence: "a PC with a one-year (   )",
    jp: "1年間の保証つきパソコン",
    jpBlank: "1年間の(   )つきパソコン",
    jpAnswer: "保証"
  },
  {
    wordNo: 895,
    word: "wipe",
    meaning: "〜を拭く",
    sentence: "(   ) the table",
    jp: "テーブルを拭く",
    jpBlank: "テーブルを(   )",
    jpAnswer: "拭く"
  },
  {
    wordNo: 895,
    word: "wiped",
    meaning: "〜を拭き取る，壊滅させる",
    sentence: "The entire village was (   ) out by the tornado.",
    jp: "村全体が竜巻によって壊滅させられた。",
    jpBlank: "村全体が竜巻によって(   )られた。",
    jpAnswer: "壊滅させ"
  },
  {
    wordNo: 896,
    word: "sweep",
    meaning: "（床，地面を）掃く",
    sentence: "(   ) the floor with a broom",
    jp: "ほうきで床を掃く",
    jpBlank: "ほうきで床を(   )",
    jpAnswer: "掃く"
  },
  {
    wordNo: 896,
    word: "swept",
    meaning: "（嵐，波などが）〜を押し流す",
    sentence: "The flood (   ) away the bridge.",
    jp: "洪水が橋を押し流した。",
    jpBlank: "洪水が橋を押(   )。",
    jpAnswer: "し流した"
  },
  {
    wordNo: 897,
    word: "transfer",
    meaning: "乗り換える",
    sentence: "(   ) at Rome",
    jp: "ローマで乗り換える",
    jpBlank: "ローマで(   )",
    jpAnswer: "乗り換える"
  },
],
897: [
  {
    wordNo: 897,
    word: "transferred",
    meaning: "（転勤，転校，移動）させる",
    sentence: "be (   ) to the London branch",
    jp: "ロンドン支店に転勤する",
    jpBlank: "ロンドン支店(   )",
    jpAnswer: "に転勤する"
  },
  {
    wordNo: 897,
    word: "transferred",
    meaning: "（転勤，転校，移動）させる",
    sentence: "be (   ) to another department",
    jp: "別の部署に異動する（異動させられる）",
    jpBlank: "別の部署に異(   )",
    jpAnswer: "動する"
  },
  {
    wordNo: 897,
    word: "transfer",
    meaning: "（銀行で）〜を振り込む",
    sentence: "(   ) 100,000 yen to his bank account",
    jp: "彼の銀行口座に10万円を振り込む",
    jpBlank: "彼の銀行口座に10万円を(   )",
    jpAnswer: "振り込む"
  },
  {
    wordNo: 898,
    word: "divorced",
    meaning: "離婚する",
    sentence: "They have (   ).",
    jp: "彼らは離婚した。",
    jpBlank: "彼らは(   )した。",
    jpAnswer: "離婚"
  },
  {
    wordNo: 898,
    word: "divorce",
    meaning: "〜と離婚する",
    sentence: "(   ) my wife",
    jp: "妻と離婚する",
    jpBlank: "妻と(   )する",
    jpAnswer: "離婚"
  },
  {
    wordNo: 898,
    word: "divorce",
    meaning: "離婚",
    sentence: "a rise in the (   ) rate",
    jp: "離婚率の増加",
    jpBlank: "(   )率の増加",
    jpAnswer: "離婚"
  },
  {
    wordNo: 899,
    word: "fate",
    meaning: "運命，宿命",
    sentence: "A terrible (   ) awaited them.",
    jp: "恐ろしい運命が彼らを待ち受けていた。",
    jpBlank: "恐ろしい(   )が彼らを待ち受けていた。",
    jpAnswer: "運命"
  },
  {
    wordNo: 900,
    word: "destiny",
    meaning: "運命",
    sentence: "It was his (   ) to save his nation.",
    jp: "国を救うことが彼の運命だった。",
    jpBlank: "国を救うことが彼の(   )だった。",
    jpAnswer: "運命"
  },
  {
    wordNo: 901,
    word: "flavor",
    meaning: "風味，味",
    sentence: "ice cream with a green tea (   )",
    jp: "抹茶味のアイスクリーム",
    jpBlank: "抹茶味のアイ(   )",
    jpAnswer: "スクリーム"
  },
  {
    wordNo: 902,
    word: "perfume",
    meaning: "香水",
    sentence: "the (   ) of roses",
    jp: "バラの香り",
    jpBlank: "(   )",
    jpAnswer: "バラの香り"
  },
  {
    wordNo: 902,
    word: "perfume",
    meaning: "香水",
    sentence: "wear a cheap (   )",
    jp: "安物の香水をつけている",
    jpBlank: "安物の(   )をつけている",
    jpAnswer: "香水"
  },
  {
    wordNo: 903,
    word: "ingredients",
    meaning: "（料理などの）材料",
    sentence: "the (   ) of lasagne",
    jp: "ラザニアの材料",
    jpBlank: "ラザニアの(   )",
    jpAnswer: "材料"
  },
  {
    wordNo: 903,
    word: "ingredient",
    meaning: "（何かを達成するための）要因",
    sentence: "the essential (   ) of a great team",
    jp: "すばらしいチームに不可欠な要素",
    jpBlank: "すばらしいチームに不可欠(   )",
    jpAnswer: "な要素"
  },
  {
    wordNo: 903,
    word: "ingredients",
    meaning: "成分",
    sentence: "active (   ) in these cosmetics",
    jp: "これらの化粧品の有効成分",
    jpBlank: "これらの化粧品の有効(   )",
    jpAnswer: "成分"
  },
  {
    wordNo: 904,
    word: "bitter",
    meaning: "苦い，つらい",
    sentence: "a (   ) experience",
    jp: "つらい経験",
    jpBlank: "(   )経験",
    jpAnswer: "つらい"
  },
  {
    wordNo: 904,
    word: "bitter",
    meaning: "憤慨して",
    sentence: "feel (   ) about the way I have been treated",
    jp: "今までの扱われ方に憤慨する",
    jpBlank: "(   )れ方に憤慨する",
    jpAnswer: "今までの扱わ"
  },
  {
    wordNo: 905,
    word: "aisle",
    meaning: "通路",
    sentence: "prefer an (   ) seat to a window seat",
    jp: "窓側の席より通路側の席のほうが好きだ",
    jpBlank: "窓側の席より(   )側の席のほうが好きだ",
    jpAnswer: "通路"
  },
  {
    wordNo: 906,
    word: "track",
    meaning: "足跡，小道",
    sentence: "keep (   ) of my schedule",
    jp: "スケジュール管理をする（スケジュールの経過を追う）",
    jpBlank: "スケジュール(   )をする",
    jpAnswer: "管理"
  },
  {
    wordNo: 906,
    word: "track",
    meaning: "（鉄道の）線路，プラットホーム",
    sentence: "This train leaves from (   ) 5.",
    jp: "この電車は5番線から発車します。",
    jpBlank: "この電車は5番線から発車(   )。",
    jpAnswer: "します"
  },
  {
    wordNo: 906,
    word: "track",
    meaning: "〜を追跡する",
    sentence: "(   ) the plane with radar",
    jp: "レーダーで飛行機を追跡する",
    jpBlank: "レーダーで飛行機を(   )",
    jpAnswer: "追跡する"
  },
  {
    wordNo: 907,
    word: "district",
    meaning: "地区",
    sentence: "an election (   )",
    jp: "選挙区",
    jpBlank: "(   )",
    jpAnswer: "選挙区"
  },
  {
    wordNo: 908,
    word: "facilities",
    meaning: "施設，設備",
    sentence: "indoor sports (   )",
    jp: "室内スポーツ施設",
    jpBlank: "室内スポーツ(   )",
    jpAnswer: "施設"
  },
  {
    wordNo: 908,
    word: "facility",
    meaning: "能力，器用さ",
    sentence: "have a great (   ) for language",
    jp: "語学のすぐれた才能がある",
    jpBlank: "(   )た才能がある",
    jpAnswer: "語学のすぐれ"
  },
  {
    wordNo: 909,
    word: "height",
    meaning: "高さ",
    sentence: "line up in order of (   )",
    jp: "身長順に並ぶ",
    jpBlank: "(   )",
    jpAnswer: "身長順に並ぶ"
  },
  {
    wordNo: 909,
    word: "heights",
    meaning: "高い所",
    sentence: "I am scared of (   ).",
    jp: "私は高所恐怖症です。",
    jpBlank: "私は高所恐怖(   )。",
    jpAnswer: "症です"
  },
  {
    wordNo: 909,
    word: "height",
    meaning: "最盛期",
    sentence: "at the (   ) of the tourist season",
    jp: "観光シーズンの最盛期に",
    jpBlank: "観光シーズンの(   )に",
    jpAnswer: "最盛期"
  },
  {
    wordNo: 910,
    word: "distant",
    meaning: "遠い",
    sentence: "a (   ) [far] island",
    jp: "遠い島",
    jpBlank: "(   )島",
    jpAnswer: "遠い"
  },
  {
    wordNo: 911,
    word: "located",
    meaning: "（be 〜d）〜に位置している",
    sentence: "New Mexico is (   ) 2,240 meters above sea level.",
    jp: "ニューメキシコは海抜2,240メートルの位置にある。",
    jpBlank: "ニューメキシ(   )2,240メートルの位置にある。",
    jpAnswer: "コは海抜"
  },
  {
    wordNo: 911,
    word: "locate",
    meaning: "〜の場所を見つける",
    sentence: "(   ) the restaurant on the map",
    jp: "地図でレストランの場所を見つける",
    jpBlank: "地図でレストランの(   )",
    jpAnswer: "場所を見つける"
  },
  {
    wordNo: 912,
    word: "occupy",
    meaning: "〜を占める",
    sentence: "(   ) two seats on the train",
    jp: "電車で2つの席を占有する",
    jpBlank: "電車で2つの席を占有(   )",
    jpAnswer: "する"
  },
],
913: [
  {
    wordNo: 913,
    word: "surrounded",
    meaning: "〜を取り囲む，包囲する",
    sentence: "a mansion (   ) by red brick walls",
    jp: "赤れんがの塀に囲まれたお屋敷",
    jpBlank: "赤れんがの塀に(   )お屋敷",
    jpAnswer: "囲まれた"
  },
  {
    wordNo: 914,
    word: "classical",
    meaning: "（音楽，バレエなどで）クラシックの",
    sentence: "(   ) music",
    jp: "クラシック音楽",
    jpBlank: "(   )音楽",
    jpAnswer: "クラシック"
  },
  {
    wordNo: 914,
    word: "classical",
    meaning: "古典的な",
    sentence: "(   ) literature",
    jp: "（ギリシャ，ローマの）古典文学",
    jpBlank: "(   )文学",
    jpAnswer: "古典"
  },
  {
    wordNo: 915,
    word: "civilization",
    meaning: "文明",
    sentence: "an advanced (   )",
    jp: "高度な文明",
    jpBlank: "高度な(   )",
    jpAnswer: "文明"
  },
  {
    wordNo: 916,
    word: "heritage",
    meaning: "遺産",
    sentence: "the cultural (   ) of Japan",
    jp: "日本の文化遺産",
    jpBlank: "日本の文化(   )",
    jpAnswer: "遺産"
  },
  {
    wordNo: 917,
    word: "script",
    meaning: "台本，脚本",
    sentence: "a film (   )",
    jp: "映画の台本",
    jpBlank: "映画の(   )",
    jpAnswer: "台本"
  },
  {
    wordNo: 917,
    word: "script",
    meaning: "（ある言語の）文字",
    sentence: "in Arabic (   )",
    jp: "アラビア文字で",
    jpBlank: "アラビア(   )で",
    jpAnswer: "文字"
  },
  {
    wordNo: 917,
    word: "scripts",
    meaning: "（手書きの）文字",
    sentence: "try to read his badly written (   )",
    jp: "彼の下手な文字を読もうとする",
    jpBlank: "彼の下手な(   )を読もうとする",
    jpAnswer: "文字"
  },
  {
    wordNo: 918,
    word: "tale",
    meaning: "話",
    sentence: "a Japanese folk (   )",
    jp: "日本の民話",
    jpBlank: "(   )",
    jpAnswer: "日本の民話"
  },
  {
    wordNo: 919,
    word: "literature",
    meaning: "文学",
    sentence: "the Nobel Prize in (   )",
    jp: "ノーベル文学賞",
    jpBlank: "ノーベル(   )賞",
    jpAnswer: "文学"
  },
  {
    wordNo: 919,
    word: "literature",
    meaning: "（特定の分野の）文献",
    sentence: "the medical (   )",
    jp: "医学に関わる文献",
    jpBlank: "医学に関わる(   )",
    jpAnswer: "文献"
  },
  {
    wordNo: 920,
    word: "tragedy",
    meaning: "悲劇",
    sentence: "9/11 was a terrible (   ).",
    jp: "9/11（同時多発テロ）は本当に悲劇だった。",
    jpBlank: "9/11は本当に(   )だった。",
    jpAnswer: "悲劇"
  },
  {
    wordNo: 921,
    word: "poetry",
    meaning: "（集合的に）詩",
    sentence: "learn a lot of (   ) by heart",
    jp: "多くの詩を暗記する",
    jpBlank: "多くの詩を暗(   )",
    jpAnswer: "記する"
  },
  {
    wordNo: 921,
    word: "poem",
    meaning: "個々の詩",
    sentence: "learn a (   ) by heart",
    jp: "1つの詩を暗記する",
    jpBlank: "1つの詩を暗記(   )",
    jpAnswer: "する"
  },
  {
    wordNo: 922,
    word: "biography",
    meaning: "伝記",
    sentence: "a (   ) of Helen Keller",
    jp: "ヘレン・ケラーの伝記",
    jpBlank: "ヘレン・ケラーの(   )",
    jpAnswer: "伝記"
  },
  {
    wordNo: 923,
    word: "term",
    meaning: "用語，言葉",
    sentence: "the (   ) \"digital native\"",
    jp: "「デジタルネイティブ」という言葉",
    jpBlank: "「デジタルネイティブ」という(   )",
    jpAnswer: "言葉"
  },
  {
    wordNo: 923,
    word: "term",
    meaning: "期間，学期，任期",
    sentence: "our autumn (   )",
    jp: "秋学期",
    jpBlank: "秋(   )",
    jpAnswer: "学期"
  },
  {
    wordNo: 923,
    word: "terms",
    meaning: "関係にある",
    sentence: "I am on good (   ) with her after our divorce.",
    jp: "離婚後も彼女と良好な関係にある。",
    jpBlank: "離婚後も彼女と良好な(   )。",
    jpAnswer: "関係にある"
  },
  {
    wordNo: 923,
    word: "terms",
    meaning: "契約などの条件",
    sentence: "I'll only take the job on my own (   ).",
    jp: "私の条件を受け入れていただけないなら，その仕事はやれません。",
    jpBlank: "私の(   )を受け入れていただけないなら，その仕事はやれません。",
    jpAnswer: "条件"
  },
  {
    wordNo: 924,
    word: "proverb",
    meaning: "ことわざ",
    sentence: "As the (   ) goes [says], time flies.",
    jp: "諺にもあるように，光陰矢の如しだ。",
    jpBlank: "(   )にもあるように，光陰矢の如しだ。",
    jpAnswer: "諺"
  },
  {
    wordNo: 925,
    word: "dialect",
    meaning: "方言",
    sentence: "speak in the Kansai (   )",
    jp: "関西弁で話す",
    jpBlank: "(   )",
    jpAnswer: "関西弁で話す"
  },
  {
    wordNo: 926,
    word: "fluent",
    meaning: "流暢な",
    sentence: "He speaks (   ) Spanish.",
    jp: "彼はスペイン語が流暢だ。",
    jpBlank: "彼はスペイン(   )。",
    jpAnswer: "語が流暢だ"
  },
  {
    wordNo: 927,
    word: "translate",
    meaning: "〜を翻訳する",
    sentence: "(   ) a sentence literally",
    jp: "文を直訳する（文字どおりに文を訳す）",
    jpBlank: "(   )",
    jpAnswer: "文を直訳する"
  },
  {
    wordNo: 927,
    word: "translate",
    meaning: "（into 〜）（結果として）〜に変わる",
    sentence: "Anger can (   ) into violence.",
    jp: "怒りは暴力に変わり得る。",
    jpBlank: "怒りは暴力に(   )り得る。",
    jpAnswer: "変わ"
  },
  {
    wordNo: 928,
    word: "defined",
    meaning: "〜を定義する",
    sentence: "Obesity is (   ) as a BMI of 30 or above.",
    jp: "肥満はBMI30以上と定義されている。",
    jpBlank: "肥満はBMI30以上と(   )されている。",
    jpAnswer: "定義"
  },
  {
    wordNo: 928,
    word: "define",
    meaning: "〜を規定する",
    sentence: "(   ) our duties",
    jp: "私たちの任務を規定する",
    jpBlank: "私たちの任務を(   )する",
    jpAnswer: "規定"
  },
  {
    wordNo: 929,
    word: "interpret",
    meaning: "〜を解釈する",
    sentence: "(   ) his silence as a refusal",
    jp: "彼の沈黙を拒絶と解釈する",
    jpBlank: "彼の沈黙を拒絶と(   )する",
    jpAnswer: "解釈"
  },
  {
    wordNo: 929,
    word: "interpret",
    meaning: "〜を通訳する",
    sentence: "(   ) foreign languages",
    jp: "外国語を通訳する",
    jpBlank: "外国語を(   )する",
    jpAnswer: "通訳"
  },
  {
    wordNo: 929,
    word: "interpret",
    meaning: "通訳する",
    sentence: "I'll (   ) for you.",
    jp: "僕が君のために通訳をします。",
    jpBlank: "僕が君のために(   )をします。",
    jpAnswer: "通訳"
  },
  {
    wordNo: 930,
    word: "quote",
    meaning: "〜を引用する",
    sentence: "(   ) a passage from the Bible",
    jp: "聖書の一節を引用する",
    jpBlank: "聖書の一節を(   )する",
    jpAnswer: "引用"
  },
],
930: [
  {
    wordNo: 930,
    word: "quote",
    meaning: "（人に）価格を提示する",
    sentence: "(   ) $100 for this table",
    jp: "このテーブルに100ドルの価格を提示する",
    jpBlank: "このテーブルに100ドルの(   )する",
    jpAnswer: "価格を提示"
  },
  {
    wordNo: 930,
    word: "quote",
    meaning: "引用",
    sentence: "a (   ) from a paper",
    jp: "論文からの引用",
    jpBlank: "論文からの(   )",
    jpAnswer: "引用"
  },
  {
    wordNo: 930,
    word: "quote",
    meaning: "提示価格",
    sentence: "the original (   )",
    jp: "最初の提示価格",
    jpBlank: "最初の(   )",
    jpAnswer: "提示価格"
  },
  {
    wordNo: 931,
    word: "literally",
    meaning: "文字どおりに",
    sentence: "The word bōnen-kai (   ) means \"a forget-the-year party.\"",
    jp: "「忘年会」は文字どおりには「年を忘れる会」を意味する。",
    jpBlank: "「忘年会」は(   )は「年を忘れる会」を意味する。",
    jpAnswer: "文字どおりに"
  },
  {
    wordNo: 932,
    word: "indicates",
    meaning: "（データなどが）〜を示す",
    sentence: "Research (   ) that the medicine can be harmful to children.",
    jp: "研究はその薬が子どもに害があるかもしれないことを示している。",
    jpBlank: "研究はその薬が子どもに害があるかもしれないことを(   )。",
    jpAnswer: "示している"
  },
  {
    wordNo: 932,
    word: "indicate",
    meaning: "〜を指し示す",
    sentence: "(   ) a place on a map",
    jp: "地図上の場所を指す",
    jpBlank: "地図上の場所(   )",
    jpAnswer: "を指す"
  },
  {
    wordNo: 933,
    word: "reveal",
    meaning: "〜を明らかにする，暴露する",
    sentence: "(   ) a secret to her",
    jp: "彼女に秘密を漏らす",
    jpBlank: "彼女に秘密を(   )",
    jpAnswer: "漏らす"
  },
  {
    wordNo: 934,
    word: "announce",
    meaning: "〜を発表する",
    sentence: "(   ) the results of the election",
    jp: "選挙の結果を発表する",
    jpBlank: "選挙の結果を(   )する",
    jpAnswer: "発表"
  },
  {
    wordNo: 935,
    word: "broadcast",
    meaning: "〜を放送する",
    sentence: "The interview with him was (   ) live.",
    jp: "彼のインタビューは生放送された。",
    jpBlank: "彼のインタビューは生(   )された。",
    jpAnswer: "放送"
  },
  {
    wordNo: 935,
    word: "broadcast",
    meaning: "（1回の）放送",
    sentence: "watch a live (   ) of a baseball game",
    jp: "野球の試合の生放送を見る",
    jpBlank: "野球の試合の生(   )を見る",
    jpAnswer: "放送"
  },
  {
    wordNo: 936,
    word: "prove",
    meaning: "〜を証明する",
    sentence: "(   ) (that) it is false",
    jp: "それが偽物だと証明する",
    jpBlank: "それが偽物だと(   )する",
    jpAnswer: "証明"
  },
  {
    wordNo: 936,
    word: "proved",
    meaning: "（to be 〜）〜だと判明する",
    sentence: "The rumor (   ) (to be) true.",
    jp: "そのうわさは本当だとわかった。",
    jpBlank: "そのうわさは本当だとわか(   )。",
    jpAnswer: "った"
  },
  {
    wordNo: 937,
    word: "advertise",
    meaning: "〜を宣伝する",
    sentence: "(   ) the concert",
    jp: "コンサートを宣伝する",
    jpBlank: "コンサートを(   )する",
    jpAnswer: "宣伝"
  },
  {
    wordNo: 938,
    word: "clarify",
    meaning: "〜を明らかにする",
    sentence: "Let me (   ) my point.",
    jp: "言いたいことを明確にします。",
    jpBlank: "(   )を明確にします。",
    jpAnswer: "言いたいこと"
  },
  {
    wordNo: 939,
    word: "seek",
    meaning: "〜を求める",
    sentence: "(   ) specialist advice",
    jp: "専門家の意見を求める",
    jpBlank: "専門家の意見を(   )",
    jpAnswer: "求める"
  },
  {
    wordNo: 939,
    word: "seek",
    meaning: "（to do）〜しようと努める",
    sentence: "(   ) to achieve a goal",
    jp: "目的を達成しようと努める",
    jpBlank: "目的を達成(   )",
    jpAnswer: "しようと努める"
  },
  {
    wordNo: 940,
    word: "entertain",
    meaning: "〜を楽しませる",
    sentence: "(   ) an audience",
    jp: "観客を楽しませる",
    jpBlank: "観客を(   )",
    jpAnswer: "楽しませる"
  },
  {
    wordNo: 940,
    word: "entertain",
    meaning: "〜をもてなす",
    sentence: "(   ) them with Italian cuisine",
    jp: "イタリア料理で彼らをもてなす",
    jpBlank: "イタリア料理で彼らを(   )",
    jpAnswer: "もてなす"
  },
  {
    wordNo: 941,
    word: "amused",
    meaning: "（人）を（笑顔にさせて）楽しませる",
    sentence: "The clown (   ) us all.",
    jp: "そのピエロは私たちみんなを楽しませた。",
    jpBlank: "そのピエロは私たちみんなを(   )た。",
    jpAnswer: "楽しませ"
  },
  {
    wordNo: 942,
    word: "attracted",
    meaning: "〜を引きつける，魅了する",
    sentence: "The pop star's marriage (   ) media attention.",
    jp: "人気スターの結婚はマスコミの関心を引きつけた。",
    jpBlank: "人気スターの結婚はマスコミの関心を(   )た。",
    jpAnswer: "引きつけ"
  },
  {
    wordNo: 943,
    word: "fascinated",
    meaning: "〜を魅了する，〜にとても興味を持たせる",
    sentence: "I was (   ) by the Sagrada Familia.",
    jp: "サグラダ・ファミリアに魅了された。",
    jpBlank: "サグラダ・ファミリアに(   )された。",
    jpAnswer: "魅了"
  },
  {
    wordNo: 944,
    word: "absorbed",
    meaning: "（be 〜ed in 〜）〜に没頭する",
    sentence: "I was (   ) in a book.",
    jp: "私は本に夢中になっていた。",
    jpBlank: "私は本に(   )。",
    jpAnswer: "夢中になっていた"
  },
  {
    wordNo: 944,
    word: "absorb",
    meaning: "〜を吸収する",
    sentence: "(   ) water",
    jp: "水を吸収する",
    jpBlank: "水を(   )する",
    jpAnswer: "吸収"
  },
  {
    wordNo: 945,
    word: "fond",
    meaning: "（be 〜 of 〜）（〜が）好きだ",
    sentence: "I am very (   ) of ramen.",
    jp: "私はラーメンが大好きだ。",
    jpBlank: "私はラーメンが大(   )。",
    jpAnswer: "好きだ"
  },
  {
    wordNo: 945,
    word: "fond",
    meaning: "懐かしい",
    sentence: "bring back (   ) memories",
    jp: "懐かしい思い出をよみがえらせる",
    jpBlank: "(   )思い出をよみがえらせる",
    jpAnswer: "懐かしい"
  },
  {
    wordNo: 946,
    word: "scared",
    meaning: "〜を怯えさせる",
    sentence: "Oh! You (   ) me!",
    jp: "もう，びっくりしたじゃない（あなたは私を怯えさせた）。",
    jpBlank: "(   )，びっくりしたじゃない。",
    jpAnswer: "もう"
  },
  {
    wordNo: 947,
    word: "alarmed",
    meaning: "〜をぎょっとさせる",
    sentence: "I was (   ) to hear a man shout.",
    jp: "男が叫ぶのを聞いて，ぎょっとした。",
    jpBlank: "男が叫ぶのを(   )，ぎょっとした。",
    jpAnswer: "聞いて"
  },
  {
    wordNo: 947,
    word: "alarm",
    meaning: "恐怖，不安",
    sentence: "cry out in (   )",
    jp: "恐怖を感じて叫ぶ",
    jpBlank: "(   )を感じて叫ぶ",
    jpAnswer: "恐怖"
  },
  {
    wordNo: 948,
    word: "amazed",
    meaning: "〜を驚かせる",
    sentence: "Sam (   ) me with his cooking skills.",
    jp: "サムはその料理の腕で私を驚かせた。",
    jpBlank: "サムはその料理の腕で私を(   )た。",
    jpAnswer: "驚かせ"
  },
  {
    wordNo: 949,
    word: "irritates",
    meaning: "（長期にわたって）〜をいらいらさせる",
    sentence: "Her habit of biting her nails (   ) me.",
    jp: "彼女の爪を噛む癖は私をいらいらさせる。",
    jpBlank: "彼女の爪を噛む癖は私を(   )。",
    jpAnswer: "いらいらさせる"
  },
],
950: [
  {
    wordNo: 950,
    word: "upset",
    meaning: "〜を当惑させる，動揺させる",
    sentence: "The news (   ) her.",
    jp: "その知らせは彼女を動揺させた。",
    jpBlank: "その知らせは彼女を(   )た。",
    jpAnswer: "動揺させ"
  },
  {
    wordNo: 950,
    word: "upset",
    meaning: "（秩序などを）乱す",
    sentence: "(   ) the environmental balance",
    jp: "環境のバランスを乱す",
    jpBlank: "環境のバランスを(   )",
    jpAnswer: "乱す"
  },
  {
    wordNo: 950,
    word: "upset",
    meaning: "当惑した，動揺した",
    sentence: "be (   ) about a friend's death",
    jp: "友だちの死に動揺する",
    jpBlank: "友だちの死に(   )",
    jpAnswer: "動揺する"
  },
  {
    wordNo: 951,
    word: "puzzles",
    meaning: "〜を当惑させる",
    sentence: "What (   ) me is why she can't understand me.",
    jp: "私を当惑させるのは，なぜ彼女が私の言うことが理解できないかだ。",
    jpBlank: "私を(   )のは，なぜ彼女が私の言うことが理解できないかだ。",
    jpAnswer: "当惑させる"
  },
  {
    wordNo: 951,
    word: "puzzle",
    meaning: "難問，パズル",
    sentence: "a 2,000-piece jigsaw (   )",
    jp: "2,000ピースのジグソーパズル",
    jpBlank: "2,000ピースのジグソー(   )",
    jpAnswer: "パズル"
  },
  {
    wordNo: 952,
    word: "confused",
    meaning: "〜を混乱させる，困惑させる",
    sentence: "His reply (   ) me.",
    jp: "彼の返答は私を困惑させた。",
    jpBlank: "彼の返答は私を(   )た。",
    jpAnswer: "困惑させ"
  },
  {
    wordNo: 952,
    word: "confuse",
    meaning: "（A with [and] B）（AをBと）混同する",
    sentence: "(   ) Nancy with her twin sister",
    jp: "ナンシーを双子の姉妹と混同する",
    jpBlank: "ナンシーを双子の姉妹と(   )",
    jpAnswer: "混同する"
  },
  {
    wordNo: 953,
    word: "bored",
    meaning: "〜をうんざりさせる，退屈させる",
    sentence: "I was (   ) with his long speech.",
    jp: "彼の長い話にうんざりした。",
    jpBlank: "(   )うんざりした。",
    jpAnswer: "彼の長い話に"
  },
  {
    wordNo: 954,
    word: "frustrated",
    meaning: "〜を欲求不満にさせる",
    sentence: "I felt (   ) because I could not express myself well.",
    jp: "うまく表現できなくてもどかしい思いをした。",
    jpBlank: "うまく表現できなくて(   )思いをした。",
    jpAnswer: "もどかしい"
  },
  {
    wordNo: 954,
    word: "frustrated",
    meaning: "（計画などを）挫折させる",
    sentence: "His plan was (   ) by a lack of money.",
    jp: "彼の計画はお金がなかったため頓挫した。",
    jpBlank: "彼の計画はお金がなかったため(   )した。",
    jpAnswer: "頓挫"
  },
  {
    wordNo: 955,
    word: "disappointed",
    meaning: "〜を失望させる",
    sentence: "I was (   ) with the soccer game.",
    jp: "サッカーの試合にがっかりした。",
    jpBlank: "サッカーの試合に(   )した。",
    jpAnswer: "がっかり"
  },
  {
    wordNo: 956,
    word: "embarrassed",
    meaning: "〜に恥ずかしい思いをさせる，困惑させる",
    sentence: "I was (   ) about using the wrong fork at dinner.",
    jp: "夕食時，フォークを使い間違えて恥ずかしかった。",
    jpBlank: "(   )，フォークを使い間違えて恥ずかしかった。",
    jpAnswer: "夕食時"
  },
  {
    wordNo: 957,
    word: "ashamed",
    meaning: "恥ずかしい",
    sentence: "I'm (   ) of hurting her feelings.",
    jp: "彼女の気持ちを傷つけたことを恥じている。",
    jpBlank: "(   )を傷つけたことを恥じている。",
    jpAnswer: "彼女の気持ち"
  },
  {
    wordNo: 958,
    word: "uneasy",
    meaning: "不安な，落ち着かない",
    sentence: "feel (   ) about living alone",
    jp: "ひとり暮らしは不安だ",
    jpBlank: "ひとり暮らし(   )",
    jpAnswer: "は不安だ"
  },
  {
    wordNo: 959,
    word: "hesitate",
    meaning: "ためらう",
    sentence: "Please do not (   ) to contact me if you have any questions.",
    jp: "質問があればどうぞご遠慮なく（連絡するのをためらわないで）ご連絡ください。",
    jpBlank: "質問があればどうぞご遠慮なくご連絡く(   )。",
    jpAnswer: "ださい"
  },
  {
    wordNo: 960,
    word: "reluctant",
    meaning: "（to do）〜（するの）が気が進まない",
    sentence: "I was (   ) to go with him.",
    jp: "彼と一緒に行くのは気が進まなかった。",
    jpBlank: "彼と一緒に行くのは気が(   )。",
    jpAnswer: "進まなかった"
  },
  {
    wordNo: 961,
    word: "trembling",
    meaning: "震える",
    sentence: "The little girl was (   ) with fear.",
    jp: "その少女は恐怖で震えていた。",
    jpBlank: "その少女は恐怖で(   )いた。",
    jpAnswer: "震えて"
  },
  {
    wordNo: 962,
    word: "boast",
    meaning: "自慢する",
    sentence: "(   ) about how clever my son is",
    jp: "私の息子がどれほど賢いかを自慢する",
    jpBlank: "私の息子がどれほど賢いかを(   )",
    jpAnswer: "自慢する"
  },
  {
    wordNo: 962,
    word: "boasts",
    meaning: "（場所や組織が）〜を誇りにしている",
    sentence: "Our school (   ) a long history of 110 years.",
    jp: "我が校は110年という長い歴史を誇っている。",
    jpBlank: "我が校は110年という長い歴史を誇って(   )。",
    jpAnswer: "いる"
  },
  {
    wordNo: 963,
    word: "jealous",
    meaning: "（of 〜）（〜に）嫉妬した",
    sentence: "be (   ) of his promotion",
    jp: "彼の昇進に嫉妬している。",
    jpBlank: "彼の昇進に嫉(   )。",
    jpAnswer: "妬している"
  },
  {
    wordNo: 964,
    word: "envy",
    meaning: "〜をうらやましく思う",
    sentence: "(   ) him for his wealth",
    jp: "財産のことで彼を羨ましく思う",
    jpBlank: "財産のことで彼を羨ましく(   )",
    jpAnswer: "思う"
  },
  {
    wordNo: 964,
    word: "envy",
    meaning: "羨望",
    sentence: "feel (   ) at her success",
    jp: "彼女の成功を羨む（羨望を感じる）",
    jpBlank: "彼女の成功を(   )",
    jpAnswer: "羨む"
  },
  {
    wordNo: 965,
    word: "yell",
    meaning: "叫ぶ，大声をあげる",
    sentence: "(   ) at the children to be quiet",
    jp: "子どもたちに静かにさせようと叫ぶ（大声で言う）",
    jpBlank: "子どもたちに静かにさせようと(   )",
    jpAnswer: "叫ぶ"
  },
  {
    wordNo: 965,
    word: "yell",
    meaning: "叫び，わめき声",
    sentence: "let out a (   ) of delight",
    jp: "喜びの叫びをあげる",
    jpBlank: "喜びの(   )をあげる",
    jpAnswer: "叫び"
  },
  {
    wordNo: 966,
    word: "respect",
    meaning: "（人）を尊敬する",
    sentence: "(   ) Gandhi",
    jp: "ガンジーを尊敬する",
    jpBlank: "ガンジー(   )する",
    jpAnswer: "を尊敬"
  },
  {
    wordNo: 966,
    word: "respect",
    meaning: "（物）を尊重する",
    sentence: "(   ) his judgement",
    jp: "彼の判断を尊重する",
    jpBlank: "彼の判断(   )する",
    jpAnswer: "を尊重"
  },
  {
    wordNo: 966,
    word: "respect",
    meaning: "敬意",
    sentence: "a deep (   ) for the aged",
    jp: "老人への深い敬意",
    jpBlank: "老人への深い(   )",
    jpAnswer: "敬意"
  },
  {
    wordNo: 966,
    word: "respect",
    meaning: "〜の点で",
    sentence: "differ in this (   )",
    jp: "この点で異なる",
    jpBlank: "この(   )異なる",
    jpAnswer: "点で"
  },
  {
    wordNo: 967,
    word: "despair",
    meaning: "絶望",
    sentence: "a deep sense of (   )",
    jp: "深い絶望感",
    jpBlank: "深い(   )感",
    jpAnswer: "絶望"
  },
  {
    wordNo: 968,
    word: "emotions",
    meaning: "（特に強い）感情",
    sentence: "show my (   )",
    jp: "感情を表に出す",
    jpBlank: "(   )を表に出す",
    jpAnswer: "感情"
  },
],
969: [
  {
    wordNo: 969,
    word: "sympathy",
    meaning: "同情",
    sentence: "have deep (   ) for the victims",
    jp: "犠牲者たちに本当に同情する",
    jpBlank: "犠牲者たちに本当に(   )する",
    jpAnswer: "同情"
  },
  {
    wordNo: 969,
    word: "sympathy",
    meaning: "共感",
    sentence: "be in (   ) with his opinion",
    jp: "彼の考えに共感する",
    jpBlank: "彼の考えに(   )する",
    jpAnswer: "共感"
  },
  {
    wordNo: 970,
    word: "shame",
    meaning: "残念なこと",
    sentence: "It is a (   ) that you didn't see that movie.",
    jp: "あなたがその映画を見ていないのは残念です。",
    jpBlank: "あなたがその映画を見ていないのは残念(   )。",
    jpAnswer: "です"
  },
  {
    wordNo: 970,
    word: "shame",
    meaning: "恥",
    sentence: "To my (   ), I lied to him.",
    jp: "恥ずかしながら，私は彼にうそをついた。",
    jpBlank: "恥ずかしながら，私は彼にうそ(   )。",
    jpAnswer: "をついた"
  },
  {
    wordNo: 971,
    word: "confidence",
    meaning: "自信",
    sentence: "boost my (   )",
    jp: "（私の）自信を高める",
    jpBlank: "(   )を高める",
    jpAnswer: "自信"
  },
  {
    wordNo: 971,
    word: "confidence",
    meaning: "（in 〜）（〜に対する）信頼",
    sentence: "I have great (   ) in my staff.",
    jp: "私は職員を全面的に信頼している。",
    jpBlank: "私は職員を全面的に(   )している。",
    jpAnswer: "信頼"
  },
  {
    wordNo: 972,
    word: "courage",
    meaning: "勇気",
    sentence: "have the (   ) to say no",
    jp: "断る勇気を持つ",
    jpBlank: "断る(   )を持つ",
    jpAnswer: "勇気"
  },
  {
    wordNo: 973,
    word: "passion",
    meaning: "情熱",
    sentence: "have a (   ) for music",
    jp: "音楽への情熱を持っている",
    jpBlank: "音楽への(   )を持っている",
    jpAnswer: "情熱"
  },
  {
    wordNo: 974,
    word: "sorrows",
    meaning: "悲しみ",
    sentence: "experience the joys and (   ) of life",
    jp: "人生の苦楽を経験する",
    jpBlank: "人生の(   )を経験する",
    jpAnswer: "苦楽"
  },
  {
    wordNo: 975,
    word: "ignore",
    meaning: "〜を無視する",
    sentence: "completely (   ) him",
    jp: "完全に彼を無視する",
    jpBlank: "完全に彼を(   )する",
    jpAnswer: "無視"
  },
  {
    wordNo: 976,
    word: "offended",
    meaning: "（人，気分）を怒らせる，の気分を害する",
    sentence: "His jokes (   ) Irish people.",
    jp: "彼のジョークはアイルランドの人たちを怒らせた。",
    jpBlank: "彼のジョークはアイルランドの人たち(   )た。",
    jpAnswer: "を怒らせ"
  },
  {
    wordNo: 977,
    word: "depressed",
    meaning: "〜を憂うつにさせる，落ち込ませる",
    sentence: "The rainy weather (   ) me.",
    jp: "雨ですっかり気がめいってしまった（私を落ち込ませた）。",
    jpBlank: "雨ですっかり気がめいって(   )。",
    jpAnswer: "しまった"
  },
  {
    wordNo: 978,
    word: "owe",
    meaning: "（A to B）（AはBの）おかげだ",
    sentence: "I (   ) my success to him.",
    jp: "私の成功は彼のおかげだ。",
    jpBlank: "私の成功は彼の(   )。",
    jpAnswer: "おかげだ"
  },
  {
    wordNo: 978,
    word: "owe",
    meaning: "（A（金）をBに）借りている",
    sentence: "I (   ) 2,000 yen to him. / I (   ) him 2,000 yen.",
    jp: "彼に2,000円を借りている。（下線は重点を示す。）",
    jpBlank: "(   )2,000円を借りている。",
    jpAnswer: "彼に"
  },
  {
    wordNo: 979,
    word: "fear",
    meaning: "恐怖",
    sentence: "overcome my (   ) of snakes",
    jp: "ヘビに対する恐怖を克服する",
    jpBlank: "ヘビに対する(   )を克服する",
    jpAnswer: "恐怖"
  },
  {
    wordNo: 979,
    word: "fear",
    meaning: "恐れる",
    sentence: "(   ) that we may not receive a pension",
    jp: "年金をもらえないかもしれないと恐れる",
    jpBlank: "年金をもらえないかもしれないと(   )",
    jpAnswer: "恐れる"
  },
  {
    wordNo: 979,
    word: "fear",
    meaning: "〜を心配する",
    sentence: "(   ) that it will rain tomorrow",
    jp: "明日雨が降らないかを心配する",
    jpBlank: "明日雨が降らないかを(   )",
    jpAnswer: "心配する"
  },
  {
    wordNo: 980,
    word: "method",
    meaning: "方法",
    sentence: "a (   ) for reducing stress",
    jp: "ストレスを減らすやり方",
    jpBlank: "ストレスを減(   )",
    jpAnswer: "らすやり方"
  },
  {
    wordNo: 981,
    word: "media",
    meaning: "（情報伝達の）手段，媒体，メディア",
    sentence: "receive a great deal of (   ) attention",
    jp: "メディアにとても注目される",
    jpBlank: "(   )にとても注目される",
    jpAnswer: "メディア"
  },
  {
    wordNo: 981,
    word: "medium",
    meaning: "中間の",
    sentence: "What size shirt do you wear — small, (   ), or large?",
    jp: "あなたのシャツのサイズは，小，中，大のどれですか。",
    jpBlank: "(   )ツのサイズは，小，中，大のどれですか。",
    jpAnswer: "あなたのシャ"
  },
  {
    wordNo: 982,
    word: "means",
    meaning: "手段",
    sentence: "a (   ) of communication",
    jp: "意思疎通の手段",
    jpBlank: "意思疎通の(   )",
    jpAnswer: "手段"
  },
  {
    wordNo: 982,
    word: "means",
    meaning: "財産，収入",
    sentence: "live beyond my (   )",
    jp: "収入以上の暮らしをする",
    jpBlank: "(   )以上の暮らしをする",
    jpAnswer: "収入"
  },
  {
    wordNo: 983,
    word: "extent",
    meaning: "程度",
    sentence: "You are correct to some (   ).",
    jp: "君はある程度正しい。",
    jpBlank: "君はある(   )正しい。",
    jpAnswer: "程度"
  },
  {
    wordNo: 984,
    word: "extremely",
    meaning: "極度に，非常に",
    sentence: "It's (   ) hot outside.",
    jp: "外はひどく暑い。",
    jpBlank: "(   )い。",
    jpAnswer: "外はひどく暑"
  },
  {
    wordNo: 985,
    word: "total",
    meaning: "全体の",
    sentence: "the (   ) cost",
    jp: "総費用",
    jpBlank: "(   )",
    jpAnswer: "総費用"
  },
  {
    wordNo: 985,
    word: "total",
    meaning: "まったったくの",
    sentence: "a (   ) stranger",
    jp: "赤の（まったくの）他人",
    jpBlank: "赤の(   )他人",
    jpAnswer: "まったくの"
  },
  {
    wordNo: 985,
    word: "total",
    meaning: "合計",
    sentence: "The (   ) comes to 50 dollars.",
    jp: "合計50ドルです。",
    jpBlank: "(   )50ドルです。",
    jpAnswer: "合計"
  },
  {
    wordNo: 986,
    word: "largely",
    meaning: "大部分は",
    sentence: "Our customers are (   ) women.",
    jp: "私たちのお客様は大部分が女性だ。",
    jpBlank: "私たちのお客様は大部分が(   )。",
    jpAnswer: "女性だ"
  },
  {
    wordNo: 986,
    word: "largely",
    meaning: "主に",
    sentence: "(   ) because of its beauty",
    jp: "主にその美しさのために",
    jpBlank: "(   )その美しさのために",
    jpAnswer: "主に"
  },
  {
    wordNo: 987,
    word: "moderate",
    meaning: "適度な，度を超さない",
    sentence: "get (   ) exercise",
    jp: "適度な運動をする",
    jpBlank: "(   )運動をする",
    jpAnswer: "適度な"
  },
],
988: [
  {
    wordNo: 988,
    word: "somewhat",
    meaning: "いくぶん",
    sentence: "feel (   ) sad",
    jp: "いくぶん悲しい気分だ",
    jpBlank: "(   )悲しい気分だ",
    jpAnswer: "いくぶん"
  },
  {
    wordNo: 989,
    word: "subtle",
    meaning: "かすかな",
    sentence: "a (   ) difference in meaning",
    jp: "かすかな意味の違い",
    jpBlank: "(   )意味の違い",
    jpAnswer: "かすかな"
  },
  {
    wordNo: 990,
    word: "possibly",
    meaning: "ひょっとすると",
    sentence: "It will take two weeks, (   ) longer.",
    jp: "2週間，ひょっとしたらそれ以上かかるかもしれない。",
    jpBlank: "2(   )，ひょっとしたらそれ以上かかるかもしれない。",
    jpAnswer: "週間"
  },
  {
    wordNo: 990,
    word: "possibly",
    meaning: "（cannot 〜）どうしても（〜できない）",
    sentence: "I cannot (   ) solve this problem.",
    jp: "この問題はどうしても解けない。",
    jpBlank: "この問題は(   )解けない。",
    jpAnswer: "どうしても"
  },
  {
    wordNo: 991,
    word: "eventually",
    meaning: "最終的に，ついに",
    sentence: "After changing jobs many times, I (   ) found a job in a bank.",
    jp: "何度も転職を繰り返した後，最終的に，銀行に就職しました。",
    jpBlank: "何度も転職を繰り返した後，(   )，銀行に就職しました。",
    jpAnswer: "最終的に"
  },
  {
    wordNo: 992,
    word: "necessarily",
    meaning: "（not 〜）必ずしも（〜でない）",
    sentence: "Rich people are not (   ) happy.",
    jp: "金持ちが必ずしも幸せとは限らない。",
    jpBlank: "金持ちが(   )幸せとは限らない。",
    jpAnswer: "必ずしも"
  },
  {
    wordNo: 993,
    word: "frankly",
    meaning: "率率に",
    sentence: "talk (   ) with a friend",
    jp: "友だちと率直に話そう",
    jpBlank: "友だちと率直(   )",
    jpAnswer: "に話そう"
  },
  {
    wordNo: 994,
    word: "Ironically",
    meaning: "皮肉なことに",
    sentence: "(   ), my car was stolen right in front of the police station.",
    jp: "皮肉なことに，私の車は警察署の真ん前で盗まれた。",
    jpBlank: "(   )，私の車は警察署の真ん前で盗まれた。",
    jpAnswer: "皮肉なことに"
  },
  {
    wordNo: 995,
    word: "Moreover",
    meaning: "そのうえ，さらに",
    sentence: "Smoking is bad for you. (   ), it costs a lot.",
    jp: "喫煙は体に悪い。そのうえお金がかかる。",
    jpBlank: "喫煙は体に悪い。(   )お金がかかる。",
    jpAnswer: "そのうえ"
  },
  {
    wordNo: 996,
    word: "otherwise",
    meaning: "さもなければ",
    sentence: "Hurry up; (   ) you'll be late.",
    jp: "急げ！さもないと遅れるぞ。",
    jpBlank: "(   )！さもないと遅れるぞ。",
    jpAnswer: "急げ"
  },
  {
    wordNo: 996,
    word: "otherwise",
    meaning: "ほかの点では",
    sentence: "This room is small but (   ) perfect.",
    jp: "この部屋は狭いが，ほかの点では申し分ない。",
    jpBlank: "この部屋は狭いが，(   )申し分ない。",
    jpAnswer: "ほかの点では"
  },
  {
    wordNo: 996,
    word: "otherwise",
    meaning: "違うと思うように",
    sentence: "They say that the movie is wonderful, but I think (   ).",
    jp: "その映画はすばらしいと言うが，私は違うと思う（違うように考える）。",
    jpBlank: "その映画はすばらしいと言(   )，私は違うと思う。",
    jpAnswer: "うが"
  },
  {
    wordNo: 997,
    word: "regardless",
    meaning: "（of 〜）（〜に）とは無関係に",
    sentence: "(   ) of gender, race, or nationality",
    jp: "性別，民族，国籍とは無関係に",
    jpBlank: "性別，民族，国籍(   )",
    jpAnswer: "とは無関係に"
  },
  {
    wordNo: 998,
    word: "worth",
    meaning: "〜の価値がある",
    sentence: "This ring is (   ) over two million dollars.",
    jp: "この指輪は200万ドル以上の価値がある。",
    jpBlank: "この指輪は200万ドル以上の(   )。",
    jpAnswer: "価値がある"
  },
  {
    wordNo: 998,
    word: "worth",
    meaning: "（〜する）価値がある",
    sentence: "The film is (   ) seeing.",
    jp: "その映画は見る価値がある。",
    jpBlank: "その映画は見る(   )。",
    jpAnswer: "価値がある"
  },
  {
    wordNo: 998,
    word: "worth",
    meaning: "価値，（〜相当）",
    sentence: "$100,000 (   ) of damage",
    jp: "10万ドル相当の被害",
    jpBlank: "10万ドル(   )の被害",
    jpAnswer: "相当"
  },
  {
    wordNo: 999,
    word: "according to",
    meaning: "（調査，人の話など）によれば",
    sentence: "(   ) a public poll",
    jp: "世論調査によると",
    jpBlank: "世論調査によ(   )",
    jpAnswer: "ると"
  },
  {
    wordNo: 999,
    word: "according to",
    meaning: "（調査，人の話など）によれば",
    sentence: "Charges vary (   ) size.",
    jp: "料金は大きさによって変わります。",
    jpBlank: "料金は大きさによって変わ(   )。",
    jpAnswer: "ります"
  },
  {
    wordNo: 1000,
    word: "despite",
    meaning: "〜にもかかわらず",
    sentence: "The soccer match was held, (   ) the heavy rain.",
    jp: "大雨にもかかわらず，そのサッカーの試合が行われた。",
    jpBlank: "大雨に(   )，そのサッカーの試合が行われた。",
    jpAnswer: "もかかわらず"
  },
],
  };;;;;;;;;;
  
  
  // ====== 状態 ======
  let currentUnit = [];
  let currentIndex = 0;
  let wrongWords = [];
  let isRandom = false;
  let quizMode = "normal"; // normal | sessionReview
  let consecutiveCorrect = 0;
  let inputStartTime = null;
  let animSerial = 0;
  let animMode = "simple";
  /** 音声: true のとき次は単語、false のとき次は例文（交互） */
  let speechNextIsWord = true;
  let quizDirection = "jaToEn"; // jaToEn | enToJa

  // ====== DOM ======
  const home = document.getElementById("home");
  const quiz = document.getElementById("quiz");
  const resultScreen = document.getElementById("resultScreen");
  const themeToggle = document.getElementById("themeToggle");
  
  const sentenceEl = document.getElementById("sentence");
  const jpEl = document.getElementById("jp");
  const input = document.getElementById("answerInput");
  const resultEl = document.getElementById("result");
  const progress = document.getElementById("progress");
  
  const judgeBtn = document.getElementById("judgeBtn");
  const nextBtn = document.getElementById("nextBtn");
  const speakBtn = document.getElementById("speakBtn");
  const reviewBtn = document.getElementById("reviewBtn");
  const backHomeBtn = document.getElementById("backHome");
  const meaningEl = document.getElementById("meaning");
  const rangeStartInput = document.getElementById("rangeStart");
  const rangeEndInput = document.getElementById("rangeEnd");
  const rangeCountSelect = document.getElementById("rangeCount");
  const rangeLimitToggle = document.getElementById("rangeLimitToggle");
  const rangeCountField = document.getElementById("rangeCountField");
  const rangeSizeHint = document.getElementById("rangeSizeHint");
  const rangeModeInputs = document.querySelectorAll('input[name="rangeMode"]');
  const rangeTestBtn = document.getElementById("rangeTestBtn");
  const appModal = document.getElementById("appModal");
  const appModalBackdrop = document.getElementById("appModalBackdrop");
  const appModalTitle = document.getElementById("appModalTitle");
  const appModalMessage = document.getElementById("appModalMessage");
  const appModalCancel = document.getElementById("appModalCancel");
  const appModalOk = document.getElementById("appModalOk");


  // ====== Word Animation DOM ======
  const animModeEl = document.getElementById("animMode");
  const matchRateEl = document.getElementById("matchRate");
  const wordStageEl = document.getElementById("wordStage");
  const wordSilhouetteEl = document.getElementById("wordSilhouette");
  const wordRippleEl = document.getElementById("wordRipple");
  const wordFallingEl = document.getElementById("wordFalling");
  const wordBreakLayerEl = document.getElementById("wordBreakLayer");
  const quizCardEl = document.querySelector("#quiz .card");
  const globalFxEl = document.getElementById("globalFx");
  const comboDisplayEl = document.getElementById("comboDisplay");
  let appModalResolve = null;
  let appModalIsConfirm = false;

  function closeAppModal(result) {
    if (!appModal || !appModalResolve) return;
    appModal.classList.add("hidden");
    const resolve = appModalResolve;
    appModalResolve = null;
    appModalIsConfirm = false;
    resolve(result);
  }

  function openAppModal({
    title = "お知らせ",
    message = "",
    okText = "はい",
    cancelText = "キャンセル",
    isConfirm = false
  }) {
    if (!appModal || !appModalTitle || !appModalMessage || !appModalOk || !appModalCancel) {
      return Promise.resolve(isConfirm ? false : true);
    }

    appModalTitle.textContent = title;
    appModalMessage.textContent = message;
    appModalOk.textContent = okText;
    appModalCancel.textContent = cancelText;
    appModalCancel.classList.toggle("hidden", !isConfirm);
    appModal.classList.remove("hidden");
    appModalIsConfirm = isConfirm;

    return new Promise(resolve => {
      appModalResolve = resolve;
      setTimeout(() => appModalOk.focus(), 0);
    });
  }

  function showAppAlert(message, title = "お知らせ") {
    return openAppModal({ title, message, isConfirm: false, okText: "はい" });
  }

  function showAppConfirm(message, title = "確認") {
    return openAppModal({
      title,
      message,
      isConfirm: true,
      okText: "はい",
      cancelText: "いいえ"
    });
  }

  appModalOk?.addEventListener("click", () => closeAppModal(true));
  appModalCancel?.addEventListener("click", () => closeAppModal(false));
  appModalBackdrop?.addEventListener("click", () => {
    if (!appModalIsConfirm) closeAppModal(true);
  });
  document.addEventListener(
    "keydown",
    e => {
      if (!appModal || appModal.classList.contains("hidden")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        closeAppModal(appModalIsConfirm ? false : true);
        return;
      }
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        e.preventDefault();
        e.stopPropagation();
        closeAppModal(true);
      }
    },
    true
  );


  
  // Unit一覧（番号ボタン）は非表示 — 範囲テスト・ランダム出題のみ使用

  // ====== 設定 ======
  const randomToggleEl = document.getElementById("randomToggle");
  const savedRandom = localStorage.getItem("quizRandom") === "1";
  isRandom = savedRandom;
  if (randomToggleEl) randomToggleEl.checked = savedRandom;

  if (randomToggleEl) {
    randomToggleEl.onchange = e => {
      isRandom = e.target.checked;
      localStorage.setItem("quizRandom", isRandom ? "1" : "0");
    };
  }

  const getSelectedQuizDirection = () => {
    const checked = document.querySelector('input[name="quizDirection"]:checked');
    return checked?.value === "enToJa" ? "enToJa" : "jaToEn";
  };

  const quizDirectionInputs = document.querySelectorAll('input[name="quizDirection"]');
  const savedDirection = localStorage.getItem("quizDirection");
  if (savedDirection === "enToJa" || savedDirection === "jaToEn") {
    quizDirection = savedDirection;
    const savedInput = document.querySelector(`input[name="quizDirection"][value="${savedDirection}"]`);
    if (savedInput) savedInput.checked = true;
  }

  quizDirectionInputs.forEach(el => {
    el.addEventListener("change", () => {
      quizDirection = getSelectedQuizDirection();
      localStorage.setItem("quizDirection", quizDirection);
    });
  });

  const getSelectedRangeMode = () => {
    const checked = document.querySelector('input[name="rangeMode"]:checked');
    return checked?.value === "weak" ? "weak" : "normal";
  };

  const persistRangeInputs = () => {
    if (rangeStartInput) localStorage.setItem("quizRangeStart", rangeStartInput.value);
    if (rangeEndInput) localStorage.setItem("quizRangeEnd", rangeEndInput.value);
    if (rangeCountSelect) localStorage.setItem("quizRangeCount", rangeCountSelect.value);
    if (rangeLimitToggle) {
      localStorage.setItem("quizRangeLimitEnabled", rangeLimitToggle.checked ? "1" : "0");
    }
    localStorage.setItem("quizRangeMode", getSelectedRangeMode());
  };

  const bindRangeInput = (el) => {
    if (!el) return;
    el.addEventListener("change", () => {
      updateRangeCountOptions();
      persistRangeInputs();
    });
    el.addEventListener("input", () => {
      updateRangeCountOptions();
      persistRangeInputs();
    });
    el.addEventListener("blur", persistRangeInputs);
  };

  function syncRangeUiState() {
    const mode = getSelectedRangeMode();
    if (mode === "weak" && rangeLimitToggle) {
      rangeLimitToggle.checked = true;
    }
    const limitOn = !!rangeLimitToggle?.checked;
    rangeCountField?.classList.toggle("hidden", !limitOn);
    updateRangeCountOptions();
  }

  function updateRangeCountOptions() {
    const allWords = getAllWords();
    const maxNumber = allWords.reduce((max, entry) => Math.max(max, entry.number || 0), 0);
    const start = Number.parseInt(rangeStartInput?.value || "", 10);
    const end = Number.parseInt(rangeEndInput?.value || "", 10);
    const hasValidRange =
      Number.isInteger(start) &&
      Number.isInteger(end) &&
      start >= 1 &&
      end >= 1 &&
      start <= maxNumber &&
      end <= maxNumber &&
      start <= end;

    if (!hasValidRange) {
      rangeSizeHint?.classList.add("hidden");
      if (rangeCountSelect) {
        rangeCountSelect.innerHTML = "";
        rangeCountSelect.disabled = true;
      }
      return;
    }

    const rangeWords = getWordsInRange(allWords, start, end);
    const rangeSize = rangeWords.length;

    if (rangeSizeHint) {
      rangeSizeHint.textContent = `この範囲: ${rangeSize}問`;
      rangeSizeHint.classList.remove("hidden");
    }

    if (!rangeCountSelect || !rangeLimitToggle?.checked) return;

    const savedCount = Number.parseInt(localStorage.getItem("quizRangeCount") || "", 10);
    const defaultCount = Number.isInteger(savedCount)
      ? savedCount
      : Math.max(1, Math.min(30, rangeSize - 1));

    rangeCountSelect.disabled = rangeSize < 1;
    rangeCountSelect.innerHTML = "";
    for (let i = 1; i <= rangeSize; i++) {
      const option = document.createElement("option");
      option.value = String(i);
      option.textContent = String(i);
      rangeCountSelect.appendChild(option);
    }

    const selectedCount = Math.max(1, Math.min(defaultCount, rangeSize));
    rangeCountSelect.value = String(selectedCount);
  }

  if (rangeStartInput) {
    const s = localStorage.getItem("quizRangeStart");
    if (s !== null) rangeStartInput.value = s;
    bindRangeInput(rangeStartInput);
  }
  if (rangeEndInput) {
    const s = localStorage.getItem("quizRangeEnd");
    if (s !== null) rangeEndInput.value = s;
    bindRangeInput(rangeEndInput);
  }
  if (rangeLimitToggle) {
    rangeLimitToggle.checked = localStorage.getItem("quizRangeLimitEnabled") === "1";
    rangeLimitToggle.addEventListener("change", () => {
      if (getSelectedRangeMode() === "weak") {
        rangeLimitToggle.checked = true;
      }
      syncRangeUiState();
      persistRangeInputs();
    });
  }
  if (rangeCountSelect) {
    rangeCountSelect.addEventListener("change", persistRangeInputs);
  }
  rangeModeInputs.forEach(radio => {
    const savedMode = localStorage.getItem("quizRangeMode");
    if (savedMode && radio.value === savedMode) radio.checked = true;
    radio.addEventListener("change", () => {
      syncRangeUiState();
      persistRangeInputs();
    });
  });
  syncRangeUiState();

  // アニメ演出モード
  if (animModeEl) {
    animMode = localStorage.getItem("animMode") || "simple";
    animModeEl.value = animMode;
    animModeEl.onchange = e => {
      animMode = e.target.value;
      localStorage.setItem("animMode", animMode);
    };
  }

  // テーマ切り替え
  if (themeToggle) {
    const moonIconPath = "images/月のアイコン.png";
    const setThemeIcon = isDark => {
      if (isDark) {
        themeToggle.textContent = "☀";
        return;
      }
      themeToggle.innerHTML = `<img src="${moonIconPath}" alt="月アイコン" class="theme-icon">`;
    };

    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
    setThemeIcon(savedTheme === "dark");

    themeToggle.onclick = () => {
      const isDark = document.body.classList.toggle("dark");
      setThemeIcon(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    };
  }
  
  const homeBtn = document.getElementById("homeBtn");

  homeBtn.style.display = "none";

homeBtn.onclick = async () => {
  const shouldGoHome = await showAppConfirm("クイズを中断してホームに戻りますか？", "確認");
  if (shouldGoHome) {
    quiz.classList.add("hidden");
    resultScreen.classList.add("hidden");
    home.classList.remove("hidden");

    currentUnit = [];
    currentIndex = 0;
    wrongWords = [];
    quizMode = "normal";

    homeBtn.style.display = "none";
  }
};
  
  // ====== 開始 ======
  function startUnit(key) {
    const unitWords = units[key].map(entry => ({ ...entry }));
    startQuizWithWords(unitWords, "normal");
  }

  function startQuizWithWords(words, mode = "normal", options = {}) {
    quizMode = mode;
    quizDirection = getSelectedQuizDirection();
    currentUnit = [...words];
    if (!options.skipShuffle && isRandom) shuffle(currentUnit);
  
    currentIndex = 0;
    wrongWords = [];
    consecutiveCorrect = 0;
    inputStartTime = null;
  
    home.classList.add("hidden");
    quiz.classList.remove("hidden");
  
    homeBtn.style.display = "block";

    showCard();
  }

  // ====== 表示 ======
  function jpMainText(jp) {
    return (jp || "").replace(/（[^）]*）/g, "");
  }

  function formatJpBlankForDisplay(jpBlank, jp, jpAnswer) {
    if (!jpBlank) return "";
    const BLANK = "(   )";
    let displayed = jpBlank
      .replace(/（\(   \)）/g, BLANK)
      .replace(/（[^）]*）/g, "");

    if (jp && jpAnswer && displayed.includes(BLANK)) {
      const filled = displayed.replace(BLANK, jpAnswer);
      if (!filled.includes(jpAnswer)) {
        const main = jpMainText(jp);
        const idx = main.indexOf(jpAnswer);
        if (idx !== -1) {
          displayed = main.slice(0, idx) + BLANK + main.slice(idx + jpAnswer.length);
        }
      }
    }

    return displayed;
  }

  function showCard() {
    const q = currentUnit[currentIndex];

    speechNextIsWord = true;

    if (quizDirection === "enToJa") {
      sentenceEl.textContent = sentenceForDisplay(q);
      jpEl.textContent = formatJpBlankForDisplay(q.jpBlank, q.jp, q.jpAnswer);
      input.placeholder = "日本語を入力";
      quiz.classList.add("mode-en-to-ja");
    } else {
      sentenceEl.textContent = q.sentence;
      jpEl.textContent = q.jp;
      input.placeholder = "";
      quiz.classList.remove("mode-en-to-ja");
    }
  
    input.value = "";
    input.disabled = false;
    judgeBtn.disabled = false;
    inputStartTime = null;
  
    resultEl.textContent = "";
    resultEl.className = "";
  
    meaningEl.textContent = "";
    meaningEl.classList.add("hidden");
  
    matchRateEl?.classList.add("hidden");

    // レイヤー状態リセット
    wordStageEl?.classList.add("hidden");
    wordStageEl?.classList.remove("state-correct", "state-incorrect");
    wordFallingEl?.classList.remove("anim-correct", "anim-wrong-shift", "anim-wrong-rotate", "anim-wrong-drift", "anim-wrong-ugly");
    wordRippleEl?.classList.remove("play");
    if (wordBreakLayerEl) {
      wordBreakLayerEl.innerHTML = "";
      wordBreakLayerEl.classList.remove("play");
    }

    // コンボ表示リセット
    if (comboDisplayEl) {
      comboDisplayEl.classList.add("hidden");
      comboDisplayEl.classList.remove("tier-1", "tier-2", "play");
      comboDisplayEl.textContent = "";
    }

    // 全画面FX状態リセット
    document.body.classList.remove(
      "scene-correct",
      "scene-incorrect",
      "scene-hold",
      "scene-audio-pulse",
      "fx-combo-1",
      "fx-combo-2"
    );
    if (globalFxEl) {
      globalFxEl.classList.add("hidden");
      globalFxEl.classList.remove("scene-hold");
      const particlesWrap = globalFxEl.querySelector(".fx-particles");
      if (particlesWrap) particlesWrap.innerHTML = "";
    }

    nextBtn.classList.add("hidden");
    speakBtn.classList.add("hidden");
  
    const numberLabel = q.number ? `No.${q.number} ` : "";
    progress.textContent = `${numberLabel}${currentIndex + 1} / ${currentUnit.length}`;
    input.focus();
  }
  
  // ====== Word Animation helpers ======
  function normalizeWord(str) {
    return (str || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function normalizeJapanese(str) {
    return (str || "").trim().normalize("NFKC");
  }

  function normalizeAnswer(str, direction = quizDirection) {
    return direction === "enToJa" ? normalizeJapanese(str) : normalizeWord(str);
  }

  function sentenceForDisplay(q) {
    return (q.sentence || "").replace(/\(\s+\)/g, q.word);
  }

  function getCorrectAnswer(q) {
    return quizDirection === "enToJa" ? q.jpAnswer : q.word;
  }

  // 文字位置ベースの一致率（完全一致なら100%）
  function calcMatchRate(userStr, targetStr, direction = quizDirection) {
    const u = normalizeAnswer(userStr, direction);
    const t = normalizeAnswer(targetStr, direction);

    const maxLen = Math.max(u.length, t.length);
    if (maxLen === 0) return 100;

    const minLen = Math.min(u.length, t.length);
    let match = 0;
    for (let i = 0; i < minLen; i++) {
      if (u[i] === t[i]) match++;
    }

    return Math.max(0, Math.min(100, Math.round((match / maxLen) * 100)));
  }

  function getComboTier(count) {
    if (count >= 5) return 2;
    if (count >= 3) return 1;
    return 0;
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function randBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  // --- Audio (WebAudio) ---
  let audioCtx = null;
  function ensureAudioCtx() {
    if (audioCtx) return audioCtx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    try {
      audioCtx = new Ctx();
    } catch {
      return null;
    }
    return audioCtx;
  }

  // スマホ対策：AudioContextはユーザー操作直後にresumeしないと無音になりがち
  function primeAudio() {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    try {
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
    } catch {
      // ignore
    }
  }

  function playTone(freq, durationMs, type = "sine", gainValue = 0.03) {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    try {
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;

      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainValue), now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + durationMs / 1000 + 0.02);
    } catch {
      // 音が鳴らなくても学習体験は止めない
    }
  }

  let correct2AudioEl = null;
  function playCorrect2Sound() {
    primeAudio();
    try {
      if (!correct2AudioEl) {
        correct2AudioEl = new Audio("クイズ正解2.mp3");
        correct2AudioEl.preload = "auto";
      }
      correct2AudioEl.pause();
      correct2AudioEl.currentTime = 0;
      void correct2AudioEl.play().catch(() => {});
    } catch {
      // ignore
    }
  }

  function playJudgeSound(kind) {
    // kind: fall / click / wrong / correct2（correct2 はクイズ正解2.mp3）
    // 正解時：刺さりにくい（低め・サイン寄り・音量控えめ）
    if (kind === "fallCorrect") playTone(560, 45, "sine", 0.012);
    if (kind === "fallWrong") playTone(190, 65, "triangle", 0.012);
    if (kind === "fall") playTone(520, 55, "sine", 0.012);

    // 正解時クリック：高音域より「ふわっとした短い音」（2音）
    if (kind === "click") {
      playTone(880, 75, "sine", 0.018);
      setTimeout(() => playTone(1320, 55, "sine", 0.009), 12);
    }
    if (kind === "correct2") playCorrect2Sound();
    if (kind === "wrong") playTone(180, 140, "triangle", 0.018);
  }

  function scheduleFallingRhythm(serial, fallDurationMs, isExact) {
    if (!fallDurationMs || fallDurationMs < 1) return;
    const beats = isExact ? 3 : 4;
    const baseAt = Math.round(fallDurationMs * 0.22);
    for (let i = 0; i < beats; i++) {
      const t = baseAt + Math.round((fallDurationMs * 0.58) * (i / (beats - 1)));
      setTimeout(() => {
        if (serial !== animSerial) return;
        playJudgeSound(isExact ? "fallCorrect" : "fallWrong");
        triggerAudioPulse();
      }, t);
    }
  }

  function createBreakdown(userDisplay, matchRate) {
    if (!wordBreakLayerEl) return;
    wordBreakLayerEl.innerHTML = "";

    const text = normalizeWord(userDisplay);
    const chars = text.split("");
    const mismatch = 1 - matchRate / 100;

    // mismatchが大きいほど飛び散る（違和感増幅）
    const scatterX = 10 + mismatch * 18;
    const scatterY = 20 + mismatch * 35;
    const scatterRot = 45 + mismatch * 120;
    const baseDelay = 60 + mismatch * 90;

    chars.forEach(ch => {
      const span = document.createElement("span");
      span.className = "break-char" + (ch === " " ? " space" : "");
      span.textContent = ch === " " ? " " : ch;

      const dx = randBetween(-scatterX, scatterX);
      const dy = randBetween(-scatterY * 0.9, -scatterY * 0.2);
      const dr = randBetween(-scatterRot, scatterRot);
      const delay = Math.round(Math.random() * baseDelay);

      span.style.setProperty("--dx", `${dx.toFixed(1)}px`);
      span.style.setProperty("--dy", `${dy.toFixed(1)}px`);
      span.style.setProperty("--dr", `${dr.toFixed(1)}deg`);
      span.style.setProperty("--delay", `${delay}ms`);

      wordBreakLayerEl.appendChild(span);
    });
  }

  function runWordAnimation({
    userDisplay,
    userNorm,
    correctDisplay,
    correctNorm,
    isExact,
    matchRate,
    comboTier,
    elapsedMs
  }) {
    const serial = ++animSerial;

    if (!wordStageEl || !wordFallingEl || !wordSilhouetteEl) return 700;

    // Stage位置合わせ（カード内で入力位置と重ねる）
    if (quizCardEl) {
      const cardRect = quizCardEl.getBoundingClientRect();
      const inputRect = input.getBoundingClientRect();
      const stageY = (inputRect.top - cardRect.top) + inputRect.height * 0.55;
      wordStageEl.style.top = `${stageY}px`;
    }

    // mode + combo
    wordStageEl.classList.remove("anim-mode-simple", "anim-mode-neon", "anim-mode-pop");
    wordStageEl.classList.add(`anim-mode-${animMode}`);

    wordStageEl.classList.remove("combo-tier-0", "combo-tier-1", "combo-tier-2");
    wordStageEl.classList.add(`combo-tier-${comboTier}`);

    // コンボ上位は色で気持ちよさを強化
    if (comboTier >= 2) {
      if (animMode === "simple") wordStageEl.style.setProperty("--glow", "rgba(124, 58, 237, 0.95)");
      if (animMode === "neon") wordStageEl.style.setProperty("--glow", "rgba(217, 70, 239, 0.95)");
      if (animMode === "pop") wordStageEl.style.setProperty("--glow", "rgba(249, 115, 22, 0.95)");
      wordStageEl.style.setProperty("--rippleBoost", "1.55");
    } else if (comboTier === 1) {
      wordStageEl.style.setProperty("--rippleBoost", "1.25");
    }

    // speed連動（速いほど短く・ズレにくく）
    const elapsedClamped = Math.max(0, Math.min(2500, elapsedMs || 0));
    const fastness = Math.max(0, Math.min(1, 1 - elapsedClamped / 2500)); // 1=超速い
    const fallDuration = Math.round(lerp(900, 560, fastness));

    wordStageEl.style.setProperty("--fallDuration", `${fallDuration}ms`);
    wordStageEl.style.setProperty("--startY", `${Math.round(-140 - (1 - fastness) * 20)}px`);

    // 影の濃さ（不正解ほど徐々に濃く、かつ一致率が低いほど濃く）
    const mismatch = 1 - matchRate / 100;
    const silhEnd = Math.min(0.9, 0.58 + mismatch * 0.36);
    wordStageEl.style.setProperty("--silhEndOpacity", silhEnd.toFixed(2));

    // テキスト更新
    wordSilhouetteEl.textContent = correctDisplay;
    wordFallingEl.textContent = isExact
      ? correctDisplay
      : ((userDisplay && userDisplay.trim().length > 0) ? userDisplay : correctDisplay);
    wordRippleEl?.classList.remove("play");
    if (wordBreakLayerEl) {
      wordBreakLayerEl.innerHTML = "";
      wordBreakLayerEl.classList.remove("play");
    }

    // 初期状態クラス
    wordStageEl.classList.remove("state-correct", "state-incorrect");
    wordFallingEl.classList.remove("anim-correct", "anim-wrong-shift", "anim-wrong-rotate", "anim-wrong-drift", "anim-wrong-ugly");

    // --- 正解 ---
    if (isExact) {
      wordStageEl.classList.add("state-correct");
      wordFallingEl.classList.add("anim-correct");

      wordStageEl.classList.remove("state-incorrect");

      // リズム音（落下中）
      scheduleFallingRhythm(serial, fallDuration, true);

      // 波紋（余韻）
      const rippleAt = Math.round(fallDuration * 0.78);
      setTimeout(() => {
        if (serial !== animSerial) return;
        if (!wordRippleEl) return;
        wordRippleEl.classList.remove("play");
        void wordRippleEl.offsetWidth; // 再生を確実にする
        wordRippleEl.classList.add("play");
        // 正解音2は judge 側で読み上げに合わせて再生
      }, rippleAt);

      // 表示開始
      wordStageEl.classList.remove("hidden");
      return fallDuration;
    }

    // --- 不正解 ---
    wordStageEl.classList.add("state-incorrect");

    // ランダム演出（少しズレ / 回転 / 横にズレ続ける）
    // 不一致が大きいほど「歪み拒否（ugly）」に寄せる
    const variants = ["shift", "rotate", "drift", "ugly"];
    let variant = variants[Math.floor(Math.random() * variants.length)];
    if (mismatch >= 0.18 && Math.random() < 0.55 + mismatch * 0.25) variant = "ugly";
    if (matchRate < 75 && Math.random() < 0.75) variant = "ugly";

    // 速いほどズレを減らす（ぴったり一致しやすく）
    const driftFactor = 0.85 + (1 - fastness) * 0.55;
    const driftBase = (mismatch * 20 + 6) * driftFactor;

    const endX = randBetween(-driftBase, driftBase);
    const endRot = randBetween(-driftBase * 0.12, driftBase * 0.12);
    const driftX = randBetween(-driftBase, driftBase);

    // "気持ち悪い"ほど、ズレを強める（歪み拒否）
    if (variant === "ugly") {
      const uglyEndX = endX * randBetween(1.25, 1.9);
      const uglyEndRot = endRot * randBetween(1.35, 2.1);
      const jitterX = randBetween(-Math.abs(uglyEndX) * 0.35, Math.abs(uglyEndX) * 0.35);
      const jitterY = randBetween(-14 - mismatch * 22, -4 - mismatch * 10);
      const jitterRot = randBetween(-Math.abs(uglyEndRot) * 0.75, Math.abs(uglyEndRot) * 0.75);

      wordStageEl.style.setProperty("--startY", `${Math.round(-190 - (1 - fastness) * 30)}px`);
      wordStageEl.style.setProperty("--endX", `${uglyEndX.toFixed(1)}px`);
      wordStageEl.style.setProperty("--endRot", `${uglyEndRot.toFixed(2)}deg`);
      wordStageEl.style.setProperty("--jitterX", `${jitterX.toFixed(1)}px`);
      wordStageEl.style.setProperty("--jitterY", `${jitterY.toFixed(1)}px`);
      wordStageEl.style.setProperty("--jitterRot", `${jitterRot.toFixed(2)}deg`);

      wordFallingEl.classList.add("anim-wrong-ugly");
    } else if (variant === "shift") {
      wordStageEl.style.setProperty("--endX", `${endX.toFixed(1)}px`);
      wordStageEl.style.setProperty("--endRot", `${endRot.toFixed(2)}deg`);
      wordFallingEl.classList.add("anim-wrong-shift");
    } else if (variant === "rotate") {
      wordStageEl.style.setProperty("--endX", `${endX.toFixed(1)}px`);
      wordStageEl.style.setProperty("--endRot", `${endRot.toFixed(2)}deg`);
      wordFallingEl.classList.add("anim-wrong-rotate");
    } else {
      wordStageEl.style.setProperty("--endX", `0px`);
      wordStageEl.style.setProperty("--endRot", `${endRot.toFixed(2)}deg`);
      wordStageEl.style.setProperty("--driftX", `${driftX.toFixed(1)}px`);
      wordFallingEl.classList.add("anim-wrong-drift");
    }

    // （不正解）落下中のリズム音を鈍く
    // ※ズレ/歪み演出は別で強制されるので、ここは気持ち悪さの質感に寄せる
    scheduleFallingRhythm(serial, fallDuration, false);

    // 入力単語の崩壊（分解して消える）
    const breakAt = Math.round(fallDuration * 0.64);
    setTimeout(() => {
      if (serial !== animSerial) return;
      if (!wordBreakLayerEl) return;
      createBreakdown(userDisplay || "", matchRate);
      wordBreakLayerEl.classList.remove("play");
      void wordBreakLayerEl.offsetWidth;
      wordBreakLayerEl.classList.add("play");
      playJudgeSound("wrong");
    }, breakAt);

    wordStageEl.classList.remove("hidden");
    return fallDuration;
  }

  // ====== Global scene FX helpers ======
  let sceneSerial = 0;
  let audioPulseSerial = 0;

  function setComboClass(comboTier) {
    document.body.classList.remove("fx-combo-1", "fx-combo-2");
    if (comboTier >= 2) document.body.classList.add("fx-combo-2");
    else if (comboTier === 1) document.body.classList.add("fx-combo-1");
  }

  function showGlobalFx() {
    if (!globalFxEl) return;
    globalFxEl.classList.remove("hidden");
  }

  function hideGlobalFxLater(serial, ms) {
    if (!globalFxEl) return;
    setTimeout(() => {
      if (serial !== sceneSerial) return;
      globalFxEl.classList.add("hidden");
      const particlesWrap = globalFxEl.querySelector(".fx-particles");
      if (particlesWrap) particlesWrap.innerHTML = "";
    }, ms);
  }

  function triggerAudioPulse() {
    const body = document.body;
    const serial = ++audioPulseSerial;
    body.classList.remove("scene-audio-pulse");
    // 小さな揺れは毎回付け直す
    body.classList.add("scene-audio-pulse");
    setTimeout(() => {
      if (serial !== audioPulseSerial) return;
      body.classList.remove("scene-audio-pulse");
    }, 90);
  }

  function createParticles(comboTier) {
    if (!globalFxEl) return;
    const wrap = globalFxEl.querySelector(".fx-particles");
    if (!wrap) return;
    wrap.innerHTML = "";

    const count = comboTier >= 2 ? 52 : (comboTier === 1 ? 36 : 24);
    const spread = comboTier >= 2 ? 340 : (comboTier === 1 ? 280 : 220);
    const centerX = window.innerWidth * 0.5;
    const centerY = window.innerHeight * 0.42;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "p";

      // start/end: center -> random direction
      const a = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.7) * spread;
      const ex = Math.cos(a) * r;
      const ey = Math.sin(a) * r;

      // ほぼ中心開始
      p.style.left = `${centerX}px`;
      p.style.top = `${centerY}px`;
      p.style.setProperty("--sx", "0px");
      p.style.setProperty("--sy", "0px");
      p.style.setProperty("--ex", `${ex.toFixed(1)}px`);
      p.style.setProperty("--ey", `${ey.toFixed(1)}px`);

      const delay = Math.round(Math.random() * 90);
      const dur = Math.round(650 + Math.random() * 220);
      p.style.setProperty("--ptDelay", `${delay}ms`);
      p.style.setProperty("--ptDur", `${dur}ms`);

      if (comboTier >= 1) {
        // コンボほど色を増やす
        const hue = comboTier >= 2 ? 265 : 206;
        const sat = comboTier >= 2 ? 95 : 85;
        p.style.background = `hsla(${hue}, ${sat}%, 75%, 0.95)`;
        p.style.boxShadow = `0 0 18px hsla(${hue}, ${sat}%, 55%, 0.45)`;
      }

      wrap.appendChild(p);
    }
  }

  function triggerScene(isExact, comboTier) {
    sceneSerial++;
    const serial = sceneSerial;

    document.body.classList.remove(
      "scene-correct",
      "scene-incorrect",
      "scene-hold",
      "scene-audio-pulse",
      "fx-combo-1",
      "fx-combo-2"
    );

    document.body.classList.add(isExact ? "scene-correct" : "scene-incorrect");
    setComboClass(comboTier);

    if (globalFxEl) {
      showGlobalFx();
      if (isExact) {
        createParticles(comboTier);
      }
    }

    // 不正解の場合はユーザーが「次へ」を押すまで待つので、ぼかし等が残り続けないように一定時間で解除
    const cleanupMs = isExact ? 1100 : 720;
    setTimeout(() => {
      if (serial !== sceneSerial) return;
      document.body.classList.remove(
        "scene-correct",
        "scene-incorrect",
        "scene-hold",
        "scene-audio-pulse",
        "fx-combo-1",
        "fx-combo-2"
      );
    }, cleanupMs);

    // 余韻で隠す
    hideGlobalFxLater(serial, isExact ? 1200 : 800);
  }

  function showComboText(consecutiveCount, comboTier) {
    if (!comboDisplayEl) return;

    if (comboTier < 1 || consecutiveCount < 3) {
      comboDisplayEl.classList.add("hidden");
      comboDisplayEl.classList.remove("tier-1", "tier-2", "play");
      return;
    }

    comboDisplayEl.textContent = `COMBO x${consecutiveCount}`;
    comboDisplayEl.classList.remove("hidden", "tier-1", "tier-2", "play");
    comboDisplayEl.classList.add(`tier-${comboTier}`);

    // アニメ再生を確実にする
    void comboDisplayEl.offsetWidth;
    comboDisplayEl.classList.add("play");
  }

  const ATTEMPT_STATS_KEY = "attemptStats_v1";
  const WEAK_MIN_ATTEMPTS = 2;

  function getEntryId(entry) {
    return `${entry.wordNo ?? 0}|${entry.sentence}|${quizDirection}`;
  }

  function loadAttemptStats() {
    try {
      const raw = localStorage.getItem(ATTEMPT_STATS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveAttemptStats(stats) {
    localStorage.setItem(ATTEMPT_STATS_KEY, JSON.stringify(stats));
  }

  function recordAttempt(entry, isExact) {
    const id = getEntryId(entry);
    const stats = loadAttemptStats();
    const current = stats[id] || {
      attemptCount: 0,
      wrongCount: 0,
      correctCount: 0,
      lastAt: 0
    };

    current.attemptCount += 1;
    if (isExact) current.correctCount += 1;
    else current.wrongCount += 1;
    current.lastAt = Date.now();
    stats[id] = current;
    saveAttemptStats(stats);
  }

  function getWeaknessScore(stat) {
    if (!stat || stat.attemptCount < WEAK_MIN_ATTEMPTS || stat.wrongCount < 1) return -1;
    return stat.wrongCount / stat.attemptCount;
  }

  function rankWordsByWeakness(words, limit) {
    const stats = loadAttemptStats();
    return words
      .map(entry => {
        const stat = stats[getEntryId(entry)];
        return {
          entry,
          score: getWeaknessScore(stat),
          wrongCount: stat?.wrongCount ?? 0
        };
      })
      .filter(item => item.score >= 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.wrongCount - a.wrongCount;
      })
      .slice(0, limit)
      .map(item => item.entry);
  }

  function getWordsInRange(allWords, start, end) {
    return allWords.filter(entry => entry.number >= start && entry.number <= end);
  }

  // ====== 判定 ======
  function judge() {
    if (input.disabled) return;
  
    // ユーザー操作（判定ボタン/Enter）直後にSE用AudioContextを起こす
    primeAudio();

    const q = currentUnit[currentIndex];
    const userDisplay = input.value.trim();
    const correctDisplay = getCorrectAnswer(q);
    const userNorm = normalizeAnswer(userDisplay);
    const correctNorm = normalizeAnswer(correctDisplay);
    const isExact = userNorm === correctNorm;
    const matchRate = calcMatchRate(userDisplay, correctDisplay);
    const nextComboCount = isExact ? consecutiveCorrect + 1 : 0;
    const comboTier = getComboTier(nextComboCount);
    const elapsedMs = inputStartTime ? (performance.now() - inputStartTime) : 0;
  
    input.disabled = true;
    judgeBtn.disabled = true;
  
    // 意味表示
    meaningEl.textContent = `意味：${q.meaning}`;
    meaningEl.classList.remove("hidden");
  
    matchRateEl && (matchRateEl.textContent = `${matchRate}% match`);
    matchRateEl?.classList.remove("hidden");

    // アニメ中は誤操作防止
    speakBtn.disabled = true;
    nextBtn.disabled = true;
    speakBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");

    // ====== 全画面シーン演出 ======
    triggerScene(isExact, comboTier);
    if (isExact) {
      if (globalFxEl) {
        globalFxEl.classList.add("scene-hold");
        setTimeout(() => globalFxEl.classList.remove("scene-hold"), 120);
      }
    }

    const fallDuration = runWordAnimation({
      userDisplay,
      userNorm,
      correctDisplay,
      correctNorm,
      isExact,
      matchRate,
      comboTier,
      elapsedMs
    });

    if (isExact) {
      consecutiveCorrect = nextComboCount;
      recordAttempt(q, true);
      resultEl.textContent = "⭕ 正解";
      resultEl.className = "correct";

      // コンボ表示（3連続以上）
      showComboText(nextComboCount, comboTier);

      // 正解音2 → わずかに先行してから読み上げ（同時感を出しつつ先に入る）
      playJudgeSound("correct2");
      setTimeout(() => {
        if (quizDirection === "enToJa") {
          speakWord(sentenceForDisplay(q));
        } else {
          speakWord(q.word);
        }
        speechNextIsWord = false;
      }, 36);

      setTimeout(() => {
        next();
      }, fallDuration + 120);
    } else {
      consecutiveCorrect = 0;
      if (comboDisplayEl) {
        comboDisplayEl.classList.add("hidden");
        comboDisplayEl.classList.remove("play");
      }
      resultEl.textContent = `❌ 不正解：${correctDisplay}`;
      resultEl.className = "wrong";
      wrongWords.push(q);
      recordAttempt(q, false);

      if (quizDirection === "enToJa") {
        speakJapanese(q.jp);
      } else {
        speakWord(q.word);
      }
      speechNextIsWord = false;

      setTimeout(() => {
        if (input.disabled === false) return;
        speakBtn.disabled = false;
        nextBtn.disabled = false;
        speakBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
      }, fallDuration + 40);
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
    consecutiveCorrect = 0;
    inputStartTime = null;
    quizMode = "sessionReview";
  
    resultScreen.classList.add("hidden");
    quiz.classList.remove("hidden");

    homeBtn.style.display = "block";

    showCard();
  };
  
  // ====== ホーム ======
  backHomeBtn.onclick = () => {
    resultScreen.classList.add("hidden");
    home.classList.remove("hidden");
    quizMode = "normal";
  };
  
// ====== 発音（スマホ対応 改良版） ======
function isLikelyFemaleVoiceName(name) {
  if (!name) return false;
  const n = name.toLowerCase();
  if (n.includes("female")) return true;
  const hints = [
    "zira",
    "jenny",
    "aria",
    "samantha",
    "victoria",
    "karen",
    "tessa",
    "moira",
    "fiona",
    "serena",
    "veena",
    "emma",
    "amy",
    "olivia",
    "sarah",
    "hazel",
    "martha",
    "catherine",
    "google us english female",
    "google uk english female"
  ];
  return hints.some(h => n.includes(h));
}

function resolveEnglishVoice() {
  const voices = window.speechSynthesis.getVoices();
  if (!voices?.length) return null;

  const langNorm = s => (s || "").toLowerCase().replace("_", "-");

  function rankGoogleUsFemale(v) {
    const name = (v.name || "").toLowerCase();
    const lang = langNorm(v.lang);
    if (!name.includes("google")) return -1;
    if (lang !== "en-us" && !lang.startsWith("en-us")) return -1;
    let r = 0;
    if (name.includes("female")) r += 120;
    else if (/wavenet-f|neural2-f|neural-f|[-_]f\b|_f_/i.test(name)) r += 100;
    if (name.includes("journey")) r += 55;
    if (name.includes("generative")) r += 50;
    if (name.includes("premium")) r += 42;
    if (name.includes("neural2")) r += 38;
    if (name.includes("wavenet")) r += 35;
    if (name.includes("neural")) r += 32;
    if (name.includes("studio")) r += 28;
    if (name.includes("polyglot")) r += 22;
    if (name.includes("us english")) r += 18;
    if (name.includes("en-us")) r += 8;
    return r;
  }

  /** 同スコア時は「明るい／高めになりやすい」エンジンを優先 */
  function tieBreakGoogleFemale(a, b) {
    const key = v => {
      const n = (v.name || "").toLowerCase();
      let k = 0;
      if (n.includes("journey")) k += 80;
      if (n.includes("generative")) k += 70;
      if (n.includes("neural2")) k += 60;
      if (n.includes("premium")) k += 50;
      if (n.includes("wavenet")) k += 40;
      if (n.includes("neural")) k += 35;
      if (n.includes("studio")) k += 30;
      if (n.includes("female")) k += 25;
      return k;
    };
    return key(b) - key(a);
  }

  const googleUsFemaleCandidates = voices
    .map(v => ({ v, r: rankGoogleUsFemale(v) }))
    .filter(x => x.r >= 100)
    .sort((a, b) => {
      if (b.r !== a.r) return b.r - a.r;
      return tieBreakGoogleFemale(a.v, b.v);
    });
  if (googleUsFemaleCandidates.length > 0) return googleUsFemaleCandidates[0].v;

  const englishVoices = voices.filter(v => langNorm(v.lang).startsWith("en"));
  if (englishVoices.length === 0) return null;

  const femaleVoices = englishVoices.filter(v => isLikelyFemaleVoiceName(v.name));

  const femalePriority = [
    "Google US English Female",
    "Google UK English Female",
    "Microsoft Jenny",
    "Microsoft Aria",
    "Microsoft Zira",
    "Samantha",
    "Victoria",
    "Karen",
    "Tessa",
    "Moira",
    "Fiona"
  ];
  for (const name of femalePriority) {
    const found = femaleVoices.find(v => v.name.indexOf(name) !== -1);
    if (found) return found;
  }
  if (femaleVoices.length > 0) return femaleVoices[0];

  const softFemaleNames = ["Samantha", "Victoria", "Karen", "Moira", "Tessa", "Fiona", "Serena"];
  for (const name of softFemaleNames) {
    const found = englishVoices.find(v => v.name.indexOf(name) !== -1);
    if (found) return found;
  }

  const googleUs = englishVoices.find(
    v => /google/i.test(v.name) && /us english/i.test(v.name.toLowerCase())
  );
  if (googleUs) return googleUs;

  return englishVoices[0];
}

function speakWord(word) {
  if (!('speechSynthesis' in window)) return;

  const synth = window.speechSynthesis;
  synth.cancel();

  const doSpeak = () => {
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en-US";
    utter.rate = 1.05;
    utter.pitch = 1.26;
    const v = resolveEnglishVoice();
    if (v) utter.voice = v;
    synth.speak(utter);
  };

  if (resolveEnglishVoice()) {
    doSpeak();
    return;
  }

  // voiceschanged はブラウザによって複数回飛ぶ。毎回 speak すると二重読み上げになるので1回だけ実行する
  let spoken = false;
  const fireOnce = () => {
    if (spoken) return;
    spoken = true;
    synth.removeEventListener("voiceschanged", onVoicesChanged);
    clearTimeout(fallbackTimer);
    doSpeak();
  };
  const onVoicesChanged = () => fireOnce();
  const fallbackTimer = setTimeout(fireOnce, 800);
  synth.addEventListener("voiceschanged", onVoicesChanged);
  void synth.getVoices();
}

function sentenceForSpeech(q) {
  return sentenceForDisplay(q);
}

function resolveJapaneseVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices?.length) return null;

  const langNorm = s => (s || "").toLowerCase().replace("_", "-");
  const jaVoices = voices.filter(v => {
    const lang = langNorm(v.lang);
    return lang === "ja-jp" || lang.startsWith("ja-") || lang === "ja";
  });
  if (jaVoices.length === 0) return null;

  function rankJapaneseVoice(v) {
    const name = (v.name || "").toLowerCase();
    let score = 0;

    if (name.includes("google")) {
      score += 90;
      if (name.includes("日本語") || name.includes("japanese")) score += 40;
      if (/wavenet|neural2|neural|journey|generative|premium|studio|polyglot/.test(name)) score += 70;
      if (/female|[-_]f\b|_f_|wavenet-f|neural2-f|neural-f/.test(name)) score += 35;
    }

    const namedPriority = [
      ["nanami", 160],
      ["haruka", 150],
      ["ayumi", 120],
      ["kyoko", 130],
      ["sayaka", 100],
      ["google 日本語", 110],
      ["otoya", 70],
      ["takehiro", 65],
      ["keita", 60]
    ];
    for (const [key, pts] of namedPriority) {
      if (name.includes(key)) score += pts;
    }

    if (name.includes("natural")) score += 55;
    if (name.includes("desktop")) score += 15;
    if (v.localService) score += 10;

    if (name.includes("ichiro")) score -= 100;
    if (/compact|legacy|mobile/.test(name)) score -= 40;

    return score;
  }

  const ranked = jaVoices
    .map(v => ({ v, score: rankJapaneseVoice(v) }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const preferLocal = (v) => (v.localService ? 1 : 0);
      return preferLocal(b.v) - preferLocal(a.v);
    });

  return ranked[0]?.v ?? jaVoices[0];
}

function speakJapanese(text) {
  if (!("speechSynthesis" in window)) return;

  const synth = window.speechSynthesis;
  synth.cancel();

  const doSpeak = () => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP";
    utter.rate = 0.96;
    utter.pitch = 1.05;
    const v = resolveJapaneseVoice();
    if (v) utter.voice = v;
    synth.speak(utter);
  };

  if (resolveJapaneseVoice()) {
    doSpeak();
    return;
  }

  let spoken = false;
  const fireOnce = () => {
    if (spoken) return;
    spoken = true;
    synth.removeEventListener("voiceschanged", onVoicesChanged);
    clearTimeout(fallbackTimer);
    doSpeak();
  };
  const onVoicesChanged = () => fireOnce();
  const fallbackTimer = setTimeout(fireOnce, 800);
  synth.addEventListener("voiceschanged", onVoicesChanged);
  void synth.getVoices();
}

function playAlternatingSpeech() {
  if (!("speechSynthesis" in window)) return;
  const q = currentUnit[currentIndex];
  if (!q) return;
  primeAudio();

  if (quizDirection === "enToJa") {
    if (speechNextIsWord) {
      speakWord(sentenceForDisplay(q));
    } else {
      speakJapanese(q.jp);
    }
  } else {
    const text = speechNextIsWord ? q.word : sentenceForSpeech(q);
    speakWord(text);
  }
  speechNextIsWord = !speechNextIsWord;
}

speakBtn.onclick = () => {
  playAlternatingSpeech();
};
  
  // ====== イベント ======
  judgeBtn.onclick = judge;
  nextBtn.onclick = next;
  
  input.addEventListener("focus", () => {
    if (inputStartTime === null) inputStartTime = performance.now();
  });

  input.addEventListener("input", () => {
    if (inputStartTime === null && input.value.trim().length > 0) inputStartTime = performance.now();
  });

  input.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    if (!input.disabled) {
      judge();
      return;
    }

    const canGoNextAfterJudge =
      !nextBtn.disabled && !nextBtn.classList.contains("hidden");
    if (canGoNextAfterJudge) next();
  });

  // inputがdisabled中はinput自身でkeydownを受け取れないため、画面全体でもEnterを監視
  document.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    if (appModal && !appModal.classList.contains("hidden")) return;
    if (quiz.classList.contains("hidden")) return;
    if (!input.disabled) return;

    const canGoNextAfterJudge =
      !nextBtn.disabled && !nextBtn.classList.contains("hidden");
    if (!canGoNextAfterJudge) return;

    e.preventDefault();
    next();
  });

  // V: 判定後のみ。単語と例文を交互に読み上げ（判定前は v を英文に打てるようにする）
  document.addEventListener("keydown", e => {
    if (e.key !== "v" && e.key !== "V") return;
    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
    if (appModal && !appModal.classList.contains("hidden")) return;
    if (quiz.classList.contains("hidden")) return;
    if (!input.disabled) return;

    e.preventDefault();
    playAlternatingSpeech();
  });

  // Unit終了画面: Enter で「間違えた単語を復習」（表示中なら）／なければホームへ
  document.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    if (e.repeat) return;
    if (appModal && !appModal.classList.contains("hidden")) return;
    if (resultScreen.classList.contains("hidden")) return;

    e.preventDefault();
    if (!reviewBtn.classList.contains("hidden")) {
      reviewBtn.click();
    } else {
      backHomeBtn.click();
    }
  });

  // Alt+H: クイズ中はホームボタン（🏠）と同じ／Unit終了画面ならホームへ戻る
  document.addEventListener("keydown", e => {
    if (!e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key !== "h" && e.key !== "H") return;
    if (e.repeat) return;
    if (appModal && !appModal.classList.contains("hidden")) return;

    const appEl = document.getElementById("app");
    if (!appEl || appEl.style.display === "none") return;

    if (!quiz.classList.contains("hidden") && homeBtn.style.display === "block") {
      e.preventDefault();
      homeBtn.click();
      return;
    }
    if (!resultScreen.classList.contains("hidden")) {
      e.preventDefault();
      backHomeBtn?.click();
    }
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
      showAppAlert("パスワードが違います", "入力エラー");
    }
  }
  function getAllWords() {
    let all = [];
    Object.values(units).forEach(arr => {
      arr.forEach(entry => {
        all.push({ ...entry, number: entry.wordNo ?? 0 });
      });
    });
    return all;
  }
  const random10Btn = document.getElementById("random10Btn");

  random10Btn.onclick = () => {
    let allWords = getAllWords();
  
    shuffle(allWords);         // 既存のシャッフル関数使う
    startQuizWithWords(allWords.slice(0, 10)); // 先頭10個だけ取る
  };

  rangeTestBtn?.addEventListener("click", async () => {
    const allWords = getAllWords();
    const maxNumber = allWords.reduce((max, entry) => Math.max(max, entry.number || 0), 0);
    const start = Number.parseInt(rangeStartInput?.value || "", 10);
    const end = Number.parseInt(rangeEndInput?.value || "", 10);

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
      await showAppAlert(`開始番号と終了番号を入力してください（1〜${maxNumber}）。`, "入力エラー");
      return;
    }
    if (start < 1 || end < 1 || start > maxNumber || end > maxNumber) {
      await showAppAlert(`番号は1〜${maxNumber}の範囲で入力してください。`, "入力エラー");
      return;
    }
    if (start > end) {
      await showAppAlert("開始番号は終了番号以下にしてください。", "入力エラー");
      return;
    }

    const selectedWords = getWordsInRange(allWords, start, end);
    if (selectedWords.length === 0) {
      await showAppAlert("指定範囲に単語がありません。", "お知らせ");
      return;
    }

    const rangeMode = getSelectedRangeMode();
    const limitEnabled = !!rangeLimitToggle?.checked;
    const rangeSize = selectedWords.length;

    if (rangeMode === "weak") {
      if (!limitEnabled) {
        await showAppAlert("苦手克服モードでは出題数を指定してください。", "入力エラー");
        return;
      }

      const count = Number.parseInt(rangeCountSelect?.value || "", 10);
      if (!Number.isInteger(count) || count < 1) {
        await showAppAlert("出題数を選択してください。", "入力エラー");
        return;
      }
      if (count >= rangeSize) {
        await showAppAlert(
          `出題数は範囲の単語数より少なくしてください（${rangeSize}問中${count}問）。`,
          "入力エラー"
        );
        return;
      }

      const quizWords = rankWordsByWeakness(selectedWords, count);
      if (quizWords.length === 0) {
        await showAppAlert(
          "この範囲に苦手データがありません。通常モードで先に解いてください。",
          "お知らせ"
        );
        return;
      }

      shuffle(quizWords);
      startQuizWithWords(quizWords, "normal", { skipShuffle: true });
      return;
    }

    let quizWords = selectedWords;
    if (limitEnabled) {
      const count = Number.parseInt(rangeCountSelect?.value || "", 10);
      if (!Number.isInteger(count) || count < 1) {
        await showAppAlert("出題数を選択してください。", "入力エラー");
        return;
      }
      if (count > rangeSize) {
        await showAppAlert(`出題数は指定範囲の単語数（${rangeSize}語）以下にしてください。`, "入力エラー");
        return;
      }
      if (count < rangeSize) {
        quizWords = [...selectedWords];
        if (isRandom) shuffle(quizWords);
        quizWords = quizWords.slice(0, count);
      }
    }

    startQuizWithWords(quizWords, "normal");
  });
    
  