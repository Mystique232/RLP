
/* Automatically display the current year in the footer */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Show a friendly message when a product button is clicked */
document.querySelectorAll(".product-button").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;

        alert(
            `${productName} selected! Thank you for exploring Luxe Store.`
        );
    });
});
