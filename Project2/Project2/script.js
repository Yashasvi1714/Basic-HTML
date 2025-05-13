// Retrieve contacts from localStorage or initialize an empty array
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Function to add a new contact
function addContact() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var cityInput = document.getElementById("city");

  // Create a new contact object
  var contact = {
    name: nameInput.value,
    email: emailInput.value,
    city: cityInput.value
  };

  // Add the contact to the list
  contacts.push(contact);

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
  cityInput.value = "";

  // Refresh the contact table
  refreshContactTable();

  // Store the updated contacts in localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to delete a contact row
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  var rowIndex = row.rowIndex;

  // Remove the contact from the list
  contacts.splice(rowIndex - 1, 1);

  // Remove the row from the table
  row.parentNode.removeChild(row);

  // Store the updated contacts in localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));

  // Refresh the contact table
  refreshContactTable();
}

// Function to delete selected contacts
function deleteSelectedContacts() {
  var checkboxes = document.querySelectorAll("#contact-table-body input[type='checkbox']:checked");

  checkboxes.forEach(function(checkbox) {
    var rowIndex = checkbox.getAttribute("data-index");
    var row = checkbox.parentNode.parentNode;

    // Remove the contact from the list
    contacts.splice(rowIndex - 1, 1);

    // Remove the row from the table
    row.parentNode.removeChild(row);
  });

  // Store the updated contacts in localStorage
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to refresh the contact table
function refreshContactTable() {
  var tableBody = document.getElementById("contact-table-body");

  // Clear the table body
  tableBody.innerHTML = "";

  // Add contacts to the table
  contacts.forEach(function(contact, index) {
    var row = document.createElement("tr");

    // Add select checkbox column
    var selectCell = document.createElement("td");
    var selectCheckbox = document.createElement("input");
    selectCheckbox.type = "checkbox";
    selectCheckbox.setAttribute("data-index", index);
    selectCell.appendChild(selectCheckbox);
    row.appendChild(selectCell);

    var nameCell = document.createElement("td");
    nameCell.textContent = contact.name;
    row.appendChild(nameCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = contact.email;
    row.appendChild(emailCell);

    var cityCell = document.createElement("td");
    cityCell.textContent = contact.city;
    row.appendChild(cityCell);

    var deleteCell = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "button delete-button";

    deleteButton.addEventListener("click", function() {
      deleteRow(this);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  });
}

// Function to search contacts by city
function searchByCity() {
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  var tableBody = document.getElementById("contact-table-body");
  var rows = tableBody.getElementsByTagName("tr");
  var contactsFound = false;

  for (var i = 0; i < rows.length; i++) {
    var cityCell = rows[i].getElementsByTagName("td")[3];
    var city = cityCell.textContent.toLowerCase();

    if (city === searchInput) {
      rows[i].style.display = "";
      contactsFound = true;
    } else {
      rows[i].style.display = "none";
    }
  }

  if (!contactsFound) {
    var noContactsRow = document.getElementById("no-contacts-row");

    if (!noContactsRow) {
      noContactsRow = document.createElement("tr");
      noContactsRow.id = "no-contacts-row";

      var noContactsCell = document.createElement("td");
      noContactsCell.setAttribute("colspan", "5");
      noContactsCell.textContent = "No Contacts are found.";

      noContactsRow.appendChild(noContactsCell);
      tableBody.appendChild(noContactsRow);
    } else {
      noContactsRow.style.display = "";
    }
  } else {
    var noContactsRow = document.getElementById("no-contacts-row");

    if (noContactsRow) {
      noContactsRow.style.display = "none";
    }
  }
}

// Attach event listener to the Add Contact button
document.getElementById("add-contact-button").addEventListener("click", addContact);

// Attach event listener to the Delete Selected button
document.getElementById("delete-selected-button").addEventListener("click", deleteSelectedContacts);

// Attach event listener to the Search button
document.getElementById("search-button").addEventListener("click", searchByCity);

// Refresh the contact table on page load
refreshContactTable();
