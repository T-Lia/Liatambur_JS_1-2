function isNumber (x) {
        return +x == x;
    }

function pow (a, b) {        
    if (b == 0) {
        return 1;
    }
    
    var result = 1, 
        iterationsCount = b > 0 ? b : -b;

    for (var i = 1; i <= iterationsCount; i++) {
        result = b > 0 ? result * a : result / a;
    }
    return result;          
}

var x = prompt ('Enter base:', '');
var y = prompt ('Enter exponent:', '');

if (isNumber (x) && isNumber (y)) {
    console.log ('Result = ', pow(x, y));        
} else {
    alert ('It is not number!');
}

