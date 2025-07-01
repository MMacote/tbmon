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
document.addEventListener("DOMContentLoaded", function () {
    const coll = document.querySelectorAll(".collapsible");

    coll.forEach(btn => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Search filter
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", function () {
        const filter = this.value.toLowerCase();
        const allRooms = document.querySelectorAll(".storage-room");

        allRooms.forEach(room => {
            const items = room.querySelectorAll("li");
            let roomVisible = false;

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                const match = text.includes(filter);
                item.style.display = match ? "" : "none";
                if (match) roomVisible = true;
            });

            // Show or hide the whole storage room based on matches
            room.style.display = roomVisible ? "" : "none";
        });
    });
});
