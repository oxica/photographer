// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    // Знаходимо всі якірні посилання всередині нашого меню
    menuLinks: document.querySelectorAll("[data-menu] a"), 
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  // Перебираємо кожне посилання і кажемо: "при кліку — сховай меню"
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      refs.menu.classList.add("is-hidden");
    });
  });

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
