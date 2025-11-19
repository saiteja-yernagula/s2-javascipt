/*

form events

submit
change
focus
blur
reset
input

how to access a form fields
1) based on element level
var inp=document.querySelector('input')
console.log(inp.value)

2) based on document level
var inp=document.forms[0][0]
console.log(inp.value)

3) using event parameter
let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()//it prevents the default submission
    console.log(e.target[0].value)
})

let arr=[]
let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let obj={
        name:e.target[0].value,
        mail:e.target[1].value
    }
    arr.push(obj)
    console.log(arr)
})


change
let opt=document.querySelector('select')
opt.addEventListener('change',()=>{
    console.log(opt.value)
    var div=document.querySelector('div')
    div.innerText=opt.value
})

<select name="" id="dropdown">
<option value="mern stack">mern</option>
<option value="mean stack">mean</option>
<option value="python stack">python</option>
</select>
<div></div>

input 
let inp=document.querySelector('input')
let div=document.querySelector('div')

inp.addEventListener('input',()=>{
    console.log(inp.value)
    div.innerHTML=inp.value
})

inp.addEventListener('focus',()=>{
    document.body.style.background='deeppink'
})

inp.addEventListener('blur',()=>{
    document.body.style.background='white'
})

window events
load
resize
scroll

*/ 

window.addEventListener('load',()=>{
    alert('welcome to our webpage')
})

window.addEventListener('resize',()=>{
    console.log(window.innerWidth)
    if(window.innerWidth<576){
        document.body.innerText='mobile view'
        document.body.style.background='red'
    }
    
})

window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
})

