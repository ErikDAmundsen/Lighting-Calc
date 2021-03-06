//global variables
var DistSlider = document.getElementById("DistSlider");
var DistOutput = document.getElementById("DistOP");
var DiameterSlider = document.getElementById("DMTSlider");
var DiameterOutput = document.getElementById("DMTOP");
var FCSlider = document.getElementById("FCSlider");
var FCOutput = document.getElementById("FCOP");
// var GFC = GetCurrentFC();
// reusable function to get object of selected model
function GetCurrentModel() {
  var ModelList = document.getElementById('model');
  currentModel = ModelList.value;
  var SelectedModel = FullSpecs.filter(Mix => $.trim(Mix["Model"]) == currentModel);
  return SelectedModel[0];
};

function GetCurrentFC() {
  var SM = GetCurrentModel();
  var FC = null;

  if (document.getElementById("Tungsten").checked == true) {
    FC = SM["FC @ 5’ (Tungsten)"] ;
  }
  else if (document.getElementById("Day Light").checked == true) {
    FC = SM["FC @ 5’ (Daylight)"];
  }
  else
  {FC=0;}
  return FC;
}


var SM = GetCurrentModel();
//assign slider values and Beam angle to start
function fillValues() {
  var SM = GetCurrentModel();
var  BAString = SM["Beam Angle"];
var BA2STRING = BAString.toString();
if (BA2STRING.includes("-"))
{
  // document.getElementById("BA").style.display = "inline";

var BASpl = BAString.split("-");
 var BASplit = BASpl.map(Number);
  var BAMin = Math.min(...BASplit);
  var BAMax = Math.max(...BASplit);
  //create array from minmax of range
   let BARange = [];
  while(BAMin <= BAMax)
  {BARange.push(BAMin++);}
  console.log(BARange);
fillAngle(BARange);

}

  if (SM["FC @ 5’ (Daylight)"] !== null && SM["FC @ 5’ (Tungsten)"] !== null) {
    document.getElementById("Tungsten").style.display = "inline";
    document.getElementById("Day Light").style.display = "inline";
    document.getElementById("DayLightText").style.display = "inline";
    document.getElementById("TungstenText").style.display = "inline";
    document.getElementById("Day Light").checked = true;
    resetSliders();
    TDfillValues();
  }

  else if (SM["FC @ 5’ (Daylight)"] !== null && SM["FC @ 5’ (Tungsten)"]  == null) {
    document.getElementById("Day Light").style.display = "iniine";
    document.getElementById("DayLightText").style.display = "inline";
    document.getElementById("Day Light").checked = true;
    // document.getElementById("Day Light").style.visibility= "visible";

    var BeamA = document.getElementById("BeamAngle");
    BeamA.innerHTML = SM["Beam Angle"]
    DistSlider.value = 5;
    DistOutput.innerHTML = 5;
    DiameterSlider.value = SM["Spot Diameter @ 5'"];
    DiameterOutput.innerHTML = SM["Spot Diameter @ 5'"];
    FCSlider.value = SM["FC @ 5’ (Daylight)"];
    FCOutput.innerHTML = SM["FC @ 5’ (Daylight)"];

  }
  
  else if (SM["FC @ 5’ (Daylight)"] == null && SM["FC @ 5’ (Tungsten)"]  !== null) {
    // document.getElementById("Tungsten").style.visibility= "visible";
    document.getElementById("Tungsten").style.display = "inline";
    document.getElementById("TungstenText").style.display = "inline";

    document.getElementById("Tungsten").checked = true;
    var BeamA = document.getElementById("BeamAngle");
    BeamA.innerHTML = SM["Beam Angle"]
    DistSlider.value = 5;
    DistOutput.innerHTML = 5;
    DiameterSlider.value = SM["Spot Diameter @ 5'"];
    DiameterOutput.innerHTML = SM["Spot Diameter @ 5'"];
    FCSlider.value = SM["FC @ 5’ (Tungsten)"] ;
    FCOutput.innerHTML = SM["FC @ 5’ (Tungsten)"] ;
  }
  else {
    resetSliders();
  }
};

