import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { homeView } from './views/home.js';
import { moviesView } from './views/movies.js';
import { updateNav } from './views/navigation.js';
import { profileView } from './views/profile.js';
import { serialsView } from './views/serials.js';

const main = document.querySelector('main');

page(decorateContext);
page('/', homeView)
page('/movies', moviesView)
page('/serials', serialsView)
page('/profile', profileView)


page.start()
updateNav();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

function renderMain(content) {
    render(content, main)
}