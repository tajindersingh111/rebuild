document.getElementById("resetForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Prevent default form submission
    const email = document.getElementById("email").value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })  // Send only the email as a JSON object
        });

        const data = await response.json();
        if (response.ok) {
            alert('Password reset email sent!');  // Show success message if reset email is sent
        } else {
            alert(data.message || 'Failed to send reset email!');  // Show error message if process fails
        }
    } catch (error) {
        console.error('Error:', error);           // Log any network or server errors
    }
});
