'use secrit'


let nfood = ["shawarma", "burger", "pizza"];

let emptyFood = [];
let foodName=[];
let foodTable = document.getElementById('table');
let creatTable = document.createElement('table');
foodTable.appendChild(creatTable);

function Food(orderImge, orderDetails) {
    this.orderImge = orderImge;
    this.orderDetails = orderDetails;
    this.name= name;
    this.foodType = foodType;
    // let img='';
    let imgPath = 'img/'+ this.name;
    foodName.push(this);
}

let imagefood = ["shawarma.jpg", "burger.jpg", "pizzajpg"];
for(let i=0; i<imagefood.length; i++){
    new Food(imagefood[i]);
}

Food.prototype.randomNumber = function () {
    return Math.floor(Math.random() * nfood.length);
}


function settingItem() {
    let data = JSON.stringify(emptyFood);
    localStorage.setItem('Food', data);
}

function gettingItem() {
    let stringObj = localStorage.getItem('Food');
    let normalObj = JSON.parse(stringObj);
    if (normalObj !== null) {
        foodName == normalObj;
    }
    render();
}

Food.prototype.render = function () {

    let trEl1 = document.createElement('tr');
    creatTable.appendChild(trEl1);
    let tdata = document.createElement('td');
    trEl1.appendChild(tdata);
    tdata.textContent = this.orderImge;

    let trEl2 = document.createElement('tr');
    creatTable.appendChild(trEl2);
    let t2data = document.createElement('td');
    trEl2.appendChild(t2data);
    t2data.textContent = this.orderDetails;

}
function header() {
    let trEl2 = document.createElement('tr');
    creatTable.appendChild(trEl2);
    let thEl1 = document.createElement('th');
    trEl2.appendChild(thEl1);
    thEl1.textContent = this.orderImge;

    let trEl3 = document.createElement('tr');
    creatTable.appendChild(trEl3);
    let thEl2 = document.createElement('th');
    trEl2.appendChild(thEl2);
    thEl2.textContent = this.orderDetails;

    // let trEl3 = document.createElement('tr');
    // creatTable.appendChild(trEl3);
    // let thEl3 = document.createElement('th');
    // trEl2.appendChild(thEl3);
    // thEl3.textContent = this.orderDetails;
}

function footer() {


}
header();


let creatForm = document.getElementById('formMe');
creatForm = addEventListener('submit', click);

function click(event) {
    
    event.preventDefult();
    settingItem();
    let name = event.target.name.value;

    let foodType = event.target.foodType.value;

    new Food(orderImge, orderDetails);
    editFood.randomNumber();
    editFood.render();

    let tr = document.createElement('tr');
    creatTable.appendChild(tr);
    let th = document.createElement('th');
    // tr.appendChild(th);
    let img = document.createElement("img");
    th.appendChild(img);

    let img = document.getElementById("img"); 

    if(imgPath=== 'pizza'){
        img.src="img/pizza.jpg"
    }

    if(imgPath=== 'shawarma'){
        img.src="img/shawarma.jpg"
    }

    if(imgPath=== 'burger'){
        img.src="img/burger.jpg"
    }


    let buttonEl = document.getElementById('submit');
    buttonEl.addEventListener('click', function clicking() {


    })

    
}

gettingItem();
