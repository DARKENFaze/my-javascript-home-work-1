function hisobla() {
  var x1 = parseFloat(document.getElementById("x1").value);
  var y1 = parseFloat(document.getElementById("y1").value);
  var x2 = parseFloat(document.getElementById("x2").value);
  var y2 = parseFloat(document.getElementById("y2").value);

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    document.getElementById("natija").innerText =
      "Iltimos, to'g'ri sonlar kiriting.";
    return;
  }

  var L = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  document.getElementById("natija").innerText = "Masofa L: " + L;
  console.log("Masofa L: " + L);
}
