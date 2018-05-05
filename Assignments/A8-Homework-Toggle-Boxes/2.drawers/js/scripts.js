var drawers = document.querySelectorAll('.drawer');

  console.log(drawers);

/*Drawer one -----------------------------*/
  drawers[0].addEventListener('click', function(){
    drawers[0].classList.toggle('on');
  });

/*Drawer two -----------------------------*/
  drawers[1].addEventListener('click', function(){
    drawers[1].classList.toggle('on');
  });

/*Drawer three -----------------------------*/
  drawers[2].addEventListener('click', function(){
    drawers[2].classList.toggle('on');
  });

 /*Drawer four -----------------------------*/
  drawers[3].addEventListener('click', function(){
    drawers[3].classList.toggle('on');
  });