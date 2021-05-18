const scrollUp = () => {

    const up = document.querySelector('.up'),
          sec = document.querySelector('.services-section')
    up.style.display = ' none';
  
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= sec.offsetTop) {
            up.classList.add('active');
            up.style.display = 'block';
        } else if(document.documentElement.scrollTop < sec.offsetTop) {
            up.classList.remove('active');
            up.style.display = ' none';
        }
    });
    up.addEventListener('click', () => {
        window.scrollTo(
          { 
          top: 0,
          behavior: 'smooth' 
        });
    });
  };
  export default scrollUp;