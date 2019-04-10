//global variables
var DistSlider = document.getElementById("DistSlider");
var DistOutput = document.getElementById("DistOP");
var DiameterSlider = document.getElementById("DMTSlider");
var DiameterOutput = document.getElementById("DMTOP");
var FCSlider = document.getElementById("FCSlider");
var FCOutput = document.getElementById("FCOP");
var SM = GetCurrentModel();
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
if (SM["FC @ 5’ (Daylight)"] == null || SM["FC @ 5’ (Tungsten)        ."]== null)
{
document.getElementById("TungRadio").style.visibility = "visible";
resetSliders();

}
else
{
var BeamA = document.getElementById("BeamAngle");
BeamA.innerHTML= SM["Beam Angle"]
DistSlider.value = 5;
DistOutput.innerHTML = 5;
DiameterSlider.value = SM["Spot Diameter @ 5'"];
DiameterOutput.innerHTML = SM["Spot Diameter @ 5'"];
FCSlider.value = SM["FC @ 5’ (Daylight)"];
FCOutput.innerHTML = SM["FC @ 5’ (Daylight)"];
}
}
function TDfillValues() 

{
  var SM = GetCurrentModel();
 if (SM["FC @ 5’ (Daylight)"] == null)
 {
  var BeamA = document.getElementById("BeamAngle");
  BeamA.innerHTML= SM["Beam Angle"]
  DistSlider.value = 5;
  DistOutput.innerHTML = 5;
  DiameterSlider.value = SM["Spot Diameter @ 5'"];
  DiameterOutput.innerHTML = SM["Spot Diameter @ 5'"];
  FCSlider.value = SM["FC @ 5’ (Tungsten)        ."];
  FCOutput.innerHTML = SM["FC @ 5’ (Tungsten)        ."];
 }
else if (SM["FC @ 5’ (Tungsten)        ."] == null)
{
  var BeamA = document.getElementById("BeamAngle");
  BeamA.innerHTML= SM["Beam Angle"]
  DistSlider.value = 5;
  DistOutput.innerHTML = 5;
  DiameterSlider.value = SM["Spot Diameter @ 5'"];
  DiameterOutput.innerHTML = SM["Spot Diameter @ 5'"];
  FCSlider.value = SM["FC @ 5’ (Daylight)"];
  FCOutput.innerHTML = SM["FC @ 5’ (Daylight)"];
}
};
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
  var DiaResult =  Math.round(MDst2Dia(DiaResult)*10)/10; 
  DiameterSlider.value = DiaResult;
  DiameterOutput.innerHTML= DiaResult;

  var FCResult =  Math.round(MDst2FC(FCResult));
    FCSlider.value= FCResult;
    FCOutput.innerHTML = FCResult;
}
// updating other 2 sliders when you update diameter
function fromDiameter()
{
    var DistResult = Math.round(MDia2Dist(DistResult));
DistSlider.value = DistResult;
DistOutput.innerHTML = DistResult;
   var FCResult = Math.round(MDia2FC(DistResult,FCResult));
   FCSlider.value = FCResult;
   FCOutput.innerHTML = FCResult;
}

// update other 2 sliders when you update FC
function fromFC(){
   
var DistResult =  Math.round(MFC2Dist(DistResult));
DistSlider.value = DistResult;
DistOutput.innerHTML= DistResult;

  var DiaResult =  Math.round(MFC2Dia(DistResult, DiaResult)*10)/10;
  DiameterSlider.value = DiaResult;
  DiameterOutput.innerHTML = DiaResult;

}


function resetSliders()
{
  var BeamA = document.getElementById("BeamAngle");
  BeamA.innerHTML= 0;
  DistSlider.value = 0;
  DistOutput.innerHTML = 0;
  DiameterSlider.value = 0;
  DiameterOutput.innerHTML = 0;
  FCSlider.value = 0;
  FCOutput.innerHTML = 0;

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


