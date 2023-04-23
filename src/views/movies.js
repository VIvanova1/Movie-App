import { html } from "../../node_modules/lit-html/lit-html.js";

const moviesTemplate = () => html `
<section id="movieCatalog">
<div class="catalogCover">
    <input type="text" class="css-input" />
    <span id="icon-search"><i class="fa-solid fa-magnifying-glass"></i></span>
    <div id="catalogTitle">
        <h2>Let's see what we have</h2>
    </div>
</div>
</section>
<section id="catalog">
<div class="movie-card">
    <img src="./styles/images/Harry P poster.jpg" alt="Harry P. movie">
    <div class="card-container">
        <h4>harry potter and the goblet of fire poster</h4>
    </div>
</div>
<div class="movie-card">
    <img src="./styles/images/Harry P poster.jpg" alt="Harry P. movie">
    <div class="card-container">
        <h4>harry potter and the goblet of fire poster</h4>
    </div>
</div>
<div class="movie-card">
    <img src="./styles/images/Harry P poster.jpg" alt="Harry P. movie">
    <div class="card-container">
        <h4>harry potter and the goblet of fire poster</h4>
    </div>
</div>
</section>`;

export async function moviesView(ctx) {
    ctx.render(moviesTemplate())
}