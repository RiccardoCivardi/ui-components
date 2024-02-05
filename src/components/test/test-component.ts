import { html, css, CSSResultGroup, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import SuperTailwindElement from "@/shared/tailwind-element";

import styleScss from "./testComponent.scss?inline";
import styleCss from "./testComponent.css?inline";

/**
 * @property {string} name - default "World"
 * @property {boolean} isTextWhite - default false
 * @slot - This element has an unnamed slot
 */
@customElement("test-component")
export default class TestComponent extends SuperTailwindElement {
  @property({ type: String })
  name?: string = "World";

  @property({ type: Boolean })
  isTextWhite: boolean = false;

  static styles = [
    SuperTailwindElement.styles,
    css`
      ${unsafeCSS(styleScss) || ""}
    `,
    css`
      ${unsafeCSS(styleCss) || ""}
    `,
    css`
      .navigation {
        background-color: aliceblue;
        color: black;
      }
    `,
  ] as CSSResultGroup;

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="rounded-full  bg-blue-200 p-2 text-2xl text-yellow-200">
        Hello world!
      </button>
      <nav class="navigation">NAVIGAZIONE</nav>
      <button
        class=${classMap({
          "bg-success-400": true,
          "text-white": this.isTextWhite,
        })}
      >
        Prova Bottone
      </button>
      <button class="mio-componente">
        <span class="mio-componente__inner">Prova Bottone 2</span>
      </button>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "test-component": TestComponent;
  }
}
