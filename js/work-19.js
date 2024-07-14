function hisobla() {
  var number = document.getElementById("number").value;

  if (number.length !== 3) {
    document.getElementById("natija").innerText =
      "Iltimos, uch xonali son kiriting.";
    return;
  }

  var birliklar = number % 10;
  var onliklar = Math.floor((number % 100) / 10);
  var yuzliklar = Math.floor(number / 100);

  var result =
    yuzliklar.toString() + birliklar.toString() + onliklar.toString();

  document.getElementById("natija").innerText = "Almashtirilgan son: " + result;
  console.log("Almashtirilgan son: " + result);
}
