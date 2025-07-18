let visitedShops = JSON.parse(localStorage.getItem('visitedShops')) || [];
let recentlyVisitedId = null; // indexからidに変更

// shopsDataとkaregoScheduleを統合した新しいデータ配列
let allShopsData = [];

// 日付を「◯月◯日(◯)」形式にフォーマットするヘルパー関数
function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
    return `${month}月${day}日(${dayOfWeek})`;
}

// 火曜日始まりの週かどうか判定する関数
function isCurryGoThisWeek(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 時刻をリセット

  const targetDate = new Date(dateStr);
  targetDate.setHours(0, 0, 0, 0); // 時刻をリセット

  // 今週の火曜日の0時を取得
  let dayOfWeek = today.getDay(); // 0:日, 1:月, 2:火 ...
  let daysToSubtract = dayOfWeek - 2; // 火曜日 (2) との差
  if (daysToSubtract < 0) {
    daysToSubtract += 7; // 日曜日(0)や月曜日(1)の場合、前の火曜日に戻る
  }

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - daysToSubtract);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6); // 週の終わりは月曜日

  return targetDate >= startDate && targetDate <= endDate;
}


// 全店舗データを初期化する関数
function initializeAllShopsData() {
    // shopsDataにidを追加
    shopsData.forEach((shop, index) => {
        shop.id = `shop_${index}`; // ユニークなIDを付与
        shop.type = 'regular'; // 店舗タイプを追加
        allShopsData.push(shop);
    });

    // karegoScheduleにidとshopsDataに合わせたフィールドを追加
    karegoSchedule.forEach((karegoShop, index) => {
        karegoShop.id = `currygo_${karegoShop.date}_${karegoShop.name.replace(/\s/g, '')}`; // ユニークなIDを付与
        karegoShop.type = 'currygo'; // 店舗タイプを追加
        // shopsDataに合わせたデフォルト値
        karegoShop.hours = karegoShop.hours || "出店時間はお店のInstagramをご確認ください";
        karegoShop.holiday = karegoShop.holiday || "不定休";
        karegoShop.phone = karegoShop.phone || "電話番号はありません";
        karegoShop.address = karegoShop.address || ""; // カレー号は住所がない場合が多い
        karegoShop.comment = ""; // デフォルトコメントを空に
        karegoShop.isRewardSpot = karegoShop.isRewardSpot || false;
        allShopsData.push(karegoShop);
    });
}

function saveVisitedShops() {
    localStorage.setItem('visitedShops', JSON.stringify(visitedShops));
}

