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

  var narxShokolad = X * A;
  var narxKonfet = Y * B;

  document.getElementById("natija").innerText =
    "1 kg shokolad " +
    (narxShokolad / X).toFixed(2) +
    " so'm, 1 kg konfet " +
    (narxKonfet / Y).toFixed(2) +
    " so'm turadi.";
  console.log(
    "1 kg shokolad " +
      (narxShokolad / X).toFixed(2) +
      " so'm, 1 kg konfet " +
      (narxKonfet / Y).toFixed(2) +
      " so'm turadi."
  );
}
