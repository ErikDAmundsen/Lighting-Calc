

//populate brand drop down
$(document).ready(function () {

    LightList.forEach(function (BrandName) {
        var newOption = document.createElement("option");
        var BrandList = document.getElementById('brand');
        newOption.setAttribute('value', BrandName.Brand);
        newOption.innerHTML = BrandName.Brand;
        BrandList.appendChild(newOption);

    })
})

// //    populate model drop down

function populateModelList() {

    var BrandList = document.getElementById('brand');
var ModelList = document.getElementById('model'); 
ModelList.innerHTML = "<option value='' selected disabled hidden>Choose a model</option>";   
var selectedBrand = BrandList.value;
var  BrandContents = LightList.filter(modelName => modelName.Brand == selectedBrand);
        BrandContents[0]["Models"].forEach(function(model){
var newOption = document.createElement("option");


newOption.innerHTML = model.Name;
ModelList.appendChild(newOption);

        })
};
//distance slider
var DistSlider = document.getElementById("DistSlider");
DistSlider.oninput = function(){

var DistOutput =document.getElementById("DistOP");
DistOutput.innerHTML = DistSlider.value;

    DistOutput.innerHTML=this.value;
};
//diameter slider

var DiameterSlider = document.getElementById("DMTSlider");
DiameterSlider.oninput = function() {

var DiameterOutput = document.getElementById("DMTOP");
DiameterOutput.innerHTML= DiameterSlider.value;  
  DiameterOutput.innerHTML=this.value;
}
//Fooot candle slider

FCSlider.oninput =function(){
var FCSlider = document.getElementById("FCSlider");
var FCOutput = document.getElementById("FCOP");
FCOutput.innerHTML = FCSlider.value; 
   FCOutput.innerHTML=this.value;
}
// document.getElementById("DistSlider").addEventListener("input",upateSliders(this.value) );


function upateSliders(value)
{
    document.getElementById("DMTSlider").value = value * 2;
     document.getElementById("DMTOP").innerHTML = value * 2;
};