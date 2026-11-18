const skillsSection = document.querySelector('.skills');
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            skillsSection.classList.add('visible');
            skillObserver.unobserve(skillsSection);
        }
    });
}, { threshold: 0.25 });

skillObserver.observe(skillsSection);

skillCards.forEach((card) => {
    card.addEventListener('click', () => {
        skillCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
                otherCard.setAttribute('aria-expanded', 'false');
            }
        });

        const isActive = card.classList.toggle('active');
        card.setAttribute('aria-expanded', String(isActive));
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent('New contact message from ' + name);
    const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        'Message:\n' + message
    );

    window.location.href = 'mailto:your@email.com?subject=' + subject + '&body=' + body;
});
