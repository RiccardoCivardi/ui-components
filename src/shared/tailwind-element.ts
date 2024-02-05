import { LitElement, unsafeCSS, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

import tailwindStyle from "./tailwindGlobal.css?inline";

@customElement("super-tailwind-element")
export default class SuperTailwindElement extends LitElement {
  @property({ attribute: false, type: Object })
  componentExternalStyle?: Record<string, string>;

  static styles = css`
    ${unsafeCSS(tailwindStyle)}
  ` as CSSResultGroup;
}

declare global {
  interface HTMLElementTagNameMap {
    "super-tailwind-element": SuperTailwindElement;
  }
}
