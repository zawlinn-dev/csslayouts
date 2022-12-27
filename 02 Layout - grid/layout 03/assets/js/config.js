function generateHTML1({ categories, price, subscription }) {
  return `
    <section class="section section_01">
        <h2 class="sec_title"> ${categories} </h2>
        <p class="sec_txt"> $${price} per month </p>
        <p class="sec_txt"> ${subscription} </p>
        <button class="sec_btn">Sign up</button>
    </section>
    `;
}

function generateHTML2({
  title,
  numberUser,
  type,
  lifetime,
  update,
  support,
  download,
}) {
  return `
    <section class="section section_02">
        <h2 class="sec_title"> ${title} </h2>
        <ul class="sec_lists">
            <li class="sec_litst_items">Up to ${numberUser} User </li>
            <li class="sec_litst_items">
            ${type} </li>
            <li class="sec_litst_items">\
            ${lifetime} </li>
            <li class="sec_litst_items">
            ${update} </li>
            <li class="sec_litst_items"> ${support} </li>
            <li class="sec_litst_items">
            ${download ? "Downloadable Files" : "Cannot Downloadable"} </li>
        </ul>
    </section>
    `;
}
