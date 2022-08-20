const productsList=document.getElementById("products")  
productsList.fetch('/products',{
     method:'GET',
     headers:{
      "Content-type":"application/json"
     }
}
)

const fruits=document.getElementById("products")  
productsList.fetch('/products/fruits',{
     method:'GET',
     headers:{
      "Content-type":"application/json"
     }
}
)

const vegetables=document.getElementById("products")  
productsList.fetch('/products/vegetables',{
     method:'GET',
     headers:{
      "Content-type":"application/json"
     }
}
)


