// Quick and easy side
// Samme kode brugt andre sider, med andet url og navne
fetchContent()
.then(() => getQuickAndEasyRecipes());


function getQuickAndEasyRecipes(){
    fetch(baseURL + `posts?cook-time=${cooktimefast}&per_page=30`)
    .then(res => res.json())
    .then(recipes => {
        recipes.forEach(post => renderQuickAndEasyRecipes(post));
    })
    .catch(err => console.log("Fejl", err));
}

function renderQuickAndEasyRecipes(post){
    containerElQuickAndEasyCategory.innerHTML += `
    <a href="post.html?id=${post.id}" class=postDecor>
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
        </article>
    </a>

    `
}

fetchRecipe(recipeId);


