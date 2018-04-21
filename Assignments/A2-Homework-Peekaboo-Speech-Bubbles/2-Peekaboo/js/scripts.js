/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log('This is only seen by us.');

window.onload = function() {

  var items = document.querySelectorAll('.item');
  var texts = document.querySelectorAll('.text');
  var descrip = document.querySelectorAll('.desc');

  console.log(texts);
  console.log(texts [0] );
  console.log(texts [1] );
  console.log(texts [2] );
  console.log(texts [3] );
  console.log(texts [4] );
  console.log(texts [5] );

  /*Tiger -----------------------------*/
  items[0].addEventListener('mouseover', function(){
    console.log('coming leyend.');
    texts[0].classList.toggle('on');
    descrip[0].classList.toggle('on');
  });

  items[0].addEventListener('mouseout', function(){
    console.log('out leyend.');
    texts[0].classList.toggle('on');
    descrip[0].classList.toggle('on');
  });

/*Otters -----------------------------*/
  items[1].addEventListener('mouseover', function(){
    console.log('coming leyend.');
    texts[1].classList.toggle('on');
    descrip[1].classList.toggle('on');
  });

  items[1].addEventListener('mouseout', function(){
    console.log('out leyend.');
    texts[1].classList.toggle('on');
    descrip[1].classList.toggle('on');
  });

  /*Puppy -----------------------------*/
  items[2].addEventListener('mouseover', function(){
    console.log('coming leyend.');
    texts[2].classList.toggle('on');
    descrip[2].classList.toggle('on');
  });

  items[2].addEventListener('mouseout', function(){
    console.log('out leyend.');
    texts[2].classList.toggle('on');
    descrip[2].classList.toggle('on');
  });

  /*Chicks -----------------------------*/
  items[3].addEventListener('mouseover', function(){
    console.log('coming leyend.');
    texts[3].classList.toggle('on');
    descrip[3].classList.toggle('on');
  });

  items[3].addEventListener('mouseout', function(){
    console.log('out leyend.');
    texts[3].classList.toggle('on');
    descrip[3].classList.toggle('on');
  });

/*Monkeys -----------------------------*/
  items[4].addEventListener('mouseover', function(){
    console.log('coming leyend.');
    texts[4].classList.toggle('on');
    descrip[4].classList.toggle('on');
  });

  items[4].addEventListener('mouseout', function(){
    console.log('out leyend.');
    texts[4].classList.toggle('on');
    descrip[4].classList.toggle('on');
  });

  /*Ducks -----------------------------*/
  items[5].addEventListener('mouseover', function(){
    console.log('coming leyend.');
    texts[5].classList.toggle('on');
    descrip[5].classList.toggle('on');
  });

  items[5].addEventListener('mouseout', function(){
    console.log('out leyend.');
    texts[5].classList.toggle('on');
    descrip[5].classList.toggle('on');
  });

};