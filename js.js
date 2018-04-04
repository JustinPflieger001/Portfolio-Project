
function openNav() {
    document.getElementById("mySidenav").style.marginTop = "0px";
}

function closeNav() {
    document.getElementById("mySidenav").style.marginTop = "-180px";
}

    var count = 0;
function slideeArt() {
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
                s[3].classList.remove("no");
                break;
            case 3:
                s[3].classList.add("no");
                s[4].classList.remove("no");
                break;
            case 4:
                s[4].classList.add("no");
                s[5].classList.remove("no");
                break;
            case 5:
                s[5].classList.add("no");
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
function slideeRArt() {
    var s = document.getElementById("slides").children;
    switch (count) {
        case 0:
            s[0].classList.add("no");
            s[5].classList.remove("no");
            count = 6;
            break;
        case 1:
            s[1].classList.add("no");
            s[0].classList.remove("no");
            break;
        case 2:
            s[2].classList.add("no");
            s[1].classList.remove("no");
            break;
        case 3:
            s[3].classList.add("no");
            s[2].classList.remove("no");
            break;
        case 4:
            s[4].classList.add("no");
            s[3].classList.remove("no");
            break;
        case 5:
            s[5].classList.add("no");
            s[4].classList.remove("no");
            break;
        default:
            count = 6;
            break;

    }
    count--;
    console.log(document.getElementById("slides").children);
    console.log(count);
}
