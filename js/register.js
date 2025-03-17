document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.createElement('p'); // Error message element
    registrationMessage.classList.add('text-red-600', 'mt-2', 'text-center');
    registrationForm.appendChild(registrationMessage);

    // Regex patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const phoneNumberPattern = /^07\d{8}$/; // Jordanian phone number pattern

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            registrationMessage.textContent = ''; // Clear previous messages

            const fullName = document.getElementById('fullName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            const termsChecked = document.getElementById('terms').checked;

            // Validation checks
            if (!fullName) {
                registrationMessage.textContent = "يرجى إدخال الاسم الكامل.";
                return;
            }

            if (!phoneNumberPattern.test(phone)) {
                registrationMessage.textContent = "يجب أن يكون رقم الهاتف مكونًا من 10 أرقام ويبدأ بـ 07.";
                return;
            }

            if (!emailPattern.test(email)) {
                registrationMessage.textContent = "تنسيق البريد الإلكتروني غير صحيح.";
                return;
            }

            if (!passwordPattern.test(password)) {
                registrationMessage.textContent = "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وحرف كبير، وحرف صغير، ورقم.";
                return;
            }

            if (password !== confirmPassword) {
                registrationMessage.textContent = "كلمات المرور غير متطابقة.";
                return;
            }

            if (!termsChecked) {
                registrationMessage.textContent = "يجب الموافقة على الشروط والأحكام.";
                return;
            }

            const users = JSON.parse(localStorage.getItem('ramadanUsers') || '[]');

            if (users.some(user => user.email === email)) {
                registrationMessage.textContent = "البريد الإلكتروني مسجل بالفعل.";
                return;
            }

            if (users.some(user => user.phone === phone)) {
                registrationMessage.textContent = "رقم الهاتف مسجل بالفعل.";
                return;
            }

            // Store new user data
            const newUser = { fullName, phone, email, password };
            users.push(newUser);
            localStorage.setItem('ramadanUsers', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            registrationMessage.classList.replace('text-red-600', 'text-green-600');
            registrationMessage.textContent = "تم التسجيل بنجاح! جاري التحويل...";
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }
});
