$('.site-links-mobile').click(function(){
  var $inputElement = $('#sidebartoggler').prop('checked');
  console.log($inputElement);
  if ($inputElement) {
    $('#sidebartoggler').prop('checked', false).delay(6000);
    console.log($inputElement);
  }
});