//populate variable angle
function fillAngle(BARange) {
document.getElementById("BeamAngleChoose").style.display = "inline";
  for (i = 0 ;i < BARange.length; i++)
  {
    var AngleList =document.getElementById("BeamAngleChoose");
    var curan = BARange[i];
    var newoption = document.createElement("option");
    newoption.textContent = curan;
    newoption.value = curan;
    AngleList.appendChild(newoption);

  }
}

function upAng(){
BeamAngle.value = BeamAngleChoose.value; 
BeamAngle.innerHTML = BeamAngle.value; 
}
function TDfillValues()
// document.querySelector('input[name="gender"]:checked').value
{
  var SM = GetCurrentModel();
  if (document.getElementById("Tungsten").checked == true) {
    var BeamA = document.getElementById("BeamAngle");
    BeamA.innerHTML = SM["Beam Angle"]
    DistSlider.value = 5;
    DistOutput.innerHTML = 5;
    DiameterSlider.value = SM["Spot Diameter @ 5'"];
    DiameterOutput.innerHTML = SM["Spot Diameter @ 5'"];
    FCSlider.value = SM["FC @ 5’ (Tungsten)"] ;
    FCOutput.innerHTML = SM["FC @ 5’ (Tungsten)"] ;
  }
  else if (document.getElementById("Day Light").checked == true) {
    var BeamA = document.getElementById("BeamAngle");
    BeamA.innerHTML = SM["Beam Angle"]
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

// function updateDiaSlider(TestResult) {
//   DiameterSlider.value = TestResult;
//   DiameterOutput.innerHTML = TestResult;

// }

//updating 2 sliders when you update distance slider
function fromDist() {
  DistOutput.innerHTML = DistSlider.value;
  var DiaResult = Math.round(MDst2Dia(DiaResult) * 10) / 10;
  DiameterSlider.value = DiaResult;
  DiameterOutput.innerHTML = DiaResult;

  var FCResult = Math.round(MDst2FC(FCResult));
  FCSlider.value = FCResult;
  FCOutput.innerHTML = FCResult;
}
// updating other 2 sliders when you update diameter
function fromDiameter() {
  DiameterOutput.innerHTML = DiameterSlider.value;

  var DistResult = Math.round(MDia2Dist(DistResult));
  DistSlider.value = DistResult;
  DistOutput.innerHTML = DistResult;
  var FCResult = Math.round(MDia2FC(DistResult, FCResult));
  FCSlider.value = FCResult;
  FCOutput.innerHTML = FCResult;
}

// update other 2 sliders when you update FC
function fromFC() {
FCOutput.innerHTML = FCSlider.value;

  var DistResult = Math.round(MFC2Dist(DistResult));
  DistSlider.value = DistResult;
  DistOutput.innerHTML = DistResult;

  var DiaResult = Math.round(MFC2Dia(DistResult, DiaResult) * 10) / 10;
  DiameterSlider.value = DiaResult;
  DiameterOutput.innerHTML = DiaResult;
  }


function resetSliders() {
  var BeamA = document.getElementById("BeamAngle");
  BeamA.innerHTML = 0;
  DistSlider.value = 0;
  DistOutput.innerHTML = 0;
  DiameterSlider.value = 0;
  DiameterOutput.innerHTML = 0;
  FCSlider.value = 0;
  FCOutput.innerHTML = 0;

}
function RadioInvis() {
  document.getElementById("Tungsten").style.display = "none";
  document.getElementById("Day Light").style.display = "none";
  document.getElementById("DayLightText").style.display = "none";
  document.getElementById("TungstenText").style.display = "none";
  document.getElementById("BeamAngleChoose").style.display = "none";
  BeamAngleChoose.innerHTML = "<option value='' selected disabled hidden>Select Angle</option>";

}

//distance slider
DistSlider.oninput = function(){
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


