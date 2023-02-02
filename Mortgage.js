
//console.log(calculations(80000,0.05/12,10));
const loan = document.getElementById("loan");
const interest =document.getElementById("interest");
const years = document.getElementById("years");

loan.addEventListener("blur",() => {
    check(loan,interest,years);
    const monthly =loan.value*((interest.value/12)*Math.pow(1+(interest.value/12),years.value*12))/(Math.pow(1+(interest.value/12),years.value*12)-1);
    if(Number.isNaN(parseFloat(loan.value))){
        document.getElementById("mOutput").innerHTML = "Please enter a valid Integer!";
    }else{
        document.getElementById("mOutput").innerHTML="Monthly Payment: $ "+monthly.toFixed(2);
    }
});
interest.addEventListener("blur",() => {
    check(loan,interest,years);
    const monthly =loan.value*((interest.value/12)*Math.pow(1+(interest.value/12),years.value*12))/(Math.pow(1+(interest.value/12),years.value*12)-1);
    if(Number.isNaN(parseFloat(interest.value))){
        document.getElementById("mOutput").innerHTML = "Please enter a valid Integer!";
    }else{
        document.getElementById("mOutput").innerHTML= "Monthly Payment: $ "+monthly.toFixed(2);
    }
});
years.addEventListener("blur",() => {
    check(loan,interest,years);
    const monthly =loan.value*((interest.value/12)*Math.pow(1+(interest.value/12),years.value*12))/(Math.pow(1+(interest.value/12),years.value*12)-1);
    if(Number.isNaN(parseFloat(years.value))){
        document.getElementById("mOutput").innerHTML = "Please enter a valid Integer!";
    }else{
        document.getElementById("mOutput").innerHTML="Monthly Payment: $ "+monthly.toFixed(2);
    }
});
function check(loan,interest, years){
    if(loan.value==null||loan.value == ""){
        loan.value = 80000;
    }
    if(interest.value==null||interest.value == ""){
        interest.value = 0.05;
    }
    if(years.value==null||years.value == ""){
        years.value = 10;
    }
}
