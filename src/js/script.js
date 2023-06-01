$(document).ready(function(){
    
      const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    $('ul li a').click(function() {
      if ( $('.menu').hasClass('active')) {
       $('.menu').removeClass('active');
      }
   }) 
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    

    $("a[href^=#]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $("form").each(function () {
      $(this).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          checkbox: "required",
          email: {
            required: true,
            email: true
          },

        },
        messages: {
          name: {
            required: "Please enter your name",
            minlength: jQuery.validator.format("Enter at least {0} characters!")
          },
          email: {
            required: "Please enter your email",
            email: "Invalid email address"
          },
          checkbox: {
            required: "Please check the box"
          }
        },
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: $(form).attr('action'),
            data: $(form).serialize()
          }).done(function () {
            $(form).find("input").val("");
           
            $(form).trigger('reset');
          });
          return false;
        }
      });
    });
    
      const header = document.querySelector('header');

      document.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let scrollHeight = window.innerHeight;

        if (scrollY > scrollHeight) {
          header.style.backgroundColor = '#353b41';
        } else {
          header.style.backgroundColor = ''; // Восстановление исходного цвета, если прокрутка меньше 1vh
        }
      });
      

      const select = document.querySelector('select');
      const allLang = ['en', 'ua'];

      select.addEventListener('change', changeURLLanguage);

      function changeURLLanguage(){
        let lang = select.value;
        location.href = window.location.pathname + '#'+lang;
        location.reload();
      }

      function changeLanguage(){
        let hash = window.location.hash;
        hash = hash.substr(1)
        console.log(hash);
        if (!allLang.includes(hash)){
          location.href = window.location.pathname + '#ua';
          location.reload();
        }
        select.value = hash;
        for (let key in langArr){
          let elem = document.querySelector('.lng-'+key);
          if (elem){
            elem.innerHTML = langArr[key][hash];
          }
          
        }
      }

      changeLanguage();

      
})

