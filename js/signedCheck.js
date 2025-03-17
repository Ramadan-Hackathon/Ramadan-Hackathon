document.addEventListener('DOMContentLoaded', function () {
    // Get references to the navbar elements
    const signUpButton = document.getElementById('signUpButton');
    const profileContainer = document.getElementById('profileContainer');
    const logoutButton = document.getElementById('logoutBtn');

    // Check if a user is signed in by checking localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // If currentUser exists, show the logged-in navbar
        signUpButton.style.display = 'none'; // Hide "سجل معنا"
        profileContainer.style.display = 'flex'; // Show profile and logout options
    } else {
        // If no currentUser, show the sign-up button
        signUpButton.style.display = 'flex'; // Show "سجل معنا"
        profileContainer.style.display = 'none'; // Hide profile and logout options
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            localStorage.removeItem('currentUser'); // Remove user data from localStorage
            window.location.href = 'index.html'; // Redirect to homepage
        });
    }
});
