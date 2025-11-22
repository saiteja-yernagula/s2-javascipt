/*

bom
window
storage

navigator objects

console.log(navigator.onLine) 
console.log(navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords)
}))

if(navigator.onLine){
    console.log('user is online')
}else{
    console.log('network is not sufficient')
}

location objects

console.log(location.pathname)
console.log(location.host)
console.log(location.hostname)
console.log(location.href)
console.log(location.protocol)

history objects
history.back()
history.forward()
history.go(-1 or -2 or 2)


*/
let  arr=[]
var form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let obj={
        name:e.target[0].value,
        email:e.target[1].value
    }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem('formdata',JSON.stringify(arr))
})