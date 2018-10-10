'user strict'

var money = +prompt( 'Ваш бюджет на месяц?' ),
    time = prompt( 'Введите дату в формате:', 'YYYY-MM-DD' );

var questionOne =  prompt( 'Введите обязательную статью расходов в этом месяце?' ),
    questionTwo =  prompt( 'Во сколько обойдется?' );

var appData = {
  budjet: money,
  timeData: time,
  expenses: {
    questionOne: questionTwo,
    questionTwo: questionOne
  },
  optionalExpenses: {},
  income: [],
  savings: false
}

var moneyOnDay = appData.budjet / 30; // можно было использовать пер-ю "money"

alert(moneyOnDay);
