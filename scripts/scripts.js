'use strict';
    const isNumber = function(n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let itemExpenditure,
    money,
    income = 'Фриланс',
    addExpenses = 'Комуналка, покупки, такси, интернет',
    deposit = true,
    mission = 200000,
    period = 6,
    exspenses =  []; 

const start = function ()
{
    do { 
    money = prompt ('Ваш месячный доход ?');
       } while ( !isNumber(money)); 
};
    start ();

      const showTypeof = function (data)
   {
      console.log(data, typeof (data));
   };
      showTypeof(money);
      showTypeof(income);
      showTypeof(deposit);

                
        addExpenses = addExpenses.toLocaleLowerCase().split(',');
        addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую?');    
        deposit = confirm ('Есть ли у вас депозит в банке ?');       
              console.log(addExpenses.length);
              console.log(`Период равен ${period} месяцев и цель заработать ${mission} рублей`);
              console.log(addExpenses);
              console.log('deposit: ', deposit);
 

 const getExpensesMonth = function (){
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

      const  getAccumulatedMonth = function (money, expensesAmount){
             return money - expensesAmount;
}

console.log('Накопления за месяц (Доходы минус расходы):', getAccumulatedMonth(money, expensesAmount));

let  accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
             console.log('accumulatedMonth: ', accumulatedMonth);

const getTargetMonth = function(mission,accumulatedMonth){
      if (Math.ceil(mission/accumulatedMonth) <=  0)  
    {        return  console.log('Цель  не будет достигнута '); 
    } else { return  console.log(`Цель будет достигнута за ${Math.ceil(mission/accumulatedMonth)} месяцев` );    
  }
}

       getTargetMonth (mission,accumulatedMonth);    

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
