var earth = document.getElementById("earth");
var colors = ["#da1e37", "#a71e34", "#641220", "#a71e34", "#da1e37", "#ff7b00"]
var n = 0;
var span = document.getElementById("span");
var logo = document.getElementById("logo");
var r = 0;

function
change1() {
    earth.innerHTML = "GREEN";
}

function change2() {
    earth.innerHTML = "I wanna make Earth...";
}


function rotate() {
    logo.style.animation = "rotation 15s infinite linear";
}

function noRotate() { logo.style.animation = "" }


window.onload = function() {
        function darling() {
            span.style.color = colors[n];
            (n >= 5) ? n = 0: n++;
        }
        setInterval(darling, 500)
    }
    // extinct

var meteor = document.getElementById("meteor");

function extinct() {
    meteor.style.animation = "move 2s";
    meteor.style.top = "30%";
    meteor.style.right = "20%";
}

function go() {
    meteor.innerHTML = "ROCK <br> them all!";
    meteor.style.top = "33%";
    meteor.style.right = "23%";
}

function back() {
    meteor.innerHTML = "Extinct <br> humans";
    meteor.style.top = "30%";
    meteor.style.right = "20%";
}