function someMath(a, b, callback){
    let c = a + b;
    let d = a - b;
    callback(c, d);
}

someMath(10, 4, function(num1, num2){
    const calculation = `${num1} - ${num2}  =  ${num1 - num2}`;
    console.log(calculation);
})