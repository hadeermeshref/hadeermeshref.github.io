let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let phoneInput = document.getElementById("phone")
let ageInput = document.getElementById("age")
let passwordInput = document.getElementById("password")
let confirmInput = document.getElementById("passwordConfirm")
let nameAlert = document.getElementById("name-alert")
let emailAlert = document.getElementById("email-alert")
let phoneAlert = document.getElementById("phone-alert")
let ageAlert = document.getElementById("age-alert")
let PassAlert = document.getElementById("password-alert")
let confirmAlert = document.getElementById("confirm-alert")
let allInputs = document.querySelectorAll("#contact .container form input");
let searchChar = document.getElementById("searchByChar");
let searchFullName = document.getElementById("search");

///First section  the moving bar
//hasClass method to check if an element has a certain class..

//setting the default top of links
let currentTop = 0;
let linksLength = $("a").length
for (var i = 0; i < $("a").length; i++) {
    $("a").eq(i).css("top", 330 + currentTop);
    currentTop += 30;
}

// animation of links+ slidebar
$("#navIcon").click(function () {
    let animationDuration = 0;
    let currentWidth = $(".movingBar").outerWidth();
    if ($("#navIcon").hasClass("fa-times") == false) {
        $("#sideBar").animate({ "left": 0 }, 500);
        $("#navIcon").addClass("fa-times");
        for (var i = 0; i < linksLength; i++) {

            $("a").eq(i).animate({ "top": "0px" }, 600 + animationDuration);
            animationDuration += 150
        }
    }
    else {
        $("#sideBar").animate({ "left": -currentWidth }, 500);
        $("#navIcon").removeClass("fa-times");
        let reverseTop = 0;
        let animationReverseDuration = 0;
        for (var i = 0; i < linksLength; i++) {

            $("a").eq(i).animate({ "top": 330 + reverseTop }, 1000 - animationReverseDuration);
            reverseTop += 30;
            animationReverseDuration += 190
        }
    }
})



