window.onload = function () {
    slideOne();
    slideTwo();


}

let values1 = document.getElementById("values-1");
let values2 = document.getElementById("values-2");

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 10;
let sliderTrack = document.querySelector(".slider-track");

let sliderMaxValue = document.getElementById("slider-2").max;

function mm1(event) {

    // values1.style.left=event.offsetX+30+"px";
}

function mm2(event) {

    //values2.style.left=event.offsetX+30+"px";
}


function slideOne() {


    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }

    displayValOne.innerHTML = "&#2547;" + sliderOne.value;


    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.innerHTML = "&#2547;" + sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;

    console.log(sliderTwo.value.length)


    if (percent1 <= 25) {
        values1.style.marginLeft = "-" + sliderOne.value.length * 5 + "px";
    } else if (percent1 <= 50) {
        values1.style.marginLeft = "-" + sliderOne.value.length * 11 + "px";
    }else{
        values1.style.marginLeft = "-" + sliderOne.value.length * 13 + "px";
    }

    if (percent2 <= 25) {
        values2.style.marginLeft = "-" + sliderTwo.value.length * 2 + "px";
    } else if (percent2 <= 50) {
        values2.style.marginLeft = "-" + sliderTwo.value.length * 5 + "px";
    }else{
        values2.style.marginLeft = "-" + sliderTwo.value.length * 10 + "px";
    }


    values1.style.left = percent1 + "%";
    values2.style.left = percent2 - 4 + "%";

    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}