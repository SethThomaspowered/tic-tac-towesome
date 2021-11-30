const christmasGame=()=>{
    playerOneChoice='<h2 style="background: green; color: green; padding-right: 20px; padding-left: 20px;">0</h2>';
    playerTwoChoice='<h2 style="background: red; color: red; padding-right: 20px; padding-left: 20px;">0</h2>';
    for (let i =0;  i <squares.length; i++) {
    squares[i].addEventListener('click', function(event) {
        if ((squares[i].innerHTML ==playerTwoChoice) || (squares[i].innerHTML ==playerOneChoice)){
            alert("This space has already been selected. Choose another space");
        }else{
            if (counter%2 === 0){
                squares[i].innerHTML=playerTwoChoice;
            }else{
                squares[i].innerHTML =playerOneChoice;
            }
            counter++;
            winningTrad();
        }
    }, true
)}
}
const traditional=()=>{
    playerOneChoice="<h2>X</h2>";
    playerTwoChoice="<h2>O</h2>";

    for (let i =0;  i <squares.length; i++) {
        squares[i].addEventListener('click', function(event) {
            if ((squares[i].innerHTML ===playerOneChoice) || (squares[i].innerHTML ===playerTwoChoice)){
                alert("This space has already been selected. Choose another space");
            }else{
                if (counter%2 === 0){
                    squares[i].innerHTML =playerTwoChoice;
                }else{
                    squares[i].innerHTML =playerOneChoice;
                }
                
                counter++;
                winningTrad();
            }
        }
    )}
}
const ninjaVsPirate=()=>{
    playerOneChoice ='<i class="fas fa-user-ninja" aria-hidden="true"></i>';
    playerTwoChoice ='<i class="fas fa-skull-crossbones" aria-hidden="true"></i>';
    
    for (let i =0;  i <squares.length; i++) {
        squares[i].addEventListener('click', function(event) {
            if ((squares[i].innerHTML ===playerOneChoice) || (squares[i].innerHTML ===playerTwoChoice)){
                alert("This space has already been selected. Choose another space");
            }else{
                if (counter%2 === 0){
                    squares[i].innerHTML =playerTwoChoice;
                }else{
                    squares[i].innerHTML =playerOneChoice;
                }
                counter++;
                winningTrad();
            }
        }
    )}
}

