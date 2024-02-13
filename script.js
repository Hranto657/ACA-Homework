const main = document.createElement("div");
const headerBlock = document.createElement("div");
const headerTitle = document.createElement("h1");
const icon = document.createElement("img");
const mainBlock = document.createElement("div");

main.classList.add("class", "main");
headerBlock.setAttribute("class", "header-block");
headerTitle.setAttribute("class", "header-title");
icon.classList.add("class", "icon");
icon.setAttribute("src", "/images/shop_icon.png");
icon.setAttribute("alt", "Online Shop Icon");
mainBlock.setAttribute("class", "main-block");

document.body.appendChild(main);
document.body.getElementsByClassName("main")[0].appendChild(headerBlock);
document.body.getElementsByClassName("header-block")[0].appendChild(icon);
document.body
  .getElementsByClassName("header-block")[0]
  .appendChild(headerTitle);
document.body.getElementsByClassName("header-title")[0].innerHTML =
  "My Online Shop";
document.body.getElementsByClassName("main")[0].appendChild(mainBlock);

async function getShopItems() {
  const response = await fetch("./shopItem.json");
  const shopItems = await response.json();

  return shopItems;
}

getShopItems().then(drawItems);

function drawItems(data) {
  data.forEach((item) => {
    const shopItem = document.createElement("div");
    const shopItemImage = document.createElement("img");
    const shopItemTitle = document.createElement("h2");
    const shopItemDescription = document.createElement("p");

    shopItem.classList.add("class", "shop-item");
    shopItemImage.setAttribute("src", item.image);
    shopItemImage.setAttribute("alt", item.alt);

    shopItemTitle.innerHTML = item.title;
    shopItemDescription.innerHTML = item.description;

    shopItem.appendChild(shopItemTitle);
    shopItem.appendChild(shopItemImage);
    shopItem.appendChild(shopItemDescription);
    document.body.getElementsByClassName("main-block")[0].appendChild(shopItem);
  });
}
