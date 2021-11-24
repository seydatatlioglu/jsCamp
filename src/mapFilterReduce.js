let cart=[
    {id:1,productName:"telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"bardak",quantity:2,unitPrice:40},
    {id:3,productName:"tablet",quantity:1,unitPrice:4000},
    {id:4,productName:"defter",quantity:23,unitPrice:20},
    {id:5,productName:"tv",quantity:34,unitPrice:4000},
    {id:6,productName:"monitör",quantity:4,unitPrice:3000},
]
// PUSH
function addToCart(sepet){
    sepet.push({id:7,productName:"mouse",quantity:1,unitPrice:200})
}
addToCart(cart);
console.log(cart);


//MAP
cart.map(product=>{
    console.log(product.productName+" : "+product.unitPrice)
})

//FILTER
let quantityOver =cart.filter(product=>product.quantity>4)
console.log(quantityOver)
