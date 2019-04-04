//global variables
var DistSlider = document.getElementById("DistSlider");
var DistOutput = document.getElementById("DistOP");
var DiameterSlider = document.getElementById("DMTSlider");
var DiameterOutput = document.getElementById("DMTOP");
var FCSlider = document.getElementById("FCSlider");
var FCOutput = document.getElementById("FCOP");

// reusable function to get object of selected model
function GetCurrentModel(){
var ModelList = document.getElementById('model');
 currentModel = ModelList.value;
 var SelectedModel = FullSpecs.filter(Mix => $.trim(Mix["Model"]) == currentModel);
 return SelectedModel[0];
}

//assign slider values and Beam angle to start
function fillValues(){

var SM = GetCurrentModel();
var BeamA = document.getElementById("BeamAngle");
BeamA.innerHTML= SM["Beam Angle"]
DistSlider.value = 5;
DistOutput.innerHTML = 5;
DiameterSlider.value = SM["Spot Diameter @ 5'"];
DiameterOutput.innerHTML = SM["Spot Diameter @ 5'"];
FCSlider.value = SM["FC @ 5’ (Daylight)"];
FCOutput.innerHTML = SM["FC @ 5’ (Daylight)"];
 
}

//Master update function
function upateSliders(value) {

    updateDistSlider();
    updateDiaSlider();
    upadteFCSlider();

};

function updateDistSlider(){

    
}
//distance slider

DistSlider.oninput = function () {


    DistOutput.innerHTML = DistSlider.value;
    
};
//diameter slider


DiameterSlider.oninput = function () {

    DiameterOutput.innerHTML = DiameterSlider.value;
   
};
//Foot candle slider

FCSlider.oninput = function () {

    FCOutput.innerHTML = FCSlider.value;
    
};
// document.getElementById("DistSlider").addEventListener("input",upateSliders(this.value) );


