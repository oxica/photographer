document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  const statsSection = document.querySelector(".stats-section");
  const duration = 2000; // Час анімації в мілісекундах (2 секунди)

  function startCounting(counter) {
    const target = +counter.getAttribute("data-target");
    const startTime = performance.now();

    function updateNumber(now) {
      const elapsedTime = now - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Прогрес від 0 до 1

      // Вираховуємо поточне число
      const currentValue = Math.floor(progress * target);
      counter.innerText = currentValue;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        counter.innerText = target; // Гарантуємо точне кінцеве число
      }
    }

    requestAnimationFrame(updateNumber);
  }

  // Створюємо спостерігач (Observer) за скролом
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Якщо секція з'явилася на екрані хоча б частково
      if (entry.isIntersecting) {
        counters.forEach(counter => startCounting(counter));
        observer.unobserve(entry.target); // Вимикаємо спостереження, щоб анімація не повторювалася при кожному скролі
      }
    });
  }, { threshold: 0.2 }); // Спрацює, коли 20% секції видно на екрані

  if (statsSection) {
    observer.observe(statsSection);
  }
});

