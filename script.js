const input = document.querySelector(".input");
const output = document.querySelector(".output");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");
window.console.log(jsonlint);
btn.addEventListener("click", () => {
  let res = undefined;

  try {
    res = jsonlint.parse(input.value);
  } catch (err) {
    message.innerHTML =
      "This is invalid JSON data. Further info below:" +
      "<br><br>" +
      err.message;
    message.classList.remove("success");
    message.classList.add("visible", "error");
  }

  if (res) {
    output.value = JSON.stringify(JSON.parse(input.value), null, 2);
    message.textContent = "This is valid JSON data.";
    message.classList.remove("error");
    message.classList.add("visible", "success");
  }
});
