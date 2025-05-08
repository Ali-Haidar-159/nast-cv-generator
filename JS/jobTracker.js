document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let position = document.getElementById("position").value;
    let company = document.getElementById("company").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    let table = document.getElementById("jobTable").querySelector("tbody");

    let row = table.insertRow();
    row.insertCell(0).innerText = position;
    row.insertCell(1).innerText = company;
    row.insertCell(2).innerText = date;
    row.insertCell(3).innerText = status;

    // Clear form
    document.getElementById("jobForm").reset();
  });