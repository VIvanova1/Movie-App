import { html, render } from "../../node_modules/lit-html/lit-html.js";

const navParent = document.querySelector('header');

const navTemplate = (user) => html `
        <nav class="menu-container">

            <!-- burger menu -->
            <input type="checkbox" aria-label="Toggle menu" />
            <span></span>
            <span></span>
            <span></span>

            <!-- logo -->
            <a href="/" class="menu-logo"><img src="../../styles/images/movie-icon.png" alt="Movie App Icon" /></a>

            <!-- menu items -->
            <div class="menu">
                <ul>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/serials">Serials</a></li>
                </ul>
                <ul><li><a href="/">My favorite</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </div>
        </nav>`;

export async function updateNav() {
    const user = null;
    render(navTemplate(user), navParent)
}