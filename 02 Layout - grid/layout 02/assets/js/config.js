function generateHTML({ image, title, txt }) {
  return `
    <article class="card">
        <figure class="img_container">
        <img src="${image}" alt="" class="card_img" />
        </figure>
        <h2 class="card_title"> ${title} </h2>
        <p class="card_txt"> ${txt} </p>
        <button class="card_btn">Read More</button>
    </article>
    `;
}
