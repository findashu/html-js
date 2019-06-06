// document

// access html element
console.log(document.documentElement)

// to check for child nodes
console.log(document.documentElement.hasChildNodes())


console.log(document.documentElement.children);

console.log(document.documentElement.children[1])

console.log(document.documentElement.childNodes[1])


console.log(document.documentElement.children[1].hasChildNodes())

console.log(document.documentElement.children[1].children)

console.log(document.documentElement.children[1].children[1])

document.documentElement.children[1].children[1].innerText = 'Learning Hard Way'

document.documentElement.children[1].children[1].style.color = 'red'

