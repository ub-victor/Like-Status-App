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
            likeStatus.textContent = likes(names);
            nameInput.value = "";
        }
    });

    resetBtn.addEventListener("click", () => {
        names = [];
        likeStatus.textContent = likes(names);
    });
});