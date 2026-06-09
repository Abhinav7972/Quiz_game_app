const queOBJ =
{
    Category: 'Food and drinks',
    id: 'qa-1',
    correctanswer: 'three',
    options: ['one', 'two', 'three', 'four','five'],
    questions: 'How many peices of bun in Macdonald Big mac?'
};

    let score = 0;


const questionel = document.getElementById('questions');
const optionel = document.getElementById('options');
const scoreel = document.getElementById('score');






const { correctanswer, questions, options } = queOBJ;



questionel.textContent = questions;

options.forEach((op) => {
    const button = document.createElement('button');
    button.textContent = op;
  
    button.addEventListener('click', () => {
        if (op == correctanswer)
        {
            score++;
            scoreel.textContent = score;
            button.disabled = true;
        }

        else
        {
            score = score - 0.25;
            scoreel.textContent = score;
            button.disabled = true;
        }
    })

    optionel.appendChild(button);
})


