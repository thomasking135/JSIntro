const { hello } = require("./challenge/variables");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("greeting");
  console.log(hello);
  el.innerHTML = hello;
});
