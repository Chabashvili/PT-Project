// BOLD VISITED

function toggleBold(clickedElement){
    var filterItems = document.querySelectorAll(".filter-buttons p");

    filterItems.forEach(function(item){
        item.classList.remove('bold');
    });

    clickedElement.classList.add('bold');
}

function toggleNav(navbarclick){
    var filterNav = document.querySelectorAll(".nav-links li");

    filterNav.forEach(function(item){
        item.classList.remove('bold');
    });

    navbarclick.classList.add('bold');
}

// LINK ROUTE

document.addEventListener("DOMContentLoaded", function(){
    var defaultRoute = window.location.pathname.split('/')[1];
    var defaultItem = document.querySelector(".filter-buttons ." + defaultRoute);

    if (defaultItem){
        toggleBold(defaultItem);
    }
})


// FILTER FUNCTIONAL MAIN

var checkClass = function(){
    if ($('.position').hasClass('hide')){
        $('.position').removeClass('hide');
    }
};
$('.allpositions').click(function(){
    checkClass();
});
$('.open').click(function(){
    $('.position:not(.open)').toggle('hide');
});
$('.priority').click(function(){
    $('.position:not(.priority)').toggle('hide');
});
$('.importance').click(function(){
    $('.position:not(.importance)').toggle('hide');
});
$('.secondary').click(function(){
    $('.position:not(.secondary)').toggle('hide');
});
$('.closed').click(function(){
    $('.position:not(.closed)').toggle('hide');
});












// FILTER FUNCTIONAL

// const filterButtons = document.querySelectorAll(".filter-buttons button");
// const filterableCards = document.querySelectorAll(".filter-obj .position");

// const filterCards = (e) => {
//     document.querySelector(".filter-buttons .active").classList.remove("active");
//     e.currentTarget.classList.add("active");

//     const selectedFilter = e.currentTarget.querySelector('a').dataset.name;

//     filterableCards.forEach((card) => {
//         card.classList.add("hide");

//         if (card.dataset.name === selectedFilter || selectedFilter === "all") {
//             card.classList.remove("hide");
//         }
//     });
// };

// filterButtons.forEach((button) => button.addEventListener("click", filterCards));











// ROUTE FOR NAVBAR --

// document.addEventListener("DOMLoaded", function(){
//     var defaultRoute2 = window.location.pathname.split('/')[1];
//     var defaultItem2 = document.querySelector(".nav-links ." + defaultRoute2);

//     if (defaultItem2){
//         toggleBold(defaultItem2);
//     }
// })

// TOGGLE FILTER UNDERLINE --

// function toggleUnderline(clickUnderline){
//     var underLine = document.querySelectorAll(".filter-buttons p");

//     underLine.forEach(function(item){
//         item.classList.remove('filter-buttons p::after');
//     })

//     clickUnderline.classList.add('filter-buttons p::after')
// }