function createShopCard(shop) {
  const card = document.createElement("div");
  card.className = "shop-card";
  card.dataset.shopId = shop.id; // ★ IDをデータ属性として設定

  // スタンプ用のコンテナを追加
  const stampContainer = document.createElement("div");
  stampContainer.className = "stamp-container";
  const stampImage = document.createElement("img");
  stampImage.src = "images/done-stamp.png";
  stampImage.alt = "訪問済み";
  stampImage.className = "stamp-image";
  stampContainer.appendChild(stampImage);
  card.appendChild(stampContainer);

  // IDで訪問済みをチェック
  if (visitedShops.includes(shop.id)) {
    card.classList.add("visited");
    // 直前に訪問したカード以外は、最初から表示しておく
    if (shop.id !== recentlyVisitedId) {
      stampImage.classList.add('show');
    }
  }

  // 店舗名
  const nameEl = document.createElement("h3");
  nameEl.textContent = shop.name.replace(" ★", "");
  card.appendChild(nameEl);

  // 営業時間
  const hoursEl = document.createElement("p");
  hoursEl.className = "shop-hours-display";
  hoursEl.textContent = `営業時間: ${shop.hours}`;
  card.appendChild(hoursEl);

  // エリア
  const areaEl = document.createElement("p");
  areaEl.textContent = `エリア: ${shop.area}`;
  card.appendChild(areaEl);

  // カレー号の今週の出店コメント
  if (shop.type === 'currygo' && isCurryGoThisWeek(shop.date)) {
    const currygoComment = document.createElement("p");
    currygoComment.className = "currygo-card-comment";
    currygoComment.textContent = "今週は出店だよ！";
    card.appendChild(currygoComment);
  }

  // 画像を追加
  if (shop.image) {
    const imgEl = document.createElement("img");
    imgEl.src = `images/${shop.image}`;
    imgEl.alt = shop.name;
    imgEl.className = "shop-card-image";
    card.appendChild(imgEl);
  }

  // shop.menus配列をループ
  if (Array.isArray(shop.menus)) {
    shop.menus.forEach(menu => {
      const menuContainer = document.createElement("div");
      menuContainer.className = "menu-item";

      // メニュー名
      const menuName = document.createElement("h4");
      menuName.textContent = `メニュー：${menu.menuName}`;
      menuContainer.appendChild(menuName);

      // 価格
      const price = document.createElement("p");
      price.textContent = `価格：${menu.price}`;
      menuContainer.appendChild(price);

      // 詳細（あれば）
      if (menu.details) {
        const details = document.createElement("p");
        details.textContent = `ちょい足しメモ：${menu.details}`;
        menuContainer.appendChild(details);
      }

      // コメント（あれば）
      if (menu.comment) {
        const comment = document.createElement("p");
        comment.textContent = `スパイスの声：${menu.comment}`;
        menuContainer.appendChild(comment);
      }

      card.appendChild(menuContainer);
    });
  }

  // スタンプ対象店舗アイコン
  if (shop.isRewardSpot) {
    card.classList.add("reward-spot");
    const rewardIcon = document.createElement("span");
    rewardIcon.className = "reward-icon";
    rewardIcon.textContent = "🎁";
    card.appendChild(rewardIcon);
  }

  // カードクリック時にモーダル表示
  card.addEventListener("click", () => showModal(shop));

  return card;
}


function renderShopList(filteredShops) {
    const container = document.getElementById('shops-container');
    container.innerHTML = '';
    filteredShops.forEach((shop) => { // shopオブジェクト全体を受け取る
        container.appendChild(createShopCard(shop));
    });

    // ★ スタンプアニメーションのトリガー
    if (recentlyVisitedId) {
        // DOMの更新が反映されるのを待つために少し遅延させる
        setTimeout(() => {
            const cardToStamp = container.querySelector(`[data-shop-id="${recentlyVisitedId}"]`);
            if (cardToStamp) {
                const stampImage = cardToStamp.querySelector('.stamp-image');
                if (stampImage) {
                    new Audio('sounds/stamp.mp3').play(); // ★ 効果音を再生
                    stampImage.classList.add('show');
                }
            }
            recentlyVisitedId = null; // アニメーション後はリセット
        }, 100);
    }
}

