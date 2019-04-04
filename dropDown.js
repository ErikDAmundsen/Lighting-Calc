//populate brand drop down
$(document).ready(function () {

    const UniqeBrandArray = [
        ...new Set(FullSpecs.map(x => x.Brand))];
    console.log(UniqeBrandArray);


    for (var i = 0; i < UniqeBrandArray.length; i++) {
        var BrandList = document.getElementById('brand');
        var opt = UniqeBrandArray[i];
        var newOption = document.createElement("option");
        newOption.textContent = opt;
        newOption.value = opt;
        BrandList.appendChild(newOption);
    };
});
// UniqeBrandArray.forEach(function (B) {
//     var newOption = document.createElement("option");
//     var BrandList = document.getElementById('brand');
//     newOption.setAttribute('value', B);
//     newOption.innerHTML = B;
//     BrandList.appendChild(newOption);
//     })
// })

// //    populate model drop down
function populateModelList() {
    var BrandList = document.getElementById('brand');
    var ModelList = document.getElementById('model');
    ModelList.innerHTML = "<option value='' selected disabled hidden>Choose a model</option>";
    var selectedBrand = BrandList.value;
    var BrandContents = FullSpecs.filter(modelName => modelName.Brand == selectedBrand);
    BrandContents.forEach(function (model) {
        var newOption = document.createElement("option");
        newOption.innerHTML = model.Model;
        ModelList.appendChild(newOption);

       
    })};
    