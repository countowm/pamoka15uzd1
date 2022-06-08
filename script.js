window.onload = function(){
    let zodis = "mediena";
    let raide;
    rezultatas = pirmaRaide(zodis[0]);
    console.log(raide);
    let PirmaRaide = pirmaRaide(zodis, raide);
    console.log(PirmaRaide);
}
function pirmaRaide(raide){
    return raide[0];
}