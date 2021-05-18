const accordionBlok = () =>{
    let accordeon = document.querySelector('.accordeon'),
        accordeonTitle = accordeon.querySelectorAll('.title'),
        elementContent = accordeon.querySelectorAll('.element-content');

const getAccordeon = (index) => {
      for (let i = 0; i < elementContent.length; i++) {
          if (index === i) {
            accordeonTitle[i].parentElement.classList.add('active');
            elementContent[i].style.display = 'block';
          } else {
            accordeonTitle[i].parentElement.classList.remove('active');
            elementContent[i].style.display = 'none';
          }
      }
  };

  accordeon.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('title')) {
          accordeonTitle.forEach( (item, i) => {
            if(item === target) {
                  getAccordeon(i);
              }
          });
      }
  });
};
export default accordionBlok;