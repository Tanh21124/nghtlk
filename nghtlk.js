// scroll event
addEventListener("DOMContentLoaded", function() {
var scrollIcon = document.getElementById('arrow-container');
  scrollIcon.addEventListener('click', function() {
    var scrollTarget = document.getElementById('container').offsetWidth/1.5; 
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth' 
    });
  });
});

//inhibit while loading
document.addEventListener('DOMContentLoaded', function() {
  var loadingBar = document.getElementById('rectangle');
  var pageContent = document.body;
  var loadingTime = 5000; // 5 seconds
  // Inhibit page functionality
  pageContent.classList.add('inhibited');
  function inhibitScroll(event) {
    event.preventDefault();
  }
  
  // Enable page functionality after loading time
  setTimeout(function() {
    loadingBar.style.display = 'none';
    pageContent.classList.remove('inhibited');
  // document.removeEventListener('wheel', inhibitScroll);
  // document.removeEventListener('touchmove', inhibitScroll);
  document.body.style.overflow = 'auto';
}, loadingTime);

// Attach event listeners to inhibit scrolling
// document.addEventListener('wheel', inhibitScroll);
document.addEventListener('touchmove', inhibitScroll);});

// Drop down
function toggleDropdown() {
  const content = document.querySelector('.dropdown-content');
  const arrow = document.querySelector('.dropdown-arrow');

  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  arrow.style.transform = content.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
}

// Toggle music and change icon appearance
function toggleAudio() {
  var audio = document.getElementById("backgroundMusic");
  var iconContainer = document.getElementById("stop-container");
  var icon = document.getElementById("stop");

  if (audio.paused) {
    audio.play();
    iconContainer.classList.add("clicked");
  } else {
    audio.pause();
    iconContainer.classList.remove("clicked");
  }
}
