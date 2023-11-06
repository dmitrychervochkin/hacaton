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
    const numberHTML = document.createElement('h1');
    numberHTML.style.textAlign = 'center';
    document.body.append(numberHTML);
    
    document.body.addEventListener('click', event => {
        numberOfClicks ++;
        
        numberHTML.textContent = numberOfClicks;
        numberHTML.style.fontSize = '400px';
        document.body.style.WebkitTtouchCallout = 'none';
        document.body.style.WebkitUserSelect = 'none';
        document.body.style.KhtmlUserSelect = 'none';
        document.body.style.MozUserSelect = 'none';
        document.body.style.MsUserSelect = 'none';
        document.body.style.userSelect = 'none';
    })
    
    setTimeout(() => {
        numberHTML.style.fontSize = '50px';
        return numberHTML.textContent = `Вы совершили ${numberOfClicks} кликов!`;
    }, 3000)
    return numberHTML.textContent = '';
};


function createFigure(){

};

function showMessage(){

};