// Main part displaying the api data
let responseArray = [];
let searchArray = [];
async function fetchData(category) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=1769577e785f28a324b660042cece5f2&language=en-US&page=1`);
    let responseData = await response.json();
    responseArray = responseData.results;

    displayData(responseArray);



}
async function getTrending() {
    let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1769577e785f28a324b660042cece5f2`);
    let responseData = await response.json();
    responseArray = responseData.results;


    displayData(responseArray);

}
async function getSearch(text) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1769577e785f28a324b660042cece5f2&language=en-US&query=${text}&page=1&include_adult=false`);
    let responseData = await response.json();
    searchArray = responseData.results;
}


fetchData("now_playing");

//links action
$("a").click(function () {
    if ($(this).text() == "Now playing") {
        fetchData("now_playing")
    }
    else if ($(this).text() == "Popular") {
        fetchData("popular")
    }
    else if ($(this).text() == "Top Rated") {
        fetchData("top_rated")
    }
    else if ($(this).text() == "Upcoming") {
        fetchData("upcoming")
    }
    else if ($(this).text() == "Trending") {
        getTrending();
    }
    else if ($(this).text() == "Contact Us") {

        let currentLink = $(this).attr("href");
        let topOffset = $(currentLink).offset().top;
        $("body").animate({ scrollTop: topOffset }, 1500);




    }

})


//display function
function displayData(responseArray) {
    let divs = ``;
    for (var i = 0; i < responseArray.length; i++) {
        divs +=
            `
        <div class="col-lg-4 col-md-6 mt-5 ">
        <div class="item position-relative ">
            <img src="https://image.tmdb.org/t/p/w500${responseArray[i].poster_path}" class="w-100 rounded" alt="">
            <div
                class="overlayLayer  text-center d-flex flex-column justify-content-center position-absolute">
                <h2 class="mt-3">${responseArray[i].original_title || responseArray[i].name}</h2>
                <p id="desc">${responseArray[i].overview}</p>
                <p class="mb-0 mt-1">rate: ${responseArray[i].vote_average}</p>
                <p class="mb-4">${responseArray[i].release_date || responseArray[i].first_air_date}</p>
            </div >
        </div >
    </div >
            `
    }
    $("#dataCont").html(divs);
}

//search functions
function searchByWord(searchWord, array) {
    let divs = ``;
    for (var i = 0; i < array.length; i++) {
        if (array[i].original_title.toLowerCase().includes(searchWord.toLowerCase())) {
            divs +=
                `   
            <div class="col-lg-4 col-md-6 mt-5 ">
            <div class="item position-relative ">
                <img src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" class="w-100 rounded" alt="">
                <div
                    class="overlayLayer  text-center d-flex flex-column justify-content-center position-absolute">
                    <h2 class="mt-3">${array[i].original_title}</h2>
                    <p id="desc">${array[i].overview}</p>
                    <p class="mb-0 mt-1">rate: ${array[i].vote_average}</p>
                    <p class="mb-4">${array[i].release_date}</p>
                </div >
            </div >
        </div >

            `
        }
    }
    $("#dataCont").html(divs);
}

function searchByCategory(searchWord, array) {
    let divs = ``;
    for (var i = 0; i < array.length; i++) {
        if (array[i].name == undefined) {
            if (array[i].original_title.toLowerCase().includes(searchWord.toLowerCase())) {
                divs +=
                    `   
                <div class="col-lg-4 col-md-6 mt-5 ">
                <div class="item position-relative ">
                    <img src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" class="w-100 rounded" alt="">
                    <div
                        class="overlayLayer  text-center d-flex flex-column justify-content-center position-absolute">
                        <h2 class="mt-3">${array[i].original_title}</h2>
                        <p id="desc">${array[i].overview}</p>
                        <p class="mb-0 mt-1">rate: ${array[i].vote_average}</p>
                        <p class="mb-4">${array[i].release_date}</p>
                    </div >
                </div >
            </div >
    
                `
            }
        }
        else if (array[i].original_title == undefined) {
            if (array[i].name.toLowerCase().includes(searchWord.toLowerCase())) {
                divs +=
                    `   
                <div class="col-lg-4 col-md-6 mt-5 ">
                <div class="item position-relative ">
                    <img src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" class="w-100 rounded" alt="">
                    <div
                        class="overlayLayer  text-center d-flex flex-column justify-content-center position-absolute">
                        <h2 class="mt-3">${array[i].name}</h2>
                        <p id="desc">${array[i].overview}</p>
                        <p class="mb-0 mt-1">rate: ${array[i].vote_average}</p>
                        <p class="mb-4">${array[i].first_air_date}</p>
                    </div >
                </div >
            </div >
    
                `
            }
        }

    }
    $("#dataCont").html(divs);
}
searchChar.addEventListener("keyup", function () {
    if (searchChar.value == "") {
        displayData(responseArray);
    }
    else {
        getSearch(searchChar.value).then(function () { searchByWord(searchChar.value, searchArray) })
    }
})
searchFullName.addEventListener("keyup", function () {
    if (searchFullName.value == "") {
        displayData(responseArray)
    }
    else {
        searchByCategory(searchFullName.value, responseArray)
    }
})

// Contact section
//validation part.
//name Rejex
let nameState = false;
let nameRejex = /^[a-z\sA-Z0-9]{1,}$/
nameInput.addEventListener("keyup", function () {
    if (nameRejex.test(nameInput.value)) {
        nameAlert.classList.add("d-none");
        nameState = true;
    }
    else {
        nameAlert.classList.remove("d-none")
        nameAlert.innerHTML = "Your Name is not valid"
        nameState = false;
    }
})
//
//email rejex

let emailState = false;
let emailRejex = /^[a-zA-Z0-9\_\-\.]{4,}(@)(yahoo|gmail|hotmail)(.com)$/
emailInput.addEventListener("keyup", function () {
    if (emailRejex.test(emailInput.value)) {
        emailAlert.classList.add("d-none");
        emailState = true;
    }
    else {
        emailAlert.classList.remove("d-none")
        emailAlert.innerHTML = "Enter valid mail"
        emailState = false;
    }
})

///phone Rejex
let phoneState = false;
let phoneRejex = /^(010|011|012|015)[0-9]{8}$/
phoneInput.addEventListener("keyup", function () {
    if (phoneRejex.test(phoneInput.value)) {
        phoneAlert.classList.add("d-none");
        phoneState = true;
    }
    else {
        phoneAlert.classList.remove("d-none")
        phoneAlert.innerHTML = "Enter valid phone number"
        phoneState = false;
    }
})

//age rejex

let ageState = false;
let ageRejex = /^(([2-7][0-9])|(80))$/
ageInput.addEventListener("keyup", function () {
    if (ageRejex.test(ageInput.value)) {
        ageAlert.classList.add("d-none");
        ageState = true;
    }
    else {
        ageAlert.classList.remove("d-none")
        ageAlert.innerHTML = "Enter valid age"
        ageState = false;
    }
})

// password rejex

let passwordState = false;
let passRejex = /^(?=.*[a-zA-z])(?=.*[0-9])([0-9a-zA-Z]{8,})$/
passwordInput.addEventListener("keyup", function () {
    if (passRejex.test(passwordInput.value)) {
        PassAlert.classList.add("d-none");
        passwordState = true;
    }
    else {
        PassAlert.classList.remove("d-none")
        PassAlert.innerHTML = "entre valid password (Minimum eight characters, at least one letter and one number)"
        passwordState = false;
    }
})

//confirm password check.
let confirmState = false;

confirmInput.addEventListener("keyup", function () {
    if (passwordInput.value == confirmInput.value) {
        confirmAlert.classList.add("d-none");
        confirmState = true;
    }
    else {
        confirmAlert.classList.remove("d-none")
        confirmAlert.innerHTML = "Password doesn't match"
        confirmState = false;
    }
})


// handling the submit button
for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("keyup", function () {
        if (nameState == false || emailState == false || phoneState == false || ageState == false || passwordState == false || confirmState == false) {
            $("#formSubmit").attr("disabled", true)
            console.log("false")
        }
        else if (nameState && emailState && phoneState && ageState && passwordState && confirmState) {
            $("#formSubmit").removeAttr("disabled");
            console.log("trueeee")
        }
    })
}
$("#formSubmit").click(function () {

    for (var i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "") {
            $("#formSubmit").attr("disabled", true)
        }
        else {
            allInputs[i].value = ""
        }

    }

})


