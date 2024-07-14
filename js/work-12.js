function hisobla() {
  var A = parseFloat(document.getElementById("A").value);

  if (isNaN(A)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri son kiriting.";
    return;
  }

  var A3 = Math.pow(A, 3);
  var A6 = Math.pow(A, 6);
  var A9 = Math.pow(A, 9);
  var A15 = Math.pow(A, 15);

  document.getElementById("natijalar").innerText =
    "A^3: " + A3 + "\nA^6: " + A6 + "\nA^9: " + A9 + "\nA^15: " + A15;
  console.log("A^3: " + A3);
  console.log("A^6: " + A6);
  console.log("A^9: " + A9);
  console.log("A^15: " + A15);
}
