(function board () { 
    const gameBoard = document.querySelectorAll(".grid-item");
    
    function listenerGameBoard () {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i].addEventListener("click", function() {
                console.log(gameBoard[i]);
                if (gameBoard[i].textContent == 0) {
                    gameBoard[i].textContent += "X";
                } else {
                    console.log("ta fdd");
                }
            })
        }
    }
    
       

    return listenerGameBoard();
})();

function getPlayers () {

}

(function displayController () {

})();