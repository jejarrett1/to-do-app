window.onload = function() {
   alert("The window has loaded!");
   onReady();
 };

 function onReady(){
   const addToDoForm = documnet.getElementById(('addToDoForm'));
   const newToDoText = documnet.getElementById('newToDoText');
   const toDoList = documnet.getElementById('toDoList')
   addToDoForm.addEventListener('submit', event =>{
     event.preventDefault();
     let title = newToDoText.value;
     let newLi = documnet.createElement('li')
     let checkbox = documnet.createElement('input');
     checkbox.type = "checkbox";

     newLi.textContent = title;

     newLi.appendChild(checkbox);
     toDoList.appendChild(newLi);
     newToDoText.value='';

   });
 }
