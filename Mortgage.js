
arrayStr= {"loan":"8000","interest":"0.3","year":"32"};
function calculations(loan, interest, year){
    const monthly =loan*(interest*Math.pow(1+interest,year*12))/(Math.pow(1+interest,year*12)-1);
    return monthly;
}
console.log(calculations(80000,0.05/12,10));
