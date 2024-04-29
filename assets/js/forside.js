
getToken()
.then(() => getQuickAndEasyIndex());


function getQuickAndEasyIndex(){
    fetch(baseURL + `posts?cook-time=${cooktimefast}`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("myToken"),
        }
    })
    .then(res => res.json())
    .then(recipes => {
                  // Get only the last three recipes
          const lastThreeRecipes = recipes.slice(0, 3);
        
          // Render the last three recipes
          lastThreeRecipes.forEach(post => renderQuickAndEasyPost(post));
    })
    .catch(err => console.log("Fejl", err));
}

function renderQuickAndEasyPost(post){
    containerElIndexQuick.innerHTML += `
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
        </article>
    `
}

getToken()
.then(() => getEasterAndPassoverIndex());


function getEasterAndPassoverIndex(){
    fetch(baseURL + `posts?season=${taxonomyEasterAndPassover}`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("myToken"),
        }
    })
    .then(res => res.json())
    .then(recipes => {
                  // Get only the last three recipes
          const lastThreeRecipes = recipes.slice(0, 3);
        
          // Render the last three recipes
          lastThreeRecipes.forEach(post => renderEasterAndPassoverIndex(post));
    })
    .catch(err => console.log("Fejl", err));
}

function renderEasterAndPassoverIndex(post){
    containerElEaster.innerHTML += `
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
        </article>
    `
    
}







