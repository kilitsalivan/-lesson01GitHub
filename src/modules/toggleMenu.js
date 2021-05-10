const toggleMenu = () =>{
    const body = document.querySelector('body'),
          menu = document.querySelector('menu');
            
          const handlerMenu = () => {
              menu.classList.toggle('active-menu');
    };
    body.addEventListener('click', (event) =>{
            let target = event.target;
       if (target.closest('.menu')|| target.closest('.close-btn')){
              handlerMenu();
           } else 
           if (target.closest('ul>li'))
            {
              menu.classList.remove('active-menu');
            } else { target = target.closest('.active-menu');
          }
          if (!target){
            menu.classList.remove('active-menu');
          }    
    });
    }; 
    export default toggleMenu;