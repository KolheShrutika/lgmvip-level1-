var taskInput = document.getElementById("task-input");
  var taskList = document.getElementById("task-list");
  
  function addTask() {
    var taskText = taskInput.value;
    
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    
    var li = document.createElement("li");
    var textNode = document.createTextNode(taskText);
    
    li.appendChild(textNode);
    taskList.appendChild(li);
    
    taskInput.value = "";
    
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

  }
  