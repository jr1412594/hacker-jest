function expression(number, operation) {
    if(!operation)
        return number;
    return operation(number)
}
  
function zero(oporation) {return expression(0, oporation)}
function one(oporation) {return expression(1, oporation)}
function two(oporation) {return expression(2, oporation)}
function three(oporation) {return expression(3, oporation)}
function four(oporation) {return expression(4, oporation)}
function five(oporation) {return expression(5, oporation)}
function six(oporation) {return expression(6, oporation)}
function seven(oporation) {return expression(7,oporation)}
function eight(oporation) {return expression(8, oporation)}
function nine(oporation) {return expression(9, oporation)}

function plus(x) {
return function(y) {
    return y + x
    }
}
function minus(x) {
return function(y) {
    return y - x
    }
}
function times(x) {
return function(y) {
    return y * x
    }
}
function dividedBy(x) {
return function(y){
    return Math.floor(y / x)
    }
}