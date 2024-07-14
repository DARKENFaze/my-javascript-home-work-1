function hisobla() {
  var number = document.getElementById("number").value;

  if (number.length !== 3) {
    document.getElementById("natija").innerText =
      "Iltimos, uch xonali son kiriting.";
    return;
  }

  var birliklar = number % 10;
  var onliklar = Math.floor((number % 100) / 10);

  document.getElementById("natija").innerText =
    "Birliklar xonasi raqami: " +
    birliklar +
    "\nO'nliklar xonasi raqami: " +
    onliklar;
  console.log("Birliklar xonasi raqami: " + birliklar);
  console.log("O'nliklar xonasi raqami: " + onliklar);
}
