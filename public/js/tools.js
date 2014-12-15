function getGreenToRed(percent){
    var r = percent<50 ? 255 : Math.floor(255-(percent*2-100)*255/100);
    var g = percent>50 ? 255 : Math.floor((percent*2)*255/100);
    return 'rgb('+r+','+g+',0)';
}
