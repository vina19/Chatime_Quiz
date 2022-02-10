//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "What is the recipe for a Regular size Signature Milk Tea with Topping ?",
        optionA: " 60% ice, 0.8 sugar, and 400 line Signature Milk Tea",
        optionB: " 80% ice, 1.0 sugar, and 700 line Signature Milk Tea",
        optionC: " 70% ice, 1.2 sugar, and 500 line Signature Milk Tea",
        optionD: " 80% ice, 0.8 sugar, and 400 line Signature Milk Tea",
        correctOption: "optionA"
    },

    {
        question: "Which Milk Teas CANNOT be made Hot ?",
        optionA: " Banana Milk Tea, Coconut Milk Tea, Lychee Milk Tea",
        optionB: " Strawberry Milk Tea, Banana Milk Tea, Lychee Milk Tea",
        optionC: " Strawberry Milk Tea, Banana Milk Tea, Lavender Milk Tea",
        optionD: " Strawberry Milk Tea, Honey Milk Tea, Lychee Milk Tea",
        correctOption: "optionB"
    },
      
    {
        question: "What is the recipe for a Regular Size Vanilla Chai Milk Tea ?",
        optionA: "70% ice, 0.8 sugar, 0.5 vanilla, 1.0 chai, 500 line black milk tea",
        optionB: "80% ice, 1.0 sugar, 1.0 vanilla, 0.5 chai, 500 line black milk tea",
        optionC: "100% ice, 0.8 sugar, 0.5 vanilla, 1.0 chai, 500 line black milk tea",
        optionD: "80% ice, 0.8 sugar, 0.5 vanilla, 1.0 chai, 500 line black milk tea",
        correctOption: "optionD"
    },

    {
        question: "Which tea base is used to make Chai Milk Tea, Coconut Milk Tea, Vanilla Chai Milk Tea, and Almond Milk Tea ?",
        optionA: "Roasted Tea",
        optionB: "Green Tea",
        optionC: "Black Tea",
        optionD: "Oolong Tea",
        correctOption: "optionC"
    },

    {
        question: "How much tea do you use for an iced regular and large size Oolong milk tea?",
        optionA: "200cc for regular and 250cc for large size",
        optionB: "100cc for regular and 150cc for large size",
        optionC: "50cc for regular and 100cc for large size",
        optionD: "150cc for regular and 200cc for large size",
        correctOption: "optionD"
    },

    {
        question: "Which is the best statement to describe the difference between Matcha and Jasmine flavor?",
        optionA: "Matcha is stronger and earthier. Jasmine is lighter and floral",
        optionB: "Matcha is stronger and toasty. Jasmine is lighter and floral",
        optionC: "Matcha is stronger and earthier. Jasmine is lighter and fruity",
        optionD: "Matcha is stronger and sour. Jasmine is lighter and earthier",
        correctOption: "optionA"
    },

    {
        question: "Describe the flavor and texture of the Taro Milk Tea:",
        optionA: "Vanilla flavor, smooth and watery texture",
        optionB: "Vanilla flavor, smooth and thick texture",
        optionC: "Vanilla flavor, thick and grainy texture",
        optionD: "Vanilla flavor, watery and grainy texture",
        correctOption: "optionC"
    },

    {
        question: "When making an Iced and hot Coconut Milk Tea, what temperature do you heat the tea to?",
        optionA: "Iced: 104F and Hot: 140F",
        optionB: "Iced: 150F and Hot: 170F",
        optionC: "Iced: 110F and Hot: 150F",
        optionD: "Iced: 140F and Hot: 170F",
        correctOption: "optionA"
    },

    {
        question: "Which option is correct?",
        optionA: "Milk Teas use almond milk",
        optionB: "The powder used to make Milk Teas is completely Dairy-free",
        optionC: "Milk Teas does not use any powder",
        optionD: "The powder used to make Milk Teas has a bit of milk extract",
        correctOption: "optionD"
    },

    {
        question: "Which option is correct?",
        optionA: "You can add any type of mix ins to Hot and Cold drinks",
        optionB: "You cannot add any mix ins to Hot and Cold drinks",
        optionC: "You can add jellies to Hot and Cold drinks",
        optionD: "You can add Pearls, Pudding, and Whipped Cream to Hot and Cold drinks",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            //document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            //document.getElementById(wrongLabelId).style.backgroundColor = "red"
            //document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}