let pet_info1 = {name:"Tosha Good Boy", food: (Math.floor(Math.random() * 20) + 51), happiness:(Math.floor(Math.random() * 20) + 51), clean:(Math.floor(Math.random() * 20) + 51)};
let pet_info2 = {name:"Tosha Good Boy", food: (Math.floor(Math.random() * 50) + 51), happiness:(Math.floor(Math.random() * 50) + 51), clean:(Math.floor(Math.random() * 50) + 51)};

let time;

function checkTime() {
    let e = document.getElementById("status");
    let level = e.options[e.selectedIndex].value;
    if (level==='0') {
        time=5000;
        pet_info=pet_info1;
    }
    else {
        time=3000;
        pet_info=pet_info2;
    }
    document.getElementById('name').innerHTML=pet_info['name'];
    updatePetInfoInHtml();


    let count = 1,
        intervalTime = setInterval(function () {
            count++;
            if (count === 200)  {
                clearInterval(intervalTime);
            }
            document.getElementById('timeLife').innerHTML = String(count);
        }, 1000);
    let intervalChange=setInterval(function () {
        pet_info.food = (pet_info.food * 1 -5);
        pet_info.clean = (pet_info.clean * 1 -5);
        pet_info.happiness = (pet_info.happiness * 1 -5);


        if (  (pet_info.food<0) || (pet_info.clean < 0)  || (pet_info.happiness < 0) ) {
            clearInterval(intervalChange);
            return alert('Game Over');
        }
        updatePetInfoInHtml();
        document.getElementById('timeLife').innerHTML = String(count);
    }, time);
}

function clickedTreatButton() {
    pet_info.food = (pet_info.food * 1 + 30);
    pet_info.clean = (pet_info.clean * 1 -20);
    if ( (pet_info.food > 101) || ( pet_info.happiness > 101) || (pet_info.clean >101)){
        return alert('Game Over');
    }
    updatePetInfoInHtml();
}
function clickedPlayButton() {
    pet_info.food = pet_info.food - 10;
    pet_info.happiness = (pet_info.happiness * 1 + 15);
    if ( (pet_info.food > 101) || ( pet_info.happiness > 101) || (pet_info.clean >101)){
        return alert('Game Over');
    }
    updatePetInfoInHtml();
}

function clickedHealthButton() {
    pet_info.clean = (pet_info.clean * 1 + 40);
    pet_info.happiness = pet_info.happiness - 20;
    if ((pet_info.clean >101) || (pet_info.happiness <0) || (pet_info.food > 101) ){
        return alert('Game Over');
    }
    updatePetInfoInHtml();
}

function updatePetInfoInHtml() {
    document.getElementById('food').innerHTML=pet_info['food'];
    document.getElementById('happiness').innerHTML=pet_info['happiness'];
    document.getElementById('clean').innerHTML=pet_info['clean'];
    let food1=parseFloat(pet_info['food']);
    document.getElementById("progressEnergy").value = food1;
    let clean1=parseFloat(pet_info['clean']);
    document.getElementById("progressClean").value = clean1;
    let happy1=parseFloat(pet_info['happiness']);
    document.getElementById("progressHappy").value = happy1;

}
