const apiUrl = 'http://localhost:5000/api/auth';

document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const res = await fetch(`${apiUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();
        document.getElementById('signupMessage').innerText = data.message || 'Signup successful';
    } catch (error) {
        document.getElementById('signupMessage').innerText = 'Signup failed';
    }
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const res = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        document.getElementById('loginMessage').innerText = data.message || 'Login successful';
    } catch (error) {
        document.getElementById('loginMessage').innerText = 'Login failed';
    }
});

