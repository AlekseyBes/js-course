let startBtn = document.querySelector('#start'),
    elementsValue = document.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.querySelectorAll('button')[0],
    optionalExpensesBtn = document.querySelectorAll('button')[1],
    calculateBtn = document.querySelectorAll('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    expensesBtn.disabled = true;
    calculateBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    for (let i = 0; i < expensesItem.length; i++){
      if (expensesItem[i].value == 0) {
        expensesBtn.disabled = true;
        calculateBtn.disabled = true;
      }
    };
    for (let i = 0; i < optionalExpensesItem.length; i++){
        if (expensesItem[i].value == 0) {
            expensesBtn.disabled = true;
        }
    };
// начать расчет (дата и бюджет)
let money, time;
startBtn.addEventListener('click', function () {
  time = prompt( 'Введите дату в формате YYYY-MM-DD', '' );
  money = +prompt( 'Ваш бюджет на месяц?', '' );
  expensesBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  while(isNaN(money) || money == '' || money == 'null'){
    money = prompt( 'Ваш бюджет на месяц?', '' );
  }
  appData.budget = money;
  appData.timeData = time;
  elementsValue[0].textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth()+1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});
// кнопка обязательных расчетов
expensesBtn.addEventListener('click', function(){
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        sum += +b;
        appData.allExpenses = sum;
        calculateBtn.disabled = false;
    } else {
        i = i - 1;
    }
  }
  elementsValue[3].textContent = sum;
});
// кнопка необязательных расходов
optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItem.length; i++){
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    elementsValue[4].textContent += appData.optionalExpenses[i] + ' ';
  }
});
// расчет бюджета на 1 день + уровень достатка
calculateBtn.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - appData.allExpenses)/ 30).toFixed();
    elementsValue[1].textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      elementsValue[2].textContent = 'Мигимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      elementsValue[2].textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      elementsValue[2].textContent = 'Высокий уровень достатка';
    } else {
      elementsValue[2].textContent = 'Произошла ошибка';
    }
  } else {
    elementsValue[1].textContent =  'Произошла ошибка';
  }
});
// статьи возможного дохода
incomeItem.addEventListener('input', function() {
  let items = incomeItem.value;
  appData.income = items.split(', ');
  elementsValue[5].textContent = appData.income;
});
// чекбокс
checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});
// сумма
sumValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    elementsValue[6].textContent = appData.monthIncome.toFixed(1);
    elementsValue[7].textContent = appData.yearIncome.toFixed(1);
  }
});
// процент
percentValue.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    elementsValue[6].textContent = appData.monthIncome.toFixed(1);
    elementsValue[7].textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
}
