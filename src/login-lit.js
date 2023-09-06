import { LitElement, html, css } from 'lit-element';

class LoginLit  extends LitElement {

    static get styles() {
        return css`
            .container {
                width: 350px;
                height: 400px;
                text-align: center;
            }

            p {
                font-size: 0.8rem;
                color: red
            }

            input {
                width: 90%;
                height: 30px;
                margin-top: 1vh;
                border: solid 1px gray;
                border-radius: 5px;
                padding-left: 1rem;
            }

            button {
                width: 60%;
                height: 40px;
                background: teal;
                color: white;
                border: none;
                border-radius: 6px;
                margin-top: 2vh;
            }

            button:hover {
                background: tan;
                cursor: pointer;
            }
        `;
    }

    constructor() {
        super();    
        this.emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
        this.passwordRegex = new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$');
        this.emailErrorMessage = ''
        this.passErrorMessage=''
        }

        static get properties() {
            return {
            email: { type: String },
            password: {type: String},
            passErrorMessage: { type: String },
            emailErrorMessage: { type: String },
            };
        }

    render() {
        return html`
            <div class="container">
                <h2>Login LitElement</h2>
                <input id="email" type="email" placeholder="Write your email"  @input="${this._handleEmailInput}">
                ${this.emailErrorMessage ? html`<p class='error'>${this.emailErrorMessage}</p>` : ''}
                <input id="password" type="password" placeholder="Password" @input="${this._handlePasswordInput}">
                ${this.passErrorMessage ? html`<p class='error'>${this.passErrorMessage}</p>` : ''}
                <button @click="${this._login}">Sing in</button>
            </div>
        `;
    }

        _handleEmailInput(event) {
            const { value } = event.target;
            if (!this.emailRegex.test(value)) {
            this.emailErrorMessage = 'Invalid email address';
            } else {
            this.emailErrorMessage = '';
            }
            this.email = value;
        }

        _handlePasswordInput(event) {
            const { value } = event.target;
            if (!this.passwordRegex.test(value)) {
            this.passErrorMessage = 'Invalid password';
            } else {
            this.passErrorMessage = '';
            }
            this.password = value;
        }

    _login(e) {
        console.log(e.target);
        const email = this.shadowRoot.querySelector("#email").value;
        const pass = this.shadowRoot.querySelector("#password").value;
        const error = this.shadowRoot.querySelector(".error")
        

        if(!!email && !!pass && !error) {
            this.dispatchEvent(new CustomEvent('sign-in', {
                detail: true
            }));
        }
    }
}

customElements.define('login-lit', LoginLit);