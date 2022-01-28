import { html, css, LitElement } from 'lit';

export default class Header extends LitElement {
  static styles? = css`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 2%;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .logo {
    height: 2.4em;
    width: 2.4em;
    background-color: #1D9BF0;
    border-radius: 25%;
    box-sizing: border-box;
    padding: 0.42em;
  }

  svg {
    fill: #fff;
    stroke: #fff;
    stroke-width: 0.5px;
    transition: transform 0.4s;
  }

  svg:hover {
    transform: rotate(90deg)
  }

  svg:focus {
    border: none;
  }

  p {
    order: 2;
    font-size: 1.4em;
    font-weight: 600;
    margin-left: 0.3em;
    color: #1D9BF0;
    user-select: none;
  }

  ul {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 1.3em;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    color: rgb(15, 20, 25);
    transition: color 0.3s;
  }

  a:hover {
    color: #1D9BF0;
  }

  li {
    padding: 0 0 0 3em;
    list-style: none;
  }
  `

  render() {
    return html`
        <header>
          <div class="logo-container">
            <p>Tweeph</p>
            <div class="logo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
            </div>
          </div>
          <ul>
            <li><a href="/genrate">Genrate</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </header>
      `;
  }
}

customElements.define('tweeph-header', Header);