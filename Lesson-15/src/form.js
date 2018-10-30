function form() {
  let message = {
    loading: 'Загрузка..',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    contactForm = document.querySelector('#form');

  statusMessage.classList.add('status');

  //для модального окна
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    this.appendChild(statusMessage);
    let form = this;
    sendForm(form);
  });

  //для формы в конце лендинга
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    this.appendChild(statusMessage);
    let form = this;
    sendForm(form);

  });

  // функция обработки отпарвки
  function sendForm(form) {

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function(value, key) {
      obj[key] = value;
    });

    let json = JSON.stringify(obj);

    function postData(json) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.onreadystatechange = function() {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4 && request.status == 200) {
            resolve();
          } else {
            reject();
          }

        }
        request.send(json);
      })
    } //end postData
    function clearInput() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    postData(json)
      .then(() => statusMessage.innerHTML = message.loading)
      .then(() => statusMessage.innerHTML = message.success)
      .catch(() => statusMessage.innerHTML = message.failure)
      .then(clearInput)
  }
}

module.exports = form;
