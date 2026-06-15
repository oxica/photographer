document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".review-card");
  const nextBtn = document.querySelector(".btn-next");
  const prevBtn = document.querySelector(".btn-prev");

  let currentIndex = 0;

  // Функція, яка визначає, скільки карток видимі одночасно
  function getVisibleCardsCount() {
    if (window.innerWidth <= 600) return 1;  // Смартфон
    if (window.innerWidth <= 992) return 2;  // Планшет
    return 3;                                // Комп'ютер
  }

  function updateCarousel() {
    const visibleCards = getVisibleCardsCount();
    const maxIndex = cards.length - visibleCards;

    // Обмежуємо індекс, щоб не гортати в пустоту в кінці
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    }

    // Вираховуємо ширину однієї картки у відсотках або пікселях
    const cardWidth = cards[0].getBoundingClientRect().width;
    
    // Зсуваємо стрічку
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Опціонально: робимо стрілки напівпрозорими, якщо гортати далі нікуди
    prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
    nextBtn.style.opacity = currentIndex === maxIndex ? "0.3" : "1";
  }

  // Події для кнопок
  nextBtn.addEventListener("click", () => {
    const maxIndex = cards.length - getVisibleCardsCount();
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Перераховуємо карусель при зміні розміру екрана (наприклад, перевертанні телефона)
  window.addEventListener("resize", updateCarousel);

  // Ініціалізація при першому завантаженні
  updateCarousel();
});

