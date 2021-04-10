'use strict';
    let money;
    const isNumber = function(n)
        {return !isNaN(parseFloat(n)) && isFinite(n);
};

     const start = function ()
{        do { 
    money = prompt ('Ваш месячный доход ?');
       } while ( !isNumber(money)); 

       let appData = {
        income: {},
        addIncome: {},
        expenses: {},
        addExpenses: [],
        deposite: false,
        mission: 500000,
        period: 6,
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        asking: function(){
          for  (let i = 0; i<2; i++ ){
              let valueQuestion;
              let keyQuestion = prompt('Какие обязательные расходы вы планируете в месяце?');
          do{
            valueQuestion = +prompt('Во сколько это обойдется?');
            } while ( !isNumber(valueQuestion)); 
             appData.expenses[keyQuestion] = valueQuestion; 
              
          
          //appData.addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую?');    
          //appData.addExpenses = appData.addExpenses.toLocaleLowerCase().split(',');
          //appData.deposit = confirm ('Есть ли у вас депозит в банке ?');  
          }  
      }
  };
      appData.asking();
      appData.getExpensesMonth = function (){
           let sum = 0;
      for (let key in appData.expenses) {
         sum += appData.expenses[key];
      }
         appData.expensesMonth = sum;
      return sum;    
  };
  const getBudget  = function (money, expensesAmount){
         appData.budgetMonth = money - expensesAmount;
         return appData.budgetMonth;
  };
  appData.budgetMonth = getBudget(money, appData.expensesMonth);
  
  
  appData.getTargetMonth = function(mission,accumulatedMonth){
     if (Math.ceil(mission/accumulatedMonth) <=  0)  
    {        return ('Цель  не будет достигнута '); 
    } else { 
             return (`Цель будет достигнута за ${Math.ceil(mission/accumulatedMonth)} месяцев` );    
    }
    };
  
   
  appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
  
  appData.getStatusIncome = function (budgetDay){
     if ( budgetDay >= 1200 ) {
      return ('У вас высокий уровень дохода');
  }  else if (budgetDay >= 600 && budgetDay < 1200) {
      return ('У вас средний уровень дохода');
  }  else if (budgetDay < 600 && budgetDay >= 0 ) {
      return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
      return ('Что то пошло не так');
  }
  };
    
  console.log('Cумма всех обязательных расходов за месяц:', appData.getExpensesMonth());
  appData.getStatusIncome(appData.budgetDay); 
  console.log(appData.getTargetMonth(appData.mission,appData.budgetMonth)); 
  for (let key in appData){
  console.log( 'Наша программа включает в себя данные:' + key + 'значения:' +appData[key] );

  }
 
   };
    start ();
    
    
    
    

