document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            if (username === '' || password === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Simple validation - in a real app, this would be a server-side check
            if ((username === 'admin' || username === 'admin@starbucks.ph') && password === 'admin123') {
                // Store login status in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                alert('Login successful! Redirecting to homepage...');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }
    
    // Check if user is logged in (for all pages except login)
    if (!window.location.pathname.includes('login.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.href = 'login.html';
        });
    }
    
    // Display username if logged in (optional)
    const username = localStorage.getItem('username');
    if (username) {
        const usernameDisplays = document.querySelectorAll('.username-display');
        usernameDisplays.forEach(el => {
            el.textContent = username;
        });
    }

    // Background slideshow for hero-banner
    const heroBanner = document.querySelector('.hero-banner');
    const images = [
        'images/slide1.jpeg',
        'images/slide2.jpeg',
        'images/slide3.jpeg'
    ];
    let currentIndex = 0;

    function changeBackground() {
        if (heroBanner) {
            heroBanner.style.backgroundImage = `url(${images[currentIndex]})`;
            heroBanner.style.backgroundSize = 'cover';
            heroBanner.style.backgroundPosition = 'center';
            heroBanner.style.transition = 'background-image 1s ease-in-out';
            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    changeBackground();
    setInterval(changeBackground, 3000);

    // Background slideshow for rewards-hero
    const rewardsHero = document.querySelector('.rewards-hero');
    const rewardsImages = [
        'images/slide1.jpeg',
        'images/slide2.jpeg',
        'images/slide3.jpeg'
    ];
    let rewardsCurrentIndex = 0;

    function changeRewardsBackground() {
        if (rewardsHero) {
            rewardsHero.style.backgroundImage = `url(${rewardsImages[rewardsCurrentIndex]})`;
            rewardsHero.style.backgroundSize = 'cover';
            rewardsHero.style.backgroundPosition = 'center';
            rewardsHero.style.transition = 'background-image 1s ease-in-out';
            rewardsCurrentIndex = (rewardsCurrentIndex + 1) % rewardsImages.length;
        }
    }

    changeRewardsBackground();
    setInterval(changeRewardsBackground, 3000);
});
