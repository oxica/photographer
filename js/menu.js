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

//

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    // Змінено селектор: знаходимо абсолютно всі теги "a" всередині мобільного меню
    menuLinks: document.querySelectorAll(".mob-menu-list a"), 
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  // Перебираємо кожне посилання мобільного меню
  refs.menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      refs.menu.classList.add("is-hidden");
    });
  });

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
