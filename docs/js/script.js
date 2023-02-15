//Initialization AOS
  AOS.init();

//Initialization Navbar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

//Initialization Carousel
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

var options = {
    indicator: true,
    numVisible: 5,
    padding: 15,
    dist: -100,
}

/* Simplelightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });