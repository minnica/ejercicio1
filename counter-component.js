// Crea una aplicación con dos botones. Un botón incrementa el contador y el otro lo decrementa
// Muestra el resultado en un elemento <h1>
// Solo puedes usar una propiedad y dos metodos

import { LitElement, html } from "lit";

export class counterComponent extends LitElement {
  //static get properties() {}

  //constructor() {}

  //increment() {}

  //decrement() {}

  render() {
    return html`
      <h1>Ejercicio 1</h1>
    `;
  }
}
customElements.define("counter-component", counterComponent);
