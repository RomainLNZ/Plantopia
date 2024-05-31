function checkKeyPress(event) {
    if (event.key === "Enter") {
        performsearch();
    }
}

function performsearch() {
    var searchInput = document.getElementById("searchinput").value.trim();

    if (searchInput !== "") {
        alert("Search will be performed for: " + searchInput);
    } else {
        alert("Please enter a search query.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var hiddennav = document.getElementById('hiddennav');
    if (hiddennav) {
        hiddennav.addEventListener('click', function () {
            this.classList.toggle('close');
        });
    }
});

function toggleNav() {
    var navList = document.getElementById("navlist");
    navList.classList.toggle("show-nav");
}