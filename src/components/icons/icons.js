class Icons {
  constructor(container) {
    this.containerHTML = container;

    this.setDOMElement();
  }

  setDOMElement() {
    this.elementHTML = this.containerHTML.querySelector(".icons");
  }

  setColor(color) {
    this.elementHTML.classList.remove("icons_color_purple");
    this.elementHTML.classList.remove("icons_color_light");
    this.elementHTML.classList.add(`icons_color_${color}`);
  }

  getElement() {
    return this.elementHTML;
  }

  getTextContent() {
    return this.elementHTML.textContent;
  }

  setTextContent(text) {
    this.elementHTML.textContent = text;
  }
}

export default Icons;
