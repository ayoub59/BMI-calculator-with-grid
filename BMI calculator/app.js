
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;
    var cal = w / (h / 100 * h / 100);
    var bmi = (cal.toFixed(2));
    document.getElementById("output").innerHTML = "your bmi is: " + bmi;
    // let output = document.getElementById("output");

})