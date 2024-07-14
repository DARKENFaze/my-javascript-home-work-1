// 1
function hisobla() {
  var a = parseFloat(document.getElementById("tomonA").value);
  var b = parseFloat(document.getElementById("tomonB").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri sonlar kiriting.";
    return;
  }

  var yuzasi = a * b;
  var perimetri = 2 * (a + b);

  document.getElementById("natijalar").innerText =
    "Yuzasi: " + yuzasi + " | Perimetri: " + perimetri;
  console.log("Yuzasi: " + yuzasi + " | Perimetri: " + perimetri);
}