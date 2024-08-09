let musica = new Audio('./bb.mp3')
playbutton.addEventListener('click', ()=>{
    musica.play();
});

stopbutton.addEventListener('click', ()=>{
    musica.pause();
});