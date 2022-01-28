import { css, html, LitElement } from 'lit';

import '../components/tweeph-heading.ts';
import '../components/tweeph-button.ts';
import '../components/tweeph-genrate-form.ts';
import '../components/tweeph-header.ts';
import '../components/tweeph-footer.ts';

export default class Body extends LitElement {
  static styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }

  *:focus-visible {
    outline: none;
  }
  `;

  render() {
    return html`
      <tweeph-genrate-form></tweeph-genrate-form>
    `;
  }
}

customElements.define('tweeph-genrate-page', Body);