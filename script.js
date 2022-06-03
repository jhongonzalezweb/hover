
document.getElementById("demo1").onmouseover = () => { mouseOver() };
document.getElementById("demo1").onmouseout = () => { mouseOut() };

function mouseOver() {
    document.getElementById("demo2").style.display = "none";
    document.getElementById("demo3").style.display = "none";
}

function mouseOut() {
    document.getElementById("demo2").style.display = "inline-block";
    document.getElementById("demo3").style.display = "inline-block";
}

