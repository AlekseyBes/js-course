window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  let tabs = require('./tab.js'),
      time = require('./time.js'),
      modal = require('./modal.js'),
      form = require('./form.js'),
      carousel = require('./carousel.js'),
      calc = require('./calc.js')
      
  tabs();
  time();
  modal();
  form();
  carousel();
  calc();

});
