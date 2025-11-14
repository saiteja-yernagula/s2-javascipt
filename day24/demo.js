/*

//how to create an element
var div=document.createElement('tagname')
div.innerText='hello world'

var h1=document.createElement('h1')
h1.innerText='new content'

// how to add
document.body.append(div,h1)



let ul=document.createElement('ul')
let li1=document.createElement('li')
let li2=document.createElement('li')
let li3=document.createElement('li')

li1.innerText='html'
li2.innerText='css'
li3.innerText='js'
li1.classList.add('el1')

ul.append(li1,li2,li3)

document.body.appendChild(ul)


*/ 

// let card=document.createElement('div')
// let img=document.createElement('img')
// let title=document.createElement('h1')
// let btn=document.createElement('btn')

// img.setAttribute('src','https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_1280.jpg')
// title.innerText='dice'
// btn.innerText='know more'

// card.style.height='35vh';
// card.style.width='30%';
// img.style.width='100px'
// img.style.height='100px'

// card.append(img,title,btn)
// document.body.appendChild(card)

let arr=['html','css','js','react']

arr.forEach((val)=>{
    let div=document.createElement('div')
    div.innerText=val
    console.log(div)
    document.body.append(div)
})




