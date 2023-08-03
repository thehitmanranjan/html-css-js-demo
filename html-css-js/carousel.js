let rightButton = document.getElementsByClassName("carousel-active__right-button")[0]
let leftButton = document.getElementsByClassName("carousel-active__left-button")[0]

rightButton.addEventListener("click", slideRight)
leftButton.addEventListener("click", slideLeft)

function slideRight() {
    let activeSlide = document.getElementsByClassName("active-slide")[0];
    let activeItem = document.getElementsByClassName("active-item")[0];

    let nextSlide
    let nextItem

    if (activeSlide.nextElementSibling != null) {
        nextSlide = activeSlide.nextElementSibling;
    }
    else {
        nextSlide = document.querySelector(".carousel-content")
    }

    if (activeItem.nextElementSibling != null) {
        nextItem = activeItem.nextElementSibling;
    }
    else {
        nextItem = document.querySelector(".carousel__list__item")
    }

    doTransition(activeSlide, nextSlide, activeItem, nextItem)
}

function slideLeft() {
    let activeSlide = document.getElementsByClassName("active-slide")[0];
    let activeItem = document.getElementsByClassName("active-item")[0];
   
    let nextSlide
    let nextItem
    if (activeSlide.previousElementSibling != null) {
        nextSlide = activeSlide.previousElementSibling;
    }
    else {
        nextSlide = document.querySelectorAll(".carousel-content")[2]
    }

    if (activeItem.previousElementSibling != null) {
        nextItem = activeItem.previousElementSibling;
    }
    else {
        nextItem = document.querySelectorAll(".carousel__list__item")[2]
    }
    doTransition(activeSlide, nextSlide, activeItem, nextItem)
}

function doTransition(activeSlide, nextSlide, activeItem, nextItem) {
    nextSlide.classList.add("active-slide");
    nextSlide.classList.remove("inactive-slide");

    activeSlide.classList.add("inactive-slide");
    activeSlide.classList.remove("active-slide");


    nextItem.classList.add("active-item");
    activeItem.classList.remove("active-item");
}

let arrowLeftNewArrival = document.getElementsByClassName("new-arrival-button")[0]
arrowLeftNewArrival.addEventListener("click",() => {
    slideCarousel(1)})
let arrowLeftRecommendations = document.getElementsByClassName("recommendations-button")[0]
arrowLeftRecommendations.addEventListener("click",() => {
    slideCarousel(2)})

function slideCarousel(carouselType) {
    let cards
    if (carouselType == 1) { // 1 is for new-arrival
        cards = document.querySelectorAll(".new-arrival-card")
    }
    else{
        cards = document.querySelectorAll(".recommendations-card")
    }
    for (const element of cards) {
        let slideNumber = parseInt(element.getAttribute("data-slide"))
        let newSlideNumber
        if(slideNumber == 1) {
            newSlideNumber = 4
        }
        else{
            newSlideNumber = slideNumber - 1;
        }
        element.classList.remove("card"+slideNumber)
        element.classList.add("card" +newSlideNumber)
        element.setAttribute("data-slide",newSlideNumber)
      }
}