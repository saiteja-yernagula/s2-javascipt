/*


browser object model
history
location objects
navigator
local storage

timers

setTimeOut()
it is used to execute a block of code
after specified duration
setTimeOut(callback fun, timing in milliseconds)


setInterval()
it is used to execute a block repeatedly after every 
specified duration
setInterval(callback fun, timing in milliseconds)

clearTimeOut()
clearInterval()
we can used to stop the execution of timing functions




*/ 

function show(){
    let notification=document.getElementsByClassName('notification')
    notification[0].style.display='block'
    setTimeout(()=>{
        notification[0].style.display='none'
    },1000)
}

let status1=['connecting to the server...','loading resources...','almost there...','done']
let c=0
let div=document.getElementsByClassName('status')
function load(){
    if(c>=status1.length){
        return 
    }
    div[0].innerText=status1[c]
    setTimeout(()=>{
        c++
    load()
    },1000)
}
load()

// let a=+prompt('enter a timer')
// let divtimer=document.getElementsByClassName('timer')[0]
// divtimer.innerText=a
// let timer=setInterval(()=>{
//     if(a==0){
//         alert('times up')
//         clearInterval(timer)
//     }
// divtimer.innerText=a--
// },1000)

var str='welcome to our webpage'

var typer=document.getElementsByClassName('typer')[0]
let count=0
setInterval(()=>{
    if(count<str.length){
        typer.innerHTML+=str[count]
        count++
    }
},600)