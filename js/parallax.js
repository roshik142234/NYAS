window.addEventListener('scroll', throttle(parallax2, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax2() {
  var scrolled = window.pageYOffset;
  var parallax2 = document.querySelector(".parallax2");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * -0.5) + 'px'
  parallax2.style.transform = 'translateY(' + coords + ')';
};