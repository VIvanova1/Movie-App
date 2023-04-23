import { html } from "../../node_modules/lit-html/lit-html.js";

const profileTempl = () => html `
            <section class="profile">
        <div class="login-container">
            <div class="inputs">
                <label>EMAIL</label>
                <input type="email" placeholder="example@test.com" />
                <label>PASSWORD</label>
                <input type="password" placeholder="Min 6 charaters long" />
                <button type="submit">LOGIN</button>
            </div>
        </div>
    </section>
    <section class="profile">
        <div class="login-container">
            <div class="inputs">
                <label>EMAIL</label>
                <input type="email" placeholder="example@test.com" />
                <label>PASSWORD</label>
                <input type="password" placeholder="Min 6 charaters long" />
                <label>CONFIRM PASSWORD</label>
                <input type="password" placeholder="Repeat your password" />
                <button type="submit">REGISTER</button>
            </div>
        </div>
    </section>`


export async function profileView(ctx) {
    ctx.render(profileTempl())
}