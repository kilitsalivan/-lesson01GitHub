const getmainForm = () =>{
    const	userName = document.querySelectorAll('[name=user_name]'),
        	userMessage = document.querySelectorAll('[name=user_message]'),
        	userEmail = document.querySelectorAll('[name=user_email]'),
          userPhone = document.querySelectorAll('[name=user_phone]'); 
         
    const mainFormInput = (elem) => {
         
      elem.addEventListener('input',(event)=>{
            let target = event.target;
       if (target.type === 'email' ) {
             target.value = target.value.replace(/[^a-zA-Z\@\_\-\.\!\~\*\']/, '');
           }else if (target.type === 'tel') {
          target.value = target.value.replace(/[^0-9+]/ig, '');
      }else if (target.type === 'text' && target.name === 'user_message') {
        target.value = target.value.replace(/[^а-яА-ЯЁё\.\,\;\:\!\?\-\(\)\ ]/, '');
      }else{
        target.value = target.value.replace(/[^а-яА-ЯЁё\ ]/, '');
      }
      });
      } ;
    userName.forEach((elem) =>{
        mainFormInput(elem);
      }); 
    userMessage.forEach ((elem)=>{
        mainFormInput(elem);
      }); 
    userEmail.forEach ((elem) =>{
        mainFormInput(elem);
        elem.setAttribute('required', true); 
        }); 
    userPhone.forEach ((elem) =>{
        mainFormInput(elem);
    }); 
//фокус
const getInputs = (input, exp) => {
  if (!!input.value.match(exp)) {
          input.value = input.value.replace(exp, '');
  } else {
    return;
  }
};

const getClear = (item) => {
  item.value = item.value.replace(/\s+/g, ' ');
  item.value = item.value.replace(/\-+/g, '-');
    
  let regExpElem = new RegExp(item.value);
    if (/^[/ /-]/.test(regExpElem)) {
      item.value = item.value.replace(/^[/ /-]/, '');
    }
    if(/[/ /-]$/.test(regExpElem)) {
      item.value = item.value.replace(/[/ /-]$/, '');
    }
};

 const getUpperCase = (elem) => {
      let upperCase = elem.value;
    return upperCase.split(' ').map(item =>item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
};

userName.forEach((elem) => {
    elem.addEventListener('blur', () => {
      getInputs(elem, /[^а-яА-ЯЁё\-\ ]/);
      getClear(elem);
        elem.value = getUpperCase(elem);
    });
});

userMessage.forEach((elem) => {
  elem.addEventListener('blur', () => {
      getClear(elem);
    });
});

userEmail.forEach( (elem) => {
   elem.addEventListener('blur', () => {
      getInputs(elem, /[^a-zA-Z\@\_\-\.\!\~\*\']/);
      getClear(elem);
    });
});
const getCalck = () =>{
  const calck = document.getElementById('calc');
  const calckBanned = (event) =>{
    let target = event.target;
      if (target.type === 'text') {
        target.value = target.value.replace(/\D/g, '');
     }
  };
calck.addEventListener('input',calckBanned );  
};
getCalck();
};
export default getmainForm;