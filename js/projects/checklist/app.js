
let addItemBtn = document.querySelector('input[type=submit]')
let todoList = document.querySelector('.list-items');
let items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items)

function addItem(e) {
    e.preventDefault();
    let value = document.querySelector('input[type=text]').value;
    document.querySelector('input[type=text]').value = '';

    items.push(value);
    populateList(items, todoList)
    localStorage.setItem('items', JSON.stringify(items))
}

function populateList(list, displayList) {
    displayList.innerHTML = list.map(e => {
        return `<li>
                    <input type="checkbox" id="listItem">
                    <label for="listItem">${e}</label>
                </li>`
    }).join('');
}


populateList(items, todoList)
addItemBtn.addEventListener('click', addItem);