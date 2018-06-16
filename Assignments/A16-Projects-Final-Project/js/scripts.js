window.onload = function() {
/*-------------------------------------
| Slideshow Faded
-------------------------------------*/
function slideshow_faded() {

    var speed = 1;
    var pause = 4;

    var slideshow_faded = $('.slideshow.faded');
    var slideshow_container = slideshow_faded.find('.slideshow-container');
    var slides = slideshow_container.find('img');

    slideshow_container.find('img:gt(0)').css({'opacity':'0'});

    function slide_second_image() {
        slideshow_container
            .find('img:eq(1)')
            .delay((pause * 1000))
            .animate({'opacity':'1'}, (speed * 1000), shuffle_first_image);
    }

    function shuffle_first_image() {
        slideshow_container
            .find('img:eq(0)')
            .css({'opacity':'0'})
            .appendTo(slideshow_container);
        slide_second_image();
    }
    slide_second_image();
}
slideshow_faded();




/*-------------------------------------
| Toggle Hamburger Menu
-------------------------------------*/
function toggle_hamburger() {
    var hamburger = document.querySelector('.opening .hamburger');
    var body = document.querySelector('body');

    hamburger.addEventListener('click', function(){
        body.classList.toggle('mainmenu-show');
    });
}
toggle_hamburger();


};

/*-------------------------------------
| Tabbed
-------------------------------------*/

var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll('.tabbed section');

function switchSection(whichSection) {

  whichSection = whichSection - 1;

  console.log(whichSection);

  for(var i = 0; i < theSections.length; i++) {
    theSections[i].style.display = 'none';
  }

  theSections[whichSection].style.display = 'block';

  tabLinks.forEach(function(theLink){
    theLink.classList.remove('chosen');
  });

  tabLinks[whichSection].classList.add('chosen');
}

switchSection(1);

tabLinks.forEach(function(currentLink){
  currentLink.addEventListener('click', function(event) {
    console.log(event);

    event.preventDefault();

    var whatSect = this.dataset.section;
    switchSection(whatSect);
  });
});

/*-------------------------------------
| Lightbox
-------------------------------------*/

var theImages = document.querySelectorAll('.myLightbox');
var theLightbox = document.querySelector('.lightbox');
var theCloseButton = document.querySelector('.lightbox .close');

var lboxImage = document.querySelector('.lightbox img');
var lboxTitle = document.querySelector('.lightbox .title');
var lboxDesc = document.querySelector('.lightbox .description');

function light_on(){

  lboxImage.src = this.src;
  lboxTitle.innerHTML = this.dataset.title;
  lboxDesc.innerHTML = this.dataset.text;

  theLightbox.style.display = 'block';

}

var light_off = function() {
  console.log('OFF');
  theLightbox.style.display = 'none';
};

theImages[0].addEventListener('click', light_on);
theImages[1].addEventListener('click', light_on);
theImages[2].addEventListener('click', light_on);
theImages[3].addEventListener('click', light_on);
theImages[4].addEventListener('click', light_on);
theImages[5].addEventListener('click', light_on);
theImages[6].addEventListener('click', light_on);
theImages[7].addEventListener('click', light_on);
theImages[8].addEventListener('click', light_on);
theImages[9].addEventListener('click', light_on);
theImages[10].addEventListener('click', light_on);
theImages[11].addEventListener('click', light_on);

theCloseButton.addEventListener('click', light_off);


/*-------------------------------------
| Hover Archive
-------------------------------------*/

var theImagen = document.querySelectorAll('.archive img');

console.log(theImagen);

theImagen.forEach(function(imagen){
  imagen.addEventListener('mouseover', function() {
    this.src = this.dataset.over;
  });

  imagen.addEventListener('mouseout', function(){
    this.src = this.dataset.out;
  });

});
