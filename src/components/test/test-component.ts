import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import TailwindElement from "@/shared/tailwind-element";

import style from "./testComponent.scss?inline";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @property {string} name  default "World"
 * @property {string} btnColor : string (tailwind-class) - default bg-primary-400
 * @css prop btnColor override button's background (use tailwing class)
 */

@customElement("test-component")
export default class TestComponent extends TailwindElement(style) {
  @property({ type: String })
  name?: string = "World";

  @property({ type: String })
  btnColor?: string = "bg-primary-800";

  static styles = [
    TailwindElement(style).styles,
    css`
      .navigation {
        background-color: aliceblue;
        color: black;
      }
    `,
  ];

  @property()
  _classes = { "bg-primary-400": true };

  protected render() {
    return html`
      <p 
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="rounded-full  bg-blue-200 p-2 text-2xl text-yellow-200">
        Hello world!
      </button>
      <nav class="navigation">NAVIGAZIONE</nav>
      <button class=${classMap(this._classes)}>Prova Bottone</button>
      <button class=${this.btnColor}>Prova Bottone</button>
      <slot ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "test-component": TestComponent;
  }
}
