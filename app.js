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




// FILTER FUNCTIONAL

filterObjects("all");

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("position");
    if ( c == "all") c = "";
    for( i = 0; i < x.length; i++ ){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for( i = 0; i < arr2.length; i++ ){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for( i = 0; i < arr2.length; i++ ){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

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