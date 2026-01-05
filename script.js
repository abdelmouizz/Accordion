let buttons = document.querySelectorAll('.ques');
let answers = document.querySelectorAll('.answ');


buttons.forEach((btn, index) =>{
    btn.addEventListener('click', ()=>{
        if(answers[index].classList.contains('active')){
            answers[index].classList.remove('active');
        } else {
            answers[index].classList.add('active');
        }
    })
})