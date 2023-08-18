const form = document.getElementById("addItem");
const itemList = document.getElementById("items");

//handle adding new items
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value;
  if (!input) return; //prevent creating a  blank item

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(input));
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-sm btn-danger float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
});

//handle removing items

itemList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn-danger")) return;

  if (confirm("Are you sure, you want to delete this item?")) {
    const li = e.target.parentElement;
    itemList.removeChild(li);
  }
});
