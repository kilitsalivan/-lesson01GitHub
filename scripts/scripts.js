'use strict';
let money = 50000;
let income = 'Фриланс';
let addExpenses = 'Комуналка, покупки, такси, интернет';
let deposit = true;
let mission = 200000;
let period = 6; 
let showTypeof = function (data){
console.log(data, typeof (data));
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев и цель заработать ${mission} рублей`);
addExpenses = addExpenses.toLocaleLowerCase();
addExpenses= addExpenses.split(',');
console.log(addExpenses);

money = +prompt ('Ваш месячный доход ?', '50000');
  console.log('money: ', money);
  addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую?');
  console.log(addExpenses);
  deposit = confirm ('Есть ли у вас депозит в банке ?');
  console.log('deposit: ', deposit);
  let expenses1 = prompt('Введите первую статью расходов ?', 'Кредит');
  let expenses2 = prompt('Введите вторую статью расходов ?', 'Садик');
  let amount1 =  +prompt('Во сколько это обойдется - 1 статье ?','10000');
  let amount2 =  +prompt('Во сколько это обойдется - 2 статье ?', '5000');
  let budgetMonth = money - amount1 - amount2;

  /*console.log(`Бюджет на месяц: ${budgetMonth}`);
  let quantity = Math.ceil(mission/budgetMonth);
  console.log(`Цель будет достигнута за ${quantity} месяца`);
  budgetDay =  Math.floor(budgetDay);
  console.log(`Бюджет на день:${ budgetDay}`);*/
  

function getExpensesMonth (a,b){
return  a + b;
} 
console.log('Cумма всех обязательных расходов за месяц:', getExpensesMonth (amount1,amount2));

function  getAccumulatedMonth(a,b,c){
return a - b - c;
}
console.log('Накопления за месяц (Доходы минус расходы):', getAccumulatedMonth(money, amount1,amount2));

let  accumulatedMonth = getAccumulatedMonth(money, amount1,amount2);
console.log('accumulatedMonth: ', accumulatedMonth);

function getTargetMonth(a,b){
    return a / b;
}
console.log('Цель будет достигнута за',  Math.ceil(getTargetMonth(mission, accumulatedMonth)));

let budgetDay = accumulatedMonth/30;
console.log('Бюджет на день:' ,budgetDay);

let getStatusIncome = function (){
    if ( budgetDay >= 1200 ) {
    return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay >= 0 ) {
    return ('К сожалению у вас уровень дохода ниже среднего');
    }else {
    return ('Что то пошло не так');
    }
    };
    getStatusIncome();
    console.log(getStatusIncome());
