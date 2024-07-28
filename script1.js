document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const task = input.value.trim();
        if (task !== '') {
            addTask(task);
            input.value = '';
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const task = input.value.trim();
            if (task !== '') {
                addTask(task);
                input.value = '';
            }
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
