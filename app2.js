const baricon = document.querySelector('.bar-icon');
const sidebar = document.querySelector('.sidebar');
const cancel =document.querySelector('.cancel-icon');
baricon.addEventListener('click',function(){
 sidebar.classList.add('show-sidebar');
})
cancel.addEventListener('click',function(){
    sidebar.classList.remove("show-sidebar");
})

// app.js

// Get all anchor links inside the navbar and info links
const links = document.querySelectorAll('.nav-links a, .info-links a');

// Loop through each anchor link
links.forEach(link => {
    // Listen for click event
    link.addEventListener('click', function(e) {
        // Prevent default behavior
        e.preventDefault();

        // Get target section's ID from the text content of the link
        const targetId = this.textContent.toLowerCase();

        // Find the target section using the ID
        const targetSection = document.getElementById(targetId);

        // Calculate the offset of the target section from the top of the page
        const offsetTop = targetSection.offsetTop;

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to show the button when user scrolls down
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Function to scroll to the top of the page when button is clicked
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

