let screen = document.querySelector('.grid-displays');
screen.style.gridTemplateColumns = 'repeat(16,1fr)';
screen.style.gridTemplateRows = 'repeat(16,1fr)';

for(let i = 0; i < 256; i++){
    let squares = document.createElement('div');
    squares.style.backgroundColor = "green";
    screen.insertAdjacentElement('beforeEnd',squares);
}