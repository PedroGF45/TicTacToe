



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

const loginForm = document.getElementById("login");
const passwordResetForm = document.getElementById("passwordReset");
const createAccountForm = document.getElementById("createAccount");
const getPasswordResetLink = document.getElementById("passwordResetLink");
const getCreateAccountLink = document.getElementById("createAccountLink");

getPasswordResetLink.addEventListener("click", function showPasswordForm() {
    loginForm.style.cssText = "visibility: hidden";
    createAccountForm.style.cssText = "visibility: hidden";
    passwordResetForm.style.cssText = "visibility: visible";
});

getCreateAccountLink.addEventListener("click", function showCreateAccountForm() {
    loginForm.style.cssText = "visibility: hidden";
    createAccountForm.style.cssText = "visibility: visible";
    passwordResetForm.style.cssText = "visibility: hidden";
});

