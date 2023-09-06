import { LitElement, html, css } from "lit-element";
import "./login-lit.js";

export class LoginPortal extends LitElement {
    static get properties() {
        return {
        login: { type: Boolean },
        };
    }

    static get styles() {
        return css`
        login-lit {
            display: flex;
            position: absolute;
            right: 38%;
            top: 10%;
        }
        `;
    }

    render() {
        return html`
        ${this.login
            ? html`<h1>Welcome!</h1>`
            : html`
                <login-lit @sign-in="${this._hiddenLogin}"></login-lit>
            `}
        `;
    }

    _hiddenLogin(e) {
        this.login = e.detail;
    }
}
customElements.define("login-portal", LoginPortal);
