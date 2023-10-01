const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');

const play_rnd_btn = document.querySelector('#playrnd');

const score_count_element = document.querySelector('.score-count');

const user_message_element = document.querySelector('.user-msg');
const choice_message_element = document.querySelector('.choice-msg');

let score_count = 0;
let selected_user_input;

function get_computer_choice() {
    //Returns a random value between 1 and 3
    let rand_choice = Math.floor((Math.random() * 3)+1);
    switch(rand_choice) {
        case 1 :
            return "rock";
            break;
        case 2 : 
            return "paper";
            break;
        case 3 : 
            return "scissors";
            break;
    }
    return null;
}

function play_round(user_choice, computer_choice) {
    //Ensures that user string is case insensitive
    user_choice = user_choice.toLowerCase();
    choice_message_element.textContent = `You chose ${user_choice} & the computer chose ${computer_choice}`;
    if(user_choice==computer_choice) {
        user_message_element.textContent = `It's a tie"`;
    } else if(user_choice=="rock" && computer_choice=="paper") {
        user_message_element.textContent = `Paper bears rock, computer wins`;
        score_count--;
    } else if(user_choice=="rock" && computer_choice=="scissors") {
        user_message_element.textContent = `Rock beats scissors, user wins`;
        score_count++;
    } else if(user_choice=="paper" && computer_choice=="rock") {
        user_message_element.textContent = `Paper beats rock, user wins`;
        score_count++;
    } else if(user_choice=="paper" && computer_choice=="scissors") {
        user_message_element.textContent = `Scissors beat paper, computer wins`;
        score_count--;
    } else if(user_choice=="scissors" && computer_choice=="rock") {
        user_message_element.textContent = `Rock beats scissors, computer wins`;
        score_count--;
    } else if(user_choice=="scissors" && computer_choice=="paper") {
        user_message_element.textContent = `Scissors beats paper, user wins`;
        score_count++;
    }
    else {
        user_message_element.textContent = `Select one of the options first.`;
    }
}

rock_btn.addEventListener('click', () => {
    selected_user_input = "Rock";
    choice_message_element.textContent = ``;
    user_message_element.textContent = `Rock was selected`;
}) 

scissors_btn.addEventListener('click',() => {
    selected_user_input = 'Scissors';
    choice_message_element.textContent = ``;
    user_message_element.textContent = `Scissors was selected`;
})

paper_btn.addEventListener('click', () => {
    selected_user_input = 'Paper';
    choice_message_element.textContent = ``;
    user_message_element.textContent = `Paper was selected`;
})


play_rnd_btn.addEventListener('click', () => {
    play_round(selected_user_input,get_computer_choice());
    console.log(score_count);
    score_count_element.textContent = `Score : ${score_count}`;

    if(score_count == 5) {
        user_message_element.textContent = `User wins`;
        rock_btn.setAttribute('disabled','');
        scissors_btn.setAttribute('disabled','');
        paper_btn.setAttribute('disabled','');
        play_rnd_btn.setAttribute('disabled','');
    } else if (score_count == -5) {
        user_message_element.textContent = `Computer Wins`;
        rock_btn.setAttribute('disabled','');
        scissors_btn.setAttribute('disabled','');
        paper_btn.setAttribute('disabled','');
        play_rnd_btn.setAttribute('disabled','');
    }
});

