function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    var hamburger = document.querySelector('.nav_hamburger');
    var closeIcon = document.querySelector('.nav_close');

    if (x.className === 'navtoggle') {
      x.className += ' responsive';
      hamburger.style.display = 'none'; // Hide hamburger icon
      closeIcon.style.display = 'inline'; // Show close icon
    } else {
      x.className = 'navtoggle';
      hamburger.style.display = 'inline'; // Show hamburger icon
      closeIcon.style.display = 'none'; // Hide close icon
    }
}
