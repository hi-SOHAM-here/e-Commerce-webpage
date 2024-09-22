let product_array = [];
function product_object_builder(image, description, rating, price){
   let  product_objcet = {
    prdct_id: description,
    prdct_image: image,
    prdct_description: description,
    prdct_rating: rating,
    prdct_price: price
   };
//    console.log(product_objcet);
   product_array.push(product_objcet);
}

product_object_builder(
    `../Image Bank/laptop.jfif`,
    `HP Laptop 15s, AMD Ryzen 3 5300U, 15.6-inch (39.6 cm)`,
    `4`,
    `30000`
);
product_object_builder(
    `../Image Bank/Harry Potter Book collection.jpg`,
    `Harry Potter Boxed Set: The Complete Collection Adult`,
    `4`,
    `3198`
);
product_object_builder(
    `../Image Bank/men's cargo khaki.jpg`,
    `Lymio brand new cargos for Men`,
    `4`,
    `699`
);
product_object_builder(
    `../Image Bank/61w7-xdaPjL._SY575_.jpg`,
    `Puma Unisex-Adult Nrgy Comet Running Shoe`,
    `4`,
    `1799`
);
product_object_builder(
    `../Image Bank/dinnerset.jpg`,
    `THEARTISANEMPORIUM Hand-Painted Ceramic Dinner Set`,
    `4`,
    `5410`
);
product_object_builder(
    `../Image Bank/womenkurty.jpg`,
    `GoSriKi Women's Chikankari Embroidered Straight Kurta`,
    `4`,
    `489`
);
product_object_builder(
    `../Image Bank/men's tshirt.jpg`,
    `Lymio plain T-Shirt for Men`,
    `4`,
    `379`
);