// http://codepen.io/grayghostvisuals/pen/MYygea
$('.radio').on('click', function() {
    $(".role-part").removeClass('active');
    $(".part"+this.value).addClass('active');
});
