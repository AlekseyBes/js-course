window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  let age = document.getElementById('age'),
      hMain = document.querySelector('h1'),
      h = document.querySelector('h2');

  function showUser(surname, name) {
    hMain.textContent = ("Пользователь: " + surname + " " + name);
    this.addEventListener('input', function() {
      if (!isNaN(this.value)) {
        h.textContent = ("Eго возраст: " + this.value);
      } else {
        h.textContent = ("Eго возраст: " + "Ошибка - недопустимый символ!");
      }
    });
    h.textContent = ("Eго возраст: " + this.value);
  }

  showUser.call(age, 'Беспалюк', 'Алексей');
});
