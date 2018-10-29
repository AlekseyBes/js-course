window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');
// Скрываем все элементы, кроме первого
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);
// Показывает конкретный элемент
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }
// Проверяем куда кликнули
  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });


  // Timer

  let deadline = '2018-10-31';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60)));

    return{
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      if (t.hours < 10) {
        hours.textContent = `0${t.hours}`;
      } else {
        hours.textContent = t.hours;
      }
      if (t.minutes < 10) {
        minutes.textContent = `0${t.minutes}`;
      } else {
        minutes.textContent = t.minutes;
      }
      if (t.seconds < 10) {
        seconds.textContent = `0${t.seconds}`;
      } else {
        seconds.textContent = t.seconds;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }
  setClock('timer', deadline);


  // Modal


  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.querySelectorAll('.description-btn');

  function showModal() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
  for (let i = 0; i < descriptionBtn.length; i++) {
    descriptionBtn[i].addEventListener('click', function () {
      this.classList.add('more-splash');
      showModal();
    });
  }

  more.addEventListener('click', function () {
    this.classList.add('more-splash');
    showModal();
  });

  close.addEventListener('click', function () {
    more.classList.remove('more-splash');
    hideModal();
  })


  // Form

  let message = {
    loading: 'Загрузка..',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
      input = input.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      contactForm = document.querySelector('#form'),
  statusMessage.classList.add('status');

//для модального окна
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    this.appendChild(statusMessage);
    let form = this;
    sendForm(form);
  });

//для формы в конце лендинга
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    this.appendChild(statusMessage);
    let form = this;
    sendForm(form);

  });


// функция обработки отпарвки
  function sendForm(form) {

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
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
        }//end postData
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


  // carousel

  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  console.log(prev);
  console.log(next);
  console.log(slideIndex);
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
    console.log(slideIndex);
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  prev.addEventListener('click', function() {
    plusSlides(-1);
  });
  next.addEventListener('click', function() {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
        currentSlide(i);
      }
    }
  });


  // calculate

  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (personsSum + daysSum)* 4000;
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (personsSum + daysSum)* 4000;
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    // } else if (!isNaN(restDays.value) || restDays.value == 'e') {
    //   restDays.value.innerHTML = '';
    }else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
});
