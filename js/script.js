const squares = document.querySelectorAll(".square");
// Counter determines which player is up.
let counter = 1
let activePlayer;

const getplayerTwo = ()=>{
    if (sessionStorage.getItem('gameMode') === 'vsComputer'){
        return playerTwo = "Wall-E";
    }
    else if (sessionStorage.getItem('playerTwo')){
        return playerTwo=(sessionStorage.getItem('playerTwo'))
    } else {
        return playerTwo ="Player Two";
    }
}
const getplayerOne = ()=>{
    if (sessionStorage.getItem('gameMode') === 'vsComputer'){
        return playerOne = "Skynet";
    }
    if (sessionStorage.getItem('playerOne')){
        return playerOne=(sessionStorage.getItem('playerOne'))
    } else {
        return playerOne ="Player One";
    }
}

const resetBtn = document.querySelector("#reset");
const getActivePlayer=()=>{
    if (counter%2===0){
        activePlayer = `${playerTwo}`;
    }else{
        activePlayer = `${playerOne}`;
    }
    resetBtn.innerHTML= `Ready ${activePlayer}`;
}
let playerOneChoice;
let playerTwoChoice; 
// for (let i =0;  i <squares.length; i++) {
//     squares[i].addEventListener('click', function(event) {
//         if ((squares[i].innerHTML ==="<h2>X</h2>") || (squares[i].innerHTML ==="<h2>O</h2>")){
//             alert("This space has already been selected. Choose another space");
//         }else{
//             if (counter%2 === 0){
//                 squares[i].innerHTML ="<h2>O</h2>";
//             }else{
//                 squares[i].innerHTML ="<h2>X</h2>";
//             }
//             counter++;
//             winning();
//         }
//     }
// )}
// christmasGame()
const reset = () => {
    for (let i =0; i<squares.length; i++){
        squares[i].style.background='lemonchiffon';
        squares[i].innerHTML = "";
    }
    counter = 1;
    getActivePlayer();
} 
getplayerOne()
getplayerTwo()

resetBtn.addEventListener("click", function(event) {reset()});
let apiKey = "e1a391b0-3601-4e54-af99-66499eaba992";
const randomCatsEndpoint  =`https://api.thecatapi.com/v1/images/search?`;
const randomCatImage = document.querySelector("#randomCatImage");
// This is the logic the computer uses to select a square.
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}
let mySound = new sound("https://bigsoundbank.com/UPLOAD/mp3/0311.mp3");
const computerTurn=()=>{
    mySound.play()
    if(counter%2===0){
        if (squares[counter-2].innerHTML !== playerOneChoice){
            squares[counter-2].innerHTML = playerTwoChoice;
            
        }else if (squares[counter-1].innerHTML !== playerOneChoice){
            squares[counter-1].innerHTML = playerTwoChoice;
            
        }else if(squares[counter].innerHTML !== playerOneChoice){
            squares[counter].innerHTML = playerTwoChoice;
            
        }else{
            squares[counter+1].innerHTML = playerTwoChoice;
            
        }
    }
}
const computerTurn2= () =>{
    if(notPlayed(squares[4])){
        squares[4].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[0])){
        squares[0].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[8])){
        squares[8].innerHTML =playerTwoChoice;
    }else if (notPlayed(squares[2])){
        squares[2].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[6])){
        squares[6].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[3])){
        squares[3].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[2])){
        squares[2].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[7])){
        squares[7].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[5])){
        squares[5].innerHTML = playerTwoChoice;
    }else if (notPlayed(squares[1])){
        squares[1].innerHTML = playerTwoChoice;
    }
}
function notPlayed(space){
    if ((space.innerHTML !== playerOneChoice) && (space.innerHTML !== playerTwoChoice)){
        return true;
    }else{
        return false;
    }
}
const computerTurn3= () =>{
    if(notPlayed(squares[4])){
        squares[4].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[0])){
        squares[0].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[8])){
        squares[8].innerHTML =playerOneChoice;
    }else if (notPlayed(squares[2])){
        squares[2].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[6])){
        squares[6].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[3])){
        squares[3].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[2])){
        squares[2].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[7])){
        squares[7].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[5])){
        squares[5].innerHTML = playerOneChoice;
    }else if (notPlayed(squares[1])){
        squares[1].innerHTML = playerOneChoice;
    }
}