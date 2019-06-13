
// FromDist
function MDst2Dia()
{
    var SM = GetCurrentModel();
   
     return (SM["Beam Angle"]*0.018*DistSlider.value);
}
function MDst2FC()
{
    
    var GFC = GetCurrentFC();
     return Math.round(((5*5)/(DistSlider.value*DistSlider.value)* GFC)); 
}
//from DIA

function MDia2Dist() {
    var SM = GetCurrentModel();
return(DiameterSlider.value/(SM["Beam Angle"]*0.018))
}

function MDia2FC(distResult) {
    
    var GFC = GetCurrentFC();
return ((5*5)/(distResult*distResult)*(GFC));
}
//from FC


function MFC2Dist(){
    var GFC = GetCurrentFC();
    
 return Math.sqrt((GFC/FCSlider.value)*(5*5) )
}


function MFC2Dia(distResult){
    var SM = GetCurrentModel();
    return (SM["Beam Angle"]*0.018*distResult);
}
