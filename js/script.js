const squares = document.querySelectorAll(".square");
// Counter determines which player is up.
let counter = 1
let activePlayer;
const resetBtn = document.querySelector("#reset");
const getActivePlayer=()=>{
    if (counter%2===0){
        activePlayer = 'Player Two';
    }else{
        activePlayer = 'Player One';
    }
    resetBtn.innerHTML= `Ready ${activePlayer}`;
} 
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

