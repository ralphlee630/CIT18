document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("form-message");

    if (name === "" || email === "") {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
    } else {
        message.textContent = "Message sent successfully!";
        message.style.color = "green";
        this.reset();
    }
});
