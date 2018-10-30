function modal() {
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.querySelectorAll('.description-btn'),
      modalInput = document.querySelector('.popup-form__input');
  
    modalInput.addEventListener('input', function () {
      modalInput.value = modalInput.value.replace(/[^0-9+()]/ig, '');
    });

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
}

module.exports = modal;
