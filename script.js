function changeTheme() {
    var element = document.getElementById("banner");
    var element1 = document.getElementById("center-dark");
    var element2 = document.getElementById("bottom-dark");
    var button = document.getElementById("add-btn");
    element.classList.toggle("top-dark-mode");
    element1.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
    button.classList.toggle("button-dark-mode");
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
   closeButton.innerHTML = 'x';
   closeButton.classList.add('close');
   closeButton.onclick = function() {
      container.removeChild(newDiv);
   };
   newDiv.appendChild(closeButton);
   container.appendChild(newDiv);
 }