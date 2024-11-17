document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (!name.includes(' ')) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate Message
    const message = document.getElementById('message').value;
    const messageError = document.getElementById('messageError');
    if (message.trim() === '' || message.length > 300) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
