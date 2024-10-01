// for getting the value of input field
function getInputField(id) {
  const noakhaliInputField = document.getElementById(id);
  const inputNumber = parseFloat(noakhaliInputField.value);
  return inputNumber;
}
// forgetting the value of any text field
function getTextValue(id) {
  const textValue = document.getElementById(id);
  const textValueNumber = parseFloat(textValue.innerText);
  return textValueNumber;
}
function getToggledButton(id) {
  document.getElementById("donation-card").classList.add("hidden");
  document.getElementById("history-data").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
