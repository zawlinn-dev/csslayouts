const main = document.querySelector(".container");

init();

function init() {
  const html1 = data1.map(generateHTML1).join("");
  const html2 = data2.map(generateHTML2).join("");

  main.insertAdjacentHTML("beforeend", html1);
  main.insertAdjacentHTML("beforeend", html2);
}
