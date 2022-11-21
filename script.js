const chevron = document.querySelector('.toggleButton');
const text = document.querySelector('text');

chevron.addEventListener('click',(e)=>{
    text.classList.toggle('toggle-text');
})