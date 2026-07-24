// console.log(document.getElementsByTagName("div"));

// console.log(document.getElementById("bid"));

// console.log(document.getElementsByClassName("box"));

// console.log(document.querySelector("#bid"));
// console.log(document.querySelector(".name"));
// console.log(document.querySelector("p"));

// console.log(document.querySelectorAll("div"));
// console.log(document.querySelectorAll(".box"));

// console.log(document.querySelector('#bid').firstChild)
// console.log(document.querySelector('#bid').lastChild)
// console.log(document.querySelector('#bid').childNodes)

// const h1 = document.querySelector("h1");
// console.log(h1.tagName); //only returns the tag name
// console.log(h1.nodeName); // nodeName return tag name , text node , comment node ye tino
// console.log(h1.firstChild.tagName);// undefined-> beacause firstChild does not hava any tag name
// console.log(h1.firstChild.nodeName); // text node

// const strong = document.querySelector("strong");
// console.log(strong.firstChild.nodeName);//comment node

/** -----------------------------------------------------------------------------------------
 * MANIPULATING THE TEXT
 * 1 ) innerText
 * 2 ) textContent
 *
 * fetch => {tag,text,element,attribute,html}
 * change => {text,element,attribute,html}
 * tag change kr sakte hai apna function banaker
 *
 *-------------------------------------------------------------------------------------------
 * */

// const hero_section = document.querySelector("#hero-section");
// console.log(hero_section.innerText); // return text without formmating like spaces,tabs
// console.log(hero_section.textContent); // return text with formmating like spaces,tabs

// hero_section.innerText = "welcome to DeepSeaWorlds";

// console.log(hero_section.innerText);
// console.log(hero_section.textContent);

// const bid = document.querySelector("#bid");
// console.log(bid.innerHTML); // bid ke ander jitne bhi content hai sabko show karega with tags
// bid.innerHTML =
//   "<strong>This is strong tag</strong><p><em>em tag inside p tag</em></p>";
//   document.write(bid.innerHTML);
//   console.log(bid.innerHTML);


//   console.log(bid.tagName);
//   console.log(bid.nodeName);
//   console.log(bid.textContent);
//   console.log(bid.innerText);// hidden elements ko ignore karta hai
//   console.log(bid.innerHTML);


