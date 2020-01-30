
let size = 10;

const ul = document.querySelector('ul');
const li = document.querySelector('li');
const liItems = document.querySelectorAll('li');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    
                liItems.forEach((li)=>{
                li.style.display = 'block';
                li.style.fontSize = size + 'px';
                
            });
                size ++;
                
            
})

