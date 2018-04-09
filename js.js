
function openNav() {
    document.getElementById("myNav").style.marginTop = "0px";
}

function closeNav() {
    document.getElementById("myNav").style.marginTop = "-180px";
}
var coun = 0;
function sizzeOne() {
    switch (coun) {
        case 0:
            document.getElementById("show").classList.remove("C");
            document.getElementById("a").classList.remove("no");
            document.getElementById("slides").style.width = "50%"
            coun = 1;
            break;
        case 1:
            document.getElementById("show").classList.add("C");
            document.getElementById("a").classList.add("no");
            document.getElementById("slides").style.width = "100%"
        coun = 0;
            break;
        default:
            break;
    }

}
function validd () {
    var one = document.getElementById("eins").value;
    if (one == "") {
        document.getElementById("res").innerHTML = "Please Enter a Subject"
    }
    else {
        document.getElementById("res").innerHTML = "Thank you! Your email has been sent."
    }
}
function sizzeTwo() {
    switch (coun) {
        case 0:
            document.getElementById("show").classList.remove("C");
            document.getElementById("b").classList.remove("no");
            document.getElementById("slides").style.width = "50%"
            coun = 1;
            break;
        case 1:
            document.getElementById("show").classList.add("C");
            document.getElementById("b").classList.add("no");
            document.getElementById("slides").style.width = "100%"
            coun = 0;
            break;
        default:
            break;
    }

}

function sizzeThree() {
switch (coun) {
    case 0:
        document.getElementById("show").classList.remove("C");
        document.getElementById("c").classList.remove("no");
        document.getElementById("slides").style.width = "50%"
        coun = 1;
        break;
    case 1:
        document.getElementById("show").classList.add("C");
        document.getElementById("c").classList.add("no");
        document.getElementById("slides").style.width = "100%"
        coun = 1;
        break;
    default:
        break;
}
}

function sizzeFour() {
switch (coun) {
    case 0:
        document.getElementById("show").classList.remove("C");
        document.getElementById("d").classList.remove("no");
        document.getElementById("slides").style.width = "50%"
        coun = 1;
        break;
    case 1:
        document.getElementById("show").classList.add("C");
        document.getElementById("d").classList.add("no");
        document.getElementById("slides").style.width = "100%"
        coun = 1;
        break;
    default:
        break;
}

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
                s[6].classList.remove("no");
                break;
            case 6:
                s[6].classList.add("no");
                s[7].classList.remove("no");
                break;
            case 7:
                s[7].classList.add("no");
                s[8].classList.remove("no");
                break;
            case 8:
                s[8].classList.add("no");
                s[9].classList.remove("no");
                break;
            case 9:
                s[9].classList.add("no");
                s[10].classList.remove("no");
                break;
            case 10:
                s[10].classList.add("no");
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
            s[10].classList.remove("no");
            count = 11;
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
        case 6:
            s[6].classList.add("no");
            s[5].classList.remove("no");
            break;
        case 7:
            s[7].classList.add("no");
            s[6].classList.remove("no");
            break;
        case 8:
            s[8].classList.add("no");
            s[7].classList.remove("no");
            break;
        case 9:
            s[9].classList.add("no");
            s[8].classList.remove("no");
            break;
        case 10:
            s[10].classList.add("no");
            s[9].classList.remove("no");
            break;
        default:
            count = 11;
            break;

    }
    count--;
    console.log(document.getElementById("slides").children);
    console.log(count);
}

function slideePArt() {
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
function slideeRPArt() {
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

function slideeLit() {
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
                s[0].classList.remove("no");
                donk[2].classList.add("no");
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
function slideeRLit() {
    var s = document.getElementById("slides").children;
    var donk = document.getElementById("donk").children;
    switch (count) {
        case 0:
            s[0].classList.add("no");
            s[2].classList.remove("no");
            donk[0].classList.add("no");
            donk[2].classList.remove("no");
            count = 3;
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
        default:
            count = 3;
            break;

    }
    count--;
    console.log(document.getElementById("slides").children);
    console.log(count);
}
