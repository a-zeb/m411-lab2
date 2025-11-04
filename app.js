shoppingList = [];

const ADD_ITEM_BUTTON = document.getElementById("addItemButton");
ADD_ITEM_BUTTON.addEventListener("click", () => {
  addItem();
});

const REMOVE_LAST_ITEM_BUTTON = document.getElementById("removeLastItem");
REMOVE_LAST_ITEM_BUTTON.addEventListener("click", () => {
  removeLastItem()
});

function displayList() {
  let shoppingListElement = document.getElementById("itemList");
  shoppingListElement.innerHTML = ""
  shoppingList.forEach((item) => {
    let newListItemElement = document.createElement("li");
    newListItemElement.textContent = item;
    shoppingListElement.appendChild(newListItemElement);
  });
}

function addItem() {
  let item = document.getElementById("addItemText").value;
  if (shoppingList.includes(item) || item === "") {
    console.log("Item already exists");
    window.alert("Item already exists")
  } else {
    shoppingList.push(item);
    displayList();
    document.getElementById("addItemText").value = ""
  }
}

function removeLastItem() {
  shoppingList.pop();
  displayList()
}

function filterItems(searchTerm) {
  let filtered = shoppingList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filtered;
}
