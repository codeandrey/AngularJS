<?php
$answer = json_decode(file_get_contents('php://input'), true);
 
if(isset($answer['country']))
{
     
    echo json_encode($answer);
}
else
{  
    echo "Введенные данные некорректны";
}
?>
