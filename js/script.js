function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var interested = document.getElementById("interested").value;

    if (username == '') {
        alert('name is required!!')
        return false
    } else if (email == "") {
        alert("Email is required");
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address");
        return false;
    } else if (interested == "") {
        alert('choose one interested!!')
        return false;
    } else{
        return sendMessage(true);
    }
}

function sendMessage(message) {
        alert("Pesan ini akan muncul sebentar sebelum Anda dialihkan ke halaman lain.");

        // Mengarahkan pengguna ke halaman tertentu setelah 3 detik
        setTimeout(function () {
            window.location.href = "testing.html"; // Ganti "halaman_tujuan.html" dengan URL halaman yang Anda inginkan
        }, 3000); // Waktu penundaan dalam milidetik (3000 ms = 3 detik)
    
}