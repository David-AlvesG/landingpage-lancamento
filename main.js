// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;
        
        // Close all other accordion items
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.classList.remove('show');
                content.previousElementSibling.classList.remove('active');
            }
        });
        
        // Toggle current item
        header.classList.toggle('active');
        accordionContent.classList.toggle('show');
    });
});

// Testimonial slider
const testimonialButtons = document.querySelectorAll('.testimonial-nav button');

testimonialButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        testimonialButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Here you would normally change the testimonial content
        // For this example, we'll just log the index
        console.log(`Testimonial ${index + 1} selected`);
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Timer for special offer
function updateTimer() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(23, 59, 59, 0);
    
    const diff = tomorrow - now;
    
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('timer-hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('timer-minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('timer-seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();