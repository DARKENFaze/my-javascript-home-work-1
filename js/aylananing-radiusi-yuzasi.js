function hisobla() {
  var L = parseFloat(document.getElementById("uzunlik").value);
  var pi = 3.14;

  if (isNaN(L)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri son kiriting.";
    return;
  }

  var R = L / (2 * pi);
  var S = pi * R * R;

  document.getElementById("natijalar").innerText =
    "Radiusi: " + R + " | Yuzasi: " + S;
  console.log("Radiusi: " + R + " | Yuzasi: " + S);
}
