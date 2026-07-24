const h1 = document.querySelector("h1");
h1.innerText = "<h2> Welcome To DOM </h2>";

h1.style.backgroundColor = "red";
h1.style.color = "yellow";
h1.style.wordSpacing = "1rem";
h1.style.textAlign = "center";
/**-------------------------------------------- */

const heading = document.querySelector("#heading");
heading.innerHTML = "<h2>Welcome To DeepSeaWorlds<h2>";
heading.style.backgroundColor = "yellow";
heading.style.textAlign = "center";
/**-------------------------------------------- */

const p = document.querySelector("p");
p.style.color = "green";
p.style.fontSize = "24px";
p.style.fontWeight = "bold";
p.style.textAlign = "center";
p.style.backgroundColor = "#ccc";
/**-------------------------------------------- */

const title = document.querySelector(".title");
const textBtn = document.querySelector("#textBtn");
const bgBtn = document.querySelector("#bgBtn");

/**-------------------------------------------- */
const colorList = ["red", "yellow", "blue", "aqua", "orange"];

textBtn.addEventListener("click", () => {
  const idx = Math.floor(Math.random() * colorList.length);
  title.style.color = colorList[idx];
});

bgBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const x = `rgb(${r},${g},${b})`;
  const y = `rgb(${g},${r},${b})`;
  const z = `rgb(${r},${b},${g})`;

  const COLOR = `linear-gradient(135deg,${x},${y},${z})`;

  title.style.background = COLOR;
});
