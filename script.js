var score1 = 0;
var score2 = 0;

// WHEN WE CLICK THE BUTTON //

document.querySelector("button").onclick = function(){

    // diceRoll();
    //generate 2 random numbers
    var randomNumber1 = Math.floor((Math.random()*6)+1);
    var randomNumber2 = Math.floor((Math.random()*6)+1);

    // apply the number to which image should be showing
    document.getElementById("dice1").src="images/dice" + randomNumber1 + ".png";
    document.getElementById("dice2").src="images/dice" + randomNumber2 + ".png";

    addToScore(randomNumber1, randomNumber2);

    document.getElementById("score1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;

}

function addToScore(num1, num2){
    if(num1>num2){
        score1++;
        document.getElementById("pic1").src = "images/thumb-up.png";
        document.getElementById("pic2").src = "images/middle-finger.png";
    }else if(num1<num2){
        score2++;
        document.getElementById("pic2").src = "images/thumb-up.png";
        document.getElementById("pic1").src = "images/middle-finger.png";
    }
}

//pick a random image and a new rotated position
// function diceRoll(){

//     for(let i = 0; i<5; i++){
//         var randomNum = Math.floor(Math.random()*6) + 1;
//         document.getElemenetById("dice1").src = "images/dice" + randomNum + ".png";
//         document.getElemenetById("dice2").src = "images/dice" + randomNum + ".png";
//     }
// break
// }