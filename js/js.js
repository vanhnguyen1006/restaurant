window.onload = function () {

}

function view(divId) {
    divs = document.querySelectorAll('.dropdown-menu');
    for (var i = 0; i < divs.length; ++i) {
        if (divs[i].id == divId) {
            if (divs[i].style.display == 'block') {
                divs[i].style.display = 'none';
            }
            else {
                divs[i].style.display = 'block';
            }
        }
        else {
            divs[i].style.display = 'none';
        }
    }
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
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }


    const slideshowImages = document.querySelectorAll(".content-area input");

    const nextImageDelay = 5000;
    let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)
    
    // slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;
    
    setInterval(nextImage, nextImageDelay);
    
    function nextImage() {
      // slideshowImages[currentImageCounter].style.display = "none";
      slideshowImages[currentImageCounter].style.opacity = 0;
    
      currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
    
      // slideshowImages[currentImageCounter].style.display = "block";
      slideshowImages[currentImageCounter].style.opacity = 1;
    }
