// data.js

const shopsData = [
    // 須坂エリア
    {
        name: "おやつと喫茶のお店 菓秀/喫茶ハル",
        area: "須坂",
        hours: "9:00-15:00",
        holiday: "月・火曜",
        phone: "026-400-1800",
        address: "須坂市須坂136",
        comment: "長野県産小麦を使用し、スパイスやハーブなどを使用したおやつ作りをしています。小さなお喫茶店もやっています。",
        isRewardSpot: false,
        image: "oyatsu-to-kissa-no-omise-kashu-kissa-haru.png",
        menus: [
            {
                menuName: "スパイスキッシュ",
                price: "¥800",
                details: null,
                comment: null
            },
            {
                menuName: "スパイスクッキー",
                price: "¥400",
                details: null,
                comment: null
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※カレー商品を合計500円以上のお買い上げでスタンプ＆缶バッチGET!"
    },
    {
        name: "おやつとごはんの店 ai",
        area: "須坂",
        hours: "11:00-17:00",
        holiday: "月・火・水曜 (不定休あり)",
        phone: "026-274-5908",
        address: "須坂市立町1402-8",
        comment: "弁当・惣菜テイクアウト専門店。食材や調味料は出来るだけオーガニック、国産、無添加のものを使用し、心と体にちょこっと優しいごはん作りを心がけております。",
        isRewardSpot: false,
        image: "oyatsu-to-gohan-no-mise-ai.png",
        menus: [
            {
                menuName: "気まぐれスパイスカレー",
                price: "¥1,300",
                details: null,
                comment: "素材の味を生かしたスパイスカレー。カレーは随時変わりますのでSNSをチェックして下さい。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※当日のご注文は9:00~13:00の間に電話にて受付。お引き渡しは11:30-17:00まで。"
    },
    {
        name: "カフェル・パニエ",
        area: "須坂",
        hours: "10:00-15:00",
        holiday: "月・火曜",
        phone: "026-214-3837",
        address: "須坂市野辺581-1 ガーデンソイル内",
        comment: "ガーデンソイル内に併設する小さな英国風の小さなカフェ。自然溢れる空間でゆったりとした時間を。",
        isRewardSpot: false,
        image: "cafe-le-panier.png",
        menus: [
            {
                menuName: "スパイスハーブと実香るカレーホットドッグ",
                price: "¥1,500 (+¥600でハーブサラダ＆とろとろ卵が付けられます)",
                details: null,
                comment: "スパイスハーブ香るカレーソースに、果樹園の果実の旨味とコクを楽しめるホットドッグを季節替わりでお届けします！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "kitchen & cafe ツユハル",
        area: "須坂",
        hours: "8:30-20:00 (L.O19:00)",
        holiday: "月火曜",
        phone: "070-8989-7823",
        address: "須坂市福島33-2",
        comment: "洋食cafeと雑貨となにがしらと...",
        isRewardSpot: false,
        image: "kitchen-cafe-tsuyuharu.png",
        menus: [
            {
                menuName: "チキンが詰まったグリーンカレーパイ",
                price: "¥1,250",
                details: "ほろほろチキンとグリーンカレーがパイに包まれたそう。",
                comment: "ほろほろチキンとグリーンカレーがパイに包まれたそう。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※テイクアウトは事前にご連絡ください。(容器代+¥30)"
    },
    {
        name: "kitchen FUTARIYA",
        area: "須坂",
        hours: "ランチ 11:30-13:30 (LO) / ディナー 18:00-21:00 (L.O)最終入店20:00",
        holiday: "月火曜、ディナー、日曜 (不定休あり)",
        phone: "026-214-1156",
        address: "須坂市東横町313",
        comment: "須坂の小さなイタリアンのお店です。高山村の鹿肉のローストやパスタ、お肉料理がオススメです。",
        isRewardSpot: false,
        image: "kitchen-futariya.png",
        menus: [
            {
                menuName: "夏野菜と自家製サルシッチャのカレーラザニア",
                price: "¥1,000",
                details: null,
                comment: "自家製サルシッチャカレーと夏野菜のトマト煮込み、クリーミーなホワイトソースのラザニアです。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※店内飲食はディナーのみ。テイクアウトはディナー以外も可、要予約、当日対応可。"
    },
    {
        name: "喫茶アウヱル橙",
        area: "須坂",
        hours: "11:00-19:00",
        holiday: "Instagramの営業カレンダー参照",
        phone: "電話なし",
        address: "須坂市上中町186-1",
        comment: "教部邸小路に佇む喫茶店です。スープとほんのり甘いお菓子で穏やかなひとときを。",
        isRewardSpot: false,
        image: "kissa-aueru-daidai.png",
        menus: [
            {
                menuName: "ココナッツチキンカレーのスープ",
                price: "¥1,450",
                details: "パン付",
                comment: "まろやかココナッツに、鶏もも肉の旨みが溶け込んだスパイス香るカレースープです。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "蔵のまち観光交流センターくらっと",
        area: "須坂",
        hours: "9:00-17:00",
        holiday: "火曜",
        phone: "026-246-6867",
        address: "須坂市大字須坂352-2",
        comment: "くらっとでは須坂の特産品を取り扱っております。また今度は流観光の情報やゆったりとした空間、歴史観光の入場、体験が提供しております。是非お立ち寄りください。",
        isRewardSpot: true,
        image: "kura-no-machi-kanko-koryu-center-kuratto.png",
        menus: [
            {
                menuName: "スパイスイダーらあずげ",
                price: "¥500",
                details: null,
                comment: "山下薬局さん配合の特製スパイスとらあずげげのコラボ。夏にぴったりの爽やかなお菓子です。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "クルア アリヤ",
        area: "須坂",
        hours: "11:00-22:00 (L.O.21:30)",
        holiday: "水曜",
        phone: "090-5529-8782",
        address: "須坂市ハイランド町 BF001-5",
        comment: "須坂ハイランドにてタイ料理レストランを営んでおります。「タイ料理を食べることに興味をもった皆様を笑顔にしたい。」ぜひお越しください。",
        isRewardSpot: false,
        image: "krua-ariya.png",
        menus: [
            {
                menuName: "グリーンカレー",
                price: "¥880",
                details: null,
                comment: "ココナッツミルクの甘さが辛さと調和し、まろやかな味わいが病に。ハーブの香りが食欲を刺激する一品。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "五蘊",
        area: "須坂",
        hours: "11:30-20:00 (日曜のみ19:00閉店)",
        holiday: "月曜、7/19、貸切宴会予約が入った場合",
        phone: "050-8481-4896",
        address: "須坂市臥竜2-5",
        comment: "「麺」を味を主として、日々のくらしを「麺」とした空間やコミュニティ、ボリュームたっぷりの食事をご提供。カフェ感覚で利用もできます。",
        isRewardSpot: false,
        image: "go-un.png",
        menus: [
            {
                menuName: "カツカレー",
                price: "¥1,200",
                details: null,
                comment: "大判のトンカツに、野菜の溶け込んだカレーをかけたシンプルかつ王道のカツカレー。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "ざかすラーメン",
        area: "須坂",
        hours: "11:00-14:10(L.O.) / 17:30-20:30(L.O)",
        holiday: "月曜 (月曜が祝日時は営業、火曜振替休)",
        phone: "026-248-9595",
        address: "須坂市南立町1445-1",
        comment: "豚骨ラーメンや鶏パイタン、辛味噌ラーメンや中華そばなど豊富なメニューラインナップ。自家製の餃子も大人気！",
        isRewardSpot: false,
        image: "zakasu-ramen.png",
        menus: [
            {
                menuName: "スリランカカレー",
                price: "¥979",
                details: "豚肉カレー（辛口）・ダル豆カレー（まろやか）あいがけ",
                comment: "信州味来豚の辛口ソースとダル豆のまろやかソースのふたつを味わえる一皿。数量限定"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "酒食処 縁-えにし-",
        area: "須坂",
        hours: "16:00- (カレーは17時から提供)",
        holiday: "火曜",
        phone: "090-1433-4548",
        address: "須坂市旭ヶ丘2.128",
        comment: "国道沿いの鯉料理や酒の肴もおすすめです。名古屋出身の大将こだわりの味噌おでんや、旬の食材を使った一品料理で居心地の良い空間を提供しております。",
        isRewardSpot: false,
        image: "shushokudokoro-enishi.png",
        menus: [
            {
                menuName: "カレーエビフライ巻きと手羽先カレー包み",
                price: "¥1,500",
                details: null,
                comment: "1日20食限定！カレーを包んだ変わり種手羽先とカレークシミリでエビフライを巻いた寿司のセット。山下薬局さんのカレースパイス使用（甘口寄り）。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※カレーメニューは17時からの提供"
    },
    {
        name: "Sweets market cafe",
        area: "須坂",
        hours: "10:30-18:30",
        holiday: "月火・第1水曜",
        phone: "026-214-0800",
        address: "須坂市塩川町1555 n-style内",
        comment: "マフィンやシフォンケーキなどの甘いお菓子が人気です。イートインスペースもあり、季節ごとの味も楽しめます。",
        isRewardSpot: true,
        image: "sweets-market-cafe.png",
        menus: [
            {
                menuName: "お豆のカレーパスタ",
                price: "¥980",
                details: null,
                comment: "カレーとパスタは意外でしょ！ちょい太めのリングイネに、大豆のキーマカレーが絡み美味いよ。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "須坂温泉 古城荘",
        area: "須坂",
        hours: "11:00-14:00 (L.O) / 17:00-22:00",
        holiday: "毎月第1土曜日 (不定休あり)",
        phone: "026-245-0040",
        address: "須坂市大学日滝5414",
        comment: "温泉、食事、休憩、マッサージなど、様々な施設が揃っています。ぜひご利用ください。",
        isRewardSpot: false,
        image: "suzaka-onsen-kojoso.png",
        menus: [
            {
                menuName: "ジャーマンポテト、赤え、いろいろ野菜のレッドカレー",
                price: "¥1,200",
                details: null,
                comment: "季節の野菜にポテト、ベーコン、海老にハーブを加えグリル。スパイシーなレッドカレーと共にお楽しみください。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "たけちゃん食品 (須坂市役所地下食堂)",
        area: "須坂",
        hours: "11:30-14:00(L.O.)",
        holiday: "土・日・祝日",
        phone: "090-7217-1981",
        address: "須坂市須坂1528-1",
        comment: "地元の食材や調味料を使った地域料理メニューなど、旬の味をお楽しみいただけます。ぜひご利用ください。",
        isRewardSpot: false,
        image: "takechan-shokuhin-suzaka-shiyakusho-chika-shokudo.png",
        menus: [
            {
                menuName: "牛タンカレー",
                price: "¥600",
                details: null,
                comment: "牛タンをたっぷり使ったこだわりのカレー。一口食べればわかる牛タンの味を堪能してください。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "田中本家博物館 喫茶「龍潜」",
        area: "須坂",
        hours: "11:00-15:30 (L.O)",
        holiday: "火・金曜 (祝日は営業)",
        phone: "026-248-8008",
        address: "須坂市穀町476 田中本家博物館内",
        comment: "田中本家博物館内にある喫茶「龍潜」は、日本庭園を眺めながら喫茶できます。博物館の展示は、博物館の入場料はかかりません。喫茶のみの利用もできます。",
        isRewardSpot: false,
        image: "tanaka-honke-hakubutsukan-kissa-ryusen.png",
        menus: [
            {
                menuName: "たっぷり野菜のカレースープ&パン",
                price: "¥700",
                details: "デザート付",
                comment: "野菜の甘さをいかした優しいカレースープに2種類のパンをつけました。カレー巡りの箸休めにどうぞ。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "玉林餅菓子店",
        area: "須坂",
        hours: "8:00~売り切れ次第閉店",
        holiday: "木曜",
        phone: "026-245-1149",
        address: "〒382-0911 長野県須坂市上中町184",
        comment: "やわらかくて香り高い銘菓を、お客様の優しい笑顔をつくるお手伝いをいたします。毎日つきたての餅粉を使用したお餅を販売しております。ぜひお立ち寄りください。",
        isRewardSpot: false,
        image: "gyokurin-mochigashiten.png",
        menus: [
            {
                menuName: "カレーおかき (辛口)",
                price: "¥350",
                details: null,
                comment: null
            },
            {
                menuName: "カレーおかき (甘口)",
                price: "¥350",
                details: null,
                comment: "やっぱりカレーだねフェス限定のカレーおかき（甘口・辛口）をぜひお楽しみください。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※カレーおかきを含む500円以上のお買い上げでスタンプ&缶バッチGET！"
    },
    {
        name: "ねぎ福",
        area: "須坂",
        hours: "11:30-13:30 / 17:30-22:30",
        holiday: "月曜、木曜、第2・4日曜 不定休あり",
        phone: "090-1126-1473",
        address: "須坂市大字須坂1326-5 ABSビル1階A号室",
        comment: "須坂市役所近くの定食屋さんです。好きな方が好きな味を、あんまり得意ではない方も、ぜひ一度ご来店ください！",
        isRewardSpot: false,
        image: "negifuku.png",
        menus: [
            {
                menuName: "チーズ揚げカレーねぎおかかのせ",
                price: "¥1,000",
                details: "夜はお通し代別途",
                comment: "ディナーメニューで大人気の「尾根揚げねぎおかのせ」をカレーフェス用にアレンジしました！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "焼肉居酒屋みのり",
        area: "須坂",
        hours: "17:00-24:00",
        holiday: "日曜",
        phone: "026-245-7467",
        address: "須坂市南山町252-4",
        comment: "創業50年の焼肉居酒屋。当店オリジナルの味付け豚ホルモン焼き、牛の串焼き、その他にも各種焼肉や季節の味覚をご提供。全てのお食事までご用意しております。",
        isRewardSpot: false,
        image: "yakiniku-izakaya-minori.png",
        menus: [
            {
                menuName: "みのりカレー焼き",
                price: "¥550",
                details: null,
                comment: "やっぱりカレーだねフェス限定のみのりカレー焼き。カレーテイストのみのり焼きをお楽しみください！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※テイクアウトは事前にご連絡ください。(必須)"
    },
    {
        name: "山下薬局",
        area: "須坂",
        hours: "8:30-19:00 (土曜〜18:00)",
        holiday: "日曜、祝日",
        phone: "026-243-0032",
        address: "須坂市中町208",
        comment: "カレー味の薬膳茶、ごぼう茶など、各種健康茶とオリジナル商品も多数！処方箋調剤や漢方薬もOKです。人見知りな店主ですが、イジってもらうと喜びます。",
        isRewardSpot: true,
        image: "yamashita-yakkyoku.png",
        menus: [
            {
                menuName: "山崎味噌香辛料",
                price: "¥700 (6人前) / ¥1,300 (12人前)",
                details: null,
                comment: null
            },
            {
                menuName: "薬膳タンドリーチキン",
                price: "¥918",
                details: null,
                comment: "薬剤師が考案したカレースパイスの山崎味噌香料。山崎味噌香辛料を使った「たけちゃん食品」の薬膳タンドリーチキンです！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "ラノッキオ",
        area: "須坂",
        hours: "11:30-14:30L.O./17:30-20:30L.O",
        holiday: "木曜、不定休",
        phone: "026-977-2203",
        address: "須坂市中町209-2",
        comment: "江戸時代からある市民家をイタリアンレストランです。建物の雰囲気とともにお料理も楽しみください。2階ではうつわ屋さんをやっています。",
        isRewardSpot: false,
        image: "ranokkio.png",
        menus: [
            {
                menuName: "カレーのピッツァ",
                price: "ランチ ¥1,490 (サラダ付) / ディナー ¥1,700",
                details: null,
                comment: "ふだんのメニューにないピッツァです。お子様でも召し上がれます。数量限定。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },

    // 小布施エリア
    {
        name: "ICHI cafe",
        area: "小布施",
        hours: "10:30-16:00",
        holiday: "火・水曜",
        phone: "070-2679-6618",
        address: "小布施町大島609-2",
        comment: "小布施ハイウェイオアシス内にICHI cafeはあります。サンドイッチとコーヒーの他、人気のアイスや軽食、雑貨、本の販売も併設しています。",
        isRewardSpot: false,
        image: "ichi-cafe.png",
        menus: [
            {
                menuName: "ポテトマサラのバタッツォサンド",
                price: "¥640",
                details: null,
                comment: "香辛料の効いたマッシュポテトサラダを、こんがり焼いたバタッツォに挟んでいます。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "桂亭",
        area: "小布施",
        hours: "11:30-14:30 / 17:30-21:00",
        holiday: "月・火曜、日曜 (昼のみ営業)、不定休あり",
        phone: "026-247-4541",
        address: "小布施町小布施1099",
        comment: "和食と串カツのお店です。アスパラは小布施産。秋は地物の栗ごはんとなどやっています。カレー好きの方にはカレー串と串カツのセットもおすすめです。",
        isRewardSpot: false,
        image: "katsuratei.png",
        menus: [
            {
                menuName: "丸なすとトマトのカレー",
                price: "¥980",
                details: null,
                comment: "丸ナスを利用したチーズ風味のカレーと好評の辛口タイカレーを作りました。自家製ラッキョを添えて。"
            },
            {
                menuName: "辛口タイカレー",
                price: "¥980",
                details: null,
                comment: "丸ナスを利用したチーズ風味のカレーと好評の辛口タイカレーを作りました。自家製ラッキョを添えて。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "Café＋Delight",
        area: "小布施",
        hours: "11:30-14:30 (LO14:00) / 18:00-22:00 (L.O20:30)",
        holiday: "木曜",
        phone: "026-274-5369",
        address: "小布施町小布施879-5",
        comment: "夜はスイーツ産クレットチーズをメインとしたバル。アルコールは和洋豊富に取り揃えています。JAZZが流れる落ち着いた雰囲気で楽しんでくださいませ。",
        isRewardSpot: false,
        image: "cafe-delight.png",
        menus: [
            {
                menuName: "ラクレットチーズのせ挽肉カレー",
                price: "¥1,380~",
                details: "ランチはミニサラダ、ラッシー付",
                comment: "スイス産のラクレットチーズをのせた「焼きカレー」が看板メニューのお店です。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "かんてんぱぱショップ小布施店",
        area: "小布施",
        hours: "9:00-18:00 (カフェ10:00-16:00L.O)",
        holiday: "無休",
        phone: "026-242-6280",
        address: "小布施町中町1117",
        comment: "約200種類の寒天製品を販売する、寒天の専門店です。寒天を使ったこだわりデザートも提供するテイクアウトコーナーも併設しております。",
        isRewardSpot: false,
        image: "kantenpapa-shop-obuse-ten.png",
        menus: [
            {
                menuName: "レモンベジタブルカレー",
                price: "¥1,200",
                details: "ミニデザート付き",
                comment: "たっぷりの野菜とレモンで作ったベジタブルカレー。ご飯には、寒天入りの雑穀米を使用しています。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "長野土鍋ラーメンたけさん小布施店",
        area: "小布施",
        hours: "11:00-14:30 (14:15L.O) / 17:00-21:00 (20:45L.O)",
        holiday: "木曜",
        phone: "026-214-6434",
        address: "小布施740-1",
        comment: "土鍋ラーメンのお店です。残ったスープでの雑炊も人気。暑い夏にも熱々のラーメンをどうぞ！",
        isRewardSpot: false,
        image: "nagano-donabe-ramen-takesan-obuse-ten.png",
        menus: [
            {
                menuName: "土鍋黒カレー麺",
                price: "¥1,250",
                details: null,
                comment: "今年のカレー麺は濃厚だけど清涼感のある香りがコンセプト！〆の難易度もオススメ！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "パンと焼菓子 ohana",
        area: "小布施",
        hours: "10:00-17:00",
        holiday: "水・木曜",
        phone: "026-214-0678",
        address: "小布施町小布施777-3",
        comment: "パンはすべて長野県産小麦100％。人気商品は山食パン、コッペパンシリーズなど。簡易的ですが、イートインスペースもあります。",
        isRewardSpot: false,
        image: "pan-to-yakigashi-ohana.png",
        menus: [
            {
                menuName: "ソーセージカレーパン",
                price: "¥350",
                details: null,
                comment: "数種類の香辛料をブレンドしたビーフカレーに、ソーセージをトッピングした焼きカレーパン。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※カレー商品を含む1,000円以上のお買い上げでスタンプ&缶バッチGET！"
    },
    {
        name: "響 YURA",
        area: "小布施",
        hours: "11:30-14:30(L.O.) / 17:30-21:00(L.O)",
        holiday: "日曜夜、月曜",
        phone: "026-247-6911",
        address: "小布施町小布施89-3",
        comment: "小布施町の隠れ家レストラン。昼はゆったりとランチをお楽しみいただけます。夜は長野県産クラフトビール、日本酒、ワインで一品料理をご堪能ください。",
        isRewardSpot: true,
        image: "hibiki-yura.png",
        menus: [
            {
                menuName: "小布施蔵カレー(中辛)",
                price: "ランチセット (サラダ・ドリンク付) ¥1,540 / 夜単品 ¥1,100",
                details: null,
                comment: "野菜をふんだんに使用した「小布施蔵カレー」、とスパイスとチーズの相性抜群の「焼カレー」、土日限定メニューをご用意。"
            },
            {
                menuName: "ドリア風焼カレー(辛口)",
                price: "ランチセット (サラダ・ドリンク付) ¥1,540 / 夜単品 ¥1,100",
                details: null,
                comment: "野菜をふんだんに使用した「小布施蔵カレー」、とスパイスとチーズの相性抜群の「焼カレー」、土日限定メニューをご用意。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※テイクアウトは要予約"
    },

    // 中野エリア
    {
        name: "多国籍ber 今どきの笹",
        area: "中野",
        hours: "11:00-14:30 (14:00LO) / 17:30-22:00",
        holiday: "水曜、土・日曜ランチ",
        phone: "0269-22-6944",
        address: "中野市吉田1105",
        comment: "ランチタイムはピッツァ食べ放題有り。ナイトタイムは多国籍フードと美味しいお酒、ノンアルコールも種類豊富に取り揃えております。",
        isRewardSpot: false,
        image: "takokuseki-ber-imadoki-no-sasa.png",
        menus: [
            {
                menuName: "和牛のインディアンパスタ",
                price: "¥1,100",
                details: null,
                comment: "当店自慢のトマトソースパスタに柔らかく煮込んだ和牛のすね肉カレーをかけちゃいました。トマトとカレーのハーモニーをお楽しみください。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "川合精肉店",
        area: "中野",
        hours: "9:30-18:00",
        holiday: "月曜・不定休あり",
        phone: "0269-22-3238",
        address: "中野市大字中野1632-ハ",
        comment: "コロッケ、トンカツ、メンチカツつくって70年以上になります。黒あわびを頭を使った「くろひメンチ」も大好評です。",
        isRewardSpot: false,
        image: "kawai-seinikuten.png",
        menus: [
            {
                menuName: "チーズハンバーグカレー",
                price: "¥950",
                details: null,
                comment: "ジューシーなハンバーグと濃厚なカレー、そしてとろけるチーズの絶妙なハーモニーが楽しめます。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※テイクアウトは11:00-18:00"
    },
    {
        name: "kitchen vicky",
        area: "中野",
        hours: "12:00-16:00",
        holiday: "月・日・火・水曜不定休あり",
        phone: "080-1203-6906",
        address: "中野市中野1785-1",
        comment: "お弁当を中心に、野菜たっぷり使用したランチ、デザートをご用意しています。おひとり様でもくつろげる空間で、ゆったりとした気持ちでお越しくださいね。",
        isRewardSpot: false,
        image: "kitchen-vicky.png",
        menus: [
            {
                menuName: "マッサンカレー",
                price: "¥1,300",
                details: null,
                comment: null
            },
            {
                menuName: "グリーンカレー",
                price: "¥1,300",
                details: null,
                comment: "中野市の伝統野菜「ぽんたじょう」を使った2種のタイカレー（酒搾り）"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "こどもとときどきハープカフェ nana-mar",
        area: "中野",
        hours: "11:00-15:00 (金・土曜夜予約 17:30-21:00)",
        holiday: "水・木曜",
        phone: "070-8510-3977",
        address: "中野市議場町2-21",
        comment: "中野市の料理のおいしいキッズカフェです。赤ちゃんOKな広い小上がり席の他、テーブル席、カウンター席ありで大人だけでもOK。お食い初めにもおすすめ。",
        isRewardSpot: false,
        image: "kodomo-to-tokidoki-harp-cafe-nana-mar.png",
        menus: [
            {
                menuName: "志賀高原牧場ミルク スパイスチキンカレー",
                price: "¥1,200",
                details: null,
                comment: "自家製スパイスとミルクをベースにした、オリジナルスパイスカレーです。気まぐれでスパイスパイプも！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※テイクアウトは16:00までOK (要予約)"
    },
    {
        name: "3RD CAFF & MORE",
        area: "中野",
        hours: "11:00-20:00 (日曜のみ8:00-18:00)",
        holiday: "月曜",
        phone: "0269-27-4138",
        address: "中野市三好町2-4-28",
        comment: "家が1stプレイス、学校や会社が2ndプレイス、自分だけの特別な場所が3rdプレイス。このコンセプトを元に居心地の良い空間とドリンク、フードをご提供。",
        isRewardSpot: true,
        image: "3rd-caff-and-more.png",
        menus: [
            {
                menuName: "焼きチーズカレーのバゲットサンド",
                price: "Mサイズ ¥600 / Lサイズ ¥850",
                details: null,
                comment: "お子様でも楽しめるよう辛さを抑えたキーマカレーと熱々チーズをサンドしたボリュームサンド。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "信州中野観光センター",
        area: "中野",
        hours: "9:00-18:00",
        holiday: "なし",
        phone: "0269-23-5581",
        address: "中野市草間1539-1",
        comment: "中野市周辺は国内でも有数のリゾートエリアとなっているため、近隣地域のための広報支援の場にもなれるよう有益な情報を提供しています。",
        isRewardSpot: false,
        image: "shinshu-nakano-kanko-center.png",
        menus: [
            {
                menuName: "華麗 (カレー)な愛すサンド",
                price: "¥600",
                details: null,
                comment: "カリースパイス山路 (飯山市)とまるにつた (小布施町)の夢のコラボクッキーアイスです。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "新鮮屋オタギリ",
        area: "中野",
        hours: "9:30-19:30",
        holiday: "不定休",
        phone: "0269-22-4075",
        address: "中野市一本木375",
        comment: "自社牧場直送の牛肉の販売を中心に約50年に渡り中野市で営業をしています。こだわり抜いた商品の数々を是非見に来てください。",
        isRewardSpot: false,
        image: "shinsenya-otagiri.png",
        menus: [
            {
                menuName: "牛テールスープ入り焼肉オタギリ特製カレー",
                price: "¥734",
                details: null,
                comment: null
            },
            {
                menuName: "新鮮屋オタギリのおふくろの味カレー",
                price: "¥537",
                details: null,
                comment: "和牛テールのエキスが入ったカレーと昔なつかしのカレーの2種を販売予定。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "中野陣屋・県庁記念館内 カフェ陣屋",
        area: "中野",
        hours: "10:00-14:00 (13:30L.O) / 15:00-17:00 (16:30L.O)",
        holiday: "火曜",
        phone: "0269-23-2718",
        address: "中野市中央2-4-4",
        comment: "中野市が誇る施設です。中野陣屋・県庁記念館には「カフェ陣屋」があります。落ち着いた雰囲気の中でゆっくりお過ごしいただけます。",
        isRewardSpot: false,
        image: "nakano-jinya-kencho-kinenkan-nai-cafe-jinya.png",
        menus: [
            {
                menuName: "カレーオムチーズ",
                price: "¥1500",
                details: "サラダ・ドリンク付",
                comment: "陣屋特製のここカレーに、ふわっとろ〜卵とろけるチーズたっぷり美味しさ間違いなし！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "+M",
        area: "中野",
        hours: "10:00-17:00 (ランチ15:00L.O./カフェ16:00L.O)",
        holiday: "木曜・不定休あり",
        phone: "080-5629-9924",
        address: "中野市江部1148-4",
        comment: "貸しスペース併設のカフェと雑貨のお店「＋M（プラスエム）」カフェでランチやティータイムを過ごした後、雑貨コーナーを楽しむのもおすすめです！",
        isRewardSpot: false,
        image: "plus-m.png",
        menus: [
            {
                menuName: "インドチキンカレー",
                price: "¥1,000",
                details: null,
                comment: "ゴロゴロチキンとスパイシーな辛味が特徴！当店のカレーメニュー人気No.1です！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "Bakery ON!",
        area: "中野",
        hours: "10:00-17:00",
        holiday: "月曜",
        phone: "0269-38-1211",
        address: "中野市岩船424-1",
        comment: "厳選された素材を使い、惣菜パン、菓子パン、ハード系など BakeryON!らしく皆様に愛される親しみやすいパンを楽しく作っています。",
        isRewardSpot: false,
        image: "bakery-on.png",
        menus: [
            {
                menuName: "ON！のとろ～りチーズカレーパン",
                price: "¥280",
                details: null,
                comment: "前回大好評のイベント限定チーズカレーパン！福神漬け、スパイスとろーりチーズがたまらない！"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "ママちきん",
        area: "中野",
        hours: "14:00-17:30",
        holiday: "日曜・祝日不定休あり",
        phone: "080-7299-6240",
        address: "中野市吉田93-2",
        comment: "ママちきんではジューシーなかき揚げと手羽先をテイクアウトで販売しています。おかずやおつまみ、おやつにも♪",
        isRewardSpot: false,
        image: "mama-chicken.png",
        menus: [
            {
                menuName: "ジューシーカレー揚げセット",
                price: "¥1,514 / 1人前 ¥814",
                details: null,
                comment: "カレー味のからあげとハーブを効かせたカレー手羽先揚げのセットです♪"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "ミナサンド",
        area: "中野",
        hours: "11:30-14:00 (13:30L.O) ",
        holiday: "月、水、土、日曜",
        phone: "0269-38-1288",
        address: "中野市中央1-7-8 (Bistro Kuu)",
        comment: "自然豊かな北信州の食材を使い、余計なものは使わない、ヘルシーで美味しい！なのにボリューミーで食べ応えありなサンドイッチを作っています。",
        isRewardSpot: false,
        image: "minasand.png",
        menus: [
            {
                menuName: "キーマカレーのサンドイッチ",
                price: "¥1,450",
                details: "サラダ、ドリンク、ミニケーキ付",
                comment: "粗挽き肉で作った肉の旨みたっぷりキーマカレーのサンドイッチ。テイクアウトは単品になります。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "ラブズピアット",
        area: "中野",
        hours: "17:30-21:30 (L.O)",
        holiday: "火曜",
        phone: "0269-26-3551",
        address: "中野市中央3-1-10",
        comment: "信州中野の食材をたっぷり使ったイタリアンバル★いっぱい飲んで、食べられるちょとお酒落ちな店です！今宵もワインを片手にBuon appetito！",
        isRewardSpot: false,
        image: "loves-piatto.png",
        menus: [
            {
                menuName: "牛タン★カレーコロッケ",
                price: "¥968",
                details: null,
                comment: "柔らか～い牛タンをゴロゴロ入れちゃいました！クミイン香るカレーコロッケです★ビールがススム君(^o^)"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },

    // 高山エリア
    {
        name: "おやき茶屋 たちべり",
        area: "高山",
        hours: "9:30-18:00 (平日) 8:00-18:00 (土・日曜、祝日)",
        holiday: "第2火曜、不定休あり",
        phone: "080-9572-9240",
        address: "上高井郡高山村大字奥山田1323-1",
        comment: "蕨温泉となり「たちより」が3年ぶりに4月末よりオープン！おやきをはじめ、地粉ピザもご提供！具材は無添加！おやきもピザも生地から手作りでやさしい味わいです",
        isRewardSpot: false,
        image: "oyaki-chaya-tachiberi.png",
        menus: [
            {
                menuName: "おからのカレー風味",
                price: "¥140",
                details: null,
                comment: "カレー風味のおからおやき。お子様でも召し上がれる味付けです。昨年「和」でご提供したピザもあり。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※カレー商品を合計500円以上のお買い上げでスタンプ＆缶バッチGET!"
    },
    {
        name: "道のカフェ アンティロープ",
        area: "高山",
        hours: "11:00-16:00 (平日) / 11:00-17:00 (土・日曜、祝日)",
        holiday: "水・木曜不定休あり",
        phone: "026-477-2731",
        address: "山田温泉3629-2",
        comment: "高山村山田温泉の村営駐車場の隣にあるカフェです。高山村産を中心に木材を使用し、そば粉ガレット、ジビエ料理、ドリンク、デザートなどを提供しています。",
        isRewardSpot: false,
        image: "michi-no-cafe-antelope.png",
        menus: [
            {
                menuName: "そば粉ガレット 夏野菜×シーフードカレー",
                price: "¥1,380 / 単品 ¥880",
                details: "サラダ・スープ付",
                comment: "地元産そば粉と夏野菜を使って出来上がる一品です（ライスへの変更可）。わがままキッチンAのカレーパンもあります。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: "※テイクアウトは容器代¥100プラス"
    },
    {
        name: "見晴茶屋",
        area: "高山",
        hours: "10:00-15:00",
        holiday: "不定休",
        phone: "026-242-2804",
        address: "山田牧場3681-130",
        comment: "昭和32年（1957年）山田牧場に畔の茶屋として最初の店を開店しました。平成26年新たにチーズ工房を開設。手づくりにこだわったチーズ製造、販売しております。",
        isRewardSpot: false,
        image: "miharashi-chaya.png",
        menus: [
            {
                menuName: "焼きチーズカレー",
                price: "¥1,100",
                details: null,
                comment: "当店での手づくりチーズの焼きチーズカレーです。モッツアレラとゴーダチーズ使用です。"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    },
    {
        name: "Wine&Café Véraison ヴェレゾン",
        area: "高山",
        hours: "9:00-17:00",
        holiday: "火・水曜",
        phone: "090-5789-2129",
        address: "高山村二ツ石4647",
        comment: "おばあちゃん家の様な古民家カフェ。地元食材を使ったお食事はもちろん、コーヒーだけでもお気軽に。駐車場は店舗向かい側の松本木材駐車場と南側をご利用ください。",
        isRewardSpot: true,
        image: "wine-cafe-veraison.veraison.png",
        menus: [
            {
                menuName: "いかすみライスとほうれん草のグリーンカレー",
                price: "¥1,200",
                details: "スープ、サラダ付",
                comment: "今年はなぜかライスをブラックにしたくなり、いかすみライスに！そして、グリーンカレーがあう♥"
            }
        ],
        eatIn: true,
        takeOut: true,
        chotashi: null
    }
];