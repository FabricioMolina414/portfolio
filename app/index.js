$(document).ready(function() {

// Carrousel

$(".carrousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true
  });


// Código del menú 

  // Declaración de variables
  let $menu = $(".header__menu--button");
  let $navbar = $(".navbar");

  $menu.click(() => {
    $menu.toggleClass("navbar--close-button");
    $navbar.toggleClass("navbar--emabled animate__animated animate__slideInDown");
  })



});

