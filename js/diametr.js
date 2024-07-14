// 2
function hisobla() {
  var d = parseFloat(document.getElementById("diametr").value);
  var pi = 3.14;

  if (isNaN(d)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri son kiriting.";
    return;
  }

  var uzunligi = pi * d;

  document.getElementById("natijalar").innerText =
    "Aylanani uzunligi: " + uzunligi;
  console.log("Aylanani uzunligi: " + uzunligi);
}
