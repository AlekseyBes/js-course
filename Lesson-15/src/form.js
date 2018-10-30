function form() {
  let message = {
    loading: 'Загрузка..',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    formInput = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    contactForm = document.querySelector('#form'),
    contactInput = contactForm.getElementsByTagName('input'),
    contactInputNumber = contactForm.getElementsByTagName('input')[1];

  contactInputNumber.addEventListener('input', function () {
    contactInputNumber.value = contactInputNumber.value.replace(/[^0-9+()]/ig, '');
  });
  statusMessage.classList.add('status');

  //для модального окна
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    this.appendChild(statusMessage);
    let form = this;
    let input = formInput;
    sendForm(form);
    clearInput(input);
  });

  //для формы в конце лендинга
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    this.appendChild(statusMessage);
    let form = this;
    let input = contactInput;
    sendForm(form);
    clearInput(input);

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


    postData(json)
      .then(() => statusMessage.innerHTML = message.loading)
      .then(() => statusMessage.innerHTML = message.success)
      .catch(() => statusMessage.innerHTML = message.failure)
      .then(clearInput)
  }
  function clearInput(input) {
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }
}

module.exports = form;
