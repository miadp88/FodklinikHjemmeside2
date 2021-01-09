//Cards

$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
    
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
    
        $("div.cards")
          .removeClass("showing");
      } else {
        
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});

//lightBox


function openModal() {
  document.getElementById("myModal").style.display = "block";
}


function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length > 0){
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
}






//contactform

// function initialize() {
//   var mapOptions = {
//     center: new google.maps.LatLng(28.1823295, -82.352912),
//     zoom: 9,
//     mapTypeId: google.maps.MapTypeId.HYBRID,
//     scrollwheel: false,
//     draggable: false,
//     panControl: true,
//     zoomControl: true,
//     mapTypeControl: true,
//     scaleControl: true,
//     streetViewControl: true,
//     overviewMapControl: true,
//     rotateControl: true,
//   };
//   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
// }
// google.maps.event.addDomListener(window, 'load', initialize);