function showModal(shop) { // indexではなくshopオブジェクト全体を受け取る
    document.getElementById('modalShopName').textContent = shop.name;
    document.getElementById('modalArea').textContent = shop.area;
    document.getElementById('modalHours').textContent = shop.hours;
    document.getElementById('modalHoliday').textContent = shop.holiday;
    document.getElementById('modalPhone').textContent = shop.phone;
    document.getElementById('modalAddress').textContent = shop.address;
    const modalCommentEl = document.getElementById('modalComment');
    // カレー号店舗で、かつ今週の出店であればコメントを設定
    if (shop.type === 'currygo' && isCurryGoThisWeek(shop.date)) {
        modalCommentEl.textContent = "今週のカレー号出店店舗です！";
    } else {
        modalCommentEl.textContent = shop.comment;
    }

    const visitToggleButton = document.getElementById('visitToggleButton');
    const isVisited = visitedShops.includes(shop.id); // IDで訪問済みをチェック
    visitToggleButton.textContent = isVisited ? '訪問済解除' : '訪問済';
    if (isVisited) {
        visitToggleButton.classList.add('visited');
    } else {
        visitToggleButton.classList.remove('visited');
    }

    visitToggleButton.onclick = () => {
        const currentIsVisited = visitedShops.includes(shop.id); // クリック時に最新の状態を再評価
        if (currentIsVisited) {
            visitedShops = visitedShops.filter(id => id !== shop.id);
            visitToggleButton.textContent = '訪問済'; // ボタンのテキストを即座に更新
            visitToggleButton.classList.remove('visited'); // ボタンのクラスを即座に更新
            recentlyVisitedId = null; // ★ 解除時はアニメーション不要
        } else {
            visitedShops.push(shop.id);
            visitToggleButton.textContent = '訪問済解除'; // ボタンのテキストを即座に更新
            visitToggleButton.classList.add('visited'); // ボタンのクラスを即座に更新
            recentlyVisitedId = shop.id; // ★ 訪問時にIDをセット
        }
        saveVisitedShops();
        applyFilters();
        document.getElementById('modal').style.display = 'none';
    };

    const googleMapLink = document.getElementById('googleMapLink');
    // カレー号店舗で住所がない場合はGoogleマップリンクを非表示
    if (shop.type === 'currygo' && !shop.address) {
        googleMapLink.style.display = 'none';
    } else {
        const query = shop.address && shop.address.trim() !== '' ? shop.address : `${shop.name} ${shop.area}`;
        googleMapLink.onclick = () => {
            const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
            window.open(url, '_blank');
        };
        googleMapLink.style.display = 'inline-block';
    }

    // Instagramリンクの表示
    const modalContent = document.querySelector('#modal .modal-content');
    let instagramLinkEl = modalContent.querySelector('.modal-instagram-link');
    if (shop.instagram) {
        if (!instagramLinkEl) {
            instagramLinkEl = document.createElement('a');
            instagramLinkEl.className = 'modal-instagram-link';
            instagramLinkEl.target = '_blank';
            const instagramIcon = document.createElement('img');
            instagramIcon.src = 'images/icon-instagram.svg';
            instagramIcon.alt = 'Instagram';
            instagramLinkEl.appendChild(instagramIcon);
            // どこに挿入するか調整
            const modalShopName = document.getElementById('modalShopName');
            modalShopName.parentNode.insertBefore(instagramLinkEl, modalShopName.nextSibling);
        }
        instagramLinkEl.href = shop.instagram;
        instagramLinkEl.style.display = 'inline-block';
    } else {
        if (instagramLinkEl) {
            instagramLinkEl.style.display = 'none';
        }
    }


    modalContent.style.animation = 'none';
    modalContent.offsetHeight;
    modalContent.style.animation = 'steamPop 0.4s ease-out';

    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close-button').onclick = () => {
    document.getElementById('modal').style.display = 'none';
};

// カレー号モーダルの閉じるボタン
document.querySelector('.currygo-close-button').onclick = () => {
    document.getElementById('currygoModal').style.display = 'none';
};


function applyFilters() {
    const area = document.getElementById('areaFilter').value;
    const eatInTakeOut = document.getElementById('eatInTakeOutFilter').value;
    const showVisited = document.getElementById('filterVisited').classList.contains('active');
    const showUnvisited = document.getElementById('filterUnvisited').classList.contains('active');
    const showOpenToday = document.getElementById('filterOpen').classList.contains('active');
    const showOpenNow = document.getElementById('filterOpenNow').classList.contains('active'); // New filter
    const timeOfDay = document.getElementById('timeOfDayFilter').value; // New filter

    let filtered = allShopsData;

    if (area !== 'all') {
        filtered = filtered.filter((shop) => shop.area === area);
    }

    if (eatInTakeOut === 'eatin') {
        filtered = filtered.filter((shop) => shop.eatIn);
    } else if (eatInTakeOut === 'takeout') {
        filtered = filtered.filter((shop) => shop.takeOut);
    }

    if (showVisited) {
        filtered = filtered.filter((shop) => visitedShops.includes(shop.id));
    } else if (showUnvisited) {
        filtered = filtered.filter((shop) => !visitedShops.includes(shop.id));
    }

    if (showOpenToday) {
        filtered = filtered.filter((shop) => isShopOpenToday(shop));
    }

    if (showOpenNow) { // Apply "open now" filter
        filtered = filtered.filter((shop) => isShopOpenNow(shop));
    }

    if (timeOfDay !== 'all') { // Apply time of day filter
        filtered = filtered.filter((shop) => isShopOpenDuringTimeOfDay(shop, timeOfDay));
    }

    renderShopList(filtered);
    updateVisitCounter(filtered);
}

