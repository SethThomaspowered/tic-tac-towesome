const square1 = document.querySelector('.one');
const square2 = document.querySelector('.two');
const square3 = document.querySelector('.three');
const square4 = document.querySelector('.four');
const square5 = document.querySelector('.five');
const square6 = document.querySelector('.six');
const square7 = document.querySelector('.seven');
const square8 = document.querySelector('.eight');
const square9 = document.querySelector('.nine');
const getWinner=()=>{
    alert(`${activePlayer} is the winner`);
    reset();
}
const winnerIs=()=>{
    getWinner()
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
    alert("We have a tie better luck next time.");
    setTimeout(reset, 1000);}
console.log("Winning conditions is working");
const winning = (playerOneChoice, playerTwoChoice) =>{
    if (square1.style.background === playerOneChoice
        && square2.style.background === playerOneChoice
        && square3.style.background === playerOneChoice){
        winnerIs();
    }else if (square1.style.background === playerOneChoice
        && square4.style.background === playerOneChoice
        && square7.style.background === playerOneChoice){
        winnerIs();
    }else if (square1.style.background === playerOneChoice
        && square5.style.background === playerOneChoice
        && square9.style.background === playerOneChoice){
        winnerIs();
    }else if (square2.style.background === playerOneChoice
        && square5.style.background === playerOneChoice
        && square8.style.background === playerOneChoice){
        winnerIs();
    }else if (square3.style.background === playerOneChoice
        && square6.style.background === playerOneChoice
        && square9.style.background === playerOneChoice){
        winnerIs();
    }else if (square3.style.background === playerOneChoice
        && square5.style.background === playerOneChoice
        && square7.style.background === playerOneChoice){
        winnerIs();      
    }else if (square4.style.background === playerOneChoice
        && square5.style.background === playerOneChoice
        && square6.style.background === playerOneChoice){
        winnerIs();    
    }else if (square7.style.background === playerOneChoice
        && square8.style.background === playerOneChoice
        && square9.style.background === playerOneChoice){
        winnerIs();    
    }else if (square1.style.background === playerTwoChoice
        && square2.style.background === playerTwoChoice
        && square3.style.background === playerTwoChoice){
        winnerIs();
    }else if (square1.style.background === playerTwoChoice
        && square4.style.background === playerTwoChoice
        && square7.style.background === playerTwoChoice){
        winnerIs();
    }else if (square1.style.background === playerTwoChoice
        && square5.style.background === playerTwoChoice
        && square9.style.background === playerTwoChoice){
        winnerIs();
    }else if (square2.style.background === playerTwoChoice
        && square5.style.background === playerTwoChoice
        && square8.style.background === playerTwoChoice){
        winnerIs();
    }else if (square3.style.background === playerTwoChoice
        && square6.style.background === playerTwoChoice
        && square9.style.background === playerTwoChoice){
        winnerIs();
    }else if (square3.style.background === playerTwoChoice
        && square5.style.background === playerTwoChoice
        && square7.style.background === playerTwoChoice){
        winnerIs();        
    }else if (square4.style.background === playerTwoChoice
        && square5.style.background === playerTwoChoice
        && square6.style.background === playerTwoChoice){
        winnerIs();    
    }else if (square7.style.background === playerTwoChoice
        && square8.style.background === playerTwoChoice
        && square9.style.background === playerTwoChoice){
        winnerIs();    
    }else if(counter >= 10){
       tieGame()
    }else {
        getActivePlayer();
    }
}
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
