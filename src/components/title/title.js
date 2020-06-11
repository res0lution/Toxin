class Title {
  constructor(container) {
    this.containerHTML = container;

    this.setDOMElement();
  }

  setDOMElement() {
    this.elementHTML = this.containerHTML.querySelector(".title");
  }

  getElement() {
    return this.elementHTML;
  }

  getTextContent() {
    return this.elementHTML.textContent;
  }
}

export default Title;
