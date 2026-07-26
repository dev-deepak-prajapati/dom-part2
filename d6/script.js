/**
 * Question 1 ::
 * create a paragraph with text Welcome To India
 * and add background-color ,color using javascript.
 *
 */

const div = document.querySelector("div");

const paraEle = document.createElement("p");
paraEle.innerText = "using js";

paraEle.setAttribute("style", "color: black;background: #eb5050c9;");
div.append(paraEle);

/**
 * Question 2 ::
 * create a button with text  Click Me
 * as the first element inside the div in 1st position.
 *
 */

const btnEle = document.createElement("button");
btnEle.innerText = "click me";

btnEle.setAttribute("class", "btn");
div.prepend(btnEle);

/**
 * Question 3 ::
 * create a div tag in html and give it class ,
 * append this class this to the <div> element
 *
 */

const body = document.querySelector("body");
const divEle = document.createElement("div");

divEle.setAttribute("class", "rotate");
body.append(divEle);
