// Starter med at erklære alle Variables:
const baseURL = "https://api.rasmuspedersen.net/wp-json/wp/v2/";

// Forside 
const containerElIndexQuick = document.querySelector(".indexQuickAndEasy");
const containerElEaster = document.querySelector(".indexEasterAndPassover");

// Quick and easy
const containerElQuickAndEasyCategory = document.querySelector(".quickAndEasyContainer");

// Easter and passover
const containerElEasterCategory = document.querySelector(".easterContainer");

// Blog
const containerElBlogSeasonal = document.querySelector(".blogsContainerSeasonal")
const containerElBlogTips = document.querySelector(".blogsContainerTips")

// Post
const postContainerSite = document.querySelector(".postContainer")

// Blog post 
const postContainerBlog = document.querySelector(".blogPostContainer")

// Cook time variabler
const cooktimeSlow = 8;
const cooktimeMedium = 9;
const cooktimefast = 10;

// Season Variabler
const taxonomyEasterAndPassover = 39;

// Blog Variabler
const taxonomyBlogSeasonal = 134;
const taxonomyBlogTricks = 135;

// Render hver side
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");


function fetchContent() {
  return fetch("https://api.rasmuspedersen.net/wp-json/posts/", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      }
  })
  .then(res => res.json())
  .then(posts => {
      console.log(posts);
  })
  .catch(err => console.log("fejl", err));
}



// Navigation // 
// Dropdown Navigation //
// Der laves en function for dropdown
function toggleDropdown() {
    //Der anvendes getElementById til at finde id'et med underkategorierne fra html-filen. Der tilføjes en classList til at vise og lukke for class "showRecipeCategorie"
    document.getElementById("showRecipeCategorie").classList.toggle("showRecipeCategorie"); 
}

// Der anvendes getElementById til at target class "recipesLink", hvor der tilføjes en eventlistnerer til lytte på click, så når der klikkes på "recipeslink", så udføres der en handling. 
document.getElementById("#recipeLink").addEventListener("click", function(event) {
    // Event.preventDefault forhindrer i standardhandling når der klikkes på opskrift, så den vil ikke åbne en ny side.
    event.preventDefault();
    // Dropdown menuen vises og lukkes ved at kalde på dropdown-funktionen.
    toggleDropdown(); 
});

//  Åben opskrifter med unikt ID 
function fetchRecipe(recipeId) {
    if (recipeId) {
        fetch(baseURL + `posts/${recipeId}`, {
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem("myToken"),
                }
            })
            .then(res => res.json())
            .then(recipe => {
                renderRecipe(recipe);
            })
            .catch(err => console.log("FEJL:", err));
    }
}

function renderRecipe(recipe) {
    postContainerSite.innerHTML = `

    <header class="heroNormal">
      <div class="navbar">
        <a href="./index.html" class="headerLogo">FOOD</a>
        <nav>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li class="dropdownHero">
              <a href="./categories.html" class="dropbtn" id="recipeLink"
                >Recipes <i class="fa-solid fa-angle-down"></i
              ></a>
              <div id="showRecipeCategorie" class="showRecipeCategorie">
                <a href="./categories.html">All Categories</a>
                <a href="./quickAndEasy.html">Quick n' Easy</a>
                <a href="./easter.html">Holiday</a>
                <a href="#">Dinner</a>
                <a href="#">Lifestyle</a>
                <a href="#">Cuisine</a>
              </div>
            </li>
            <li><a href="./blogs.html">Blog</a></li>
            <li><a href="./indexering.html">Ingredients a to z</a></li>
          </ul>
        </nav>
      </div>
      <h1>${recipe.title.rendered}</h1>
      <img src="${recipe.acf.image.url}" alt="" class="hero-image" />
    </header>

 
    <main>
      <div class="opskriftGrid">
        <div class="ingrediensContainer">
          <h3>Ingredients</h3>
          <div class="portionSelector">
            <button class="minus">
              <i class="fa-solid fa-minus"></i>
            </button>
            <p>1 Serving</p>
            <button class="plus">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <div class="ingredienser">
            <div class="ingrediensSocials">
              <i class="fa-regular fa-bookmark"><p>Save</p></i>
              <i class="fa-solid fa-print"><p>Print</p></i>
              <i class="fa-brands fa-pinterest"><p>Save to Pinterest</p></i>
            </div>
            <div class="ingrediensListe">
              <div class="cookingTime">
                <p>Cooking time: 5 min</p>
              </div>
              <p>1 large banana</p>
              <p>1 cup blueberries</p>
              <p>2 tbsps hemp seeds</p>
              <p>1 medium pomegranate (juiced)</p>
            </div>
          </div>
          <div class="opskriftForfatter">
            <div class="opskriftForfatterImg">
              <img src="./asset/img/frank-hvam-klovn.jpeg" alt="" />
            </div>
            <div class="opskriftForfatterInfo">
              <p>Recipe by:</p>
              <p>Nina Rodrigues</p>
              <p>November 24, 2017</p>
              <p>Follow me on:</p>
              <div class="opskriftForfatterSocials">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="metode">
          <h2>METHOD</h2>
          <div class="fremgangsmode">
            <ol>
              <li>${recipe.acf.method.step_1}</li>
              <li>${recipe.acf.method.step_2}</li>
              <li>${recipe.acf.method.step_3}</li>
              <li>${recipe.acf.method.step_4}</li>
              <li>${recipe.acf.method.step_5}</li>
              <li>${recipe.acf.method.step_6}</li>
              <li>${recipe.acf.method.step_7}</li>
              <li>${recipe.acf.method.step_8}</li>
              <li>${recipe.acf.method.step_9}</li>
              <li>${recipe.acf.method.step_10}</li>
              <li>${recipe.acf.method.step_11}</li>
              <li>${recipe.acf.method.step_12}</li>
              <li>${recipe.acf.method.step_13}</li>
              <li>${recipe.acf.method.step_14}</li>
            </ol>
          </div>
        </div>
        <div class="ingrediensTags">
          <h3>TAGS:</h3>
          <div class="tagsCards">
            <a href="#">Quick</a>
            <a href="#">Healthy</a>
            <a href="#">Healthy</a>
            <a href="#">Blueberry</a>
            <a href="#">Vegan</a>
            <a href="#">Smoothie</a>
            <a href="#">Hemp seed</a>
            <a href="#">Pomegranate</a>
          </div>
        </div>
        <div class="fremgangsmodeImg">
          <img
            src="./asset/img/blueberrypomegranateandhempseedsmoothielandscape550x55023fbe33fd69d84723cca3a80df46579d3f34460f3a5797e72ee1a1a2f1686e67.jpg"
            alt=""
          />
        </div>
      </div>
    </main>


        
    `;
}


