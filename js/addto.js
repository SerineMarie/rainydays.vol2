// const addToCart = document.querySelectorAll("#addCart")

// function cartEvent (event){
//     for (let i = 0; i < addToCart.length; i++){
//         const cartButton = addToCart[i]
//     }
//     const cartButton = event.target
// }

// cartButton.addEventListener("click", addedToCart)

const addCart = document.querySelector("#addCart")

const jackets = [
    {
        name: "Ski blue mountain",
        price: 59.00,
        inCart: 0,

    },
    {
        name: "Windfall",
        price: 59.00,
        inCart: 0,
    },
    {
        name: "Hiking Queen",
        price: 59.00,
        inCart: 0,
    }
];

function cartEvent (){
    for (let i = 0; i < addCart.length; i++){
        addCart[i].innerHTML = "Added to your shopping cart"

    }
}