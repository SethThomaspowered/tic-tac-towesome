const square1 = document.querySelector('.one');
const square2 = document.querySelector('.two');
const square3 = document.querySelector('.three');
const square4 = document.querySelector('.four');
const square5 = document.querySelector('.five');
const square6 = document.querySelector('.six');
const square7 = document.querySelector('.seven');
const square8 = document.querySelector('.eight');
const square9 = document.querySelector('.nine');
let player1Score = 0;
let player2Score = 0;
let tieScore = 0;
const p2s = document.querySelector('#p2s');
const p1s = document.querySelector('#p1s');
const catScore = document.querySelector('#catScore');
const getWinner=()=>{
    if(activePlayer === `${playerTwo}`){
        player2Score ++;
        p2s.innerHTML =`${player2Score}`;
    } else {
        player1Score ++;
        p1s.innerHTML = `${player1Score}`;
    }
    alert(`${activePlayer} is the winner`);
    reset();
}
const winnerIs=()=>{
    setTimeout(getWinner, 10);
} 
const tieGame = ()=> {fetch(randomCatsEndpoint)
    .then((response) => {
        return response.json();
    })
    .then((json) =>{
        console.log(json)
        let randomCatUrl = json[0].url;
        randomCatImage.setAttribute('src', randomCatUrl)
    }).catch(function (err){
        console.log(err);
    })
    tieScore ++;
    catScore.innerHTML=`${tieScore}`;
    setTimeout(function (){
        alert("We have a tie better luck next time.");
        reset();    
    }, 50);
    
}    
console.log("Winning conditions is working");
// x
const winningTrad = () =>{
    if (square1.innerHTML === playerOneChoice
        && square2.innerHTML === playerOneChoice
        && square3.innerHTML === playerOneChoice){
        
        winnerIs();
    }else if (square1.innerHTML === playerOneChoice
        && square4.innerHTML === playerOneChoice
        && square7.innerHTML === playerOneChoice){
        winnerIs();
    }else if (square1.innerHTML === playerOneChoice
        && square5.innerHTML === playerOneChoice
        && square9.innerHTML === playerOneChoice){
        winnerIs();
    }else if (square2.innerHTML === playerOneChoice
        && square5.innerHTML === playerOneChoice
        && square8.innerHTML === playerOneChoice){
        winnerIs();
    }else if (square3.innerHTML === playerOneChoice
        && square6.innerHTML === playerOneChoice
        && square9.innerHTML === playerOneChoice){
        winnerIs();
    }else if (square3.innerHTML === playerOneChoice
        && square5.innerHTML === playerOneChoice
        && square7.innerHTML === playerOneChoice){
        winnerIs();      
    }else if (square4.innerHTML === playerOneChoice
        && square5.innerHTML === playerOneChoice
        && square6.innerHTML === playerOneChoice){
        winnerIs();    
    }else if (square7.innerHTML === playerOneChoice
        && square8.innerHTML === playerOneChoice
        && square9.innerHTML === playerOneChoice){
        winnerIs();    
    }else if (square1.innerHTML === playerTwoChoice
        && square2.innerHTML === playerTwoChoice
        && square3.innerHTML === playerTwoChoice){
        winnerIs();
    }else if (square1.innerHTML === playerTwoChoice
        && square4.innerHTML === playerTwoChoice
        && square7.innerHTML === playerTwoChoice){
        winnerIs();
    }else if (square1.innerHTML === playerTwoChoice
        && square5.innerHTML === playerTwoChoice
        && square9.innerHTML === playerTwoChoice){
        winnerIs();
    }else if (square2.innerHTML === playerTwoChoice
        && square5.innerHTML === playerTwoChoice
        && square8.innerHTML === playerTwoChoice){
        winnerIs();
    }else if (square3.innerHTML === playerTwoChoice
        && square6.innerHTML === playerTwoChoice
        && square9.innerHTML === playerTwoChoice){
        winnerIs();
    }else if (square3.innerHTML === playerTwoChoice
        && square5.innerHTML === playerTwoChoice
        && square7.innerHTML === playerTwoChoice){
        winnerIs();        
    }else if (square4.innerHTML === playerTwoChoice
        && square5.innerHTML === playerTwoChoice
        && square6.innerHTML === playerTwoChoice){
        winnerIs();    
    }else if (square7.innerHTML === playerTwoChoice
        && square8.innerHTML === playerTwoChoice
        && square9.innerHTML === playerTwoChoice){
        winnerIs();    
    }else if(counter >= 10){
        tieGame()
    }else {
        getActivePlayer();
    }
}
