

document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const cookieAcceptBtn = document.getElementById("cookie-accept-btn");

  // Перевіряємо, чи користувач вже приймав кукі раніше
  if (!localStorage.getItem("cookie-accepted")) {
    // Якщо ні — показуємо банер через 1 секунду після завантаження сторінки
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 1000);
  }

  // Логіка кліку на кнопку "Akceptuję"
  if (cookieAcceptBtn && cookieBanner) {
    cookieAcceptBtn.addEventListener("click", () => {
      // Записуємо в пам'ять браузера, що згоду отримано
      localStorage.setItem("cookie-accepted", "true");
      // Плавненько ховаємо банер назад до низу
      cookieBanner.classList.remove("show");
    });
  }
});

