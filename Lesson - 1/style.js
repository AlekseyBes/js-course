'user strict'

let money = prompt( 'Ваш бюджет на месяц?', '' ),
    time = prompt( 'Введите дату в формате YYYY-MM-DD', '' );

let questionOne = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
    questionTwo = prompt( 'Во сколько обойдется?', '' );
    questionThree = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
    questionFour = prompt( 'Во сколько обойдется?', '' );

let appData = {
  budjet: money,
  timeData: time,
  expenses: {
    questionOne: questionTwo,
    questionThree: questionFour
  },
  optionalExpenses: {},
  income: [],
  savings: false
}

let moneyOnDay = appData.budjet / 30;

alert(moneyOnDay);
