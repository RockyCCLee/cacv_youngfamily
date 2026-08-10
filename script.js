document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('categories-container');

    // Make sure categoriesData is available from data.js
    if (typeof categoriesData === 'undefined') {
        container.innerHTML = '<p style="color: red; grid-column: 1/-1; text-align: center;">Error: data.js is not loaded or categoriesData is undefined.</p>';
        return;
    }

    // Generate HTML for each category and append it to the container
    categoriesData.forEach((category, index) => {
        // Create an anchor element to act as the clickable card
        const card = document.createElement('a');
        card.href = category.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer'; // Security best practice for target="_blank"
        card.className = 'category-card';
        
        // Stagger the entrance animation based on the index
        card.style.animationDelay = `${index * 0.1}s`;

        // Inner HTML of the card
        card.innerHTML = `
            <i class="ph ph-${category.icon} card-icon"></i>
            <h2 class="card-title">${category.title}</h2>
            <p class="card-desc">${category.description}</p>
        `;

        container.appendChild(card);
    });
});
