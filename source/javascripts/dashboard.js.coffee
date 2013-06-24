$ ->
  $('.sidebar-close').click (e) ->
    e.preventDefault()
    $('.projects').removeClass('opened')
    $('.feed').removeClass('with-projects')
    $(this).addClass('hide')

  $('.offices a').click (e) ->
    e.preventDefault()
    $('.projects').addClass('opened')
    $('.feed').addClass('with-projects')
    $('.sidebar-close').removeClass('hide')
