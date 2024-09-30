const startBtn = document.getElementById('startbtn');
const closeBtn = document.getElementById('closebtn')
const overlayCont = document.getElementById('secondlayer');

startBtn.addEventListener('click',()=>{
overlayCont.classList.remove('overlay');
overlayCont.classList.add('show')
}
)

closeBtn.addEventListener('click', ()=>{
    overlayCont.classList.remove('show');
overlayCont.classList.add('overlay')
})