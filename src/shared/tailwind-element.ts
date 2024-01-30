import { LitElement, unsafeCSS, css, CSSResultGroup } from "lit";

import tailwindStyle from "./tailwindGlobal.css?inline";

const TailwindElement = (componentStyle?: string) =>
  class extends LitElement {
    static styles = [
      css`
        ${unsafeCSS(tailwindStyle)}
      `,
      css`
        ${unsafeCSS(componentStyle) || ""}
      `,
    ] as CSSResultGroup;
  };

export default TailwindElement;
