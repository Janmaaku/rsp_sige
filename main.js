
    const handOptions = {
        "rock": "assets/Rock.png",
        "paper": "assets/Paper.png",
        "scissors": "assets/Scissors.png"

    }


let Score = 0;


const User_Hand = function(hand){
    // console.log(hand);
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    // show the next page 

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    
    


    //set the user pick 

    document.getElementById("pickUser").src = handOptions [hand];
    Computer_Hand(hand);
};  

const Computer_Hand = function (hand){
    let hands = [ "rock", "paper", "scissors" ]
    let cpHands = hands [Math.floor(Math.random() * hands.length)];

    //set the computer picked
    document.getElementById("pickComputer").src = handOptions [cpHands];

    referee(hand, cpHands);

};
const referee = function (User_Hand, Computer_Hand) {
if (User_Hand == "paper" && Computer_Hand == "scissors"){
    Decision_set("YOU LOSE!");
}
if (User_Hand == "paper" && Computer_Hand == "rock"){
    Decision_set("YOU WIN!");
    set_Score(Score + 1);
}
if (User_Hand == "paper" && Computer_Hand == "paper"){
    Decision_set("DRAW!");
}
if(User_Hand == "rock" && Computer_Hand == "scissors"){
    Decision_set("YOU LOSE!");
}
if (User_Hand == "rock" && Computer_Hand == "paper"){
    Decision_set("YOU WIN!");
    set_Score(Score + 1);
}
if (User_Hand == "rock" && Computer_Hand == "rock"){
    Decision_set("DRAW!");
}
if(User_Hand == "scissors" && Computer_Hand == "rock"){
    Decision_set("YOU LOSE!");
}
if (User_Hand == "scissors" && Computer_Hand == "paper"){
    Decision_set("YOU WIN!");
    set_Score(Score + 1);
}
if (User_Hand == "scissors" && Computer_Hand == "scissors"){
    Decision_set("DRAW!");
}

};
// function history(){
//     a = User_Hand.textContent;
//     b = Computer_Hand.textContent;
//  document.querySelector("#his").innerHTML += a + " vs"  + b + "<br>";
// }


const playAgin = function () {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  };
// function Winner(){
//     let p = document.getElementById(".score h1").innerHTML;
//  if (p == 2){
//     alert("Congratulations! You Won the game! ");
//     location.reload();
//  }
//  set_Score(newScore);
// };



function Decision_set(decision) {
    document.querySelector(".decision h1").innerText = decision;
}

const set_Score = function (newScore){
    Score = newScore;
    document.querySelector(".score h1").innerText = newScore;
};


// let contest = document.getElementById("contest");
// document.getElementById(contest.textContent).innerHTML;
