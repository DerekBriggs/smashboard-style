//= require_tree .

$(function() {
  $('body, header').noisy ({
      'intensity' : 1,
      'size' : '30',
      'opacity' : 0.044,
      'fallback' : '',
      'monochrome' : false
  }).css('background-color', '#2b2c2e');

  $('.projects').noisy ({
      'intensity' : 1,
      'size' : '30',
      'opacity' : 0.03,
      'fallback' : '',
      'monochrome' : false
  }).css('background-color', '#272729');

});
