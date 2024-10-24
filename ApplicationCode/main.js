function GetColors(args) {
    return args;
}
var button = document.getElementById("button");
button.addEventListener("click", function (e) {
    var color = document.getElementById("innerText");
    var value = color.value;
    var getColor = GetColors(value);
    document.body.style.backgroundColor = "#" + getColor;
    e.preventDefault();
});
