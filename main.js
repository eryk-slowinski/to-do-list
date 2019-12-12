const inputAdd = document.querySelector('div.add input');
const tasksList = document.querySelector('.taskslist');
const divCounter = document.querySelector('.counter');

const addTask = () => {
    if (inputAdd.value) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = inputAdd.value;
        deleteButton.textContent = '\xD7';
        tasksList.appendChild(li).appendChild(deleteButton);
    } else return;
    counter();
}

tasksList.onclick = (e) => {
    if (e.target.tagName === 'button') return;
    else e.target.parentNode.remove();
    counter();
}

const searchInList = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const liList = [...document.querySelectorAll('ul.taskslist li')].filter(li => li.textContent.toLowerCase().includes(searchValue));
}

const counter = () => {
    const numberOfTasks = document.querySelectorAll('ul.taskslist li').length;
    if (numberOfTasks === 0) divCounter.textContent = ""
    else if (numberOfTasks === 1) divCounter.textContent = `${numberOfTasks} task left`;
    else divCounter.textContent = `${numberOfTasks} tasks left`;
}

document.querySelector('div.add button').addEventListener('click', addTask);
document.querySelector('div.search input').addEventListener('input', searchInList);