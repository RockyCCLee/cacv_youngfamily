document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('categories-container');
    const btnCommittee = document.getElementById('btn-committee');
    const btnCoordinator = document.getElementById('btn-coordinator');
    const headerPill = document.getElementById('header-role-pill');
    const roleStatusText = document.getElementById('role-status-text');
    const headerSubtitle = document.getElementById('header-subtitle');

    // Make sure categoriesData is available from data.js
    if (typeof categoriesData === 'undefined') {
        if (container) {
            container.innerHTML = '<p style="color: red; grid-column: 1/-1; text-align: center;">Error: data.js is not loaded or categoriesData is undefined.</p>';
        }
        return;
    }

    /**
     * Determine initial role from body data attribute, URL query parameters, or hash.
     */
    function getInitialRole() {
        if (document.body && document.body.dataset.defaultRole) {
            return document.body.dataset.defaultRole.toLowerCase();
        }

        const urlParams = new URLSearchParams(window.location.search);
        const roleParam = urlParams.get('role');
        if (roleParam) {
            const clean = roleParam.trim().toLowerCase();
            if (clean === 'coordinator' || clean === 'committee') {
                return clean;
            }
        }

        const hash = window.location.hash.replace('#', '').trim().toLowerCase();
        if (hash === 'coordinator' || hash === 'committee') {
            return hash;
        }

        return 'committee';
    }

    /**
     * Render category cards filtered by the active role.
     */
    function renderCards(activeRole) {
        if (!container) return;
        container.innerHTML = '';

        const visibleCategories = categoriesData.filter(category => {
            if (!category.roles || !Array.isArray(category.roles) || category.roles.length === 0) {
                return true; // Show by default if roles are not explicitly defined
            }
            return category.roles.includes(activeRole);
        });

        visibleCategories.forEach((category, index) => {
            const isExpandable = Array.isArray(category.subItems) && category.subItems.length > 0;

            if (isExpandable) {
                const card = document.createElement('div');
                card.className = 'category-card expandable-card';
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
                card.setAttribute('aria-expanded', 'false');
                card.style.animationDelay = `${index * 0.08}s`;

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
                card.style.animationDelay = `${index * 0.08}s`;

                card.innerHTML = `
                    <i class="ph ph-${category.icon} card-icon"></i>
                    <h2 class="card-title">${category.title}</h2>
                    <p class="card-desc">${category.description}</p>
                `;

                container.appendChild(card);
            }
        });
    }

    /**
     * Switch role view, update styling, text indicators, and URL.
     */
    function setRole(role, updateUrl = true) {
        const isCoordinator = (role === 'coordinator');

        // 1. Toggle body theme class for colors (as-is warm vs blue)
        if (isCoordinator) {
            document.body.classList.add('theme-coordinator');
        } else {
            document.body.classList.remove('theme-coordinator');
        }

        // 2. Update toggle buttons
        if (btnCommittee) {
            btnCommittee.classList.toggle('active', !isCoordinator);
            btnCommittee.setAttribute('aria-checked', !isCoordinator ? 'true' : 'false');
        }
        if (btnCoordinator) {
            btnCoordinator.classList.toggle('active', isCoordinator);
            btnCoordinator.setAttribute('aria-checked', isCoordinator ? 'true' : 'false');
        }

        // 3. Update header indicators and titles
        if (headerPill) {
            headerPill.textContent = isCoordinator ? 'Coordinator Portal' : 'Committee Portal';
        }
        if (roleStatusText) {
            roleStatusText.innerHTML = isCoordinator
                ? 'Active View: <strong>Coordinator</strong> (Coordinator Materials)'
                : 'Active View: <strong>Committee</strong> (All Materials)';
        }
        if (headerSubtitle) {
            headerSubtitle.textContent = isCoordinator
                ? 'Welcome! Select a category below to access materials for coordinators.'
                : 'Welcome! Select a category below to access materials for committees.';
        }

        // 4. Update browser URL without reloading page
        if (updateUrl && window.history && window.history.replaceState) {
            const url = new URL(window.location);
            url.searchParams.set('role', isCoordinator ? 'coordinator' : 'committee');
            window.history.replaceState({ role: isCoordinator ? 'coordinator' : 'committee' }, '', url.toString());
        }

        // 5. Render corresponding cards
        renderCards(isCoordinator ? 'coordinator' : 'committee');
    }

    // Attach click listeners to role buttons
    if (btnCommittee) {
        btnCommittee.addEventListener('click', () => setRole('committee'));
    }
    if (btnCoordinator) {
        btnCoordinator.addEventListener('click', () => setRole('coordinator'));
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        setRole(getInitialRole(), false);
    });

    // Initialize with role from URL or default
    const initialRole = getInitialRole();
    setRole(initialRole, false);
});
