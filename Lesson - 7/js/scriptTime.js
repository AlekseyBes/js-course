window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  setInterval(function(){
	let date = new Date();

  let hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  let format = ( hours + ":" + minutes + ":" + seconds );


	document.getElementById("clock").innerHTML = format;
}, 1000);
});
