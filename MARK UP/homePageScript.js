
// console.log(product_array);
let fetching_Product_Grid = document.getElementsByClassName("PRODUCT_GRID");

html_String = fetching_Product_Grid[0].innerHTML;

for (let i = 0; i < product_array.length; i++) {
    html_String = html_String +
     `<div class="box_formation">
        <img src="${product_array[i].prdct_image}" alt="" class="product_image_size">
        <div class="product_description">${product_array[i].prdct_description}</div>
        <div>
            <img src="../Image Bank/1_star.png" alt="" class="ratings_design">
        </div>
        <div class="price_tag_design"> ₹ ${product_array[i].prdct_price}</div>
        <div class="Add_to_Cart_button" data-product-id="${product_array[i].prdct_description}">Add to Cart</div>
    </div>`             
}

console.log(html_String);
fetching_Product_Grid[0].innerHTML = html_String;


const productIdList = [];
let fetching_Add_to_cart_Btn = document.querySelectorAll(`.Add_to_Cart_button`);
fetching_Add_to_cart_Btn.forEach(add_to_cart => {
        add_to_cart.addEventListener('click', ()=>{
        let targetting_cart = document.querySelector(`.no_of_products_added_on_cart`);
        let currentCartValue = parseInt(targetting_cart.innerHTML); 
        currentCartValue++;
        targetting_cart.innerHTML = currentCartValue;
        let productId = add_to_cart.getAttribute(`data-product-id`);                
        productIdList.push(productId);
        console.log(productIdList);
    })
});