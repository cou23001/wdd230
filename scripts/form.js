var form = document.querySelector("form");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");
var errorSpan = document.getElementById("password-match-error");
var ratingInput = document.getElementById("page-rating");
var ratingOutput = document.getElementById("rating-value");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (password.value !== confirmPassword.value) {
        errorSpan.style.display = "inline";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    } else {
        errorSpan.style.display = "none";
        form.submit();
    }
});

ratingInput.addEventListener("input", function() {
    ratingOutput.textContent = ratingInput.value;
});
  