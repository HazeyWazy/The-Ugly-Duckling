// preloader 

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
}

// back to top button 

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { // show backToTopButton
        backToTopButton.style.display = "block";    
    } 
    else { // Hide backToTopButton
        backToTopButton.style.display = "none";        
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

