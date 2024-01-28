const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});
var trustus = document.querySelectorAll(".trustus");
trustus.forEach((el) => observer.observe(el));
const zoom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('add');
        } else {
            entry.target.classList.remove('add')
        }
    });
});
var advise = document.querySelectorAll(".advise");
advise.forEach((el) => zoom.observe(el));
const zoomin = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('zoom');
        } else {
            entry.target.classList.remove('zoom')
        }
    });
});
var voucher = document.querySelectorAll(".voucher");
voucher.forEach((el) => zoomin.observe(el));
const left = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('right');
        } else {
            entry.target.classList.remove('right')
        }
    });
});
var blogcontent = document.querySelectorAll(".blog-content");
blogcontent.forEach((el) => left.observe(el));
const righttoAsus = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('righttoAsus');
        } else {
            entry.target.classList.remove('righttoAsus')
        }
    });
});
var asuscontain = document.querySelectorAll(".right-left");
asuscontain.forEach((el) => righttoAsus.observe(el));
const lefttoMSI = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('lefttoMSI');
        } else {
            entry.target.classList.remove('lefttoMSI')
        }
    });
});
var msicontain = document.querySelectorAll(".left-right");
msicontain.forEach((el) => lefttoMSI.observe(el));

document.addEventListener("DOMContentLoaded", function() {
    const smallImages = document.querySelectorAll(".product-image-extra-small");
    smallImages.forEach(function(image) {
        image.addEventListener("click", function() {
            const mainImage = document.querySelector(".product-image-main img");
            const imageContainer = this.closest(".product-image");
            const imageopacity = Array.from(imageContainer.querySelectorAll(".product-image-extra-small img"));
            const clickedImageSrc = this.querySelector(".image-change").src;
            mainImage.src = clickedImageSrc;   
            const currentIndex = imageopacity.findIndex(function(img) {
                return img.src === mainImage.src;
            });
            const nextIndex = (currentIndex) % imageopacity.length; 
            imageopacity.forEach(function(img) {
                img.style.opacity = 0.5;
            });
            imageopacity[nextIndex].style.opacity = 1.5;
        });   
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const nextIcons = document.querySelectorAll(".next-icon");
    nextIcons.forEach(function(nextIcon) {
        nextIcon.addEventListener("click", function() {
            const imageContainer = this.closest(".product-image");
            console.log(imageContainer)
            const mainImage = document.querySelector(".product-image-main img");
            const smallImages = Array.from(imageContainer.querySelectorAll(".product-image-extra-small img"));
            const currentIndex = smallImages.findIndex(function(img) {
                return img.src === mainImage.src;
            });
            const nextIndex = (currentIndex + 1) % smallImages.length;
            mainImage.src = smallImages[nextIndex].src;
            smallImages.forEach(function(img) {
                img.style.opacity = 0.5; // Set opacity of all small images to 0.5
            });
            smallImages[nextIndex].style.opacity = 1;
        });
        
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    const nextIcons = document.querySelectorAll(".pre-icon");
    nextIcons.forEach(function(nextIcon) {
        nextIcon.addEventListener("click", function() {
            const imageContainer = this.closest(".product-image");
            const mainImage = document.querySelector(".product-image-main img");
            const smallImages = Array.from(imageContainer.querySelectorAll(".product-image-extra-small img"));
            const currentIndex = smallImages.findIndex(function(img) {
                return img.src === mainImage.src;
            });
            const nextIndex = (currentIndex + 4) % smallImages.length;
            mainImage.src = smallImages[nextIndex].src;
            smallImages.forEach(function(img) {
                img.style.opacity = 0.5; // Set opacity of all small images to 0.5
            });
            smallImages[nextIndex].style.opacity = 1;
        });
    });
});

const indexToProduct = () => {
    var productLinks = document.querySelectorAll(".carousel-product");
    productLinks.forEach(function(productLink) {
        productLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            var productTitle = this.querySelector(".carousel-product-body-title h3").textContent;
            var productDetails = this.querySelectorAll(".carousel-text p");
            var productImage = this.querySelector(".image-product");
            var getDataID = this.getAttribute('data-id');
            var productDetailsArray = Array.from(productDetails).map(function(detail) {
                return detail.textContent;
            });
            var imagePath = productImage.getAttribute("src");
            var productPrice = this.querySelector(".carousel-product-body-bot-money span").textContent;
            localStorage.setItem("productTitle", productTitle);
            localStorage.setItem("productDetails", JSON.stringify(productDetailsArray));
            localStorage.setItem("productPrice", productPrice);
            localStorage.setItem("imagePath", imagePath);
            localStorage.setItem("getDataID",getDataID);
            window.location.href = "product.html";
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var productTitle = localStorage.getItem("productTitle");
    var getDataId = localStorage.getItem("getDataID");
    var productDetails = JSON.parse(localStorage.getItem("productDetails"));
    var productPrice = localStorage.getItem("productPrice");
    var imagePath = localStorage.getItem("imagePath");  
    var getDataIDElement = document.querySelector(".product");
    getDataIDElement.setAttribute('data-id',getDataId);
    var productTitleElement = document.querySelector(".product-detail-title");
    productTitleElement.textContent = productTitle;
    var productDetailsElements = document.querySelectorAll(".product-detail-advance-text");
    productDetails.forEach(function(detail, index) {
        var detailElement = document.createElement("p");
        detailElement.textContent = detail;
        var productDetailElement = productDetailsElements[index];
        productDetailElement.appendChild(detailElement);
    });
    var productPriceElement = document.querySelector(".product-detail-cart-money");
    productPriceElement.textContent = productPrice;
    var imageElement = document.querySelector(".product-image-main img");
    var imageElementextra = document.querySelector(".product-image-extra-small img");
    imageElement.src = imagePath;
    imageElementextra.src = imagePath;
});



let listProductHTML = document.querySelector('.carousel-item');
let listProducts = [];
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0) {
        listProducts.forEach(product => {
            let newProduct =  document.createElement('div');
            newProduct.classList.add('carousel-product');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
            <a href="" class="carousel-product-link">
            <div class="carousel-product-body">
            <div class="carousel-product-body-img">
                <img class="image-product" src="${product.image}" alt="">                                   
            </div>
            <div class="carousel-product-body-container">
                <div class="carousel-product-body-title">
                    <h3>${product.name}</h3>
                </div>
                <div class="carousel-product-body-text">                       
                    <div class="s_col_no_bgcolor">
                        <div class="carousel-icon">
                            <i class="fa-solid fa-puzzle-piece"></i>
                        </div>
                        <div class="carousel-text">
                            <p>Nvidia GeForce RTX 4070</p>
                        </div>                                               
                    </div>
                    <div class="s_col_no_bgcolor">
                        <div class="carousel-icon">
                            <i class="fa-solid fa-dice"></i>
                        </div>
                        <div class="carousel-text">
                            <p>AMD Ryzen 7 5700X</p>
                        </div>  
                    </div>
                    <div class="s_col_no_bgcolor">
                        <div class="carousel-icon">
                            <i class="fa-brands fa-playstation"></i>
                        </div>
                        <div class="carousel-text">
                            <p>Corsair RGB Vengeance 2x8GB 3200Mhz</p>
                        </div>  
                    </div>
                    <div class="s_col_no_bgcolor">
                        <div class="carousel-icon">
                            <i class="fa-solid fa-hand-fist"></i>
                        </div>
                        <div class="carousel-text">
                            <p>M2 NVMhz</p>
                        </div>  
                    </div>
                </div>
                <div class="carousel-product-body-bot">
                    <div class="carousel-product-body-bot-money">
                        <span>${product.price}</span>
                    </div>
                    <div class="carousel-product-body-bot-learn">
                        Learn more...
                    </div>
                </div>
            </div>
            </div>
            </a>  `
            ;
            listProductHTML.appendChild(newProduct);
            indexToProduct();
        })
    }
}

let productHTML = document.querySelectorAll('.product');
let listCartHTML = document.querySelector('.cart-container-product');
let carts = [];

productHTML.forEach((product) => {
    product.addEventListener('click', (event) => {
        var product_id = event.currentTarget.getAttribute('data-id');
        var product_title = event.currentTarget.querySelector('.product-detail-title');
        var getProduct_title = product_title.textContent;
        var product_image = event.currentTarget.querySelector('.image-change-abbc');
        var product_image_src = product_image.getAttribute('src');
        var product_price = event.currentTarget.querySelector('.product-detail-cart-money')
        var positionClick = event.target;
        if(positionClick.classList.contains('product-detail-cart-btn')) {
            addToCart(product_id,getProduct_title,product_image_src,product_price);
        }    
    })
})

const addToCart = (product_id, getProduct_title, product_image_src, product_price) => {
    let cart_price = document.querySelector('.cart-container-subtotal p');
    let cart_price_total = document.querySelector('.cart-container-totalmoney p');
    let cart_price_tax = document.querySelector('.cart-container-tax p');
    let current_cart_price = parseFloat(product_price.textContent);
    let product_pricetotal_cart = parseFloat(cart_price_total.textContent);
    let product_pricetax_cart = parseFloat(cart_price_tax.textContent);
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (carts.length <= 0) {
      carts = [{
        title: getProduct_title,
        image: product_image_src,
        product_id: product_id,
        quantity: 1,
        price: current_cart_price,
        tax: 5,
        total: current_cart_price
      }];
    } else if (positionThisProductInCart < 0) {
      carts.push({
        title: getProduct_title,
        image: product_image_src,
        product_id: product_id,
        quantity: 1,
        price: current_cart_price,
        tax: 5,
        total: current_cart_price
      });
    } else {
      let newQuantity = carts[positionThisProductInCart].quantity + 1;
      carts[positionThisProductInCart].quantity = newQuantity;
      carts[positionThisProductInCart].price = current_cart_price;
      carts[positionThisProductInCart].tax = newQuantity * 5;
      carts[positionThisProductInCart].total = current_cart_price * newQuantity;
      carts[positionThisProductInCart].image = product_image_src;
      carts[positionThisProductInCart].title = getProduct_title;
    }
    addCartToHTML();
    let new_cart_price = carts.reduce((total, item) => total + item.total, 0);
    let new_cart_pricetax = carts.reduce((total, item) => total + item.quantity * 5, 0);
    let new_total_cart_price = new_cart_price + new_cart_pricetax;
    cart_price.textContent = new_cart_price;
    cart_price_tax.textContent = new_cart_pricetax;
    cart_price_total.textContent = new_total_cart_price;
    addCartToMemory(new_total_cart_price, new_cart_pricetax, new_cart_price);
    showCart();
    showAddress();
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    if(carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('cart-container-product-item');
            newCart.dataset.id = cart.product_id;
            newCart.innerHTML= `
            <img src="${cart.image}" alt="" class="image-cart">
            <div class="cart-container-product-item-text">
                <a href="" class="link-to-product">
                    <h4>${cart.title}</h4>
                </a>
                <div class = "quantity">
                    <span class = "minus" > < </span>
                    <p>${cart.quantity}</p>
                    <span class ="plus"> > </span>
                </div>
            </div>
            `;
            listCartHTML.appendChild(newCart);
            // addCartToProduct();
        })
    }  
}

// ------------- SHOW CART ----------------
const showCart = () => {
    var productCart = sessionStorage.getItem('cart');
    var getProductCart = JSON.parse(productCart);
  
    var cartContainer = document.getElementById('cart-container');
    var ul = document.createElement('ul');

    var totalTax = 0;
    var total = 0;
    var totalCart = 0;
    for (var i = 0; i < getProductCart.length; i++) {
        var product = getProductCart[i];
    
        var li = document.createElement('li');
    
        var img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        li.appendChild(img);
    
        var nameSpan = document.createElement('span');
        nameSpan.textContent = product.title;
        li.appendChild(nameSpan);
    
        
        var quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity-pageCart');
        var decreaseBtn = document.createElement('button');
        decreaseBtn.classList.add('minus1');
        decreaseBtn.textContent = '-';
        decreaseBtn.addEventListener('click', decreaseQuantity.bind(null, i));
        quantityContainer.appendChild(decreaseBtn);
    
        var quantitySpan = document.createElement('p');
        quantitySpan.classList.add('qt');
        quantitySpan.textContent = product.quantity;
        quantityContainer.appendChild(quantitySpan);
    
        var increaseBtn = document.createElement('button');
        increaseBtn.textContent = '+';
        increaseBtn.classList.add('plus1');
        increaseBtn.addEventListener('click', increaseQuantity.bind(null, i));
        quantityContainer.appendChild(increaseBtn);
    
        li.appendChild(quantityContainer);

        var priceSpan = document.createElement('p');
        priceSpan.textContent = product.price + ' $';
        li.appendChild(priceSpan);

        var totalSpan = document.createElement('h2');
        var productTotal = product.price * product.quantity;
        totalSpan.textContent = productTotal + ' $';
        li.appendChild(totalSpan);

        total += productTotal; 
        var tax = product.quantity * 5;
        totalTax += tax;
        totalCart = total + totalTax;
        ul.appendChild(li);
    }
    
    cartContainer.innerHTML = '';
    cartContainer.appendChild(ul);
    var gettotalSpan = document.querySelector('.cart-container-subtotal1 p');
    gettotalSpan.textContent = total;
    var gettaxSpan = document.querySelector('.cart-container-tax1 p');
    gettaxSpan.textContent = totalTax;
    var gettotalCartSpan = document.querySelector('.cart-container-totalmoney1 p');
    gettotalCartSpan.textContent = totalCart;
    
}
const decreaseQuantity = (index) => {
    var productCart = sessionStorage.getItem('cart');
    var getProductCart = JSON.parse(productCart);
  
    if (getProductCart[index].quantity > 1) {
      getProductCart[index].quantity--;
      sessionStorage.setItem('cart', JSON.stringify(getProductCart));
      showCart();
    }
}
  
    const increaseQuantity = (index) => {
        var productCart = sessionStorage.getItem('cart');
        var getProductCart = JSON.parse(productCart);
    
        getProductCart[index].quantity++;
        sessionStorage.setItem('cart', JSON.stringify(getProductCart));
        showCart();
}
//-------------------------------------------------------

// -------------- SHOW ADDRESS ------------------------
const showAddress= () => {
    var productCart = sessionStorage.getItem('cart');
    var getProductCart = JSON.parse(productCart);

    var addressContainer = document.getElementById('address-container');
    var ul = document.createElement('ul');
    var totalTax = 0;
    var total = 0;
    var totalCart = 0;
    for (var i = 0; i < getProductCart.length; i++) {
        var product = getProductCart[i];
    
        var li = document.createElement('li');
    
        var img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        li.appendChild(img);
    
        var nameSpan = document.createElement('span');
        nameSpan.textContent = product.title;
        li.appendChild(nameSpan);

        var quantitySpan = document.createElement('p');
        quantitySpan.textContent =  product.quantity;
        li.appendChild(quantitySpan);

        var priceSpan = document.createElement('p');
        priceSpan.textContent = product.price + ' $';
        // li.appendChild(priceSpan);

        var totalSpan = document.createElement('h2');
        var productTotal = product.price * product.quantity;
        totalSpan.textContent = productTotal + ' $';
        li.appendChild(totalSpan);

        total += productTotal; 
        var tax = product.quantity * 5;
        totalTax += tax;
        totalCart = total + totalTax;
        ul.appendChild(li);
    }
    
    addressContainer.innerHTML = '';
    addressContainer.appendChild(ul);
    var gettotalSpan = document.querySelector('.cart-container-subtotal2 p');
    gettotalSpan.textContent = total;
    var gettaxSpan = document.querySelector('.cart-container-tax2 p');
    gettaxSpan.textContent = totalTax;
    var gettotalCartSpan = document.querySelector('.cart-container-totalmoney2 p');
    gettotalCartSpan.textContent = totalCart;
}
// ---------------------------------------------------

listCartHTML.addEventListener('click', (event) => {
    var product_id = event.target.closest('.cart-container-product-item').dataset.id; // Lấy product_id từ dataset.id
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let type = 'minus';
        if(positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantity(product_id,type);
        
    }
    
})

const changeQuantity = (product_id, type) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
  
    if (positionThisProductInCart >= 0) {
      let cart_price = document.querySelector('.cart-container-subtotal p');
      let cart_price_total = document.querySelector('.cart-container-totalmoney p');
      let cart_price_tax = document.querySelector('.cart-container-tax p');
      let current_cart_price = parseFloat(cart_price.textContent);
  
      if (type === 'minus') {
        if (carts[positionThisProductInCart].quantity > 1) {
          carts[positionThisProductInCart].quantity -= 1;
        } else {
          carts.splice(positionThisProductInCart, 1);
        }
      } else {
        carts[positionThisProductInCart].quantity += 1;
      }
  
      let new_cart_price = 0;
      let new_cart_pricetax = 0;
  
      for (let i = 0; i < carts.length; i++) {
        new_cart_pricetax += carts[i].quantity * 5;
        new_cart_price += carts[i].price * carts[i].quantity;
      }
  
      let new_total_cart_price = new_cart_price + new_cart_pricetax;
      cart_price.textContent = new_cart_price;
      cart_price_tax.textContent = new_cart_pricetax;
      cart_price_total.textContent = new_total_cart_price;
      addCartToMemory(new_total_cart_price, new_cart_pricetax, new_cart_price);
      addCartToHTML();
    }
  }
const addCartToMemory = (new_total_cart_price,new_cart_pricetax,new_cart_price) => {
    localStorage.setItem('cart', JSON.stringify(carts));
    localStorage.setItem('new_total_cart_price', JSON.stringify(new_total_cart_price));
    localStorage.setItem('new_cart_pricetax', JSON.stringify(new_cart_pricetax));
    localStorage.setItem('new_cart_price', JSON.stringify(new_cart_price));
    sessionStorage.setItem("cart",JSON.stringify(carts));
}



const restoreCartFromMemory = () => {
    if(localStorage.getItem('cart','new_total_cart_price','new_cart_pricetax','new_cart_price')){
        carts = JSON.parse(localStorage.getItem('cart'));
        
        //total cart
        new_total_cart_price = JSON.parse(localStorage.getItem('new_total_cart_price'));
        var getTotalCart = document.querySelector('.cart-container-totalmoney p');
        getTotalCart.textContent = new_total_cart_price;

        //tax cart
        new_cart_pricetax = JSON.parse(localStorage.getItem('new_cart_pricetax'));
        var getTaxCart = document.querySelector('.cart-container-tax p');
        getTaxCart.textContent = new_cart_pricetax;

        //price cart
        new_cart_price = JSON.parse(localStorage.getItem('new_cart_price'));
        var getPriceCart = document.querySelector('.cart-container-subtotal p');
        getPriceCart.textContent = new_cart_price;
        addCartToHTML();
    }
}
window.addEventListener('load', () => {
    restoreCartFromMemory();
    // removeCartFromMemory();
});

const removeCartFromMemory = () => {
    localStorage.removeItem('carts');
};



  
const initApp = () => {
    fetch('javascripts/products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();  
    })
}

initApp();

