'user strict'

let money = prompt( 'Ваш бюджет на месяц?', '' ),
    time = prompt( 'Введите дату в формате YYYY-MM-DD', '' );

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

for (let i = 0; i < 2; i++) {
  let a = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
      b = prompt( 'Во сколько обойдется?', '' );
  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
  } else {
      i--;// самый простой способ, не знаю на сколько правильно
  }
}

// Первый вариант

// let i = 0;
// let a = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
//     b = prompt( 'Во сколько обойдется?', '' );
// whyle( i<2 && (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50 ) {
//     appData.expenses[a] = b;
//     i++;
// }

// Второй вариант

// do{
//   appData.expenses[a] = b;
//   i++;
// }
// whyle( i<2 && (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//       && a != '' && b != '' && a.length < 50 )


let moneyOnDay = appData.budjet / 30;

alert(moneyOnDay);
