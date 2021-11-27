const christmasGame=()=>{
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
}
const traditional=()=>{
    for (let i =0;  i <squares.length; i++) {
        squares[i].addEventListener('click', function(event) {
            if ((squares[i].innerHTML ==="<h2>X</h2>") || (squares[i].innerHTML ==="<h2>O</h2>")){
                alert("This space has already been selected. Choose another space");
            }else{
                if (counter%2 === 0){
                    squares[i].innerHTML ="<h2>O</h2>";
                }else{
                    squares[i].innerHTML ="<h2>X</h2>";
                }
                counter++;
                winningTrad();
            }
        }
    )}
}