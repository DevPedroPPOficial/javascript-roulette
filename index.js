const wheelAmount = 50;

function buildRoulette() {
    const wheelLength = 2 * 3.14 * 365;

    for (let i = 0; i < wheelAmount; i++) {
        const deg = (360 / wheelAmount) * i;
        const l = wheelLength / wheelAmount;
        addRouletteWheel(deg, l);
    }
}

function addRouletteWheel(deg, wheelLength) {
    const newRouletteWheel = document.createElement('div');

    newRouletteWheel.className = 'roulette-wheel';
    newRouletteWheel.style.transform = `rotate(${deg}deg)`;
    newRouletteWheel.style.transformOrigin = 'top';
    newRouletteWheel.style.borderLeft = `${wheelLength / 2}px solid transparent`;
    newRouletteWheel.style.borderRight = `${wheelLength / 2}px solid transparent`;
    newRouletteWheel.style.borderBottom = `350px solid ${getRandomRGB()}`;

    const rouletteEl = document.getElementById('main-roulette');
    rouletteEl.appendChild(newRouletteWheel);
}

function startSpinning() {
    const minDeg = 36000;
    const maxDeg = 36360;
    const randomDeg = Math.round(Math.random() * (maxDeg - minDeg) + minDeg);

    const rouletteEl = document.getElementById('main-roulette');
    rouletteEl.style.transition = null;
    rouletteEl.style.transform = 'rotate(0deg)';

    setTimeout(() => {
        rouletteEl.style.transition = 'transform 2500ms ease-out';
        rouletteEl.style.transform = `rotate(${randomDeg}deg)`;
    }, 50);
}

function getRandomRGB() {
    const getColor = () => {
        return Math.round(Math.random() * 255);
    }

    return `rgb(${getColor()},${getColor()},${getColor()})`;
}

window.onload = function () {
    buildRoulette();
}
