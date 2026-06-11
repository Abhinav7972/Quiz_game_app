const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];
   
let score = 0;
let currentquestion = 0;


const questionel = document.getElementById('questions');
const optionel = document.getElementById('options');
const scoreel = document.getElementById('score');
const nextbtn = document.getElementById('next');
const restartbtn = document.getElementById('restart');
const prevbtn = document.getElementById('prev');



function showquestion()
{
  if (
    currentquestion < 0 ||
    currentquestion >= quesJSON.length
) {
    return;
}

 
    const { correctAnswer, question, options } = quesJSON[currentquestion];
    questionel.textContent = question;
    
    const shuffledOptions = shuffleoptions([...options]);
    optionel.innerHTML = ''; // Clear previous options

  
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement('button');
        btn.classList.add('btn');
    btn.textContent = opt;
    
       
        btn.addEventListener('click', () => {
            if (opt == correctAnswer)
            {
                score++;
              scoreel.textContent = score;
                btn.style.backgroundColor = 'green';
              btn.style.color = 'white';
            }
            else   
            {
                score = score - 0.25;
              scoreel.textContent = score;
                btn.style.backgroundColor = 'red';
              btn.style.color = 'white';
          }


          const optbtn =  optionel.querySelectorAll('.btn');

           //console.log(optbtn.length);

          optbtn.forEach((btn) => {
            btn.disabled = true;
           })
       
        })
    
    
      
    
         
        optionel.appendChild(btn);
    });
    
   

}

nextbtn.addEventListener('click', () => {
    currentquestion++;
    if (currentquestion < quesJSON.length) {
        showquestion();
    } else {
      questionel.textContent = "Quiz Completed!";
         scoreel.textContent = `Total Score : ${score}`
      optionel.style.display = 'none';
      nextbtn.style.display = 'none';
      restartbtn.style.display = 'block';
      showquestion();
    }
});


prevbtn.addEventListener('click', () => {
  if (currentquestion < quesJSON.length && currentquestion >0) {
    currentquestion--;
    showquestion();
  }
 

});


restartbtn.addEventListener('click', () => {
  currentquestion = 0;
  score = 0;
  scoreel.textContent = score;
  optionel.style.display = 'flex';
  nextbtn.style.display = 'block';
  restartbtn.style.display = 'none';
  showquestion();
})

showquestion();


   

function shuffleoptions(options)
{
     for (let i = options.length-1; i >=0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    return options;
}
