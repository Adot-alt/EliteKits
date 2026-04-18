const cards = document.querySelectorAll(".card");

// Function to show cards when scrolling
function showCards() {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", showCards);

// Run once when page loads
showCards();
