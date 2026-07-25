const div = document.querySelector("div");
/**
 *  div ke ander/inside insert
 * */
const p5 = document.createElement("p"); // create new element
p5.innerText = "insert this para 5 using javascript ";
div.prepend(p5); // pahle pos pr add karta hai

const p6 = document.createElement("p");
p6.innerText = "insert this para 6 using javascript ";
div.append(p6); // last pos pr add karta hai

/**
 *  div ke bahar/outside insert
 * */

const p7 = document.createElement("p");
p7.innerText = "insert this para 7 using javascript ";
div.before(p7); // pahle pos pr add karta hai

const p8 = document.createElement("p");
p8.innerText = "insert this para 8 using javascript ";
div.after(p8); // last pos pr add karta hai
// div.insertAdjacentElement("beforeend", element);

/**
 * ek aur method hai jisase ye charo insert ho sakta hai
 *
 * node.insertAdjacentElement(position,element)
 * postion  : {afterbegin,afterend,beforebegin,beforeend}
 *
 */
const pos = ["afterbegin", "afterend", "beforebegin", "beforeend"];
for (p of pos) {
  const ele = document.createElement("span");
  ele.innerText = p;
  div.insertAdjacentElement(p, ele);
}
