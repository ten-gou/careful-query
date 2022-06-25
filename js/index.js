const main_body = document.getElementById('main_body');

const ulEl = document.createElement('ul');

var question_number = 0; // sets a question number function
var correct_answers = 0; // sets a tracker for how many correct answers you received

// Title + Blurb + start button
const startMenu =  () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstChild);
    }

    const timeCounterEl = document.getElementById('timer');
    timeCounterEl.textContent = `Timer Here ^w^`;

    // Title + Blurb
    const head_div = document.createElement('div');
    const title = document.createElement('h1');
    const explanation = document.createElement('p');

    title.textContent = 'Welcome to the Coding Quiz!';
    title.className = `justify-self-center py-2 text-amber-500 font-mono font-bold text-4xl border-b-indigo-400 border-b-4 m-2`;

    explanation.textContent = `Welcome to the coding quiz! Here we will test your ability to code with a quick quiz! Click the button below to begin!`;
    explanation.className = `mb-24 mt-6 px-24`;

    head_div.appendChild(title);
    head_div.appendChild(explanation);
    main_body.appendChild(head_div);

    const button = document.createElement('div');

    button.textContent = 'START TEST';
    button.setAttribute("onclick", 'questionlist(this)');
    button.className = "bg-indigo-300 p-8 my-4 lg:w-1/5 md:w-1/4 sm:w-1/3 rounded-2xl hover:bg-indigo-400 mx-auto text-white";

    main_body.appendChild(button);
};

// Creates the Quiz answers and Questions
const questionlist = () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstElementChild)
    }

    while (ulEl.hasChildNodes()) {
        ulEl.removeChild(ulEl.firstElementChild)
    }

    if (question_number == 0) {
        timer();
    }

    // Question Number FXN
    question_number++;
    console.log(question_number);

    // Length of the Quiz
    const quiz_length = questionArray.length + 1;

    if (question_number >= quiz_length) {
        console.log("DONE!");
        resultScreen();
    }
    else {
        // Pulls the current question from the question array
        const current_question = questionArray[question_number - 1];
        console.log(current_question);

        let current_question_text = current_question.question;
        console.log(current_question_text)

        const questionEl = document.createElement('div');

        questionEl.textContent = `Question ${question_number}: ${current_question_text}`;
        questionEl.className = 'italic m-4 p-4'

        // pulls the answers from the current question and their correct status
        let current_answers = [current_question.ans1, current_question.ans2, current_question.ans3, current_question.ans4];

        //for each question's length of data, run button
        current_answers.forEach(answer => makeButton(answer));

        main_body.appendChild(questionEl);
        main_body.appendChild(ulEl);
    }
};

// Creates the result screen, where you can view the answer
const resultScreen = () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstElementChild)
    }

    const timeCounterEl = document.getElementById('timer');
    timeCounterEl.textContent = `DONE!`;

    const scoreEl = document.createElement('div');
    const homeButtonEl = document.createElement('div');

    scoreEl.textContent = `Congratulations! You received a score of ${correct_answers} correct answers out of ${question_number - 1} answered questions!`;
    scoreEl.className = `p-4 m-4`

    homeButtonEl.textContent = `Try Again?`;
    homeButtonEl.className = `bg-indigo-300 p-8 my-4 lg:w-1/5 md:w-1/4 sm:w-1/3 rounded-2xl hover:bg-indigo-400 mx-auto text-white`

    homeButtonEl.setAttribute(`onclick`, `returnHome()`);

    main_body.appendChild(scoreEl);
    main_body.appendChild(homeButtonEl);

}

// returns the user back to the home screen
const returnHome = () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstElementChild)
    }
    resetScores();
    startMenu();
}

// resets the scores back to 0, so that the test can be taken again
const resetScores = () => {
    question_number = 0; // resets the question number variable when you return to the startMenu
    correct_answers = 0; // resets correct answer tracker

    return { question_number, correct_answers };
}

// FXN to make answer buttons for the questions
const makeButton = (data) => {
    // console logs the answer - data.text, and data.correct
    // console.log(data)

    const liEl = document.createElement('li');
    const answerButtonEl = document.createElement('div');
    const answerTextEl = document.createElement('p');

    answerTextEl.textContent = data.text;
    answerTextEl.className = `w-full text-center`

    answerButtonEl.setAttribute('correct', data.correct);
    answerButtonEl.setAttribute('onclick', 'verifyAnswer(this)');
    answerButtonEl.className = "bg-indigo-300 rounded-2xl hover:bg-indigo-400 my-4 p-4 text-white";

    answerButtonEl.appendChild(answerTextEl);
    liEl.appendChild(answerButtonEl);
    ulEl.appendChild(liEl);
}

// This checks whether the answers are correct and increases the correct answer tracker if so
const verifyAnswer = (data) => {    
    const truth = data.attributes[0].textContent;

    if (truth == 'false') {
        console.log(`I'm sorry, but the answer you chose was incorrect!`);
        console.log(correct_answers);
    }
    else {
        console.log(`Congratulations! The answer: ${data.textContent} was correct!`)
        correct_answers++;
        console.log(correct_answers);
    }

    questionlist();
}

startMenu();