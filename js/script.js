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
for (let i =0;  i <squares.length; i++) {
    squares[i].addEventListener('click', function(event) {
        if ((squares[i].style.background ==="red") || (squares[i].style.background ==="green")){
            alert("This space has already been selected. Choose another space");
        }else{
            if (counter%2 === 0){
                squares[i].style.background ="red";
            }else{
                squares[i].style.background ="green";
            }
            counter++;
            winning();
        }
    }
)}
const reset = () => {
    for (let i =0; i<squares.length; i++){
        squares[i].style.background='lemonchiffon';
    }
    counter = 1;
    getActivePlayer();
} 

resetBtn.addEventListener("click", event => reset());

const getWinner=()=>{
    alert(`${activePlayer} is the winner`);
    reset();
}
const winnerIs=()=>{
    setTimeout(getWinner, 100);
} 