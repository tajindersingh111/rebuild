document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Prevent default form submission
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })  // Send email and password as a JSON object
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);  // Save the JWT token in localStorage
            window.location.href = '/dashboard.html';   // Redirect to dashboard if login is successful
        } else {
            alert(data.message || 'Login failed!');     // Show error message if login fails
        }
    } catch (error) {
        console.error('Error:', error);                 // Log any network or server errors
    }
});
