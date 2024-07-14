function hisobla() {
  var r1 = parseFloat(document.getElementById("radius1").value);
  var r2 = parseFloat(document.getElementById("radius2").value);
  var pi = 3.14;

  if (isNaN(r1) || isNaN(r2) || r1 <= r2) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri sonlar kiriting va r1 > r2 bo'lsin.";
    return;
  }

  var S1 = pi * r1 * r1;
  var S2 = pi * r2 * r2;
  var S = S1 - S2;

  document.getElementById("natijalar").innerText =
    "S1: " + S1 + " | S2: " + S2 + " | S: " + S;
  console.log("S1: " + S1 + " | S2: " + S2 + " | S: " + S);
}
