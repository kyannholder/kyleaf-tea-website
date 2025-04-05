document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact Form Submission
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        responseMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
        responseMessage.classList.remove("hidden");
        form.reset();
    });

    // Login System
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginMessage = document.getElementById('loginMessage');

        // Check default credentials
        if (username === 'user' && password === 'password123') {
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            loginMessage.textContent = 'Invalid credentials. Please try again.';
            loginMessage.classList.remove('hidden');
        }
    });

    // Checkout System
    let cart = []; // Empty cart for now (add items to this array to simulate a filled cart)

    // Simulate adding items to cart (replace with actual cart logic)
    // cart.push('Item 1'); // Example item added to the cart

    // Checkout Button Click Event
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items to your cart before proceeding.');
        } else {
            window.location.href = 'checkout.html'; // Redirect to checkout page
        }
    });
});