function isShopOpenToday(shop) {
    const holidayStr = shop.holiday;
    if (!holidayStr) return true;

    const today = new Date().getDay(); // 0(日) ～ 6(土)

    const weekMap = {
        '日': 0,
        '月': 1,
        '火': 2,
        '水': 3,
        '木': 4,
        '金': 5,
        '土': 6,
    };

    const match = holidayStr.match(/([日月火水木金土・]+)曜/);
    if (!match) return true;

    const daysStr = match[1];
    const closedDays = daysStr.split('・').map(d => weekMap[d]).filter(d => d !== undefined);

    return !closedDays.includes(today);
}

function isShopOpenNow(shop) {
    const now = new Date();
    const currentDay = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Check if the shop is closed today based on holiday information
    if (!isShopOpenToday(shop)) {
        return false;
    }

    const hoursStr = shop.hours;
    if (!hoursStr || hoursStr.includes("Instagram") || hoursStr.includes("不定休")) {
        return false; // Cannot determine if open, so assume closed for "open now" filter
    }

    // Parse operating hours (e.g., "10:00-18:00")
    const parts = hoursStr.split('-');
    if (parts.length !== 2) {
        return false; // Invalid format
    }

    const [openTimeStr, closeTimeStr] = parts;
    const [openHour, openMinute] = openTimeStr.split(':').map(Number);
    const [closeHour, closeMinute] = closeTimeStr.split(':').map(Number);

    // Convert current time to minutes from midnight
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    const openTimeInMinutes = openHour * 60 + openMinute;
    let closeTimeInMinutes = closeHour * 60 + closeMinute;

    // Handle overnight hours (e.g., 22:00-02:00)
    if (closeTimeInMinutes < openTimeInMinutes) {
        closeTimeInMinutes += 24 * 60; // Add 24 hours for the next day
        if (currentTimeInMinutes < openTimeInMinutes) {
            currentTimeInMinutes += 24 * 60; // Adjust current time if it's past midnight
        }
    }

    return currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes;
}

