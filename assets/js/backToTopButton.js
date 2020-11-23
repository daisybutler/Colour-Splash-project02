// ------------------------ Uses an edited version of the code found at: https://codepen.io/deveb22/pen/QxPmGz

// Hides or displays the #back-to-top-button depending on the user's scroll position (feature present on homepage only).

var btn = $('#back-to-top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});