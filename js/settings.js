const playerOneName = document.querySelector("[name='playerOne']");
const playerTwoName = document.querySelector("[name='playerTwo']");
const defaultBtn = document.querySelector('#defaultbtn');
const playTraditional = document.querySelector("#traditional");
const playninja = document.querySelector("#ninja");
const playChristmas = document.querySelector("#christmas");

let storage = sessionStorage;
let player1;
let player2;
playerOneName.addEventListener('keyup', function(event){
    player1 = storage.setItem("playerOne", playerOneName.value)
})
playerTwoName.addEventListener('keyup', function(event){
    player2 = storage.setItem("playerTwo", playerTwoName.value)
})
defaultBtn.addEventListener('click', function(event){
    storage.removeItem("playerOne");
    storage.removeItem("playerTwo");
})
