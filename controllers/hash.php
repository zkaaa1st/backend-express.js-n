fitur ini digunakan untuk generating hash 

<?php
$password = '12345678';
$hash = password_hash($password, PASSWORD_DEFAULT);
echo "Hash untuk password '12345678':<br>";
echo "<strong>" . $hash . "</strong>";
?>