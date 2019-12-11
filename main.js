const add = document.querySelector('.add');
const search = document.querySelector('.search');
const inputAdd = document.querySelector('form.add input');
const inputSearch = document.querySelector('form.search input');
const tasksList = document.querySelector('.taskslist');
const divCounter = document.querySelector('.counter');


// Funkcja dodająca zadania do listy i usuwająca je
const addTask = (e) => {
    e.preventDefault();
    // Stworzenie elementów li i p (element p posłuży do usuwania zadań z listy)
    const addLi = document.createElement('li');
    const addX = document.createElement('p');
    // Dodanie x formie indeksu górnego, ma to symulować znaczek zamknięcia/usunięcia
    addX.innerHTML = "<sup> x</sup>";
    // Przypisanie wartości z pola input do elementu li (będącego zadaniem na liście)
    addLi.innerHTML = inputAdd.value;
    // Warunek sprawdza czy w polu input coś się znajduje, jeśli to tak to dodaje w jednej linii element li z wpisanym przez użytkownika zadaniem i element p który pełni funkcję usuwania zadania
    if (inputAdd.value) tasksList.appendChild(addLi).appendChild(addX);
    allTasks = [...document.querySelectorAll('li')];
    const deleteTaskChars = document.querySelectorAll('p');
    // Poniższa funkcja iteruje po wszystkich elementach p i na tym który jest kliknięty, usuwa jego rodzica, co powoduje usunięcie zadania z listy (razem z elementem p).
    deleteTaskChars.forEach(index => index.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        counter();
    }));
    counter();
}

// Funkcja odpowiadająca za wyszukiwanie zadań na liście
const searchInList = (e) => {
    e.preventDefault();
    // Pobranie wartości z pola input do zmiennej i zamiana jej na małe znaki
    const search = inputSearch.value.toLowerCase();
    // Utworzenie tablicy z listy zadań celem zastosowania metody 'filter'
    let liList = [...document.querySelectorAll('li')];
    // Metoda przeszukuje tablicę z zadaniami poszukując wartości z pola input
    liList = liList.filter(li => li.textContent.toLowerCase().includes(search));
    // Jeśli w liście zadań znajdzie element pasujący do wartości wpisanej przez użytkownika, pogrubi czcionkę pasującego zadania
    if (search === "") liList.forEach(li => li.style.fontWeight = "normal");
    else liList.forEach(li => li.style.fontWeight = "bold");
}

// Funkcja licząca i wyświetlająca ile mamy zadań na liście
const counter = () => {
    let numberOfTasks = [...document.querySelectorAll('li')].length;
    if (numberOfTasks === 0) divCounter.textContent = ""
    else if (numberOfTasks === 1) divCounter.textContent = `${numberOfTasks} task left`;
    else divCounter.textContent = `${numberOfTasks} tasks left`;
}

// Nasłuchiwanie na kliknięcie w buttony (wysłanie formularza), pierwszy to dodanie zadania, drugi to wyszukiwanie zadania
add.addEventListener('submit', addTask);
search.addEventListener('submit', searchInList);