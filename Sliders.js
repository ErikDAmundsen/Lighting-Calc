//Masster update function
function upateSliders(value) {
    document.getElementById("DMTSlider").value = value * 2;
    document.getElementById("DMTOP").innerHTML = value * 2;
};
var DistSlider = document.getElementById("DistSlider");
 var DistOutput = document.getElementById("DistOP");
var DiameterSlider = document.getElementById("DMTSlider"); 
var DiameterOutput = document.getElementById("DMTOP");
var FCSlider = document.getElementById("FCSlider");
var FCOutput = document.getElementById("FCOP");
//distance slider

DistSlider.oninput = function () {

   
    DistOutput.innerHTML = DistSlider.value;
    DistOutput.innerHTML = this.value;
};
//diameter slider


DiameterSlider.oninput = function () {

    
    DiameterOutput.innerHTML = DiameterSlider.value;
    DiameterOutput.innerHTML = this.value;
};
//Fooot candle slider

FCSlider.oninput = function () {
   
    FCOutput.innerHTML = FCSlider.value;
    FCOutput.innerHTML = this.value;
};
// document.getElementById("DistSlider").addEventListener("input",upateSliders(this.value) );


