/** 
 Practice 1: Adding the <h1>
*/
function addH1HeadingElement() {
  let h1 = document.createElement("h1");
  h1.textContent = "JavaScript Today";
  let body = document.getElementById("body");
  body.prepend(h1);
}

/** 
 Practice 2: Adding color to loop names
 using for loop
*/
function colorizeLoopNameHeaders() {
  let codeFonts = document.getElementsByClassName("codeFont");
  let count = 0;
  while (count < codeFonts.length) {
    codeFonts[count].classList.add("codeColor");
    count++;
  }
}

/** 
 Practice 3: Adding grid layout to divs using
 while and do/while loops
*/
function addFlexLayout() {
  let divs = document.getElementsByTagName("div");
  let count = 0;
  while (count < divs.length) {
    divs[count].classList.add("flexContainer");
    count++;
  }
  count = 0;
  let articles = document.getElementsByTagName("article");
  while (count < articles.length) {
    articles[count].classList.add("flexItem");
    count++;
  }
}

/** 
  Practice 4:  Adding styles to articles using
  for loop
*/
function styleArticles() {
  let articles = document.getElementsByTagName("article");
  let count = 0;
  while (count < articles.length) {
    articles[count].classList.add("articleShadow");
    articles[count].classList.add("roundedBorder");
    articles[count].firstElementChild.classList.add("articleTitle");

    count++;
  }
}

/*
  Browser Object Model practice 
  */

let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
console.log(
  "Screen width is " + screenWidth + " screen height is " + screenHeight
);
let screenAvailWidth = window.screen.availWidth;
let screenAvailWidth = window.screen.availWidth;