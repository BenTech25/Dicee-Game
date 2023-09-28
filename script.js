"use strict"

//Replay Button
document.querySelector("button").addEventListener("click", () => {
    
    //I Get a Random Number
    var randomNumber1 = Math.floor(Math.random()*6);
    var randomNumber2 = Math.floor(Math.random()*6);

    //This Is The List of The 6 Images
    var imageList = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

    //The 2 Images Which Has Been Choosen
    var choosenImage1 = imageList[randomNumber1];
    var choosenImage2 = imageList[randomNumber2];

    //Let's Display The Choosen Images
    var imageOne = document.querySelector("img.image1").setAttribute("src", choosenImage1);
    var imageTwo = document.querySelector("img.image2").setAttribute("src", choosenImage2);

    //The Winner
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } 
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
})

