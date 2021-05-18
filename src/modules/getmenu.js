const getmenu = () =>{
    const anchors = document.querySelectorAll('a[href*="#"]');
    
    for (let anchor of anchors ){
        anchor.addEventListener('click', (event) =>{
        event.preventDefault();
    const id = anchor.getAttribute('href');
        document.querySelector('' + id).scrollIntoView({
            behavior: 'smooth',
            block:'start'
    });  
    });
    }
    };
    export default getmenu;