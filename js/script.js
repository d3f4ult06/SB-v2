document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
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
            
            if ((username === 'admin' || username === 'admin@starbucks.ph') && password === 'admin123') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                alert('Login successful! Redirecting to homepage...');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }
    
    if (!window.location.pathname.includes('login.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.href = 'login.html';
        });
    }
    
    const username = localStorage.getItem('username');
    if (username) {
        const usernameDisplays = document.querySelectorAll('.username-display');
        usernameDisplays.forEach(el => {
            el.textContent = username;
        });
    }

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

    const stores = [
        { name: "Starbucks Makati", city: "Makati", address: "123 Ayala Ave, Makati" },
        { name: "Starbucks BGC", city: "Taguig", address: "456 Bonifacio High St, Taguig" },
        { name: "Starbucks Ortigas", city: "Pasig", address: "789 Ortigas Ave, Pasig" },
        { name: "Starbucks Quezon City", city: "Quezon City", address: "101 Quezon Ave, Quezon City" },
        { name: "Starbucks Alabang", city: "Muntinlupa", address: "202 Alabang Zapote Rd, Muntinlupa" },
        { name: "Starbucks Mandaluyong", city: "Mandaluyong", address: "303 Shaw Blvd, Mandaluyong" },
        { name: "Starbucks Pasay", city: "Pasay", address: "404 Roxas Blvd, Pasay" },
        { name: "Starbucks Caloocan", city: "Caloocan", address: "505 Samson Rd, Caloocan" },
        { name: "Starbucks Las Piñas", city: "Las Piñas", address: "606 Alabang-Zapote Rd, Las Piñas" },
        { name: "Starbucks Paranaque", city: "Parañaque", address: "707 Dr A Santos Ave, Parañaque" },
        { name: "Starbucks San Juan", city: "San Juan", address: "808 Greenhills Rd, San Juan" },
        { name: "Starbucks Valenzuela", city: "Valenzuela", address: "909 McArthur Hwy, Valenzuela" },
        { name: "Starbucks Navotas", city: "Navotas", address: "1010 R-10 Rd, Navotas" },
        { name: "Starbucks Malabon", city: "Malabon", address: "1111 C-4 Rd, Malabon" },
        { name: "Starbucks Marikina", city: "Marikina", address: "1212 J.P. Rizal St, Marikina" },
        { name: "Starbucks Muntinlupa", city: "Muntinlupa", address: "1313 Alabang-Zapote Rd, Muntinlupa" },
        { name: "Starbucks Pateros", city: "Pateros", address: "1414 Pateros St, Pateros" },
        { name: "Starbucks Taguig", city: "Taguig", address: "1515 McKinley Rd, Taguig" },
        { name: "Starbucks Pasig", city: "Pasig", address: "1616 Ortigas Ave, Pasig" },
        { name: "Starbucks Quezon City", city: "Quezon City", address: "1717 Commonwealth Ave, Quezon City" }
    ];

    const searchBtn = document.getElementById('searchBtn');
    const storeSearchInput = document.getElementById('storeSearchInput');
    const storeResults = document.getElementById('storeResults');

    if (searchBtn && storeSearchInput && storeResults) {
        searchBtn.addEventListener('click', function() {
            const query = storeSearchInput.value.trim().toLowerCase();
            if (!query) {
                storeResults.innerHTML = '<p>Please enter a city to search.</p>';
                return;
            }
            const filteredStores = stores.filter(store => store.city.toLowerCase().includes(query));
            if (filteredStores.length === 0) {
                storeResults.innerHTML = `<p>No stores found in "${query}".</p>`;
                return;
            }
            let resultsHTML = '<ul class="store-list">';
            filteredStores.forEach(store => {
                resultsHTML += `<li><strong>${store.name}</strong><br>${store.address}</li>`;
            });
            resultsHTML += '</ul>';
            storeResults.innerHTML = resultsHTML;
        });
    }
});