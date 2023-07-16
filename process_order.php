<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data pemesanan dari POST request
    $cameraType = $_POST["cameraType"];
    $rentalDuration = $_POST["rentalDuration"];

    // Menyimpan data pemesanan dalam file .txt
    $orderData = "Jenis Kamera: " . $cameraType . "\n" . "Durasi Rental: " . $rentalDuration . " hari\n";
    file_put_contents("orders.txt", $orderData, FILE_APPEND);
}
?>
