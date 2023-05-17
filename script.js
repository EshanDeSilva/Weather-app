function changeTheme() {
    var element = document.getElementById("banner");
    var element1 = document.getElementById("center-dark");
    var element2 = document.getElementById("bottom-dark");
    element.classList.toggle("top-dark-mode");
    element1.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
 }