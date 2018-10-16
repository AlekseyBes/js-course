'user strict'

let money, time;
function start() {
  money = +prompt( 'Ваш бюджет на месяц?', '' );
  time = prompt( 'Введите дату в формате YYYY-MM-DD', '' );

  while(isNaN(money) || money == '' || money == 'null'){
    money = +prompt( 'Ваш бюджет на месяц?', '' );
  }
}
start();

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function(){
    for (let i = 0; i < 2; i++) {
      let a = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
          b = prompt( 'Во сколько обойдется?', '' );
      if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
          && a != '' && b != '' && a.length < 50) {
          appData.expenses[a] = b;
      } else {
          i = i - 1;
      }
    }
  },
  detectDayBudget: function(){
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert('Ваш дневной бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function(){
    if (moneyOnDay < 100) {
      console.log('Мигимальный уровень достатка');
    } else if (moneyOnDay > 100 && moneyOnDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (moneyOnDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
  },
  checkSavings: function(){
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?'),
          percent = +prompt('Под какой процент?');

      appData.monthIncome = save/100/12*percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 3; i++){
      let opt = prompt('Статья необязательных расходов?', '');
      appData.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: function(){
    let i = 1;
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то еще?'));
    appData.income.sort();
    while(typeof(items) !== 'string' || items == '' || items == 'null'){//не получается чтоб вводилось только строка
      items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    };
    appData.income.forEach(function(item, i, income) {
      alert("Способы доп. заработка: " + i + "- " + item);// не получается через еденицу
    });
  }
}

function allElement() {
  for (var elem in appData) {
    console.log("Наша программа включает в себя данные: " + elem);
  }
}
