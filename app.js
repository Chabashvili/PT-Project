// BOLD VISITED

function toggleBold(clickedElement, filter) {
    var filterItems = document.querySelectorAll(".filter-buttons button");
    filterItems.forEach(function (item) {
        item.classList.remove('bold');
    });

    clickedElement.classList.add('bold');
    const filterArray = ['open', 'closed', 'allpositions', 'priority', 'importance', 'secondary'];
    const filteredObj = {
        open: [0, 2, 3, 7],
        closed: [1, 5, 6, 8],
        allpositions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        priority: [0, 2],
        importance: [3, 4, 7],
        secondary: [9]
    };
    var filteredList = document.querySelectorAll("#filter-obj > div");
    filteredList.forEach(function (filterItem) {
        filterItem.style.display = 'none';
    })
    for (var i = 0; i < filterArray.length; i++) {
        var selected = filterArray[i];
        if (filteredObj.hasOwnProperty(selected)) {
            if (selected == filter) {
                for (var x = 0; x < filteredObj[selected].length; x++) {
                    filteredList.forEach(function (filterItem, key) {
                        if(filteredObj[selected][x] == key){
                            filterItem.style.display = 'block';
                        }
                    })
                }
            }
        }
    }
}



    // filterArray.forEach(function(name){
    //     console.log(filteredObj[name]);
    //     // filteredObj[name].forEach(function(index){
    //     for(var name in filteredObj){
    //         filteredList.forEach(function(element, key){
    //             if(key == index){
    //                 element.style.display = 'block';
    //             }
    //         })
    //     }
    // })


    // if(filter == 'allpositions'){
    //     filteredList.forEach(function(filterItem){
    //         filterItem.style.display = 'block';
    //     })
    // }
    // if(filter == 'open'){
    //     filteredList.forEach(function(filterItem, key){
    //         if( key == 0 || key == 3 || key == 2 || key == 7){
    //             filterItem.style.display = "block";
    //         }
    //     })
    // }

    // if(filter == 'closed'){
    //     filteredList.forEach(function(filterItem, key){
    //         if( key == 1 || key == 5 || key == 6 || key == 8){
    //             filterItem.style.display = "block";
    //         }
    //     })
    // }

    // if(filter == 'priority'){
    //     filteredList.forEach(function(filterItem, key){
    //         if( key == 0 || key == 2){
    //             filterItem.style.display = "block";
    //         }
    //     })
    // }

    // if(filter == 'importance'){
    //     filteredList.forEach(function(filterItem, key){
    //         if( key == 3 || key == 4 || key == 7){
    //             filterItem.style.display = "block";
    //         }
    //     })
    // }



    //



function toggleNav(navbarclick) {

    var filterNav = document.querySelectorAll(".nav-links li");

    filterNav.forEach(function (item) {
        item.classList.remove('bold');
    });

    navbarclick.classList.add('bold');
}

// LINK ROUTE

document.addEventListener("DOMContentLoaded", function () {
    var defaultRoute = window.location.pathname.split('/')[1];
    var defaultItem = document.querySelector(".filter-buttons ." + defaultRoute);

    if (defaultItem) {
        toggleBold(defaultItem);
    }
})