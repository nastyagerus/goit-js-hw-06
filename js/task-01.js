const list = document.querySelector("#categories");
const listItems = list.children;
console.log(listItems);
console.log(`Number of categories: ${listItems.length}`);

const listContent = document.querySelectorAll(".item");
const listContentChildren = listContent.children;
console.log(listContent);

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

getTitleNames(listContent);
