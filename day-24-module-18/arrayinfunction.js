// var nums = [12,23,45,66,78];
// for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//    if (number %2 == 0) {
//        console.log(number, ": even number");
       
//    } else {
//        console.log(number*2 , ";odd number");
//    }
    
// }



// var nums = [12,23,45,66,78];
// for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//     evenify(number);
// }
// function evenify(number) {
//     if (number %2 == 0) {
//         console.log(number, ": even number");
        
//     } else {
//         console.log(number*2 , ";odd number");
//     }
     
// }



function evenify(number) {
    if (number %2 == 0) {
        console.log(number, ": even number");
        
    } else {
        console.log(number*2 , ";odd number");
    }
     
}
function even_all(nums) {
    for (let i = 0; i < nums.length; i++) {
            const number = nums[i];
            evenify(number);
         }
}
var nums = [12,23,45,66,78];
even_all(nums);

