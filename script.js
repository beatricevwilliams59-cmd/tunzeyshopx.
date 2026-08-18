const products=[
 {name:'Aura Signature Bag',desc:'Modern statement piece',price:'$89',icon:'👜'},
 {name:'Luna Essential',desc:'Everyday luxury',price:'$64',icon:'⌚'},
 {name:'Velvet Collection',desc:'Designed to stand out',price:'$72',icon:'👟'},
 {name:'Noir Classic',desc:'Timeless essentials',price:'$55',icon:'🕶️'}
];
const grid=document.getElementById('products');
let count=0;
products.forEach((p,i)=>{grid.innerHTML+=`<article class="product"><div class="product-img">${p.icon}</div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="price"><strong>${p.price}</strong><button class="add" onclick="addToCart()">Add to cart</button></div></div></article>`});
function addToCart(){count++;document.getElementById('cartCount').textContent=count}
document.getElementById('cartBtn').addEventListener('click',()=>alert(count?`You have ${count} item${count>1?'s':''} in your cart.`:'Your cart is empty.'));
