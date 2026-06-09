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

        questionel.textContent = `quiz completed`
        optionel.textContent = '';
        optionel.style.display = 'none';
    })

    document.addEventListener('DOMContentLoaded', () => {
        // 1. Select the container holding your buttons and the buttons themselves
    const container = document.querySelector('.quiz-cont'); // Change to your actual container class/id
    const optionsArray = Array.from(container.querySelectorAll('button')); // Convert NodeList to Array

    // 2. Shuffle the array using the Fisher-Yates algorithm (much more reliable)
    for (let i = optionsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }

    // 3. Clear the container and append the elements in their new order
    container.innerHTML = '';
    optionsArray.forEach(option => container.appendChild(option));
    })

    optionel.appendChild(button);
})





