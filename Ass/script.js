"use strict"

// TASK 1


function calTip(bill){
    return bill>=50 && bill<=300 ? bill * 0.15 : bill*0.2;
}
console.log(calTip(100))



const bills = [125, 555, 44];
const tips = Array(calTip(bills[0]), calTip(bills[1]), calTip(bills[2]));
console.log(bills, tips)

// BONUS
const totals = Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
console.log(totals)



// TASK 2
function isEqual(x, y){
const sum = x + y;
if((x ===100) || (y ===100) || (sum ===100)){
    console.log("True")
}else{
    console.log("False")
}
}
isEqual(100,10)
isEqual(100,0);
isEqual(10,0);
isEqual(0,10);
isEqual(20,80);
isEqual(50,50);



// TASK 3
function closeTo100(x,y){
    if(x>y){
        console.log(x)
    }else{
        console.log(y)
    }
}
closeTo100(99,1)
closeTo100(49,51)
closeTo100(50,50)
