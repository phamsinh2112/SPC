// ---------------Giỏ hàng-------------------------
let cartHTML = document.querySelectorAll('.cart');
let pageCart = document.querySelector('.cart-product-main');
let pages = [];

// Lấy phần tử HTML và đăng ký sự kiện click
const cartButton = document.querySelector('.fa-cart-shopping');
cartButton.addEventListener('click', showCartItems);

// Hàm hiển thị danh sách sản phẩm trong giỏ hàng
function showCartItems() {
    const cartItemsElement = document.querySelector('.cart-container-product');
    var cartTitle = cartItemsElement.querySelector(".link-to-product h4").textContent;
    var cartImage = cartItemsElement.querySelector(".cart-container-product-item img");
    var imagePath = cartImage.getAttribute("src");
    localStorage.setItem("cartTitle", cartTitle);
    localStorage.setItem("imagePath", imagePath);
    window.location.href = "cart.html";
}
const cart = {
    items: [],
  
    // Phương thức để thêm sản phẩm vào giỏ hàng
    addItem: function(item) {
      this.items.push(item);
    },
  
    // Phương thức để lấy danh sách sản phẩm từ giỏ hàng
    getCartItems: function() {
      return this.items;
    }
  };

document.addEventListener("DOMContentLoaded", function() {
    const cartItemsElement = document.querySelector('.cart-product-main');
    const cartItemspage = document.querySelectorAll('.cart-container-product');
    var cartTitle = localStorage.getItem("cartTitle");
    var imagePath = localStorage.getItem("imagePath");
    console.log(cartItemspage)

    const cart = {
        items: [],
        // Phương thức để lấy danh sách sản phẩm từ giỏ hàng
        getCartItems: function() {
          return this.items;
        }
      };
    const cartItems = cart.getCartItems();
    let cartItemsHTML = '';
    for (const item of cartTitle){
            cartItemsHTML += `
            <img src="${imagePath}" alt="">
            <div class="detail-product">
            <a href="">${cartTitle}</a>
            </div>
            <div class="quality">
                <i class="fa-solid fa-minus"></i>
                <p>1</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div class="price">
                <p>€ 1.374,92</p>
            </div>
            <div class="total">
                <p>€ 1.374,92</p>
            </div>
            `;
    }
    cartItemsElement.innerHTML = cartItemsHTML;
});

