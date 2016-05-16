$('.site-links-mobile').click(function(){
  var $inputElement = $('#sidebartoggler').prop('checked');
  console.log($inputElement);
  if ($inputElement) {
    $('#sidebartoggler').prop('checked', false).delay(1000);
    console.log($inputElement);
  }
});
