function hisobla() {
  var X = parseFloat(document.getElementById("X").value);
  var A = parseFloat(document.getElementById("A").value);
  var Y = parseFloat(document.getElementById("Y").value);
  var B = parseFloat(document.getElementById("B").value);

  if (isNaN(X) || isNaN(A) || isNaN(Y) || isNaN(B)) {
    document.getElementById("natija").innerText =
      "Iltimos, to'g'ri sonlarni kiriting.";
    return;
  }

  var jamiSavdo = X * A + Y * B;

  document.getElementById("natija").innerText =
    "Abdulaziz jami " + jamiSavdo.toFixed(2) + " so'mga savdo qildi.";
  console.log(
    "Abdulaziz jami " + jamiSavdo.toFixed(2) + " so'mga savdo qildi."
  );
}
