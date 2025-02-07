let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const computerScoreprint = document.querySelector("#computer_score");
const userScoreprint = document.querySelector("#user_score");

const getCompchoice=() => {
    const options = ["rock","paper","scissor"];
    const random_idx=Math.floor(Math.random()*3)
    return options[random_idx];
}
   const drawgame = () => {
    console.log("game is draw");
    let b="game was draw! play again";
    msg.innerHTML = `<h2>${b}</h2>`;
    msg.style.backgroundColor="orange";
}
    const showwinner = (userwin,Compchoice,userChoice)=>{
        if(userwin){
            userscore++;
            userScoreprint.innerHTML=userscore;
            console.log("you win");
            let a=`you win ! , your ${userChoice} beats computers ${Compchoice}`;
            msg.innerHTML = `<h2>${a}</h2>`;
            msg.style.backgroundColor="green";
        }
        else {
            console.log("you lose")
            compscore++;
            computerScoreprint.innerHTML=compscore;
            let a=`you lose ! , computer's ${Compchoice} beats your ${userChoice}`;;
            msg.innerHTML = `<h2>${a}</h2>`;
            msg.style.backgroundColor="red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const Compchoice = getCompchoice();
    console.log("computer choice = ", Compchoice);
    if(userChoice===Compchoice){
        drawgame();
    }
    else{
        let userwin = true;
     if(userChoice==="rock"){
        userwin=Compchoice === "paper" ? false : true;
    }
    else if(userChoice=="paper"){
        userwin = Compchoice === "scissor" ? false : true;
    }
    else {
        userwin = Compchoice === "rock" ? false : true;
    }
    showwinner(userwin,Compchoice,userChoice);
}
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

