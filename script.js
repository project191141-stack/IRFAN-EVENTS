 //Form Submission Alert
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Page reload rokne ke liye
    alert('Thank you! We will contact you shortly for your event.');
    this.reset(); // Form clear karne ke liye
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

