import DatePicker from "../date-picker/date-picker";
import DateInput from "../date-input/date-input";

class FilterDate {
  constructor(calendar) {
    this.$calendar = $(calendar);

    this.findDOMElements();
    this.initCalendar();
  }

  findDOMElements() {
    this.input = new DateTe(this.$calendar, "entire");
    this.$input = this.input.getElement();
    this.isRange = false;

    if (this.$input.length === 0) {
      this.isRange = true;
      this.startInput = new DateInput(this.$calendar, "start");
      this.$startInput = this.startInput.getElement();
      this.endInput = new DateInput(this.$calendar, "end");
      this.$endInput = this.endInput.getElement();
      this.datepickerPluginInstance = this.$startInput
        .datepicker()
        .data("datepicker");
    }
  }

  initCalendar() {
    if (this.isRange) {
      const { $startInput, $endInput } = this;

      $startInput.datepicker({
        range: true,
        multipleDatesSeparator: " - ",
        language: "ru",
        clearButton: true,
      });

      $startInput.datepicker({
        onSelect(formattedDate) {
          const inputValues = formattedDate.split("-");
          const [startValue, secondValue] = inputValues;
          $startInput.val(startValue);
          $endInput.val(secondValue);
        },
      });

      new DatePicker(
        this.$startInput.datepicker().data("datepicker"),
        this.$calendar
      );

      this.initEndInput();
    } else {
      this.$input.datepicker({
        range: true,
        multipleDatesSeparator: " - ",
        language: "ru",
        dateFormat: "dd M",
        clearButton: true,
      });

      this.datepickerPluginInstance = this.$input
        .datepicker()
        .data("datepicker");
      new DatePicker(this.datepickerPluginInstance, this.$calendar);

      this.setAdditionalClass();
    }
  }

  initEndInput() {
    this.endInput.addEventListener(
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
