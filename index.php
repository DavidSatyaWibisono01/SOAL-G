<!DOCTYPE html>
<html>
<head>
    <title>Rental Camera</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
    <h1>Rental Camera</h1>

    <h2>Jenis Kamera yang Tersedia:</h2>
    <ul id="camera-list"></ul>

    <h2>Form Pemesanan</h2>
    <form id="order-form">
        <label for="camera-type">Jenis Kamera:</label>
        <select id="camera-type" name="camera-type">
            <option value="kamera1">Kamera 1</option>
            <option value="kamera2">Kamera 2</option>
            <option value="kamera3">Kamera 3</option>
            <!-- Tambahkan opsi kamera lain jika diperlukan -->
        </select>

        <label for="rental-duration">Durasi Rental (hari):</label>
        <input type="number" id="rental-duration" name="rental-duration">

        <input type="submit" value="Submit">
    </form>

    <script src="assets/js/script.js"></script>
</body>
</html>
