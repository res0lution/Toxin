import "inputmask/dist/jquery.inputmask.min";

class TextInput {
  constructor(container) {
    const isThatElement = $(container).hasClass("js-text-input");

    if (isThatElement) {
      this.textInput = $(container);
    } else {
      this.textInput = $(container).find("input.js-input");
    }

    this.setMasks();
  }

  setMasks() {
    const isMaskedTextInput = this.textInput.hasClass("text-input_masked");

    if (isMaskedTextInput) {
      this.textInput.inputmask({
        alias: "datetime",
        inputFormat: "dd.mm.yyyy",
        placeholder: "ДД.ММ.ГГГГ",
      });
    }
  }

  getElement() {
    return this.textInput;
  }

  eventListenerBind(type, fn) {
    if (this.textInput) {
      this.textInput.on(type, fn);
    }
  }

  setPaddingOnRight() {
    this.textInput.addClass("text-input_with-padding-on-right");
  }
}

export default TextInput;
