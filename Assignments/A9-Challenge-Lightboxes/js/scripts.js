var imageDials = document.querySelectorAll('div.choices img'); // returns an array
var linkTheme = document.querySelector('link.theme'); // returns the first item it finds

console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);

imageDials.forEach(function(item){
  item.addEventListener('click', function() {
    console.log('Looped Version');

    //add Class to chosen one.
    //no matter which one is on, turn them all off
    imageDials[0].classList.remove('chosen');
    imageDials[1].classList.remove('chosen');
    imageDials[2].classList.remove('chosen');

    // add to the chosen one
    item.classList.add('chosen');

    var whichTheme = item.dataset.theme;
    linkTheme.href = whichTheme;
  });
});
