const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const errorMessage = document.querySelector(".error-message"); // Mensaje de error

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value.trim();

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    // Marcar tarea como completada
    p.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
    errorMessage.style.display = "none"; // Ocultar mensaje de error si todo está bien
  } else {
    errorMessage.style.display = "block"; // Mostrar mensaje de error si el input está vacío
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
