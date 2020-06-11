import "inputmask/dist/jquery.inputmask.min";

class TextInput {
  constructor(container) {
    const isElement = $(container).hasClass("js-text-input");

    if (isElement) {
      this.$textInput = $(container);
    } else {
      this.$textInput = $(container).find("input.js-text-input");
    } 
    
    this.setMasks();
  }

  setMasks() {
    const isMaskedTextInput = this.$textInput.hasClass("text-input_masked");

    if (isMaskedTextInput) {
      this.$textInput.inputmask({
        alias: "datetime",
        inputFormat: "dd.mm.yyyy",
        placeholder: "ДД.ММ.ГГГГ",
      });
    }
  }

  getElement() {
    return this.$textInput;
  }

  addEventListener(type, fn) {
    if (this.$textInput) {
      this.$textInput.on(type, fn);
    } 
  }

  setRightPadding() {
    this.$textInput.addClass("text-input_with-right-padding");
  }
}

export default TextInput;
