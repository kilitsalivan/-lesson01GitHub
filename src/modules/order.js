const order = () =>{
    const modalСallback = document.querySelector('.modal-callback'),
            modalOverlay  = document.querySelector('.modal-overlay '),
            body = document.querySelector('body');
    const displayBlock = () => {
        modalСallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };
    
    const displayClose = () => {
        modalСallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    };  
    
    body.addEventListener('click', (event) =>{
        let target = event.target;
        if (target.closest('#call') || target.matches('.button-services') || target.closest('.fancyboxModal') )
        { displayBlock();
        } else 
            if (target.closest('.modal-close') || target.closest('.modal-overlay ')   )
                {
                displayClose();
                } 
        }); 
}; 
export default order;