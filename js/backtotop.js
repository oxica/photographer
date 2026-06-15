document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollToTopBtn");

  // Функція перевірки прокрутки сторінки
  window.addEventListener("scroll", () => {
    // Якщо прокрутили більше ніж на 400px, додаємо клас 'show', інакше — прибираємо
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // Подія при кліку на кнопку
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Робить прокрутку плавною
    });
  });
});

