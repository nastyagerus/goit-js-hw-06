const listItems = document.querySelector("#categories");
console.log(`Number of categories: ${listItems.children.length}`);

const itemName = document.querySelectorAll("h2");
// console.log(itemName);

const getTitleNames = (array) => {
  array.forEach((item, index) => {
    console.log(`Category: ${item.textContent}`);
  });
};

const itemQuantity = document.querySelectorAll(".item ul");
// console.log(itemQuantity);

const getItemQuantity = (array) => {
  array.forEach((item, index) => {
    console.log(`Elements: ${item.children.length}`);
  });
};

getTitleNames(itemName);

getItemQuantity(itemQuantity);
