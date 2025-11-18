/*

events 
types of events
mouse
keyboard
form events
window events

event handlers
event handlers are the functions that are responsible
for handling specific type of events . it defines
what should happens when an event occurs

1.inline event handlers
when it is defined within the element
<button onclick="fun()">click</button>

2. dom event handler
it is defined using addEventListener method
here it will take two params 
first-type of event
second- function defintion  or arrow fun or func name

btn=document.createElement('button')
btn.innerText='dynamic button'
btn.addEventListener('click',()=>{
    alert('event from dom handler')
})
document.body.append(btn)
 


btn=document.createElement('button')
btn.innerText='dynamic button'
btn.addEventListener('click',()=>{
    alert('event from dom handler')
})
document.body.append(btn)

function fun(){
    console.log('event from inline')
}


mouse
click
dblclick
mouseover
mouseout
mousemove




btn=document.querySelector('button')
div=document.querySelector('div')
btn.addEventListener('click',()=>{
    div.innerText='used clicked on the button'
})

btn.addEventListener('dblclick',()=>{
    div.innerText='used clicked on the button two times'
})
btn.addEventListener('mouseover',()=>{
    document.body.style.background='lightcoral'
})
btn.addEventListener('mouseout',()=>{
    document.body.style.background='lightblue'
})
btn.addEventListener('mousemove',()=>{
    alert('mouse moved over an element')
})

keyboard events

can be added to the  window or to the elements


*/ 
window.addEventListener('keypress',function(event){
    console.log(event.key)
    if(event.key=="Enter" ){
        document.body.style.background='red'
    }
})

document.addEventListener('keydown',(e)=>{
  
    if(e.shiftKey && e.ctrlKey && e.key=="J"){
        alert(e.shiftKey && e.ctrlKey )

        e.preventDefault()
     
    }
    if (e.key=="F12"){
        e.preventDefault()
    }

})
document.addEventListener('keydown',(e)=>{
    console.log(e);
    if( e.shiftKey && e.ctrlKey && (e.key=="J" || e.key=="I"))
    alert('developer options disbaled')
    e.preventDefault()
})

window.addEventListener('contextmenu',(ev)=>{
    ev.preventDefault()
})