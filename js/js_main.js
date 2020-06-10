// localstorage --> key:strinf , value string

//object -->string        json.stringfy()   //setItem
//string --> object       json.parse()      //getItem
var allProducts;
////////////////////////////////////////////////////////
if (localStorage.getItem("allproductstorage") != null) {
  allProducts = JSON.parse(localStorage.getItem("allproductstorage"));
  dispplayData();
} else {
  allProducts = [];
}

function addProduct() {
  var proName = document.getElementById("proNameInp").value;
  var proPrice = document.getElementById("proPriceInp").value;
  var proCat = document.getElementById("proCategoryInp").value;
  var proDesc = document.getElementById("proDescInp").value;

  var oneProduct = {
    name: proName,
    price: proPrice,
    category: proCat,
    Description: proDesc,
  };

  allProducts.push(oneProduct);
  localStorage.setItem("allproductstorage", JSON.stringify(allProducts));
  dispplayData();
  clearData();
}
function dispplayData() {
  //Array bt3i elli fih kol el data
  temp = "";
  for (var i = 0; i < allProducts.length; i++) {
    temp +=
      `
        <div class="col-md-4 mb-3 border">
        <div class="item">
            
            <h2 class="text-center text-primary"> ` +
      allProducts[i].name +
      ` <span class="btn btn-primary">` +
      allProducts[i].category +
      `</span> </h2>
            <p>` +
      allProducts[i].Description +
      `</p>
            <p class="btn btn-warning float-left">` +
      allProducts[i].price +
      `</p>  <button onclick="deleteproduct(` +
      i +
      `)" class="btn btn-danger float-right">delete</button>
      <div class="clearfix"></div>
        </div>
    </div>
        
        `;
  }

  document.getElementById("myRow").innerHTML = temp;
}

function clearData() {
  document.getElementById("proNameInp").value = "";
  document.getElementById("proPriceInp").value = "";
  document.getElementById("proCategoryInp").value = "";
  document.getElementById("proDescInp").value = "";
}
function deleteproduct(x) {
  allProducts.splice(x, 1);
  localStorage.setItem("allproductstorage", JSON.stringify(allProducts));
  dispplayData();
}
function searchProduct(item) {
  var temp = "";
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name.includes(item)) {
      temp +=
        `
        <div class="col-md-4 mb-3 border">
        <div class="item">
            
            <h2 class="text-center text-primary"> ` +
        allProducts[i].name +
        ` <span class="btn btn-primary">` +
        allProducts[i].category +
        `</span> </h2>
            <p>` +
        allProducts[i].Description +
        `</p>
            <p class="btn btn-warning float-left">` +
        allProducts[i].price +
        `</p>  <button onclick="deleteproduct(` +
        i +
        `)" class="btn btn-danger float-right">delete</button>
      <div class="clearfix"></div>
        </div>
    </div>
        
        `;
    }
  }
  document.getElementById("myRow").innerHTML = temp;
}
function updateProduct() {
  document.getElementById("dataupdate").style.display = "block";
  document.getElementById("buttonupdate").style.display = "block";
  document.getElementById("hide").style.display = "block";
}
// you can update description only or price only or update the two
function theproductupdated() {
  var nameofproduct = document.getElementById("nameofpro").value;
  var desofproduct = document.getElementById("desofpro").value;
  var priofproduct = document.getElementById("priofpro").value;
  var pro;
  var cat;
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name == nameofproduct) {
      if (desofproduct == "") {
        desofproduct = allProducts[i].Description;
      }
      if (priofproduct == "") {
        priofproduct = allProducts[i].price;
      }
      pro = i;
      cat = allProducts[i].category;
    }
  }
  var updatpro = {
    name: nameofproduct,
    price: priofproduct,
    category: cat,
    Description: desofproduct,
  };
  allProducts.splice(pro, 1, updatpro);
  localStorage.setItem("allproductstorage", JSON.stringify(allProducts));
  dispplayData();
  document.getElementById("nameofpro").value = "";
  document.getElementById("desofpro").value = "";
  document.getElementById("priofpro").value = "";
}
function hidde() {
  document.getElementById("dataupdate").style.display = "none";
  document.getElementById("buttonupdate").style.display = "none";
  document.getElementById("hide").style.display = "none";
}
