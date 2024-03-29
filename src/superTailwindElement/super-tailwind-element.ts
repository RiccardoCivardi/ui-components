import { LitElement, unsafeCSS, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";

import tailwindStyle from "./tailwindGlobal.css?inline";

@customElement("super-tailwind-element")
export default class SuperTailwindElement extends LitElement {
  static styles = css`
    ${unsafeCSS(tailwindStyle)}
  ` as CSSResultGroup;
}

declare global {
  interface HTMLElementTagNameMap {
    "super-tailwind-element": SuperTailwindElement;
  }
}
