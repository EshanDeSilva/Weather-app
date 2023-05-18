function changeTheme() {
    var element = document.getElementById("banner");
    var element1 = document.getElementById("center-dark");
    var element2 = document.getElementById("bottom-dark");
    var button = document.getElementById("add-btn");
    var mainBody = document.getElementById("right-body");
    element.classList.toggle("top-dark-mode");
    element1.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
    button.classList.toggle("button-dark-mode");
    mainBody.classList.toggle("right-body-dark");
 }

 function newSection() {
   /* var container = document.getElementById("container");
    var section = document.getElementById("mainsection");
    container.appendChild(section.cloneNode(true));*/
    /*var element = document.getElementById("add-btn");
    element.classList.toggle("add-button-click");*/
    addDiv();
  }

  function addDiv() {
   var container = document.getElementById('container');
   var newDiv = document.createElement('div');
   newDiv.innerHTML = 'New Div ';
   newDiv.className = "newDiv";
   var closeButton = document.createElement('button');
   var icon = document.createElement('img');
   icon.src = 'https://img.icons8.com/?size=512&id=7703&format=png';
   icon.classList.add('close-img');
   closeButton.appendChild(icon);
   closeButton.classList.add('close');
   closeButton.onclick = function() {
      container.removeChild(newDiv);
   };
   newDiv.appendChild(closeButton);
   container.appendChild(newDiv);
 }