// AI-Digest JavaScript for search, filter, and sort functionality

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortSelect = document.getElementById('sortSelect');
    const tagsFilter = document.getElementById('tagsFilter');
    const cardsGrid = document.getElementById('cardsGrid');
    const noResults = document.getElementById('noResults');
    const heroBadges = document.querySelectorAll('.hero-tag');
    
    // Get all cards
    const cards = Array.from(document.querySelectorAll('.news-card'));
    
    // Current filter state
    let currentSearch = '';
    let currentCategory = 'all';
    let currentTag = 'all';
    let currentSort = 'date-desc';
    
    // Search/Filter handler
    function applyFilters() {
        let visibleCount = 0;
        
        cards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const description = card.dataset.description.toLowerCase();
            const tags = card.dataset.tags.toLowerCase();
            const category = card.dataset.category;
            const importance = parseInt(card.dataset.importance);
            const date = new Date(card.dataset.date);
            
            // Search filter
            const matchesSearch = currentSearch === '' || 
                title.includes(currentSearch) || 
                description.includes(currentSearch) || 
                tags.includes(currentSearch);
            
            // Category filter
            const matchesCategory = currentCategory === 'all' || 
                category === currentCategory;
            
            // Tag filter
            const matchesTag = currentTag === 'all' || 
                tags.includes(currentTag);
            
            // Show/hide card
            if (matchesSearch && matchesCategory && matchesTag) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Sort cards
        sortCards();
        
        // Show/hide no results message
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
    
    // Sort handler
    function sortCards() {
        const visibleCards = cards.filter(card => !card.classList.contains('hidden'));
        
        visibleCards.sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            const importanceA = parseInt(a.dataset.importance);
            const importanceB = parseInt(b.dataset.importance);
            
            switch (currentSort) {
                case 'date-desc':
                    return dateB - dateA;
                case 'date-asc':
                    return dateA - dateB;
                case 'importance-desc':
                    return importanceB - importanceA;
                default:
                    return 0;
            }
        });
        
        // Reappend sorted cards
        visibleCards.forEach(card => {
            cardsGrid.appendChild(card);
        });
    }
    
    // Event Listeners
    // Search input
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value.toLowerCase();
        applyFilters();
    });
    
    // Category filter
    categoryFilter.addEventListener('change', function(e) {
        currentCategory = e.target.value;
        applyFilters();
    });
    
    // Sort select
    sortSelect.addEventListener('change', function(e) {
        currentSort = e.target.value;
        applyFilters();
    });
    
    // Tags filter buttons
    if (tagsFilter) {
        const tagButtons = tagsFilter.querySelectorAll('.tag-btn');
        tagButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active state
                tagButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Apply filter
                currentTag = this.dataset.tag;
                applyFilters();
            });
        });
    }
    
    // Hero badges click
    heroBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            const category = this.dataset.category;
            
            if (category === 'model_release' || category === 'releases') {
                currentCategory = 'model_release';
                categoryFilter.value = 'model_release';
            } else if (category === 'tools') {
                currentTag = 'tools';
                // Activate correct tag button
                if (tagsFilter) {
                    const tagButtons = tagsFilter.querySelectorAll('.tag-btn');
                    tagButtons.forEach(b => b.classList.remove('active'));
                    const toolsBtn = tagsFilter.querySelector('[data-tag="tools"]');
                    if (toolsBtn) toolsBtn.classList.add('active');
                }
            } else if (category === 'research') {
                currentCategory = 'research';
                categoryFilter.value = 'research';
            }
            
            // Scroll to news section
            document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
            
            applyFilters();
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Initial state - sort by date descending
    applyFilters();
});