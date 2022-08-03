// import functions and grab DOM elements

const currentPollEL = document.getElementById('current-poll-container');
const newPollEl = document.getElementById('new-poll');




// let state
let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;
let pastPolls = [];
// set event listeners 
newPollEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(newPollEl);
    const userQuestion = data.get('question');
    const userOptionA = data.get('option-A');
    const userOptionB = data.get('option-B');

    question = userQuestion;
    optionA = userOptionA;
    optionB = userOptionB;
    votesA = userVotesA;
    VotesB = userVotesB;

    renderPoll();
    displayCurrentPoll();

});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  function renderPoll()