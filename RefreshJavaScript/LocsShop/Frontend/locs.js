// A simple array to hold sample artisan data (in a real app, this comes from a database)
const artisansData = [
    { name: "Glam by Sarah", city: "New York, NY", service: "Makeup Artist", portfolio: "https://instagram.com/glambysarah", photo: "makeup.jpg" },
    { name: "The Loc Queen", city: "Atlanta, GA", service: "Locs Making", portfolio: "https://instagram.com/locqueen", photo: "locs.jpg" },
    { name: "Curls & Co.", city: "Chicago, IL", service: "Hairstyling", portfolio: "https://instagram.com/curlsandco", photo: "hair.jpg" }
];

const artisanContainer = document.getElementById('artisan-container');
const artisanForm = document.getElementById('artisan-form');
const noArtisansMsg = document.getElementById('no-artisans-msg');

/**
 * Renders the artisan data onto the page.
 * @param {Array} data - The array of artisan objects.
 */
function renderArtisans(data) {
    // Clear existing content
    artisanContainer.innerHTML = '';
    
    if (data.length === 0) {
        noArtisansMsg.style.display = 'block';
        return;
    }
    noArtisansMsg.style.display = 'none';

    data.forEach(artisan => {
        const card = document.createElement('div');
        card.className = 'artisan-card';
        
        // This is where you would normally display the artisan's photo
        // For simplicity, we are skipping the photo display in this front-end example
        
        card.innerHTML = `
            <h3>${artisan.name}</h3>
            <span class="specialty">${artisan.service}</span>
            <p>📍 Location: ${artisan.city}</p>
            <a href="${artisan.portfolio}" target="_blank" class="contact-link">View Portfolio & Contact</a>
        `;
        
        artisanContainer.appendChild(card);
    });
}

/**
 * Handles the form submission (simulates a successful ad purchase).
 */
artisanForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission (page reload)

    // In a real application, you would:
    // 1. Send form data to the server.
    // 2. Redirect the user to a secure payment gateway (Stripe, PayPal, etc.).
    // 3. Upon successful payment, the server adds the artisan to the database.

    // --- Front-end simulation: ---
    const newArtisan = {
        name: document.getElementById('name').value,
        city: document.getElementById('city').value,
        service: document.getElementById('service').value,
        portfolio: document.getElementById('portfolio').value
    };

    // Add the new artisan to the front of the display array
    artisansData.unshift(newArtisan); 
    renderArtisans(artisansData);

    // Provide a success message and clear the form
    alert(`Thank you, ${newArtisan.name}! Redirecting you to the payment gateway... (Form cleared for demonstration)`);
    artisanForm.reset();
});

// Initial load of the artisan cards
document.addEventListener('DOMContentLoaded', () => {
    renderArtisans(artisansData);
});