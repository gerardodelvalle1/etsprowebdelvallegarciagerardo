class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        ETS Programacion Web Del Valle Garcia Gerardo
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
