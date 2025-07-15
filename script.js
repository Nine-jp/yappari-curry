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

    const commentEl = document.createElement('p');
    commentEl.textContent = shop.comment;
    card.appendChild(commentEl);

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
            recentlyVisitedIndex = null; // 訪問解除なのでアニメなし
        } else {
            visitedShops.push(index);
            recentlyVisitedIndex = index; // アニメーション対象をセット
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

    // カレーの湯気風ふわっと演出（モーダルアニメーションリセット）
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.animation = 'none';
    modalContent.offsetHeight; // 強制再描画
    modalContent.style.animation = 'steamPop 0.4s ease-out';

    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close-button').onclick = () => {
    document.getElementById('modal').style.display = 'none';
};

function applyFilters() {
    const area = document.getElementById('areaFilter').value;
    const showVisited = document.getElementById('filterVisited').classList.contains('active');
    const showUnvisited = document.getElementById('filterUnvisited').classList.contains('active');
    const showOpenToday = document.getElementById('filterOpen').classList.contains('active');

    let filtered = shopsData.map((shop, index) => ({ shop, index }));

    if (area !== 'all') {
        filtered = filtered.filter(({ shop }) => shop.area === area);
    }

    if (showVisited) {
        filtered = filtered.filter(({ index }) => visitedShops.includes(index));
    } else if (showUnvisited) {
        filtered = filtered.filter(({ index }) => !visitedShops.includes(index));
    }

    if (showOpenToday) {
        // 曜日フィルター機能が必要な場合ここに実装可能
    }

    renderShopList(filtered);
}

function setFilterButtonEvents() {
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            applyFilters();
        });
    });
    document.getElementById('areaFilter').addEventListener('change', applyFilters);
}

document.addEventListener('DOMContentLoaded', () => {
    setFilterButtonEvents();
    applyFilters();
});
