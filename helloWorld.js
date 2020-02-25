function helloWorld(){
    alert("hello world!");
    }

function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;

    var x2 = Math.floor(Math.random() * 256);
    var y2 = Math.floor(Math.random() * 256);
    var z2 = Math.floor(Math.random() * 256);
    var bgColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
    document.body.style.color = bgColor2;
    // document.getElementById("sidenav").style.background = bgColor;
    }
