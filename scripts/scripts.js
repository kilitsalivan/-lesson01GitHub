'use strict';

const 
monthlyIncome = document.querySelector ('.salary-amount'),    
summa = document.querySelector('.income-amount'),
description = document.querySelectorAll('.income-title')[1],    
plus1 = document.getElementsByTagName('button')[0],
possibleIncome1 = document.querySelectorAll('.additional_income-item')[0],
possibleIncome2 = document.querySelectorAll('.additional_income-item')[1],
mandatoryExpensesName = document.querySelectorAll('.expenses-title')[1],
mandatoryExpensesSumma = document.querySelector('.expenses-amount'),
plus2 = document.getElementsByTagName('button')[1],
costsNames = document.querySelector('.additional_expenses-item'),
deposit = document.querySelector('#deposit-check'),
purpose = document.querySelector('.target-amount'),
calculationPeriod = document.querySelector('.period-select'),
dailyBudget = document.getElementsByClassName('result-total')[0],
monthlyExpense = document.getElementsByClassName('result-total')[1],
possibleExpenses1 = document.getElementsByClassName('result-total')[2],
possibleExpenses2 = document.getElementsByClassName('result-total')[3],  
savePeriod = document.getElementsByClassName('result-total')[4],
completionMonths = document.getElementsByClassName('result-total')[5],
calculate = document.getElementById('start');
        console.log(monthlyIncome);
        console.log(description);
        console.log(summa);
        console.log(plus1);
        console.log(possibleIncome1);
        console.log(possibleIncome2);
        console.log(mandatoryExpensesName);
        console.log(mandatoryExpensesSumma);
        console.log(plus2);
        console.log(costsNames);
        console.log(deposit);
        console.log(purpose);
        console.log( calculationPeriod);
        console.log(dailyBudget);
        console.log(monthlyExpense);
        console.log(possibleExpenses1);
        console.log(possibleExpenses2);    
        console.log(savePeriod);
        console.log(completionMonths);
        console.log(calculate);
    
let money;
    
    const isNumber = function(n)
        {return !isNaN(parseFloat(n)) && isFinite(n);
};
    
    const start = function (){
    do { 
    money = prompt ('Ваш месячный доход ?');
    } while ( !isNumber(money)); 
};
    
    start ();
    let appData = {
        income: {},
        addIncome: {},
        expenses: {},
        addExpenses: [],
        percentDeposit: 0,
        moneyDeposit: 0,
        deposit: false,
        mission: 500000,
        period: 3,
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        getExpensesMonth: function() {
                let sum = 0;
            for (let key in appData.expenses) {
                sum += appData.expenses[key];
            }
                appData.expensesMonth = sum;
            return sum;    
       },
        getTargetMonth: function(mission,accumulatedMonth){
            if (Math.ceil(mission/accumulatedMonth) <=  0)  
       {        return ('Цель  не будет достигнута '); 
       } else { 
                return (`Цель будет достигнута за ${Math.ceil(mission/accumulatedMonth)} месяцев` );    
       }
       }, 
        getStatusIncome: function (budgetDay){
        if ( budgetDay >= 1200 ) {
          return ('У вас высокий уровень дохода');
     }  else if (budgetDay >= 600 && budgetDay < 1200) {
          return ('У вас средний уровень дохода');
     }  else if (budgetDay < 600 && budgetDay >= 0 ) {
          return ('К сожалению у вас уровень дохода ниже среднего');
     }  else {
         return ('Что то пошло не так');
     }
     },
    getBudget: function (money, expensesAmount){
        appData.budgetMonth = money - expensesAmount;
        return appData.budgetMonth;
        
    },
    asking: function(){
    if (confirm('Есть ли у вас дополнительный источник заработка?')) {
        let cashIncom,
            itemIncom; 
        do { 
             itemIncom = prompt('Какой у вас дополнительнный заработок?','Таксую');
            } while ( isNumber(itemIncom)); 
              
        do { 
            cashIncom = +prompt('Сколько в месяц вы на этом зарабатывайте?', 10000);
            } while ( !isNumber(cashIncom)); 
        
        
        appData.income[itemIncom] = cashIncom; 
    }
    
      for  (let i = 0; i<2; i++ ){
        let valueQuestion,
            keyQuestion;
        do{
            keyQuestion = prompt('Какие обязательные расходы вы планируете в месяце?');
            } while (isNumber(keyQuestion));
        
        do{
            valueQuestion = +prompt('Во сколько это обойдется?');
    }        while ( !isNumber(valueQuestion));
            appData.expenses[keyQuestion] = valueQuestion; 
    }
    
        do{
            appData.addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую ?');    
        }    while ( isNumber(appData.addExpenses));
                 
        let str = appData.addExpenses.split(',');
            for (let i = 0; i < str.length; i++) {
                str[i]= str[i].trim();
                str[i] = str[i].slice(0,1).toUpperCase() + str[i].slice(1);;
        }
        appData.addExpenses = str.join(', ');
            
    
        appData.deposit = confirm ('Есть ли у вас депозит в банке ?'); 
    },
    getInfoDeposit: function(){
    if (appData.deposit){
        do { 
        appData.percentDeposit = +prompt('Какой годовой процент?','10');
        }    while ( !isNumber(appData.percentDeposit)); 
    
        do { 
            appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);
            } while ( !isNumber(appData.moneyDeposit)); 
    }
    },
    calcSavemoney: function(){
        return appData.budgetMonth * appData.period;
    }  
};

appData.asking();
appData.getExpensesMonth();
appData.budgetMonth = appData.getBudget(money, appData.expensesMonth);
appData.budgetDay = appData.budgetMonth / 30;
console.log('Cумма всех обязательных расходов за месяц:', appData.getExpensesMonth());
console.log(appData.getTargetMonth(appData.mission,appData.budgetMonth));
console.log(appData.getStatusIncome(appData.budgetDay));
for (let key in appData){
    console.log( 'Наша программа включает в себя данные:  ' + key + '  значения:  ' +appData[key] );
}
console.log('appData.addExpenses: ', appData.addExpenses);
console.log(appData.addExpenses); 

