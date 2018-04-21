/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log('This is only seen by us.');

window.onload = function() {

  var features = document.querySelectorAll('.feature');
  var bubbles = document.querySelectorAll('.bubble');

  console.log(bubbles);
  console.log(bubbles [0] );
  console.log(bubbles [1] );
  console.log(bubbles [2] );

  /*The Movie -----------------------------*/
  features[0].addEventListener('mouseover', function(){
    console.log('coming bubbles.');
    bubbles[0].classList.toggle('on'); 
  });

  features[0].addEventListener('mouseout', function(){
    console.log('out bubbles.');
    bubbles[0].classList.toggle('on'); 
  });

/*The Comic -----------------------------*/
  features[1].addEventListener('mouseover', function(){
    console.log('coming bubbles.');
    bubbles[1].classList.toggle('on'); 
  });

  features[1].addEventListener('mouseout', function(){
    console.log('out bubbles.');
    bubbles[1].classList.toggle('on'); 
  });

  /*The Story -----------------------------*/
  features[2].addEventListener('mouseover', function(){
    console.log('coming bubbles.');
    bubbles[2].classList.toggle('on'); 
  });

  features[2].addEventListener('mouseout', function(){
    console.log('out bubbles.');
    bubbles[2].classList.toggle('on'); 
  });

};