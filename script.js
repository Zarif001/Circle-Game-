const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board');

let time = 0,
    score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        let elAttr = e.target.getAttribute('data-time');
        time = parseInt(elAttr)
        startGame()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide');
        board.innerHTML = `Ваш счет: ${score}!`
    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }

        timeEl.innerHTML = `00:${currentTime}`;
    }
}

function createRandomCircle() {
    const circle = document.createElement('div');

    circle.classList.add('circle');

    let {width, height} = board.getBoundingClientRect()

    let size = randomNumber(10, 60)


    let x = randomNumber(0, width - size)
    let y = randomNumber(0, height - size)

    circle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background:${randomColor()}
    `

    board.appendChild(circle)
}
let colors = ['red', 'white', 'purple', 'pink', 'yellow', 'green', 'purple', 'blue', 'brown', 'orange']

function randomColor(){
    let color = Math.floor(Math.random()* colors.length)
    return colors[color]
} 

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')){
        score++
        e.target.remove()
        createRandomCircle()
    }
})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


// const obj = {
//     name: 'John',
//     age: 30
// }

// let {name, age, secondName: secondName = 'johnson'} = obj

// console.log(secondName);


// let arr = ['1', '2', 'apple', 'pineapple'];

// let [index1, ...indexAll] = arr


// console.log(indexAll);