var $ = require("jquery");

window.addEventListener('load', () => {
  
  const nav = document.querySelector('.nav-right'),
    hamburger = document.querySelector('.hamburger'),
    cross = document.querySelector('.hamburger--spin'),
    preloader = document.querySelector('.preloader');

  // handle preloader
  preloader.classList.add('preloader__hide')

  hamburger.onclick = function () {
    nav.classList.toggle('nav-right__open');
    cross.classList.toggle('is-active')
  };

  // lazyload
  var lazyLoadInstance = new LazyLoad({});

});

