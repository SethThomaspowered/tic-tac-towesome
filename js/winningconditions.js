const square1 = document.querySelector('.one');
const square2 = document.querySelector('.two');
const square3 = document.querySelector('.three');
const square4 = document.querySelector('.four');
const square5 = document.querySelector('.five');
const square6 = document.querySelector('.six');
const square7 = document.querySelector('.seven');
const square8 = document.querySelector('.eight');
const square9 = document.querySelector('.nine');

console.log("Winning conditions is working");
const winning = () =>{
    if (square1.style.background === "green"
        && square2.style.background === "green"
        && square3.style.background === "green"){
        alert("Player One wins");
        reset();
    }else if (square1.style.background === "green"
        && square4.style.background === "green"
        && square7.style.background === "green"){
        alert("Player One wins")
        reset();
    }else if (square1.style.background === "green"
        && square5.style.background === "green"
        && square9.style.background === "green"){
        alert("Player One wins")
        reset();
    }else if (square2.style.background === "green"
        && square5.style.background === "green"
        && square8.style.background === "green"){
        alert("Player One wins");
        reset();
    }else if (square3.style.background === "green"
        && square6.style.background === "green"
        && square9.style.background === "green"){
        alert("Player One wins");
    }else if (square3.style.background === "green"
        && square5.style.background === "green"
        && square7.style.background === "green"){
        alert("Player One wins")        
    }else if (square4.style.background === "green"
        && square5.style.background === "green"
        && square6.style.background === "green"){
        alert("Player One wins")    
    }else if (square7.style.background === "green"
        && square8.style.background === "green"
        && square9.style.background === "green"){
        alert("Player One wins")    
    }else if (square1.style.background === "red"
        && square2.style.background === "red"
        && square3.style.background === "red"){
        alert("Player Two wins")
    }else if (square1.style.background === "red"
        && square4.style.background === "red"
        && square7.style.background === "red"){
        alert("Player Two wins")
    }else if (square1.style.background === "red"
        && square5.style.background === "red"
        && square9.style.background === "red"){
        alert("Player Two wins")
    }else if (square2.style.background === "red"
        && square5.style.background === "red"
        && square8.style.background === "red"){
        alert("Player Two wins")
    }else if (square3.style.background === "red"
        && square6.style.background === "red"
        && square9.style.background === "red"){
        alert("Player Two wins")
    }else if (square3.style.background === "red"
        && square5.style.background === "red"
        && square7.style.background === "red"){
        alert("Player Two wins")        
    }else if (square4.style.background === "red"
        && square5.style.background === "red"
        && square6.style.background === "red"){
        alert("Player Two wins")
        reset();    
    }else if (square7.style.background === "red"
        && square8.style.background === "red"
        && square9.style.background === "red"){
        alert("Player Two wins");
        reset();    
    }else if(counter >= 10){
        alert("We have a tie better luck next time.");
        reset();
    }else {
        alert("Continue playing")
    }
}
