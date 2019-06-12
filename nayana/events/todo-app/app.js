let addBtn = document.querySelector('input[type=submit]');
let itemList = document.querySelector('#itemList')
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    let value = document.querySelector('input[type=text]').value;
    let data = {
        value : value,
        done : false,
    }
    items.push(data);
    localStorage.setItem('items',JSON.stringify(items))
    populateList(items)
}


function populateList(list) {
    let html = list.map((e,i) => {
        return `
            <input type="checkbox" data-id=${i} ${e.done ? 'checked' : ''} >
            <li>${e.value}</li>
            `
    }).join('');
    itemList.innerHTML = html
} 


function toggleCheckList(e) {
    if(!e.target.matches('input')) return;
    let ele = e.target

    let index = ele.dataset.id;
    items[index].done = !items[index].done;

    localStorage.setItem('items',JSON.stringify(items))
    
    populateList(items)
}

itemList.addEventListener('click', toggleCheckList)
addBtn.addEventListener('click', addItem);
populateList(items);
