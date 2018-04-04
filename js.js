
function openNav() {
    document.getElementById("mySidenav").style.marginTop = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.marginTop = "-180px";
}

    var count = 0;
function slidee() {
    var s = document.getElementById("slides").children;
    switch (count) {
        case 0:
            s[0].classList.add("no");
            s[1].classList.remove("no");
            break;
        case 1:
            s[1].classList.add("no");
            s[2].classList.remove("no");
            break;
        case 2:
            s[2].classList.add("no");
            s[0].classList.remove("no");
            count = -1;
            break;
        default:
            count = -1;
            break;

    }
    count++;
    console.log(document.getElementById("slides").children);
    console.log(count);
}
function slideeR() {
    var s = document.getElementById("slides").children;
    switch (count) {
        case 0:
            s[0].classList.add("no");
            s[2].classList.remove("no");
            count = 3;
            break;

        case 1:
            s[1].classList.add("no");
            s[0].classList.remove("no");
            break;
        case 2:
            s[2].classList.add("no");
            s[1].classList.remove("no");
            break;
        default:
            count = 2;
            break;

    }
    count--;
    console.log(document.getElementById("slides").children);
    console.log(count);
}
