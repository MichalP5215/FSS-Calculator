let score = document.getElementById("score");
let result = document.getElementById("result");
let cal, val1, val2, operPressed, cal_done = false;
let oper = "+";
let tot, currentStatus = 0;
let o;

function num(val) {
    val = val.toString();
    if (cal_done)
        cls();

    if (!operPressed) {
        if (!val1)
            val1 = 0;

        val1 = val1 + val;

        val1 = lengthFix(val1)

        score.innerHTML = val1;
        result.innerHTML = val1;

    }
    if (operPressed) {
        if (!val2)
            val2 = 0;

        val2 = val2 + val;

        val2 = lengthFix(val2)

        score.innerHTML = val2;
        result.innerHTML = val1 + oper + val2;

    }
}

function calc(val) {
    if (val1 && val2) {
        operPressed = true;
        total();
        oper = val;
    }

    if (cal_done) {
        var x = val1 = tot;
        cls();
        val1 = x;
        val1 = lengthFix(val1)
        score.innerHTML = val;
        result.innerHTML = +x + val;
        oper = val;
        operPressed = true;
    }

    if (!val1 || operPressed) {
        return false;
    }

    if (val1 && !val2) {
        score.innerHTML = val;
        var a = result.innerHTML.toString();
        result.innerHTML = a + val;
        oper = val;
        operPressed = true;
    }
}

function total() {
    if (!val1)
        return false;

    if (!val2 && operPressed) {
        tot = magic(val1, val1, oper);
        tot = lengthFix(tot);
    }

    if (val1 && val2) {
        tot = magic(val1, val2, oper);
        tot = lengthFix(tot);
    }

    tot = tot.toString();
    var noDec = tot.indexOf(".") == -1;
    if (!noDec)
        tot = parseFloat(tot).toFixed(3);

    score.innerHTML = tot;
}

function magic(a, b, oper) {
    switch (oper) {
        case "+":
            tot = +a + +b;
            cal_done = true;
            break;
        case "-":
            tot = +a - +b;
            cal_done = true;
            break;
        case "/":
            tot = +a / +b;
            cal_done = true;
            break;
        case "*":
            tot = +a * +b;
            cal_done = true;
            break;
        default:
            return false;
    }
    return tot;
}

function cls() {
    score.innerHTML = 0;
    val1 = false;
    val2 = false;
    oper = "+";
    tot = 0;
    cal_done = false;
    operPressed = false;
}

function lengthFix(o) {
    o = o.toString();

    if (o != 0 || o != '0') {
        if (o.charAt(0) == 0)
            o = o.slice(1);
    }

    if (o.toString().length > 12)
        o = o.substring(0, 12);

    return o;
}


document.onkeyup = function (e) {

    switch (e.which) {
        case 110 || 190:
            num('.');
            break;
        case 96 || 48:
            num('0');
            break;
        case 97 || 49:
            num('1');
            break;
        case 98 || 50:
            num('2');
            break;
        case 99 || 51:
            num('3');
            break;
        case 100 || 52:
            num('4');
            break;
        case 101 || 53:
            num('5');
            break;
        case 102 || 54:
            num('6');
            break;
        case 103 || 55:
            num('7');
            break;
        case 104 || 56:
            num('8');
            break;
        case 105 || 57:
            num('9');
            break;

        case 111:
            num('/')
            break;
        case 106:
            num('*')
            break;
        case 107:
            num('+')
            break;
        case 109:
            num('-')
            break;

        case 13:
            total();
            break;

        case 8 || 46:
            cls();
            break;

        case 27:
            cls();
            document.getElementById('result').innerHTML = '';
            break;
    }

}