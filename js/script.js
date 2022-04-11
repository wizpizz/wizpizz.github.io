




// automatically change the text of the button when the page loads
window.onload = function () {
    if (localStorage.getItem("gaacs") == null) {
        window.alert("This is the first time you are visiting this website")
        localStorage.setItem("gaacs", "true");
    }
}