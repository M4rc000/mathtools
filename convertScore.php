<?php
$input = $_GET['numberServer'];

if ($input == 100){
    echo "A";
}
 else if ($input <= 99 && $input >= 90) {
     echo "B";
}
 else if ($input <= 89 && $input >= 80) {
        echo "C";
} else if ($input <= 79 && $input >= 70) {
    echo "D";
} else if ($input <= 69 && $input >= 1) {
 echo "D";
} else if ($input == 0) {
 echo "Failed";
} else { 
echo "Input is wrong !";
}
?>