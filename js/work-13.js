function hisobla() {
  var Tf = parseFloat(document.getElementById("Tf").value);

  if (isNaN(Tf)) {
    document.getElementById("natija").innerText =
      "Iltimos, to'g'ri son kiriting.";
    return;
  }

  var Tc = ((Tf - 32) * 5) / 9;

  document.getElementById("natija").innerText =
    "Tc (Selsiy gradus): " + Tc.toFixed(2);
  console.log("Tc (Selsiy gradus): " + Tc);
}
