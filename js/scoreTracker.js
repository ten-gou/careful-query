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

    scores.push({
        name: nameEntry.value,
        correct_answers: correct_answers,
        totalAnswered: totalAnswered
    })

    console.log(scores)
}

const showScore = () => {
    while (main_body.hasChildNodes()) {
        main_body.removeChild(main_body.firstElementChild)
    }

    scores.forEach(score => makeScoreListing(score))
}

const makeScoreListing = (score) => {
    console.log(score)
} 