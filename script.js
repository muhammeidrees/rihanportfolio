function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email");
        return false;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters");
        return false;
    }

    return true;
}

function changeColor() {
    document.body.style.background = "#f5f5f5";
}