const todos = () => {
    fetch('../todos.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data.todos.map((data) => data));
        let ul = document.querySelector('#todos');
        let li = document.createElement('li');
        data.todos.map((todo) => {
            createTodo(todo.title, todo.completed);
        });
    });
}

const createTodo = (title, completed) => {
    let ul = document.querySelector('#todos');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(title));
    ul.appendChild(li);

    if (completed) {
        li.classList.toggle('checked');
    }
}

todos();