function isShopOpenDuringTimeOfDay(shop, timeOfDay) {
    const hoursStr = shop.hours;
    if (!hoursStr || hoursStr.includes("Instagram") || hoursStr.includes("不定休")) {
        return false;
    }

    const allDayShops = [
        "kitchen FUTARIYA",
        "kitchen & cafe ツユハル",
        "喫茶アウヱル橙",
        "ねぎ福",
        "須坂温泉 古城荘",
        "ざかすラーメン",
        "五蘊",
        "クルア アリヤ",
        "桂亭",
        "Café＋Delight",
        "長野土鍋ラーメンたけさん小布施店",
        "響 YURA",
        "多国籍ber 今どきの笹",
        "3RD CAFF & MORE",
        "こどもとときどきハープカフェ nana-mar",
        "新鮮屋オタギリ",
        "蔵のまち観光交流センターくらっと",
        "Sweets market cafe",
        "玉林餅菓子店",
        "ラノッキオ",
        "パンと焼菓子 ohana",
        "中野陣屋・県庁記念館内 カフェ陣屋",
        "+M",
        "Bakery ON!",
        "道のカフェ アンティロープ",
        "Wine&Café Véraison ヴェレゾン"
    ];

    const lunchShops = [
        "川合精肉店",
        "かんてんぱぱショップ小布施店",
        "信州中野観光センター",
        "おやき茶屋 たちべり",
        "ママちきん",
        "山下薬局",
        "おやつと喫茶のお店 菓秀/喫茶ハル",
        "おやつとごはんの店 ai",
        "カフェル・パニエ",
        "たけちゃん食品 (須坂市役所地下食堂)",
        "田中本家博物館 喫茶「龍潜」",
        "ICHI cafe",
        "kitchen vicky",
        "ミナサンド",
        "見晴茶屋"
    ];

    const dinnerShops = [
        "焼肉居酒屋みのり",
        "ラブズピアット",
        "酒食処 縁-えにし-"
    ];

    // 明示的なリストによる分類を最優先
    if (timeOfDay === 'allday') {
        return allDayShops.includes(shop.name);
    }
    if (timeOfDay === 'lunch') {
        return lunchShops.includes(shop.name);
    }
    if (timeOfDay === 'dinner') {
        return dinnerShops.includes(shop.name);
    }

    // 'all'が選択されている場合は、以降のロジックで判断
    if (timeOfDay === 'all') {
        const timeToMinutes = (timeStr) => {
            const [hour, minute] = timeStr.split(':').map(Number);
            return hour * 60 + minute;
        };

        const doRangesOverlap = (shopOpenStart, shopOpenEnd, filterStart, filterEnd) => {
            if (shopOpenEnd < shopOpenStart) {
                shopOpenEnd += 24 * 60;
            }
            return Math.max(shopOpenStart, filterStart) < Math.min(shopOpenEnd, filterEnd);
        };

        const LUNCH_PERIOD_START = timeToMinutes("11:00");
        const LUNCH_PERIOD_END = timeToMinutes("15:00");
        const DINNER_PERIOD_START = timeToMinutes("17:00");
        const DINNER_PERIOD_END = timeToMinutes("22:00");

        const timeRangeRegex = /(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/g;
        let shopTimeRanges = [];
        let match;
        while ((match = timeRangeRegex.exec(hoursStr)) !== null) {
            shopTimeRanges.push({
                open: timeToMinutes(match[1]),
                close: timeToMinutes(match[2])
            });
        }

        if (shopTimeRanges.length === 0) {
            // Fallback for text-based heuristics if no explicit time ranges are found
            if (hoursStr.includes("オールデイ") || hoursStr.includes("終日")) {
                return true;
            }
            if (hoursStr.includes("ランチ") || hoursStr.includes("昼")) {
                return true;
            }
            if (hoursStr.includes("ディナー") || hoursStr.includes("夜")) {
                return true;
            }
            if (hoursStr.includes("16:00-") && hoursStr.includes("カレーは17時から提供")) {
                return true;
            }
            return false;
        }

        let overlapsLunch = false;
        let overlapsDinner = false;

        for (const range of shopTimeRanges) {
            if (doRangesOverlap(range.open, range.close, LUNCH_PERIOD_START, LUNCH_PERIOD_END)) {
                overlapsLunch = true;
            }
            if (doRangesOverlap(range.open, range.close, DINNER_PERIOD_START, DINNER_PERIOD_END)) {
                overlapsDinner = true;
            }
        }

        // For 'all' filter, return true if it overlaps with either lunch or dinner, or is explicitly listed in any category
        return overlapsLunch || overlapsDinner || allDayShops.includes(shop.name) || lunchShops.includes(shop.name) || dinnerShops.includes(shop.name);
    }

    return false; // Should not reach here for specific timeOfDay filters if not in explicit lists
}

function updateVisitCounter(filteredShops) {
    // 訪問済み店舗数の計算 (分子)
    const visitedRegularShopsCount = filteredShops.filter(shop => shop.type === 'regular' && visitedShops.includes(shop.id)).length;
    const visitedUniqueCurryGoShopsCount = new Set(filteredShops.filter(shop => shop.type === 'currygo' && visitedShops.includes(shop.id)).map(shop => shop.name)).size;
    const totalVisited = visitedRegularShopsCount + visitedUniqueCurryGoShopsCount;

    // 表示されている店舗の総数 (分母)
    // 通常店舗とユニークなカレー号店舗を区別してカウント
    const regularShopsInView = filteredShops.filter(shop => shop.type === 'regular').length;
    const uniqueCurryGoShopsInView = new Set(filteredShops.filter(shop => shop.type === 'currygo').map(shop => shop.name)).size;
    const totalDisplayableShops = regularShopsInView + uniqueCurryGoShopsInView;

    const display = document.getElementById('visitCountDisplay');
    if (display) {
        display.textContent = `訪問済み ${totalVisited} / ${totalDisplayableShops} 店舗`;
    }
}

function setFilterButtonEvents() {
    const filterRowButtons = document.querySelectorAll('.filter-row .filter-button');
    filterRowButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Handle mutually exclusive buttons (All, Visited, Unvisited)
            if (button.id === 'filterAll' || button.id === 'filterVisited' || button.id === 'filterUnvisited') {
                filterRowButtons.forEach(b => {
                    if (b.id === 'filterAll' || b.id === 'filterVisited' || b.id === 'filterUnvisited') {
                        b.classList.remove('active');
                    }
                });
                button.classList.add('active');
            }
            // Handle toggle buttons (Open Today, Open Now)
            else if (button.id === 'filterOpen' || button.id === 'filterOpenNow') {
                button.classList.toggle('active');
            }
            applyFilters();
        });
    });

    document.getElementById('areaFilter').addEventListener('change', applyFilters);
    document.getElementById('eatInTakeOutFilter').addEventListener('change', applyFilters);
    document.getElementById('timeOfDayFilter').addEventListener('change', applyFilters);
}

