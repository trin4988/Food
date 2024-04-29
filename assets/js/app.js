// Variables
const baseURL = "https://api.rasmuspedersen.net/wp-json/wp/v2/";
const recipeCategoryId = 3;

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




// Cook time variabler
const cooktimeSlow = 8;
const cooktimeMedium = 9;
const cooktimefast = 10;

// Season Variabler
const taxonomyEasterAndPassover = 39;

// Blog Variabler
const taxonomyBlogSeasonal = 134;
const taxonomyBlogTricks = 135;


// Get token
function getToken(){
    const loginInfo = {
        username: "api-user", 
        password: "jfKS O5I9 UnSd 6mgp L6Oq SbV6"
    }
    return fetch("https://api.rasmuspedersen.net/wp-json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo)
    })
    .then(res => res.json())
    .then(data => {
        sessionStorage.setItem("myToken", data.data.token)
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
document.getElementById("recipeLink").addEventListener("click", function(event) {
    // Event.preventDefault forhindrer i standardhandling når der klikkes på opskrift, så den vil ikke åbne en ny side.
    event.preventDefault();
    // Dropdown menuen vises og lukkes ved at kalde på dropdown-funktionen.
    toggleDropdown(); 
});










