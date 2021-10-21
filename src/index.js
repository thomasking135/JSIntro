const { welcome } = require("./challenge/variables");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("greeting");
  console.log(welcome);
  el.innerHTML = welcome;
});
