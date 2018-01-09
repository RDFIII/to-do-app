$(document).ready(function(){
  $.getJSON("/api/todos")
  .then(addTodos)
  .catch(function(err){
    alert(err);
  })
});

function addTodos(todos){
  todos.forEach(function(todo){
    var newTodo = $('<li class="task">'+todo.name +'</li>');
    $('.list').append(newTodo);
  });
};
