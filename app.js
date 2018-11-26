function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();

  // get the text
  let title = newToDoText.value;

  // create a new li
  let newLi = document.createElement('li');

  // create a new input
  let checkbox = document.createElement('input');
  let deleteButton =document.createElement('button');
  deleteButton.textContent="Delete";
  deleteButton.className="mdl-button mdl-js-button mdl-button--accent"

  // set the input's type to checkbox
  checkbox.type = "checkbox";


  // set the title
  newLi.textContent = title;

  // attach the checkbox to the li
  newLi.appendChild(checkbox);
  newLi.appendChild(deleteButton);
  deleteButton.addEventListener('click', event=>{
    console.log("herd click");
    deleteToDo(newLi);
  });

  // attach the li to the ul
  toDoList.appendChild(newLi);

  //empty the input
  newToDoText.value = '';
  });

  function deleteToDo(Li) {
    console.log("in delete funtions");
    console.log(Li)
    let todo = document.getElementsByTagName("ul")[0];
    console.log(todo);
    toDoList.removeChild(Li);
};
}

window.onload = function() {
  onReady();
  console.log("hey")
};
