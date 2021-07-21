function initAnimationScroll() {
    const sections = document.querySelectorAll('.js-scroll')

    if(sections.length) {
      const windowPart = window.innerHeight * 0.5
  
      function animateScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top
          const isSectionView = (sectionTop - windowPart) < 0
          if(isSectionView) {
            section.classList.add('active')
          }
        })
      }
  
      animateScroll()
  
      window.addEventListener('scroll', animateScroll)
    }
}

initAnimationScroll()