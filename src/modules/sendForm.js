const sendForm = (id) => {
    const errorMessage = 'Что то пошло не так...',
          loadMessage = 'Загрузка...',
          succesMessage = 'Cпасибо! Мы скоро с вами свяжемся!';
          const form = document.getElementById(id);
          
    const statusMessage = document.createElement ('div');
          statusMessage.style.cssText = 'font-size: 2rem; color: white;';
                
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    form.appendChild(statusMessage);
        
    const clearInput = (elem) => {
          const form = document.getElementById(elem);
          [...form.elements].filter(item =>
              item.tagName.toLowerCase() !== 'button' && item.type !== 'button').forEach(item => item.value = '');
                };
    statusMessage.textContent = loadMessage;          
  
  const formData = new FormData(form);
    
      postData(Object.fromEntries(formData))
      .then((response) => {
          if (response.status !== 200){
            throw new Error ('status network not 200');
            }
          statusMessage.textContent = succesMessage;
          clearInput(id);
          setTimeout(() => {
            statusMessage.textContent = '';
            let poup = document.querySelector('.popup');
                poup.style.display = 'none';
                 }, 3000);  
        }) 
        .catch ((error) =>{
          statusMessage.textContent = errorMessage;  
          console.error(error);
          setTimeout(() => {
            statusMessage.textContent = '';
            let poup = document.querySelector('.popup');
                poup.style.display = 'none';
                }, 3000);
        });
});
const postData = (body) =>{
  return fetch ('./server.php',{
     method: 'POST',
     headers:{'Content-Type': 'application/json'
    },
    body:JSON.stringify(body)
  }); 
};
};
export default sendForm;