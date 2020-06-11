import TextInput from "../text-input/text-input";

class DateInput {
  constructor($container, type) {
    this.$container = $container;
    this.type = type;

    this.setDOMElement();
    this.setPadding();
  }

  setDOMElement() {
    this.$dateInputContainer = this.$container.find(
      `.js-date-input__input-${this.type}-date`
    );
    this.textInput = new TextInput(this.$dateTextInputContainer);
    this.$dateInput = this.textInput.getElement();
  }

  getElement() {
    return this.$dateInput;
  }

  addEventListener(type, fn) {
    if (this.$dateInput) this.textInput.addEventListener(type, fn);
  }

  setPadding() {
    this.textInput.setRightPadding();
  }
}

export default DateInput;
