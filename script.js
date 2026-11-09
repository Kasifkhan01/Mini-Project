let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");          // stroe div
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")


const genCompChoice =()=>{
    let option =["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];

}

const drawGame=()=>{                                              // draw function creat 
    console.log("game was draw.");
     msg.innerText=" Game was Draw . play again.!"
     msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log(" You win!");
        console.log()
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        
        msg.style.backgroundColor="green"
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you loss");
        msg.innerText=`You win! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="red";
    }

}



const playGame=(userChoice) =>{                                //user choice function
    console.log("user choice=",userChoice);
    const compChoice =genCompChoice();
    console.log("comp choice=",compChoice)


    if(userChoice === compChoice){
        drawGame();                              // draw game same output
    }else{
        let userWin =true;
        // case1
        if(userChoice ==="rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        // case2
        else if(userChoice === "paper"){
          userWin = compChoice === "scissors" ? false : true;
            }
            // case3
            else {
                userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice,compChoice);

    }

};

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{                     // add event listner 
        
        const userChoice= choice.getAttribute("id");                     // get attribure
        // console.log("choice was clicked",choiceId)
        playGame(userChoice);

    })
})