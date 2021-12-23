class StarRatingElement extends HTMLElement {
  constructor() {
    super();

    // shadow root
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // :host it will apply for the root component which is the star-rating element itself
    this._root.innerHTML = `
    <style>
        :host {
            width: 10em;
            height: 1.5em;
            display: inline-block;
            overflow: hidden;
            user-select: none;
            vertical-align: middle;
            box-sizing: border-box;
        }
        .container {
            color: #c5c5c5;
            font-size: 1em;
            line-height:1em
            margin: 0 auto;
            position: relative;
            cursor: pointer;
            padding: 0;
        }
        .container .top {
            color: #e7bd06;
            padding: 0;
            position: absolute;
            z-index: 1;
            display: block;
            top: 0;
            left: 0;
            overflow: hidden;
            width 0;
            display: none;
        }
        .container:hover .top {
            display: none;
        }
        .container .bottom {
            padding: 0;
            position: absolute;
            z-index: 1;
            display: block;
            top: 0;
            left: 0;
            width 0;
            unicode-bidi: bidi-override;
            direction: rtl;
        }
        .container .bottom > span:hover,
        .container .bottom > span:hover ~ span {
            color: #e7bd06;
        }

    </style>
    <div class="container">
        <div class="top">
           <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div class="bottom">
            <span data-value="5">★</span>        
            <span data-value="4">★</span>
            <span data-value="3">★</span>
            <span data-value="2">★</span>
            <span data-value="1">★</span>
        </div>
    </div>
      `;
  }
}
window.customElements.define("star-rating-component", StarRatingElement);
