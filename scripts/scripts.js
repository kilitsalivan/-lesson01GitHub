'use strict';
let money = 50000;
let income = 'Фриланс';
let addExpenses = 'Комуналка, покупки, такси, интернет';
let deposit = true;
let mission = 100000;
let period = 6; 
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев и цель заработать ${mission} рублей`);
addExpenses = addExpenses.toLocaleLowerCase();
addExpenses= addExpenses.split(',');
console.log(addExpenses);
let budgetDay = money/30;
console.log(budgetDay);
  money = +prompt ('Ваш месячный доход ?');
  console.log('money: ', money);
  addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую?');
  console.log(addExpenses);
  deposit = confirm ('Есть ли у вас депозит в банке ?');
  console.log('deposit: ', deposit);
  let expenses1 = prompt('Введите первую статью расходов ?');
  let expenses2 = prompt('Введите вторую статью расходов ?');
  let amount1 =  +prompt('Во сколько это обойдется - 1 статье ?');
  let amount2 =  +prompt('Во сколько это обойдется - 2 статье ?');
  let budgetMonth = money - amount1 - amount2;
  console.log(`Бюджет на месяц: ${budgetMonth}`);
  let quantity = Math.ceil(mission/budgetMonth);
  console.log(`Цель будет достигнута за ${quantity} месяца`);
  budgetDay =  Math.floor(budgetDay);
  console.log(`Бюджет на день:${ budgetDay}`);
  if ( budgetDay >= 1200 ) {
  console.log('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay >= 0 ) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
  }else {
      console.log('Что то пошло не так');
  }




