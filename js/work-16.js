// Collecting data from the table
const table = document.querySelector("table");
const rows = table.querySelectorAll("tr");

const headers = Array.from(rows[0].children).map((td) => td.textContent);
const descriptions = Array.from(rows[1].children).map((td) => td.textContent);

// Outputting to console
console.log("Headers:", headers);
console.log("Descriptions:", descriptions);
