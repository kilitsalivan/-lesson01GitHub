'use strict';
let isNumber = function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};
let itemExpenditure;
let money;
let income = 'Фриланс';
let addExpenses = 'Комуналка, покупки, такси, интернет';
let deposit = true;
let mission = 200000;
let period = 6; 

let start = function (){
do { 
  money = prompt ('Ваш месячный доход ?');
  } while ( !isNumber(money)); 
};
start ();

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
addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую?');
console.log(addExpenses);
deposit = confirm ('Есть ли у вас депозит в банке ?');
console.log('deposit: ', deposit);
 
let exspenses =  [];
function getExpensesMonth (){
let sum = 0;
for  (let i = 0; i<2; i++ ){
  exspenses [i] = prompt('Введите статью расходов ?' );
do { 
  itemExpenditure = +prompt ('Во сколько это обойдется ?');
} while ( !isNumber(itemExpenditure )); 
sum +=itemExpenditure ;
}
console.log(exspenses);
return  sum;
} 

let expensesAmount = getExpensesMonth();
console.log('Cумма всех обязательных расходов за месяц:', expensesAmount);

function  getAccumulatedMonth(a,b){
return a - b;
}

console.log('Накопления за месяц (Доходы минус расходы):', getAccumulatedMonth(money, expensesAmount));

let  accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
console.log('accumulatedMonth: ', accumulatedMonth);

function getTargetMonth(a,b){
    return a / b;
}
let purpose = Math.ceil(getTargetMonth(mission, accumulatedMonth));
if (purpose <=  0)  {
  console.log('Цель  не будет достигнута '); 
} else {console.log(`Цель будет достигнута за ${purpose} месяцев` );
}



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
