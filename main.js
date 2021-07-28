let acc_arr = document.querySelectorAll('.acc_arr');
let txt = document.querySelector('.txt');
let info = document.querySelector('.info');
let accordion_1 =  document.querySelector('.accordion_1');
let accordion_2 =  document.querySelector('.accordion_2');
let accordion_3 =  document.querySelector('.accordion_3');

acc_arr.forEach(acc => {

    acc.addEventListener('click', (e) => {

        if(e.target.classList.contains('active')){

            e.target.parentElement.parentElement.children[1].classList.remove('active');
            e.target.classList.remove('active');
            e.target.previousElementSibling.innerHTML = 'Open';

        } else {

            e.target.parentElement.parentElement.children[1].classList.add('active');
            e.target.classList.add('active');
            e.target.previousElementSibling.innerHTML = 'Close'; 

        }

        if(e.target.parentElement.parentElement.classList.contains('accordion_1')){
        
           accordion_2.children[0].children[1].classList.remove('active');
           accordion_2.children[0].children[0].innerHTML = 'Open';
           accordion_2.children[1].classList.remove('active');

           accordion_3.children[0].children[1].classList.remove('active');
             accordion_3.children[0].children[0].innerHTML = 'Open';
             accordion_3.children[1].classList.remove('active');

        } else if (e.target.parentElement.parentElement.classList.contains('accordion_2')) {

           accordion_3.children[0].children[1].classList.remove('active');
           accordion_3.children[0].children[0].innerHTML = 'Open';
           accordion_3.children[1].classList.remove('active');

            accordion_1.children[0].children[1].classList.remove('active');
           accordion_1.children[0].children[0].innerHTML = 'Open';
            accordion_1.children[1].classList.remove('active');
         
        } else {

            accordion_1.children[0].children[1].classList.remove('active');
            accordion_1.children[0].children[0].innerHTML = 'Open';
            accordion_1.children[1].classList.remove('active');

            accordion_2.children[0].children[1].classList.remove('active');
            accordion_2.children[0].children[0].innerHTML = 'Open';
            accordion_2.children[1].classList.remove('active');
         
        }
        
    });

});