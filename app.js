// import functions and grab DOM elements

const currentPollEl = document.getElementById('current-poll-container');
const newPollEl = document.getElementById('new-poll');
const optionAAddButton = document.getElementById('')







// let state
let question = '';
let optionA = '';
let optionB = '';
let votesOne = 0;
let votesTwo = 0;
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
    
    renderPoll();

    displayCurrentPoll();

});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


function renderPoll(question, optionA, optionB, votesOne, votesTwo) {
    const currentPollEl = document.createElement('div');
    const questionEl = document.createElement('p');
    questionEl.textContent = question;
    const optionAEl = document.createElement('p');
    optionAEl.textContent = optionA;
    const optionBEl = document.createElement('p');
    optionBEl.textContent = optionB;
    const votesOneEl = document.createElement('p');
    votesOneEl.textContent = votesOne;
    const votesTwoEl = document.createElement('p');
    votesTwoEl.textContent = votesTwo;

    currentPollEl.append(questionEl, optionAEl, optionBEl, votesOneEl, votesTwoEl);

    return currentPollEl;

}

function displayCurrentPoll(){
    newPollEl.reset();
    const currentPollData = renderPoll(question, optionA, optionB, votesOne, votesTwo);
    currentPollEl.append(currentPollData);


}