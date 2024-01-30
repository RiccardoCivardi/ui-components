import { html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import TailwindElement from "@/shared/tailwind-element";

import style from "./testComponent.scss?inline";

@customElement("test-component")
export default class TestComponent extends TailwindElement(style) {
  @property()
  name?: string = "World";

  static styles = [
    TailwindElement(style).styles,
    css`
      nav {
        background-color: aliceblue;
        color: black;
      }
    `,
  ];

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
      <nav>NAVIGAZIONE</nav>

      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "test-component": TestComponent;
  }
}
