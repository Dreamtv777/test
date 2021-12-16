let counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{

    counter.innerText = count;
    count++
    
    if(count > 5) location.replace('https://youtu.be/2bFUq9Z5ZIk')
    
},1000)
