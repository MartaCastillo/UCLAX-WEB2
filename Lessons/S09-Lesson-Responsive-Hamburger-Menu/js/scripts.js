window.onload = function() {
/*-------------------------------------
| Slideshow Faded
-------------------------------------*/
function slideshow_faded() {

    // console.log(1);

    // in seconds
    var speed = 1;
    var pause = 4;

    // grabs some stuff
    var slideshow_faded = $('.slideshow.faded');
    var slideshow_container = slideshow_faded.find('.slideshow-container');
    var slides = slideshow_container.find('img');

    // set the stage
    slideshow_container.find('img:gt(0)').css({'opacity':'0'});

    // animate second image, opacity up
    function slide_second_image() {
        // console.log(2);
        slideshow_container
            .find('img:eq(1)')
            .delay((pause * 1000))
            .animate({'opacity':'1'}, (speed * 1000), shuffle_first_image);
    }

    // send first image to back of line.
    function shuffle_first_image() {
        // console.log(3);
        slideshow_container
            .find('img:eq(0)')
            .css({'opacity':'0'})
            .appendTo(slideshow_container);
        slide_second_image(); //kepp party gging
    }
    slide_second_image(); //start the party
}
slideshow_faded();




/*-------------------------------------
| Toggle Hamburger Menu
-------------------------------------*/
function toggle_hamburger() {
    var hamburger = document.querySelector('.opening .hamburger');
    var body = document.querySelector('body');

    // console.log(hamburger, body);

    hamburger.addEventListener('click', function(){
        // console.log('ouch you got me');
        body.classList.toggle('mainmenu-show');
    });
}
toggle_hamburger();


}; //here ends window load