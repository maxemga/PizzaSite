const inputName = document.querySelector('.adminInputName');
const inputPrice = document.querySelector('.adminInputPrice');
const inputPhoto = document.querySelector('.adminInputPhoto');
const adminButton = document.querySelector('.adminButton')
let numberProduct = document.querySelector('.numberProduct')
const loader = document.querySelector('.loader')
const filterInput = document.querySelector('.filterInput')
const filterButton = document.querySelector('.filterButton')
const productsContent = document.querySelector('.productsContent')
const selectFilter = document.querySelector('.selectFilterProducts')
let user;
let data;

window.addEventListener("load", async() => {
    await responce()
    showArticles(data)

})

filterInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value
    const filterCards = data.filter(card => {
       return card.name.includes(searchString)
    })
    showArticles(filterCards)
})


// FILTER
function arrFilter() {
    if(selectFilter.value == 0) {
        showArticles(data)
        console.log(data)
    }
    else if (selectFilter.value == "1") {
        sortProductsByName(data)      
    }
    else{
        sortProductsByPrice(data)
    }
}

const request = async (obj) => {
    const res =  await fetch('http://localhost:80/api/server/add', {
        method: 'POST', 
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    
    console.log(data)  
}

async function responce(e) {
    const res = await fetch('http://localhost:80/api/server/show', {
        method: 'POST', 
        body: null,
        headers: {'Content-Type': 'application/json'}
    })
    if (res.ok) {
        data = await res.json()
        console.log(data)
    }
}
function sortProductsByPrice(obj) {
    const newData = Array.prototype.slice.call(obj).sort((a, b) => a.price > b.price ? 1 : -1);
        showArticles(newData)
        console.log(obj)
}
function sortProductsByName(obj) {
    let newData = Array.prototype.slice.call(obj).sort((a, b) => a.name.localeCompare(b.name))
        showArticles(newData)
        console.log(obj)
}

function showArticles(object){
    loader.style.display = 'none'
    productsContent.innerHTML = null
    for (let i = 0; i < object.length; i++) {
        productsContent.innerHTML += `<div class="productsContainer col-sm-12 col-md-4 col-xxl-4">
                                    <div class="productsImg">
                                        <img src="../${object[i].imageSrc}" class="col-12" alt="">
                                        <div class="productsImgOverlay"></div>
                                        <button class="productsImgButton">ADD TO CARD</button>
                                    </div>
                                    <div class="productsText">
                                        <h2>${object[i].name}</h2>
                                        <img src="images/stars.png" alt="">
                                        <p>${object[i].price}р</p>
                                    </div>
                                  </div>`       
    }
}
