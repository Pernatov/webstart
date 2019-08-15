



// $(document).ready(function(){
    // var tyModal = $('#ty');
    // var tyClose = $('#ty-close');
    // var tyMessage = $('#ty-message');

//     $("#offer-form").on("submit", function(event) {
//         var form = $(this);
//         console.log("Открыто окно TY");

//         event.preventDefault();
  
//         $.ajax({
//             url: "mail.php",
//             type: "POST",
//             data: form.serialize(),
//             success: function(data) {
//                 form[0].reset();
//                 console.log("Имя пользователя: " + data);
//                 tyModal.addClass('ty_active');
//                 tyMessage.html("Спасибо, " + data + "! Ваша заявка отправлена. Мы скоро свяжемся с вами.");
//             },
//         error: function(jsXHR, textStatus) {
//             console.log(jsXHR + ': ' + textStatus);
//             }
//         }); 
//     });

    // tyClose.on('click', function() {
    //     console.log("Закрыто окно TY");
    //     tyModal.removeClass('ty_active');
    // });

// });



// // Обработка и отправка формы через AJAX

// $('#offer-form').on('submit', function(event) {
//   event.preventDefault();
//   $.ajax({
//     url: 'mail.php',
//     type: 'POST',
//     data: $(this).serialize(),
//     success: function(data) {
//       $('.success').html('Спасибо, ' + data + ', Ваша заявка отправлена!');
//       console.log(data);
//     }
//   });
// });

// });