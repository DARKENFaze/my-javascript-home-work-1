function calculateTime() {
  // Inputdan soniyalarni olish
  const seconds = document.getElementById("seconds").value;

  // To'liq soat va qoldiq soniyalarni hisoblash
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;

  // Natijani chiqarish
  document.getElementById(
    "result"
  ).textContent = `Kun boshidan to'liq ${hours} soat va ${remainingSeconds} sekund o'tdi.`;
}
