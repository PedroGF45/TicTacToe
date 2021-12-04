



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


//login forms
const loginForm = document.getElementById("login");
const passwordResetForm = document.getElementById("passwordReset");
const createAccountForm = document.getElementById("createAccount");
const passwordResetLink = document.getElementById("passwordResetLink");
const createAccountLink = document.getElementById("createAccountLink");
const backToLoginPassword = document.getElementById("backToLoginPassword");
const backToLoginAccount = document.getElementById("backToLoginAccount");

passwordResetLink.addEventListener("click", function showPasswordForm() {
    loginForm.style.cssText = "visibility: hidden";
    createAccountForm.style.cssText = "visibility: hidden";
    passwordResetForm.style.cssText = "visibility: visible";
    backToLoginPassword.style.cssText = "visibility: visible"; 
    backToLoginAccount.style.cssText = "visibility: hidden";
});

createAccountLink.addEventListener("click", function showCreateAccountForm() {
    loginForm.style.cssText = "visibility: hidden";
    createAccountForm.style.cssText = "visibility: visible";
    passwordResetForm.style.cssText = "visibility: hidden";
    backToLoginPassword.style.cssText = "visibility: hidden"; 
    backToLoginAccount.style.cssText = "visibility: visible";
});

backToLoginPassword.addEventListener("click", function showLoginForm() {
    loginForm.style.cssText = "visibility: visible";
    createAccountForm.style.cssText = "visibility: hidden";
    passwordResetForm.style.cssText = "visibility: hidden";
    backToLoginPassword.style.cssText = "visibility: hidden"; 
    backToLoginAccount.style.cssText = "visibility: hidden";
});

backToLoginAccount.addEventListener("click", function showLoginForm() {
    loginForm.style.cssText = "visibility: visible";
    createAccountForm.style.cssText = "visibility: hidden";
    passwordResetForm.style.cssText = "visibility: hidden";
    backToLoginPassword.style.cssText = "visibility: hidden"; 
    backToLoginAccount.style.cssText = "visibility: hidden";
});