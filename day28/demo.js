/*


let inp=document.querySelector('input')
let ul=document.querySelector('ul')
function getdata(){
    let li=document.createElement('li')
    let span=document.createElement('span')
    let delbtn=document.createElement('button')
    let updbtn=document.createElement('button')
    
    span.innerText=inp.value
    delbtn.innerText='delete'
    updbtn.innerText='update'

    delbtn.addEventListener('click',()=>{
        li.remove()
    })
    
    updbtn.addEventListener('click',()=>{
        let newinp=prompt('enter a new input')
        span.innerText=newinp
    })
    li.append(span,updbtn,delbtn)
    ul.append(li)
    inp.value=""
}
*/ 
let inp=document.querySelector('input')
function add(n){
    inp.value+=n
}
function del(){
    inp.value=inp.value.slice(0,inp.value.length-1)
}
function cal(){
    inp.value=eval(inp.value)
}
function clr(){
inp.value=''
}

document.getElementById("fileInput").addEventListener("change", function(event) {
    let file = event.target.files[0];

    if (file) {
        document.getElementById("preview").src = URL.createObjectURL(file);
    }
});
