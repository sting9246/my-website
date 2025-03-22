// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add dynamic features
const features = [
    { title: "Feature 1", description: "This is feature 1." },
    { title: "Feature 2", description: "This is feature 2." },
    { title: "Feature 3", description: "This is feature 3." }
];

const featureList = document.querySelector('.feature-list');
features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.classList.add('feature-item');
    featureItem.innerHTML = `
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
    `;
    featureList.appendChild(featureItem);
});
