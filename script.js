const button = document.getElementById("startBtn");

button.addEventListener("click", function () {
    alert("Welcome Magabus 🚀 Keep building your skills!");

    // small visual effect
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 150);
});