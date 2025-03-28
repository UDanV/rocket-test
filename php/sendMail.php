<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require '/home/ipool/vendor/phpmailer/phpmailer/src/Exception.php';
require '/home/ipool/vendor/phpmailer/phpmailer/src/PHPMailer.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/ipool/vendor/autoload.php';

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
        $mail->Subject = 'Данные отправлены с сайта тестового задания.';
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