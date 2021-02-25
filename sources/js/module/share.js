var $ = require( "jquery" );

const nav = document.querySelector('.nav-right') ,
      hamburger = document.querySelector('.hamburger'),
      cross = document.querySelector('.hamburger--spin'),
      preloader = document.querySelector('.preloader'),
      artistLink = $('.has-children a')

      hamburger.onclick = function () {  
          nav.classList.toggle('nav-right__open');
          cross.classList.toggle('is-active')
      };

      console.log(artistLink)

      if(artistLink) {
       $(artistLink).click(function(e) {
         e.preventDefault();
         console.log(e.target)
       })
      }

      


    // handle preloader
      window.addEventListener('load', () => {
        preloader.classList.add('preloader__hide')
    });

    // lazyload

    var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
      });