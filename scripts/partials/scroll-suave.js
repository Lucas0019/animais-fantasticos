function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  scrollToSection = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    // Primeita Forma - scrollIntoView({})
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    // Forma alternativa - scrollTo({})
    // const topSection = section.offsetTop
    // window.scrollTo({
    //   top: topSection,
    //   behavior: 'smooth'
    // })
  };

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();
