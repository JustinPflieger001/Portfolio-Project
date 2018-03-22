
function openNav() {
    document.getElementById("mySidenav").style.marginTop = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.marginTop = "-180px";
}

<<<<<<< HEAD

    var count = 0;
function slidee() {

    var s = document.getElementById("slides").children;
    switch (count) {
        case 0:
            count = 1;
            break;
        case 1:
            s[0].classList.add("no");
            s[1].classList.remove("no");
            count = 2;
            break;
        case 2:
            s[1].classList.add("no");
            s[2].classList.remove("no");
            count = 3;
            break;
        case 3:
            s[2].classList.add("no");
            s[0].classList.remove("no");
            count = 1;
            break;
        default:
            count = 0;
            break;

    }
     setTimeout(slidee, 3000);
=======
function slidee() {
    var a = document.getElementById("slone").style.marginRight;
    var b = document.getElementById("sltwo").style.marginRight;
    var c = document.getElementById("slthree").style.marginRight;

    if (a == "0px") {
      document.getElementById("slone").style.marginLeft = "3000px";
      b = "0px";
    }

    else if (b == "0px") {
      document.getElementById("sltwo").style.marginLeft = "3000px";
      c = "0px";
      document.getElementById("slone").style.marginLeft = "0px";
      a = "-3000px";
    }

    else if (c == "0px") {
      document.getElementById("slthree").style.marginLeft = "3000px";
      a = "0px";
      document.getElementById("sltwo").style.marginLeft = "0px";
      b = "0px";
    }
>>>>>>> f2c32633dcb2b64993a62f3f3b4a4156c4e65d1b
}
