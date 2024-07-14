function hisobla() {
  var a = parseFloat(document.getElementById("sonA").value);
  var b = parseFloat(document.getElementById("sonB").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri sonlar kiriting.";
    return;
  }

  var ortaArifmetik = (a + b) / 2;

  document.getElementById("natijalar").innerText =
    "O'rta arifmetik: " + ortaArifmetik;
  console.log("O'rta arifmetik: " + ortaArifmetik);
}
