const div = document.querySelector("div"); // select div tag.
const divClass = div.getAttribute("class"); // return which css class used./ null

console.log(divClass);

console.log(div.attributes); // /*** property returns a live collection of all attribute nodes registered to the specified node. It is a NamedNodeMap, not an Array. **/

console.log(div.attributes.class.value); // return css class name

console.log(div.attributes.class.nodeValue); // return css class name

console.log(div.attributes["class"].value); // return css class name

console.log(div.attributes["class"].nodeValue); // return css class name

div.setAttribute("class", "box newBox"); // replace another class
div.setAttribute("class", `${divClass} newBox`); // add another class

console.log(div.attributes["class"].nodeValue); // return css class name

const span = document.createElement("span"); // create span tag
span.innerText = "span tag created"; // set text in span tag

div.append(span); // append span tag  in div tag
span.setAttribute("style", "cursor: pointer;background: red;"); //apply style on span tag
