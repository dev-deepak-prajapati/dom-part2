const para2 = document.querySelector("#para2"); // select paragraph 2 using id
para2.style.backgroundColor = "#f850dc91"; // manipulating the css of para 2
para2.style.color = "#eb5e00";

const ele = document.createElement("p"); // creat new para element
ele.innerText = "New Para using parent node"; // set text in new para ele

const parentNodeOfPara2 = para2.parentNode; //select parent node using child node
// parentNodeOfPara2.appendChild(ele); ///** add ele last pos in parent node {appedChilde purana method hai iske jagah pr append method use kar sakte hai} **/
parentNodeOfPara2.before(ele); // add ele before parent node

const newEle = document.createElement("span"); // creat new span element
newEle.innerText = "Replaced "; // set text in new span ele

const oldEle = parentNodeOfPara2.children[2]; // select parent child
parentNodeOfPara2.replaceChild(newEle, oldEle); // replace parant child to new span ele

const remOldEle = parentNodeOfPara2.children[0]; // select parent child
parentNodeOfPara2.removeChild(remOldEle); ///** remove parant child {removeChilde purana method hai iske jagah pr remove method use kar sakte hai} **/

const newInsEle = document.createElement("span"); // creat new span element
newInsEle.innerText = " using insertBefore"; // set text in new span ele

const reffEle = parentNodeOfPara2.children[0]; // select parent child
parentNodeOfPara2.insertBefore(newInsEle, reffEle); ///** add ele before refference element **/
