console.log('shared between all pages / subpages')

const nav = document.querySelector('.nav-right') ,
      hamburger = document.querySelector('.hamburger')

      hamburger.onclick = function () {  
          nav.classList.toggle('nav-right__open');
      };