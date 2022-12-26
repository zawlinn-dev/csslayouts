const main_container = document.querySelector(".container");
const versions = [
  ["free lite", "Current Plan"],
  ["stater", "Get the Plan"],
  ["business", "Get the plan"],
  ["extended", "Get the plan"],
];

init();

function init() {
  const getHTML = versions.map(generateHTML).join("");

  main_container.insertAdjacentHTML("beforeend", getHTML);
}

function generateHTML([h, v]) {
  return `
    <section class="cards">
                <header class="card_head">
                    <h2 class="card_title">${h}</h2>
                    <p class="card_txt">It's totally free</p>
                </header>
                <article class="price_container">
                    <h2 class="price_title"></h2>
                    <p class="price_txt">One time payment</p>
                    <a href="" class="payment"> ${v}</a>
                </article>
                <ul class="card_footer">
                    <li> &#xf00c;Up to 1 User</li>
                    <li> All UI Components</li>
                    <li> Lifetime Access</li>
                    <li> Free updates</li>
                    <li> Community Support</li>
                    <li> Downloadable Files</li>
                </ul>
            </section>
    `;
}
