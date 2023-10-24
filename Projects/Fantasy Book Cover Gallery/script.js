// Add interactivity here, e.g., fetching more book data from an API and dynamically updating the gallery.
// For simplicity, this example does not include API calls.

const bookItems = document.querySelectorAll(".book-item");

bookItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Add your custom logic for when a book cover is clicked.
        alert("You clicked a book cover!");
    });
});
