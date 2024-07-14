function hisobla() {
  var x = parseFloat(document.getElementById("x").value);

  if (isNaN(x)) {
    document.getElementById("natija").innerText =
      "Iltimos, to'g'ri son kiriting.";
    return;
  }

  var y = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x - 3, 3) + 2;

  document.getElementById("natija").innerText = "y qiymati: " + y;
  console.log("y qiymati: " + y);
}
