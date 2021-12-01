# Welcome to Tic-Tac-Towesome
Developed by Seth Thomas as part of the SEI offered by General Assembly and Interapt in November 21.

## Mission
The mission build a Tic-Tac-Toe game from scratch.

## User Stories
- As a user, you should  be able to play a game of tic tac toe.
- As a user, when you click on a square a X or an O should appear.
- As a user, you should be notified when you win.
- As a user, you should not be able to click on the same square twice in a game.
- As a user, you would like to play again without refreshing the page.
- As a user, you would like to customize your experience.

## Technologies Used
- HTML for framework of the site.
- CSS for styling.
- Javascript for all of the heavylifting.
- [Cat Api](https://thecatapi.com)
- [Big Sound Bank]("https://bigsoundbank.com)
- [Giphy Api](https://giphy.com)
- [Font Awesome](https://fontawesome.com)

## From Hello World to Skynet
### In the Beginning
My project started small by creating a name for the repo and creating the index.html, style.css, and  script.js. I wanted my project to be unique. Fastest way to achieve this goal was to give the project a silly name playing off the game Tic-Tac-Toe and my expectance for how it would turn out, awesome. Tic-Tac-Towesome was born. 

Now that I had the unique factor on lock down, I was able to focus on the task at hand, recreating a childhood game. I tinkered around with getting the gameboard to display on the screen until I settled on a grid with 80px squares.

Next step was proving that by clicking on a square I could you change the color of the square. After that it was matter of looping through the squares and adding an if statement to alternate between player one and player two. Like so.

```
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
```

### But how do I win
Once I was confident that I was able to select spaces and that spaces would not be repeated. I started to think about how I would go about determining a winner. I decided to use a series of if , else if, and else conditions. If squares 1, 2, and 3 had Xs then player One won, else it would continue to the next condition. Here I learned a valuable lesson about being consistent and detail oriented. 
I was experiencing a bug where I was getting a false response even though I was comparing the innerHTML with the same HTML that I had put in the div.
I was putting in:
```
playerOneChoice ="<i class='fas fa-user-ninja'></i>";

```
And this was coming out:

```
square[1].innerHTML ='<i class="fas fa-user-ninja" aria-hidden="true"></i>';

```

In order to get it to work I had to change my input to:

```
playerOneChoice ='<i class="fas fa-user-ninja" aria-hidden="true"></i>';

```
