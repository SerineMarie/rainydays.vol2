const url = "http://serinetj.com/wp-json/wc/store/products";
const productsContainer = document.querySelector (".productsContainer");

async function getProducts (){
    try{
        const response = await fetch (url);
        const json = await response.json();
        console.log(json)
        createHTML(json);

    } catch (error){
        console.log(error);
    }
}

getProducts();


function createHTML(product){
    product.forEach(function(product){
        productsContainer.innerHTML += `
                            
                                <h1> Women</h1> 
                                <div class="products">                       
                                    <a href="productdetail.html?id=${product.id}">

                                        <h2>
                                            <p>New In</p>                
                                            <p> ${product.name}</p>
                                            <p> ${product.id}</p>
                                            <img class="img" src="${product.images[0].src}" alt="${product.alt}">
                                            <p>£${product.prices.price}</p>
                                        </h2>
                                    </a>
                                </div>`;
    })
}

