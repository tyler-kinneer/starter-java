//starter-js

const one = document.getElementById('alert');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');

const ball = document.getElementById('ball');

const output = document.getElementById("output");


const button1 = () => {
    alert('hello');
}

const buttondown2 = () => {
    ball.style.bottom = '100px';
}

const buttonup2 = () => {
    ball.style.bottom = '500px';
}

const button3 = () => {
    output.textContent = `Output: figured it out.`;
}

const button4 = () => {
    output.innerHTML = 'Output:';
}

one.addEventListener('click', button1);

two.addEventListener('mousedown', buttondown2);
two.addEventListener('mouseup', buttonup2);

three.addEventListener('click', button3);

four.addEventListener('click', button4);