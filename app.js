let inputForm = document.querySelector("#table-form");
let input = document.querySelector("#input-button");
let table = document.querySelector(".time-table");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let tableof = input.value;

  table.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const message = `${tableof} X ${i} = ${tableof * i}`;
    table.innerHTML += `${message} <br>`;
  }
});
