function add(a,b) {
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const number = arguments[i];
        sum = sum+number;
    }
    return sum;
}
var result = add(1,2,3,4,5);
console.log(result);