const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  textOutput.textContent = e.currentTarget.value;
});

console.log(textInput.placeholder);

if ((textInput.placeholder = "")) {
}
