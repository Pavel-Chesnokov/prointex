<?php
// Файлы phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './php/vendor/autoload.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$file = $_FILES['userfile'];
$file_modal = $_FILES['userfile_modal'];
// Server side validation
function isValid() {
    // This is the most basic validation for demo purpose. Replace this with your own server side validation
    if($_POST['name'] != "" && $_POST['email'] != "" && $_POST['message'] != "") {
        return true;
    } else {
        return false;
    }
}

$error_output = '';
$success_output = '';

if(isValid()) {
 //   Build POST request to get the reCAPTCHA v3 score from Google
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
  //  $recaptcha_secret = '6Leoa68ZAAAAAJbbTOFKUDB7x8HeV8AW33ATb3Ba'; // Insert your secret key here
    $recaptcha_secret = '6LfsKrAZAAAAAE24ay7eta2aW6XnP88z-lSqKJiv'; // Insert your secret key here
    $recaptcha_response = $_POST['recaptcha_response'];

    // Make and decode POST request
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);
    // Take action based on the score returned
    if ($recaptcha->success == true && $recaptcha->score >= 0.5 && $recaptcha->action == 'contact') {
        // This is a human. Insert the message into database OR send a mail
        //send a mail
        // require_once "send.php";
        $mail = new PHPMailer;
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";

    $mail->isSMTP();
    $mail->CharSet = "utf-8";
    $mail->Host = 'smtp.beget.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'chesnokov@brelok.site'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
    $mail->Password = 'Leutxior7'; // Ваш пароль
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('chesnokov@brelok.site'); // Ваш Email
    $mail->addAddress('chesnokov@brelok.site'); // Email получателя
        // // Прикрипление файлов к письму
        if (!empty($file['name'][0])) {
            for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
                $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
                $filename = $file['name'][$ct];
                if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                    $mail->addAttachment($uploadfile, $filename);
                    $rfile[] = "Файл $filename прикреплён";
                } else {
                    $rfile[] = "Не удалось прикрепить файл $filename";
                }
            }
        }
        if (!empty($file_modal['name'][0])) {
            for ($ct = 0; $ct < count($file_modal['tmp_name']); $ct++) {
                $uploadfile = tempnam(sys_get_temp_dir(), sha1($file_modal['name'][$ct]));
                $filename = $file_modal['name'][$ct];
                if (move_uploaded_file($file_modal['tmp_name'][$ct], $uploadfile)) {
                    $mail->addAttachment($uploadfile, $filename);
                    $rfile[] = "Файл $filename прикреплён";
                } else {
                    $rfile[] = "Не удалось прикрепить файл $filename";
                }
            }
        }
        // -----------------------
        // Само письмо
        // -----------------------
    $mail->isHTML(true);
    $mail->Subject = 'Заявка с сайта';
    $mail->Body    =  "<b> Имя: </b> $name <br/><b>Телефон:</b> $phone <br/></b><b>Почта:</b> $email <br/><b>Текст письма:</b> $message";

// Проверяем отравленность сообщения
    if ($mail->send()) {
        $success_output = "Your message sent successfully";
        // echo "$msg";
    } else {
        $error_mail_output = "Сообщение не было отправленно, сервер не отвечает";
    }

    } catch (Exception $e) {
        echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }
    } else {
        // Server side validation failed
        $error_output = "Something went wrong. Please try again later";
    }
    }   else {
        $error_output = "Please fill all the required fields";
    }

    $output = array(
        'error'     =>  $error_output,
        'success'   =>  $success_output,
        'error_mail'   =>  $error_mail_output
    );

    // Output needs to be in JSON format
    echo json_encode($output);

    ?>