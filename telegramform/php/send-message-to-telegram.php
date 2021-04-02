<?php
$msgs = [];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $token = "1616682898:AAG2ztJCaKHrIWP2wBUZ2XNE7YpPwv8869w";
    $chat_id = "955641655";
 
    if (!empty($_POST['name']) && !empty($_POST['phone'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";
        $urlForPhoto = $bot_url . "sendPhoto?chat_id=" . $chat_id;
 
        if(!empty($_FILES['file']['tmp_name'])) {
             
            // Путь загрузки файлов
            $path = $_SERVER['DOCUMENT_ROOT'] . '/telegramform/tmp/';
 
            // Массив допустимых значений типа файла
            $types = array('image/gif', 'image/png', 'image/jpeg');
 
            // Максимальный размер файла
            $size = 1024000;
 
            // Проверяем тип файла
             if (!in_array($_FILES['file']['type'], $types)) {
                 $msgs['err'] = 'Запрещённый тип файла.';
                echo json_encode($msgs);
                die();
             }
              
             // Проверяем размер файла
             if ($_FILES['file']['size'] > $size) {
                 $msgs['err'] = 'Слишком большой размер файла.';
                echo json_encode($msgs);
                die('Слишком большой размер файла.');
             }
              
             // Загрузка файла и вывод сообщения
             if (!@copy($_FILES['file']['tmp_name'], $path . $_FILES['file']['name'])) {
                 $msgs['err'] = 'Что-то пошло не так. Файл не отправлен!';
                 echo json_encode($msgs);
             } else {
                $filePath = $path . $_FILES['file']['name'];
                $post_fields = array('chat_id' => $chat_id, 'photo' => new CURLFile(realpath($filePath)) );
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_HTTPHEADER, array( "Content-Type:multipart/form-data" ));
                curl_setopt($ch, CURLOPT_URL, $urlForPhoto);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
                $output = curl_exec($ch);
                unlink($filePath);
             }
        }
 
        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $username = "ФИО. возраст: " . strip_tags($_POST['name']) . "%0A";
          }
        }

        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $Образование = "Образование: " . strip_tags($_POST['name']) . "%0A";
          }
        }
        
        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "Телефон: " . "%2B" . strip_tags($_POST['phone']) . "%0A";
          }
        }

        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $email = "email: " . strip_tags($_POST['name']) . "%0A";
          }
        }

        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $social = "Социальные сети: " . strip_tags($_POST['name']) . "%0A";
          }
        }

        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $Сфера = "Сфера: " . strip_tags($_POST['name']) . "%0A";
          }
        }
        
        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $7 = "Ответ: " . strip_tags($_POST['name']) . "%0A";
          }
        }

 
        if (isset($_POST['theme'])) {
          if (!empty($_POST['theme'])){
            $theme = "Тема: " .strip_tags($_POST['theme']);
          }
        }
        // Формируем текст сообщения
        $txt = $name . $phone . $theme;
 
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
          header('Location: fhankyou.html')
        } elseif ($sendTextToTelegram) {
          header('Location: fhankyou.html')
          return true;
        } else {
          echo "Error"
            die('Ошибка. Сообщение не отправлено!');
        }
 
    } else {
        echo "Error"
    }
} 
?>


