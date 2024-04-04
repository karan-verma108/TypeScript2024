var checkValue = function (value) {
    var result = typeof value === "string"
        ? "The value ".concat(value, " is made upper case as -> ").concat(value.toUpperCase())
        : "The ".concat(value, " is doubled to -> ").concat(value * 2);
    return result;
};
// console.log(checkValue(5));
// console.log(checkValue("hey guys!"));
var checkInput = function (value) {
    if (typeof value === "number") {
        return "".concat(value, "$");
    }
    else if (typeof value === "boolean") {
        return value ? "yes" : "no";
    }
    else if (typeof value === "string") {
        return "".concat(value[0].toUpperCase()).concat(value.slice(1, value.length));
    }
    else {
        return "invalid input";
    }
};
console.log(checkInput(4));
console.log(checkInput("hello"));
console.log(checkInput(true));
