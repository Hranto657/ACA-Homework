const headerTitle = document.createElement("h1");
headerTitle.classList.add("header-title");
headerTitle.innerHTML = "My Online Shop";

const icon = document.createElement("img");
icon.classList.add("class", "icon");
icon.setAttribute("src", "/images/shop_icon.png");
icon.setAttribute("alt", "Online Shop Icon");

const headerBlock = document.createElement("div");
headerBlock.classList.add("header-block");
headerBlock.appendChild(headerTitle);
headerBlock.appendChild(icon);

const mainBlock = document.createElement("div");
mainBlock.classList.add("main-block");

const main = document.createElement("div");
main.classList.add("main");
main.appendChild(headerBlock);
main.appendChild(mainBlock);

document.body.appendChild(main);

async function getShopItems() {
  const response = await fetch("./shopItem.json");
  const shopItems = await response.json();

  return shopItems;
}

getShopItems().then(drawItems);

function drawItems(data) {
  data.forEach((item) => {
    const shopItem = document.createElement("div");
    shopItem.classList.add("class", "shop-item");
    
    const shopItemImage = document.createElement("img");
    shopItemImage.setAttribute("src", item.image);
    shopItemImage.setAttribute("alt", item.alt);
    shopItem.appendChild(shopItemImage);
    
    const shopItemTitle = document.createElement("h2");
    shopItemTitle.innerHTML = item.title;
    shopItem.appendChild(shopItemTitle);
    
    const shopItemDescription = document.createElement("p");
    shopItemDescription.innerHTML = item.description;
    shopItem.appendChild(shopItemDescription);
    
    mainBlock.appendChild(shopItem);
  });
}