const hVr=()=>{
    playerOneChoice="<h2>X</h2>";
    playerTwoChoice="<h2>O</h2>";
    player2 ="Wall-E";

    for (let i =0;  i <squares.length; i++) {
        squares[i].addEventListener('click', function(event) {
            if ((squares[i].innerHTML ===playerOneChoice) || (squares[i].innerHTML ===playerTwoChoice)){
                alert("This space has already been selected. Choose another space");
            }else{
                if (counter%2 === 0){
                    computerTurn2();
                }else{
                    squares[i].innerHTML =playerOneChoice;
                }
                counter++;
                winningTrad();
            }
        }
    )}
}
const rVr=()=>{
    playerOneChoice='<img src="https://media4.giphy.com/media/dAC1oKY7OQzMQ/200w_d.gif?cid=1bbf666ea8cramuv4ff0mspmvdktycl0h9v7j76rfrti49u3&amp;rid=200w_d.gif&amp;ct=g">';
    playerTwoChoice='<img src="https://media4.giphy.com/media/iGJNOadhvBMuk/200w_d.gif?cid=1bbf666e5pmhgl3oze9kdd7qjgdj2mgpkkml6nifj6nnbvmw&amp;rid=200w_d.gif&amp;ct=g">';
    player1 ="Skynet"
    player2 ="Wall-E";

    for (let i =0;  i <squares.length; i++) {
        squares[i].addEventListener('mouseover', function(event) {
            
            if (counter%2 === 0){
                computerTurn();
            }else{
                computerTurn3();
            }
            counter++;
            winningTrad();
            }
        
    )}
}
class TicTacToe {
    constructor(playerOneChoice, playerTwoChoice){
        this.playerOneChoice = playerOneChoice;
        this.playerTwoChoice = playerTwoChoice;
        this.counter = 1;
    }
    getActivePlayer() {
        if (counter%2===0){
            activePlayer = 'Player Two';
        }else{
            activePlayer = 'Player One';
        }
        resetBtn.innerHTML= `Ready ${activePlayer}`;
    }
    getWinner() {
        alert(`${activePlayer} is the winner`);
        reset();
    }
    winnerIs(){
        getWinner();
    }
    tieGame(){
        fetch(randomCatsEndpoint)
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
    winningTrad() {
            if (square1.innerHTML === this.playerOneChoice
                && square2.innerHTML === this.playerOneChoice
                && square3.innerHTML === this.playerOneChoice){
                winnerIs();
            }else if (square1.innerHTML === this.playerOneChoice
                && square4.innerHTML === this.playerOneChoice
                && square7.innerHTML === this.playerOneChoice){
                winnerIs();
            }else if (square1.innerHTML === this.playerOneChoice
                && square5.innerHTML === this.playerOneChoice
                && square9.innerHTML === this.playerOneChoice){
                winnerIs();
            }else if (square2.innerHTML === this.playerOneChoice
                && square5.innerHTML === this.playerOneChoice
                && square8.innerHTML === this.playerOneChoice){
                winnerIs();
            }else if (square3.innerHTML === this.playerOneChoice
                && square6.innerHTML === this.playerOneChoice
                && square9.innerHTML === this.playerOneChoice){
                winnerIs();
            }else if (square3.innerHTML === this.playerOneChoice
                && square5.innerHTML === this.playerOneChoice
                && square7.innerHTML === this.playerOneChoice){
                winnerIs();      
            }else if (square4.innerHTML === this.playerOneChoice
                && square5.innerHTML === this.playerOneChoice
                && square6.innerHTML === this.playerOneChoice){
                winnerIs();    
            }else if (square7.innerHTML === this.playerOneChoice
                && square8.innerHTML === this.playerOneChoice
                && square9.innerHTML === this.playerOneChoice){
                winnerIs();    
            }else if (square1.innerHTML === this.playerTwoChoice
                && square2.innerHTML === this.playerTwoChoice
                && square3.innerHTML === this.playerTwoChoice){
                winnerIs();
            }else if (square1.innerHTML === this.playerTwoChoice
                && square4.innerHTML === this.playerTwoChoice
                && square7.innerHTML === this.playerTwoChoice){
                winnerIs();
            }else if (square1.innerHTML === this.playerTwoChoice
                && square5.innerHTML === this.playerTwoChoice
                && square9.innerHTML === this.playerTwoChoice){
                winnerIs();
            }else if (square2.innerHTML === this.playerTwoChoice
                && square5.innerHTML === this.playerTwoChoice
                && square8.innerHTML === this.playerTwoChoice){
                winnerIs();
            }else if (square3.innerHTML === this.playerTwoChoice
                && square6.innerHTML === this.playerTwoChoice
                && square9.innerHTML === this.playerTwoChoice){
                winnerIs();
            }else if (square3.innerHTML === this.playerTwoChoice
                && square5.innerHTML === this.playerTwoChoice
                && square7.innerHTML === this.playerTwoChoice){
                winnerIs();        
            }else if (square4.innerHTML === this.playerTwoChoice
                && square5.innerHTML === this.playerTwoChoice
                && square6.innerHTML === this.playerTwoChoice){
                winnerIs();    
            }else if (square7.innerHTML === this.playerTwoChoice
                && square8.innerHTML === this.playerTwoChoice
                && square9.innerHTML === this.playerTwoChoice){
                winnerIs();    
            }else if(counter >= 10){
                tieGame()
            }else {
                getActivePlayer();
            }
        }
    game(){
        for (let i =0;  i <squares.length; i++) {
            squares[i].addEventListener('click', function(event) {
                if ((squares[i].innerHTML ===this.playerOneChoice) || (squares[i].innerHTML ===this.playerTwoChoice)){
                    alert("This space has already been selected. Choose another space");
                }else{
                    if (counter%2 === 0){
                        squares[i].innerHTML =this.playerTwoChoice;
                    }else{
                        squares[i].innerHTML =this.playerOneChoice;
                    }
                    counter++;
                    winningTrad();
                }
            }
        )}
    }    
    
}
const getGameMode = ()=>{
    if (sessionStorage.getItem("gameMode") === "christmasGame"){
        return christmasGame();
    }else if (sessionStorage.getItem("gameMode") === "ninjaVsPirate"){
        return ninjaVsPirate();
    } else if(sessionStorage.getItem("gameMode") === "vsComputer"){
        return hVr();
    } else if(sessionStorage.getItem("gameMode") === "computerVsComputer"){
        return rVr();
    }
    else {
        return traditional();
    }
}
getGameMode()