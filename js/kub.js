function hisobla() {
  var a = parseFloat(document.getElementById("tomon").value);

  if (isNaN(a)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri son kiriting.";
    return;
  }

  var hajmi = a * a * a;
  var tolasi = 6 * (a * a);

  document.getElementById("natijalar").innerText =
    "Hajmi: " + hajmi + " | To'la sirti: " + tolasi;
  console.log("Hajmi: " + hajmi + " | To'la sirti: " + tolasi);
}
