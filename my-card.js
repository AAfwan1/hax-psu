import { LitElement, html, css } from 'lit';

class MyCard extends LitElement {
  // Declare the properties the component will accept
  static properties = {
    title: { type: String },
    content: { type: String },
    image: { type: String },
    backgroundColor: { type: String },
  };

  // Define component styles
  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      max-width: 300px;
      background-color: var(--background-color, white);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    .card h2 {
      font-size: 1.5rem;
      margin: 0 0 10px;
    }
    .card p {
      font-size: 1rem;
      color: #333;
    }
    .card img {
      max-width: 100%;
      border-radius: 8px;
      margin-bottom: 12px;
    }
  `;

  // Define how the component will render
  render() {
    return html`
      <div class="card" style="background-color: ${this.backgroundColor};">
        ${this.image ? html`<img src="${this.image}" alt="Card image" />` : ''}
        <h2>${this.title}</h2>
        <p>${this.content}</p>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('my-card', MyCard);
