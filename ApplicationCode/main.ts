function GetColors(args: any) {
    return args;
}

const button = document.getElementById("button");
button.addEventListener("click",(e) => {
    const color: any = document.getElementById("innerText");
    const value = color.value;

    const getColor = GetColors(value);
    document.body.style.backgroundColor = "#" + getColor;

    e.preventDefault();
});
