fitur ini digunakan untuk generating hash 

<?php
$password = 'isi';
$hash = password_hash($password, PASSWORD_DEFAULT);
echo "Hash untuk password 'isi':<br>";
echo "<strong>" . $hash . "</strong>";
?>
