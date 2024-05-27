let turn_OnOff = document.getElementById('turn_OnOff');
let image = document.getElementById('image');

isOff = false;

function bulb() {
    isOff = !isOff;
    if (isOff) {
        turn_OnOff.innerText = 'TURN OFF';
        image.src = './bulb-on.png';
    }
    else {
        turn_OnOff.innerText = 'TURN ON';
        image.src = './bulb-off.png';
    }
}