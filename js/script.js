const squares = document.querySelectorAll(".square");
// Counter determines which player is up.
let counter = 1
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
        }
    }
)}
const reset = () => {
    for (let i =0; i<squares.length; i++){
        squares[i].style.background='lemonchiffon';
    }
    counter = 1;
} 
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", event => reset());

