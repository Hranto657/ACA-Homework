const main = document.createElement("div");
const headerBlock = document.createElement("div");
const headerTitle = document.createElement("h1");
const icon = document.createElement("img");
const mainBlock = document.createElement("div");

main.setAttribute("class", "main");
headerBlock.setAttribute("class", "header-block");
headerTitle.setAttribute("class", "header-title");
icon.setAttribute("class", "icon");
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

fetch("./shopItem.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const shopItem = document.createElement("div");
      const shopItemImage = document.createElement("img");
      const shopItemTitle = document.createElement("h2");
      const shopItemDescription = document.createElement("p");

      shopItem.setAttribute("class", "shop-item");
      shopItemImage.setAttribute("src", item.image);
      shopItemImage.setAttribute("alt", item.alt);

      shopItemTitle.innerHTML = item.title;
      shopItemDescription.innerHTML = item.description;

      shopItem.appendChild(shopItemTitle);
      shopItem.appendChild(shopItemImage);
      shopItem.appendChild(shopItemDescription);
      document.body
        .getElementsByClassName("main-block")[0]
        .appendChild(shopItem);
    });
  })
  .catch((error) => {
    console.error("Ошибка при загрузке файла:", error);
  });
