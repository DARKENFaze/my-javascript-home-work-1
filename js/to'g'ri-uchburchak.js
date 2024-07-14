function hisobla() {
  var a = parseFloat(document.getElementById("katetA").value);
  var b = parseFloat(document.getElementById("katetB").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri sonlar kiriting.";
    return;
  }

  var c = Math.sqrt(a * a + b * b);
  var perimetri = a + b + c;

  document.getElementById("natijalar").innerText =
    "Gipotenuza: " + c + " | Perimetri: " + perimetri;
  console.log("Gipotenuza: " + c + " | Perimetri: " + perimetri);
}
