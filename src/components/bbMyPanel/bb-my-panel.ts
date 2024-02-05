import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

/**
 * @property {string} title - default "WIDGET"
 * @property {boolean} opened - default false
 * @property {string} icon - default ""
 * @css --bb-my-panel-primary-bg, #000
 * @css --bb-my-panel-primary-color, white
 * @slot - This element has an unnamed slot who rappresent the body
 */
@customElement("bb-my-panel")
export default class BbMyPanel extends LitElement {
  static styles = css`
    .title {
      background-color: var(--bb-my-panel-primary-bg, #000);
      color: var(--bb-my-panel-primary-color, white);
      padding: 0.8rem;
      border-radius: 1rem 1rem 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s ease-in-out;
    }

    .title.closed {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    .body {
      padding: 1rem;
      border: 1px solid var(--bb-my-panel-primary-bg, #000);
    }
  `;

  @property({ type: String })
  title: string = "WIDGET";

  @property({ type: Boolean })
  opened: boolean = false;

  @property({ type: String })
  icon: string = "";

  private onIconClickHandler(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("icon-click", { bubbles: true }));
  }

  private toggleOpened() {
    this.opened = !this.opened;
  }

  render() {
    return html`
      <div>
        <div
          class=${classMap({ title: true, closed: !this.opened })}
          @click=${this.toggleOpened}
        >
          ${this.title}
          <div @click=${this.onIconClickHandler}>${this.icon}</div>
        </div>
        ${when(
          this.opened,
          () =>
            html`<div class="body">
              <slot></slot>
            </div>`,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bb-my-panel": BbMyPanel;
  }
}
