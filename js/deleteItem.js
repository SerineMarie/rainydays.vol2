// const addfav = document.querySelectorAll(".addcart")


// const jackets = [

// ]


// for(let i = 0; i < addfav.length; i++){
//     addfav[i].addEventListener ("click", () => {
//         addfav[i].innerHTML = "Added to your favorite";
//         favoriteNrItems(jackets[i]);
//         totalPrice (jackets[i]);
//     })
// }


const deleteItemCart = document.querySelectorAll(".delete")
// const cartItems = document.querySelectorAll("#cartItems")

for (let i = 0; i < deleteItemCart.length; i++){
    const deletebutton = deleteItemCart[i]
    deletebutton.addEventListener("click", function(event){
        const deletebuttonClicked = event.target
        deletebuttonClicked.parentElement.parentElement.remove();
        cartTotal();
    })
}

function cartTotal(){
    const cartItems = document.querySelectorAll("#cartItems")[0]
    const cartItem = document.querySelectorAll(".cartItem")
    for(let i = 0; i < cartItem.length; i++){
        const totalCartItem = cartItem[i]
    }

}