const getmainForm = () =>{
    const	userName = document.querySelectorAll('[name="fio"]'),
          userPhone = document.querySelectorAll('[name="tel"]'); 
         
    const mainFormInput = (elem) => {
         
      elem.addEventListener('input',(event)=>{
            let target = event.target;
      if (target.name === 'tel' ) {
          target.value = target.value.replace(/[^0-9+]/ig, '');
      }else if (target.type === 'text' && target.name === 'fio') {
        target.value = target.value.replace(/[^а-яА-ЯЁё\.\,\;\:\!\?\-\(\)\ ]/, '');
      }
      });
      } ;
    userName.forEach((elem) =>{
        mainFormInput(elem);
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
  };
  export default getmainForm;