var SM = GetCurrentModel();

// function CreateTable(){
//     var col = [];
//     SM.foreach(property =>)

// }

function extractJSON(obj,indent) {
    for (const i  in obj) {
      if (Array.isArray(obj[i]) || typeof obj[i] === 'object') {
        console.log(indent + i + ' is array or object');
        extractJSON(obj[i], indent + ' > ' + i + ' > ');
      } else {
        console.log(indent + i + ': ' + obj[i]);
      }
    }
  }
  
//   function extractJSON(obj,indent) {
//     for (const i  in obj) {
//       if (Array.isArray(obj[i]) || typeof obj[i] === 'object') {
//         console.log(indent + i + ' is array or object');
//         extractJSON(obj[i], indent + ' > ' + i + ' > ');
//       } else {
//         console.log(indent + i + ': ' + obj[i]);
//       }
//     }
//   }
  