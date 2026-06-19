// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector(".carousel-track");
//   const cards = document.querySelectorAll(".review-card");
//   const nextBtn = document.querySelector(".btn-next");
//   const prevBtn = document.querySelector(".btn-prev");

//   let currentIndex = 0;

//   // Функція, яка визначає, скільки карток видимі одночасно
//   function getVisibleCardsCount() {
//     if (window.innerWidth <= 600) return 1;  // Смартфон
//     if (window.innerWidth <= 992) return 2;  // Планшет
//     return 3;                                // Комп'ютер
//   }

//   function updateCarousel() {
//     const visibleCards = getVisibleCardsCount();
//     const maxIndex = cards.length - visibleCards;

//     // Обмежуємо індекс, щоб не гортати в пустоту в кінці
//     if (currentIndex > maxIndex) {
//       currentIndex = maxIndex;
//     }
//     if (currentIndex < 0) {
//       currentIndex = 0;
//     }

//     // Вираховуємо ширину однієї картки у відсотках або пікселях
//     const cardWidth = cards[0].getBoundingClientRect().width;
    
//     // Зсуваємо стрічку
//     track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

//     // Опціонально: робимо стрілки напівпрозорими, якщо гортати далі нікуди
//     prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
//     nextBtn.style.opacity = currentIndex === maxIndex ? "0.3" : "1";
//   }

//   // Події для кнопок
//   nextBtn.addEventListener("click", () => {
//     const maxIndex = cards.length - getVisibleCardsCount();
//     if (currentIndex < maxIndex) {
//       currentIndex++;
//       updateCarousel();
//     }
//   });

//   prevBtn.addEventListener("click", () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateCarousel();
//     }
//   });

//   // Перераховуємо карусель при зміні розміру екрана (наприклад, перевертанні телефона)
//   window.addEventListener("resize", updateCarousel);

//   // Ініціалізація при першому завантаженні
//   updateCarousel();
// });


// **************************************************************************************************

// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector(".carousel-track");
//   const cards = document.querySelectorAll(".review-card");
//   const nextBtn = document.querySelector(".btn-next");
//   const prevBtn = document.querySelector(".btn-prev");

//   let currentIndex = 0;

//   // Zmienne do obsługi dotyku
//   let touchStartX = 0;
//   let touchEndX = 0;

//   // Funkcja określająca, ile kart jest widocznych
//   function getVisibleCardsCount() {
//     if (window.innerWidth <= 600) return 1;  // Telefon
//     if (window.innerWidth <= 992) return 2;  // Tablet
//     return 3;                                // Komputer
//   }

//   function updateCarousel() {
//     const visibleCards = getVisibleCardsCount();
//     const maxIndex = cards.length - visibleCards;

//     if (currentIndex > maxIndex) currentIndex = maxIndex;
//     if (currentIndex < 0) currentIndex = 0;

//     const cardWidth = cards[0].getBoundingClientRect().width;
//     track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

//     // Wizualne wyłączenie strzałek na końcach
//     prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
//     nextBtn.style.opacity = currentIndex === maxIndex ? "0.3" : "1";
//   }

//   // Funkcja obsługująca zmianę slajdu (w prawo lub w lewo)
//   function handleGesture() {
//     const swipeThreshold = 50; // Minimalna odległość w pikselach, aby uznać ruch za swipe
//     const maxIndex = cards.length - getVisibleCardsCount();

//     // Przesunięcie w lewo (palec jedzie w lewo -> następny slajd)
//     if (touchStartX - touchEndX > swipeThreshold) {
//       if (currentIndex < maxIndex) {
//         currentIndex++;
//         updateCarousel();
//       }
//     }

//     // Przesunięcie w prawo (palec jedzie w prawo -> poprzedni slajd)
//     if (touchEndX - touchStartX > swipeThreshold) {
//       if (currentIndex > 0) {
//         currentIndex--;
//         updateCarousel();
//       }
//     }
//   }

//   // --- REJESTRACJA ZDARZEŃ DOTYKOWYCH (dla smartfonów/tabletów) ---
//   track.addEventListener('touchstart', e => {
//     // Zapamiętujemy pozycję X startu dotyku
//     touchStartX = e.changedTouches[0].screenX;
//   }, { passive: true });

//   track.addEventListener('touchend', e => {
//     // Zapamiętujemy pozycję X końca dotyku
//     touchEndX = e.changedTouches[0].screenX;
//     // Sprawdzamy gest
//     handleGesture();
//   }, { passive: true });


//   // --- REJESTRACJA ZDARZEŃ DLA STRZAŁEK ---
//   nextBtn.addEventListener("click", () => {
//     const maxIndex = cards.length - getVisibleCardsCount();
//     if (currentIndex < maxIndex) {
//       currentIndex++;
//       updateCarousel();
//     }
//   });

//   prevBtn.addEventListener("click", () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateCarousel();
//     }
//   });

//   window.addEventListener("resize", updateCarousel);
//   updateCarousel();
// });



document.addEventListener("DOMContentLoaded", () => {
  // 1. Знаходимо ВСІ блоки з класом .custom-carousel на сторінці
  const carousels = document.querySelectorAll(".custom-carousel");

  // Якщо каруселей на цій сторінці взагалі немає (наприклад, на деяких підсторінках)
  // скрипт просто тихо зупиняє роботу, не викликаючи помилок у консолі
  if (carousels.length === 0) {
    return;
  }

  // 2. Запускаємо цикл для кожної знайденої каруселі
  carousels.forEach((carousel) => {
    // Шукаємо елементи ТІЛЬКИ всередині цієї конкретної каруселі
    const nextBtn = carousel.querySelector(".slider-next-btn");
    const prevBtn = carousel.querySelector(".slider-prev-btn");
    const sliderContainer = carousel.querySelector(".opinie-slider");

    // Якщо всередині каруселі не вистачає кнопок або контейнера — пропускаємо її
    if (!nextBtn || !prevBtn || !sliderContainer) return;

    // 3. Функція для розрахунку ширини прокрутки (динамічно бере розмір однієї картки)
    const getScrollStep = () => {
      const firstCard = sliderContainer.querySelector(".oferta-card") || sliderContainer.firstElementChild;
      if (firstCard) {
        // Беремо чисту ширину картки + відступ (gap)
        const cardWidth = firstCard.getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(sliderContainer).gap) || 30;
        return cardWidth + gap;
      }
      return 350; // Стандартний крок, якщо картку раптом не знайдено
    };

    // 4. Логіка кліку на кнопку "Вперед" (▶)
    nextBtn.addEventListener("click", () => {
      const scrollStep = getScrollStep();
      const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;

      // Якщо докрутили до кінця — повертаємося на початок, інакше гортаємо вперед
      if (sliderContainer.scrollLeft >= maxScroll - 5) {
        sliderContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    });

    // 5. Логіка кліку на кнопку "Назад" (◀)
    prevBtn.addEventListener("click", () => {
      const scrollStep = getScrollStep();

      // Jeśli jesteśmy na początku — przewijamy na sam koniec, w przeciwnym razie w tył
      if (sliderContainer.scrollLeft <= 5) {
        const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
        sliderContainer.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        sliderContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
      }
    });
  });
});