// カレー号モーダルを表示する関数
function displayCurryGoModal() {
    const upcomingCurryGoShops = getCurryGoScheduleForThisWeek(); // currygo.jsからデータを取得
    const currygoModal = document.getElementById('currygoModal');
    const currygoShopsContainer = document.getElementById('currygoShopsContainer');
    const currygoVisitGauge = document.getElementById('currygoVisitGauge');

    currygoShopsContainer.innerHTML = ''; // 既存の内容をクリア

    if (upcomingCurryGoShops.length === 0) {
        currygoShopsContainer.innerHTML = '<p>今週予定されているカレー号はありません。</p>';
        document.getElementById('currygoInstagramLink').style.display = 'none'; // リンクを非表示
    } else {
        // 今週のカレー号の最初の店舗のInstagramリンクを取得
        const firstCurrygoShop = upcomingCurryGoShops[0];
        const currygoInstagramLinkEl = document.getElementById('currygoInstagramLink');
        if (firstCurrygoShop && firstCurrygoShop.instagram) {
            currygoInstagramLinkEl.href = firstCurrygoShop.instagram;
            currygoInstagramLinkEl.style.display = 'inline-block';
        } else {
            currygoInstagramLinkEl.style.display = 'none';
        }

        // 店舗名でグループ化
        const groupedShops = upcomingCurryGoShops.reduce((acc, shop) => {
            if (!acc[shop.name]) {
                acc[shop.name] = { ...shop, dates: [] };
            }
            acc[shop.name].dates.push(shop.date);
            return acc;
        }, {});

        Object.values(groupedShops).forEach((shop) => {
            const shopInfoDiv = document.createElement('div');
            shopInfoDiv.className = 'shop-info';

            const shopNameEl = document.createElement('p');
            shopNameEl.className = 'shop-name-display';
            shopNameEl.textContent = shop.name;
            shopInfoDiv.appendChild(shopNameEl);

            // 複数出店日を縦並びで表示
            shop.dates.forEach(date => {
                const dateEl = document.createElement('p');
                dateEl.className = 'date-display';
                dateEl.textContent = `出店日: ${formatDate(date)}`;
                shopInfoDiv.appendChild(dateEl);

                // 訪問済みボタン
                const visitButton = document.createElement('button');
                const shopIdForDate = `currygo_${date}_${shop.name.replace(/\s/g, '')}`;
                const isVisitedForDate = visitedShops.includes(shopIdForDate);
                visitButton.textContent = isVisitedForDate ? '訪問済解除' : '訪問済';
                visitButton.className = 'visit-toggle-button';
                if (isVisitedForDate) {
                    visitButton.classList.add('visited');
                } else {
                    visitButton.classList.remove('visited');
                }
                visitButton.onclick = () => {
                    const isCurrentlyVisited = visitedShops.includes(shopIdForDate);
                    if (isCurrentlyVisited) {
                        visitedShops = visitedShops.filter(id => id !== shopIdForDate);
                        recentlyVisitedId = null; // ★ 解除時はアニメーション不要
                    } else {
                        visitedShops.push(shopIdForDate);
                        recentlyVisitedId = shopIdForDate; // ★ 訪問時にIDをセット
                        new Audio('sounds/stamp.mp3').play(); // ★ 効果音を再生
                    }
                    saveVisitedShops();
                    applyFilters();
                    displayCurryGoModal(); // モーダルを再描画して状態を反映
                };
                shopInfoDiv.appendChild(visitButton);
            });

            // 各店舗情報内のInstagramリンクは削除
            // if (shop.instagram) {
            //     const instagramLink = document.createElement('a');
            //     instagramLink.href = shop.instagram;
            //     instagramLink.target = '_blank';
            //     instagramLink.className = 'instagram-link';
            //     const instagramIcon = document.createElement('img');
            //     instagramIcon.src = 'images/icon-instagram.svg'; // Instagramアイコンのパス
            //     instagramIcon.alt = 'Instagram';
            //     instagramIcon.className = 'instagram-icon';
            //     instagramLink.appendChild(instagramIcon);
            //     shopInfoDiv.appendChild(instagramLink);
            // }
            currygoShopsContainer.appendChild(shopInfoDiv);
        });
    }

    // 訪問ゲージの表示
    currygoVisitGauge.innerHTML = ''; // 既存の内容をクリア
    const totalGaugeSlots = 10; // 全10個のアイコン

    // カレー号店舗の訪問済み数をカウント（ユニークな店舗名で）
    const visitedCurryGoShopNamesInGauge = new Set();
    allShopsData.filter(shop => shop.type === 'currygo' && visitedShops.includes(shop.id))
                .forEach(shop => visitedCurryGoShopNamesInGauge.add(shop.name));
    const visitedUniqueCurryGoCountForGauge = visitedCurryGoShopNamesInGauge.size;

    for (let i = 0; i < totalGaugeSlots; i++) {
        const img = document.createElement('img');
        img.src = (i < visitedUniqueCurryGoCountForGauge) ? 'images/curry-on.png' : 'images/curry-off.png';
        img.alt = '訪問ゲージ';
        img.className = 'visit-gauge-icon';
        currygoVisitGauge.appendChild(img);
    }

    // モーダルを表示
    currygoModal.style.display = 'block';
    const modalContent = currygoModal.querySelector('.modal-content');
    modalContent.style.animation = 'none';
    modalContent.offsetHeight;
    modalContent.style.animation = 'steamPop 0.4s ease-out';
}


document.addEventListener('DOMContentLoaded', () => {
    initializeAllShopsData(); // 全店舗データを初期化
    setFilterButtonEvents();
    applyFilters();
});

// 「今週のカレー号」ボタンのイベントリスナーを更新
document.getElementById('showThisWeeksCurrygo').addEventListener('click', () => {
  displayCurryGoModal();
});