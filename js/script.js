const squares = document.querySelectorAll(".square");
// Counter determines which player is up.
let counter = 1
let activePlayer;
let playerTwo = "Player Two"
const resetBtn = document.querySelector("#reset");
const getActivePlayer=()=>{
    if (counter%2===0){
        activePlayer = `${playerTwo}`;
    }else{
        activePlayer = 'Player One';
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

resetBtn.addEventListener("click", event => reset());
let apiKey = "e1a391b0-3601-4e54-af99-66499eaba992";
const randomCatsEndpoint  =`https://api.thecatapi.com/v1/images/search?`;
const randomCatImage = document.querySelector("#randomCatImage");
const playTraditional = document.querySelector("#traditional");
const playninja = document.querySelector("#ninja")
const playChristmas = document.querySelector("#christmas")