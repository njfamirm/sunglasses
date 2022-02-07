import { html, css, LitElement } from 'lit';
import { query } from 'lit/decorators.js';

export default class Generate extends LitElement {
  static styles? = css`
  :host {
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f0f0f0;
    align-items: center;
    border-radius: 250px;
    height: 57px;
    transition: width 1s ease;
  }

  ::placeholder {
    color: var(--light-gray-color);
  }

  input {
    width: 70vw;
    font-size: 1em;
    padding: 10px 25px;
    user-select: none;
    color: var(--black-color);
    background-color: inherit;
    border: none;
    outline: none;
    border-radius: 250px;
    background-color: inherit;
    transition: width 1s ease, padding 1s ease;
  }


  button {
    font-weight: 700;
    font-size: 1.2em;
    border-radius: 250px;
    padding: 10px 25px;
    user-select: none;
    width: 140px;
    background-color: var(--gray-color);
    color: var(--white-color);
    border: none;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 3s cubic-bezier(.6,.32,.06,.74) 0s;
  }

  button:hover {
    background-color: var(--dark-gray-color);
  }

  button:focus {
    border: none;
  }
  `

  render() {
    return html`
    <form action="#" novalidate>
        <input class="input" type="url" spellcheck="false" id="link-box" autocomplete="off" placeholder="https://twitter.com/njfamirm/status/1486041539281362950"></input>
        <button class="sumbit-btn">Generate</button>
    </form>
    `;
  }

  @query('button') button: HTMLSelectElement | undefined;

  @query('input') input: HTMLSelectElement | undefined;

  @query('form') form: HTMLSelectElement | undefined;

  firstUpdated() {
    this.form?.addEventListener('submit', (e) => {
      // to prevent redirect in action form
      e.preventDefault();
      this.sumbit();
    });
  }

  private sumbit() {
    const value = this.input?.value;
    if (value !== undefined && value !== '') {
      const ID = this.checkValidValue(value);
      if (ID !== null) {
        this.changeInput('Checking');
        if (this.checkExistID(ID)) {
          this.changeInput('OK');
          window.location.href = '/editor';
        } else {
          this.changeInput('NotValid');
          /**
           * @TODO: sleep 1 second and change to generate
           */
          this.changeInput('Generate');
        }
      } else {
        this.changeInput('NotValid');
        /**
           * @TODO: sleep 1 second and change to generate
           */
        this.changeInput('Generate');
      }
    }
  }

  private changeInput(inner: string) {
    switch (inner) {
      case 'NotValid':
        this.button!.innerHTML = 'Not valid';
        this.button!.style.backgroundColor = 'var(--light-gray-color)';
        break;
      case 'Checking':
        this.input!.value = '';
        this.button!.innerHTML = 'Checking';
        this.button!.style.backgroundColor = 'var(--dark-gray-color)';
        this.input!.style.width = '0';
        this.input!.style.padding = '0';
        this.button!.style.cursor = 'default';
        break;
      case 'OK':
        this.button!.innerHTML = 'Redirecting';
        this.button!.style.backgroundColor = 'var(--gray-color)';
        break;
      default:
        this.button!.innerHTML = 'Generate';
        this.button!.style.backgroundColor = 'var(--gray-color)';
        this.input!.style.width = '70vw';
        this.input!.style.padding = '10px 25px';
        this.button!.style.cursor = 'pointer';
    }
  }

  // eslint-disable-next-line no-unused-vars
  private checkExistID(_ID: string): boolean {
    return true;
  }

  private checkValidValue(value: string): string | null {
    const match = value.match(/^(http(s)?:\/\/)?(www\.)?twitter.com\/[-a-zA-Z0-9@:%._\\+~#=]*\/status\/\d*$/g);
    if (match !== null) {
      return (<any>(value.match(/\d*$/g)))[0];
    }
    return null;
  }
}

customElements.define('sunglasses-generate-page', Generate);

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'sunglasses-generate-page': Generate;
  }
}