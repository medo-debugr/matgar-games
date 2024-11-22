// قائمة الألعاب مع التصنيفات والصور والروابط
const games = [
  { name: "Game 1", category: "action", price: 5, image: "https://medo-debugr.github.io/game56/thumbnail.jpg", link: "https://medo-debugr.github.io/game56/" },
  { name: "Game 2", category: "adventure", price: 5, image: "https://medo-debugr.github.io/game65/thumbnail.jpg", link: "https://medo-debugr.github.io/game65/" },
  { name: "Game 3", category: "puzzle", price: 5, image: "https://medo-debugr.github.io/game12/thumbnail.jpg", link: "https://medo-debugr.github.io/game12/" },
  { name: "Game 4", category: "action", price: 5, image: "https://medo-debugr.github.io/game11/thumbnail.jpg", link: "https://medo-debugr.github.io/game11/" },
  { name: "Game 5", category: "adventure", price: 5, image: "https://medo-debugr.github.io/game9/thumbnail.jpg", link: "https://medo-debugr.github.io/game9/" },
  { name: "Game 6", category: "puzzle", price: 5, image: "https://medo-debugr.github.io/game8/thumbnail.jpg", link: "https://medo-debugr.github.io/game8/" },
  { name: "Game 7", category: "action", price: 5, image: "https://medo-debugr.github.io/game54/thumbnail.jpg", link: "https://medo-debugr.github.io/game54/" },
  { name: "Game 8", category: "adventure", price: 5, image: "https://medo-debugr.github.io/game456/thumbnail.jpg", link: "https://medo-debugr.github.io/game456/" },
  { name: "Game 9", category: "puzzle", price: 5, image: "https://medo-debugr.github.io/game63/thumbnail.jpg", link: "https://medo-debugr.github.io/game63/" },
  { name: "Game 10", category: "action", price: 5, image: "https://medo-debugr.github.io/game765/thumbnail.jpg", link: "https://medo-debugr.github.io/game765/" },
  { name: "Game 11", category: "adventure", price: 5, image: "https://medo-debugr.github.io/game576/thumbnail.jpg", link: "https://medo-debugr.github.io/game576/" },
  { name: "Game 12", category: "puzzle", price: 5, image: "https://medo-debugr.github.io/game93/thumbnail.jpg", link: "https://medo-debugr.github.io/game93/" },
  { name: "Game 13", category: "action", price: 5, image: "https://medo-debugr.github.io/game48/thumbnail.jpg", link: "https://medo-debugr.github.io/game48/" },
  { name: "Game 14", category: "adventure", price: 5, image: "https://medo-debugr.github.io/game76/thumbnail.jpg", link: "https://medo-debugr.github.io/game76/" },
  { name: "Game 15", category: "puzzle", price: 5, image: "https://medo-debugr.github.io/game47/thumbnail.jpg", link: "https://medo-debugr.github.io/game47/" },
  { name: "Game 16", category: "action", price: 5, image: "https://medo-debugr.github.io/game46/thumbnail.jpg", link: "https://medo-debugr.github.io/game46/" },
  { name: "Game 17", category: "adventure", price: 5, image: "https://medo-debugr.github.io/game45/thumbnail.jpg", link: "https://medo-debugr.github.io/game45/" },
  { name: "Game 18", category: "puzzle", price: 5, image: "https://medo-debugr.github.io/game6/thumbnail.jpg", link: "https://medo-debugr.github.io/game6/" },
];

const cart = [];
const purchasedGames = [];
const gameContainer = document.getElementById("game-container");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

// عرض الألعاب
function displayGames(gamesToDisplay) {
  gameContainer.innerHTML = "";
  gamesToDisplay.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <button onclick="addToCart('${game.name}', ${game.price})">شراء ($${game.price})</button>
      <button onclick="playGame('${game.name}', '${game.link}')">لعب الآن</button>
    `;
    gameContainer.appendChild(gameCard);
  });
}

// إضافة لعبة إلى السلة
function addToCart(gameName, gamePrice) {
  if (!cart.some((item) => item.name === gameName)) {
    cart.push({ name: gameName, price: gamePrice });
    updateCart();
  } else {
    alert("تمت إضافة اللعبة بالفعل.");
  }
}

// لعب اللعبة
function playGame(gameName, gameLink) {
  if (purchasedGames.includes(gameName)) {
    window.open(gameLink, "_blank");
  } else {
    alert("يجب شراء اللعبة أولاً!");
  }
}

// تحديث السلة
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  totalPriceEl.textContent = `المجموع: $${total}`;
}

// إتمام الشراء
function checkout() {
  if (cart.length === 0) {
    alert("السلة فارغة!");
    return;
  }
  purchasedGames.push(...cart.map((item) => item.name));
  alert("تم الشراء بنجاح! سيتم توجيهك إلى صفحة الدفع.");
  window.location.href = `https://fawry.com/pay?account=01123456789`;
}

// عرض كل الألعاب عند تحميل الصفحة
displayGames(games);