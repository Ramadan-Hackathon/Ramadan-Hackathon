document.addEventListener('DOMContentLoaded', function () {
    // Get references to the navbar elements
    const signUpButton = document.getElementById('signUpButton');
    const profileContainer = document.getElementById('profileContainer');
    const logoutButton = profileContainer?.querySelector('a[href="logout.html"]');

    // Check if a user is signed in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);

    if (currentUser) {
        // User is signed in
        if (signUpButton) signUpButton.style.display = 'none'; // Hide "سجل معنا"
        if (profileContainer) profileContainer.style.display = 'flex'; // Show profile and logout
    } else {
        // User is not signed in
        if (signUpButton) signUpButton.style.display = 'flex'; // Show "سجل معنا"
        if (profileContainer) profileContainer.style.display = 'none'; // Hide profile and logout
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            localStorage.removeItem('currentUser'); // Remove user data from localStorage
            window.location.href = '../index.html'; // Redirect to the homepage
        });
    }
});
