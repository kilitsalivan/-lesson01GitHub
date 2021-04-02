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
let budgetDay =  money/30;
console.log(budgetDay);
