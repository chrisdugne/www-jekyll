// http://codepen.io/grayghostvisuals/pen/MYygea
$('.expander-icon').on('click touchstart', function() {
  var $card = $(".expander-card." + this.classList[1]);
  $(this).toggleClass('active');
  $card.toggleClass('active');
});
