const getmainForm = () =>{
    const	userName = document.querySelectorAll('[name="fio"]'),
          userPhone = document.querySelectorAll('[name="tel"]'); 
const mainFormInput = (elem) => {
    
function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
  			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i != -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type == "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
      

  elem.addEventListener('input',(event)=>{
    let target = event.target;
      if (target.name === 'tel' ) {
      	maskPhone('[name=tel]');
      }else if (target.type === 'text' && target.name === 'fio') {
        target.value = target.value.replace(/[^а-яА-ЯЁё\.\,\;\:\!\?\-\(\)\ ]/g, '');
      }
      });
      } ;
    userName.forEach((elem) =>{
      elem.setAttribute('required', true); mainFormInput(elem);
      }); 
    userPhone.forEach ((elem) =>{
      elem.setAttribute('required', true); mainFormInput(elem);
    }); 
  //фокус
  const getInputs = (input, exp) => {
  if (!input.value.match(exp)) {
          input.value = ' ';
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
    return upperCase.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
  };
  
  userName.forEach((elem) => {
    elem.addEventListener('blur', () => {
          getInputs(elem,/[а-яё\s]{3,}/gi);
          getClear(elem);
        elem.value = getUpperCase(elem);
    });
  });

};
  export default getmainForm;