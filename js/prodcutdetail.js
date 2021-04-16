// const jackets = document.querySelector(".product");

// // const queryString = document.location.search;


// const param = new URLSearchParams(window.location.search);
// const id = param.get("id");

// console.log(id);

// const url2 = "http://rainydays/wordpress/wp-json/wc/v3/products/";
// const key = "ck_9e9b706574ae96e5eb31ab1877e5909a906847e5";
// const secret = "cs_e007e1edf2d199f37df0d687bbae5bd5dfd7bbd0";

// const items = url2 + key + secret;

// console.log(items)



// async function productDetail(){
//     try{
//         const response = await fetch(items);
//         const result = await response.json();

//         console.log(result)

//         const items = result.productDetail;

//         items.forEach(function(one){
//                 jackets.innerHTML += `<div class="product">
//                 <h1>
//                     <p>Ski jackets</p>                
//                     <p> ${one.name}</p>
//                     <img class="img" src="${jone.images[0].src}" alt="${one.alt}">
//                 </h1>             
//             </div>`
//         });

        

//     } catch (error){
//     }

// }

// productDetail();
