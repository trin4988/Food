// Seasonal and sustainable blog sektion
// Starter med at fetche det indhold som er defineret i app.js
fetchContent()
// Derefter henter den data fra nedenstående funktion
.then(() => getBlogSeasonalSustainable());

// Her bliver bliver der defineret en funktion, som skal hente det specifikke url, hvor den kan hente et array fra API'en
function getBlogSeasonalSustainable(){
    fetch(baseURL + `posts?blog-type=${taxonomyBlogSeasonal}`)
            // Vi anvender den her til at lave dataen eller responsen fra "fetchContent()" om til js format. Den laver data vi får igen om til et js objekt
    .then(res => res.json())
    .then(recipes => {
        // har laves et forEach loop, som render den innterhtml funktion, som er lavet nedenunder.
        recipes.forEach(post => RenderblogSeasonalSustainable(post));
    })
    // Fanger eventuelle fejlbeskeder i konsol
    .catch(err => console.log("Fejl", err));
}

// Funktion hvor man bruger innerhtml for at render indhold på siden, ud fra API stien viser man dynamisk indhold
function RenderblogSeasonalSustainable(post){
    containerElBlogSeasonal.innerHTML += `
    <article class="cartArticle">
    <a href="Blogpost.html?id=${post.id}" class=postDecor>
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
          <p class=blogSummary>${post.acf.summary}</p>
          <div class="linkContainer">
          <a href="#" class="summaryLink">Read more</a>
            </div>
            </a>
        </article>

    `
}

// Seneste diabetes opskrifter sektion
// Samme kode som brugt tidligere, med anderledes url og navn
fetchContent()
.then(() => getBlogSeasonalSustainableRecommendedRecipes());

function getBlogSeasonalSustainableRecommendedRecipes(){
    fetch(baseURL + `posts?diet=${diabetesRecipes}&per_page=4`)
    .then(res => res.json())
    .then(recipes => {
        recipes.forEach(post => RenderBlogSeasonalSustainableRecommendedRecipes(post));
    })
    .catch(err => console.log("Fejl", err));
}

function RenderBlogSeasonalSustainableRecommendedRecipes(post){
    containerRecommendedArticles.innerHTML += `
    <article class="cartArticle">
    <a href="Blogpost.html?id=${post.id}" class=postDecor>
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
            </a>
        </article>

    `
}


// Blog tips sektion
fetchContent()
.then(() => getBlogTips());


function getBlogTips(){
    fetch(baseURL + `posts?blog-type=${taxonomyBlogTricks}`)
    .then(res => res.json())
    .then(recipes => {
        recipes.forEach(post => RenderBlogTips(post));
    })
    .catch(err => console.log("Fejl", err));
}

function RenderBlogTips(post){
    containerElBlogTips.innerHTML += `
    <article class="cartArticle">
    <a href="Blogpost.html?id=${post.id}" class=postDecor>
    <img src="${post.acf.image.url}" alt="">
    <h4>${post.title.rendered}</h4>
    <p class=blogSummary>${post.acf.summary}</p>
    <div class="linkContainer">
    <a href="#" class="summaryLink">Read more</a>
    </div>
    </a>
    </article>
    
    `
}


fetchBlog(recipeId);
