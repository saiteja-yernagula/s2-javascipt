/*

bom(browser object model)
it is a browser object that stores different kind 
of information
1) window
   window.innerWidth
   window.innerHeight
   window.alert()
   window.prompt()
   window.confirm('statement')
   window.open('url')
   window.open('url','_blank','width=100,height=100')
   window.close()
   function fun(){
    // some action need to right befor window.open
    window.open('https://www.programiz.com/python-programming/online-compiler/','_blank','width=300,height=300')
}

function fun1(){
    if(window.confirm('are you really want to exit')){
        window.close()
    }
}


2) navigator
3) history
5) timers
4) storage
it is used store the data on the browser
  local storage - it will stored more time even after  session
  session storage- it will be limited on one specific session

  localStorage.setItem('key','value')

  //how to store data in browser
  let age=25
localStorage.setItem('name','jack')
localStorage.setItem('age',age)

sessionStorage.setItem('newname','jessy')

how to get the data from storage and display on new file
let data=localStorage.getItem('name')
console.log(data)

document.body.innerText=data
*/

let obj={
    aname:'rakesh',
    age:23
}
localStorage.setItem('stddata',JSON.stringify(obj))






