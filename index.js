let button = document.getElementById('button');
let targetDiv = document.getElementById('randoSquare');

colorValue = () => {
    return Math.floor(Math.random() * 256);
}

colorChange = () => {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    targetDiv.style.backgroundColor = randomColor;
    document.getElementById('colorText').textContent = randomColor;
}

button.onclick = colorChange;

let hexCode = targetDiv.style.getPropertyValue('margin');
console.log(hexCode);
