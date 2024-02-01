const productsDiv = document.getElementById("products");
const closeBtn = document.querySelector("close")

function Product(name, price, image) {
   this.name = name;
   this.price = price;
   this.image = image;
}

let products = [];

products.push(new Product("product1", 15.99, "placeholder.jpg"));
products.push(new Product("product2", 16.99, "placeholder.jpg"));
products.push(new Product("product3", 17.99, "placeholder.jpg"));
products.push(new Product("product4", 18.99, "placeholder.jpg"));
products.push(new Product("product5", 19.99, "placeholder.jpg"));
products.push(new Product("product6", 20.99, "placeholder.jpg"));

let total = 0
const totalPrice = document.getElementById("totalPrice")

products.forEach(product => {
   const productContainer = document.createElement("div")
   productContainer.classList.add("product")

   const productImage = document.createElement("img");
   productImage.src = product.image;
   productImage.classList.add("productImage");

   const productTitle = document.createElement("h2");
   productTitle.textContent = product.name;
   productTitle.classList.add("productTitle");

   const productPrice = document.createElement("p");
   productPrice.textContent = product.price;
   productPrice.classList.add("productPrice");

   const addToCart = document.createElement("button");
   addToCart.textContent = "Add to Cart";
   addToCart.classList.add("addToCart");

   addToCart.onclick = function(){
      const cartPreview = document.getElementById("cartPreview");
  
      const previewItem = document.createElement("div");
      previewItem.classList.add("cartPreviewItem");
  
      const previewImage = document.createElement("img");
      previewImage.src = product.image;
      previewImage.classList.add("previewImage");
  
      const previewName = document.createElement("h2");
      previewName.textContent = product.name;
      previewName.classList.add("previewName");
  
      const previewPrice = document.createElement("h3");
      previewPrice.textContent = product.price;
      previewPrice.classList.add("previewPrice");
  
      const remove = document.createElement("button");
      remove.textContent = "Remove"
      remove.classList.add("remove");
  
      previewItem.appendChild(previewImage);
      previewItem.appendChild(previewName);
      previewItem.appendChild(previewPrice);
      previewItem.appendChild(remove);
      cartPreview.insertBefore(previewItem, cartPreview.firstChild);

      total += Number(product.price)
      totalPrice.textContent = `$${total.toFixed(2)}`

      document.getElementById("cartContent").style.display = "flex"
      document.getElementById("pageContent").style.width = "75rem"

      remove.onclick = function(){
         previewItem.innerHTML = ""
         total -= Number(product.price)
         totalPrice.textContent = `$${total.toFixed(2)}`
      }
  }
   
   productContainer.appendChild(productImage);
   productContainer.appendChild(productTitle);
   productContainer.appendChild(productPrice);
   productContainer.appendChild(addToCart);
   productsDiv.appendChild(productContainer)
});

function showCart(){
   document.getElementById("cartContent").style.display = "flex"
   document.getElementById("pageContent").style.width = "75rem"
}

function closeCart(){
   document.getElementById("cartContent").style.display = "none"
   document.getElementById("pageContent").style.maxWidth = "90rem"
}



