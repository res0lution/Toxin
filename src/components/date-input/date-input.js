import TextInput from "../text-input/text-input";

class DateInput {
  constructor(container, type) {
    this.container = container;
    this.type = type;
    this.setDOMElements();
    this.setPadding();
  }

  setDOMElements() {
    this.dateInputContainer = this.container.find(
      `.js-date-input__field-${this.type}-date`
    );
    this.textInput = new TextInput(this.dateTextInputContainer);
    this.dateInput = this.textInput.getElement();
  }

  getElement() {
    return this.dateInput;
  }

  eventListenerBind(type, fn) {
    if (this.dateInput) {
      this.textInput.eventListenerBind(type, fn);
    } 
  }

  setPadding() {
    this.textInput.setPaddingOnRight();
  }
}

export default DateInput;
