import DatePicker from "../date-picker/date-picker";
import DateInput from "../date-input/date-input";

class FilterDate {
  constructor(calendar) {
    this.calendar = $(calendar);
    this.findDOMElements();
    this.initCalendar();
  }

  findDOMElements() {
    this.input = new DateInput(this.calendar, "entire");
    this.input2 = this.input.getElement();
    this.isRange = false;

    if (this.input2.length === 0) {
      this.isRange = true;
      this.startInput = new DateTextField(this.calendar, "start");
      this.startInput2 = this.startInput.getElement();
      this.endInput = new DateTextField(this.calendar, "end");
      this.endInput2 = this.endInput.getElement();
      this.datepickerPluginInstance = this.startInput2
        .datepicker()
        .data("datepicker");
    }
  }

  initCalendar() {
    if (this.isRange) {
      const { startInput2, endInput2 } = this;

      startInput2.datepicker({
        range: true,
        multipleDatesSeparator: " - ",
        language: "ru",
        clearButton: true,
      });

      startInput2.datepicker({
        onSelect(formattedDate) {
          const inputValues = formattedDate.split("-");
          const [startValue, secondValue] = inputValues;
          startInput2.val(startValue);
          endInput2.val(secondValue);
        },
      });

      new DatePicker(
        this.startInput2.datepicker().data("datepicker"),
        this.calendar
      );

      this.initEndInput();
    } else {
      this.input2.datepicker({
        range: true,
        multipleDatesSeparator: " - ",
        language: "ru",
        dateFormat: "dd M",
        clearButton: true,
      });
      this.datepickerPluginInstance = this.input2
        .datepicker()
        .data("datepicker");

      new DatePicker(this.datepickerPluginInstance, this.calendar);
      
      this.setAdditionalClass();
    }
  }

  initEndInput() {
    this.endInput.eventListenerBind(
      "click",
      this.handleEndInputClick.bind(this)
    );
  }

  handleEndInputClick() {
    this.datepickerPluginInstance.show();
  }

  setAdditionalClass() {
    this.datepickerPluginInstance.$datepicker.addClass("datepicker--smaller");
  }
}

export default FilterDate;
