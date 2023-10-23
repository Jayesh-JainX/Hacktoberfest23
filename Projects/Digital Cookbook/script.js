// Add JavaScript for interactivity and animations
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});
