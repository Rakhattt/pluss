$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_arrow.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/right_arrow.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrow: false
                }  
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
 
     
     function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                 e.preventDefault();
                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
         }); 
     };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');


    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
    });  
    $('.button_mini').on('click', function() {
      $('.overlay, #order').fadeIn('slow')
    }); 

    function valideForms(form){
      $(form).validate({  
        rules:{
         name: {
           required: true,
           minlength:2
         },
         phone:"required",
         email:{
           required: true,
           email: true
         }
        },
        messages: {
          name: {
            required:"Пожалуйста,введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
          phone:"Пожалуйста,введите свой телефон",
          email: {
            required: "Пожалуйста,введите свою почту",
            email: "Неправильно введен адрес почты"
          }
        }
       });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');


    $('input[name=phone]').mask("+7 (999) 999-99-99");


    $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
      }else {
        $('.pageup').fadeOut();
      }
    });
  
    
  });