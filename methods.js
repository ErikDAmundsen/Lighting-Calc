// // populate brand dropdown
// $(document).ready(function () {

//     var brandList = document.getElementById('brand');

//     brandList.options[0] = new Option('--Select--', '');
//     brandList.options[1] = new Option('Snacks', 'Snacks');
//     brandList.options[2] = new Option('Drinks', 'Drinks');
//     });
//     // populate model drop down
//     function populateModelList(){

//         var brandList = document.getElementById('brand');
//         var modelList = document.getElementById("model");
//         var selectedBrand = brandList.options[brandList.selectedIndex].value;

//         if (selectedBrand=='Snacks')
//         {

//             modelList.options.length=0;
//             modelList.options[0] = new Option('--Select--', '');
//             modelList.options[1] = new Option('Burger', 'Burger');
//             modelList.options[2] = new Option('Pizza', 'Pizza');
//             modelList.options[3] = new Option('Hotdog', 'Hotdog');
//             modelList.options[4] = new Option('Potato Chips', 'Potato Chips');
//             modelList.options[5] = new Option('French Fries', 'French Fries');

//         }
//         else if (list1SelectedValue=='Drinks')
//         {

//             modelList.options.length=0;
//             modelList.options[0] = new Option('--Select--', '');
//             modelList.options[1] = new Option('Coca Cola', 'Coca Cola');
//             modelList.options[2] = new Option('7up', '7up');
//             modelList.options[3] = new Option('Pepsi', 'Pepsi');
//             modelList.options[4] = new Option('Coffee', 'Coffee');
//             modelList.options[5] = new Option('Tea', 'Tea');

//         }
// }

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
var selectedBrand = BrandList.value;
var  BrandContents = LightList.filter(modelName => modelName.Brand == selectedBrand);
        BrandContents[0]["Models"].forEach(function(model){
var newOption = document.createElement("option");
var ModelList = document.getElementById('model');
newOption.innerHTML = model.Name;
ModelList.appendChild(newOption)

        })
         
         
     

   
    
     
  
     
};



// // forEach(function)
// //     }

    //  for (var i = 0; i < LightList.length; i++) {
    //    ele.innerHTML = ele.innerHTML + '<option value=' + LightList[i]['Brand'] + '</option';
    //  }




//     $.each(LightList, function (Brand,obj){
//         $("#brand").append($('<option></option>').val(obj.Brand).html(obj.Brand));

//     });

//   });  

// // populate model drop down
//     function populateModelList(){

//         var brandList = document.getElementById('brand');
//         var modelList = document.getElementById("model");

//         var selectedBrand = brandList.value;   
//       var model= LightList.Brand[selectedBrand]


//         $.each(Model,  function(Model,obj){
//            $("#model").append($('<option></option>').val(obj.model).html(obj.Model))
//        })

