const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

const addGoal = () => {
    let createText = inputEl.value;
    let listItemEl = document.createElement('li');
    listItemEl.textContent = createText;
    listEl.appendChild(listItemEl);
    inputEl.value = '';
    window.scrollTo(0, document.body.scrollHeight);
}

buttonEl.addEventListener('click', addGoal);

