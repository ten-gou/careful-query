const main_body = document.getElementById('main_body');

var question_number = 0; // sets a question number function

// Title + Blurb + start button
const start_menu =  () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstChild);
    }

    // Title + Blurb
    const head_div = document.createElement('div');
    const title = document.createElement('h1');
    const explanation = document.createElement('p');

    title.textContent = 'CODING QUIZ';
    explanation.textContent = 'Welcome to the coding quiz! Here we will test your ability to code with a quick quiz! Click below to begin';

    head_div.appendChild(title);
    head_div.appendChild(explanation);
    main_body.appendChild(head_div);

    const button = document.createElement('div');

    button.textContent = 'START TEST';
    button.setAttribute("onclick", 'questionlist(this)');

    main_body.appendChild(button);
};

const questionlist = () => {
    question_number++

    console.log(question_number);

    var current_question = questionArray[question_number - 1]
    console.log(current_question);

    const current_answers = [current_question.ans1.text, current_question.ans2.text, current_question.ans3.text, current_question.ans4.text];

    console.log(current_answers);
    console.log(current_question.ans1.text)
    console.log(current_question.ans2.text)
    console.log(current_question.ans3.text)
    console.log(current_question.ans4.text)

    current_answers.forEach(make_button())
    //for each question's length of data, run button
};

start_menu();

const make_button = () => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const div = document.createElement('div');

    

    li.appendChild(div);
    ul.appendChild(li);
    main_body.appendChild(ul);
}

const question1 = {
    question: "What is a common script to build websites with?",
    ans1: {
        text: "HTML",
        correct: true,
    },
    ans2: {
        text: "HSML",
        correct: false,
    },
    ans3: {
        text: "Popluck",
        correct: false,
    },
    ans4: {
        text: "Hotrocco",
        correct: false,
    },
}
const question2 = {
    question: "What does CSS stand for?",
    ans1: "Cascading Stylistic Software",
    ans2: "Cascading Style Sheets",
    ans3: "Calling Simple Styles",
    ans4: "Chinese Style Spreads",
    correctans: 2
}
const question3 = {
    question: "When using Git to push changes to Github, what commands do you input?",
    ans1: "Git add <file>, Git push origin <branch>, Git commit -m '<message>'",
    ans2: "Git commit -m '<message>', Git add <file>, Git push origin <branch>",
    ans3: "Git commit -m '<message>', Git push origin <branch>, Git add <file>",
    ans4: "Git add <file>, Git commit -m '<message>', Git push origin <branch>",
    correctans: 4
}
const question4 = {
    question: "A common javascript library is:",
    ans1: "HeadwindCSS",
    ans2: "BootLace",
    ans3: "JQuery",
    ans4: "Money",
    correctans: 3
}

const questionArray = [question1, question2, question3, question4];

console.log(questionArray);
// console.log(question[1]) // n returns question n-1 and their values
// console.log(question[1].correctans) // returns the ans number of the value