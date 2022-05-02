
const main_body = document.getElementById('main_body');

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
};

const questionlist = () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstChild);
    }

    //for each question's length of data, run button
};

start_menu();