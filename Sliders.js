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

// //Master update function
// function upateSliders(value1,value2,value3) {
    
//   var TestResult=   Maths(value1,value2,value3);
// console.log(TestResult);
//     updateDiaSlider(TestResult);
//     var x=5;
  
    

  

// };

function updateDiaSlider(TestResult){
    DiameterSlider.value = TestResult;
DiameterOutput.innerHTML =TestResult;

}

//updating 2 sliders when you update distance slider
function fromDist(){
  var DiaResult =  MDst2Dia(DiaResult); 
  DiameterSlider.value = DiaResult;
  DiameterOutput.innerHTML= DiaResult;

  var FCResult =  MDst2FC(FCResult);
    FCSlider.value= FCResult;
    FCOutput.innerHTML = FCResult;
}
// updating other 2 sliders when you update diameter
function fromDiameter()
{
    var DistResult = MDia2Dist(DistResult);
DistSlider.value = DistResult;
DistOutput.innerHTML = DistResult;
   var FCResult = MDia2FC(DistResult,FCResult);
   FCSlider.value = FCResult;
   FCOutput.innerHTML = FCResult;
}

// update other 2 sliders when you update FC
function fromFC(){
   
var DistResult =  MFC2Dist(DistResult);
DistSlider.value = DistResult;
DistOutput.innerHTML= DistResult;

  var DiaResult =  MFC2Dia(DistResult, DiaResult);
  DiameterSlider.value = DiaResult;
  DiameterOutput.innerHTML = DiaResult;

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


