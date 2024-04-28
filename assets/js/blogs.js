getToken()
.then(() => getBlogSeasonalSustainable());


function getBlogSeasonalSustainable(){
    fetch(baseURL + `posts?blog-type=${taxonomyBlogSeasonal}`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("myToken"),
        }
    })
    .then(res => res.json())
    .then(recipes => {
        recipes.forEach(post => RenderblogSeasonalSustainable(post));
    })
    .catch(err => console.log("Fejl", err));
}

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