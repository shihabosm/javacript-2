const age =52;
const price =700;
if (age <= 12){
    console .log ('you can eat for free')
}
else if (age >= 60){
    // 50% discount 
    const discount = price *50 /100;
    const payAmount =price - discount;
    console .log (payAmount)

}
else if (age >= 50){
// 25% discount 
const discount = price *25/100;
const payAmount =price - discount;
console .log (payAmount)
}
else{
    console .log (price)
}
