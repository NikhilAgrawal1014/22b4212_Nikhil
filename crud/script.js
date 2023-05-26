document.getElementById("activity-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  // Create a new row in the table
  var table = document.getElementById("activity-table").getElementsByTagName("tbody")[0];
  var row = table.insertRow(-1);
  var nameCell = row.insertCell(0);
  var descriptionCell = row.insertCell(1);
  var deleteCell = row.insertCell(2);

  // Set the cell values
  nameCell.textContent = name;
  descriptionCell.textContent = description;
  deleteCell.innerHTML = '<button class="delete-btn">Delete</button>';

  // Clear the form inputs
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
});

document.getElementById("activity-table").addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    var row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
});
