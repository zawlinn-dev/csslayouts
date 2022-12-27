const main_container = document.querySelector(".container");
const versions = [
  {
    id: 1,
    user: "free",
    categories: "It's totally free",
    plan: "Current Plan",
    check: "&#x2713;",
    uncheck: "✘",
    oldPrice: "",
    newPrice: "0$",
  },
  {
    id: 2,
    user: "Strater",
    categories: "Single site",
    plan: "Get the Plan",
    check: "&#x2713;",
    uncheck: "✘",
    oldPrice: "39$",
    newPrice: "29$",
  },
  {
    id: 3,
    user: "Business",
    categories: "Unlimited Sites",
    plan: "Get the Plan",
    check: "&#x2713;",
    uncheck: "✘",
    oldPrice: "99$",
    newPrice: "59$",
  },
  {
    id: 4,
    user: "Extended",
    categories: "For paying users",
    plan: "Get the Plan",
    check: "&#x2713;",
    uncheck: "✘",
    oldPrice: "259$",
    newPrice: "189$",
  },
];

init();

function init() {
  const getHTML = versions.map(generateHTML).join("");

  main_container.insertAdjacentHTML("beforeend", getHTML);
}

function generateHTML({
  user,
  categories,
  plan,
  check,
  uncheck,
  newPrice,
  oldPrice,
}) {
  const getCheck = checkUser(user);
  return `
    <section class="cards">
                <header class="card_head">
                    <h2 class="card_title">${user}</h2>
                    <p class="card_txt">${categories}</p>
                </header>
                <article class="price_container">
                    <h2 class="price_title">
                      <span class='old'> ${oldPrice} </span>
                      <span class='new'> ${newPrice} </span>
                    </h2>
                    <p class="price_txt">One time payment</p>
                    <a href="" class="${user} payment"> ${plan}</a>
                </article>
                <ul class="card_footer">
                    <li class=${check}>${check} Up to 1 User</li>
                    <li class=${check}>${check} All UI Components</li>
                    <li class=${check}>${check} Lifetime Access</li>
                    <li class=${check}>${check} Free updates</li>
                    <li class=${getCheck}>${getCheck} Community Support</li>
                    <li class=${user == "Strater" ? uncheck : getCheck}>${
    user == "Strater" ? uncheck : getCheck
  } Downloadable Files</li>
                </ul>
            </section>
    `;
}

function checkUser(e) {
  switch (e) {
    case "Strater":
      return "&#x2713;";
    case "Business":
      return "&#x2713;";
    case "Extended":
      return "&#x2713;";
    default:
      return "✘";
  }
}
