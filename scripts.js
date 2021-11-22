



(function board () { 
    const gameBoard = document.querySelectorAll(".grid-item");
    
    function listenerGameBoard () {
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i].addEventListener("click", function() {
                console.log(gameBoard[i]);
                if (gameBoard[i].textContent == "") {
                    gameBoard[i].textContent += "X";
                } else {
                    gameBoard[i].textContent = "";
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