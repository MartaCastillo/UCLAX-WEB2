var lbox = document.querySelector('.lightbox');
var lbox_image = document.querySelector('.lightbox img');
var lbox_title = document.querySelector('.lightbox .title');
var lbox_description = document.querySelector('.lightbox .description');
var lbox_close = document.querySelector('.lightbox .close');


var images = document.querySelectorAll('.gallery img');


function lbox_on() {
    var theSrc = this.src;
    var title = this.dataset.title;
    var text = this.dataset.text;

    lbox_image.src = theSrc;
    lbox_title.innerHTML = title;
    lbox_description.innerHTML = text;

    lbox.style.display = 'block';

}

function lbox_off() {
    lbox.style.display = 'none';
}

lbox_close.addEventListener('click', lbox_off);

images.forEach(function(image){
    image.addEventListener('click', lbox_on);
});