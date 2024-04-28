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












