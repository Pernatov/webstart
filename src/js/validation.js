// Валидация формы
$(document).ready(function(){

  $('#offer-form').validate({

    errorClass: "offer-invalid",
		errorElement: "div",
		focusInvalid: false,

    rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},

      userphone: "required",
    },
  
    messages: {
      username: "В этом поле должно быть от 2-х до 15-ти символов",
      userphone: "Пожалуйста, заполните это поле"
    },
    submitHandler: function(a) {
      a.preventDefault;
      var tyModal = $('#ty');
      var tyClose = $('#ty-close');
      var tyMessage = $('#ty-message');
      $.ajax({
        url: "mail.php",
        type: "POST",
        data: $('#offer-form').serialize(),
          success: function(data) {
            $('#offer-form')[0].reset();
            console.log("Открыто окно TY");
            console.log("Имя пользователя: " + data);
            tyModal.addClass('ty_active');
            tyMessage.html("Спасибо, " + data + "! Ваша заявка отправлена. Мы скоро свяжемся с вами.");
            tyClose.on('click', function() {
              console.log("Закрыто окно TY");
              tyModal.removeClass('ty_active');
            });
          },
          error: function(jsXHR, textStatus) {
            console.log(jsXHR + ': ' + textStatus);
          }
      });
    }
  });
  
  $('#brif-form').validate({

    errorClass: "brif-invalid",
		errorElement: "div",
		focusInvalid: false,

    rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},

      userphone: "required",

      usermail: {
        required: true,
        email: true
      },

    },
  
    messages: {
      username: "В этом поле должно быть от 2-х до 15-ти символов",
      userphone: "Пожалуйста, заполните это поле",
      usermail: "Введите корректный email: xxxxx@xxxx.xxx"
    },
    submitHandler: function(b) {
      b.preventDefault;
      var tyModal = $('#ty');
      var tyClose = $('#ty-close');
      var tyMessage = $('#ty-message');
      $.ajax({
        url: "mail.php",
        type: "POST",
        data: $('#brif-form').serialize(),
          success: function(data) {
            $('#brif-form')[0].reset();
            console.log("Открыто окно TY");
            console.log("Имя пользователя: " + data);
            tyModal.addClass('ty_active');
            tyMessage.html("Спасибо, " + data + "! Ваша заявка отправлена. Мы скоро свяжемся с вами.");
            tyClose.on('click', function() {
              console.log("Закрыто окно TY");
              tyModal.removeClass('ty_active');
            });
          },
          error: function(jsXHR, textStatus) {
            console.log(jsXHR + ': ' + textStatus);
          }
      });
    }
  });
  
  $('#modal-form').validate({

    errorClass: "modal-invalid",
		errorElement: "div",
		focusInvalid: false,

    rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},

      userphone: "required",
    },
  
    messages: {
      username: "В этом поле должно быть от 2-х до 15-ти символов",
      userphone: "Пожалуйста, заполните это поле"
    },
    submitHandler: function(c) {
      c.preventDefault;
      var modal = $('#modal');
      var tyModal = $('#ty');
      var tyClose = $('#ty-close');
      var tyMessage = $('#ty-message');
      $.ajax({
        url: "mail.php",
        type: "POST",
        data: $('#modal-form').serialize(),
          success: function(data) {
            $('#modal-form')[0].reset();
            modal.removeClass('modal_active');
            console.log("Закрыто модальное окно");
            tyModal.addClass('ty_active');
            console.log("Открыто окно TY");
            console.log("Имя пользователя: " + data);
            tyMessage.html("Спасибо, " + data + "! Ваша заявка отправлена. Мы скоро свяжемся с вами.");
            tyClose.on('click', function() {
              console.log("Закрыто окно TY");
              tyModal.removeClass('ty_active');
            });
          },
          error: function(jsXHR, textStatus) {
            console.log(jsXHR + ': ' + textStatus);
          }
      });
    }
  });

});
// Закрывает весь скрипт




//   $('#brif-form').validate({

//     rules: {
// 			username: {
// 				required: true,
// 				minlength: 2,
// 				maxlength: 15
// 			},

//       userphone: "required",

//       usermail: {
//         required: true,
//         email: true
//       }
//     },
  
//     messages: {
//       username: "Заполните поле",
//       userphone: "Заполните поле",
//       usermail: "Введите корректный email"
//     },

//   });

// });