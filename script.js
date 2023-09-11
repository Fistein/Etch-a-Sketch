
function sketch(data){
let screen = document.querySelector('.grid-displays');
let gridz = screen.querySelectorAll('div');
gridz.forEach((div) => div.remove());
screen.style.gridTemplateColumns = `repeat(${data},1fr)`;
screen.style.gridTemplateRows = `repeat(${data},1fr)`;;
let area = data * data;

let clear_button = document.querySelector('.Clear');

for(let i = 0; i < area; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', () => 
    {
       
     square.style.backgroundColor = `RGB(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;  
    });
   
    clear_button.addEventListener('click', () => {
    square.style.backgroundColor = 'white';
            
        });
        
    screen.insertAdjacentElement('beforeEnd',square);
}

}

function adjustment(size){
    let equal = size + 0;
    if(size < 0 || size > 100){
        console.log('Enter a number between 1 and 100') ;
    }
    else{
        sketch(size);  
    }
    
}

const clickbutton = document.querySelector('.adjust');
clickbutton.addEventListener('click', adjustment)



let modal = document.getElementById('grid-form');
let overlay = document.querySelector('#overlay');

function Open_modal(){
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

const set_button = document.querySelector('.send');
set_button.addEventListener('click', () => {
    
    modal.style.display = 'none';
    overlay.style.display = 'none';  
        
    });
  
let close_pop = document.querySelector('.close-btn');
close_pop.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

