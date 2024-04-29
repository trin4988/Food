// Starter med at hente den funktion der er defineret på app.js, for at hente token.
// Når token er blevet hentet fra session storage, bliver funktionen getBlogSeasonalSustainable kørt
getToken()
.then(() => getBlogSeasonalSustainable());

// Her bliver bliver der defineret en funktion, som skal hente det specifikke url, hvor den kan hente et array fra API'en
function getBlogSeasonalSustainable(){
    fetch(baseURL + `posts?blog-type=${taxonomyBlogSeasonal}`, {
        // Næste stykke kode har af gøre med ens token, adgang til indohold bliver nægtet hvis man ikke har en godkendt token
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("myToken"),
        }
    })
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
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
          <p class=blogSummary>${post.acf.summary}</p>
          <div class="linkContainer">
          <a href="#" class="summaryLink">Read more</a>
            </div>
        </article>
    `
}

getToken()
.then(() => getBlogTips());


function getBlogTips(){
    fetch(baseURL + `posts?blog-type=${taxonomyBlogTricks}`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("myToken"),
        }
    })
    .then(res => res.json())
    .then(recipes => {
        recipes.forEach(post => RenderBlogTips(post));
    })
    .catch(err => console.log("Fejl", err));
}

function RenderBlogTips(post){
    containerElBlogTips.innerHTML += `
    <article class="cartArticle">
          <img src="${post.acf.image.url}" alt="">
          <h4>${post.title.rendered}</h4>
          <p class=blogSummary>${post.acf.summary}</p>
          <div class="linkContainer">
          <a href="#" class="summaryLink">Read more</a>
            </div>
        </article>
    `
}