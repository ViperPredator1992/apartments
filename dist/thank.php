<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "semenovaleksandr407@gmail.com";
    $sendfrom   = "";
    $headers  = "From: Заявка на Аренду/Сдачу квартиры <sniper.semenov@ukr.net>\r\n";
    $headers .= "Reply-To: <sniper.semenov@ukr.net>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Заявка на Аренду/Сдачу квартиры";
#	if(isset($_POST['user_name'], $_POST['user_phone'], $_POST['user_email']))
        if(isset($_POST['user_name'], $_POST['user_phone']))

	{
		#$message = "<h2>$subject</h2><br><br><b>Имя:</b> ".$_POST['user_name']."<br><b>Телефон:</b> ".$_POST['user_phone']."<br><b>Почта:</b> ".$_POST['user_email'];
		$message = "<h2>$subject</h2><br><br><b>Имя:</b> ".$_POST['user_name']."<br><b>Телефон:</b> ".$_POST['user_phone']."<br><b>Почта:</b> ";

		$send = mail ($to, $subject, $message, $headers);
		if ($send == 'true')
		{
			header('Location: /lesson_24/thanks.html');
			exit;
		}
		else
		{
			echo '<center><p style="color:red"><b>Ошибка!</b></p></center>';
		}
	}
} else {
    header('Location: /lesson_24/thanks.html');
}
?>

