const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){

    if (input.value == ''){
        input.focus();
        document.querySelector('#error').classList.add('show');
        return;
    }

    document.querySelector('#error').classList.remove('show');

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = 'Remove ' + input.value;

    li.append(deleteButton);

    list.append(li);

    deleteButton.addEventListener('click', function(){
        li.remove();
    })

    input.focus();
    input.value = '';
});