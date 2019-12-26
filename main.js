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
    if (e.target.tagName !== 'BUTTON') return;
    else e.target.parentNode.remove();
    counter();
}

const searchInList = (e) => {
    [...document.querySelectorAll('ul.taskslist li')].forEach(li => li.classList.remove('active'));
    const searchValue = e.target.value.toLowerCase();
    const liList = [...document.querySelectorAll('ul.taskslist li')].filter(li => li.textContent.toLowerCase().includes(searchValue));
    if (searchValue !== "") liList.forEach(li => li.classList.add('active'));
}

const counter = () => {
    const numberOfTasks = document.querySelectorAll('ul.taskslist li').length;
    if (numberOfTasks === 0) divCounter.textContent = ""
    else if (numberOfTasks === 1) divCounter.textContent = `${numberOfTasks} task left`;
    else divCounter.textContent = `${numberOfTasks} tasks left`;
}

document.querySelector('div.add button').addEventListener('click', addTask);
inputAdd.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) addTask();
});
document.querySelector('div.search input').addEventListener('input', searchInList);