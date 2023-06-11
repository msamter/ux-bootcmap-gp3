
//let slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls

// Thumbnail image controls
//function currentSlide(n) {
// showSlides(slideIndex = n);
//}
  // function showSlides(n) {
     // let i;
      //let slides = document.getElementsByClassName("mySlides");
      //let dots = document.getElementsByClassName("dot");
      //if (n > slides.length) {slideIndex = 1}
      //if (n < 1) {slideIndex = slides.length}
      //for (i = 0; i < slides.length; i++) {
        //slides[i].style.display = "none";
      //}
      //for (i = 0; i < dots.length; i++) {
        //dots[i].className = dots[i].className.replace(" active", "");
      //}
      //slides[slideIndex-1].style.display = "block";
      //dots[slideIndex-1].className += " active";
    //}
let slideIndex = 0;
showSlides();
    
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
  
  
$(document).ready(function() {
    // jQuery code goes here
    // This code will be executed once the document is fully loaded
  
    // Example: Change the text of an element when clicked
    $('#myButton').click(function() {
      $('#myText').text('Hello, jQuery!');
    });

  });
  $(document).ready(function(){

    $('#searchbar').focus();

    $('#donate-buttons').on('click', '.btn-blue', function(e) {
      e.preventDefault();
      $('.active').removeClass('active');
      $('#other-input').hide().siblings('#other').show();
      $(this).filter('.btn-blue').addClass("active");
      var value = $(this).data('impact');
      $(this).closest('div').find('p').text("" + value);
      $('#other-input').find('input').val('');  
    });
      
    $('.btn-green').on('click', function() {
      var dollar;
      var input = $('#other-input').find('input').val();
      if ( !input ) {
        dollar = $('.active').data('dollars');
       } else if ( $.trim(input) === '' || isNaN(input)) {
        // empty space leaves value = 'undefined'. 
        // Have to fix $.trim(input) == '' above so that it works.
        console.log('Yes');
        dollar = "Please enter a number."; 
      } else {
        dollar = input;
      }
      $('#price').text(""+dollar);
    });

    $('#other').on('click', function(e) {
      e.preventDefault(); 
      var buttons = $(this).parent('#donate-buttons');
      buttons.find('.active').removeClass('active');
      var other = $(this).hide().siblings('#other-input');
      other.show();
      other.find('input').focus();
      var pText = buttons.siblings('p');
      pText.text("Thank you!");
      var oValue = other.find('input');
      oValue.keyup(function() {
        if ( oValue.val() > 50 ) {
          pText.text("Thank you!" + " You\'re donation covers housing and counseling services for " + oValue.val()/25 + " people.");
        } else {
          pText.text("Thank you!");
        }
      });
    }); 

  });