
function openNav() {
    document.getElementById("mySidenav").style.marginTop = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.marginTop = "-180px";
}

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
}
