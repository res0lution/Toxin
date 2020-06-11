import TextField from "./text-input";

$(() => {
  const $textInputs = $(".js-text-input");

  $textInputs.each((i, item) => {
    const isMaskedTextInput = $(item).hasClass("text-input_masked");

    if (isMaskedTextInput) {
      new TextInput(item);
    }
  });
});
