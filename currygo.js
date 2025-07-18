const karegoSchedule = [
  {
    name: "pizza マルマツ",
    area: "カレー号",
    date: "2025-07-13",
    instagram: "https://www.instagram.com/pizza_mar_mazzo/"
  },
  {
    name: "さんびきのこぶた",
    area: "カレー号",
    date: "2025-07-19",
    instagram: "https://www.instagram.com/thethreelittlepigs2023/"
  },
  {
    name: "さんびきのこぶた",
    area: "カレー号",
    date: "2025-07-20",
    instagram: "https://www.instagram.com/thethreelittlepigs2023/"
  },
  {
    name: "il vico",
    area: "カレー号",
    date: "2025-07-26",
    instagram: "https://www.instagram.com/ilvico/"
  },
  {
    name: "カリースパイス山路",
    area: "カレー号",
    date: "2025-08-03",
    instagram: "https://www.instagram.com/curry_spice_yamaji/"
  },
  {
    name: "F-TRUCK 112 YO",
    area: "カレー号",
    date: "2025-08-11",
    instagram: "https://www.instagram.com/ftruck112yo/"
  },
  {
    name: "ひげのコーヒー",
    area: "カレー号",
    date: "2025-08-17",
    instagram: "https://www.instagram.com/higeno__coffee/"
  },
  {
    name: "ファームさとう",
    area: "カレー号",
    date: "2025-08-23",
    instagram: "https://www.instagram.com/farmsato.nakano_official/"
  },
  {
    name: "TAMCURRY",
    area: "カレー号",
    date: "2025-08-31",
    instagram: "https://www.instagram.com/tamcurry_/"
  },
  {
    name: "SOYLcafe",
    area: "カレー号",
    date: "2025-09-06",
    instagram: "https://www.instagram.com/soylcafe/"
  },
  {
    name: "SOYLcafe",
    area: "カレー号",
    date: "2025-09-07",
    instagram: "https://www.instagram.com/soylcafe/"
  },
  {
    name: "ババカレー",
    area: "カレー号",
    date: "2025-09-13",
    instagram: "https://www.instagram.com/baba__curry/"
  }
];

function getCurryGoScheduleForThisWeek() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 時刻をリセット

  // 火曜日を週の始まりとするための計算
  let dayOfWeek = today.getDay(); // 0 (日) - 6 (土)
  let daysToSubtract = dayOfWeek - 2; // 火曜日 (2) との差
  if (daysToSubtract < 0) {
    daysToSubtract += 7; // 日曜日(0)や月曜日(1)の場合、前の火曜日に戻る
  }

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - daysToSubtract);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6); // 週の終わりは月曜日

  const upcoming = karegoSchedule.filter(entry => {
    const entryDate = new Date(entry.date);
    entryDate.setHours(0, 0, 0, 0); // 時刻をリセット
    return entryDate >= startDate && entryDate <= endDate;
  });

  return upcoming;
}