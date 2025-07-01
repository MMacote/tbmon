document.addEventListener("DOMContentLoaded", function () {
    const coll = document.querySelectorAll(".collapsible");

    coll.forEach(btn => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});
