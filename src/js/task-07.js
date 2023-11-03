const font = document.getElementById('font-size-control');
const text = document.getElementById('text');

font.addEventListener('input', function(){
    text.style.fontSize = font.value + 'px'
})