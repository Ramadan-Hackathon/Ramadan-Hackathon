document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.createElement('p'); // Error message element
    loginMessage.classList.add('text-red-600', 'mt-2', 'text-center');
    loginForm.appendChild(loginMessage);

    // Regex patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            loginMessage.textContent = ''; // Clear previous messages

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Validation checks
            if (!emailPattern.test(email)) {
                loginMessage.textContent = "تنسيق البريد الإلكتروني غير صحيح.";
                return;
            }

            if (!passwordPattern.test(password)) {
                loginMessage.textContent = "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وحرف كبير، وحرف صغير، ورقم.";
                return;
            }

            const users = JSON.parse(localStorage.getItem('ramadanUsers') || '[]');
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                loginMessage.classList.replace('text-red-600', 'text-green-600');
                loginMessage.textContent = "تم تسجيل الدخول بنجاح! جاري التحويل...";
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to dashboard
                }, 1500);
            } else {
                loginMessage.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
            }
        });
    }
});
