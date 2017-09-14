window.onload = function () {
    var aLenght = document.getElementsByClassName('form-control').length;
    alert("có " + aLenght + "ô cần chọn");
    for (var i = 0; i < aLenght; i++) {
        var a = document.getElementsByClassName('form-control')[i];
        var dongy = a.options[2].value;
        var dongyText = a.options[2].text;
        a.options[0].value = dongy;
        a.options[0].text = dongyText;
    }
}
