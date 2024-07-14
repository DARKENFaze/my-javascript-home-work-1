function calculateMinutes() {
  // Inputdan soniyalarni olish
  const seconds = document.getElementById("seconds").value;

  // To'liq minutlarni hisoblash
  const minutes = Math.floor(seconds / 60);

  // Natijani chiqarish
  document.getElementById(
    "result"
  ).textContent = `Kun boshidan to'liq ${minutes} minut o'tdi.`;
}
