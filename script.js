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
  while (count < codeFonts.length){
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
  while(count < divs.length){
    divs[count].classList.add("flexContainer");
    count++;
  }
}

/** 
  Practice 4:  Adding styles to articles using
  for loop
*/
function styleArticles() {}
