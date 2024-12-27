const original_answer = {
     q1:"Sachin Tendulkar",
     q2:"England",
     q3:"Sachin Tendulkar",
     q4:"264",
     q5:"Muttiah Muralitharan"
};

const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
     event.preventDefault();
     const data = new FormData(form);

let result = 0;
let wrong =0;
for(let [key,value] of data.entries())
{
   if(value === original_answer[key])
   {
     result++;
   }
   else
   {
      wrong++;
   }
}

const total = document.getElementById("Total");
const correct = document.getElementById("Correct");
const Attempted = document.getElementById("Attempted");
const Wrong = document.getElementById("Wrong");
total.innerText = 5;
correct.innerText = result;
Attempted.innerText = result+wrong;
Wrong.innerText = wrong;
form.reset();
})

 