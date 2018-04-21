/*-------------------------------------
| Fancy Comment Heading (c2 + tab)
-------------------------------------*/
// alert('You linked to me.');

// single line Comment
/*
    multiline Comments
    look
    like
    this
*/
console.log('This is only seen by us.');

// wait for page to load before we try and use the orbs
window.onload = function() {

  // grabbing orbs and assigning to handle (variable)
  var orbs = document.querySelectorAll('.orb');

  console.log(orbs);
  console.log(orbs [0] );
  console.log(orbs [1] );
  console.log(orbs [2] );
  console.log(orbs [3] );

/*Orb 1 Management -----------------------------*/
  orbs[0].addEventListener('click', function(){
    console.log('Ouch you clicked me.');
    orbs[0].classList.toggle('on'); // classList is talking to the class in the html the one in the () is the specific class
  });
  orbs[0].addEventListener('mouseover', function(){
    console.log('Ouch you mouseovered me.');
    orbs[0].src = './img/sun.png';
  });
  orbs[0].addEventListener('mouseout', function(){
    console.log('Ouch you mouseoutted me.');
    orbs[0].src = './img/moon.png';
  });

  /*Orb 2 Management -----------------------------*/
    orbs[1].addEventListener('click', function(){
      console.log('Ouch you clicked me.');
      orbs[1].classList.toggle('on'); // classList is talking to the class in the html the one in the () is the specific class
    });
    orbs[1].addEventListener('mouseover', function(){
      console.log('Ouch you mouseovered me.');
      orbs[1].src = './img/sun.png';
    });
    orbs[1].addEventListener('mouseout', function(){
      console.log('Ouch you mouseoutted me.');
      orbs[1].src = './img/moon.png';
    });

    /*Orb 3 Management -----------------------------*/
      orbs[2].addEventListener('click', function(){
        console.log('Ouch you clicked me.');
        orbs[2].classList.toggle('on'); // classList is talking to the class in the html the one in the () is the specific class
      });
      orbs[2].addEventListener('mouseover', function(){
        console.log('Ouch you mouseovered me.');
        orbs[2].src = './img/sun.png';
      });
      orbs[2].addEventListener('mouseout', function(){
        console.log('Ouch you mouseoutted me.');
        orbs[2].src = './img/moon.png';
      });

      /*Orb 4 Management -----------------------------*/
        orbs[3].addEventListener('click', function(){
          console.log('Ouch you clicked me.');
          orbs[3].classList.toggle('on'); // classList is talking to the class in the html the one in the () is the specific class
        });
        orbs[3].addEventListener('mouseover', function(){
          console.log('Ouch you mouseovered me.');
          orbs[3].src = './img/sun.png';
        });
        orbs[3].addEventListener('mouseout', function(){
          console.log('Ouch you mouseoutted me.');
          orbs[3].src = './img/moon.png';
        });

}; //this is where window load ends
