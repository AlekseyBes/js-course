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
  savings: true
}

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
        b = prompt( 'Во сколько обойдется?', '' );
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i--;
    }
  }
}
chooseExpenses();

let moneyOnDay;
function detectDayBudget() {
  moneyOnDay = (appData.budjet / 30).toFixed();
  return(moneyOnDay);
}
alert('Ваш дневной бюджет: ' + detectDayBudget());

function detectLevel() {
  if (moneyOnDay < 100) {
    console.log('Мигимальный уровень достатка');
  } else if (moneyOnDay > 100 && moneyOnDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (moneyOnDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');

    appData.monthIncome = save/100/12*percent;
    alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
  }
}
checkSavings();


function chooseOptExpenses() {
  let a1 = prompt('Статья необязательных расходов?'),
      a2 = prompt('Статья необязательных расходов?'),
      a3 = prompt('Статья необязательных расходов?');
  appData.optionalExpenses.a1 = a1;
  appData.optionalExpenses.a2 = a2;
  appData.optionalExpenses.a3 = a3;
}
chooseOptExpenses();
