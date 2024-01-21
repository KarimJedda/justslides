window.onload = function() {
  var body = document.body;
  var slides = {};
  var currentSlideIndex;

  function resizeToFit(element) {
    var style = element.style;
    var fontSize = 1000;
    var availableTopSpace, availableLeftSpace;

    style.display = "inline";
    style.fontSize = fontSize + "px";
    style.position = "absolute";

    while (true) {
      availableLeftSpace = innerWidth - element.offsetWidth;
      availableTopSpace = innerHeight - element.offsetHeight;

      if (availableTopSpace > 0 && availableLeftSpace > 0) break;

      fontSize -= fontSize * 0.05;
      style.fontSize = fontSize + "px";
    }

    style.display = "block";
    style.top = availableTopSpace / 2 + "px";
    style.left = availableLeftSpace / 2 + "px";
  }

  // Store all child elements of the body as slides and remove them
  for (var element, slideNumber = 0; element = body.firstChild;) {
    if (element.nodeType === 1) slides[++slideNumber] = element;
    body.removeChild(element);
  }

  body.appendChild(document.createComment(""));

  function synchronizeSlides() {
    setTimeout(synchronizeSlides, 50);

    var requestedSlideIndex = parseInt(location.hash.match(/\d+/)) || 0;

    if (currentSlideIndex === requestedSlideIndex) return;

    requestedSlideIndex = Math.max(Math.min(slideNumber, requestedSlideIndex), 1);
    var nextSlide = slides[location.hash = currentSlideIndex = requestedSlideIndex];

    body.replaceChild(nextSlide, body.firstChild);
    resizeToFit(nextSlide);
  }
  synchronizeSlides();

  const FORWARD = 1;
  const BACKWARD = -1;
  const keyToSlideDirection = {
    "ArrowRight": FORWARD, "ArrowLeft": BACKWARD,
    "PageDown": FORWARD, "PageUp": BACKWARD
  };

  document.onkeydown = function(event) {
    var newIndex = currentSlideIndex + keyToSlideDirection[event.key];

    if (newIndex in slides) location.hash = newIndex;
  };

  document.ontouchstart = function(event) {
    if (event.target.href) return;

    var newIndex = currentSlideIndex + (event.touches[0].pageX > innerWidth / 2 ? FORWARD : BACKWARD);

    if (newIndex in slides) location.hash = newIndex;
  };
}
