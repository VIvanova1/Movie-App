import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html `
    <section id="home-page" class="cover-img">
        <div class="titles title-1">
            <h1>Welcome to Movie App</h1>
            <h3>What you will watch tonight?</h3>
            <a href="/" class="btn btn-1">2023</a>
        </div>
        <div class="titles title-2">
            <h3>You already have watch some interesting movie?</h3>
            <a href="/" class="btn btn-2"><i class="fa-solid fa-user-plus" style="color: #bf8d30;"></i></a>
        </div>
    </section>`


export async function homeView(ctx) {
    ctx.render(homeTemplate())
}