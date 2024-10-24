document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById("footer-text").textContent = `@${year} Bryan's Café`;
});
