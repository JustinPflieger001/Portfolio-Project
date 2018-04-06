
function openNav() {
    document.getElementById("myNav").style.marginTop = "0px";
}

function closeNav() {
    document.getElementById("myNav").style.marginTop = "-180px";
}

function sizzeOne() {
    document.getElementById("show").classList.remove("C");
    document.getElementById("a").classList.remove("no");
    document.getElementById("slides").style.width = "50%"
}

function sizzeTwo() {
    document.getElementById("show").classList.remove("C");
    document.getElementById("b").classList.remove("no");
    document.getElementById("slides").style.width = "50%"
}

function sizzeThree() {
    document.getElementById("show").classList.remove("C");
    document.getElementById("c").classList.remove("no");
    document.getElementById("slides").style.width = "50%"
}

function sizzeFour() {
    document.getElementById("show").classList.remove("C");
    document.getElementById("d").classList.remove("no");
    document.getElementById("slides").style.width = "50%"
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

function slideeCont() {
    var s = document.getElementById("slides").children;
    var donk = document.getElementById("donk").children;
        switch (count) {
            case 0:
                s[0].classList.add("no");
                s[1].classList.remove("no");
                donk[0].classList.add("no");
                donk[1].classList.remove("no");
                break;
            case 1:
                s[1].classList.add("no");
                s[2].classList.remove("no");
                donk[1].classList.add("no");
                donk[2].classList.remove("no");
                break;
            case 2:
                s[2].classList.add("no");
                s[3].classList.remove("no");
                donk[2].classList.add("no");
                donk[3].classList.remove("no");
                break;
            case 3:
                s[3].classList.add("no");
                s[0].classList.remove("no");
                donk[3].classList.add("no");
                donk[0].classList.remove("no");
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
function slideeRCont() {
    var s = document.getElementById("slides").children;
    var donk = document.getElementById("donk").children;
    switch (count) {
        case 0:
            s[0].classList.add("no");
            s[3].classList.remove("no");
            donk[0].classList.add("no");
            donk[3].classList.remove("no");
            count = 4;
            break;
        case 1:
            s[1].classList.add("no");
            s[0].classList.remove("no");
            donk[1].classList.add("no");
            donk[0].classList.remove("no");
            break;
        case 2:
            s[2].classList.add("no");
            s[1].classList.remove("no");
            donk[2].classList.add("no");
            donk[1].classList.remove("no");
            break;
        case 3:
            s[3].classList.add("no");
            s[2].classList.remove("no");
            donk[3].classList.add("no");
            donk[2].classList.remove("no");
            break;
        default:
            count = 4;
            break;

    }
    count--;
    console.log(document.getElementById("slides").children);
    console.log(count);
}
