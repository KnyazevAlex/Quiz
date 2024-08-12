// popup //
const body= document.querySelector('body');
const popup= document.querySelector('.popup-wrapper');
const close= document.querySelector('.popup-close')
const agree= document.querySelector('.agree')
body.style.overflow='visible'
setTimeout(() => {
    popup.style.display='flex'
    body.style.overflow='hidden'
}, 3000);
    agree.addEventListener('click', ()=>{
        popup.style.display = 'none'
        body.style.overflowY='visible'
    })
     close.addEventListener('click',()=>{
        location.href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtAbaOtAK-rD87TC4GG7-Znvtdfyrg_vupw&s';
         
     } )
     
   


    // userform //
const form = document.querySelector('.quizform');
const userscore= document.querySelector('.score');
const answers= ['C', 'A', 'A', 'C','D','A','B','A','A','C'];
const handle= document.querySelector('.handle')
let score= 0;

    form.addEventListener('submit', e=>{
        e.preventDefault();
       
        const useranswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
        useranswers.forEach((answer,index)=>{
             if(answer===answers[index]){
                score+=10
             }
            
        });

        // console.log(score);
        userscore.classList.remove('d-none');
        userscore.classList.add('lexend2')
        userscore.classList.add('scoreclass');
        handle.textContent=`${score}%`;
        scroll(0,0);
        let i= 0;
        let timer= setInterval(()=>{
        handle.textContent=`${i}%`;
            if(i === score){
             clearInterval(timer)
            }
            else{
                i++;
            }
        },25)
    })
    // animating the score //
//   let i=0;
//   let timer =setInterval(()=>{
//     console.log(i)
//     i++
//   if(i === 10){
//     clearInterval(timer)
//   }
//   },10)

    
