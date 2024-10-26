function GetColors(args: any) {
    return args;
}

const button = document.getElementById("button");
button.addEventListener("click",(e) => {

    const UI :any = {
        color: document.body,
        hexValue: document.getElementById("innerText"),
        mappedArray: []

    }

    const getColor = GetColors(UI.hexValue.value);
    document.body.style.backgroundColor = "#" +UI.hexValue.value;

    e.preventDefault();
});
