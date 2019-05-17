



function extractJSON(obj,indent) {
    var dataBox= document.getElementById("showData");
    dataBox.innerHTML ="";
    for (const i  in obj) {
      // console.log(indent + i + ': ' + obj[i]);
        dataBox.innerHTML += (indent + i.bold() + ': ' + obj[i]+ "</br>");
      }
    }
    
    
