document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('categories-container');

    // Make sure categoriesData is available from data.js
    if (typeof categoriesData === 'undefined') {
        container.innerHTML = '<p style="color: red; grid-column: 1/-1; text-align: center;">Error: data.js is not loaded or categoriesData is undefined.</p>';
        return;
    }

    // Generate HTML for each category and append it to the container
    categoriesData.forEach((category, index) => {
        const isExpandable = Array.isArray(category.subItems) && category.subItems.length > 0;

        if (isExpandable) {
            const card = document.createElement('div');
            card.className = 'category-card expandable-card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-expanded', 'false');
            card.style.animationDelay = `${index * 0.1}s`;

            const subItemsHtml = category.subItems.map(item => `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="sub-item-link" title="Open ${item.title}">
                    <div class="sub-item-content">
                        <i class="ph ph-${item.icon || 'arrow-square-out'} sub-item-icon"></i>
                        <span>${item.title}</span>
                    </div>
                    <i class="ph ph-arrow-up-right external-icon"></i>
                </a>
            `).join('');

            card.innerHTML = `
                <div class="card-header-row">
                    <i class="ph ph-${category.icon} card-icon"></i>
                    <span class="expand-badge">
                        <span>Click to expand</span>
                        <i class="ph ph-caret-down"></i>
                    </span>
                </div>
                <h2 class="card-title">${category.title}</h2>
                <p class="card-desc">${category.description}</p>
                <div class="sub-items-container">
                    ${subItemsHtml}
                </div>
            `;

            // Toggle expansion on click, unless a link inside was clicked
            card.addEventListener('click', (e) => {
                if (e.target.closest('.sub-item-link')) {
                    return;
                }
                const isExpanded = card.classList.toggle('expanded');
                card.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
                const badgeText = card.querySelector('.expand-badge span');
                if (badgeText) {
                    badgeText.textContent = isExpanded ? 'Click to collapse' : 'Click to expand';
                }
            });

            // Keyboard navigation
            card.addEventListener('keydown', (e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.sub-item-link')) {
                    e.preventDefault();
                    card.click();
                }
            });

            container.appendChild(card);
        } else {
            // Standard single-link card
            const card = document.createElement('a');
            card.href = category.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'category-card';
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <i class="ph ph-${category.icon} card-icon"></i>
                <h2 class="card-title">${category.title}</h2>
                <p class="card-desc">${category.description}</p>
            `;

            container.appendChild(card);
        }
    });
});
