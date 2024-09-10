var productName=document.getElementById("nameInp");
var productUrl=document.getElementById("urlInp")
var productsList ;

if(localStorage.getItem("productList")!=null)
{
    productsList =JSON.parse( localStorage.getItem("productList"));
    displayProducts();
    
}
else{
    productsList=[];
}

function addProducts(){
    var product={
        name:productName.value,
        url:productUrl.value
    }
    productsList.push(product)
    localStorage.setItem('productList',JSON.stringify(productsList))
    displayProducts()
}
function displayProducts(){
   var cont="";
   for(var i=0 ; i<productsList.length ; i++ ){
       cont+=`<div class="row shadow-lg p-3" style="background-color:#eee ;" >
       <p class="font-weight-bold mx-5 text-center">`+productsList[i].name+`</p> 
       <a href="`+productsList[i].url+`" target="-blank"><button class="btn btn-primary ml-5">visit</button></a>
       <button onclick='deleteProduct(`+i+`)' class="btn btn-danger ml-5">delete</button>

       </div>`
   }
   document.getElementById("index").innerHTML=cont;
   clearForm()

}
function clearForm(){
   
        productName.value="";
        productUrl.value="";
}
function deleteProduct(index){
    productsList.splice(index,1);
    localStorage.setItem('productList',JSON.stringify(productsList))
    displayProducts();

}