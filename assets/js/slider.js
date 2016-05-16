$(function(){
  var $sliderContainer = $('#slider-container');
  var width = 720;
  var imageCount = $sliderContainer.children('ul').children('li').length;
  var negMaxwidth = "-" + ((imageCount -1 ) * width) + 'px';
  var posMaxwidth = '0px';
  var sliderController = function(){
    var classType = $(this).attr('class');
    var $ulElement = $sliderContainer.children('ul');
    switch (classType) {
      case 'next':
        if ($ulElement.css('margin-left') == negMaxwidth )
        {
          $ulElement.css('margin-left', 0);
        }else{
          $ulElement.css('margin-left','-='+width);
        }
        console.log('next');
        break;
      case 'previous':
        if ($ulElement.css('margin-left') == posMaxwidth )
        {
          $ulElement.css('margin-left', negMaxwidth);
        }else{
          $ulElement.css('margin-left','+='+width);
        }
        console.log('previous');
        break;

    }
  };
  var $previous = $sliderContainer.children('.previous');
  var $next = $sliderContainer.children('.next');
  $sliderContainer.children('div').on('click', sliderController);
});
