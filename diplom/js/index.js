window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let modalBtn  = document.querySelector('.popup_engineer_btn'),
      modalHeader = document.querySelector('.popup_engineer'),
      closeHeader = document.querySelectorAll('.popup_close')[1];

  modalBtn.addEventListener('click', function () {
    modalHeader.style.display = 'block';
    document.body.style.cssText = "overflow: hidden; height: 100vh;";
    modalHeader.classList.add('fadeInDown');
  });

  closeHeader.addEventListener('click', function () {
    closeModal();
  });

  document.body.addEventListener("click",function(e){
      if(e.target.classList.contains("popup_engineer")){
        closeModal();
      }
    });
  function closeModal() {
    modalHeader.classList.remove('fadeInDown');
    modalHeader.style.display = 'none';
    document.body.style.cssText = "overflow: ''; height: 100%;";
  }
});
