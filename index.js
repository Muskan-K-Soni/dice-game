let player1Score = 0;
let player2Score = 0;

function rollDice(){

    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");

    dice1.classList.add("shake");
    dice2.classList.add("shake");

    setTimeout(function(){

        var randomNumber1 = Math.floor((Math.random() * 6) + 1);
        dice1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

        var randomNumber2 = Math.floor((Math.random() * 6) + 1);
        dice2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

        if(randomNumber1 > randomNumber2){
            document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
            player1Score++;
        }else if(randomNumber2 > randomNumber1){
            document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
            player2Score++;
        }else{
            document.querySelector("h1").innerHTML = "Draw!";
        }

        document.querySelector("#score1").innerHTML = "Player 1 Score: " + player1Score;
        document.querySelector("#score2").innerHTML = "Player 2 Score: " + player2Score;

        dice1.classList.remove("shake");
        dice2.classList.remove("shake");

    }, 500);
}

document.querySelector(".rollBtn").addEventListener("click", rollDice);

rollDice();