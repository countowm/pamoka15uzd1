window.onload = function(){
    let zodis = "mediena";
    let zodis2 = "azuolas";
    let zodis3 = "namas";
    let raide = PirmaRaide(zodis);
    console.log(raide);
    raide = PirmaRaide(zodis2);
    console.log(raide);
    raide = PirmaRaide(zodis3);
    console.log(raide);

}
function  PirmaRaide(zodis){
    return zodis[0];
}