function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    //O primeito conteudo sempre com a classe de active tab
    tabContent[0].classList.add("active");

    // Adicioanr e Remover a classe Active
    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove("active"));
      tabContent[index].classList.add("active");
    }

    // Adicionar o evento click no menu de abas
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav()