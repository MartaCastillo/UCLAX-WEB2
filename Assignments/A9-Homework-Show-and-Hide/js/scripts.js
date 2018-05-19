var button = document.querySelector('button.product');
var showHideText = document.querySelector('button.product span');
var orderDetails = document.querySelector('div.order-details');
  console.log('Button', button);
  console.log('Show Hide Text', showHideText);
  console.log('Depart Details', orderDetails);

  // 1. Hide the order-details
  orderDetails.style.display = 'none';

  // 2. When user clicks on button (toggle)
  button.addEventListener('click', function(){
    if (orderDetails.style.display == 'none')
    {
      console.log('Do A');
    // a. Shows order-details
        orderDetails.style.display = 'block';
        // Change name to 'hide'
        showHideText.innerHTML = 'Hide';
    }
    else
    {
      console.log('Do B');
    // b. Hide order-details
        orderDetails.style.display = 'none';
        // Change name to 'show'
        showHideText.innerHTML = 'Show';
    }
  });
