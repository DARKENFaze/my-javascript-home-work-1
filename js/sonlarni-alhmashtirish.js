function almashtir() {
  var A = parseFloat(document.getElementById("A").value);
  var B = parseFloat(document.getElementById("B").value);
  var C = parseFloat(document.getElementById("C").value);

  if (isNaN(A) || isNaN(B) || isNaN(C)) {
    document.getElementById("natijalar").innerText =
      "Iltimos, to'g'ri sonlar kiriting.";
    return;
  }

  var temp = A;
  A = B;
  B = C;
  C = temp;

  document.getElementById("natijalar").innerText =
    "A yangi qiymati: " +
    A +
    "\nB yangi qiymati: " +
    B +
    "\nC yangi qiymati: " +
    C;
  console.log("A yangi qiymati: " + A);
  console.log("B yangi qiymati: " + B);
  console.log("C yangi qiymati: " + C);
}
