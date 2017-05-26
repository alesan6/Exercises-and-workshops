$(function(){
  var slide = $('div').find('span');
  const list = $('div').find('ul');
  list.hide();
  slide.on('mouseenter', function() {
    var slider = $(this);
    var show = () => slider.next().slideDown();
    show();
  });
  slide.on('mouseleave', function(){
    list.slideUp();
  });
});
