const container = document.querySelector(".container");

init();

function init() {
  const html = contents.map(generateHTML).join("");

  container.insertAdjacentHTML("beforeend", html);
}
