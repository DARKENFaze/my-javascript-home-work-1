function hisobla() {
  var a = parseFloat(document.getElementById("tomonA").value);
  var b = parseFloat(document.getElementById("tomonB").value);
  var c = parseFloat(document.getElementById("tomonC").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri sonlar kiriting.";
    return;
  }

  var hajmi = a * b * c;
  var tolasi = 2 * (a * b + b * c + a * c);

  document.getElementById("natijalar").innerText =
    "Hajmi: " + hajmi + " | To'la sirti: " + tolasi;
  console.log("Hajmi: " + hajmi + " | To'la sirti: " + tolasi);
}
