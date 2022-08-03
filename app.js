// import functions and grab DOM elements

const currentPollEl = document.getElementById('current-poll-container');
const newPollEl = document.getElementById('new-poll');
const optionAAddButton = document.getElementById('option-a-add-button');
const optionASubtractButton = document.getElementById('option-a-subtract-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionBSubtractButton = document.getElementById('option-b-subtract-button');
const finishPollButton = document.getElementById('finish-poll-button');
const pastPollsContainer = document.getElementById('past-poll-container');




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

optionAAddButton.addEventListener('click', () => {
    votesOne++;
    
    displayCurrentPoll();

});

optionBAddButton.addEventListener('click', () => {
    votesTwo++;
   
    displayCurrentPoll();
});

optionASubtractButton.addEventListener('click', () => {
    votesOne--;
    
    displayCurrentPoll();

});

optionBSubtractButton.addEventListener('click', () => {
    votesTwo--;
    
    displayCurrentPoll();
});

finishPollButton.addEventListener('click', () => {
    pastPollsContainer.textContent = '';
    displayPastPolls();
    votesOne = 0;
    votesTwo = 0;
    currentPollEl.textContent = '';


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

function displayPastPolls() {
    const pastPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesOne: votesOne,
        votesTwo: votesTwo,
    };
    pastPolls.push(pastPoll);
  
    for (let poll of pastPoll) {
        const currentPastPoll = renderPoll(poll.question, poll.optionA, poll.optionB, poll.votesOne, poll.votesTwo);
        pastPollsContainer.append(currentPastPoll);
    }
}
