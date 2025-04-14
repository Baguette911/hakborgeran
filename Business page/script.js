document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    alert(`Thank you, ${name}! We have received your message.`);
});