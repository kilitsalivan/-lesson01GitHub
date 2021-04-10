'use strict';
    let money;
    const isNumber = function(n)
        {return !isNaN(parseFloat(n)) && isFinite(n);
};

     const start = function ()
{        do { 
    money = prompt ('Ваш месячный доход ?');
       } while ( !isNumber(money)); 
};
    start ();
    
    let appData = {
      income: {},
      addIncome: {},
      expenses: {},
      addExpenses: [],
      deposite: false,
      mission: 50000,
      period: 6,
      budget: money,
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      asking: function(){
      let  expen= [],
           itemExpenditure = [],
           key = '',
           value = 0;
        for  (let i = 0; i<2; i++ ){
         expen [i] = prompt('Введите обязательную статью расходов ?' );
        do { 
            itemExpenditure [i]= +prompt ('Во сколько это обойдется ?');
       }while ( !isNumber(itemExpenditure [i])); 
            key = expen [i];
            value = itemExpenditure [i];
            appData.expenses[key] = value;
        
        //appData.expenses.key = prompt('Введите обязательную статью расходов ?' );
        //appData.addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую?');    
        //appData.addExpenses = appData.addExpenses.toLocaleLowerCase().split(',');
        //appData.deposit = confirm ('Есть ли у вас депозит в банке ?');  
        }  
    }
};
      appData.asking();

    appData.getExpensesMonth = function (){
    let sum = 0;
    for (let k in appData) {
        sum += appData.expenses[k];
    }
        appData.expensesMonth = sum;
} ;

      let expensesAmount = appData.getExpensesMonth();
        console.log('Cумма всех обязательных расходов за месяц:', expensesAmount);
            appData.getBudget = function (money, expensesAmount){
             return money - expensesAmount;
};


let  accumulatedMonth = appData.getBudget(money, expensesAmount);
             console.log('accumulatedMonth: ', accumulatedMonth);
             appData.getTargetMonth = function(mission,accumulatedMonth){


      if (Math.ceil(mission/accumulatedMonth) <=  0){  
           console.log('Цель  не будет достигнута '); 
    } else { 
           console.log(`Цель будет достигнута за ${Math.ceil(appData.mission/accumulatedMonth)} месяцев` );    
  }
};

   appData.getTargetMonth (appData.mission,accumulatedMonth);    

       let budgetDay = accumulatedMonth/30;
          console.log('Бюджет на день:' ,budgetDay);

  appData.getStatusIncome = function (){
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
  appData.getStatusIncome();
  console.log( appData.getStatusIncome());
  console.log( appData.expenses);
  console.log( appData.expensesMont);
  console.log(`Период равен ${appData.period} месяцев и цель заработать ${appData.mission} рублей`);
  console.log(appData.addExpenses);
  console.log('deposit: ', appData.deposit);
