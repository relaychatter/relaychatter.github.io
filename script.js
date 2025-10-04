// Send message
$('button').click(function(e) {
  let chan = $(e.currentTarget).siblings('.chan').val();
  let elMsg = $(e.currentTarget).siblings('.msg');
  let elPanel = $(e.currentTarget).parent();
	elPanel.attr('disabled', '');
  $('.chan').attr('disabled', '');
  
  $.get('https://demo.httprelay.io/sync/' + chan + '?' + elMsg.val())
  	.done(function(data, textStatus, request) {
      elPanel.append(request.getResponseHeader('Httprelay-Query') + '<br>');
  	})
  	.always(function() {
  		elPanel.removeAttr('disabled');
		  $('.chan').removeAttr('disabled');
		  elMsg.val(null);
  	});
})

var linkUrl;
$('.chan').on('paste keyup', function(e) {
	$('.chan').val($(e.currentTarget).val());
})

// Generating random channel id
$('.chan').val(Math.random().toString(36).substr(4)).trigger('change')
