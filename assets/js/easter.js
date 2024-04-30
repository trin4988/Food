
fetchContent()
.then(() => getEasterRecipes());


function getEasterRecipes(){
    fetch(baseURL + `posts?season=${taxonomyEasterAndPassover}`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("myToken"),
        }
    })
    .then(res => res.json())
    .then(recipes => {
        recipes.forEach(post => renderEasterPost(post));
    })
    .catch(err => console.log("Fejl", err));
}

function renderEasterPost(post){
    containerElEasterCategory.innerHTML += `
    <a href="post.html?id=${post.id}" class=postDecor>
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
        </article>
    </a>
    `
}



