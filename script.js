const testBtn = document.getElementById('test-button');

const fontSize = document.getElementById('font-size');
const btnLabel = document.getElementById('btn-label');

const fontColor = document.getElementById('font-color');
const bgColor = document.getElementById('bg-color');
const borderColor = document.getElementById('border-color');

const pTop = document.getElementById('top');
const pRight = document.getElementById('right');
const pBottom = document.getElementById('bottom');
const pLeft = document.getElementById('left');

const borderWidth = document.getElementById('border-width');
const borderRadius = document.getElementById('border-radius');


fontSize.oninput = (e) => {
    if (e.target.value < 8) {e.target.value = 8; return false;}
    if (e.target.value > 50) {e.target.value = 50; return false;}

    else testBtn.style.fontSize = `${e.target.value}px`;
};

btnLabel.oninput = (e) => {
    testBtn.innerHTML = `${e.target.value}`;
};

fontColor.oninput = (e) => {
    testBtn.style.color = e.target.value;
};

bgColor.oninput = (e) => {
    testBtn.style.backgroundColor = e.target.value;
};

borderColor.oninput = (e) => {
    testBtn.style.borderColor = e.target.value;
};

pTop.oninput = (e) => {
    testBtn.style.paddingTop = `${e.target.value}px`;
};

pRight.oninput = (e) => {
    testBtn.style.paddingRight = `${e.target.value}px`;
};

pBottom.oninput = (e) => {
    testBtn.style.paddingBottom = `${e.target.value}px`;
};

pLeft.oninput = (e) => {
    testBtn.style.paddingLeft = `${e.target.value}px`;
};

borderWidth.oninput = (e) => {
    testBtn.style.borderWidth = `${e.target.value}px`;
};

borderRadius.oninput = (e) => {
    testBtn.style.borderRadius = `${e.target.value}px`;
};


