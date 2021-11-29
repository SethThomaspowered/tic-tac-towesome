const playerOneName = document.querySelector("[name='playerOne']");
const playerTwoName = document.querySelector("[name='playerTwo']")
let storage = sessionStorage;
let player1;
let player2;
playerOneName.addEventListener('keyup', function(event){
    player1 = storage.setItem("playerOne", playerOneName.value)
})
playerTwoName.addEventListener('keyup', function(event){
    player2 = storage.setItem("playerTwo", playerTwoName.value)
})