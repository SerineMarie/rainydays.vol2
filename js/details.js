const itemContainer = document.querySelector(".itemContainer");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const  id = params.get("id");

console.log(id);

const url2 = "http://serinetj.com/productdetail.html?id=" + id;

// const url2 = "http://serinetj.com/wordpress/wp-json/wc/v3/products/";
// const key = "ck_0382ddfce01a2ef66dbca15d43890ddc95bc8be9";
// const secret = "cs_7cbc003ef3e300cadebc5aefccc0c595449938eb";

// const item = `${url2}${id}?${key}&${secret}`;

console.log(url2);


async function getItem (){
    try{
        const response = await fetch (url2);
        const json = await response.json();

        console.log(json);

        itemContainer.innerHTML= "";
        
        // const jacket = json.getItem; 
        
        // json.forEach(function(item){
        //     itemContainer.innerHTML +=`
                                
        //                             <h1> Women</h1> 
        //                             <div class="products">                       
        //                                     <h2>
        //                                         <p>${item.categories}</p>                
        //                                         <p> ${item.name}</p>
        //                                         <img class="img" src="${item.images[0].src}" alt="${item.alt}">
        //                                         <p>£${item.prices.price}</p>
        //                                     </h2>
        //                             </div>`;
        // })

       


    } catch (error){
        console.log(error);
    }
}

getItem();