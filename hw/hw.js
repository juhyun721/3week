const body = document.getElementsByTagName("body")[0];
const drink = [
  { name: "아메리카노", image: "americano.jpg", price: "1,500원" },
  { name: "카페라떼", image: "cafelatte.png", price: "2,900원" },
  { name: "아이스티", image: "icetea.png", price: "3,000원" },
  { name: "딸기라떼", image: "strawberrylatte.png", price: "3,800원" },
];

const table = document.getElementById("table");
let i = 0;

function addDrink() {
  if (i < drink.length) {
    const newdiv = document.createElement("div");
    newdiv.classList.add("drink-item");

    const img = document.createElement("img");
    img.src = drink[i].image;
    //img.alt = drink[i].name 대체 텍스트
    img.style.width = "100px";

    const text = document.createElement("h1");
    text.textContent = drink[i].name;

    newdiv.appendChild(img);
    newdiv.appendChild(text);

    //newdiv.innerHTML = drink[i];
    table.appendChild(newdiv);
    i++;
  }
}
function removeDrink() {
  if (i > 0) {
    i--;
    const lastChild = table.lastChild;
    table.removeChild(lastChild);
  }
}
document.getElementById("addBtn").addEventListener("click", addDrink);
document.getElementById("removeBtn").addEventListener("click", removeDrink);
