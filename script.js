document.getElementById("demo").onmouseover = function () { mouseOver() };
document.getElementById("demo").onmouseout = function () { mouseOut() };

function mouseOver() {
    document.getElementById("demo").style.display = "none";
}

function mouseOut() {
    document.getElementById("demo").style.display = "block";
}

