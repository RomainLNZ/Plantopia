// Logos start
document.querySelector('.logoDesktop').addEventListener('click', function () {
    window.location.href = 'home.html';
});

document.querySelector('.logoMobile').addEventListener('click', function () {
    window.location.href = 'home.html';
});
// Logos end

//Mobile navbar start
var hiddenNav = document.getElementById('hiddenNav');
var navList = document.getElementById("navList");
var searchBar = document.getElementById('searchMobileBar');

console.log(hiddenNav);
console.log(navList);

if (hiddenNav) {
    hiddenNav.addEventListener('click', function () {
        this.classList.toggle('close');
        toggleNav();
        toggleSearchBar();
    });
}

function toggleNav() {
    navList.classList.toggle("showNav");
}

function toggleSearchBar() {
    searchBar.style.display = 'none';
}
//Mobile navbar end

//Search start
//  Desktop start
document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

document.querySelector('.performSearch').addEventListener('click', function () {
    performSearch();
});

function performSearch() {
    var searchInput = document.getElementById("searchInput").value.trim();

    if (searchInput !== "") {
        alert("Search will be performed for: " + searchInput);
    } else {
        alert("Please enter a search query.");
    }
}
//  Desktop end

//  Mobile start
document.getElementById('searchMobileIcon').addEventListener('click', function () {
    var searchBar = document.getElementById('searchMobileBar');

    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
});
//  Mobile end
//Search end
