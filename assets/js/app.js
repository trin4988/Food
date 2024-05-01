// Starter med at erklære alle Variables:
const baseURL = "https://api.rasmuspedersen.net/wp-json/wp/v2/";

// Queryselector variabler
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
const containerRecommendedArticles = document.querySelector(".diabetesArticles")

// Post
const postContainerSite = document.querySelector(".postContainer")

// Blog post 
const postContainerBlog = document.querySelector(".blogPostContainer")

// ID variabler
// Cook time variabler
const cooktimeSlow = 8;
const cooktimeMedium = 9;
const cooktimefast = 10;

// Diabetes
const diabetesRecipes = 62;

// Season Variabler
const taxonomyEasterAndPassover = 39;

// Blog Variabler
const taxonomyBlogSeasonal = 134;
const taxonomyBlogTricks = 135;

// Render params hver side
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

// Fetch indhold funktion
function fetchContent() {
  // Bruger fetch til lave en anmodning til api, GET til at hente data fra api  
  return fetch("https://api.rasmuspedersen.net/wp-json/posts/", {
      method: "GET",
  })
  .then(res => res.json())
  // Fanger fejl i console
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
  // Hvis if statement er korrekt, udføres koden
    if (recipeId) {
      // Fetch laver anmodning til det specifikke post
        fetch(baseURL + `posts/${recipeId}`)
        // Vi anvender den her til at lave dataen eller responsen fra "fetchContent()" om til js format. Den laver data vi får igen om til et js objekt
            .then(res => res.json())
            // then metoden render data fra backend, i innerhtml funktionen nedenunder
            .then(recipe => {
                renderRecipe(recipe);
            })
            // Fanger eventuelle fejl i konsollen
            .catch(err => console.log("FEJL:", err));
    }
}
// Laver function som skaber innerhtml til opskrift siderne
// Bruger dynamiske tags(${}) til at indsætte indhold afhængigt af ID
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
                <p>Cooking time:</p>
              </div>
              <p>${recipe.acf.ingredients.ingredient_1}</p>
              <p>${recipe.acf.ingredients.ingredient_2}</p>
              <p>${recipe.acf.ingredients.ingredient_3}</p>
              <p>${recipe.acf.ingredients.ingredient_4}</p>
              <p>${recipe.acf.ingredients.ingredient_5}</p>
              <p>${recipe.acf.ingredients.ingredient_6}</p>
              <p>${recipe.acf.ingredients.ingredient_7}</p>
              <p>${recipe.acf.ingredients.ingredient_8}</p>
              <p>${recipe.acf.ingredients.ingredient_9}</p>
              <p>${recipe.acf.ingredients.ingredient_10}</p>
              <p>${recipe.acf.ingredients.ingredient_11}</p>
              <p>${recipe.acf.ingredients.ingredient_12}</p>
              <p>${recipe.acf.ingredients.ingredient_13}</p>
              <p>${recipe.acf.ingredients.ingredient_14}</p>
              <p>${recipe.acf.ingredients.ingredient_15}</p>
              <p>${recipe.acf.ingredients.ingredient_16}</p>
              <p>${recipe.acf.ingredients.ingredient_17}</p>
              <p>${recipe.acf.ingredients.ingredient_18}</p>
              <p>${recipe.acf.ingredients.ingredient_19}</p>
              <p>${recipe.acf.ingredients.ingredient_20}</p>

            </div>
          </div>
          <div class="opskriftForfatter">
            <div class="opskriftForfatterImg">
              <img src="./assets/img/defaultProfilePicture.svg.png" alt="" />
            </div>
            <div class="opskriftForfatterInfo">
              <p>Recipe by:</p>
              <p>${recipe.acf.author[0].post_title}</p>
              <p>${recipe.acf.author[0].post_date}</p>
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
            src="${recipe.acf.image.url}"
            alt=""
          />
        </div>
      </div>
    </main>


        
    `;
}


// Åben Blog opslag med unikt ID
// Det er samme kode tidligere, med anderledes url og navn
function fetchBlog(recipeId) {
    if (recipeId) {
        fetch(baseURL + `posts/${recipeId}`)
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
  </div>
  <div class="diabetesForfatterInfo">
  <p>Written by:</p>
  <p>${blog.acf.author[0].post_title}</p>
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
  <div class="videoBlog">${blog.acf.video}</div>


    <section class="individualBlogSection">
      <h3>Latest Diabetis Recipes</h3>
    </section>
  </main>

   
    `;
}



