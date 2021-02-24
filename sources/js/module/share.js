console.log('shared between all pages / subpages')

const nav = document.querySelector('.nav-right') ,
      hamburger = document.querySelector('.hamburger'),
      cross = document.querySelector('.hamburger--spin'),
      preloader = document.querySelector('.preloader')

      hamburger.onclick = function () {  
          nav.classList.toggle('nav-right__open');
          cross.classList.toggle('is-active')
      };


      window.addEventListener('load', () => {
        preloader.classList.add('preloader__hide')
    });