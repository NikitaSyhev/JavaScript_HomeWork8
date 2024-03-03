
alert("Catch All Bugs!");



const beetleMove = document.querySelector('.beetle-move');
const buttonRestart = document.querySelector('#button-restart');
const mainScreen = document.querySelector('#main-screen');

//константы размерности
const screenSize = 500;
const bugSize = 50;

//счетчик жуков
 let bugsCounter = 5;

//вызвали функцию, чтобы жуки создавались при загрузке страницы
createBugs();


//удаление жука
mainScreen.addEventListener('click', e=> {
    if(e.target.classList.contains('beetle-move')) {
         e.target.remove();
        --bugsCounter;
        if(bugsCounter == 0) {
            alert('You win!');
        }
    }
});

//кнопка рестарта 
buttonRestart.addEventListener('click', ()=> {
    bugsCounter = 5;
    removeAllBugs();
    createBugs();
});

//генерируем случайное число в диапазоне, чтобы жуки не выходили за предел экрана
function generateRandomNumber() {  
    return Math.floor(Math.random() * ((screenSize - bugSize) - bugSize + 1)) + bugSize;
};


//функция генерации жуков, с предварительным удалением
function createBugs() {
    //в цикле создали 5 жуков
    removeAllBugs();
    //создаем жуков, в количестве bugsCounter
    for(let i = 0; i < bugsCounter; ++i) {
        let newBeetle = document.createElement('img');
        newBeetle.className = 'beetle-move';

        newBeetle.src = 'images/bet.png';
        newBeetle.style.width = `${bugSize}px`;
        newBeetle.style.height = `${bugSize}px`;
        newBeetle.style.position = 'absolute'; //чтобы жуки вышли их потока
        //задали свойства top и left рандомно
        newBeetle.style.left = `${generateRandomNumber()}px`;
        newBeetle.style.top = `${generateRandomNumber()}px`;
        mainScreen.appendChild(newBeetle);
        }
        
}


//функция удаления всех жуков
function removeAllBugs() {
    const bugs = document.querySelectorAll('.beetle-move');
    bugs.forEach(bug => {
    bug.remove();
});
}


//setinterval для удаления жуков
setInterval(() => {
    createBugs();
},1600);