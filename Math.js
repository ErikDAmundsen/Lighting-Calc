function Maths(){
    var SM = GetCurrentModel();
   

   




}


// FromDist
function MDst2Dia()
{
    var SM = GetCurrentModel();
   
     return (SM["Beam Angle"]*0.018*DistSlider.value);
}
function MDst2FC()
{
    var SM = GetCurrentModel();
     return ((5*5)/(DistSlider.value*DistSlider.value)*SM["FC @ 5’ (Daylight)"]); 
}
//from DIA

function MDia2Dist() {
    var SM = GetCurrentModel();
return(DiameterSlider.value/(SM["Beam Angle"]*0.018))
}

function MDia2FC(distResult) {
    var SM = GetCurrentModel();
return ((5*5)/(distResult*distResult)*(SM["FC @ 5’ (Daylight)"]));
}
//from FC


function MFC2Dist(){
    var SM = GetCurrentModel();
 return Math.sqrt((SM["FC @ 5’ (Daylight)"]/FCSlider.value)*(5*5) )
}

function MFC2Dia(distResult){
    var SM = GetCurrentModel();
    return (SM["Beam Angle"]*0.018*distResult);
}