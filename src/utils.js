export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
};

export function getEvent(event){
    if (event === 'menu_module-1'){
        countClicks();
    } else if (event === 'menu_module-2'){
        createFigure();
    } else if (event === 'menu_module-3'){
        document.body.style.backgroundColor = getColor();
    } else if (event === 'menu_module-4'){
        showMessage();
    }
};

function getColor(){
    const rgbLetters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += rgbLetters[Math.floor(Math.random() * 16)]
    };
    return color;
};


function countClicks(){
    let numberOfClicks = 0;
    document.body.addEventListener('click', event => {
        numberOfClicks ++;
    })
    setTimeout(() => {return alert(`Вы совершили ${numberOfClicks} кликов!`)}, 3000)
};


function createFigure(){

};

function showMessage(){

};