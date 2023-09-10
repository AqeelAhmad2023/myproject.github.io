// Images and buttons
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// Event listeners for buttons
button1.addEventListener("click", () => {
    image1.style.display = "block";
    image2.style.display = "none";
});

button2.addEventListener("click", () => {
    image1.style.display = "none";
    image2.style.display = "block";
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}
