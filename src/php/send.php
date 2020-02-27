<?php
// Файлы phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$mail = new PHPMailer;
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";

    // Настройки вашей почты
    // $mail->isSMTP();
    // $mail->CharSet = "utf-8";
    // $mail->Host = 'smtp.beget.ru';
    // $mail->SMTPAuth = true;
    // $mail->Username = 'chesnokov@brelok.site'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
    // $mail->Password = 'Rt@rtqEyA6&J'; // Ваш пароль
    // $mail->SMTPSecure = 'ssl';
    // $mail->Port = 465;
    // $mail->setFrom('chesnokov@brelok.site'); // Ваш Email
    // $mail->addAddress('chesnokov@brelok.site'); // Email получателя
    // $mail->addAddress('p.chesnokov@gmail.com'); // Еще один email, если нужно.

    $mail->isSMTP();
    $mail->CharSet = "utf-8";
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'pavel.chestnyy@mail.ru'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
    $mail->Password = 'leutxiorijikg2'; // Ваш пароль
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('pavel.chestnyy@mail.ru'); // Ваш Email
    $mail->addAddress('pavel.chestnyy@mail.ru'); // Email получателя

    // Прикрипление файлов к письму
if (!empty($_FILES['userfile']['name'][0])) {
    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
        }
    }
}

if (!empty($_FILES['userfile2']['name'][0])) {
    for ($ct = 0; $ct < count($_FILES['userfile2']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile2']['name'][$ct]));
        $filename = $_FILES['userfile2']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile2']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
        }
    }
}

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
        $mail->Subject = 'Заголовок письма';
        $mail->Body    =  "<b> Имя: </b> $name <br/><b>Телефон:</b> $phone <br/></b><b>Почта:</b> $email <br/><b>Текст письма:</b> $message";


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}