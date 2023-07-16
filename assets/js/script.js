document.addEventListener("DOMContentLoaded", function() {
    // Daftar jenis kamera yang tersedia
    var cameraList = ["Kamera 1", "Kamera 2", "Kamera 3"];

    // Menampilkan daftar kamera pada halaman
    var cameraListElement = document.getElementById("camera-list");
    for (var i = 0; i < cameraList.length; i++) {
        var li = document.createElement("li");
        li.textContent = cameraList[i];
        cameraListElement.appendChild(li);
    }

    // Mengirim data pemesanan ke server saat formulir disubmit
    var orderForm = document.getElementById("order-form");
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default

        // Mengambil nilai input dari formulir
        var cameraType = document.getElementById("camera-type").value;
        var rentalDuration = document.getElementById("rental-duration").value;

        // Mengirim data pemesanan ke server menggunakan AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "process_order.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                alert("Pemesanan berhasil!");
                orderForm.reset(); // Mengosongkan formulir setelah pemesanan berhasil
            }
        };
        xhr.send("cameraType=" + encodeURIComponent(cameraType) + "&rentalDuration=" + encodeURIComponent(rentalDuration));
    });
});
