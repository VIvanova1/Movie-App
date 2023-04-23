import { html, render } from "../../node_modules/lit-html/lit-html.js";

const navParent = document.querySelector('header');

const navTemplate = (user) => html `
        <nav id='menu'>
    <input type='checkbox' id='responsive-menu'><label></label>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/movies'>Movies</a></li>
        <li><a href='/serials'>serials</a></li>
        ${user? html`
        <li><a href='#' class="user">my list</a></li>`:
        html `<li><a href='/profile'>profile</a></li>`}
    </ul>
</nav>`;

export async function updateNav(){
const user=null;
render(navTemplate(user), navParent)
}