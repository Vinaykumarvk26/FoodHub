function myFun() {
    let searchval = document.getElementById("inp").value.toUpperCase();
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");
    let front = document.querySelector(".mainPage");

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let text = td.innerText;
            if (text.toUpperCase().indexOf(searchval) > -1) {
                tr[i].style.display = "";
                front.style.display = "none";
                tr[i].classList.add("highlight");
            } else {
                tr[i].style.display = "none";
                tr[i].classList.remove("highlight");
            }
        }
    }

    if (searchval == "") {
        front.style.display = "flex";
    }
}




function showLogin(){
    let login = document.querySelector(".log");
    login.style.display="block"
    let nav = document.querySelector(".nav");
    nav.style.display="none"


}
let navVisible = false;

function showNav(){
    let nav = document.querySelector(".nav");
    if(navVisible){
        nav.style.display="none";
    } else {
        nav.style.display="block";
    }
    navVisible = !navVisible;
}

function nav(){
    let nav = document.querySelector(".nav");
    nav.style.display="none";
    navVisible = false;
}


function login(){
    let login = document.querySelector(".log");
    login.style.display="none"
}






let cust = document.querySelectorAll(".customer");
let count = 0;
console.log(cust);

cust.forEach(function(review, index){
    review.style.left=`${index * 100}%`
    console.log(review);
    console.log(index);

})


function prev(){
    count --;
    if(count == -1){
        count = cust.length - 1;
    }
    slide();

}

function next(){
    count ++;
    if(count == cust.length){
        count=0;
    }
    slide();
}

function slide(){
    cust.forEach(function(review){
        review.style.transform=`translateX(-${count * 100}%)`;
        console.log( review.style.transform=`translateX(-${count * 100}%)`);
    })
}
function scrollToFood() {
    const ourFoodsSection = document.getElementById('ourFoods');
    const position = ourFoodsSection.offsetTop;

    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
}

function redirectToItem(itemName, price, imageUrl) {
    const url = `item.html?itemName=${encodeURIComponent(itemName)}&price=${price}&imageUrl=${encodeURIComponent(imageUrl)}`;
    window.location.href = url;
}
const params = new URLSearchParams(window.location.search);
        const itemName = params.get('itemName');
        const price = params.get('price');
        const imageUrl = params.get('imageUrl');

        document.getElementById('item-image').src = imageUrl;
        document.getElementById('item-name').textContent = itemName;
        document.getElementById('item-price').textContent = `Price: Rs ${price}`;


       