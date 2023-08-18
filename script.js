const submitBtn = document.getElementById("submit");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

//handle adding new items
submitBtn.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const desc = document.getElementById("desc").value;
  if (!input || !desc) {
    alert("Please enter item name & description!");
    return;
  }

  $("#addItemModal").modal("hide"); //hide modal

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(input));
  const description = document.createElement("p");
  description.className = "item-description";
  description.appendChild(document.createTextNode(desc));
  li.appendChild(description);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-sm btn-danger float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  //reset form
  document.getElementById("input").value = "";
  document.getElementById("desc").value = "";
});

//handle removing items
itemList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn-danger")) return;

  if (confirm("Are you sure, you want to delete this item?")) {
    const li = e.target.parentElement;
    itemList.removeChild(li);
  }
});

//filter items
filter.addEventListener("keyup", (e) => {
  const searchItem = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(searchItem) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
