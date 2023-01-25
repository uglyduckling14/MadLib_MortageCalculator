// on button click:
// print either story1 or story2(use random number generator)
const a1 = document.getElementById("A1");
const a2 = document.getElementById("A2");
const n1 = document.getElementById("N1");
const n2 = document.getElementById("N2");
const n3 = document.getElementById("N3");
const v = document.getElementById("V");
const button = document.getElementById("LibSubmit");
button.addEventListener("click", story);
function story(){
    //console.log(a1.value.length);
    const story2 = `When I had no shine, I used ${a1.value} for sparkle. When my ${a2.value} home ${v.value}, I made a home out of ${n2.value}. When love was gone, I found love in ${n1.value}. When the forest was gone, I made trees out of ${a2.value} ${n3.value}.`;
    const story1 = `A vacation is when you take a trip to some ${a1.value} place with your ${a2.value} family. Usually you go to some place that is near a/an ${n1.value} or up on a/an ${a2.value}. Sometimes, if you are lucky you get to go ${v.value} on the beach or see a ${n3.value} in a zoo.`;
    if (notEmpty()){
        document.getElementById("output").innerHTML = story2;
        document.getElementById("output").style.color = 'black';
    }
}
function notEmpty(){
    //console.log('e');
    if(a1.value.length === 0){
        document.getElementById("output").innerHTML = "Missing adjective";
        document.getElementById("output").style.color = 'red';
        return false;
    }
    if(a2.value.length === 0){
        document.getElementById("output").innerHTML = "Missing adjective";
        document.getElementById("output").style.color = 'red';
        return false;
    }
    if(n1.value.length === 0){
        document.getElementById("output").innerHTML = "Missing noun";
        document.getElementById("output").style.color = 'red';
        return false;
    }
    if(n2.value.length === 0){
        document.getElementById("output").innerHTML = "Missing noun";
        document.getElementById("output").style.color = 'red';
        return false;
    }
    if(n3.value.length === 0){
        document.getElementById("output").innerHTML = "Missing noun";
        document.getElementById("output").style.color = 'red';
        return false;
    }
    if(v.value.length === 0){
        document.getElementById("output").innerHTML = "Missing verb";
        document.getElementById("output").style.color = 'red';
        return false;
    }
    return true;
}