
//console.log(calculations(80000,0.05/12,10));
const loan = document.getElementById("loan");
const interest =document.getElementById("interest");
const years = document.getElementById("years");
loan.addEventListener("blur",() => {
    const monthly =loan.value*(interest.value*Math.pow(1+interest.value,years.value*12))/(Math.pow(1+interest.value,years.value*12)-1);
    document.getElementById("mOutput").innerHTML="Monthly Payment: $ "+monthly.toFixed(2);
    console.log(loan.value);
});
interest.addEventListener("blur",() => {
    const monthly =loan.value*(interest.value*Math.pow(1+interest.value,years.value*12))/(Math.pow(1+interest.value,years.value*12)-1);
    document.getElementById("mOutput").innerHTML= "Monthly Payment: $ "+monthly.toFixed(2);
    console.log(interest.value);
});
years.addEventListener("blur",() => {
    const monthly =loan.value*(interest.value*Math.pow(1+interest.value,years.value*12))/(Math.pow(1+interest.value,years.value*12)-1);
    document.getElementById("mOutput").innerHTML="Monthly Payment: $ "+monthly.toFixed(2);
    console.log(years.value);
});
