
getToken()
.then(() => getQuickAndEasyRecipes());


function getQuickAndEasyRecipes(){
    fetch(baseURL + `posts?cook-time=${cooktimefast}`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("myToken"),
        }
    })
    .then(res => res.json())
    .then(recipes => {
        recipes.forEach(post => renderQuickAndEasyRecipes(post));
    })
    .catch(err => console.log("Fejl", err));
}

function renderQuickAndEasyRecipes(post){
    containerElQuickAndEasyCategory.innerHTML += `
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
        </article>
    `
}
