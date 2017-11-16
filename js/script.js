"use strist";
$(function() {
  $('#form').validate({
rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Установка сообщений об ошибке
    messages: {
      password: {
        required: "Придумайте Пароль",
        minlength: "Пароль должен быть длиннее 5 символов"
      },
      email: "Заполните email адрес корректно"
    },
    submitHandler: function(form) {
      form.submit();
    }

  });
});

var form = document.querySelector('.form');
var formClose = document.querySelector('.form__close-icon');

formClose.addEventListener('click', function() {
  if (form.classList.contains('form--closed')) {
    form.classList.remove('form--closed');

  } else {
    form.classList.add('form--closed');
    form.classList.remove('form--opened');
  }
});