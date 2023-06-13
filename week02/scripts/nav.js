const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    const chapter = input.value.trim();

    if (chapter === '') {
        input.focus();
        return;
    }

    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    listItem.textContent = chapter;
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener('click', function() {
        listItem.remove();
        input.focus();
    });

    input.focus();
    input.value = '';
});
