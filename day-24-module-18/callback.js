function work(name, age, task) {
    task();
    console.log('hello', name);
    console.log('age is: ', age);
    
}
function washHand() {
    console.log('wash your hand');
}
function scroolFacebook() {
    console.log('scrool facebook before washing hand');
}

work('sogirudding', 17, washHand);
work('jomiludding', 17, scroolFacebook);