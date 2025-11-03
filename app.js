shoppingList = [];

let removeLastItemButton = document.body.getElementById("removeLastItem");
removeLastItemButton.addEventListener("click", removeLastItem());

let addItemButton = document.body.getElementById("addItemButton");
addItemButton.addEventListener("click", addItem());

function initializeList() {
  let shoppingListElement = document.body.getElementById("itemList");
  shoppingList.forEach((item) => {
    let newListItemElement = document.body.createElement("li");
    newListItemElement.textContent = item;
    shoppingListElement.appendChild(listItem);
  });
}

function addItem() {
  let item = getElementById("addItemText").textContent;
  if (shoppingList.includes(item)) {
    console.log("Item already exists");
  } else {
    shoppingList.push(item);
    initializeList();
    // let shoppingListElement = document.getElementById("itemList");
    // let newListItemElement = document.createElement("li");
  }
}

function removeLastItem() {
  shoppingList.pop();
}

function filterItems(searchTerm) {
  let filtered = shoppingList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filtered;
}

function displayList() {
  shoppingList.forEach((item) => {
    console.log(item);
  });
}
