<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require __DIR__ . '/../vendor/phpmailer/phpmailer/src/Exception.php';
require __DIR__ . '/../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ . '/../vendor/phpmailer/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));

    if (empty($name) || empty($phone)) {
        echo json_encode(['success' => false, 'message' => 'Все поля обязательны для заполнения.']);
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'danil.vasin-06@mail.ru';
        $mail->Password = 'iuVzXydJED8wugrpfEpc';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('danil.vasin-06@mail.ru', 'UDanV');
        $mail->addAddress('danil17092006@gmail.com', 'Recipient Name');

        $mail->isHTML(true);
        $mail->Subject = 'Data sended by UDanV (test exercise).';
        $mail->Body    = "Имя: $name<br>Телефон: $phone";

        $mail->send();

        echo json_encode(['success' => true, 'message' => 'Письмо успешно отправлено']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => "Ошибка при отправке: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Неверный метод запроса.']);
}
?>