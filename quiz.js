const queOBJ =
{
    Category: 'Food and drinks',
    id: 'qa-1',
    correctanswer: 'three',
    options: ['one', 'two', 'three', 'four','five'],
    questions: 'How many peices of bun in Macdonald Big mac?'
};


const questionel = document.getElementById('questions');
const optionel = document.getElementById('options');
const scoreel = document.getElementById('score');






const { correctanswer, questions, options } = queOBJ;



questionel.textContent = questions;

options.forEach((op) => {
    const button = document.createElement('button');
    button.textContent = op;
    optionel.appendChild(button);
})

