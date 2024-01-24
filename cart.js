let productHTML = document.querySelectorAll('.product');
let listCartHTML = document.querySelector('.cart-container-product')
let carts = [];

productHTML.forEach((product) => {
    product.addEventListener('click', (event) => {
        var product_id = event.currentTarget.getAttribute('data-id');
        var product_title = event.currentTarget.querySelector('.product-detail-title');
        var product_image = event.currentTarget.querySelector('.image-change-abbc');
        var product_image_src = product_image.getAttribute('src');
        var product_price = event.currentTarget.querySelector('.product-detail-cart-money')
        console.log(product_price)
        var positionClick = event.target;
        if(positionClick.classList.contains('product-detail-cart-btn')) {
            addToCart(product_id,product_title,product_image_src,product_price);
        }
    })
})

const addToCart = (product_id,product_title,product_image_src,product_price) => {
    let cart_price = document.querySelector('.cart-container-subtotal p');
    let cart_price_total = document.querySelector('.cart-container-totalmoney p');
    let cart_price_tax = document.querySelector('.cart-container-tax p');
    let current_cart_price = parseFloat(cart_price.textContent);
    let product_price_cart = parseFloat(product_price.textContent);
    let product_pricetotal_cart = parseFloat(cart_price_total.textContent);
    let product_pricetax_cart = parseFloat(cart_price_tax.textContent);
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    console.log(current_cart_price)
    if(carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1,
            price : current_cart_price,
            tax: 5,
            total: product_pricetotal_cart
        }]
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1,
            price : current_cart_price,
            tax: 5,
            total: product_pricetotal_cart
        });
    }else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
        carts[positionThisProductInCart].price += product_price_cart;
        carts[positionThisProductInCart].tax += 5;
        carts[positionThisProductInCart].total += product_price_cart;
    }
    let new_cart_price = current_cart_price + product_price_cart;
    cart_price.textContent = new_cart_price;
    let new_cart_pricetax = product_pricetax_cart;
    for (let i = 0; i < carts.length; i++) {
        new_cart_pricetax = 5 * carts[i].quantity;
    }
    cart_price_tax.textContent = new_cart_pricetax;
    let new_total_cart_price = new_cart_price + new_cart_pricetax;
    cart_price_total.textContent = new_total_cart_price;
    addCartToHTML(product_title,product_image_src,product_price_cart);
    addCartToMemory();
}

const addCartToHTML = (product_title,product_image_src,product_price_cart) => {
    listCartHTML.innerHTML = '';
    if(carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('cart-container-product-item');
            var getProduct_title = product_title.textContent;
            newCart.innerHTML= `
            <img src="${product_image_src}" alt="" class="image-cart">
            <div class="cart-container-product-item-text">
                <a href="">
                    <h4>${getProduct_title}</h4>
                </a>
                <div class = "quantity">
                    <span class = minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class ="plus">></span>
                </div>
            </div>
            `;
            listCartHTML.appendChild(newCart);
        })
    }
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}



