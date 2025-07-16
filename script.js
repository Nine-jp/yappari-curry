// script.js（訪問済スタンプアニメーション完全対応版）

let visitedShops = JSON.parse(localStorage.getItem('visitedShops')) || [];
let recentlyVisitedIndex = null; // 最新で訪問済みにしたショップのindexを記録

function saveVisitedShops() {
    localStorage.setItem('visitedShops', JSON.stringify(visitedShops));
}

function createShopCard(shop, index) {
    const card = document.createElement('div');
    card.className = 'shop-card';

    if (visitedShops.includes(index)) {
        card.classList.add('visited');

        // 最新訪問済みのカードならスタンプアニメーションを付与
        if (recentlyVisitedIndex === index) {
            card.classList.add('stamp-anim');
            setTimeout(() => {
                card.classList.remove('stamp-anim');
                recentlyVisitedIndex = null; // アニメ終了後クリア
            }, 500);
        }
    }

    const nameEl = document.createElement('h3');
    nameEl.textContent = shop.name.replace(' ★', '');
    card.appendChild(nameEl);

    const areaEl = document.createElement('p');
    areaEl.textContent = `エリア: ${shop.area}`;
    card.appendChild(areaEl);

    const menu = shop.menus && shop.menus.length > 0 ? shop.menus[0] : null;
    if (menu) {
        const menuNameEl = document.createElement('p');
        menuNameEl.className = 'menu-name';
        menuNameEl.textContent = `🍛 ${menu.menuName}`;
        card.appendChild(menuNameEl);

        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'menu-image';
        const img = document.createElement('img');
        const imagePath = `images/menus/${index}.jpg`;
        img.src = imagePath;
        img.alt = menu.menuName;
        img.onerror = () => {
            imageWrapper.innerHTML = '<span class="no-image">画像準備中</span>';
        };
        imageWrapper.appendChild(img);
        card.appendChild(imageWrapper);

        const menuCommentEl = document.createElement('p');
        menuCommentEl.className = 'menu-comment';
        menuCommentEl.textContent = menu.comment;
        card.appendChild(menuCommentEl);
    }

    const eatTakeEl = document.createElement('p');
    eatTakeEl.className = 'eat-take';
    const labels = [];
    if (shop.eatIn === true) labels.push('[EAT IN]');
    if (shop.takeOut === true) labels.push('[TAKE OUT]');
    if (labels.length > 0) {
        eatTakeEl.textContent = labels.join(' ');
        card.appendChild(eatTakeEl);
    }

    if (shop.isRewardSpot) {
        card.classList.add('reward-spot');

        const rewardIcon = document.createElement('span');
        rewardIcon.className = 'reward-icon';
        rewardIcon.textContent = '🎁';
        card.appendChild(rewardIcon);
    }

    card.addEventListener('click', () => showModal(shop, index));
    return card;
}

function renderShopList(filteredShops) {
    const container = document.getElementById('shops-container');
    container.innerHTML = '';
    filteredShops.forEach(({ shop, index }) => {
        container.appendChild(createShopCard(shop, index));
    });
}

function showModal(shop, index) {
    document.getElementById('modalShopName').textContent = shop.name;
    document.getElementById('modalArea').textContent = shop.area;
    document.getElementById('modalHours').textContent = shop.hours;
    document.getElementById('modalHoliday').textContent = shop.holiday;
    document.getElementById('modalPhone').textContent = shop.phone;
    document.getElementById('modalAddress').textContent = shop.address;
    document.getElementById('modalComment').textContent = shop.comment;

    const visitToggleButton = document.getElementById('visitToggleButton');
    const isVisited = visitedShops.includes(index);
    visitToggleButton.textContent = isVisited ? '訪問済みにするのをやめる' : '訪問済みにする';

    visitToggleButton.onclick = () => {
        if (isVisited) {
            visitedShops = visitedShops.filter(i => i !== index);
            recentlyVisitedIndex = null;
        } else {
            visitedShops.push(index);
            recentlyVisitedIndex = index;
        }
        saveVisitedShops();
        applyFilters();
        document.getElementById('modal').style.display = 'none';
    };

    const googleMapLink = document.getElementById('googleMapLink');
    const query = shop.address && shop.address.trim() !== '' ? shop.address : `${shop.name} ${shop.area}`;
    googleMapLink.onclick = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
    };

    googleMapLink.style.display = shop.address && shop.address.trim() !== '' ? 'inline-block' : 'none';

    const modalContent = document.querySelector('.modal-content');
    modalContent.style.animation = 'none';
    modalContent.offsetHeight;
    modalContent.style.animation = 'steamPop 0.4s ease-out';

    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close-button').onclick = () => {
    document.getElementById('modal').style.display = 'none';
};

function applyFilters() {
    const area = document.getElementById('areaFilter').value;
    const eatStyle = document.getElementById('styleFilter').value;
    const showVisited = document.getElementById('filterVisited').classList.contains('active');
    const showUnvisited = document.getElementById('filterUnvisited').classList.contains('active');
    const showOpenToday = document.getElementById('filterOpen').classList.contains('active');

    let filtered = shopsData.map((shop, index) => ({ shop, index }));

    if (area !== 'all') {
        filtered = filtered.filter(({ shop }) => shop.area === area);
    }

    if (eatStyle === 'eatIn') {
        filtered = filtered.filter(({ shop }) => shop.eatIn === true);
    } else if (eatStyle === 'takeOut') {
        filtered = filtered.filter(({ shop }) => shop.takeOut === true);
    }

    if (showVisited) {
        filtered = filtered.filter(({ index }) => visitedShops.includes(index));
    } else if (showUnvisited) {
        filtered = filtered.filter(({ index }) => !visitedShops.includes(index));
    }

    if (showOpenToday) {
        filtered = filtered.filter(({ shop }) => isShopOpenToday(shop));
    }

    renderShopList(filtered);
    updateVisitCounter(filtered);
}

function isShopOpenToday(shop) {
    const holidayStr = shop.holiday;
    if (!holidayStr) return true;

    const today = new Date().getDay();

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
    const total = filteredShops.length;
    const visited = filteredShops.filter(({ index }) => visitedShops.includes(index)).length;
    const display = document.getElementById('visitCountDisplay');
    if (display) {
        display.textContent = `訪問済み ${visited} / ${total} 店舗`;
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
    document.getElementById('styleFilter').addEventListener('change', applyFilters);
}

document.addEventListener('DOMContentLoaded', () => {
    setFilterButtonEvents();
    applyFilters();
});
