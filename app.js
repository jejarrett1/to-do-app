function onReady(){
  var toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id=0;

  tempToDos = localStorage["toDos"]
  console.log(tempToDos);
  if (tempToDos){
    console.log("hey");
    toDos = JSON.parse(tempToDos);
    console.log(toDos);
  }
  function createNewToDo() {
    id=id+1;
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    newToDoText.value = '';

    renderTheUI();
    var temp = JSON.stringify(toDos);
    localStorage["toDos"]=temp;
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const deleteButton =document.createElement('button');
      deleteButton.textContent="Delete";
      deleteButton.className="mdl-button mdl-js-button mdl-button--accent";

      newLi.textContent = toDo.title;


      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      deleteButton.addEventListener('click', event=>{
        deleteToDo(toDo);
      });
      checkbox.addEventListener('click', event=>{
        deleteToDo(toDo);
      });


      toDoList.appendChild(newLi);
    });


  }
  function completeToDo(toDo){
    toDos = toDos.filter( (todo) => {
      if (todo==toDo){
        toDo.complete=True;
      }
    });

  }


  function deleteToDo(toDo){
    toDos = toDos.filter( (todo) => {
      return todo != toDo;
    });
    renderTheUI(toDos);
    var temp = JSON.stringify(toDos);
    localStorage["toDos"]=temp;
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}




window.onload = function() {
  onReady();

};
