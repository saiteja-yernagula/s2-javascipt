let products = [
    {
        brand: "apple",
        name: "iPhone 15",
        price: 80000,
        img: "https://picsum.photos/seed/apple1/200"
    },
    {
        brand: "samsung",
        name: "Galaxy S23",
        price: 70000,
        img: "https://picsum.photos/seed/samsung1/200"
    },
    {
        brand: "onePlus",
        name: "OnePlus 11",
        price: 55000,
        img: "https://picsum.photos/seed/oneplus1/200"
    },
    {
        brand: "apple",
        name: "iPhone 14",
        price: 60000,
        img: "https://picsum.photos/seed/apple2/200"
    },
    {
        brand: "samsung",
        name: "A52",
        price: 25000,
        img: "https://picsum.photos/seed/samsung2/200"
    }
];

let container=document.querySelector('#container')
function cards(products){
    container.innerText=''
    products.forEach((val)=>{
        let card=document.createElement('div')
        card.innerHTML=`
        <img src=${val.img}>
        <h1>${val.brand}</h1>
        <div>${val.name}</div>
        <div>${val.price}</div>`
        container.append(card)
    })
}
cards(products)


let filteredbybrand=document.getElementById('filteredbybrand')
filteredbybrand.addEventListener('change',()=>{

    filtarr=products.filter((val)=>{
        return val.brand==filteredbybrand.value
    })
    cards(filtarr)

    if(filteredbybrand.value=='all'){
        cards(products)
    }
})

let sortbyprice=document.getElementById('sortbyprice')
sortbyprice.addEventListener('change',()=>{
    if(sortbyprice.value=='high'){
        sortedarr=products.sort((a,b)=>{
            return b.price-a.price 
        })
        cards(sortedarr)
    }
    if(sortbyprice.value=='low'){
        sortedarr=products.sort((a,b)=>{
            return a.price-b.price 
        })
        cards(sortedarr)
    }
})

let filteredbyprice=document.getElementById('filteredbyprice')
filteredbyprice.addEventListener('input',()=>{
    let filtarr=products.filter((val)=>{
        return val.price<filteredbyprice.value
    })
    cards(filtarr)
    if(filteredbyprice.value==''){
        cards(products)
    }
})