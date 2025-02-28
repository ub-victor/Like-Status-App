function likes(names) {
    const length = names.length;

    if (length === 0) {
        return "no one likes this";
    } else if (length === 1) {
        return `${names[0]} likes this`;
    } else if (length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const addNameBtn = document.getElementById("addNameBtn");
    const resetBtn = document.getElementById("resetBtn");
    const likeStatus = document.getElementById("likeStatus");

    let names = [];

    addNameBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name) {
            names.push(name);
            updateLikeStatus();
            nameInput.value = "";
        }
    });

    resetBtn.addEventListener("click", () => {
        names = [];
        updateLikeStatus();
    });

    function updateLikeStatus() {
        // Update the like status text
        likeStatus.innerHTML = `<i class="fas fa-heart"></i> ${likes(names)}`;

        // Re-select the heart icon after updating the inner HTML
        const heartIcon = likeStatus.querySelector(".fa-heart");

        // Update heart icon color based on the number of likes
        if (names.length === 0) {
            heartIcon.classList.remove("heart-one", "heart-two", "heart-many");
            heartIcon.classList.add("heart-default");
        } else if (names.length === 1) {
            heartIcon.classList.remove("heart-default", "heart-two", "heart-many");
            heartIcon.classList.add("heart-one");
        } else if (names.length === 2) {
            heartIcon.classList.remove("heart-default", "heart-one", "heart-many");
            heartIcon.classList.add("heart-two");
        } else {
            heartIcon.classList.remove("heart-default", "heart-one", "heart-two");
            heartIcon.classList.add("heart-many");
        }
    }
});