var topbtn = document.getElementById("topButton");
window.onscroll = function(){
    scrollfun()
};

function scrollfun() {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000)
    {
        topbtn.style.display = "block";
    }
    else{
        topbtn.style.display = "none";
    }
}
function goToTop(){
       
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}

let lgSg = document.getElementById("lgnSgn");
//console.log(lgSg);
lgSg.addEventListener('click',() => {
    window.location.href="https://ankit-jilka.github.io/signin.html";
})



let carts = document.querySelectorAll('.addcart');
let products = [
    {
        name : "Surgical mask",
        price : 20,
        inCart : 0
    },
    {
        name : "Prevento mask",
        price : 100,
        inCart : 0
    },
    {
        name : "N-95 mask",
        price : 153,
        inCart : 0
    }

]

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.Nevigationbar span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.Nevigationbar span').textContent = productNumbers + 1;
    }
    else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.Nevigationbar span').textContent = 1;
    }
    //setItems(product);
}

// function setItems(product){
//     let cartItems = {
//         [product.]
//     }
//     product.inCart = 1;
//     localStorage.setItem()
// }

onLoadCartNumbers();
