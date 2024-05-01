// Quick and easy sektion forside
// Samme kode brugt andre sider, med andet url og navne
fetchContent()
.then(() => getQuickAndEasyIndex());


function getQuickAndEasyIndex(){
    fetch(baseURL + `posts?cook-time=${cooktimefast}&per_page=3`)
    .then(res => res.json())
    .then(recipes => {
          recipes.forEach(post => renderQuickAndEasyPost(post));
    })
    .catch(err => console.log("Fejl", err));
}

function renderQuickAndEasyPost(post){
    containerElIndexQuick.innerHTML += `
    <a href="post.html?id=${post.id}" class=postDecor>
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
        </article>
    </a>
    `
}

// Easter and passover sektion forside
fetchContent()
.then(() => getEasterAndPassoverIndex());


function getEasterAndPassoverIndex(){
    fetch(baseURL + `posts?season=${taxonomyEasterAndPassover}&per_page=3`)
    .then(res => res.json())
    .then(recipes => {
          recipes.forEach(post => renderEasterAndPassoverIndex(post));
    })
    .catch(err => console.log("Fejl", err));
}

function renderEasterAndPassoverIndex(post){
    containerElEaster.innerHTML += `
    <a href="post.html?id=${post.id}" class=postDecor>
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
        </article>
    </a>
    `
    
}







