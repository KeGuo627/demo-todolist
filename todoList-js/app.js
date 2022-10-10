const addButton = document.getElementById("addButton");
const input = document.getElementById("input");

const list = document.createElement("ol");
addButton.addEventListener("click", () => {
  const todo = input.value;
  console.log(todo);
  input.value = "";
  //item input
  const item = document.createElement("li");
  item.textContent = todo;
  //del button
  const delButton = document.createElement("button");
  delButton.innerText = "delete";
  item.appendChild(delButton);

  list.appendChild(item);

  delButton.addEventListener("click", () => {
    list.removeChild(item);
    //list.removeChild(delButton);
  });
  item.addEventListener("click", () => {
    item.style.textDecoration = "line-through";
  });
});
document.body.appendChild(list);
