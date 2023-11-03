const list = document.querySelectorAll('.item') 

console.log(`Number of categories: ${list.length}`)

const title = document.querySelectorAll('h2')

title.forEach(element => {
    console.log(`Category: ${element.innerText}`)
    console.log(`Elements: ${element.nextElementSibling.children.length}`)
})

