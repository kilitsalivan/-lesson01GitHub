const getcarousel = () =>{

    class SliderCarousel{
    constructor ({
      main,
      wrap,
      next,
      prev,
      infinity = false,
      slidesToShow = 3,
      position = 0
      }){
          this.main = document.querySelector(main),
          this.wrap = document.querySelector(wrap),
          this.next = document.querySelector(next),
          this.prev = document.querySelector(prev),
          this.slidesToShow = slidesToShow,
          this.slides = document.querySelector(wrap).children;
          this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
          };
        
    }
    init () {
  this.addGloClass();
  this.addStyle();
  this.controlSlider();
  }
    
  addGloClass (){
    this.main.classList.add('glo-slider');
    this.wrap.classList.add ('glo-slider__wrap');
  for (const item of this.slides) {
  item.classList.add('glo-slider__item');
  }
  } 
  
  addStyle () {
  const style = document.createElement('style');
  style.id = 'sliderCarusel-style';
  style.textContent = `
      .glo-slider{
        overflow: hidden !important;
      }
      .glo-slider__wrap{
        display: flex;
        transition: transform 0.5s !important;
        will-change: tranform !important;
        
      }
      .glo-slider__item {
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: auto 0 !important;
      }`;
    document.head.appendChild(style);
    }
  controlSlider (){
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
  }
  prevSlider (){
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0 ) {
        this.options.position = this.slides.length - this.slidesToShow;
      }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
     }
  nextSlider (){
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
      ++this.options.position;
    if (this.options.position > this.slides.length - this.slidesToShow ){
        this.options.position = 0;
      }
    this.wrap.style.transform =  `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }  
  } 
  const option = {
      main : '.services-elements',
      wrap : '.services-carousel',
      next: '.arrow-right',
      prev: '.arrow-left',
      infinity: true,
      slidesToShow: 3
  
  };  
  const carousel = new SliderCarousel(option);
    carousel.init ();
  };
  export default getcarousel;