// Åben Blog opslag med unikt ID

function fetchBlog(recipeId) {
    if (recipeId) {
        fetch(baseURL + `posts/${recipeId}`, {
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem("myToken"),
                }
            })
            .then(res => res.json())
            .then(recipe => {
                renderBlogPost(recipe);
            })
            .catch(err => console.log("FEJL:", err));
    }
}

function renderBlogPost(blog) {
    postContainerBlog.innerHTML = `

    <header class="heroNormal">
      <div class="whiteNavbar">
        <a href="./index.html" class="headerLogo">FOOD</a>
        <nav>
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li class="dropdownHero">
              <a href="./categories.html" class="dropbtn" id="recipeLink"
                >Recipes <i class="fa-solid fa-angle-down"></i
              ></a>
              <div id="showRecipeCategorie" class="showRecipeCategorie">
                <a href="./categories.html">All Categories</a>
                <a href="./quickAndEasy.html">Quick n' Easy</a>
                <a href="./easter.html">Holiday</a>
                <a href="#">Dinner</a>
                <a href="#">Lifestyle</a>
                <a href="#">Cuisine</a>
              </div>
            </li>
            <li><a href="./blogs.html">Blog</a></li>
            <li><a href="./indexering.html">Ingredients a to z</a></li>
          </ul>
        </nav>
      </div>
      <h1 class="whiteHeroH1">${blog.title.rendered}</h1>
      <img src="${blog.acf.image.url}" alt="" class="hero-image" />
    </header>


  <main>
  <div class="individualBlogMain"
  <section class="individualBlogSection">
  <article class="diabetesArticle">
  <h2>${blog.title.rendered}</h2>
  <p>${blog.date}</p>
  <p>
  ${blog.acf.description}
  </p>
  </article>
  </section>
  <section class="individualBlogSection">
  <div class="diabetesForfatter">
  <div class="diabetesForfatterImg">
  <img src="./assets/img/frank-hvam-klovn.jpeg" alt="" />
  </div>
  <div class="diabetesForfatterInfo">
  <p>Written by:</p>
  <p>Nina Rodrigues</p>
  <p>Follow me on:</p>
  <div class="diabetesForfatterSocials">
  <i class="fa-brands fa-facebook-f"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-youtube"></i>
  </div>
  </div>
  </div>
  </section>
  </div>
  <section class="individualBlogSection">
  <h3>Recommended dinner recipes for diabetes</h3>
  </section>

  <section class="diabetesArticles">
    <a href="post.html?id=${blog.id}" class=postDecor cartArticle>
    <article class="cartArticle">
          <img src="${blog.acf.image.url}" alt="">
          <h4>${blog.title.rendered}</h4>
        </article>
    </a>

    <a href="post.html?id=${blog.id}" class=postDecor cartArticle>
    <article class="cartArticle">
          <img src="${blog.acf.image.url}" alt="">
          <h4>${blog.title.rendered}</h4>
        </article>
    </a>


    <a href="post.html?id=${blog.id}" class=postDecor cartArticle>
    <article class="cartArticle">
          <img src="${blog.acf.image.url}" alt="">
          <h4>${blog.title.rendered}</h4>
        </article>
    </a>


    <a href="post.html?id=${blog.id}" class=postDecor cartArticle>
    <article class="cartArticle">
          <img src="${blog.acf.image.url}" alt="">
          <h4>${blog.title.rendered}</h4>
        </article>
    </a>


 
  </section>
  

    <section>
      <h3>LATEST ARTICLES</h3>
    </section>
  </main>

   
    `;
}

