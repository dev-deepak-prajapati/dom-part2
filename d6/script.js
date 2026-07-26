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

/**
 * Question 4: Change an HTML Element's Tag Name
 * 
 * Description: Create a function that takes an existing DOM element and changes 
 * its tag (e.g., from a <div> to a <p>), while perfectly preserving all of its 
 * child elements, text, event listeners, and attributes (id, class, etc.).
 */


function changeTagName(oldNode, newTagName) {
  // check node is valid or not
  if (!(oldNode instanceof Element) || typeof newTagName !== "string") {
    console.error("Invalid node or tag name provided.");
    return;
  }

  // create new tag element
  const newNode = document.createElement(newTagName);

  ///** moving all childs oldNode to newNode */
  ///** 1st method: old way*/

  //   while (oldNode.firstChild) {
  //     newNode.appendChild(oldNode.firstChild);
  //   }

  ////**2nd method: modern way*/
  ///** No need for a loop! beacuase it use sprade operator */

  newNode.append(...oldNode.childNodes);

  for (const val of oldNode.attributes) {
    newNode.setAttribute(val.name, val.value);
  }

  oldNode.replaceWith(newNode);
}
changeTagName(div, "p");
