let fetching_product_list = document.getElementsByClassName("product-list");
let cart_html_string = fetching_product_list[0].innerHTML;

for(let i=0; i<2; i++){
    cart_html_string = cart_html_string + 
    `<div class="product-box">
        <div class="product-img">
            <img src="${product_array[i].prdct_image}" alt="" class="product-img_child">
        </div>
        <div class="product-info">
            <div>${product_array[i].prdct_description}</div>
        <div>
            <label for="quantity">Quantity: </label>
            <input type="number" id="quantity" name="quantity" min="1">
            <input type="submit" value="ok">
        </div>
        <div>
            <span>Price: </span>
            <span>${product_array[i].prdct_price}</span>
        </div>
        <Button class="Delete-btn">delete product</Button>
        </div>          
    </div>`
}

fetching_product_list[0].innerHTML = cart_html_string;