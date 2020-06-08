import TextInput from "./text-input";

$(() => {
  const textInputs = $(".js-text-input");

  textInputs.each((i, val) => {
    const isMaskedTextInput = $(val).hasClass("text-input_masked");
    if (isMaskedTextInput) {
      new TextInput(val);
    }
  });
});
