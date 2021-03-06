function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    // calcInput = document.querySelectorAll('counter-block-input'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;
  // calcInput.addEventListener('input', function () {
  //     calcInput.value = calcInput.value.replace(/[^\d]/g,'');
  // });
  persons.addEventListener('input', function () {
      persons.value = persons.value.replace(/[^0-9]/ig,'');
  });
  restDays.addEventListener('input', function () {
      restDays.value = restDays.value.replace(/[^0-9]/ig,'');
  });
  persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (personsSum + daysSum) * 4000;
    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });

  restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (personsSum + daysSum) * 4000;
    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
      // } else if (!isNaN(restDays.value) || restDays.value == 'e') {
      //   restDays.value.innerHTML = '';
    } else {
      let a = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });

  place.addEventListener('change', function() {
    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;
