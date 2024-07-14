function hisobla() {
  var number = document.getElementById("number").value;

  if (number.length !== 3) {
    document.getElementById("natija").innerText =
      "Iltimos, uch xonali son kiriting.";
    return;
  }

  var sum = 0;
  for (var i = 0; i < 3; i++) {
    sum += parseInt(number.charAt(i), 10);
  }

  document.getElementById("natija").innerText = "Raqamlar yig'indisi: " + sum;
  console.log("Raqamlar yig'indisi: " + sum);
}
