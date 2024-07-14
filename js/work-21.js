function hisobla() {
  var number = parseInt(document.getElementById("number").value);

  if (number <= 999) {
    document.getElementById("natija").innerText =
      "Iltimos, 999 dan katta son kiriting.";
    return;
  }

  var mingliklar = Math.floor(number / 1000) % 10;

  document.getElementById("natija").innerText =
    "Mingliklar xonasidagi son: " + mingliklar;
  console.log("Mingliklar xonasidagi son: " + mingliklar);
}
