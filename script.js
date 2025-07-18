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

  // IDで訪問済みをチェック
  if (visitedShops.includes(shop.id)) {
    card.classList.add("visited");

    if (recentlyVisitedId === shop.id) {
      card.classList.add("stamp-anim");
      setTimeout(() => {
        card.classList.remove("stamp-anim");
        recentlyVisitedId = null;
      }, 500);
    }
  }

  // 店舗名
  const nameEl = document.createElement("h3");
  nameEl.textContent = shop.name.replace(" ★", "");
  card.appendChild(nameEl);

  // エリア
  const areaEl = document.createElement("p");
  areaEl.textContent = `エリア: ${shop.area}`;
  card.appendChild(areaEl);

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
        if (isVisited) {
            visitedShops = visitedShops.filter(id => id !== shop.id); // IDでフィルタリング
            recentlyVisitedId = null;
        } else {
            visitedShops.push(shop.id); // IDを追加
            recentlyVisitedId = shop.id;
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
    const showVisited = document.getElementById('filterVisited').classList.contains('active');
    const showUnvisited = document.getElementById('filterUnvisited').classList.contains('active');
    const showOpenToday = document.getElementById('filterOpen').classList.contains('active');

    let filtered = allShopsData; // shopsDataからallShopsDataに変更

    if (area !== 'all') {
        filtered = filtered.filter((shop) => shop.area === area);
    }

    if (showVisited) {
        filtered = filtered.filter((shop) => visitedShops.includes(shop.id)); // IDでフィルタリング
    } else if (showUnvisited) {
        filtered = filtered.filter((shop) => !visitedShops.includes(shop.id)); // IDでフィルタリング
    }

    if (showOpenToday) {
        filtered = filtered.filter((shop) => isShopOpenToday(shop));
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

function updateVisitCounter(filteredShops) {
    // 通常店舗の訪問済み数を計算
    const visitedRegularShops = allShopsData.filter(shop => shop.type === 'regular' && visitedShops.includes(shop.id)).length;

    // カレー号店舗の訪問済み数をユニークな店舗名で計算
    const visitedCurryGoShopNames = new Set();
    allShopsData.filter(shop => shop.type === 'currygo' && visitedShops.includes(shop.id))
                .forEach(shop => visitedCurryGoShopNames.add(shop.name));
    const visitedUniqueCurryGoShopsCount = visitedCurryGoShopNames.size;

    const totalVisited = visitedRegularShops + visitedUniqueCurryGoShopsCount;

    // 表示可能な総店舗数（通常店舗の総数 + ユニークなカレー号店舗の総数）
    const totalRegularShopsCount = allShopsData.filter(shop => shop.type === 'regular').length;
    const totalUniqueCurryGoShopsCount = new Set(allShopsData.filter(shop => shop.type === 'currygo').map(shop => shop.name)).size;
    const totalDisplayableShops = totalRegularShopsCount + totalUniqueCurryGoShopsCount;

    const display = document.getElementById('visitCountDisplay');
    if (display) {
        display.textContent = `訪問済み ${totalVisited} / ${totalDisplayableShops} 店舗`;
    }
}

function setFilterButtonEvents() {
    const buttons = document.querySelectorAll('.filter-container .filter-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.parentElement.classList.contains('filter-row')) {
                document.querySelectorAll('.filter-row .filter-button').forEach(b => b.classList.remove('active'));
            }
            if (button.id === 'filterOpen') {
                button.classList.toggle('active');
            } else {
                button.classList.add('active');
            }
            applyFilters();
        });
    });

    document.getElementById('areaFilter').addEventListener('change', applyFilters);
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
                    if (isVisitedForDate) {
                        visitedShops = visitedShops.filter(id => id !== shopIdForDate);
                    } else {
                        visitedShops.push(shopIdForDate);
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