document.addEventListener("DOMContentLoaded", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "comment.xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.responseText;
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const reviews = xmlDoc.getElementsByTagName("review");

            const container = document.getElementById("reviews-container");
            container.innerHTML = "";

            Array.from(reviews).forEach(review => {
                const name = review.getElementsByTagName("name")[0].textContent;
                const date = review.getElementsByTagName("date")[0].textContent;
                const rating = review.getElementsByTagName("rating")[0].textContent;
                const text = review.getElementsByTagName("text")[0].textContent;
                const image = review.getElementsByTagName("image")[0].textContent;

                const card = document.createElement("div");
                card.className = "review-card";
                card.innerHTML = `
                    <div class="review-image">
                        <img src="${image}" alt="${name}">
                    </div>
                    <div class="review-content">
                        <div class="review-header">
                            <h3>${name}</h3>
                            <span class="review-date">${date}</span>
                        </div>
                        <div class="review-rating">
                            ${"★".repeat(rating)}${"☆".repeat(5-rating)}
                        </div>
                        <p class="review-text">${text}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    };
    xhr.send();
});