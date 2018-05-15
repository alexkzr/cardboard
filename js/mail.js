// Отправка заявки 
$(document).ready(function() {
	$("#form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "../mailer/smart.php",
			data: str,
			success: function(msg) {
        console.log('sent');
				if(msg == 'ok') {
          console.log('sent1');
					$('#thankyou').css('opacity','1');
					$('#thankyou').css('visibility','visible');
				}
				else {
          console.log('sent2'); 
					$('.popup-heading').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('#thankyou').css('opacity','1');
					$('#thankyou').css('visibility','visible');
				}
			}
		});
		return false;
	});
});