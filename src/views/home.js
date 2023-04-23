import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html `
            <section id="homePage">
        <div id="title">
            <h1>Welcome to Movie App</h1>
            <h3>What you will watch tonight?</h3>
            <button class="btn"><a href="#">New movies</a></button>
        </div>
        <div id="createMovie">
            <h3>You already have watch some interesting movie?</h3>
            <button class="btn btn-second"><a href="#">Share</a></button>
        </div>
    </section>`


export async function homeView(ctx) {
    ctx.render(homeTemplate())
}