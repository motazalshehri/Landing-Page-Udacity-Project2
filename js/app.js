
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");

const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for(const sectionInfo of sections){

const sectionNum = sectionInfo.id;

const sectionName = sectionInfo.dataset.nav;

const li = document.createElement("li");

li.innerHTML = `<a class="menu__link" href="#${sectionNum}">${sectionName}</a>`;

navList.appendChild(li);

}


// When scrolling
let menuLinks = document.querySelectorAll(".menu__link");
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY - 0;

  menuLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop + 55 && section.offsetTop + section.offsetHeight > fromTop + 55) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});