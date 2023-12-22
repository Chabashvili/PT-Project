
function toggleBold(clickedElement){
    var filterItems = document.querySelectorAll(".filter-buttons p");

    filterItems.forEach(function(item){
        item.classList.remove('bold');
    });

    clickedElement.classList.add('bold');
}

document.addEventListener("DOMContentLoaded", function(){
    var defaultRoute = window.location.pathname.split('/')[1];
    var defaultItem = document.querySelector(".filter-buttons ." + defaultRoute);

    if (defaultItem){
        toggleBold(defaultItem);
    }
})

function togglenav(navbarclick){
    var filterNav = document.querySelectorAll(".nav-links li");

    filterNav.forEach(function(item){
        item.classList.remove('bold');
    });

    navbarclick.classList.add('bold');
}

// TOGGLE FILTER UNDERLINE --

// function toggleUnderline(clickUnderline){
//     var underLine = document.querySelectorAll(".filter-buttons p");

//     underLine.forEach(function(item){
//         item.classList.remove('filter-buttons p::after');
//     })

//     clickUnderline.classList.add('filter-buttons p::after')
// }