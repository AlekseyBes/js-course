let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    title = document.querySelector('#title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    prompts = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);
let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';
menu.appendChild(newMenuItem);

body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подленную технику Apple';

column[1].removeChild(adv);

let answer = prompt( 'Ваше отношение к технике Apple?', '' );
prompts.textContent = answer;
