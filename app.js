shoppingList = []

function addItem (item) {
    if (shoppingList.includes(item)) {
        console.log("Item already exists")
    } else {
        shoppingList.push(item)
    }
}

function removeLastItem () {
    shoppingList.pop()
}

function displayList () {
    shoppingList.forEach(item => {
        console.log(item)
    });
}

addItem(1)
addItem(2)
addItem(3)
removeLastItem()
displayList()