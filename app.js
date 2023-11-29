const createButton = document.querySelector('.riddle__button')
const createText = document.querySelector('.riddle__text')


const riddle = () => {
    if (createButton.innerText === 'показать ответ') {
        createText.innerText = 'Телефон'
        createButton.innerText = 'скрыть ответ'
    }else {
        createText.innerText = 'По нему звоним и пишем,\n' +
            '        Без него не спим, не дышим.\n' +
            '        Он давно изобретен.\n' +
            '        Загадал я...'
        createButton.innerText = 'показать ответ'
    }
}

createButton.onclick = () => riddle()