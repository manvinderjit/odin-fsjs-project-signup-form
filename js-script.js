const form = document.querySelector('form');

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const spanPasswordError = document.getElementById('password-error');

window.addEventListener('load', () => {
    password.classList.add("error");
    confirmPassword.classList.add("error");
  });

password.addEventListener('input', () => {
    togglePasswordError(comparePasswords());
});

confirmPassword.addEventListener('input', () => {
    togglePasswordError(comparePasswords());
});

function comparePasswords() {
    if(password.value !== confirmPassword.value){
        return false;
    } 
    return true;
}

function togglePasswordError(_comparisonResult) {
    if(_comparisonResult === false) {
        spanPasswordError.innerText = "Error! Password and Confirm Password must be same!";
        password.classList.add("error");
        confirmPassword.classList.add("error");        
        return
    } 
    else if(_comparisonResult === true){
        spanPasswordError.innerText = "";        
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
    }
    return

}

