const scores = [];

const logScore = () => {
    if (question_number - 1 >= 0) {
        var totalAnswered = question_number - 1;
    }
    else {
        var totalAnswered = 0;
    }

    const nameEntry = document.querySelector('input');
    // console.dir(nameEntry.value) returns the input value of the nameEntryEl

    if (!nameEntry.value) {
        scores.push({
            name: `Anonymous`,
            correct_answers: correct_answers,
            totalAnswered: totalAnswered
        })
    }
    else {
        scores.push({
            name: nameEntry.value,
            correct_answers: correct_answers,
            totalAnswered: totalAnswered
        })
    }
    

    console.log(scores)
}

const showScore = () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstElementChild)
    }

    const tableHeader = document.createElement('div');
    tableHeader.className = 'flex grid grid-cols-2 bg-violet-200 rounded-lg';

    const nameHeader = document.createElement('div');
    nameHeader.textContent = `NAME`;
    nameHeader.className = ``;

    const scoreHeader = document.createElement('div');
    scoreHeader.textContent = `TOTAL SCORE`;
    scoreHeader.className = ``


    tableHeader.appendChild(nameHeader);
    tableHeader.appendChild(scoreHeader);
    main_body.appendChild(tableHeader);

    scores.forEach(score => makeScoreListing(score))

    const homeButtonEl = document.createElement('div');
    homeButtonEl.textContent = `Return to the Main Menu!`;
    homeButtonEl.className = `bg-indigo-300 p-8 my-4 lg:w-1/5 md:w-1/4 sm:w-1/3 rounded-2xl hover:bg-indigo-400 mx-auto text-white`;
    homeButtonEl.setAttribute(`onclick`, `startMenu()`);

    main_body.appendChild(homeButtonEl);
}

const makeScoreListing = (score) => {
    console.log(score)

    const scoreListing = document.createElement('div');
    scoreListing.className = 'flex grid grid-cols-2 bg-violet-100';

    const nameBlock = document.createElement('div');
    nameBlock.textContent = score.name;

    const scoreBlock = document.createElement('div');
    scoreBlock.textContent = `${score.correct_answers}/${score.totalAnswered}`;

    scoreListing.appendChild(nameBlock);
    scoreListing.appendChild(scoreBlock);
    main_body.appendChild(scoreListing)
}

const disableScore = () => {
    console.log('Currently disabled!');
}