const salary=21000;
const isBCS=true;
const height=68;
const hasCar =false;

// if (salary > 20000 && height > 66 ){
//     console .log ('su ----patro')
// }
// else {
//     console .log ('onno patro khuji')
// }
// if (salary > 25000 || height > 72){
//     console .log ('Aso baba kobul')
// }
// else {
//     console .log('vag tui mokbul')
// }
// more and more condition 
// if (salary > 25000 || height > 72 || isBCS == true){
//     console .log ('Aso baba kobul')
// }
// else {
//     console .log('vag tui mokbul')
// }
if (salary > 25000 && height > 72 && isBCS == true){
    console .log ('Aso baba kobul')
}
else {
    console .log('vag tui mokbul')
}
// COMPLEX CONDITION 
if ((salary > 25000 && hasCar== true) || isBCS==true){
    console .log('tmr 14 gosti raji')
}
if ((salary > 25000 || hasCar== true) && isBCS==true){
    console .log('tmr 14 gosti raji')
}

