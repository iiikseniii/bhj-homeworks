const menuLinks = Array.from(document.querySelectorAll(".menu__link"));
const subMenu = menuLinks.filter(link => link.nextElementSibling !== null);

subMenu.forEach(function(link) {
  link.onclick = function() {
    let clickEl = link;
    subMenu.forEach(function(link) {
      if (link === clickEl) {
        link.nextElementSibling.classList.add("menu_active");
      } 
    })
    return false;
  }
})
