function changestyle() {
    var p = document.querySelector("#mytext");

    var random = Math.floor(Math.random()*126777215).toString();

    var farbe = "#"+ random;

    p.innerHTML = document.querySelector("#src").value;

    p.style["color"] = farbe;
    p.style["font-size"] = "78px";
    p.style["text-align"] = "center";
} 