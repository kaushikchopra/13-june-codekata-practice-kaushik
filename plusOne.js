let plusOne = function(digits) {
    let fromArray = digits.join("");

    let toInt = BigInt(fromArray);
    let addOne = toInt + 1n;
    let result = Array.from(String(addOne), Number);

    return result;
};

let digits = [1,2,3];
console.log(plusOne(digits));