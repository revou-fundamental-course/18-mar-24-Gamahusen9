function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var interested = document.getElementById("interested").value;

    if (username == '') {
        alert('name is required!!')
        return false
    }

    // Email validation
    if (email == "") {
        alert("Email is required");
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address");
        return false;
    }

    if (interested == "") {
        alert('choose one interested!!')
        return false;
    }

    alert("Form succesfully submitted!")
    return true;


}