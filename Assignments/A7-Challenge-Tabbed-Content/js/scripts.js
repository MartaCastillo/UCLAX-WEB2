/*-------------------------------------
| Grab Some Assets
-------------------------------------*/
var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll('.tabbed section');

//console.log(tabLinks);
//console.log(theSections);

/*-------------------------------------
| One Function to Rule All
-------------------------------------*/
//function declaration
function switchSection(whichSection) {

  whichSection = whichSection - 1;

  console.log(whichSection);

  /*-------------------------------------
  | Sections
  -------------------------------------*/
  //hide them all
  for(var i = 0; i < theSections.length; i++) {
    theSections[i].style.display = 'none';
  }

  //show the chosen one
  theSections[whichSection].style.display = 'block';

  /*-------------------------------------
  | Links
  -------------------------------------*/
  tabLinks.forEach(function(theLink){
    theLink.classList.remove('chosen');
  });

  tabLinks[whichSection].classList.add('chosen');
}

//function call
switchSection(3);




/*-------------------------------------
| Manage Event listener on tabLinks
-------------------------------------*/
tabLinks.forEach(function(currentLink){
  currentLink.addEventListener('click', function(event) {
    console.log(event);
    
    //stop jumping
    event.preventDefault();

    //we will do this instead
    var whatSect = this.dataset.section;
    switchSection(whatSect);
  });
});
