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

let questionOne = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
    questionTwo = prompt( 'Во сколько обойдется?', '' );
    questionThree = prompt( 'Введите обязательную статью расходов в этом месяце?', ''),
    questionFour = prompt( 'Во сколько обойдется?', '' );

appData.expenses.questionOne = questionTwo;
appData.expenses.questionThree = questionFour;
console.log(appData.expenses.questionOne);
let moneyOnDay = appData.budjet / 30;

alert(moneyOnDay);
