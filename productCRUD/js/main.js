var prodNameInput =  document.getElementById("prodNameInp");//input kolo
var prodPriceInput =  document.getElementById("prodPriceInp");//input kolo
var prodCategInput =  document.getElementById("prodCategInp");//input kolo
var prodDescInput =  document.getElementById("prodDescInp");//input kolo
var addBtn= document.getElementById("addBtn")
var productContainer ;//global
// **************localstorage*********************
if(localStorage.getItem("productsList")==null){//zbon gded awel mra yfth
   
    var productContainer = []; //3rfoh fady
}
else{
//get data awel ma refresh aw elcode y run
//zbon kadem leh 7gat f localstorage lazem agebha

     productContainer=JSON.parse(localStorage.getItem("productsList"));
      displayProduct();

}
// *************add*********************
function addProduct() {

    var product = {
        name:prodNameInput.value,
        price:prodPriceInput.value,
        category:prodCategInput.value,
        desc:prodDescInput.value
    };

    productContainer.push(product);
    localStorage.setItem("productsList",JSON.stringify(productContainer))
    displayProduct();
    clearForm();
  
}
// *************clear form****************
function clearForm(){
    prodNameInput.value = "";
    prodPriceInput.value = "";
    prodCategInput.value = "";
    prodDescInput.value = "";
}
// **************display*********************
function displayProduct(){
    //display elly  byloop w y3red fe el table
  var trs="";
  for(var i=0 ; i < productContainer.length; i++)//loop and i to3aber 3n el index
  {
      trs+=`
         <tr>
         <td>${i}</td>
         <td>${productContainer[i].name}</td>
         <td>${productContainer[i].price}</td>
         <td>${productContainer[i].category}</td>
         <td>${productContainer[i].desc}</td>
         <td><button onclick='updateProduct(${i})' class="btn btn-warning">update</button></td>
        
         <td><button onclick='deleteProduct(${i})' class="btn btn-danger">delete</button></td>
         </tr>
      `;
  }
  document.getElementById("tableBody").innerHTML=trs;//y3red fel table
  
  
  }
//  ***************delete********************

function deleteProduct(productiIndex){//index da el i elly ba3tah mn el onclick
    productContainer.splice(productiIndex,1);
    displayProduct();//3shan ymsah el row mn el gadwal mosh bas el arr 
 
    // b3d el delete  aroh ll storage y3ml set ll update mn 8er elly msa7toh w a7wel el arr to string 3shan el storage yfhamoh w yshofoh
   localStorage.setItem("productsList",JSON.stringify(productContainer))
  }
 

// *****************search************************

function search(searchText)
{

    var trs="";
for(var i=0;i<productContainer.length;i++)//loop and i to3aber 3n el index
{
    if(productContainer[i].name.toLowerCase().includes(searchText.toLowerCase()))

    {
        trs+=`
        <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick='updateProduct(${i})' class="btn btn-warning">update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-danger">delete</button></td>
        </tr>
     `;
} 
}
document.getElementById("tableBody").innerHTML=trs;//y3red fel table

}

// ************update********************

function updateProduct(index){//asmy el parameter ay esm mo3aber
    //amsek elname elly f nafs satr el update button
    // w asawee bel value of inpute 3shan lma adose 3 l update ytl3 fo2
prodNameInput.value = productContainer[index].name ;
prodPriceInput.value = productContainer[index].price;
prodCategInput.value = productContainer[index].category;
prodDescInput.value = productContainer[index].desc ; //kda lma click 3l update data of row  htetl3 fo2 fel inputs

addBtn.innerHTML="edit product";
  //ana 3aiza  lma ados eldata tupdate f nafs el satr msh row gdid 
addBtn.onclick=function(){
//ad5ol gwa el arr a5od mn el form
// asaweh  bel values el gdeda b3d el ta3deel 
productContainer[index].name = prodNameInput.value;
productContainer[index].price = prodPriceInput.value;
productContainer[index].category= prodCategInput.value;
productContainer[index].desc  = prodDescInput.value ;
  // b3d el update  aroh ll storage y3ml set ll update mn 8er elly msa7toh w a7wel el arr to string 3shan el storage yfhamoh w yshofoh
  localStorage.setItem("productsList",JSON.stringify(productContainer))

displayProduct(); //ashof el data elly 7salaha update fe nafs elrow
addBtn.innerHTML="add product";
addBtn.onclick = addProduct;
clearForm()
}

}

//********validation************
function validateName(){
    var nameRejex=/^[A-Z][a-z]{2,7}$/;
    if(!nameRejex.test(nameInput.value))
    {
        addBtn.disabled="true";
        
    }
    else
    {
        addBtn.removeAttribute("disabled");
        
    }
}












