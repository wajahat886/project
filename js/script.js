const flavorOptions = document.querySelectorAll('.flavor-option');
flavorOptions.forEach(option => {
    option.addEventListener('click', () => {
        flavorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

// Subscription Selection
const subscriptionOptions = document.querySelectorAll('.subscription-option');

subscriptionOptions.forEach(option => {
option.addEventListener('click', () => {
subscriptionOptions.forEach(opt => opt.classList.remove('selected'));
option.classList.add('selected');
});
});
// FAQ Accordion


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
const toggle = item.querySelector('.faq-question-wrapper');

toggle.addEventListener('click', () => {
const isOpen = item.classList.contains('active');
faqItems.forEach(i => i.classList.remove('active')); // Close all
if (!isOpen) item.classList.add('active'); // Open current if not already
});
});

// User Review Section
const grid = document.querySelector('.testimonials-grid');
const prev = document.querySelector('.testimonial-arrow.prev');
const next = document.querySelector('.testimonial-arrow.next');

const scrollAmount = 340; // Approx. width of one card + gap

prev.addEventListener('click', () => {
grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

next.addEventListener('click', () => {
const maxScrollLeft = grid.scrollWidth - grid.clientWidth;

// If already at or near the end, scroll back to start
if (grid.scrollLeft + scrollAmount >= maxScrollLeft) {
grid.scrollTo({ left: 0, behavior: 'smooth' });
} else {
grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
});

//Carousel Controls

const mainImage = document.getElementById('mainProductImage');
const galleryItems = document.querySelectorAll('.gallery-item img');
const dots = document.querySelectorAll('.carousel-dot');
const arrows = document.querySelectorAll('.carousel-arrow');

let currentIndex = 0;
const imageList = Array.from(galleryItems).map(img => img.src);

function updateDisplay(index) {
currentIndex = index;
mainImage.src = imageList[currentIndex];

// Update active thumbnail
document.querySelectorAll('.gallery-item').forEach((item, i) => {
item.classList.toggle('active', i === index);
});

// Update active dot
dots.forEach((dot, i) => {
dot.classList.toggle('active', i === index);
});
}

galleryItems.forEach((img, i) => {
img.addEventListener('click', () => updateDisplay(i));
});

arrows.forEach(arrow => {
arrow.addEventListener('click', () => {
if (arrow.classList.contains('prev')) {
currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
} else {
currentIndex = (currentIndex + 1) % imageList.length;
}
updateDisplay(currentIndex);
});
});

dots.forEach((dot, i) => {
dot.addEventListener('click', () => updateDisplay(i));
});

// Set initial state
updateDisplay(0);

// Dots control
// carouselDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         updateMainImage(index);
//     });
// });

// Arrow control
carouselArrows.forEach(arrow => {
arrow.addEventListener('click', () => {
if (arrow.classList.contains('prev')) {
    currentSlide = (currentSlide - 1 + imageSources.length) % imageSources.length;
} else {
    currentSlide = (currentSlide + 1) % imageSources.length;
}
updateMainImage(currentSlide);
});
});

// Thumbnail click control
thumbnails.forEach((img, index) => {
img.addEventListener('click', () => {
updateMainImage(index);
});
});

// Testimonial Controls

const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialArrows = document.querySelectorAll('.testimonial-arrow');

let currentTestimonial = 0;

testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        testimonialDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        currentTestimonial = index;
    });
});

testimonialArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        testimonialDots.forEach(d => d.classList.remove('active'));
        
        if (arrow.classList.contains('prev')) {
            currentTestimonial = (currentTestimonial - 1 + testimonialDots.length) % testimonialDots.length;
        } else {
            currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
        }
        
        testimonialDots[currentTestimonial].classList.add('active');
    });
});

// Video Play Button
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Video would play here');
    });
});

// Form Submission
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (input.value) {
            alert(`Thank you for subscribing with ${input.value}!`);
            input.value = '';
        } else {
            alert('Please enter your email address.');
        }
    });
});

// Add to Cart Button
const addCartBtn = document.querySelector('.add-cart-btn');
addCartBtn.addEventListener('click', () => {
    const selectedFlavor = document.querySelector('.flavor-option.selected .flavor-name').textContent;
    alert(`${selectedFlavor} Alcami Elements added to cart!`);
});