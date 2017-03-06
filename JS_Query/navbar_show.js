
$('#navbarDisplay').show(3000);
$('#headerDisplay').animate({
  width: "70%",
  opacity: 0.8,
  marginLeft: "0.6in",
  borderWidth: "10px"
}, 1500);

$('div.iconBar').hover(function() {
  $('div.sectionDesc').text('GitHub | LinkedIn | Heroku');
}, function() {
  $('div.sectionDesc').text('');
});

