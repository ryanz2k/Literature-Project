// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show scroll to top button when scrolling down
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to specific period
function scrollToPeriod(period) {
    const periodElement = document.getElementById(`period-${period}`);
    if (periodElement) {
        // Calculate offset to account for sticky navbar and period filter
        const navbarHeight = 85; // Match CSS variable
        const periodFilterHeight = 80; // Approximate height of period filter
        const offset = navbarHeight + periodFilterHeight;
        
        const elementPosition = periodElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

// Observe all timeline entries
document.addEventListener('DOMContentLoaded', function() {
    const timelineEntries = document.querySelectorAll('.timeline-entry, .period-header');
    timelineEntries.forEach(entry => {
        observer.observe(entry);
    });
    
    // Add click event to entries for potential expansion
    const entries = document.querySelectorAll('.timeline-entry');
    entries.forEach(entry => {
        entry.addEventListener('click', function() {
            // Add visual feedback on click
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Allow arrow keys for navigation when not in input fields
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            window.scrollBy({ top: 300, behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            window.scrollBy({ top: -300, behavior: 'smooth' });
        } else if (e.key === 'Home') {
            scrollToTop();
        }
    }
});

// Add smooth reveal animation on scroll
window.addEventListener('scroll', function() {
    const entries = document.querySelectorAll('.timeline-entry');
    entries.forEach(entry => {
        const rect = entry.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !entry.classList.contains('hidden')) {
            entry.style.opacity = '1';
        }
    });
});


// Add entry number badges
document.addEventListener('DOMContentLoaded', function() {
    const entries = document.querySelectorAll('.timeline-entry');
    entries.forEach((entry, index) => {
        const marker = entry.querySelector('.entry-marker');
        if (marker) {
            const badge = document.createElement('span');
            badge.textContent = index + 1;
            badge.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 0.7rem;
                font-weight: bold;
                color: white;
                pointer-events: none;
            `;
            marker.appendChild(badge);
        }
    });
});

// Add search functionality (bonus feature)
function searchEntries(query) {
    const entries = document.querySelectorAll('.timeline-entry');
    const lowerQuery = query.toLowerCase();
    
    entries.forEach(entry => {
        const text = entry.textContent.toLowerCase();
        if (text.includes(lowerQuery)) {
            entry.style.display = 'block';
            entry.style.opacity = '1';
        } else {
            entry.style.display = 'none';
        }
    });
}

// Export function for potential search bar (can be added later)
window.searchEntries = searchEntries;

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add tooltip on hover for entry markers
document.addEventListener('DOMContentLoaded', function() {
    const markers = document.querySelectorAll('.entry-marker');
    markers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            const entry = this.closest('.timeline-entry');
            const title = entry.querySelector('.entry-title').textContent;
            this.setAttribute('title', title);
        });
    });
});

// Add smooth color transitions for period filters
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: 100px;
                height: 100px;
                left: 50%;
                top: 50%;
                margin-left: -50px;
                margin-top: -50px;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS animation for ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// PDF Export Function
async function exportToPDF() {
    try {
        // Show loading indicator
        const pdfBtn = document.getElementById('pdfExportBtn');
        const originalText = pdfBtn.innerHTML;
        pdfBtn.innerHTML = '<span class="pdf-icon">⏳</span><span class="pdf-text">Generating...</span>';
        pdfBtn.disabled = true;

        // Scroll to top first to capture from the beginning
        window.scrollTo(0, 0);
        
        // Wait a moment for scroll to complete
        await new Promise(resolve => setTimeout(resolve, 500));

        // Hide buttons during capture
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        const pdfExportBtn = document.getElementById('pdfExportBtn');
        scrollTopBtn.style.display = 'none';
        pdfExportBtn.style.display = 'none';

        // Capture the entire document body
        const canvas = await html2canvas(document.body, {
            scale: 2, // Higher quality
            useCORS: true, // Allow cross-origin images
            logging: false,
            windowWidth: document.documentElement.scrollWidth,
            windowHeight: document.documentElement.scrollHeight,
            scrollX: 0,
            scrollY: 0
        });

        // Restore buttons
        scrollTopBtn.style.display = '';
        pdfExportBtn.style.display = '';

        // Get canvas dimensions
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        
        // Calculate PDF dimensions (A4 width in mm at 96 DPI)
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = (imgHeight / imgWidth) * pdfWidth; // Maintain aspect ratio

        // Create PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);

        // Convert canvas to image data
        const imgData = canvas.toDataURL('image/png');

        // Add image to PDF (full page)
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().slice(0, 10);
        const filename = `World_Literature_Timeline_${timestamp}.pdf`;

        // Save PDF
        pdf.save(filename);

        // Restore button
        pdfBtn.innerHTML = originalText;
        pdfBtn.disabled = false;

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again or use the browser\'s Print to PDF feature (Ctrl+P or Cmd+P).');
        
        // Restore button
        const pdfBtn = document.getElementById('pdfExportBtn');
        pdfBtn.innerHTML = '<span class="pdf-icon">📄</span><span class="pdf-text">PDF</span>';
        pdfBtn.disabled = false;
    }
}

// Make function available globally
window.exportToPDF = exportToPDF;

