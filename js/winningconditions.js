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
    setTimeout(getWinner, 100);
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
const winning = () =>{
    if (square1.style.background === "green"
        && square2.style.background === "green"
        && square3.style.background === "green"){
        winnerIs();
    }else if (square1.style.background === "green"
        && square4.style.background === "green"
        && square7.style.background === "green"){
        winnerIs();
    }else if (square1.style.background === "green"
        && square5.style.background === "green"
        && square9.style.background === "green"){
        winnerIs();
    }else if (square2.style.background === "green"
        && square5.style.background === "green"
        && square8.style.background === "green"){
        winnerIs();
    }else if (square3.style.background === "green"
        && square6.style.background === "green"
        && square9.style.background === "green"){
        winnerIs();
    }else if (square3.style.background === "green"
        && square5.style.background === "green"
        && square7.style.background === "green"){
        winnerIs();      
    }else if (square4.style.background === "green"
        && square5.style.background === "green"
        && square6.style.background === "green"){
        winnerIs();    
    }else if (square7.style.background === "green"
        && square8.style.background === "green"
        && square9.style.background === "green"){
        winnerIs();    
    }else if (square1.style.background === "<h2>O</h2>"
        && square2.style.background === "<h2>O</h2>"
        && square3.style.background === "<h2>O</h2>"){
        winnerIs();
    }else if (square1.style.background === "<h2>O</h2>"
        && square4.style.background === "<h2>O</h2>"
        && square7.style.background === "<h2>O</h2>"){
        winnerIs();
    }else if (square1.style.background === "<h2>O</h2>"
        && square5.style.background === "<h2>O</h2>"
        && square9.style.background === "<h2>O</h2>"){
        winnerIs();
    }else if (square2.style.background === "<h2>O</h2>"
        && square5.style.background === "<h2>O</h2>"
        && square8.style.background === "<h2>O</h2>"){
        winnerIs();
    }else if (square3.style.background === "<h2>O</h2>"
        && square6.style.background === "<h2>O</h2>"
        && square9.style.background === "<h2>O</h2>"){
        winnerIs();
    }else if (square3.style.background === "<h2>O</h2>"
        && square5.style.background === "<h2>O</h2>"
        && square7.style.background === "<h2>O</h2>"){
        winnerIs();        
    }else if (square4.style.background === "<h2>O</h2>"
        && square5.style.background === "<h2>O</h2>"
        && square6.style.background === "<h2>O</h2>"){
        winnerIs();    
    }else if (square7.style.background === "<h2>O</h2>"
        && square8.style.background === "<h2>O</h2>"
        && square9.style.background === "<h2>O</h2>"){
        winnerIs();    
    }else if(counter >= 10){
       tieGame()
    }else {
        getActivePlayer();
    }
}
const winningTrad = () =>{
    if (square1.innerHTML === "<h2>X</h2>"
        && square2.innerHTML === "<h2>X</h2>"
        && square3.innerHTML === "<h2>X</h2>"){
        winnerIs();
    }else if (square1.innerHTML === "<h2>X</h2>"
        && square4.innerHTML === "<h2>X</h2>"
        && square7.innerHTML === "<h2>X</h2>"){
        winnerIs();
    }else if (square1.innerHTML === "<h2>X</h2>"
        && square5.innerHTML === "<h2>X</h2>"
        && square9.innerHTML === "<h2>X</h2>"){
        winnerIs();
    }else if (square2.innerHTML === "<h2>X</h2>"
        && square5.innerHTML === "<h2>X</h2>"
        && square8.innerHTML === "<h2>X</h2>"){
        winnerIs();
    }else if (square3.innerHTML === "<h2>X</h2>"
        && square6.innerHTML === "<h2>X</h2>"
        && square9.innerHTML === "<h2>X</h2>"){
        winnerIs();
    }else if (square3.innerHTML === "<h2>X</h2>"
        && square5.innerHTML === "<h2>X</h2>"
        && square7.innerHTML === "<h2>X</h2>"){
        winnerIs();      
    }else if (square4.innerHTML === "<h2>X</h2>"
        && square5.innerHTML === "<h2>X</h2>"
        && square6.innerHTML === "<h2>X</h2>"){
        winnerIs();    
    }else if (square7.innerHTML === "<h2>X</h2>"
        && square8.innerHTML === "<h2>X</h2>"
        && square9.innerHTML === "<h2>X</h2>"){
        winnerIs();    
    }else if (square1.innerHTML === "<h2>O</h2>"
        && square2.innerHTML === "<h2>O</h2>"
        && square3.innerHTML === "<h2>O</h2>"){
        winnerIs();
    }else if (square1.innerHTML === "<h2>O</h2>"
        && square4.innerHTML === "<h2>O</h2>"
        && square7.innerHTML === "<h2>O</h2>"){
        winnerIs();
    }else if (square1.innerHTML === "<h2>O</h2>"
        && square5.innerHTML === "<h2>O</h2>"
        && square9.innerHTML === "<h2>O</h2>"){
        winnerIs();
    }else if (square2.innerHTML === "<h2>O</h2>"
        && square5.innerHTML === "<h2>O</h2>"
        && square8.innerHTML === "<h2>O</h2>"){
        winnerIs();
    }else if (square3.innerHTML === "<h2>O</h2>"
        && square6.innerHTML === "<h2>O</h2>"
        && square9.innerHTML === "<h2>O</h2>"){
        winnerIs();
    }else if (square3.innerHTML === "<h2>O</h2>"
        && square5.innerHTML === "<h2>O</h2>"
        && square7.innerHTML === "<h2>O</h2>"){
        winnerIs();        
    }else if (square4.innerHTML === "<h2>O</h2>"
        && square5.innerHTML === "<h2>O</h2>"
        && square6.innerHTML === "<h2>O</h2>"){
        winnerIs();    
    }else if (square7.innerHTML === "<h2>O</h2>"
        && square8.innerHTML === "<h2>O</h2>"
        && square9.innerHTML === "<h2>O</h2>"){
        winnerIs();    
    }else if(counter >= 10){
        alert("We have a tie better luck next time.");
        setTimeout(reset, 100);
    }else {
        getActivePlayer();
    }
}
