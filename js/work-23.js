function calculateHours() {
  // Inputdan soniyalarni olish
  const seconds = document.getElementById("seconds").value;

  // To'liq soatlarni hisoblash
  const hours = Math.floor(seconds / 3600);

  // Natijani chiqarish
  document.getElementById(
    "result"
  ).textContent = `Kun boshidan to'liq ${hours} soat o'tdi.`;
}
