const blogCreateButton = document.querySelector('.blogCreateButton')
const blockModalOverlay = document.querySelector('.blockModalOverlay')
const blogModal = document.querySelector('.blogModal')
const blogContainers = document.querySelector('.blogContainers')
const filterInputBlog = document.querySelector('.filterInputBlog')
const blogCategoriesContainerAll = document.querySelector('.blogCategoriesContainerAll')
const blogCategoriesContainerEvents = document.querySelector('.blogCategoriesContainerEvents')
const blogCategoriesContainerNews = document.querySelector('.blogCategoriesContainerNews')
let data;


blogCreateButton.addEventListener('click', () => {
    blockModalOverlay.classList.add('active')
    blogModal.classList.add('active')
})

blockModalOverlay.addEventListener('click', () => {
    blockModalOverlay.classList.remove('active')
    blogModal.classList.remove('active')
})

filterInputBlog.addEventListener('keyup', (e) => {
    const searchString = e.target.value
    const filterCards = data.filter(card => {
       return card.title.includes(searchString)
    })
    showArticles(filterCards)
})

window.addEventListener("load", async() => {
    await responce()
    showArticles(data)
})

// Filter by Type
blogCategoriesContainerAll.addEventListener('click', () => {
    showArticles(data)
})
blogCategoriesContainerEvents.addEventListener('click', () => {
    sortArticlesByType(data, 'NEWS')
})
blogCategoriesContainerNews.addEventListener('click', () => {
    sortArticlesByType(data, 'EVENTS')
})

async function responce() {
    const res = await fetch('http://localhost:80/api/server/showArticle', {
        method: 'POST', 
        body: null,
        headers: {'Content-Type': 'application/json'}
    })
    if (res.ok) {
        data = await res.json()
        console.log(data)
    }
}

function sortArticlesByType(obj, type) {
    const newData = Array.prototype.slice.call(obj).filter((item) => item.type == type);
        showArticles(newData)
        console.log(obj)
}


function showArticles(obj){
    // loader.style.display = 'none'
    blogContainers.innerHTML = null
    for (let i = 0; i < obj.length; i++) {
        blogContainers.innerHTML += `<div class="blogContainer d-flex justify-content-between">
                                                <div class="blogContainerDate col-2">
                                                    <div class="blogContainerDateNumber"><p>${obj[i].number}</p></div>
                                                    <div class="blogContainerDateMonth"> <p>${obj[i].month}</p></div>
                                                </div>
                                                <div class="blogContainerContent">
                                                    <div class="blogContainerImg col-12"> <img src="../${obj[i].image}" alt="" class="col-12"> <span class="blogContainerImgEvents"><p>${obj[i].type}</p></span> </div>
                                                    <div class="blogContainerText">
                                                        <h2>${obj[i].title}</h2>
                                                        <p>${obj[i].fullDate}</p>
                                                        <p>${obj[i].content}</p>
                                                        <button>READ MORE</button>
                                                    </div>
                                                </div>
                                            </div>`       
    }
}