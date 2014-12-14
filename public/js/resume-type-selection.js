// http://codepen.io/grayghostvisuals/pen/MYygea
$('.radio').on('click', function() {
    $(".part1").css('display', 'none')
    $(".part2").css('display', 'none')
    $(".part3").css('display', 'none')
    $("."+this.value).css('display', 'block');
});
