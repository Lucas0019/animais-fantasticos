function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeItem = "active"

  if (accordionList.length) {
    accordionList[0].classList.add(activeItem);
    accordionList[0].nextElementSibling.classList.add(activeItem);
    function activeAccordion() {
      this.classList.toggle(activeItem);
      this.nextElementSibling.classList.toggle(activeItem);
    }
  
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion()