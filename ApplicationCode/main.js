function GetColors(args) {
    return args;
}
var button = document.getElementById("button");
button.addEventListener("click", function (e) {
    var UI = {
        color: document.body,
        hexValue: document.getElementById("innerText"),
        mappedArray: []
    };
    var getColor = GetColors(UI.hexValue.value);
    document.body.style.backgroundColor = "#" + UI.hexValue.value;
    e.preventDefault();
});
