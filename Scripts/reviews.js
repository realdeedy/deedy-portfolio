async function loadReviews() {
    const container = document.getElementById("hp-reviews-container");

    const res = await fetch("/Data/reviews.json");
    const reviews = await res.json();

    const templateRes = await fetch("/Components/review.html");
    const templateHTML = await templateRes.text();

    const parser = new DOMParser();

    reviews.forEach(review => {
        const doc = parser.parseFromString(templateHTML, "text/html");

        const card = doc.querySelector(".hp-review");

        card.querySelector(".hp-review-img").src = review.image;
        card.querySelector(".hp-review-name").textContent = review.name;
		card.querySelector(".hp-review-desc").innerHTML = review.description;
        card.querySelector(".hp-review-text").innerHTML = review.text;

        container.appendChild(card);
    });
}

loadReviews();