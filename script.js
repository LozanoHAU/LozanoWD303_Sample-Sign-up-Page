const form = document.getElementById('signupForm');
const displayContainer = document.getElementById('displayContainer');
const displayData = document.getElementById('displayData');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const genderEl = document.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : 'Not specified';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const username = document.getElementById('username').value;

    const formattedDob = dob ? new Date(dob).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : 'N/A';

    displayData.innerHTML = `
        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Date of Birth:</strong> ${formattedDob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Password:</strong> ${'*'.repeat(password.length)} 
           (hidden for security)</p>
        <p><strong>Address:</strong> ${address}</p>
    `;

    displayContainer.classList.add('show');
    displayContainer.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'end' 
    });
    form.reset();
});

resetBtn.addEventListener('click', function() {
    form.reset();
    displayContainer.classList.remove('show');
});